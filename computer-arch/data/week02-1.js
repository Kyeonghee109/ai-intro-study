addSession({
  "week": 2,
  "session": "2-1",
  "kind": "강의",
  "lecturer": "",
  "title": "Instructions (Part 1): ISA 기초와 2진수",
  "intro": "명령어 집합 구조(ISA)의 기초부터 시작해요. 레지스터, 명령어 형식, 피연산자 개수, 주소 지정 방식 6가지, 명령어 집합의 완전성을 배우고, 2진수와 2의 보수, 오버플로우를 복습해요. 3주차 연습문제와 HW2도 함께 정리했어요.",
  "sources": [
    { "index": "01", "title": "Chapter 2 Part 1 (53쪽, 손필기 포함)", "file": "21ch2_part1_up_260930_174648.pdf", "path": "computer-arch/materials/필기/21ch2_part1_up_260930_174648.pdf" },
    { "index": "02", "title": "Week 3 수업 연습문제 (11쪽, 손필기 포함)", "file": "week_3_up_261017_220600.pdf", "path": "computer-arch/materials/필기/week_3_up_261017_220600.pdf" },
    { "index": "03", "title": "HW#2 문제와 내 풀이", "file": "hw2_2026_1774001_260924_223457.pdf", "path": "computer-arch/materials/과제/hw2_2026_1774001_260924_223457.pdf" }
  ],
  "groups": [
    { "id": "g-basic", "title": "기초: 기계 명령어와 레지스터" },
    { "id": "g-isa", "title": "ISA와 명령어 형식" },
    { "id": "g-opnd", "title": "피연산자 개수" },
    { "id": "g-mode", "title": "주소 지정 방식" },
    { "id": "g-comp", "title": "명령어 집합의 완전성" },
    { "id": "g-bin", "title": "2진수와 2의 보수" }
  ],
  "sections": [
    {
      "id": "machine-inst", "group": "g-basic", "title": "기계 명령어와 프로그램",
      "definition": "기계 명령어는 프로세서의 고유 언어예요. 컴퓨터에게 특정 연산을 하라고 알려 주는 비트(0과 1)의 묶음이에요.",
      "points": [
        "기계 명령어는 매크로 명령어라고도 해요.",
        "프로그램: 특정 동작 수행을 위해 기계어 명령어를 순서대로 모아 둔 유한 수열이에요. (필기)"
      ],
      "keyterms": [
        { "en": "Machine Instruction", "ko": "기계 명령어" },
        { "en": "macro instruction", "ko": "매크로 명령어" },
        { "en": "Program", "ko": "프로그램" }
      ],
      "source": "Ch2-1, 5쪽"
    },
    {
      "id": "registers", "group": "g-basic", "title": "레지스터",
      "definition": "레지스터는 CPU 안에 있는 임시 저장소예요. 주 메모리보다 빠르지만 비싸요.",
      "table": { "head": ["종류", "설명"], "rows": [
        ["범용 레지스터", "계산용 (r0, r1, …). 프로그래머가 변경 가능 (필기)"],
        ["특수 목적 레지스터", "PC, AC, IR. 특별한 사용 목적"],
        ["PC (Program Counter)", "다음에 실행할 명령어의 주소를 가짐"],
        ["AC (Accumulator)", "계산 결과를 임시로 가짐. ALU 산출 결과 (필기)"],
        ["IR (Instruction Register)", "메모리에서 가져온(fetch) 명령어를 가짐"]
      ] },
      "points": [
        "레지스터는 FF(플립플롭)으로 만들어요. (필기)",
        "일부 레지스터는 프로그래머가 접근할 수 없어요."
      ],
      "keyterms": [
        { "en": "General Purpose Register", "ko": "범용 레지스터" },
        { "en": "PC (Program Counter)", "ko": "프로그램 카운터" },
        { "en": "AC (Accumulator)", "ko": "누산기" },
        { "en": "IR (Instruction register)", "ko": "명령어 레지스터" }
      ],
      "source": "Ch2-1, 6~7쪽"
    },
    {
      "id": "isa-def", "group": "g-isa", "title": "ISA = 프로그래머가 바라보는 프로세서",
      "definition": "ISA(명령어 집합 구조)는 프로그래머가 바라보는 프로세서의 모습이에요. 하드웨어와 소프트웨어 사이에 존재하는 표준 약속이자 인터페이스예요. (필기)",
      "points": [
        "응용 프로그램 없이 프로세서와 상호작용하는 데 필요한 정보예요. 어떻게 설계·구현됐는지는 포함하지 않아요.",
        "ISA에 포함되는 것: 명령어 집합(어셈블리 명령어), 프로그래머가 쓸 수 있는 레지스터(크기, 쓸 수 있는 명령어), 메모리와 상호작용하는 정보(메모리 정렬), 인터럽트에 대한 반응",
        "예: MIPS는 32비트 레지스터 32개 (필기)"
      ],
      "table": { "head": ["ISA 종류 (필기)", "연산 방식"], "rows": [
        ["Stack-based (ISA 1)", "스택 구조로 데이터를 쌓고 연산"],
        ["Accumulator-based (ISA 2)", "레지스터 하나(AC)로 계속 연산"],
        ["Register-based (ISA 3)", "여러 범용 레지스터에 데이터를 가져와 연산 (MIPS/ARM)"]
      ] },
      "keyterms": [
        { "en": "ISA (Instruction Set Architecture)", "ko": "명령어 집합 구조" },
        { "en": "programmer's view of processors", "ko": "프로그래머가 바라보는 프로세서" },
        { "en": "Memory alignment", "ko": "메모리 정렬" }
      ],
      "source": "Ch2-1, 8~9쪽"
    },
    {
      "id": "lang-levels", "group": "g-isa", "title": "프로그래밍 언어 단계와 컴파일·어셈블",
      "definition": "고급언어는 기계와 무관하고, 어셈블리어는 프로세서마다 다르며, 기계어는 프로세서의 고유 언어예요.",
      "table": { "head": ["언어", "특징"], "rows": [
        ["고급언어 (가장 높음)", "기계 독립적 (C, C++, Java)"],
        ["어셈블리어", "프로세서마다 고유. 한 문장 = 기계 명령어 하나. 레지스터를 직접 다룸"],
        ["기계어 (가장 낮음)", "0과 1로 이루어진 2진 코드. 프로세서의 고유 언어"]
      ] },
      "points": [
        "같은 고급언어 프로그램을 프로세서별 컴파일러로 컴파일하면 여러 프로세서에서 돌릴 수 있어요.",
        "어셈블리어는 프로세서마다 달라서 Pentium 어셈블러, SPARC 어셈블러를 따로 써요.",
        "목적 코드는 링커로 다른 목적 파일과 합쳐 실행 파일이 돼요."
      ],
      "keyterms": [
        { "en": "Machine independent", "ko": "기계 독립적" },
        { "en": "linker", "ko": "링커" },
        { "en": "object code", "ko": "목적 코드" },
        { "en": "Executable file", "ko": "실행 파일" }
      ],
      "source": "Ch2-1, 10~13쪽"
    },
    {
      "id": "inst-format", "group": "g-isa", "title": "명령어 형식: opcode + operands",
      "definition": "명령어는 할 연산을 뜻하는 opcode와 데이터 위치를 뜻하는 operands 두 부분으로 이뤄져요.",
      "formula": { "ko": "opcode가 k비트면 명령어 최대 2^k개, 주소 부분이 m비트면 메모리 위치 2^m개", "en": "If op code is k bits long, there could be up to 2^k instructions. If address part is m bits long, 2^m different memory locations can be accessed." },
      "points": [
        "명령어 길이: 8, 16, 32, 64비트 … 고정 길이(MIPS 32비트)와 가변 길이가 있어요.",
        "Opcode: 어떤 연산을 할 것인가 / Operands: 어떤 데이터·레지스터·주소를 사용할 것인가 (필기)",
        "word: 의미를 담는 최소한의 단위 (32비트) (필기)",
        "opcode와 operand 길이는 컴퓨터 설계자가 정해요."
      ],
      "example": { "title": "필기 예", "points": [ "opcode 3비트 → ADD 000, SUB 001, …, AND 111 → 2^3 = 8개" ] },
      "keyterms": [
        { "en": "Opcode", "ko": "연산 코드" },
        { "en": "Operands", "ko": "피연산자" },
        { "en": "fixed size", "ko": "고정 길이" },
        { "en": "variable size", "ko": "가변 길이" }
      ],
      "source": "Ch2-1, 14~15쪽"
    },
    {
      "id": "num-operands", "group": "g-opnd", "title": "피연산자 개수: 3, 2, 1, 0개",
      "definition": "명령어 하나에 들어가는 피연산자 개수에 따라 3주소, 2주소, 1주소, 0주소 명령어로 나눠요.",
      "table": { "head": ["개수", "예", "의미"], "rows": [
        ["3개", "ADD A, B, C", "A ← B + C (목적지 A, 소스 B·C)"],
        ["2개", "ADD A, B", "A ← A + B (목적지 A, 소스 A·B)"],
        ["1개", "ADD A", "AC ← AC + A (누산기 AC 사용)"],
        ["1개", "LD A", "AC ← A"],
        ["0개", "PUSH / ADD / POP", "스택 사용"]
      ] },
      "points": [
        "2주소에서 목적지가 무조건 맨 앞에 올 필요는 없어요. (필기)",
        "필기: load = 데이터 가져오기, fetch = 인스트럭션 가져오기, store = 프로세서 데이터를 메모리에 저장"
      ],
      "keyterms": [
        { "en": "Destination", "ko": "목적지" },
        { "en": "Sources", "ko": "소스" },
        { "en": "Accumulator", "ko": "누산기" }
      ],
      "source": "Ch2-1, 17~18쪽"
    },
    {
      "id": "addr-field", "group": "g-opnd", "title": "주소 필드 개수와 명령어 길이",
      "definition": "주소 필드가 많을수록 명령어 하나가 길어지지만, 필요한 명령어 수는 줄어요.",
      "formula": { "ko": "opcode 5비트, 주소 필드 12비트일 때: 3주소 5+3×12=41비트, 2주소 5+2×12=29비트, 1주소 5+1×12=17비트", "en": "3 addr. inst. mach. : 5+3x12=41 bits / 2 addr. : 5+2x12=29 bits / 1 addr. : 5+1x12=17 bits" },
      "points": [
        "주소 필드 ↑ → 명령어 수 ↓ → 1개당 비트 수 ↑ (wider bus & less # of instructions) (필기)",
        "주소 필드에 몇 개를 넣을 것인가에 대한 절충점이에요. (필기)"
      ],
      "example": { "title": "Z = (A+B)/C", "table": { "head": ["3주소", "2주소", "1주소", "0주소"], "rows": [
        ["ADD Z, A, B", "MOV Z, A", "LOAD A", "PUSH A"],
        ["DIV Z, Z, C", "ADD Z, B", "ADD B", "PUSH B"],
        ["", "DIV Z, C", "DIV C", "ADD"],
        ["", "", "STORE Z", "PUSH C / DIV / POP Z"]
      ] }, "points": [ "주소가 줄수록 명령어 수가 늘어요. (필기: 대부분의 경우 address ↓ → instruction ↑)", "필기: 왜 목적지가 Z일까? 결과만 바뀌면 OK." ] },
      "keyterms": [
        { "en": "address field", "ko": "주소 필드" },
        { "en": "wider bus", "ko": "더 넓은 버스" }
      ],
      "source": "Ch2-1, 19~21쪽"
    },
    {
      "id": "addr-mode", "group": "g-mode", "title": "주소 지정 방식과 유효 주소",
      "definition": "주소 지정 방식은 피연산자가 메모리나 레지스터의 어디에 있는지 지정하는 여러 방법이에요.",
      "points": [
        "장점1: 메모리 포인터, 반복문 카운터, 데이터 인덱싱 같은 기능으로 프로그래밍의 융통성(제어)이 커져요.",
        "장점2: 명령어의 주소 필드 비트 수를 줄일 수 있어요.",
        "유효 주소(E.A.): 참조하는 피연산자가 실제로 들어 있는 위치의 주소예요. 피연산자가 실제 저장되어 있는 최종 메모리 주소나 레지스터 위치예요. (필기)"
      ],
      "example": { "title": "예", "points": [ "ARM: LDR r1, [r2, #20]", "MIPS: lw $t1, 20($s1) → $s1 값에 20을 더한 주소에서 가져와요. (필기)" ] },
      "keyterms": [
        { "en": "Addressing Modes", "ko": "주소 지정 방식" },
        { "en": "Effective Address (E.A.)", "ko": "유효 주소" },
        { "en": "programming versatility", "ko": "프로그래밍 융통성" }
      ],
      "source": "Ch2-1, 23쪽"
    },
    {
      "id": "six-modes", "group": "g-mode", "title": "주소 지정 방식 6가지",
      "definition": "즉시, 레지스터, 직접, 간접, PC 상대, 베이스 레지스터 방식이 있어요.",
      "table": { "head": ["방식", "E.A.", "예"], "rows": [
        ["1. 즉시", "필요 없음 (N.A.). 피연산자 값 자체가 명령어에", "MIPS addi $s1, $s2, 4 / ARM ADD r3, r3, #4"],
        ["2. 레지스터", "선택된 레지스터", "add $t0, $t1, $s1"],
        ["3. 직접", "명령어의 주소 필드", "MOVE.W 10000, D1 (Motorola 68000)"],
        ["4. 간접", "Memory[주소 필드]", "MOVL @(#5000), R1 (Vax)"],
        ["5. PC 상대", "PC + 명령어의 오프셋", "bne $s0, $s1, Exit"],
        ["6. 베이스 레지스터", "베이스 레지스터 + 오프셋", "lw $t1, 1000($s1)"]
      ] },
      "points": [
        "즉시: 명령어 안에 값이 있어 메모리를 읽어 가지 않아서 처리 속도가 매우 빨라요. (필기)",
        "간접: 메모리를 두 번 참조해서 가장 느려요. ① 주소 찾기 ② 실제 데이터 찾기 (필기)",
        "PC 상대: 분기 명령어에서 써요. PC를 기준으로 앞이나 뒤로 이동해요. (필기)",
        "베이스 레지스터: 메모리에서 프로그램 재배치(relocation)를 쉽게 해요."
      ],
      "keyterms": [
        { "en": "Immediate addressing mode", "ko": "즉시 주소 지정" },
        { "en": "Indirect Addressing mode", "ko": "간접 주소 지정" },
        { "en": "(PC) Relative Addressing mode", "ko": "PC 상대 주소 지정" },
        { "en": "Base Register Addressing mode", "ko": "베이스 레지스터 주소 지정" }
      ],
      "source": "Ch2-1, 24~33쪽"
    },
    {
      "id": "mode-compare", "group": "g-mode", "title": "직접 vs 간접, 직접 vs 레지스터",
      "definition": "간접은 표현 범위가 넓지만 느리고, 레지스터 방식은 빠르지만 공간이 작아요.",
      "table": { "head": ["비교", "장점", "단점"], "rows": [
        ["간접 (vs 직접)", "주소 필드를 워드 길이까지 늘릴 수 있어 더 많은 메모리 표현 가능", "메모리를 두 번 참조해서 느림"],
        ["레지스터 (vs 직접)", "더 빠름 (CPU 안)", "레지스터는 총 32개 정도라 저장 공간이 작음"],
        ["직접 (vs 레지스터)", "메모리 주소 공간이 더 큼 (32비트 → 2^32 = 4GB)", "메모리 접근이라 느림"]
      ] },
      "keyterms": [
        { "en": "Direct addressing", "ko": "직접 주소 지정" },
        { "en": "Register addressing mode", "ko": "레지스터 주소 지정" },
        { "en": "two memory references", "ko": "메모리 두 번 참조" }
      ],
      "source": "Ch2-1, 26~27쪽"
    },
    {
      "id": "pc-relative", "group": "g-mode", "title": "PC 상대 주소 계산 예",
      "definition": "PC 상대 방식에서 E.A. = (PC) + 오프셋×4예요. PC는 이미 다음 명령어 주소로 자동 업데이트돼 있어요.",
      "formula": { "ko": "E.A. = PC + 오프셋 × 4", "en": "E.A. = (PC) + Exit = 104 + 3*4 = 116" },
      "example": { "title": "수업 예", "points": [
        "100: bne $s0, $s1, Exit / 104: add / 108: sub / 112: lw / 116: Exit",
        "어셈블러가 Exit를 3으로 번역 → 실행할 때 PC = 104 → 104 + 3×4 = 116",
        "beq 예: 204번지 beq 실행 시 PC = 208, 오프셋 2 → 208 + 2×4 = 216 (Less 위치)"
      ] },
      "cautions": [ "PC는 현재 명령어가 아니라 다음 명령어 주소예요. (beq가 204면 PC = 208)" ],
      "keyterms": [
        { "en": "Offset", "ko": "오프셋" },
        { "en": "branch", "ko": "분기" }
      ],
      "source": "Ch2-1, 28쪽, 31~32쪽"
    },
    {
      "id": "memory-model", "group": "g-mode", "title": "ARM·MIPS의 메모리 구조",
      "definition": "메모리는 주소를 인덱스로 쓰는 큰 1차원 배열이에요. 주소는 바이트 단위예요(byte addressable).",
      "points": [
        "메모리는 보통 워드(4바이트) 단위로 접근해요. 4바이트 정수 배열이면 A[1]은 A+1×4 바이트 주소예요.",
        "MIPS는 32비트 주소 → 2^32 바이트 = 2^30 워드",
        "주소 범위: 0x0000 0000 ~ 0xffff ffff"
      ],
      "keyterms": [
        { "en": "byte addressable", "ko": "바이트 주소 지정" },
        { "en": "words", "ko": "워드" }
      ],
      "source": "Ch2-1, 29~30쪽"
    },
    {
      "id": "completeness", "group": "g-comp", "title": "명령어 집합의 완전성과 직교성",
      "definition": "완전성은 계산 가능한 어떤 함수든 기계어 프로그램으로 만들 수 있도록 명령어를 갖추는 거예요.",
      "table": { "head": ["갖춰야 할 종류", "필기 예"], "rows": [
        ["산술/논리 (데이터 연산)", "ADD, SUB, AND, OR"],
        ["데이터 전송 (I/O 포함)", "LW, SW"],
        ["제어 전송", "조건 BEQ·BNE, 비조건 Jump, 서브루틴 호출 JAL·JR, 인터럽트, Halt"]
      ] },
      "points": [
        "직교성: 명령어끼리 겹치지 않고 같은 기능을 하지 않으면 직교예요.",
        "필기 Q1: 원하는 작업에 필요한 명령어를 다 갖췄나? → 완전성",
        "필기 Q2: 중복되거나 서로 같은 기능을 하는 쓸데없는 명령어가 있나? → 직교성"
      ],
      "keyterms": [
        { "en": "Completeness", "ko": "완전성" },
        { "en": "Instruction Orthogonality", "ko": "명령어 직교성" }
      ],
      "source": "Ch2-1, 35쪽, 40쪽 필기"
    },
    {
      "id": "inst-types", "group": "g-comp", "title": "명령어 종류 3가지",
      "definition": "명령어는 산술/논리, 데이터 전송, 제어 전송으로 나눠요.",
      "table": { "head": ["종류", "하는 일", "예"], "rows": [
        ["산술/논리", "데이터 값을 바꿈", "정수 연산(ADD, SUB, MULT, DIV, 증감), 논리(AND, OR, 보수), 시프트(논리·산술·회전), 부동소수점"],
        ["데이터 전송", "데이터를 다른 곳으로 복사", "Load(메모리→레지스터), Store(레지스터→메모리), 레지스터 간 이동, I/O·블록 전송"],
        ["제어 전송", "점프나 분기", "조건 분기, 무조건 분기, 서브루틴 호출·복귀, 소프트웨어 인터럽트, Halt"]
      ] },
      "points": [
        "필기: LW(Load Word) 메모리 → 레지스터, SW(Store Word) 레지스터 → 메모리",
        "블록 전송: 단일 데이터가 아니라 연속된 대용량 데이터를 블록 한 번에 이동해요. (필기)",
        "필기: 제어 전송은 if-else, while, function 호출에 쓰여요."
      ],
      "keyterms": [
        { "en": "Arithmetic/Logic Instructions", "ko": "산술/논리 명령어" },
        { "en": "Data Transfer Instructions", "ko": "데이터 전송 명령어" },
        { "en": "Control Transfer Instructions", "ko": "제어 전송 명령어" },
        { "en": "conditional branch", "ko": "조건 분기" }
      ],
      "source": "Ch2-1, 36~40쪽"
    },
    {
      "id": "mmio", "group": "g-comp", "title": "메모리 맵 I/O",
      "definition": "메모리 맵 I/O는 주소 공간의 일부를 I/O 장치에 할당하고, 그 주소에 읽고 쓰는 것을 I/O 장치 명령으로 해석하는 방식이에요.",
      "points": [
        "I/O 장치를 지정하는 두 방법: 메모리 맵 I/O와 특수 I/O 명령어",
        "필기: instruction을 늘리지 않고, 메모리의 주소를 I/O 장치에 할당해 기존 장치를 활용해요."
      ],
      "keyterms": [
        { "en": "memory-mapped I/O", "ko": "메모리 맵 I/O" },
        { "en": "special I/O instructions", "ko": "특수 I/O 명령어" }
      ],
      "source": "Ch2-1, 39쪽"
    },
    {
      "id": "unsigned", "group": "g-bin", "title": "부호 없는 2진 정수",
      "definition": "비트 자체에는 의미가 없고, 약속(convention)이 비트와 숫자의 관계를 정해요. n비트 부호 없는 정수는 0 ~ 2^n − 1이에요.",
      "formula": { "ko": "x = x(n−1)·2^(n−1) + … + x1·2^1 + x0·2^0, 범위 0 ~ 2^n − 1", "en": "Range: 0 to +2^n – 1. Using 32 bits: 0 to +4,294,967,295" },
      "example": { "title": "예", "points": [ "0000 … 1011(2) = 8 + 0 + 2 + 1 = 11" ] },
      "keyterms": [
        { "en": "Unsigned Binary Integers", "ko": "부호 없는 2진 정수" },
        { "en": "overflow", "ko": "오버플로우" }
      ],
      "source": "Ch2-1, 44~45쪽"
    },
    {
      "id": "neg-rep", "group": "g-bin", "title": "음수 표현: 부호 크기, 1의 보수, 2의 보수",
      "definition": "음수를 나타내는 방법은 부호 크기, 1의 보수, 2의 보수 세 가지예요. 2의 보수가 가장 좋아요(best). (필기)",
      "table": { "head": ["비트", "부호 크기", "1의 보수", "2의 보수"], "rows": [
        ["000", "+0", "+0", "+0"],
        ["011", "+3", "+3", "+3"],
        ["100", "−0", "−3", "−4"],
        ["101", "−1", "−2", "−3"],
        ["110", "−2", "−1", "−2"],
        ["111", "−3", "−0", "−1"]
      ] },
      "points": [
        "고려할 점: 0의 개수, 표현 범위, 계산의 쉬움 (end-around-carry, 오버플로우 감지)",
        "부호 크기와 1의 보수는 0이 두 개(+0, −0)라 메모리 낭비와 계산 복잡이 생겨요. (필기)"
      ],
      "keyterms": [
        { "en": "Sign Magnitude", "ko": "부호 크기" },
        { "en": "One's Complement", "ko": "1의 보수" },
        { "en": "Two's Complement", "ko": "2의 보수" }
      ],
      "source": "Ch2-1, 46쪽"
    },
    {
      "id": "twos", "group": "g-bin", "title": "2의 보수 정수와 부호 바꾸기",
      "definition": "n비트 2의 보수의 범위는 −2^(n−1) ~ +2^(n−1) − 1이에요. 맨 앞 비트(bit 31)가 부호 비트예요.",
      "formula": { "ko": "부호 바꾸기: 비트를 전부 반전시키고 1을 더하기 (x̄ + 1 = −x)", "en": "Complement and add 1" },
      "table": { "head": ["수", "32비트 2의 보수"], "rows": [
        ["0", "0000 0000 … 0000 (모든 비트 0)"],
        ["−1", "1111 1111 … 1111 (모든 비트 1)"],
        ["가장 작은 음수", "1000 0000 … 0000 (−2,147,483,648)"],
        ["가장 큰 양수", "0111 1111 … 1111 (+2,147,483,647)"]
      ] },
      "points": [
        "부호 비트: 1이면 음수, 0이면 양수예요.",
        "−(−2^(n−1))은 표현할 수 없어요.",
        "음이 아닌 수는 부호 없는 표현과 2의 보수 표현이 같아요."
      ],
      "example": { "title": "+2의 부호 바꾸기", "points": [ "+2 = 0000 … 0010 → 반전 1111 … 1101 → +1 → 1111 … 1110 = −2" ] },
      "keyterms": [
        { "en": "sign bit", "ko": "부호 비트" },
        { "en": "Signed Negation", "ko": "부호 반전" },
        { "en": "Complement", "ko": "보수" }
      ],
      "source": "Ch2-1, 47~50쪽"
    },
    {
      "id": "overflow", "group": "g-bin", "title": "오버플로우의 영향",
      "definition": "오버플로우가 생기면 예외(인터럽트)가 일어나서, 정해진 예외 처리 주소로 점프하고 중단된 주소는 재개를 위해 저장돼요.",
      "points": [
        "오버플로우를 늘 감지하고 싶지는 않아요 → addu, addiu, subu(부호 없음) 명령어",
        "addiu도 부호 확장은 해요. 상수값 자체는 32비트로 확장해 연산하지만 오버플로우 예외는 발생시키지 않아요. (필기)",
        "부호 없는 비교: sltu, sltiu"
      ],
      "example": { "title": "수업 연습문제 (4비트 2의 보수)", "table": { "head": ["계산", "결과", "오버플로우"], "rows": [
        ["0101 + 1010 (5 + −6)", "1111 (−1)", "없음"],
        ["0101 − 1010 (5 − −6)", "11 (1011)", "있음 (최대 양수 +7)"],
        ["1000 + 1111 (−8 + −1)", "−9 (0111)", "있음 (최소 음수 −8)"],
        ["1000 − 1111 (−8 − −1)", "−7 (1001)", "없음"]
      ] }, "points": [ "−11 표현(8비트): 부호 크기 1000 1011 / 1의 보수 1111 0100 / 2의 보수 1111 0101" ] },
      "keyterms": [
        { "en": "exception (interrupt)", "ko": "예외(인터럽트)" },
        { "en": "addu (add unsigned)", "ko": "부호 없는 덧셈" },
        { "en": "sign-extends", "ko": "부호 확장" }
      ],
      "source": "Ch2-1, 51~52쪽"
    },
    {
      "id": "w3-ea", "group": "g-mode", "title": "연습: 주소 지정 방식별 EA와 R1 값",
      "definition": "같은 MOV R1, 주소 명령어도 주소 지정 방식에 따라 EA와 R1에 들어가는 값이 달라져요.",
      "example": { "title": "Week 3 Exercise 2 (주소 = 500, PC = 202)", "table": { "head": ["방식", "EA", "새 R1"], "rows": [
        ["즉시", "201 (또는 N.A.)", "500"],
        ["직접", "500", "M[500] = 800"],
        ["간접", "M[500] = 800", "M[M[500]] = 300"],
        ["PC 상대", "PC + 500 = 702", "M[PC+500] = 325"]
      ] }, "points": [
        "HW2 (MOV R1, 400, PC = 300): 즉시 N.A. → 400 / 직접 400 → 500 / 간접 M[400] = 500 → 700 / PC 상대 700 → 900 (내 풀이)",
        "Exercise 3: ADD R1, R2 (R1=150, R2=800) → R1 = R1 + R2 = 950, R2 = 800"
      ] },
      "keyterms": [
        { "en": "Effective Address (E.A.)", "ko": "유효 주소" }
      ],
      "source": "Week 3, 4~5쪽 / HW2"
    },
    {
      "id": "w3-bits", "group": "g-isa", "title": "연습: 명령어 필드 비트 수 계산",
      "definition": "메모리 크기로 주소 비트를, 레지스터 개수로 레지스터 비트를 구하고, 남는 비트가 opcode예요.",
      "example": { "title": "Week 3 Exercise 4", "points": [
        "256K 워드 × 32비트, 간접 비트 + opcode + 레지스터(64개) + 주소",
        "간접 비트 1, 레지스터 64 = 2^6 → 6비트, 주소 256K = 2^18 → 18비트 (바이트 주소면 20비트)",
        "opcode = 32 − 1 − 6 − 18 = 7비트 → 최대 2^7 = 128개 연산"
      ] },
      "table": { "head": ["HW2 3번", "답 (내 풀이)"], "rows": [
        ["조건", "2^20 워드, 16비트 워드, 32비트 명령어, 모드 2비트, 범용 레지스터 8개"],
        ["(a) Rd", "8 = 2^3 → 3비트"],
        ["(b) 주소 필드", "2^20 → 20비트"],
        ["(c) opcode", "32 − 20 − 3 − 2 = 7비트 → 128개"]
      ] },
      "keyterms": [
        { "en": "word-addressable", "ko": "워드 주소 지정" },
        { "en": "indirect bit", "ko": "간접 비트" }
      ],
      "source": "Week 3, 6~7쪽 / HW2"
    },
    {
      "id": "endian", "group": "g-mode", "title": "빅 엔디언과 리틀 엔디언",
      "definition": "여러 바이트 데이터를 메모리에 둘 때, 빅 엔디언은 큰 쪽 바이트를 낮은 주소에, 리틀 엔디언은 작은 쪽 바이트를 낮은 주소에 둬요.",
      "table": { "head": ["데이터 0x01020304", "0x100", "0x101", "0x102", "0x103"], "rows": [
        ["리틀 엔디언", "0x04", "0x03", "0x02", "0x01"],
        ["빅 엔디언", "0x01", "0x02", "0x03", "0x04"]
      ] },
      "example": { "title": "Week 3 Exercise 5", "points": [ "바이트 주소 지정, 32비트 워드, 빅 엔디언 컴퓨터에서 1000번지부터 'Handong'을 입력할 때 1000번지와 1004번지 워드의 내용을 보여라." ] },
      "keyterms": [
        { "en": "big-endian", "ko": "빅 엔디언" },
        { "en": "Little Endian", "ko": "리틀 엔디언" }
      ],
      "source": "Week 3, 9~10쪽"
    }
  ],
  "terms": [
    { "en": "Machine Instruction", "ko": "기계 명령어", "def": "프로세서의 고유 언어. 특정 연산을 하라고 알려 주는 비트 묶음이에요.", "def_en": "Machine Instruction is a native language of processor.", "source": "Ch2-1, 5쪽" },
    { "en": "Program", "ko": "프로그램", "def": "특정 작업을 수행하는 명령어의 유한한 나열이에요.", "def_en": "A finite sequence of instructions that performs a specific task", "source": "Ch2-1, 5쪽" },
    { "en": "PC (Program Counter)", "ko": "프로그램 카운터", "def": "다음 명령어의 주소를 가진 특수 레지스터예요.", "def_en": "Special register to hold address of next instruction", "source": "Ch2-1, 7쪽" },
    { "en": "AC (Accumulator)", "ko": "누산기", "def": "계산 결과를 임시로 가진 특수 레지스터예요.", "def_en": "Special register which holds the result of the computation temporarily.", "source": "Ch2-1, 7쪽" },
    { "en": "IR (Instruction register)", "ko": "명령어 레지스터", "def": "메모리에서 가져온 명령어를 가진 특수 레지스터예요.", "def_en": "Special register which holds the instruction fetched from the memory.", "source": "Ch2-1, 7쪽" },
    { "en": "ISA (Instruction Set Architecture)", "ko": "명령어 집합 구조", "def": "프로그래머가 바라보는 프로세서. 하드웨어와 소프트웨어 사이의 약속이에요.", "def_en": "ISA (Instruction Set Architecture) is essentially a programmer's view of processors", "source": "Ch2-1, 8쪽" },
    { "en": "Opcode", "ko": "연산 코드", "def": "수행할 연산이에요.", "def_en": "operation to be performed", "source": "Ch2-1, 14쪽" },
    { "en": "Operands", "ko": "피연산자", "def": "데이터가 어디에 있는지 나타내요.", "def_en": "indicate where data are", "source": "Ch2-1, 14쪽" },
    { "en": "Addressing Modes", "ko": "주소 지정 방식", "def": "피연산자가 메모리나 레지스터의 어디에 있는지 지정하는 방법이에요.", "def_en": "Different ways to specify the place where an operand resides in memory or register.", "source": "Ch2-1, 23쪽" },
    { "en": "Effective Address (E.A.)", "ko": "유효 주소", "def": "참조하는 피연산자가 실제로 있는 위치의 주소예요.", "def_en": "Actual address of the location containing the referenced operand.", "source": "Ch2-1, 23쪽" },
    { "en": "Immediate addressing mode", "ko": "즉시 주소 지정", "def": "피연산자 필드에 실제 피연산자 값이 들어 있어요.", "def_en": "Operand field contains the actual operand value", "source": "Ch2-1, 24쪽" },
    { "en": "Register addressing mode", "ko": "레지스터 주소 지정", "def": "선택된 레지스터에 피연산자가 있어요.", "def_en": "Selected Register contains the operand", "source": "Ch2-1, 24쪽" },
    { "en": "Direct Addressing mode", "ko": "직접 주소 지정", "def": "유효 주소 = 명령어의 주소 부분, 피연산자는 메모리에 있어요.", "def_en": "Effective address is equal to the address part of the instruction and operands reside in memory", "source": "Ch2-1, 25쪽" },
    { "en": "Indirect Addressing mode", "ko": "간접 주소 지정", "def": "주소 필드가 유효 주소가 저장된 곳의 주소를 줘요. 메모리 두 번 참조로 가장 느려요.", "def_en": "The Address field gives the address where the effective address is stored.", "source": "Ch2-1, 25쪽" },
    { "en": "(PC) Relative Addressing mode", "ko": "PC 상대 주소 지정", "def": "PC 값에 명령어의 주소 부분을 더해 유효 주소를 구해요. 분기 명령어용이에요.", "def_en": "Value in PC is added to the address part of instruction to obtain the effective address (branch type instructions)", "source": "Ch2-1, 28쪽" },
    { "en": "Base Register Addressing mode", "ko": "베이스 레지스터 주소 지정", "def": "베이스 레지스터 값에 오프셋을 더해 유효 주소를 구해요. 프로그램 재배치에 좋아요.", "def_en": "Value in Base Register (base address) is added to the address part of instruction (offset) to obtain the effective address", "source": "Ch2-1, 33쪽" },
    { "en": "byte addressable", "ko": "바이트 주소 지정", "def": "메모리 주소가 바이트를 가리켜요.", "def_en": "Memory Address indicates bytes.", "source": "Ch2-1, 29쪽" },
    { "en": "Completeness", "ko": "완전성", "def": "계산 가능한 어떤 함수든 기계어 프로그램으로 만들 수 있도록 명령어를 갖추는 것이에요.", "def_en": "A computer should have a set of instructions so that the user can construct machine language programs to evaluate any function that is known to be computable", "source": "Ch2-1, 35쪽" },
    { "en": "Instruction Orthogonality", "ko": "명령어 직교성", "def": "명령어가 서로 겹치지 않고 같은 기능을 하지 않는 것이에요.", "def_en": "Instructions are orthogonal if they do not overlap, or perform same function", "source": "Ch2-1, 35쪽" },
    { "en": "memory-mapped I/O", "ko": "메모리 맵 I/O", "def": "주소 공간 일부를 I/O 장치에 할당하고, 그 주소 읽기/쓰기를 I/O 명령으로 해석해요.", "def_en": "In memory-mapped I/O, portions of the address space are assigned to I/O devices.", "source": "Ch2-1, 39쪽" },
    { "en": "Two's Complement", "ko": "2의 보수", "def": "음수 표현 중 가장 좋은 방식. 0이 하나이고 계산이 쉬워요.", "def_en": "", "source": "Ch2-1, 46쪽" },
    { "en": "Signed Negation", "ko": "부호 반전", "def": "비트를 모두 반전하고 1을 더해요.", "def_en": "Complement and add 1", "source": "Ch2-1, 50쪽" },
    { "en": "big-endian", "ko": "빅 엔디언", "def": "큰 쪽 바이트를 낮은 주소에 저장해요.", "def_en": "", "source": "Week 3, 9~10쪽" },
    { "en": "Little Endian", "ko": "리틀 엔디언", "def": "작은 쪽 바이트를 낮은 주소에 저장해요.", "def_en": "", "source": "Week 3, 10쪽" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "HW2 표의 답은 내 풀이예요. 정답이 공개되면 비교해 보세요. 특히 PC 상대(EA 700, R1 900)는 필기에서 고친 흔적이 있어요.",
      "Week 3 Exercise 5(Handong 빅 엔디언) 답은 자료에 없어요. ASCII로 계산하면 1000번지 = 0x48616E64('H','a','n','d'), 1004번지 = 0x6F6E67 + 남은 1바이트('o','n','g')예요. 수업 답과 비교해 보세요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "HW1(얼굴인식 위험 시나리오 손글씨 과제): 시험 내용이 아니라서 넣지 않았어요.",
      "목차 쪽(2, 4, 16, 22, 34, 42쪽)과 53쪽(빈 쪽)",
      "48쪽 32비트 2의 보수 전체 나열 표는 요약 표로 줄였어요."
    ] },
    { "title": "사용 안내", "items": [
      "퀴즈 문제는 영어, 해설은 한국어예요."
    ] }
  ],
  "quiz": [
    { "id": "a2-1-q01", "q": "Native language of processor.", "answers": ["Machine Instruction", "machine instruction", "Machine language", "기계어", "기계 명령어"], "explain": "Week 3 Exercise 1 (c). 기계 명령어 = 프로세서의 고유 언어예요.", "source": "Ch2-1, 5쪽 / Week 3" },
    { "id": "a2-1-q02", "q": "Special register to hold address of next instruction.", "answers": ["Program Counter", "PC", "program counter", "프로그램 카운터"], "explain": "Week 3 Exercise 1 (d).", "source": "Ch2-1, 7쪽 / Week 3" },
    { "id": "a2-1-q03", "q": "Special register which holds the result of the computation temporarily.", "answers": ["Accumulator", "AC", "accumulator", "누산기"], "explain": "Week 3 Exercise 1 (e).", "source": "Ch2-1, 7쪽 / Week 3" },
    { "id": "a2-1-q04", "q": "Which special register holds the instruction fetched from the memory?", "choices": ["IR", "PC", "AC", "MAR"], "answer": 0, "explain": "IR = Instruction Register예요.", "source": "Ch2-1, 7쪽" },
    { "id": "a2-1-q05", "q": "ISA is essentially a ____ of processors.", "choices": ["programmer's view", "hardware designer's view", "user's view of applications", "transistor-level design"], "answer": 0, "explain": "설계·구현 방법은 포함하지 않아요.", "source": "Ch2-1, 8쪽" },
    { "id": "a2-1-q06", "q": "Which level of programming language is machine independent?", "choices": ["High Level Languages", "Assembly Languages", "Machine Languages", "Microcode"], "answer": 0, "explain": "어셈블리어는 프로세서마다 달라요.", "source": "Ch2-1, 10쪽" },
    { "id": "a2-1-q07", "q": "If op code is k bits long, there could be up to ____ instructions.", "choices": ["2^k", "k", "2k", "k^2"], "answer": 0, "explain": "opcode 3비트면 2^3 = 8개예요.", "source": "Ch2-1, 15쪽" },
    { "id": "a2-1-q08", "q": "Op code is 5 bits and each address field is 12 bits. How many bits is a 2-address instruction?", "choices": ["29 bits", "41 bits", "17 bits", "24 bits"], "answer": 0, "explain": "5 + 2×12 = 29예요. 3주소는 41, 1주소는 17이에요.", "source": "Ch2-1, 19쪽" },
    { "id": "a2-1-q09", "q": "For one-operand instruction 'ADD A', what is the destination?", "choices": ["AC", "A", "Memory", "PC"], "answer": 0, "explain": "AC ← AC + A예요.", "source": "Ch2-1, 18쪽" },
    { "id": "a2-1-q10", "q": "Which addressing mode does NOT need an effective address because the operand field contains the actual operand value?", "choices": ["Immediate", "Direct", "Indirect", "Base register"], "answer": 0, "explain": "즉시 방식은 E.A.가 필요 없어요(N.A.).", "source": "Ch2-1, 24쪽" },
    { "id": "a2-1-q11", "q": "Which addressing mode needs two memory references and is the slowest?", "choices": ["Indirect", "Direct", "Register", "Immediate"], "answer": 0, "explain": "E.A. = Memory[주소 필드]라 메모리를 두 번 읽어요.", "source": "Ch2-1, 25쪽" },
    { "id": "a2-1-q12", "q": "'lw $t1, 1000($s1)' uses which addressing mode? (E.A. = (s1) + 1000)", "choices": ["Base register addressing", "PC-relative addressing", "Immediate addressing", "Indirect addressing"], "answer": 0, "explain": "베이스 레지스터 + 오프셋이에요.", "source": "Ch2-1, 33쪽" },
    { "id": "a2-1-q13", "q": "At address 100: bne $s0, $s1, Exit. The assembler translates 'Exit' as 3. What is the E.A. when executed?", "choices": ["116", "112", "103", "115"], "answer": 0, "explain": "PC = 104(다음 명령어), 104 + 3×4 = 116이에요.", "source": "Ch2-1, 28쪽" },
    { "id": "a2-1-q14", "q": "beq at address 204 is executed with offset 2. What is the address of the next instruction if the branch is taken?", "answers": ["216"], "explain": "PC = 208, 208 + 2×4 = 216이에요.", "source": "Ch2-1, 32쪽" },
    { "id": "a2-1-q15", "q": "Which is a strength of indirect addressing compared to direct addressing?", "choices": ["Address field can be extended to word length", "It needs only one memory reference", "It is the fastest mode", "It does not use memory"], "answer": 0, "explain": "단점은 메모리를 두 번 참조해서 느리다는 거예요.", "source": "Ch2-1, 26쪽" },
    { "id": "a2-1-q16", "q": "MIPS has 32 bits address. How many words can be addressed?", "choices": ["2^30 words", "2^32 words", "2^16 words", "2^34 words"], "answer": 0, "explain": "2^32 바이트 = 2^30 워드 (1 워드 = 4 바이트).", "source": "Ch2-1, 30쪽" },
    { "id": "a2-1-q17", "q": "Instructions are ____ if they do not overlap, or perform same function.", "answers": ["orthogonal", "Orthogonal", "직교", "직교성"], "explain": "Instruction Orthogonality예요.", "source": "Ch2-1, 35쪽" },
    { "id": "a2-1-q18", "q": "Which is NOT one of the categories of instructions that should be covered for completeness?", "choices": ["Memory alignment", "Arithmetic/Logical", "Data Transfer", "Control Transfer"], "answer": 0, "explain": "완전성을 위한 세 종류: 산술/논리, 데이터 전송, 제어 전송.", "source": "Ch2-1, 35쪽" },
    { "id": "a2-1-q19", "q": "In which method are portions of the address space assigned to I/O devices?", "choices": ["Memory-mapped I/O", "Special I/O instructions", "Block transfer", "Interrupt"], "answer": 0, "explain": "그 주소를 읽고 쓰면 I/O 명령으로 해석돼요.", "source": "Ch2-1, 39쪽" },
    { "id": "a2-1-q20", "q": "Range of n-bit 2's complement signed integers?", "choices": ["–2^(n–1) to +2^(n–1) – 1", "0 to +2^n – 1", "–2^n to +2^n", "–(2^(n–1) – 1) to +2^(n–1) – 1"], "answer": 0, "explain": "32비트: −2,147,483,648 ~ +2,147,483,647.", "source": "Ch2-1, 47쪽" },
    { "id": "a2-1-q21", "q": "In 3-bit one's complement, what does 111 represent?", "choices": ["–0", "–1", "–3", "+7"], "answer": 0, "explain": "1의 보수 111 = −0, 2의 보수 111 = −1, 부호 크기 111 = −3.", "source": "Ch2-1, 46쪽" },
    { "id": "a2-1-q22", "q": "Represent –11 in 8-bit two's complement.", "answers": ["11110101", "1111 0101"], "explain": "11 = 0000 1011 → 반전 1111 0100 → +1 → 1111 0101.", "source": "Ch2-1, 52쪽 필기" },
    { "id": "a2-1-q23", "q": "4-bit 2's complement: 0101 – 1010. Does overflow occur?", "choices": ["Yes", "No"], "answer": 0, "explain": "5 − (−6) = 11인데 4비트 최대 양수는 +7이라 오버플로우예요.", "source": "Ch2-1, 52쪽 필기" },
    { "id": "a2-1-q24", "q": "Which MIPS instruction does NOT cause an overflow exception?", "choices": ["addu", "add", "addi", "sub"], "answer": 0, "explain": "addu, addiu, subu는 오버플로우를 감지하지 않아요. addiu도 부호 확장은 해요.", "source": "Ch2-1, 51쪽" },
    { "id": "a2-1-q25", "q": "256K words of 32 bits, instruction = indirect bit + opcode + register (64 registers) + address. How many bits for the opcode? (word-addressable)", "answers": ["7", "7 bits", "7bits"], "explain": "32 − 1 − 6 − 18 = 7비트 → 최대 128개 연산.", "source": "Week 3 Exercise 4" },
    { "id": "a2-1-q26", "q": "MOV R1, address=500. M[500]=800, M[800]=300. What is the new R1 in indirect addressing mode?", "answers": ["300"], "explain": "EA = M[500] = 800, R1 = M[800] = 300.", "source": "Week 3 Exercise 2" },
    { "id": "a2-1-q27", "q": "Data 0x01020304 is stored at 0x100 in big-endian. What byte is at 0x100?", "choices": ["0x01", "0x04", "0x02", "0x03"], "answer": 0, "explain": "빅 엔디언은 큰 쪽(0x01)을 낮은 주소에 둬요.", "source": "Week 3, 10쪽" }
  ]
});
