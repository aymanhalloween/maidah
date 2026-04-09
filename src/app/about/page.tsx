import { AboutContent } from "@/components/about-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maidah is a permanent endowment fund for Muslims in the West.",
  openGraph: {
    title: "About | Maidah",
    description:
      "Maidah is a permanent endowment fund for Muslims in the West.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
