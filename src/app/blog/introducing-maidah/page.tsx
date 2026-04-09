import { IntroducingMaidahContent } from "@/components/introducing-maidah-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introducing Maidah",
  description:
    "Today we're announcing Maidah. A permanent endowment fund.",
  openGraph: {
    title: "Introducing Maidah",
    description:
      "Today we're announcing Maidah. A permanent endowment fund.",
    type: "article",
    authors: ["Ayman Hassen"],
  },
};

export default function IntroducingMaidahPage() {
  return <IntroducingMaidahContent />;
}
