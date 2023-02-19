import { Router } from "express";
import { router as products } from "./Products.routes";
import { router as users } from "./Users.routes";

const router = Router()

router.use('/products', products)
router.use('/users', users)

export { router }