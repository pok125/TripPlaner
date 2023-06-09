/**
 * 요청할 url과 보낼 데이터를 입력받아 POST로 전송 후
 * 받은 데이터를 JSON으로 변환 후 반환
 *
 * @param {string} 요청할 api URL주소
 * @param {string} 전송할 데이터
 * @return {JSON} 가져온 JSON 데이터
 */
async function apiPost(url, data) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: "follow"
    });
    const answer = await res.json();

    return answer;
  } catch (err) {
    console.log(err);
  }
}

export { apiPost };
