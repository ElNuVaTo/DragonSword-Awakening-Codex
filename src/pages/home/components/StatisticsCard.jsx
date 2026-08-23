import State_Mark_AIR from "../../../assets/State/State_Mark_AIR.png";
import State_Mark_BLEEDING from "../../../assets/State/State_Mark_BLEEDING.png";
import State_Mark_DOWN from "../../../assets/State/State_Mark_DOWN.png";
import State_Mark_FIRE from "../../../assets/State/State_Mark_FIRE.png";
import State_Mark_ICE from "../../../assets/State/State_Mark_ICE.png";
import State_Mark_POISON from "../../../assets/State/State_Mark_POISON.png";
import State_Mark_SHOCK from "../../../assets/State/State_Mark_SHOCK.png";
import State_Mark_STUN from "../../../assets/State/State_Mark_STUN.png";

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
    name: "Reducción de daño crítico",
    damage: null,
    resistance: null,
    resistancePercent: "criticalDamageReduction",
  },
];

const ELEMENT_ICONS = {
  Aturdimiento: State_Mark_STUN,
  Aire: State_Mark_AIR,
  Derribo: State_Mark_DOWN,
  Electro: State_Mark_SHOCK,
  Hielo: State_Mark_ICE,
  Quemadura: State_Mark_FIRE,
  Envenenamiento: State_Mark_POISON,
  Sangrado: State_Mark_BLEEDING,
};

const StatisticsCard = ({ stats = {} }) => {
  return (
    <section className="w-full max-w-85 text-xs">
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
              <td className="px-2 py-1.5 text-white/60">
                <div className="flex items-center gap-2">
                  <span className="flex size-3.5 shrink-0 items-center justify-center">
                    {ELEMENT_ICONS[stat.name] ? (
                      <img
                        src={ELEMENT_ICONS[stat.name]}
                        alt=""
                        draggable={false}
                        className="size-3.5 object-contain"
                      />
                    ) : (
                      <span className="text-[9px] text-white/20">•</span>
                    )}
                  </span>

                  <span>{stat.name}</span>
                </div>
              </td>

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
