# 4장. CSS3로 웹 페이지 꾸미기

## 강의 목표
1. CSS3 언어가 무엇인지 안다.
2. CSS3 스타일 시트를 작성하는 방법을 안다.
3. CSS3 셀렉터 만드는 방법을 안다.
4. CSS3로 텍스트 꾸미기를 할 수 있다.
5. CSS3로 웹 페이지에 색과 모양을 꾸밀 수 있다.
6. CSS3의 박스 모델을 이해하고 다룰 수 있다.
7. CSS3로 HTML 태그의 배경과 테두리 등을 꾸밀 수 있다.
8. CSS3로 그림자 효과를 만들 수 있다.

## 1. CSS3 스타일 시트
- CSS(Cascading Style Sheet)는 HTML 문서의 색이나 모양 등 외관을 꾸미는 언어
- CSS로 작성된 코드를 스타일 시트(style sheet)라고 부름
- 현재 CSS3는 CSS level 3이며, CSS1 -> CSS2 -> CSS3 -> CSS4(현재 표준화 작업 중) 순으로 발전
- CSS3의 기능: 색상과 배경, 텍스트, 폰트, 박스 모델(Box Model), 비주얼 포맷 및 효과, 리스트, 테이블, 사용자 인터페이스

### 예제 4-1 HTML 태그로만 작성한 웹 페이지
- CSS 없이 HTML 태그만으로 작성해 브라우저 기본 스타일만 적용된 웹 페이지

### 예제 4-2 CSS3 스타일 시트로 꾸민 웹 페이지
- `<style>` 태그 안에 body 배경색, h3 색, hr 테두리, span 색과 크기를 지정해 꾸민 웹 페이지

### CSS3 스타일 시트 구성
- 형식: `셀렉터 { 프로퍼티 : 값; } /* 주석문 */`
- 셀렉터: CSS3 스타일 시트를 HTML 페이지에 적용하도록 만든 이름
- 프로퍼티: 스타일 속성 이름. 약 200개 정도 있음
- 값: 프로퍼티의 값
- 주석문: 스타일 시트 내에 붙이는 설명문으로 `/* ... */`. 여러 줄, 아무 위치에나 사용 가능
- 대소문자 구분 없음 (`body {...}`와 `BODY {...}`는 동일)

## 2. HTML 문서에 CSS3 스타일 시트 만들기
- 스타일 시트를 만드는 방법 3가지
  1. `<style></style>` 태그에 스타일 시트 작성
  2. style 속성에 스타일 시트 작성
  3. 스타일 시트를 별도 파일로 작성 후 `<link>` 태그나 `@import`로 불러 사용

### `<style>` 태그에 스타일 시트 만들기
- `<style>` 태그는 `<head>` 태그 내에서만 사용
- `<style>` 태그는 여러 번 작성 가능하며, 이 경우 스타일 시트들이 합쳐져 사용됨
- `<style>` 태그에 작성된 스타일 시트는 웹 페이지 전체에 적용

### 예제 4-3 `<style>` 태그로 스타일 시트 만들기
- body의 배경색, 글자색, 좌우 여백과 h3의 가운데 정렬, 글자색을 `<style>`로 지정한 예제

### style 속성에 스타일 시트 만들기
- HTML 태그의 style 속성에 CSS3 스타일 시트를 작성하면 해당 태그에만 스타일 적용

### 예제 4-4 style 속성에 스타일 시트 만들기
- 모든 `<p>` 태그를 red, 15px로 꾸미되, 두 개의 `<p>`는 style 속성으로 파란색·자홍색 30px 등 다르게 꾸민 예제

### 외부 스타일 시트 파일 불러오기
- `.css` 파일에 스타일 시트를 저장해 웹 페이지에서 불러 사용
  - 동일한 스타일 시트를 웹 페이지마다 중복 작성하는 것을 해소
  - 웹 사이트 전체 웹 페이지 모양의 일관성 확보
- CSS3 스타일 시트 파일을 불러오는 방법 2가지
  - `<link>` 태그 이용
  - `@import` 이용

```
<head>
  <link href="mystyle.css" type="text/css" rel="stylesheet">
</head>
```

```
<style>
  @import url(mystyle.css);
</style>
```

### 예제 4-5 `<link>` 태그로 CSS3 파일 불러오기
- 예제 4-3의 스타일 시트를 mystyle.css 파일로 분리하고 `<link>` 태그로 불러와 적용

### 예제 4-6 `@import`로 CSS3 파일 불러오기
- 같은 mystyle.css를 `<style>` 안에서 `@import url(mystyle.css);`로 불러와 적용

## 3. CSS3 규칙
### 스타일 상속
- CSS3 스타일은 부모 태그(부모 요소, 자신을 둘러싸는 태그)로부터 상속됨

### 예제 4-7 부모 스타일 상속
- `<p style="color:green">`의 자식인 `<em style="font-size:25px">`가 글자 크기는 25px, 색은 부모 `<p>`를 상속받아 green으로 출력되는 예제

### 스타일 합치기와 오버라이딩
- 태그에 적용 가능한 스타일 (우선 순위 낮음 → 높음)
  1. 브라우저의 디폴트 스타일
  2. 스타일 시트 파일에 선언된 스타일
  3. `<style></style>` 태그에 선언된 스타일
  4. style 속성에 선언된 스타일
- 스타일 합치기(cascading)와 오버라이딩(overriding): 태그에 적용되는 모든 스타일이 합쳐지고, 동일한 스타일은 순위가 높은 스타일이 우선 적용되는 규칙

### 예제 4-8 여러 스타일 시트가 중첩되는 경우
- external.css의 `p { background : mistyrose; }`, `<style>`의 `p { color : blue; font-size : 12px; }`, style 속성의 `font-size:25px`가 한 `<p>` 태그에 중첩 적용되면서, 우선순위에 따라 배경은 mistyrose, 색은 blue, 크기는 style 속성값인 25px로 합쳐지는 예제

## 4. 셀렉터
- 셀렉터(selector)는 HTML 태그의 모양을 꾸밀 스타일 시트를 선택하는 기능으로 여러 유형이 있음
- 예) 웹 페이지의 모든 `<h3>` 태그에 `color:brown` 스타일을 적용하는 셀렉터 h3를 만든 사례

### 태그 이름 셀렉터
- 태그 이름이 셀렉터로 사용되는 유형
- 셀렉터와 같은 이름의 모든 태그에 CSS3 스타일 시트 적용
- 예: `h3, li { color : brown; }`

### class 셀렉터
- 점(.)으로 시작하는 이름의 셀렉터
- HTML 태그의 class 속성으로만 지정 가능
- class 속성이 같은 모든 태그에 적용
- 예: `.warning { color : red; }`, `body.main { background : aliceblue; }` (`<body class="main">` 태그에만 적용 가능)

### id 셀렉터
- #으로 시작하는 이름의 셀렉터
- HTML 태그의 id 속성으로만 지정 가능
- id 속성이 같은 모든 태그에 적용
- 예: `#list { background : mistyrose; }`
- `div#etc { background : mistyrose; }` 셀렉터는 `<p id="etc">`처럼 다른 태그에는 사용 불가능

### id 셀렉터와 class 셀렉터 비교
- id 셀렉터
  - id 속성의 목적은 각 태그를 유일하게 구분하는 것
  - 동일한 id 속성이 같지 않도록 HTML 파일을 작성하는 것이 바람직
  - 자바스크립트 코드에서 id 값을 가진 태그 객체를 찾을 때 문제됨(8장 2절 DOM 객체 찾기 참고)
  - 여러 태그 중 특정 태그에만 CSS 스타일을 적용할 때 적합
- class 셀렉터
  - 여러 태그를 하나의 그룹으로 묶어 단체로 동일한 CSS 스타일을 적용할 때 적합
  - class 속성 값이 같은 태그에 모두 CSS 스타일 적용
  - 태그의 종류에 관계없이 class 셀렉터 활용 가능

### 셀렉터 조합하기
- 2개 이상의 셀렉터를 조합해 조합에 적합한 HTML 태그에만 적용

#### 자식 셀렉터(child selector)
- 부모 자식 관계인 두 셀렉터를 `>` 기호로 조합
- 예) `div > strong { color : dodgerblue; }` — `<div>`의 직계 자식인 `<strong>`에 적용되는 스타일 시트

#### 자손 셀렉터(descendent selector)
- 자손 관계인 2개 이상의 태그를 나열(자손이란 자식과 그 후손 모두 포함)
- 예) `ul strong { color : dodgerblue; }` — `<ul>`의 자손 `<strong>`에 적용되는 스타일 시트

### 전체 셀렉터와 속성 셀렉터
- 전체 셀렉터(universal selector): 와일드 문자(*)를 사용하여 모든 태그에 적용시키는 셀렉터
  - 예) `* { color : green; }` — 웹 페이지의 모든 태그에 적용. 텍스트 색을 green으로 칠함
- 속성 셀렉터: HTML 태그의 특정 속성(attribute)에 대해 값이 일치하는 태그에만 스타일을 적용하는 셀렉터
  - 예) `input[type=text] { color : red; }` — type 속성값이 "text"인 `<input>` 태그에 적용

### 가상 클래스(pseudo-class) 셀렉터
- 어떤 조건이나 상황에서 스타일을 적용하도록 만든 셀렉터. 40개 이상의 많은 가상 클래스 셀렉터가 있음
- 예1) `a:visited { color : green; }` — 방문한 `<a>`의 링크 텍스트 색을 green으로 출력
- 예2) `li:hover { background : yellowgreen; }`

| 유형 | 셀렉터 | 설명 |
| --- | --- | --- |
| 마우스 | :hover | 마우스가 올라갈 때 스타일 적용 |
| 마우스 | :active | 마우스로 누르고 있는 상황에서 스타일 적용 |
| 폼 요소 | :focus | 폼 요소가 키보드나 마우스 클릭으로 포커스를 받을 때 스타일 적용 |
| 링크 | :link | 방문하지 않은 링크에 스타일 적용 |
| 링크 | :visited | 방문한 링크에 스타일 적용 |
| 블록 | :first-letter | `<p>`, `<div>` 등과 같은 블록형 태그의 첫 글자에 스타일 적용. `::first-letter`와 동일하며 `<span>`과 같은 인라인 태그에는 적용되지 않음 |
| 블록 | :first-line | `<p>`, `<div>` 등과 같은 블록형 태그의 첫 라인에 스타일 적용. `::first-line`과 동일 |
| 구조 | :nth-child(even) | 짝수 번째 모든 자식 태그에 스타일 적용 |
| 구조 | :nth-child(1) | 첫 번째 자식 태그에 스타일 적용 |

### 예제 4-9 셀렉터 활용
- 태그 이름 셀렉터(h3, li), 자식 셀렉터(div > div > strong), 자손 셀렉터(ul strong), class 셀렉터(.warning, body.main), id 셀렉터(#list, #list span), 가상 클래스 셀렉터(h3:first-letter, li:hover)를 한 페이지에서 종합적으로 사용한 예제

## 5. 색상과 배경
### CSS3에서 색 표현
- 3가지 방법
  1. 16진수 코드로 표현: `#8A2BE2` (red 성분 0x8A, green 성분 0x2B, blue 성분 0xE2가 혼합된 보라색)
  2. 10진수 코드와 rgb()로 표현: `rgb(138, 43, 226)` (red 138, green 43, blue 226 혼합)
  3. 색 이름으로 표현: CSS3 표준에서는 140개 색의 이름을 정하고 있음
- 사례
```
div { color : #8A2BE2; }       /* blueviolet의 16진수 코드 */
div { color : rgb(138, 43, 226); } /* blueviolet의 10진수 색 코드 */
div { color : blueviolet; }    /* blueviolet 색 이름 */
```
- CSS3 표준 색 이름과 코드 예: brown(#A52A2A), blueviolet(#8A2BE2), darkorange(#FF8C00), deepskyblue(#00BFFF), gold(#FFD700), olivedrab(#6B8E23) 등 총 140개

### 색 관련 프로퍼티
- `color` : 색 — HTML 태그의 텍스트 글자색
- `background-color` : 색 — HTML 태그의 배경색
- `border-color` : 색 — HTML 태그의 테두리색

### 예제 4-10 색 활용
- 여러 `<div>`에 각각 deepskyblue, brown, fuchsia, darkorange, darkcyan, olivedrab 배경색을 style 속성으로 지정하고, `<style>`에서 모든 div에 좌우 여백 30px, 아래 여백 10px, 흰색 글자를 공통 적용한 예제

## 6. 텍스트
- 텍스트를 꾸미는 CSS3 스타일 시트
  - `text-indent : <length>|<percentage>;` — 들여쓰기
  - `text-align : left|right|center|justify;` — 정렬
  - `text-decoration : none|underline|overline|line-through;` — 텍스트 꾸미기
- 예) text-decoration 프로퍼티로 하이퍼링크에 밑줄 제거: `<a href="http://www.naver.com" style="text-decoration : none">네이버</a>`

### 예제 4-11 텍스트 꾸미기
- h3는 오른쪽 정렬(`text-align : right`), span은 중간 줄(`text-decoration : line-through`), strong은 윗줄(`text-decoration : overline`)
- `.p1`은 3글자 들여쓰기(`text-indent : 3em`)와 양쪽 정렬(`text-align : justify`)
- `.p2`는 1글자 들여쓰기(`text-indent : 1em`)와 중앙 정렬(`text-align : center`)
- 네이버 링크는 밑줄 없는 링크로 표시

## 7. 폰트
### CSS3의 표준 단위

| 단위 | 의미 | 사용 예 |
| --- | --- | --- |
| em | 배수 | `font-size : 3em;` (현재 폰트의 3배 크기) |
| % | 퍼센트 | `font-size : 500%;` (현재 폰트의 500% 크기) |
| px | 픽셀 수 | `font-size : 10px;` (10픽셀 크기) |
| cm | 센티미터 | `margin-left : 5cm;` (왼쪽 여백 5cm) |
| mm | 밀리미터 | `margin-left : 10mm;` (왼쪽 여백 10mm) |
| in | 인치. 1in = 2.54cm = 96px | `margin-left : 2in;` (왼쪽 여백 2인치) |
| pt | 포인트. 1pt = 1in의 1/72 크기 | `margin-left : 20pt;` (왼쪽 여백 20포인트) |
| pc | 피카소(picas). 1pc = 12pt | `font-size : 1pc;` (1pc 크기의 폰트) |
| deg | 각도 | `transform : rotate(20deg);` (시계 방향으로 20도 회전) |

- HTML5에서는 단위를 사용하지 않으면 CSS 스타일 오류
  - `font-size : 3;` — 오류
  - `font-size : 3px;` — 정상

### 폰트 형
- Serif 형(serif 있는 서체, 예: Times New Roman)
- Sans-Serif 형(serif 없는 서체, 예: Arial)
- Monospace 형(글자 폭 동일, 예: Consolas)

### 폰트 제어 CSS3 프로퍼티
- 폰트 패밀리, font-family
  - `font-family : Arial, "Times New Roman", Serif;` — 콤마(,)로 나열. Arial 폰트가 없으면 Times New Roman, 그마저 없으면 유사한 Serif 형 중에서 선택
- 폰트 크기, font-size
```
font-size : 40px;   /* 40픽셀 크기 */
font-size : medium;  /* 중간 크기. 크기는 브라우저마다 다름 */
font-size : 1.6em;   /* 현재 폰트의 1.6배 크기 */
```
- 폰트 스타일, font-style
  - `font-style : italic;` — 이탤릭 스타일로 지정
- 폰트 굵기, font-weight
```
font-weight : 300;   /* 100~900의 범위에서, 300 정도 굵기 */
font-weight : bold;  /* 굵게. 700 크기 */
```

### 단축 프로퍼티, font
- font-style, font-weight, font-size, font-family를 순서대로 지정하는 단축 프로퍼티
- 형식: `font : font-style font-weight font-size font-family`
- 예) 20픽셀로 이탤릭 스타일에 bold 굵기로 consolas 체
  - `font : italic bold 20px consolas, sans-serif;`
  - `font : 20px consolas, sans-serif;` (font-style, font-weight의 생략 가능)

### 예제 4-12 CSS3 폰트 활용
- body는 font-family로 "Times New Roman", Serif 지정, font-size는 large
- h3는 단축 프로퍼티로 `font : italic bold 40px consolas, sans-serif;` 지정
- 문단별로 font-weight:900, font-weight:100, font-style:italic, font-style:oblique를 style 속성으로 비교
- span에 `font-size:1.5em`을 적용해 현재 크기의 1.5배로 표시

## 8. CSS3의 박스 모델
- HTML 태그는 사각형 박스로 다루어진다
  - 각 HTML 태그 요소를 하나의 박스로 다룸
  - 박스 크기, 배경 색, 여백, 옆 박스와의 거리 등 제어 가능

### 박스 모델의 구성
- 콘텐츠: HTML 태그의 텍스트나 이미지가 출력되는 부분
- 패딩: 콘텐츠를 직접 둘러싸고 있는 내부 여백
- 테두리: 패딩 외부의 테두리로서, 직선이나 점선 혹은 이미지로 테두리를 그릴 수 있음
- 여백(margin): 박스의 맨 바깥 영역이며 테두리 바깥의 공간으로 인접한 아래위 이웃 태그의 박스와의 거리
- 박스 구조(바깥→안): margin(여백) → border(테두리) → padding(패딩) → 콘텐츠

### 박스 모델을 구성하는 CSS3 프로퍼티

| 구분 | 콘텐츠 | 패딩 | 테두리 | 여백 |
| --- | --- | --- | --- | --- |
| 크기 관련 프로퍼티 | width, height | padding-top/right/bottom/left | border-top/right/bottom/left-width | margin-top/right/bottom/left |
| 크기 관련 단축 프로퍼티 | - | padding | border-width | margin |
| 스타일 관련 프로퍼티 | - | - | border-top/right/bottom/left-style | - |
| 스타일 관련 단축 프로퍼티 | - | - | border-style | - |
| 색 관련 프로퍼티 | - | 패딩의 색은 따로 없음. 태그의 배경색으로 칠해짐 | border-top/right/bottom/left-color | 여백은 투명. 부모 태그의 배경이 비춰 보임 |
| 색 관련 단축 프로퍼티 | - | - | border-color | - |
| 전체 단축 프로퍼티 | - | - | border | - |

### 예제 4-13 `<div>`의 박스 모델 보이기
- `div.box`에 background:yellow, border-style:solid, border-color:peru, margin:40px, border-width:30px, padding:20px를 지정하고, 콘텐츠 영역이 보이도록 배경이 있는 `<span>`을 넣어 박스 구조를 시각적으로 보여주는 예제

### 박스 모델의 색, 테두리, 단축 프로퍼티
- 개별 프로퍼티 예: `border-width : 3px; border-style : dotted; border-color : blue;`
- 한쪽 방향만 지정 예: `border-left-width : 3px; border-left-style : dotted; border-left-color : blue;`
- 단축 프로퍼티 예: `border : 3px dotted blue;` (테두리 두께, 스타일, 색을 한 번에 지정)

### 예제 4-14 박스 모델 활용
- `<div>`에 background:yellow, padding:20px, border:5px dotted red, margin:30px를 지정하고 그 안에 이미지(`<img>`)를 콘텐츠로 넣어 박스 모델의 각 영역을 확인하는 예제

## 9. 테두리 꾸미기
### 다양한 테두리 선 스타일
- border-style 값: solid, none, hidden, dotted, dashed, double, groove, ridge, inset, outset 등
- none과 hidden은 두께가 0으로 동일하게 표시됨

### 예제 4-15 다양한 테두리 선 스타일
- 여러 `<p>`에 style 속성으로 `border: 3px solid/none/hidden/dotted/dashed/double blue`, `border: 15px groove/ridge/inset/outset yellow`를 각각 지정해 테두리 선 모양을 비교하는 예제

### 둥근 모서리 테두리 만들기, border-radius
- 테두리의 모서리를 둥글게 만듦
- 값 1개: `border-radius : 50px;` — 네 모서리 모두 반지름 50px
- 값 4개: `border-radius : 0px 20px 40px 60px;` — 왼쪽 위부터 시계방향 순으로 각 모서리에 반지름 적용. 뒤 2개 값이 생략되면 앞쪽과 대칭 구조로 적용됨

### 예제 4-16 다양한 둥근 모서리 테두리
- `#round1`~`#round5`에 각각 반지름 50px, 0/20/40/60px, 0/20/40px, 0/20px, 점선 테두리의 50px 반지름을 지정해 다양한 둥근 모서리를 비교하는 예제

### 이미지 테두리 만들기, border-image
- 테두리에 이미지를 입힘
- 모서리(corner)와 에지(edge)로 구분하여 각각 이미지를 입힘
- border-width과 border-style을 미리 지정해야 함 (예: `border-width : 30px; border-style : solid;`)
- 예) border.png에서 30픽셀 크기 조각으로 이미지 테두리 만들기: `border-image : url("border.png") 30 round;`
  - 이미지에서 30픽셀 조각을 떼어내 모서리에 배치하고, 에지(edge) 이미지는 반복 배치
- border-image의 배치 방식
  - round: 에지 이미지 반복 배치. 테두리 길이만큼 이미지 크기 조절
  - repeat: 에지 이미지 반복 배치(크기 조절 안 함)
  - stretch: 에지 이미지를 테두리 길이만큼 늘여 배치

### 예제 4-17 이미지 테두리 만들기
- 같은 원본 이미지(border.png)를 30px 조각으로 잘라 `border-image` 값을 round, repeat, stretch로 각각 지정한 세 개의 `<p>`를 비교하는 예제

## 10. 배경 다루기
- 배경 색이나 이미지 지정: `background-color`, `background-image`
  - 둘 다 지정되면 배경 이미지가 출력되지 않는 영역에 배경색이 출력됨
  - 예) `div { background-color : skyblue; background-image : url("media/spongebob.png"); }`
- 배경 이미지의 위치, `background-position`
  - 예) `background-position : center center;` — 박스 중간에 이미지 출력
- 배경 이미지 반복 출력, `background-repeat`
  - 예) `background-repeat : repeat-y;` — 위에서 아래로 이미지 반복 출력

### 배경 만들기 연습
- 100x100 크기로 `<div>` 박스의 왼쪽 중간에 배경 이미지 넣기: `background-color:skyblue; background-size:100px 100px; background-image:url(...); background-repeat:no-repeat; background-position:left center;`
- `<div>` 박스의 center 위치에 y축을 따라 배경 이미지 반복: `background-repeat:repeat-y; background-position:center center;`

### background 단축 프로퍼티
- 배경을 꾸미는 여러 값을 한 번에 지정하는 단축 프로퍼티
- 예) `div { background : skyblue url("media/spongebob.png") center center/100px 100px repeat-y; }`
- 일부 값만 지정도 가능: `background : skyblue;`(배경색만) 또는 `background : url("media/spongebob.png");`(배경 이미지만)

### 예제 4-18 `<div>` 박스에 배경 꾸미기
- 첫 번째 div에 background-color:skyblue, 100x100 크기의 spongebob 이미지를 y축 반복, center 위치로 배경을 꾸미고, 200x200 크기의 두 번째 div로 감싸 확인하는 예제

## 11. 그림자 효과
### 텍스트 그림자, text-shadow
- 형식: `text-shadow : h-shadow v-shadow blur-radius color|none`
  - h-shadow, v-shadow: 원본 텍스트와 그림자 텍스트 사이의 수평/수직 거리(필수)
  - blur-radius: 흐릿한 그림자를 만드는 효과로 흐릿하게 번지는 길이(선택)
  - color: 그림자 색
  - none: 그림자 효과 없음
- 예) `div.red { text-shadow : 3px 3px red; }` — h-shadow 3px, v-shadow 3px, color red
- 예) `div.blur { text-shadow : 3px 3px 5px red; }` — blur-radius 5px 추가로 흐릿한 그림자

### 예제 4-19 text-shadow로 텍스트 그림자 만들기
- Drop Shadow(그림자만), Color Shadow(빨간 그림자), Blur Shadow(흐림 효과), Glow Effect(발광 효과, 0 0 3px), WordArt Effect(흰 글자에 어두운 그림자), 3D Effect, Multiple Shadow Effect(그림자 여러 개 중첩, 콤마로 나열)를 각각 class로 비교하는 예제

### 박스 그림자, box-shadow
- 박스 전체에 그림자 효과
- 형식: `box-shadow : h-shadow v-shadow blur-radius spread-radius color |none|inset`
  - spread-radius: 그림자 크기(선택, 디폴트 0)
  - inset: 음각 박스로 보이게 박스 상단 안쪽(왼쪽과 위쪽)에 그림자 형성

### 예제 4-20 box-shadow로 박스 그림자 만들기
- `.redBox`는 `box-shadow : 10px 10px red;`(붉은 그림자), `.blurBox`는 `box-shadow : 10px 10px 5px skyBlue;`(흐린 하늘색 그림자), `.multiEffect`는 그림자 3개를 콤마로 나열해 겹쳐 보여주는 예제

## 12. 마우스 커서 제어
- cursor 프로퍼티: HTML 태그 위에 마우스가 올라갈 때 마우스의 커서 모양 지정
- 형식: `cursor : value;`
  - value: auto, crosshair, default, pointer, move, copy, help, progress, text, wait, none, zoom-in, zoom-out, e-resize, ne-resize, nw-resize, n-resize, se-resize, sw-resize, s-resize, w-resize, uri 중 하나 지정됨

### 예제 4-21 마우스 커서
- 여러 `<p>`에 style 속성으로 `cursor: crosshair`(십자 모양), `cursor: help`(도움말 모양), `cursor: pointer`(포인터 모양), `cursor: progress`(프로그램 실행 중 모양), `cursor: n-resize`(상하 크기 조절 모양)를 각각 지정해 마우스를 올렸을 때 커서 모양이 바뀌는 것을 확인하는 예제
