import datadb from "../../../data/items.json";

const equipmentImages = import.meta.glob(
  "../../../assets/Equip/**/*.{png,webp,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
);

const getEquipmentImage = (src) => {
  const normalizedPath = src
    .replace(/^\/assets\//, "../../../assets/")
    .replace(/\\/g, "/");

  return equipmentImages[normalizedPath] ?? src;
};

const SLOT_ORDER = ["head", "chest", "leg", "hand", "foot"];

const AllEquipamentModal = ({
  onClose,
  buildSelectEquipement,
  setBuildSelectEquipement,
}) => {
  const equipmentSets = Object.entries(datadb);

  const handleSelectEquipment = (slot, item) => {
    if (!item?.id) {
      console.warn("Este equipo no tiene ID:", item);
      return;
    }

    setBuildSelectEquipement((current) => ({
      ...current,
      [slot]: current[slot] === item.id ? null : item.id,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-(--border) bg-[#102733] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Equipment</h2>

            <p className="mt-0.5 text-xs text-white/45">
              Browse available equipment sets
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-md text-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close equipment"
          >
            ×
          </button>
        </div>

        <div className="min-h-0 overflow-y-auto p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentSets.map(([setName, equipment]) => (
              <div
                key={setName}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#173546]/70"
              >
                <div className="border-b border-white/10 px-4 py-3">
                  <h3 className="text-sm font-semibold text-white">
                    {setName}
                  </h3>
                </div>

                <div className="grid grid-cols-5 gap-2 p-3">
                  {SLOT_ORDER.map((slot) => {
                    const item = equipment?.[slot];

                    if (!item) return null;

                    const imageSrc = getEquipmentImage(item.srcIcon);
                    const isSelected =
                      buildSelectEquipement?.[slot] === item.id;

                    return (
                      <button
                        key={`${setName}-${slot}-${item.id}`}
                        id={`equipment-${item.id}`}
                        type="button"
                        data-equipment-id={item.id}
                        data-slot={slot}
                        onClick={() => handleSelectEquipment(slot, item)}
                        className="group flex min-w-0 flex-col items-center gap-1.5"
                        aria-label={`${isSelected ? "Deselect" : "Select"} ${item.name} ${slot}`}
                        aria-pressed={isSelected}
                      >
                        <div
                          className={[
                            "relative aspect-square w-full overflow-hidden rounded-md border bg-[#0d202b] transition-all",
                            isSelected
                              ? "border-[var(--accent)] bg-[var(--accent)]/15 ring-2 ring-[var(--accent)]/40"
                              : "border-white/10 group-hover:border-[var(--accent)]",
                          ].join(" ")}
                        >
                          <img
                            src={imageSrc}
                            alt={item.name}
                            className="h-full w-full object-contain p-1"
                            draggable="false"
                          />

                          {isSelected && (
                            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--accent)]" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEquipamentModal;
