import { mapData } from "../../data/index.js";

// map을 보여줄 section
const $mapContainer = document.createElement("section");
$mapContainer.setAttribute("id", "section-map");

/**
 * section-map 초기화 후 mapData를 넣어 반환
 *
 * @return {Element} mapData가 들어간 section Elemnet
 */
function render() {
  $mapContainer.innerHTML = "";
  $mapContainer.innerHTML = mapData.mapdata;
  return $mapContainer;
}

export { render };
