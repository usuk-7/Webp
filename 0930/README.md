# 5장. CSS3 고급 활용

## 강의 목표
1. CSS3로 HTML 태그가 출력되는 위치를 조절할 수 있다.
2. CSS3로 리스트를 예쁘게 꾸밀 수 있다.
3. CSS3로 표를 예쁘게 꾸밀 수 있다.
4. CSS3로 폼을 꾸미고 사용자의 입력에 반응하게 할 수 있다.
5. CSS3로 애니메이션, 전환(transition), 변환(transform) 효과를 만들 수 있다.

## 1. 배치
- CSS3로 HTML 태그가 출력되는 위치 지정
- 태그를 웹 페이지에 작성된 순서와 다르게 배치 가능
- 배치 기능의 프로퍼티
  - `display`
  - `position`
  - `left`, `right`, `top`, `bottom`
  - `float`
  - `z-index`
  - `visibility`
  - `overflow`

### 블록 박스와 인라인 박스
- 인라인 태그는 인라인 박스, 블록 태그는 블록 박스로 출력
- 블록 박스
  - 새 라인에서 시작
  - 왼쪽에서 오른쪽 끝까지 통째로 차지
- 인라인 박스
  - 블록 안에 배치
  - 옆에 다른 태그 배치 가능

### 박스의 유형 제어: `display`
| 값 | 설명 |
|---|---|
| `block` | 블록 박스. 한 줄을 독점하고 `width`, `height` 지정 가능 |
| `inline` | 인라인 박스. 라인 안에 다른 요소와 함께 배치, 공간이 좁으면 다음 라인으로 넘어감 |
| `inline-block` | 라인 안에 배치되면서 `width`, `height`, `margin`으로 크기 조절 가능 |
| `none` | 박스를 출력하지 않음 (공간도 차지하지 않음) |

### 예제 5-1 display 프로퍼티로 박스 유형 설정
- `<div>`와 `<span>`에 `none`, `inline`, `inline-block`, `block`을 적용해 출력 차이 비교

### 박스의 배치: `position`
- normal flow: 웹 페이지에 나타난 순서대로 HTML 태그 배치
- `position`으로 normal flow를 무시할 수 있음
- 배치 방법
  - 정적 배치: `position: static` (디폴트)
  - 상대 배치: `position: relative`
  - 절대 배치: `position: absolute`
  - 고정 배치: `position: fixed`
  - 유동 배치: `float: left` 또는 `float: right`
- 위치는 `top`, `bottom`, `left`, `right`로 지정 (배치 방법에 따라 의미가 다름)

### 상대 배치 `position: relative`
- normal flow의 기본 위치에서 `left`, `top`, `bottom`, `right` 값만큼 이동한 상대 위치에 배치
- 예: `left: 20px; top: 20px;`이면 기본 위치에서 오른쪽 아래로 이동

### 예제 5-2 position: relative 상대 배치
- 5개의 `<div>` 중 h와 k 글자 `<div>`에 마우스를 올리면 `:hover`로 20px씩 상대 배치

### 예제 5-3 position: absolute 절대 배치
- 크리스마스 트리 이미지 위에 글자 `<p>`를 `left`, `top` 값으로 절대 배치
- 브라우저 크기가 변해도 절대 배치된 태그 위치는 변하지 않음

### 예제 5-4 position: fixed로 브라우저 하단 오른쪽에 고정 배치
- `bottom: 10px; right: 10px;`로 브라우저 하단 오른쪽에 항상 출력

### 예제 5-5 float: right로 브라우저의 오른편에 항상 배치
- 공지 `<p>`를 `float: right`로 오른쪽에 두고 본문 텍스트가 그 옆을 흐르게 함

### 예제 5-6 z-index로 카드 쌓기
- 겹친 이미지에 `z-index`를 줘서 쌓이는 순서 제어 (값이 클수록 위에 출력)
- `z-index`는 `position`이 지정된 요소에 사용

### 예제 5-7 visibility로 텍스트 숨기기
- `visibility: hidden`이면 공간은 차지하지만 텍스트는 보이지 않음 (`display: none`과 다름)

### 예제 5-8 overflow 프로퍼티 활용
- 박스를 넘치는 내용 처리
  - `hidden`: 넘친 내용을 잘라 보이지 않게 함
  - `visible`: 박스 밖으로 넘쳐서 출력
  - `scroll`: 스크롤바를 붙여 출력

## 2. CSS3로 리스트 꾸미기
- 리스트의 모양을 꾸미는 프로퍼티들
  - `background`
  - `list-style-position`
  - `list-style-type`
  - `list-style-image`
- 아이템 마커(marker): 각 `<li>` 앞에 붙는 표시

### 리스트와 아이템에 배경색 입히기
```css
ul {
  background: goldenrod;
  padding: 10px 10px 10px 50px;
}
ul li {
  background: greenyellow;
  margin-bottom: 5px;
}
```
- 마커는 기본적으로 아이템 바깥에 있음

### 마커의 위치 `list-style-position`
- `inside`: 마커가 아이템 영역의 안쪽에 배치됨

### 마커 종류 `list-style-type`
- `circle`, `square`, `none`
- `upper-roman`, `lower-alpha`, `decimal`

### 이미지 마커 `list-style-image`
- `list-style-image: url("media/marker.png");`
- 모든 아이템에 동일한 이미지 마커

### 예제 5-9 CSS3 스타일을 응용하여 리스트로 메뉴 만들기
- `<ul>`의 `<li>`를 `display: inline-block`으로 가로 배열
- `list-style-type: none`으로 마커 삭제, `<a>`의 `text-decoration: none`으로 밑줄 제거
- `a:hover`로 마우스를 올리면 글자색 변경

## 3. CSS3로 표 꾸미기
- 기본 구조: `<thead>`, `<tfoot>`, `<tbody>`로 이루어진 표를 꾸밈

### 표 테두리 제어
- `border`: 표 테두리 (두께, 선 종류, 색)
- `border-collapse: collapse`: 표와 셀의 중복된 테두리를 합침

### 셀 크기 제어
- `width`, `height`
- 선택자로 구분 가능 (예: `thead th`, `td, th`)

### 셀 여백 및 정렬
- `padding`: 여백
- `text-align`: 정렬 (`left`, `center`, `right`)

### 배경색과 테두리 효과
- `thead`에 `background`와 `color` 지정
- `td, tfoot th`에 `border-bottom`만 지정해 아래쪽 테두리만 표시

### 줄무늬 만들기
- `tbody tr:nth-child(even)`: 짝수 번째 행에 배경색 지정

### 예제 5-10 마우스가 올라오면 행의 배경색이 변하는 표 만들기
- 짝수 행 줄무늬에 `tbody tr:hover`로 마우스가 올라오면 `pink`로 변경

## 4. 폼 꾸미기
- `input[type=text]`로 특정 타입의 폼 요소에만 스타일 적용
  - `color`: 입력되는 글자 색
  - `border`, `border-radius`: 테두리와 둥근 모서리
- `:hover`: 마우스가 올라올 때
- `:focus`: 포커스를 받을 때 (예: `font-size: 120%`)

### 예제 5-11 스타일로 폼 꾸미기
- `label`을 `display: block`으로 한 줄씩 배치하고 `label span`을 `inline-block`으로 폭을 맞춤
- `:hover`로 배경색 변경, `:focus`로 글자 크기 120% 확대

## 5. CSS3 스타일로 태그에 동적 변화 만들기
- 자바스크립트로 구현하던 동적 변화를 CSS3만으로 작성 가능
- 3가지 기법
  - 애니메이션(animation)
  - 전환(transition)
  - 변환(transform)

### CSS3로 애니메이션 만들기
- HTML 태그의 모양 변화를 시간 단위로 설정
1. `@keyframes`로 시간별 모양 변화 만들기
```css
@keyframes textColorAnimation {
  0% { color: blue; }    /* 0% 대신 from 사용 가능 */
  30% { color: green; }
  100% { color: red; }   /* 100% 대신 to 사용 가능 */
}
```
2. 애니메이션 스타일 시트 작성
```css
span {
  animation-name: textColorAnimation;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
```
- `animation-name`: 애니메이션 코드 이름
- `animation-duration`: 1회 시간
- `animation-iteration-count`: 반복 횟수 (`infinite`는 무한 반복)

### 예제 5-12 애니메이션 만들기 연습
- `꽝!` 글자 크기를 3초에 걸쳐 500%에서 100%로 줄이는 애니메이션을 무한 반복

### 전환(transition)
- 태그에 적용된 CSS3 프로퍼티 값의 변화를 서서히 진행시켜 애니메이션 효과 생성
- 형식: `transition: 프로퍼티 시간;` (예: `transition: font-size 5s;`)
- `:hover` 등으로 값이 바뀔 때 전환 진행

### 예제 5-13 font-size에 대한 전환 효과 만들기
- `<span>`에 마우스를 올리면 5초 동안 글자가 서서히 500%로 확대

### 변환(transform)
- 텍스트나 이미지를 회전, 확대 등 다양한 기하학적 모양으로 출력
- 회전 각도 단위는 `deg`, 시계방향이 +
| 함수 | 효과 |
|---|---|
| `rotate(20deg)` | 회전 |
| `skew(0deg, -20deg)` | 기울임 |
| `translateY(100px)` | 이동 |
| `scale(3, 1)` | 확대/축소 (x축 3배, y축 1배) |

### 예제 5-14 다양한 변환 사례
- `rotate`, `skew`, `translate`, `scale`을 각각 적용
- `:hover`로 추가 변환, `:active`(마우스 누를 때)로 또 다른 변환

