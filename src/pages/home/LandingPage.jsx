import { useState, useEffect } from "react";

import header from "../../assets/Background/Event_018_Background.png";
import name from "../../assets/Background/DragonSword.png";

const links = [
  {
    name: "Steam",
    link: "https://store.steampowered.com/app/4570720/DragonSword__Awakening/",
    icon: "/steam-brands-solid.svg",
    hex: "#FFFFFF",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@DragonSwordAwakening/videos",
    icon: "/youtube-brands-solid.svg",
    hex: "#FF0000",
  },
  {
    name: "Twitter",
    link: "https://x.com/DSAwakening",
    icon: "/twitter-brands-solid.svg",
    hex: "#FFFFFF",
  },
  {
    name: "Discord",
    link: "https://discord.gg/dragonswordawakening",
    icon: "/discord-brands-solid.svg",
    hex: "#5865F2",
  },
  {
    name: "Hound",
    link: "https://www.hound13.com/",
    icon: "/Hound13.webp",
    hex: null,
  },
];

const LandingPage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <article className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <img
          className="absolute inset-0 h-full w-full object-cover brightness-[0.45]"
          src={header}
          alt="className"
          draggable={false}
          style={{
            transform: `translateY(${offset * 0.2}px)`,
          }}
        />

        {/* Atmospheric gradients */}
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/20 to-black/20" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/90" />

        {/* Top */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 py-5 md:px-15">
          <img
            className="w-35 object-contain drop-shadow-2xl md:w-44"
            src={name}
            alt="Nombre del juego"
            draggable={false}
          />
        </header>

        {/* Main content */}
        <div className="relative flex items-center z-10 min-h-screen px-6 pt-28 pb-32  lg:px-15">
          <div className="flex justify-between w-full  items-center">
            <section className="max-w-2xl">
              <h1 className="max-w-xl text-5xl font-bold uppercase leading-[0.9] tracking-tight drop-shadow-2xl md:text-6xl lg:text-7xl">
                Explora
                <span className="block text-white/90">el mundo de</span>
                <span className="block text-[var(--primary)]">
                  Dragon Awakening
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                Una wiki comunitaria para descubrir todo lo que ofrece. Explora
                el equipamiento de cada personaje, prueba distintas
                combinaciones. Carga tu partida para comprobar qué cofres te
                faltan, descubre las últimas novedades. Utiliza nuestras
                herramientas para completar tu aventura.
              </p>
            </section>

            <section className="w-full max-w-140 justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Ver tráiler
                  </span>
                </div>

                <div className="aspect-video w-full bg-black">
                  <iframe
                    className="block h-full w-full"
                    src="https://www.youtube.com/embed/bvqGAuu-ZIM"
                    title="DragonSword: Awakening Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Social */}
        <footer className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between bg-linear-to-t from-black/20 via-black/40 to-transparent px-6 pt-8 pb-2.5 md:px-15">
          <span className="text-[10px] uppercase tracking-widest text-white/35">
            DragonSword: Awakening Wiki · No afiliada a Hound13 Inc.
          </span>

          <div className="flex gap-2">
            {links.map(({ name, link, icon, hex }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="group relative flex h-8 w-8 items-center justify-center rounded-lg   text-white/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:shadow-lg"
              >
                {hex ? (
                  <span
                    aria-hidden="true"
                    className="h-[18px] w-[18px] opacity-70 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100"
                    style={{
                      backgroundColor: hex,
                      mask: `url("${icon}") center / contain no-repeat`,
                      WebkitMask: `url("${icon}") center / contain no-repeat`,
                    }}
                  />
                ) : (
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="h-[18px] w-[18px] object-contain opacity-70 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100"
                  />
                )}
              </a>
            ))}
          </div>
        </footer>
      </article>
    </>
  );
};

export default LandingPage;
