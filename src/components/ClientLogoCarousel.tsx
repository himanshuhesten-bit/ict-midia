"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/lib/clients";

export default function ClientLogoCarousel({ limit = 12 }: { limit?: number }) {
  const displayList = clients.slice(0, limit);

  return (
    <div className="w-full">
      {/* Minimalist, Low-Scroll Compact Logo Strip */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {displayList.map((client) => (
          <div
            key={client.id}
            title={`${client.name} — ${client.full}`}
            className="group flex h-20 items-center justify-center rounded-lg border border-line bg-white p-3 transition-colors hover:border-teal/50 hover:bg-mist/40"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={130}
              height={55}
              className="max-h-10 w-auto object-contain filter grayscale opacity-75 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-navy/60">
        <span>Empanelled with 23+ State Authorities, PSUs & Civic Bodies</span>
        <Link
          href="/clients"
          className="inline-flex items-center gap-1 font-semibold text-teal hover:underline"
        >
          View all clients & impact →
        </Link>
      </div>
    </div>
  );
}
