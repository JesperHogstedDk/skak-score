const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

async function seed() {
  // Blitz everything!
  await prisma.note.deleteMany();
  await prisma.author.deleteMany();
  await prisma.skak.deleteMany();

  const author = await prisma.author.create({
    data: {
      username: 'neohed'
    },
  });

  await prisma.note.create({
    data: {
      title: 'A New Note',
      content: 'This note is retrieved from the database!',
      authorId: author.id,
      lang: 'en',
      isLive: true,
      category: '',
    },
  });

  await prisma.skak.create({
    data: {
      turnering: 'Stormestrenes skak turnering',
      spillerNavn: 'Mette',
      spillerPoint: '1',
      modSpillerNavn: 'Jesper',
      modSpillerPoint: '0',
    },
  });

  await prisma.skak.create({
    data: {
      turnering: 'Stormestrenes skak turnering 2',
      spillerNavn: 'Mette 2',
      spillerPoint: '2',
      modSpillerNavn: 'Jesper 2',
      modSpillerPoint: '1',
    },
  });

  console.log(`Database has been seeded. 🌱`)
}

seed()
  .then(() => {
    console.log('Prisma seed function in prisma/seed.js executed!')
  })
  .catch((e) => {
    console.error(e);
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })