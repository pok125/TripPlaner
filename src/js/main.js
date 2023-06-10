import { mapData, questionData, urlDatas } from "./data/index.js";
import { fetchAPI } from "./utils/index.js";
import { result } from "./components/Result/index.js";
import { question } from "./components/Question/index.js";
import { map } from "./components/Map/index.js";

const $root = document.querySelector("#root");

// 기본 header, main, footer
const $mainHeader = document.createElement("header");
const $main = document.createElement("main");
const $mainFooter = document.createElement("footer");

$mainHeader.setAttribute("id", "header");
$mainHeader.innerText = "header";

$main.setAttribute("id", "main");

$mainFooter.setAttribute("id", "footer");
$mainFooter.innerText = "footer";

$root.append($mainHeader, $main, $mainFooter);

// mapView
const $sectionMap = map.render();

// questionView
const $sectionQuestion = question.render();

// resultView
const $sectionResult = result.render();

// const $cardContainer = document.createElement("div");
// const $title = document.createElement("header");
// const $content = document.createElement("ul");
// $cardContainer.classList.add("div-card");
// $title.setAttribute("id", "cardHeader");
// $content.setAttribute("id", "cardContent");
// // 일차
// $title.innerText = "1일차";

// // 장소, 설명

// const $txt = document.createElement("li");
// const $txt2 = document.createElement("li");

// $txt.innerText = "한강: 멋있다";
// $txt2.innerText = "남산: 멋찌다";
// $content.append($txt, $txt2);

// $cardContainer.append($title, $content);
// $sectionResult.append($cardContainer);
$main.append($sectionMap, $sectionQuestion, $sectionResult);
