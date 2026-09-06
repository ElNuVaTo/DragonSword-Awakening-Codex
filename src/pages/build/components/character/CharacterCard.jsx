const CharacterCard = ({ id, src, setCharacterSelect, characterSelect }) => {
  const handleClick = () => {
    setCharacterSelect(id);
  };

  const isSelected = characterSelect === id;

  return (
    <button onClick={handleClick} className="relative flex size-17 shrink-0 cursor-pointer items-center justify-center rounded-full">
      <img
        src={
          isSelected
            ? "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Select_13.png"
            : "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Character_Gauge_Bg.png"
        }
        alt=""
        draggable={false}
        className="absolute top-0 h-full w-full"
      />

      <div className="z-1 size-14 overflow-hidden rounded-full">
        <img src={src} alt="" draggable={false} className="h-full w-full rounded-full" />
      </div>
    </button>
  );
};

export default CharacterCard;
