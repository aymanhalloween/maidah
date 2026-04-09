import { BlogContent } from "@/components/blog-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing from Maidah.",
  openGraph: {
    title: "Writing | Maidah",
    description: "Writing from Maidah.",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
