import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Currently validates and logs the message.
 * Replace the console.log with an email / CRM call (Resend, SendGrid, Formspree, Slack webhook, …).
 */
export async function POST(req: Request) {
  try {
    const b = await req.json();
    const ok =
      typeof b.name === "string" && b.name.trim() &&
      typeof b.email === "string" && /^\S+@\S+\.\S+$/.test(b.email) &&
      typeof b.message === "string" && b.message.trim().length >= 10;
    if (!ok) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    console.log("[contact]", { name: b.name, email: b.email, phone: b.phone, service: b.service, message: b.message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
