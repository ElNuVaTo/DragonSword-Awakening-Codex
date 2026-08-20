// Proceso sacar modelo 3D para usar en srcBackCover

const CharacterCard = ({ name, srcFrontPage, srcBackCover }) => {
  console.log();
  return (
    <button
      type="button"
      className="
    animationPerspectiveCard
    group
    relative
    aspect-5/6
    w-25
    h-30
    cursor-pointer
    overflow-hidden
    rounded-sm
    border border-white/10
    bg-neutral-900
    select-none
  "
    >
      <img
        src={srcFrontPage}
        alt=""
        draggable={false}
        className="
        h-full w-full
        object-cover"
      />

      <img
        src={srcBackCover}
        alt=""
        className="
        animationKeyHalf
        absolute
        z-10
        top-0
        h-full w-full
        object-cover"
      />

      <span
        aria-hidden="true"
        className="
        absolute inset-x-0 bottom-0
        h-1/2
        bg-linear-to-t
        from-black
        via-black/60
        to-transparent
        transition-all duration-700
        ease-out
        group-hover:h-full
        group-hover:from-black
        group-hover:via-black/75
        group-hover:to-black/10"
      />

      <span
        className="
        absolute inset-x-0 bottom-0
        px-2 py-3
        text-center text-xs font-semibold
        text-white"
      >
        {name}
      </span>
    </button>
  );
};

export default CharacterCard;
