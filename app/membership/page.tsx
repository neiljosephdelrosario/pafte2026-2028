import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const types = [
  {
    id: "lifetime",
    title: "Lifetime Membership",
    fee: "₱2,000",
    color: "#C9A84C",
    benefits: [
      "Permanent membership without annual renewal",
      "Access to all PAFTE events and conferences",
      "Voting rights in national elections",
      "Access to PAFTE Journal publications",
      "Receive PAFTE certificate and ID",
    ],
  },
  {
    id: "individual",
    title: "Individual Membership",
    fee: "₱500 / year",
    color: "#0B1F4B",
    benefits: [
      "Annual membership valid for one year",
      "Access to PAFTE events at member rates",
      "Voting rights in national elections",
      "Access to PAFTE resources and publications",
      "Receive PAFTE certificate and ID",
    ],
  },
  {
    id: "institutional",
    title: "Institutional Membership",
    fee: "₱3,000 / year",
    color: "#1a3a6b",
    benefits: [
      "Covers the institution and its delegates",
      "Priority access to PAFTE events",
      "Institutional listing in PAFTE directory",
      "Access to group registration discounts",
      "Certificate of institutional membership",
    ],
  },
  {
    id: "lpt",
    title: "Newly Inducted LPT",
    fee: "₱300",
    color: "#4a7c59",
    benefits: [
      "Special rate for newly licensed teachers",
      "Welcome package for new professionals",
      "Mentorship network access",
      "Access to PAFTE orientation materials",
      "Certificate and ID included",
    ],
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="bg-[#0B1F4B] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Join PAFTE</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Membership</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            PAFTE is a non-stock, non-profit organization open to all teachers and educators in the Philippines.
          </p>
        </div>
      </section>
      <div className="h-1 gold-bar" />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {types.map((type) => (
            <div key={type.id} id={type.id} className="bg-white rounded-2xl border border-[#E8E0D4] shadow-sm overflow-hidden">
              <div className="h-2" style={{ background: type.color }} />
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold text-[#0B1F4B] mb-1">{type.title}</h2>
                <p className="text-2xl font-bold mb-6" style={{ color: type.color }}>{type.fee}</p>
                <ul className="space-y-3 mb-8">
                  {type.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-[#C9A84C] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors text-white"
                  style={{ background: type.color }}
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EBF2FA] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-[#0B1F4B] mb-4">Questions about Membership?</h2>
          <p className="text-gray-500 mb-6">Contact the PAFTE national office for assistance with your membership application.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0B1F4B] text-white hover:bg-[#C9A84C] hover:text-[#0B1F4B] font-semibold px-6 py-3 rounded-lg transition-colors">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
