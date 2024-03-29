import { validateRoute } from '../../../lib/auth'
import prisma from '../../../lib/prisma'

export default validateRoute(async (req, res) => {
  try {
    const race = await prisma.userStrategy.create({
      data: {
        foodGroup: req.body.foodgroup,
        belongsToUser: {
          connect: { id: req.body.belongsToUser },
        },
        belongsToRace: {
          connect: { id: req.body.belongsToRace },
        },
      },
    })
    res.status(200).json({ data: race })
  } catch (e) {
    return res.status(500).send({ success: false })
  }
})
