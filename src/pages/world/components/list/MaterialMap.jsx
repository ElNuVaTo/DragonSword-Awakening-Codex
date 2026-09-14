import { useState } from "react";

import items from "../../../../resources/items.json";

import MaterialCard from "./MaterialCard";
import MaterialChestCard from "./MaterialChestCard";
import MaterialMinigameCard from "./MaterialMinigameCard";

const EXTRA_ITEMS = [
  {
    ID: "PressurePlate",
    Name: {
      SourceString: "Waves",
      En: "Waves",
      Es_ES: "Oleadas",
    },
    Category: {
      SourceString: "Minijuegos",
      En: "Minigames",
      Es_ES: "Minijuegos",
    },
    Grade: "",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/MiniGame/MiniGM_marmot_02.png",
  },

  {
    ID: "Fly",
    Name: {
      SourceString: "Fly",
      En: "Fly",
      Es_ES: "Volador",
    },
    Category: {
      SourceString: "Minijuegos",
      En: "Minigames",
      Es_ES: "Minijuegos",
    },
    Grade: "",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/MiniGame/MiniGM_marmot_01.png",
  },

  {
    ID: "Mole",
    Name: {
      SourceString: "Hammer",
      En: "Hammer",
      Es_ES: "Martillo",
    },
    Category: {
      SourceString: "Minijuegos",
      En: "Minigames",
      Es_ES: "Minijuegos",
    },
    Grade: "",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/03_System/MiniGame/MiniGM_Icon_Marmot_01.png",
  },

  {
    ID: "chest_common",
    Name: {
      SourceString: "Chest Common",
      En: "Chest Common",
      Es_ES: "Cofre Común",
    },
    Category: {
      SourceString: "Cofres",
      En: "Chests",
      Es_ES: "Cofres",
    },
    Grade: "NORMAL",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Icon_TreasureBox_01_Default.png",
  },

  {
    ID: "chest_superior",
    Name: {
      SourceString: "Chest Superior",
      En: "Chest Superior",
      Es_ES: "Cofre Superior",
    },
    Category: {
      SourceString: "Cofres",
      En: "Chests",
      Es_ES: "Cofres",
    },
    Grade: "SUPERIOR",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Icon_TreasureBox_01_Default.png",
  },

  {
    ID: "chest_rare",
    Name: {
      SourceString: "Chest Rare",
      En: "Chest Rare",
      Es_ES: "Cofre Raro",
    },
    Category: {
      SourceString: "Cofres",
      En: "Chests",
      Es_ES: "Cofres",
    },
    Grade: "RARE",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Icon_TreasureBox_01_Default.png",
  },

  {
    ID: "chest_epic",
    Name: {
      SourceString: "Chest Epic",
      En: "Chest Epic",
      Es_ES: "Cofre Épico",
    },
    Category: {
      SourceString: "Cofres",
      En: "Chests",
      Es_ES: "Cofres",
    },
    Grade: "EPIC",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Icon_TreasureBox_01_Default.png",
  },

  {
    ID: "chest_legendary",
    Name: {
      SourceString: "Chest Legendary",
      En: "Chest Legendary",
      Es_ES: "Cofre Legendario",
    },
    Category: {
      SourceString: "Cofres",
      En: "Chests",
      Es_ES: "Cofres",
    },
    Grade: "LEGENDARY",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Icon_TreasureBox_01_Default.png",
  },

  {
    ID: "quest",
    Name: {
      SourceString: "Quest",
      En: "Quest",
      Es_ES: "Misión",
    },
    Category: {
      SourceString: "Misiones",
      En: "Quests",
      Es_ES: "Misiones",
    },
    Grade: "",
    IconName: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Mark/Icon_Mark_QuestMark_01.png",
  },
];

const MaterialMap = ({ materialSelect, setMaterialSelect, treasureChestGrades, setTreasureChestGrades, minigameTypes, setMinigameTypes }) => {
  const [search, setSearch] = useState("");

  const availableItems = [...EXTRA_ITEMS, ...items];

  const sectionsMap = new Map();

  for (const item of availableItems) {
    const section = item.Category?.Es_ES || "Otros";

    if (!sectionsMap.has(section)) {
      sectionsMap.set(section, []);
    }

    sectionsMap.get(section).push(item);
  }
  const sections = [...sectionsMap.entries()];
  const findSearch = items.filter((item) => item.Name?.Es_ES?.toLowerCase().includes(search.toLowerCase()));
  const renderSections = search ? [["Resultados", findSearch]] : sections;

  return (
    <aside className="absolute bottom-4 left-3 z-20 rounded-md flex h-[calc(100%-32px)] w-max flex-col px-1.5 overflow-hidden bg-black/50 backdrop-blur-lg lg:max-w-90">
      <header className="top-0 z-10 flex h-12 shrink-0 items-center border-b border-white/10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar material..."
          className="h-8 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[10px] text-white/80 outline-none placeholder:text-white/30 transition-colors focus:border-white/25 focus:bg-black/50"
        />
      </header>

      <div className="ui-scroll min-h-0 flex-1 overflow-y-auto pr-2">
        {renderSections.map(([section, materials], index) => (
          <section key={section} className={`py-2.25 ${index > 0 ? "border-t border-(--border)/25" : ""}`}>
            <div className="grid grid-cols-4 gap-x-1.5 gap-y-2.5">
              {materials.map((data) => {
                const isChest = data.Category?.Es_ES === "Cofres";
                const isMinigame = data.Category?.Es_ES === "Minijuegos";

                if (isChest) {
                  return (
                    <MaterialChestCard
                      key={data.ID}
                      ID={data.ID}
                      name={data.Name?.Es_ES || "Sin nombre"}
                      src={data.IconName}
                      grade={data.Grade}
                      treasureChestGrades={treasureChestGrades}
                      setTreasureChestGrades={setTreasureChestGrades}
                    />
                  );
                }

                if (isMinigame) {
                  return (
                    <MaterialMinigameCard
                      key={data.ID}
                      name={data.Name?.Es_ES || "Sin nombre"}
                      src={data.IconName}
                      type={data.ID}
                      minigameTypes={minigameTypes}
                      setMinigameTypes={setMinigameTypes}
                    />
                  );
                }

                return (
                  <MaterialCard
                    key={data.ID}
                    ID={data.ID}
                    name={data.Name?.Es_ES || "Sin nombre"}
                    src={data.IconName}
                    materialSelect={materialSelect}
                    setMaterialSelect={setMaterialSelect}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
};

export default MaterialMap;
