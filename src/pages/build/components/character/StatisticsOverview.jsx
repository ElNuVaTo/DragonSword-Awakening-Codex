import { useState } from "react";

const basicStats = [
  {
    name: "Vida máxima",
    value: "maxHp",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Status_HP_0.png",
  },
  {
    name: "Defensa",
    value: "defense",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Status_DEF_01.png",
  },
  {
    name: "Ataque",
    value: "attack",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Status_ATK_01.png",
  },
];

const combatStats = [
  {
    name: "Probabilidad crítica",
    value: "criticalChance",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Inter/Icon_Inter_UserMapPin_09.png",
    suffix: "%",
  },
  {
    name: "Daño crítico",
    value: "criticalDamage",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Inter/Icon_Inter_UserMapPin_09.png",
    suffix: "%",
  },
  {
    name: "Penetración de armadura",
    value: "armorPenetration",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Inter/Icon_Inter_UserMapPin_04.png",
    suffix: "%",
  },
  {
    name: "Resistencia a golpes críticos",
    value: "criticalResistance",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Inter/Icon_Inter_UserMapPin_10.png",
    suffix: "%",
  },
  {
    name: "Reducción de daño crítico",
    value: "criticalDamageReduction",
    icon: "https://pub-e8dcf7b1c8f24eb69fe888f2fb7adc5d.r2.dev/Art/Common/Inter/Icon_Inter_UserMapPin_10.png",
    suffix: "%",
  },
];

const StatisticsOverview = ({ generateUrl, url, character }) => {
  const [level, setLevel] = useState(70);

  return (
    <>
      <div className="flex w-70 flex-col justify-between">
        
        <div className="mt-4 flex h-9 w-full items-center rounded-xs border border-white/5 bg-white/2.5">
          <div className="min-w-0 flex-1 px-2.5">
            {url ? (
              <span className="ui-subtitle ui-truncate block font-mono text-white/35">{url}</span>
            ) : (
              <span className="ui-label block text-white/45">Comparte tu build</span>
            )}
          </div>

          <button
            type="button"
            onClick={generateUrl}
            className="h-full shrink-0 cursor-pointer px-3 ui-micro text-white/30 transition-colors hover:text-white/80"
          >
            {url ? "Copiar" : "Enlace"}
          </button>
        </div>

        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col gap-px">
              <span className="ui-label block mb-1">Personaje</span>

              <h2 className="ui-title ui-truncate">{character.Name.Es_ES ?? "Lute"}</h2>
            </div>

            <img src={character.CharacterAbilityType} alt="" draggable={false} className="relative top-1.75 size-4 left-2 shrink-0 object-contain" />
          </div>

          <div className="shrink-0 text-right">
            <span className="ui-label mb-1 block">Nivel</span>

            <div className="flex items-center justify-end gap-1">
              <button
                type="button"
                onClick={() => setLevel((current) => Math.max(1, current - 1))}
                disabled={level === 1}
                className="flex size-5 cursor-pointer items-center justify-center rounded-xs text-white/35 transition-colors hover:bg-white/5 hover:text-white disabled:pointer-events-none disabled:opacity-20"
              >
                −
              </button>

              <span className="ui-value min-w-7 text-center">{level}</span>

              <button
                type="button"
                onClick={() => setLevel((current) => Math.min(70, current + 1))}
                disabled={level === 70}
                className="flex size-5 cursor-pointer items-center justify-center rounded-xs text-white/35 transition-colors hover:bg-white/5 hover:text-white disabled:pointer-events-none disabled:opacity-20"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <StatGroup title="Estadísticas básicas" stats={basicStats} />
          <StatGroup title="Estadísticas de combate" stats={combatStats} />
        </div>
      </div>
    </>
  );
};

export default StatisticsOverview;

const StatGroup = ({ title, stats }) => {
  return (
    <>
      <div>
        <div className="mb-1">
          <span className="ui-section-title block">{title}</span>
        </div>

        <div className="flex flex-col relative right-1">
          {stats.map((stat) => (
            <div key={stat.value} className="grid h-7.5 grid-cols-[1fr_3rem] items-center">
              <div className="flex min-w-0 items-center gap-2">
                {stat.icon && (
                  <span className="flex size-5 shrink-0 items-center justify-center">
                    <img src={stat.icon} alt="" draggable={false} className="size-4 object-contain opacity-70" />
                  </span>
                )}

                <span className="ui-body ui-truncate">{stat.name}</span>
              </div>

              <span className="ui-value text-right">0{stat.suffix ?? ""}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
