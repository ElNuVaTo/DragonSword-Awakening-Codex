import LinkCard from "./LinkCard";

import steamIcon from "../assets/icons8-steam-circled.svg";
import youtubeIcon from "../assets/icons8-youtube.svg";
import xIcon from "../assets/icons8-x.svg";
import discordIcon from "../assets/icons8-discord.svg";
import houndIcon from "../assets/Hound13.webp";

const links = [
  {
    name: "Steam",
    link: "https://store.steampowered.com/app/4570720/DragonSword__Awakening/",
    icon: steamIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@DragonSwordAwakening/videos",
    icon: youtubeIcon,
  },
  {
    name: "Twitter",
    link: "https://x.com/DSAwakening",
    icon: xIcon,
  },
  {
    name: "Discord",
    link: "https://discord.gg/dragonswordawakening",
    icon: discordIcon,
  },
  {
    name: "Hound",
    link: "https://www.hound13.com/",
    icon: houndIcon,
  },
];

const HeaderLanding = () => {
  return (
    <nav className="content-area relative mx-auto flex h-max m items-center justify-between overflow-hidden px-5 py-2">
      <div className="flex items-center gap-10">
        <LinkCard to="/" text="Construye tu personaje" img="https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Mark/Icon_Mark_Equipment.png" />
        <LinkCard to="/word" text="Explora el mapa" img="https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Mark/Icon_Mark_TreasureMap.png" />
      </div>

      <div className="flex items-center gap-2">
        {links.map((item) => (
          <a key={item.name} href={item.link} target="_blank" rel="noreferrer" title={item.name} className="group flex size-7 items-center justify-center">
            <img
              src={item.icon}
              alt=""
              draggable={false}
              className="size-4 object-contain opacity-40 transition-all duration-200 group-hover:scale-110 group-hover:opacity-90"
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default HeaderLanding;
