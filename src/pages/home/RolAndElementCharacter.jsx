import { useState } from "react";

import State_Mark_HEAL from "../../assets/State/State_Mark_HEAL.png";
import State_Mark_BLEEDING from "../../assets/State/State_Mark_BLEEDING.png";
import State_Mark_FIRE from "../../assets/State/State_Mark_FIRE.png";
import State_Mark_ICE from "../../assets/State/State_Mark_ICE.png";
import State_Mark_POISON from "../../assets/State/State_Mark_POISON.png";
import State_Mark_SHOCK from "../../assets/State/State_Mark_SHOCK.png";

import State_Mark_AIR from "../../assets/State/State_Mark_AIR.png";
import State_Mark_DOWN from "../../assets/State/State_Mark_DOWN.png";
import State_Mark_SLOW from "../../assets/State/State_Mark_SLOW.png";
import State_Mark_STUN from "../../assets/State/State_Mark_STUN.png";
import State_Mark_SuperArmor from "../../assets/State/State_Mark_SuperArmor.png";

const ELEMENTS = [
  { name: "Sangrado", image: State_Mark_BLEEDING },
  { name: "Fuego", image: State_Mark_FIRE },
  { name: "Hielo", image: State_Mark_ICE },
  { name: "Veneno", image: State_Mark_POISON },
  { name: "Shock", image: State_Mark_SHOCK },
];

const SUBELEMENTS = [
  { name: "Curación", image: State_Mark_HEAL },
  { name: "Aire", image: State_Mark_AIR },
  { name: "Derribo", image: State_Mark_DOWN },
  { name: "Slow", image: State_Mark_SLOW },
  { name: "Stun", image: State_Mark_STUN },
  { name: "Armor", image: State_Mark_SuperArmor },
];

const Element = ({ name, image, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={name}
      aria-pressed={selected}
      className={`
        group relative flex h-17 w-17 items-center justify-center
        rounded-full transition-all duration-200
        focus:outline-none
        ${
          selected
            ? "scale-105"
            : "opacity-55 hover:scale-105 hover:opacity-100"
        }
      `}
    >
      {/* Anillo exterior */}
      <span
        className={`
          absolute inset-0 rounded-full border transition-all duration-200
          ${
            selected
              ? "border-white/70 bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.18)]"
              : "border-white/10 bg-white/[0.03] group-hover:border-white/30"
          }
        `}
      />

      {/* Anillo interior */}
      <span
        className={`
          absolute inset-1 rounded-full border transition-all
          ${
            selected
              ? "border-white/20"
              : "border-transparent group-hover:border-white/10"
          }
        `}
      />

      <img
        src={image}
        alt=""
        className="relative z-10 h-12 w-12 object-contain"
      />

      {/* Indicador de selección */}
      {selected && (
        <span className="absolute -bottom-1 h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      )}
    </button>
  );
};

const SubElement = ({ name, image, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={name}
      aria-pressed={selected}
      className={`
        group relative flex h-12 w-12 items-center justify-center
        rounded-full transition-all duration-200
        ${
          selected
            ? "scale-105"
            : "opacity-45 hover:scale-105 hover:opacity-100"
        }
      `}
    >
      <span
        className={`
          absolute inset-0 rounded-full border transition-all
          ${
            selected
              ? "border-white/60 bg-white/10"
              : "border-white/10 bg-white/[0.02] group-hover:border-white/25"
          }
        `}
      />

      <img
        src={image}
        alt=""
        className="relative z-10 h-8 w-8 object-contain"
      />

      {selected && (
        <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-white" />
      )}
    </button>
  );
};

const RolAndElementCharacter = () => {
  const [selectedElement, setSelectedElement] = useState("Curación");
  const [selectedSubElement, setSelectedSubElement] = useState("Aire");

  return (
    <div className="flex w-full justify-between items-center gap-5">
      {/* Elementos principales */}
      <div className="flex items-center justify-center gap-4">
        {ELEMENTS.map((element) => (
          <Element
            key={element.name}
            {...element}
            selected={selectedElement === element.name}
            onClick={() => setSelectedElement(element.name)}
          />
        ))}
      </div>

      {/* Sub elementos */}
      <div className="flex items-center justify-center gap-4">
        {SUBELEMENTS.map((element) => (
          <SubElement
            key={element.name}
            {...element}
            selected={selectedSubElement === element.name}
            onClick={() => setSelectedSubElement(element.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default RolAndElementCharacter;
