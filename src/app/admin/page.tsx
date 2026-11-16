import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  const expected = process.env.ADMIN_KEY || "ictadmin";

  if (key !== expected) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-mist p-6">
        <form className="w-full max-w-sm space-y-4 rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="font-display text-2xl font-black text-navy">Admin access</h1>
          <input name="key" type="password" placeholder="Admin key" className="w-full rounded-xl border border-navy/15 px-4 py-3" />
          <button className="w-full rounded-xl bg-navy py-3 font-bold text-white">Enter</button>
        </form>
      </main>
    );
  }

  const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));

  return (
    <main className="min-h-screen bg-mist p-6 lg:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-3xl font-black text-navy">Inquiries ({rows.length})</h1>
          <Link href="/" className="text-sm font-semibold text-teal">← Back to site</Link>
        </div>
        {rows.length === 0 ? (
          <p className="rounded-2xl bg-white p-8 text-center text-ink/60">No inquiries yet.</p>
        ) : (
          <div className="space-y-4">
            {rows.map((r) => (
              <div key={r.id} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-display text-lg font-extrabold text-navy">
                    {r.name} {r.organization && <span className="font-normal text-ink/60">· {r.organization}</span>}
                  </p>
                  <p className="text-xs text-ink/50">{r.createdAt.toLocaleString("en-IN")}</p>
                </div>
                <p className="mt-1 text-sm text-ink/70">
                  {r.email} {r.phone && `· ${r.phone}`}
                  {r.service && <span className="ml-2 rounded-full bg-teal/15 px-2 py-0.5 text-xs font-semibold text-teal">{r.service}</span>}
                </p>
                <p className="mt-3 whitespace-pre-wrap text-ink/80">{r.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
