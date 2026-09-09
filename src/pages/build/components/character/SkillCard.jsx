const SkillCard = ({ name, icon, description }) => {
  const frame =
    "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Circle_Skill.png";

  const damage = "10.2093";

  return (
    <article className="group relative flex h-20 w-full items-center border-b border-white/5 px-3 transition-colors duration-200 hover:bg-white/[0.025]">
      {/* Icono */}
      <div className="relative flex size-12 shrink-0 items-center justify-center">
        <img
          src={frame}
          alt=""
          draggable={false}
          className="absolute inset-0 size-full object-contain opacity-50 transition-opacity duration-200 group-hover:opacity-80"
        />

        <img
          src={icon}
          alt={name}
          draggable={false}
          className="relative size-7.5 object-contain"
        />
      </div>

      {/* Nombre + descripción */}
      <div className="min-w-0 flex-1 pl-3">
        <span className="ui-body block truncate font-medium text-white/75 transition-colors group-hover:text-white">
          {name}
        </span>

        <p className="mt-1 line-clamp-2 text-[9px] leading-3.5 text-white/35">
          {description}
        </p>
      </div>

      {/* Daño */}
      <div className="flex w-20 shrink-0 flex-col items-end">
        <span className="ui-micro">
          Daño
        </span>

        <span className="ui-value mt-1 font-medium text-white/70">
          {damage}
        </span>
      </div>
    </article>
  );
};

export default SkillCard;