import { useState } from "react";
import MaterialsDb from "../../data/assets.json";
import ExploreWordCard from "./components/ExploreWordCard";
import MaterialCard from "./components/MaterialCard";

const images = import.meta.glob(
  "../../assets/Materials/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const getImage = (src) => {
  if (!src) return "";

  const fileName = src.split("/").pop();
  const imagePath = Object.keys(images).find((path) => path.endsWith(fileName));

  return imagePath ? images[imagePath] : "";
};

const WorldMap = () => {
  const [selectOption, setSelectOption] = useState("all");
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const sections = Object.entries(MaterialsDb)
    .filter(([section]) => selectOption === "all" || section === selectOption)
    .map(([section, materials]) => {
      const filteredMaterials = Object.entries(materials).filter(([name]) =>
        name.toLowerCase().includes(normalizedSearch),
      );

      return [section, filteredMaterials];
    })
    .filter(([, materials]) => materials.length > 0);

  return (
    <section className="flex w-full min-w-0 flex-col gap-4 lg:flex-row lg:items-start">
      <ExploreWordCard />

      <div className="flex w-full flex-col gap-6 lg:max-w-90 lg:flex-1">
        <div>
          <h3 className="font-semibold text-(--text)">
            Progreso de exploración
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-(--text-secondary)">
            Comprueba qué cofres y marmotas has encontrado y cuáles todavía
            faltan por descubrir en Orbis.
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-(--border) bg-(--background-secondary)/50 px-3 py-2.5">
            <div className="min-w-0">
              <p className="text-xs font-medium text-(--text)">
                Archivo de partida
              </p>

              <p className="mt-0.5 truncate text-[11px] text-(--text-secondary)">
                "C:\DS\Saved\SaveGames\X\X_SlotX.db"
              </p>
            </div>

            <button className="shrink-0 rounded-md bg-(--primary) px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90">
              Seleccionar
            </button>
          </div>
        </div>

        <div>
          <div>
            <label
              htmlFor="material-search"
              className="text-xs font-medium text-(--text)"
            >
              Materiales
            </label>

            <div className="mt-2 flex gap-2">
              <input
                id="material-search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar por nombre..."
                className="h-10 min-w-0 flex-1 rounded-md border border-(--border) bg-(--background-secondary)/40 px-3 text-sm text-(--text) outline-none transition placeholder:text-(--text-secondary) focus:border-(--primary)"
              />

              <select
                value={selectOption}
                onChange={(event) => setSelectOption(event.target.value)}
                className="h-10 w-28 shrink-0 rounded-md border border-(--border) bg-(--background-secondary)/40 px-2 text-xs text-(--text) outline-none transition focus:border-(--primary)"
              >
                <option value="all">Todos</option>

                {Object.keys(MaterialsDb).map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-5">
            {sections.map(([section, materials]) => (
              <div key={section} className="space-y-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-(--text-secondary)">
                  {section}
                </h2>

                <div className="grid grid-cols-[repeat(auto-fill,4rem)] justify-between gap-2">
                  {materials.map(([name, src]) => (
                    <MaterialCard key={name} name={name} src={getImage(src)} />
                  ))}
                </div>
              </div>
            ))}

            {!sections.length && (
              <p className="py-4 text-center text-xs text-(--text-secondary)">
                No se encontraron materiales.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
