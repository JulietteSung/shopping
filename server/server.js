import express from 'express';
import newProductsRouter from './router/newProductsRouter.js';
import cors from 'cors';
import allProductsRouter from './router/allProductsRouter.js';
import signUpRouter from './router/signUpRouter.js'
import loginRouter from './router/loginRouter.js'
import newCartsrouter from './router/newCartsRouter.js'
import Cartsrouter from './router/cartsRouter.js'

const PORT = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use(cors());

server.use('/products', allProductsRouter);  // 'products/:id' 형식의 파라미터도 함께 처리
server.use('/products/new', newProductsRouter);
server.use('/signup', signUpRouter);
server.use('/login', loginRouter);
server.use('/carts/new', newCartsrouter);
server.use('/carts', Cartsrouter);



server.listen(PORT, () => {
  console.log(`server running--->> ${PORT}`);

});


/*
/products/1/test/2 => 이렇게 형식 변환
/products?pid=?name&1&test&2 => 해킹당하기 쉬우니
*/
