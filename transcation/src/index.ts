import dotenv from "dotenv";
import express from "express";


import bodyParser from "body-parser";
import cors from "cors"
import router from "./routes/route";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const PORT = 3001;
app.use(cors())

app.use(express.json());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/transactions', )
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));
app.use("/api/v1",router);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
