import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PAFTE | Philippine Association for Teachers & Educators",
  description:
    "Philippine Association for Teachers and Educators — a five-decade strong association serving teachers and teacher educators since 1968.",
  icons: {
    icon: [
      { url: "/pafteicon.png", type: "image/png" },
    ],
    shortcut: ["/pafteicon.png"],
    apple: [
      { url: "/pafteicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}