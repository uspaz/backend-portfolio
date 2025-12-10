const express = require("express");
const { getProjectsPreview, getAllProjects } = require("../controllers/projectController.js");

const router = express.Router();

router.get("/", getProjectsPreview);    
router.get("/all", getAllProjects);  

module.exports = router;