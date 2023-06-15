# TripPlaner
## 개요
* chatGPT api를 활용하여 여행을 계획할 때 서비스를 이용하여 일정의 큰 틀을 계획하는데 도움을 주기위해 서비스 제작
## 개발환경
* Front : HTML, CSS, Vanilla JS
## 프로젝트 구조
``` plan text
.
├── README.md
├── index.html
└── src
    ├── asset
    │   ├── gif
    │   │   └── loading.gif
    │   └── img
    │       └── root_bg.jpg
    ├── css
    │   ├── reset.css
    │   └── style.css
    └── js
        ├── components
        │   ├── Header
        │   ├── Loading
        │   │   ├── index.js
        │   │   └── loading.js
        │   ├── Map
        │   │   ├── index.js
        │   │   └── map.js
        │   ├── Question
        │   │   ├── index.js
        │   │   ├── question.js
        │   │   └── saveBtn.js
        │   └── Result
        │       ├── card.js
        │       ├── index.js
        │       └── result.js
        ├── data
        │   ├── index.js
        │   ├── mapData.js
        │   ├── questionData.js
        │   └── urlDatas.js
        ├── main.js
        └── utils
            ├── fetchAPI.js
            └── index.js
```
