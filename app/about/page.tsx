"use client";
import Link from "next/link";
import { ArrowRight, Award, Users, BookOpen, Globe, Target, Heart, Shield, Lightbulb, TrendingUp, Sparkles, ChevronRight, Calendar, MapPin, GraduationCap, Star, Zap } from "lucide-react";

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
    <div className="bg-white">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1F4B] via-[#0F2A5E] to-[#1A3D7A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#C9A84C] blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        
        <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-ping" />
            <span className="text-white/80 text-sm font-medium">About PAFTE</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our Story &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">Mission</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A professional learning community of world-class teacher educators.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="#vision-mission" 
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F4B] font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#C9A84C]/25"
            >
              Explore <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-20 bg-gradient-to-b from-white to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">Our Foundation</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B1F4B]">Vision &amp; Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C9A84C]/30 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center mb-6 shadow-lg shadow-[#C9A84C]/25 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F4B] mb-4">Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                PAFTE is a professional learning community of world class teacher educators.
              </p>
            </div>

            {/* Mission Card */}
            <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C9A84C]/30 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B1F4B] to-[#1A3D7A] flex items-center justify-center mb-6 shadow-lg shadow-[#0B1F4B]/25 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F4B] mb-4">Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At the front-line of educational reform and teacher development, PAFTE commits itself to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                  <span>the continuing professional development of its members through research and publication, lectures, conferences and seminar workshops and local and international educational tours;</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                  <span>the promotion of collaboration among members and teacher education institutions;</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                  <span>the Philippine Professional Standards for Teacher;</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                  <span>an active and intelligent participation in the discussion and resolution of national educational problems and issues; and to the</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                  <span>establishment of local and international linkages with other organizations and teacher education institutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#0B1F4B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">Our Foundation</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.letter} 
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#C9A84C]/50"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#C9A84C] mb-3">{value.letter}</div>
                  <div className="space-y-1">
                    {value.words.map((word) => (
                      <p key={word} className="text-white/80 text-sm font-medium">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">History</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B1F4B] mb-6">Through the Years</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The Philippine Association for Teacher Education (PAFTE) is a five-decade strong association of teachers and teacher educators which has been in the forefront of teacher education since its birth on <span className="text-[#0B1F4B] font-semibold">January 30, 1968</span> and its registration with the Securities and Exchange Commission on <span className="text-[#0B1F4B] font-semibold">March 17, 1968</span>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since then, PAFTE has grown into a nationwide organization with 18 regional chapters, representing educators from all corners of the Philippines and even internationally through its UAE chapter.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group bg-[#FAF7F2] rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#C9A84C]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#C9A84C]/25">
                    <span className="text-white font-bold text-xl">50+</span>
                  </div>
                  <div>
                    <p className="text-[#0B1F4B] font-bold text-lg">Years of Excellence</p>
                    <p className="text-gray-500 text-sm">Since 1968</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-[#FAF7F2] rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#C9A84C]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B1F4B] to-[#1A3D7A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#0B1F4B]/25">
                    <span className="text-white font-bold text-xl">18</span>
                  </div>
                  <div>
                    <p className="text-[#0B1F4B] font-bold text-lg">Regional Chapters</p>
                    <p className="text-gray-500 text-sm">Nationwide presence</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-[#FAF7F2] rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#C9A84C]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#C9A84C]/25">
                    <Globe size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#0B1F4B] font-bold text-lg">International Reach</p>
                    <p className="text-gray-500 text-sm">UAE Chapter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-3">Our Commitments</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0B1F4B]">Objectives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#C9A84C]/30 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#E8C96A]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-[#C9A84C]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">{obj}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}