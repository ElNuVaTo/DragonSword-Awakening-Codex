const skills = Array.from({ length: 8 }, (_, index) => index + 1);

const Skills = () => {
  return (
    <div className="flex w-95 flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <article
            key={skill}
            className="relative flex h-20 items-center gap-3 overflow-hidden rounded-sm border border-white/10 bg-neutral-950/80 p-2 transition-colors hover:border-white/20"
          >
            <div className="relative shrink-0">
              <div className="flex size-14 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-neutral-900">
                <span className="text-[8px] uppercase tracking-widest text-white/15">IMG</span>
              </div>

              <span className="absolute -left-1 -top-1 flex size-4 items-center justify-center rounded-full border border-white/15 bg-neutral-950 text-[8px] font-semibold text-white/60">
                {skill}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[10px] font-semibold text-white">Habilidad {skill}</h3>

              <p className="mt-1 truncate text-[8px] text-white/35">Descripción de la habilidad.</p>

              <div className="mt-2 flex gap-4 text-[8px] uppercase tracking-wider text-white/30">
                <span>
                  CD <b className="font-medium text-white/60">0.0s</b>
                </span>

                <span>
                  Coste <b className="font-medium text-white/60">0</b>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
