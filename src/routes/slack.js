const express = require("express");
const { hello } = require("../controllers/slack");

const routes = express.Router();

routes.post("/sextou", hello);

module.exports = routes;