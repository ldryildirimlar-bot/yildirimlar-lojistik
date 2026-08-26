import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/services/ServiceHero";
import ArticleBody from "@/components/blog/ArticleBody";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { BLOG_ARTICLES, getBlogArticle } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    image: article.image,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServiceHero
          kicker="LOJİSTİK REHBERİ"
          heading={article.title}
          intro={article.excerpt}
          image={article.image}
        />
        <ArticleBody sections={article.sections} conclusion={article.conclusion} />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
