const { prisma } = require("./db")

async function getSkaks() {
  return prisma.skak.findMany();
}

async function getSkak(id) {
  return prisma.skak.findUnique({ where: { id } });
}

async function createSkak(skak) {
  const {turnering} = skak;
  console.log('XXXXXXXXXXXskak.turnering=' + turnering);
  return prisma.skak.create({
    data: skak
  });
}

async function updateSkak(id, skak) {
  return prisma.skak.update({
    data: skak,
    where: {
      id
    }
  });
}

async function deleteSkak(id) {
  return prisma.skak.delete({
    where: {
      id
    }
  });
}

module.exports = {
  getSkaks,
  getSkak,
  createSkak,
  updateSkak,
  deleteSkak,
}