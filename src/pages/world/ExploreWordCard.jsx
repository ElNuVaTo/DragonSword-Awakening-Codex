import { useEffect, useRef, useState } from "react";

const MAP_SIZE = 4096;
const TILE_SIZE = 1024;
const TILE_RENDER_SIZE = 1025;

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.15;

const mapTiles = import.meta.glob("../../../assets/Map/*.webp", {
  eager: true,
  import: "default",
});

const getTile = (x, y) => mapTiles[`../../../assets/Map/${x}-${y}.webp`];

const ExploreWordCard = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const tileImagesRef = useRef([]);

  const [zoom, setZoom] = useState(1);

  const transformRef = useRef({
    x: 0,
    y: 0,
    zoom: 1,
  });

  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const getBaseScale = () => {
    const container = containerRef.current;

    if (!container) return 1;

    const rect = container.getBoundingClientRect();

    return Math.min(rect.width / MAP_SIZE, rect.height / MAP_SIZE);
  };

  const clampPosition = (x, y, currentZoom = transformRef.current.zoom) => {
    const container = containerRef.current;

    if (!container) {
      return { x, y };
    }

    const rect = container.getBoundingClientRect();
    const scale = getBaseScale();

    const mapWidth = MAP_SIZE * scale * currentZoom;
    const mapHeight = MAP_SIZE * scale * currentZoom;

    let minX;
    let maxX;
    let minY;
    let maxY;

    if (mapWidth <= rect.width) {
      const centeredX = (rect.width - mapWidth) / 2;

      minX = centeredX;
      maxX = centeredX;
    } else {
      minX = rect.width - mapWidth;
      maxX = 0;
    }

    if (mapHeight <= rect.height) {
      const centeredY = (rect.height - mapHeight) / 2;

      minY = centeredY;
      maxY = centeredY;
    } else {
      minY = rect.height - mapHeight;
      maxY = 0;
    }

    return {
      x: Math.max(minX, Math.min(maxX, x)),
      y: Math.max(minY, Math.min(maxY, y)),
    };
  };

  const drawMap = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container || !tileImagesRef.current.length) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    const { x, y, zoom: currentZoom } = transformRef.current;

    const scale = getBaseScale();
    const tileScale = scale * currentZoom;

    tileImagesRef.current.forEach(({ image, tileX, tileY }) => {
      const drawX = x + tileX * TILE_SIZE * tileScale;
      const drawY = y + tileY * TILE_SIZE * tileScale;

      const width = TILE_RENDER_SIZE * tileScale;
      const height = TILE_RENDER_SIZE * tileScale;

      ctx.drawImage(image, drawX, drawY, width, height);
    });
  };

  const updateZoom = (nextZoom, centerX, centerY) => {
    const container = containerRef.current;

    if (!container) return;

    const rect = container.getBoundingClientRect();
    const transform = transformRef.current;

    const clampedZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom));

    if (clampedZoom === transform.zoom) {
      return;
    }

    const pointX = centerX ?? rect.width / 2;
    const pointY = centerY ?? rect.height / 2;

    const scale = clampedZoom / transform.zoom;

    const nextX = pointX - (pointX - transform.x) * scale;

    const nextY = pointY - (pointY - transform.y) * scale;

    const position = clampPosition(nextX, nextY, clampedZoom);

    transform.zoom = clampedZoom;
    transform.x = position.x;
    transform.y = position.y;

    setZoom(clampedZoom);

    drawMap();
  };

  const handleWheel = (event) => {
    event.preventDefault();

    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const direction = event.deltaY < 0 ? 1 : -1;

    const nextZoom = transformRef.current.zoom + direction * ZOOM_STEP;

    updateZoom(nextZoom, mouseX, mouseY);
  };

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) {
      return;
    }

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: transformRef.current.x,
      originY: transformRef.current.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active) {
      return;
    }

    const deltaX = event.clientX - dragRef.current.startX;

    const deltaY = event.clientY - dragRef.current.startY;

    const nextX = dragRef.current.originX + deltaX;

    const nextY = dragRef.current.originY + deltaY;

    const position = clampPosition(nextX, nextY, transformRef.current.zoom);

    transformRef.current.x = position.x;
    transformRef.current.y = position.y;

    drawMap();
  };

  const handlePointerUp = (event) => {
    dragRef.current.active = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const resetMap = () => {
    const container = containerRef.current;

    if (!container || !tileImagesRef.current.length) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const scale = getBaseScale();

    const width = MAP_SIZE * scale;
    const height = MAP_SIZE * scale;

    transformRef.current = {
      x: (rect.width - width) / 2,
      y: (rect.height - height) / 2,
      zoom: 1,
    };

    setZoom(1);

    drawMap();
  };

  useEffect(() => {
    let cancelled = false;

    const loadTiles = async () => {
      const tiles = [];

      for (let tileY = 0; tileY < 4; tileY++) {
        for (let tileX = 0; tileX < 4; tileX++) {
          const src = getTile(tileX, tileY);

          if (!src) continue;

          const image = new Image();

          image.src = src;

          try {
            await image.decode();
          } catch {
            continue;
          }

          if (cancelled) {
            return;
          }

          tiles.push({
            image,
            tileX,
            tileY,
          });
        }
      }

      if (cancelled) {
        return;
      }

      tileImagesRef.current = tiles;

      requestAnimationFrame(() => {
        resetMap();
      });
    };

    loadTiles();

    const handleResize = () => {
      const transform = transformRef.current;

      const position = clampPosition(transform.x, transform.y, transform.zoom);

      transform.x = position.x;
      transform.y = position.y;

      drawMap();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="min-w-0 flex-1 basis-0 overflow-hidden rounded-lg border border-(--border) bg-[#173546]">
      <div
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden touch-none select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          cursor: dragRef.current.active ? "grabbing" : "grab",
        }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-label="Mapa interactivo de Orbis"
        />

        <div className="absolute bottom-3 right-3 flex overflow-hidden rounded-md border border-black/20 bg-black/60 backdrop-blur-sm">
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => updateZoom(transformRef.current.zoom - 0.2)}
            className="flex h-8 w-8 items-center justify-center text-sm text-white transition-colors hover:bg-white/10"
            aria-label="Alejar mapa"
          >
            −
          </button>

          <div className="w-px bg-white/10" />

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => updateZoom(transformRef.current.zoom + 0.2)}
            className="flex h-8 w-8 items-center justify-center text-sm text-white transition-colors hover:bg-white/10"
            aria-label="Acercar mapa"
          >
            +
          </button>

          <div className="w-px bg-white/10" />

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={resetMap}
            className="flex h-8 items-center justify-center px-2 text-[10px] font-medium text-white transition-colors hover:bg-white/10"
            aria-label="Restablecer mapa"
          >
            {Math.round(zoom * 100)}%
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreWordCard;
