import prisma from '../../../lib/prisma'
import { validateRoute } from '../../../lib/auth'

export default validateRoute(async (req, res) => {
  const allRaces = await prisma.races.findMany()

  res.json(allRaces)
})
