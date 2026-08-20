const assets = import.meta.glob("../../../assets/Charater/*/src/*.png", {
  eager: true,
  import: "default",
});

const characters = Object.entries(assets).reduce((acc, [path, src]) => {
  const match = path.match(/Charater\/([^/]+)\/src\/([^/]+)\.png$/);

  if (!match) return acc;

  const [, name, file] = match;

  if (name.startsWith("X")) return acc;

  acc[name] ??= {
    name,
    portrait: null,
    medium: null,
    full: null,
    fullGradient: null,
  };

  switch (file) {
    case "portrait":
      acc[name].portrait = src;
      break;

    case "medium":
      acc[name].medium = src;
      break;

    case "full":
      acc[name].full = src;
      break;

    case "full-gradient":
      acc[name].fullGradient = src;
      break;
  }

  return acc;
}, {});

export default Object.values(characters);
