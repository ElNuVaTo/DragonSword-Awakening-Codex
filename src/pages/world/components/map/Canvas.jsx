import { useState, useEffect, useRef } from "react";

import mapImage from "../../../../assets/orbis.webp";
import Treasurebox from "./Mark";

const MAP_SIZE = 2048;

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;

const Canvas = ({ dataDB, materialSelect, treasureChestGrades, minigameTypes }) => {
  const containerRef = useRef(null);

  // ========================================
  // ZOOM
  // ========================================

  const [zoom, setZoom] = useState(1);

  const [zoomOrigin, setZoomOrigin] = useState({
    x: MAP_SIZE / 2,
    y: MAP_SIZE / 2,
  });

  // ========================================
  // DRAG
  // ========================================

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
  });

  const positionStart = useRef({
    x: 0,
    y: 0,
  });

  // ========================================
  // Posición inicial
  // ========================================

  const handleImageLoad = () => {
    const container = containerRef.current;

    if (!container) return;

    setPosition({
      x: (container.clientWidth - MAP_SIZE) / 2,
      y: (container.clientHeight - MAP_SIZE) / 2,
    });

    setZoom(1);

    setZoomOrigin({
      x: MAP_SIZE / 2,
      y: MAP_SIZE / 2,
    });
  };

  // ========================================
  // ZOOM
  // ========================================

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();

      const rect = container.getBoundingClientRect();

      // Mouse dentro del viewport
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      setZoom((currentZoom) => {
        const direction = event.deltaY < 0 ? 1 : -1;

        const nextZoom = Math.min(Math.max(currentZoom + direction * ZOOM_STEP, MIN_ZOOM), MAX_ZOOM);

        if (nextZoom === currentZoom) {
          return currentZoom;
        }

        /*
         * Punto del mapa que actualmente está
         * debajo del cursor.
         *
         * DRAG:
         * position
         *
         * ZOOM:
         * currentZoom
         */

        const mapX = (mouseX - position.x) / currentZoom;

        const mapY = (mouseY - position.y) / currentZoom;

        /*
         * Ese punto pasa a ser el origen
         * de la transformación.
         */

        setZoomOrigin({
          x: mapX,
          y: mapY,
        });

        return nextZoom;
      });
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [position]);

  // ========================================
  // DRAG
  // ========================================

  const handleMouseDown = (event) => {
    setDragging(true);

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
    };

    positionStart.current = {
      x: position.x,
      y: position.y,
    };
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;

    const deltaX = event.clientX - dragStart.current.x;

    const deltaY = event.clientY - dragStart.current.y;

    setPosition({
      x: positionStart.current.x + deltaX,
      y: positionStart.current.y + deltaY,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDragStart={(event) => event.preventDefault()}
      onSelectStart={(event) => event.preventDefault()}
      className={`relative h-full w-full overflow-hidden ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
    >
      {/* ==================================
          DRAG LAYER
      ================================== */}

      <div
        className="absolute left-0 top-0"
        style={{
          width: MAP_SIZE,
          height: MAP_SIZE,

          transform: `
            translate(${position.x}px, ${position.y}px)
          `,
        }}
      >
        {/* ==================================
            ZOOM LAYER
        ================================== */}

        <div
          className="absolute left-0 top-0"
          style={{
            width: MAP_SIZE,
            height: MAP_SIZE,

            transform: `scale(${zoom})`,

            transformOrigin: `
              ${zoomOrigin.x}px
              ${zoomOrigin.y}px
            `,
          }}
        >
          <img
            src={mapImage}
            alt="Mapa interactivo de Orbis"
            draggable={false}
            onLoad={handleImageLoad}
            className="absolute left-0 top-0 block select-none"
            style={{
              width: MAP_SIZE,
              height: MAP_SIZE,
              WebkitUserDrag: "none",
            }}
          />

          <Treasurebox dataDB={dataDB} materialSelect={materialSelect} treasureChestGrades={treasureChestGrades} minigameTypes={minigameTypes} />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
