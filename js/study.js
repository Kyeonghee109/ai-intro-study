// 공부 페이지: study.html?w=4&mode=cards|quiz|wrong|exam (exam = 중간고사 모의고사, 전체 주차만)
// w가 없으면 전체 주차를 대상으로 한다.

var weekParam = getParam('w');
var mode = getParam('mode') || 'cards';
var targetWeeks = [];

loadWeeks(function () {
  if (weekParam) {
    var w = findWeek(Number(weekParam));
    if (w) targetWeeks = [w];
  } else {
    targetWeeks = WEEKS;
  }
  if (targetWeeks.length === 0) {
    document.getElementById('stage').innerHTML = '<p>해당 ' + COURSE.unit + '가 없습니다.</p>';
    return;
  }

  var label = weekParam ? targetWeeks[0].week + COURSE.unit : '전체 ' + COURSE.unit;
  document.getElementById('heading').textContent = mode === 'exam' ? '중간고사 모의고사 (25문항)' : label + ' 공부하기';
  if (weekParam) {
    document.getElementById('crumb').innerHTML =
      '<a href="index.html">← ' + COURSE.unit + ' 목록</a> · <a href="week.html?w=' + weekParam + '">' + label + ' 요약</a>';
  }
  renderTabs();

  if (mode === 'exam') startQuiz(EXAM);
  else if (mode === 'quiz') startQuiz(allQuestions());
  else if (mode === 'wrong') startQuiz(wrongQuestions());
  else startCards();
});

function pageUrl(m) {
  return 'study.html?' + (weekParam ? 'w=' + weekParam + '&' : '') + 'mode=' + m;
}

function renderTabs() {
  var wrongCount = wrongQuestions().length;
  var tabs = [['cards', '플래시카드'], ['quiz', '퀴즈'], ['wrong', '틀린 문제 (' + wrongCount + ')']];
  if (!weekParam && typeof EXAM !== 'undefined') tabs.push(['exam', '모의고사']);
  document.getElementById('tabs').innerHTML = tabs.map(function (t) {
    return '<a href="' + pageUrl(t[0]) + '"' + (t[0] === mode ? ' class="on"' : '') + '>' + t[1] + '</a>';
  }).join('');
}

function allQuestions() {
  var list = [];
  targetWeeks.forEach(function (w) {
    weekItems(w, 'quiz').forEach(function (q) { list.push(q); });
  });
  return list;
}

function wrongQuestions() {
  var p = loadProgress();
  return allQuestions().filter(function (q) { return p.quiz[q.id] === false; });
}

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// ---- 플래시카드 ----

function startCards() {
  var cards = [];
  targetWeeks.forEach(function (w) {
    weekItems(w, 'terms').forEach(function (t) { cards.push({ week: w.week, term: t }); });
  });
  var idx = 0;
  var flipped = false;
  var stage = document.getElementById('stage');

  function draw() {
    var c = cards[idx];
    stage.innerHTML =
      '<p class="muted small center">' + (idx + 1) + ' / ' + cards.length + ' · 카드를 누르면 뒤집힙니다</p>' +
      '<button type="button" class="flash' + (flipped ? ' back' : '') + '" id="card">' +
        (flipped
          ? '<span class="small muted">' + enOrCheck(c.term.en) + '</span>' +
            '<span class="term-ko">' + esc(c.term.ko) + '</span>' +
            '<span class="def">' + esc(c.term.def) + '</span>' +
            (c.term.def_en ? '<span class="en-def">“' + esc(c.term.def_en) + '”</span>' : '')
          : (c.term.en
              ? '<span class="term">' + esc(c.term.en) + '</span>'
              // 영어 원문이 없는 용어는 앞면에 한국어와 "영어 확인 필요"를 보여 준다
              : '<span class="term">' + esc(c.term.ko) + '</span>' + NEED_EN)) +
      '</button>' +
      '<div class="row center">' +
        '<button type="button" class="btn ghost" id="prev">← 이전</button>' +
        '<button type="button" class="btn ghost" id="shuffle">섞기</button>' +
        '<button type="button" class="btn" id="next">다음 →</button>' +
      '</div>';
    document.getElementById('card').onclick = function () { flipped = !flipped; draw(); };
    document.getElementById('prev').onclick = function () { move(-1); };
    document.getElementById('next').onclick = function () { move(1); };
    document.getElementById('shuffle').onclick = function () { cards = shuffle(cards); idx = 0; flipped = false; draw(); };
  }

  function move(step) {
    idx = (idx + step + cards.length) % cards.length;
    flipped = false;
    draw();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') move(1);
    if (e.key === 'ArrowLeft') move(-1);
  });
  draw();
}

// ---- 퀴즈 (전체 / 틀린 문제만) ----

function startQuiz(questions) {
  var stage = document.getElementById('stage');
  if (questions.length === 0) {
    stage.innerHTML = mode === 'wrong'
      ? '<p class="empty">틀린 문제가 없습니다. 👍<br><a href="' + pageUrl('quiz') + '">퀴즈 풀러 가기</a></p>'
      : '<p class="empty">퀴즈가 없습니다.</p>';
    return;
  }
  var idx = 0;
  var score = 0;
  var results = []; // 모의고사 카테고리별 채점용

  function draw() {
    var q = questions[idx];
    var head = '<p class="muted small">' + (idx + 1) + ' / ' + questions.length + ' · 맞힘 ' + score + '</p>' +
      '<article class="card quiz">' +
        (q.cat ? '<p class="muted small">' + catLabel(q.cat) + '</p>' : '') +
        (q.answers ? '<p class="muted small"><span class="tag">주관식</span></p>' : '') +
        '<h3>' + esc(plain(q.q)) + '</h3>' +
        (q.q_ko ? '<p class="ko-sub">' + esc(q.q_ko) + '</p>' : '');

    // 주관식: 답을 직접 써 본다 (answers = 정답으로 인정할 말 목록)
    if (q.answers) {
      stage.innerHTML = head +
        '<form class="written" id="written">' +
          '<input id="written-in" type="text" autocomplete="off" placeholder="답을 써 보세요">' +
          '<button type="submit" class="btn">확인</button>' +
        '</form>' +
        '<div id="feedback"></div>' +
      '</article>';
      var input = document.getElementById('written-in');
      input.focus();
      document.getElementById('written').onsubmit = function (e) {
        e.preventDefault();
        input.disabled = true;
        e.target.querySelector('button').disabled = true;
        answer(q, isRight(input.value, q.answers), input.value);
      };
      return;
    }

    // 보기 순서를 섞되, 원래 번호(i)를 기억해 정답을 판정한다
    var order = shuffle(q.choices.map(function (_, i) { return i; }));
    stage.innerHTML = head +
        '<div class="choices">' + order.map(function (i, n) {
          return '<button type="button" class="choice" data-i="' + i + '"><b>' + (n + 1) + '</b> <span>' + esc(plain(q.choices[i])) +
            (q.choices_ko ? '<span class="ko-sub">' + esc(q.choices_ko[i]) + '</span>' : '') + '</span></button>';
        }).join('') + '</div>' +
        '<div id="feedback"></div>' +
      '</article>';

    stage.querySelectorAll('.choice').forEach(function (btn) {
      btn.onclick = function () { answer(q, Number(btn.dataset.i)); };
    });
  }

  // 띄어쓰기·문장부호·괄호 안 한자는 무시하고 비교한다
  function norm(s) {
    return String(s).replace(/\([^)]*\)/g, '').replace(/[\s.,·'"‘’“”!?~\-]/g, '').toLowerCase();
  }
  function isRight(text, answers) {
    var t = norm(text);
    return t !== '' && answers.some(function (a) { return norm(a) === t; });
  }

  function answer(q, picked, written) {
    var ok = q.answers ? picked === true : picked === q.answer;
    if (ok) score++;
    results.push({ cat: q.cat, ok: ok });
    recordAnswer(q.id, ok);
    renderTabs();

    stage.querySelectorAll('.choice').forEach(function (btn) {
      var i = Number(btn.dataset.i);
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('right');
      else if (i === picked) btn.classList.add('wrong');
    });
    var last = idx === questions.length - 1;
    document.getElementById('feedback').innerHTML =
      '<div class="explain ' + (ok ? 'ok' : 'no') + '" id="explain">' +
        '<b>' + (ok ? '정답!' : '오답') + '</b> ' +
        (q.answers ? '정답: <b>' + esc(q.answers[0]) + '</b><br>' : '') +
        esc(q.explain) +
        '<p class="src">출처: ' + esc(q.source) + '</p>' +
      '</div>' +
      (ok ? '' : conceptBox(q)) +
      // 주관식은 표현이 조금 달라도 맞을 수 있어서 스스로 맞음 처리할 수 있게 한다
      (q.answers && !ok && written && written.trim()
        ? '<button type="button" class="btn ghost" id="selfok">내 답도 맞아요</button> '
        : '') +
      '<button type="button" class="btn" id="next">' + (last ? '결과 보기' : '다음 문제 →') + '</button>';
    var selfok = document.getElementById('selfok');
    if (selfok) {
      selfok.onclick = function () {
        score++;
        results[results.length - 1].ok = true;
        recordAnswer(q.id, true);
        renderTabs();
        var box = document.getElementById('explain');
        box.className = 'explain ok';
        box.querySelector('b').textContent = '맞음 처리';
        selfok.remove();
      };
    }
    document.getElementById('next').onclick = function () {
      if (last) finish();
      else { idx++; draw(); }
    };
  }

  function finish() {
    var wrongLeft = wrongQuestions().length;
    stage.innerHTML =
      '<article class="card center">' +
        '<h3>' + questions.length + '문제 중 ' + score + '문제 맞힘</h3>' +
        (mode === 'exam' ? examBreakdown(results) : '') +
        '<div class="row center">' +
          '<a class="btn ghost" href="' + pageUrl(mode) + '">다시 풀기</a>' +
          (wrongLeft ? '<a class="btn" href="' + pageUrl('wrong') + '">틀린 문제만 (' + wrongLeft + ')</a>' : '') +
        '</div>' +
      '</article>';
  }

  draw();
}

// ---- 모의고사 ----

function catLabel(no) {
  var c = EXAM_CATS.filter(function (c) { return c.no === no; })[0];
  return '①②③④⑤⑥⑦⑧⑨⑩'.charAt(no - 1) + ' ' + esc(c.title);
}

function examBreakdown(results) {
  return '<table class="breakdown"><tr><th>범위</th><th>맞힘</th></tr>' +
    EXAM_CATS.map(function (c) {
      var mine = results.filter(function (r) { return r.cat === c.no; });
      var ok = mine.filter(function (r) { return r.ok; }).length;
      return '<tr' + (ok < mine.length ? ' class="miss"' : '') + '><td>' + catLabel(c.no) + '</td><td>' + ok + ' / ' + mine.length + '</td></tr>';
    }).join('') + '</table>';
}

// 틀렸을 때: 문제와 연결된 개념 카드(q.card)를 바로 보여 준다
// q.card는 '카드id'(그 차시 문제) 또는 '04-1:카드id'(모의고사 문제)
function findCard(q) {
  var parts = q.card.split(':');
  var sess = parts.length > 1 ? parts[0] : null;
  var cardId = parts[parts.length - 1];
  for (var i = 0; i < WEEKS.length; i++) {
    var ss = WEEKS[i].sessions;
    for (var j = 0; j < ss.length; j++) {
      if (sess ? ss[j].session !== sess : !(ss[j].quiz || []).some(function (x) { return x.id === q.id; })) continue;
      var c = (ss[j].sections || []).filter(function (c) { return c.id === cardId; })[0];
      return c ? { week: WEEKS[i].week, session: ss[j], card: c } : null;
    }
  }
  return null;
}

function conceptBox(q) {
  var f = q.card && findCard(q);
  if (!f) return '';
  var c = f.card;
  return '<div class="concept">' +
    '<p class="label">개념 다시 보기 · ' + esc(c.title) + '</p>' +
    '<p class="concept-def">' + esc(c.definition) + '</p>' +
    (c.formula ? '<p class="concept-formula">' + esc(c.formula.ko) + '</p>' : '') +
    (c.points ? '<ul>' + c.points.slice(0, 3).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
    (c.cautions ? '<ul class="concept-caution">' + c.cautions.map(function (p) { return '<li>⚠ ' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
    '<a href="week.html?w=' + f.week + '#' + sid(f.session, c.id) + '" target="_blank" rel="noopener">개념 카드 전체 보기 (그림·표 포함) →</a>' +
  '</div>';
}
