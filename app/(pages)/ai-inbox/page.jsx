/* Hidden service page: /ai-inbox
   Not linked from the navbar, footer or home page, and kept out of search results (noindex).
   Content lives in ./data.js, layout in ./InboxPage.jsx, extra styles in ./inbox.css. */

import localFont from "next/font/local";
import InboxPage from "./InboxPage";

const grotesk = localFont({ src: "../../(components)/imtiazz/fonts/SpaceGrotesk.ttf", weight: "300 700", variable: "--font-grotesk", display: "swap" });
const iserif = localFont({ src: "../../(components)/imtiazz/fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic", variable: "--font-iserif", display: "swap" });
const jbmono = localFont({ src: "../../(components)/imtiazz/fonts/JetBrainsMono.ttf", weight: "100 800", variable: "--font-jbmono", display: "swap" });

export const metadata = {
  title: "AI Inbox Assistant for Med Spas | Imtiaz Nayeem Shawon",
  description:
    "An AI assistant that answers Instagram DMs, Messenger, WhatsApp, website forms and email in seconds, books consultations and logs every lead. Built and managed by Imtiaz.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function Page() {
  return <InboxPage fontVars={`${grotesk.variable} ${iserif.variable} ${jbmono.variable}`} />;
}
