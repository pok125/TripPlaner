import { questionData, urlDatas } from "../../data/index.js";
import { fetchAPI } from "../../utils/index.js";
import { result } from "../Result/index.js";

/**
 * 저장 버튼 생성
 *
 * @return {Element} button
 */
function render() {
  const $saveBtn = document.createElement("button");

  $saveBtn.innerText = "저장";
  $saveBtn.classList.add("btn-save");

  // 클릭 이벤트
  $saveBtn.addEventListener("click", save);

  return $saveBtn;
}

/**
 * 빈칸없이 입력받은 정보를 질문 형식에 맞게
 * 질문을 생성 후 api로 전송
 *
 */
function save(e) {
  // html의 기본동작 막기
  e.preventDefault();

  const country = document.querySelector("#inputCountry").value;
  const city = document.querySelector("#inputCity").value;
  const schedule = document.querySelector("#inputSchedule").value;
  const inclusion = document.querySelector("#inputInclusion").value;

  // 빈칸 체크
  if (!country || !city || !schedule || !inclusion) {
    alert("모든 정보가 입력되지 않았습니다.");
  } else {
    // 값들을 object로 저장
    const inputDatas = {
      country: country,
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
 * 입력받은 object데이터를 질문 형식에 맞게 삽입 후 반환
 *
 * @param {object} 사용자에게 입력받은 데이터
 * @return {string} 질문 형식에 맞게 데이터가 삽입된 데이터
 */
function questionForm(infoObj) {
  const question = `나는 ${infoObj["country"]}의 
    ${infoObj["city"]}로 여행을 갈거야. 인기 있는 관광지로
    ${infoObj["schedule"]} 일정을 짜줘.
    일정 중에 하루는 ${infoObj["inclusion"]}을(를) 포함시켜줘. 답변은 JSON형식으로 만 부탁해`;

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
 * 받은 데이터를 결과 데이터에 저장
 *
 */
async function sendData() {
  try {
    // 데이터 전송
    const answer = await fetchAPI.apiPost(urlDatas.chatGPT, questionData.data);
    const message = answer.choices[0].message.content;

    // 결과 데이터 저장
    result.setResultData(message);
  } catch (err) {
    console.log(err);
  }
}

export { render };
