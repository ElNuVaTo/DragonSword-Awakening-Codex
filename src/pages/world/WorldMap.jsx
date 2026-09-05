import ExploreWordCard from "./ExploreWordCard";
import MaterialCard from "./components/MaterialCard";

import items from "../../resources/items.json";

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

const AllMaterials = () => {
  const [openSection, setOpenSection] = useState(null);

  const EXCLUDED_CATEGORIES = [
    "Alimentos procesados",
    "Evento",
    "Otros",
  ];

  const NATURAL_FOOD_CATEGORIES = [
    "Alimentos naturales",
    "Carne",
    "Cereales",
    "Hierbas medicinales",
    "Huevos",
    "Marisco",
    "Pescado",
    "Setas",
    "Verduras",
  ];

  const sections = Object.values(items).flatMap((categories) => {
    const naturalFoodItems = [];

    const normalSections = Object.values(categories)
      .filter((category) => {
        if (EXCLUDED_CATEGORIES.includes(category.Name)) {
          return false;
        }

        if (NATURAL_FOOD_CATEGORIES.includes(category.Name)) {
          naturalFoodItems.push(...category.Items);
          return false;
        }

        return true;
      })
      .map((category) => [category.Name, category.Items]);

    if (naturalFoodItems.length > 0) {
      normalSections.unshift([
        "Alimentos naturales",
        naturalFoodItems,
      ]);
    }

    return normalSections;
  });

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section ? null : section,
    );
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-(--border)/40 bg-(--background)/40 shadow-sm lg:max-w-90 lg:flex-1">
      {sections.map(([section, materials], index) => {
        const isOpen = openSection === section;

        const cssGridForSection =
          section === "Experiencia"
            ? "grid grid-cols-[repeat(4,4rem)] justify-start"
            : "grid grid-cols-[repeat(5,4rem)] justify-between";

        return (
          <section
            key={section}
            className={
              index > 0
                ? "border-t border-(--border)/30"
                : ""
            }
          >
            <button
              type="button"
              onClick={() => toggleSection(section)}
              aria-expanded={isOpen}
              className={`
                group flex w-full items-center gap-3
                px-3 py-2.5 text-left
                transition-colors
                hover:bg-(--background-secondary)/30
                ${isOpen ? "bg-(--background-secondary)/20" : ""}
              `}
            >
              {/* Indicador */}
              <span
                className={`
                  flex size-4 shrink-0 items-center justify-center
                  rounded text-[11px] font-medium
                  transition-all
                  ${
                    isOpen
                      ? "bg-(--primary)/10 text-(--primary)"
                      : "text-(--text-secondary) group-hover:text-(--text)"
                  }
                `}
              >
                {isOpen ? "−" : "+"}
              </span>

              {/* Nombre */}
              <span
                className={`
                  min-w-0 flex-1 truncate text-xs
                  transition-colors
                  ${
                    isOpen
                      ? "font-semibold text-(--text)"
                      : "font-medium text-(--text-secondary) group-hover:text-(--text)"
                  }
                `}
              >
                {section}
              </span>

              {/* Cantidad */}
              <span
                className={`
                  shrink-0 rounded-md px-1.5 py-0.5
                  text-[9px] font-medium tabular-nums
                  transition-colors
                  ${
                    isOpen
                      ? "bg-(--primary)/10 text-(--primary)"
                      : "bg-(--background-secondary)/50 text-(--text-secondary)"
                  }
                `}
              >
                {materials.length}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-(--border)/20 bg-(--background-secondary)/10 px-3 py-3">
                <div className={`${cssGridForSection} gap-y-3`}>
                  {materials.map((data) => (
                    <MaterialCard
                      key={data.ID}
                      name={data.Name || "Sin nombre"}
                      src={data.IconName}
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
