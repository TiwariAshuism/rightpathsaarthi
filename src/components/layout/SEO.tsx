import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "@tanstack/react-router";
import seoConfig from "../../data/seo.json";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
	imageAlt?: string;
	type?: "website" | "article";
	author?: string;
	publishedTime?: string;
	modifiedTime?: string;
	noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
	title,
	description,
	keywords,
	image,
	imageAlt,
	type = "website",
	author,
	publishedTime,
	modifiedTime,
	noindex = false,
}) => {
	const location = useLocation();
	const currentUrl = `${seoConfig.site.url}${location.pathname}`;

	// Use provided values or fall back to defaults
	const pageTitle = title
		? `${title} | ${seoConfig.site.name}`
		: seoConfig.defaultMeta.title;
	const pageDescription = description || seoConfig.defaultMeta.description;
	const pageKeywords = keywords || seoConfig.defaultMeta.keywords;
	const pageImage = image || seoConfig.defaultMeta.image;
	const pageImageAlt = imageAlt || seoConfig.defaultMeta.imageAlt;

	// Structured Data (JSON-LD) for Organization
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "EducationalOrganization",
		name: seoConfig.organization.name,
		description: seoConfig.organization.description,
		url: seoConfig.site.url,
		logo: seoConfig.organization.logo,
		foundingDate: seoConfig.organization.foundingDate,
		contactPoint: {
			"@type": "ContactPoint",
			telephone: seoConfig.contact.phone,
			contactType: "Customer Service",
			areaServed: "IN",
			availableLanguage: ["English", "Hindi"],
		},
		sameAs: [
			seoConfig.social.facebook,
			seoConfig.social.twitter,
			seoConfig.social.instagram,
			seoConfig.social.linkedin,
		],
		address: {
			"@type": "PostalAddress",
			addressCountry: "IN",
		},
	};

	// Structured Data for WebSite
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: seoConfig.site.name,
		url: seoConfig.site.url,
		description: seoConfig.site.description,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${seoConfig.site.url}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};

	// Breadcrumb Schema
	const pathSegments = location.pathname.split("/").filter(Boolean);
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: seoConfig.site.url,
			},
			...pathSegments.map((segment, index) => ({
				"@type": "ListItem",
				position: index + 2,
				name: segment.charAt(0).toUpperCase() + segment.slice(1),
				item: `${seoConfig.site.url}/${pathSegments.slice(0, index + 1).join("/")}`,
			})),
		],
	};

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<html lang="en" />
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="keywords" content={pageKeywords} />
			{author && <meta name="author" content={author} />}

			{/* Robots Meta */}
			{noindex ? (
				<meta name="robots" content="noindex, nofollow" />
			) : (
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
			)}

			{/* Canonical URL */}
			<link rel="canonical" href={currentUrl} />

			{/* Open Graph Meta Tags */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:site_name" content={seoConfig.site.name} />
			<meta property="og:locale" content={seoConfig.site.locale} />
			<meta property="og:image" content={pageImage} />
			<meta property="og:image:alt" content={pageImageAlt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			{publishedTime && <meta property="article:published_time" content={publishedTime} />}
			{modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={seoConfig.social.twitter} />
			<meta name="twitter:creator" content={seoConfig.social.twitter} />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={pageImage} />
			<meta name="twitter:image:alt" content={pageImageAlt} />

			{/* Additional SEO Meta Tags */}
			<meta name="theme-color" content="#14B8A6" />
			<meta name="format-detection" content="telephone=no" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />

			{/* Geo Tags for Local SEO */}
			<meta name="geo.region" content="IN" />
			<meta name="geo.placename" content="India" />

			{/* Structured Data (JSON-LD) */}
			<script type="application/ld+json">
				{JSON.stringify(organizationSchema)}
			</script>
			<script type="application/ld+json">
				{JSON.stringify(websiteSchema)}
			</script>
			{pathSegments.length > 0 && (
				<script type="application/ld+json">
					{JSON.stringify(breadcrumbSchema)}
				</script>
			)}
		</Helmet>
	);
};
