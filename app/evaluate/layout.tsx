import { NavHeader } from "@/components/nav-header";
import type React from "react";

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#f6f3f3]">{children}</div>;
}
