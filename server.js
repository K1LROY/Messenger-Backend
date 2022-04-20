const express = require("express");
const app = express();
const dotenv = require("dotenv");

const databaseConnect = require("./config/database");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/messenger", authRouter);

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("This is from backend Sever");
});

databaseConnect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
