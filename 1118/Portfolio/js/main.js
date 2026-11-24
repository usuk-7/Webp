// 공통 header/footer와 각 페이지 내용을 data.js(SITE)로부터 그린다.
(function () {
  const P = SITE.profile;
  const page = document.body.dataset.page;
  const main = document.getElementById("main");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tags = (items) => `<ul class="tags">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  const paras = (list) => list.map((t) => `<p>${esc(t)}</p>`).join("");

  // ---------- header / footer ----------
  const NAV = [
    { id: "home", href: "index.html", label: "Home" },
    { id: "research", href: "research.html", label: "Research" },
    { id: "projects", href: "projects.html", label: "Projects" },
    { id: "activities", href: "activities.html", label: "Activities" },
  ];
  const activeNav = page === "project" ? "projects" : page;

  document.getElementById("site-header").outerHTML = `
    <a class="skip-link" href="#main">본문으로 건너뛰기</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html">Portfolio</a>
        <nav aria-label="주요 메뉴">
          <ul class="nav-list">
            ${NAV.map((n) => n.id === activeNav
              ? `<li><a href="${n.href}" aria-current="page">${n.label}<span class="nav-bar" aria-hidden="true"></span></a></li>`
              : `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
          </ul>
        </nav>
      </div>
    </header>`;

  const contacts = [
    P.email && `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`,
    P.github && `<a href="${esc(P.github)}">GitHub</a>`,
    P.blog && `<a href="${esc(P.blog)}">블로그</a>`,
    P.resume && `<a href="${esc(P.resume)}" download>이력서 PDF</a>`,
  ].filter(Boolean);

  document.getElementById("site-footer").outerHTML = `
    <footer class="site-footer" id="contact">
      <div class="wrap footer-inner">
        <h2 class="footer-title">Contact</h2>
        <ul class="contact-list">${contacts.map((a) => `<li>${a}</li>`).join("")}</ul>
        <p class="copyright">© ${new Date().getFullYear()} ${esc(P.name)}</p>
      </div>
    </footer>`;

  // ---------- pages ----------
  const pages = {
    home() {
      const facts = [["학교", P.school], ["전공", `${P.major} ${P.year}학년`], ["관심 분야", P.interests.join(", ")], ["요즘", P.now]];
      return `
        <section class="hero">
          <div class="hero-text">
            <h1 class="hero-title">${esc(P.headline)}</h1>
            <p class="lead">${esc(P.lead)}</p>
            <div class="actions">
              <a class="btn btn-primary" href="projects.html">프로젝트 보기</a>
              ${P.github ? `<a class="btn" href="${esc(P.github)}">GitHub 방문</a>` : ""}
            </div>
          </div>
          <div class="editor" aria-hidden="true">
            <div class="editor-bar"><span class="editor-dots"><i></i><i></i><i></i></span><span class="editor-file">student.js</span></div>
            <pre class="editor-code"><code id="code"></code></pre>
          </div>
        </section>

        <section class="section" id="about">
          <h2 class="section-title">About</h2>
          <div class="about-grid">
            <div class="prose">
              ${P.photo ? `<img class="photo" src="${esc(P.photo)}" alt="${esc(P.name)} 사진">` : ""}
              ${paras(SITE.about)}
            </div>
            <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          </div>
        </section>

        <section class="section" id="skills">
          <h2 class="section-title">Skills</h2>
          <div class="skill-groups">
            ${SITE.skills.map((g) => `<div class="skill-group"><h3>${esc(g.group)}</h3>${tags(g.items)}</div>`).join("")}
          </div>
        </section>`;
    },

    research() {
      const R = SITE.research;
      return `
        <header class="page-head">
          <h1 class="page-title">Research</h1>
          <p class="lead">${esc(R.intro)}</p>
        </header>

        <section class="section">
          <h2 class="section-title">Interests</h2>
          <div class="interest-grid">
            ${R.interests.map((i) => `<article class="interest"><h3>${esc(i.title)}</h3><p>${esc(i.body)}</p></article>`).join("")}
          </div>
        </section>

        ${R.experience.length ? `
        <section class="section">
          <h2 class="section-title">Experience</h2>
          <ul class="rows">
            ${R.experience.map((e) => `
              <li class="row">
                <p class="row-meta">${esc(e.period)}</p>
                <div class="row-body"><h3>${esc(e.title)}</h3><p class="muted">${esc(e.org)}</p><p>${esc(e.body)}</p></div>
              </li>`).join("")}
          </ul>
        </section>` : ""}

        ${R.publications.length ? `
        <section class="section">
          <h2 class="section-title">Publications</h2>
          <ul class="rows">
            ${R.publications.map((p) => `
              <li class="row">
                <p class="row-meta">${esc(p.year)}</p>
                <div class="row-body"><h3>${esc(p.title)}</h3><p class="muted">${esc(p.authors)}</p><p>${esc(p.venue)}</p></div>
              </li>`).join("")}
          </ul>
        </section>` : ""}`;
    },

    projects() {
      return `
        <header class="page-head">
          <h1 class="page-title">Projects</h1>
          <p class="lead">수업 과제, 동아리, 개인 공부로 만든 프로젝트입니다. 제목을 누르면 과정을 자세히 볼 수 있습니다.</p>
        </header>
        <ul class="rows rows-projects">
          ${SITE.projects.map((p) => `
            <li class="row">
              <p class="row-meta">${esc(p.period)}<br>${esc(p.team)}</p>
              <div class="row-body">
                <h2 class="row-title"><a href="project.html?id=${encodeURIComponent(p.id)}">${esc(p.title)}</a></h2>
                <p>${esc(p.summary)}</p>
                ${tags(p.stack)}
              </div>
            </li>`).join("")}
        </ul>`;
    },

    project() {
      const id = new URLSearchParams(location.search).get("id");
      const p = SITE.projects.find((x) => x.id === id);
      if (!p) {
        return `
          <header class="page-head">
            <h1 class="page-title">프로젝트를 찾을 수 없습니다</h1>
            <p class="lead">주소의 id가 data.js에 있는 프로젝트 id와 같은지 확인하세요.</p>
            <div class="actions"><a class="btn btn-primary" href="projects.html">프로젝트 목록 보기</a></div>
          </header>`;
      }
      const links = [
        p.links.github && `<a class="btn btn-primary" href="${esc(p.links.github)}">GitHub 저장소</a>`,
        p.links.demo && `<a class="btn" href="${esc(p.links.demo)}">데모 보기</a>`,
      ].filter(Boolean).join("");
      const meta = [["기간", esc(p.period)], ["인원", esc(p.team)], ["역할", esc(p.role)], ["기술 스택", tags(p.stack)]];
      return `
        <p class="back"><a href="projects.html">프로젝트 목록으로</a></p>
        <header class="page-head">
          <h1 class="page-title">${esc(p.title)}</h1>
          <p class="lead">${esc(p.summary)}</p>
          ${links ? `<div class="actions">${links}</div>` : ""}
        </header>

        <dl class="meta-grid">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>

        <section class="section">
          <h2 class="section-title">Overview</h2>
          <div class="prose">${paras(p.overview)}</div>
        </section>

        ${p.problems.length ? `
        <section class="section">
          <h2 class="section-title">Problems &amp; solutions</h2>
          <div class="ps-list">
            ${p.problems.map((x) => `
              <article class="ps">
                <h3>${esc(x.title)}</h3>
                <dl>
                  <div><dt>문제</dt><dd>${esc(x.problem)}</dd></div>
                  <div><dt>해결</dt><dd>${esc(x.solution)}</dd></div>
                </dl>
              </article>`).join("")}
          </div>
        </section>` : ""}

        ${p.screenshots.length ? `
        <section class="section">
          <h2 class="section-title">Screenshots</h2>
          <div class="shots">
            ${p.screenshots.map((s) => `
              <figure class="shot">
                ${s.src ? `<img src="${esc(s.src)}" alt="${esc(s.caption)}">` : `<div class="shot-empty">assets/ 폴더에 이미지를 넣고<br>data.js의 src에 경로를 적으세요</div>`}
                <figcaption>${esc(s.caption)}</figcaption>
              </figure>`).join("")}
          </div>
        </section>` : ""}`;
    },

    activities() {
      const sorted = [...SITE.activities].sort((a, b) => b.date.localeCompare(a.date));
      const years = [...new Set(sorted.map((a) => a.date.slice(0, 4)))];
      let n = 0; // 전체 항목 순번: 등장 순서(--i)에 쓴다
      return `
        <header class="page-head">
          <h1 class="page-title">Activities</h1>
          <p class="lead">수상, 동아리, 대외활동, 교육 이력을 최근 순으로 정리했습니다.</p>
        </header>
        <div class="timeline">
          ${years.map((y) => {
            const items = sorted.filter((a) => a.date.startsWith(y));
            return `
            <section class="tl-year">
              <h2 class="tl-year-title" style="--i:${n}">${y}</h2>
              <ol class="tl-list" style="--i:${n}; --n:${items.length}">
                ${items.map((a) => `
                  <li class="tl-item" style="--i:${n++}">
                    <p class="tl-month">${Number(a.date.slice(5, 7))}월</p>
                    <div>
                      <span class="badge">${esc(a.type)}</span>
                      <h3>${esc(a.title)}</h3>
                      <p class="muted">${esc(a.org)}</p>
                      <p>${esc(a.body)}</p>
                    </div>
                  </li>`).join("")}
              </ol>
            </section>`;
          }).join("")}
        </div>`;
    },
  };

  main.innerHTML = pages[page]();

  // ---------- 페이지 등장: 제목(0) → 소개·버튼(1) → 본문(2). 동작 줄이기 설정 시 CSS가 끈다 ----------
  const stage = (els, step) => els.forEach((el) => { el.classList.add("enter"); el.style.setProperty("--step", step); });
  stage(main.querySelectorAll(".back, .page-title, .hero-title"), 0);
  stage(main.querySelectorAll(".page-head > :not(.page-title), .hero-text > :not(.hero-title)"), 1);
  stage(main.querySelectorAll(".hero > .editor, main > :not(.page-head, .hero, .back, .timeline)"), 2);

  // ---------- 첫 화면 에디터: 처음 한 번만 타이핑 ----------
  if (page === "home") {
    const segs = [];
    const add = (c, t) => segs.push({ c, t });
    const value = (v) => {
      if (typeof v === "number") add("n", String(v));
      else if (Array.isArray(v)) { add("", "["); v.forEach((x, i) => { add("s", `"${x}"`); if (i < v.length - 1) add("", ", "); }); add("", "]"); }
      else add("s", `"${v}"`);
    };
    add("k", "const");
    add("", " student = {\n");
    for (const k of ["name", "school", "major", "year", "interests", "now"]) {
      add("", `  ${k}: `);
      value(P[k]);
      add("", ",\n");
    }
    add("", "};");

    const code = document.getElementById("code");
    const spans = segs.map((s) => {
      const el = document.createElement("span");
      if (s.c) el.className = "tok-" + s.c;
      code.appendChild(el);
      return el;
    });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // 타이핑은 탭마다 처음 한 번만. 저장소를 못 쓰면 매번 타이핑한다.
    let typed = false;
    try { typed = sessionStorage.getItem("typed") === "1"; sessionStorage.setItem("typed", "1"); } catch (e) {}
    if (reduce || typed) {
      spans.forEach((el, i) => (el.textContent = segs[i].t));
    } else {
      // 타이핑 중 높이가 늘어나 아래 내용이 밀리지 않도록 미리 높이를 잡는다.
      code.style.minHeight = `${segs.map((s) => s.t).join("").split("\n").length * 1.7}em`;
      code.classList.add("is-typing");
      let i = 0, j = 0;
      const tick = () => {
        if (i >= segs.length) return code.classList.remove("is-typing");
        spans[i].textContent += segs[i].t[j++];
        if (j >= segs[i].t.length) { i++; j = 0; }
        setTimeout(tick, 18);
      };
      setTimeout(tick, 550); // 왼쪽 글 등장(약 0.5초)이 끝난 뒤 시작
    }
  }
})();
