import Image from "next/image";

export default function CommitteesPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#0B1F4B] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Organization</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Committees</h1>
          <p className="text-white/60 text-lg">The dedicated committees working to advance teacher education in the Philippines.</p>
        </div>
      </section>
      <div className="h-1 gold-bar" />

      {/* Committees Image Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-[#E8E0D4] shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="mb-4">
              <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-1">PAFTE Committees</p>
              <h2 className="font-display text-2xl font-bold text-[#0B1F4B]"> Committee Members</h2>
            </div>
            <div className="relative w-full rounded-xl overflow-hidden border border-[#E8E0D4] bg-[#FAF7F2]">
              <Image
                src="/comittees.png"
                alt="PAFTE Committees 2026-2028"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}