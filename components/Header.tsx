export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold gradient-text">SocialFlow AI</div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="hover:text-indigo-400 transition">Accueil</a>
            <a href="/pricing" className="hover:text-indigo-400 transition">Tarifs</a>
          </nav>
        </div>
      </div>
    </header>
  );
}