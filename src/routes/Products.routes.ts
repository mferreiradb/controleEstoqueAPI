import { Router } from "express";
import { Products } from "../controllers/ProductsController";
import { auth } from "../middlewares/JWTAuth";


const router = Router()
const listProducts = new Products()

router.get('/', auth, (req, res) => listProducts.list(req, res));

export { router };