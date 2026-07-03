"use client";
import { FileText, Download, Eye, Maximize2, X } from "lucide-react";
import { useState } from "react";

export default function WorkFinancialPlanPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#0B1F4B] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">Planning</p>
          <h1 className="font-display text-5xl font-bold text-white mb-5">Work &amp; Financial Plan</h1>
          <p className="text-white/60 text-lg">PAFTE 2026–2028 Work and Financial Plan</p>
        </div>
      </section>
      <div className="h-1 bg-[#C9A84C]" />

      {/* PDF Viewer */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-[#E8E0D4] shadow-sm overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
              <div>
                <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-1">Document</p>
                <h2 className="font-display text-2xl font-bold text-[#0B1F4B]">Work and Financial Plan 2026–2028</h2>
              </div>
              <div className="flex gap-3">
                <a
                  href="/WORK AND FINANCIAL PLAN (PAFTE) 2026 – 2028 (5).pdf"
                  download
                  className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0B1F4B] font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>

            {/* PDF Viewer */}
            <div 
              className="relative w-full rounded-xl overflow-hidden border border-[#E8E0D4] bg-[#FAF7F2] cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            >
              <div className="w-full aspect-[3/4] md:aspect-[4/3]">
                <iframe
                  src="/WORK AND FINANCIAL PLAN (PAFTE) 2026 – 2028 (5).pdf#toolbar=0"
                  className="w-full h-full"
                  title="PAFTE Work and Financial Plan 2026-2028"
                  style={{ border: "none" }}
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                <Maximize2 size={14} />
                Click to expand
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                <Eye size={14} className="inline mr-1" />
                Click the document to view in fullscreen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div 
            className="relative w-full max-w-7xl h-[90vh] bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>
            <iframe
              src="/WORK AND FINANCIAL PLAN (PAFTE) 2026 – 2028 (5).pdf"
              className="w-full h-full"
              title="PAFTE Work and Financial Plan 2026-2028 - Fullscreen"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}