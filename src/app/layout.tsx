import type { Metadata } from "next";
import { Geist, Gloock } from "next/font/google";
import { Header } from "@/components/global/Header/Header";
import { Footer } from "@/components/global";
import "./layout.scss";

const geistFont = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
const gloockFont = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Suri",
  description: "Hackaton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistFont.variable} ${gloockFont.variable} page_container`}
        style={{ position: "static" }}
      >
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
