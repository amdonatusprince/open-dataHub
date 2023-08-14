import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const getSportOdds = async () => {
    const options = {
      method: 'GET',
      url: 'https://odds.p.rapidapi.com/v4/sports/upcoming/odds',
      params: {
        regions: 'us,us2,uk,au,eu',
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
      return { sportsOdds: response.data };
    } catch (error) {
      throw error;
    }


  };
