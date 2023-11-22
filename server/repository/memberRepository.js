import { db } from '../db/database.js';

/* getIdCheck : 회원 아이디 중복체크 */
export async function getIdCheck(id) {  //{}는 객체니까 ()로 받음
  const sql = `select count(id) as cnt 
                from shoppy_member where id = ?`;

  return db
    .execute(sql, [id])
    .then((rows) => rows[0][0]);  // {cnt : 1}_회원임 or {cnt : 0}_회원아님
}

/* getLogin : 로그인하기 */
export async function getLogin(id) {  //{}는 객체니까 ()로 받음
  const sql = `select count(pass) as cnt, ANY_VALUE(pass) as pass 
                from shoppy_member where id = ?`

  return db
    .execute(sql, [id])
    .then((rows) => rows[0][0]);
}


/* insertMember : 새로운 회원 등록 */
export async function insertMember({ name, id, hashPass, phone }) {

  const sql = `insert into shoppy_member(name,id,pass,phone,mdate)values(?,?,?,?,sysdate())`;  //순서지키는건 insert into shoppy_member 이렇게 적을 때 

  return db
    .execute(sql, [name, id, hashPass, phone])  //이때는 순서 지켜야함
    .then((result) => 'ok');
}
