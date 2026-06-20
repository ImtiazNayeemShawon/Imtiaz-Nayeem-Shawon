import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Imtiaz Nayeem Shawon | AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer & Full-Stack Developer with 5+ years building production AI systems — RAG pipelines, multi-agent workflows (LangGraph), LLM-integrated platforms, scalable APIs, and RBAC-secured backends.",
  keywords:
    "AI Engineer, Full-Stack Developer, LangGraph, RAG, LLM, Python, FastAPI, NestJS, React, Next.js, Bangladesh, Remote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
