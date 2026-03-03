/**
 * API endpoint for sending emails via Resend
 * 
 * This file is deployed as a Vercel serverless function.
 * 
 * Environment variables required (set in Vercel Dashboard → Settings → Environment Variables):
 * - RESEND_API_KEY: Your Resend API key
 * - TO_EMAIL: The email address to receive form submissions
 * - FROM_EMAIL: The sender email address
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

interface EmailRequest {
    type: "contact" | "enquiry";
    data: {
        name: string;
        email: string;
        phone?: string;
        subject?: string;
        message?: string;
        state?: string;
    };
}

/**
 * Contact form email template
 */
function getContactEmailHTML(data: EmailRequest["data"]): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #E63946 0%, #D41C25 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
    </div>
    
    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
        <h2 style="color: #E63946; margin-top: 0;">Contact Information</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${data.email}" style="color: #E63946; text-decoration: none;">${data.email}</a>
                </td>
            </tr>
            ${data.phone ? `
            <tr>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${data.phone}" style="color: #E63946; text-decoration: none;">${data.phone}</a>
                </td>
            </tr>
            ` : ""}
            ${data.subject ? `
            <tr>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0;">${data.subject}</td>
            </tr>
            ` : ""}
        </table>
        
        ${data.message ? `
        <div style="margin-top: 20px;">
            <h3 style="color: #E63946; margin-bottom: 10px;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #E63946; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
        </div>
        ` : ""}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from the RightPath Saarthi contact form.</p>
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} RightPath Saarthi. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
	`.trim();
}

/**
 * Enquiry form email template
 */
function getEnquiryEmailHTML(data: EmailRequest["data"]): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Enquiry Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #E63946 0%, #D41C25 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">New Enquiry Form Submission</h1>
    </div>
    
    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
        <h2 style="color: #E63946; margin-top: 0;">Student Information</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">${data.name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${data.email}" style="color: #E63946; text-decoration: none;">${data.email}</a>
                </td>
            </tr>
            ${data.phone ? `
            <tr>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${data.phone}" style="color: #E63946; text-decoration: none;">${data.phone}</a>
                </td>
            </tr>
            ` : ""}
            ${data.state ? `
            <tr>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-weight: bold;">State:</td>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0;">${data.state}</td>
            </tr>
            ` : ""}
        </table>
        
        <div style="background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; border-radius: 4px; margin-top: 20px;">
            <p style="margin: 0; color: #856404;">
                <strong>Next Steps:</strong> Please contact this student within 24 hours to provide personalized guidance.
            </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from the RightPath Saarthi enquiry form.</p>
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} RightPath Saarthi. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
	`.trim();
}

/**
 * Vercel Serverless Function handler
 * 
 * On Vercel, req.body is automatically parsed from JSON.
 * Locally, the Vite middleware adapter handles the conversion.
 */
export default async function handler(
    req: VercelRequest,
    res: VercelResponse
): Promise<void> {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        // Vercel auto-parses JSON body into req.body
        const body: EmailRequest = req.body;

        // Validate required fields
        if (!body.data?.name || !body.data?.email) {
            res.status(400).json({ error: "Name and email are required" });
            return;
        }

        // Validate Resend API key
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error("Missing RESEND_API_KEY environment variable");
            res.status(500).json({ error: "Email service not configured" });
            return;
        }

        const toEmail = process.env.TO_EMAIL ?? "";
        const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

        // Initialize Resend client
        const resend = new Resend(resendApiKey);

        // Determine email content based on type
        const subject =
            body.type === "contact"
                ? `New Contact Form Submission from ${body.data.name}`
                : `New Enquiry Form Submission from ${body.data.name}`;

        const html =
            body.type === "contact"
                ? getContactEmailHTML(body.data)
                : getEnquiryEmailHTML(body.data);

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: body.data.email,
            subject: subject,
            html: html,
        });

        if (error) {
            console.error("Resend error:", error);
            res.status(500).json({ error: "Failed to send email", details: error });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            id: data?.id,
        });
    } catch (error) {
        console.error("Error processing email request:", error);
        res.status(500).json({
            error: "Internal server error",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
}

