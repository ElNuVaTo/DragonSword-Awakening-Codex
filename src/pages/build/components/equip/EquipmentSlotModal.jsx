import { memo, useEffect } from "react";

import Portal from "../../../../components/Portal";
import equip from "../../../../resources/equip.json";

const EquipmentSlotModal = ({ setEquipmentBuild, openModalForSlot, setOpenModalForSlot }) => {
  const filterForSlot = equip.filter((item) => item.PartsType === openModalForSlot);

  const handleSelectEquip = (ItemNew) => {
    setEquipmentBuild((prev) =>
      prev.map((item) =>
        item.PartsType === openModalForSlot
          ? {
              ...item,
              ...ItemNew,
            }
          : item,
      ),
    );
    setOpenModalForSlot(null);
  };

  const allFrameGrade = {
    LEGENDARY: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_05.png",
    EPIC: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_04.png",
    RARE: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_03.png",
    SUPERIOR: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_02.png",
    COMMON: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_01.png",
  };

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    const preventKeys = (e) => {
      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", " "];

      if (keys.includes(e.key)) {
        e.preventDefault();
      }
    };

    if (openModalForSlot !== null) {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeys);
    }

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
    };
  }, [openModalForSlot]);

  return (
    <Portal>
      <div onClick={() => setOpenModalForSlot(null)} className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
        <div className="grid auto-cols-max grid-flow-col grid-rows-3 gap-x-2  gap-y-3">
          {filterForSlot.map((item) => {
            const FrameGrade = allFrameGrade[item.Grade] ?? null;

            return (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectEquip(item);
                  }}
                  className="flex justify-center items-center aspect-97/119 w-20 cursor-pointer"
                >
                  <img src={item.ImageName} alt="" className="absolute size-17" />

                  <img src={FrameGrade} alt="absolute size-20" />
                </button>
              </>
            );
          })}
        </div>
      </div>
    </Portal>
  );
};

export default memo(EquipmentSlotModal);
