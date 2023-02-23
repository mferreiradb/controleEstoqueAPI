import { Router } from 'express';
import { Products } from '../controllers/ProductsController';
import { auth } from '../middlewares/JWTAuth';


const router = Router();
const products = Products.getInstance();

router.post('/create', auth, (req, res) => products.create(req, res));
router.get('/', auth, (req, res) => products.list(req, res));
router.patch('/update/estoque/:idProduct', auth, (req, res) => products.updateAmount(req, res));
router.put('/update/:idProduct', auth, (req, res) => products.updateData(req, res));
router.delete('/delete/:idProduct', auth, (req, res) => products.delete(req, res));

export { router };