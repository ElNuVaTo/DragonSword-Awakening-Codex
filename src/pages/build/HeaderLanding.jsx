const links = [
  {
    name: "Steam",
    link: "https://store.steampowered.com/app/4570720/DragonSword__Awakening/",
    icon: `${import.meta.env.BASE_URL}icons8-steam-circled.svg`,
    hex: "#FFFFFF",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@DragonSwordAwakening/videos",
    icon: `${import.meta.env.BASE_URL}icons8-youtube.svg`,
    hex: "#FF0000",
  },
  {
    name: "Twitter",
    link: "https://x.com/DSAwakening",
    icon: `${import.meta.env.BASE_URL}icons8-x.svg`,
    hex: "#FFFFFF",
  },
  {
    name: "Discord",
    link: "https://discord.gg/dragonswordawakening",
    icon: `${import.meta.env.BASE_URL}icons8-discord.svg`,
    hex: "#5865F2",
  },
  {
    name: "Hound",
    link: "https://www.hound13.com/",
    icon: `${import.meta.env.BASE_URL}Hound13.webp`,
    hex: null,
  },
];

const HeaderLanding = () => {
  return (
    <>
      <article className="relative h-[35vh] w-full overflow-hidden">
        <img
          src="https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/Event/024/Event_024_Background.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[35%_39%] brightness-75 maskImage"
        />

        <div className="absolute right-5 top-4 z-10 flex items-center gap-1.5">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              title={item.name}
              className="group flex size-8 items-center justify-center rounded-full transition-all duration-200 hover:bg-black/20"
            >
              <img
                src={item.icon}
                alt={item.name}
                draggable={false}
                className="size-4 object-contain opacity-45 transition-all duration-200 group-hover:scale-110 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </article>
    </>
  );
};

export default HeaderLanding;
