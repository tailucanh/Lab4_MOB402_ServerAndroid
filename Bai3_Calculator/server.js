const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const _cal = require("./calculator");
const port = 8000;
const expressHbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  ".hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: "Bai3_Calculator/views/layouts/",
  })
);

app.set("view engine", ".hbs");
app.set("views", "./Bai3_Calculator/views");

app.get("/", (req, res) => {
  res.render("home", {
    layout: false,
    num1: "",
    num2: "",
    result: "",
  });
});
app.post("/calculate", (req, res) => {
  console.log(req.body);
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const operator = req.body.operator;
  let result = 0;
  switch (operator) {
    case "+":
      result = _cal.isSum(num1, num2);
      break;
    case "-":
      result = _cal.isSub(num1, num2);
      break;
    case "x":
      result = _cal.isMul(num1, num2);
      break;
    case "/":
      result = _cal.isDiv(num1, num2);
      break;
    default:
      result = "Invalid operator";
      break;
  }
  res.render("home", {
    layout: false,
    num1: num1,
    num2: num2,
    result: "Result: " + num1 + " " + operator + " " + num2 + " = " + result,
  });
});

app.listen(port, () => {});
