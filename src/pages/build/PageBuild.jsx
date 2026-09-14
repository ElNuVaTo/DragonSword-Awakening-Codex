import { useState } from "react";
import { useParams } from "react-router-dom";

import CharacterMap from "./components/character/CharacterMap";
import StatisticsOverview from "./components/character/StatisticsOverview";
import StatisticsElemental from "./components/character/StatisticsElemental";
import BuildEquipament from "./components/equip/BuildEquipament";
import SkillMap from "./components/character/SkillMap";

import equip from "../../resources/equip.json";
import characters from "../../resources/characters.json";

const PageBuild = () => {
  const { code } = useParams();
  const sharedBuild = code ? JSON.parse(atob(code)) : null;

  const equipMap = Object.fromEntries(equip.map((item) => [item.ID, item]));

  const DEFAULT_EQUIPMENT = ["HEAD", "CHEST", "LEG", "HAND", "FOOT"].map((PartsType, index) => {
    const id = sharedBuild?.[index + 1] ?? null;

    return {
      ID: id,
      PartsType,
      ...(equipMap[id] ?? {}),
    };
  });

  const [equipmentBuild, setEquipmentBuild] = useState(() => structuredClone(DEFAULT_EQUIPMENT));
  const [characterSelect, setCharacterSelect] = useState(sharedBuild?.[0] ?? 10002);

  const character = characters.find((character) => character.id === characterSelect);

  const [url, setUrl] = useState("");

  const generateUrl = async () => {
    const params = [
      characterSelect,
      equipmentBuild[0]?.ID || 0,
      equipmentBuild[1]?.ID || 0,
      equipmentBuild[2]?.ID || 0,
      equipmentBuild[3]?.ID || 0,
      equipmentBuild[4]?.ID || 0,
    ];

    const code = btoa(JSON.stringify(params));
    const buildUrl = `${window.location.origin}${import.meta.env.BASE_URL}build/${code}`;
    setUrl(buildUrl);
    await navigator.clipboard.writeText(buildUrl);
  };

  return (
    <>
      <div className="content-area">
        <CharacterMap setCharacterSelect={setCharacterSelect} characterSelect={characterSelect} />

        <section aria-label="Characters" className="relative p-5 bg-black/15 rounded-b-sm shadow">
          <span className="pattern-background pointer-events-none absolute inset-0 z-0 opacity-55" />

          <div className="relative z-10 flex flex-wrap w-full items-stretch justify-between gap-5">
            <StatisticsOverview generateUrl={generateUrl} url={url} character={character} />
            <BuildEquipament character={character} equipmentBuild={equipmentBuild} setEquipmentBuild={setEquipmentBuild} />
            <StatisticsElemental />
          </div>
        </section>

        <SkillMap character={character} />
      </div>
    </>
  );
};

export default PageBuild;
