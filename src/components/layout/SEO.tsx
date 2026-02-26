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
		"@type": ["EducationalOrganization", "LocalBusiness"],
		name: seoConfig.organization.name,
		description: seoConfig.organization.description,
		url: seoConfig.site.url,
		logo: seoConfig.organization.logo,
		foundingDate: seoConfig.organization.foundingDate,
		contactPoint: {
			"@type": "ContactPoint",
			telephone: seoConfig.contact.phone,
			email: seoConfig.contact.email,
			contactType: "Customer Service",
			areaServed: seoConfig.organization.areaServed || "IN",
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
			streetAddress: seoConfig.contact.address?.streetAddress || "",
			addressLocality: seoConfig.contact.address?.addressLocality || "Noida",
			addressRegion: seoConfig.contact.address?.addressRegion || "Uttar Pradesh",
			postalCode: seoConfig.contact.address?.postalCode || "",
			addressCountry: seoConfig.contact.address?.addressCountry || "IN",
		},
		areaServed: {
			"@type": "Country",
			name: "India",
		},
		...(seoConfig.organization.serviceType && {
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Educational Services",
				itemListElement: seoConfig.organization.serviceType.map((service: string, index: number) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: service,
					},
					position: index + 1,
				})),
			},
		}),
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
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:phone_number" content={seoConfig.contact.phone} />
			<meta property="og:email" content={seoConfig.contact.email} />
			<meta property="business:contact_data:street_address" content={seoConfig.contact.address?.streetAddress || "Noida"} />
			<meta property="business:contact_data:locality" content={seoConfig.contact.address?.addressLocality || "Noida"} />
			<meta property="business:contact_data:region" content={seoConfig.contact.address?.addressRegion || "Uttar Pradesh"} />
			<meta property="business:contact_data:country_name" content="India" />
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
			<meta name="theme-color" content="#E63946" />
			<meta name="format-detection" content="telephone=yes" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

			{/* Geo Tags for Local SEO */}
			<meta name="geo.region" content="IN-UP" />
			<meta name="geo.placename" content="Noida, Uttar Pradesh, India" />
			<meta name="geo.position" content="28.5355;77.3910" />
			<meta name="ICBM" content="28.5355, 77.3910" />

			{/* Google Site Verification */}
			{seoConfig.verification?.google && (
				<meta name="google-site-verification" content={seoConfig.verification.google} />
			)}

			{/* Additional Meta Tags */}
			<meta name="author" content="RightPath Saarthi" />
			<meta name="copyright" content="RightPath Saarthi" />
			<meta name="language" content="English" />
			<meta name="revisit-after" content="7 days" />
			<meta name="distribution" content="global" />
			<meta name="rating" content="general" />

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
			{/* LocalBusiness Schema for Better Local SEO */}
			{location.pathname === "/" && (
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						name: seoConfig.organization.name,
						image: seoConfig.organization.logo,
						"@id": seoConfig.site.url,
						url: seoConfig.site.url,
						telephone: seoConfig.contact.phone,
						email: seoConfig.contact.email,
						address: {
							"@type": "PostalAddress",
							streetAddress: seoConfig.contact.address?.streetAddress || "Noida",
							addressLocality: seoConfig.contact.address?.addressLocality || "Noida",
							addressRegion: seoConfig.contact.address?.addressRegion || "Uttar Pradesh",
							postalCode: seoConfig.contact.address?.postalCode || "",
							addressCountry: seoConfig.contact.address?.addressCountry || "IN",
						},
						geo: {
							"@type": "GeoCoordinates",
							latitude: "28.5355",
							longitude: "77.3910",
						},
						openingHoursSpecification: {
							"@type": "OpeningHoursSpecification",
							dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
							opens: "09:00",
							closes: "18:00",
						},
						priceRange: "$$",
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "4.9",
							reviewCount: "150",
						},
					})}
				</script>
			)}
		</Helmet>
	);
};
