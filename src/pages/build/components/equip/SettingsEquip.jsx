import { useEffect, useRef } from "react";

const SettingsEquip = ({ equipmentBuild, setEquipmentBuild, openEditor, setOpenEditor }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editorRef.current?.contains(event.target)) {
        return;
      }

      setOpenEditor(null);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenEditor]);

  const connectorPosition = {
    HEAD: {
      left: "-23",
      top: "68",
    },
    CHEST: {
      left: "-23",
      top: "190",
    },
    LEG: {
      left: "-23",
      top: "300",
    },
    HAND: {
      right: "-23",
      top: "190",
    },
    FOOT: {
      right: "-23",
      top: "300",
    },
  };

  const position = connectorPosition[openEditor] ?? {
    left: "-5.75",
    top: "18",
  };

  return (
    <>
      <article ref={editorRef} className="absolute z-50 flex h-80 w-50 flex-col gap-2 rounded-sm border border-white/10 bg-neutral-950/95 p-2">
        <div
          className="absolute h-px w-5 bg-white/60"
          style={{
            left: `${position.left}px`,
            right: `${position.right}px`,
            top: `${position.top}px`,
          }}
        >
          <div className="absolute -left-0.5 -top-0.5 size-1 bg-white" />
          <div className="absolute -right-0.5 -top-0.5 size-1 bg-white" />
        </div>

        <button type="button" className="h-8 rounded-sm border border-white/10 bg-white/5 text-[10px] text-white/60 hover:bg-white/10">
          Rune
        </button>

        <select name="mainStat" defaultValue="" className="h-8 rounded-sm border border-white/10 bg-neutral-900 px-2 text-[10px] text-white/60 outline-none">
          <option value="" disabled>
            Main Stat
          </option>
        </select>

        <select name="subStat1" defaultValue="" className="h-7 rounded-sm border border-white/10 bg-neutral-900 px-2 text-[9px] text-white/60 outline-none">
          <option value="" disabled>
            Sub Stat 1
          </option>
        </select>

        <select name="subStat2" defaultValue="" className="h-7 rounded-sm border border-white/10 bg-neutral-900 px-2 text-[9px] text-white/60 outline-none">
          <option value="" disabled>
            Sub Stat 2
          </option>
        </select>

        <select name="subStat3" defaultValue="" className="h-7 rounded-sm border border-white/10 bg-neutral-900 px-2 text-[9px] text-white/60 outline-none">
          <option value="" disabled>
            Sub Stat 3
          </option>
        </select>

        <select name="subStat4" defaultValue="" className="h-7 rounded-sm border border-white/10 bg-neutral-900 px-2 text-[9px] text-white/60 outline-none">
          <option value="" disabled>
            Sub Stat 4
          </option>
        </select>
      </article>
    </>
  );
};

export default SettingsEquip;
