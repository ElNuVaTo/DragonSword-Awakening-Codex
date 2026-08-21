const basicStats = [
  {
    name: "Vida máxima",
    value: "maxHp",
  },
  {
    name: "Defensa",
    value: "defense",
  },
  {
    name: "Ataque",
    value: "attack",
  },
  {
    name: "Probabilidad crítica",
    value: "criticalChance",
    suffix: "%",
  },
  {
    name: "Daño crítico",
    value: "criticalDamage",
    suffix: "%",
  },
  {
    name: "Penetración de armadura",
    value: "armorPenetration",
    suffix: "%",
  },
];

const elementalStats = [
  {
    name: "Aturdimiento",
    damage: "stunDamage",
    resistance: "stunResistance",
    resistancePercent: "stunResistancePercent",
  },
  {
    name: "Aire",
    damage: "airDamage",
    resistance: "airResistance",
    resistancePercent: "airResistancePercent",
  },
  {
    name: "Derribo",
    damage: "knockdownDamage",
    resistance: "knockdownResistance",
    resistancePercent: "knockdownResistancePercent",
  },
  {
    name: "Electro",
    damage: "electroDamage",
    resistance: "electroResistance",
    resistancePercent: "electroResistancePercent",
  },
  {
    name: "Hielo",
    damage: "iceDamage",
    resistance: "iceResistance",
    resistancePercent: "iceResistancePercent",
  },
  {
    name: "Quemadura",
    damage: "burnDamage",
    resistance: "burnResistance",
    resistancePercent: "burnResistancePercent",
  },
  {
    name: "Envenenamiento",
    damage: "poisonDamage",
    resistance: "poisonResistance",
    resistancePercent: "poisonResistancePercent",
  },
  {
    name: "Sangrado",
    damage: "bleedDamage",
    resistance: "bleedResistance",
    resistancePercent: "bleedResistancePercent",
  },
  {
    name: "Resistencia a golpes críticos",
    damage: null,
    resistance: null,
    resistancePercent: "criticalResistance",
  },
  {
    name: "Reducción del daño crítico",
    damage: null,
    resistance: null,
    resistancePercent: "criticalDamageReduction",
  },
];

const StatisticsCard = ({ stats = {} }) => {
  return (
    <section className="text-xs w-full max-w-80">
      {/* Estadísticas básicas */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-white/35">
            <th className="px-2 py-2 text-left font-medium">
              Estadísticas básicas
            </th>

            <th className="w-14 px-2 py-2 text-right font-medium">Valor</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5">
          {basicStats.map((stat) => (
            <tr
              key={stat.name}
              className="transition-colors hover:bg-white/2.5"
            >
              <td className="px-2 py-1.5 text-white/60">{stat.name}</td>

              <td className="w-14 px-2 py-1.5 text-right font-mono tabular-nums text-white">
                {stats[stat.value] ?? 0}
                {stat.suffix ?? ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Elemental & Status */}
      <table className="mt-3 w-full">
        <thead>
          <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-white/35">
            <th className="px-2 py-2 text-left font-medium">
              Elemental & Status
            </th>

            <th className="w-12 px-1.5 py-2 text-right font-medium">Dmg</th>

            <th className="w-12 px-1.5 py-2 text-right font-medium">Res</th>

            <th className="w-12 px-1.5 py-2 text-right font-medium">Res%</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5">
          {elementalStats.map((stat) => (
            <tr
              key={stat.name}
              className="transition-colors hover:bg-white/[0.025]"
            >
              <td className="px-2 py-1.5 text-white/60">{stat.name}</td>

              <td className="w-12 px-1.5 py-1.5 text-right font-mono tabular-nums text-white/90">
                {stat.damage ? (stats[stat.damage] ?? 0) : "-"}
              </td>

              <td className="w-12 px-1.5 py-1.5 text-right font-mono tabular-nums text-white/90">
                {stat.resistance ? (stats[stat.resistance] ?? 0) : "-"}
              </td>

              <td className="w-12 px-1.5 py-1.5 text-right font-mono tabular-nums text-white/90">
                {stats[stat.resistancePercent] ?? 0}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StatisticsCard;
