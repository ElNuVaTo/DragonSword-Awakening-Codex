const elementalStats = [
  {
    id: "stun",
    name: "Aturdimiento",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_STUN.png",
    damage: "stunDamage",
    resistance: "stunResistance",
    resistancePercent: "stunResistancePercent",
  },
  {
    id: "air",
    name: "Aire",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_AIR.png",
    damage: "airDamage",
    resistance: "airResistance",
    resistancePercent: "airResistancePercent",
  },
  {
    id: "down",
    name: "Derribo",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_DOWN.png",
    damage: "knockdownDamage",
    resistance: "knockdownResistance",
    resistancePercent: "knockdownResistancePercent",
  },
  {
    id: "shock",
    name: "Electro",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_SHOCK.png",
    damage: "electroDamage",
    resistance: "electroResistance",
    resistancePercent: "electroResistancePercent",
  },
  {
    id: "ice",
    name: "Hielo",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_ICE.png",
    damage: "iceDamage",
    resistance: "iceResistance",
    resistancePercent: "iceResistancePercent",
  },
  {
    id: "fire",
    name: "Quemadura",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_FIRE.png",
    damage: "burnDamage",
    resistance: "burnResistance",
    resistancePercent: "burnResistancePercent",
  },
  {
    id: "poison",
    name: "Envenenamiento",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_POISON.png",
    damage: "poisonDamage",
    resistance: "poisonResistance",
    resistancePercent: "poisonResistancePercent",
  },
  {
    id: "bleeding",
    name: "Sangrado",
    src: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/State/State_Mark_BLEEDING.png",
    damage: "bleedDamage",
    resistance: "bleedResistance",
    resistancePercent: "bleedResistancePercent",
  },
];

const StatisticsElemental = () => {
  return (
    <>
      <div className="flex h-max w-72 flex-col">
        {/* Header */}
        <div className="mb-1.5 flex justify-between items-center gap-3 pb-1.5">
          <span className="shrink-0 text-[0.625rem] font-medium uppercase tracking-[0.15em] text-white/35">Elemental & Status</span>

      

          <div className="flex gap-4 text-[0.5rem] uppercase tracking-[0.12em] text-white/20">
            <span>Dmg</span>
            <span>Res</span>
            <span>%</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col">
          {elementalStats.map((stat) => (
            <div key={stat.id} className="flex h-7 items-center">
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center">
                  <img src={stat.src} alt="" draggable={false} className="size-3.5 object-contain" />
                </span>

                <span className="truncate text-[0.625rem] text-white/50">{stat.name}</span>
              </div>

              <div className="flex items-center gap-4 font-mono text-[0.625rem] tabular-nums text-white/70">
                <span className="w-5 text-right">0</span>
                <span className="w-5 text-right">0</span>
                <span className="w-7 text-right text-white/85">0%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-white/30">Simulación</span>

            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="space-y-1.5 text-[0.5625rem] leading-4 text-white/35">
            <p>Personaje, habilidades y Karma se consideran al nivel máximo.</p>

            <p>Las habilidades incluyen sus pasivas y bonificaciones porcentuales de estadísticas.</p>

            <p className="text-white/25">Los valores de daño y estadísticas son simulados y pueden diferir de los valores reales del juego.</p>

            <p>El daño visualizado se calcula contra Úrsula de nivel 90, con todas sus estadísticas y resistencias.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsElemental;
