const EquipmentCard = ({ name, srcIMG, category, subCategory, ClickOpenModal }) => {
  return (
    <button
      type="button"
      title={name}
      onClick={() => ClickOpenModal(category, subCategory)}
      className="group relative size-28 cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[#111214] transition hover:border-(--accent)/50 hover:bg-[#151617]"
    >
      <img
        src={srcIMG}
        alt={name}
        draggable={false}
        className="h-full w-full object-contain p-2 transition-transform duration-200 group-hover:scale-105"
      />
    </button>
  );
};

export default EquipmentCard;