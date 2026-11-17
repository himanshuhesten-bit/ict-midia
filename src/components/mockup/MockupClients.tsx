"use client";

import ClientLogoCarousel from "@/components/ClientLogoCarousel";

export default function MockupClients() {
  return (
    <section className="bg-white border-b border-line py-8 sm:py-10" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientLogoCarousel limit={23} />
      </div>
    </section>
  );
}
