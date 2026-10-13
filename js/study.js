// 공부 페이지: study.html?w=4&mode=cards|quiz|wrong
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
    document.getElementById('stage').innerHTML = '<p>해당 주차가 없습니다.</p>';
    return;
  }

  var label = weekParam ? targetWeeks[0].week + '주차' : '전체 주차';
  document.getElementById('heading').textContent = label + ' 공부하기';
  if (weekParam) {
    document.getElementById('crumb').innerHTML =
      '<a href="index.html">← 주차 목록</a> · <a href="week.html?w=' + weekParam + '">' + label + ' 요약</a>';
  }
  renderTabs();

  if (mode === 'quiz') startQuiz(allQuestions());
  else if (mode === 'wrong') startQuiz(wrongQuestions());
  else startCards();
});

function pageUrl(m) {
  return 'study.html?' + (weekParam ? 'w=' + weekParam + '&' : '') + 'mode=' + m;
}

function renderTabs() {
  var wrongCount = wrongQuestions().length;
  var tabs = [['cards', '플래시카드'], ['quiz', '퀴즈'], ['wrong', '틀린 문제 (' + wrongCount + ')']];
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

  function draw() {
    var q = questions[idx];
    // 보기 순서를 섞되, 원래 번호(i)를 기억해 정답을 판정한다
    var order = shuffle(q.choices.map(function (_, i) { return i; }));
    stage.innerHTML =
      '<p class="muted small">' + (idx + 1) + ' / ' + questions.length + ' · 맞힘 ' + score + '</p>' +
      '<article class="card quiz">' +
        '<h3>' + esc(q.q) + '</h3>' +
        '<div class="choices">' + order.map(function (i, n) {
          return '<button type="button" class="choice" data-i="' + i + '"><b>' + (n + 1) + '</b> ' + esc(q.choices[i]) + '</button>';
        }).join('') + '</div>' +
        '<div id="feedback"></div>' +
      '</article>';

    stage.querySelectorAll('.choice').forEach(function (btn) {
      btn.onclick = function () { answer(q, Number(btn.dataset.i)); };
    });
  }

  function answer(q, picked) {
    var ok = picked === q.answer;
    if (ok) score++;
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
      '<div class="explain ' + (ok ? 'ok' : 'no') + '">' +
        '<b>' + (ok ? '정답!' : '오답') + '</b> ' + esc(q.explain) +
        '<p class="src">출처: ' + esc(q.source) + '</p>' +
      '</div>' +
      '<button type="button" class="btn" id="next">' + (last ? '결과 보기' : '다음 문제 →') + '</button>';
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
        '<div class="row center">' +
          '<a class="btn ghost" href="' + pageUrl(mode) + '">다시 풀기</a>' +
          (wrongLeft ? '<a class="btn" href="' + pageUrl('wrong') + '">틀린 문제만 (' + wrongLeft + ')</a>' : '') +
        '</div>' +
      '</article>';
  }

  draw();
}
