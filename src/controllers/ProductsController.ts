import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class Products {

    async create(req: Request, res: Response) {
        const { name_product, purchase_price, sale_price } = req.body;
        let { amount } = req.body;

        const result = await prisma.products.findFirst({
            where: {
                name_product: name_product
            }
        })

        if (result) {
            res.status(400).json({ Error: 'Produto já cadastrado!' })
        } else {
            if (amount == null || amount == undefined) {
                amount = 0
            }
            const newProduct = await prisma.products.create({
                data: {
                    name_product: name_product,
                    purchase_price: purchase_price,
                    sale_price: sale_price,
                    amount: amount
                }
            })
            return res.json({ msg: 'Produto cadastrado com sucesso!', newProduct })
        }
    }

    async list(req: Request, res: Response) {
        const result = await prisma.products.findMany({
            orderBy: {
                updated_at: "desc"
            }
        })
        return res.json(result)
    }

    async updateAmount(req: Request, res: Response) {
        const { idProduct } = req.params;
        const { amount } = req.body;

        const id = parseInt(idProduct)

        const result = await prisma.products.findFirst({
            where: {
                id: id
            }
        })

        if (!result) {
            return res.status(400).json({ Error: 'Item não encontrado!' })
        } else {
            await prisma.products.update({
                where: {
                    id: id
                },
                data: {
                    amount: amount
                }
            })
            return res.status(200).json({ Msg: 'Item atualizado com sucesso!', result })
        }
    }
};