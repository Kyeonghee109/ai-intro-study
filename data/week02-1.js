addSession({
  "week": 2,
  "session": "02-1",
  "kind": "특강 (02-1 · 02-2)",
  "lecturer": "Yang Xiapeng 교수",
  "title": "인공지능의 이해 I · II",
  "intro": "AI의 역사와 종류, 머신러닝과 딥러닝의 기본 개념을 배워요. 신경망이 어떻게 학습하는지, 어떤 구조가 있는지, 최신 언어 모델과 AI 윤리까지 살펴봐요.",
  "sources": [
    { "index": "01", "title": "Lecture 1: Introduction to AI: Theory and Practice (44쪽)", "file": "Intro to AI.pdf" }
  ],
  "groups": [
    { "id": "g-bg", "title": "AI의 배경" },
    { "id": "g-ml", "title": "머신러닝" },
    { "id": "g-nn", "title": "신경망과 학습" },
    { "id": "g-arch", "title": "딥러닝 구조" },
    { "id": "g-llm", "title": "언어 모델과 최신 흐름" },
    { "id": "g-eth", "title": "안전과 윤리" }
  ],
  "sections": [
    {
      "id": "ai-history", "group": "g-bg", "title": "AI의 역사",
      "source": "Intro to AI.pdf (3쪽)",
      "definition": "규칙으로 지능을 표현하던 AI에서, 데이터로 배우는 AI로 바뀌어 왔어요.",
      "table": {
        "head": ["연도", "사건"],
        "rows": [
          ["1950", "튜링 테스트 제안"],
          ["1956", "다트머스 워크숍에서 'AI'라는 말이 생김"],
          ["1980년대", "전문가 시스템 붐"],
          ["1987–93", "AI 겨울: 연구비가 끊김"],
          ["1997", "딥블루가 체스 세계 챔피언을 이김"],
          ["2012", "AlexNet이 딥러닝 붐을 일으킴"],
          ["2020년대", "대규모 언어 모델 (GPT 등)"]
        ]
      },
      "points": [
        "기호 AI는 사람이 쓴 규칙과 논리로 지능을 표현했어요.",
        "통계·연결주의 AI는 규칙 대신 데이터에서 직접 패턴을 배워요.",
        "빅데이터, GPU, 알고리즘 덕분에 2012년 이후 빠르게 발전했어요."
      ],
      "cautions": [
        "기호 AI는 상식과 규모의 한계에 부딪혀 AI 겨울을 맞았어요."
      ],
      "keyterms": [
        { "en": "Turing Test", "ko": "튜링 테스트" },
        { "en": "Symbolic AI (“GOFAI”)", "ko": "기호 AI" },
        { "en": "AI Winter", "ko": "AI 겨울" },
        { "en": "Statistical & Connectionist AI", "ko": "통계·연결주의 AI" }
      ]
    },
    {
      "id": "ai-def", "group": "g-bg", "title": "AI란?",
      "source": "Intro to AI.pdf (5쪽)",
      "definition": "지능적인 기계, 특히 지능적인 컴퓨터 프로그램을 만드는 과학과 공학이에요.",
      "points": [
        "AI의 아버지 매카시가 1989년에 이렇게 정의했어요.",
        "목표 하나는 지능적으로 행동하고 배우고 설명하고 조언하는 전문가 시스템을 만드는 거예요.",
        "다른 목표는 사람처럼 이해하고 생각하고 배우는 시스템을 만드는 거예요."
      ],
      "keyterms": [
        { "en": "Artificial Intelligence", "ko": "인공지능" },
        { "en": "Expert Systems", "ko": "전문가 시스템" }
      ]
    },
    {
      "id": "ai-capability", "group": "g-bg", "title": "능력에 따른 AI 종류",
      "source": "Intro to AI.pdf (4쪽)",
      "definition": "AI가 얼마나 넓은 일을 할 수 있는지에 따라 셋으로 나눠요.",
      "table": {
        "head": ["종류", "뜻"],
        "rows": [
          ["좁은 AI(ANI)", "한 가지 일만 해요. 지금 쓰는 AI 대부분이에요 (ChatGPT, Siri, 넷플릭스 추천)"],
          ["일반 AI(AGI)", "어떤 일이든 사람 수준으로 추론해요. 아직 없어요"],
          ["초인공지능(ASI)", "사람 지능을 넓게 넘어서요. 이론 단계예요"]
        ]
      },
      "points": [
        "이 수업의 딥러닝 모델을 포함해 지금 쓰이는 AI는 거의 다 좁은 AI예요."
      ],
      "keyterms": [
        { "en": "Narrow AI (ANI)", "ko": "좁은 AI" },
        { "en": "General AI (AGI)", "ko": "일반 AI" },
        { "en": "Super AI (ASI)", "ko": "초인공지능" }
      ]
    },
    {
      "id": "ai-functionality", "group": "g-bg", "title": "기능에 따른 AI 종류",
      "source": "Intro to AI.pdf (4쪽)",
      "definition": "AI가 기억과 이해를 얼마나 갖췄는지에 따라 넷으로 나눠요.",
      "table": {
        "head": ["종류", "뜻"],
        "rows": [
          ["반응형 기계", "과거를 기억하지 않아요 (예: 딥블루)"],
          ["제한된 기억", "최근 데이터를 써요. 요즘 ML/DL 시스템 대부분이에요"],
          ["마음 이론", "믿음과 감정을 이해해요. 연구 단계예요"],
          ["자기 인식", "기계 의식이에요. 가설 단계예요"]
        ]
      },
      "keyterms": [
        { "en": "Reactive Machines", "ko": "반응형 기계" },
        { "en": "Limited Memory", "ko": "제한된 기억" },
        { "en": "Theory of Mind", "ko": "마음 이론" },
        { "en": "Self-Aware", "ko": "자기 인식" }
      ]
    },
    {
      "id": "agents", "group": "g-bg", "title": "지능형 에이전트",
      "source": "Intro to AI.pdf (8쪽)",
      "definition": "센서로 환경을 인식하고, 액추에이터로 행동하는 주체예요.",
      "points": [
        "합리적 에이전트는 성능 척도를 가장 크게 만드는 행동을 골라요.",
        "로봇, 자율주행차, 게임 프로그램의 바탕이 되는 틀이에요."
      ],
      "table": {
        "head": ["방법", "하는 일"],
        "rows": [
          ["탐색", "BFS, DFS, A* 같은 알고리즘으로 목표 상태까지 가는 길을 찾아요"],
          ["지식 표현과 논리", "사실과 규칙으로 추론해요 (예: 전문가 시스템)"],
          ["계획", "목표에 닿도록 행동 순서를 정해요 (예: 로봇 길찾기)"]
        ]
      },
      "keyterms": [
        { "en": "Intelligent Agents (PEAS)", "ko": "지능형 에이전트" },
        { "en": "rational agent", "ko": "합리적 에이전트" },
        { "en": "Performance measure", "ko": "성능 척도" },
        { "en": "Search algorithms", "ko": "탐색 알고리즘" }
      ]
    },

    {
      "id": "ml-dl", "group": "g-ml", "title": "머신러닝과 딥러닝",
      "source": "Intro to AI.pdf (6쪽)",
      "definition": "머신러닝은 경험으로 스스로 나아지는 알고리즘이고, 딥러닝은 그중 여러 층 신경망을 쓰는 분야예요.",
      "table": {
        "head": ["", "뜻"],
        "rows": [
          ["머신러닝", "경험을 통해 자동으로 나아지는 컴퓨터 알고리즘을 연구해요. 사람 도움 없이 배우고 행동을 고치는 게 목표예요"],
          ["딥러닝", "여러 층 신경망이 많은 데이터에서 배우는 머신러닝의 한 분야예요"]
        ]
      },
      "points": [
        "딥러닝은 표현 학습을 하는 인공 신경망 기반 방법이에요."
      ],
      "keyterms": [
        { "en": "Machine Learning", "ko": "머신러닝" },
        { "en": "Deep learning", "ko": "딥러닝" },
        { "en": "artificial neural networks (ANN)", "ko": "인공 신경망" },
        { "en": "representation learning", "ko": "표현 학습" }
      ]
    },
    {
      "id": "paradigms", "group": "g-ml", "title": "학습 방식",
      "source": "Intro to AI.pdf (11쪽)",
      "definition": "기계가 데이터에서 배우는 방식은 크게 셋이에요.",
      "table": {
        "head": ["방식", "배우는 법", "예"],
        "rows": [
          ["지도 학습", "정답이 붙은 예시로 배워요", "Face ID, 스팸 필터"],
          ["비지도 학습", "정답 없이 구조를 찾아요", "비슷한 취향의 청취자 묶기, 이상한 소비 찾기"],
          ["강화 학습", "보상과 벌점으로 시행착오하며 배워요", "알파고, 걷기·공중제비를 배우는 로봇"]
        ]
      },
      "points": [
        "이 수업의 신경망은 주로 지도 학습으로 학습해요."
      ],
      "keyterms": [
        { "en": "Supervised Learning", "ko": "지도 학습" },
        { "en": "Unsupervised Learning", "ko": "비지도 학습" },
        { "en": "Reinforcement Learning", "ko": "강화 학습" }
      ]
    },

    {
      "id": "neuron", "group": "g-nn", "title": "뉴런과 신경망",
      "source": "Intro to AI.pdf (12–13쪽)",
      "definition": "뉴런은 입력에 가중치를 곱해 더한 뒤, 활성화 함수를 거쳐 출력을 내요.",
      "points": [
        "흔한 활성화 함수는 계단, 시그모이드, tanh, ReLU예요.",
        "뉴런이 충분하면 한 층으로도 거의 모든 함수를 근사할 수 있어요.",
        "하지만 여러 층 구조가 복잡한 패턴을 훨씬 효율적으로 나타내요."
      ],
      "keyterms": [
        { "en": "single neuron", "ko": "뉴런" },
        { "en": "weight", "ko": "가중치" },
        { "en": "activation function", "ko": "활성화 함수" },
        { "en": "Single-layer network", "ko": "단층 신경망" }
      ]
    },
    {
      "id": "training", "group": "g-nn", "title": "신경망 학습",
      "source": "Intro to AI.pdf (14쪽)",
      "definition": "손실을 재고, 오차를 거꾸로 보내고, 가중치를 고치는 일을 반복해요.",
      "formula": { "ko": "순전파 → 손실 계산 → 역전파 → 가중치 업데이트 (손실이 더 줄지 않을 때까지 반복)", "en": "Forward Pass → Compute Loss → Backward Pass → Update Weights (repeat until loss stops improving)" },
      "table": {
        "head": ["요소", "하는 일"],
        "rows": [
          ["손실 함수", "예측이 정답과 얼마나 다른지 재요"],
          ["경사하강법", "손실이 줄어드는 방향으로 모든 가중치를 조금씩 움직여요. 골짜기를 따라 내려가는 것과 같아요"],
          ["역전파", "오차 신호를 층마다 거꾸로 보내서 모든 가중치가 고칠 방향을 알게 해요"]
        ]
      },
      "keyterms": [
        { "en": "Loss function", "ko": "손실 함수" },
        { "en": "Gradient descent", "ko": "경사하강법" },
        { "en": "Backpropagation", "ko": "역전파" }
      ]
    },
    {
      "id": "relu", "group": "g-nn", "title": "최신 활성화 함수",
      "source": "Intro to AI.pdf (15쪽)",
      "definition": "ReLU처럼 더 깊은 신경망 학습을 돕는 활성화 함수예요.",
      "points": [
        "ReLU는 경사가 포화되지 않아서 확률적 경사하강법이 시그모이드보다 훨씬 빨리 수렴해요.",
        "Leaky ReLU 같은 변형도 있어요."
      ],
      "keyterms": [
        { "en": "Rectified linear unit (ReLU)", "ko": "ReLU" },
        { "en": "Leaky ReLU (LReLU)", "ko": "Leaky ReLU" },
        { "en": "non-saturation", "ko": "포화되지 않음" },
        { "en": "stochastic gradient descent", "ko": "확률적 경사하강법" }
      ]
    },
    {
      "id": "dl-cautions", "group": "g-nn", "title": "딥러닝 학습 때 주의할 점",
      "source": "Intro to AI.pdf (17–18쪽)",
      "definition": "학습할 때 자주 생기는 문제와 대처법이에요.",
      "table": {
        "head": ["상황", "뜻이나 대처"],
        "rows": [
          ["시작 직후 손실이 빠르게 커짐", "학습률이 너무 커요"],
          ["손실이 거의 줄지 않고 멈춤", "학습률이 너무 작아요"],
          ["과대적합 확인", "가중치 업데이트에 쓰지 않는 독립된 검증 세트를 써요"],
          ["지역 최솟값", "초기화를 바꿔 여러 번 학습해요"]
        ]
      },
      "cautions": [
        "테스트 데이터를 학습 데이터에 넣으면 안 돼요.",
        "교란 요인이 분류 결과에 영향을 줄 수 있어요."
      ],
      "keyterms": [
        { "en": "learning rate", "ko": "학습률" },
        { "en": "over-fitting", "ko": "과대적합" },
        { "en": "validation set", "ko": "검증 세트" },
        { "en": "Local minimum", "ko": "지역 최솟값" }
      ]
    },
    {
      "id": "evaluation", "group": "g-nn", "title": "모델 평가",
      "source": "Intro to AI.pdf (19쪽)",
      "definition": "데이터를 셋으로 나누고, 여러 지표로 성능을 재요.",
      "table": {
        "head": ["데이터", "역할"],
        "rows": [
          ["훈련 세트", "모델의 가중치를 맞춰요"],
          ["검증 세트", "하이퍼파라미터를 조정해요. 훈련 데이터와 독립적이에요"],
          ["테스트 세트", "딱 한 번 써서 치우치지 않은 최종 성능을 재요"]
        ]
      },
      "points": [
        "정확도는 맞힌 예측 수를 전체 예측 수로 나눈 값이에요.",
        "정밀도 = TP/(TP+FP), 재현율 = TP/(TP+FN)이에요.",
        "F1 점수는 둘의 조화 평균이라 클래스가 불균형할 때 유용해요."
      ],
      "keyterms": [
        { "en": "Training set", "ko": "훈련 세트" },
        { "en": "Validation set", "ko": "검증 세트" },
        { "en": "Test set", "ko": "테스트 세트" },
        { "en": "Confusion Matrix", "ko": "혼동 행렬" }
      ]
    },
    {
      "id": "augmentation", "group": "g-nn", "title": "데이터 증강",
      "source": "Intro to AI.pdf (33, 44쪽)",
      "definition": "학습 샘플에 노이즈, 대비 변화, 회전, 이동 같은 변화를 더해요.",
      "points": [
        "GAN도 데이터 증강에 쓸 수 있어요.",
        "실습 II에서는 데이터 증강과 드롭아웃으로 고양이·개 분류 모델을 개선해요."
      ],
      "keyterms": [
        { "en": "Data augmentation", "ko": "데이터 증강" },
        { "en": "dropout", "ko": "드롭아웃" }
      ]
    },

    {
      "id": "cnn", "group": "g-arch", "title": "합성곱 층과 풀링",
      "source": "Intro to AI.pdf (16쪽)",
      "definition": "선 같은 국소 특징과, 모양·물체 같은 추상적 특징을 잡는 특수한 층이에요.",
      "table": {
        "head": ["층", "장점"],
        "rows": [
          ["합성곱 층", "같은 층의 뉴런이 가중치를 공유해서 파라미터와 메모리가 크게 줄어요"],
          ["풀링", "입력의 크기를 줄여요"]
        ]
      },
      "keyterms": [
        { "en": "Convolution", "ko": "합성곱" },
        { "en": "pooling", "ko": "풀링" },
        { "en": "locality", "ko": "국소성" },
        { "en": "abstraction", "ko": "추상화" }
      ]
    },
    {
      "id": "architectures", "group": "g-arch", "title": "주요 딥러닝 구조",
      "source": "Intro to AI.pdf (20–24쪽)",
      "definition": "목적에 따라 여러 신경망 구조가 쓰여요.",
      "table": {
        "head": ["구조", "특징"],
        "rows": [
          ["오토인코더", "인코더와 디코더로 입력의 저차원 표현을 찾아요. 정답이 필요 없는 비지도 학습이에요"],
          ["GAN(생성적 적대 신경망)", "생성자가 노이즈로 이미지를 만들고, 판별자가 진짜와 구별해요. 번갈아 학습해요"],
          ["U-net", "스킵 연결로 이미지 분할 같은 이미지→이미지 변환을 해요"],
          ["ResNet", "잔차 블록으로 경사가 끝까지 흐르게 해서 아주 깊은 신경망을 학습해요"],
          ["RNN(순환 신경망)", "상태 변수로 기억을 유지해서 음성 인식, 문장 분류 같은 순서 데이터를 처리해요"]
        ]
      },
      "keyterms": [
        { "en": "Autoencoders", "ko": "오토인코더" },
        { "en": "Generative adversarial networks (GANs)", "ko": "생성적 적대 신경망" },
        { "en": "ResNets", "ko": "ResNet" },
        { "en": "Recurrent neural networks (RNNs)", "ko": "순환 신경망" }
      ]
    },

    {
      "id": "nlp", "group": "g-llm", "title": "자연어 처리 기초",
      "source": "Intro to AI.pdf (25쪽)",
      "definition": "텍스트를 모델이 배울 수 있는 숫자로 바꿔요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["토큰화", "텍스트를 단어, 부분 단어, 문자 같은 토큰으로 나눠요 (예: un + believ + able)"],
          ["임베딩", "토큰을 의미를 담은 숫자 벡터로 바꿔요. 비슷한 단어는 가까이 놓여요"]
        ]
      },
      "points": [
        "신경망은 글자 그대로가 아니라 숫자 벡터만 봐요."
      ],
      "keyterms": [
        { "en": "Tokenization", "ko": "토큰화" },
        { "en": "tokens", "ko": "토큰" },
        { "en": "Word / Token Embeddings", "ko": "임베딩" }
      ]
    },
    {
      "id": "transformer", "group": "g-llm", "title": "트랜스포머와 셀프 어텐션",
      "source": "Intro to AI.pdf (26쪽)",
      "definition": "순환 없이 어텐션만으로 문장을 처리하는 구조예요.",
      "table": {
        "head": ["", "처리 방식"],
        "rows": [
          ["RNN", "한 단계씩 처리해서 느리고, 멀리 떨어진 관계를 어려워해요"],
          ["트랜스포머", "완전히 병렬로 처리해서 GPU로 대량 데이터를 학습해요"]
        ]
      },
      "points": [
        "모든 토큰이 다른 모든 토큰을 보고 무엇이 중요한지 배워요.",
        "Query, Key, Value 벡터로 토큰 사이 어텐션 점수를 계산해요.",
        "위치 인코딩으로 토큰 순서 정보를 되살려요."
      ],
      "keyterms": [
        { "en": "Transformers", "ko": "트랜스포머" },
        { "en": "Self-Attention", "ko": "셀프 어텐션" },
        { "en": "Query/Key/Value", "ko": "쿼리/키/밸류" },
        { "en": "Positional encoding", "ko": "위치 인코딩" }
      ]
    },
    {
      "id": "llm", "group": "g-llm", "title": "대규모 언어 모델",
      "source": "Intro to AI.pdf (27쪽)",
      "definition": "엄청난 양의 텍스트로 미리 학습한 트랜스포머예요.",
      "points": [
        "다음 토큰을 예측하도록 학습해서 문법, 사실, 추론을 배워요.",
        "퓨샷·제로샷 학습으로 지시나 예시 몇 개만 보고 새 일을 해요.",
        "미세 조정과 RLHF로 사람의 선호에 맞게 행동을 맞춰요."
      ],
      "table": {
        "head": ["시기", "규모"],
        "rows": [
          ["2018 BERT", "약 3억 4천만 파라미터"],
          ["2020 GPT-3", "약 1,750억 파라미터"],
          ["2023년 이후 최신 모델", "수조 개 파라미터"]
        ]
      },
      "keyterms": [
        { "en": "Large Language Models (LLMs)", "ko": "대규모 언어 모델" },
        { "en": "predict the next token", "ko": "다음 토큰 예측" },
        { "en": "Few-/zero-shot learning", "ko": "퓨샷·제로샷 학습" },
        { "en": "RLHF", "ko": "사람 피드백 강화학습" }
      ]
    },
    {
      "id": "transfer", "group": "g-llm", "title": "전이 학습과 미세 조정",
      "source": "Intro to AI.pdf (28쪽)",
      "definition": "이미 학습된 모델이 아는 것을 다시 써요.",
      "table": {
        "head": ["", "하는 일"],
        "rows": [
          ["전이 학습", "ImageNet이나 사전 학습 LLM처럼 큰 일반 데이터로 학습한 모델에서 시작해요"],
          ["미세 조정", "그 모델을 내 작은 데이터로 이어서 학습해 가중치를 맞춰요"]
        ]
      },
      "points": [
        "모델이 이미 일반적인 특징을 알아서, 처음부터 학습할 때보다 데이터와 계산이 훨씬 적게 들어요."
      ],
      "example": {
        "title": "의료 영상",
        "points": [
          "ImageNet으로 학습한 CNN을 작은 의료 영상 데이터로 미세 조정해서 종양을 찾아요."
        ]
      },
      "keyterms": [
        { "en": "Transfer Learning", "ko": "전이 학습" },
        { "en": "Fine-tuning", "ko": "미세 조정" },
        { "en": "Pretrained Model", "ko": "사전 학습 모델" }
      ]
    },
    {
      "id": "multimodal", "group": "g-llm", "title": "멀티모달 AI",
      "source": "Intro to AI.pdf (29쪽)",
      "definition": "텍스트, 이미지, 오디오, 영상을 한 모델 안에서 함께 다뤄요.",
      "points": [
        "언어를 시각·소리와 연결하면 AI가 사람의 지각 방식에 더 가까워져요."
      ],
      "example": {
        "title": "멀티모달 모델들",
        "points": [
          "Claude와 GPT-4V는 이미지를 보고 설명해요.",
          "DALL·E와 Midjourney는 글로 그림을 만들어요.",
          "Whisper는 말을 글로 바꿔요."
        ]
      },
      "keyterms": [
        { "en": "Multimodal AI", "ko": "멀티모달 AI" }
      ]
    },
    {
      "id": "ai-agents", "group": "g-llm", "title": "AI 에이전트",
      "source": "Intro to AI.pdf (30쪽)",
      "definition": "모델을 추론 엔진으로 써서 여러 단계 일을 계획하고 실행해요.",
      "formula": { "ko": "생각 → 행동(도구 사용) → 관찰 (일이 끝날 때까지 반복)", "en": "Think → Act (use tool) → Observe (repeat until the task is complete)" },
      "points": [
        "웹 검색, 코드 실행, 데이터베이스 조회, 앱 조작 같은 외부 도구를 불러요.",
        "각 행동의 결과가 다음 행동을 정해요."
      ],
      "example": {
        "title": "에이전트 예",
        "points": [
          "가격을 확인하고 예약까지 하는 항공권 예약 에이전트",
          "코드를 쓰고 돌리고 디버깅하는 코딩 에이전트"
        ]
      },
      "keyterms": [
        { "en": "AI agent", "ko": "AI 에이전트" },
        { "en": "reasoning engine", "ko": "추론 엔진" },
        { "en": "external tools", "ko": "외부 도구" }
      ]
    },
    {
      "id": "prompt", "group": "g-llm", "title": "프롬프트 엔지니어링",
      "source": "Intro to AI.pdf (31쪽)",
      "definition": "모델은 그대로 두고, 입력을 다듬어서 더 좋고 믿을 만한 출력을 얻어요.",
      "points": [
        "원하는 내용과 형식을 분명하고 구체적으로 적어요.",
        "퓨샷 프롬프트는 원하는 출력의 예시를 줘요.",
        "생각의 사슬은 답하기 전에 단계별로 추론하게 해요."
      ],
      "cautions": [
        "말을 조금만 바꿔도 출력 품질이 달라져서 여러 번 고쳐 봐야 해요."
      ],
      "example": {
        "title": "모호한 프롬프트 vs 잘 다듬은 프롬프트",
        "points": [
          "\"강아지에 대해 써 줘.\"",
          "\"바쁜 직장인을 위한 강아지 산책 앱을 밝은 말투로 세 문장 소개해 줘.\""
        ]
      },
      "keyterms": [
        { "en": "Prompt engineering", "ko": "프롬프트 엔지니어링" },
        { "en": "Few-shot prompting", "ko": "퓨샷 프롬프트" },
        { "en": "Chain-of-thought", "ko": "생각의 사슬" }
      ]
    },
    {
      "id": "hardware", "group": "g-llm", "title": "AI 하드웨어",
      "source": "Intro to AI.pdf (34쪽)",
      "definition": "신경망 학습은 병렬 행렬 곱셈이 엄청나게 많아서 전용 칩이 중요해요.",
      "table": {
        "head": ["칩", "특징"],
        "rows": [
          ["CPU", "한 번에 한 가지를 빨리 하는 순차 작업용이에요"],
          ["GPU", "작은 코어 수천 개로 병렬 계산을 해요"],
          ["TPU", "구글이 신경망 연산용으로 만든 칩이라 대규모에서 더 효율적이에요"]
        ]
      },
      "keyterms": [
        { "en": "GPUs (Graphics Processing Units)", "ko": "그래픽 처리 장치" },
        { "en": "TPUs (Tensor Processing Units)", "ko": "텐서 처리 장치" }
      ]
    },
    {
      "id": "trends", "group": "g-llm", "title": "최근 AI 흐름",
      "source": "Intro to AI.pdf (32쪽)",
      "definition": "2026년 초 기준으로 AI 분야가 움직이는 방향이에요.",
      "table": {
        "head": ["흐름", "내용"],
        "rows": [
          ["추론 모델", "답하기 전에 더 오래 '생각'해서 어려운 문제의 정확도를 높여요"],
          ["오픈 웨이트 모델", "공개된 모델이 비공개 모델과의 격차를 빠르게 줄여요"],
          ["과학을 위한 AI", "알파폴드의 단백질 구조 예측이 2024년 노벨상을 받았어요"],
          ["추론 비용 하락", "작고 효율적인 모델이 휴대폰과 노트북에서 돌아가요"],
          ["영상·이미지 생성", "글로 짧고 사실적인 영상을 만들어요"],
          ["AI 거버넌스", "EU AI Act 같은 규제가 AI 개발과 배포 방식을 정해요"]
        ]
      },
      "keyterms": [
        { "en": "Reasoning Models", "ko": "추론 모델" },
        { "en": "Open-Weight Models", "ko": "오픈 웨이트 모델" },
        { "en": "AI Governance", "ko": "AI 거버넌스" }
      ]
    },

    {
      "id": "safety", "group": "g-eth", "title": "AI 안전과 정렬",
      "source": "Intro to AI.pdf (41쪽)",
      "definition": "AI가 강력해질수록 커지는 기술적 위험이에요.",
      "table": {
        "head": ["문제", "뜻"],
        "rows": [
          ["환각", "그럴듯하지만 틀리거나 지어낸 정보를 만들어요. 중요한 내용은 꼭 확인해야 해요"],
          ["정렬 문제", "처음 보는 상황에서도 사람의 의도와 가치에 맞게 행동하게 하는 문제예요"],
          ["탈옥", "안전 지침을 무시하게 모델을 조작하려는 시도예요"]
        ]
      },
      "cautions": [
        "에이전트처럼 스스로 움직이는 AI일수록 문제가 커지고, 나중에 잡기도 어려워요."
      ],
      "keyterms": [
        { "en": "Hallucination", "ko": "환각" },
        { "en": "The Alignment Problem", "ko": "정렬 문제" },
        { "en": "Jailbreaking", "ko": "탈옥" }
      ]
    },
    {
      "id": "ethics", "group": "g-eth", "title": "책임 있는 AI",
      "source": "Intro to AI.pdf (42쪽)",
      "definition": "AI를 공정하고 안전하게 만들고 쓰기 위해 살펴야 할 문제들이에요.",
      "table": {
        "head": ["문제", "내용"],
        "rows": [
          ["편향과 공정성", "학습 데이터의 편향을 물려받거나 키워서 채용, 대출, 치안에서 차별을 낳을 수 있어요"],
          ["개인정보와 감시", "대규모 수집은 동의와 추적 문제를 낳고, 모델이 민감 정보를 기억해 흘릴 수 있어요"],
          ["투명성과 설명 가능성", "딥러닝 모델은 '블랙박스'가 많아요. 설명 가능한 AI(XAI)는 의료, 법, 금융에서 중요해요"],
          ["안전과 오용", "딥페이크, 허위 정보, 자율 무기, 일자리 대체 문제가 있어요"]
        ]
      },
      "keyterms": [
        { "en": "Bias & Fairness", "ko": "편향과 공정성" },
        { "en": "Privacy & Surveillance", "ko": "개인정보와 감시" },
        { "en": "Explainable AI (XAI)", "ko": "설명 가능한 AI" },
        { "en": "Safety & Misuse", "ko": "안전과 오용" }
      ]
    }
  ],
  "terms": [
    { "en": "Artificial Intelligence", "ko": "인공지능", "def": "지능적인 기계, 특히 지능적인 컴퓨터 프로그램을 만드는 과학과 공학이에요.", "def_en": "The science and engineering of making intelligent machines, especially intelligent computer programs", "source": "Intro to AI.pdf" },
    { "en": "Symbolic AI (“GOFAI”)", "ko": "기호 AI", "def": "사람이 쓴 규칙과 논리로 지능을 표현한 AI예요.", "def_en": "Intelligence encoded as hand-written rules and logic", "source": "Intro to AI.pdf" },
    { "en": "Statistical & Connectionist AI", "ko": "통계·연결주의 AI", "def": "규칙 대신 데이터에서 직접 패턴을 배우는 AI예요.", "def_en": "Systems learn patterns directly from data, not hand-coded rules", "source": "Intro to AI.pdf" },
    { "en": "Narrow AI (ANI)", "ko": "좁은 AI", "def": "한 가지 일만 하는 AI예요. 지금 쓰는 AI 대부분이에요.", "def_en": "Performs one specific task", "source": "Intro to AI.pdf" },
    { "en": "General AI (AGI)", "ko": "일반 AI", "def": "어떤 일이든 사람 수준으로 추론하는 AI예요. 아직 없어요.", "def_en": "Human-level reasoning across any task", "source": "Intro to AI.pdf" },
    { "en": "Super AI (ASI)", "ko": "초인공지능", "def": "사람 지능을 넓게 넘어서는 AI예요. 이론 단계예요.", "def_en": "Surpasses human intelligence broadly", "source": "Intro to AI.pdf" },
    { "en": "Machine Learning", "ko": "머신러닝", "def": "경험으로 자동으로 나아지는 컴퓨터 알고리즘을 연구해요.", "def_en": "Machine Learning, an application of AI is the study of computer algorithms that improve automatically through experience", "source": "Intro to AI.pdf" },
    { "en": "Deep learning", "ko": "딥러닝", "def": "여러 층 신경망이 많은 데이터에서 배우는 머신러닝 분야예요.", "def_en": "Deep learning is a subset of ML in which multilayered neural networks learn from vast amounts of data", "source": "Intro to AI.pdf" },
    { "en": "Intelligent Agents (PEAS)", "ko": "지능형 에이전트", "def": "센서로 환경을 인식하고 액추에이터로 행동해요.", "def_en": "An agent perceives its Environment through Sensors and acts through Actuators", "source": "Intro to AI.pdf" },
    { "en": "Supervised Learning", "ko": "지도 학습", "def": "정답이 붙은 예시로 배워요.", "def_en": "Learns from labeled examples", "source": "Intro to AI.pdf" },
    { "en": "Unsupervised Learning", "ko": "비지도 학습", "def": "정답 없이 데이터의 구조를 찾아요.", "def_en": "Finds structure with no labels at all", "source": "Intro to AI.pdf" },
    { "en": "Reinforcement Learning", "ko": "강화 학습", "def": "보상과 벌점으로 시행착오하며 배워요.", "def_en": "Agent learns by trial-and-error from rewards and penalties", "source": "Intro to AI.pdf" },
    { "en": "activation function", "ko": "활성화 함수", "def": "가중합을 받아 뉴런의 출력을 정하는 함수예요.", "def_en": "The result passes through an activation function, which decides the neuron’s output", "source": "Intro to AI.pdf" },
    { "en": "Loss function", "ko": "손실 함수", "def": "예측이 정답과 얼마나 다른지 재요.", "def_en": "Measures how wrong the model’s predictions are compared to the true answer", "source": "Intro to AI.pdf" },
    { "en": "Backpropagation", "ko": "역전파", "def": "오차 신호를 층마다 거꾸로 보내서 모든 가중치가 고칠 방향을 알게 해요.", "def_en": "Efficiently sends the error signal backward through the network, layer by layer, so every weight learns how to improve", "source": "Intro to AI.pdf" },
    { "en": "Validation set", "ko": "검증 세트", "def": "하이퍼파라미터를 조정할 때 쓰는, 훈련 데이터와 독립된 데이터예요.", "def_en": "Validation set: tunes hyperparameters, independent of training data", "source": "Intro to AI.pdf" },
    { "en": "Test set", "ko": "테스트 세트", "def": "딱 한 번 써서 최종 성능을 재는 데이터예요.", "def_en": "Test set: used once, for a final unbiased estimate", "source": "Intro to AI.pdf" },
    { "en": "Autoencoders", "ko": "오토인코더", "def": "인코더와 디코더로 입력의 저차원 표현을 찾는 구조예요.", "def_en": "Use a contracting (encoder) and an expanding (decoder) branch to find lower dimensional representations of the input", "source": "Intro to AI.pdf" },
    { "en": "Generative adversarial networks (GANs)", "ko": "생성적 적대 신경망", "def": "생성자와 판별자가 번갈아 학습해 진짜 같은 이미지를 만들어요.", "def_en": "Famous for generating plausible and realistically looking images", "source": "Intro to AI.pdf" },
    { "en": "Recurrent neural networks (RNNs)", "ko": "순환 신경망", "def": "기억을 유지해서 음성, 문장 같은 순서 데이터를 처리해요.", "def_en": "Enabling the processing of sequences with long term dependencies, such as speech recognition, text classification", "source": "Intro to AI.pdf" },
    { "en": "Tokenization", "ko": "토큰화", "def": "텍스트를 단어, 부분 단어, 문자 같은 토큰으로 나눠요.", "def_en": "Breaks text into smaller pieces — words, subwords, or characters — called tokens", "source": "Intro to AI.pdf" },
    { "en": "Self-Attention", "ko": "셀프 어텐션", "def": "모든 토큰이 다른 모든 토큰을 보고 무엇이 중요한지 배워요.", "def_en": "Every token attends to every other token, learning what matters most", "source": "Intro to AI.pdf" },
    { "en": "Large Language Models (LLMs)", "ko": "대규모 언어 모델", "def": "엄청난 양의 텍스트로 미리 학습한 트랜스포머예요.", "def_en": "A Transformer pretrained on massive text corpora (billions+ tokens)", "source": "Intro to AI.pdf" },
    { "en": "Fine-tuning", "ko": "미세 조정", "def": "사전 학습 모델을 내 작은 데이터로 이어서 학습해요.", "def_en": "Continue training that pretrained model on your smaller, specific dataset, adjusting its weights to your task", "source": "Intro to AI.pdf" },
    { "en": "Prompt engineering", "ko": "프롬프트 엔지니어링", "def": "LLM에서 더 좋은 출력을 얻도록 입력을 다듬는 거예요.", "def_en": "Prompt engineering is the practice of crafting inputs to get better, more reliable outputs from an LLM", "source": "Intro to AI.pdf" },
    { "en": "Hallucination", "ko": "환각", "def": "그럴듯하지만 틀리거나 지어낸 정보를 만드는 거예요.", "def_en": "Models can generate confident-sounding but false or fabricated information", "source": "Intro to AI.pdf" },
    { "en": "The Alignment Problem", "ko": "정렬 문제", "def": "처음 보는 상황에서도 AI가 사람의 의도와 가치에 맞게 행동하게 하는 문제예요.", "def_en": "Ensuring a system’s behavior matches human intentions and values, even in situations it never saw during training", "source": "Intro to AI.pdf" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "슬라이드가 영어라서 한국어 용어(기호 AI, 정렬 문제, 탈옥 등)는 모두 내가 붙인 번역이에요.",
      "'과대적합'은 4·6·7주차와 맞춰 over-fitting을 옮긴 말이에요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "그림만 있는 쪽(7, 10쪽)과 의료 영상 사례(35–37쪽)의 세부 내용은 글자로 확인할 수 없어서 뺐어요.",
      "라이브러리 목록(38–39쪽)과 산업별 응용 예시(40쪽), 정밀 학습(33쪽)은 뺐어요.",
      "팀 토론(9쪽)과 Colab 실습(43–44쪽)은 링크만 있어서 내용을 넣지 않았어요."
    ] },
    { "title": "사용 안내", "items": [
      "02-2(인공지능의 이해 II)는 따로 자료가 없고, 02-1에서 다 설명하지 못한 이 슬라이드를 이어서 강의한 것으로 보고 02-1과 합쳐 두었어요. 어디까지가 02-1이고 어디부터 02-2인지는 구분하지 않았어요.",
      "원본 PDF는 materials/week02 폴더에 있어요."
    ] }
  ],
  "quiz": [
    { "id": "s02-1-q01", "q": "Which event in 1956 coined the term “AI”?", "choices": ["The Dartmouth Workshop", "The Turing Test", "Deep Blue beating the world chess champion", "AlexNet"], "answer": 0, "explain": "1956년 다트머스 워크숍에서 'AI'라는 말이 생겼어요. 튜링 테스트는 1950년이에요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q02", "q": "Why did Symbolic AI (“GOFAI”) hit limits?", "choices": ["It hit limits with common sense and scale", "It needed too many GPUs", "It learned only from data", "It had no rules"], "answer": 0, "explain": "기호 AI는 사람이 쓴 규칙에 의존해서 상식과 규모의 한계에 부딪혔어요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q03", "q": "Which type of AI performs one specific task and covers most AI in use today?", "choices": ["Narrow AI (ANI)", "General AI (AGI)", "Super AI (ASI)", "Self-Aware AI"], "answer": 0, "explain": "지금 쓰는 AI는 거의 다 좁은 AI예요. 일반 AI는 아직 없고, 초인공지능은 이론 단계예요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q04", "q": "Deep Blue is an example of which AI type by functionality?", "choices": ["Reactive Machines", "Limited Memory", "Theory of Mind", "Self-Aware"], "answer": 0, "explain": "딥블루는 과거를 기억하지 않는 반응형 기계예요. 요즘 ML/DL 시스템은 대부분 제한된 기억이에요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q05", "q": "What is deep learning?", "choices": ["A subset of ML in which multilayered neural networks learn from vast amounts of data", "A set of hand-written rules", "A type of chip designed by Google", "A way to collect raw data"], "answer": 0, "explain": "딥러닝은 여러 층 신경망을 쓰는 머신러닝의 한 분야예요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q06", "q": "AlphaGo beating Lee Sedol is an example of which learning paradigm?", "choices": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Transfer Learning"], "answer": 0, "explain": "강화 학습은 보상과 벌점으로 시행착오하며 배워요. Face ID와 스팸 필터는 지도 학습 예예요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q07", "q": "What does backpropagation do?", "choices": ["Sends the error signal backward through the network so every weight learns how to improve", "Measures how wrong the predictions are", "Breaks text into tokens", "Reduces the scale of the input"], "answer": 0, "explain": "역전파는 오차를 층마다 거꾸로 보내요. 틀린 정도를 재는 건 손실 함수예요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q08", "q": "The loss increases quickly right after training begins. What does this suggest?", "choices": ["The learning rate is set too high", "The learning rate is set too low", "The test set is too small", "The model has too few layers"], "answer": 0, "explain": "학습률이 너무 크면 손실이 금방 커져요. 너무 작으면 손실이 거의 줄지 않고 멈춰요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q09", "q": "Why does ReLU help train deeper networks compared with the sigmoid?", "choices": ["Its gradient does not saturate, which speeds up convergence", "It has no parameters", "It always outputs 0.5", "It removes the need for data"], "answer": 0, "explain": "ReLU는 경사가 포화되지 않아서 확률적 경사하강법이 훨씬 빨리 수렴해요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q10", "q": "What is an advantage of convolution layers?", "choices": ["Neurons of the same layer share the same weights, reducing parameters", "They remove the need for pooling", "They process sequences step by step", "They generate images from noise"], "answer": 0, "explain": "합성곱 층은 가중치를 공유해서 파라미터와 메모리를 크게 줄여요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q11", "q": "Which architecture does not require annotations because it is trained to predict the original input?", "choices": ["Autoencoders", "U-net", "ResNets", "RNNs"], "answer": 0, "explain": "오토인코더는 입력 자체를 다시 만들도록 학습해서 정답이 필요 없는 비지도 학습이에요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q12", "q": "Why do Transformers train faster on massive data than RNNs?", "choices": ["They drop recurrence and are fully parallelizable", "They use smaller vocabularies", "They process one token at a time", "They do not use embeddings"], "answer": 0, "explain": "트랜스포머는 순환 없이 어텐션만 써서 완전히 병렬로 처리해요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q13", "q": "What is a large language model trained to do?", "choices": ["Predict the next token", "Classify images of cats and dogs", "Detect anatomical landmarks", "Sort numbers"], "answer": 0, "explain": "LLM은 다음 토큰을 예측하도록 학습해서 문법, 사실, 추론을 배워요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q14", "q": "Why does transfer learning matter?", "choices": ["It needs far less data and compute than training from scratch", "It always uses unlabeled data", "It removes the need for a test set", "It guarantees no hallucination"], "answer": 0, "explain": "사전 학습 모델이 이미 일반적인 특징을 알아서 데이터와 계산이 훨씬 적게 들어요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q15", "q": "Asking the model to reason step by step before answering is called:", "choices": ["Chain-of-thought", "Few-shot prompting", "Fine-tuning", "Tokenization"], "answer": 0, "explain": "생각의 사슬이에요. 퓨샷 프롬프트는 원하는 출력 예시를 주는 방법이에요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q16", "q": "Models generating confident-sounding but false information is called:", "choices": ["Hallucination", "Jailbreaking", "Alignment", "Data augmentation"], "answer": 0, "explain": "환각이에요. 중요한 내용은 꼭 확인해야 해요.", "source": "Intro to AI.pdf" },
    { "id": "s02-1-q17", "q": "Which field aims to make AI decisions interpretable?", "choices": ["Explainable AI (XAI)", "Multimodal AI", "AI Governance", "Data augmentation"], "answer": 0, "explain": "설명 가능한 AI는 '블랙박스' 모델의 판단을 해석할 수 있게 해요. 의료, 법, 금융에서 중요해요.", "source": "Intro to AI.pdf" }
  ]
});
