import { useState } from "react";

import SlotMap from "./SlotMap";
import SettingsEquip from "./SettingsEquip";
import EquipmentSlotModal from "./EquipmentSlotModal";

const BuildEquipament = ({ character, equipmentBuild, setEquipmentBuild }) => {
  const [openModalForSlot, setOpenModalForSlot] = useState(null);
  const [openEditor, setOpenEditor] = useState(null);

  return (
    <>
      <div className="flex flex-col items-center justify-end gap-5 relative w-105 shrink-0">
        <SlotMap equipmentBuild={equipmentBuild} setOpenEditor={setOpenEditor} setOpenModalForSlot={setOpenModalForSlot} />

        <div className="absolute w-full h-full overflow-hidden">
          <img src={character.ImageType.keyHalf ?? ""} alt="" className="w-full h-full object-cover brightness-75 radialMask" />
        </div>

        {openEditor !== null && (
          <SettingsEquip equipmentBuild={equipmentBuild} setEquipmentBuild={setEquipmentBuild} openEditor={openEditor} setOpenEditor={setOpenEditor} />
        )}
      </div>

      {openModalForSlot !== null && (
        <EquipmentSlotModal setEquipmentBuild={setEquipmentBuild} openModalForSlot={openModalForSlot} setOpenModalForSlot={setOpenModalForSlot} />
      )}
    </>
  );
};

export default BuildEquipament;
