import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import "@fontsource/montserrat";
import ClientLayout from "./ui/root-layout";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: "Torneria Arambillete",
   description: "Torneria Arambillete.",
  keywords: ["Torneria","Arambillete","Torneria Arambillete","Torneria Arambillete Uruguay","Torneria Mecanica","Fresados","Matricería","Rectificado plano","Mantenimeinto Industrial"],
  authors: [{ name: "Torneria Arambillete" }],
  openGraph: {
    title: "Torneria Arambillete",
    description: "Torneria Arambillete.",
    url: "https://torneriaarambillete.com.uy",
    siteName: "Torneria Arambillete",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Torneria Arambillete"
      }
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    title: "Torneria Arambillete",
    description: "Torneria Arambillete.",
    images: ["/logo.png"],
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
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
