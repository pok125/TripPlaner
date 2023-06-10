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

  const $inputSection = document.createElement("section");
  const $btnSection = document.createElement("section");
  const $divFirstInput = document.createElement("div");
  const $divSecondInput = document.createElement("div");

  $inputSection.classList.add("section-input");
  $btnSection.classList.add("section-button");
  $divFirstInput.classList.add("div-input-01");
  $divSecondInput.classList.add("div-input-02");

  // 나라 입력
  const $labelCountry = document.createElement("label");
  $labelCountry.innerText = "나라";
  $labelCountry.setAttribute("for", "inputCountry");
  $labelCountry.classList.add("label-country");

  const $inputCountry = document.createElement("input");
  $inputCountry.type = "text";
  $inputCountry.setAttribute("id", "inputCountry");

  // 도시 입력
  const $labelCity = document.createElement("label");
  $labelCity.innerText = "도시";
  $labelCity.setAttribute("for", "inputCity");
  $labelCity.classList.add("label-city");

  const $inputCity = document.createElement("input");
  $inputCity.type = "text";
  $inputCity.setAttribute("id", "inputCity");

  // 일정 입력
  const $labelSchedule = document.createElement("label");
  $labelSchedule.innerText = "일정";
  $labelSchedule.setAttribute("for", "inputSchedule");
  $labelSchedule.classList.add("label-schedule");

  const $inputSchedule = document.createElement("input");
  $inputSchedule.type = "text";
  $inputSchedule.setAttribute("id", "inputSchedule");

  // 포함하고 싶은 장소 입력
  const $labelInclusion = document.createElement("label");
  $labelInclusion.innerText = "포함하고 싶은 장소";
  $labelInclusion.setAttribute("for", "inputInclusion");
  $labelInclusion.classList.add("label-inclusion");

  const $inputInclusion = document.createElement("input");
  $inputInclusion.type = "text";
  $inputInclusion.setAttribute("id", "inputInclusion");

  // 저장 버튼
  const $saveBtn = saveBtn.render();

  // 나라, 도시 입력
  $divFirstInput.append($labelCountry, $inputCountry, $labelCity, $inputCity);

  // 일정, 포함할 장소 입력
  $divSecondInput.append(
    $labelSchedule,
    $inputSchedule,
    $labelInclusion,
    $inputInclusion
  );

  $inputSection.append($divFirstInput, $divSecondInput);
  $btnSection.append($saveBtn);

  $questionContainer.append($inputSection, $btnSection);

  return $questionContainer;
}

export { render };
