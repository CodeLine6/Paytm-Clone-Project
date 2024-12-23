import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: '9999999999' },
    update: {
      Balance : {
        create: {
          amount: 20000,
          locked: 0,
          
        }
      }
    },
    create: {
      number: '9999999999',
      password: 'alice',
      name: 'alice',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
      Balance : {
        create: {
          amount: 20000,
          locked: 0,

        }
      }
    },
  })
  const bob = await prisma.user.upsert({
    where: { number: '9999999998' },
    update: {
      Balance : {
        create: {
          amount: 2000,
          locked: 0,
          
        }
      }
    },
    create: {
      number: '9999999998',
      password: 'bob',
      name: 'bob',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
      Balance : {
        create: {
          amount: 2000,
          locked: 0,
          
        }
      }
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })