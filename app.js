import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

app.listen(3626, () => { console.log('Server running on PORT 3626'); });