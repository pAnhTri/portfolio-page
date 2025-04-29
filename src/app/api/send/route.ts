import ContactEmailTemplate from "@/lib/resend/ContactEmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log("request:", request);
    const { name, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["anhtp5@uci.edu"],
      subject: "Contact Form Submission from " + name,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
