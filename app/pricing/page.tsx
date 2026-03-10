import { CheckoutButton } from "@/components/CheckoutButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 gradient-text">Nos tarifs</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card"><h3 className="text-2xl font-bold mb-2">Free Trial</h3><p className="text-gray-400 mb-6">7 jours</p><div className="text-4xl font-bold mb-8">0\u20AC</div><CheckoutButton plan="free" label="Commencer" fullWidth /></div>
            <div className="card border-indigo-500"><h3 className="text-2xl font-bold mb-2">Pro Mensuel</h3><p className="text-gray-400 mb-6">Acces complet</p><div className="text-4xl font-bold mb-8">29\u20AC<span className="text-lg text-gray-400">/mois</span></div><CheckoutButton plan="founding" label="S&apos;abonner" fullWidth /></div>
            <div className="card border-green-500"><h3 className="text-2xl font-bold mb-2">Lifetime</h3><p className="text-gray-400 mb-6">Paiement unique</p><div className="text-4xl font-bold mb-8">49\u20AC</div><CheckoutButton plan="lifetime" label="Acheter" fullWidth /></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}