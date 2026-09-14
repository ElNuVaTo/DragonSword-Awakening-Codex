const SlotCard = ({ item, setOpenModalForSlot, setOpenEditor }) => {
  const isDefault = item.ID === null;

  const defaultsIcons = {
    HEAD: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/ContentHub/Icon_Cat_SetHead.png",
    CHEST: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/ContentHub/Icon_Cat_SetTop.png",
    LEG: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/ContentHub/Icon_Cat_SetPants.png",
    HAND: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/ContentHub/Icon_Cat_SetAcc.png",
    FOOT: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/ContentHub/Icon_Cat_SetBottom.png",
  };

  const backgroundsFrame = {
    LEGENDARY: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_05.png",
    EPIC: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_04.png",
    RARE: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_03.png",
    SUPERIOR: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_02.png",
    COMMON: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Grade_01.png",
    Default: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Frame/Frame_Item_Slot_02.png",
  };

  const src = isDefault ? defaultsIcons[item.PartsType] : item.ImageName;

  const frame = backgroundsFrame[item.Grade] ?? backgroundsFrame.Default;

  const modal = (PartsType) => {
    setOpenModalForSlot(PartsType);
  };

  const settings = (PartsType) => {
    setOpenEditor(PartsType);
  };

  const slotPosition = {
    CHEST: "-translate-x-2.5",
    HAND: "translate-x-2.5",
  };

  return (
    <div
      onClick={() => modal(item.PartsType)}
      className={`relative flex aspect-97/119 w-18 cursor-pointer justify-center ${slotPosition[item.PartsType] ?? ""}`}
    >
      <img src={frame} alt="" className="h-full w-full object-cover" />

      <img src={src} alt="" draggable={false} className={`absolute z-5 w-full object-contain p-2 ${isDefault ? "brightness-50" : "brightness-100"}`} />

      {!isDefault && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            settings(item.PartsType);
          }}
          className="group absolute bottom-0.75 right-1 z-7 size-6 cursor-pointer overflow-hidden rounded-[5px]"
        >
          <img
            src="https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Btn/Btn_Resolve_01.png"
            alt=""
            className="absolute inset-0 top-px h-full w-full scale-[1.40] object-contain group-hover:hidden"
          />

          <img
            src="https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Btn/Btn_Resolve_01_Hover.png"
            alt=""
            className="absolute inset-0 top-px hidden h-full w-full scale-[1.40] object-contain group-hover:block"
          />
        </button>
      )}
    </div>
  );
};

export default SlotCard;
