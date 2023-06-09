/**
 * 일차와 추천 장소 데이터를 인자로 받아 결과로 보여줄
 * Element 반환
 *
 * @param {string} 일차 데이터
 * @param {object} 장소,설명 데이터
 * @return {Element} div
 */
function createCard(day, contentDatas) {
  const $cardContainer = document.createElement("div");
  const $title = document.createElement("header");
  const $content = document.createElement("ul");

  // 일차
  $title.innerText = day;

  // 장소, 설명
  for (const location in contentDatas) {
    const $txt = document.createElement("li");

    $txt.innerText = `${location}: ${contentDatas[location]}`;
    $content.appendChild($txt);
  }

  $cardContainer.append($title, $content);
  return $cardContainer;
}

export { createCard };
