const express = require("express");
const app = express();
const mongoose = require("mongoose");
const testReg = require("./routes/Register");
const testAuth = require("./routes/Auth");


const productRoute = require("./routes/product");
const cors = require("cors");


mongoose
  .connect("mongodb+srv://zishanalam145:IWzyapxugfdzF0jha@cluster0.r0oe0qw.mongodb.net/")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/test", testReg);
app.use("/test", testAuth);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
