import { db } from '../db/database.js';

/* insertOrder : 장바구니에 새로운 상품 추가 */
export async function insertOrder(newOrderList) {
  newOrderList.map(() => {
    const sql = `insert into 
                  shoppy_order
                  (id, pid, size, qty, totprice, odate)
                    values(?,?,?,?,sysdate())`;

    db.execute(sql, [order.id, order.pid, order.size, order.qty, order.totprice]) //대소문자 구별!!!
      .then();
  });
  return 'ok';
}

