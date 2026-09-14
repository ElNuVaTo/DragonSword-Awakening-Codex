import { useState } from "react";
import TestMark from "../../../../resources/Test.json";
import MarkTreasureCard from "./MarkTreasureCard";

const MAP_SIZE = 2048;

const Mark = ({ dataDB, materialSelect, treasureChestGrades, minigameTypes }) => {
  const [selected, setSelected] = useState(null);

  const visibleMarks = TestMark.filter((mark) => {
    if (mark.type === "TreasureBox" && !mark.item?.DataLayer) {
      return treasureChestGrades.includes(mark.item?.Grade);
    }

    if (mark.type === "TreasureBox" && mark.item?.DataLayer) {
      return minigameTypes.includes(mark.item?.MiniGameType);
    }

    if (mark.type === "Gathering" || mark.type === "Mining") {
      return materialSelect.includes(mark.item?.ID);
    }

    return false;
  });

  return (
    <div className="pointer-events-none absolute left-0 top-0 size-full">
      {visibleMarks.map((mark) => {
        const x = mark.canvas.x;
        const y = mark.canvas.y;

        if (x < 0 || x > MAP_SIZE || y < 0 || y > MAP_SIZE) {
          return null;
        }

        const isSelected = selected?.id.uid === mark.id.uid;

        const isCompleted = mark.type === "TreasureBox" && dataDB?.TreasureBox?.includes(Number(mark.id.cid));

        return (
          <MarkTreasureCard
            key={mark.id.uid}
            mark={mark}
            x={x}
            y={y}
            isSelected={isSelected}
            isCompleted={isCompleted}
            onSelect={() => {
              setSelected(isSelected ? null : mark);
            }}
          />
        );
      })}
    </div>
  );
};

export default Mark;
