import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { secret } from "../controllers/UsersController";

interface TokenPayload {
    id: number;
    login: string;
    iat: string;
    exp: string;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(400).json({ Error: 'Informe o token de acesso!' })
    }

    let barrer = authorization?.split(' ') ?? []
    let token = barrer[1]

    try {
        const data = jwt.verify(token, secret);

        const { id, login } = data as unknown as TokenPayload;

        req.loggedUser = { id, login }

        next()

    } catch (Error) {
        res.status(401).json(Error);
    }
}