const CharacterCard = ({ id, src, setCharacterSelect }) => {
  const handleClick = () => {
    setCharacterSelect(id);
  };

  return (
    <button onClick={handleClick} className="flex justify-center items-center size-17  rounded-full cursor-pointer relative shrink-0">
      <img src="https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Character_Gauge_Bg.png" alt="" className="top-0 absolute h-full w-full" />

      <div className="z-1  size-14 rounded-full overflow-hidden">
        <img src={src} alt="" className="h-full w-full rounded-full" />
      </div>
    </button>
  );
};

export default CharacterCard;
