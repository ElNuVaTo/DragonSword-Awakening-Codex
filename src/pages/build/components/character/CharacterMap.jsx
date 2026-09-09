import { useState } from "react";
import characters from "../../../../resources/characters.json";

import CharacterCard from "./CharacterCard";

const VISIBLE_COUNT = 10;
const SIDE_COUNT = 3;

const CharacterMap = ({ setCharacterSelect, characterSelect }) => {
  const [startIndex, setStartIndex] = useState(0);

  const total = characters.length;

  const getCharacter = (index) => {
    return characters[(index + total) % total];
  };

  const handleNext = () => {
    setStartIndex((current) => (current + 1) % total);
  };

  const handlePrevious = () => {
    setStartIndex((current) => (current - 1 + total) % total);
  };

  const visibleCharacters = Array.from({ length: VISIBLE_COUNT + SIDE_COUNT * 2 }, (_, index) => getCharacter(startIndex + index - SIDE_COUNT));

  const arrow = "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Icon_Arrow_06.png";

  return (
    <section className="flex items-center justify-between gap-5 w-full my-5">
      <button type="button" onClick={handlePrevious} className="group shrink-0 cursor-pointer">
        <img
          src={arrow}
          alt="Anterior"
          draggable={false}
          className="size-6 rotate-180 object-contain opacity-40 transition-opacity duration-200 group-hover:opacity-100"
        />
      </button>

      <div className="flex items-center gap-2.5 overflow-hidden">
        {visibleCharacters.map((character, index) => {
          return (
            <div key={`${character.id}-${index}`}>
              <CharacterCard id={character.id} src={character.ImageType.icon} setCharacterSelect={setCharacterSelect} characterSelect={characterSelect} />
            </div>
          );
        })}
      </div>

      <button type="button" onClick={handleNext} className="group shrink-0 cursor-pointer">
        <img
          src={arrow}
          alt="Siguiente"
          draggable={false}
          className="size-6 object-contain opacity-40 transition-opacity duration-200 group-hover:opacity-100"
        />
      </button>
    </section>
  );
};

export default CharacterMap;
