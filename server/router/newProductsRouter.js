import express from 'express';
import * as controller from '../controller/productsController.js';

const router = express.Router();

router.post('/', controller.insertProduct);

export default router;