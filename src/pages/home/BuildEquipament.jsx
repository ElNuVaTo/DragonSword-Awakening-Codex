import { useState } from "react";

import EquipmentCard from "./components/EquipamentCard";
import EquipmentSlotModal from "./components/EquipmentSlotModal";

import accessories from "../../resources/items/accessories.json";
import characters from "../../resources/characters.json";

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

export default function BuildEquipament({ characterSelect }) {
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

  const character = characters.find((character) => character.id === characterSelect);

  return (
    <>
      <div className="flex w-full items-center justify-between gap-5">
        <div className="flex flex-col gap-6">
          {[1, 2, 5].map((subCategory) => {
            const accessory = accessoriesSelect.find((item) => item.subCategory === subCategory);

            return (
              <EquipmentCard
                key={`${accessory.category}-${accessory.subCategory}`}
                name={accessory.subCategory}
                srcIMG={accessory.src}
                category={accessory.category}
                subCategory={accessory.subCategory}
                ClickOpenModal={ClickOpenModal}
              />
            );
          })}
        </div>

        <div className="flex h-60 w-40 shrink-0 items-center justify-center overflow-hidden">
          {character && <img src={character.src.fullGradient} alt={character.name} className="h-full w-full object-cover" />}
        </div>

        <div className="flex flex-col items-end gap-6">
          {[4, 3, null].map((subCategory) => {
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
    </>
  );
}
