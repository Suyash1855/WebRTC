import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server started running on port ${port}`);
});

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  const sec = new Date().getSeconds();

  if (sec % 2 === 0) {
    res.render("index.ejs", data);
  } else {
    res.render("index.ejs", {
      tit: "EJS TAGS",
      seconds: sec,
      it: "Nothing to display",
      hmtl: "this is some text",
    });
  }
});
