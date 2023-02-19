import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class Products {

    async list(req: Request, res: Response) {
        const result = await prisma.products.findMany({
            orderBy: {
                updated_at: "desc"
            }
        })
        return res.json(result)
    }
};