# 1장. 웹 프로그래밍과 HTML5 개요

## 강의 목표
1. 웹의 기본 개념과 구조 이해
2. 웹 서버와 웹 브라우저의 상호 관계 이해
3. 웹 문서와 기존 전자 문서의 차이점 이해
4. 웹 페이지 구성 3요소(HTML, CSS, 자바스크립트) 이해
5. HTML5의 목적과 기능 이해
6. HTML5로 웹 페이지 작성 과정과 필요한 도구 이해

## 1. 웹의 기본 개념

- 웹의 목적: 여러 컴퓨터에서 문서(웹 문서)를 공유하고 보는 것
- 웹 구조: 인터넷을 활용해 거미줄처럼 연결된 정보 소통 망 (World Wide Web)
- 웹 구성: 웹 서버 + 웹 클라이언트
  - 웹 서버: 웹 사이트를 탑재한 컴퓨터. HTML 문서/이미지/동영상 저장·관리, 클라이언트 요청 시 문서 전송 (예: 구글, 네이버)
  - 웹 클라이언트: 사용자 인터페이스 담당. 서버에 문서 요청 후 받아서 출력 (웹 브라우저)
- 동작: 클라이언트가 "웹 문서 요청" → 서버가 "웹 문서 전송"

## 2. 인터넷과 웹은 다르다

- 인터넷: 웹 개념 이전부터 존재한 컴퓨터 연결 네트워크 (1969년 미 국방성 ARPA에서 시작). IP 주소로 컴퓨터 구분
  - 인터넷 활용 서비스: 이메일, 뉴스, FTP, 채팅, 메신저, P2P, 스트리밍, 인터넷 전화, WWW 등
- 웹(WWW): 인터넷을 활용하는 응용 서비스 중 하나. 서버-브라우저로 정보를 전달·공유
- 비유: 인터넷 = 고속도로, 웹 = 고속도로를 이용한 물류 산업

## 3. 웹 브라우저

- 종류: Microsoft Edge, Opera, Firefox, Chrome, Safari, Internet Explorer 등
- 역사(연도순): WorldWideWeb(1990, Tim Berners-Lee 개발, 이후 Nexus로 개명) → Mosaic → Netscape Navigator(1993) → Internet Explorer(1995) → Opera(1996) → Netscape Communicator → Mozilla Firefox(2002) → Safari(2003) → Chrome(2008) → Microsoft Edge(2015)
- 특징 요약
  - Netscape Navigator: 최초의 GUI 브라우저(1993, Marc Andreessen)
  - Internet Explorer: MS 개발(1995), 윈도우 끼워팔기로 Netscape 잠식
  - Opera: 오페라 소프트웨어 개발(1994), 가볍고 빠르나 사용자 적음
  - Safari: 애플 개발(2003), Mac/iOS용
  - Firefox: Mozilla 재단 개발(2002), W3C 표준 충실
  - Chrome: 구글 개발(2008), 현재 점유율 1위
  - Edge: MS 개발(2015), IE 후속
- 2021년 기준 시장 점유율: 데스크톱·모바일 모두 Chrome이 압도적 1위

## 4. 웹 사이트 구축과 서버

- 웹 사이트 구축: 웹 서버 소프트웨어 설치 → 웹 페이지/이미지/DB 저장 → 웹 서버 응용프로그램 개발·설치
- 웹 서버 소프트웨어 기능: 브라우저 요청 해석 → 필요한 응용프로그램 실행 → 결과를 브라우저로 전송
- 웹 서버 소프트웨어 종류: Apache, IIS(MS, Windows NT 전용), nginx, GWS(구글)
- 웹 서버 응용프로그램(서버 측 로직) 개발 언어: 서버용 자바스크립트, JSP, Java(서블릿), C/C++, PHP, Perl, Python 등

## 5. 웹 문서 vs 전자 문서

- 전자 문서: 워드/한글 등, 보통 문서 전체가 파일 하나에 저장 (페이지 분할 안 함)
- 웹 문서: HTML로 작성, 페이지 단위로 파일을 나누어 저장하고 하이퍼링크로 서로 연결
  - 웹 페이지에는 텍스트만 저장, 이미지·동영상은 별도 파일로 저장 후 링크
  - 읽는 순서를 사용자가 하이퍼링크 클릭으로 결정 (전자 문서는 저자가 순서 결정)

## 6. URI, URL, URN

- URI(Uniform Resource Identifier): 인터넷 자원을 식별하는 표준. URL과 URN을 모두 포함하는 상위 개념
- URL(Uniform Resource Locator): 자원의 "위치"로 식별. 어디에 있는지(주소)를 나타냄. 웹에서 가장 많이 씀
- URN(Uniform Resource Name): 자원의 "이름"으로 식별. 위치와 무관하게 고유한 이름 부여 (예: `urn:isbn:0451450523`)
- 관계: URI = URL + URN. URL은 "어디서 찾는가", URN은 "무엇인가"에 초점. 실무에서는 URL을 URI와 거의 같은 뜻으로 씀

### URL 구조

```
http://www.oracle.com:80/technetwork/java/index.html
```
- 프로토콜: HTTP, https, file, ftp, telnet, mailto, news 등
- 서버주소: 웹 페이지를 가진 컴퓨터의 인터넷 주소(IP)
- TCP/IP 포트번호: 프로토콜별로 다름 (HTTP=80, telnet=23)
- 경로명: 서버 내 파일의 폴더 경로
- 파일이름: 웹 페이지 HTML 파일 이름

## 7. HTTP 통신 과정

1. 웹 서버 연결 요청
2. 웹 서버가 연결 수락
3. HTML 페이지 요청
4. 서버가 저장된 HTML 페이지 읽기
5. HTML 페이지 전송
6. 브라우저가 HTML 페이지 해독 및 출력
- 1~5번 과정을 HTTP 세션이라 함

## 8. 웹의 시작과 성공 요인

- Tim Berners-Lee: 1989년 웹 개념 제안, 1990년 WorldWideWeb 프로젝트 시작 (HTTP 모델, HTML, 하이퍼링크 개념, 최초의 웹 서버/브라우저 개발)
- 웹 성공 요인
  1. 만들기 쉬운 웹 문서: HTML 태그가 단순·직관적, 텍스트 편집기로 편집 가능
  2. 효율적인 HTTP 통신: 전송 완료 후 연결 종료 → 서버 부담 감소
  3. 서버·브라우저 작업 분담: 서버는 전송만, 출력은 브라우저 담당 → 많은 동시 접속자 지원
- 오늘날 웹은 TV, 셋톱, 로봇, 무선 공유기 등 다양한 기기 제어에도 활용됨

## 9. 웹 페이지 구성 3요소

| 요소 | 역할 |
|---|---|
| HTML | 구조와 내용 |
| CSS | 모양(스타일) |
| JavaScript | 행동/응용프로그램 |

- 3요소를 분리하여 개발하는 것이 원칙 (예제: Elvis Presley 페이지로 HTML → CSS → JavaScript 순서로 완성해가는 과정 시연)

## 10. HTML5 개요

- HTML: 1990년 Tim Berners-Lee가 정의한 표준화된 태그 기반 웹 문서 작성 언어
- HTML/CSS/JS/브라우저 발전 연대표: HTML 1.0(1991) → HTML5 논의 시작(2007) → HTML5 표준(2014). CSS는 CSS1(1996)→CSS3(2012). JS는 1.0(1996)→ES6(2015)→ES12(2021)
- HTML5 출현 배경
  1. 비표준 기술(Active-X, 플러그인, 플래시 등) 난립 → 브라우저 간 비호환성
  2. 인터넷 기기 다양화(PC, 모바일) → 기존 웹 페이지가 모바일에서 미작동
  3. 모바일·PC 동시 지원 가능한 범용 웹 표준 필요성 대두
- HTML5 표준: W3C와 WHATWG(하이퍼텍스트 워킹 그룹)가 제정
  - 구조=HTML5, 모양=CSS3, 행동=JavaScript로 분리 개발
  - 문서 모양 관련 태그/속성 폐기, 플랫폼·장치 의존성 제거(Active-X, 플래시 불필요)
  - 웹 애플리케이션 작성 지원 자바스크립트 API 표준화
- HTML5 주요 기능: 웹 폼, 오디오/비디오, 캔버스(Canvas), SVG, 웹 스토리지, 웹 SQL DB, 인덱스 DB API, 파일 입출력, 위치정보 API(Geolocation), 웹 워커, 웹 소켓, 오프라인 웹 애플리케이션

## 11. HTML5 문서 작성 실습 환경

- 텍스트 편집기: 메모장/한글/워드도 가능, 추천 편집기는 Atom, Eclipse, Sublime Text
- 파일은 `.html`로 저장, 기본 문자셋은 UTF-8 (HTML/CSS/JS 모두 UTF-8로 저장)
- WYSIWYG 편집기: Dreamweaver, CoffeeCup, FCKeditor 등 (출력 모습 보며 작성, 오류 체크 가능)
- 실습 절차(Sublime Text 예시)
  1. Sublime Text 설치(sublimetext.com) 및 실행
  2. HTML 문서 작성 (`<!DOCTYPE html>` 구조)
  3. `.html` 확장자로 저장 (예: `C:\web\hello.html`)
  4. 저장된 파일을 브라우저로 더블클릭하여 실행 결과 확인
- 디버깅: 크롬에서 마우스 오른쪽 클릭 → "검사" (또는 F12) → 개발자 도구 열기
  - Sources 탭에서 소스 코드 확인
  - 특정 라인에 중단점(breakpoint) 설정 가능 → 자바스크립트 실행을 해당 라인에서 멈추고 한 줄씩(step) 실행하며 디버깅
