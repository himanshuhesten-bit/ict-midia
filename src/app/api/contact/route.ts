import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const s = (k: string, max: number) =>
      typeof body[k] === "string" ? (body[k] as string).trim().slice(0, max) : "";
    const name = s("name", 160);
    const email = s("email", 200);
    const message = s("message", 5000);
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide your name, a valid email and a message." },
        { status: 400 }
      );
    }
    await db.insert(inquiries).values({
      name,
      email,
      message,
      phone: s("phone", 40) || null,
      organization: s("organization", 200) || null,
      service: s("service", 120) || null,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
