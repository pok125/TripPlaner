import { card } from "./index.js";

// 결과 JSON 데이터
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
  console.log(result);
  resultData = JSON.parse(result);
  render();
}

/**
 * 결과 화면 생성
 *
 * @return {Element} section
 */
function render() {
  // 초기화
  $resultContainer.innerHTML = "";

  if (resultData) {
    let delay = 0;

    // 일차별 결과 div생성
    for (const day in resultData) {
      setTimeout(async () => {
        const $resultItem = card.createCard(day, resultData[day]);
        $resultContainer.append($resultItem);
      }, delay);

      delay += 1500;
    }
  } else {
    $resultContainer.innerText = "보여드릴 일정이 없습니다.";
  }

  return $resultContainer;
}

export { setResultData, render, $resultContainer };
