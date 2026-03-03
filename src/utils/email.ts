/**
 * Email utility functions for sending emails via Resend API
 */

interface EmailData {
	name: string;
	email: string;
	phone?: string;
	subject?: string;
	message?: string;
	state?: string;
}

interface EmailResponse {
	success: boolean;
	message: string;
}

/**
 * Sends a contact form email via Resend API
 *
 * @param data - The form data containing name, email, phone, subject, and message
 * @returns Promise with success status and message
 */
export async function sendContactEmail(
	data: EmailData
): Promise<EmailResponse> {
	try {
		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				type: "contact",
				data,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to send email");
		}

		// Parse response to ensure valid JSON
		await response.json();
		return {
			success: true,
			message: "Email sent successfully!",
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Failed to send email. Please try again later.",
		};
	}
}

/**
 * Sends an enquiry form email via Resend API
 *
 * @param data - The form data containing name, email, phone, and state
 * @returns Promise with success status and message
 */
export async function sendEnquiryEmail(
	data: EmailData
): Promise<EmailResponse> {
	try {
		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				type: "enquiry",
				data,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to send email");
		}

		// Parse response to ensure valid JSON
		await response.json();
		return {
			success: true,
			message: "Enquiry submitted successfully!",
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: "Failed to submit enquiry. Please try again later.",
		};
	}
}

/**
 * Email template for contact form submissions
 */
export function getContactEmailTemplate(data: EmailData): string {
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
            ${
							data.phone
								? `
            <tr>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${data.phone}" style="color: #E63946; text-decoration: none;">${data.phone}</a>
                </td>
            </tr>
            `
								: ""
						}
            ${
							data.subject
								? `
            <tr>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Subject:</td>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0;">${data.subject}</td>
            </tr>
            `
								: ""
						}
        </table>
        
        ${
					data.message
						? `
        <div style="margin-top: 20px;">
            <h3 style="color: #E63946; margin-bottom: 10px;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #E63946; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
        </div>
        `
						: ""
				}
        
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
 * Email template for enquiry form submissions
 */
export function getEnquiryEmailTemplate(data: EmailData): string {
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
            ${
							data.phone
								? `
            <tr>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background: white; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${data.phone}" style="color: #E63946; text-decoration: none;">${data.phone}</a>
                </td>
            </tr>
            `
								: ""
						}
            ${
							data.state
								? `
            <tr>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; font-weight: bold;">State:</td>
                <td style="padding: 10px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0;">${data.state}</td>
            </tr>
            `
								: ""
						}
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
