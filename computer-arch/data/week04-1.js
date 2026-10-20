addSession({
  "week": 4,
  "session": "4-1",
  "kind": "강의",
  "lecturer": "",
  "title": "The Processor (Part 1): 데이터경로와 단일·다중 사이클",
  "intro": "4장 앞부분이에요. 논리설계(조합·순차 회로, 플립플롭)와 MIPS 명령어를 복습하고, lw·sw·R형·beq를 실행하는 단일 사이클 데이터경로와 제어 신호를 만들어요. 마지막으로 성능 문제와 다중 사이클 구현의 5단계를 배워요. 중간고사 범위(3장까지)가 아니라 시험 뒤 공부용이에요.",
  "sources": [
    { "index": "01", "title": "Chapter 4 Part 1 (93쪽, 손필기 포함)", "file": "41ch4_part1_up-1_261013_005541.pdf", "path": "computer-arch/materials/필기/41ch4_part1_up-1_261013_005541.pdf" }
  ],
  "groups": [
    { "id": "g-review", "title": "복습: 논리설계와 MIPS 명령어" },
    { "id": "g-dp", "title": "데이터경로 만들기" },
    { "id": "g-ctrl", "title": "제어 신호" },
    { "id": "g-perf", "title": "단일 사이클 성능" },
    { "id": "g-multi", "title": "다중 사이클 구현" }
  ],
  "sections": [
    {
      "id": "comb-seq", "group": "g-review", "title": "조합 회로 vs 순차 회로",
      "definition": "조합 회로는 출력이 현재 입력에만 달려 있어요(같은 입력 → 같은 출력). 순차 회로는 현재 입력과 현재 상태에 달려 있어요(같은 입력이어도 출력이 다를 수 있음).",
      "table": { "head": ["종류", "예", "출력이 정해지는 것"], "rows": [
        ["조합(combinational)", "ALU", "현재 입력만"],
        ["순차(sequential)", "메모리, 레지스터", "현재 입력 + 현재 상태"]
      ] },
      "points": [
        "동기식 순차 회로에는 '클록'이라는 특별한 신호가 있어서 모든 부품의 동작을 맞춰요.",
        "상태 소자는 클록이 없는 것(비동기)과 있는 것(동기)으로 나뉘어요. 동기식은 에지 트리거 방식을 써요(rising/falling edge)."
      ],
      "keyterms": [
        { "en": "Combinational", "ko": "조합" },
        { "en": "Sequential", "ko": "순차" },
        { "en": "Synchronous", "ko": "동기식" },
        { "en": "Edge triggered", "ko": "에지 트리거" }
      ],
      "source": "Ch4-1, 3~6쪽, 15쪽"
    },
    {
      "id": "latch-ff", "group": "g-review", "title": "D 래치와 D 플립플롭",
      "definition": "D 래치는 데이터 D와 클록 C를 입력받아 내부 상태 Q와 그 보수를 내보내요. D 플립플롭은 클록 에지에서만 출력이 바뀌어요.",
      "points": [
        "D 래치: 클록 신호가 활성인 동안 출력이 바뀔 수 있어요.",
        "마스터-슬레이브 플립플롭은 D 래치 두 개로 만들고, 1(또는 0)을 잡아 버리는 문제(ones/zeros catching)가 있어요.",
        "우리 구현: 에지 트리거 방식. 상태 소자를 읽고 → 조합 논리를 거쳐 → 상태 소자에 써요(한 클록 사이클 안에서).",
        "상태 기계 구조: 다음 상태 논리 → 상태 메모리(플립플롭) → 출력 함수 논리. 출력이 입력에도 달려 있으면 Mealy예요."
      ],
      "keyterms": [
        { "en": "D-latch", "ko": "D 래치" },
        { "en": "D flip-flop", "ko": "D 플립플롭" },
        { "en": "Master-Slave flip-flop", "ko": "마스터-슬레이브 플립플롭" },
        { "en": "Mealy machine", "ko": "밀리 머신" }
      ],
      "source": "Ch4-1, 7~10쪽"
    },
    {
      "id": "mips-review", "group": "g-review", "title": "MIPS 명령어 형식 복습",
      "definition": "MIPS 명령어 형식은 R, I, J 세 가지예요.",
      "table": { "head": ["형식", "필드", "예"], "rows": [
        ["R", "op rs rt rd shamt funct", "add, sub, and, or, slt, sll, srl, jr"],
        ["I", "op rs rt constant/address", "addi, lw, sw, beq, bne"],
        ["J", "op jump address(word address)", "j, jal"]
      ] },
      "points": [
        "LW rt, imm16(rs): rt ← M[rs + se(imm16)]",
        "SW rt, imm16(rs): M[rs + se(imm16)] ← rt",
        "BEQ rs, rt, imm16: rs == rt이면 PC ← PC + se(imm16)×4",
        "JAL imm26: $ra ← PC+4, PC ← imm26×4"
      ],
      "keyterms": [
        { "en": "sign extension (se)", "ko": "부호 확장" },
        { "en": "zero extension (ze)", "ko": "0 확장" }
      ],
      "source": "Ch4-1, 16~17쪽"
    },
    {
      "id": "dp-intro", "group": "g-dp", "title": "단순화한 MIPS 구현",
      "definition": "단일 클록 사이클 CPU는 명령어 하나를 한 클록 사이클에 실행해요. 데이터경로는 MIPS 명령어 집합에 맞춰 배치해요.",
      "points": [
        "다루는 명령어: 메모리 참조(lw, sw), 산술·논리(add, sub, and, or, slt), 제어 흐름(beq).",
        "일반적 순서: ① PC로 명령어 주소를 주고 ② 메모리에서 명령어를 가져오고 ③ 레지스터를 읽고 ④ 명령어를 보고 무엇을 할지 정해요.",
        "단일 사이클 구현에서는 명령어를 IR에 저장하지 않아요(25쪽 질문).",
        "명령어 메모리와 데이터 메모리를 따로 둬야 해요. 한 사이클에 같은 자원을 두 번 쓸 수 없기 때문이에요(26쪽 질문, 55쪽)."
      ],
      "keyterms": [
        { "en": "Datapath", "ko": "데이터경로" },
        { "en": "Single clock cycle", "ko": "단일 클록 사이클" },
        { "en": "Register Transfer Language (RTL)", "ko": "레지스터 전송 언어" }
      ],
      "source": "Ch4-1, 19~26쪽"
    },
    {
      "id": "regfile", "group": "g-dp", "title": "레지스터 파일",
      "definition": "레지스터 파일은 D 플립플롭으로 만들어요. 읽기 레지스터 번호 2개, 쓰기 레지스터 번호, 쓰기 데이터, Write 신호를 받아요.",
      "points": [
        "읽기: 레지스터 번호로 MUX를 골라 Read data 1, 2를 내보내요.",
        "쓰기: 5-to-32 디코더가 레지스터 번호를 골라 해당 레지스터의 E(enable)를 켜요. 언제 쓸지는 실제 클록으로 정해요.",
        "읽기와 쓰기를 동시에 할 수 있어요."
      ],
      "keyterms": [
        { "en": "Register file", "ko": "레지스터 파일" },
        { "en": "5-to-32 decoder", "ko": "5×32 디코더" },
        { "en": "Multiplexer (Mux)", "ko": "멀티플렉서" }
      ],
      "source": "Ch4-1, 27~30쪽"
    },
    {
      "id": "components", "group": "g-dp", "title": "필요한 부품과 ALU",
      "definition": "부품: (a) 레지스터 (b) ALU (c) 데이터 메모리 (d) 부호 확장기 (e) 명령어 메모리 (f) PC (g) 덧셈기.",
      "table": { "head": ["용도", "쓰는 부품"], "rows": [
        ["명령어 가져오기(fetch)", "e~g"],
        ["R형 ALU 연산", "a, b"],
        ["lw, sw", "a, b, c, d"],
        ["beq", "a, b, d, f, g"]
      ] },
      "points": [
        "ALU 제어선 4비트: 0000 AND, 0001 OR, 0010 add, 0110 subtract, 0111 slt, 1100 NOR.",
        "Zero 출력은 결과가 0일 때 1이에요.",
        "상태 비트: Z(zero), S(sign, 음수면 1), V(overflow), C(carryout)."
      ],
      "keyterms": [
        { "en": "Sign extend", "ko": "부호 확장" },
        { "en": "Status bits (condition code)", "ko": "상태 비트" },
        { "en": "Adder", "ko": "덧셈기" }
      ],
      "source": "Ch4-1, 31~34쪽"
    },
    {
      "id": "dp-build", "group": "g-dp", "title": "데이터경로 합치기",
      "definition": "명령어별 데이터경로를 만들고 멀티플렉서로 이어 붙여요.",
      "points": [
        "명령어 가져오기: PC(32비트 레지스터)로 명령어를 읽고 PC를 4 증가시켜요.",
        "R형(add, sub, and, or, slt): 레지스터 2개 읽고 ALU 결과를 레지스터에 써요.",
        "lw/sw: 부호 확장한 오프셋을 더해 주소를 만들어요.",
        "분기(beq): 부호 확장 후 shift left 2(배선만 바꿈)로 목표 주소를 만들고, ALU로 두 레지스터를 비교해요.",
        "R형 + lw/sw를 합치려면 MUX가 2개 더 필요해요. 분기와 PC까지 합칠 때도 MUX를 써요."
      ],
      "keyterms": [
        { "en": "Shift left 2", "ko": "왼쪽 2비트 시프트" },
        { "en": "Branch target", "ko": "분기 목표 주소" }
      ],
      "source": "Ch4-1, 35~41쪽"
    },
    {
      "id": "alu-control", "group": "g-ctrl", "title": "ALU 제어",
      "definition": "ALU 제어는 2비트 ALUOp(주 제어에서 옴)와 funct 필드를 받아 4비트 ALU 제어 입력을 만들어요.",
      "table": { "head": ["명령어", "ALUOp", "funct", "ALU 동작", "ALU 제어 입력"], "rows": [
        ["lw / sw", "00", "XXXXXX", "add", "0010"],
        ["beq", "01", "XXXXXX", "subtract", "0110"],
        ["R형 add", "10", "100000", "add", "0010"],
        ["R형 sub", "10", "100010", "subtract", "0110"],
        ["R형 and", "10", "100100", "and", "0000"],
        ["R형 or", "10", "100101", "or", "0001"],
        ["R형 slt", "10", "101010", "slt", "0111"]
      ] },
      "points": [
        "제어 신호 종류: 연산 고르기(ALU, 읽기/쓰기 등), 데이터 흐름 조절(MUX 입력 고르기).",
        "정보는 명령어 32비트에서 와요. R형은 op가 000000이고 funct로 연산을 구분해요.",
        "진리표로 나타내고 게이트로 바꿀 수 있어요."
      ],
      "keyterms": [
        { "en": "ALUOp", "ko": "ALU 연산 코드" },
        { "en": "Function code (funct)", "ko": "기능 코드" },
        { "en": "Truth table", "ko": "진리표" }
      ],
      "source": "Ch4-1, 46~50쪽"
    },
    {
      "id": "ctrl-signals", "group": "g-ctrl", "title": "제어 신호 7개의 뜻",
      "definition": "제어 신호가 0(deasserted)일 때와 1(asserted)일 때 하는 일이 달라요. PCSrc = Branch AND Zero.",
      "table": { "head": ["신호", "0일 때", "1일 때"], "rows": [
        ["RegDst", "쓰기 레지스터 = rt(20:16)", "쓰기 레지스터 = rd(15:11)"],
        ["RegWrite", "없음", "Write data 값을 레지스터에 씀"],
        ["ALUSrc", "ALU 두 번째 입력 = Read data 2", "부호 확장한 하위 16비트"],
        ["PCSrc", "PC ← PC+4", "PC ← 분기 목표"],
        ["MemRead", "없음", "메모리 내용을 Read data로"],
        ["MemWrite", "없음", "Write data로 메모리 덮어씀"],
        ["MemtoReg", "레지스터 쓰기값 = ALU 결과", "레지스터 쓰기값 = 메모리 데이터"]
      ] },
      "keyterms": [
        { "en": "Asserted", "ko": "활성(1)" },
        { "en": "Deasserted", "ko": "비활성(0)" },
        { "en": "Control unit", "ko": "제어 장치" }
      ],
      "source": "Ch4-1, 51~54쪽"
    },
    {
      "id": "ctrl-per-inst", "group": "g-ctrl", "title": "명령어별 제어 신호",
      "definition": "명령어 종류마다 데이터 흐름이 달라서 제어 신호 값도 달라요.",
      "table": { "head": ["신호", "R형", "lw", "sw", "beq"], "rows": [
        ["RegDst", "1 (rd)", "0 (rt)", "X", "X"],
        ["RegWrite", "1", "1", "0", "0"],
        ["ALUSrc", "0", "1", "1", "0"],
        ["ALUOp", "연산에 따라", "add", "add", "sub"],
        ["MemRead", "0", "1", "0", "0"],
        ["MemWrite", "0", "0", "1", "0"],
        ["MemtoReg", "0", "1", "X", "X"],
        ["PCSrc", "0", "0", "0", "Zero AND Branch"]
      ] },
      "points": [
        "X는 don't care(어느 값이든 상관없음)예요. sw와 beq는 레지스터에 쓰지 않으니까 RegDst, MemtoReg가 X예요.",
        "예: add $s0,$t0,$t1 / lw $s0,100($t0) / sw $s0,100($t0) / beq $s0,$s1,loop"
      ],
      "keyterms": [
        { "en": "Don't care (X)", "ko": "무관" }
      ],
      "source": "Ch4-1, 56~64쪽"
    },
    {
      "id": "single-perf", "group": "g-perf", "title": "단일 사이클 성능",
      "definition": "모든 논리가 조합 회로라서 값이 안정될 때까지 기다려요. 사이클 시간은 가장 긴 경로로 정해져요.",
      "table": { "head": ["명령어", "쓰는 장치", "합계"], "rows": [
        ["R형", "fetch 200 + reg 50 + ALU 100 + reg 50", "400ps"],
        ["lw", "fetch 200 + reg 50 + ALU 100 + mem 200 + reg 50", "600ps"],
        ["sw", "fetch 200 + reg 50 + ALU 100 + mem 200", "550ps"],
        ["beq", "fetch 200 + reg 50 + ALU 100", "350ps"],
        ["j", "fetch 200", "200ps"]
      ] },
      "points": [
        "가정: 메모리 200ps, ALU·덧셈기 100ps, 레지스터 파일 50ps, 나머지 지연은 무시.",
        "사이클 시간은 가장 긴 명령어(lw)인 600ps, CPI = 1.",
        "실행 시간 = 명령어 수 × CPI × 사이클 시간 = 명령어 수 × 600ps.",
        "문제점: 부동소수점처럼 복잡한 명령어가 있으면? 칩 면적 낭비. 명령어마다 걸리는 시간이 달라서 개선할 여지가 있어요.",
        "해결책: 사이클 시간을 줄이고 명령어마다 다른 사이클 수를 쓰는 다중 사이클 데이터경로."
      ],
      "keyterms": [
        { "en": "Cycle time", "ko": "사이클 시간" },
        { "en": "CPI", "ko": "명령어당 사이클 수" },
        { "en": "Critical path", "ko": "가장 긴 경로" }
      ],
      "source": "Ch4-1, 65~69쪽"
    },
    {
      "id": "multi-dp", "group": "g-multi", "title": "다중 사이클 데이터경로",
      "definition": "명령어 하나를 여러 클록 사이클에 걸쳐 실행해요. 기능 장치를 다시 쓰고, 제어는 유한 상태 기계(Moore)로 해요.",
      "points": [
        "ALU 하나로 주소 계산과 PC 증가를 다 해요. 메모리 하나에 명령어와 데이터를 같이 둬요.",
        "단계마다 한 사이클, 일의 양을 고르게 하고 한 사이클에 주요 기능 장치 하나만 써요.",
        "사이클 끝에 값을 저장하려고 내부 레지스터를 더해요: IR, A, B, ALUOut, MDR(Memory Data Register).",
        "기능 장치를 나눠 쓰려고 MUX가 더 필요해요(메모리 앞, ALU 앞).",
        "새 제어 신호: IorD, IRWrite, ALUSrcA, ALUSrcB 등.",
        "Moore 머신: 출력이 현재 상태에만 달려 있어요."
      ],
      "keyterms": [
        { "en": "Multicycle datapath", "ko": "다중 사이클 데이터경로" },
        { "en": "Finite state machine", "ko": "유한 상태 기계" },
        { "en": "Moore machine", "ko": "무어 머신" },
        { "en": "Memory Data Register (MDR)", "ko": "메모리 데이터 레지스터" },
        { "en": "Instruction Register (IR)", "ko": "명령어 레지스터" }
      ],
      "source": "Ch4-1, 71~77쪽"
    },
    {
      "id": "five-steps", "group": "g-multi", "title": "5단계 실행",
      "definition": "명령어는 3~5 사이클이 걸려요.",
      "table": { "head": ["단계", "RTL"], "rows": [
        ["1. 명령어 가져오기", "IR <= Memory[PC]; PC <= PC + 4;"],
        ["2. 해독, 레지스터 읽기", "A <= Reg[IR[25-21]]; B <= Reg[IR[20-16]]; ALUOut <= PC + (sign-extend(IR[15-0]) << 2);"],
        ["3. 실행 / 주소 계산 / 분기 완료", "메모리 참조: ALUOut <= A + sign-extend(IR[15-0]); R형: ALUOut <= A op B; 분기: if (A==B) PC <= ALUOut;"],
        ["4. 메모리 접근 / R형 완료", "MDR <= Memory[ALUOut]; 또는 Memory[ALUOut] <= B; R형: Reg[IR[15-11]] <= ALUOut;"],
        ["5. 쓰기(load 완료)", "Reg[IR[20-16]] <= MDR;"]
      ] },
      "points": [
        "2단계에서는 분기가 아니어도 분기 주소를 미리 계산해요. 해가 없어서 괜찮아요(낙관적 접근).",
        "1·2단계 제어 신호는 명령어 종류와 상관없이 같아요."
      ],
      "keyterms": [
        { "en": "Instruction Fetch", "ko": "명령어 인출" },
        { "en": "Instruction Decode", "ko": "명령어 해독" },
        { "en": "Write-back", "ko": "결과 쓰기" },
        { "en": "Optimistic approach", "ko": "낙관적 접근" }
      ],
      "source": "Ch4-1, 78~93쪽"
    }
  ],
  "terms": [
    { "en": "Combinational element", "ko": "조합 소자", "def": "출력이 현재 입력에만 달려 있어요. 예: ALU.", "def_en": "outputs depends only on the current inputs", "source": "Ch4-1, 4쪽" },
    { "en": "Sequential element", "ko": "순차 소자", "def": "출력이 현재 입력과 현재 상태에 달려 있어요. 예: 메모리, 레지스터.", "def_en": "outputs depends on the current inputs and current state", "source": "Ch4-1, 4쪽" },
    { "en": "D flip-flop", "ko": "D 플립플롭", "def": "클록 에지에서만 출력이 바뀌어요.", "def_en": "Output changes only on the clock edge", "source": "Ch4-1, 8쪽" },
    { "en": "Register file", "ko": "레지스터 파일", "def": "D 플립플롭으로 만든 레지스터 묶음. 읽기와 쓰기를 동시에 할 수 있어요.", "def_en": "", "source": "Ch4-1, 27~30쪽" },
    { "en": "ALUOp", "ko": "ALU 연산 코드", "def": "주 제어가 op 코드로 만드는 2비트 신호. 00=lw/sw, 01=beq, 10=산술.", "def_en": "", "source": "Ch4-1, 48쪽" },
    { "en": "RegDst", "ko": "목적 레지스터 선택", "def": "쓰기 레지스터를 rt(0)로 할지 rd(1)로 할지 골라요.", "def_en": "", "source": "Ch4-1, 53쪽" },
    { "en": "ALUSrc", "ko": "ALU 입력 선택", "def": "ALU 두 번째 입력을 Read data 2(0)로 할지 부호 확장한 즉시값(1)으로 할지 골라요.", "def_en": "", "source": "Ch4-1, 53쪽" },
    { "en": "MemtoReg", "ko": "레지스터 쓰기값 선택", "def": "레지스터에 쓸 값을 ALU 결과(0)로 할지 메모리 데이터(1)로 할지 골라요.", "def_en": "", "source": "Ch4-1, 53쪽" },
    { "en": "PCSrc", "ko": "다음 PC 선택", "def": "PC+4(0)와 분기 목표(1) 중 골라요. PCSrc = Branch AND Zero.", "def_en": "", "source": "Ch4-1, 51·53쪽" },
    { "en": "CPI", "ko": "명령어당 사이클 수", "def": "단일 사이클 구현에서는 1이에요.", "def_en": "", "source": "Ch4-1, 67쪽" },
    { "en": "Multicycle datapath", "ko": "다중 사이클 데이터경로", "def": "명령어 하나를 여러 클록 사이클에 실행하고 기능 장치를 다시 써요.", "def_en": "it takes several clock cycles to execute one instruction", "source": "Ch4-1, 71쪽" },
    { "en": "Moore machine", "ko": "무어 머신", "def": "출력이 현재 상태에만 달린 유한 상태 기계예요.", "def_en": "output based only on current state", "source": "Ch4-1, 73쪽" },
    { "en": "MDR", "ko": "메모리 데이터 레지스터", "def": "다중 사이클에서 메모리에서 읽은 값을 잠깐 담아 둬요.", "def_en": "Memory Data Register", "source": "Ch4-1, 77쪽" },
    { "en": "ALUOut", "ko": "ALU 출력 레지스터", "def": "다중 사이클에서 ALU 결과를 다음 사이클까지 담아 둬요.", "def_en": "", "source": "Ch4-1, 77쪽" }
  ],
  "check": [
    { "title": "확인 필요", "items": [
      "손필기를 아직 반영하지 못했어요. 작업 중 이미지 변환 도구를 실행할 수 없어서 글자 자료로만 만들었어요. 그래서 '(필기)' 표시가 없어요.",
      "단일 사이클 성능 표의 합계(R형 400ps, sw 550ps, beq 350ps, j 200ps)는 슬라이드 수치를 내가 더한 값이에요. 원본에 적힌 건 lw 600ps뿐이에요.",
      "64쪽 '제어 신호 요약' 표와 54쪽 표는 글자가 비어 있어서, 56~63쪽 명령어별 설명으로 표를 채웠어요.",
      "25쪽(왜 IR에 저장 안 하나?)과 26쪽(왜 메모리를 나누나?) 질문의 답은 55쪽 설명을 보고 내가 연결했어요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "11~13쪽 빈 쪽, 33쪽 MIPS ALU 그림 세부",
      "14쪽 연습문제(동기·비동기 순차 회로 차이)는 15쪽 요약으로 대신했어요.",
      "79쪽 질문(제어 신호 값, PC를 지금 업데이트하는 이점)과 92쪽 질문(다른 명령어는?)은 원본에 답이 없어서 뺐어요."
    ] },
    { "title": "사용 안내", "items": [
      "원본 PDF는 computer-arch/materials 폴더에 있어요. (사이트에는 올라가지 않아요)"
    ] }
  ],
  "quiz": [
    { "id": "a4-1-q01", "q": "An element whose output depends only on the current inputs is a ____ element.", "choices": ["combinational", "sequential", "clocked", "state"], "answer": 0, "explain": "조합 소자(예: ALU)는 같은 입력 → 같은 출력이에요.", "source": "Ch4-1, 4쪽" },
    { "id": "a4-1-q02", "q": "Which of the following is a sequential (state) element?", "choices": ["Register", "ALU", "Multiplexer", "Sign extender"], "answer": 0, "explain": "메모리와 레지스터는 상태를 가지는 순차 소자예요.", "source": "Ch4-1, 4쪽" },
    { "id": "a4-1-q03", "q": "In a D flip-flop, when does the output change?", "choices": ["Only on the clock edge", "Whenever D changes", "While the clock is low", "Never"], "answer": 0, "explain": "D 플립플롭은 클록 에지에서만 출력이 바뀌어요.", "source": "Ch4-1, 8쪽" },
    { "id": "a4-1-q04", "q": "Why do we need separate instruction and data memory in a single-cycle implementation?", "choices": ["No resource can be used more than once per instruction", "Data memory is faster", "Instructions are 16 bits", "To save chip area"], "answer": 0, "explain": "한 사이클에 모든 걸 하니까 같은 자원을 두 번 쓸 수 없어요.", "source": "Ch4-1, 55쪽" },
    { "id": "a4-1-q05", "q": "What decoder is used to select the write register in a 32-register file?", "answers": ["5-to-32", "5-to-32 decoder", "5x32", "5 to 32"], "explain": "레지스터 번호 5비트로 32개 중 하나를 골라요.", "source": "Ch4-1, 29쪽" },
    { "id": "a4-1-q06", "q": "What is the 4-bit ALU control input for 'subtract'?", "choices": ["0110", "0010", "0000", "0111"], "answer": 0, "explain": "0000 AND, 0001 OR, 0010 add, 0110 sub, 0111 slt, 1100 NOR.", "source": "Ch4-1, 32쪽" },
    { "id": "a4-1-q07", "q": "What is the ALUOp value for lw and sw?", "answers": ["00"], "explain": "00 = lw/sw(add), 01 = beq(sub), 10 = 산술(funct로 결정).", "source": "Ch4-1, 48쪽" },
    { "id": "a4-1-q08", "q": "For beq, which ALU operation is needed?", "choices": ["subtract", "add", "AND", "set on less than"], "answer": 0, "explain": "두 레지스터를 빼서 Zero가 1이면 같아요.", "source": "Ch4-1, 47쪽" },
    { "id": "a4-1-q09", "q": "PCSrc = Branch AND ____.", "answers": ["Zero", "zero"], "explain": "분기 명령어이면서 ALU 결과가 0일 때 분기 목표로 가요.", "source": "Ch4-1, 51쪽" },
    { "id": "a4-1-q10", "q": "When RegDst is asserted (1), the destination register number comes from which field?", "choices": ["rd (bits 15:11)", "rt (bits 20:16)", "rs (bits 25:21)", "funct (bits 5:0)"], "answer": 0, "explain": "R형은 rd에 쓰니까 RegDst=1, lw는 rt에 쓰니까 0이에요.", "source": "Ch4-1, 53쪽" },
    { "id": "a4-1-q11", "q": "For lw $s0, 100($t0), what are ALUSrc and MemtoReg?", "choices": ["ALUSrc=1, MemtoReg=1", "ALUSrc=0, MemtoReg=0", "ALUSrc=1, MemtoReg=0", "ALUSrc=0, MemtoReg=1"], "answer": 0, "explain": "즉시값 100을 더해야 하니 ALUSrc=1, 메모리 값을 레지스터에 쓰니 MemtoReg=1.", "source": "Ch4-1, 59쪽" },
    { "id": "a4-1-q12", "q": "For sw, which signals are 'don't care'?", "choices": ["RegDst and MemtoReg", "ALUSrc and MemWrite", "RegWrite and MemRead", "PCSrc and ALUOp"], "answer": 0, "explain": "sw는 레지스터에 쓰지 않으니(RegWrite=0) 쓰기 대상·값을 고르는 신호가 X예요.", "source": "Ch4-1, 61쪽" },
    { "id": "a4-1-q13", "q": "Memory 200ps, ALU/adders 100ps, register file 50ps. What is the single-cycle clock cycle time (ps)?", "answers": ["600", "600ps", "600 ps"], "explain": "가장 긴 lw: 200+50+100+200+50 = 600ps. CPI = 1.", "source": "Ch4-1, 66~67쪽" },
    { "id": "a4-1-q14", "q": "In the single-cycle implementation, the cycle time is determined by ____.", "choices": ["the longest path (longest instruction)", "the shortest instruction", "the average instruction", "the number of registers"], "answer": 0, "explain": "모든 명령어가 한 사이클이라 가장 느린 명령어에 맞춰요.", "source": "Ch4-1, 65·67쪽" },
    { "id": "a4-1-q15", "q": "What kind of finite state machine is used for multicycle control?", "choices": ["Moore machine", "Mealy machine", "Turing machine", "Stack machine"], "answer": 0, "explain": "Moore 머신은 출력이 현재 상태에만 달려 있어요.", "source": "Ch4-1, 73쪽" },
    { "id": "a4-1-q16", "q": "Which register is NOT added in the multicycle datapath?", "choices": ["Program Counter", "Instruction Register", "ALUOut", "Memory Data Register"], "answer": 0, "explain": "PC는 원래 있었어요. IR, A, B, ALUOut, MDR이 새로 추가돼요.", "source": "Ch4-1, 77쪽" },
    { "id": "a4-1-q17", "q": "How many cycles do instructions take in the multicycle implementation?", "choices": ["3 to 5", "Exactly 1", "Exactly 5", "1 to 3"], "answer": 0, "explain": "\"INSTRUCTIONS TAKE FROM 3 - 5 CYCLES!\"", "source": "Ch4-1, 78쪽" },
    { "id": "a4-1-q18", "q": "Which RTL describes Step 1 (Instruction Fetch)?", "choices": ["IR <= Memory[PC]; PC <= PC + 4;", "A <= Reg[IR[25-21]];", "MDR <= Memory[ALUOut];", "Reg[IR[20-16]] <= MDR;"], "answer": 0, "explain": "2단계는 A/B 읽기, 4단계는 MDR, 5단계는 load 결과 쓰기예요.", "source": "Ch4-1, 79쪽" },
    { "id": "a4-1-q19", "q": "Computing the branch target in step 2 even if the instruction is not a branch is called the ____ approach.", "answers": ["optimistic", "Optimistic", "낙관적"], "explain": "분기가 아니어도 미리 계산해 둬도 해가 없어요.", "source": "Ch4-1, 83쪽" },
    { "id": "a4-1-q20", "q": "Which step completes a load instruction with Reg[IR[20-16]] <= MDR?", "choices": ["Step 5", "Step 3", "Step 4", "Step 2"], "answer": 0, "explain": "load만 5단계까지 가요.", "source": "Ch4-1, 92쪽" }
  ]
});
