import * as migration_20250602_211002 from "./20250602_211002";

export const migrations = [
  {
    up: migration_20250602_211002.up,
    down: migration_20250602_211002.down,
    name: "20250602_211002",
  },
];
