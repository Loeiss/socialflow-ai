"use client";
import { useEffect, useState } from "react";
export function SubscriberCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/api/subscribers").then(r=>r.json()).then(d=>setCount(d.count||0)).catch(()=>{});
    const i = setInterval(()=>fetch("/api/subscribers").then(r=>r.json()).then(d=>setCount(d.count||0)).catch(()=>{}), 30000);
    return ()=>clearInterval(i);
  }, []);
  return (
    <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-6 py-3">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-sm">{count} early adopters nous font confiance</span>
    </div>
  );
}