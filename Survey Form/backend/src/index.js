import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";



const app = express();


import connection from "./db/connect.db.js"

connection();

dotenv.config();


import route from "./routes/form.routes.js"


app.use(cors());
app.use(express.json());

const port = process.env.PORT||8080;

app.listen(port,()=>{
     console.log(`App is listening at the port ${port}`);
});

app.post("/api/form",route);