import { questionData, urlDatas } from "../../data/index.js";
import { fetchAPI } from "../../utils/index.js";

/**
 * click이벤트를 추가한 저장 버튼 생성 및 반환
 *
 * @return {Element} 저장 버튼 Element
 */
function render() {
  const $saveBtn = document.createElement("button");

  $saveBtn.innerText = "저장";
  $saveBtn.classList.add("btn-save");
  $saveBtn.addEventListener("click", save);

  return $saveBtn;
}

/**
 * 사용자가 입력한 내용을 가져와 object로 저장 후 질문을 추가해 api요청
 *
 * @return {object} 사용자가 입력한 JSON데이터
 */
function save(e) {
  // html의 기본동작 막기
  e.preventDefault();

  const contry = document.querySelector("#inputContry").value;
  const city = document.querySelector("#inputCity").value;
  const schedule = document.querySelector("#inputSchedule").value;
  const inclusion = document.querySelector("#inputInclusion").value;

  //  빈칸 체크
  if (!contry || !city || !schedule || !inclusion) {
    alert("모든 정보가 입력되지 않았습니다.");
  } else {
    // 값들을 object로 저장
    const inputDatas = {
      contry: contry,
      city: city,
      schedule: schedule,
      inclusion: inclusion
    };
    // 데이터를 질문 폼 텍스트로 변환
    const question = questionForm(inputDatas);
    // 질문 저장
    pushQuestion(question);
    // 데이터 전송
    sendData();
  }
}

/**
 * 입력받은 object데이터를 질문 형식에 맞게 데이터를 넣어
 * 문장을 만든다.
 *
 * @param {object} 사용자에게 입력받은 데이터
 * @return {string} 질문 형식에 입력받은 데이터를 넣은 문장
 */
function questionForm(infoObj) {
  const question = `나는 ${infoObj["contry"]}의 
    ${infoObj["city"]}로 여행을 갈거야. 인기 있는 관광지로
    ${infoObj["schedule"]} 일정을 짜줘.
    일정 중에 ${infoObj["includes"]} 지역을 넣어줘.
    일정은 Day별로 나타내줘. 인사말은 빼줘`;

  return question;
}

/**
 * 입력받은 질문을 질문 데이터에 추가
 *
 * @param {string} 질문 데이터
 */
function pushQuestion(question) {
  questionData.data.push({
    role: "user",
    content: question
  });
}

/**
 * 질문 데이터를 chatGPT api로 전송 후 데이터를 받음
 *
 */
async function sendData() {
  const answer = await fetchAPI.apiPost(urlDatas.chatGPT, questionData.data);
}

export { render };
