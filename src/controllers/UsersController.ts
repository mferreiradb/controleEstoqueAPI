import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

export const secret = crypto.randomBytes(64).toString('hex');

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

    async login(req: Request, res: Response) {
        const { login, password } = req.body;

        const result = await prisma.users.findFirst({
            where: {
                login: login
            }
        })

        if (!result) {
            return res.status(400).json({ error: 'Usuário não encontrado!' })
        }

        if (result.password != password) {
            return res.status(400).json({ error: 'Senha incorreta' })
        }

        jwt.sign({ id: result.id, login: result.login }, secret, { expiresIn: '24h' }, (err, token) => {
            if (err) {
                return res.status(400).json({ error: 'Falha interna' })
            } else {
                return res.status(200).json({ token })
            }
        })
    }

    public static getInstance(): Users {
        if (!Users.INSTANCE) {
            Users.INSTANCE = new Users();
        };

        return Users.INSTANCE;
    }
}