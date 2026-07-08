import { Metadata } from "next";
import Certifications from "@/components/sections/Certifications";

export const metadata: Metadata = {
  title: "Training & Certifications | Julekha Khatun",
  description:
    "ICT Division web design training and sales skills certification covering front-end web technologies and modern prospecting methods.",
};

export default function CertificationsPage() {
  return (
    <div className="pt-16 md:pt-0">
      <Certifications />
    </div>
  );
}
