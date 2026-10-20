# 7장. 자바스크립트 코어 객체와 배열

## 강의 목표
1. 객체의 기본 개념을 간단히 이해한다.
2. 브라우저가 제공하는 기본 객체(코어 객체)들의 종류를 알고 사용할 수 있다.
3. Date 객체를 활용할 수 있다.
4. String 객체를 활용할 수 있다.
5. 자바스크립트 배열을 만들 수 있다.
6. Array 객체를 이용하여 배열을 만들고 활용할 수 있다.
7. Math 객체를 활용할 수 있다.

## 1. 객체 개념
- 현실 세계는 객체들의 집합 (사람, 책상, 자동차, TV 등)
- 객체는 자신만의 고유한 구성 속성을 가짐
  - 자동차: <색상:오렌지, 배기량:3000CC, 제조사:한성, 번호:서울1-1>
  - 사람: <이름:이재문, 나이:20, 성별:남, 주소:서울>
  - 은행계좌: <소유자:황기태, 계좌번호:111, 잔액:35000원>

### 자바스크립트 객체
- 여러 개의 프로퍼티(property)와 메소드로 구성
  - 프로퍼티: 객체의 고유한 속성(변수)
  - 메소드(method): 함수

```javascript
let account = {
    owner : "황기태",
    code : "111",
    balance : 35000,
    deposit : function() { … },
    withdraw : function() { … },
    inquiry : function() { … }
};
```

### 자바스크립트 객체 종류
- 자바스크립트는 객체 기반 언어 (객체 지향 언어 아님)

| 유형 | 설명 |
|---|---|
| 코어 객체 | 자바스크립트가 실행되는 어디서나 사용 가능한 기본(표준) 객체. `Array`, `Date`, `String`, `Math` 등. 웹 페이지와 서버 모두에서 사용 가능 |
| HTML DOM 객체 | HTML 문서의 각 태그를 객체화한 것. 문서의 내용과 모양 제어 목적. W3C 표준 |
| 브라우저 객체 | 브라우저 제어용 객체. BOM(Browser Object Model)을 따름. 비표준 |

## 2. 코어 객체
- 종류: `Array`, `Date`, `String`, `Math` 등
- 생성: `new` 키워드 이용
  - 생성되면 객체 내부에 프로퍼티와 메소드들이 존재
- 접근: 객체와 멤버 사이에 점(`.`) 연산자 이용

```javascript
let today = new Date();        // Date 타입 객체 생성
let msg = new String("Hello"); // String 타입 객체 생성

obj.프로퍼티 = 값;             // 프로퍼티 값 변경
변수 = obj.프로퍼티;           // 프로퍼티 값 읽기
obj.메소드(매개변수 값들);      // 메소드 호출
```

### 예제 7-1 자바스크립트 객체 생성 및 활용
- `Date` 객체로 현재 시간을 `toLocaleString()`으로 출력하고, `String` 객체의 내용과 `length`를 출력함.
- `length`는 읽기 전용이라 값을 대입하면 안 됨.

## 3. 자바스크립트 배열
- 여러 원소를 연속적으로 저장하고 전체를 하나의 단위로 다루는 데이터 구조
- 0부터 시작하는 인덱스로 각 원소 접근

```javascript
let cities = ["Seoul", "New York", "Paris"];
let name = cities[0];       // "Seoul"
cities[1] = "Gainesville";  // "New York" 자리에 저장
```

### 배열을 만드는 2가지 방법
- `[]`로 배열 만들기
- `Array` 객체로 배열 만들기

### []로 배열 만들기
- `[]` 안에 원소들의 초기 값 나열
- 배열 크기는 고정되지 않고 원소 추가 시 늘어남
- 주의: 현재 크기보다 큰 인덱스에 추가하면 중간 원소들이 `undefined`로 생김

```javascript
let plots = [-20, -5, 0, 15, 20];
plots[5] = 33;   // 크기 6
plots[6] = 22;   // 크기 7
plots[10] = 33;  // 크기 11, plots[7]~plots[9]는 undefined
```

### 예제 7-2 []로 배열 만들기
- 정수 5개를 `[]` 배열에 저장하고, 각 원소 값만큼 `*`를 출력함.

### Array로 배열 만들기
- 초기 값을 가진 배열: `new Array("월", "화", ..., "일")`
- 일정 크기의 배열 생성 후 나중에 값 저장: `new Array(7)`
- 빈 배열 생성 (원소 개수를 예상할 수 없을 때): `new Array()`
  - 원소를 넣을 때마다 크기가 자동으로 늘어남

### 배열의 원소 개수, length 프로퍼티
- 배열의 크기는 `Array` 객체의 `length` 프로퍼티
- `Array` 객체가 자동 관리하지만 사용자가 임의로 변경 가능
  - 늘리면 크기 증가, 줄이면 뒤쪽 원소 삭제

```javascript
let plots = [-20, -5, 0, 15, 20];
let m = plots.length;  // 5
plots.length = 10;     // 크기 10으로 늘어남
plots.length = 2;      // 처음 2개 외에는 모두 삭제
```

### 예제 7-3 Array 객체로 배열 만들기
- 빈 `Array`에 온도 6개를 저장하고 `length`만큼 반복해 평균 온도를 출력함.

### 배열의 특징
- `[]`로 만들어도 `Array` 객체로 다루어짐
- 한 배열에 여러 타입의 데이터 섞어 저장 가능 (숫자, 문자열, `Date` 객체, 함수 주소 등)

### Array 객체의 주요 메소드

| 메소드 | 설명 |
|---|---|
| `concat(arr)` | 배열을 연결한 새 배열 리턴 (원본 그대로) |
| `join(sep)` | 원소들을 `sep`로 연결한 문자열 리턴 |
| `reverse()` | 원소 순서를 거꾸로 (원본 자체 변경) |
| `slice(s, e)` | `s`부터 `e-1`까지의 새 배열 리턴 |
| `sort()` | 원소 정렬 (원본 자체 변경) |
| `toString()` | 원소 사이에 `,`를 넣은 문자열 리턴 |

### 예제 7-4 Array 객체의 메소드 활용
- `concat`, `join`, `reverse`, `slice`, `sort`, `toString`을 차례로 호출하며 결과 배열과 원본 배열의 변화를 비교 출력함.

## 4. Date 객체
- 시간 정보를 담는 객체
- 월은 0부터 시작 (2는 3월)

```javascript
let now = new Date();                // 현재 날짜와 시간으로 초기화
let startDay = new Date(2017, 2, 1); // 2017년 3월 1일
let date = now.getDate();            // 오늘 날짜
let hour = now.getHours();           // 지금 시간
```

| 메소드 | 리턴 값 |
|---|---|
| `getFullYear()` | 연도 |
| `getMonth()` | 월 (0~11, 출력 시 +1) |
| `getDate()` | 일 |
| `getHours()` / `getMinutes()` / `getSeconds()` | 시 / 분 / 초 |
| `getMilliseconds()` | 밀리초 |
| `toUTCString()` / `toLocaleString()` | 날짜·시간 문자열 |

### 예제 7-5 Date 객체 생성 및 활용
- 현재 시간의 연·월·일·시·분·초·밀리초를 각각 출력하고, 특정 날짜로 만든 `Date` 객체를 `toLocaleString()`으로 출력함.

### 예제 7-6 방문 시간에 따라 변하는 배경색 만들기
- 방문 시각의 초가 짝수면 `violet`, 홀수면 `lightskyblue`로 `document.body.style.backgroundColor`를 바꿈.

## 5. String 객체
- 문자열을 담기 위한 객체
- 일단 생성되면 수정 불가능
  - `concat()` 등을 호출해도 원본은 그대로, 새 String 객체가 리턴됨
- `new String("Hello")`와 `"Hello"` 모두 String 객체로 다루어짐

### String 객체의 특징
- `length` 프로퍼티: 문자열 길이, 읽기 전용
- `[]` 연산자로 배열처럼 각 문자 접근 (결과는 문자가 아니라 길이 1인 문자열)

```javascript
let n = "Thank you".length;  // 9
let c = new String("Hello")[0]; // "H"
```

### String 객체의 주요 메소드

| 메소드 | 설명 |
|---|---|
| `charAt(i)` | `i`번째 문자 |
| `concat(s, ...)` | 문자열 연결 |
| `indexOf(s)` | `s`가 처음 나오는 인덱스 (없으면 -1) |
| `slice(s, e)` | `s`부터 `e-1`까지 부분 문자열 |
| `substr(s, len)` | `s`부터 `len`개 부분 문자열 |
| `toUpperCase()` | 대문자로 변환 |
| `replace(a, b)` | `a`를 `b`로 바꾼 문자열 |
| `trim()` | 앞뒤 공백 제거 |
| `split(sep)` | `sep` 기준으로 나눈 배열 |

### 예제 7-7 String 객체의 메소드 활용
- `"Boys and Girls"`에 각종 String 메소드를 적용한 결과를 출력하고, 실행 후에도 원본 문자열은 변하지 않음을 확인함.

## 6. Math 객체
- 수학 계산용 프로퍼티와 메소드 제공
- `new Math()`로 생성하지 않고 바로 사용
- `Math.random()`: 0 이상 1 미만의 랜덤 실수
- `Math.floor(m)`: `m`의 소수점 이하를 제거한 정수

```javascript
let sq = Math.sqrt(4);       // 2
let area = Math.PI*2*2;      // 반지름 2인 원의 면적
let n = Math.floor(Math.random()*100); // 0~99 랜덤 정수
```

### 예제 7-8 Math를 이용한 구구단 연습
- `Math.random()`으로 1~9 난수 두 개를 만들어 구구단 문제를 내고, `prompt()`로 받은 답을 `eval()`로 계산한 정답과 비교함.

## 7. 사용자 객체 만들기
- 사용자가 새로운 타입의 객체를 작성할 수 있음
  1. 직접 객체 만들기: `new Object()` 이용, 리터럴 표기법 이용
  2. 객체의 틀(프로토타입)을 만들고 객체 생성하기
- 샘플: 은행 계좌를 표현하는 `account` 객체 (`owner`, `code`, `balance` 프로퍼티 + `inquiry()`, `deposit()`, `withdraw()` 메소드)

### new Object()로 객체 만들기
1. `new Object()`로 빈 객체 생성
2. 빈 객체에 프로퍼티 추가 (이름과 초기값 지정)
3. 빈 객체에 메소드 추가 (미리 작성한 함수를 메소드 이름에 지정)

```javascript
let account = new Object();
account.owner = "황기태";
account.balance = 35000;
account.deposit = deposit;  // 미리 작성한 함수 지정
```

- 메소드 안의 `this.balance`는 그 객체의 `balance` 프로퍼티

### 예제 7-9 new Object()로 계좌를 표현하는 account 객체 만들기
- `new Object()`로 만든 계좌 객체에 10000원 저금, 5000원 인출 후 잔액을 출력함.

### 리터럴 표기법으로 만들기
- 중괄호 `{}` 안에 프로퍼티와 메소드를 `이름 : 값` 형태로 지정
- 가장 많이 사용하는 방법

```javascript
let account = {
    owner : "황기태",
    balance : 35000,
    inquiry : function () { return this.balance; },
    deposit : function (money) { this.balance += money; }
};
```

### 예제 7-10 리터럴 표기법으로 계좌를 표현하는 account 객체 만들기
- 예제 7-9와 같은 계좌 객체를 리터럴 표기법으로 만들어 같은 결과를 출력함.

### 프로토타입
- 객체의 모양을 가진 틀
  - 붕어빵은 객체, 붕어빵을 찍어내는 틀이 프로토타입
  - C++, Java에서는 클래스라고 부름
- `Array`, `Date`, `String`은 자바스크립트가 제공하는 프로토타입
- 객체 생성 시 `new 프로토타입` 이용

### 프로토타입 만들기
- 프로토타입은 함수로 만듦 (생성자 함수라고도 함)
- `this.이름`으로 프로퍼티와 메소드 작성
- `new` 연산자로 객체 생성

```javascript
function Student(name, score) {
    this.univ = "한국대학";
    this.name = name;
    this.score = score;
    this.getGrade = function () {
        if(this.score > 80) return "A";
        else if(this.score > 60) return "B";
        else return "F";
    }
}
let kitae = new Student("황기태", 75);
```

### 예제 7-11 프로토타입으로 객체 만들기
- 생성자 함수 `Account`를 만들고 `new Account("황기태", "111", 35000)`으로 계좌 객체를 생성해 저금·인출 결과를 출력함.
