require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const cors = require("cors");
const app = express();

const { PORT, DATA_BASE_LINK } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Connect with Data Base
mongoose.set("strictQuery", false);
mongoose
  .connect(DATA_BASE_LINK, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Data Base Connected`))
  .catch((err) => console.log(err));

app.use("/", route);

//SEver Created
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
