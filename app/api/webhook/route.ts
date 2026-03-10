import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-04-10" });
const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "");
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature") || "";
  try {
    const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET || "");
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const email = session.customer_details?.email;
      const plan = session.metadata?.plan || "free";
      if (email) {
        await supabase.from("subscribers").insert({ email, plan, created_at: new Date().toISOString() });
        await resend.emails.send({ from: "SocialFlow AI <onboarding@resend.dev>", to: email, subject: "Bienvenue sur SocialFlow AI!", html: "<h1>Bienvenue!</h1><p>Merci. Plan: " + plan + "</p>" });
      }
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}