import { useState } from "react";

import EquipmentCard from "./components/EquipamentCard";
import AllEquipamentModal from "./components/AllEquipamentModal";

import Build from "../../data/defaultCharacter.json";
import EquipmentData from "../../data/items.json";

const images = import.meta.glob("../../assets/Equip/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const getImage = (src) => {
  if (!src) return "";

  const fileName = src.split("/").pop();

  const imagePath = Object.keys(images).find((path) => path.endsWith(fileName));

  return imagePath ? images[imagePath] : "";
};

export default function BuildEquipament() {
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);

  const [buildSelectEquipement, setBuildSelectEquipement] = useState({
    head: null,
    chest: null,
    foot: null,
    leg: null,
    hand: null,
  });

  return (
    <section className="relative h-140 w-full">
      <button
        type="button"
        onClick={() => setIsEquipmentModalOpen(true)}
        className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-md border border-white/10 bg-[#173546] px-3 py-2 text-xs font-medium text-white transition-colors hover:border-(--accent) hover:bg-white/10"
      >
        Open Equipment
      </button>

      <div className="absolute inset-0 z-5 grid grid-cols-2 grid-rows-3 items-center justify-items-center">
        {Build.equipment.map(({ slot, item }) => {
          const selectedId = buildSelectEquipement[slot];

          const selectedItem = selectedId
            ? Object.values(EquipmentData)
                .map((set) => set[slot])
                .find((equipment) => equipment?.id === selectedId)
            : null;

          const currentItem = selectedItem ?? item;

          return (
            <EquipmentCard
              key={slot}
              name={currentItem.name}
              srcIMG={getImage(currentItem.srcIMG)}
              slot={slot}
            />
          );
        })}
      </div>

      {isEquipmentModalOpen && (
        <AllEquipamentModal
          onClose={() => setIsEquipmentModalOpen(false)}
          buildSelectEquipement={buildSelectEquipement}
          setBuildSelectEquipement={setBuildSelectEquipement}
        />
      )}
    </section>
  );
}
