import { Router } from "express";
import { Users } from "../controllers/UsersController";

const router = Router();
const user = Users.getInstance();

router.post('/create', (req, res) => user.create(req, res));
router.post('/login', (req, res) => user.login(req, res));

export { router };