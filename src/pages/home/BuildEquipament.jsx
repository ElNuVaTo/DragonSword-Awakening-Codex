import EquipmentCard from "./components/EquipamentCard";

import Build from "../../data/defaultCharacter.json";

const images = import.meta.glob("../../assets/Equip/*.{png,jpg,jpeg,webp}", {
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
  return (
    <section className="relative h-140 w-full">
      {/* Character */}
      <div className="absolute left-1/2 top-1/2 z-2 flex h-60 w-55 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <img
          src="../../assets/Charater/Alex/src/full-gradient.png"
          alt=""
          className="max-h-full max-w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,.7)]"
        />
      </div>

      {/* Equipment */}
      <div className="absolute inset-0 z-5 grid grid-cols-2 grid-rows-3 items-center justify-items-center">
        {Build.equipment.map(({ slot, item }) => (
          <EquipmentCard
            key={slot}
            name={item.name}
            srcIMG={getImage(item.srcIMG)}
            slot={slot}
          />
        ))}
      </div>
    </section>
  );
}
