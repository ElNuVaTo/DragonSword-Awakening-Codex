const CharacterCard = ({ name, src, trait, statuses, statusList }) => {
  return (
    <button
      type="button"
      title={name}
      className="relative flex h-34 w-30 cursor-pointer select-none flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-neutral-950 shadow-lg shadow-black/40 transition-transform hover:scale-[1.03]"
    >
      {src?.medium && <img src={src.medium} alt={name} draggable={false} className="absolute inset-0 h-full w-full scale-105 object-contain opacity-95" />}

      <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

      {trait?.src && (
        <span className="z-20 flex h-6 w-6 overflow-hidden border-r border-b border-white/10 bg-neutral-900/90 backdrop-blur-sm">
          <img src={trait.src} alt={trait.name} draggable={false} className="h-full w-full object-contain p-1" />
        </span>
      )}

      <div className="relative z-10 mt-auto flex items-center justify-between p-1.5 pt-4">
        <div className="flex flex-col text-left">
          <p className="text-[11px] font-semibold leading-none text-white">{name}</p>
        </div>

        {statuses?.length > 0 && (
          <span className="flex gap-1.5">
            {statuses.map((status) => {
              const data = statusList?.[status];

              if (!data) return null;

              return (
                <span key={status} title={data.name} className="h-4 w-4 rounded-sm border border-white/10 bg-neutral-900/80 ">
                  <img src={data.src} alt={data.name} draggable={false} className="h-full w-full object-cover opacity-90" />
                </span>
              );
            })}
          </span>
        )}
      </div>
    </button>
  );
};

export default CharacterCard;
