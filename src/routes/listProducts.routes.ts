import { Router } from "express";
import { ListProducts } from "../controllers/listProductsController";


const router = Router()
const listProducts = new ListProducts()

router.get('/', (req, res) => listProducts.handle(req, res));

export { router };