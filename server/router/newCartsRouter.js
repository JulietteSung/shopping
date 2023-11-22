import express from 'express';
import * as controller from '../controller/cartsController.js';

const router = express.Router();

router.post('/', controller.insertCart);

export default router;