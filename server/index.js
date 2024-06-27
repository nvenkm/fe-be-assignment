require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRouter = require("./routers/contact.router");

const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api/contact", contactRouter);

//Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
