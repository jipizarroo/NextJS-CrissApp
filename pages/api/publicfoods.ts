import prisma from '../../lib/prisma'
import { validateRoute } from '../../lib/auth'

export default validateRoute(async (req, res) => {
  const publicFoods = await prisma.publicFoods.findMany()

  res.json(publicFoods)
})
