"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "National Officers", href: "/officers?tab=national" },
      { label: "Regional Officers", href: "/officers?tab=regional" },
    ],
  },
  {
    label: "Committees",
    href: "/conferences",
  },
  {
    label: "Work & Financial Plan",
    href: "/work-financial-plan",
  },
  {
    label: "Directory",
    href: "/officers",
    children: [
      { label: "— Luzon —", href: "#", disabled: true },
      { label: "CAR - Cordillera Administrative Region", href: "/officers?region=CAR&tab=regional" },
      { label: "NCR - National Capital Region", href: "/officers?region=NCR&tab=regional" },
      { label: "Region I - Ilocos Region", href: "/officers?region=Region%20I&tab=regional" },
      { label: "Region III - Central Luzon", href: "/officers?region=Region%20III&tab=regional" },
      { label: "Region IV-A - CALABARZON", href: "/officers?region=Region%20IV-A&tab=regional" },
      { label: "Region IV-B - MIMAROPA", href: "/officers?region=Region%20IV-B&tab=regional" },
      { label: "Region V - Bicol Region", href: "/officers?region=Region%20V&tab=regional" },
      { label: "— Visayas —", href: "#", disabled: true },
      { label: "NIR - Negros Island Region", href: "/officers?region=NIR&tab=regional" },
      { label: "Region VI - Western Visayas", href: "/officers?region=Region%20VI&tab=regional" },
      { label: "Region VII - Central Visayas", href: "/officers?region=Region%20VII&tab=regional" },
      { label: "Region VIII - Eastern Visayas", href: "/officers?region=Region%20VIII&tab=regional" },
      { label: "— Mindanao —", href: "#", disabled: true },
      { label: "Region IX - Zamboanga Peninsula", href: "/officers?region=Region%20IX&tab=regional" },
      { label: "Region X - Northern Mindanao", href: "/officers?region=Region%20X&tab=regional" },
      { label: "Region XI - Davao Region", href: "/officers?region=Region%20XI&tab=regional" },
      { label: "Region XII - SOCCSKSARGEN", href: "/officers?region=Region%20XII&tab=regional" },
      { label: "Region XIII - CARAGA", href: "/officers?region=Region%20XIII&tab=regional" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1F4B] shadow-lg">
      {/* Gold top bar */}
      <div className="h-1 gold-bar" />

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <Image
              src="/pafteicon.png"
              alt="PAFTE Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-semibold text-sm leading-tight">Philippine Association for</p>
            <p className="text-[#C9A84C] font-bold text-sm leading-tight">Teachers & Educators</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="nav-link flex items-center gap-1 text-white/90 hover:text-[#C9A84C] text-sm font-medium px-3 py-2 rounded transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown size={13} />}
              </Link>

              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-[#C9A84C] z-50 max-h-[80vh] overflow-y-auto">
                  {item.children.map((child) =>
                    child.disabled ? (
                      <div
                        key={child.label}
                        className="px-4 py-1.5 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider bg-[#FAF7F2] border-b border-[#E8E0D4]"
                      >
                        {child.label}
                      </div>
                    ) : (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#0B1F4B] hover:bg-[#EBF2FA] hover:text-[#C9A84C] font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0f2a5e] border-t border-white/10">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="w-full text-left px-6 py-3 text-white/90 text-sm font-medium flex justify-between items-center hover:bg-white/10"
                onClick={() =>
                  setActiveDropdown(activeDropdown === item.label ? null : item.label)
                }
              >
                <span>{item.label}</span>
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                  />
                )}
              </button>
              {item.children && activeDropdown === item.label && (
                <div className="bg-[#071535]">
                  {item.children.map((child) =>
                    child.disabled ? (
                      <div
                        key={child.label}
                        className="pl-10 pr-6 py-1.5 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider"
                      >
                        {child.label}
                      </div>
                    ) : (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block pl-10 pr-6 py-2.5 text-sm text-white/70 hover:text-[#C9A84C]"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}