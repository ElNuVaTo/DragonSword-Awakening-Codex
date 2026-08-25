import AllCharacter from "./AllCharacter";
import WorldMap from "./WorldMap";

import LandingPage from "./LandingPage";

import BuildEquipament from "./BuildEquipament";
import StatisticsCard from "./components/StatisticsCard";

const Home = () => {
  return (
    <main className="flex flex-col">
      <LandingPage />

      <div className="flex flex-col">
        <section aria-label="Characters" className="m-auto flex min-h-screen w-395 max-w-full py-10 justify-center gap-10">
          <div className="flex flex-col flex-2 gap-5 w-full max-w-182">
            <AllCharacter />
          </div>

          <div className="flex w-200 justify-between gap-10">
            <BuildEquipament />
            <StatisticsCard />
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
