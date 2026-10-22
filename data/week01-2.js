addSession({
  "week": 1,
  "session": "01-2",
  "kind": "특강",
  "lecturer": "최혜봉 교수",
  "title": "데이터과학의 이해",
  "intro": "데이터 과학이 무엇이고 어떤 단계로 일하는지, 어떤 직무가 있고 어디에 쓰이는지 배워요. 그리고 데이터를 해석할 때 빠지기 쉬운 함정도 살펴봐요.",
  "keypoints": ["데이터 과학은 빅데이터에서 행동으로 옮길 수 있는 통찰을 뽑아내는 과정이에요.", "데이터 과학은 데이터를 모으고, 다듬고, 패턴을 찾는 세 단계로 일해요.", "존 스노는 1854년 콜레라 사망자를 지도에 찍어 원인(우물)을 추적했어요.", "상관관계는 인과관계가 아니에요. 함께 움직인다고 원인이라는 뜻은 아니에요.", "데이터 과학은 데이터에서 가치를 찾고, AI는 기계 지능을 만들어요."],
  "sources": [
    { "index": "01", "title": "AI 융합입문 데이터 과학의 이해 (최혜봉, 55쪽)", "file": "260903 AI융합입문 데이터과학의 이해.pdf" }
  ],
  "groups": [
    { "id": "g-ds", "title": "데이터 과학이란?" },
    { "id": "g-pipe", "title": "데이터 파이프라인" },
    { "id": "g-roles", "title": "직무와 도구" },
    { "id": "g-use", "title": "활용 사례" },
    { "id": "g-trap", "title": "데이터 해석의 함정" },
    { "id": "g-dsai", "title": "데이터 과학과 AI" }
  ],
  "sections": [
    {
      "id": "data-science", "group": "g-ds", "title": "데이터 과학",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (2, 31–32쪽)",
      "definition": "빅데이터에서 행동으로 옮길 수 있는 통찰을 뽑아내는 과정이에요.",
      "points": [
        "온라인 쇼핑, SNS, 스마트폰 위치, 스마트홈 기기에서 데이터가 끊임없이 쌓여요.",
        "데이터는 기업과 정부가 세상을 이해하고 문제를 푸는 기반 자산이에요."
      ],
      "table": {
        "head": ["", "특징"],
        "rows": [
          ["빅데이터", "여러 종류가 섞여 있고 오류가 많아요. 이해하고 소통하기 어렵고 관리 비용이 커요"],
          ["데이터 과학을 거친 지식", "통일되어 있고 믿을 수 있어요. 바로 쓸 수 있고 다른 사람과 소통할 수 있어요"]
        ]
      },
      "keyterms": [
        { "en": "Data Science", "ko": "데이터 과학" },
        { "en": "Actionable Insight", "ko": "실행 가능한 통찰" },
        { "en": "Big Data", "ko": "빅데이터" },
        { "en": "Data as a Macro-Asset", "ko": "거시적 자산으로서의 데이터" }
      ]
    },
    {
      "id": "moores-law", "group": "g-ds", "title": "무어의 법칙",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (3–4쪽)",
      "definition": "메모리 용량이나 CPU 속도가 18~24개월마다 2배가 된다는 기술 발전 속도 법칙이에요.",
      "points": [
        "인텔의 고든 무어가 1965년에 주장했어요.",
        "컴퓨팅 성능은 18개월마다 2배가 되고, 가격은 반으로 떨어져요.",
        "그래서 데이터가 그 어느 때보다 빠르게 늘어나요."
      ],
      "keyterms": [
        { "en": "Moore's law", "ko": "무어의 법칙" },
        { "en": "Cheaper and Bigger", "ko": "더 싸고 더 크게" }
      ]
    },

    {
      "id": "pipeline-3", "group": "g-pipe", "title": "핵심 3단계 데이터 파이프라인",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (5쪽)",
      "definition": "데이터를 모으고, 다듬고, 패턴을 찾는 세 단계예요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["1. 원시 데이터 수집", "앱 로그, 결제 센서, 위치 정보 같은 가공 안 된 데이터를 체계적으로 모아요"],
          ["2. 정제와 처리", "결측치와 노이즈를 없애서 분석할 수 있는 상태로 만들어요"],
          ["3. 패턴 발견", "수학·통계 알고리즘으로 숨은 패턴을 찾고 미래를 예측해요"]
        ]
      },
      "keyterms": [
        { "en": "Raw Data Collection", "ko": "원시 데이터 수집" },
        { "en": "Cleaning & Processing", "ko": "정제와 처리" },
        { "en": "Uncovering Patterns", "ko": "패턴 발견" },
        { "en": "Missing Data", "ko": "결측치" }
      ]
    },
    {
      "id": "pipeline-5", "group": "g-pipe", "title": "전체 데이터 과학 파이프라인",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (29쪽)",
      "definition": "데이터 수집부터 배포와 운영까지 이어지는 다섯 단계예요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["1. 데이터 수집", "앱 로그, DB, API, IoT 센서에서 원시 데이터를 모아 쌓아요"],
          ["2. 정리와 ETL", "결측치 처리, 노이즈 제거, 정규화, 특성 공학 같은 전처리를 해요"],
          ["3. 탐색적 분석", "통계 요약과 시각화로 변수 사이 관계와 패턴을 찾아요"],
          ["4. 모델링", "알고리즘을 고르고 학습, 교차 검증, 하이퍼파라미터 튜닝을 해요"],
          ["5. 배포와 MLOps", "API 연동, 실시간 예측 배포, 성능 모니터링, 재학습 자동화를 만들어요"]
        ]
      },
      "keyterms": [
        { "en": "Data Ingestion", "ko": "데이터 수집" },
        { "en": "Wrangling & ETL", "ko": "정리와 ETL" },
        { "en": "Exploratory Analysis", "ko": "탐색적 분석" },
        { "en": "Deployment & MLOps", "ko": "배포와 MLOps" }
      ]
    },

    {
      "id": "roles", "group": "g-roles", "title": "데이터 직무",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (24–28쪽)",
      "definition": "데이터 과학에는 하는 일과 쓰는 도구가 다른 여러 직무가 있어요.",
      "table": {
        "head": ["직무", "핵심 역할", "주요 도구"],
        "rows": [
          ["데이터 엔지니어", "데이터가 다닐 '디지털 고속도로'를 만들어요. 수집 파이프라인과 저장소를 설계해요", "SQL, Python, Java, Scala, 클라우드"],
          ["데이터 분석가", "원시 데이터를 시각적 스토리로 바꿔요. 현재 상황을 설명하는 차트와 대시보드를 만들어요", "SQL, Tableau, Power BI, Excel"],
          ["데이터 사이언티스트", "통계와 머신러닝으로 심층 분석하고 미래를 예측해요", "Python, R, pandas, tidyverse"],
          ["머신러닝 사이언티스트", "예측 알고리즘과 딥러닝 모델 구조를 연구하고 만들어요", "TensorFlow, PyTorch"],
          ["AI 엔지니어", "AI 모델을 실제 제품에 넣고 배포·운영해요", "배포 프레임워크, API, 마이크로서비스"]
        ]
      },
      "keyterms": [
        { "en": "Data Engineer", "ko": "데이터 엔지니어" },
        { "en": "Data Analyst", "ko": "데이터 분석가" },
        { "en": "Data Scientist", "ko": "데이터 사이언티스트" },
        { "en": "AI Engineer", "ko": "AI 엔지니어" }
      ]
    },

    {
      "id": "prediction-value", "group": "g-use", "title": "예측이 만드는 가치",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (6, 23쪽)",
      "definition": "데이터로 결과를 미리 예측해서 건강, 안전, 편의를 높여요.",
      "table": {
        "head": ["분야", "예"],
        "rows": [
          ["질병 조기 감지", "바이탈 사인과 임상 기록 패턴으로 중증 질환 징후를 미리 잡아요"],
          ["이상 결제 감지", "기존 거래 패턴과 다른 결제를 실시간으로 찾아 사기를 막아요"],
          ["국지적 기상 예보", "위성 영상과 센서 데이터로 지역 날씨를 예측해요"],
          ["개인화 큐레이션", "청취 이력과 스킵 행동으로 기분에 맞는 음악 목록을 만들어요"],
          ["환경", "온실가스와 기후 데이터로 자연재해를 미리 예측해요"]
        ]
      },
      "keyterms": [
        { "en": "Identify Disease", "ko": "질병 조기 감지" },
        { "en": "Fraud Alert", "ko": "이상 결제 감지" },
        { "en": "Forecast Weather", "ko": "기상 예보" },
        { "en": "Predictive Models", "ko": "예측 모델" }
      ]
    },
    {
      "id": "recommendation", "group": "g-use", "title": "추천 엔진",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (10–21쪽)",
      "definition": "이용 기록을 분석해서 사용자에게 맞는 콘텐츠나 상품을 제안해요.",
      "points": [
        "넷플릭스·스포티파이는 시청·청취 패턴, 스킵, 검색 기록을 분석해요.",
        "아마존은 구매 이력, 브라우징 습관, 비슷한 쇼핑객 집단의 트렌드를 합쳐요.",
        "필요한 제품을 미리 예측해서 할인 알림 시점을 정해요."
      ],
      "example": {
        "title": "한동대 연구",
        "points": [
          "감정 인식 음악 추천: 날씨를 8개 군집으로 나누고, 비·눈 오는 날 선호하는 곡을 찾았어요.",
          "정치 정보 추천 시스템과 지역 도서관 도서 추천 인공 신경망 모델도 연구했어요."
        ]
      },
      "keyterms": [
        { "en": "Recommendation Engines", "ko": "추천 엔진" },
        { "en": "Data-Driven Insight", "ko": "데이터 기반 통찰" },
        { "en": "Emotion-Aware Music Recommendation", "ko": "감정 인식 음악 추천" }
      ]
    },
    {
      "id": "industry-cases", "group": "g-use", "title": "산업 사례",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (7–9, 34–44쪽)",
      "definition": "기업과 스포츠 팀이 데이터로 문제를 푸는 실제 사례예요.",
      "table": {
        "head": ["사례", "내용"],
        "rows": [
          ["수요 예측", "주문 이력과 경제 관련 외부 변수로 월별 제품 수요를 예측해 구매 계획을 세워요"],
          ["이탈 예측", "서비스 이용 패턴으로 곧 떠날 고객을 찾아 붙잡아요"],
          ["이상 탐지", "사기, 비정상 행동, 기계 고장을 찾아요"],
          ["스포츠", "선수 데이터를 실시간 분석해 전술과 훈련에 쓰고, F1 팀은 차량 센서 200개로 랩 타임을 줄여요"]
        ]
      },
      "points": [
        "이탈 예측은 프로모션 같은 대응과 서비스 근본 문제 개선으로 이어져요."
      ],
      "keyterms": [
        { "en": "Demand Forecasting", "ko": "수요 예측" },
        { "en": "Churn Prediction", "ko": "이탈 예측" },
        { "en": "Anomaly Detection", "ko": "이상 탐지" },
        { "en": "Fraud Detection", "ko": "사기 탐지" }
      ]
    },
    {
      "id": "genai", "group": "g-use", "title": "음성 비서와 생성형 AI",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (22쪽)",
      "definition": "딥러닝으로 말을 이해하고, 새로운 콘텐츠를 만들어요.",
      "table": {
        "head": ["", "하는 일"],
        "rows": [
          ["음성 비서 (Siri, Alexa, Google Assistant)", "자연어 음성을 이해하고 생활 패턴을 배워서 맥락에 맞게 답해요"],
          ["생성형 AI (ChatGPT, AI 그림 생성기)", "대규모 데이터로 미리 학습해서 이야기, 이메일 초안, 그림을 만들어요"]
        ]
      },
      "keyterms": [
        { "en": "Deep Learning Voice Assistants", "ko": "딥러닝 음성 비서" },
        { "en": "Generative AI", "ko": "생성형 AI" },
        { "en": "Extensive Datasets", "ko": "대규모 데이터셋" }
      ]
    },

    {
      "id": "john-snow", "group": "g-trap", "title": "존 스노우의 콜레라 지도",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (45–50쪽)",
      "definition": "1854년 런던 소호의 콜레라 사망자를 지도에 표시해서 원인을 추적한 사례예요.",
      "points": [
        "당시엔 나쁜 냄새가 콜레라 같은 병의 원인이라고 믿었어요.",
        "스노우는 하수에 오염된 식수를 원인으로 의심했어요.",
        "지도로 당국을 설득해서 브로드 가 펌프 손잡이를 떼어 냈어요."
      ],
      "cautions": [
        "지도는 상관관계를 보여 줄 뿐, 인과관계를 증명하진 않아요."
      ],
      "example": {
        "title": "지도의 예외를 조사하기",
        "points": [
          "사람들은 거리가 아니라 길 구조를 따라 펌프를 썼어요.",
          "양조장 직원은 직접 만든 술과 개인 우물을 마셨어요.",
          "나중에 펌프 근처에서 새는 오수 구덩이가 발견됐어요."
        ]
      },
      "keyterms": [
        { "en": "Miasma theory", "ko": "미아즈마 이론" },
        { "en": "Spot Map", "ko": "점 지도" },
        { "en": "Cholera", "ko": "콜레라" }
      ]
    },
    {
      "id": "correlation", "group": "g-trap", "title": "상관관계와 인과관계",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (50–51쪽)",
      "definition": "함께 움직인다고 해서 한쪽이 다른 쪽의 원인이라는 뜻은 아니에요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["관찰", "데이터에서 상관관계를 봐요"],
          ["가설", "가능한 설명을 세워요"],
          ["과학적 검증", "정말 원인인지 확인해요"]
        ]
      },
      "keyterms": [
        { "en": "Correlation", "ko": "상관관계" },
        { "en": "causality", "ko": "인과관계" },
        { "en": "Hypothesis", "ko": "가설" },
        { "en": "Scientific verification", "ko": "과학적 검증" }
      ]
    },
    {
      "id": "storytelling", "group": "g-trap", "title": "데이터 스토리텔링",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (52–54쪽)",
      "definition": "데이터로 찾은 내용을 듣는 사람에게 잘 전달하는 거예요.",
      "points": [
        "좋은 데이터 스토리텔링은 통찰력 있고, 설명적이고, 간결해요."
      ],
      "example": {
        "title": "챌린저호 사고 (1986)",
        "points": [
          "우주왕복선 챌린저호가 발사 중 폭발해 승무원 7명이 숨졌어요.",
          "경고는 좋았지만 전달이 나빴던 사례로 소개됐어요."
        ]
      },
      "keyterms": [
        { "en": "Data storytelling", "ko": "데이터 스토리텔링" },
        { "en": "Insightful", "ko": "통찰력 있는" },
        { "en": "Explanatory", "ko": "설명적인" },
        { "en": "Concise", "ko": "간결한" }
      ]
    },

    {
      "id": "ds-vs-ai", "group": "g-dsai", "title": "데이터 과학과 AI의 차이",
      "source": "260903 AI융합입문 데이터과학의 이해.pdf (55쪽)",
      "definition": "데이터 과학은 데이터에서 가치를 찾고, AI는 기계 지능을 만들어요.",
      "table": {
        "head": ["", "특징"],
        "rows": [
          ["데이터 과학", "패턴을 찾거나 예측하려고 기계학습 같은 기법을 써요. AI 서비스에 쓸 데이터를 수집·정제·관리해요"],
          ["AI", "사람의 지적 활동을 대신하거나 돕는 기계 지능을 만들어요. 주로 학습으로 지적 서비스를 만들어요"]
        ]
      },
      "cautions": [
        "강화학습이나 온라인 학습처럼, AI가 꼭 데이터로 학습하는 건 아니에요.",
        "규칙 기반 알고리즘으로도 AI를 만들 수 있어요."
      ],
      "keyterms": [
        { "en": "Data Science", "ko": "데이터 과학" },
        { "en": "AI", "ko": "인공지능" }
      ]
    }
  ],
  "terms": [
    { "en": "Data Science", "ko": "데이터 과학", "def": "빅데이터에서 행동으로 옮길 수 있는 통찰을 뽑아내는 과정이에요.", "def_en": "Data Science is a process that extract Actionable Insight from Big Data", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Moore's law", "ko": "무어의 법칙", "def": "컴퓨팅 성능이 18개월마다 2배가 되고, 가격은 반으로 떨어진다는 법칙이에요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Raw Data Collection", "ko": "원시 데이터 수집", "def": "가공 안 된 데이터를 체계적으로 모으는 단계예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Cleaning & Processing", "ko": "정제와 처리", "def": "결측치와 노이즈를 없애 분석할 수 있게 만드는 단계예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Uncovering Patterns", "ko": "패턴 발견", "def": "알고리즘으로 숨은 패턴을 찾고 미래를 예측하는 단계예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Exploratory Analysis", "ko": "탐색적 분석", "def": "통계 요약과 시각화로 변수 사이 관계와 패턴을 찾는 단계예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Modeling & ML", "ko": "모델링", "def": "알고리즘을 고르고 학습, 교차 검증, 하이퍼파라미터 튜닝을 하는 단계예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Deployment & MLOps", "ko": "배포와 MLOps", "def": "예측을 서비스로 배포하고, 성능을 모니터링하고, 재학습을 자동화하는 단계예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Data Engineer", "ko": "데이터 엔지니어", "def": "데이터 수집 파이프라인과 저장소를 설계해요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Data Analyst", "ko": "데이터 분석가", "def": "원시 데이터를 시각적 스토리로 바꿔요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Data Scientist", "ko": "데이터 사이언티스트", "def": "통계와 머신러닝으로 심층 분석하고 미래를 예측해요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Machine Learning Scientist", "ko": "머신러닝 사이언티스트", "def": "예측 알고리즘과 딥러닝 모델 구조를 연구하고 만들어요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "AI Engineer", "ko": "AI 엔지니어", "def": "AI 모델을 실제 제품에 넣고 운영해요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Churn Prediction", "ko": "이탈 예측", "def": "서비스 이용 패턴으로 곧 떠날 고객을 찾아요.", "def_en": "To find the customer who is just about to end the relation with the company", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Anomaly Detection", "ko": "이상 탐지", "def": "사기, 비정상 행동, 기계 고장처럼 평소와 다른 것을 찾아요.", "def_en": "Fraud Detection, Abnormal Behavior Detection, Machine Failure Prediction, etc.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Spot Map", "ko": "점 지도", "def": "존 스노우가 콜레라 사망자를 하나씩 표시한 지도예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Correlation", "ko": "상관관계", "def": "함께 움직이는 관계예요. 그 자체로 원인을 뜻하진 않아요.", "def_en": "Correlation does not directly imply causality", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Hypothesis", "ko": "가설", "def": "가능한 설명이에요. 과학적 검증이 필요해요.", "def_en": "Hypothesis: A possible explanation", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "en": "Data storytelling", "ko": "데이터 스토리텔링", "def": "데이터로 찾은 내용을 통찰력 있고, 설명적이고, 간결하게 전달하는 거예요.", "def_en": "", "source": "260903 AI융합입문 데이터과학의 이해.pdf" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "한국어 이름이 없는 영어 용어(Actionable Insight, Spot Map 등)는 내가 붙인 번역이에요.",
      "'특성 공학'은 슬라이드의 Feature Engineering을 옮긴 말이에요.",
      "챌린저호 사례는 슬라이드에 그림과 'Good warning, bad delivery'만 있어서, 자세한 경위는 넣지 않았어요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "그림만 있는 쪽(3, 7–9, 12–16, 20–21, 30, 33–36, 39–41쪽 등)의 그래프와 표 내용은 글자로 확인할 수 없어서 뺐어요.",
      "한동대 연구 사례의 세부 수치(날씨 군집 표, 노래 목록)는 뺐어요."
    ] },
    { "title": "사용 안내", "items": [
      "원본 PDF는 materials/week01 폴더에 있어요."
    ] }
  ],
  "quiz": [
    { "id": "s01-2-q01", "card": "data-science", "q": "According to the lecture, Data Science is a process that extracts what from Big Data?", "q_ko": "수업에 따르면, 데이터 과학은 빅데이터에서 무엇을 뽑아내는 과정인가요?", "choices_ko": ["행동으로 옮길 수 있는 통찰", "원시 데이터", "하드웨어 성능", "결측 데이터"], "choices": ["Actionable Insight", "Raw Data", "Hardware performance", "Missing Data"], "answer": 0, "explain": "데이터 과학은 빅데이터에서 실행 가능한 통찰을 뽑아내는 과정이에요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q02", "card": "moores-law", "q": "Moore's law says that computing performance doubles about every:", "q_ko": "무어의 법칙에 따르면 컴퓨터 성능은 약 얼마마다 2배가 되나요?", "choices_ko": ["18개월", "5년", "6개월", "10년"], "choices": ["18 months", "5 years", "6 months", "10 years"], "answer": 0, "explain": "컴퓨팅 성능은 18개월마다 2배가 되고, 가격은 반으로 떨어진다고 했어요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q03", "card": "pipeline-3", "q": "In the core 3-step pipeline, which step removes missing data and noise?", "q_ko": "핵심 3단계 파이프라인에서 결측 데이터와 노이즈를 없애는 단계는?", "choices_ko": ["정제와 처리", "원시 데이터 수집", "패턴 찾기", "배포와 MLOps"], "choices": ["Cleaning & Processing", "Raw Data Collection", "Uncovering Patterns", "Deployment & MLOps"], "answer": 0, "explain": "정제와 처리 단계에서 결측치와 노이즈를 없애요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q04", "card": "pipeline-5", "q": "Which pipeline step finds relationships between variables through statistical summaries and visualization?", "q_ko": "통계 요약과 시각화로 변수 사이 관계를 찾는 파이프라인 단계는?", "choices_ko": ["탐색적 분석", "데이터 수집", "데이터 정리와 ETL", "배포와 MLOps"], "choices": ["Exploratory Analysis", "Data Ingestion", "Wrangling & ETL", "Deployment & MLOps"], "answer": 0, "explain": "탐색적 분석 단계에서 통계 요약과 시각화로 변수 사이 관계를 찾아요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q05", "card": "roles", "q": "Which role designs the data collection pipelines and large-scale storage?", "q_ko": "데이터 수집 파이프라인과 대규모 저장소를 설계하는 직무는?", "choices_ko": ["데이터 엔지니어", "데이터 분석가", "데이터 과학자", "AI 엔지니어"], "choices": ["Data Engineer", "Data Analyst", "Data Scientist", "AI Engineer"], "answer": 0, "explain": "데이터 엔지니어는 데이터가 다닐 '디지털 고속도로'를 만들어요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q06", "card": "roles", "q": "Which role turns raw data into visual stories using tools such as Tableau and Power BI?", "q_ko": "Tableau, Power BI 같은 도구로 원시 데이터를 시각적 이야기로 바꾸는 직무는?", "choices_ko": ["데이터 분석가", "데이터 엔지니어", "머신러닝 과학자", "AI 엔지니어"], "choices": ["Data Analyst", "Data Engineer", "Machine Learning Scientist", "AI Engineer"], "answer": 0, "explain": "데이터 분석가는 차트와 대시보드로 현재 상황을 설명해요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q07", "card": "roles", "q": "Which role integrates AI models into real software and products?", "q_ko": "AI 모델을 실제 소프트웨어와 제품에 붙이는 직무는?", "choices_ko": ["AI 엔지니어", "데이터 분석가", "데이터 엔지니어", "데이터 과학자"], "choices": ["AI Engineer", "Data Analyst", "Data Engineer", "Data Scientist"], "answer": 0, "explain": "AI 엔지니어는 챗봇, 음성 비서 같은 실제 서비스에 모델을 넣고 운영해요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q08", "card": "industry-cases", "q": "What is the goal of Churn Prediction?", "q_ko": "이탈 예측의 목표는 무엇인가요?", "choices_ko": ["회사와의 관계를 막 끊으려는 고객을 찾는 것", "기계 고장을 감지하는 것", "지역 날씨를 예보하는 것", "비 오는 날 노래를 추천하는 것"], "choices": ["To find the customer who is just about to end the relation with the company", "To detect machine failure", "To forecast local weather", "To recommend songs for rainy days"], "answer": 0, "explain": "이탈 예측은 곧 떠날 고객을 찾아서 붙잡고, 서비스 문제를 개선하려는 거예요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q09", "card": "john-snow", "q": "Before John Snow's analysis, what was believed to cause diseases such as cholera?", "q_ko": "존 스노의 분석 전에는 콜레라 같은 병의 원인을 무엇이라고 믿었나요?", "choices_ko": ["쓰레기와 썩은 물질에서 나는 나쁜 냄새", "오염된 식수", "곤충", "추운 날씨"], "choices": ["Bad smells from waste and rotting matter", "Contaminated drinking water", "Insects", "Cold weather"], "answer": 0, "explain": "당시엔 나쁜 냄새(미아즈마)가 원인이라고 믿었어요. 스노우는 오염된 식수를 의심했어요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q10", "card": "correlation", "q": "Is John Snow's spot map a convincing scientific argument by itself?", "q_ko": "존 스노의 점 지도는 그것만으로 설득력 있는 과학적 근거인가요?", "choices_ko": ["아니요, 상관관계를 보여 줄 뿐 인과관계라고는 할 수 없어요", "네, 인과관계를 증명해요", "네, 모든 사망자가 기록됐으니까요", "아니요, 데이터가 없으니까요"], "choices": ["No, it shows a correlation, not necessarily causation", "Yes, it proves causation", "Yes, because every death was recorded", "No, because it has no data"], "answer": 0, "explain": "지도는 상관관계를 보여 줄 뿐이에요. 가설을 세우고 과학적으로 검증해야 해요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q11", "card": "storytelling", "q": "What three qualities of data storytelling did the lecture list?", "q_ko": "수업에서 말한 데이터 스토리텔링의 세 가지 특징은?", "choices_ko": ["통찰력 있게, 설명적으로, 간결하게", "길게, 자세하게, 복잡하게", "화려하게, 움직이게, 상호작용하게", "빠르게, 싸게, 크게"], "choices": ["Insightful, Explanatory, Concise", "Long, Detailed, Complex", "Colorful, Animated, Interactive", "Fast, Cheap, Bigger"], "answer": 0, "explain": "좋은 데이터 스토리텔링은 통찰력 있고, 설명적이고, 간결해요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" },
    { "id": "s01-2-q12", "card": "ds-vs-ai", "q": "Which statement about AI matches the lecture?", "q_ko": "AI에 대해 수업 내용과 맞는 말은?", "choices_ko": ["AI는 규칙 기반 알고리즘으로도 만들 수 있어요", "AI는 항상 데이터로 배워야 해요", "AI는 데이터 과학과 같아요", "AI는 데이터를 모으고 저장만 해요"], "choices": ["AI can also be built with rule-based algorithms", "AI must always learn from data", "AI is the same as data science", "AI only collects and stores data"], "answer": 0, "explain": "AI는 꼭 데이터로 학습하지 않아도 되고, 규칙 기반 알고리즘으로도 만들 수 있어요.", "source": "260903 AI융합입문 데이터과학의 이해.pdf" }
  ]
});
