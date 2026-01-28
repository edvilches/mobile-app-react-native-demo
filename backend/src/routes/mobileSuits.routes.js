import express from 'express';
import pool from '../config/db.js';

const router = express.Router();

/**
 * GET /mobile-suits
 * GET /mobile-suits?faction_id=1
 */
router.get('/', async (req, res) => {
  const { faction_id } = req.query;

  try {
    let query = `
      SELECT
        ms.id,
        ms.name,
        ms.serial_number,
        f.name AS faction
      FROM mobile_suits ms
      JOIN factions f ON ms.faction_id = f.id
    `;

    const values = [];

    if (faction_id) {
      query += ' WHERE f.id = $1';
      values.push(faction_id);
    }

    query += ' ORDER BY ms.name';

    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al consultar mobile suits'
    });
  }
});

export default router;
