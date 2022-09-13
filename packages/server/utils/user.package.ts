import { PrismaClient } from '@prisma/client';
import prisma from '../db/init';

async function createUser(email: string, name: string) {
    return await prisma.user.create({
        data: {
            email,
            name,
        },
    });
}

async function getAllUsers() {
    const users = await prisma.user.findMany();

    return users;
}

async function getUserById(id: number) {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    return user;
}

// User role added:
async function addUserRole(userId: number, roleName: string, roleColor: string): Promise<string> {
    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            Role: {
                create: {
                    // Create a new role for the user.
                    name: roleName,
                    color: roleColor,
                },
            },
        },
    });

    return "Role added";
}

async function removeAllUsers(): Promise<string> {
    await prisma.user.deleteMany({ where: {name: 'John'}}).then(() => {
        return "All users deleted";
    });

    return "";
}

async function removeUserById(id: number): Promise<string> {
    await prisma.user.delete({
        where: {
            id,
        },
    });

    return "User deleted";
}

export { createUser, getAllUsers, getUserById, addUserRole, removeAllUsers, removeUserById };