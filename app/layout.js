import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Imtiaz Nayeem Shawon",
  description: "A self learned Full stack web developer",
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
