// 중간고사 모의고사 (10/23 지필, 객관식 25문항)
// 카테고리 번호와 문항 수는 교수님이 알려 준 시험 범위를 따른다.
// 수업 자료가 영어인 차시(01-2, 02-1, 04-1, 05-1, 06-1, 07-1)는 문제·보기를 영어로, 한국어 자료(04-2, 06-2)는 한국어로 쓴다. 해설은 모두 한국어.
var EXAM_CATS = [
  { no: 1, title: '데이터과학의 이해', n: 3 },
  { no: 2, title: '탐색적 데이터 분석과 시각화의 이해', n: 3 },
  { no: 3, title: '인공지능의 이해', n: 4 },
  { no: 4, title: '경사하강법', n: 2 },
  { no: 5, title: '유전자알고리듬', n: 2 },
  { no: 6, title: '입자군집최적화', n: 1 },
  { no: 7, title: '기술통계의 이해', n: 3 },
  { no: 8, title: '차원축소의 이해', n: 1 },
  { no: 9, title: '분류 모델', n: 3 },
  { no: 10, title: '회귀 모델', n: 3 }
];

var EXAM = [
  // ① 데이터과학의 이해
  { id: 'exam-q01', cat: 1, q: "According to the lecture, Data Science is a process that extracts what from Big Data?", choices: ["Actionable Insight", "Raw Data", "Moore's law", "Expert Systems"], answer: 0, explain: '두 번째 보기는 매카시의 AI 정의, 세 번째는 무어의 법칙이에요.', source: '01-2 데이터과학의 이해' },
  { id: 'exam-q02', cat: 1, q: "In John Snow's cholera Spot Map, which statement is NOT correct?", choices: ["It proved that bad smells (Miasma theory) caused cholera", "It marked cholera deaths in Soho, London, in 1854", "Snow suspected contaminated drinking water", "The map persuaded officials to remove the Broad Street pump handle"], answer: 0, explain: '나쁜 냄새가 원인이라는 건 당시의 믿음이었고, 스노우는 오염된 식수를 의심했어요.', source: '01-2 데이터과학의 이해' },
  { id: 'exam-q03', cat: 1, q: "Two variables move together. What can we conclude?", choices: ["Correlation alone does not show causality", "One variable must be the cause of the other", "The variables have no relationship", "Causality is always shown by a Spot Map"], answer: 0, explain: '함께 움직인다고 해서 한쪽이 다른 쪽의 원인이라는 뜻은 아니에요.', source: '01-2 상관관계와 인과관계' },

  // ② 탐색적 데이터 분석과 시각화
  { id: 'exam-q04', cat: 2, q: "What is the difference between a Bar chart and a Histogram?", choices: ["A bar chart shows a Categorical variable; a histogram shows the distribution of a Numerical variable", "A bar chart shows change over time; a histogram shows the relationship of two variables", "They use the same kind of variable and only differ in color", "A histogram is used only for Nominal variables"], answer: 0, explain: '막대 모양은 같아도 다루는 변수가 달라요. 시간 변화는 선 그래프, 두 수치형 변수의 관계는 산점도예요.', source: '05-1 막대그래프와 히스토그램' },
  { id: 'exam-q05', cat: 2, q: "Which graph best shows the Direction, Spread, and Exceptions between two Numerical variables?", choices: ["Scatterplot", "Boxplot", "Bar chart", "Line graph"], answer: 0, explain: '산점도에서는 점 하나가 관측치 하나예요.', source: '05-1 산점도' },
  { id: 'exam-q06', cat: 2, q: "What problem does a Truncated bar axis (no Zero baseline) cause?", choices: ["Differences look bigger than they are, so bar lengths cannot be compared honestly", "The bars cannot be drawn", "The Mean changes", "Outliers disappear"], answer: 0, explain: '막대그래프는 0에서 시작하는 축이라야 길이를 정직하게 비교할 수 있어요.', source: '05-1 축이 주는 인상' },

  // ③ 인공지능의 이해
  { id: 'exam-q07', cat: 3, q: "Which statement about Machine Learning and Deep learning is correct?", choices: ["Deep learning is a part of Machine Learning that uses multi-layer neural networks", "Machine Learning is a part of Deep learning", "They are unrelated fields", "Deep learning works only with hand-written rules"], answer: 0, explain: '머신러닝은 경험으로 나아지는 알고리즘이고, 딥러닝은 그중 여러 층 신경망을 써요.', source: '02-1 머신러닝과 딥러닝' },
  { id: 'exam-q08', cat: 3, q: "Almost all AI used today, including the deep learning models in this course, is which type?", choices: ["Narrow AI (ANI)", "General AI (AGI)", "Super AI (ASI)", "Self-Aware"], answer: 0, explain: '지금 쓰이는 AI는 거의 다 정해진 일을 잘하는 좁은 AI예요.', source: '02-1 능력에 따른 AI 종류' },
  { id: 'exam-q09', cat: 3, q: "Which formula gives Precision?", choices: ["TP / (TP + FP)", "TP / (TP + FN)", "(TP + TN) / total", "TN / (TN + FP)"], answer: 0, explain: '재현율은 TP/(TP+FN), 정확도는 맞힌 예측 전체 비율이에요.', source: '02-1 모델 평가' },
  { id: 'exam-q10', cat: 3, q: "Which statement about Self-Attention in Transformers is correct?", choices: ["Every token looks at every other token to learn what is important", "Tokens are processed one by one in a recurrent loop", "It finds local features with pooling", "Positional encoding is not needed"], answer: 0, explain: 'Query·Key·Value로 어텐션 점수를 계산하고, 순서 정보는 위치 인코딩으로 넣어요.', source: '02-1 트랜스포머와 셀프 어텐션' },

  // ④ 경사하강법
  { id: 'exam-q11', cat: 4, q: "In gradient descent (GD), which way does a variable move in each update?", choices: ["Opposite to the gradient", "In the same direction as the gradient", "In a random direction", "Always toward zero"], answer: 0, explain: '비용을 줄이려고 경사의 반대 방향으로 조금씩 움직여요.', source: '04-1 경사하강법' },
  { id: 'exam-q12', cat: 4, q: "Next value = current value − step size × gradient. What decides how far a variable actually moves?", choices: ["Both the step size and the gradient", "Only the step size", "Only the gradient", "The fitness"], answer: 0, explain: '움직이는 양은 스텝 크기 × 경사라서 둘 다에 달려 있어요.', source: '04-1 스텝 크기' },

  // ⑤ 유전자알고리듬
  { id: 'exam-q13', cat: 5, q: "In a genetic algorithm (GA), which operations create the next generation?", choices: ["selection, crossover, mutation", "centering, projection, sorting", "gradient, update, evaluation", "inertia term, cognitive term, social term"], answer: 0, explain: '부모를 고르고(선택) 섞고(교차) 바꿔서(변이) 다음 세대를 만들어요.', source: '04-1 선택·교차·변이' },
  { id: 'exam-q14', cat: 5, q: "Which statement about a genetic algorithm (GA) is correct?", choices: ["It evaluates candidates by fitness without derivatives", "It improves only one candidate at a time", "It moves opposite to the gradient", "A chromosome has only one gene"], answer: 0, explain: 'GA는 후보 여러 개를 세대마다 진화시키고, 염색체는 유전자 여러 개로 이루어져요.', source: '04-1 유전 알고리즘 개요' },

  // ⑥ 입자군집최적화
  { id: 'exam-q15', cat: 6, q: "In particle swarm optimization (PSO), what does a particle use to decide its next velocity?", choices: ["Its personal best (pbest) and the global best (gbest) of the swarm", "The derivatives of the objective function", "Crossover of two parents", "Eigenvectors of a covariance matrix"], answer: 0, explain: '입자는 자기 경험과 무리 전체의 최고 기록을 함께 참고하고, 도함수는 쓰지 않아요.', source: '04-1 입자 군집 최적화' },

  // ⑦ 기술통계
  { id: 'exam-q16', cat: 7, q: '이상치에 가장 강건한 중심 지표는?', choices: ['중앙값', '평균', '범위', '분산'], answer: 0, explain: '중앙값은 가운데 값을 고르기 때문에 큰 값 하나에 덜 흔들려요.', source: '04-2 중앙값' },
  { id: 'exam-q17', cat: 7, q: '표본 분산을 n이 아니라 n − 1로 나누는 이유는?', choices: ['표본 분산의 기대값이 모분산과 같아지도록', '계산을 더 빠르게 하려고', '분산이 항상 1이 되도록', '이상치를 없애려고'], answer: 0, explain: 'n − 1로 나누면 표본 분산의 장기 평균이 모분산과 같아져요.', source: '04-2 n − 1로 나누는 이유' },
  { id: 'exam-q18', cat: 7, q: '상관계수에 대한 설명으로 옳지 않은 것은?', choices: ['r = 0이면 두 변수는 반드시 독립이다', '−1에서 1 사이 값을 가진다', '선형 관계의 방향과 강도를 나타낸다', '두 편차 벡터 사이 각도의 코사인이다'], answer: 0, explain: 'r = 0이면 선형 관계가 없다는 것만 말할 수 있어요. 곡선 관계는 있을 수 있어요.', source: '04-2 상관계수를 읽을 때 주의할 점' },

  // ⑧ 차원축소
  { id: 'exam-q19', cat: 8, q: '주성분 분석(PCA)에 대한 설명으로 옳은 것은?', choices: ['분산이 가장 큰 방향을 새 축으로 찾고, 주성분끼리는 서로 수직이다', '분산이 가장 작은 방향을 첫 주성분으로 고른다', '원래 피처 중 일부를 골라내는 피처 선택 방법이다', '차원을 줄여도 정보가 전혀 사라지지 않는다'], answer: 0, explain: 'PCA는 피처 추출 방법이고, 고유값이 큰 공분산 행렬의 고유 벡터부터 주성분으로 골라요.', source: '06-2 주성분 분석' },

  // ⑨ 분류
  { id: 'exam-q20', cat: 9, q: "In binary logistic regression, what is the order of making a prediction?", choices: ["linear score → sigmoid probability → threshold", "sigmoid probability → linear score → threshold", "threshold → linear score → softmax", "linear score → softmax → one-hot encoding"], answer: 0, explain: '이름에 회귀가 있지만 분류기예요. 점수 z를 시그모이드로 확률로 바꾸고 임계값으로 판정해요.', source: '07-1 이진 로지스틱 회귀' },
  { id: 'exam-q21', cat: 9, q: "The threshold is lowered and only false positives (FP) increase. What happens?", choices: ["Precision goes down and recall stays the same", "Both precision and recall go up", "Only recall goes down", "Accuracy always goes up"], answer: 0, explain: 'FP는 정밀도의 분모에만 들어가요. 재현율 식 TP/(TP+FN)에는 FP가 없어요.', source: '07-1 정밀도 · 재현율' },
  { id: 'exam-q22', cat: 9, q: "How does a decision tree choose a split?", choices: ["It picks the split that lowers the weighted impurity (Gini impurity) of the child nodes the most", "It picks the split that adds the most training data", "It uses two or more features in one split", "It picks a random split"], answer: 0, explain: '분할마다 특성 하나만 써서 결정 영역이 직사각형이 돼요.', source: '07-1 지니 불순도' },

  // ⑩ 회귀
  { id: 'exam-q23', cat: 10, q: "Why does ordinary least squares (OLS) use squared residuals?", choices: ["So early and late errors do not cancel each other out", "To reduce the effect of large errors", "To make all coefficients zero", "So the line passes through every point"], answer: 0, explain: '제곱하면 부호가 사라지고, 오히려 크게 틀린 기록의 영향이 커져요.', source: '06-1 최소제곱법' },
  { id: 'exam-q24', cat: 10, q: "Which statement about polynomial regression is correct?", choices: ["The curve can bend, but it is still in the linear-model family", "Its parameter is inside an exponent, so it is nonlinear", "A higher polynomial degree lowers the risk of overfit", "It predicts a class label"], answer: 0, explain: '차수가 높을수록 곡선이 많이 휘어서 과대적합 위험이 커져요.', source: '06-1 다항 회귀' },
  { id: 'exam-q25', cat: 10, q: "Which data is used to choose the polynomial degree or the ridge penalty?", choices: ["validation data", "training data", "only the test set", "all data at once"], answer: 0, explain: '따로 떼어 둔 검증 데이터로 후보를 비교해서 고르고, 테스트 데이터는 마지막 평가에 써요.', source: '06-1 검증 데이터' }
];
