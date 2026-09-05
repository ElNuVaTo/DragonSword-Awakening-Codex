import SlotCard from "./SlotCard";

const SlotMap = ({ equipmentBuild, setOpenModalForSlot, setOpenEditor }) => {
  return (
    <div className="z-2 flex justify-between items-end w-full p-1">
      <div className="flex flex-col gap-3">
        {equipmentBuild.slice(0, 3).map((item) => (
          <SlotCard key={item.part} item={item} setOpenModalForSlot={setOpenModalForSlot} setOpenEditor={setOpenEditor} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {equipmentBuild.slice(3, 5).map((item) => (
          <SlotCard key={item.part} item={item} setOpenModalForSlot={setOpenModalForSlot} setOpenEditor={setOpenEditor} />
        ))}
      </div>
    </div>
  );
};

export default SlotMap;
