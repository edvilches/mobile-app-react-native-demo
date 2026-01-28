import { pool } from "../config/db.js";

export const getFactions = async () => {
  const { rows } = await pool.query(
    "SELECT id, name FROM factions ORDER BY name"
  );
  return rows;
};

export const getMobileSuitsByFaction = async (factionId) => {
  const { rows } = await pool.query(
    `
    SELECT id, name, serial_number
    FROM mobile_suits
    WHERE faction_id = $1
    ORDER BY name
    `,
    [factionId]
  );
  return rows;
};
