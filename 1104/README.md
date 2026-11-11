# 9장. 이벤트 기초 및 활용

## 강의 목표
1. 이벤트가 무엇이고 언제 발생하는지 안다.
2. 자바스크립트 코드로 이벤트 리스너를 작성할 수 있다.
3. 발생하는 이벤트가 DOM 트리를 따라 흘러가는 경로를 안다.
4. 문서와 이미지의 로딩 완료 시 호출되는 onload 리스너를 작성할 수 있다.
5. 폼에 발생하는 이벤트 리스너를 다룰 수 있다.
6. 마우스 관련 이벤트를 다룰 수 있다.
7. 키 관련 이벤트를 다룰 수 있다.

## 1. 이벤트 개요

- 이벤트: 마우스 클릭, 키보드 입력, 이미지나 HTML 문서의 로딩, 타이머의 타임아웃 등 사용자의 입력 행위나 문서/브라우저의 상태 변화를 자바스크립트 코드에게 알리는 통지(notification)
- 이벤트 리스너: 발생한 이벤트에 대처하기 위해 작성된 자바스크립트 코드
- 이벤트 종류
  - HTML5에서 이벤트 종류는 70여 가지
  - 이벤트 리스너 이름은 이벤트 이름 앞에 `on`을 붙임
  - 예) `onmousedown`: mousedown 이벤트의 리스너, `onkeydown`: keydown 이벤트의 리스너

### 브라우저에 발생하는 다양한 이벤트

| 이벤트 | 발생 시점 |
|---|---|
| `load` | HTML 문서 전체 또는 이미지 로딩 완료 시 |
| `click` | 마우스 클릭 시 |
| `dblclick` | 마우스 더블클릭 시 |
| `change` | 라디오버튼 선택 등 값 변경 시 |
| `resize` | 윈도우 크기 변경 시 |
| `submit` | submit 버튼 클릭 시 |
| `reset` | reset 버튼 클릭 시 |
| `keydown` | 키를 누를 때 |
| `keyup` | 누른 키를 놓을 때 |

## 2. 이벤트 리스너 만들기

- 3가지 방법
  1. HTML 태그 내에 작성
  2. DOM 객체의 이벤트 리스너 프로퍼티에 작성
  3. DOM 객체의 `addEventListener()` 메소드 이용

### HTML 태그 내에 이벤트 리스너 작성
- HTML 태그의 이벤트 리스너 속성에 리스너 코드를 직접 작성

```html
<p onmouseover="this.style.backgroundColor='orchid'"
   onmouseout="this.style.backgroundColor='white'">
  마우스 올리면 orchid 색으로 변경
</p>
```

### 예제 9-1 HTML 태그 내에 이벤트 리스너 작성
- `<p>` 태그의 `onmouseover`, `onmouseout` 속성에 코드를 직접 넣어 마우스를 올리면 배경이 orchid, 내리면 흰색으로 바뀜

### DOM 객체의 이벤트 리스너 프로퍼티에 작성
- 함수를 만들고 DOM 객체의 리스너 프로퍼티에 함수 이름을 대입

```js
function over() { ... }          // onmouseover 리스너로 사용할 함수
let p = document.getElementById("p");
p.onmouseover = over;            // over() 함수 등록
p.onmouseover = over();          // 잘못된 코드 (함수 실행 결과가 대입됨)
```

### 예제 9-2 DOM 객체의 이벤트 리스너 프로퍼티에 리스너 등록
- `<body onload="init()">`에서 `p.onmouseover = over`, `p.onmouseout = out`으로 리스너를 등록함

### addEventListener() 메소드

```
addEventListener(eventName, listener[, useCapture])
```

- `eventName`: 이벤트 타입 문자열 (`click`, `load`, `keydown` 등)
- `listener`: 리스너로 등록할 함수 이름
- `useCapture`: `true`면 캡쳐 단계, `false`면 버블 단계 리스너. 생략 시 `false`
- 예) `p.addEventListener("mouseover", over);`

### 예제 9-3 addEventListener() 사용
- `addEventListener("mouseover", over)`, `addEventListener("mouseout", out)`으로 리스너 등록

### 익명 함수로 이벤트 리스너 작성
- 익명 함수(anonymous function): 함수 이름 없이 필요한 곳에 함수 코드를 바로 작성
- 코드가 짧거나 한 곳에서만 쓸 때 편리

```js
p.onmouseover = function () { this.style.backgroundColor = "orchid"; };
p.addEventListener("mouseover",
    function () { this.style.backgroundColor = "orchid"; }
);
```

### 예제 9-4 익명 함수로 이벤트 리스너 작성
- `onmouseover` 프로퍼티와 `addEventListener("mouseout", ...)` 둘 다 익명 함수로 리스너를 작성함

### 이벤트 리스너 작성 방법 비교

| 방법 | 코드 |
|---|---|
| HTML 태그 | `<p onmouseover="this.style.backgroundColor='orchid'">` |
| 이벤트 리스너 프로퍼티 | `p.onmouseover = over;` |
| `addEventListener()` | `p.addEventListener("mouseover", over);` |
| 익명 함수 (프로퍼티) | `p.onmouseover = function () { ... };` |
| 익명 함수 (`addEventListener`) | `p.addEventListener("mouseover", function () { ... });` |

## 3. 이벤트 객체

- 이벤트 객체(event object): 발생한 이벤트에 관련된 다양한 정보를 담은 객체
  - 예) mousedown: 마우스 좌표, 버튼 번호 등 / keydown: 키 코드 값 등
- 이벤트가 처리되고 나면 이벤트 객체는 소멸

### 이벤트 객체 전달받기
- 이벤트 객체는 리스너 함수의 첫 번째 매개변수로 전달됨
  1. 이름을 가진 리스너: `function f(e) {...}` → `obj.onclick = f;`
  2. 익명 함수: `obj.onclick = function(e) {...}`
  3. HTML 태그의 리스너: `event`라는 이름으로 전달
     - `<button onclick="f(event)">버튼</button>`
     - `<div onclick="alert(event.type)">버튼</div>`

### 예제 9-5 이벤트 리스너에서 이벤트 객체 전달받기
- 버튼 클릭(`f(event)`)과 `<p>`의 `onmouseover = f` 모두 `e.type`을 alert로 출력함

### 이벤트 객체의 공통 멤버
- 이벤트 종류마다 조금씩 다르지만 공통 멤버가 있음

| 멤버 | 종류 | 설명 |
|---|---|---|
| `type` | 프로퍼티 | 현재 발생한 이벤트 종류 문자열 (`click`, `load` 등) |
| `target` | 프로퍼티 | 이벤트를 발생시킨 객체 (DOM 객체 혹은 HTML 태그) |
| `currentTarget` | 프로퍼티 | 현재 이벤트 리스너를 실행하고 있는 DOM 객체 |
| `defaultPrevented` | 프로퍼티 | 디폴트 행동이 취소되었는지 나타내는 true/false |
| `preventDefault()` | 메소드 | 이벤트의 디폴트 행동을 취소 |

- `target`: 이벤트 타겟(이벤트를 유발시킨 DOM 객체)을 가리킴
  - 예) `<button>`을 클릭했으면 click 이벤트의 타겟은 버튼

### 예제 9-6 이벤트 객체의 프로퍼티 출력
- 버튼 클릭 시 `type`, `target`, `currentTarget`, `defaultPrevented` 값을 `<p>`에 출력함

### 이벤트의 디폴트 행동 취소, preventDefault()
- 디폴트 행동: 특정 이벤트에 대한 HTML 태그의 기본 행동
  - `<a>`의 click: 웹 페이지 이동
  - submit 버튼의 click: 폼 데이터 전송
  - `<input type="checkbox">`의 click: 체크박스 선택
- 디폴트 행동 막는 방법
  1. 리스너에서 `false` 리턴: `<a href="..." onclick="return false">`
  2. 이벤트 객체의 `preventDefault()` 호출: `<a href="..." onclick="event.preventDefault();">`
- 이벤트 객체의 `cancelable` 프로퍼티가 `true`인 경우만 취소 가능

### 예제 9-7 이벤트의 디폴트 행동 취소
- 링크 클릭 시 `confirm()` 결과를 리턴해 취소하면 이동 안 함, 체크박스는 `preventDefault()`로 체크가 안 되게 막음

## 4. 이벤트 흐름

- 이벤트 흐름: 이벤트가 발생하면 window 객체에 먼저 도달 → DOM 트리를 따라 타겟에 도착 → 다시 반대 방향으로 window 객체에 도달한 후 사라지는 과정
- 캡쳐 단계(capturing phase)
  - window에서 중간의 모든 DOM 객체를 거쳐 타겟 객체로 전달
  - 거쳐가는 모든 DOM 객체(window 포함)의 캡쳐 리스너 실행
- 버블 단계(bubbling phase)
  - 타겟에서 중간의 모든 DOM 객체를 거쳐 window 객체로 전달
  - 거쳐가는 모든 DOM 객체(window 포함)의 버블 리스너 실행
- DOM 객체에는 캡쳐 리스너와 버블 리스너 둘 다 작성 가능

### 이벤트 흐름 사례
- 폼 안의 버튼(`input`)을 클릭한 경우 이벤트 경로
  1. 캡쳐: window → document → html → body → form → input(타겟)
  2. 버블: input → form → body → html → document → window → 소멸

### 캡쳐 리스너와 버블 리스너
- `addEventListener()`의 3번째 매개변수로 구분
  - `true`: 캡쳐 리스너, `false`: 버블 리스너, 생략 시 `false`

```js
let b = document.getElementById("button");
b.addEventListener("click", capFunc, true);     // 캡쳐 단계에서 실행
b.addEventListener("click", bubbleFunc, false); // 버블 단계에서 실행
```

- 다른 방법(`obj.onclick = ...` 등)으로 등록한 리스너는 버블 리스너로 자동 등록

### 예제 9-8 이벤트 흐름
- 버튼 클릭 시 리스너 실행 순서
  1. `<body>`의 캡쳐 리스너
  2. `<input>`의 버블 리스너
  3. `<body>`의 버블 리스너
- `e.currentTarget.tagName`으로 어느 태그에서 실행 중인지 출력함

### 이벤트 흐름 중단
- 이벤트 객체의 `stopPropagation()` 호출로 흐름을 중단할 수 있음
  - `event.stopPropagation();`

## 5. 마우스 핸들링

### 마우스 이벤트 객체의 프로퍼티

| 프로퍼티 | 설명 |
|---|---|
| `x`, `y` | 타겟 객체의 부모 객체 내에서의 마우스 좌표 |
| `clientX`, `clientY` | 브라우저 윈도우의 문서출력 영역 내 마우스 좌표 |
| `screenX`, `screenY` | 스크린 기준 마우스 좌표 |
| `offsetX`, `offsetY` | 타겟 객체 내에서의 마우스 좌표 |
| `button` | 눌러진 버튼 (0: 없음, 1: 왼쪽, 2: 오른쪽, 3: 왼쪽+오른쪽, 4: 중간) |
| `wheelDelta` | 휠 방향 (양수 120: 위쪽, 음수 -120: 아래쪽) |

- `onclick`: HTML 태그가 클릭될 때
- `ondblclick`: HTML 태그가 더블클릭될 때

### 예제 9-9 onclick 리스너로 계산기 만들기
- 계산 버튼 클릭 시 입력한 수식을 `eval()`로 계산해 결과 창에 출력함

### 여러 마우스 관련 이벤트 리스너

| 리스너 | 호출 시점 |
|---|---|
| `onmousedown` | 마우스 버튼을 누르는 순간 |
| `onmouseup` | 눌러진 버튼이 놓여지는 순간 |
| `onmouseover` | 마우스가 태그 위로 올라오는 순간 (자식 영역 포함) |
| `onmouseout` | 마우스가 태그를 벗어나는 순간 (자식 영역 포함) |
| `onmouseenter` | 마우스가 태그 위로 올라오는 순간 (버블 단계 없음) |
| `onmouseleave` | 마우스가 태그를 벗어나는 순간 (버블 단계 없음) |
| `onwheel` | 태그 위에서 휠이 구르는 동안 계속 호출 |

```js
obj.onwheel = function (e) {
   if(e.wheelDelta < 0) { ... }   // 아래쪽으로 굴린 경우
   else { ... }                   // 위쪽으로 굴린 경우
};
```

### 예제 9-10 마우스 관련 이벤트 리스너
- `<span>`에 누르면 이탤릭, 올리면 violet 테두리, 내리면 회색 테두리, 휠을 굴리면 테두리 두께가 1px씩 변함

### 예제 9-11 onmousemove와 마우스 위치 및 버튼
- 이미지 위에서 마우스를 움직이면 `button`, `screenX/Y`, `clientX/Y`, `offsetX/Y`, `x/y` 값을 출력함
- `<img>`의 부모가 `<body>`(브라우저 윈도우)라서 `clientX/Y`와 `x/y`가 같게 나옴

### oncontextmenu
- 마우스 오른쪽 클릭 시 디폴트로 컨텍스트 메뉴('소스 보기', '이미지 다운로드' 등) 출력
- `oncontextmenu` 리스너가 먼저 호출되고, `false`를 리턴하면 메뉴 출력 취소

```js
document.oncontextmenu = function () {
   ...
   return false; // 컨텍스트 메뉴 출력 금지
}
```

### 예제 9-12 oncontextmenu로 소스 보기나 이미지 다운로드 금지
- 문서 어디든 오른쪽 클릭하면 경고창만 뜨고 컨텍스트 메뉴는 나오지 않음

## 6. 문서의 로딩 완료와 onload

- `onload`: window 객체에 발생, 웹 페이지 로딩 완료 시 호출
- 작성 방법
  1. `window.onload = function() { ... };`
  2. `<body onload="자바스크립트 코드">`

### 예제 9-13 onload에서 사이트 이전을 알리는 공고창 출력
- `<body onload="alert(...)">`로 페이지 로딩 직후 사이트 이전 공지 경고창 출력
- 문자열 안의 `\`는 뒤의 Enter 키를 무시하게 만듦

## 7. 이미지 로딩 완료와 onload

- Image 객체
  - `<img>` 태그에 의해 생성되는 DOM 객체
  - `new Image();`로 자바스크립트 코드에서 생성하는 객체
- `onload`: 이미지 로딩이 완료되면 Image 객체에 발생
- 새 이미지 로딩: `myImg.src = "banana.png";` → 로딩 완료 시 `myImg`의 `onload` 실행

### 이미지 로딩 시 주의할 점
- `src` 대입 직후에는 로딩이 끝나지 않아 `myImg.width`가 0일 수 있음
- 이미지 크기는 `onload` 리스너 안에서 읽어야 함

```js
let myImg = document.getElementById("myImg");
myImg.onload = function () {   // 이미지 로딩 완료 시 실행
   let width = myImg.width;     // 정확한 이미지 폭 읽기
}
myImg.src = "banana.png";      // 이미지 로딩 지시
```

### 예제 9-14 onload로 이미지의 크기 알아내기
- `<select>`에서 과일을 고르면 이미지를 바꾸고, `onload`에서 `width x height`를 출력함

### new Image()로 이미지 로딩과 출력
- `new Image()`: 이미지 객체는 생기지만 화면에 출력되지 않음
- 로딩: `bananaImg.src = "banana.png";`
- 출력: `<img>` 태그 공간에 대입 → `myImg.src = bananaImg.src;`

### 예제 9-15 new Image()로 이미지 로딩
- 8장의 이미지를 `new Image()`로 미리 로딩해두고, 이미지를 클릭할 때마다 다음 이미지로 바꿔 보여줌

## 8. onblur와 onfocus

- 포커스: 현재 키 입력에 대한 독점권. 브라우저는 포커스를 가진 요소에 키를 공급
- `onblur`: 포커스를 잃을 때 호출 (다른 요소를 클릭하면 현재 요소는 포커스를 잃음)
- `onfocus`: 포커스를 얻을 때 호출 (현재 요소를 클릭하면 포커스를 얻음)

### 예제 9-16 onfocus와 onblur, 입력 없이 다른 창으로 갈 수 없음
- 이름 창이 비어 있으면 `onblur`에서 `obj.focus()`로 포커스를 되돌려 다른 곳으로 못 가게 함

## 9. 라디오버튼과 체크박스

- 라디오버튼 객체: `<input type="radio">`로 만든 DOM 객체
  - 같은 `name`의 라디오버튼들은 `document.getElementsByName("city")`로 배열처럼 얻음

```html
<form>
  <input type="radio" name="city" value="seoul">서울
  <input type="radio" name="city" value="busan">부산
  <input type="radio" name="city" value="chunchen">춘천
</form>
```

- 체크박스 객체: `<input type="checkbox">`로 만든 DOM 객체

### 예제 9-17 선택된 라디오버튼 알아내기
- 버튼 클릭 시 `checked`가 `true`인 라디오버튼을 찾아 `value`를 alert로 출력함

### 예제 9-18 체크박스로 선택한 물품 계산
- 체크박스를 체크/해제할 때마다 `value`를 `parseInt()`로 더하거나 빼서 합계 금액을 표시함

## 10. select 객체와 onchange

- select 객체: `<select>` 태그로 만든 콤보박스, option 객체는 `<option>` 아이템
- 선택된 옵션 알아내기: `sel.selectedIndex`
- 옵션 선택
  - `sel.selectedIndex = 2;`
  - `sel.options[2].selected = true;`
- 선택된 옵션이 바뀌면 select 객체의 `onchange` 리스너 호출

```html
<select id="fruits" onchange="drawImage()">...</select>
```

### 예제 9-19 select 객체에서 선택한 과일 출력
- 콤보박스에서 과일을 바꾸면 `onchange`로 선택 옵션의 `value`(이미지 경로)를 `<img>`에 출력함

## 11. 키 이벤트

| 리스너 | 호출 시점 |
|---|---|
| `onkeydown` | 키가 눌러지는 순간. 모든 키에 대해 작동 |
| `onkeypress` | 문자 키와 Enter, Space, Esc 키에 대해서만 눌러지는 순간 추가 호출 (F1, Shift, PgDn, Del, Ins 등은 호출 안 됨) |
| `onkeyup` | 눌러진 키가 떼어지는 순간 |

### 예제 9-20 키 이벤트 리스너와 이벤트 객체의 프로퍼티
- 텍스트 창에서 키를 누르면 `e.key`, `e.code` 값을 `<div>`에 출력함

### 예제 9-21 키 이벤트 응용 – 상하좌우키로 셀 이동
- 3x3 표에서 `window.onkeydown`으로 화살표 키(`ArrowUp/Down/Left/Right`)를 받아 orchid 색 셀을 이동시킴
- 가장자리 셀에서는 `index/3`, `index%3` 검사로 이동을 막음

## 12. onreset과 onsubmit

- `onreset`: reset 버튼(`<input type="reset">`) 클릭 시. `false` 리턴하면 폼 초기화 안 됨
- `onsubmit`: submit 버튼(`<input type="submit">`) 클릭 시. `false` 리턴하면 폼 전송 안 함
- 두 리스너는 `<form>` 태그에 달아야 함

```html
<form onreset="..." onsubmit="...">
```
