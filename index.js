import express from "express";
import env from "dotenv";
import routers from "./routers.js";
env.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(routers);

app.listen(process.env.SERVER_PORT, () => console.log(`Server Up And Running on port ${process.env.SERVER_PORT}`));
