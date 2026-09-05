const Footer = () => {
  return (
    <footer className="mx-auto mt-12 w-395 max-w-full border-t border-white/10 px-6 py-5">
      <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/40">© DragonSword: Awakening — Codex</p>

        <nav className="flex flex-wrap gap-x-4 gap-y-1.5">
          <a href="/guides/" className="text-white/35 transition hover:text-white/70">
            Términos
          </a>
          <a href="/characters/" className="text-white/35 transition hover:text-white/70">
            Privacidad
          </a>
        </nav>
      </div>

      <p className="mt-2 text-[11px] text-white/25">No afiliado a Hound13 Inc.</p>
    </footer>
  );
};

export default Footer;
