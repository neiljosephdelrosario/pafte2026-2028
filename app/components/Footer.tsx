import Link from "next/link";
import { Mail, Phone, MapPin, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F4B] text-white">
      <div className="h-1 gold-bar" />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold text-[#C9A84C] mb-3">PAFTE</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Philippine Association for Teachers &amp; Educators, Inc. — a five-decade strong association of teachers and teacher educators since January 30, 1968.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.youtube.com/channel/UC9pAzCoKakeCDHijJ6HOtwA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors hover:text-[#0B1F4B]"
              aria-label="YouTube"
            >
              <Play size={16} />
            </a>
            <a
              href="https://www.facebook.com/PAFTE.NATIONAL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors hover:text-[#0B1F4B]"
              aria-label="Facebook"
            >
              {/* Inline Facebook SVG to avoid importing a non-existing icon from lucide-react */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-current"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.34V12h2.37l-.38 2.9h-1.99v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest text-[#C9A84C] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["Home", "/"],
              ["About PAFTE", "/about"],
              ["Committees", "/committees"],
              ["Officers & Directory", "/officers"],
              ["Resources", "/resources"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-[#C9A84C] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest text-[#C9A84C] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
              <span>10 Boston Street, Brgy. Kaunlaran, Cubao, Quezon City</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-[#C9A84C] shrink-0" />
              <a href="mailto:info@pafte.org" className="hover:text-[#C9A84C]">info@pafte.org</a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-[#C9A84C] shrink-0" />
              <span>(02) 8721 2715 / (02) 8723 1560</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-[#C9A84C] shrink-0" />
              <span>09185375190</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © 2026 PAFTE. Philippine Association for Teachers &amp; Educators, Inc. All rights reserved.
      </div>
    </footer>
  );
}