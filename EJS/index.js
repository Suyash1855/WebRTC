import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  const d = new Date();
  const day = d.getDay();

  let type = "a weekday";
  let adv = "it's time to work harder";

  if (day === 0 || day === 6) {
    let type = "The weeknd";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
