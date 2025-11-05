import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ClientWrapper from "@/components/client-wrapper";
import FloatingActions from "@/components/contact-buttons";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "CTS - Chiller Maintenance Company | HVAC Experts in UAE",
  description:
    "CTS - a trusted chiller maintenance company in UAE, offering expert HVAC, AC, and chiller services with reliable solutions for every cooling need.",
  keywords:
    "chiller, cold room, water chiller, water cooler, shell heat exchanger,heat exchanger, heat pump, PHE, cooling tower, ice block machines, air curtain, AC rentals, AMC of chiller, AMC of AC, compressor overhauling, chiller supplies, chiller manufacturer, cold room repair, tank cooling system, chiller services UAE, chiller services Dubai, CTS, Chiller technical solutions, drchiller",
  authors: [{ name: "CTS - Chiller Technical Services L.L.C" }],
  robots: "index, follow",
  icons: {
    icon: "https://www.drchiller.com/logo.png",
  },
  openGraph: {
    title: "CTS - Chiller Technical Services L.L.C | HVAC & Chiller Experts in UAE",
    description:
      "Expert solutions in water chillers, cold rooms, heat exchangers, AC units, maintenance services and renting services in the UAE.",
    url: "https://www.drchiller.com/",
    siteName: "CTS - Chiller Technical Services L.L.C",
    images: ["https://www.drchiller.com/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTS - Chiller Technical Services L.L.C | HVAC & Chiller Experts in UAE",
    description:
      "Expert solutions in water chillers, cold rooms, heat exchangers, AC units, maintenance services and renting services in the UAE.",
    images: ["https://www.drchiller.com/logo.png"],
  },
  metadataBase: new URL("https://www.drchiller.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="0HV39_CtxMC8EHOmv2EiFIIJAOGcZkZLZPP9DLug3ws" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        <ClientWrapper />
        {children}
        <FloatingActions />
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-27JXZLQEQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27JXZLQEQ4');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CTS - Chiller Technical Services L.L.C",
              image: "https://www.drchiller.com/logo.png",
              logo: "https://www.drchiller.com/logo.png",
              "@id": "https://www.drchiller.com",
              url: "https://www.drchiller.com",
              telephone: "+97167434537",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industrial Area #2",
                addressLocality: "Ajman",
                addressRegion: "Ajman",
                addressCountry: "UAE",
              },
              openingHours: "Mo-Sa 08:00-17:30",
            }),
          }}
        />
      </body>
    </html>
  );
}
