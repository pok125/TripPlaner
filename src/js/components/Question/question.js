import { saveBtn } from "./index.js";

// 사용자에게 정보를 입력받을 section
const $questionContainer = document.createElement("section");
$questionContainer.setAttribute("id", "questionSection");

/**
 * question 화면 생성
 *
 * @return {Element} section
 */
function render() {
  // 초기화
  $questionContainer.innerHTML = "";

  // 나라 입력
  const $labelContry = document.createElement("label");
  $labelContry.innerText = "나라";
  $labelContry.setAttribute("for", "inputContry");

  const $inputContry = document.createElement("input");
  $inputContry.type = "text";
  $inputContry.setAttribute("id", "inputContry");

  // 도시 입력
  const $labelCity = document.createElement("label");
  $labelCity.innerText = "도시";
  $labelCity.setAttribute("for", "inputCity");

  const $inputCity = document.createElement("input");
  $inputCity.type = "text";
  $inputCity.setAttribute("id", "inputCity");

  // 일정 입력
  const $labelSchedule = document.createElement("label");
  $labelSchedule.innerText = "일정";
  $labelSchedule.setAttribute("for", "inputSchedule");

  const $inputSchedule = document.createElement("input");
  $inputSchedule.type = "text";
  $inputSchedule.setAttribute("id", "inputSchedule");

  // 포함하고 싶은 장소 입력
  const $labelInclusion = document.createElement("label");
  $labelInclusion.innerText = "포함하고 싶은 장소";
  $labelInclusion.setAttribute("for", "inputInclusion");

  const $inputInclusion = document.createElement("input");
  $inputInclusion.type = "text";
  $inputInclusion.setAttribute("id", "inputInclusion");

  // 저장 버튼
  const $saveBtn = saveBtn.render();

  $questionContainer.append(
    $labelContry,
    $inputContry,
    $labelCity,
    $inputCity,
    $labelSchedule,
    $inputSchedule,
    $labelInclusion,
    $inputInclusion,
    $saveBtn
  );

  return $questionContainer;
}

export { render };
