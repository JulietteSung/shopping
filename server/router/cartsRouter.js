import express from 'express';
import * as controller from '../controller/cartsController.js';

const router = express.Router();

router.get('/:id', controller.getList);
router.get('/:id/:cid', controller.removeCart);
router.get('/:id/:cid/:checkFlag', controller.updateQty);


export default router;