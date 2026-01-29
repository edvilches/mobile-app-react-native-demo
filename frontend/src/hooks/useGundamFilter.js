import { useEffect, useState } from "react";
import { getFactions, getMobileSuits } from "../services/api";

export const useGundamFilter = () => {
  const [factions, setFactions] = useState([]);
  const [mobileSuits, setMobileSuits] = useState([]);
  const [factionId, setFactionId] = useState(null);

  useEffect(() => {
    getFactions().then(setFactions);
  }, []);

  useEffect(() => {
    if (!factionId) return;
    getMobileSuits(factionId).then(setMobileSuits);
  }, [factionId]);

  return {
    factions,
    mobileSuits,
    factionId,
    setFactionId
  };
};
