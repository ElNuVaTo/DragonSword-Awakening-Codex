import { useState, useEffect, useRef } from "react";

import mapImage from "../../../../assets/orbis.webp";

const MAP_SIZE = 2048;

const Canvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });

  // Consctructor de canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();

    image.src = mapImage;

    image.onload = () => {
      console.log("MAP LOADED:", image.width, image.height);

      canvas.width = MAP_SIZE;
      canvas.height = MAP_SIZE;

      ctx.drawImage(image, 0, 0, MAP_SIZE, MAP_SIZE);

      const container = containerRef.current;

      const x = (container.clientWidth - MAP_SIZE) / 2;
      const y = (container.clientHeight - MAP_SIZE) / 2;

      setPosition({ x, y });
    };
  }, []);

  // Zoom
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      event.preventDefault();

      setZoom((prev) => {
        const next = prev - event.deltaY * 0.001;

        return Math.min(Math.max(next, 0.5), 3);
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Drag
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

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDragStart={(event) => event.preventDefault()}
      onSelectStart={(event) => event.preventDefault()}
      className={`relative h-full w-full overflow-hidden ${dragging ? "cursor-grabbing" : "cursor"}`}
    >
      <canvas
        ref={canvasRef}
        draggable={false}
        className="block size-512 select-none"
        style={{
          width: `${MAP_SIZE}px`,
          height: `${MAP_SIZE}px`,
          transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
          WebkitUserDrag: "none",
        }}
        aria-label="Mapa interactivo de Orbis"
      />
    </div>
  );
};

export default Canvas;
