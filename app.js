import express from 'express';
import { logger } from './src/config/database.js';
import { publicRouter } from './src/routes/api-public.js';

const app = express()

app.use(express.json())
app.use(publicRouter)

app.listen(3000, ()=>{
    logger.info("App Run")
})