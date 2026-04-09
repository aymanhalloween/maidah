import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const cleaned = email.trim().toLowerCase();

    if (!GOOGLE_SCRIPT_URL) {
      console.log("No GOOGLE_SCRIPT_URL set. Email received:", cleaned);
      return NextResponse.json({ success: true });
    }

    // Google Apps Script redirects POST requests (302).
    // fetch follows redirects but changes POST to GET, which breaks.
    // So we follow the redirect manually.
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cleaned }),
      redirect: "follow",
    });

    // Google Apps Script returns 200 on success even after redirect.
    // A 401 or 404 means the script isn't deployed correctly.
    if (res.status === 401 || res.status === 404) {
      console.error("Google Script returned", res.status);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
