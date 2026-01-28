import { getMobileSuitsByFaction } from "../services/gundam.service.js";

export const fetchMobileSuits = async (req, res) => {
  const { factionId } = req.params;
  const suits = await getMobileSuitsByFaction(factionId);
  res.json(suits);
};
