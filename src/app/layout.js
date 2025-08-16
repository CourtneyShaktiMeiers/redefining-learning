// src/app/layout.js
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Redefining Learning",
  description: "Child-led, relationship-centered learning with Courtney Meiers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
