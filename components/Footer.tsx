export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div><h3 className="font-bold mb-4 gradient-text">SocialFlow AI</h3><p className="text-gray-400 text-sm">Ton equipe social media. Powered by AI.</p></div>
          <div><h4 className="font-bold mb-4">Produit</h4><ul className="space-y-2 text-gray-400 text-sm"><li><a href="/pricing" className="hover:text-white">Tarifs</a></li><li><a href="mailto:mlogni52@gmail.com" className="hover:text-white">Contact</a></li></ul></div>
          <div><h4 className="font-bold mb-4">Legal</h4><ul className="space-y-2 text-gray-400 text-sm"><li><a href="#" className="hover:text-white">Confidentialite</a></li><li><a href="#" className="hover:text-white">CGV</a></li></ul></div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"><p>2026 SocialFlow AI. Tous droits reserves.</p></div>
      </div>
    </footer>
  );
}