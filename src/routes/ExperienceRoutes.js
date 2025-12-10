const express = require("express");
const { getAllExperiences } = require("../controllers/projectController.js");

const router = express.Router()

router.get("/", getAllExperiences)

module.exports = router