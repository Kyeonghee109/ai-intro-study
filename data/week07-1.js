addSession({
  "week": 7,
  "session": "07-1",
  "title": "분류 모델을 구축하고 데이터 판별하기",
  "intro": "미리 정한 클래스 중 하나를 고르는 분류를 배워요. 로지스틱 회귀, 소프트맥스, 결정 트리로 분류하고, 혼동 행렬과 정밀도·재현율로 평가해요.",
  "sources": [
    { "index": "01", "title": "What Is Classification", "file": "01_what_is_classification.ipynb" },
    { "index": "02", "title": "Binary Logistic Regression", "file": "02_binary_logistic_regression.ipynb" },
    { "index": "03", "title": "Multiclass Logistic Regression", "file": "03_multiclass_logistic_regression.ipynb" },
    { "index": "04", "title": "Decision Trees", "file": "04_decision_trees.ipynb" },
    { "index": "05", "title": "Evaluating Classification", "file": "05_evaluating_classification.ipynb" }
  ],
  "groups": [
    { "id": "g-cls", "title": "분류란?" },
    { "id": "g-binary", "title": "이진 로지스틱 회귀" },
    { "id": "g-multi", "title": "다중 클래스 로지스틱 회귀" },
    { "id": "g-tree", "title": "결정 트리" },
    { "id": "g-eval", "title": "분류 평가" }
  ],
  "sections": [
    {
      "id": "classification", "group": "g-cls", "title": "분류",
      "source": "01_what_is_classification.ipynb",
      "definition": "미리 정한 클래스 중에서 레이블 하나를 예측해요.",
      "table": {
        "head": ["", "예측하는 것"],
        "rows": [
          ["회귀", "숫자 (예: 사과 무게 180 g)"],
          ["분류", "레이블 (예: 사과)"]
        ]
      },
      "points": [
        "지도 분류에서는 훈련 예시마다 입력 특성과 정답 레이블이 짝지어 있어요.",
        "특성은 색이나 모양처럼 잴 수 있는 성질이에요.",
        "레이블은 크기 같은 측정값이 아니라 과일이 무엇인지 기록한 거예요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "색상 각도와 길이/너비 비율 두 가지를 재요.",
          "둥근 과일은 비율이 1에 가깝고, 긴 과일은 더 커요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/07-1_Classification/assets/01_classification_tasks.png", "alt": "A fruit sorter predicts weight for regression, apple or orange for binary classification, and apple, orange or banana for multiclass classification." },
      "keyterms": [
        { "en": "classification", "ko": "분류" },
        { "en": "supervised classification", "ko": "지도 분류" },
        { "en": "feature", "ko": "특성" },
        { "en": "label", "ko": "레이블" }
      ]
    },
    {
      "id": "class-types", "group": "g-cls", "title": "분류의 종류",
      "source": "01_what_is_classification.ipynb",
      "definition": "고를 수 있는 레이블 개수와 방식에 따라 나뉘어요.",
      "table": {
        "head": ["종류", "고르는 방식"],
        "rows": [
          ["이진 분류", "레이블 2개 중 하나 (정상 / 스팸)"],
          ["다중 클래스 분류", "여러 개 중 하나 (사과 / 오렌지 / 바나나)"],
          ["다중 레이블 분류", "한 항목에 태그 여러 개"]
        ]
      },
      "keyterms": [
        { "en": "binary classification", "ko": "이진 분류" },
        { "en": "multiclass classification", "ko": "다중 클래스 분류" },
        { "en": "multilabel classification", "ko": "다중 레이블 분류" }
      ]
    },
    {
      "id": "argmax", "group": "g-cls", "title": "확률과 예측 클래스",
      "source": "01_what_is_classification.ipynb",
      "definition": "분류기는 클래스마다 확률을 추정하고, 가장 큰 클래스를 예측해요.",
      "formula": { "ko": "예측 클래스 = 확률이 가장 큰 클래스", "en": "ŷ = argmax_k p_k" },
      "points": [
        "ŷ는 예측한 레이블이에요.",
        "argmax는 확률 값이 아니라 그 확률을 가진 클래스를 돌려줘요."
      ],
      "keyterms": [
        { "en": "probability", "ko": "확률" },
        { "en": "predicted label", "ko": "예측 레이블" },
        { "en": "arg max", "ko": "최댓값을 주는 클래스" }
      ]
    },
    {
      "id": "decision-boundary", "group": "g-cls", "title": "결정 경계",
      "source": "01_what_is_classification.ipynb",
      "definition": "모델이 서로 다른 클래스로 나누는 입력들 사이의 경계예요.",
      "points": [
        "경계를 넘으면 예측 클래스가 바뀌어요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "배경 색 영역은 소프트맥스 모델의 예측이에요.",
          "색 점은 훈련 과일이고, 별은 새 과일이에요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/07-1_Classification/assets/01_decision_regions.png", "alt": "Apple, orange and banana training points occupy different regions of the hue and shape plane. Decision boundaries separate the model predictions." },
      "keyterms": [
        { "en": "decision boundary", "ko": "결정 경계" }
      ]
    },
    {
      "id": "data-split", "group": "g-cls", "title": "훈련·검증·테스트 데이터",
      "source": "01_what_is_classification.ipynb",
      "definition": "데이터를 역할에 따라 세 가지로 나눠 써요.",
      "table": {
        "head": ["데이터", "역할"],
        "rows": [
          ["훈련", "모델 파라미터를 정해요"],
          ["검증", "트리 깊이나 확률 임계값 같은 설정을 골라요"],
          ["테스트", "최종 선택을 평가해요. 손대지 않고 남겨 둬요"]
        ]
      },
      "cautions": [
        "검증 데이터로 여러 번 고르다 보면 검증 결과에도 과대적합될 수 있어요."
      ],
      "keyterms": [
        { "en": "training data", "ko": "훈련 데이터" },
        { "en": "validation data", "ko": "검증 데이터" },
        { "en": "test set", "ko": "테스트 세트" }
      ]
    },
    {
      "id": "calibration", "group": "g-cls", "title": "확률 보정",
      "source": "01_what_is_classification.ipynb",
      "definition": "예측 확률이 실제 클래스 빈도와 맞는지 확인하는 거예요.",
      "points": [
        "특성이 겹치거나 측정값이 빠지면 실수가 생길 수 있어요."
      ],
      "cautions": [
        "모델은 확신하면서도 틀릴 수 있어요.",
        "훈련 범위 밖에서는 특히 그래요."
      ],
      "keyterms": [
        { "en": "calibration", "ko": "확률 보정" },
        { "en": "class frequencies", "ko": "클래스 빈도" }
      ]
    },

    {
      "id": "binary-logistic", "group": "g-binary", "title": "이진 로지스틱 회귀",
      "source": "02_binary_logistic_regression.ipynb",
      "definition": "이름에 '회귀'가 들어가지만, 두 레이블 중 하나를 고르는 분류기예요.",
      "points": [
        "찾으려는 사건을 양성 클래스로 정해요.",
        "점수 → 시그모이드 확률 → 임계값 순서로 판정해요."
      ],
      "cautions": [
        "특성 공간에서 직선 경계만 쓸 수 있어요.",
        "개수 두 개로는 보낸 사람이나 메시지 의미를 담을 수 없어요."
      ],
      "example": {
        "title": "스팸 필터",
        "points": [
          "레이블은 정상(0)과 스팸(1)이고, 스팸이 양성 클래스예요.",
          "특성은 홍보 문구 개수와 링크 개수예요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/07-1_Classification/assets/02_sigmoid_and_threshold.png", "alt": "Two message counts combine into a learned score z. A sigmoid converts z into spam probability, and a threshold selects spam or legitimate." },
      "keyterms": [
        { "en": "logistic regression", "ko": "로지스틱 회귀" },
        { "en": "positive class", "ko": "양성 클래스" },
        { "en": "spam", "ko": "스팸" },
        { "en": "legitimate", "ko": "정상" }
      ]
    },
    {
      "id": "linear-score", "group": "g-binary", "title": "선형 점수",
      "source": "02_binary_logistic_regression.ipynb",
      "definition": "입력들을 가중치로 합쳐서 만든 점수 z예요.",
      "formula": { "ko": "z = 절편 + 가중치1 × 입력1 + 가중치2 × 입력2", "en": "z = b + w1·x1 + w2·x2" },
      "table": {
        "head": ["값", "뜻"],
        "rows": [
          ["절편 b", "두 개수가 모두 0일 때의 점수"],
          ["가중치 w1, w2", "각 개수가 점수에 기여하는 정도"]
        ]
      },
      "points": [
        "적합하면서 세 값을 모두 배워요."
      ],
      "cautions": [
        "z는 음수도 양수도 될 수 있어요.",
        "z는 아직 확률이 아니에요."
      ],
      "keyterms": [
        { "en": "linear score", "ko": "선형 점수" },
        { "en": "intercept", "ko": "절편" },
        { "en": "weights", "ko": "가중치" }
      ]
    },
    {
      "id": "sigmoid", "group": "g-binary", "title": "시그모이드",
      "source": "02_binary_logistic_regression.ipynb",
      "definition": "점수 z를 스팸일 확률로 바꿔 주는 함수예요.",
      "formula": { "ko": "p = 1 ÷ (1 + e^(−z))", "en": "p = P(y=1 | x) = σ(z) = 1 / (1 + e^(−z))" },
      "table": {
        "head": ["z", "p"],
        "rows": [
          ["커지면", "커져요"],
          ["0이면", "0.5"]
        ]
      },
      "points": [
        "정상 메시지일 확률은 1 − p예요."
      ],
      "keyterms": [
        { "en": "sigmoid", "ko": "시그모이드" },
        { "en": "estimated spam probability", "ko": "추정 스팸 확률" }
      ]
    },
    {
      "id": "threshold", "group": "g-binary", "title": "임계값",
      "source": "02_binary_logistic_regression.ipynb",
      "definition": "확률을 클래스로 바꾸는 기준값 τ예요.",
      "table": {
        "head": ["확률", "판정"],
        "rows": [
          ["p ≥ τ", "스팸 (1)"],
          ["p < τ", "정상 (0)"]
        ]
      },
      "points": [
        "τ = 0.5이면 결정 경계는 b + w1x1 + w2x2 = 0인 직선이에요.",
        "임계값을 바꾸면 점수와 확률은 그대로고 판정만 바뀌어요."
      ],
      "cautions": [
        "임계값을 낮추면 스팸을 더 잡지만 정상 메시지도 더 숨길 수 있어요."
      ],
      "keyterms": [
        { "en": "threshold", "ko": "임계값" },
        { "en": "decision boundary", "ko": "결정 경계" }
      ]
    },
    {
      "id": "bce", "group": "g-binary", "title": "이진 교차 엔트로피",
      "source": "02_binary_logistic_regression.ipynb",
      "definition": "관찰된 클래스에 낮은 확률을 준 예측에 벌점을 주는 손실이에요.",
      "formula": { "ko": "손실 = −[y log p + (1 − y) log(1 − p)]", "en": "ℓ(y, p) = −[y log p + (1 − y) log(1 − p)]" },
      "table": {
        "head": ["관찰된 클래스", "남는 항"],
        "rows": [
          ["스팸 (y = 1)", "−log p"],
          ["정상 (y = 0)", "−log(1 − p)"]
        ]
      },
      "points": [
        "확신하면서 틀린 예측은 큰 벌점을 받아요.",
        "훈련 손실 L은 훈련 메시지 손실의 평균이에요."
      ],
      "keyterms": [
        { "en": "binary cross-entropy", "ko": "이진 교차 엔트로피" },
        { "en": "loss", "ko": "손실" },
        { "en": "training loss", "ko": "훈련 손실" }
      ]
    },
    {
      "id": "learning-weights", "group": "g-binary", "title": "가중치 학습",
      "source": "02_binary_logistic_regression.ipynb",
      "definition": "경사하강법으로 손실이 줄어드는 쪽으로 절편과 가중치를 고쳐요.",
      "formula": { "ko": "θ ← θ − 학습률 × (손실을 θ로 미분한 값)", "en": "θ ← θ − η ∂L/∂θ" },
      "points": [
        "θ는 절편이나 가중치이고, η는 학습률이에요.",
        "안정적인 업데이트를 위해 훈련 데이터 통계로 입력을 표준화해요."
      ],
      "example": {
        "title": "스팸 필터",
        "points": [
          "반복 0에서는 정상과 스팸의 점수가 겹쳐요.",
          "학습하면 정상은 곡선의 왼쪽 아래로, 스팸은 오른쪽 위로 이동해요.",
          "학습 후 임계값 0.5에서 두 클래스가 완전히 나뉘어요."
        ]
      },
      "keyterms": [
        { "en": "gradient descent", "ko": "경사하강법" },
        { "en": "learning rate", "ko": "학습률" },
        { "en": "standardizes inputs", "ko": "입력 표준화" }
      ]
    },

    {
      "id": "multiclass-logistic", "group": "g-multi", "title": "다중 클래스 로지스틱 회귀",
      "source": "03_multiclass_logistic_regression.ipynb",
      "definition": "클래스마다 다른 선형 점수를 배워서 여러 클래스 중 하나를 골라요.",
      "formula": { "ko": "클래스 k의 점수 = 절편 + 가중치 × 색상 + 가중치 × 비율", "en": "z_k = b_k + w_k1·x1 + w_k2·x2" },
      "points": [
        "점수가 입력에 선형이라 경계 조각은 직선이에요.",
        "업데이트를 더 하면 훈련 손실은 줄지만, 검증 정확도가 매번 좋아지진 않아요."
      ],
      "cautions": [
        "'모름' 레이블이 없어서 배 같은 과일도 세 클래스 중 하나로 골라요.",
        "확신하는 예측도 틀릴 수 있어요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "클래스는 사과, 오렌지, 바나나 세 개예요.",
          "사과와 오렌지는 대부분 둥글고, 바나나는 길쭉해요."
        ]
      },
      "keyterms": [
        { "en": "multiclass logistic regression", "ko": "다중 클래스 로지스틱 회귀" },
        { "en": "linear score for each class", "ko": "클래스별 선형 점수" }
      ]
    },
    {
      "id": "softmax", "group": "g-multi", "title": "소프트맥스",
      "source": "03_multiclass_logistic_regression.ipynb",
      "definition": "세 점수를 서로 경쟁하는 확률로 바꿔 줘요.",
      "formula": { "ko": "p_k = e^(z_k) ÷ (모든 클래스의 e^(z_j) 합)", "en": "p_k = e^(z_k) / Σ_j e^(z_j)" },
      "points": [
        "확률을 모두 더하면 1이에요.",
        "가장 큰 확률이 예측 과일을 정해요.",
        "확률이 똑같으면 사과, 오렌지, 바나나 순서로 정해요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "반복 0에서는 계수가 모두 0이라 모든 클래스 확률이 1/3이에요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/07-1_Classification/assets/03_softmax_probabilities.png", "alt": "A fruit with hue 50 degrees and length divided by width 2.8 produces three learned scores and softmax probabilities; the largest identifies the predicted class." },
      "keyterms": [
        { "en": "softmax", "ko": "소프트맥스" },
        { "en": "competing probabilities", "ko": "경쟁하는 확률" },
        { "en": "tie rule", "ko": "동점 규칙" }
      ]
    },
    {
      "id": "one-hot", "group": "g-multi", "title": "원-핫 인코딩",
      "source": "03_multiclass_logistic_regression.ipynb",
      "definition": "관찰된 클래스 자리만 1이고 나머지는 0인 벡터로 나타내요.",
      "points": [
        "예측 확률은 원-핫 벡터가 아니라 연속적인 값이에요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "사과, 오렌지, 바나나 순서라면 오렌지는 (0, 1, 0)이에요."
        ]
      },
      "keyterms": [
        { "en": "one-hot encoding", "ko": "원-핫 인코딩" },
        { "en": "target vector", "ko": "목표 벡터" }
      ]
    },
    {
      "id": "multiclass-ce", "group": "g-multi", "title": "다중 클래스 교차 엔트로피",
      "source": "03_multiclass_logistic_regression.ipynb",
      "definition": "관찰된 클래스에 준 확률만 써서 계산하는 손실이에요.",
      "formula": { "ko": "손실 = −log(관찰된 클래스의 확률)", "en": "ℓ = −Σ_k y_k log p_k = −log p_observed class" },
      "points": [
        "원-핫 목표 때문에 관찰된 클래스 항만 남아요.",
        "경사하강법으로 평균 훈련 손실을 줄여서 계수를 맞춰요."
      ],
      "keyterms": [
        { "en": "multiclass cross-entropy", "ko": "다중 클래스 교차 엔트로피" },
        { "en": "one-hot target", "ko": "원-핫 목표" }
      ]
    },

    {
      "id": "decision-tree", "group": "g-tree", "title": "결정 트리",
      "source": "04_decision_trees.ipynb",
      "definition": "질문을 차례로 던져서 클래스를 판정하는 모델이에요.",
      "points": [
        "분할 하나는 '길이/너비 비율이 이 값 이하인가?' 같은 질문으로 영역 하나를 둘로 나눠요.",
        "뒤의 분할은 그 과일이 들어간 가지 안에서만 적용돼요.",
        "분할마다 특성 하나만 써서 결정 영역이 직사각형이에요."
      ],
      "cautions": [
        "데이터가 조금만 바뀌어도 임계값이나 가지가 달라질 수 있어요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "사과가 빨강·초록 두 그룹이라 색상 기준 하나로는 못 나눠요.",
          "그래서 질문이 여러 개 필요해요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/07-1_Classification/assets/04_tree_splits.png", "alt": "The first three fitted splits separate elongated bananas, green apples, and red apples from oranges. The two apple leaves occupy different hue ranges." },
      "keyterms": [
        { "en": "decision tree", "ko": "결정 트리" },
        { "en": "split", "ko": "분할" },
        { "en": "branch", "ko": "가지" }
      ]
    },
    {
      "id": "leaf", "group": "g-tree", "title": "잎",
      "source": "04_decision_trees.ipynb",
      "definition": "트리 끝에서, 도착한 훈련 과일의 비율로 클래스 확률을 추정해요.",
      "formula": { "ko": "p_k = 잎 안의 클래스 k 개수 ÷ 잎 안의 전체 개수", "en": "p_k = n_k / n" },
      "points": [
        "가장 흔한 클래스가 예측이 돼요."
      ],
      "cautions": [
        "순수한 잎이어도 새 과일을 맞힌다는 보장은 없어요."
      ],
      "keyterms": [
        { "en": "leaf", "ko": "잎" },
        { "en": "pure leaf", "ko": "순수한 잎" }
      ]
    },
    {
      "id": "gini", "group": "g-tree", "title": "지니 불순도",
      "source": "04_decision_trees.ipynb",
      "definition": "한 노드 안에 클래스가 얼마나 섞여 있는지 재는 값이에요.",
      "formula": { "ko": "G = 1 − (각 클래스 비율의 제곱 합)", "en": "G = 1 − Σ_k p_k²" },
      "table": {
        "head": ["노드 상태", "G"],
        "rows": [
          ["순수함", "0"],
          ["레이블이 섞임", "커져요"]
        ]
      },
      "points": [
        "분할 후보는 자식 노드 불순도의 가중 평균으로 비교해요.",
        "불순도를 더 많이 줄이는 분할을 골라요."
      ],
      "cautions": [
        "가능한 모든 트리가 아니라, 그때그때 가장 좋은 분할만 골라요."
      ],
      "keyterms": [
        { "en": "Gini impurity", "ko": "지니 불순도" },
        { "en": "weighted impurity", "ko": "가중 불순도" },
        { "en": "node", "ko": "노드" }
      ]
    },
    {
      "id": "tree-complexity", "group": "g-tree", "title": "트리 복잡도",
      "source": "04_decision_trees.ipynb",
      "definition": "분할을 많이 할수록 트리가 복잡해져요.",
      "points": [
        "앞쪽 분할은 큰 과일 그룹을 나눠요.",
        "깊이와 최소 잎 크기로 복잡도를 제한해요."
      ],
      "cautions": [
        "뒤쪽 분할은 겹치는 작은 영역을 깎아 내서 과대적합할 수 있어요.",
        "제한을 걸어도 빠진 정보를 되찾을 수는 없어요."
      ],
      "example": {
        "title": "과일 분류기",
        "points": [
          "다섯 번째 분할은 훈련 정확도를 올리지만 검증 정확도는 떨어뜨려요.",
          "분할 수 1, 2, 3, 5, 7 중 검증 정확도가 가장 높은 걸 골라요."
        ]
      },
      "keyterms": [
        { "en": "depth", "ko": "깊이" },
        { "en": "minimum leaf size", "ko": "최소 잎 크기" },
        { "en": "overfit", "ko": "과대적합" }
      ]
    },

    {
      "id": "confusion-matrix", "group": "g-eval", "title": "혼동 행렬",
      "source": "05_evaluating_classification.ipynb",
      "definition": "실제 클래스와 예측 결과를 네 칸으로 나눠 세는 표예요.",
      "table": {
        "head": ["칸", "스팸 필터에서"],
        "rows": [
          ["TP(참 양성)", "잡아낸 스팸"],
          ["FP(거짓 양성)", "실수로 숨긴 정상 메시지"],
          ["FN(거짓 음성)", "놓친 스팸"],
          ["TN(참 음성)", "남겨 둔 정상 메시지"]
        ]
      },
      "points": [
        "행은 실제 클래스, 열은 예측한 행동이에요."
      ],
      "cautions": [
        "실제 필터는 TP와 FP를 따로 정할 수 없어요.",
        "임계값을 낮추면 보통 스팸도 더 잡고 오경보도 늘어요."
      ],
      "example": {
        "title": "받은 편지함 100통",
        "points": [
          "스팸 20통, 정상 80통이에요.",
          "그래서 FN = 20 − TP, TN = 80 − FP예요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/07-1_Classification/assets/05_confusion_matrix.png", "alt": "A fixed inbox has 20 spam and 80 legitimate messages. Fourteen caught spam and eight false alarms determine all four confusion matrix counts." },
      "keyterms": [
        { "en": "confusion matrix", "ko": "혼동 행렬" },
        { "en": "true positive (TP)", "ko": "참 양성" },
        { "en": "false positive (FP)", "ko": "거짓 양성" },
        { "en": "false negative (FN)", "ko": "거짓 음성" }
      ]
    },
    {
      "id": "precision", "group": "g-eval", "title": "정밀도",
      "source": "05_evaluating_classification.ipynb",
      "definition": "걸러 낸 메시지 중 진짜 스팸의 비율이에요.",
      "formula": { "ko": "정밀도 = TP ÷ (TP + FP)", "en": "Precision = TP / (TP + FP)" },
      "points": [
        "오경보가 늘면 분모만 커져서 정밀도가 떨어져요."
      ],
      "cautions": [
        "하나도 거르지 않으면 분모가 0이라 정의되지 않아요."
      ],
      "example": {
        "title": "받은 편지함 100통",
        "points": [
          "'모두 거르기'는 정밀도가 20%뿐이에요."
        ]
      },
      "keyterms": [
        { "en": "precision", "ko": "정밀도" },
        { "en": "false alarms", "ko": "오경보" }
      ]
    },
    {
      "id": "recall", "group": "g-eval", "title": "재현율",
      "source": "05_evaluating_classification.ipynb",
      "definition": "실제 스팸 중 잡아낸 비율이에요.",
      "formula": { "ko": "재현율 = TP ÷ (TP + FN)", "en": "Recall = TP / (TP + FN) = TP / 20" },
      "points": [
        "잡은 스팸이 늘면 재현율이 올라가요.",
        "오경보가 늘어도 재현율은 그대로예요."
      ],
      "example": {
        "title": "받은 편지함 100통",
        "points": [
          "'모두 거르기'는 스팸을 다 잡아서 재현율이 100%예요."
        ]
      },
      "keyterms": [
        { "en": "recall", "ko": "재현율" }
      ]
    },
    {
      "id": "accuracy", "group": "g-eval", "title": "정확도",
      "source": "05_evaluating_classification.ipynb",
      "definition": "남겨 둔 정상 메시지까지 포함해서, 맞힌 예측 전체의 비율이에요.",
      "formula": { "ko": "정확도 = (TP + TN) ÷ 100", "en": "Accuracy = (TP + TN) / 100" },
      "cautions": [
        "양성 클래스를 하나도 못 찾아도 정확도는 높을 수 있어요."
      ],
      "example": {
        "title": "받은 편지함 100통",
        "points": [
          "'모두 남기기'는 정상이 다수라 정확도가 80%예요.",
          "하지만 스팸은 하나도 못 잡아요."
        ]
      },
      "keyterms": [
        { "en": "accuracy", "ko": "정확도" },
        { "en": "majority", "ko": "다수" }
      ]
    },
    {
      "id": "f1", "group": "g-eval", "title": "F1 점수",
      "source": "05_evaluating_classification.ipynb",
      "definition": "정밀도와 재현율의 조화 평균이에요.",
      "formula": { "ko": "F1 = 2TP ÷ (2TP + FP + FN)", "en": "F1 = 2TP / (2TP + FP + FN)" },
      "points": [
        "두 종류의 실수 모두 F1을 낮춰요.",
        "식에 TN은 들어가지 않아요."
      ],
      "cautions": [
        "점수 하나로 모든 비용을 나타낼 수는 없어요."
      ],
      "example": {
        "title": "받은 편지함 100통",
        "points": [
          "'완벽'은 TP = 20, FP = 0이라 네 점수가 모두 100%예요."
        ]
      },
      "keyterms": [
        { "en": "F1", "ko": "F1 점수" },
        { "en": "harmonic mean", "ko": "조화 평균" }
      ]
    }
  ],
  "terms": [
    { "en": "classification", "ko": "분류", "def": "미리 정한 클래스 중에서 레이블 하나를 예측해요.", "def_en": "Classification predicts a label from a predefined set of classes.", "source": "01_what_is_classification.ipynb" },
    { "en": "supervised classification", "ko": "지도 분류", "def": "훈련 예시마다 입력 특성과 정답 레이블이 짝지어 있어요.", "def_en": "In supervised classification, each training example pairs input features with a known class label.", "source": "01_what_is_classification.ipynb" },
    { "en": "feature", "ko": "특성", "def": "색이나 모양처럼 잴 수 있는 성질이에요.", "def_en": "A feature is a measurable property, such as color or shape.", "source": "01_what_is_classification.ipynb" },
    { "en": "label", "ko": "레이블", "def": "과일이 무엇인지 기록한 거예요. 크기를 잰 값이 아니에요.", "def_en": "A label records the fruit's identity; it is not a measurement of its size.", "source": "01_what_is_classification.ipynb" },
    { "en": "binary classification", "ko": "이진 분류", "def": "가능한 레이블이 2개예요. (예: 정상 / 스팸)", "def_en": "Binary classification has two possible labels, such as legitimate or spam.", "source": "01_what_is_classification.ipynb" },
    { "en": "multiclass classification", "ko": "다중 클래스 분류", "def": "여러 레이블 중 하나를 골라요.", "def_en": "Multiclass classification chooses one label, such as apple, orange, or banana.", "source": "01_what_is_classification.ipynb" },
    { "en": "multilabel classification", "ko": "다중 레이블 분류", "def": "한 항목에 태그를 여러 개 붙일 수 있어요.", "def_en": "Multilabel classification can assign several tags to the same item.", "source": "01_what_is_classification.ipynb" },
    { "en": "arg max", "ko": "최댓값을 주는 클래스", "def": "확률 값이 아니라, 확률이 가장 큰 클래스를 돌려줘요.", "def_en": "The operator arg max returns the class with the largest probability, rather than that probability itself.", "source": "01_what_is_classification.ipynb" },
    { "en": "decision boundary", "ko": "결정 경계", "def": "모델이 서로 다른 클래스로 나누는 입력들 사이의 경계예요.", "def_en": "A decision boundary separates inputs that a fitted model assigns to different classes.", "source": "01_what_is_classification.ipynb" },
    { "en": "validation data", "ko": "검증 데이터", "def": "트리 깊이나 임계값 같은 설정을 고를 때 써요.", "def_en": "Validation data help choose settings, such as tree depth or a probability threshold.", "source": "01_what_is_classification.ipynb" },
    { "en": "test set", "ko": "테스트 세트", "def": "손대지 않고 남겨 뒀다가 최종 선택을 평가해요.", "def_en": "An untouched test set evaluates the final choice.", "source": "01_what_is_classification.ipynb" },
    { "en": "calibration", "ko": "확률 보정", "def": "예측 확률이 실제 클래스 빈도와 맞는지 확인해요.", "def_en": "Calibration checks whether predicted probabilities agree with observed class frequencies.", "source": "01_what_is_classification.ipynb" },
    { "en": "positive class", "ko": "양성 클래스", "def": "찾으려는 사건에 해당하는 클래스예요. 스팸 필터에서는 스팸이에요.", "def_en": "Spam is the positive class because it is the event being detected.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "linear score", "ko": "선형 점수", "def": "입력들을 가중치로 합친 점수 z예요.", "def_en": "The model creates a combined feature, the linear score z, from both inputs.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "intercept", "ko": "절편", "def": "두 개수가 모두 0일 때의 점수 b예요.", "def_en": "The intercept b is the score when both counts are zero.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "weights", "ko": "가중치", "def": "각 개수가 점수에 기여하는 정도예요.", "def_en": "The weights w1 and w2 determine each count's contribution.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "sigmoid", "ko": "시그모이드", "def": "점수 z를 스팸일 확률로 바꿔 줘요.", "def_en": "The sigmoid converts this score into the model's estimated spam probability.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "threshold", "ko": "임계값", "def": "확률을 클래스로 바꾸는 기준값 τ예요.", "def_en": "A threshold τ turns the probability into a class.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "binary cross-entropy", "ko": "이진 교차 엔트로피", "def": "관찰된 클래스에 낮은 확률을 주면 벌점을 주는 손실이에요.", "def_en": "Binary cross-entropy penalizes low probability for the observed class.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "learning rate", "ko": "학습률", "def": "경사하강법에서 한 번에 움직이는 크기를 정하는 η예요.", "def_en": "η is the learning rate.", "source": "02_binary_logistic_regression.ipynb" },
    { "en": "multiclass logistic regression", "ko": "다중 클래스 로지스틱 회귀", "def": "클래스마다 다른 선형 점수를 배워요.", "def_en": "Multiclass logistic regression learns a different linear score for each class k.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "en": "softmax", "ko": "소프트맥스", "def": "점수들을 서로 경쟁하는 확률로 바꿔요. 다 더하면 1이에요.", "def_en": "Softmax converts the three scores into competing probabilities.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "en": "one-hot encoding", "ko": "원-핫 인코딩", "def": "관찰된 클래스 자리만 1이고 나머지는 0이에요.", "def_en": "One-hot encoding represents the observed class with one at its position and zero elsewhere.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "en": "multiclass cross-entropy", "ko": "다중 클래스 교차 엔트로피", "def": "관찰된 클래스에 준 확률만 써서 계산하는 손실이에요.", "def_en": "For one fruit, multiclass cross-entropy uses the probability assigned to its observed class.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "en": "decision tree", "ko": "결정 트리", "def": "질문을 차례로 던져서 클래스를 판정해요.", "def_en": "A decision tree identifies an apple, orange, or banana from hue and length divided by width.", "source": "04_decision_trees.ipynb" },
    { "en": "split", "ko": "분할", "def": "질문 하나로 영역 하나를 둘로 나눠요.", "def_en": "Each split asks a question such as “Is the length-to-width ratio at most this value?” and divides one existing region.", "source": "04_decision_trees.ipynb" },
    { "en": "leaf", "ko": "잎", "def": "도착한 훈련 과일의 비율로 클래스 확률을 추정해요.", "def_en": "A leaf estimates class probabilities from the training fruit that reach it.", "source": "04_decision_trees.ipynb" },
    { "en": "Gini impurity", "ko": "지니 불순도", "def": "노드 안에 클래스가 얼마나 섞였는지 재요. 순수하면 0이에요.", "def_en": "Gini impurity measures how mixed the classes are in a node.", "source": "04_decision_trees.ipynb" },
    { "en": "confusion matrix", "ko": "혼동 행렬", "def": "실제 클래스는 행, 예측한 행동은 열로 나눠 세는 표예요.", "def_en": "The confusion matrix puts actual classes in rows and predicted actions in columns.", "source": "05_evaluating_classification.ipynb" },
    { "en": "true positive (TP)", "ko": "참 양성", "def": "잡아낸 스팸이에요.", "def_en": "A true positive (TP) is caught spam.", "source": "05_evaluating_classification.ipynb" },
    { "en": "false positive (FP)", "ko": "거짓 양성", "def": "실수로 숨긴 정상 메시지예요.", "def_en": "A false positive (FP) is a legitimate message hidden by mistake.", "source": "05_evaluating_classification.ipynb" },
    { "en": "false negative (FN)", "ko": "거짓 음성", "def": "놓친 스팸이에요.", "def_en": "A false negative (FN) is missed spam.", "source": "05_evaluating_classification.ipynb" },
    { "en": "true negative (TN)", "ko": "참 음성", "def": "남겨 둔 정상 메시지예요.", "def_en": "A true negative (TN) is a legitimate message kept.", "source": "05_evaluating_classification.ipynb" },
    { "en": "precision", "ko": "정밀도", "def": "걸러 낸 메시지 중 진짜 스팸의 비율이에요.", "def_en": "Precision asks how many filtered messages really are spam.", "source": "05_evaluating_classification.ipynb" },
    { "en": "recall", "ko": "재현율", "def": "실제 스팸 중 잡아낸 비율이에요.", "def_en": "Recall asks how much of the actual spam was caught.", "source": "05_evaluating_classification.ipynb" },
    { "en": "accuracy", "ko": "정확도", "def": "남겨 둔 정상 메시지까지 포함해서 맞힌 예측 전체의 비율이에요.", "def_en": "Accuracy counts all correct predictions, including legitimate messages kept.", "source": "05_evaluating_classification.ipynb" },
    { "en": "F1", "ko": "F1 점수", "def": "정밀도와 재현율의 조화 평균이에요.", "def_en": "F1 is the harmonic mean of precision and recall.", "source": "05_evaluating_classification.ipynb" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "한국어 용어(정밀도, 재현율, 지니 불순도, 원-핫 인코딩, 확률 보정 등)는 내가 붙인 번역이에요.",
      "TP·FP·FN·TN의 한국어 이름(참 양성, 거짓 양성 등)은 자료에 없어서 붙인 이름이에요.",
      "수식은 자료의 수학 기호를 글자로 옮겨 적었어요. 원래 모양은 노트북에서 확인하세요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "데모의 조작 방법(슬라이더, 버튼, 그래프 색 설명)은 뺐어요."
    ] },
    { "title": "사용 안내", "items": [
      "수업 예시의 과일과 메시지 데이터는 모두 합성 데이터예요. 자료에 그렇게 적혀 있어요.",
      "그림은 인터넷이 연결돼야 보여요.",
      "데모는 materials/week07 노트북을 실행하세요."
    ] }
  ],
  "quiz": [
    { "id": "w07-q01", "q": "What does classification predict?", "choices": ["A label from a predefined set of classes", "A numerical quantity such as weight", "A curve through every record", "The size of a fruit"], "answer": 0, "explain": "분류는 미리 정한 클래스 중 레이블을 예측해요. 무게 같은 숫자는 회귀예요.", "source": "01_what_is_classification.ipynb" },
    { "id": "w07-q02", "q": "What is a feature?", "choices": ["A measurable property, such as color or shape", "The known class of a training example", "The predicted label", "A probability threshold"], "answer": 0, "explain": "특성은 잴 수 있는 성질이에요. 정답 클래스는 레이블이에요.", "source": "01_what_is_classification.ipynb" },
    { "id": "w07-q03", "q": "Which type of classification can assign several tags to the same item?", "choices": ["Multilabel classification", "Binary classification", "Multiclass classification", "Regression"], "answer": 0, "explain": "다중 레이블 분류는 태그를 여러 개 붙일 수 있어요. 다중 클래스 분류는 여러 개 중 하나만 골라요.", "source": "01_what_is_classification.ipynb" },
    { "id": "w07-q04", "q": "What does the operator arg max return?", "choices": ["The class with the largest probability", "The largest probability itself", "The sum of all probabilities", "The class with the smallest probability"], "answer": 0, "explain": "argmax는 확률 값이 아니라 확률이 가장 큰 클래스를 돌려줘요.", "source": "01_what_is_classification.ipynb" },
    { "id": "w07-q05", "q": "What are validation data used for?", "choices": ["To help choose settings, such as tree depth or a probability threshold", "To evaluate the final choice", "To determine model parameters", "To replace the test set"], "answer": 0, "explain": "훈련 데이터는 파라미터를, 검증 데이터는 설정을 정해요. 최종 평가는 손대지 않은 테스트 세트로 해요.", "source": "01_what_is_classification.ipynb" },
    { "id": "w07-q06", "q": "What does calibration check?", "choices": ["Whether predicted probabilities agree with observed class frequencies", "Whether the training accuracy is 100%", "How deep the tree is", "How many features are used"], "answer": 0, "explain": "확률 보정은 예측 확률이 실제 빈도와 맞는지 봐요. 모델은 확신하면서도 틀릴 수 있어요.", "source": "01_what_is_classification.ipynb" },
    { "id": "w07-q07", "q": "In the spam filter, why is spam the positive class?", "choices": ["Because it is the event being detected", "Because there are more spam messages", "Because its label is 0", "Because it always has a higher score"], "answer": 0, "explain": "찾으려는 사건이 양성 클래스예요. 스팸은 1, 정상은 0이에요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q08", "q": "Which statement about the linear score z is true?", "choices": ["It can be negative or positive; it is not yet a probability", "It is always between 0 and 1", "It equals the threshold", "It counts the number of links"], "answer": 0, "explain": "z는 음수도 양수도 될 수 있고, 시그모이드를 거쳐야 확률이 돼요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q09", "q": "If z = 0, what probability does the sigmoid give?", "choices": ["0.5", "0", "1", "−1"], "answer": 0, "explain": "z = 0이면 p = 0.5예요. z가 커질수록 p도 커져요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q10", "q": "What happens when the threshold is changed?", "choices": ["Decisions change, but scores, probabilities, and training loss do not", "The scores change", "The training loss changes", "The weights are refitted"], "answer": 0, "explain": "임계값은 판정만 바꿔요. 점수, 확률, 훈련 손실은 그대로예요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q11", "q": "What usually happens when the threshold is lowered?", "choices": ["More spam is caught, and more legitimate messages may be hidden", "Less spam is caught", "Nothing changes", "The decision boundary disappears"], "answer": 0, "explain": "임계값을 낮추면 스팸을 더 잡지만 정상 메시지도 더 숨길 수 있어요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q12", "q": "Binary cross-entropy gives a large penalty to:", "choices": ["A confidently wrong prediction", "A confidently correct prediction", "A score of zero", "A high threshold"], "answer": 0, "explain": "관찰된 클래스에 낮은 확률을 주면 벌점이 커요. 그래서 확신하면서 틀리면 큰 벌점을 받아요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q13", "q": "Logistic regression is:", "choices": ["A classifier, even though its name contains “regression”", "A model that predicts numerical quantities", "A decision tree", "A way to measure calibration"], "answer": 0, "explain": "이름에 회귀가 있지만 분류기예요.", "source": "02_binary_logistic_regression.ipynb" },
    { "id": "w07-q14", "q": "In multiclass logistic regression, the softmax probabilities of all classes add up to:", "choices": ["1", "3", "0", "100"], "answer": 0, "explain": "소프트맥스 확률은 전체에서 차지하는 몫이라 다 더하면 1이에요.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "id": "w07-q15", "q": "With the class order Apple, Orange, Banana, what is the one-hot target for an orange?", "choices": ["(0, 1, 0)", "(1, 0, 0)", "(0, 0, 1)", "(1, 1, 0)"], "answer": 0, "explain": "관찰된 클래스 자리만 1이에요. 오렌지는 두 번째라 (0, 1, 0)이에요.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "id": "w07-q16", "q": "What happens when the fruit classifier sees a pear?", "choices": ["It still chooses among the three available classes", "It outputs an “unknown” label", "It refuses to predict", "Its probabilities add up to more than 1"], "answer": 0, "explain": "소프트맥스는 세 클래스 중에서만 골라요. 자동 '모름' 레이블은 없어요.", "source": "03_multiclass_logistic_regression.ipynb" },
    { "id": "w07-q17", "q": "What is the Gini impurity of a pure node?", "choices": ["0", "1", "0.5", "3"], "answer": 0, "explain": "순수한 노드는 G = 0이에요. 레이블이 섞일수록 커져요.", "source": "04_decision_trees.ipynb" },
    { "id": "w07-q18", "q": "Why are the decision regions of a decision tree rectangular?", "choices": ["Each split uses one feature", "It uses a softmax", "It uses a linear score", "It uses a sigmoid"], "answer": 0, "explain": "분할마다 특성 하나만 써서 영역이 직사각형이에요.", "source": "04_decision_trees.ipynb" },
    { "id": "w07-q19", "q": "Which statement about a pure leaf is true?", "choices": ["It does not guarantee a correct prediction for a new fruit", "It always predicts new fruit correctly", "Its Gini impurity is 1", "It contains every class equally"], "answer": 0, "explain": "잎 확률은 훈련 비율일 뿐이라, 순수한 잎이어도 새 과일을 맞힌다는 보장은 없어요.", "source": "04_decision_trees.ipynb" },
    { "id": "w07-q20", "q": "In the spam example, what is a false positive (FP)?", "choices": ["A legitimate message hidden by mistake", "Caught spam", "Missed spam", "A legitimate message kept"], "answer": 0, "explain": "FP는 실수로 숨긴 정상 메시지예요. 잡은 스팸은 TP, 놓친 스팸은 FN, 남긴 정상은 TN이에요.", "source": "05_evaluating_classification.ipynb" },
    { "id": "w07-q21", "q": "“Keep all” reaches 80% accuracy. What is the problem?", "choices": ["It catches no spam", "Its recall is 100%", "Its precision is 100%", "Its F1 is 100%"], "answer": 0, "explain": "정상이 다수라 정확도는 높지만 스팸은 하나도 못 잡아요. 재현율과 F1은 0이에요.", "source": "05_evaluating_classification.ipynb" },
    { "id": "w07-q22", "q": "“Filter all” gives which result?", "choices": ["100% recall but only 20% precision", "0% recall", "80% precision", "An undefined recall"], "answer": 0, "explain": "모든 스팸을 잡아 재현율은 100%지만, 숨긴 메시지 대부분이 정상이라 정밀도는 20%예요.", "source": "05_evaluating_classification.ipynb" },
    { "id": "w07-q23", "q": "Which count does not appear in the F1 formula?", "choices": ["TN", "TP", "FP", "FN"], "answer": 0, "explain": "F1 = 2TP / (2TP + FP + FN)이라 TN은 들어가지 않아요.", "source": "05_evaluating_classification.ipynb" },
    { "id": "w07-q24", "q": "False alarms increase while caught spam stays the same (at least one spam caught). What happens?", "choices": ["Precision falls and recall stays fixed", "Both precision and recall rise", "Recall falls", "Nothing changes"], "answer": 0, "explain": "오경보는 정밀도의 분모만 키워요. 실제 스팸과 잡은 스팸 수는 그대로라 재현율은 변하지 않아요.", "source": "05_evaluating_classification.ipynb" }
  ]
});
