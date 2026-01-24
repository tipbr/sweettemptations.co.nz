import Footer from "@/app/_components/footer";
import Header from "@/app/_components/layout/Header";
import NotificationBar from "@/app/_components/layout/NotificationBar";
import type { Metadata } from "next";
import cn from "classnames";

import "./globals.css";

// TODO: Add custom fonts after purchasing from MyFonts
// See FONTS.md for installation instructions
// Once fonts are added, uncomment the font imports and update the className

export const metadata: Metadata = {
  title: "Sweet Temptations - Boutique Cakery | Whanganui, New Zealand",
  description: "Sweet Temptations is a boutique cakery in Whanganui, New Zealand. We create personalised cakes, cupcakes, cookies and much more for weddings, birthdays, and all special occasions.",
  openGraph: {
    title: "Sweet Temptations - Boutique Cakery",
    description: "Personalised cakes, cupcakes, and cookies for all occasions in Whanganui, New Zealand",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#ED9BB8"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ED9BB8" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#5DBFBD" />
      </head>
      <body
        className={cn("font-primary text-text-primary bg-white")}
      >
        <NotificationBar />
        <Header />
        {/* Add top padding to account for fixed header and notification bar */}
        <div className="min-h-screen pt-[15rem] md:pt-[14rem]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
