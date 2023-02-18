import { Router } from "express";
import { ListProdutos } from "../controllers/mainController";


const router = Router()
const listProdutos = new ListProdutos()

router.get('/', (req, res) => listProdutos.handle(req, res));

export { router };