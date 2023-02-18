import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ListProdutos {

    async handle(req: Request, res: Response) {
        const result = await prisma.produtos.findMany({
            orderBy: {
                updated_at: "desc"
            }
        })
        return res.json(result)
    }
};