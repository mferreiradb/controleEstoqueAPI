import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()

export class Users {
    private static INSTANCE: Users;

    constructor() { }

    async create(req: Request, res: Response) {
        const { login, password } = req.body
        const result = await prisma.users.create({
            data: {
                login: login,
                password: password
            }
        })
        console.log(result);
        return res.json(result)
    }

    public static getInstance(): Users {
        if (!Users.INSTANCE) {
            Users.INSTANCE = new Users();
        };

        return Users.INSTANCE;
    }
}