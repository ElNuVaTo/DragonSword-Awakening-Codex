import characters from "./utils/GetCharacterIconsKeyHalf";
import CharacterCard from "./components/CharacterCard";

import State_Mark_BLEEDING from "../../assets/State/State_Mark_BLEEDING.png";
import State_Mark_FIRE from "../../assets/State/State_Mark_FIRE.png";
import State_Mark_ICE from "../../assets/State/State_Mark_ICE.png";
import State_Mark_POISON from "../../assets/State/State_Mark_POISON.png";
import State_Mark_SHOCK from "../../assets/State/State_Mark_SHOCK.png";

const ELEMENTS = [
  { name: "Sangrado", image: State_Mark_BLEEDING },
  { name: "Fuego", image: State_Mark_FIRE },
  { name: "Hielo", image: State_Mark_ICE },
  { name: "Veneno", image: State_Mark_POISON },
  { name: "Shock", image: State_Mark_SHOCK },
];

const AllCharacter = () => {
  return (
    <section className="mx-auto w-full max-w-2xl border-y border-white/8 py-6 px-5">
      <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {characters.map((data, index) => (
          <CharacterCard
            key={data.name}
            name={data.name}
            srcFrontPage={data.medium}
            element={ELEMENTS[index % ELEMENTS.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default AllCharacter;