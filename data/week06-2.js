addSession({
  "week": 6,
  "session": "06-2",
  "kind": "특강 (동영상 강의)",
  "lecturer": "박준수 교수",
  "title": "차원축소의 이해",
  "intro": "피처가 많아질 때 생기는 '차원의 저주'와, 이를 줄이는 차원 축소를 배워요. 대표 방법인 주성분 분석(PCA)이 공분산 행렬의 고유 벡터로 새 축을 찾는 원리까지 살펴봐요.",
  "sources": [
    { "index": "01", "title": "Dimensionality Reduction (85분, 자동 자막 기준)", "url": "https://youtu.be/sCSCjVnPAI0" }
  ],
  "groups": [
    { "id": "g-dim", "title": "차원과 차원의 저주" },
    { "id": "g-reduce", "title": "차원 축소" },
    { "id": "g-pca", "title": "주성분 분석(PCA)" },
    { "id": "g-math", "title": "PCA의 원리" }
  ],
  "sections": [
    {
      "id": "dimensionality", "group": "g-dim", "title": "차원",
      "source": "Dimensionality Reduction (영상 앞부분)",
      "definition": "데이터 포인트 하나를 이루는 피처의 개수예요.",
      "points": [
        "데이터 포인트 하나는 피처를 좌표로 하는 공간의 위치 벡터로 볼 수 있어요.",
        "피처가 2개면 평면, 3개면 3차원 공간, n개면 n차원 공간이 필요해요."
      ],
      "example": {
        "title": "학생 키와 몸무게",
        "points": [
          "키와 몸무게 두 피처라서 2차원 평면에 점으로 찍어요.",
          "(175, 65)와 (174, 70)은 가깝고, (190, 90)은 멀리 떨어져 있어요.",
          "점 사이 거리로 데이터끼리 얼마나 비슷한지 재요."
        ]
      },
      "keyterms": [
        { "en": "dimensionality", "ko": "차원" },
        { "en": "feature", "ko": "피처" },
        { "en": "position vector", "ko": "위치 벡터" }
      ]
    },
    {
      "id": "curse", "group": "g-dim", "title": "차원의 저주",
      "source": "Dimensionality Reduction",
      "definition": "차원이 높아질수록 데이터를 다루기 어려워지는 여러 문제를 말해요.",
      "table": {
        "head": ["문제", "내용"],
        "rows": [
          ["거리", "점들 사이가 멀어지고 거리가 비슷비슷해져서 구분하기 어려워요"],
          ["모델 성능", "거리를 이용해 배우는 모델이 잘 작동하지 않아요"],
          ["계산 비용", "학습하고 사용하는 데 드는 계산이 크게 늘어요"],
          ["시각화", "4차원부터는 한 번에 그려 볼 수 없어서 해석이 어려워요"],
          ["희소성", "공간 부피가 커져서 같은 데이터도 드문드문해져요"]
        ]
      },
      "example": {
        "title": "거리가 비슷해지는 문제",
        "points": [
          "거리 3과 10은 세 배 넘게 차이 나요.",
          "하지만 10만 3과 10만 10은 거의 차이가 없어요."
        ]
      },
      "keyterms": [
        { "en": "Curse of dimensionality", "ko": "차원의 저주" },
        { "en": "computational cost", "ko": "계산 비용" },
        { "en": "sparse", "ko": "희소한" }
      ]
    },

    {
      "id": "reduction", "group": "g-reduce", "title": "차원 축소",
      "source": "Dimensionality Reduction",
      "definition": "데이터의 구조와 의미는 최대한 지키면서 차원을 줄이는 방법이에요.",
      "points": [
        "고차원 데이터도 몇 가지 숨은 요인이 값을 정하는 경우가 많다는 데서 출발해요.",
        "그 요인을 축으로 하는 저차원 공간에 투영해서 데이터를 근사해요."
      ],
      "cautions": [
        "저차원으로 옮기면 정보가 일부 사라져요.",
        "잃는 정보보다 얻는 것이 클 때 쓰는 게 합리적이에요."
      ],
      "keyterms": [
        { "en": "Dimensionality reduction", "ko": "차원 축소" },
        { "en": "underlying factors", "ko": "숨은 요인" },
        { "en": "projection", "ko": "투영" },
        { "en": "approximation", "ko": "근사" }
      ]
    },
    {
      "id": "selection-extraction", "group": "g-reduce", "title": "피처 선택과 피처 추출",
      "source": "Dimensionality Reduction",
      "definition": "숨은 요인을 찾는 두 가지 방법이에요.",
      "table": {
        "head": ["방법", "하는 일"],
        "rows": [
          ["피처 선택", "전문가 지식이나 경험으로 중요한 피처 일부만 골라요 (예: 100개 중 10개 → 100차원에서 10차원)"],
          ["피처 추출", "원래 피처들을 섞어서 핵심 정보만 담은 새 피처를 만들고, 그것을 새 축으로 써요"]
        ]
      },
      "cautions": [
        "키와 몸무게처럼 둘 다 중요하면 하나만 고르기 어려워서 피처 추출을 써요."
      ],
      "example": {
        "title": "3차원 상자 데이터",
        "points": [
          "z축 정보를 버리면 2차원, y축 정보까지 버리면 1차원이 돼요.",
          "이건 피처 선택이에요."
        ]
      },
      "keyterms": [
        { "en": "Feature selection", "ko": "피처 선택" },
        { "en": "Feature extraction", "ko": "피처 추출" }
      ]
    },

    {
      "id": "pca", "group": "g-pca", "title": "주성분 분석",
      "source": "Dimensionality Reduction",
      "definition": "데이터가 가장 넓게 퍼진 방향을 새 축으로 찾고, 그 축에 투영해서 차원을 줄여요.",
      "points": [
        "주성분 분석(PCA)은 가장 널리 쓰이는 피처 추출 방법이고, NMF도 있어요.",
        "분산이 가장 큰 축이 데이터를 가장 잘 구분해서 나타내요."
      ],
      "cautions": [
        "새 피처는 원래 피처가 섞인 값이라 물리적 의미를 해석하기 어려워요."
      ],
      "example": {
        "title": "키와 몸무게를 1차원으로",
        "points": [
          "데이터 중심을 지나는 여러 축 후보 중에서 분산이 가장 큰 축을 골라요.",
          "각 점을 그 축에 수직으로 투영해서 길이 하나(L1, L2…)로 나타내요."
        ]
      },
      "keyterms": [
        { "en": "Principal Component Analysis (PCA)", "ko": "주성분 분석" },
        { "en": "principal components", "ko": "주성분" },
        { "en": "NMF", "ko": "음이 아닌 행렬 분해" }
      ]
    },
    {
      "id": "pca-steps", "group": "g-pca", "title": "PCA 순서",
      "source": "Dimensionality Reduction",
      "definition": "중심화부터 투영까지 여섯 단계로 진행해요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["1. 중심화", "피처마다 평균을 빼서 데이터 중심을 원점으로 옮겨요"],
          ["2. 공분산 행렬", "중심화한 데이터로 공분산 행렬을 구해요"],
          ["3. 고유값·고유 벡터", "공분산 행렬의 고유값과 고유 벡터를 구해요"],
          ["4. 정렬", "고유값이 큰 순서로 정렬해요"],
          ["5. 주성분 선택", "위에서부터 원하는 차원 수만큼 고유 벡터를 골라요"],
          ["6. 투영", "데이터를 고른 축에 투영해서 새 좌표를 얻어요"]
        ]
      },
      "keyterms": [
        { "en": "covariance matrix", "ko": "공분산 행렬" },
        { "en": "eigenvalue", "ko": "고유값" },
        { "en": "eigenvector", "ko": "고유 벡터" }
      ]
    },
    {
      "id": "pca-demo", "group": "g-pca", "title": "PCA 실습",
      "source": "Dimensionality Reduction (영상 끝부분)",
      "definition": "3차원 데이터를 PCA로 2차원으로 줄여서 시각화하는 실습이에요.",
      "points": [
        "수업 리포지토리의 차원 축소 파일에서 볼 수 있어요.",
        "코드는 중심화, 공분산, 고유값 정렬, 주성분 선택, 투영 순서로 짜여 있어요.",
        "배운 이론으로 직접 PCA를 짜 보면 가산점이 있다고 했어요."
      ],
      "example": {
        "title": "3차원 → 2차원",
        "points": [
          "데이터를 기울여 보면 거의 한 평면 위에 놓여 있어요.",
          "그래서 분산이 큰 두 주성분으로 나타내도 무리가 없어요."
        ]
      },
      "keyterms": [
        { "en": "repository", "ko": "리포지토리" }
      ]
    },

    {
      "id": "covariance-matrix", "group": "g-math", "title": "공분산 행렬",
      "source": "Dimensionality Reduction",
      "definition": "피처 두 개씩 짝지어 구한 공분산을 모아 놓은 행렬이에요.",
      "formula": { "ko": "공분산 행렬 = (중심화한 데이터의 전치 × 중심화한 데이터) ÷ (n − 1)", "en": "Σ = XcᵀXc / (n − 1)" },
      "points": [
        "대각선에는 각 피처의 분산이, 나머지 칸에는 피처끼리의 공분산이 들어가요.",
        "공분산 행렬은 대칭 행렬이에요."
      ],
      "keyterms": [
        { "en": "covariance matrix", "ko": "공분산 행렬" },
        { "en": "centered", "ko": "중심화된" },
        { "en": "transpose", "ko": "전치" }
      ]
    },
    {
      "id": "new-feature", "group": "g-math", "title": "새 피처와 투영",
      "source": "Dimensionality Reduction",
      "definition": "새 피처 z는 원래 피처들을 계수 벡터 v로 섞은 값이에요.",
      "formula": { "ko": "새 피처 = 계수 벡터의 전치 × 데이터 벡터 (계수 벡터 길이 = 1)", "en": "z = vᵀxᵢ" },
      "points": [
        "v의 길이를 1로 정하면, z는 데이터 벡터를 v 방향에 투영한 길이예요.",
        "그래서 v가 새 좌표축의 방향이 돼요."
      ],
      "keyterms": [
        { "en": "linear combination", "ko": "선형 결합" },
        { "en": "unit vector", "ko": "단위 벡터" },
        { "en": "projection", "ko": "투영" }
      ]
    },
    {
      "id": "variance-eigen", "group": "g-math", "title": "분산 최대화와 고유 벡터",
      "source": "Dimensionality Reduction",
      "definition": "새 피처의 분산을 가장 크게 만드는 방향 v는 공분산 행렬의 고유 벡터예요.",
      "formula": { "ko": "새 피처의 분산 = vᵀΣv, 최적일 때 Σv = λv", "en": "Var(z) = vᵀΣv, Σv = λv" },
      "points": [
        "v의 길이가 1이라는 제약 아래 라그랑주 조건으로 풀어요.",
        "이때 새 피처의 분산은 고유값 λ와 같아요.",
        "그래서 고유값이 큰 고유 벡터부터 주성분으로 골라요."
      ],
      "keyterms": [
        { "en": "eigenvalue", "ko": "고유값" },
        { "en": "eigenvector", "ko": "고유 벡터" },
        { "en": "", "ko": "라그랑주 조건" }
      ]
    },
    {
      "id": "orthogonal", "group": "g-math", "title": "주성분끼리는 서로 수직",
      "source": "Dimensionality Reduction",
      "definition": "고유값이 서로 다른 고유 벡터끼리는 내적이 0이라 90도로 만나요.",
      "points": [
        "공분산 행렬이 대칭 행렬이라서 생기는 성질이에요."
      ],
      "keyterms": [
        { "en": "", "ko": "직교 (서로 수직)" },
        { "en": "", "ko": "대칭 행렬" }
      ]
    }
  ],
  "terms": [
    { "en": "dimensionality", "ko": "차원", "def": "데이터 포인트 하나를 이루는 피처의 개수예요.", "def_en": "number of features in a dataset", "source": "Dimensionality Reduction" },
    { "en": "Curse of dimensionality", "ko": "차원의 저주", "def": "차원이 높아질수록 거리 구분, 계산, 시각화가 어려워지는 문제예요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "Dimensionality reduction", "ko": "차원 축소", "def": "데이터의 구조와 의미를 지키면서 차원을 줄이는 방법이에요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "Feature selection", "ko": "피처 선택", "def": "중요한 피처 일부만 골라서 차원을 줄여요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "Feature extraction", "ko": "피처 추출", "def": "원래 피처들을 섞어 핵심 정보를 담은 새 피처를 만들어요.", "def_en": "Transform the original variables into a new set of features that retain the essential information with minimal loss", "source": "Dimensionality Reduction" },
    { "en": "Principal Component Analysis (PCA)", "ko": "주성분 분석", "def": "분산이 가장 큰 방향을 새 축으로 찾아 투영해서 차원을 줄여요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "NMF", "ko": "음이 아닌 행렬 분해", "def": "피처 추출에 쓰는 또 다른 알고리즘이에요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "principal components", "ko": "주성분", "def": "고유값이 큰 순서로 고른 새 좌표축 방향이에요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "projection", "ko": "투영", "def": "데이터를 새 축에 수직으로 내려서 그 축 위의 좌표로 나타내는 거예요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "covariance matrix", "ko": "공분산 행렬", "def": "피처 두 개씩의 공분산을 모은 대칭 행렬이에요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "eigenvalue", "ko": "고유값", "def": "Σv = λv에서 λ예요. PCA에서는 그 방향 새 피처의 분산이에요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "eigenvector", "ko": "고유 벡터", "def": "행렬을 곱해도 방향은 그대로고 크기만 바뀌는 벡터예요. PCA의 새 축 방향이에요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "unit vector", "ko": "단위 벡터", "def": "길이가 1인 벡터예요.", "def_en": "", "source": "Dimensionality Reduction" },
    { "en": "", "ko": "직교", "def": "두 벡터가 90도로 만나는 거예요. 내적이 0이에요.", "def_en": "", "source": "Dimensionality Reduction" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "강의 영상의 한국어 자동 자막을 바탕으로 정리했어요. 자동 자막이라 잘못 받아 적히거나 빠진 말이 있을 수 있어요.",
      "영어 용어는 교수님이 말한 영어 발음과 영상에 나온 영어 문장을 보고 옮긴 거예요. 'dimensionality'와 'Feature extraction'의 영어 정의는 자막에서 받아 적힌 문장을 다듬은 거예요.",
      "NMF의 한국어 이름(음이 아닌 행렬 분해)은 강의에 나오지 않아서 내가 붙였어요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "공분산 행렬, 분산 최대화, 고유 벡터 직교를 유도하는 긴 판서 과정은 결론만 넣었어요. 자세한 식은 영상에서 확인하세요.",
      "라그랑주 조건과 고유값 분해는 강의에서도 '따로 찾아보라'고 해서 자세히 넣지 않았어요."
    ] },
    { "title": "사용 안내", "items": [
      "한글날 휴강으로 동영상 강의로 대체된 차시예요. 원본 영상 링크는 아래 '원본 자료'에 있어요.",
      "이 차시 퀴즈는 강의가 한국어라 한국어로 만들었어요."
    ] }
  ],
  "quiz": [
    { "id": "s06-2-q01", "q": "데이터 과학에서 차원(dimensionality)이란?", "choices": ["데이터 포인트 하나를 이루는 피처의 개수", "데이터 포인트의 개수", "데이터의 평균", "모델의 층 수"], "answer": 0, "explain": "피처가 n개면 데이터 포인트 하나를 나타내는 데 n차원 공간이 필요해요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q02", "q": "차원의 저주에서 '거리' 문제란?", "choices": ["점들 사이가 멀어지고 거리가 비슷해져서 구분이 어려워진다", "점들이 모두 한 점으로 모인다", "거리를 계산할 수 없게 된다", "거리가 모두 0이 된다"], "answer": 0, "explain": "10만 3과 10만 10처럼 거리가 모두 커지면 차이가 거의 없어져요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q03", "q": "차원의 저주로 생기는 문제가 아닌 것은?", "choices": ["데이터 포인트 수가 저절로 늘어난다", "계산 비용이 크게 늘어난다", "4차원부터는 시각화가 어렵다", "거리로 배우는 모델의 성능이 떨어진다"], "answer": 0, "explain": "오히려 같은 수의 데이터가 넓은 공간에 드문드문해져요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q04", "q": "차원 축소에 대한 설명으로 옳은 것은?", "choices": ["정보가 일부 사라지지만, 얻는 것이 크면 쓰는 게 합리적이다", "정보가 전혀 사라지지 않는다", "항상 피처 수를 1개로 줄인다", "데이터 포인트 수를 줄이는 방법이다"], "answer": 0, "explain": "저차원 공간으로 투영하면서 근사하기 때문에 정보 손실이 있어요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q05", "q": "100개 피처 중 전문가 지식으로 중요한 10개만 고르는 방법은?", "choices": ["피처 선택", "피처 추출", "PCA", "투영"], "answer": 0, "explain": "피처 선택은 있는 피처 중 일부를 고르고, 피처 추출은 피처를 섞어 새 피처를 만들어요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q06", "q": "PCA는 새 축을 어떤 기준으로 고르나?", "choices": ["데이터의 분산이 가장 큰 방향", "데이터의 분산이 가장 작은 방향", "원래 x축 방향", "데이터 포인트가 가장 적은 방향"], "answer": 0, "explain": "분산이 가장 큰 축이 데이터를 가장 잘 구분해서 나타내요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q07", "q": "PCA로 만든 새 피처의 단점은?", "choices": ["원래 피처가 섞인 값이라 물리적 의미를 해석하기 어렵다", "항상 원래 피처보다 분산이 작다", "시각화할 수 없다", "계산이 원래보다 더 많아진다"], "answer": 0, "explain": "키와 몸무게가 섞인 값이라 무엇을 뜻하는지 말하기 어려워요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q08", "q": "PCA의 첫 단계는?", "choices": ["피처마다 평균을 빼서 데이터 중심을 원점으로 옮긴다", "고유값을 정렬한다", "데이터를 새 축에 투영한다", "피처를 하나 지운다"], "answer": 0, "explain": "중심화 → 공분산 행렬 → 고유값·고유 벡터 → 정렬 → 주성분 선택 → 투영 순서예요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q09", "q": "공분산 행렬의 대각선에 들어가는 값은?", "choices": ["각 피처의 분산", "각 피처의 평균", "고유값", "0"], "answer": 0, "explain": "같은 피처끼리의 공분산은 그 피처의 분산이에요. 나머지 칸은 피처끼리의 공분산이에요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q10", "q": "새 피처의 분산을 최대로 만드는 방향 v는?", "choices": ["공분산 행렬의 고유 벡터", "데이터의 평균 벡터", "원래 피처 중 가장 큰 것", "임의의 단위 벡터"], "answer": 0, "explain": "Σv = λv를 만족하는 고유 벡터이고, 그때 분산은 고유값 λ와 같아요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q11", "q": "2차원으로 줄이려면 어떤 주성분을 고르나?", "choices": ["고유값이 가장 큰 두 고유 벡터", "고유값이 가장 작은 두 고유 벡터", "아무 고유 벡터 두 개", "원래 피처 두 개"], "answer": 0, "explain": "고유값이 클수록 그 방향의 분산이 커서, 큰 순서로 원하는 차원 수만큼 골라요.", "source": "Dimensionality Reduction" },
    { "id": "s06-2-q12", "q": "PCA에서 구한 주성분 축들은 서로 어떤 관계인가?", "choices": ["서로 수직(90도)으로 만난다", "모두 같은 방향이다", "서로 45도로 만난다", "항상 원래 축과 같다"], "answer": 0, "explain": "공분산 행렬이 대칭이라 서로 다른 고유값의 고유 벡터끼리는 내적이 0이에요.", "source": "Dimensionality Reduction" }
  ]
});
