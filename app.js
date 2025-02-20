import express from "express";
import {errorHandler} from"./middlewares/errorHandler.middleware.js"
const app= express();



import { apiResponse } from "./utils/apiResponse.js";



app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))




// importing routes 
import assetRouter from "./routes/asset.routes.js";

// routing part
app.use("/api/v1/asset", assetRouter)

app.use(errorHandler);

export default app;