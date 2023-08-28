import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import logger from "morgan";
import routers from "./routes/index.js";
import { connectDB } from "./config/db.js";
import { error404Handler } from "./utilities/errorhandler.js";

const app = express();

app.use(cors());
// process.env.NODE_ENV === "development" ? app.use(logger("dev")) : null;

connectDB(process.env.MONGO_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routers(app);

app.use(error404Handler);

const port = process.env.PORT || 4400;
app.listen(port, () => {
  console.log(
    `server started on [${process.env.NODE_ENV}] mode at port [${port}]`
  );
});