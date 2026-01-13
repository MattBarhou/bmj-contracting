import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "BMJ Contracting",
    template: "%s | BMJ Contracting",
  },
  description:
    "General contractor in Vaughan, Ontario. Renovations, kitchens, bathrooms, basements, and commercial construction across Vaughan & the GTA.",
  applicationName: "BMJ Contracting",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "BMJ Contracting",
    title: "BMJ Contracting | General Contractor in Vaughan, Ontario",
    description:
      "General contractor in Vaughan, Ontario. Renovations, kitchens, bathrooms, basements, and commercial construction across Vaughan & the GTA.",
    images: [
      {
        url: "/bmj_logo.png",
        width: 1024,
        height: 1024,
        alt: "BMJ Contracting logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMJ Contracting | General Contractor in Vaughan, Ontario",
    description:
      "General contractor in Vaughan, Ontario. Renovations, kitchens, bathrooms, basements, and commercial construction across Vaughan & the GTA.",
    images: ["/bmj_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="contractor">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
