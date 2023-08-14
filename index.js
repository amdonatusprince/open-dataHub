import { getAvailableSports } from "./availableSport.js";
import { getSportOdds } from "./liveSportOdds.js";
import { getSportScores } from "./liveSportScores.js";
import StreamrClient from 'streamr-client';
import dotenv from 'dotenv';

dotenv.config();

let oddsData;
let sportScores;

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

  await fetchSportOdds();
  await fetchSportScores();

  const streamr = new StreamrClient({
    auth: {
        privateKey: process.env.PRIVATE_KEY,
    },
  })

  const stream1 = await streamr.getOrCreateStream({
    id: '/livesportscores',
  })

  const stream2 = await streamr.getOrCreateStream({
    id: '/livesportodds',
  })

  // Pushing off-chain data available on-chain using Streamr Network

  console.log("Publishing to the Live Sport Odds Stream...")
  await streamr.publish('/livesportodds', oddsData)
  console.log("Done!")

  console.log("Publishing to the Live Sport Scores Stream...")
  await streamr.publish('/livesportscores', sportScores)
  console.log("Done!")

}

main();



