// 임시 테스트용
import { mapdata } from "./mapdata.js";

document.querySelector("#map").innerHTML = mapdata;

// const datas = document.querySelectorAll("path");
/////////////////
const $save_btn = document.querySelector("#save-btn");

// openAI API
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 질문과 답변 저장
const data = [
  {
    role: "system",
    content: "assistant는 여행 전문가 이다."
  }
];

// 저장 버튼 이벤트
$save_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const infoObj = getInfo();
  const question = makeQuestion(infoObj);
  pushQuestion(question);
  apiPost(url);
});

// chatGPT api에 질문에 대한 답 요청
async function apiPost(url) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: "follow"
    });
    const message = await res.json();
    const answer = await message.choices[0].message.content;
    console.log(answer);
    createCard(answer);
    return answer;
  } catch (err) {
    console.log(err);
  }
}

// 사용자가 입력한 정보를 가져온다.
function getInfo() {
  const $contry = document.querySelector("#input-contry");
  const $city = document.querySelector("#input-city");
  const $schedule = document.querySelector("#input-schedule");
  const $includes = document.querySelector("#input-include");

  const dictObj = {
    contry: $contry.value,
    city: $city.value,
    schedule: $schedule.value,
    includes: $includes.value
  };

  return dictObj;
}

// 입력한 정보를 바탕으로 질문을 만든다.
function makeQuestion(infoObj) {
  const question = `나는 ${infoObj["contry"]}의 
  ${infoObj["city"]}로 여행을 갈거야. 인기 있는 관광지로
  ${infoObj["schedule"]} 일정을 짜줘.
  일정 중에 ${infoObj["includes"]} 지역을 넣어줘.
  일정은 Day별로 나타내줘. 인사말은 빼줘`;

  return question;
}

// 사용자의 질문을 객체를 만들어서 push
function pushQuestion(question) {
  data.push({
    role: "user",
    content: question
  });
}

// 질문에 대한 답을 담은 element를 결과 element에 추가
function createCard(answer) {
  const resultDiv = document.querySelector("#result-div");
  answer = answer.replace(/\n/g, "<br/>");
  const answers = answer.split("Day");

  for (const i of answers) {
    if (i === "") {
      continue;
    }
    const item = document.createElement("div");
    item.setAttribute("class", "w-64 text-xs border-2 border-gray-900");
    item.innerHTML = i;
    resultDiv.append(item);
  }
}
