const backgroundsFrame = {
  LEGENDARY: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_05.png",
  EPIC: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_04.png",
  RARE: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_03.png",
  SUPERIOR: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_02.png",
  NORMAL: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_01.png",
};

const MaterialChestCard = ({ src, name, grade, treasureChestGrades, setTreasureChestGrades }) => {
  const isActive = treasureChestGrades.includes(grade);

  const frame = backgroundsFrame[grade];

  const handleClick = () => {
    setTreasureChestGrades((prev) => {
      if (prev.includes(grade)) {
        return prev.filter((item) => item !== grade);
      }

      return [...prev, grade];
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        group relative size-13.5 cursor-pointer
        overflow-hidden rounded-md border
        bg-black/55 backdrop-blur-sm
        transition-all duration-150
        ${isActive ? "border-(--primary) bg-black/65 shadow-[0_0_8px_rgba(255,255,255,0.12)]" : "border-white/10 hover:border-white/25 hover:bg-black/65"}
      `}
    >
      {src ? (
        <div className="absolute inset-0">
          {/* FRAME */}
          {frame && (
            <img
              src={frame}
              alt=""
              draggable={false}
              className={`
                absolute inset-0 size-full
                object-cover
                transition-all duration-150
                ${isActive ? "opacity-100" : "opacity-75"}
              `}
            />
          )}

          {/* COFRE */}
          <img
            src={src}
            alt=""
            draggable={false}
            className={`
              absolute inset-0 size-full
              object-contain p-2
              transition-all duration-150
              ${isActive ? "opacity-100" : "opacity-75"}
              group-hover:scale-105
            `}
          />
        </div>
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-[8px] text-(--text-secondary)">Sin imagen</span>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/80 via-black/35 to-transparent px-1 pt-3 pb-1">
        <p
          title={name}
          className={`
            relative line-clamp-2 text-center
            text-[9px] font-medium leading-3
            text-white transition-opacity duration-150
            ${isActive ? "opacity-100" : "opacity-60"}
          `}
        >
          {name}
        </p>
      </div>
    </button>
  );
};

export default MaterialChestCard;
