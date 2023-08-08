import express from 'express';
import cors from 'cors';
import router from './Router/routes.js';

const app = express();
const port = 8000;
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});