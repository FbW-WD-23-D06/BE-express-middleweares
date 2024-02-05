import "./config.js"; // This will import dotenv and run the config function
import express from "express";
import logEndPoints from "./utils/logEndpoints.js"; 

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} \n`);
  logEndPoints(app,port);
});
