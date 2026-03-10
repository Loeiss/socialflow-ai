import { CheckoutButton } from "@/components/CheckoutButton";
import { SubscriberCounter } from "@/components/SubscriberCounter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">SocialFlow AI</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">Ton equipe social media. Powered by AI.</p>
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Cree, planifie et publie du contenu social media professionnel en minutes. Laisse l&apos;IA gerer ta strategie pendant que tu te concentres sur ton business.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <CheckoutButton plan="lifetime" label="Lifetime Deal - 49\u20AC" />
            <CheckoutButton plan="founding" label="29\u20AC/mois" />
          </div>
          <SubscriberCounter />
        </div>
      </section>
      <section className="section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Le probleme</h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="flex items-start gap-3"><span className="text-red-500 mt-1">\u2717</span><span>Creer du contenu social qui performe prend des heures</span></p>
              <p className="flex items-start gap-3"><span className="text-red-500 mt-1">\u2717</span><span>Gerer plusieurs plateformes est une galere</span></p>
              <p className="flex items-start gap-3"><span className="text-red-500 mt-1">\u2717</span><span>Tu ne sais jamais quel contenu fonctionne</span></p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Notre solution</h2>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="flex items-start gap-3"><span className="text-green-500 mt-1">\u2713</span><span>IA qui genere du contenu optimise pour ton audience</span></p>
              <p className="flex items-start gap-3"><span className="text-green-500 mt-1">\u2713</span><span>Publie sur toutes tes plateformes en un clic</span></p>
              <p className="flex items-start gap-3"><span className="text-green-500 mt-1">\u2713</span><span>Analytics en temps reel</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Fonctionnalites</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card"><h3 className="text-xl font-bold mb-3 gradient-text">Generation IA</h3><p className="text-gray-400">Genere du contenu unique et engageant avec notre IA avancee.</p></div>
            <div className="card"><h3 className="text-xl font-bold mb-3 gradient-text">Analytics</h3><p className="text-gray-400">Comprends tes performances avec des metriques detaillees.</p></div>
            <div className="card"><h3 className="text-xl font-bold mb-3 gradient-text">Planification</h3><p className="text-gray-400">Planifie tes publications et laisse l&apos;IA les publier au moment optimal.</p></div>
          </div>
        </div>
      </section>
      <section id="pricing" className="section max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Pricing</h2>
        <p className="text-gray-400 text-center mb-16">Choisis le plan qui te convient</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card"><h3 className="text-2xl font-bold mb-2">Free Trial</h3><p className="text-gray-400 mb-6">7 jours gratuits</p><div className="text-4xl font-bold mb-8">0\u20AC<span className="text-lg text-gray-400">/7j</span></div><ul className="space-y-3 mb-8 text-gray-300"><li>5 publications/mois</li><li>IA basique</li><li>1 plateforme</li></ul><CheckoutButton plan="free" label="Essai gratuit" fullWidth /></div>
          <div className="card border-indigo-500 relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">POPULAIRE</div><h3 className="text-2xl font-bold mb-2">Pro Mensuel</h3><p className="text-gray-400 mb-6">Acces complet</p><div className="text-4xl font-bold mb-8">29\u20AC<span className="text-lg text-gray-400">/mois</span></div><ul className="space-y-3 mb-8 text-gray-300"><li>Publications illimitees</li><li>IA avancee + analytics</li><li>Toutes les plateformes</li><li>Support prioritaire</li></ul><CheckoutButton plan="founding" label="S&apos;abonner" fullWidth /></div>
          <div className="card border-green-500 relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">EARLY BIRD</div><h3 className="text-2xl font-bold mb-2">Lifetime Deal</h3><p className="text-gray-400 mb-6">Paiement unique</p><div className="text-4xl font-bold mb-2">49\u20AC<span className="text-lg text-gray-400"> une fois</span></div><p className="text-green-400 text-sm mb-6">au lieu de 348\u20AC/an</p><ul className="space-y-3 mb-8 text-gray-300"><li>Tout le plan Pro</li><li>Acces a vie</li><li>Futures MAJ incluses</li><li>Places limitees</li></ul><CheckoutButton plan="lifetime" label="Acheter maintenant" fullWidth /></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}