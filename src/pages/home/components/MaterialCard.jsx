const MaterialCard = ({ name, src }) => {
  return (
    <div className="group relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-(--border) bg-(--background-secondary) transition-all duration-150 hover:border-(--primary)">
      {src ? (
        <img
          src={src}
          alt={name}
          className="absolute inset-0 h-full w-full object-contain p-1 transition-transform duration-150 group-hover:scale-105"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-[8px] text-(--text-secondary)">
          Sin imagen
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 via-black/25 to-transparent px-1 pt-4 pb-1">
        <p
          title={name}
          className="truncate text-center text-[9px] font-medium leading-none text-white"
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default MaterialCard;
