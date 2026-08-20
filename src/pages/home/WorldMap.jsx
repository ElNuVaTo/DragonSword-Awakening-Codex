import MaterialsDb from "../../data/assets.json";

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
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        {/* Preview */}
        <div className=" aspect-video overflow-hidden rounded-lg border border-[var(--border)] bg-black/10 select-none">
          <img
            src="https://i.redd.it/z2sr5dy6088g1.png"
            alt="World map"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Tools */}
        <div className="rounded-xl border border-[var(--border)] p-5">
          {/* Cofres y marmotas */}
          <div>
            <h3 className="font-semibold text-[var(--text)]">
              Revisión de cofres y marmotas
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Carga tu partida guardada para comparar tu progreso y descubrir
              qué cofres y marmotas aún te faltan.
            </p>

            <div className="mt-4 rounded-lg bg-[var(--background-secondary)] px-3 py-2">
              <p className="text-xs text-[var(--text-secondary)]">
                <span className="font-medium text-[var(--text)]">
                  Archivo necesario:
                </span>{" "}
                partida guardada <span className="font-mono">"X"</span>
              </p>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
              Esta herramienta puede afectar la inmersión en el juego. Se
              recomienda utilizarla después de haber completado todo el
              contenido.
            </p>

            <button
              className="
                mt-5 h-10 w-full rounded-md
                bg-[var(--primary)] px-4
                text-sm font-medium
                transition-opacity hover:opacity-90
              "
            >
              Ver mi mapa
            </button>
          </div>

          {/* Separador */}
          <div className="my-6 border-t border-[var(--border)]" />

          {/* Ubicación de materiales */}
          <div>
            <h3 className="font-semibold text-[var(--text)]">
              Ubicación de materiales
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Busca un material para encontrar dónde conseguirlo y consultar sus
              ubicaciones disponibles.
            </p>

            <div className="mt-5 space-y-3">
              <label
                htmlFor="material-search"
                className="text-sm font-medium text-[var(--text)]"
              >
                Buscar material
              </label>

              <input
                id="material-search"
                type="text"
                placeholder="Ej. Madera de fresno..."
                className="
                  h-10 w-full rounded-md
                  border border-[var(--border)]
                  bg-transparent px-3
                  text-sm text-[var(--text)]
                  outline-none
                  transition
                  placeholder:text-[var(--text-secondary)]
                  focus:border-[var(--primary)]
                "
              />
            </div>

            {Object.entries(MaterialsDb).map(([section, materials]) => (
              <div key={section} className="space-y-1.5">
                <h2 className="text-[9px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                  {section}
                </h2>

                <div className="grid grid-cols-3 gap-1.5">
                  {Object.entries(materials).map(([name, src]) => {
                    const image = getImage(src);

                    return (
                      <div
                        key={name}
                        className="group overflow-hidden rounded border border-[var(--border)] bg-[var(--background-secondary)] transition-colors hover:border-[var(--primary)]"
                      >
                        <div className="flex aspect-square items-center justify-center p-1">
                          {image ? (
                            <img
                              src={image}
                              alt={name}
                              className="h-full w-full object-contain transition-transform duration-150 group-hover:scale-105"
                            />
                          ) : (
                            <span className="text-[8px] text-[var(--text-secondary)]">
                              Sin imagen
                            </span>
                          )}
                        </div>

                        <div className="border-t border-[var(--border)] px-1.5 py-0.5">
                          <p className="truncate text-[9px] font-medium text-[var(--text)]">
                            {name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
