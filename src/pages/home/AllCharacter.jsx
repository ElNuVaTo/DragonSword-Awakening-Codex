import characters from "../../resources/characters.json";
import states from "../../resources/states.json";

import CharacterCard from "./components/CharacterCard";

const AllCharacter = ({ setCharacterSelect }) => {
  return (
    <>
      <div className="grid max-h-150 w-full grid-cols-3 gap-4">
        {characters.map((character) => {
          const trait = states.traits[character.trait];

          return (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              src={character.src}
              trait={trait}
              statuses={character.statuses}
              statusList={states.statuses}
              setCharacterSelect={setCharacterSelect}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllCharacter;
