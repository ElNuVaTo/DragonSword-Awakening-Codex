import { useState } from "react";
import AllCharacter from "./AllCharacter";
import WorldMap from "./WorldMap";

import LandingPage from "./LandingPage";

import BuildEquipament from "./BuildEquipament";
import StatisticsCard from "./components/StatisticsCard";

const Home = () => {
  const [characterSelect, setCharacterSelect] = useState("example");

  return (
    <main className="flex flex-col">
      <LandingPage />

      <div className="flex flex-col ">
        <section aria-label="Characters" className="m-auto flex min-h-screen w-395 max-w-full justify-between gap-10 py-10">
          <div className="flex w-full max-w-180 flex-2 flex-col px-5 gap-6">
            <div className="flex items-end justify-between border-b border-white/10 pb-3">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Heroes</h2>

                <p className="mt-1 text-xs text-white/40">Registrados en la base de datos</p>
              </div>
            </div>

            <AllCharacter setCharacterSelect={setCharacterSelect} />
          </div>

          <div className="flex w-full flex-1 flex-col px-5 gap-6">
            <div className="flex items-end justify-between border-b border-white/10 pb-3">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Equipamiento & Estadísticas</h2>

                <p className="mt-1 text-xs text-white/40">Gestiona tu equipamiento y visualiza las estadísticas.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="shrink-0">
                <BuildEquipament characterSelect={characterSelect} />
              </div>

              <span className="h-80 w-px shrink-0 bg-white/8" />

              <div className="min-w-0 flex-1">
                <StatisticsCard />
              </div>
            </div>
          </div>
        </section>

        <section aria-label="World Map" className="w-395 max-w-full m-auto flex min-h-screen items-center justify-center">
          <WorldMap />
        </section>
      </div>
    </main>
  );
};

export default Home;
