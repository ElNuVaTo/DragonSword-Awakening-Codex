import characters from "../../resources/characters.json";
import states from "../../resources/states.json";

import CharacterCard from "./components/CharacterCard";

const AllCharacter = ({ setCharacterSelect }) => {
  return (
    <>
      <div className="grid grid-cols-2 px-1 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
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
