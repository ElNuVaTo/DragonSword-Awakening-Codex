import ExploreWordCard from "./components/ExploreWordCard";
import MaterialCard from "./components/MaterialCard";

import materials from "../../resources/items/varied.json";
import materials2 from "../../resources/items/xp.json";
import materials3 from "../../resources/items/upgrade.json";
import materials4 from "../../resources/items/cooking.json";
import materials5 from "../../resources/items/runes.json";
import materials6 from "../../resources/items/COOKING_INGREDIENT.json";

import { useState } from "react";

const WorldMap = () => {
  return (
    <section className="flex w-full min-w-0 flex-col gap-4 lg:flex-row lg:items-start">
      <ExploreWordCard />
      <AllMaterials />
    </section>
  );
};

export default WorldMap;

// X solucionar hacer una nueva seccion para piedras de carasteristicas
// Objetos duplicados x las estrellas
// algunos sin nombre y sin imagenes
// seccion para mercenarios
// seccion para cristales
// minerales
// hierbas
// sacar algunos varied no sirven
// material para subir ed nivel el personaje habilidades
// material para subir ed nivel el personaje

const AllMaterials = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    ["Variados", materials],
    ["Cocina", materials4],
    ["Ingredientes de cocina", materials6],
    ["Mejora de equipo y personajes", materials3],
    ["Experiencia", materials2],
    ["Runas", materials5],
  ].map(([section, materials]) => [
    section,
    [...materials].sort((a, b) => {
      const iconA = a.icon.split("/").pop();
      const iconB = b.icon.split("/").pop();

      return iconA.localeCompare(iconB, "es");
    }),
  ]);

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-(--border)/40 lg:max-w-90 lg:flex-1">
      {sections.map(([section, materials], index) => {
        const isOpen = openSection === section;

        const cssGridForSection =
          section === "Experiencia"
            ? "grid grid-cols-[repeat(4,4rem)] justify-start"
            : "grid grid-cols-[repeat(5,4rem)] justify-between";

        return (
          <section key={section}>
            <button
              type="button"
              onClick={() => toggleSection(section)}
              aria-expanded={isOpen}
              className={`flex w-full items-center gap-2.5 px-2.5 py-2 text-left transition-colors hover:bg-(--background-secondary)/30 ${
                index > 0 ? "border-t border-(--border)/30" : ""
              }`}
            >
              <span
                className={`flex size-4 shrink-0 items-center justify-center text-xs leading-none transition-colors ${
                  isOpen ? "text-(--primary)" : "text-(--text-secondary)"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>

              <span className="min-w-0 flex-1 truncate text-xs font-medium text-(--text)">
                {section}
              </span>

              <span className="text-[10px] tabular-nums text-(--text-secondary)">
                {materials.length}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-(--border)/20 px-2.5 py-2.5">
                <div className={`${cssGridForSection} gap-y-2`}>
                  {materials.map((data) => (
                    <MaterialCard
                      key={data.id}
                      name={data.name?.Es_ES ?? data.name?.En ?? "Sin nombre"}
                      src={data.icon}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};