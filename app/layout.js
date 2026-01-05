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
  title: "BMJ Contracting | General Contractor in Vaughan, Ontario",
  description:
    "Professional general contracting services in Vaughan, Ontario. Specializing in renovations, additions, kitchens, bathrooms, and commercial construction.",
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
