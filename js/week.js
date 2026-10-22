// 주차 요약 페이지: week.html?w=4

loadWeeks(function () {
  var page = document.getElementById('page');
  var w = findWeek(Number(getParam('w')));
  if (!w) {
    page.innerHTML = '<p>해당 ' + COURSE.unit + '가 없습니다. <a href="index.html">목록으로</a></p>';
    return;
  }
  document.title = w.week + COURSE.unit + ' 요약 · ' + COURSE.name;
  markViewed(w.week);

  page.innerHTML =
    '<p class="crumb"><a href="index.html">← ' + COURSE.unit + ' 목록</a></p>' +
    '<section class="hero">' +
      '<p class="session">' + w.week + COURSE.unit + '</p>' +
      '<h1>' + w.sessions.map(function (ss) { return esc(ss.title); }).join(' · ') + '</h1>' +
      '<div class="links">' +
        '<a class="btn" href="study.html?w=' + w.week + '&mode=cards">플래시카드</a>' +
        '<a class="btn" href="study.html?w=' + w.week + '&mode=quiz">퀴즈 풀기</a>' +
      '</div>' +
    '</section>' +
    renderToc(w) +
    w.sessions.map(renderSession).join('');

  // 이미지가 안 열리면(오프라인 등) 숨김
  page.querySelectorAll('figure img').forEach(function (img) {
    img.addEventListener('error', function () { img.closest('figure').hidden = true; });
  });

  // 검색에서 용어로 들어오면 접힌 용어 정리를 펼친다
  if (/-terms$/.test(location.hash)) {
    var box = document.querySelector(location.hash + ' + .terms-box');
    if (box) box.open = true;
  }

  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
});

// 차시 하나: 차시 제목 → 묶음별 카드 → 용어 정리 → 확인 필요 → 원본 자료
function renderSession(ss) {
  return '<section class="session-block">' +
    '<header class="session-head" id="' + sid(ss, 'top') + '">' +
      '<p class="session">' + esc(ss.session) + (ss.kind ? ' · ' + esc(ss.kind) : '') + '</p>' +
      '<h2>' + esc(ss.title) + examTag(ss.session) + '</h2>' +
      (ss.lecturer ? '<p class="muted small">' + esc(ss.lecturer) + '</p>' : '') +
      '<p>' + esc(ss.intro) + '</p>' +
    '</header>' +
    ss.groups.map(function (g) {
      return partTitle(sid(ss, g.id), esc(g.title) + examTag(ss.session + '#' + g.id)) +
        sectionsOf(ss, g.id).map(function (c) { return renderCard(c, ss); }).join('');
    }).join('') +
    partTitle(sid(ss, 'terms'), '용어 정리') +
    renderTerms(ss.terms) +
    partTitle(sid(ss, 'check'), '확인 필요') +
    renderCheck(ss.check) +
    partTitle(sid(ss, 'sources'), '원본 자료') +
    '<ol class="sources">' + ss.sources.map(function (src) {
      if (src.url) {
        return '<li><b>' + esc(src.title) + '</b><br><a href="' + esc(src.url) + '" target="_blank" rel="noopener">' + esc(src.url) + '</a></li>';
      }
      return '<li><b>' + esc(src.title) + '</b><br><code>' + esc(src.path || 'materials/week' + pad(ss.week) + '/' + src.file) + '</code></li>';
    }).join('') + '</ol>' +
  '</section>';
}

// 제목 옆 시험 표시 (data/exam-info.js가 있는 과목만)
function examTag(key) {
  var info = window.EXAM_INFO && window.EXAM_INFO[key];
  if (!info) return '';
  return ' <span class="exam-tag"><span class="imp ' + info.cls + '">' + esc(info.imp) + '</span>' +
    '<span class="cnt">' + (info.n ? '시험 ' + info.n + '문항' : '시험 범위 아님') + '</span></span>';
}

// 큰 제목 + 오른쪽 "↑ 목차" 링크
function partTitle(id, html) {
  return '<h2 id="' + id + '" class="part">' + html + '<a class="to-toc" href="#toc">↑ 목차</a></h2>';
}

function sectionsOf(ss, groupId) {
  return ss.sections.filter(function (c) { return c.group === groupId; });
}

function renderToc(w) {
  return '<nav class="toc" id="toc"><b>목차</b>' +
    w.sessions.map(function (ss) {
      return '<p class="toc-session"><a href="#' + sid(ss, 'top') + '">' + esc(ss.session) + ' ' + esc(ss.title) + '</a></p><ol>' +
        ss.groups.map(function (g) {
          return '<li><a href="#' + sid(ss, g.id) + '">' + esc(g.title) + '</a><span class="toc-sub">' +
            sectionsOf(ss, g.id).map(function (c) {
              return '<a href="#' + sid(ss, c.id) + '">' + esc(c.title) + '</a>';
            }).join(' · ') + '</span></li>';
        }).join('') +
        '<li><a href="#' + sid(ss, 'terms') + '">용어 정리</a></li>' +
        '<li><a href="#' + sid(ss, 'check') + '">확인 필요</a></li>' +
        '</ol>';
    }).join('') +
    '</nav>';
}

// 카드: 정의 → 공식 → 핵심 포인트 → 표 → 주의할 점 → 수업 예시 → 그림 → Key terms
function renderCard(s, ss) {
  var html = '<article class="card" id="' + sid(ss, s.id) + '">' +
    '<h3>' + esc(s.title) + '</h3>' +
    '<p class="definition">' + esc(s.definition) + '</p>';
  if (s.formula) html += renderFormula(s.formula);
  if (s.points) html += '<p class="label">핵심 포인트</p>' + renderList(s.points);
  if (s.table) html += renderTable(s.table);
  if (s.timeline) html += renderTimeline(s.timeline);
  if (s.cautions) html += '<div class="caution"><p class="label">주의할 점</p>' + renderList(s.cautions) + '</div>';
  if (s.example) html += renderExample(s.example, s.source);
  (s.figures || (s.figure ? [s.figure] : [])).forEach(function (f) {
    html += '<figure><img src="' + esc(f.src) + '" alt="' + esc(f.alt) + '" loading="lazy">' +
      (f.caption ? '<figcaption>' + esc(f.caption) + '</figcaption>' : '') + '</figure>';
  });
  html += '<p class="keyterms"><span class="label">Key terms</span> ' +
    s.keyterms.map(function (k) {
      return '<span class="kt">' + enOrCheck(k.en) + ' <span class="muted">' + esc(k.ko) + '</span></span>';
    }).join('') + '</p>';
  html += '<p class="src">출처: ' + esc(s.source) + '</p>';
  return html + '</article>';
}

function renderExample(ex, cardSource) {
  var html = '<div class="example"><p class="label">수업 예시 · ' + esc(ex.title) + '</p>';
  if (ex.formula) html += renderFormula(ex.formula);
  if (ex.points) html += renderList(ex.points);
  if (ex.table) html += renderTable(ex.table);
  if (ex.source && ex.source !== cardSource) html += '<p class="src">출처: ' + esc(ex.source) + '</p>';
  return html + '</div>';
}

// 공식은 한국어가 본문, 영어 원문은 시험 대비용으로 아래에 작게
function renderFormula(f) {
  return '<div class="formula"><p>' + esc(f.ko) + '</p><p class="formula-en">' + esc(f.en) + '</p></div>';
}

function renderList(items) {
  return '<ul>' + items.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>';
}

// 연표: 선 위에 동그라미로 연도 표시. [{ when, what, note }]
function renderTimeline(items) {
  return '<ol class="timeline">' + items.map(function (it) {
    return '<li><span class="tl-dot"></span><span class="tl-when">' + esc(it.when) + '</span>' +
      '<span class="tl-what">' + esc(it.what) + '</span>' +
      (it.note ? '<span class="tl-note">' + esc(it.note) + '</span>' : '') + '</li>';
  }).join('') + '</ol>';
}

function renderTable(t) {
  return '<table class="mini"><thead><tr>' +
    t.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') +
    '</tr></thead><tbody>' +
    t.rows.map(function (r) {
      return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>';
    }).join('') +
    '</tbody></table>';
}

// 확인 필요: [{ title, items: [...] }]
function renderCheck(groups) {
  return '<div class="check">' + groups.map(function (g) {
    return '<p class="label">' + esc(g.title) + '</p>' + renderList(g.items);
  }).join('') + '</div>';
}

// 용어 정리: 영어 용어 / 한국어 / 영어 정의 한 줄 (기본은 접힘)
// 한국어 설명(def)은 카드와 플래시카드 뒷면에서만 보여준다
function renderTerms(terms) {
  return '<details class="terms-box"><summary>용어 ' + terms.length + '개 펼치기</summary>' +
    '<dl class="terms">' + terms.map(function (t) {
      var name = (t.en || !COURSE.hideNeedEn)
        ? enOrCheck(t.en) + ' <span class="muted">/ ' + esc(t.ko) + '</span>'
        : esc(t.ko);
      // 영어 정의가 없는 과목은 한국어 설명을 보여 준다
      var def = t.def_en ? '“' + esc(t.def_en) + '”' : (COURSE.hideNeedEn && t.def ? esc(t.def) : '');
      return '<div><dt>' + name + '</dt>' + (def ? '<dd class="en-def">' + def + '</dd>' : '') + '</div>';
    }).join('') + '</dl></details>';
}
