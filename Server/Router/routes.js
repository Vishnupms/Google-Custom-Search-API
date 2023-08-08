import express from 'express';
import * as searchController from '../controllers/searchController.js';

const router = express.Router();

router.get('/search', async (req, res) => {
  await searchController.search(req, res);
});

export default router;