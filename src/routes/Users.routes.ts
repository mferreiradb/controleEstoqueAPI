import { Router } from "express";
const router = Router();

router.get('/create', (req, res) => res.json({ msg: 'online' }));

export { router };