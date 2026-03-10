"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="text-6xl mb-8">\ud83c\udf89</div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Merci!</h1>
          <p className="text-xl text-gray-300 mb-8">Ton acces a SocialFlow AI est confirme. Tu vas recevoir un email avec tes identifiants.</p>
          <a href="/" className="btn-primary inline-block">Retour</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}