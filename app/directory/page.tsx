import { MapPin } from "lucide-react";

const chapters = [
  { code: "CAR", name: "Cordillera Administrative Region", region: "Luzon" },
  { code: "NCR", name: "National Capital Region", region: "Luzon" },
  { code: "Region I", name: "Ilocos Region", region: "Luzon" },
  { code: "Region II", name: "Cagayan Valley", region: "Luzon" },
  { code: "Region III", name: "Central Luzon", region: "Luzon" },
  { code: "Region IV-A", name: "CALABARZON", region: "Luzon" },
  { code: "Region IV-B", name: "MIMAROPA", region: "Luzon" },
  { code: "Region V", name: "Bicol Region", region: "Luzon" },
  { code: "Region VI", name: "Western Visayas", region: "Visayas" },
  { code: "Region VII", name: "Central Visayas", region: "Visayas" },
  { code: "Region VIII", name: "Eastern Visayas", region: "Visayas" },
  { code: "Region IX", name: "Zamboanga Peninsula", region: "Mindanao" },
  { code: "Region X", name: "Northern Mindanao", region: "Mindanao" },
  { code: "Region XI", name: "Davao Region", region: "Mindanao" },
  { code: "Region XII", name: "SOCCSKSARGEN", region: "Mindanao" },
  { code: "Region XIII", name: "Caraga", region: "Mindanao" },
  { code: "BARMM", name: "Bangsamoro Autonomous Region in Muslim Mindanao", region: "Mindanao" },
  { code: "UAE", name: "United Arab Emirates Chapter", region: "International" },
];

const groups: Record<string, typeof chapters> = {};
chapters.forEach((c) => {
  if (!groups[c.region]) groups[c.region] = [];
  groups[c.region].push(c);
});

export default function DirectoryPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="bg-[#0B1F4B] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Nationwide</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Directory</h1>
          <p className="text-white/60 text-lg">PAFTE regional chapters across the Philippines and internationally.</p>
        </div>
      </section>
      <div className="h-1 gold-bar" />

      <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        {Object.entries(groups).map(([group, items]) => (
          <div key={group}>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={18} className="text-[#C9A84C]" />
              <h2 className="font-display text-2xl font-bold text-[#0B1F4B]">{group}</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((ch) => (
                <div key={ch.code} className="bg-white rounded-xl p-5 border border-[#E8E0D4] shadow-sm hover:border-[#C9A84C] hover:shadow-md transition-all">
                  <p className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider mb-1">{ch.code}</p>
                  <p className="font-semibold text-[#0B1F4B] text-sm">{ch.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
