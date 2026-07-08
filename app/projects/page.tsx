import { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Julekha Khatun — Portfolio",
  description:
    "Social media page management, Meta ad campaigns, SEO content writing, and brand identity work across five brand pages with a 30K+ combined audience.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-0">
      <Projects showAll />
    </div>
  );
}
