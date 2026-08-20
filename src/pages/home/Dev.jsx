const DevPost = ({ date, title, description, tag }) => {
  return (
    <article className="group relative border-l border-[var(--border)] pl-5">
      <div className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full bg-[var(--border)] transition-colors group-hover:bg-[var(--primary)]" />

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--primary)]">
          {tag}
        </span>

        <span className="text-[10px] text-[var(--text-secondary)]">
          {date}
        </span>
      </div>

      <h3 className="mt-1 text-sm font-semibold text-[var(--text)]">
        {title}
      </h3>

      <p className="mt-1 max-w-2xl text-xs leading-5 text-[var(--text-secondary)]">
        {description}
      </p>
    </article>
  );
};

const Dev = () => {
  const posts = [
    {
      date: "16 Ago 2026",
      tag: "Actualización",
      title: "Mejoras en la navegación",
      description:
        "Se ajustaron distintas secciones de la wiki para facilitar el acceso a mapas, equipamiento y recursos.",
    },
    {
      date: "12 Ago 2026",
      tag: "Contenido",
      title: "Nueva información de materiales",
      description:
        "Se incorporaron nuevos materiales y sus recursos visuales para ampliar la información disponible.",
    },
    {
      date: "08 Ago 2026",
      tag: "Desarrollo",
      title: "Preparando la primera versión pública",
      description:
        "Se están realizando ajustes finales en la estructura, interfaz y organización del contenido antes de publicar la primera versión.",
    },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Novedades
        </h2>

        <p className="mt-1 text-xs text-[var(--text-secondary)]">
          Cambios recientes y avances del proyecto.
        </p>
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <DevPost key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Dev;