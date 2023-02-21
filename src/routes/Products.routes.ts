import { Router } from "express";
import { Products } from "../controllers/ProductsController";
import { auth } from "../middlewares/JWTAuth";


const router = Router()
const products = new Products()

router.get('/', auth, (req, res) => products.list(req, res));
router.post('/create', auth, (req, res) => products.create(req, res));

export { router };