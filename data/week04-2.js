addSession({
  "week": 4,
  "session": "04-2",
  "kind": "특강 (동영상 강의)",
  "lecturer": "박준수 교수",
  "title": "기술통계의 이해",
  "intro": "데이터의 중심(평균, 중앙값, 최빈값)과 퍼짐(범위, 편차, 분산, 표준 편차)을 수치로 나타내는 법을 배워요. 이상치를 찾는 두 방법, 상관계수, 분포의 모양(왜도, 첨도)도 살펴봐요.",
  "keypoints": ["중심을 나타내는 값은 평균, 중앙값, 최빈값이고, 퍼짐을 나타내는 값은 범위, 분산, 표준 편차예요.", "표본 분산은 n이 아니라 n − 1로 나눠요.", "Z = (값 − 평균) ÷ 표준 편차. 평균에서 표준 편차 몇 배만큼 떨어졌는지예요.", "IQR = Q3 − Q1. 울타리 Q1 − 1.5×IQR, Q3 + 1.5×IQR 밖의 값은 이상치예요.", "상관계수는 −1~1 사이 값으로, '선형' 관계의 방향과 강도만 알려 줘요."],
  "sources": [
    { "index": "01", "title": "101 001 Descriptive Statistics (88분, 자동 자막 기준)", "url": "https://youtu.be/9bM65kxOwPA" },
    { "index": "02", "title": "101 002 Descriptive Statistics - Examples (16분, 자동 자막 기준)", "url": "https://youtu.be/86BDTsrtB_M" }
  ],
  "groups": [
    { "id": "g-center", "title": "데이터의 중심" },
    { "id": "g-spread", "title": "데이터의 퍼짐" },
    { "id": "g-outlier", "title": "이상치 찾기" },
    { "id": "g-corr", "title": "상관계수" },
    { "id": "g-shape", "title": "분포의 모양" }
  ],
  "sections": [
    {
      "id": "desc-stats", "group": "g-center", "title": "기술 통계",
      "source": "101 001 Descriptive Statistics (영상 앞부분)",
      "definition": "주어진 데이터의 특징을 수치로 표현하는 통계 방법이에요.",
      "points": [
        "데이터 과학에서 가장 기본적인 단계예요.",
        "데이터의 중심이 어디인지, 얼마나 퍼져 있는지, 이상치가 있는지를 살펴봐요."
      ],
      "keyterms": [
        { "en": "Descriptive Statistics", "ko": "기술 통계" }
      ]
    },
    {
      "id": "mean", "group": "g-center", "title": "평균",
      "source": "101 001 Descriptive Statistics",
      "definition": "모든 값을 더해서 개수로 나눈 값이에요.",
      "points": [
        "데이터 전체를 보지 않아도 대략 어디쯤에 있는지 알 수 있어요."
      ],
      "cautions": [
        "아주 크거나 작은 이상치가 있으면 평균이 그쪽으로 끌려가요."
      ],
      "example": {
        "title": "월 소득",
        "points": [
          "평균 300만 원인 집단에 2천만 원 받는 사람이 한 명 끼면 평균이 300만 원보다 훨씬 커져요."
        ]
      },
      "keyterms": [
        { "en": "mean", "ko": "평균" },
        { "en": "outlier", "ko": "이상치" }
      ]
    },
    {
      "id": "median", "group": "g-center", "title": "중앙값",
      "source": "101 001 Descriptive Statistics",
      "definition": "값을 크기 순으로 정렬했을 때 가운데 있는 값이에요.",
      "table": {
        "head": ["값의 개수", "구하는 법", "예"],
        "rows": [
          ["홀수", "가운데 값 하나", "1, 3, 5, 7, 9 → 5"],
          ["짝수", "가운데 두 값의 평균", "1, 3, 5, 7, 9, 10 → (5 + 7) ÷ 2 = 6"]
        ]
      },
      "points": [
        "가운데 값을 고르기 때문에 평균보다 이상치에 강건해요."
      ],
      "example": {
        "title": "이상치가 섞일 때",
        "points": [
          "1, 3, 5, 7에 100이 섞여도 중앙값은 5 그대로예요."
        ]
      },
      "keyterms": [
        { "en": "median", "ko": "중앙값" }
      ]
    },
    {
      "id": "mode", "group": "g-center", "title": "최빈값",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "가장 자주 나타나는 값이에요.",
      "example": {
        "title": "퀴즈 점수 9개 (연습 문제)",
        "points": [
          "4와 6은 한 번, 7은 두 번, 8과 9는 한 번, 10은 세 번 나와서 최빈값은 10이에요.",
          "같은 데이터의 평균은 71 ÷ 9, 중앙값은 8이에요."
        ]
      },
      "keyterms": [
        { "en": "mode", "ko": "최빈값" }
      ]
    },

    {
      "id": "range", "group": "g-spread", "title": "범위",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "가장 큰 값에서 가장 작은 값을 뺀 값이에요.",
      "points": [
        "데이터가 얼마나 넓게 퍼져 있는지 가장 쉽게 구할 수 있어요."
      ],
      "cautions": [
        "이상치 하나에도 크게 왜곡돼요."
      ],
      "example": {
        "title": "연습 문제",
        "points": [
          "12, 15, 18, 20, 25의 범위는 13이에요.",
          "여기에 1,000이 끼면 범위가 988이 돼요."
        ]
      },
      "keyterms": [
        { "en": "range", "ko": "범위" }
      ]
    },
    {
      "id": "deviation", "group": "g-spread", "title": "편차",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "각 값이 평균에서 얼마나 떨어져 있는지예요.",
      "formula": { "ko": "편차 = 값 − 평균", "en": "xᵢ − x̄" },
      "table": {
        "head": ["값", "편차"],
        "rows": [
          ["평균보다 작음", "음수"],
          ["평균과 같음", "0"],
          ["평균보다 큼", "양수"]
        ]
      },
      "cautions": [
        "편차를 모두 더하면 항상 0이 돼요.",
        "그래서 편차만으로는 전체가 얼마나 퍼졌는지 알 수 없어요."
      ],
      "example": {
        "title": "연습 문제",
        "points": [
          "12, 15, 18, 20, 25의 평균은 18이고, 편차는 −6, −3, 0, 2, 7이에요."
        ]
      },
      "keyterms": [
        { "en": "deviation", "ko": "편차" }
      ]
    },
    {
      "id": "variance", "group": "g-spread", "title": "분산",
      "source": "101 001 Descriptive Statistics",
      "definition": "편차를 제곱해서 평균 낸 값이에요.",
      "points": [
        "제곱하면 부호가 사라져서 서로 상쇄되지 않아요.",
        "평균에서 멀리 떨어진 값일수록 더 크게 반영돼요."
      ],
      "table": {
        "head": ["", "구하는 법"],
        "rows": [
          ["모분산 σ²", "모집단 전체의 편차 제곱 합을 전체 개수로 나눠요"],
          ["표본 분산 s²", "표본의 편차 제곱 합을 n − 1로 나눠요"]
        ]
      },
      "cautions": [
        "대부분은 모집단 전체를 다 볼 수 없어서 표본 분산을 구해요.",
        "단위가 제곱이 돼서 원래 단위로 얼마나 떨어졌는지 말하기 어려워요."
      ],
      "keyterms": [
        { "en": "variance", "ko": "분산" },
        { "en": "population variance", "ko": "모분산" },
        { "en": "sample variance", "ko": "표본 분산" }
      ]
    },
    {
      "id": "n-minus-1", "group": "g-spread", "title": "n − 1로 나누는 이유",
      "source": "101 001 Descriptive Statistics",
      "definition": "표본 분산의 기대값이 모분산과 같아지도록 n − 1로 나눠요.",
      "formula": { "ko": "표본 분산의 기대값 = 모분산", "en": "E[s²] = σ²" },
      "points": [
        "기대값은 시행을 충분히 많이 하면 그 확률 변수의 장기 평균이 돼요.",
        "표본마다 분산은 달라도, 장기 평균은 모분산과 같아야 좋아요."
      ],
      "cautions": [
        "n으로 나누면 표본 분산의 기대값이 모분산보다 작아져요."
      ],
      "keyterms": [
        { "en": "expectation", "ko": "기대값" },
        { "en": "random variable", "ko": "확률 변수" }
      ]
    },
    {
      "id": "std", "group": "g-spread", "title": "표준 편차",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "분산에 제곱근을 씌운 값이에요.",
      "table": {
        "head": ["", "구하는 법"],
        "rows": [
          ["모표준 편차 σ", "√모분산"],
          ["표본 표준 편차 s", "√표본 분산"]
        ]
      },
      "points": [
        "원래 데이터와 단위가 같아서 중심에서 얼마나 떨어졌는지 말하기 쉬워요."
      ],
      "example": {
        "title": "연습 문제",
        "points": [
          "평균이 6인 다섯 값의 표본 분산이 10이면, 표본 표준 편차는 √10이에요."
        ]
      },
      "keyterms": [
        { "en": "standard deviation", "ko": "표준 편차" }
      ]
    },

    {
      "id": "z-score", "group": "g-outlier", "title": "Z 점수",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "값이 평균에서 표준 편차의 몇 배만큼 떨어져 있는지예요.",
      "formula": { "ko": "Z = (값 − 평균) ÷ 표준 편차", "en": "z = (xᵢ − μ) / σ" },
      "points": [
        "평균을 빼고 표준 편차로 나누는 과정을 표준화라고 해요.",
        "표본이 30개를 넘으면 표본 평균과 표본 표준 편차로 근사해도 괜찮아요.",
        "Z 점수의 절댓값이 3보다 크면 이상치로 봐요."
      ],
      "cautions": [
        "이상치는 불가능한 값이 아니라, 아주 드문 확률로 나오는 값이에요."
      ],
      "example": {
        "title": "시험 점수 (연습 문제)",
        "points": [
          "평균 70점, 표준 편차 8점일 때 99점의 Z 점수는 약 3.63이라 이상치예요."
        ]
      },
      "keyterms": [
        { "en": "Z-score", "ko": "Z 점수" },
        { "en": "standardization", "ko": "표준화" }
      ]
    },
    {
      "id": "normal-rule", "group": "g-outlier", "title": "정규 분포와 3 표준 편차",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "평균을 기준으로 대칭인 확률 분포를 정규 분포라고 해요.",
      "table": {
        "head": ["구간", "값이 관찰될 확률"],
        "rows": [
          ["평균 ± 1 표준 편차", "약 68%"],
          ["평균 ± 2 표준 편차", "약 95%"],
          ["평균 ± 3 표준 편차", "약 99.7%"]
        ]
      },
      "points": [
        "±3 표준 편차 밖은 전체의 0.3%뿐이라 이상치로 봐도 무리가 없어요."
      ],
      "example": {
        "title": "시험 점수 (연습 문제)",
        "points": [
          "평균 70점, 표준 편차 8점이면 46점에서 94점 사이에 99.7%가 들어가요."
        ]
      },
      "keyterms": [
        { "en": "normal distribution", "ko": "정규 분포" },
        { "en": "probability distribution", "ko": "확률 분포" }
      ]
    },
    {
      "id": "quartile-iqr", "group": "g-outlier", "title": "사분위수와 IQR",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "데이터를 네 등분하는 기준점이 사분위수이고, Q3 − Q1이 IQR이에요.",
      "table": {
        "head": ["", "뜻"],
        "rows": [
          ["Q1", "아래쪽 1/4 지점"],
          ["Q2", "가운데 (중앙값)"],
          ["Q3", "위쪽 3/4 지점"],
          ["IQR(사분위 범위)", "Q3 − Q1"]
        ]
      },
      "points": [
        "중앙값을 빼고 반쪽의 중앙값을 구할지, 포함할지에 따라 Q1과 Q3가 달라져요.",
        "IQR은 일반 범위보다 이상치에 강건해요."
      ],
      "example": {
        "title": "1부터 7까지",
        "points": [
          "Q2는 4예요.",
          "중앙값을 빼면 Q1 = 2, Q3 = 6이에요.",
          "중앙값을 포함하면 Q1 = 2.5, Q3 = 5.5, IQR = 3이에요."
        ]
      },
      "keyterms": [
        { "en": "quartile", "ko": "사분위수" },
        { "en": "IQR (interquartile range)", "ko": "사분위 범위" }
      ]
    },
    {
      "id": "iqr-fence", "group": "g-outlier", "title": "IQR로 이상치 찾기",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "울타리 두 개를 정하고, 그 밖의 값을 이상치로 봐요.",
      "formula": { "ko": "아래 울타리 = Q1 − 1.5 × IQR, 위 울타리 = Q3 + 1.5 × IQR", "en": "Lower fence = Q1 − 1.5 × IQR, Upper fence = Q3 + 1.5 × IQR" },
      "points": [
        "Z 점수와 함께 이상치를 찾는 두 가지 방법이에요."
      ],
      "cautions": [
        "1.5배 대신 다른 배수를 쓸지는 분야에 맞게 정해요."
      ],
      "example": {
        "title": "연습 문제",
        "points": [
          "울타리가 −2와 10으로 나와서, 데이터의 20이 이상치예요."
        ]
      },
      "keyterms": [
        { "en": "lower fence", "ko": "아래 울타리" },
        { "en": "upper fence", "ko": "위 울타리" }
      ]
    },

    {
      "id": "covariance", "group": "g-corr", "title": "공분산",
      "source": "101 001 Descriptive Statistics",
      "definition": "두 변수가 함께 변하는 방향을 나타내는 값이에요.",
      "formula": { "ko": "공분산 = (x 편차 × y 편차)의 합 ÷ (n − 1)", "en": "s_xy = Σ(xᵢ − x̄)(yᵢ − ȳ) / (n − 1)" },
      "points": [
        "표본에 대한 값이라 n − 1로 나눠요."
      ],
      "keyterms": [
        { "en": "covariance", "ko": "공분산" }
      ]
    },
    {
      "id": "correlation", "group": "g-corr", "title": "상관계수",
      "source": "101 001 / 101 002 Descriptive Statistics",
      "definition": "두 변수의 선형 관계가 어느 방향이고 얼마나 강한지 −1에서 1 사이 값으로 나타내요.",
      "formula": { "ko": "상관계수 = 공분산 ÷ (x의 표준 편차 × y의 표준 편차)", "en": "r = s_xy / (s_x · s_y)" },
      "table": {
        "head": ["r", "뜻"],
        "rows": [
          ["1", "강한 양의 선형 상관"],
          ["−1", "강한 음의 선형 상관"],
          ["0", "선형 관계가 약해요"]
        ]
      },
      "example": {
        "title": "공부 시간과 시험 점수 (연습 문제)",
        "points": [
          "공분산 18.75, 표준 편차 1.581과 11.937로 r ≈ 0.994예요.",
          "매우 강한 양의 선형 상관이에요."
        ]
      },
      "keyterms": [
        { "en": "correlation coefficient", "ko": "상관계수" }
      ]
    },
    {
      "id": "corr-cosine", "group": "g-corr", "title": "상관계수와 코사인 유사도",
      "source": "101 001 Descriptive Statistics",
      "definition": "상관계수는 x 편차 벡터와 y 편차 벡터 사이 각도의 코사인이에요.",
      "table": {
        "head": ["두 편차 벡터", "r", "데이터 모양"],
        "rows": [
          ["같은 방향", "1", "모든 점이 오른쪽 위로 가는 직선 위에 놓여요"],
          ["반대 방향", "−1", "모든 점이 오른쪽 아래로 가는 직선 위에 놓여요"],
          ["직각", "0", "선형 관계가 없어요"]
        ]
      },
      "points": [
        "편차 벡터는 모든 데이터의 편차를 모은 n차원 벡터예요.",
        "코사인 값이 −1에서 1 사이라서 상관계수도 그 사이에 있어요."
      ],
      "keyterms": [
        { "en": "cosine similarity", "ko": "코사인 유사도" },
        { "en": "deviation vector", "ko": "편차 벡터" }
      ]
    },
    {
      "id": "corr-caution", "group": "g-corr", "title": "상관계수를 읽을 때 주의할 점",
      "source": "101 001 Descriptive Statistics",
      "definition": "상관계수는 '선형' 관계의 방향과 정도만 알려 줘요.",
      "points": [
        "두 변수가 독립이면 r은 0이에요.",
        "r이 0이면 선형 관계가 없다고는 말할 수 있어요."
      ],
      "cautions": [
        "r이 1보다 작은 건 관계가 비선형이어서일 수도 있어요.",
        "r이 0이라고 해서 두 변수가 꼭 독립인 건 아니에요."
      ],
      "keyterms": [
        { "en": "linear correlation", "ko": "선형 상관" },
        { "en": "independent", "ko": "독립" }
      ]
    },

    {
      "id": "skewness", "group": "g-shape", "title": "왜도",
      "source": "101 001 Descriptive Statistics",
      "definition": "분포가 한쪽으로 얼마나 치우쳤는지 나타내는 값이에요.",
      "formula": { "ko": "왜도 = 편차 세제곱의 평균 ÷ 표준 편차의 세제곱", "en": "skewness = mean of (xᵢ − x̄)³ / s³" },
      "table": {
        "head": ["왜도", "모양", "평균과 중앙값"],
        "rows": [
          ["0보다 큼", "오른쪽 꼬리가 길어요", "평균 > 중앙값"],
          ["0보다 작음", "왼쪽 꼬리가 길어요", "평균 < 중앙값"],
          ["0 근처", "대칭이에요", "거의 같아요"]
        ]
      },
      "points": [
        "단위가 없는 값이에요."
      ],
      "keyterms": [
        { "en": "skewness", "ko": "왜도" },
        { "en": "positive skewness", "ko": "양의 왜도" },
        { "en": "negative skewness", "ko": "음의 왜도" }
      ]
    },
    {
      "id": "kurtosis", "group": "g-shape", "title": "첨도",
      "source": "101 001 Descriptive Statistics",
      "definition": "분포의 꼬리가 얼마나 두꺼운지 나타내는 값이에요.",
      "formula": { "ko": "첨도 = 편차 네제곱의 평균 ÷ 표준 편차의 네제곱", "en": "kurtosis = mean of (xᵢ − x̄)⁴ / s⁴" },
      "table": {
        "head": ["첨도", "모양"],
        "rows": [
          ["3", "일반적인 대칭 분포"],
          ["3보다 큼", "꼬리가 두꺼워요. 이상치가 많을 수 있어요"],
          ["3보다 작음", "꼬리가 얇아요. 평균 근처에 많이 모여 있어요"]
        ]
      },
      "cautions": [
        "첨도가 높으면 이상치를 관리할 전략이 더 필요해요."
      ],
      "keyterms": [
        { "en": "kurtosis", "ko": "첨도" }
      ]
    }
  ],
  "terms": [
    { "en": "Descriptive Statistics", "ko": "기술 통계", "def": "데이터의 특징을 수치로 표현하는 통계 방법이에요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "mean", "ko": "평균", "def": "모든 값을 더해서 개수로 나눈 값이에요. 이상치에 약해요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "median", "ko": "중앙값", "def": "정렬했을 때 가운데 있는 값이에요. 이상치에 강건해요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "mode", "ko": "최빈값", "def": "가장 자주 나타나는 값이에요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "outlier", "ko": "이상치", "def": "아주 드문 확률로 나타나는 값이에요. 불가능한 값은 아니에요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "range", "ko": "범위", "def": "최댓값에서 최솟값을 뺀 값이에요. 이상치에 약해요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "deviation", "ko": "편차", "def": "각 값에서 평균을 뺀 값이에요. 모두 더하면 0이에요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "variance", "ko": "분산", "def": "편차를 제곱해서 평균 낸 값이에요. 표본은 n − 1로 나눠요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "standard deviation", "ko": "표준 편차", "def": "분산의 제곱근이에요. 원래 데이터와 단위가 같아요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "expectation", "ko": "기대값", "def": "확률을 고려해서 기대되는 값이에요. 시행이 많아지면 장기 평균이 돼요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "Z-score", "ko": "Z 점수", "def": "평균에서 표준 편차의 몇 배만큼 떨어졌는지예요. 절댓값이 3보다 크면 이상치로 봐요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "standardization", "ko": "표준화", "def": "평균을 빼고 표준 편차로 나눠서 평균 0, 표준 편차 1로 바꾸는 과정이에요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "normal distribution", "ko": "정규 분포", "def": "평균을 기준으로 대칭인 확률 분포예요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "quartile", "ko": "사분위수", "def": "데이터를 네 등분하는 기준점 Q1, Q2, Q3예요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "IQR (interquartile range)", "ko": "사분위 범위", "def": "Q3 − Q1이에요. 범위보다 이상치에 강건해요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "lower fence / upper fence", "ko": "아래 울타리 / 위 울타리", "def": "Q1 − 1.5 × IQR, Q3 + 1.5 × IQR이에요. 그 밖의 값을 이상치로 봐요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "covariance", "ko": "공분산", "def": "두 변수가 함께 변하는 방향을 나타내는 값이에요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "correlation coefficient", "ko": "상관계수", "def": "두 변수의 선형 관계를 −1에서 1 사이 값으로 나타내요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "skewness", "ko": "왜도", "def": "분포가 한쪽으로 치우친 정도예요. 양수면 오른쪽 꼬리가 길어요.", "def_en": "", "source": "101 001 Descriptive Statistics" },
    { "en": "kurtosis", "ko": "첨도", "def": "분포 꼬리가 두꺼운 정도예요. 3을 기준으로 봐요.", "def_en": "", "source": "101 001 Descriptive Statistics" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "강의 영상의 한국어 자동 자막을 바탕으로 정리했어요. 자동 자막이라 잘못 받아 적히거나 빠진 말이 있을 수 있어요.",
      "영어 용어(mean, median, outlier, skewness 등)는 교수님이 말한 발음을 보고 영어 철자로 옮긴 거예요. 영어 정의 문장은 자료에 없어서 비워 두었어요.",
      "자막에 숫자가 일부만 잡힌 연습 문제(분산 10이 나온 데이터 등)는 확인된 숫자만 넣었어요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "n − 1로 나누는 이유와 상관계수 식을 유도하는 긴 수식 과정은 결론만 넣었어요. 판서는 영상에서 확인하세요.",
      "강의가 말하는 '다음 시간'의 확률 분포 내용은 이 영상에 없어서 넣지 않았어요."
    ] },
    { "title": "사용 안내", "items": [
      "추석 휴강으로 동영상 강의로 대체된 차시예요. 원본 영상 링크는 아래 '원본 자료'에 있어요.",
      "이 차시 퀴즈는 강의가 한국어라 한국어로 만들었어요."
    ] }
  ],
  "quiz": [
    { "id": "s04-2-q01", "q": "평균에 대한 설명으로 옳은 것은?", "choices": ["이상치가 있으면 그쪽으로 끌려간다", "이상치의 영향을 받지 않는다", "가장 자주 나오는 값이다", "정렬했을 때 가운데 값이다"], "answer": 0, "explain": "평균은 모든 값을 더하므로 아주 크거나 작은 값이 있으면 그쪽으로 끌려가요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q02", "q": "1, 3, 5, 7, 9, 10의 중앙값은?", "choices": ["6", "5", "7", "5.8"], "answer": 0, "explain": "개수가 짝수라서 가운데 두 값 5와 7의 평균인 6이에요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q03", "q": "1, 3, 5, 7에 이상치 100이 섞였을 때 어떤 값이 거의 그대로 유지되나?", "choices": ["중앙값", "평균", "범위", "분산"], "answer": 0, "explain": "중앙값은 가운데 값을 고르기 때문에 이상치에 강건해요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q04", "q": "12, 15, 18, 20, 25에 1,000이 끼면 범위는 어떻게 되나?", "choices": ["13에서 988로 크게 달라진다", "13 그대로다", "0이 된다", "18이 된다"], "answer": 0, "explain": "범위는 최댓값 − 최솟값이라 이상치 하나에도 크게 왜곡돼요.", "source": "101 002 Descriptive Statistics - Examples" },
    { "id": "s04-2-q05", "q": "모든 편차를 더하면 항상 얼마가 되나?", "choices": ["0", "1", "평균", "분산"], "answer": 0, "explain": "편차의 합은 항상 0이라서, 전체가 얼마나 퍼졌는지는 분산으로 봐요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q06", "q": "표본 분산을 구할 때 편차 제곱의 합을 무엇으로 나누나?", "choices": ["n − 1", "n", "n + 1", "n²"], "answer": 0, "explain": "n − 1로 나눠야 표본 분산의 기대값이 모분산과 같아져요. n으로 나누면 모분산보다 작아져요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q07", "q": "분산 대신 표준 편차를 쓰는 이유는?", "choices": ["원래 데이터와 단위가 같아서 얼마나 떨어졌는지 말하기 쉽다", "항상 분산보다 크다", "이상치를 자동으로 없애 준다", "음수가 나올 수 있다"], "answer": 0, "explain": "분산은 단위가 제곱이라, 제곱근을 씌운 표준 편차가 해석하기 쉬워요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q08", "q": "평균 70점, 표준 편차 8점일 때 99점의 Z 점수는 약 3.63이다. 이 점수는?", "choices": ["Z 점수 절댓값이 3보다 커서 이상치로 본다", "평균에 가까운 보통 점수다", "나올 수 없는 점수다", "중앙값이다"], "answer": 0, "explain": "이상치는 불가능한 값이 아니라 아주 드문 확률로 나오는 값이에요.", "source": "101 002 Descriptive Statistics - Examples" },
    { "id": "s04-2-q09", "q": "정규 분포에서 평균 ± 3 표준 편차 안에 값이 들어올 확률은?", "choices": ["약 99.7%", "약 68%", "약 95%", "100%"], "answer": 0, "explain": "±1은 약 68%, ±2는 약 95%, ±3은 약 99.7%예요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q10", "q": "IQR(사분위 범위)은?", "choices": ["Q3 − Q1", "최댓값 − 최솟값", "Q2 − Q1", "평균 − 중앙값"], "answer": 0, "explain": "IQR은 Q1부터 Q3까지의 구간이고, 일반 범위보다 이상치에 강건해요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q11", "q": "IQR로 이상치를 찾을 때 위 울타리는?", "choices": ["Q3 + 1.5 × IQR", "Q3 − 1.5 × IQR", "Q1 + 1.5 × IQR", "평균 + 3 × 표준 편차"], "answer": 0, "explain": "아래 울타리는 Q1 − 1.5 × IQR, 위 울타리는 Q3 + 1.5 × IQR이에요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q12", "q": "상관계수 r을 구하는 식은?", "choices": ["공분산 ÷ (x의 표준 편차 × y의 표준 편차)", "분산 ÷ 평균", "공분산 × 표준 편차", "편차의 합 ÷ n"], "answer": 0, "explain": "이 식은 두 편차 벡터 사이 각도의 코사인과 같아서 −1에서 1 사이 값이 나와요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q13", "q": "상관계수에 대한 설명으로 옳지 않은 것은?", "choices": ["r이 0이면 두 변수는 반드시 독립이다", "두 변수가 독립이면 r은 0이다", "r이 1이면 강한 양의 선형 상관이다", "r이 1보다 작은 건 관계가 비선형이어서일 수도 있다"], "answer": 0, "explain": "r이 0이면 선형 관계가 없다고는 말할 수 있지만, 꼭 독립인 건 아니에요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q14", "q": "오른쪽 꼬리가 긴 분포(왜도 > 0)에서 평균과 중앙값의 관계는?", "choices": ["평균 > 중앙값", "평균 < 중앙값", "평균 = 중앙값", "알 수 없다"], "answer": 0, "explain": "오른쪽 이상치가 평균을 끌어당겨서 평균이 중앙값보다 커져요.", "source": "101 001 Descriptive Statistics" },
    { "id": "s04-2-q15", "q": "첨도가 3보다 크다면?", "choices": ["꼬리가 두꺼워 이상치가 많을 수 있다", "꼬리가 얇다", "분포가 완전히 대칭이다", "평균이 0이다"], "answer": 0, "explain": "첨도는 3을 기준으로 봐요. 크면 이상치 관리 전략이 더 필요해요.", "source": "101 001 Descriptive Statistics" }
  ]
});
