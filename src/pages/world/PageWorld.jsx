import { useState } from "react";

import Canvas from "./components/map/Canvas";
import MaterialMap from "./components/list/MaterialMap";

const PageWorld = () => {
  const [materialSelect, setMaterialSelect] = useState([]);

  console.log("materialSelect", materialSelect);

  return (
    <section
      className="relative h-[calc(100dvh-40px)] overflow-hidden"
      style={{
        backgroundImage: `
      linear-gradient(45deg, rgba(255,255,255,0.0125) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255,255,255,0.0125) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.0125) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.0125) 75%)
    `,
        backgroundSize: "48px 48px",
        backgroundPosition: "0 0, 0 24px, 24px -24px, -24px 0",
      }}
    >
      <Canvas />
      <MaterialMap materialSelect={materialSelect} setMaterialSelect={setMaterialSelect} />
    </section>
  );
};

export default PageWorld;
