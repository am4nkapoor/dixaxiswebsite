import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "info@divaxis.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "DivAxis Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Newsletter signup is not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = (body.email || "").trim();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const safeEmail = escapeHtml(email);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `Newsletter Signup - DivAxis`,
      text: `New newsletter signup: ${email}`,
      html: `<h2>Newsletter Signup</h2><p><strong>Email:</strong> ${safeEmail}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json(
      { error: "Failed to sign up" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m] ?? m);
}
