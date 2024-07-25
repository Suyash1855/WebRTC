import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/home", (req, res) => {
  res.render("home.ejs", {
    ishomePage: req.path === "/home",
  });
});

app.get("/write", (req, res) => {
  res.render("write.ejs");
});

app.post("/share", (req, res) => {
  res.render("home.ejs", {
    Yourname: req.body["fname"],
    blog: req.body["desc"],
  });
});
