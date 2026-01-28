import { getFactions } from "../services/gundam.service.js";

export const fetchFactions = async (req, res) => {
  const factions = await getFactions();
  res.json(factions);
};
