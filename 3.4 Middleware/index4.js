import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var brandname = "";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

function brandnameGenerator(req, res, next) {
  brandname = req.body["street"] + req.body["pet"];
  next();
}
app.use(brandnameGenerator);
app.post("/submit", (req, res) => {
  res.send(`<h1>Your Brand Name is</h1><h2>${brandname}</h2>`);
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
