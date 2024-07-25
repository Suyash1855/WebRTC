import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1>`);
});
app.get("/contact", (req, res) => {
  res.send(`<h1>Contact @ 9479644700</h1>`);
});
app.get("/about", (req, res) => {
  res.send("I am Jayesh George I belong to Musakhedi");
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
