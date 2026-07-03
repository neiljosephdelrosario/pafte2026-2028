import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BookOpen, Globe, Award, ChevronRight, Mail, Phone, MapPin, Send, Sparkles, Calendar, TrendingUp, FileText, QrCode } from "lucide-react";

const objectives = [
  "Promote and maintain the unity of teacher educators in the country",
  "Extend mutual assistance among teacher educators and institutions",
  "Raise and maintain standards of teacher education",
  "Stimulate, support, and undertake research and professional activities",
  "Disseminate new knowledge through publications",
  "Serve as partner of government in resolving teacher education issues",
];

const stats = [
  { value: "56+", label: "Years of Service" },
  { value: "18", label: "Regional Chapters" },
  { value: "50,000+", label: "Members Nationwide" },
  { value: "53+", label: "National Conventions" },
];

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* HERO - Modern Design */}
      <section className="relative bg-gradient-to-br from-[#0B1F4B] via-[#0F2A5E] to-[#1A3D7A] overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#C9A84C] blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        
        {/* Subtle large background icon/watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] scale-150 pointer-events-none">
          <Image 
            src="/pafteicon.png" 
            alt="PAFTE Background Icon" 
            width={500} 
            height={800} 
            priority
            className="object-contain"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-ping" />
              <span className="text-white/80 text-sm font-medium">PAFTE 2026 - 2028</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Shaping the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">Philippine Education</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              The Philippine Association for Teachers &amp; Educators — five decades of unifying, empowering, and advancing the teaching profession.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F4B] font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/25"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* stats card - Modern */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:border-[#C9A84C]/30">
                <p className="font-display text-4xl md:text-5xl font-bold text-[#C9A84C]">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <div className="h-1.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* ABOUT SECTION - Modern */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">About PAFTE</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B1F4B] mb-5 leading-snug">
              Achieving Growth Through the Years
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The Philippine Association for Teacher Education (PAFTE) is a five-decade strong association of teachers and teacher educators which has been in the forefront of teacher education since its birth on January 30, 1968.
            </p>
            <ul className="space-y-4 mb-8">
              {objectives.slice(0, 4).map((obj) => (
                <li key={obj} className="flex gap-4 text-gray-600 group">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-[#C9A84C]/25 group-hover:scale-110 transition-transform">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-sm md:text-base">{obj}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0B1F4B] hover:bg-[#C9A84C] text-white hover:text-[#0B1F4B] font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#0B1F4B]/20">
              Read More <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Users size={28} />, title: "Membership", desc: "Open to all licensed professional teachers and educators.", href: "/membership" },
              { icon: <Globe size={28} />, title: "18 Regions", desc: "Chapters across all regions of the Philippines and UAE.", href: "/directory" },
              { icon: <BookOpen size={28} />, title: "PAFTE Journal", desc: "Peer-reviewed journal advancing education research.", href: "/resources#journal" },
              { icon: <Award size={28} />, title: "Conventions", desc: "Annual national conventions celebrating education excellence.", href: "/conferences" },
            ].map((card) => (
              <Link key={card.title} href={card.href} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C9A84C]/30 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-[#C9A84C]">{card.icon}</div>
                </div>
                <h3 className="font-display font-bold text-[#0B1F4B] text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTITUTION & BY-LAWS SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">Governing Document</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B1F4B]">Constitution &amp; By-Laws</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              The foundational document that guides the Philippine Association for Teachers and Educators, Inc. (PAFTE)
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Description */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center shrink-0">
                    <FileText size={28} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F4B] mb-2">PAFTE Constitution and By-Laws</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The Constitution and By-Laws of the Philippine Association for Teachers and Educators, Inc. (PAFTE) 
                      serves as the supreme governing document that outlines the organization&apos;s structure, principles, 
                      and operational guidelines.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#EBF2FA] text-[#0B1F4B] px-3 py-1.5 rounded-full">
                        <Calendar size={12} /> Established 1968
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#EBF2FA] text-[#0B1F4B] px-3 py-1.5 rounded-full">
                        <Users size={12} /> Member-Centric
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#EBF2FA] text-[#0B1F4B] px-3 py-1.5 rounded-full">
                        <Award size={12} /> Excellence-Driven
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - QR Code */}
            <div className="flex justify-center lg:justify-end">
              <div className="group bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="relative w-56 h-56 mx-auto mb-4 bg-[#FAF7F2] rounded-2xl p-4 border-2 border-dashed border-[#C9A84C]/30 group-hover:border-solid group-hover:border-[#C9A84C] transition-all">
                  <Image
                    src="/qr.png"
                    alt="Scan QR Code to view PAFTE Constitution and By-Laws"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[#0B1F4B]">Scan to View</p>
                  <p className="text-xs text-gray-500">Constitution &amp; By-Laws</p>
                  <a 
                    href="https://heyzine.com/flip-book/e75855c6a9.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-medium hover:text-[#E8C96A] transition-colors mt-2"
                  >
                    <QrCode size={14} />
                    Open Online Version
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP - Modern */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B1F4B] mb-4">Contact Us</h2>
            <p className="text-gray-500 text-lg mb-8">Have questions? Reach out to the PAFTE national office.</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <strong className="text-[#0B1F4B] block">Address</strong>
                  <span className="text-sm">10 Boston Street, Brgy. Kaunlaran, Cubao, Quezon City</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <strong className="text-[#0B1F4B] block">Email</strong>
                  <span className="text-sm">info@pafte.org</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <strong className="text-[#0B1F4B] block">Telephone</strong>
                  <span className="text-sm">(02) 8721 2715 / (02) 8723 1560</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <strong className="text-[#0B1F4B] block">Mobile</strong>
                  <span className="text-sm">09185375190</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="bg-[#FAF7F2] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#0B1F4B] mb-2">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0B1F4B] mb-2">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0B1F4B] mb-2">Subject</label>
                <input type="text" placeholder="Enter subject" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0B1F4B] mb-2">Message</label>
                <textarea rows={4} placeholder="Your message..." className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20 transition-all resize-none" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#0B1F4B] to-[#1A3D7A] hover:from-[#C9A84C] hover:to-[#E8C96A] text-white hover:text-[#0B1F4B] font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[#0B1F4B]/20 flex items-center justify-center gap-2">
                Submit Message <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}