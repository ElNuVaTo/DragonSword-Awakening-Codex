const TREASURE_BOX_IMAGE = "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Inter/Icon_Rhomb_Inter_Box.png";

const MINIGAME_IMAGES = {
  Fly: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/MiniGame/MiniGM_marmot_01.png",
  Mole: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/MiniGame/MiniGM_Icon_Marmot_01.png",
  PressurePlate: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/MiniGame/MiniGM_marmot_02.png",
};

const backgroundsFrame = {
  LEGENDARY: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_05.png",
  EPIC: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_04.png",
  RARE: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_03.png",
  SUPERIOR: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_02.png",
  NORMAL: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Grade_01.png",
};

const MarkTreasureCard = ({ mark, x, y, isSelected, isCompleted, onSelect }) => {
  const type = mark.type;

  const grade = mark.item?.Grade;
  const frame = backgroundsFrame[grade];

  const miniGameType = mark.item?.MiniGameType;
  const isMiniGame = type === "TreasureBox" && Boolean(miniGameType);

  const isGathering = type === "Gathering";
  const isMining = type === "Mining";
  const isTreasureBox = type === "TreasureBox";

  const icon = isMining ? mark.item?.IconName : isGathering ? mark.item?.IconName : isMiniGame ? MINIGAME_IMAGES[miniGameType] : TREASURE_BOX_IMAGE;

  return (
    <button
      type="button"
      className={`
        pointer-events-auto absolute
        flex size-2.75 items-center justify-center
        cursor-pointer rounded-sm
        transition-all duration-150
        hover:scale-105
        ${isSelected ? "z-50 scale-105" : "z-0"}
        ${isCompleted ? "opacity-25" : "opacity-100"}
      `}
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
    >
      {isTreasureBox && !isMiniGame && frame && (
        <img src={frame} alt="" className="pointer-events-none absolute inset-0 size-full rounded-sm object-cover" draggable={false} />
      )}

      <img
        src={icon}
        alt=""
        className="
          pointer-events-none absolute inset-0 size-full object-contain
          transition-all duration-150
        "
        draggable={false}
      />

      {isSelected && <ToolTip mark={mark} />}
    </button>
  );
};

const ToolTip = ({ mark }) => {
  const titles = {
    TreasureBox: "Treasure Chest",
    Gathering: "Gathering",
    Mining: "Mining",
  };

  return (
    <div
      className="
        absolute left-1/2 top-full z-50 mt-3
        w-56 -translate-x-1/2
        overflow-hidden
        rounded-lg
        border border-white/15
        bg-black/85
        shadow-2xl
        backdrop-blur-md
      "
      onClick={(event) => event.stopPropagation()}
    >
      <div className="relative h-28 w-full overflow-hidden">
        <img
          src="https://img.magnific.com/free-vector/silhouette-skyline-illustration_53876-78791.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Ayuda visual"
          className="size-full object-cover"
        />

        <div
          className="
            absolute inset-x-0 bottom-0 h-12
            bg-linear-to-t
            from-black/90
            to-transparent
          "
        />

        <span
          className="
            absolute bottom-2 left-3
            text-xs font-medium
            text-white
          "
        >
          {titles[mark.type] ?? mark.displayName}

          <p>{mark.id.name}</p>
        </span>
      </div>
    </div>
  );
};

export default MarkTreasureCard;
