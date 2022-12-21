import { validateRoute } from '../../../lib/auth'
import prisma from '../../../lib/prisma'

export default validateRoute(async (req, res) => {
  try {
    const race = await prisma.races.create({
      data: {
        name: req.body.name,
        stages: req.body.stages,
        belongsTo: {
          connect: { id: req.body.belongsToId },
        },
      },
    })
    res.status(200).json({ data: race })
  } catch (e) {
    res.json({ err: e })
  }
})
