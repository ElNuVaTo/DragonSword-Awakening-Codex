const Footer = () => {
  return (
    <footer className="content-area mx-auto mt-15 flex w-full  max-w-300 items-center justify-between  px-2 py-3.5">
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-white/40">© DragonSword: Awakening — Codex</span>

        <span className="h-3 w-px bg-white/10" />

        <span className="text-[10px] text-white/25">No afiliado a Hound13 Inc.</span>
      </div>

      <nav className="flex items-center gap-4">
        <a href="/terms/" className="text-[10px] text-white/30 transition-colors hover:text-white/70">
          Términos
        </a>

        <a href="/privacy/" className="text-[10px] text-white/30 transition-colors hover:text-white/70">
          Privacidad
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
