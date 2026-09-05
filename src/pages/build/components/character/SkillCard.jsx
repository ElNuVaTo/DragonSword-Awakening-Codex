const SkillCard = ({name, icon, description}) => {
  const frame = "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Circle_Skill.png";
  const damage = "10.2093";

  return (
    <article className="group relative flex h-15 w-55 items-center rounded-xs border border-white/6 bg-black/35 transition-all duration-200 hover:border-white/15 hover:bg-white/2.5">
      <div className="absolute left-0 top-1.5 h-11 w-px bg-white/10 transition-colors duration-200 group-hover:bg-white/30" />

      <div className="absolute -left-7 z-10 flex size-14 items-center justify-center">
        <img
          src={frame}
          alt=""
          draggable={false}
          className="absolute inset-0 size-full object-contain transition-transform duration-200 group-hover:scale-105"
        />

        <img src={icon} alt={name} draggable={false} className="relative size-9 object-contain" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center pl-8 pr-2">
        <span className="truncate text-[9px] font-medium tracking-wide text-white/75 transition-colors group-hover:text-white/95">{name}</span>

        <p className="mt-0.5 line-clamp-1 text-[8px] leading-3 text-white/30">{description}</p>
      </div>

      <div className="flex h-9 shrink-0 flex-col justify-center border-l border-white/8 px-2.5">
        <span className="text-[6px] font-medium uppercase tracking-[0.2em] text-white/25">Daño</span>

        <span className="mt-0.5 font-mono text-[12px] font-medium tabular-nums text-white/85">{damage}</span>
      </div>
    </article>
  );
};

export default SkillCard;
