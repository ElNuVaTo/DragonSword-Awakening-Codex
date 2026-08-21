const cssADJUSTEMENT = {
  head: { left: 3, top: -2, scale: 1.05 },
  hand: { left: 1.5, top: -1, scale: 0.9 },
  chest: { left: 2, top: 1, scale: 1 },
  leg: { left: 2.5, top: 3, scale: 1 },
  foot: { left: 2, top: 0, scale: 0.9 },
};

const EquipmentCard = ({ name, srcIMG, slot }) => {
  const adjustment =
    name === "Default"
      ? { left: 0, top: 0, scale: 0.6 }
      : (cssADJUSTEMENT[slot] ?? { left: 0, top: 0, scale: 1 });

  return (
    <div className="group relative flex aspect-square w-25 items-center justify-center overflow-hidden rounded-sm border border-white/[0.035] bg-[#202020] transition-colors duration-200 hover:bg-[#232323]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.025),transparent_70%)]" />

      <img
        src={srcIMG}
        alt={name}
        className="absolute inset-0 z-1 h-full w-full object-contain transition-[filter] duration-200 group-hover:brightness-105"
        style={{
          transform: `translate(${adjustment.left}px, ${adjustment.top}px) scale(${adjustment.scale})`,
        }}
      />

      <div className="absolute inset-0 z-2 bg-linear-to-t from-black/15 via-transparent to-transparent" />

      <div className="absolute right-1 top-1 z-3 text-[10px] font-semibold leading-none text-yellow-400/90">
        +6/15
      </div>
    </div>
  );
};

export default EquipmentCard;
