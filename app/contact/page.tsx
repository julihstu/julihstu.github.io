import { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Julekha Khatun",
  description:
    "Open to digital marketing, social media strategy, and project coordination roles. Reach out via email or phone.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-0">
      <Contact />
    </div>
  );
}
