import { useState } from "react";

import EquipmentCard from "./components/EquipamentCard";
import EquipmentSlotModal from "./components/EquipmentSlotModal";

import equipments from "../../resources/equipments.json";

export default function BuildEquipament() {
  const [buildSelectEquipement, setBuildSelectEquipement] = useState([
    {
      open: false,
      slot: "head",
      id: "default_head",
      src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/head.png",
    },
    {
      open: false,
      slot: "hand",
      id: "default_hand",
      src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/hand.png",
    },
    {
      open: false,
      slot: "chest",
      id: "default_chest",
      src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/chest.png",
    },
    {
      open: false,
      slot: "foot",
      id: "default_foot",
      src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/foot.png",
    },
    {
      open: false,
      slot: "leg",
      id: "default_leg",
      src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/leg.png",
    },

    {
      open: false,
      slot: "karma",
      id: "default_karma",
      src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/karma.png",
    },
  ]);

  const ClickOpenModal = (slot) => {
    setBuildSelectEquipement((prev) =>
      prev.map((equipment) => ({
        ...equipment,
        open: equipment.slot === slot,
      })),
    );
  };

  const ClickCloseModal = () => {
    setBuildSelectEquipement((prev) =>
      prev.map((equipment) => ({
        ...equipment,
        open: false,
      })),
    );
  };

  const activeEquipment = buildSelectEquipement.find((equipment) => equipment.open);

  const equipmentItems = activeEquipment
    ? Object.entries(equipments ?? {})
        .map(([setName, set]) => ({
          setName,
          item: set?.items?.[activeEquipment.slot],
        }))
        .filter(({ item }) => item)
    : [];

  console.log("active:", activeEquipment);
  console.log("items:", equipmentItems);

  return (
    <>
      <div className="w-full">
        <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Equipamiento</h2>

            <p className="mt-1 text-xs text-white/40">Configuracion total</p>
          </div>
        </div>

        <div className="inset-0 z-5 grid w-[99%] m-auto grid-cols-2 grid-rows-3 items-center gap-14.5 [&>*:nth-child(odd)]:justify-self-start [&>*:nth-child(even)]:justify-self-end">
          {buildSelectEquipement.map(({ slot, src }) => (
            <EquipmentCard key={slot} name={slot} srcIMG={src} slot={slot} ClickOpenModal={ClickOpenModal} />
          ))}
        </div>

        {activeEquipment && (
          <EquipmentSlotModal
            open
            slot={activeEquipment.slot}
            onClose={ClickCloseModal}
            equipmentItems={equipmentItems}
            buildSelectEquipement={buildSelectEquipement}
            setBuildSelectEquipement={setBuildSelectEquipement}
          />
        )}
      </div>
    </>
  );
}
