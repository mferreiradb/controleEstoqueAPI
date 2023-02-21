import { Router } from "express";
import { Products } from "../controllers/ProductsController";
import { auth } from "../middlewares/JWTAuth";


const router = Router()
const products = new Products()

router.post('/create', auth, (req, res) => products.create(req, res));
router.get('/', auth, (req, res) => products.list(req, res));

export { router };