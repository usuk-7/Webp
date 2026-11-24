# Portfolio

경성대학교 소프트웨어학과 최우석의 포트폴리오 웹사이트입니다. 순수 HTML, CSS, JavaScript로 만들었고 빌드 과정이 없습니다.

## 실행

`index.html`을 브라우저로 열면 됩니다.

페이지 이동 전환 효과까지 보려면 로컬 서버로 여세요. VS Code의 Live Server 확장을 쓰거나 이 폴더에서 아래 명령을 실행한 뒤 `http://localhost:8000`에 접속합니다.

```bash
python -m http.server 8000
```

글꼴(Pretendard, JetBrains Mono)은 CDN에서 받아옵니다. 인터넷이 끊기면 시스템 글꼴로 표시됩니다.

## 페이지

| 파일 | 내용 |
|---|---|
| `index.html` | Home, About, Skills |
| `research.html` | 관심 분야, 연구 활동, 발표와 논문 |
| `projects.html` | 프로젝트 목록 |
| `project.html?id=<프로젝트 id>` | 프로젝트 상세 |
| `activities.html` | 활동 타임라인 |

Contact는 모든 페이지 하단에 있습니다.

## 폴더 구조

```
Portfolio/
├─ index.html, research.html, projects.html, project.html, activities.html
├─ css/style.css    디자인과 애니메이션
├─ js/data.js       사이트 내용
├─ js/main.js       data.js를 읽어 화면을 그리는 코드
└─ assets/          사진, 스크린샷, 이력서
```

## 내용 수정

`js/data.js`를 고치면 화면에 반영됩니다. 페이지 제목 아래의 안내 문구와 메뉴 이름은 `js/main.js`에 있습니다.

- **프로젝트 추가**: `projects` 배열에 항목을 추가합니다. 목록과 상세 페이지에 자동으로 나타납니다. `id`는 영문 소문자와 하이픈으로 적고 서로 겹치지 않게 합니다.
- **활동 추가**: `activities` 배열에 추가합니다. 날짜는 `"2026.03"`처럼 `YYYY.MM` 형식으로 적습니다. 최근 순으로 자동 정렬됩니다.
- **이미지**: `assets/`에 파일을 넣고 `photo`나 `src`에 `"assets/파일명.png"`처럼 적습니다. 스크린샷의 `src`를 비워 두면 안내 상자가 나옵니다.
- **이력서**: `assets/resume.pdf`로 저장합니다. 파일이 없으면 `resume`을 `""`로 바꿔 링크를 숨깁니다.
- **섹션 숨기기**: `research.experience`, `research.publications`와 각 프로젝트의 `problems`, `screenshots`는 `[]`로 두면 숨겨집니다.

## 애니메이션

- 페이지를 열면 제목, 소개, 본문이 차례로 나타납니다.
- Home의 코드 타이핑은 탭마다 처음 한 번만 실행됩니다.
- Activities의 타임라인은 최근 항목부터 나타납니다.
- 페이지 이동 전환은 View Transitions를 지원하는 브라우저에서만 동작합니다. 지원하지 않으면 바로 이동합니다.
- 시스템의 동작 줄이기 설정을 켜면 위 효과가 꺼집니다.

## 예시 데이터

`profile`을 제외한 프로젝트, 연구, 활동 등의 내용은 예시입니다. 프로젝트의 GitHub와 데모 링크도 예시 주소입니다. 공개하기 전에 실제 내용으로 바꾸세요.
