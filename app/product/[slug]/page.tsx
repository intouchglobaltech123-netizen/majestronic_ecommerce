import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Store from "../../../components/Store";
import products from "../../../lib/products";

type Props = { params: Promise<{ slug: string }> };

const find = (slug: string) => {
  const id = parseInt(slug, 10);
  return Number.isInteger(id) && products[id] ? { id, p: products[id] } : null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = find(slug);
  if (!f) return { title: "Product not found – MAJESTRONICZ" };
  const [name, desc, s] = f.p;
  const url = `/product/${f.id}-${s}`;
  return {
    title: `${name} – MAJESTRONICZ`,
    description: desc,
    alternates: { canonical: url },
    openGraph: { type: "website", title: name, description: desc, url },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!find(slug)) notFound();
  return <Store />;
}
