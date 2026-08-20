import AllCharacter from "./AllCharacter";
import RolAndElementCharacter from "./RolAndElementCharacter";
import WorldMap from "./WorldMap";
import Dev from "./Dev";
import Tools from "./Tools";
import LandingPage from "./LandingPage";
import BuildEquipament from "./BuildEquipament";
import StatisticsCard from "./components/StatisticsCard";

const Home = () => {
  return (
    <main className="flex flex-col">
      <LandingPage />

      <div className="flex flex-col w-395 max-w-full m-auto py-10">
        <section
          aria-label="Characters"
          className="relative flex min-h-screen w-full items-center justify-between gap-5 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:"linear-gradient(to right, rgba(255,255,255,0.008) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.008) 1px, transparent 1px)",
              backgroundSize:"28px 28px",
              maskImage:"radial-gradient(ellipse at center, black 0%, black 25%, rgba(0,0,0,.5) 55%, transparent 85%)",
              WebkitMaskImage:"radial-gradient(ellipse at center, black 0%, black 25%, rgba(0,0,0,.5) 55%, transparent 85%)",
            }}
          />

          <div className="flex flex-col flex-2 gap-5">
            <RolAndElementCharacter />
            <AllCharacter />
          </div>

          <div className="flex justify-between w-200">
            <BuildEquipament />
            <StatisticsCard />
          </div>
        </section>

        <section
          aria-label="World Map"
          className="flex min-h-screen items-center justify-center"
        >
          <WorldMap />
        </section>

        <section
          aria-label="Development"
          className="flex min-h-screen items-center justify-center"
        >
          <Dev />
        </section>

        <section
          aria-label="Tools"
          className="flex items-center justify-center"
        >
          <Tools />
        </section>
      </div>
    </main>
  );
};

export default Home;
