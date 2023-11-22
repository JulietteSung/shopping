import * as repository from '../repository/cartsRepository.js';

/* 장바구니 리스트 선택 상품 삭제 */
export async function removeCart(req, res) {
  const cid = req.params.cid;
  console.log(`cid--------->${cid}`);  // 서버로 값이 넘어오는지 확인해보기
  const result = await repository.removeCart(cid);
  res.json(result);
}


/* 회원 장바구니 리스트 출력 */
export async function getList(req, res) {
  const id = req.params.id;
  const result = await repository.getList(id);
  res.json(result); //{data : {회원의 장바구니 리스트} }
}


/* 장바구니에 새로운 상품 추가 */
export async function insertCart(req, res) {
  const { id, pid, size, qty } = req.body;
  const result = await repository.insertCart({ id, pid, size, qty });
  res.json(result); //{data : 'ok'}
}

