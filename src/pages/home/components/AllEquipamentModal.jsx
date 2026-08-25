import { memo, useEffect } from "react";

import Portal from "../../../components/Portal";

const SLOT_ORDER = ["head", "chest", "leg", "hand", "foot"];

const AllEquipamentModal = ({ open, onClose, buildSelectEquipement, setBuildSelectEquipement, equipments }) => {
  const equipmentSets = Object.entries(equipments ?? {});

  const handleSelectEquipment = (slot, item) => {
    if (!item?.id) return;

    setBuildSelectEquipement((current) => ({
      ...current,
      [slot]: current[slot] === item.id ? null : item.id,
    }));
  };

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Portal>
      <div
        onMouseDown={onClose}
        className={[
          "fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 transition-opacity duration-200",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        ].join(" ")}
      >
        <div
          onMouseDown={(e) => e.stopPropagation()}
          className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xs border border-white/10 shadow-2xl bg-neutral-900/90"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-(--background-secondary) px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Equipamiento</h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-xs text-xl text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
          </header>

          <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentSets.map(([setName, equipment]) => (
              <div key={setName} className="rounded-xs  bg-neutral-900/90">
                <div className="flex justify-center gap-2 p-3">
                  {SLOT_ORDER.map((slot) => {
                    const item = equipment?.items?.[slot];

                    if (!item) return null;

                    const isSelected = buildSelectEquipement?.[slot] === item.id;

                    return (
                      <button key={item.id} type="button" title={item.name} onClick={() => handleSelectEquipment(slot, item)} className="group">
                        <div
                          className={[
                            "relative size-14 overflow-hidden rounded-xs border bg-black transition-colors",
                            isSelected ? "border-(--accent) bg-(--accent)/10" : "border-white/10 hover:border-white/30",
                          ].join(" ")}
                        >
                          <img src={item.icon} alt={item.name} loading="lazy" className="h-full w-full object-contain p-2" draggable="false" />

                          {isSelected && <div className="absolute inset-0 ring-1 ring-inset ring-(--accent)" />}
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
    </Portal>
  );
};

export default memo(AllEquipamentModal);
