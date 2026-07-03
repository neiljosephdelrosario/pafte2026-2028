import Link from "next/link";
import { BookOpen, FileText, Video, ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="bg-[#0B1F4B] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Knowledge Hub</h1>
          <p className="text-white/60 text-lg">Research, publications, and learning materials for educators.</p>
        </div>
      </section>
      <div className="h-1 gold-bar" />

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            id: "journal",
            icon: <BookOpen size={32} />,
            title: "PAFTE Journal of Education",
            desc: "A peer-reviewed journal featuring research in teacher education. Submit your manuscripts and explore archived issues.",
            links: [
              { label: "Submission Guidelines", href: "#" },
              { label: "Browse Archive", href: "#" },
            ],
          },
          {
            id: "research",
            icon: <FileText size={32} />,
            title: "Research Papers",
            desc: "Access papers presented at PAFTE national conventions and the research congress.",
            links: [
              { label: "Research Congress", href: "#" },
              { label: "Articles", href: "#" },
            ],
          },
          {
            id: "materials",
            icon: <Video size={32} />,
            title: "Teaching Materials",
            desc: "Curated demo teaching resources, PowerPoint presentations, and other professional development materials.",
            links: [
              { label: "Demo Teaching Resources", href: "#" },
              { label: "Presentations", href: "#" },
            ],
          },
        ].map((res) => (
          <div key={res.id} id={res.id} className="bg-white rounded-2xl p-8 border border-[#E8E0D4] shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#C9A84C] mb-4">{res.icon}</div>
            <h2 className="font-display text-xl font-bold text-[#0B1F4B] mb-3">{res.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{res.desc}</p>
            <div className="space-y-2">
              {res.links.map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center gap-2 text-sm text-[#0B1F4B] hover:text-[#C9A84C] font-medium transition-colors">
                  <ArrowRight size={14} /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0B1F4B] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-white/60 mb-8">Submit your research to the PAFTE Journal of Education or share your teaching materials with the community.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F4B] font-bold px-6 py-3 rounded-lg transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
