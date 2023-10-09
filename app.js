import express from 'express';
//import { logger } from './src/config/logger.js';
import { publicRouter } from './src/routes/api-public.js';
import {errorMiddleware} from './src/middleware/error-middleware.js';

const app = express()

app.use(express.json())
app.use(publicRouter)

app.use(errorMiddleware)

app.listen(3000, ()=>{
    //logger.info("App Run")
   console.info("run!")
})