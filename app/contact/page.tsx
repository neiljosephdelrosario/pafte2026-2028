"use client";
import { Mail, Phone, MapPin, Play } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#FAF7F2]">
      <section className="bg-[#0B1F4B] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Reach Out</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Contact Us</h1>
          <p className="text-white/60 text-lg">We&apos;d love to hear from you.</p>
        </div>
      </section>
      <div className="h-1 gold-bar" />

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-bold text-[#0B1F4B] mb-6">Get in Touch</h2>
          <div className="space-y-5 mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#EBF2FA] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-semibold text-[#0B1F4B]">Address</p>
                <p className="text-gray-600 text-sm">10 Boston Street, Brgy. Kaunlaran, Cubao, Quezon City</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#EBF2FA] flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-semibold text-[#0B1F4B]">Email</p>
                <a href="mailto:info@pafte.org" className="text-[#C9A84C] hover:underline text-sm">info@pafte.org</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#EBF2FA] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#C9A84C]" />
              </div>
              <div>
                <p className="font-semibold text-[#0B1F4B]">Phone</p>
                <p className="text-gray-600 text-sm">(02) 8721 2715 / (02) 8723 1560</p>
                <p className="text-gray-600 text-sm">09185375190</p>
              </div>
            </div>
          </div>

          <h3 className="font-semibold text-[#0B1F4B] mb-3">Follow PAFTE</h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/PAFTE.NATIONAL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#1877F2] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
               Facebook
            </a>
            <a href="https://www.youtube.com/channel/UC9pAzCoKakeCDHijJ6HOtwA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#FF0000] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <Play size={16} /> YouTube
            </a>
          </div>
        </div>

        <form className="bg-white rounded-2xl shadow-sm border border-[#E8E0D4] p-8 space-y-5">
          <h2 className="font-display text-xl font-bold text-[#0B1F4B]">Send a Message</h2>
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
            <textarea rows={5} placeholder="Your message..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] resize-none" />
          </div>
          <button type="submit" className="w-full bg-[#0B1F4B] hover:bg-[#C9A84C] text-white hover:text-[#0B1F4B] font-semibold py-3 rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
