import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const roles = prisma.role.createMany({
        data: [
            {
                name: "Teacher",
                color: "#6d9177"
            },
            {
                name: "Student",
                color: "#32a852"
            }
        ]
    });

    console.log(roles);
}

main().then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})

export default main;