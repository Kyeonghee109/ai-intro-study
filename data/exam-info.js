// 중간고사 파트별 문항 수·중요도 (AI융합입문만). 'NN-N'은 차시, 'NN-N#그룹id'는 차시 안 파트.
// 중요도: 4~5문항 최상, 3문항 상, 2문항 중, 1문항 하.
window.EXAM_INFO = {
  '01-2': { n: 3, imp: '상', cls: 'imp-hi', note: '데이터과학의 이해' },
  '02-1': { n: 4, imp: '최상', cls: 'imp-top', note: '인공지능의 이해 (02-2 포함)' },
  '03-1': { n: 0, imp: '제외', cls: 'imp-out', note: '시험 범위 아님' },
  '04-1': { n: 5, imp: '최상', cls: 'imp-top', note: '경사하강법 2 · 유전자알고리듬 2 · 입자군집최적화 1' },
  '04-2': { n: 3, imp: '상', cls: 'imp-hi', note: '기술통계의 이해' },
  '05-1': { n: 3, imp: '상', cls: 'imp-hi', note: '05-1 · 05-2 합쳐서 3문항' },
  '05-2': { n: 3, imp: '상', cls: 'imp-hi', note: '05-1 · 05-2 합쳐서 3문항' },
  '06-1': { n: 3, imp: '상', cls: 'imp-hi', note: '회귀 모델' },
  '06-2': { n: 1, imp: '하', cls: 'imp-lo', note: '차원축소의 이해' },
  '04-1#g-gd': { n: 2, imp: '중', cls: 'imp-mid', note: '경사하강법' },
  '04-1#g-ga': { n: 2, imp: '중', cls: 'imp-mid', note: '유전자알고리듬' },
  '04-1#g-pso': { n: 1, imp: '하', cls: 'imp-lo', note: '입자군집최적화' },
  '07-1': { n: 3, imp: '상', cls: 'imp-hi', note: '분류 모델' }
};
