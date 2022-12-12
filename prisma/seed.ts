import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { foodsData } from './firstFoods'

const prisma = new PrismaClient()

const run = async () => {
  await Promise.all(
    foodsData.map(async (food) => {
      return prisma.publicFoods.upsert({
        where: { id: food.id },
        update: {},
        create: {
          name: food.name,
          brand: food.brand,
          unit: food.unit,
          grams: food.grams,
          calories: food.calories,
          carbs: food.carbs,
          cafeine: food.cafeine,
        },
      })
    })
  )
}

const salt = bcrypt.genSaltSync()

const run2 = async () => {
  const users: Prisma.UserCreateInput[] = [
    {
      email: 'user@test.com',
      name: 'Javier',
      role: 'ADMIN',
      password: bcrypt.hashSync('password', salt),
    },
  ]
  await Promise.all(
    users.map(async (user) => {
      return prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: {
          email: 'user@test.com',
          password: bcrypt.hashSync('password', salt),
          name: 'Javier',
        },
      })
    })
  )
}

run()
run2()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
