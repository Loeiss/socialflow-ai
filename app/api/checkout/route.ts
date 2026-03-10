import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-04-10" });
export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();
    const plans: Record<string, { name: string; amount: number; mode: "payment" | "subscription" }> = {
      free: { name: "Free Trial", amount: 0, mode: "payment" },
      founding: { name: "Pro Monthly", amount: 2900, mode: "subscription" },
      lifetime: { name: "Lifetime Deal", amount: 4900, mode: "payment" },
    };
    const p = plans[plan];
    if (!p) return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    const isSub = p.mode === "subscription";
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price_data: { currency: "eur", product_data: { name: p.name, description: "SocialFlow AI" }, unit_amount: p.amount, ...(isSub ? { recurring: { interval: "month" } } : {}) }, quantity: 1 }],
      mode: isSub ? "subscription" : "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      metadata: { plan },
    });
    return NextResponse.json({ sessionId: session.id, checkoutUrl: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}