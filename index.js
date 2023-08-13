import { getAvailableSports } from "./availableSport.js";
import { getSportOdds } from "./liveSportOdds.js";
import { getSportScores } from "./liveSportScores.js";

async function fetchAvailableSports() {
  try {
    const availableSports = await getAvailableSports();
  } catch (error) {
    console.error("Error fetching available sports:", error);
  }
}

async function fetchSportOdds() {
  try {
    const oddsData = await getSportOdds();
  } catch (error) {
    console.error("Error fetching sport odds:", error);
  }
}

async function fetchSportScores() {
  try {
    const sportScores = await getSportScores();
  } catch (error) {
    console.error("Error fetching sport scores:", error);
  }
}

async function main() {
  await fetchAvailableSports();
  await fetchSportOdds();
  await fetchSportScores();
}

main();
