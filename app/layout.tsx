
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Stephen Maikara Mogusu | Professional Portfolio",
  description:
    "Professional profile of Stephen Maikara Mogusu, Digital Literacy and Computing Teacher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
