# 8장. HTML DOM과 Document

## 강의 목표
1. HTML DOM의 필요성을 이해한다.
2. DOM 트리와 HTML 페이지의 관계를 이해한다.
3. DOM 객체의 구조와 HTML 태그와의 관계를 이해한다.
4. DOM 객체를 통해 HTML 태그의 출력 모양과 콘텐츠를 제어할 수 있다.
5. document 객체를 이해하고, write() 메소드를 활용할 수 있다.
6. createElement() 등을 통해 동적으로 DOM 객체를 웹 페이지에 추가, 삭제할 수 있다.

## 1. HTML 페이지와 자바스크립트 객체
- 자바스크립트 코드는 브라우저로부터 3가지 유형의 객체를 받아 활용
  - 코어 객체: `Array`, `Date` 등
  - BOM 객체: `window`, `history` 등
  - HTML DOM 객체: `document`, `body` 등

## 2. HTML DOM (Document Object Model)
- 웹 페이지에 작성된 HTML 태그마다 객체(DOM 객체) 생성
- 목적: HTML 태그가 출력된 모양이나 콘텐츠를 제어
  - DOM 객체를 통해 각 태그의 CSS3 스타일 시트 접근 및 변경
  - HTML 태그에 의해 출력된 텍스트나 이미지 변경
- DOM 트리
  - HTML 태그의 포함관계에 따라 DOM 객체의 트리 생성
  - 부모 자식 관계
- DOM 객체
  - DOM 트리의 한 노드
  - HTML 태그 당 하나의 DOM 객체 생성
  - DOM 노드(Node), DOM 엘리먼트(Element)라고도 부름

### BOM과 DOM
- BOM(Browser Object Model): `window` 아래에 `navigator`, `history`, `location`, `screen`, `document`
- DOM: `document` 아래에 `html` → `head`, `body` → 각 태그 객체

```html
<!DOCTYPE html>
<html>
<head>
   <title>HTML DOM 트리</title>
</head>
<body>
<p style="color:blue">이것은
   <span style="color:red">문장입니다.</span>
</p>
<form>
   <input type="text">
   <input type="button" value="테스트">
   <hr>
</form>
</body>
</html>
```

- 위 문서의 DOM 트리

```
document
 └ html
    ├ head
    │  └ title
    └ body
       ├ p
       │  └ span
       └ form
          ├ input
          ├ input
          └ hr
```

## 3. DOM 트리의 특징
- DOM 트리의 루트는 `document` 객체
- DOM 객체의 종류는 HTML 태그 종류만큼 있음
- HTML 태그 당 DOM 객체가 하나씩 생성
- HTML 태그의 포함관계에 따라 DOM 트리에 부모 자식 관계 형성

### 브라우저가 HTML 태그를 화면에 그리는 과정
1. 브라우저가 DOM 트리의 틀(`document` 객체) 생성
2. 브라우저가 HTML 태그를 읽고 DOM 트리에 DOM 객체 생성
3. 브라우저는 DOM 객체를 화면에 출력
4. HTML 문서 로딩이 완료되면 DOM 트리 완성
5. DOM 객체 변경 시, 브라우저는 해당 HTML 태그의 출력 모양을 바로 갱신

### DOM 객체와 화면 출력
- DOM 객체를 제어하면 HTML 태그를 제어하는 효과 발생

## 4. HTML 태그와 DOM 객체의 구성

### HTML 태그의 요소
- HTML 태그는 엘리먼트(element)라고도 부름
- 5가지 요소로 구성
  - 엘리먼트 이름
  - 속성
  - CSS3 스타일
  - 이벤트 리스너
  - 콘텐츠(`innerHTML`)

### DOM 객체의 구성 요소

| 요소 | 설명 |
|---|---|
| 프로퍼티(property) | HTML 태그의 속성(attribute) 반영. 예: `id`, `tagName`, `innerHTML`, `style` |
| 메소드(method) | DOM 객체의 멤버 함수. HTML 태그 제어. 예: `click()`, `focus()`, `setAttribute()` |
| 컬렉션(collection) | 자식 DOM 객체들의 주소 등 배열과 비슷한 집합 정보. 예: `children` |
| 이벤트 리스너(event listener) | HTML 태그에 작성된 이벤트 리스너 반영. 약 70여 개. 예: `onclick`, `onkeydown`, `onload` |
| CSS3 스타일 | 태그에 설정된 CSS3 스타일 정보 반영. `style` 프로퍼티로 모양 제어. 예: `color`, `borderColor`, `marginTop` |

## 5. DOM 객체 사이의 관계
- DOM 객체의 프로퍼티로 트리 안의 다른 객체에 접근

| 프로퍼티/컬렉션 | 의미 |
|---|---|
| `parentElement` | 부모 객체 |
| `children` | 자식 객체들의 컬렉션 |
| `childElementCount` | 자식 객체 개수 |
| `firstElementChild` | 첫 번째 자식 |
| `lastElementChild` | 마지막 자식 |
| `previousElementSibling` | 바로 앞 형제 (없으면 `null`) |
| `nextElementSibling` | 바로 뒤 형제 (없으면 `null`) |

- 예: `body`의 `childElementCount`는 2 (`p`, `form`), `p`와 `form`은 서로 sibling 관계

### 예제 8-1 DOM 객체의 구조 출력 : p 객체 사례
- `getElementById("firstP")`로 `p` 객체를 찾아 `id`, `tagName`, `innerHTML`, `style.color`, `onclick`, `childElementCount`, `offsetWidth`, `offsetHeight`를 경고창에 출력

## 6. DOM 객체 다루기

### DOM 객체 구분: id 속성
```html
<p id="firstP">안녕하세요</p>
```

### DOM 객체 찾기: document.getElementById()
```javascript
let p = document.getElementById("firstP"); // id 값이 firstP인 DOM 객체 리턴
p.style.color = "red";                     // p 객체의 글자 색을 red로 변경
```

### CSS3 스타일 동적 변경
- CSS3 스타일 프로퍼티는 `-`를 빼고 다음 글자를 대문자로 씀
  - `background-color` → `backgroundColor`
  - `font-size` → `fontSize`

```javascript
let span = document.getElementById("mySpan");
span.style.color = "green";
span.style.fontSize = "30px";
span.style.border = "3px dotted magenta";
```

### 예제 8-2 <span>의 CSS3 스타일 동적 변경
- 버튼을 누르면 `<span>`의 글자 색, 크기, `display`, 폭, 테두리, 여백을 바꿈. 인라인 박스가 블록 박스로 바뀜

## 7. innerHTML 프로퍼티
- 시작 태그와 종료 태그 사이에 들어 있는 HTML 콘텐츠
- `innerHTML`을 수정하면 HTML 태그의 콘텐츠가 바뀜

```javascript
let p = document.getElementById("firstP");
p.innerHTML = "나의 <img src='puppy.jpg'>강아지입니다.";
```

### 예제 8-3 innerHTML을 이용하여 HTML 콘텐츠 동적 변경
- 글자를 클릭하면 `<p>`의 `innerHTML`을 이미지가 들어간 HTML로 바꿈

## 8. this
- 객체 자신을 가리키는 자바스크립트 키워드
- DOM 객체에서 객체 자신을 가리킬 때 사용

```html
<div onclick="this.style.backgroundColor='orange'">
<button onclick="this.style.backgroundColor='orange'">
```

### 예제 8-4 this 활용
- `change(this, size, color)`처럼 `this`를 함수에 넘겨 클릭한 버튼이나 `<div>`의 글자 크기와 색을 바꿈

## 9. document 객체
- HTML 문서 전체를 대표하는 객체
  - 프로퍼티: HTML 문서의 전반적인 속성
  - 메소드: DOM 객체 검색, DOM 객체 생성, HTML 문서 전반 제어
- DOM 객체에 접근하는 경로의 시작점
- DOM 트리의 최상위 객체
  - 브라우저는 HTML 문서 로드 전 `document` 객체를 먼저 생성
  - `document` 객체를 뿌리로 DOM 트리 생성
- 접근: `window.document` 또는 `document`
- `document`는 DOM 객체가 아님
  - 연결된 스타일 시트가 없음
  - `document.style.color = "red";` → 오류

### 예제 8-5 document 객체의 프로퍼티 출력
- 로딩 중과 로드 완료 후의 `readyState`, `location`, `URL`, `title`, `head`, `body`, `domain`, `lastModified`, `defaultView`, `referrer`, `activeElement`, `documentElement` 등을 경고창에 출력
- `focus()`로 `<input>`에 포커스를 줌

## 10. DOM 트리에서 DOM 객체 찾기

### 태그 이름으로 찾기: document.getElementsByTagName()
- 태그 이름이 같은 모든 DOM 객체를 찾아 컬렉션 리턴

```javascript
let divTags = document.getElementsByTagName("div");
let n = divTags.length; // 웹 페이지에 있는 <div> 태그의 개수
```

### class 속성으로 찾기: document.getElementsByClassName()
- `class` 속성이 같은 모든 DOM 객체를 찾아 컬렉션 리턴

```javascript
let plainClasses = document.getElementsByClassName("plain");
let n = plainClasses.length; // class="plain"인 태그의 개수
```

### 예제 8-6 태그 이름으로 DOM 객체 찾기, getElementsByTagName()
- 버튼을 누르면 모든 `<span>`의 글자 색과 크기를 바꿈

### 예제 8-7 class 속성으로 DOM 객체 찾기, getElementsByClassName()
- 버튼에 따라 `class="place"` 또는 `class="food"`인 태그만 골라 스타일을 바꿈

## 11. document.write()와 document.writeln()

### HTML 페이지 로딩 과정
1. 브라우저는 HTML 페이지 로드 전 빈 `document` 생성
2. HTML 페이지를 위에서 아래로 해석
3. HTML 태그들을 `document` 객체에 담음 (DOM 객체 생성)
4. `</html>` 태그를 만나면 `document` 객체를 완성하고 닫음

### write()
- `document`에 담긴 HTML 콘텐츠 마지막에 HTML 태그 추가
  - 추가된 태그는 DOM 객체로 바뀌어 DOM 트리에 추가
  - 삽입된 태그가 화면에 출력

```javascript
document.write("<h3>Welcome to my home</h3>");
document.write(2+3); // 5 출력
document.write("<p>오늘은 " + "sunny day 입니다</p>");
```

### writeln()
- HTML 텍스트에 `'\n'`을 붙여 출력 → 빈 칸 하나 띄는 효과
- 줄을 바꾸려면 `document.write("<br>");`

### 예제 8-8 write()와 writeln() 메소드 활용
- `write()`로 HTML을 출력하고, `writeln()`은 줄바꿈이 아니라 빈 칸 하나만 생김을 확인

### 예제 8-9 write()를 잘못 사용하는 예
- 문서 로드가 끝난 뒤 `onclick`에서 `write()`를 부르면 이전 내용이 모두 지워지고 새 내용만 출력됨

## 12. document의 열기와 닫기, open()과 close()
- `document.open()`
  - 현재 출력된 HTML 콘텐츠를 지우고 새 HTML 페이지 시작
  - 즉, `document`에 담긴 DOM 트리를 지우고 새로 시작
- `document.close()`
  - 현재 HTML 페이지 완성
  - 이후 `document.write()` 불가

```javascript
// 새 윈도우를 열고 그곳에 HTML 문서 출력
let newWin = window.open("", "outWin", "");
newWin.document.open();
newWin.document.write("<html><head>...<body>안녕하세요.");
newWin.document.write("</body></html>");
newWin.document.close();
```

### 예제 8-10 HTML 문서 작성 연습 페이지 만들기
- `<textarea>`에 쓴 HTML을 버튼을 누르면 새 윈도우에 `open()` → `write()` → `close()`로 출력

## 13. 문서의 동적 구성

### DOM 객체 동적 생성: document.createElement("태그이름")
```javascript
let newDIV = document.createElement("div");
newDIV.innerHTML = "새로 생성된 DIV입니다.";
newDIV.setAttribute("id", "myDiv");
newDIV.style.backgroundColor = "yellow";
```

- 위 코드는 다음 태그 정보를 가진 DOM 객체를 만드는 것과 같음

```html
<div id="myDiv" style="background-color:yellow">
   새로 생성된 DIV입니다.
</div>
```

### DOM 트리에 삽입
- `부모.appendChild(DOM객체)`: 마지막 자식으로 추가
- `부모.insertBefore(DOM객체 [, 기준자식])`: 기준 자식 앞에 추가

```javascript
let p = document.getElementById("p");
p.appendChild(newDIV);
```

### DOM 객체 삭제
- `let removedObj = 부모.removeChild(떼어낼자식객체);`

```javascript
let myDiv = document.getElementById("myDiv");
let parent = myDiv.parentElement;
parent.removeChild(myDiv); // 부모에서 myDiv 객체 삭제
```

### 예제 8-11 HTML 태그의 동적 추가 및 삭제
- 링크를 클릭하면 `createElement()`, `appendChild()`로 `<div>`를 추가하고, 그 `<div>`를 클릭하면 `removeChild()`로 삭제
