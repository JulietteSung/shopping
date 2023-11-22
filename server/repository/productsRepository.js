import { db } from '../db/database.js';

/* getProduct : 상품리스트 조회 */
export async function getProduct(pid) {
  const sql = `select pid, name, image, price, info, pdate
                from shoppy_products
                where pid = ?`;
  return db
    .execute(sql, [pid])
    .then((rows) => rows[0][0]);  //rows[0] => [{}], rows[0][0] =>{} )
}

/* getAllProducts : 전체 상품 리스트 조회 */
export async function getAllProducts() {
  const sql = `select pid,name,image,price,info,pdate 
                from shoppy_products`;
  return db
    .execute(sql)
    .then((rows) => rows[0]);
}


/* insertProduct : 새로운 제품 등록 */
export async function insertProduct({ image, name, price, info }) {
  const sql = `insert into shoppy_products(name,image,price,info,pdate)
                values(?,?,?,?,curdate())`;
  return db
    .execute(sql, [name, image, price, info])
    .then((result) => 'ok');
}

