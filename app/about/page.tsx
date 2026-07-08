import { Metadata } from "next";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "About | Julekha Khatun — Digital Marketer & Project Coordinator",
  description:
    "2+ years creating SEO-optimized content, running Meta ad campaigns, and coordinating marketing projects across lifestyle, gifting, and religious niches.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-0">
      <About />
      <Education />
    </div>
  );
}
