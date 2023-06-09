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

$main.append($sectionMap, $sectionQuestion, $sectionResult);
