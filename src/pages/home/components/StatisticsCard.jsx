import states from "../../../resources/states.json";

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

const elementalStats = [
  { id: "stun", name: "Aturdimiento", damage: "stunDamage", resistance: "stunResistance", resistancePercent: "stunResistancePercent" },
  { id: "air", name: "Aire", damage: "airDamage", resistance: "airResistance", resistancePercent: "airResistancePercent" },
  { id: "down", name: "Derribo", damage: "knockdownDamage", resistance: "knockdownResistance", resistancePercent: "knockdownResistancePercent" },
  { id: "shock", name: "Electro", damage: "electroDamage", resistance: "electroResistance", resistancePercent: "electroResistancePercent" },
  { id: "ice", name: "Hielo", damage: "iceDamage", resistance: "iceResistance", resistancePercent: "iceResistancePercent" },
  { id: "fire", name: "Quemadura", damage: "burnDamage", resistance: "burnResistance", resistancePercent: "burnResistancePercent" },
  { id: "poison", name: "Envenenamiento", damage: "poisonDamage", resistance: "poisonResistance", resistancePercent: "poisonResistancePercent" },
  { id: "bleeding", name: "Sangrado", damage: "bleedDamage", resistance: "bleedResistance", resistancePercent: "bleedResistancePercent" },
];

const StatisticsCard = ({ stats = {} }) => {
  return (
    <section className="relative -top-1 w-full max-w-75 text-xs">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-white/35">
            <th className="px-2 py-1 text-left font-medium">Estadísticas básicas</th>
            <th className="w-14 px-2 py-1 text-right font-medium">Valor</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5">
          {basicStats.map((stat) => (
            <tr key={stat.value} className="transition-colors hover:bg-white/2.5">
              <td className="px-2 py-1 text-white/60">{stat.name}</td>

              <td className="w-14 px-2 py-1 text-right font-mono tabular-nums text-white">
                {stats[stat.value] ?? 0}
                {stat.suffix ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="mt-2 w-full">
        <thead>
          <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-white/35">
            <th className="px-2 py-1 text-left font-medium">Elemental & Status</th>
            <th className="w-12 px-1.5 py-1 text-right font-medium">Dmg</th>
            <th className="w-12 px-1.5 py-1 text-right font-medium">Res</th>
            <th className="w-12 px-1.5 py-1 text-right font-medium">Res%</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5">
          {elementalStats.map((stat) => {
            const state = states.statuses[stat.id];

            return (
              <tr key={stat.id} className="transition-colors hover:bg-white/2.5">
                <td className="px-2 py-1 text-white/60">
                  <div className="flex items-center gap-1.5">
                    <span className="flex size-3.5 shrink-0 items-center justify-center">
                      {state?.src ? (
                        <img src={state.src} alt="" draggable={false} className="size-3.5 object-contain" />
                      ) : (
                        <span className="text-[9px] text-white/20">•</span>
                      )}
                    </span>

                    <span>{state?.name ?? stat.name}</span>
                  </div>
                </td>

                <td className="w-12 px-1.5 py-1 text-right font-mono tabular-nums text-white/90">{stat.damage ? (stats[stat.damage] ?? 0) : "-"}</td>

                <td className="w-12 px-1.5 py-1 text-right font-mono tabular-nums text-white/90">{stat.resistance ? (stats[stat.resistance] ?? 0) : "-"}</td>

                <td className="w-12 px-1.5 py-1 text-right font-mono tabular-nums text-white/90">{stats[stat.resistancePercent] ?? 0}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default StatisticsCard;
