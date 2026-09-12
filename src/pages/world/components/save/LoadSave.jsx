import { useEffect, useRef, useState } from "react";
import { init } from "@7mind.io/sqlcipher-wasm";

const KEY = "13314374259236352028";

const LoadSave = ({ setDataDB }) => {
  const fileInputRef = useRef(null);

  const [sqlite, setSqlite] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSQLCipher = async () => {
      try {
        const api = await init();

        console.log("SQLCipher cargado:", api);

        setSqlite(api);
        setLoading(false);
      } catch (error) {
        console.error("Error cargando SQLCipher:", error);
      }
    };

    loadSQLCipher();
  }, []);

  const decodeBitfieldColumn = (db, tableName, bitFieldColumn, outArray) => {
    const rows = db.query(`
      SELECT CATEGORY, ${bitFieldColumn}
      FROM "${tableName}";
    `);

    for (const row of rows) {
      const category = Number(row.CATEGORY);

      const raw = row[bitFieldColumn];
      const bits = typeof raw === "bigint" ? raw : BigInt(raw ?? 0);

      for (let bit = 0; bit < 64; bit++) {
        if (bits & (1n << BigInt(bit))) {
          const cid = category * 64 + bit;
          outArray.push(cid);
        }
      }
    }
  };

  const decodeIdColumn = (db, tableName, idColumn, outArray) => {
    const rows = db.query(`
      SELECT ${idColumn}
      FROM "${tableName}";
    `);

    for (const row of rows) {
      const value = row[idColumn];

      if (value !== null && value !== undefined) {
        outArray.push(String(value));
      }
    }
  };

  const loadSave = async (file) => {
    if (!file || !sqlite) return;

    try {
      const buffer = await file.arrayBuffer();
      const data = new Uint8Array(buffer);

      const filename = "/save.db";

      sqlite.module.FS.writeFile(filename, data);

      const db = sqlite.open(filename, KEY);

      db.exec(`PRAGMA legacy = 4;`);

      const openedTBCIDs = [];
      const completedMGCIDs = [];
      const completedAQIds = [];

      decodeBitfieldColumn(db, "tb_treasure_box", "OPENED_BIT_FIELD", openedTBCIDs);
      decodeBitfieldColumn(db, "tb_minigame", "BIT_FIELD", completedMGCIDs);
      decodeIdColumn(db, "tb_dynamic_quest_complete", "QUEST_ID", completedAQIds);

      setDataDB({
        TreasureBox: openedTBCIDs,
        Minigames: completedMGCIDs,
        Quest: completedAQIds,
      });

      db.close();
    } catch (error) {
      console.error("Error cargando save:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    loadSave(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input ref={fileInputRef} type="file" accept=".db" onChange={handleFileChange} className="hidden" />

      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="
          absolute bottom-4 right-3 z-20
          flex cursor-pointer items-center gap-2
          rounded-md border border-white/10
          bg-black/60 px-3 py-2
          text-[0.5625rem] font-medium uppercase
          tracking-[0.14em] text-white
          backdrop-blur-sm
          transition-all duration-200
          hover:border-white/20
          hover:bg-black/70
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <span className="size-1 rotate-45 bg-[#777363]" />

        <span className="text-white/70">{loading ? "Cargando..." : "Cargar guardado"}</span>
      </button>
    </>
  );
};

export default LoadSave;
