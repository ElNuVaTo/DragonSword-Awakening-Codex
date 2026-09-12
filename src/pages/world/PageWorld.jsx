import { useState } from "react";

import Canvas from "./components/map/Canvas";
import MaterialMap from "./components/list/MaterialMap";
import LoadSave from "./components/save/LoadSave";

const PageWorld = () => {
  const [dataDB, setDataDB] = useState([]);
  const [materialSelect, setMaterialSelect] = useState([]);
  const [treasureChestGrades, setTreasureChestGrades] = useState([]);
  const [minigameTypes, setMinigameTypes] = useState([]);

  return (
    <section
      className="relative h-[calc(100dvh-58.5px)] overflow-hidden"
      style={{
        backgroundImage: `
      linear-gradient(45deg, rgba(255,255,255,0.0125) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255,255,255,0.0125) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.0125) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.0125) 75%)
    `,
        backgroundSize: "48px 48px",
        backgroundPosition: "0 0, 0 24px, 24px -24px, -24px 0",
      }}
    >
      <Canvas dataDB={dataDB} materialSelect={materialSelect} treasureChestGrades={treasureChestGrades} minigameTypes={minigameTypes} />
      <MaterialMap
        materialSelect={materialSelect}
        setMaterialSelect={setMaterialSelect}
        treasureChestGrades={treasureChestGrades}
        setTreasureChestGrades={setTreasureChestGrades}
        minigameTypes={minigameTypes}
        setMinigameTypes={setMinigameTypes}
      />
      <LoadSave setDataDB={setDataDB} />
    </section>
  );
};

export default PageWorld;
