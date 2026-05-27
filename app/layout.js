import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Imtiaz Nayeem Shawon | AI Engineer & SaaS Product Builder",
  description: "I build SaaS and AI products that solve real business problems. AI engineer, full-stack developer, and systems thinker focused on MVPs, agentic AI, automation, and scalable software.",
  keywords: "AI Engineer, SaaS Developer, Full-Stack Developer, AI Product Builder, Agentic AI Developer, MVP Developer, Next.js Developer, AI Automation Developer, RAG Developer, LangGraph Developer, Software Engineer Bangladesh, Remote AI Engineer, SaaS Product Development",
};

import Navbar from "./(components)/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
