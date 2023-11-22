import express from "express";
import * as controller from '../controller/productsController.js'


const router = express.Router();

router.get('/', controller.getAllProducts);
router.get('/:pid', controller.getProduct);


export default router;