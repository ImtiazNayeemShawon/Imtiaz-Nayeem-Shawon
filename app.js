const express = require("express");
const mongoose = require("mongoose");
const Experinece = require("./Sections/Experinece");

app = express();
app.use(express.json());

//DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/imtiaz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", false);
mongoose.set("strictQuery", true);


app.use('/Experince',Experinece);


function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => {
  console.log("App listening ");
});
