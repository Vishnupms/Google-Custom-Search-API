import axios from 'axios';
import 'dotenv/config'

const apiKey =process.env.API_KEY; // Replace with your actual API key
const searchEngineId = process.env.SEARCH_ENGINE; // Replace with your actual search engine ID

export const search = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: apiKey,
        cx: searchEngineId,
        q: q,
      },
    });

    const items = response?.data?.items || [];
    res.json(items);
  } catch (error) {
    // console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'An error occurred while fetching search results.' });
  }
};
