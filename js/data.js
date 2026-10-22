// 차시 데이터 불러오기 + 진행도 저장 + 공통 함수
// 자료를 고치면 이 값을 바꾼다 (브라우저가 예전 파일을 쓰지 않게)
var DATA_VERSION = '20261022b';
// 새 차시는 data/weekNN-S.js 파일만 추가하면 자동으로 불러온다. (예: week05-2.js = 5주차 2차시)
// 같은 주차의 차시들은 WEEKS 안에서 하나로 묶인다.

// 과목 정보: 과목 폴더의 html이 data.js보다 먼저 window.COURSE를 정한다.
// 정하지 않으면 AI융합입문으로 동작한다.
var COURSE = window.COURSE || { name: 'AI융합입문', unit: '주차', store: 'ai-intro-progress' };

var MAX_WEEK = 16;
var MAX_SESSION = 3;
var SESSIONS = [];
var WEEKS = []; // [{ week: 4, sessions: [04-1, 04-2] }]

function addSession(session) {
  SESSIONS.push(session);
}

// data/week01-1.js ~ week16-3.js 를 모두 시도하고, 없는 파일은 건너뛴다.
function loadWeeks(done) {
  var left = MAX_WEEK * MAX_SESSION;
  function finish() {
    left--;
    if (left > 0) return;
    SESSIONS.sort(function (a, b) { return a.session < b.session ? -1 : 1; });
    SESSIONS.forEach(function (s) {
      var w = findWeek(s.week);
      if (!w) {
        w = { week: s.week, sessions: [] };
        WEEKS.push(w);
      }
      w.sessions.push(s);
    });
    done();
  }
  for (var i = 1; i <= MAX_WEEK; i++) {
    for (var j = 1; j <= MAX_SESSION; j++) {
      var s = document.createElement('script');
      s.src = 'data/week' + pad(i) + '-' + j + '.js?v=' + DATA_VERSION;
      s.onload = finish;
      s.onerror = finish;
      document.head.appendChild(s);
    }
  }
}

function findWeek(n) {
  for (var i = 0; i < WEEKS.length; i++) {
    if (WEEKS[i].week === n) return WEEKS[i];
  }
  return null;
}

// 한 주차의 모든 차시에서 같은 항목(quiz, terms, sources)을 모은다
function weekItems(week, key) {
  var list = [];
  week.sessions.forEach(function (s) { list = list.concat(s[key] || []); });
  return list;
}

// 페이지 안에서 차시끼리 id가 겹치지 않도록 붙이는 접두어 (예: s04-1-gd)
function sid(session, id) {
  return 's' + session.session + '-' + id;
}

function pad(n) {
  return n < 10 ? '0' + n : String(n);
}

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    // [[단어]] = PPT 빈칸이었던 중요한 단어 → 형광펜 표시
    .replace(/\[\[(.+?)\]\]/g, '<mark class="blank">$1</mark>');
}

// 형광펜 표시 없이 글자만 (퀴즈 문제·보기, 검색용)
function plain(text) {
  return String(text).replace(/\[\[(.+?)\]\]/g, '$1');
}

// 영어 원문이 없는 용어는 "영어 확인 필요" 표시
// 한국어로만 배우는 과목(COURSE.hideNeedEn)은 표시하지 않는다
var NEED_EN = COURSE.hideNeedEn ? '' : '<span class="tag warn">영어 확인 필요</span>';

function enOrCheck(en) {
  return en ? esc(en) : NEED_EN;
}

// ---- 진행도 (localStorage) ----
// { viewed: { "4": true }, quiz: { "w04-q01": true, "w04-q02": false } }
// quiz 값: 마지막으로 푼 결과 (true = 맞힘, false = 틀림)

var STORE_KEY = COURSE.store;

function loadProgress() {
  try {
    var p = JSON.parse(localStorage.getItem(STORE_KEY));
    if (p && p.viewed && p.quiz) return p;
  } catch (e) {}
  return { viewed: {}, quiz: {} };
}

function saveProgress(p) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(p));
  } catch (e) {}
}

function markViewed(weekNum) {
  var p = loadProgress();
  p.viewed[weekNum] = true;
  saveProgress(p);
}

function recordAnswer(qid, correct) {
  var p = loadProgress();
  p.quiz[qid] = correct;
  saveProgress(p);
}

// 한 주차(모든 차시)의 퀴즈 통계
function quizStats(week) {
  var p = loadProgress();
  var quiz = weekItems(week, 'quiz');
  var s = { total: quiz.length, correct: 0, wrong: 0 };
  quiz.forEach(function (q) {
    if (p.quiz[q.id] === true) s.correct++;
    if (p.quiz[q.id] === false) s.wrong++;
  });
  return s;
}

function resetProgress() {
  try {
    localStorage.removeItem(STORE_KEY);
  } catch (e) {}
}
