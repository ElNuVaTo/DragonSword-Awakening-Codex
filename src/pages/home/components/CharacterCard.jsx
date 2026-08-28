const CharacterCard = ({ id, name, src, trait, statuses, statusList, setCharacterSelect }) => {
  const handleClick = () => {
    setCharacterSelect(id);
  };

  return (
    <button
      type="button"
      title={name}
      onClick={handleClick}
      className="relative flex h-15 w-35 min-w-0 cursor-pointer select-none overflow-hidden rounded-sm border border-white/10 bg-neutral-950 shadow-lg shadow-black/40 transition-transform hover:scale-[1.03]"
    >
      <img src={src.portrait} alt={name} draggable={false} className="absolute inset-y-0 left-0 h-full w-15 object-cover object-center opacity-95" />

      <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-black/20 to-black/90" />

      <div className="relative z-10 ml-15 flex min-w-0 flex-1 flex-col justify-between px-1.5 py-1.5">
        <div className="flex min-w-0 items-start justify-between gap-1">
          <p className="min-w-0 truncate pr-1 text-left text-[11px] font-semibold leading-4 text-white">{name}</p>

          <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-neutral-950/90">
            <img src={trait.src} alt={trait.name} draggable={false} className="size-full object-contain p-0.5" />
          </span>
        </div>

        <div className="flex justify-end gap-1 ">
          {statuses.map((status) => {
            const data = statusList[status];

            if (!data) return null;

            return (
              <span key={status} title={data.name} className="flex size-4 items-center justify-center rounded-sm border border-white/10 bg-neutral-950/80">
                <img src={data.src} alt={data.name} draggable={false} className="size-full object-contain" />
              </span>
            );
          })}
        </div>
      </div>
    </button>
  );
};

export default CharacterCard;
