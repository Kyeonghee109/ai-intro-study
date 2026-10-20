addSession({
  "week": 1,
  "session": "1",
  "kind": "강의",
  "lecturer": "",
  "title": "Computer Abstraction and Technology",
  "intro": "컴퓨터를 이루는 하드웨어와 5대 구성요소, 컴퓨터의 종류, 기술 발전 추세(무어의 법칙·황의 법칙), 메모리 종류, ENIAC과 오늘날 컴퓨터 비교, 그리고 고급언어가 기계어로 바뀌는 단계와 ISA를 배워요.",
  "sources": [
    { "index": "01", "title": "Chapter 1 Computer Abstraction and Technology (23쪽, 손필기 포함)", "file": "1_ch1_up_260923_001039.pdf", "path": "computer-arch/materials/필기/1_ch1_up_260923_001039.pdf" },
    { "index": "02", "title": "Week 3 수업 연습문제 (1장 부분)", "file": "week_3_up_261017_220600.pdf", "path": "computer-arch/materials/필기/week_3_up_261017_220600.pdf" }
  ],
  "groups": [
    { "id": "g-hw", "title": "컴퓨터 하드웨어와 구성요소" },
    { "id": "g-trend", "title": "기술 발전 추세" },
    { "id": "g-mem", "title": "메모리와 역사" },
    { "id": "g-level", "title": "표현 단계와 ISA" }
  ],
  "sections": [
    {
      "id": "physical", "group": "g-hw", "title": "물리적 구현: 시스템을 만드는 하드웨어",
      "definition": "컴퓨터 시스템은 집적회로, 인쇄회로기판, 전원 장치, 섀시, 커넥터와 케이블로 만들어져요.",
      "table": { "head": ["부품", "하는 일"], "rows": [
        ["집적회로(IC)", "조합 논리회로, 메모리 소자, 아날로그 인터페이스"],
        ["인쇄회로기판(PC 보드)", "IC를 올리고 연결, CLK·Vdd·GND 신호 분배, 열 방출"],
        ["전원 장치", "교류 전압을 안정된 낮은 직류 전압으로 바꿈"],
        ["섀시", "보드와 전원을 담고 사용자나 다른 시스템과 연결"]
      ] },
      "points": [ "칩은 맨 칩(Bare Die) 상태와 패키지에 담긴 칩(Chip in Package)으로 나눠 그려져 있어요." ],
      "keyterms": [
        { "en": "Integrated Circuits (ICs)", "ko": "집적회로" },
        { "en": "Printed Circuits (PC) boards", "ko": "인쇄회로기판" },
        { "en": "Power Supplies", "ko": "전원 장치" },
        { "en": "Chassis", "ko": "섀시" }
      ],
      "source": "Ch1, 3~4쪽"
    },
    {
      "id": "five-comp", "group": "g-hw", "title": "컴퓨터의 5대 구성요소",
      "definition": "컴퓨터는 제어장치, 데이터경로, 입력, 출력, 메모리의 5가지로 이루어져요.",
      "table": { "head": ["구성요소", "필기", "예"], "rows": [
        ["Control", "제어장치", ""],
        ["Datapath", "연산/데이터 경로장치", ""],
        ["Input", "입력장치", "마우스, 키보드"],
        ["Output", "출력장치", "디스플레이, 프린터"],
        ["Memory", "기억장치", "디스크, DRAM, SRAM, CD"]
      ] },
      "points": [
        "제어장치 + 데이터경로 = CPU(중앙처리장치)예요. 그래서 CPU, 메모리, I/O로 묶어 말하기도 해요.",
        "이 과목의 중심은 프로세서(데이터경로와 제어장치)예요. 수백만 개의 트랜지스터로 만들어져요.",
        "SoC(System on Chip)는 CPU, 메모리, I/O 인터페이스 등을 하나의 칩에 모두 집적한 형태예요. (필기)"
      ],
      "keyterms": [
        { "en": "Control", "ko": "제어장치" },
        { "en": "Datapath", "ko": "데이터경로" },
        { "en": "SoC (System on Chip)", "ko": "시스템 온 칩" }
      ],
      "source": "Ch1, 5쪽"
    },
    {
      "id": "classes", "group": "g-hw", "title": "컴퓨터의 종류: 데스크톱, 서버, 임베디드",
      "definition": "컴퓨팅 응용 분야는 데스크톱, 서버, 임베디드 컴퓨터로 나눠요.",
      "table": { "head": ["종류", "설명", "필기 예"], "rows": [
        ["Desktop", "개인 사용자를 위해 설계, 보통 그래픽 화면·키보드·마우스 포함", "PC, 노트북"],
        ["Server", "여러 사용자의 큰 프로그램을 동시에 실행, 보통 네트워크로만 접근", "구글·네이버의 데이터 센터 컴퓨터"],
        ["Embedded", "다른 기기 안에 들어가 정해진 응용 하나(또는 소프트웨어 묶음)만 실행", "자전거, 냉장고, 세탁기, 핸드폰 (IoT)"]
      ] },
      "points": [
        "데스크톱·서버는 범용 기계, 임베디드는 특수 목적 기기예요. (필기)",
        "2010년 → 2020~24년: PC 약간 감소, 서버 증가, 임베디드(MCU 출하량) 크게 증가 (약 250~310억 개/년)",
        "필기: 임베디드에 관심을 가져라."
      ],
      "keyterms": [
        { "en": "Desktop computers", "ko": "데스크톱 컴퓨터" },
        { "en": "Servers", "ko": "서버" },
        { "en": "Embedded Computers", "ko": "임베디드 컴퓨터" },
        { "en": "General purpose machine", "ko": "범용 기계" }
      ],
      "source": "Ch1, 6~7쪽"
    },
    {
      "id": "tech-trend", "group": "g-trend", "title": "기술 발전: 진공관에서 초대규모 IC까지",
      "definition": "전자 기술은 계속 발전해서 용량과 성능은 늘고 가격은 줄어요. 성능 대비 가격이 비약적으로 좋아졌어요. (필기)",
      "table": { "head": ["연도", "기술", "상대 성능/가격"], "rows": [
        ["1951", "진공관(Vacuum tube)", "1"],
        ["1965", "트랜지스터", "35"],
        ["1975", "집적회로(IC)", "900"],
        ["1995", "초고밀도 집적회로(VLSI)", "2,400,000"],
        ["2005", "Ultra large scale IC", "6,200,000,000"]
      ] },
      "points": [ "트랜지스터는 소형화, IC는 칩 하나에 다 넣은 집적회로예요. (필기)" ],
      "keyterms": [
        { "en": "Vacuum tube", "ko": "진공관" },
        { "en": "Transistor", "ko": "트랜지스터" },
        { "en": "Very large scale IC (VLSI)", "ko": "초고밀도 집적회로" }
      ],
      "source": "Ch1, 8쪽"
    },
    {
      "id": "moore", "group": "g-trend", "title": "무어의 법칙과 황의 법칙",
      "definition": "무어의 법칙은 IC 하나에 싸게 넣을 수 있는 트랜지스터 수가 약 2년마다 2배가 된다는 법칙이에요.",
      "table": { "head": ["법칙", "내용"], "rows": [
        ["무어의 법칙 (1965)", "IC 칩에 저렴하게 탑재할 수 있는 트랜지스터 수가 약 2년마다 2배"],
        ["황의 법칙 (2002)", "메모리(DRAM) 반도체 집적도가 1년(12개월)마다 2배"]
      ] },
      "cautions": [ "무어는 2년, 황은 12개월이에요. 숫자를 헷갈리지 마세요." ],
      "keyterms": [
        { "en": "Moore's law", "ko": "무어의 법칙" },
        { "en": "Hwang's law", "ko": "황의 법칙" }
      ],
      "source": "Ch1, 9쪽"
    },
    {
      "id": "mem-wall", "group": "g-trend", "title": "프로세서 성능 vs 메모리 지연",
      "definition": "프로세서 성능과 메모리 대역폭은 크게 늘었지만, 메모리 지연시간은 거의 줄지 않았어요.",
      "table": { "head": ["항목 (2010년 = 1)", "2025년"], "rows": [
        ["CPU 싱글스레드 성능", "28.1배"],
        ["DDR 대역폭", "16.0배"],
        ["HBM 대역폭 (2015→2025)", "256배"],
        ["DRAM 지연시간", "1.07 (거의 변화 없음)"]
      ] },
      "points": [
        "프로세서가 메모리에 데이터를 요청하는데, 성능과 데이터 양은 늘어도 메모리 접근 시간은 줄지 않아 오래 걸려요. (필기)",
        "그래서 데이터 이동 단계에서 병목현상이 생겨요. (필기)",
        "프로세서 성능 그래프에는 POWER(전력)가 걸림돌로 표시돼 있어요."
      ],
      "example": { "title": "필기 비유", "points": [
        "지연시간: 식당에 들어간 지 얼마 후에 음식을 먹을 수 있는가",
        "대역폭: 한 시간 동안 얼마큼의 손님을 받을 수 있는가"
      ] },
      "keyterms": [
        { "en": "latency", "ko": "지연시간" },
        { "en": "Bandwidth", "ko": "대역폭" },
        { "en": "HBM", "ko": "고대역폭 메모리" }
      ],
      "source": "Ch1, 10~11쪽"
    },
    {
      "id": "volatile", "group": "g-mem", "title": "휘발성 메모리와 비휘발성 메모리",
      "definition": "휘발성 주기억장치는 전원을 끄면 명령어와 데이터가 사라지고, 비휘발성 보조기억장치는 남아 있어요.",
      "table": { "head": ["구분", "예"], "rows": [
        ["휘발성 주기억장치", "RAM (필기)"],
        ["비휘발성 보조기억장치", "자기 디스크, 플래시 메모리(USB), 광 디스크(CD-ROM, DVD), SSD"]
      ] },
      "points": [ "필기: 자기 디스크와 광 디스크에는 X, 플래시 메모리와 SSD에는 강조 표시가 있어요." ],
      "keyterms": [
        { "en": "Volatile main memory", "ko": "휘발성 주기억장치" },
        { "en": "Non-volatile secondary memory", "ko": "비휘발성 보조기억장치" },
        { "en": "Flash memory", "ko": "플래시 메모리" },
        { "en": "Solid State Drive", "ko": "SSD" }
      ],
      "source": "Ch1, 12쪽"
    },
    {
      "id": "eniac", "group": "g-mem", "title": "ENIAC: 최초의 범용 컴퓨터",
      "definition": "제2차 세계대전 때 만든 ENIAC(1946)이 최초의 범용 컴퓨터예요.",
      "points": [
        "포탄 사격표 계산에 쓰였고, 진공관 18,000개를 썼어요.",
        "길이 80피트, 높이 8.5피트, 10자리 레지스터 20개가 각각 2피트 길이였어요.",
        "필기: 콜로서스는 최초 전자 디지털 컴퓨터(암호해독 목적)예요. 디지털 = 상태의 개수가 한정되어 있는 것(FSM)."
      ],
      "table": { "head": ["특징", "ENIAC (1946)", "Intel Core i7"], "rows": [
        ["기술", "진공관 17,468개", "트랜지스터 수십억 개 (10nm대)"],
        ["크기", "1,800 제곱피트, 30톤", "몇 제곱인치, 1온스 미만"],
        ["전력", "150 kW (작은 마을)", "약 125~250 W"],
        ["속도", "초당 약 5,000번 덧셈 / 약 500 FLOPS", "초당 수조 번 연산 (TFLOPS)"],
        ["프로그래밍", "직접 배선과 스위치 설정", "고급 언어 (C++, Python 등)"],
        ["가격", "약 $487,000 (1946)", "약 $300~600 (2025)"]
      ] },
      "cautions": [ "ENIAC 진공관 수가 Historical Perspective 쪽은 18,000개, 비교표는 17,468개로 적혀 있어요." ],
      "keyterms": [
        { "en": "ENIAC", "ko": "에니악" },
        { "en": "general purpose computer", "ko": "범용 컴퓨터" },
        { "en": "FLOPS", "ko": "초당 부동소수점 연산" }
      ],
      "source": "Ch1, 13~14쪽"
    },
    {
      "id": "society", "group": "g-mem", "title": "산업사회에서 정보사회로",
      "definition": "컴퓨터(네트워크) 기술로 사회의 핵심 자원이 공장·기계·노동력에서 지식·데이터로 바뀌었어요.",
      "points": [
        "필기: 산업혁명 1차 증기기관, 2차 전기, 3차 컴퓨터(네트워크), 4차 소프트웨어(지능형 기기)",
        "필기: Know How → Know Where",
        "컴퓨팅 발전으로 전에는 비싸거나 불가능했던 응용이 가능해졌어요. (웹 1992, 자율주행, IoT, 클라우드, 생성형 AI, 유전체 분석, 블록체인, 분산 시스템 등)"
      ],
      "keyterms": [
        { "en": "Industrial revolution", "ko": "산업혁명" },
        { "en": "Internet of Things (IoT)", "ko": "사물인터넷" },
        { "en": "distributed systems", "ko": "분산 시스템" }
      ],
      "source": "Ch1, 15~16쪽"
    },
    {
      "id": "levels", "group": "g-level", "title": "표현 단계: 고급언어 → 어셈블리 → 기계어",
      "definition": "고급언어 프로그램은 컴파일러가 어셈블리어로, 어셈블러가 기계어로 바꾸고, 기계가 해석해 제어 신호가 돼요.",
      "table": { "head": ["단계", "예", "바꾸는 도구"], "rows": [
        ["고급언어", "temp = v[k]; (C, C++, Java)", "컴파일러"],
        ["어셈블리어", "lw $15, 0($2)", "어셈블러"],
        ["기계어", "0000 1001 1100 0110 …", "기계 해석"],
        ["제어 신호", "제어선의 High/Low 신호", ""]
      ] },
      "points": [
        "컴파일러: 고급언어를 특정 프로세서의 어셈블리 언어로 번역해요. 실행될 프로세서마다 각각 따로 컴파일해요. (필기)",
        "어셈블러: 어셈블리어를 기계어로 번역해요. 명령어(1)와 기계어 명령어(1)가 1:1 대응해요. (필기)",
        "어셈블리어 한 줄 한 줄이 'instruction'이에요. 어셈블리어는 컴퓨터가 이해하는 언어와 사람이 이해하는 언어의 중간 단계예요. (필기)"
      ],
      "keyterms": [
        { "en": "Compiler", "ko": "컴파일러" },
        { "en": "Assembler", "ko": "어셈블러" },
        { "en": "Assembly Language", "ko": "어셈블리어" },
        { "en": "Machine Language", "ko": "기계어" }
      ],
      "source": "Ch1, 20쪽"
    },
    {
      "id": "isa", "group": "g-level", "title": "명령어 집합 구조(ISA)",
      "definition": "같은 C = A + B도 컴퓨터마다 이해하는 명령어 집합(ISA)이 달라서, 고급언어로 쓰고 각 컴퓨터용으로 번역(컴파일)해요. (필기)",
      "table": { "head": ["ISA", "C = A + B 코드", "구조"], "rows": [
        ["ISA 1", "push A / push B / add / pop C", "스택"],
        ["ISA 2", "load A / add B / store C", "누산기(AC)"],
        ["ISA 3", "ld R1,A / ld R2,B / add R3,R1,R2 / st C,R3", "범용 레지스터"]
      ] },
      "keyterms": [
        { "en": "Instruction Set Architecture (ISA)", "ko": "명령어 집합 구조" },
        { "en": "Stack", "ko": "스택" },
        { "en": "General Purpose Registers", "ko": "범용 레지스터" }
      ],
      "source": "Ch1, 21쪽"
    },
    {
      "id": "course-map", "group": "g-level", "title": "이 과목에서 배울 것",
      "definition": "컴퓨터가 동작하는 기초(명령어), 성능 분석, 현대 프로세서 문제(캐시, 파이프라인)를 배워요.",
      "table": { "head": ["주제", "장"], "rows": [
        ["명령어 집합 구조", "2장"],
        ["산술 연산과 ALU 만들기", "3장"],
        ["프로세서 만들기, 파이프라이닝", "4장"],
        ["성능", "1장"],
        ["메모리: 캐시와 가상 메모리", "5장"],
        ["I/O, 멀티프로세서", "6장"]
      ] },
      "keyterms": [
        { "en": "caches", "ko": "캐시" },
        { "en": "pipelines", "ko": "파이프라인" }
      ],
      "source": "Ch1, 22~23쪽"
    }
  ],
  "terms": [
    { "en": "Integrated Circuits (ICs)", "ko": "집적회로", "def": "조합 논리회로, 메모리 소자, 아날로그 인터페이스를 담은 칩이에요.", "def_en": "Combinational logic circuits, memory elements, analog interfaces.", "source": "Ch1, 4쪽" },
    { "en": "Printed Circuits (PC) boards", "ko": "인쇄회로기판", "def": "IC를 올리고 연결하며 CLK·Vdd·GND를 나누고 열을 내보내요.", "def_en": "Substrate for ICs and interconnection, distribution of CLK, Vdd, and GND signals, heat dissipation.", "source": "Ch1, 4쪽" },
    { "en": "Power Supplies", "ko": "전원 장치", "def": "교류를 안정된 낮은 직류로 바꿔요.", "def_en": "Converts line AC voltage to regulated DC low voltage levels.", "source": "Ch1, 4쪽" },
    { "en": "Datapath", "ko": "데이터경로", "def": "연산과 데이터가 지나가는 장치예요. 제어장치와 함께 CPU를 이뤄요.", "def_en": "", "source": "Ch1, 5쪽" },
    { "en": "SoC (System on Chip)", "ko": "시스템 온 칩", "def": "CPU, 메모리, I/O 인터페이스 등을 하나의 칩에 모두 집적한 형태예요.", "def_en": "", "source": "Ch1, 5쪽 필기" },
    { "en": "Desktop computers", "ko": "데스크톱 컴퓨터", "def": "개인 사용자를 위해 설계된 컴퓨터예요.", "def_en": "A computer designed for use by an individual, usually incorporating a graphics display, keyboard, and mouse.", "source": "Ch1, 6쪽" },
    { "en": "Servers", "ko": "서버", "def": "여러 사용자의 큰 프로그램을 동시에 실행하고 네트워크로만 접근해요.", "def_en": "A computer used for running larger programs for multiple users often simultaneously and typically accessed only via a network.", "source": "Ch1, 6쪽" },
    { "en": "Embedded Computers", "ko": "임베디드 컴퓨터", "def": "다른 기기 안에 들어가 정해진 응용만 실행하는 컴퓨터예요.", "def_en": "A computer inside another device used for running one predetermined applications or collection of software.", "source": "Ch1, 6쪽" },
    { "en": "Moore's law", "ko": "무어의 법칙", "def": "IC에 싸게 넣을 수 있는 트랜지스터 수가 약 2년마다 2배가 돼요.", "def_en": "The number of transistors that can be inexpensively placed on an IC is doubling approximately every two years.", "source": "Ch1, 9쪽" },
    { "en": "Hwang's law", "ko": "황의 법칙", "def": "메모리 반도체 용량이 12개월마다 2배가 돼요.", "def_en": "capacity doubles every 12 months", "source": "Ch1, 9쪽" },
    { "en": "latency", "ko": "지연시간", "def": "요청하고 나서 결과를 받을 때까지 걸리는 시간이에요.", "def_en": "", "source": "Ch1, 11쪽 필기" },
    { "en": "Bandwidth", "ko": "대역폭", "def": "정해진 시간 동안 처리할 수 있는 양이에요.", "def_en": "", "source": "Ch1, 11쪽 필기" },
    { "en": "Volatile main memory", "ko": "휘발성 주기억장치", "def": "전원을 끄면 명령어와 데이터가 사라져요.", "def_en": "Loses instructions and data when power off", "source": "Ch1, 12쪽" },
    { "en": "Non-volatile secondary memory", "ko": "비휘발성 보조기억장치", "def": "전원을 꺼도 남아요. 자기 디스크, 플래시, 광 디스크, SSD.", "def_en": "", "source": "Ch1, 12쪽" },
    { "en": "ENIAC", "ko": "에니악", "def": "제2차 세계대전 때 만든 최초의 범용 컴퓨터(1946)예요.", "def_en": "ENIAC built in World War II was the first general purpose computer. (1946)", "source": "Ch1, 13쪽" },
    { "en": "Compiler", "ko": "컴파일러", "def": "고급언어를 특정 프로세서의 어셈블리 언어로 번역해요.", "def_en": "", "source": "Ch1, 20쪽" },
    { "en": "Assembler", "ko": "어셈블러", "def": "어셈블리어를 기계어로 번역해요.", "def_en": "", "source": "Ch1, 20쪽" },
    { "en": "Instruction Set Architecture (ISA)", "ko": "명령어 집합 구조", "def": "컴퓨터가 이해하는 명령어의 집합이에요. 컴퓨터마다 달라요.", "def_en": "", "source": "Ch1, 21쪽" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "필기에서 읽기 어려운 글씨는 뜻이 통하게 풀어 썼어요. 예: 10쪽 그래프 위 필기 '프로세서가 메모리한테 데이터를 요청…'",
      "Week 3 연습문제 답 중 1장 내용(Main memory, Moore's law)은 퀴즈에 넣었어요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "17~18쪽 HW1(위험 시나리오 분석 과제) 안내",
      "19쪽 그림이 깨진 쪽",
      "13쪽 ETRI 필기(대전 전자통신연구원, 자동 전화연결)"
    ] },
    { "title": "사용 안내", "items": [
      "원본 PDF는 computer-arch/materials 폴더에 있어요. (사이트에는 올라가지 않아요)"
    ] }
  ],
  "quiz": [
    { "id": "a1-q01", "q": "Which of the following is NOT one of the 5 classic components of a computer?", "choices": ["Compiler", "Control", "Datapath", "Memory"], "answer": 0, "explain": "5대 구성요소는 Control, Datapath, Input, Output, Memory예요.", "source": "Ch1, 5쪽" },
    { "id": "a1-q02", "q": "CPU consists of which two components?", "choices": ["Control & Datapath", "Memory & I/O", "Input & Output", "Datapath & Memory"], "answer": 0, "explain": "CPU(Control & Datapath), Memory, I/O로 묶어요.", "source": "Ch1, 5쪽" },
    { "id": "a1-q03", "q": "A computer used for running larger programs for multiple users often simultaneously and typically accessed only via a network is a(n) ____.", "choices": ["Server", "Desktop computer", "Embedded computer", "Supercomputer"], "answer": 0, "explain": "서버는 네트워크로만 접근하고 여러 사용자가 동시에 써요.", "source": "Ch1, 6쪽" },
    { "id": "a1-q04", "q": "A computer inside another device used for running one predetermined application is a(n) ____ computer.", "answers": ["embedded", "Embedded", "임베디드"], "explain": "냉장고, 세탁기 같은 기기 안에 든 컴퓨터예요.", "source": "Ch1, 6쪽" },
    { "id": "a1-q05", "q": "Which computer category grew the most from 2010 to 2020~24?", "choices": ["Embedded (MCU shipments)", "Personal Computer", "Server", "None of them changed"], "answer": 0, "explain": "임베디드는 연간 수백억 개로 크게 증가했고, PC는 약간 감소했어요.", "source": "Ch1, 7쪽" },
    { "id": "a1-q06", "q": "The number of transistors that can be inexpensively placed on an IC is doubling approximately every two years. What is this called?", "answers": ["Moore's law", "Moores law", "무어의 법칙", "Moore's Law"], "explain": "Week 3 연습문제 (b)의 답이기도 해요.", "source": "Ch1, 9쪽 / Week 3 Exercise 1" },
    { "id": "a1-q07", "q": "According to Hwang's law, memory capacity doubles every ____.", "choices": ["12 months", "2 years", "18 months", "5 years"], "answer": 0, "explain": "무어는 2년, 황은 12개월이에요.", "source": "Ch1, 9쪽" },
    { "id": "a1-q08", "q": "From 2010 to 2025, which one shows almost no improvement?", "choices": ["DRAM latency", "CPU single-thread performance", "DDR bandwidth", "HBM bandwidth"], "answer": 0, "explain": "DRAM 지연시간은 1 → 1.07로 거의 그대로예요. 그래서 메모리 병목이 생겨요.", "source": "Ch1, 11쪽" },
    { "id": "a1-q09", "q": "Component of the computer where all running programs and associated data reside.", "answers": ["Main memory", "main memory", "주기억장치", "메모리"], "explain": "Week 3 연습문제 (a)의 답이에요.", "source": "Week 3 Exercise 1" },
    { "id": "a1-q10", "q": "Which of the following is volatile memory?", "choices": ["RAM (main memory)", "Flash memory", "Solid State Drive", "Magnetic disk"], "answer": 0, "explain": "휘발성 = 전원을 끄면 사라져요. 나머지는 비휘발성 보조기억장치예요.", "source": "Ch1, 12쪽" },
    { "id": "a1-q11", "q": "Which was the first general purpose computer (1946)?", "choices": ["ENIAC", "Colossus", "Intel Core i7", "VAX-11/780"], "answer": 0, "explain": "필기: 콜로서스는 최초의 전자 디지털 컴퓨터(암호해독)예요.", "source": "Ch1, 13쪽" },
    { "id": "a1-q12", "q": "What translates a high level language program into an assembly language program?", "choices": ["Compiler", "Assembler", "Linker", "Loader"], "answer": 0, "explain": "고급언어 → (컴파일러) → 어셈블리어 → (어셈블러) → 기계어.", "source": "Ch1, 20쪽" },
    { "id": "a1-q13", "q": "What translates assembly language into machine language?", "answers": ["Assembler", "assembler", "어셈블러"], "explain": "어셈블리 명령어와 기계어 명령어는 1:1로 대응해요.", "source": "Ch1, 20쪽" },
    { "id": "a1-q14", "q": "'push A, push B, add, pop C' is code for which type of ISA?", "choices": ["Stack", "Accumulator", "General purpose register", "Load-store with 3 operands"], "answer": 0, "explain": "ISA 1은 스택, ISA 2(load/add/store)는 누산기, ISA 3은 레지스터 구조예요.", "source": "Ch1, 21쪽" }
  ]
});
