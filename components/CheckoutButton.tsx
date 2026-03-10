"use client";
import { useState } from "react";
interface Props { plan: "free" | "founding" | "lifetime"; label: string; fullWidth?: boolean; }
export function CheckoutButton({ plan, label, fullWidth = false }: Props) {
  const [loading, setLoading] = useState(false);
  const go = async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan }) });
      const d = await r.json();
      if (d.checkoutUrl) window.location.href = d.checkoutUrl;
      else alert("Erreur");
    } catch { alert("Erreur"); } finally { setLoading(false); }
  };
  return (<button onClick={go} disabled={loading} className={`btn-primary ${fullWidth?"w-full":""} ${loading?"opacity-50":""}`}>{loading?"...":label}</button>);
}