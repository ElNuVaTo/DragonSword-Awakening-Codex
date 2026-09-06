const SkillCard = ({ name, icon, description }) => {
  const frame =
    "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Circle_Skill.png";

  const damage = "10.2093";

  return (
    <article className="group relative flex h-16 w-55 items-center rounded-sm bg-white/[0.025] px-2 transition-all duration-200 hover:bg-white/[0.05]">
      {/* Skill icon */}
      <div className="relative flex size-14 shrink-0 items-center justify-center">
        <img
          src={frame}
          alt=""
          draggable={false}
          className="absolute inset-0 size-full object-contain opacity-80 transition-transform duration-200 group-hover:scale-105 group-hover:opacity-100"
        />

        <img
          src={icon}
          alt={name}
          draggable={false}
          className="relative size-9 object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col justify-center pl-2">
        <span className="truncate text-[0.625rem] font-medium tracking-wide text-white/80 transition-colors group-hover:text-white">
          {name}
        </span>

        <p className="mt-0.5 line-clamp-2 text-[0.5rem] leading-3 text-white/35">
          {description}
        </p>
      </div>

      {/* Damage */}
      <div className="ml-2 flex shrink-0 flex-col items-end">
        <span className="text-[0.4375rem] font-medium uppercase tracking-[0.16em] text-white/25">
          Daño
        </span>

        <span className="mt-0.5 font-mono text-[0.6875rem] font-medium tabular-nums text-white/75">
          {damage}
        </span>
      </div>
    </article>
  );
};

export default SkillCard;