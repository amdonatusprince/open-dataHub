import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getSportScores = async () => {
const options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports/',
  params: {daysFrom: '3'},
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return { sportScores: response.data };
} catch (error) {
  throw error;
}

};