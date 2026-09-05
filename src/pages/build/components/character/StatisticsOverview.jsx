const basicStats = [
  { name: "Vida máxima", value: "maxHp" },
  { name: "Defensa", value: "defense" },
  { name: "Ataque", value: "attack" },
  { name: "Probabilidad crítica", value: "criticalChance", suffix: "%" },
  { name: "Daño crítico", value: "criticalDamage", suffix: "%" },
  { name: "Penetración de armadura", value: "armorPenetration", suffix: "%" },
  { name: "Resistencia a golpes críticos", value: "criticalResistance", suffix: "%" },
  { name: "Reducción de daño crítico", value: "criticalDamageReduction", suffix: "%" },
];

const StatisticsOverview = ({ generateUrl, url, character }) => {
  return (
    <>
      <div className="flex h-max w-80 flex-col text-xs">
        <div className="mb-4 flex w-full items-center gap-2 border-b border-white/10 pb-2.5">
          <span className="shrink-0 text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">URL</span>

          <span className="min-w-0 flex-1 truncate font-mono text-[10px] text-white/45">{url || "Generar enlace"}</span>

          <button
            type="button"
            onClick={generateUrl}
            className="shrink-0 cursor-pointer rounded-sm border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/50 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white/80"
          >
            Compartir
          </button>
        </div>

        <div className="mb-5">
          <div className="flex items-end justify-between">
            <div>
              <span className="block text-[9px] font-medium uppercase tracking-[0.25em] text-white/25">Personaje</span>

              <div className="mt-0.5 flex items-center gap-2.5">
                <h2 className="text-[17px] font-medium tracking-wide text-white/90">{character.Name.Es_ES ?? "Lute"}</h2>

                <div className="flex items-center gap-1">
                  <img src={character.CharacterAbilityType} alt="" draggable={false} className="size-6 object-contain" />

                  <img src={character.MesmerizedUIType} alt="" draggable={false} className="size-4.5 object-contain" />
                </div>
              </div>
            </div>

            <div className="text-right">
              <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">Nivel</span>

              <span className="font-mono text-[12px] tabular-nums text-white/70">
                20<span className="text-white/25">/80</span>
              </span>
            </div>
          </div>

          <div className="mt-2.5 h-px w-full bg-white/10" />
        </div>

        <div className="mb-1 flex items-center gap-3">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">Estadísticas básicas</span>

          <div className="h-px flex-1 bg-white/5" />

          <span className="text-[9px] uppercase tracking-[0.15em] text-white/20">Valor</span>
        </div>

        <div className="flex flex-col">
          {basicStats.map((stat) => (
            <div key={stat.value} className="flex h-7.5 items-center justify-between border-b border-white/5">
              <span className="text-[11px] text-white/50">{stat.name}</span>

              <span className="min-w-12 text-right font-mono text-[11px] tabular-nums text-white/80">0{stat.suffix ?? ""}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StatisticsOverview;
