import { memo, useEffect } from "react";

import Portal from "../../../components/Portal";

const EquipmentSlotModal = ({ open, type, subCategory, onClose, items, accessoriesSelect, setAccessoriesSelect }) => {
  const selectedAccessory = accessoriesSelect?.find((accessory) => accessory.category === type && accessory.subCategory === subCategory);

  const handleSelectAccessory = (item) => {
    if (!item?.id) return;

    setAccessoriesSelect((current) =>
      current.map((accessory) =>
        accessory.category === type && accessory.subCategory === subCategory
          ? {
              ...accessory,
              id: item.id,
              src: item.icon,
            }
          : accessory,
      ),
    );

    onClose();
  };

  useEffect(() => {
    if (!open) return;

    const preventScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [open]);

  return (
    <Portal>
      <div
        onMouseDown={onClose}
        className={[
          "fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 transition-all duration-200",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        ].join(" ")}
      >
        <div
          onMouseDown={(e) => e.stopPropagation()}
          className={[
            "relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden",
            "rounded-sm border border-(--accent)/20 bg-neutral-950",
            "shadow-[0_20px_80px_rgba(0,0,0,0.65)]",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute inset-0 rounded-sm border border-white/5" />

          <header className="relative flex shrink-0 items-center justify-left border-b border-white/8 bg-neutral-950 px-6 py-2">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="group flex size-8 items-center justify-center rounded-xs border border-transparent text-xl leading-none text-white/35 transition hover:border-(--accent)/20 hover:bg-(--accent)/5 hover:text-(--accent)"
            >
              <span className="transition-transform duration-200 group-hover:rotate-90">×</span>
            </button>
          </header>

          <div className="relative min-h-0 overflow-y-auto p-5 scrollbar-thin">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((item) => {
                const itemId = item.id;
                const itemName = item.name?.es ?? item.name?.en;
                const itemIcon = item.icon;

                const isSelected = selectedAccessory?.id === itemId;

                return (
                  <button
                    key={itemId}
                    type="button"
                    title={itemName}
                    onClick={() =>
                      handleSelectAccessory({
                        id: itemId,
                        name: itemName,
                        icon: itemIcon,
                      })
                    }
                    className={[
                      "group relative overflow-hidden rounded-sm border text-left",
                      "transition-all duration-200",
                      isSelected
                        ? ["border-(--accent)/70", "bg-(--accent)/5", "shadow-[0_0_18px_color-mix(in_srgb,var(--accent)_10%,transparent)]"].join(" ")
                        : ["border-white/8", "bg-white/[0.018]", "hover:border-(--accent)/30", "hover:bg-white/[0.035]"].join(" "),
                    ].join(" ")}
                  >
                    {isSelected && <div className="absolute inset-x-0 top-0 h-px bg-(--accent)" />}

                    <div className="flex items-center gap-4 p-3">
                      <div
                        className={[
                          "relative flex size-20 shrink-0 items-center justify-center",
                          "overflow-hidden rounded-xs border bg-black/60",
                          isSelected
                            ? "border-(--accent)/60 shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_12%,transparent)]"
                            : "border-white/8 group-hover:border-white/15",
                        ].join(" ")}
                      >
                        <img
                          src={itemIcon}
                          alt={itemName}
                          loading="lazy"
                          draggable="false"
                          className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-105"
                        />

                        {isSelected && <div className="pointer-events-none absolute inset-0 bg-(--accent)/5" />}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div
                          className={[
                            "mb-1 text-[9px] font-semibold uppercase tracking-[0.18em]",
                            isSelected ? "text-(--accent)" : "text-white/35 group-hover:text-white/50",
                          ].join(" ")}
                        >
                          {itemName}
                        </div>

                        {item.level && <div className="text-[9px] uppercase tracking-wider text-white/30">Nivel {item.level}</div>}

                        <div
                          className={[
                            "mt-2 text-[10px] uppercase tracking-wider transition-colors",
                            isSelected ? "text-(--accent)/60" : "text-white/20 group-hover:text-white/35",
                          ].join(" ")}
                        >
                          {isSelected ? "Equipado" : "Seleccionar"}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default memo(EquipmentSlotModal);
