// 메인 화면: 주차 목록, 진행도, 전체 검색

loadWeeks(function () {
  renderWeeks();
  renderOverall();
  document.getElementById('search').addEventListener('input', function () {
    renderResults(this.value.trim());
  });
  document.getElementById('reset').addEventListener('click', function () {
    if (confirm('본 ' + COURSE.unit + '와 퀴즈 기록을 모두 지울까요?')) {
      resetProgress();
      renderWeeks();
      renderOverall();
    }
  });
});

// 시험 문항 수·중요도 (과목 index.html에 window.EXAM_INFO가 있을 때만)
function examBadge(code) {
  var info = window.EXAM_INFO && window.EXAM_INFO[code];
  if (!info) return '';
  return '<span class="exam-badge"><span class="imp ' + info.cls + '">' + esc(info.imp) + '</span>' +
    (info.n ? '<b>' + info.n + '문항</b>' : '') + '</span>';
}

function renderWeeks() {
  var box = document.getElementById('weeks');
  if (WEEKS.length === 0) {
    box.innerHTML = '<p class="muted">data 폴더에 자료 파일이 없습니다.</p>';
    return;
  }
  var p = loadProgress();
  box.innerHTML = WEEKS.map(function (w) {
    var s = quizStats(w);
    var pct = s.total ? Math.round(s.correct / s.total * 100) : 0;
    var seen = p.viewed[w.week];
    return '' +
      '<article class="week-card">' +
        '<div class="week-num">' + w.week + '<small>' + COURSE.unit + '</small></div>' +
        '<div class="week-body">' +
          (seen ? '<p class="session"><span class="tag ok">봤음</span></p>' : '') +
          w.sessions.map(function (ss) {
            return '<h2><a href="week.html?w=' + w.week + '#' + sid(ss, 'top') + '">' +
              '<span class="code">' + esc(ss.session) + '</span>' + esc(ss.title) + '</a>' + examBadge(ss.session) + '</h2>';
          }).join('') +
          '<p class="muted small">자료 ' + weekItems(w, 'sources').length + '개 · 용어 ' + weekItems(w, 'terms').length + '개 · 퀴즈 ' + s.total + '문제</p>' +
          '<div class="bar" title="맞힌 문제 ' + s.correct + '/' + s.total + '"><i style="width:' + pct + '%"></i></div>' +
          '<p class="small">퀴즈 ' + s.correct + '/' + s.total + ' 맞힘' + (s.wrong ? ' · <span class="bad">틀림 ' + s.wrong + '</span>' : '') + '</p>' +
          '<div class="links">' +
            '<a href="week.html?w=' + w.week + '">요약</a>' +
            '<a href="study.html?w=' + w.week + '&mode=cards">플래시카드</a>' +
            '<a href="study.html?w=' + w.week + '&mode=quiz">퀴즈</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }).join('');
}

function renderOverall() {
  var p = loadProgress();
  var viewed = 0, correct = 0, total = 0;
  WEEKS.forEach(function (w) {
    if (p.viewed[w.week]) viewed++;
    var s = quizStats(w);
    correct += s.correct;
    total += s.total;
  });
  document.getElementById('overall').innerHTML =
    '<span><b>' + viewed + '</b> / ' + WEEKS.length + ' ' + COURSE.unit + ' 봤음</span>' +
    '<span><b>' + correct + '</b> / ' + total + ' 문제 맞힘</span>';
}

// ---- 검색 ----

function renderResults(query) {
  var box = document.getElementById('results');
  if (!query) { box.innerHTML = ''; return; }
  var q = query.toLowerCase();
  var hits = [];

  WEEKS.forEach(function (w) {
    var link = 'week.html?w=' + w.week;
    w.sessions.forEach(function (ss) {
      ss.sections.forEach(function (sec) {
        cardTexts(sec).forEach(function (t) {
          if (t && t.toLowerCase().indexOf(q) !== -1) {
            hits.push({ ss: ss, where: '개념 · ' + sec.title, text: t, href: link + '#' + sid(ss, sec.id) });
          }
        });
      });
      ss.terms.forEach(function (t) {
        var all = [t.en, t.ko, t.def, t.def_en].join(' ');
        if (all.toLowerCase().indexOf(q) !== -1) {
          hits.push({ ss: ss, where: '용어', text: (t.en || '(영어 확인 필요)') + ' / ' + t.ko + ': ' + t.def, href: link + '#' + sid(ss, 'terms') });
        }
      });
    });
  });

  if (hits.length === 0) {
    box.innerHTML = '<p class="muted">"' + esc(query) + '" 검색 결과가 없습니다.</p>';
    return;
  }
  box.innerHTML = '<p class="muted small">' + hits.length + '건</p><ul class="results">' +
    hits.map(function (h) {
      return '<li><a href="' + h.href + '">' +
        '<span class="small muted">' + esc(h.ss.session) + ' · ' + esc(h.where) + '</span>' +
        '<span>' + highlight(h.text, query) + '</span></a></li>';
    }).join('') + '</ul>';
}

// 카드 하나에서 검색할 문장들을 모은다
function cardTexts(s) {
  var texts = [s.title, s.definition].concat(s.points || [], s.cautions || []);
  function addFormula(f) { if (f) texts.push(f.ko, f.en); }
  function addTable(t) { if (t) t.rows.forEach(function (r) { texts.push(r.join(' : ')); }); }
  addFormula(s.formula);
  addTable(s.table);
  if (s.example) {
    texts.push('수업 예시 · ' + s.example.title);
    texts = texts.concat(s.example.points || []);
    addFormula(s.example.formula);
    addTable(s.example.table);
  }
  s.keyterms.forEach(function (k) { texts.push(k.en + ' ' + k.ko); });
  return texts;
}

function highlight(text, query) {
  text = plain(text);
  var i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return esc(text);
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + query.length)) + '</mark>' + esc(text.slice(i + query.length));
}
