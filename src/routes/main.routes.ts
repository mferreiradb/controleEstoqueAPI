import { Router } from "express";
import { Main } from "../controllers/mainController";


const router = Router()
const main = new Main()

router.get('/', (req, res) => main.handle(req, res));

export { router };