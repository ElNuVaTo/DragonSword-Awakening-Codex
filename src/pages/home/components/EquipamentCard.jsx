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
    <div className="group relative size-28 overflow-hidden bg-white/10 [clip-path:polygon(0_10px,10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px))] transition-transform duration-200 hover:-translate-y-0.5">
      <div className="absolute inset-px overflow-hidden bg-[#1b1c1f] [clip-path:inherit]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.045),transparent_65%)]" />

        <img
          src={srcIMG}
          alt={name}
          draggable={false}
          className="absolute inset-0 z-1 h-full w-full object-contain transition-[filter,transform] duration-300 group-hover:brightness-110"
          style={{
            transform: `translate(${adjustment.left}px, ${adjustment.top}px) scale(${adjustment.scale})`,
          }}
        />

        <div className="absolute inset-0 z-2 bg-linear-to-t from-black/30 via-transparent to-transparent" />

        <div className="absolute right-2 top-2 z-3 rounded-sm bg-black/45 px-1.5 py-1 text-[10px] font-semibold leading-none text-yellow-400/90 backdrop-blur-[2px]">
          +6/15
        </div>
      </div>

      <div className="absolute left-1/2 top-0 h-px w-8 -translate-x-1/2 bg-white/15" />
    </div>
  );
};

export default EquipmentCard;