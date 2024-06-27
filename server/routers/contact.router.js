const express = require("express");
const { contactController } = require("../controllers/contact.controller");
const contactRouter = express.Router();

contactRouter.post("/", contactController);

module.exports = contactRouter;
