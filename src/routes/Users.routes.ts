import { Router } from 'express';
import { Users } from '../controllers/UsersController';
import { auth } from '../middlewares/JWTAuth';

const router = Router();
const user = Users.getInstance();

router.post('/create', (req, res) => user.create(req, res));
router.post('/login', (req, res) => user.login(req, res));
router.patch('/update/:idUser', auth, (req, res) => user.update(req, res));
router.delete('/delete/:idUser', auth, (req, res) => user.delete(req, res));

export { router };