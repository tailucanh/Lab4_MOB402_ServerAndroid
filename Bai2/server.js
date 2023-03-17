const express = require("express");
const app = express();
const port = 3000;
const expressHbs = require("express-handlebars");

app.engine(
  ".hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: "Bai2/views/layouts/",
  })
);

app.set("view engine", ".hbs");
app.set("views", "./Bai2/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {});
