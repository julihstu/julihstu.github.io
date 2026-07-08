import { Metadata } from "next";
import Experience from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience | Julekha Khatun — Career Journey",
  description:
    "2+ years across Holy Gift and Wazih, managing Meta ad campaigns, project coordination, and SEO-optimized content for social brand pages.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16 md:pt-0">
      <Experience />
    </div>
  );
}
