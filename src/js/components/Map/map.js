import { mapData } from "../../data/index.js";

// map을 보여줄 section
const $mapContainer = document.createElement("section");
$mapContainer.setAttribute("id", "mapSection");

/**
 * map 화면 생성
 *
 * @return {Element} section
 */
function render() {
  // 초기화
  $mapContainer.innerHTML = "";
  $mapContainer.innerHTML = mapData.mapdata;

  return $mapContainer;
}

export { render };
