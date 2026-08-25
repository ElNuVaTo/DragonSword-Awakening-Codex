import { useState } from "react";

import EquipmentCard from "./components/EquipamentCard";
import AllEquipamentModal from "./components/AllEquipamentModal";

import Build from "../../data/defaultCharacter.json";
import equipments from "../../resources/equipments.json";

export default function BuildEquipament() {
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);

  const [buildSelectEquipement, setBuildSelectEquipement] = useState({
    head: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/head.png",
    chest: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/chest.png",
    leg: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/leg.png",
    hand: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/hand.png",
    foot: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/foot.png",
    karma: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/karma.png",
  });

  return (
    <>
      <div className="w-full">
        <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Equipamiento</h2>

            <p className="mt-1 text-xs text-white/40">Configuracion total</p>
          </div>

         
        </div>

        <button
        type="button"
        onClick={() => setIsEquipmentModalOpen(true)}
        className="rounded-md border border-white/10 bg-[#173546] px-3 py-2 text-xs font-medium text-white transition-colors hover:border-(--accent) hover:bg-white/10"
        >
        Open Equipment123test
        </button>

        <div className=" inset-0 z-5 grid grid-cols-2 grid-rows-3 items-center justify-items-center">
          {Build.equipment.map(({ slot, item }) => {
            const selectedId = buildSelectEquipement[slot];

            const selectedItem = selectedId
              ? Object.values(equipments)
                  .map((set) => set[slot])
                  .find((equipment) => equipment?.id === selectedId)
              : null;

            const currentItem = selectedItem ?? item;

            return <EquipmentCard key={slot} name={currentItem.name} srcIMG={currentItem.img} slot={slot} />;
          })}
        </div>

        {isEquipmentModalOpen && (
          <AllEquipamentModal
            open={isEquipmentModalOpen}
            onClose={() => setIsEquipmentModalOpen(false)}
            equipments={equipments}
            buildSelectEquipement={buildSelectEquipement}
            setBuildSelectEquipement={setBuildSelectEquipement}
          />
        )}
      </div>
    </>
  );
}
