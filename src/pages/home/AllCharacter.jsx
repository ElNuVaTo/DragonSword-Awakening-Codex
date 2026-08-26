import characters from "../../resources/characters.json";
import states from "../../resources/states.json";

import CharacterCard from "./components/CharacterCard";

const AllCharacter = () => {
  return (
    <>
      <div className="flex items-end justify-between border-b border-white/10 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Heroes</h2>

          <p className="mt-1 text-xs text-white/40">Registrados en la base de datos</p>
        </div>

        <span className="text-xs text-white/40">{characters.length} En coleccion</span>
      </div>

      <div className="grid grid-cols-2 px-1 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {characters.map((character) => {
          const trait = states.traits[character.trait];

          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              src={character.src}
              trait={trait}
              statuses={character.statuses}
              statusList={states.statuses}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllCharacter;
