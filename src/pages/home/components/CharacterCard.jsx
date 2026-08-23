const CharacterCard = ({ name, srcFrontPage, element }) => {
  return (
    <button
      type="button"
      title={`${name} · ${element.name}`}
      className="animationPerspectiveCard group relative h-36 w-27.5 cursor-pointer select-none overflow-hidden rounded-sm border border-white/10 bg-neutral-900 transition-[border-color,transform] duration-200 hover:border-white/20 hover:-translate-y-0.5"
    >
      <img
        src={srcFrontPage}
        alt=""
        draggable={false}
        className="h-full w-full object-cover"
      />

  

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/60 to-transparent transition-all duration-500 ease-out group-hover:h-full group-hover:from-black group-hover:via-black/75 group-hover:to-black/10"
      />

      <span className="absolute right-2 top-2 z-20 flex size-6 items-center justify-center rounded-full border border-white/10 bg-black/55 backdrop-blur-sm">
        <img
          src={element.image}
          alt=""
          draggable={false}
          className="size-4 object-contain"
        />
      </span>

      <span className="absolute inset-x-0 bottom-0 z-20 px-2 py-2.5 text-center text-xs font-semibold text-white">
        {name}
      </span>
    </button>
  );
};

export default CharacterCard;
