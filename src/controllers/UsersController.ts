import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { UsersValitations } from '../middlewares/UsersValitations';

export const secret = crypto.randomBytes(64).toString('hex');

const prisma = new PrismaClient();

export class Users {
    private static INSTANCE: Users;

    async create(req: Request, res: Response) {
        const { login, password } = req.body;

        const verify = await prisma.users.findFirst({
            where: {
                login: login
            }
        });

        if (verify) {
            return res.status(400).json({ Error: 'Login já em uso!' });
        }

        const result = await prisma.users.create({
            data: {
                login: login,
                password: password
            }
        });
        return res.json({ Msg: `Usuário ${result.login} cadastrado com sucesso!` });
    }

    async login(req: Request, res: Response) {
        const { login, password } = req.body;

        const result = await prisma.users.findFirst({
            where: {
                login: login
            }
        });

        if (!result) {
            return res.status(400).json({ Error: 'Usuário não encontrado!' });
        }

        if (result.password != password) {
            return res.status(400).json({ Error: 'Senha incorreta' });
        }

        jwt.sign({ id: result.id, login: result.login }, secret, { expiresIn: '24h' }, (err, token) => {
            if (err) {
                return res.status(400).json({ Error: 'Falha interna' });
            } else {
                return res.status(200).json({ token });
            }
        });
    }

    async update(req: Request, res: Response) {
        const { idUser } = req.params;
        const { login, password } = req.body;
        const id: number = parseInt(idUser);

        const result = await prisma.users.findFirst({
            where: {
                id: id
            }
        });

        if (!result) {
            return res.status(400).json({ Error: 'Usuário não encontrado!' });
        } else {

            if (UsersValitations.loginValidade(login, password)) {
                const newResult = await prisma.users.update({
                    where: {
                        id: id
                    },
                    data: {
                        password: password
                    }
                });
                return res.json({ Msg: `Alteração no usuário ${newResult.login} realizada com sucesso!` });

            } else if (UsersValitations.passwordValidate(password, login)) {
                const newResult = await prisma.users.update({
                    where: {
                        id: id
                    },
                    data: {
                        login: login
                    }
                });
                return res.json({ Msg: `Alteração no usuário ${newResult.login} realizada com sucesso!` });
            } else {
                return res.status(400).json({ Error: 'Falha na validação dos dados enviados!' });
            }

        }
    }

    async delete(req: Request, res: Response) {
        const { idUser } = req.params;
        const id = parseInt(idUser);

        const result = await prisma.users.findFirst({
            where: {
                id: id
            }
        });

        if (!result) {
            return res.status(400).json({ Error: 'Usuário não encontrado!' });
        } else {
            const newResult = await prisma.users.delete({
                where: {
                    id: id
                }
            });
            return res.json({ Msg: `Usuário ${newResult.login} excluído com sucesso!` });
        }
    }

    public static getInstance(): Users {
        if (!Users.INSTANCE) {
            Users.INSTANCE = new Users();
        }
        return Users.INSTANCE;
    }
}