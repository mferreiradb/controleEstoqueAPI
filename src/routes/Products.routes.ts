import { Router } from "express";
import { Products } from "../controllers/ProductsController";


const router = Router()
const listProducts = new Products()

router.get('/', (req, res) => listProducts.list(req, res));

export { router };