import { card } from "./index.js";

let resultData = null;
// 결과를 보여주는 section
const $resultContainer = document.createElement("section");
$resultContainer.setAttribute("id", "resultSection");

/**
 * 요청에 대한 결과 데이터를 resultData변수에 저장 후
 * 결과 화면 출력
 *
 * @param {string} 요청에 대한 결과 데이터
 */
function setResultData(result) {
  resultData = JSON.parse(result);
  render();
}

/**
 * resultSection 초기화 후 결과 화면 Element들 추가
 *
 * @return {Element} 세팅된 section Element
 */
function render() {
  $resultContainer.innerHTML = "";

  if (resultData) {
    for (const day in resultData) {
      const $resultItem = card.createCard(day, resultData[day]);
      $resultContainer.append($resultItem);
    }
  } else {
    $resultContainer.innerText = "보여드릴 일정이 없습니다.";
  }

  return $resultContainer;
}

export { setResultData, render };
