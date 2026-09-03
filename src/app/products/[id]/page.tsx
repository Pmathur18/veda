import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products-data";
import ProductDetailClient from "./ProductDetailClient";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const productMetaMap: Record<
  string,
  {
    title: string;
    description: string;
    canonical: string;
    keywords?: string[];
  }
> = {
  "psyllium-husk": {
    title: "Psyllium Husk Exporter India | 85–99% Purity Grades | VEDA IMPEX",
    description:
      "Bulk Psyllium Husk (Plantago ovata) from Rajasthan & Gujarat. 85% to 99% purity grades, min 35-50 ml/g swell volume, COA-verified. Get a container quote.",
    canonical: "https://www.vedaimpex.com/products/psyllium-husk",
    keywords: [
      "Psyllium Husk exporter India",
      "bulk Psyllium Husk Plantago ovata",
      "99% purity Psyllium Husk",
      "Indian Psyllium Husk supplier",
      "Psyllium Husk container quote"
    ]
  },
  "psyllium-powder": {
    title: "Psyllium Husk Powder Exporter | 40–100 Mesh | VEDA IMPEX",
    description:
      "Bulk Psyllium Husk Powder, 40 to 100 mesh, 95–99% purity. Sourced from Rajasthan & Gujarat, ideal for food, baking, and pharma manufacturing. Request a sample.",
    canonical: "https://www.vedaimpex.com/products/psyllium-powder",
    keywords: [
      "Psyllium Husk Powder exporter",
      "40 to 100 mesh Psyllium Powder",
      "bulk Psyllium Powder India",
      "pharma grade Psyllium Powder",
      "food grade Psyllium Powder supplier"
    ]
  },
  "senna-leaves": {
    title: "Senna Leaves Exporter India | Cassia Angustifolia | VEDA IMPEX",
    description:
      "Premium Senna Leaves from Rajasthan, 1.5–3.0% Sennosides. Prime Cut, No. 3/4, and Leaf Powder grades for teas, extracts, and milling. Bulk export ready.",
    canonical: "https://www.vedaimpex.com/products/senna-leaves",
    keywords: [
      "Senna Leaves exporter India",
      "Cassia angustifolia bulk exporter",
      "Prime Cut Senna Leaves",
      "Senna Leaf Powder bulk",
      "Sennosides herbal tea supplier"
    ]
  },
  "senna-pods": {
    title: "Senna Pods Exporter India | Hand-Picked | VEDA IMPEX",
    description:
      "Hand-picked, whole unbroken Senna Pods, 2.5–3.5% Sennosides, from Rajasthan. Woven bag or carton packaging for global botanical buyers. Get a quote.",
    canonical: "https://www.vedaimpex.com/products/senna-pods",
    keywords: [
      "Senna Pods exporter India",
      "hand-picked Senna Pods bulk",
      "Cassia angustifolia pods",
      "whole unbroken Senna Pods",
      "botanical export India"
    ]
  }
};

export function generateStaticParams() {
  return productsData.map((p) => ({
    id: p.id
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const meta = productMetaMap[id];
  const product = productsData.find((p) => p.id === id);

  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      alternates: {
        canonical: meta.canonical
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: meta.canonical,
        siteName: "VEDA IMPEX",
        locale: "en_US",
        type: "website",
        images: product ? [{ url: `https://www.vedaimpex.com${product.imageUrl}` }] : []
      }
    };
  }

  if (product) {
    const fallbackTitle = `${product.name} Exporter India | VEDA IMPEX`;
    const canonical = `https://www.vedaimpex.com/products/${id}`;
    return {
      title: fallbackTitle,
      description: product.description,
      alternates: {
        canonical
      },
      openGraph: {
        title: fallbackTitle,
        description: product.description,
        url: canonical,
        siteName: "VEDA IMPEX",
        locale: "en_US",
        type: "website"
      }
    };
  }

  return {
    title: "Product Not Found | VEDA IMPEX"
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.vedaimpex.com${product.imageUrl}`,
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "VEDA IMPEX"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "itemCondition": "https://schema.org/NewCondition",
      "offeredBy": {
        "@type": "Wholesaler",
        "name": "VEDA IMPEX",
        "url": "https://www.vedaimpex.com"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Botanical Name",
        "value": product.botanicalName
      },
      {
        "@type": "PropertyValue",
        "name": "Description",
        "value": product.description
      }
    ]
  };

  return (
    <>
      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
