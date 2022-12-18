import prisma from '../../lib/prisma'

export const createRace = async (req, res, next) => {
  try {
    const race = await prisma.races.create({
      data: {
        name: req.body.name,
        createdAt: req.body.createdAt,
        stages: req.body.stages,
      },
    })
    res.json({ data: race })
  } catch (e) {
    next(e)
  }
}
