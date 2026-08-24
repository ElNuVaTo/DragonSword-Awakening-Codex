import characters from "../../resources/characters.json";
import states from "../../resources/states.json";

import CharacterCard from "./components/CharacterCard";

const AllCharacter = () => {
  return (
    <section className="mx-auto w-full max-w-2xl border-y border-white/8 px-5 py-6">
      <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {characters.map((character) => {
          const trait = states.traits[character.trait];

          return <CharacterCard key={character.id} name={character.name} src={character.src} trait={trait} statuses={character.statuses} />;
        })}
      </div>
    </section>
  );
};

export default AllCharacter;
