import { HiPhone, HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="py-12 bg-neutral text-neutral-content">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Company Name */}
          <h3 className="text-2xl font-bold mb-2">BMJ Contracting</h3>
          <p className="text-neutral-content/70 mb-6">
            General Contractor • Vaughan, ON
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <a
              href="tel:4162194163"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <HiPhone className="w-5 h-5" />
              (416) 219-4163
            </a>
            <a
              href="mailto:info@bmjcontracting.ca"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <HiEnvelope className="w-5 h-5" />
              info@bmjcontracting.ca
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-neutral-content/20 mb-6"></div>

          {/* Copyright */}
          <p className="text-neutral-content/50 text-sm">
            © {new Date().getFullYear()} BMJ Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
