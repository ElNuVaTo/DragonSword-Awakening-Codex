const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">
              DragonSword: Awakening Wiki
            </p>

            <p className="mt-1 text-xs text-white/40">
              Wiki comunitaria · No afiliada a Hound13 Inc.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/40">
            <a href="/guides/" className="transition hover:text-white">
              Términos de servicio
            </a>
            <a href="/characters/" className="transition hover:text-white">
              Política de privacidad
            </a>
            <a href="/tier-list/" className="transition hover:text-white">
              Política de cookies
            </a>
          </nav>
        </div>

        <div className="mt-6 border-t border-white/5 pt-4">
          <p className="text-xs text-white/25">
            © 2026 dragonswordawakening.wiki · DragonSword: Awakening © Hound13
            Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
