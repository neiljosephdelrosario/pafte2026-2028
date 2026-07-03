/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { X, Maximize2, Minimize2, Users, MapPin, Award, ChevronRight, Calendar, Star, Sparkles } from "lucide-react";

// 2. REGIONAL ASSIGNED POSITIONS
const regionalChapters: Record<string, { role: string; name: string; institution: string }[]> = {
  // POPULATED FROM YOUR CAR FILES
  "CAR": [
    { role: "Chairperson", name: "Dina Teresita P. Balaan", institution: "PAFTE CAR" },
    { role: "Vice Chairperson", name: "Divina M. Yango", institution: "PAFTE CAR" },
    { role: "Secretary", name: "Diana Rose B. Pawe", institution: "PAFTE CAR" },
    { role: "Treasurer", name: "Antonio D. Mangaliag", institution: "PAFTE CAR" },
    { role: "Public Relations Officer", name: "Christzon P. Pasigon", institution: "PAFTE CAR" },
    { role: "Auditor", name: "Glenn Jay M. Paleng", institution: "PAFTE CAR" },
    { role: "Board of Director", name: "Keven John N. Allit", institution: "PAFTE CAR" },
    { role: "Board of Director", name: "Somerson C. Kis-ing", institution: "PAFTE CAR" },
  ],
  
  // POPULATED FROM YOUR NCR FILES
  "NCR": [
    { role: "Chairperson", name: "Dr. Ramona A. Prado", institution: "PAFTE NCR" },
    { role: "Vice Chairperson", name: "Dr. Bergania", institution: "PAFTE NCR" },
    { role: "Secretary", name: "Christine Ann C. Juan", institution: "PAFTE NCR" },
    { role: "Treasurer", name: "Dr. Digna C. Pagapong", institution: "PAFTE NCR" },
    { role: "Public Relations Officer", name: "Dr. Ma. Junithesmer D. Rosales", institution: "PAFTE NCR" },
    { role: "Auditor", name: "Dr. Gliceria C. Lunag", institution: "PAFTE NCR" },
  ],
  
  // POPULATED FROM YOUR NIR FILES
  "NIR": [
    { role: "Chairperson", name: "Jan Stella Grace L. Deita", institution: "PAFTE NIR" },
    { role: "Vice Chairperson", name: "Jasper Eric C. Catan", institution: "PAFTE NIR" },
    { role: "Secretary", name: "Joram C. Ausente", institution: "PAFTE NIR" },
    { role: "Treasurer", name: "Liza J. Caballero", institution: "PAFTE NIR" },
    { role: "Auditor", name: "Maria Flordeliz U. Duran", institution: "PAFTE NIR" },
    { role: "Public Information Officer", name: "Rex C. Balinario", institution: "PAFTE NIR" },
  ],
  
  // POPULATED FROM REGION I OATH OF OFFICE DOCUMENTS
  "Region I": [
    { role: "Chairperson", name: "Dr. Dulce Marie B. Solis", institution: "PAFTE Region I" },
    { role: "Vice Chairperson", name: "Dr. Ryan Jayson V. Delos Reyes", institution: "PAFTE Region I" },
    { role: "Secretary", name: "Cherrel G. Ignacio", institution: "PAFTE Region I" },
    { role: "Auditor", name: "Dr. Marilyn R. Quiming", institution: "PAFTE Region I" },
    { role: "Public Relations Officer", name: "Dr. Luzvienda P. Relon", institution: "PAFTE Region I" },
    { role: "Board of Director", name: "Rosabel L. Acosta", institution: "PAFTE Region I" },
    { role: "Board of Director", name: "Imelda N. Binay-an", institution: "PAFTE Region I" },
    { role: "Board of Director", name: "Cristeta C. Dulos", institution: "PAFTE Region I" },
    { role: "Board of Director", name: "Magdalena R. Japson", institution: "PAFTE Region I" },
    { role: "Board of Director", name: "Russel V. Santos", institution: "PAFTE Region I" },
  ],
  
  // UPDATED REGION III OFFICERS FROM UPLOADED DOCUMENTS
  "Region III": [
    { role: "Chairperson", name: "Alma M. Natividad", institution: "PAFTE Region III" },
    { role: "Vice Chairperson", name: "Alma Jose", institution: "PAFTE Region III" },
    { role: "Secretary", name: "Loda L. Garcia", institution: "PAFTE Region III" },
    { role: "Treasurer", name: "TBA", institution: "PAFTE Region III" },
    { role: "Auditor", name: "April R. Cruz", institution: "PAFTE Region III" },
    { role: "Public Relations Officer", name: "Bernadette O. Gallardo", institution: "PAFTE Region III" },
    { role: "Board of Director", name: "Dr. Ruben E. Borja II", institution: "PAFTE Region III" },
    { role: "Board of Director", name: "Jo Neil T. Peria", institution: "PAFTE Region III" },
    { role: "Board of Director", name: "TBA", institution: "PAFTE Region III" },
  ],
  
  // UPDATED REGION IV-A OFFICERS FROM UPLOADED DOCUMENTS
  "Region IV-A": [
    { role: "Chairperson", name: "Dr. Ronald A. Gonzales", institution: "PAFTE Region IV-A" },
    { role: "Vice Chairperson", name: "Dr. Rosemarie D. Sabado, LPT", institution: "PAFTE Region IV-A" },
    { role: "Secretary", name: "Dr. Vida T. Dones, LPT", institution: "PAFTE Region IV-A" },
    { role: "Treasurer", name: "Mercedes A. Macarandang", institution: "PAFTE Region IV-A" },
    { role: "Auditor", name: "Nino Naldoza", institution: "PAFTE Region IV-A" },
    { role: "Public Relations Officer", name: "Dr. Delia P. Jadaone, LPT", institution: "PAFTE Region IV-A" },
    { role: "Board of Director", name: "Amelia A. Jarapa", institution: "PAFTE Region IV-A" },
    { role: "Board of Director", name: "Dr. Ruel G. Manalo, Ed.D.", institution: "PAFTE Region IV-A" },
    { role: "Board of Director", name: "Dr. Arche R. Tudtod", institution: "PAFTE Region IV-A" },
  ],
  
  // UPDATED REGION IV-B (MIMAROPA) OFFICERS FROM UPLOADED DOCUMENTS
  "Region IV-B": [
    { role: "Chairperson", name: "TBA", institution: "PAFTE Region IV-B" },
    { role: "Vice Chairperson", name: "Quennie N. Bandalaria", institution: "PAFTE Region IV-B" },
    { role: "Secretary", name: "Sharon M. Gardoce", institution: "PAFTE Region IV-B" },
    { role: "Treasurer", name: "Ruth Mary P. Faluson", institution: "PAFTE Region IV-B" },
    { role: "Auditor", name: "Elvie D. Aragones", institution: "PAFTE Region IV-B" },
    { role: "Public Relations Officer", name: "TBA", institution: "PAFTE Region IV-B" },
    { role: "Board of Director", name: "Liza Marie M. Manoos-Pacia", institution: "PAFTE Region IV-B" },
  ],
  
  // UPDATED REGION V (BICOL) OFFICERS FROM UPLOADED DOCUMENTS
  "Region V": [
    { role: "Chairperson", name: "Dr. Lorna M. Mina", institution: "PAFTE Region V" },
    { role: "Vice Chairperson", name: "Maria Luz T. Badiola, PhD", institution: "PAFTE Region V" },
    { role: "Secretary", name: "Bryan B. Amaranto", institution: "PAFTE Region V" },
    { role: "Treasurer", name: "TBA", institution: "PAFTE Region V" },
    { role: "Auditor", name: "TBA", institution: "PAFTE Region V" },
    { role: "Public Relations Officer", name: "Ma. Joy S. Cruz", institution: "PAFTE Region V" },
    { role: "Board of Director", name: "Meriam L. Abioh", institution: "PAFTE Region V" },
    { role: "Board of Director", name: "Maritess D. Carreon", institution: "PAFTE Region V" },
    { role: "Board of Director", name: "Edith A. Lodado, Ph.D", institution: "PAFTE Region V" },
    { role: "Board of Director", name: "Dr. Eden B. Rivera", institution: "PAFTE Region V" },
  ],
  
  // UPDATED REGION VI (WESTERN VISAYAS) OFFICERS FROM UPLOADED DOCUMENTS
  "Region VI": [
    { role: "Chairperson", name: "TBA", institution: "PAFTE Region VI" },
    { role: "Vice Chairperson", name: "Marianne L. Quimpo", institution: "PAFTE Region VI" },
    { role: "Secretary", name: "Frisian Y. Causing", institution: "PAFTE Region VI" },
    { role: "Treasurer", name: "P. Gomez", institution: "PAFTE Region VI" },
    { role: "Auditor", name: "Hazel D. Joaquin", institution: "PAFTE Region VI" },
    { role: "Public Relations Officer", name: "Profetiza I. Maatubang", institution: "PAFTE Region VI" },
    { role: "Board of Director", name: "TBA", institution: "PAFTE Region VI" },
  ],
  
  // UPDATED REGION VII (CENTRAL VISAYAS) OFFICERS FROM UPLOADED DOCUMENTS
  "Region VII": [
    { role: "Chairperson", name: "Deletah DG. Polinar", institution: "PAFTE Region VII" },
    { role: "Vice Chairperson", name: "Lynnette Matea S. Camello", institution: "PAFTE Region VII" },
    { role: "Secretary", name: "Venus M. Cortes", institution: "PAFTE Region VII" },
    { role: "Treasurer", name: "Rita May P. Tagalog", institution: "PAFTE Region VII" },
    { role: "Auditor", name: "Priscilla S. Mansueto", institution: "PAFTE Region VII" },
    { role: "Public Relations Officer", name: "Delfin T. Cabañero", institution: "PAFTE Region VII" },
    { role: "Board of Director", name: "Maria Noeleen M. Borbajo", institution: "PAFTE Region VII" },
    { role: "Board of Director", name: "Maricel F. Deloso", institution: "PAFTE Region VII" },
  ],
  
  // UPDATED REGION VIII (EASTERN VISAYAS) OFFICERS FROM UPLOADED DOCUMENTS
  "Region VIII": [
    { role: "Chairperson", name: "Dr. Maria Victoria A. Gonzaga", institution: "PAFTE Region VIII" },
    { role: "Vice Chairperson", name: "TBA", institution: "PAFTE Region VIII" },
    { role: "Secretary", name: "Manilyn Serpajuan-Sablan", institution: "PAFTE Region VIII" },
    { role: "Treasurer", name: "TBA", institution: "PAFTE Region VIII" },
    { role: "Auditor", name: "TBA", institution: "PAFTE Region VIII" },
    { role: "Public Relations Officer", name: "TBA", institution: "PAFTE Region VIII" },
    { role: "Board of Director", name: "Avin Carl V. Cruzada", institution: "PAFTE Region VIII" },
    { role: "Board of Director", name: "Nimfa T. Torremoro", institution: "PAFTE Region VIII" },
    { role: "Board of Director", name: "Siony C. Ubane", institution: "PAFTE Region VIII" },
  ],
  
  // UPDATED REGION IX (ZAMBOANGA PENINSULA) OFFICERS FROM UPLOADED DOCUMENTS
  "Region IX": [
    { role: "Chairperson", name: "Dr. Joji T. Recamara", institution: "PAFTE Region IX" },
    { role: "Vice Chairperson", name: "Vanessa A. Talisic", institution: "PAFTE Region IX" },
    { role: "Secretary", name: "George A. Bebora", institution: "PAFTE Region IX" },
    { role: "Treasurer", name: "Ronalyn P. Tanara", institution: "PAFTE Region IX" },
    { role: "Auditor", name: "Mar Carlo B. Lesula", institution: "PAFTE Region IX" },
    { role: "Public Relations Officer", name: "Rosaline Ho-Laporre", institution: "PAFTE Region IX" },
    { role: "Board of Director", name: "Atty. Jerry Jr. C. Dalagan", institution: "PAFTE Region IX" },
    { role: "Board of Director", name: "Myco Leo B. Pacamalan", institution: "PAFTE Region IX" },
    { role: "Board of Director", name: "Elizabeth Jane P. Sebastian, Ed.D.", institution: "PAFTE Region IX" },
  ],
  
  // UPDATED REGION X (NORTHERN MINDANAO) OFFICERS FROM UPLOADED DOCUMENTS
  "Region X": [
    { role: "Chairperson", name: "Dr. Carmencita S. Cotapte", institution: "PAFTE Region X" },
    { role: "Vice Chairperson", name: "Romeo M. Daligdig", institution: "PAFTE Region X" },
    { role: "Secretary", name: "Joseph Michael T. Bentoy", institution: "PAFTE Region X" },
    { role: "Treasurer", name: "Vanet C. Parpa", institution: "PAFTE Region X" },
    { role: "Auditor", name: "Aljon Y. Sumod-ong", institution: "PAFTE Region X" },
    { role: "Public Relations Officer", name: "Ma. Fe D. Opina, EdD", institution: "PAFTE Region X" },
    { role: "Board of Director", name: "TBA", institution: "PAFTE Region X" },
  ],
  
  // UPDATED REGION XI (DAVAO REGION) OFFICERS FROM UPLOADED DOCUMENTS
  "Region XI": [
    { role: "Chairperson", name: "Dr. Mercedita R. Japay", institution: "PAFTE Region XI" },
    { role: "Vice Chairperson", name: "Dr. Porferia S. Poralan", institution: "PAFTE Region XI" },
    { role: "Secretary", name: "Dr. Agnes P. Mascarinas", institution: "PAFTE Region XI" },
    { role: "Treasurer", name: "Vivien Grace A. Jubahib", institution: "PAFTE Region XI" },
    { role: "Auditor", name: "Dr. John Mart Elesio", institution: "PAFTE Region XI" },
    { role: "Public Relations Officer", name: "Dr. Lemuel M. Sayao", institution: "PAFTE Region XI" },
    { role: "Board of Director", name: "Cristy Q. Efondo", institution: "PAFTE Region XI" },
  ],
  
  // UPDATED REGION XII (SOCCSKSARGEN) OFFICERS FROM UPLOADED DOCUMENTS
  "Region XII": [
    { role: "Chairperson", name: "Dr. Honeyln M. Mahinay", institution: "PAFTE Region XII" },
    { role: "Vice Chairperson", name: "Paz M. Beleno", institution: "PAFTE Region XII" },
    { role: "Secretary", name: "Evelyn B. Bongco", institution: "PAFTE Region XII" },
    { role: "Treasurer", name: "Jelvin M. Lagunsay", institution: "PAFTE Region XII" },
    { role: "Auditor", name: "Mary Jean S. Falsario", institution: "PAFTE Region XII" },
    { role: "Public Relations Officer", name: "Priscilla A. Marayag, LPT, Ph.D.", institution: "PAFTE Region XII" },
    { role: "Board of Director", name: "Derbie P. Padajinog", institution: "PAFTE Region XII" },
    { role: "Board of Director", name: "Farida D. Silverio", institution: "PAFTE Region XII" },
    { role: "Adviser", name: "Dr. Elizabeth S. Espadero, LPT, PhD", institution: "PAFTE Region XII" },
  ],
  
  // UPDATED REGION XIII (CARAGA) OFFICERS FROM UPLOADED DOCUMENTS
  "Region XIII": [
    { role: "Chairperson", name: "Dr. Roberta L. Omas-as", institution: "PAFTE Region XIII" },
    { role: "Vice Chairperson", name: "Nathalie L. Daminar", institution: "PAFTE Region XIII" },
    { role: "Secretary", name: "Glynda L. Bacong, PhD", institution: "PAFTE Region XIII" },
    { role: "Treasurer", name: "Faith P. Villanueva", institution: "PAFTE Region XIII" },
    { role: "Auditor", name: "Maria Luz J. Golosino", institution: "PAFTE Region XIII" },
    { role: "Public Relations Officer", name: "Nikko T. Ederio", institution: "PAFTE Region XIII" },
    { role: "Board of Director", name: "TBA", institution: "PAFTE Region XIII" },
  ],
};

// Main component that uses useSearchParams
function OfficersContent() {
  const searchParams = useSearchParams();
  const regionParam = searchParams.get("region");
  const tabParam = searchParams.get("tab");
  
  // Determine initial tab from URL query parameter
  const getInitialTab = () => {
    if (tabParam === "national") return "national";
    if (tabParam === "regional") return "regional";
    return "regional"; // Default to regional
  };

  const [activeTab, setActiveTab] = useState<"national" | "regional">(getInitialTab());
  const [isZoomed, setIsZoomed] = useState(false);
  
  // Determine initial region from URL query parameter
  const getInitialRegion = () => {
    if (regionParam && regionalChapters[regionParam]) {
      return regionParam;
    }
    return "Region I";
  };

  const [activeRegion, setActiveRegion] = useState<string>(getInitialRegion());

  // Update active tab when query parameter changes
  useEffect(() => {
    if (tabParam === "national") {
      setActiveTab("national");
    } else if (tabParam === "regional") {
      setActiveTab("regional");
    }
  }, [tabParam]);

  // Update active region when query parameter changes
  useEffect(() => {
    if (regionParam && regionalChapters[regionParam]) {
      setActiveRegion(regionParam);
    }
  }, [regionParam]);

  // Prevent body scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isZoomed]);

  // Helper function to get region display name
  const getRegionDisplayName = (region: string) => {
    const names: Record<string, string> = {
      "CAR": "Cordillera Administrative Region",
      "NCR": "National Capital Region",
      "NIR": "Negros Island Region",
      "Region I": "Ilocos Region",
      "Region III": "Central Luzon",
      "Region IV-A": "CALABARZON",
      "Region IV-B": "MIMAROPA",
      "Region V": "Bicol Region",
      "Region VI": "Western Visayas",
      "Region VII": "Central Visayas",
      "Region VIII": "Eastern Visayas",
      "Region IX": "Zamboanga Peninsula",
      "Region X": "Northern Mindanao",
      "Region XI": "Davao Region",
      "Region XII": "SOCCSKSARGEN",
      "Region XIII": "CARAGA",
    };
    return names[region] || region;
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Modern Header Banner */}
      <section className="relative bg-gradient-to-br from-[#0B1F4B] via-[#0F2A5E] to-[#1A3D7A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#C9A84C] blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#C9A84C] blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        
        <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-ping" />
            <span className="text-white/80 text-sm font-medium">Leadership</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            2026–2028{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">Officers</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Formally inducted executive officers and regional council members driving excellence in teacher education.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/50 text-sm">
              <Calendar size={14} className="text-[#C9A84C]" />
              Term 2026–2028
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-white/50 text-sm">
              <Award size={14} className="text-[#C9A84C]" />
              National &amp; Regional
            </span>
          </div>
        </div>
      </section>
      
      <div className="h-1.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Tab Navigation - Modern */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="bg-[#FAF7F2] rounded-2xl p-1.5 border border-gray-100 shadow-lg max-w-md mx-auto">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("national")}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "national"
                  ? "bg-gradient-to-r from-[#0B1F4B] to-[#1A3D7A] text-white shadow-lg"
                  : "text-[#0B1F4B] hover:bg-white/50"
              }`}
            >
              National Officers
            </button>
            <button
              onClick={() => setActiveTab("regional")}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeTab === "regional"
                  ? "bg-gradient-to-r from-[#0B1F4B] to-[#1A3D7A] text-white shadow-lg"
                  : "text-[#0B1F4B] hover:bg-white/50"
              }`}
            >
              Regional Officers
            </button>
          </div>
        </div>
      </div>

      {/* National Officers Section - Modern */}
      {activeTab === "national" && (
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-2">Executive Administration</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F4B]">National Officers 2026–2028</h2>
              </div>
              <button
                onClick={() => setIsZoomed(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B1F4B] hover:bg-[#C9A84C] text-white hover:text-[#0B1F4B] rounded-xl transition-all font-medium shadow-lg shadow-[#0B1F4B]/20 hover:scale-105"
                aria-label="Zoom in"
              >
                <Maximize2 size={18} />
                <span className="text-sm">View Full Image</span>
              </button>
            </div>
            <div 
              className="relative w-full aspect-[3/2] md:aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 bg-[#FAF7F2] cursor-pointer group"
              onClick={() => setIsZoomed(true)}
            >
              <Image
                src="/national officers.jpg"
                alt="PAFTE National Officers 2026-2028"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
              <Sparkles size={12} className="text-[#C9A84C]" />
              Click the image to zoom in
              <Sparkles size={12} className="text-[#C9A84C]" />
            </p>
          </div>
        </section>
      )}

      {/* Zoom Modal - Modern */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative w-full max-w-[95vw] max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/10"
              aria-label="Close zoom"
            >
              <X size={28} />
            </button>
            <div className="relative w-full h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/national officers.jpg"
                alt="PAFTE National Officers 2026-2028 (Zoomed)"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-center text-white/40 text-sm mt-4">
              Click anywhere or press ESC to close
            </p>
          </div>
        </div>
      )}

      {/* Regional Chapters Section - Modern */}
      {activeTab === "regional" && (
        <section id="regional" className="py-16 bg-gradient-to-b from-white to-[#FAF7F2] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold rounded-full mb-2">Local Jurisdictions</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B1F4B]">Regional Council Representatives</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mt-3 rounded-full" />
            </div>

            <div className="grid lg:grid-cols-4 gap-8 items-start">
              {/* Left Column: Regional Selectors Tab - Modern */}
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none snap-x">
                {Object.keys(regionalChapters).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`snap-center shrink-0 text-left px-4 py-3.5 rounded-xl font-medium text-sm transition-all border-2 ${
                      activeRegion === region
                        ? "bg-gradient-to-r from-[#0B1F4B] to-[#1A3D7A] text-white border-[#0B1F4B] shadow-lg shadow-[#0B1F4B]/20"
                        : "bg-white text-[#0B1F4B] border-gray-200 hover:border-[#C9A84C] hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className={activeRegion === region ? "text-[#C9A84C]" : "text-[#C9A84C]"} />
                      {region}
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column: Dynamic Region Officers Grid - Modern */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500 min-h-[300px]">
                  <div className="border-b border-gray-100 pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-[#0B1F4B]">
                        {getRegionDisplayName(activeRegion)} Officers
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{activeRegion} Chapter</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-[#C9A84C]/20 to-[#E8C96A]/20 text-[#0B1F4B] px-4 py-2 rounded-full">
                      <Calendar size={12} />
                      Term 2026–2028
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {regionalChapters[activeRegion]?.map((member, idx) => (
                      <div 
                        key={idx} 
                        className="group bg-[#FAF7F2] hover:bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#C9A84C]/30 transition-all hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5">{member.role}</p>
                            <h4 className="font-bold text-base text-[#0B1F4B] group-hover:text-[#C9A84C] transition-colors">
                              {member.name}
                            </h4>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C]/10 to-[#E8C96A]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Star size={14} className="text-[#C9A84C]" />
                          </div>
                        </div>
                        {member.institution && member.institution !== "TBA" && (
                          <p className="text-xs text-gray-400 mt-3 pt-2 border-t border-gray-100">{member.institution}</p>
                        )}
                        {member.name === "TBA" && (
                          <p className="text-xs text-gray-300 mt-3 pt-2 border-t border-gray-100 italic">Position pending</p>
                        )}
                      </div>
                    )) || (
                      <div className="col-span-2 text-center py-12">
                        <p className="text-sm text-gray-400 italic">No officer assignments uploaded yet for this chapter.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// Main page component with Suspense boundary
export default function OfficersPage() {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-[#0B1F4B] text-lg font-medium flex items-center gap-3">
          <div className="w-6 h-6 border-3 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
          Loading officers...
        </div>
      </div>
    }>
      <OfficersContent />
    </Suspense>
  );
}