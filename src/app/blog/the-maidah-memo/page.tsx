import { MaidahMemoContent } from "@/components/maidah-memo-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Maidah Memo",
  description:
    "The founding memo for Maidah, a permanent endowment fund for Muslims in the West.",
  openGraph: {
    title: "The Maidah Memo",
    description:
      "The founding memo for Maidah, a permanent endowment fund for Muslims in the West.",
    type: "article",
    authors: ["Ayman Hassen"],
  },
};

export default function MaidahMemoPage() {
  return <MaidahMemoContent />;
}
