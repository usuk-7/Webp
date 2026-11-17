  # 10장. 윈도우와 브라우저 관련 객체

## 강의 목표
1. BOM, 즉 브라우저 관련 객체 종류를 안다.
2. window 객체를 이해하고 윈도우 열기, 닫기 등을 제어할 수 있다.
3. window 객체의 타이머 기능을 활용할 수 있다.
4. window 객체를 이용하여 프린트, 윈도우 움직이기 등 다양한 제어를 할 수 있다.
5. location 객체로 윈도우에 로드된 문서의 주소를 알고 새 문서를 로드할 수 있다.
6. navigator 객체를 통해 현재 브라우저에 관한 정보를 알아낼 수 있다.
7. screen 객체를 통해 현재 스크린 장치의 해상도를 알아낼 수 있다.
8. history 객체를 이용하여 지금까지 윈도우에 로드된 웹 페이지로 이동할 수 있다.

## 1. 브라우저 관련 객체 개요

### BOM(Browser Object Model)
- 자바스크립트로 브라우저를 제어하기 위해 지원되는 객체들
- HTML 페이지의 내용과 관계없음 (HTML 문서 내용 관련 객체는 DOM)
- BOM의 국제 표준이 없음
  - 브라우저마다 BOM 객체가 조금씩 다름
  - 같은 이름의 BOM 객체라도 프로퍼티와 메소드가 다를 수 있음

### 브라우저 공통 BOM 객체

| 객체 | 기능 |
| --- | --- |
| `window` | 브라우저 윈도우 모양 제어, 새 윈도우 열기/닫기 |
| `navigator` | 브라우저에 대한 다양한 정보 제공 |
| `history` | 윈도우에 로드한 URL 리스트(히스토리) 관리 |
| `location` | 윈도우에 로드된 HTML 페이지의 URL 관리 |
| `screen` | 브라우저가 실행되는 스크린 장치 정보 제공 |

- `window` 아래에 `navigator`, `history`, `location`, `screen`, `document`가 있고, `document` 아래가 DOM 트리(`html` → `head`, `body` ...)

## 2. window 객체

### window 객체란
- 열려 있는 브라우저 윈도우나 탭 윈도우의 속성을 나타내는 객체
- 윈도우나 탭마다 별도의 window 객체 생성
- window 객체가 생성되는 3가지 경우
  - 브라우저가 새 웹 페이지를 로드할 때
  - `<iframe>` 태그 하나당 하나
  - 자바스크립트로 `window.open()` 호출 시
- 자바스크립트에서 접근: `window`, `window.self`, `self`

### 윈도우 모양 관련 프로퍼티
- 바: `menubar`, `titlebar`, `locationbar`, `personalbar`(bookmarks), `scrollbar`, `statusbar`, `toolbar`
- 크기: `innerWidth`, `innerHeight`, `outerWidth`, `outerHeight`
- 위치: `screenX`, `screenY`

## 3. 윈도우 열기와 닫기

### window.open()
```
window.open(sURL, sWindowName, sFeature)
```
- `sURL`: 출력할 웹 페이지 주소 (생략 가능)
- `sWindowName`: 새로 여는 윈도우 이름 (생략 가능)
- `sFeature`: 윈도우 모양, 크기 등 속성 문자열. 빈칸 없이 콤마로 구분 (생략 가능)

| 윈도우 이름 | 의미 |
| --- | --- |
| `_blank` | 이름 없는 새 윈도우를 열고 로드 |
| `_parent` | 현재 윈도우(프레임)의 부모 윈도우에 로드 |
| `_self` | 현재 윈도우에 로드 |
| `_top` | 브라우저 윈도우(최상위)에 로드 |

### 윈도우 열기 사례
```
window.open("sample.html", "myWin", "toolbar=yes");   // 툴바만 있는 myWin
window.open("sample.html", "_self");                  // 현재 윈도우
window.open("sample.html", "_blank");                 // 이름 없는 새 윈도우
window.open("http://www.naver.com", "myWin", "left=10,top=10,width=300,height=400");
window.open();                                        // 빈 윈도우
```

### 윈도우 이름의 역할
- 이름 없는 윈도우: 버튼 누를 때마다 새 윈도우가 열림
- 이름 있는 윈도우(`myWin`)
  - 안 열려 있으면 새로 열림
  - 이미 열려 있으면 그 윈도우에 페이지가 로드됨 (공유)

### 윈도우 닫기
- `window.close()`: 현재 윈도우 닫기. 보안 이유로 브라우저에 따라 작동 안 함
- 자신이 연 윈도우는 대부분 닫기 허용
```
let win = window.open();
win.close();
```

### 예제 10-1 window.open()으로 윈도우 열기
- 링크 3개를 누르면 `myWin` 이름의 윈도우(300,300 위치, 400x300)를 공유하며 각 사이트를 출력함.

### 예제 10-2 윈도우 닫기
- 현재 윈도우 닫기와 자신이 연 윈도우 닫기를 비교함. `newWin.closed`로 이미 닫혔는지 검사함.

## 4. window 객체의 타이머 활용
- 1회 실행: `setTimeout()` / `clearTimeout()`
- 반복 실행: `setInterval()` / `clearInterval()`

### setTimeout()/clearTimeout()
```
let timerID = setTimeout("myAlert(3)", 3000); // 3초 후 1회 호출
clearTimeout(timerID);                        // 타이머 해제
```

### 예제 10-3 setTimeout()로 웹 페이지 자동 연결
- 이미지에 마우스를 5초간 올리고 있으면 네이버로 이동, 그 전에 벗어나면 `clearTimeout()`으로 취소함.

### setInterval()/clearInterval()
```
let timerID = setInterval("f()", 1000); // 1초마다 f() 호출
clearInterval(timerID);                 // 타이머 해제
```

### 예제 10-4 setInterval()로 텍스트 회전
- 200ms마다 첫 글자를 맨 뒤로 보내 텍스트를 회전시키고, 클릭하면 `clearInterval()`로 멈춤.

## 5. 윈도우 위치 및 크기 조절

| 메소드 | 의미 |
| --- | --- |
| `moveBy(dx, dy)` | 현재 위치에서 상대 이동 |
| `moveTo(x, y)` | 스크린의 (x, y)로 이동 |
| `resizeBy(dw, dh)` | 현재 크기에서 상대 조절 |
| `resizeTo(w, h)` | 지정 크기로 조절 |

- `window.`, `self.` 생략 가능

### 예제 10-5 윈도우의 위치와 크기 조절
- 버튼으로 윈도우를 상하좌우 이동, 크기 확대/축소함. 보안상 `window.open()`으로 연 윈도우에서만 작동함.

## 6. 웹 페이지 스크롤
- `scrollBy(dx, dy)`: 상대 스크롤. `scrollBy(0, 10)`은 스크롤 다운(페이지가 위로 올라감)
- `scrollTo(x, y)`: 문서의 (x, y)가 윈도우 왼쪽 위에 오도록 스크롤

### 예제 10-6 1초마다 10픽셀씩 자동 스크롤
- `onload`에서 `setInterval()`로 1초마다 `scrollBy(0, 10)`을 호출해 자동 스크롤함. (시 본문 생략)

## 7. 웹 페이지 프린트
- `window.print()`: 인쇄 다이얼로그를 열고 확인 시 인쇄

### 예제 10-7 웹 페이지 프린트
- 링크(`javascript:window.print()`)와 버튼으로 프린트를 실행함.

### onbeforeprint와 onafterprint
1. window 객체의 `onbeforeprint` 리스너 호출
2. 웹 페이지 프린트 (브라우저가 페이지를 이미지로 만들어 프린터로 전송)
3. window 객체의 `onafterprint` 리스너 호출

- 활용: 화면엔 안 보이는 회사 로고를 인쇄 때만 출력
  - `onbeforeprint`: 로고를 `display: block`으로
  - `onafterprint`: 로고를 `display: none`으로

### 예제 10-8 onbeforeprint와 onafterprint 이벤트 활용
- 평소엔 숨긴 로고 이미지를 인쇄 직전에 보이게, 인쇄 후 다시 숨김. `z-index: -1`로 문서 밑에 깔음.

## 8. location 객체
- 윈도우에 로드된 웹 페이지의 URL 정보를 나타내는 객체

### URL 구성과 프로퍼티
```
http://www.mysite.com:8080/content/URL분석.html#label1
```
| 프로퍼티 | 값 |
| --- | --- |
| `href` | URL 전체 |
| `protocol` | `http:` |
| `hostname` | `www.mysite.com` |
| `port` | `8080` |
| `host` | `www.mysite.com:8080` |
| `pathname` | `/content/URL분석.html` |
| `hash` | `#label1` |
| `search` | `?query=javascript` (쿼리 부분) |

### 웹 페이지 로드
```
window.location = "http://www.naver.com";
window.location.href = "http://www.naver.com";
window.location.assign("http://www.naver.com");
window.location.replace("http://www.naver.com");

let win = window.open();          // 새 윈도우에 로드
win.location = "http://www.naver.com";
```

### 예제 10-9 location 객체로 웹 사이트 접속
- `<select>`에서 고른 사이트 URL을 `window.location`에 대입해 접속함.

## 9. navigator 객체
- 현재 작동 중인 브라우저에 대한 정보를 나타내는 객체 (모두 읽기 전용)

| 프로퍼티 | 설명 |
| --- | --- |
| `appCodeName` | 브라우저 코드 이름 |
| `appName` | 브라우저 이름 |
| `appVersion` | 플랫폼과 버전 정보 |
| `platform` | 운영체제 플랫폼 이름 |
| `product` | 브라우저 엔진 이름 |
| `userAgent` | HTTP 헤더 user-agent 필드 값. 서버가 클라이언트를 인식하는 용도 |
| `vendor` | 브라우저 제작 회사 이름 |
| `language` | 브라우저 언어 (`en-US`, `ko-KR`) |
| `onLine` | 온라인이면 true |
| `plugins` | 설치된 플러그인 컬렉션 |
| `cookieEnabled` | 쿠키 사용 가능하면 true |
| `geolocation` | 위치 정보 제공 객체 |

### 예제 10-10 navigator로 브라우저 정보 출력
- navigator 프로퍼티들과 플러그인 목록(이름, 설명, 파일명)을 `<div>`에 출력함.

## 10. screen 객체
- 브라우저가 실행되는 스크린 장치 정보를 담는 객체 (읽기 전용)

| 프로퍼티 | 설명 |
| --- | --- |
| `availHeight` | 작업 표시줄 등 제외한 출력 가능 높이 |
| `availWidth` | 작업 표시줄 등 제외한 출력 가능 폭 |
| `pixelDepth` | 한 픽셀 색을 나타내는 비트 수 |
| `colorDepth` | `pixelDepth`와 같음. 대부분 브라우저가 지원해 이쪽 권장 |
| `height` | 스크린 수직 픽셀 수 |
| `width` | 스크린 수평 픽셀 수 |

### 예제 10-11 스크린 장치에 관한 정보 출력
- screen 프로퍼티를 출력함. `height`, `width`는 브라우저 확대/축소가 100%여야 정확함.

## 11. history 객체
- 윈도우에서 방문한 웹 페이지 리스트(히스토리)를 나타내는 객체
- 프로퍼티: `length` (히스토리 엔트리 수)

| 메소드 | 설명 |
| --- | --- |
| `back()` | 이전 페이지로. 브라우저 back 버튼과 같음 |
| `forward()` | 다음 페이지로. forward 버튼과 같음 |
| `go(n)` | 현재에서 n만큼 상대 이동 |

```
history.back();     // = history.go(-1)
history.forward();  // = history.go(1)
```

### 예제 10-12 history 객체 활용
- 버튼으로 `back()`, `forward()`, `go(-1)`을 호출해 페이지를 이동함.
