import { useState } from "react";
import AllCharacter from "./AllCharacter";
import WorldMap from "./WorldMap";

import LandingPage from "./LandingPage";

import BuildEquipament from "./BuildEquipament";
import StatisticsCard from "./components/StatisticsCard";
import Skills from "../Skills";

const Home = () => {
  const [characterSelect, setCharacterSelect] = useState("example");

  return (
    <main className="flex flex-col">
      <LandingPage />

      <div className="flex flex-col my-10">
        <section aria-label="Characters" className="flex mx-auto gap-8 min-h-screen flex-wrap">
          <div className="flex min-w-0 flex-col">
            <Title title="Heroes" desc="Coleccion" />
            <AllCharacter setCharacterSelect={setCharacterSelect} />
          </div>

          <div className="flex min-w-0 flex-col">
            <Title title="Equipamiento & Estadisticas" desc="Visualizar datos" />

            <div className="flex min-w-0 flex-col gap-2 lg:flex-row lg:items-start">
              <BuildEquipament characterSelect={characterSelect} />
              <StatisticsCard />
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <Title title="Habilidades" desc="Simulacion de daño" />
            <Skills />
          </div>
        </section>

        <section aria-label="World Map" className="m-auto flex min-h-screen w-full max-w-[1800px] items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
          <WorldMap />
        </section>
      </div>
    </main>
  );
};

export default Home;

const Title = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-end justify-between border-b border-white/10 pb-2 mb-5">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{title}</h2>

          <p className="text-xs text-white/40">{desc}</p>
        </div>
      </div>
    </>
  );
};
