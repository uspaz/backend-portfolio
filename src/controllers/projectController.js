const prisma = require('../models/prismaClient');

async function getProjectsPreview(req, res) {
  const limit = Number(req.query.limit) || 4;
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { id: 'asc' },
      take: limit,
    });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener proyectos (preview)' });
  }
}

async function getAllProjects(req, res) {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { id: 'desc' },
    });
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener todos los proyectos' });
  }
}

async function getAllExperiences(req, res) {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { id: 'asc' },
    });
    res.json(experiences);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener experiencias' });
  }
}

module.exports = { getProjectsPreview, getAllProjects, getAllExperiences };