import { Router } from 'express';
import { Products } from '../controllers/ProductsController';
import { auth } from '../middlewares/JWTAuth';


const router = Router();
const products = Products.getInstance();

router.post('/', (req, res) => products.create(req, res));
router.get('/', auth, (req, res) => products.list(req, res));
router.get('/search', auth, (req, res) => products.search(req, res));
router.patch('/stock/:idProduct', auth, (req, res) => products.updateAmount(req, res));
router.put('/:idProduct', auth, (req, res) => products.updateData(req, res));
router.delete('/:idProduct', auth, (req, res) => products.delete(req, res));

export { router };