import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BookOpen, Globe, Award, ChevronRight } from "lucide-react";

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
    <div className="bg-[#FAF7F2]">

      {/* HERO */}
      <section className="relative bg-[#0B1F4B] overflow-hidden min-h-[90vh] flex items-center">
        {/* background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px"
          }} />
        </div>
        
        {/* Subtle large background icon/watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] scale-130 right-200 pointer-events-none">
          <Image 
            src="/pafteicon.png" 
            alt="PAFTE Background Icon" 
            width={500} 
            height={800} 
            priority
            className="object-contain"
          />
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#C9A84C]/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-full px-4 py-1.5 text-[#C9A84C] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
              2026–2028 Term Officers Now Inducted
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Shaping the Future of
              <span className="block text-[#C9A84C]">Philippine Education</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              The Philippine Association for Teachers &amp; Educators — five decades of unifying, empowering, and advancing the teaching profession.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F4B] font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Join PAFTE <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-[#C9A84C] hover:text-[#C9A84C] font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* stats card */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="font-display text-4xl font-bold text-[#C9A84C]">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD DIVIDER */}
      <div className="h-1.5 gold-bar" />

      {/* ABOUT SECTION */}
      <section className="bg-[#EBF2FA] py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">About PAFTE</p>
            <h2 className="font-display text-4xl font-bold text-[#0B1F4B] mb-5 leading-snug">
              Achieving Growth Through the Years
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Philippine Association for Teacher Education (PAFTE) is a five-decade strong association of teachers and teacher educators which has been in the forefront of teacher education since its birth on January 30, 1968.
            </p>
            <ul className="space-y-3 mb-8">
              {objectives.slice(0, 4).map((obj) => (
                <li key={obj} className="flex gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-[#C9A84C] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0B1F4B] text-white hover:bg-[#C9A84C] hover:text-[#0B1F4B] font-semibold px-6 py-3 rounded-lg transition-colors">
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
              <Link key={card.title} href={card.href} className="bg-white rounded-2xl p-5 shadow-sm border border-[#E8E0D4] hover:border-[#C9A84C] hover:shadow-md transition-all group">
                <div className="text-[#C9A84C] mb-3 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="font-display font-bold text-[#0B1F4B] mb-1">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-snug">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-[#FAF7F2] py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">Get in Touch</p>
            <h2 className="font-display text-3xl font-bold text-[#0B1F4B] mb-4">Contact Us</h2>
            <p className="text-gray-500 mb-6">Have questions? Reach out to the PAFTE national office.</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><strong className="text-[#0B1F4B]">Address:</strong> 10 Boston Street, Brgy. Kaunlaran, Cubao, Quezon City</li>
              <li><strong className="text-[#0B1F4B]">Email:</strong> info@pafte.org</li>
              <li><strong className="text-[#0B1F4B]">Tel:</strong> (02) 8721 2715 / (02) 8723 1560</li>
              <li><strong className="text-[#0B1F4B]">Mobile:</strong> 09185375190</li>
            </ul>
          </div>

          <form className="bg-white rounded-2xl shadow-sm border border-[#E8E0D4] p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0B1F4B] mb-1">Your Name</label>
              <input type="text" placeholder="Enter your name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B1F4B] mb-1">Email Address</label>
              <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B1F4B] mb-1">Subject</label>
              <input type="text" placeholder="Enter subject" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0B1F4B] mb-1">Message</label>
              <textarea rows={4} placeholder="Your message..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#0B1F4B] hover:bg-[#C9A84C] text-white hover:text-[#0B1F4B] font-semibold py-3 rounded-lg transition-colors">
              Submit Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}