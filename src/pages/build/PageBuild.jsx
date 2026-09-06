import { useState } from "react";
import { useParams } from "react-router-dom";

import HeaderLanding from "./HeaderLanding";
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
    <main className="flex flex-col gap-2">
      <HeaderLanding />

      <section className="flex flex-col w-ful max-w-325 mx-auto py-5 gap-15 overflow-hidden">
        <CharacterMap setCharacterSelect={setCharacterSelect} characterSelect={characterSelect} />

        <div aria-label="Characters" className="flex w-full justify-between items-start mx-auto gap-5">
          <StatisticsOverview generateUrl={generateUrl} url={url} character={character} />
          <BuildEquipament character={character} equipmentBuild={equipmentBuild} setEquipmentBuild={setEquipmentBuild} />
          <StatisticsElemental />
        </div>

        <SkillMap character={character} />
      </section>
    </main>
  );
};

export default PageBuild;
