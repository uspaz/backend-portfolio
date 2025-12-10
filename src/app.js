const express = require("express");
const cors = require("cors");
const ProjectRoutes = require("./routes/ProjectRoutes.js");
const ExperienceRoutes = require("./routes/ExperienceRoutes.js");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", ProjectRoutes);
app.use("/api/experience", ExperienceRoutes);


app.get("/projects", (req, res) => res.redirect("/api/projects/all"));
app.get("/", (req, res) => res.send("Portfolio backend"));


module.exports = app;