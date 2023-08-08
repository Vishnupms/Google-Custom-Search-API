import express from "express"
import 'dotenv/config.js'
import searchRoute from './Routes/searchRoute.mjs'

const app = express();

app.use(express.json())

app.use('/api/search',searchRoute)

const port = process.env.port

app.listen(port,()=>{
    console.log(`Server Running on PORT : ${port}`)
})