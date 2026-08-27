import { useState } from "react";

import EquipmentCard from "./components/EquipamentCard";
import EquipmentSlotModal from "./components/EquipmentSlotModal";

import accessories from "../../resources/items/accessories.json";

const DEFAULT_ITEMS = [
  {
    id: null,
    category: "EQUIP",
    subCategory: 1,
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/head.png",
  },
  {
    id: null,
    category: "EQUIP",
    subCategory: 2,
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/chest.png",
  },
  {
    id: null,
    category: "EQUIP",
    subCategory: 3,
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/leg.png",
  },
  {
    id: null,
    category: "EQUIP",
    subCategory: 4,
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/hand.png",
  },
  {
    id: null,
    category: "EQUIP",
    subCategory: 5,
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/foot.png",
  },
  {
    id: null,
    category: "KARMA",
    subCategory: null,
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/equip/default/karma.png",
  },
];

export default function BuildEquipament() {
  const [accessoriesSelect, setAccessoriesSelect] = useState(DEFAULT_ITEMS);

  const ClickOpenModal = (category, subCategory = null) => {
    setAccessoriesSelect((prev) =>
      prev.map((accessory) => ({
        ...accessory,
        open: accessory.category === category && accessory.subCategory === subCategory,
      })),
    );
  };

  const ClickCloseModal = () => {
    setAccessoriesSelect((prev) =>
      prev.map((accessory) => ({
        ...accessory,
        open: false,
      })),
    );
  };

  const activeAccessory = accessoriesSelect.find((accessory) => accessory.open);

  const accessoriesItems = (accessories ?? []).filter((item) =>
    activeAccessory?.category === "KARMA"
      ? item.category?.type === "KARMA"
      : item.category?.type === "EQUIP" && item.category?.subCategory === activeAccessory?.subCategory,
  );

  return (
    <div className="w-full">
      <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Equipamiento</h2>

          <p className="mt-1 text-xs text-white/40">Configuracion total</p>
        </div>
      </div>

      <div className="inset-0 z-5 grid grid-cols-2 grid-rows-3 items-center gap-6 px-1 [&>*:nth-child(odd)]:justify-self-start [&>*:nth-child(even)]:justify-self-end">
        {[1, 4, 2, 5, 3, null].map((subCategory) => {
          const accessory = accessoriesSelect.find((item) => (subCategory === null ? item.category === "KARMA" : item.subCategory === subCategory));

          return (
            <EquipmentCard
              key={`${accessory.category}-${accessory.subCategory ?? "karma"}`}
              name={accessory.category === "KARMA" ? "karma" : accessory.subCategory}
              srcIMG={accessory.src}
              category={accessory.category}
              subCategory={accessory.subCategory}
              ClickOpenModal={ClickOpenModal}
            />
          );
        })}
      </div>

      {activeAccessory && (
        <EquipmentSlotModal
          open
          type={activeAccessory.category}
          subCategory={activeAccessory.subCategory}
          onClose={ClickCloseModal}
          items={accessoriesItems}
          accessoriesSelect={accessoriesSelect}
          setAccessoriesSelect={setAccessoriesSelect}
        />
      )}
    </div>
  );
}
