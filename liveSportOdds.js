import axios from 'axios';

require('dotenv').config()

const options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports/upcoming/odds',
  params: {
    regions: 'us',
    oddsFormat: 'decimal',
    markets: 'h2h,spreads',
    dateFormat: 'iso'
  },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}