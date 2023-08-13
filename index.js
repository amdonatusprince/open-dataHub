import { getAvailableSports } from "./availableSport.js";
import { getSportOdds } from "./liveSportOdds.js";
import { getSportScores } from "./liveSportScores.js";
import StreamrClient from 'streamr-client';
import dotenv from 'dotenv';

dotenv.config();

let availableSports;
let oddsData;
let sportScores;

async function fetchAvailableSports() {
  try {
    availableSports = await getAvailableSports();
  } catch (error) {
    console.error("Error fetching available sports:", error);
  }
}

async function fetchSportOdds() {
  try {
    oddsData = await getSportOdds();
  } catch (error) {
    console.error("Error fetching sport odds:", error);
  }
}

async function fetchSportScores() {
  try {
    sportScores = await getSportScores();
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

const streamr = new StreamrClient({
  auth: {
      privateKey: process.env.PRIVATE_KEY,
  },
})

const stream = await streamr.getOrCreateStream({
  id: '/amdonatusprince',
})

await streamr.publish('/amdonatusprince', oddsData)
await streamr.publish('/amdonatusprince', availableSports)
await streamr.publish('/amdonatusprince', sportScores)
