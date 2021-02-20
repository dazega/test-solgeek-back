import express, { json } from "express";
import cors from "cors";
import mongoose from 'mongoose';
import config from "./config/config";

import userRoutes from "./routes/user";

const app = express();

app.use(json());
app.use(cors());

app.use(userRoutes);

mongoose.connect(`${config.MONGO_URL}/${config.DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(config.PORT, () => { console.log(`Server running on PORT ${config.PORT}`); });
  })
  .catch((error) => {
    console.log(`Erro en conexión a la BD: ${error}`);
  });

  mongoose.set('useFindAndModify', false);
