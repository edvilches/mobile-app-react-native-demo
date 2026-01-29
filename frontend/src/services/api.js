import { BASE_URL } from "../config/env";

export const getFactions = () =>
  fetch(`${BASE_URL}/factions`).then(res => res.json());

export const getMobileSuits = (factionId) =>
  fetch(`${BASE_URL}/mobile-suits/${factionId}`).then(res => res.json());
