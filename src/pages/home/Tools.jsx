const ToolCard = ({ name, description, image }) => {
  return (
    <article className="group overflow-hidden rounded-md border border-[var(--border)] bg-[var(--background-secondary)] transition-colors hover:border-[var(--primary)]/50">
      <div className="relative aspect-[16/7] overflow-hidden bg-black/10">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-[var(--text)]">{name}</h3>

          <span className="text-[10px] text-[var(--text-secondary)]">
            Herramienta
          </span>
        </div>

        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-[var(--text-secondary)]">
          {description}
        </p>

        <button className="mt-3 flex w-full items-center justify-between rounded border border-[var(--border)] px-2.5 py-1.5 text-xs font-medium text-[var(--text)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]">
          Abrir herramienta
          <span className="text-[var(--primary)]">→</span>
        </button>
      </div>
    </article>
  );
};

const Tools = () => {
  const tools = [
    {
      name: "Overlay DPS",
      description:
        "Consulta y analiza el daño producido durante tus partidas sin necesidad de instalar software adicional.",
      image: "https://placehold.co/600x340",
    },
    {
      name: "World Map",
      description:
        "Explora el mapa y consulta la ubicación de materiales, cofres y otros elementos.",
      image: "https://placehold.co/600x340",
    },
    {
      name: "Asset Editor",
      description:
        "Consulta y organiza los recursos utilizados por las diferentes secciones del proyecto.",
      image: "https://placehold.co/600x340",
    },
    {
      name: "Item Editor",
      description:
        "Consulta y configura la información de objetos y elementos disponibles.",
      image: "https://placehold.co/600x340",
    },
  ];

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Herramientas
        </h2>

        <p className="mt-1 text-xs text-[var(--text-secondary)]">
          Utilidades para consultar y trabajar con el contenido del proyecto.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default Tools;