import { db } from '../db/database.js';

/* updateQty : 장바구니 수량업데이트 */
export async function updateQty({ id, cid, checkFlag }) {
  let sql = ``;
  if (checkFlag === 'plus') {
    sql = 'update shoppy_cart set qty = qty +1 where cid =?'
  } else {
    sql = 'update shoppy_cart set qty = qty -1 where cid =?'
  }


  return db
    .execute(sql, [id, cid, checkFlag])
    .then((result) => 'ok');
}


/* removeCart : 장바구니의 선택 상품 삭제 */
export async function removeCart(cid) {
  const sql = `delete from shoppy_cart where cid =?`;

  return db
    .execute(sql, [cid])
    .then((result) => 'ok');
}


/* getList : 회원 장바구니 리스트 */
export async function getList(id) {
  const sql = `select 
                      row_number() over (order by qty) as rno,
                      sp.image, 
                      sp.name, 
                      sp.price, 
                      sc.qty, 
                      sc.size, 
                      sp.price * sc.qty as tprice, 
                      sp.pid, 
                      sm.id,
                      sc.cid
                from shoppy_member sm, 
                      shoppy_products sp, 
                      shoppy_cart sc
                where sm.id = sc.id
                      and sp.pid = sc.pid
                      and sc.id = ?`;
  return db
    .execute(sql, [id])  //이때는 순서 지켜야함
    .then((rows) => rows[0]);
}



/* insertCart : 장바구니에 새로운 상품 추가 */
export async function insertCart({ id, pid, size, qty }) {
  const sql = `insert into shoppy_cart(qty, size, id, pid, cdate)
                values(?,?,?,?,sysdate())`;  //순서지키는건 insert into shoppy_member 이렇게 적을 때 
  return db
    .execute(sql, [qty, size, id, pid])  //이때는 순서 지켜야함
    .then((result) => 'ok');
}




// cid int NO print,
//   qty int,
//     size varchar(10),
//       id varchar(50) not null,
//         pid int not null,
//           cdate datetime