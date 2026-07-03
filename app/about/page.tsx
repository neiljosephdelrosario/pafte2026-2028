"use client";
import Link from "next/link";
import { ArrowRight, Award, Users, BookOpen, Globe, Target, Heart, Shield, Lightbulb, TrendingUp, Sparkles } from "lucide-react";

const objectives = [
  "Promote and maintain the unity of teacher educators in the country and enhance their professional identity as teachers of teachers.",
  "Extend mutual assistance among teacher educators and teacher education institutions in the country.",
  "Raise and maintain standards of teacher education through effective leadership and enlightened fellowship.",
  "Stimulate, support, and undertake researches, studies, and other professional activities that contribute to the improvement of teacher education.",
  "Disseminate new knowledge, information and materials through publications.",
  "Serve as partner of government in resolving problems in teacher education.",
];

const coreValues = [
  { letter: "P", words: ["Passion", "Professionalism"], icon: Heart },
  { letter: "A", words: ["Academic Excellence", "Accountability"], icon: Award },
  { letter: "F", words: ["Fortitude", "Faithfulness", "Futurism", "Family-centeredness", "Friendliness"], icon: Shield },
  { letter: "T", words: ["Technical Expertise", "Teamwork", "Transparency"], icon: Target },
  { letter: "E", words: ["Empowerment", "Enthusiasm", "Efficiency", "Effectiveness"], icon: TrendingUp },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="bg-[#0B1F4B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#C9A84C] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">About PAFTE</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Our Story &amp; Mission</h1>
          <p className="text-white/60 text-lg">A professional learning community of world-class teacher educators.</p>
        </div>
      </section>
      <div className="h-1 bg-[#C9A84C]" />

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E8E0D4] shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors">
              <span className="text-[#C9A84C] font-bold text-xl">V</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#0B1F4B] mb-4">Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              PAFTE is a professional learning community of world class teacher educators.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E8E0D4] shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors">
              <span className="text-[#C9A84C] font-bold text-xl">M</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#0B1F4B] mb-4">Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At the front-line of educational reform and teacher development, PAFTE commits itself to:
            </p>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">1.</span>
                <span>the continuing professional development of its members through research and publication, lectures, conferences and seminar workshops and local and international educational tours;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">2.</span>
                <span>the promotion of collaboration among members and teacher education institutions;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">3.</span>
                <span>the Philippine Professional Standards for Teacher;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">4.</span>
                <span>an active and intelligent participation in the discussion and resolution of national educational problems and issues; and to the</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">5.</span>
                <span>establishment of local and international linkages with other organizations and teacher education institutions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#EBF2FA] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">Our Foundation</p>
            <h2 className="font-display text-3xl font-bold text-[#0B1F4B]">Core Values</h2>
            <div className="w-20 h-1 bg-[#C9A84C] mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.letter} className="bg-white rounded-xl p-6 border border-[#E8E0D4] text-center hover:shadow-md transition-shadow duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <div className="text-3xl font-bold text-[#C9A84C] mb-2">{value.letter}</div>
                  <div className="space-y-1">
                    {value.words.map((word) => (
                      <p key={word} className="text-sm text-gray-600 font-medium">
                        {word}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">History</p>
            <h2 className="font-display text-3xl font-bold text-[#0B1F4B] mb-6">Through the Years</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Philippine Association for Teacher Education (PAFTE) is a five-decade strong association of teachers and teacher educators which has been in the forefront of teacher education since its birth on <strong>January 30, 1968</strong> and its registration with the Securities and Exchange Commission on <strong>March 17, 1968</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since then, PAFTE has grown into a nationwide organization with 18 regional chapters, representing educators from all corners of the Philippines and even internationally through its UAE chapter.
            </p>
          </div>
          <div className="bg-[#0B1F4B] rounded-2xl p-8 border border-[#C9A84C]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-xl">50+</span>
              </div>
              <div>
                <p className="text-white font-bold">Years of Excellence</p>
                <p className="text-white/60 text-sm">Since 1968</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-xl">18</span>
              </div>
              <div>
                <p className="text-white font-bold">Regional Chapters</p>
                <p className="text-white/60 text-sm">Nationwide presence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                <Globe size={24} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="text-white font-bold">International Reach</p>
                <p className="text-white/60 text-sm">UAE Chapter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="bg-[#EBF2FA] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-2">Our Commitments</p>
            <h2 className="font-display text-3xl font-bold text-[#0B1F4B]">Objectives</h2>
            <div className="w-20 h-1 bg-[#C9A84C] mx-auto mt-3" />
          </div>
          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E8E0D4] shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <span className="font-display text-2xl font-bold text-[#C9A84C]/40 shrink-0 w-8 group-hover:text-[#C9A84C] transition-colors">{i + 1}</span>
                <p className="text-gray-600 leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B1F4B] py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-white/60 mb-8">Join PAFTE and be part of a community that shapes the future of Philippine education.</p>
          <Link href="/membership" className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F4B] font-bold px-6 py-3 rounded-lg transition-colors">
            Join Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}