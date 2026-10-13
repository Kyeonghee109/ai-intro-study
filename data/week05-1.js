addSession({
  "week": 5,
  "session": "05-1",
  "kind": "특강",
  "lecturer": "최혜봉 교수",
  "title": "탐색적 데이터 분석과 시각화의 이해 I",
  "intro": "데이터를 처음 받았을 때 무엇을 확인하고, 변수 종류에 맞는 그래프를 어떻게 고르고 읽는지 배워요. 마지막으로 시각화 도구 Tableau를 소개해요.",
  "sources": [
    { "index": "01", "title": "Exploratory Data Analysis and Data Visualization (최혜봉, 37쪽)", "file": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" }
  ],
  "groups": [
    { "id": "g-eda", "title": "탐색적 데이터 분석" },
    { "id": "g-data", "title": "데이터와 변수" },
    { "id": "g-one", "title": "변수 하나 살펴보기" },
    { "id": "g-rel", "title": "관계 살펴보기" },
    { "id": "g-tab", "title": "Tableau 소개" }
  ],
  "sections": [
    {
      "id": "eda", "group": "g-eda", "title": "탐색적 데이터 분석",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (2쪽)",
      "definition": "데이터셋을 이해하도록 돕는 과정이에요.",
      "points": [
        "어떤 관측치와 변수가 있는지, 어떤 값이 흔하거나 드물거나 빠졌는지 봐요.",
        "그룹끼리 어떻게 다른지, 어떤 변수가 함께 움직이는지 봐요.",
        "쓸모 있는 패턴과 데이터의 문제를 함께 찾아요."
      ],
      "keyterms": [
        { "en": "Exploratory Data Analysis (EDA)", "ko": "탐색적 데이터 분석" },
        { "en": "observations", "ko": "관측치" },
        { "en": "variables", "ko": "변수" }
      ]
    },
    {
      "id": "eda-process", "group": "g-eda", "title": "반복하는 EDA 과정",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (3쪽)",
      "definition": "질문하고, 점검하고, 탐색하고, 해석한 뒤 다시 질문해요.",
      "table": {
        "head": ["단계", "예시 질문이나 행동"],
        "rows": [
          ["1. 질문하기", "직원들의 연봉은 어떻게 분포할까?"],
          ["2. 점검하기", "필드의 의미, 단위, 결측치를 확인해요"],
          ["3. 탐색하기", "연봉 분포를 보고 부서끼리 비교해요"],
          ["4. 해석하기", "패턴과 그 한계를 설명해요"],
          ["5. 다시 질문하기", "근속연수나 직급에 따라 다를까?"]
        ]
      },
      "points": [
        "쓸모 있는 그래프는 또 다른 질문으로 이어져요."
      ],
      "keyterms": [
        { "en": "Ask", "ko": "질문하기" },
        { "en": "Inspect", "ko": "점검하기" },
        { "en": "Explore", "ko": "탐색하기" },
        { "en": "Interpret", "ko": "해석하기" }
      ]
    },

    {
      "id": "tabular", "group": "g-data", "title": "표 형식 데이터",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (4–6쪽)",
      "definition": "행과 열로 이루어진 데이터예요.",
      "table": {
        "head": ["", "직원 표에서"],
        "rows": [
          ["행", "직원 한 명"],
          ["열", "특성 하나 (부서, 근속연수, 연봉 등)"],
          ["셀", "값 하나"]
        ]
      },
      "points": [
        "필드 이름은 무엇을 찾을지, 정의는 어떻게 해석할지 알려 줘요.",
        "관측 단위가 무엇을 반복 기록으로 볼지 정해요."
      ],
      "example": {
        "title": "한 행이 무엇인가",
        "points": [
          "직원별 한 행이면 같은 EID는 한 번만 나와요.",
          "직원·연도별 한 행이면 같은 EID가 연도마다 나와도 중복이 아니에요."
        ]
      },
      "keyterms": [
        { "en": "Row", "ko": "행" },
        { "en": "Column", "ko": "열" },
        { "en": "Cell", "ko": "셀" },
        { "en": "observation unit", "ko": "관측 단위" }
      ]
    },
    {
      "id": "first-check", "group": "g-data", "title": "데이터 첫 점검",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (7쪽)",
      "definition": "결측치와 이상한 값은 먼저 조사해야 해요.",
      "table": {
        "head": ["눈에 띈 것", "물어볼 것"],
        "rows": [
          ["salary가 빈칸", "모르는 건지, 안 알려 준 건지, 해당 없는 건지?"],
          ["salary = 0", "무급인지, 오류인지, 결측치 코드인지?"],
          ["salary = 45,000,000", "백만 원 단위가 아니라 원 단위인지?"],
          ["tenure_years = −2", "기록 오류인지, 다른 정의인지?"],
          ["Sales, sales, SALES", "같은 부서를 뜻하는지?"],
          ["같은 EID가 두 행", "중복인지, 다른 연도 기록인지?"]
        ]
      },
      "keyterms": [
        { "en": "Missing values", "ko": "결측치" },
        { "en": "unusual values", "ko": "이상한 값" },
        { "en": "Duplicates", "ko": "중복" }
      ]
    },
    {
      "id": "var-types", "group": "g-data", "title": "변수의 종류",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (8–10쪽)",
      "definition": "변수는 범주형과 수치형으로, 다시 각각 둘로 나뉘어요.",
      "table": {
        "head": ["종류", "뜻", "직원 예"],
        "rows": [
          ["범주형 · 명목", "순서 없는 레이블", "부서, 성별"],
          ["범주형 · 순서", "순서 있는 범주", "학력, 직급"],
          ["수치형 · 이산", "0, 1, 2…처럼 세는 정수", "근속연수 (채운 햇수)"],
          ["수치형 · 연속", "척도로 잰 양", "연봉"]
        ]
      },
      "points": [
        "변수의 의미가 그래프 선택을 이끌어요."
      ],
      "cautions": [
        "숫자처럼 보여도 레이블일 수 있어요.",
        "직원 번호나 부서 코드는 평균을 내도 의미가 없어요."
      ],
      "keyterms": [
        { "en": "Categorical", "ko": "범주형" },
        { "en": "Numerical", "ko": "수치형" },
        { "en": "Nominal / Ordinal", "ko": "명목 / 순서" },
        { "en": "Discrete / Continuous", "ko": "이산 / 연속" }
      ]
    },
    {
      "id": "read-graph", "group": "g-data", "title": "그래프 읽는 법",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (11쪽)",
      "definition": "위치, 길이, 색 같은 시각적 특징을 다시 데이터의 의미로 옮기는 거예요.",
      "table": {
        "head": ["순서", "확인할 것"],
        "rows": [
          ["1. 질문", "그래프가 무엇을 비교하나요?"],
          ["2. 축", "어떤 변수, 단위, 척도인가요?"],
          ["3. 표시", "점, 막대, 선 하나가 무엇을 나타내나요?"],
          ["4. 패턴", "무엇이 눈에 띄고, 무엇이 불확실한가요?"]
        ]
      },
      "keyterms": [
        { "en": "Question", "ko": "질문" },
        { "en": "Axes", "ko": "축" },
        { "en": "Marks", "ko": "표시" },
        { "en": "Pattern", "ko": "패턴" }
      ]
    },

    {
      "id": "distribution", "group": "g-one", "title": "분포",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (12쪽)",
      "definition": "값이 관측치들에 걸쳐 어떻게 나타나는지예요.",
      "table": {
        "head": ["변수", "볼 것", "그래프"],
        "rows": [
          ["범주형", "개수와 비율", "막대그래프"],
          ["수치형", "중심, 퍼짐, 모양, 이상한 값", "히스토그램, 상자그림"]
        ]
      },
      "keyterms": [
        { "en": "distribution", "ko": "분포" },
        { "en": "Center, spread, shape", "ko": "중심, 퍼짐, 모양" },
        { "en": "Counts and proportions", "ko": "개수와 비율" }
      ]
    },
    {
      "id": "bar-hist", "group": "g-one", "title": "막대그래프와 히스토그램",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (13–15, 19쪽)",
      "definition": "막대 모양은 같아도 다루는 변수가 달라요.",
      "table": {
        "head": ["", "막대그래프", "히스토그램"],
        "rows": [
          ["변수", "범주형", "수치형"],
          ["가로축", "따로 떨어진 범주", "순서 있는 숫자 구간"],
          ["막대 높이", "개수나 밝힌 요약값", "구간마다 개수"],
          ["순서", "명목 범주면 바꿔도 돼요", "숫자 척도를 따라요"]
        ]
      },
      "cautions": [
        "구간이 넓으면 자세한 모양이 가려지고, 너무 좁으면 작은 표본이 들쭉날쭉해 보여요.",
        "히스토그램으로는 직원 한 명의 정확한 연봉을 알 수 없어요."
      ],
      "example": {
        "title": "가상 직원 20명",
        "points": [
          "IT 부서가 8명으로 가장 많아요 (20명 중 40%).",
          "대부분 연봉이 7천만 원 아래이고, 오른쪽으로 긴 꼬리가 있어요."
        ]
      },
      "keyterms": [
        { "en": "Bar chart", "ko": "막대그래프" },
        { "en": "Histogram", "ko": "히스토그램" },
        { "en": "Bin width", "ko": "구간 너비" },
        { "en": "long tail", "ko": "긴 꼬리" }
      ]
    },
    {
      "id": "mean-median", "group": "g-one", "title": "평균과 중앙값",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (16쪽)",
      "definition": "둘 다 가운데를 나타내지만, 큰 값에 반응하는 정도가 달라요.",
      "table": {
        "head": ["", "구하는 법"],
        "rows": [
          ["평균", "합계를 값의 개수로 나눠요"],
          ["중앙값", "가운데 값이에요. 개수가 짝수면 가운데 두 값의 평균이에요"]
        ]
      },
      "cautions": [
        "큰 값 하나는 중앙값보다 평균을 훨씬 크게 끌어올려요."
      ],
      "example": {
        "title": "연봉 다섯 개 (백만 원)",
        "points": [
          "40, 45, 50, 55, 60 → 평균 50, 중앙값 50",
          "40, 45, 50, 55, 120 → 평균 62, 중앙값 50"
        ]
      },
      "keyterms": [
        { "en": "Mean", "ko": "평균" },
        { "en": "Median", "ko": "중앙값" }
      ]
    },
    {
      "id": "boxplot", "group": "g-one", "title": "상자그림",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (17–18쪽)",
      "definition": "수치형 값의 중심과 퍼짐을 요약하는 그래프예요.",
      "table": {
        "head": ["부분", "뜻"],
        "rows": [
          ["상자", "가운데 50% (Q1 = 25번째 ~ Q3 = 75번째 백분위수)"],
          ["IQR(사분위 범위)", "Q3 − Q1"],
          ["수염", "상자에서 1.5 × IQR 안에 있는 관측값까지 뻗어요"],
          ["상자 안 선", "중앙값"]
        ]
      },
      "points": [
        "중앙값, 가운데 50%, 퍼짐, 그룹별 요약 차이를 읽을 수 있어요."
      ],
      "cautions": [
        "평균, 개별 값, 봉우리 개수, 표본 크기는 따로 표시가 없으면 읽을 수 없어요.",
        "이상한 값 표시는 조사할 이유이지, 지우라는 뜻이 아니에요."
      ],
      "keyterms": [
        { "en": "Boxplot", "ko": "상자그림" },
        { "en": "Interquartile range (IQR)", "ko": "사분위 범위" },
        { "en": "Whiskers", "ko": "수염" },
        { "en": "outlier flag", "ko": "이상한 값 표시" }
      ]
    },

    {
      "id": "relationships", "group": "g-rel", "title": "관계에 맞는 그래프",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (20쪽)",
      "definition": "어떤 변수끼리 비교하느냐에 따라 쓸 그래프가 달라요.",
      "table": {
        "head": ["변수 조합", "예시 질문", "그래프"],
        "rows": [
          ["수치 + 수치", "근속과 연봉이 함께 움직일까?", "산점도"],
          ["범주 + 수치", "부서마다 연봉이 다를까?", "그룹별 상자그림"],
          ["범주 + 범주", "부서마다 학력이 다를까?", "개수·비율 막대"],
          ["시간 + 수치", "연봉이 해마다 어떻게 변할까?", "선 그래프"]
        ]
      },
      "points": [
        "질문이 독자가 어떤 비교를 할지 정해요."
      ],
      "keyterms": [
        { "en": "Scatterplot", "ko": "산점도" },
        { "en": "Boxplots by group", "ko": "그룹별 상자그림" },
        { "en": "Line graph", "ko": "선 그래프" }
      ]
    },
    {
      "id": "scatter", "group": "g-rel", "title": "산점도",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (21쪽)",
      "definition": "점 하나가 관측치 하나이고, 두 수치형 변수의 관계를 보여 줘요.",
      "points": [
        "방향, 퍼짐, 예외를 읽어요."
      ],
      "cautions": [
        "양의 연관이 있어도 모든 직원이 같은 패턴을 따르진 않아요."
      ],
      "example": {
        "title": "근속연수와 연봉",
        "points": [
          "전체적으로 근속이 길수록 연봉이 높아요.",
          "근속이 비슷해도 연봉이 다양하고, 패턴에서 벗어난 직원도 있어요."
        ]
      },
      "keyterms": [
        { "en": "Direction", "ko": "방향" },
        { "en": "Spread", "ko": "퍼짐" },
        { "en": "Exceptions", "ko": "예외" },
        { "en": "positive association", "ko": "양의 연관" }
      ]
    },
    {
      "id": "assoc-cause", "group": "g-rel", "title": "연관과 인과",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (22쪽)",
      "definition": "함께 움직인다는 것만으로는 원인이라고 할 수 없어요.",
      "example": {
        "title": "근속연수와 연봉",
        "points": [
          "관찰: 이 표본에서는 근속이 길수록 연봉이 높아요.",
          "그래프만으로는 '1년 더 다니면 연봉이 얼마 오른다'고 말할 수 없어요.",
          "직급, 부서, 학력, 이전 경력도 다를 수 있어요."
        ]
      },
      "keyterms": [
        { "en": "Association", "ko": "연관" },
        { "en": "causation", "ko": "인과" }
      ]
    },
    {
      "id": "counts-props", "group": "g-rel", "title": "개수와 비율",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (24쪽)",
      "definition": "개수와 비율은 서로 다른 질문에 답해요.",
      "table": {
        "head": ["부서", "석사 이상", "전체", "비율"],
        "rows": [
          ["HR", "2", "4", "50%"],
          ["IT", "3", "8", "37.5%"]
        ]
      },
      "points": [
        "개수는 IT가 더 많지만, 비율은 HR이 더 높아요."
      ],
      "cautions": [
        "비율은 분모를 분명하게 정해야 해요."
      ],
      "keyterms": [
        { "en": "Counts", "ko": "개수" },
        { "en": "proportions", "ko": "비율" },
        { "en": "denominator", "ko": "분모" }
      ]
    },
    {
      "id": "line-graph", "group": "g-rel", "title": "선 그래프",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (25쪽)",
      "definition": "왼쪽에서 오른쪽으로 흐르는 시간에 따라 값이 어떻게 변하는지 보여 줘요.",
      "cautions": [
        "여러 해의 관측값이 있어야 그릴 수 있어요."
      ],
      "example": {
        "title": "한 직원의 연봉 (2020–2025)",
        "points": [
          "전체적으로 3천5백만 원에서 4천5백만 원으로 올랐어요.",
          "2022년에 조금 내려서, 증가가 꾸준하진 않았어요."
        ]
      },
      "keyterms": [
        { "en": "Line graph", "ko": "선 그래프" }
      ]
    },
    {
      "id": "axes", "group": "g-rel", "title": "축이 주는 인상",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (26쪽)",
      "definition": "축을 어떻게 잡느냐에 따라 차이가 커 보이거나 작아 보여요.",
      "points": [
        "막대그래프는 0에서 시작하는 축이라야 길이를 정직하게 비교할 수 있어요."
      ],
      "example": {
        "title": "평균 연봉 6천만 원 vs 6천5백만 원",
        "points": [
          "잘린 축으로 그리면 차이가 훨씬 커 보여요.",
          "0에서 시작하면 실제 차이만큼 보여요."
        ]
      },
      "keyterms": [
        { "en": "Truncated bar axis", "ko": "잘린 막대 축" },
        { "en": "Zero baseline", "ko": "0 기준선" }
      ]
    },
    {
      "id": "describe-finding", "group": "g-rel", "title": "EDA 결과 설명하기",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (28쪽)",
      "definition": "관찰, 근거, 한계, 다음 질문을 함께 적어요.",
      "table": {
        "head": ["부분", "예"],
        "rows": [
          ["관찰", "대부분 직원이 낮은 연봉 구간에 있어요"],
          ["근거", "20명 중 15명이 연 7천만 원 미만이에요"],
          ["한계", "이 가상 회사는 전체 노동 시장을 대표하지 않아요"],
          ["다음 질문", "부서나 직급에 따라 다를까?"]
        ]
      },
      "cautions": [
        "주장이 근거와 맞을 때만 그래프가 그 주장을 뒷받침해요."
      ],
      "keyterms": [
        { "en": "Observation", "ko": "관찰" },
        { "en": "Evidence", "ko": "근거" },
        { "en": "Limitation", "ko": "한계" },
        { "en": "Next question", "ko": "다음 질문" }
      ]
    },

    {
      "id": "tableau", "group": "g-tab", "title": "Tableau",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (29–31쪽)",
      "definition": "시각적 분석과 대화형 데이터 시각화를 위한 도구예요.",
      "points": [
        "필드를 클릭하고 끌어다 놓아서 화면을 만들어요.",
        "기본 차트는 코드 없이 만들 수 있어요.",
        "필터와 툴팁으로 데이터를 살펴보고, 여러 화면을 대화형 대시보드로 묶어요."
      ],
      "cautions": [
        "도구는 탐색을 도울 뿐, 질문은 분석가가 정해요."
      ],
      "keyterms": [
        { "en": "Tableau", "ko": "태블로" },
        { "en": "interactive dashboards", "ko": "대화형 대시보드" },
        { "en": "filters", "ko": "필터" },
        { "en": "tooltips", "ko": "툴팁" }
      ]
    },
    {
      "id": "tableau-public", "group": "g-tab", "title": "Tableau Desktop Public Edition",
      "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf (32–33쪽)",
      "definition": "이 수업에서 쓰는 무료 데스크톱 버전이에요.",
      "table": {
        "head": ["", "Public Edition", "Professional Edition"],
        "rows": [
          ["라이선스", "무료", "유료"],
          ["데이터 연결", "CSV, Excel 등 일부", "더 넓게 지원"],
          ["데이터 원본당 행 수", "최대 1,500만 행", "고정 상한 없음"],
          ["온라인 게시", "Tableau Public", "Public, Cloud, Server"]
        ]
      },
      "cautions": [
        "로컬 파일은 내 컴퓨터에만 있지만, Tableau Public에 게시한 워크북은 공개돼요."
      ],
      "keyterms": [
        { "en": "Tableau Desktop Public Edition", "ko": "태블로 퍼블릭 에디션" },
        { "en": "Tableau Public", "ko": "태블로 퍼블릭" }
      ]
    }
  ],
  "terms": [
    { "en": "Exploratory Data Analysis (EDA)", "ko": "탐색적 데이터 분석", "def": "데이터셋을 이해하도록 돕는 과정이에요.", "def_en": "Exploratory Data Analysis (EDA) helps us understand a dataset.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "observation unit", "ko": "관측 단위", "def": "한 행이 무엇을 나타내는지예요. 무엇이 반복 기록인지 정해요.", "def_en": "The observation unit determines what counts as a repeated record.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Nominal", "ko": "명목형", "def": "순서 없는 레이블이에요. (예: 부서, 성별)", "def_en": "Labels without an order", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Ordinal", "ko": "순서형", "def": "순서 있는 범주예요. (예: 학력, 직급)", "def_en": "Categories with an order", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Discrete", "ko": "이산형", "def": "0, 1, 2…처럼 세는 정수 값이에요. (예: 근속연수)", "def_en": "Whole-year counts: 0, 1, 2, ...", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Continuous", "ko": "연속형", "def": "척도로 잰 양이에요. (예: 연봉)", "def_en": "A quantity measured on a scale", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "distribution", "ko": "분포", "def": "값이 관측치들에 걸쳐 어떻게 나타나는지예요.", "def_en": "A distribution describes how values occur across observations.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Histogram", "ko": "히스토그램", "def": "수치형 변수를 구간으로 나눠 구간마다 개수를 막대로 보여 줘요.", "def_en": "", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Mean", "ko": "평균", "def": "합계를 값의 개수로 나눈 값이에요.", "def_en": "Mean: total divided by the number of values", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Median", "ko": "중앙값", "def": "가운데 값, 또는 가운데 두 값의 평균이에요.", "def_en": "Median: middle value, or the mean of the two middle values", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Boxplot", "ko": "상자그림", "def": "수치형 값의 중심과 퍼짐을 요약하는 그래프예요.", "def_en": "A boxplot summarizes the center and spread of numerical values.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Interquartile range (IQR)", "ko": "사분위 범위", "def": "Q3에서 Q1을 뺀 값으로, 가운데 50%의 폭이에요.", "def_en": "Interquartile range (IQR) = Q3 − Q1", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Whiskers", "ko": "수염", "def": "상자에서 1.5 × IQR 안의 관측값까지 뻗은 선이에요.", "def_en": "Whiskers extend to observed values within 1.5 × IQR of the box.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Scatterplot", "ko": "산점도", "def": "두 수치형 변수의 관계를 점으로 보여 줘요. 점 하나가 관측치 하나예요.", "def_en": "", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "positive association", "ko": "양의 연관", "def": "한 변수가 클수록 다른 변수도 대체로 큰 관계예요.", "def_en": "A positive association does not mean every employee follows the same pattern.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "proportions", "ko": "비율", "def": "전체 중 차지하는 몫이에요. 분모를 분명히 정해야 해요.", "def_en": "A proportion needs a clearly defined denominator.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Zero baseline", "ko": "0 기준선", "def": "막대그래프 축을 0에서 시작하게 하는 거예요.", "def_en": "For bar charts, a zero baseline supports an honest comparison of lengths.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "en": "Tableau", "ko": "태블로", "def": "시각적 분석과 대화형 데이터 시각화를 위한 도구예요.", "def_en": "Tableau is a tool for visual analysis and interactive data visualization.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "슬라이드가 영어라서 한국어 용어(명목형, 순서형, 수염, 0 기준선 등)는 내가 붙인 번역이에요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "Tableau 시연(34–37쪽)은 화면 그림만 있어서 내용을 넣지 않았어요.",
      "직원 표의 이름과 개별 값 같은 세부 숫자는 예시 일부만 넣었어요."
    ] },
    { "title": "사용 안내", "items": [
      "수업 예시의 직원 데이터는 가상 데이터예요. 자료에 그렇게 적혀 있어요.",
      "원본 PDF는 materials/week05 폴더에 있어요."
    ] }
  ],
  "quiz": [
    { "id": "s05-1-q01", "q": "What does exploratory data analysis (EDA) help us do?", "choices": ["Understand a dataset, including useful patterns and problems", "Delete all unusual values", "Prove that one variable causes another", "Publish dashboards online"], "answer": 0, "explain": "EDA는 데이터셋을 이해하도록 돕고, 쓸모 있는 패턴과 문제를 함께 찾아요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q02", "q": "A salary value is recorded as 0. What should we do first?", "choices": ["Investigate whether it is unpaid status, an error, or a missing-value code", "Delete the row immediately", "Replace it with the mean", "Treat it as the highest salary"], "answer": 0, "explain": "결측치와 이상한 값은 먼저 조사해야 해요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q03", "q": "Job level (Staff, Senior, Manager, Director) is what type of variable?", "choices": ["Categorical, ordinal", "Categorical, nominal", "Numerical, discrete", "Numerical, continuous"], "answer": 0, "explain": "직급은 순서가 있는 범주라 순서형이에요. 부서는 순서가 없어서 명목형이에요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q04", "q": "Department codes are recorded as 1 = HR, 2 = IT. Is their average meaningful?", "choices": ["No, they are nominal categories", "Yes, because they are numbers", "Yes, if there are many employees", "Only if the codes are sorted"], "answer": 0, "explain": "숫자처럼 보여도 레이블이에요. 평균을 내도 의미가 없어요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q05", "q": "Which graph fits a categorical variable such as department?", "choices": ["Bar chart", "Histogram", "Boxplot", "Scatterplot"], "answer": 0, "explain": "범주형은 개수와 비율을 막대그래프로 봐요. 히스토그램과 상자그림은 수치형용이에요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q06", "q": "What happens when histogram bins are very wide?", "choices": ["Wide bins hide detail", "They reveal each exact value", "They make small samples look noisy", "They change the data"], "answer": 0, "explain": "구간이 넓으면 자세한 모양이 가려지고, 너무 좁으면 작은 표본이 들쭉날쭉해 보여요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q07", "q": "Salaries 40, 45, 50, 55, 120 have a mean of 62. What is the median?", "choices": ["50", "62", "55", "120"], "answer": 0, "explain": "중앙값은 가운데 값 50이에요. 큰 값 120이 평균만 크게 끌어올렸어요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q08", "q": "In a boxplot, what does the box show?", "choices": ["The middle 50% of values, from Q1 to Q3", "Every individual value", "The mean", "The sample size"], "answer": 0, "explain": "상자는 Q1(25번째)부터 Q3(75번째) 백분위수까지 가운데 50%예요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q09", "q": "How should we treat a value flagged as unusual in a boxplot?", "choices": ["As a reason to investigate, not an instruction to delete", "Delete it right away", "Replace it with the median", "Ignore it in every analysis"], "answer": 0, "explain": "이상한 값 표시는 조사할 이유예요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q10", "q": "Which graph fits the question “Do tenure and salary move together?”", "choices": ["Scatterplot", "Bar chart", "Line graph of one employee", "Histogram"], "answer": 0, "explain": "두 수치형 변수의 관계는 산점도로 봐요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q11", "q": "Employees with longer tenure tend to earn more in this sample. What can the graph alone NOT establish?", "choices": ["That one more year at the company will cause a specific salary increase", "That there is an upward pattern", "That salaries vary at similar tenure", "That some employees are exceptions"], "answer": 0, "explain": "연관은 인과가 아니에요. 직급, 부서, 학력, 경력도 다를 수 있어요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q12", "q": "HR has 2 of 4 employees with a master’s degree or higher; IT has 3 of 8. Which statement is true?", "choices": ["IT has the larger count, HR has the higher proportion", "IT has both the larger count and higher proportion", "HR has the larger count", "They have the same proportion"], "answer": 0, "explain": "개수는 IT(3명)가 많지만 비율은 HR(50%)이 IT(37.5%)보다 높아요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q13", "q": "For bar charts, what supports an honest comparison of lengths?", "choices": ["A zero baseline", "A truncated axis", "A log scale", "Removing the axis"], "answer": 0, "explain": "잘린 축은 차이를 실제보다 크게 보이게 해요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" },
    { "id": "s05-1-q14", "q": "What happens to workbooks published to Tableau Public?", "choices": ["They are public", "They stay only on your computer", "They are visible only to your instructor", "They are deleted after a week"], "answer": 0, "explain": "로컬 파일은 내 컴퓨터에만 있지만, Tableau Public에 게시하면 공개돼요.", "source": "AI융합입문 데이터 탐색 및 시각화의 이해_v1.1.pdf" }
  ]
});
