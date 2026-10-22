addSession({
  "week": 5,
  "session": "05-2",
  "kind": "특강",
  "lecturer": "최혜봉 교수",
  "title": "탐색적 데이터 분석과 시각화의 이해 II",
  "intro": "Tableau로 여러 차트를 한 화면에 모은 대시보드를 만들어요. Divvy 자전거 데이터로 시연을 보고, Gapminder 데이터로 직접 만들어 Tableau Public에 올려요.",
  "keypoints": ["대시보드는 관련된 차트를 한 화면에 모아 탐색하는 공간이에요.", "Filter, Filter Action, Tooltip은 서로 다른 방식으로 탐색을 도와요.", "Filter Action은 한 차트에서 고른 값으로 다른 Worksheet도 함께 바뀌게 해요."],
  "sources": [
    { "index": "01", "title": "Creating Dashboard in Tableau (최혜봉, 40쪽)", "file": "Tableau_대시_보드_만들기_261002_v3.0.pdf" }
  ],
  "groups": [
    { "id": "g-dash", "title": "대시보드 기초" },
    { "id": "g-divvy", "title": "시연: Divvy 대시보드" },
    { "id": "g-gap", "title": "실습: Gapminder 대시보드" }
  ],
  "sections": [
    {
      "id": "dashboard", "group": "g-dash", "title": "대시보드",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (2쪽)",
      "definition": "관련된 정보를 한 화면에 모아 탐색하는 공간이에요.",
      "points": [
        "여러 Worksheet를 결합해서 지도, 차트, KPI를 함께 보며 비교해요.",
        "사용자가 지역이나 기간을 골라 관심 있는 범위로 좁혀 볼 수 있어요."
      ],
      "example": {
        "title": "대시보드 예",
        "points": [
          "매출·이익 KPI, 지역별 지도, 월별 추세를 한 화면에 모아요."
        ]
      },
      "keyterms": [
        { "en": "Dashboard", "ko": "대시보드" },
        { "en": "Worksheet", "ko": "워크시트" },
        { "en": "KPI", "ko": "핵심 지표" }
      ]
    },
    {
      "id": "interactions", "group": "g-dash", "title": "대시보드 상호작용",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (3쪽)",
      "definition": "Filter, Filter Action, Tooltip은 서로 다른 방식으로 탐색을 도와요.",
      "table": {
        "head": ["기능", "사용자가 하는 행동", "보이는 결과"],
        "rows": [
          ["Filter Card", "연도·지역 같은 조건 선택", "지정한 Worksheet의 범위가 바뀌어요"],
          ["Filter Action", "지도나 차트의 Mark 클릭", "연결된 다른 Worksheet가 선택값으로 필터링돼요"],
          ["Tooltip", "Mark 위에 마우스 올리기", "그 Mark의 상세 정보가 보여요"]
        ]
      },
      "keyterms": [
        { "en": "Filter Card", "ko": "필터 카드" },
        { "en": "Filter Action", "ko": "필터 동작" },
        { "en": "Tooltip", "ko": "툴팁" },
        { "en": "Mark", "ko": "마크" }
      ]
    },
    {
      "id": "text-annotation", "group": "g-dash", "title": "글과 주석",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (4쪽)",
      "definition": "관찰한 내용이나 해석에 필요한 설명을 화면에 덧붙여요.",
      "table": {
        "head": ["기능", "쓰임"],
        "rows": [
          ["Text Object", "대시보드의 제목, 설명, 출처를 적어요"],
          ["Annotation", "차트 안 특정 대상에 설명을 연결해요"]
        ]
      },
      "points": [
        "주석은 개별 데이터 표시, 특정 위치, 여러 표시가 있는 영역에 달 수 있어요."
      ],
      "keyterms": [
        { "en": "Text Object", "ko": "텍스트 개체" },
        { "en": "Annotation", "ko": "주석" },
        { "en": "Mark / Point / Area", "ko": "마크 / 점 / 영역" }
      ]
    },
    {
      "id": "objects", "group": "g-dash", "title": "대시보드 개체와 컨테이너",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (5쪽)",
      "definition": "Worksheet 말고도 글, 이미지, 빈칸 같은 개체를 배치할 수 있어요.",
      "table": {
        "head": ["개체", "쓰임"],
        "rows": [
          ["Text / Image", "제목, 설명, 이미지 추가"],
          ["Blank", "항목 사이 여백 확보"],
          ["Horizontal / Vertical", "항목을 가로·세로로 묶기"]
        ]
      },
      "keyterms": [
        { "en": "Dashboard Objects", "ko": "대시보드 개체" },
        { "en": "Container", "ko": "컨테이너" }
      ]
    },

    {
      "id": "divvy", "group": "g-divvy", "title": "Divvy 데이터",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (6–8쪽)",
      "definition": "시카고 자전거 공유 시스템에서 생긴 이용 기록이에요.",
      "points": [
        "한 행은 자전거 이용 한 번(Trip)이에요.",
        "Subscriber는 연간 구독자, Customer는 비구독자예요."
      ],
      "table": {
        "head": ["필드", "의미와 활용"],
        "rows": [
          ["Start / End Time", "이용 시작·종료 시각이에요. 시작 시간을 Hour로 묶어 비교해요"],
          ["From / To Station", "대여·반납 정류소예요. 지도와 출발 정류소 순위에 써요"],
          ["Usertype", "Customer와 Subscriber별 Trip 수를 비교해요"],
          ["Time Block", "Morning, Afternoon, Evening, Night"]
        ]
      },
      "cautions": [
        "같은 사람이 여러 번 타면 Trip도 여러 번 기록돼요.",
        "KPI의 Trip 수는 고유 이용자 수가 아니에요."
      ],
      "keyterms": [
        { "en": "Trip", "ko": "이용 1회" },
        { "en": "Subscriber", "ko": "연간 구독자" },
        { "en": "Customer", "ko": "비구독자" },
        { "en": "Station", "ko": "정류소" }
      ]
    },
    {
      "id": "build-steps", "group": "g-divvy", "title": "대시보드 만드는 순서",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (9–14쪽)",
      "definition": "Worksheet 네 개를 한 대시보드에 모아 정리하는 순서예요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["1. 새 대시보드", "New Dashboard를 만들고 이름을 Station analysis로 바꿔요"],
          ["2. 지도와 차트 배치", "Sheets 목록에서 Stations Map, Station Ranking, Starts by Hour를 끌어다 놓아요"],
          ["3. KPI 추가", "User Type Counts를 지도 위에 놓고 크기를 조절해요"],
          ["4. 크기 맞추기", "Size는 Automatic, 각 View는 Fit > Entire View로 해요"],
          ["5. 축 이름 정리", "Edit Axis로 두 막대그래프 축 이름을 Number of Trips로 맞춰요"],
          ["6. 중복 제목 숨기기", "반복되는 Worksheet 제목을 Hide Title로 숨겨요"]
        ]
      },
      "cautions": [
        "Dashboard의 Size와 각 Worksheet의 Fit은 따로 설정해요.",
        "Station 목록과 차트가 잘리지 않는지 확인해요."
      ],
      "keyterms": [
        { "en": "New Dashboard", "ko": "새 대시보드" },
        { "en": "Automatic", "ko": "자동 크기" },
        { "en": "Fit > Entire View", "ko": "전체 보기 맞춤" },
        { "en": "Hide Title", "ko": "제목 숨기기" }
      ]
    },
    {
      "id": "use-as-filter", "group": "g-divvy", "title": "차트를 필터로 쓰기",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (15–16쪽)",
      "definition": "차트의 Mark를 선택하면 다른 Worksheet도 함께 바뀌게 해요.",
      "points": [
        "View를 선택하고 오른쪽 메뉴에서 Use as Filter를 켜요.",
        "지도, 순위, 시간 차트, KPI에 각각 적용해요.",
        "선택한 차트의 빈 곳을 누르면 선택이 풀려요."
      ],
      "cautions": [
        "항상 지금 선택된 범위를 확인하면서 값을 읽어요.",
        "선택을 풀면 전체 데이터로 돌아오는지 확인해요."
      ],
      "keyterms": [
        { "en": "Use as Filter", "ko": "필터로 사용" }
      ]
    },
    {
      "id": "viz-in-tooltip", "group": "g-divvy", "title": "Tooltip에 Worksheet 넣기",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (17–18쪽)",
      "definition": "마우스를 올리면 작은 상세 표가 나타나게 해요.",
      "points": [
        "새 Worksheet Trips Counts에 Usertype별 Trip 수를 정리해요.",
        "Starts by Hour의 Marks > Tooltip에서 Insert > Sheets로 Trips Counts를 넣어요."
      ],
      "example": {
        "title": "시간대 막대에 마우스 올리기",
        "points": [
          "그 시간의 Customer와 Subscriber별 Trip 수가 표로 보여요."
        ]
      },
      "keyterms": [
        { "en": "Tooltip", "ko": "툴팁" },
        { "en": "Insert > Sheets", "ko": "시트 삽입" }
      ]
    },
    {
      "id": "dynamic-title", "group": "g-divvy", "title": "동적 제목",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (19쪽)",
      "definition": "선택한 값이 제목에 자동으로 나타나게 해요.",
      "points": [
        "Usertype를 Filters에 넣고 Show Filter를 켜서 Single Value (Dropdown)으로 보여 줘요.",
        "제목을 더블클릭해서 Insert로 Usertype를 넣어요.",
        "Filter를 바꾸며 제목과 차트가 함께 바뀌는지 확인해요."
      ],
      "example": {
        "title": "제목 예",
        "points": [
          "시간대별 Trip 수: Subscriber"
        ]
      },
      "keyterms": [
        { "en": "Dynamic Title", "ko": "동적 제목" },
        { "en": "Show Filter", "ko": "필터 표시" },
        { "en": "Single Value (Dropdown)", "ko": "단일 값 드롭다운" }
      ]
    },

    {
      "id": "gapminder", "group": "g-gap", "title": "Gapminder 데이터",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (21–24, 40쪽)",
      "definition": "세계 여러 나라의 모습을 숫자로 비교할 수 있는 자료예요.",
      "points": [
        "195개 국가·지역, 총 975행이에요.",
        "2000, 2005, 2010, 2015, 2020년 자료가 있어요.",
        "한 행은 한 국가·지역의 특정 연도 기록이에요."
      ],
      "table": {
        "head": ["필드", "뜻"],
        "rows": [
          ["life_expectancy", "그 해 사망 수준이 유지될 때 아기가 살 것으로 예상되는 기간 (년)"],
          ["fertility_rate", "여성 1명이 평생 낳을 것으로 예상되는 자녀 수 (명)"],
          ["child_mortality", "아기 1,000명 중 5세 전에 사망하는 수"],
          ["internet_users", "인터넷을 이용하는 사람의 비율 (%)"],
          ["co2_per_capita", "한 사람이 1년에 배출하는 CO₂ (톤)"]
        ]
      },
      "cautions": [
        "빈칸은 자료가 없는 것이라 0으로 바꾸지 않아요.",
        "2000~2020년 자료라 지금 상황과 다를 수 있어요."
      ],
      "keyterms": [
        { "en": "Gapminder Dataset", "ko": "갭마인더 데이터셋" },
        { "en": "life_expectancy", "ko": "기대 수명" },
        { "en": "internet_users", "ko": "인터넷 이용률" }
      ]
    },
    {
      "id": "csv-setup", "group": "g-gap", "title": "CSV 연결과 준비",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (29쪽)",
      "definition": "gapminder_2000_2020.csv를 열고 필드 역할을 맞춰요.",
      "points": [
        "Connect > To a File > Text file에서 CSV 파일을 열어요.",
        "country, region, year를 Dimension으로 써요.",
        "국가끼리 비교할 땐 year를 Filters에 넣어 한 연도만 골라요."
      ],
      "cautions": [
        "year가 Measure로 잡히면 Convert to Dimension으로 바꿔요.",
        "비율이나 기대 수명을 더하지 않도록 SUM과 AVG 설정을 확인해요."
      ],
      "keyterms": [
        { "en": "Dimension", "ko": "차원" },
        { "en": "Measure", "ko": "측정값" },
        { "en": "Convert to Dimension", "ko": "차원으로 변환" },
        { "en": "SUM / AVG", "ko": "합계 / 평균" }
      ]
    },
    {
      "id": "chart-choice", "group": "g-gap", "title": "그래프 고르기",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (30쪽)",
      "definition": "보여 주고 싶은 내용에 맞는 그래프를 2종류 이상 골라요.",
      "table": {
        "head": ["그래프", "살펴볼 내용", "만들 때"],
        "rows": [
          ["Bar Chart", "국가·지역 간 값의 차이", "국가·지역과 숫자 변수 배치"],
          ["Line Chart", "시간에 따른 변화", "year와 숫자 변수 배치"],
          ["Scatterplot", "두 숫자 변수의 관계", "두 숫자 변수 + country를 Detail에"],
          ["Histogram", "값이 모여 있는 범위", "숫자 변수 하나의 분포"]
        ]
      },
      "cautions": [
        "같은 정보를 반복하지 말고 서로 다른 관점을 보여 줘요.",
        "차트에서 함께 변한다고 한 변수가 다른 변수의 원인인 것은 아니에요."
      ],
      "keyterms": [
        { "en": "Bar Chart", "ko": "막대그래프" },
        { "en": "Line Chart", "ko": "선 그래프" },
        { "en": "Scatterplot", "ko": "산점도" },
        { "en": "Detail", "ko": "세부 정보" }
      ]
    },
    {
      "id": "map", "group": "g-gap", "title": "지도 추가",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (31쪽)",
      "definition": "국가의 위치와 데이터 값을 함께 보여 줘요.",
      "points": [
        "country에 Geographic Role > Country/Region을 지정하고 더블클릭해 지도를 만들어요.",
        "year를 Filters에 넣어 비교할 연도 하나를 골라요.",
        "숫자 변수를 Marks의 Color나 Size에 넣어요."
      ],
      "cautions": [
        "Unknown 위치가 보이면 Edit Locations로 국가 이름을 확인해요.",
        "표시되지 않는 국가를 임의로 옮기지 않아요."
      ],
      "keyterms": [
        { "en": "Geographic Role", "ko": "지리적 역할" },
        { "en": "Edit Locations", "ko": "위치 편집" },
        { "en": "Color / Size", "ko": "색 / 크기" }
      ]
    },
    {
      "id": "layout", "group": "g-gap", "title": "배치와 레이블",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (32쪽)",
      "definition": "처음 보는 사람도 주제를 이해할 수 있게 화면을 정리해요.",
      "points": [
        "중요한 차트에 넓은 공간을 주고, 관련된 차트를 가까이 둬요.",
        "대시보드 제목에는 주제를, 차트 제목에는 무엇을 비교하는지 적어요.",
        "축 이름은 읽기 쉽게 바꾸고 단위를 적어요. (예: 인터넷 이용률 (%))"
      ],
      "cautions": [
        "막대그래프의 숫자 축은 0에서 시작하는지 확인해요.",
        "같은 지역에는 같은 색을 쓰고, 중복 범례와 불필요한 제목을 정리해요."
      ],
      "keyterms": [
        { "en": "Layout", "ko": "배치" },
        { "en": "Axis Label", "ko": "축 레이블" },
        { "en": "Legend", "ko": "범례" }
      ]
    },
    {
      "id": "filter-scope", "group": "g-gap", "title": "필터 적용 범위",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (33–34쪽)",
      "definition": "어떤 필터가 어떤 차트에 적용되는지 정해요.",
      "points": [
        "year나 region을 Filters에 넣고 Show Filter를 켜요.",
        "Filter 메뉴의 Apply to Worksheets로 적용할 차트를 정해요.",
        "Tooltip에는 국가명, 연도, 변수 이름과 단위를 넣어요."
      ],
      "cautions": [
        "여러 연도를 보여 주는 Line Chart에는 한 연도만 고르는 필터가 적용되지 않게 해요."
      ],
      "keyterms": [
        { "en": "Apply to Worksheets", "ko": "워크시트에 적용" },
        { "en": "Show Filter", "ko": "필터 표시" }
      ]
    },
    {
      "id": "publish", "group": "g-gap", "title": "Tableau Public에 게시와 제출",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (36–38쪽)",
      "definition": "완성한 대시보드를 웹에 공개하고 링크를 제출해요.",
      "table": {
        "head": ["단계", "하는 일"],
        "rows": [
          ["1", "Server > Tableau Public > Save to Tableau Public"],
          ["2", "Tableau Public 계정으로 로그인해요"],
          ["3", "주제를 알 수 있는 Workbook 이름으로 Save해요"],
          ["4", "Share에서 링크를 복사해요"]
        ]
      },
      "points": [
        "제출할 것은 공개 링크와 대시보드 전체 화면 캡처 1장이에요."
      ],
      "cautions": [
        "공개 게시라서 학번이나 연락처 같은 개인정보는 넣지 않아요.",
        "로그아웃 상태나 다른 브라우저에서도 링크가 열리는지 확인해요."
      ],
      "keyterms": [
        { "en": "Save to Tableau Public", "ko": "태블로 퍼블릭에 저장" },
        { "en": "Publish", "ko": "게시" },
        { "en": "Share", "ko": "공유" }
      ]
    },
    {
      "id": "troubleshoot", "group": "g-gap", "title": "막혔을 때 확인할 것",
      "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf (39쪽)",
      "definition": "한 번에 하나씩 설정을 확인해요.",
      "table": {
        "head": ["증상", "확인할 것"],
        "rows": [
          ["산점도에 점이 하나뿐", "country가 Marks > Detail에 있나요?"],
          ["숫자가 예상보다 큼", "여러 연도를 더했나요? SUM과 AVG가 맞나요?"],
          ["한 차트만 필터가 바뀜", "Apply to Worksheets 적용 대상을 확인해요"],
          ["선 그래프에 점만 보임", "여러 연도를 남겼는지, year 순서가 맞는지 확인해요"],
          ["지도에 국가가 안 보임", "Geographic Role과 Edit Locations를 확인해요"],
          ["Public 링크가 내 화면과 다름", "수정 뒤 다시 Save to Tableau Public 했나요?"]
        ]
      },
      "keyterms": [
        { "en": "Marks > Detail", "ko": "마크 > 세부 정보" }
      ]
    }
  ],
  "terms": [
    { "en": "Dashboard", "ko": "대시보드", "def": "관련된 정보를 한 화면에 모아 탐색하는 공간이에요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Filter Card", "ko": "필터 카드", "def": "연도·지역 같은 조건을 골라 지정한 Worksheet의 범위를 바꿔요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Filter Action", "ko": "필터 동작", "def": "지도나 차트의 Mark를 클릭하면 연결된 다른 Worksheet가 필터링돼요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Tooltip", "ko": "툴팁", "def": "Mark 위에 마우스를 올리면 상세 정보를 보여 줘요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Annotation", "ko": "주석", "def": "차트 안 특정 대상에 설명을 연결해요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Container", "ko": "컨테이너", "def": "대시보드 항목을 가로나 세로로 묶어요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Use as Filter", "ko": "필터로 사용", "def": "차트를 선택하면 다른 Worksheet도 함께 바뀌게 하는 설정이에요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Fit > Entire View", "ko": "전체 보기 맞춤", "def": "주어진 View 안에 차트 전체를 보여 줘요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Dynamic Title", "ko": "동적 제목", "def": "선택한 값이 제목에 자동으로 나타나는 제목이에요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Dimension", "ko": "차원", "def": "country, region, year처럼 묶고 나누는 기준으로 쓰는 필드예요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Geographic Role", "ko": "지리적 역할", "def": "필드를 국가·지역 같은 위치로 인식하게 하는 설정이에요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "en": "Apply to Worksheets", "ko": "워크시트에 적용", "def": "필터를 어느 차트에 적용할지 정해요.", "def_en": "", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "Tableau 메뉴 이름(Worksheet, Use as Filter 등)은 화면에 보이는 그대로 두었어요. 한국어 이름은 내가 붙인 번역이에요.",
      "슬라이드에 영어 정의 문장이 없어서 용어 정리의 영어 정의는 비워 두었어요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "시연 화면 그림과 '완성한 Dashboard로 질문하기'(20쪽)의 예시 질문은 넣지 않았어요.",
      "Gapminder 필드 중 population, traffic_deaths, cell_phones_total, income_per_capita, people_in_poverty는 표에서 뺐어요."
    ] },
    { "title": "사용 안내", "items": [
      "실습 파일(1_1_simple_dashboard.twbx, gapminder_2000_2020.csv)은 이 사이트에 없어요. 수업 자료실에서 받아야 해요.",
      "원본 PDF는 materials/week05 폴더에 있어요."
    ] }
  ],
  "quiz": [
    { "id": "s05-2-q01", "q": "대시보드(Dashboard)란?", "choices": ["관련된 정보를 한 화면에 모아 탐색하는 공간", "데이터 원본 파일 하나", "차트 하나의 제목", "Tableau 계정 설정 화면"], "answer": 0, "explain": "여러 Worksheet를 결합해 지도, 차트, KPI를 함께 보며 비교해요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q02", "q": "지도나 차트의 Mark를 클릭하면 연결된 다른 Worksheet가 선택값으로 필터링되는 기능은?", "choices": ["Filter Action", "Filter Card", "Tooltip", "Annotation"], "answer": 0, "explain": "Filter Card는 조건을 고르는 카드, Tooltip은 마우스를 올리면 상세 정보가 보이는 기능이에요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q03", "q": "Divvy 데이터에서 한 행은 무엇인가?", "choices": ["자전거 이용 1회(Trip)", "이용자 한 명", "정류소 하나", "하루 전체"], "answer": 0, "explain": "같은 사람이 여러 번 타면 여러 Trip으로 기록돼요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q04", "q": "Divvy 대시보드의 KPI에 나온 Trip 수에 대한 설명으로 옳은 것은?", "choices": ["고유 이용자 수가 아니다", "고유 이용자 수와 같다", "정류소 수와 같다", "구독자 수만 센 것이다"], "answer": 0, "explain": "Trip 수는 이용 횟수라서 고유 이용자 수가 아니에요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q05", "q": "Dashboard의 Size와 각 Worksheet의 Fit에 대한 설명으로 옳은 것은?", "choices": ["둘은 따로 설정한다", "Size를 바꾸면 Fit도 자동으로 같아진다", "Fit은 대시보드 전체에만 적용된다", "둘 다 바꿀 수 없다"], "answer": 0, "explain": "Size는 Automatic, 각 View는 Fit > Entire View로 따로 맞춰요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q06", "q": "Use as Filter로 Station을 선택한 뒤 전체 데이터로 돌아가려면?", "choices": ["선택한 차트의 빈 곳을 클릭한다", "Workbook을 다시 연다", "Station을 삭제한다", "Tooltip을 끈다"], "answer": 0, "explain": "빈 곳을 누르면 선택이 풀려요. 해제 후 전체로 돌아오는지 확인해요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q07", "q": "선택한 Usertype이 제목에 자동으로 나타나게 하는 기능은?", "choices": ["Dynamic Title", "Hide Title", "Edit Axis", "Blank"], "answer": 0, "explain": "제목 편집에서 Insert로 Usertype을 넣으면 필터에 따라 제목이 바뀌어요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q08", "q": "Gapminder 데이터에서 빈칸은 어떻게 다뤄야 하나?", "choices": ["자료가 없는 것이므로 0으로 바꾸지 않는다", "0으로 바꾼다", "평균으로 채운다", "그 국가를 삭제한다"], "answer": 0, "explain": "빈칸은 자료가 없는 경우예요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q09", "q": "year가 Measure로 잡혔을 때 해야 할 일은?", "choices": ["우클릭 > Convert to Dimension", "SUM으로 바꾼다", "삭제한다", "Color에 넣는다"], "answer": 0, "explain": "country, region, year는 Dimension으로 써요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q10", "q": "기대 수명 숫자가 예상보다 훨씬 크게 나왔다. 먼저 확인할 것은?", "choices": ["여러 연도를 더하지 않았는지, SUM과 AVG 설정", "지도의 색", "대시보드 제목", "Tableau Public 링크"], "answer": 0, "explain": "비율이나 기대 수명을 더하면 값이 커져요. SUM/AVG 설정을 확인해요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q11", "q": "두 숫자 변수의 관계를 보여 주는 산점도를 만들 때, 점이 하나만 보인다면?", "choices": ["country를 Marks > Detail에 넣었는지 확인한다", "year를 삭제한다", "Bar Chart로 바꾼다", "Tableau를 다시 설치한다"], "answer": 0, "explain": "country를 Detail에 넣어야 국가마다 점이 하나씩 생겨요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q12", "q": "여러 연도를 보여 주는 Line Chart가 있을 때 한 연도만 고르는 필터는 어떻게 해야 하나?", "choices": ["Apply to Worksheets로 그 차트에는 적용되지 않게 한다", "모든 차트에 적용한다", "Line Chart를 지운다", "필터를 쓰지 않는다"], "answer": 0, "explain": "한 연도만 남으면 선 그래프에 점만 보이게 돼요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" },
    { "id": "s05-2-q13", "q": "Tableau Public에 게시할 때 주의할 점은?", "choices": ["공개되므로 학번·연락처 같은 개인정보를 넣지 않는다", "개인정보를 넣어야 제출이 인정된다", "게시하면 나만 볼 수 있다", "로그인 없이 게시된다"], "answer": 0, "explain": "Tableau Public 게시는 공개예요. 다른 브라우저에서도 링크가 열리는지 확인해요.", "source": "Tableau_대시_보드_만들기_261002_v3.0.pdf" }
  ]
});
