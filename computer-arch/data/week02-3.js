addSession({
  "week": 2,
  "session": "2-3",
  "kind": "강의",
  "lecturer": "",
  "title": "Instructions (Part 2-2): 명령어 형식과 프로시저 호출",
  "intro": "MIPS 명령어 형식 3가지(R/I/J)와 기계어 변환, 저장 프로그램 개념, 32비트 상수 로드(LUI), 의사 명령어, MIPS 주소 지정 방식, 그리고 프로시저 호출과 스택을 배워요. 7주차 연습문제(프로시저·스택)도 함께 정리했어요.",
  "sources": [
    { "index": "01", "title": "Chapter 2 Part 2 (46~80쪽, 손필기 포함)", "file": "22ch2_part2_up_261015_003947.pdf", "path": "computer-arch/materials/필기/22ch2_part2_up_261015_003947.pdf" },
    { "index": "02", "title": "Week 5·7 수업 연습문제 (손필기 포함)", "file": "week_5, week_7", "path": "computer-arch/materials/필기/" }
  ],
  "groups": [
    { "id": "g-fmt", "title": "명령어 형식과 기계어" },
    { "id": "g-spc", "title": "저장 프로그램과 상수" },
    { "id": "g-proc", "title": "프로시저 호출" },
    { "id": "g-stack", "title": "스택과 메모리 배치" }
  ],
  "sections": [
    {
      "id": "fmt3", "group": "g-fmt", "title": "MIPS 명령어 형식 3가지",
      "definition": "모든 MIPS 명령어는 32비트이고, 형식은 R, I, J 세 가지예요.",
      "table": { "head": ["형식", "필드 (비트)", "쓰임"], "rows": [
        ["R", "op 6 | rs 5 | rt 5 | rd 5 | shamt 5 | funct 6", "산술 명령어 (op = 0, funct로 구분)"],
        ["I", "op 6 | rs 5 | rt 5 | constant or address 16", "전송, 분기, 즉시값 (addi, lw, sw, beq, bne)"],
        ["J", "op 6 | jump address 26 (워드 주소)", "점프 (J, JAL)"]
      ] },
      "points": [
        "R형식: rs 첫 번째 소스, rt 두 번째 소스, rd 목적지, shamt 시프트 양, funct 함수 코드",
        "J형식 새 PC = 현재 PC[31:28] 4비트 + (점프 주소 << 2) 28비트 (뒤에 00을 붙여요)"
      ],
      "keyterms": [ { "en": "R-type", "ko": "R형식" }, { "en": "I-type", "ko": "I형식" }, { "en": "J-type", "ko": "J형식" }, { "en": "funct", "ko": "함수 코드" } ],
      "source": "Ch2-2, 48~55쪽"
    },
    {
      "id": "encode", "group": "g-fmt", "title": "어셈블리 → 기계어 → 16진수",
      "definition": "필드 값을 2진수로 바꿔 이어 붙이고, 4비트씩 끊어 16진수로 읽어요.",
      "example": { "title": "ADD $t0, $s1, $s2", "points": [
        "10진: 0 | 17 | 18 | 8 | 0 | 32",
        "2진: 000000 10001 10010 01000 00000 100000",
        "16진: 0x02324020"
      ] },
      "table": { "head": ["명령어", "필드"], "rows": [
        ["LW $s0, 32($s1)", "op=35, rs=17, rt=16, constant=32"],
        ["SW $s0, 12($s1)", "op=43, rs=17, rt=16, constant=12"],
        ["ADDI $s0, $s1, 4", "op=8, rs=17, rt=16, constant=4"],
        ["BEQ / BNE", "op=4 / op=5"],
        ["J / JAL", "op=2 / op=3"]
      ] },
      "keyterms": [ { "en": "Hexadecimal", "ko": "16진수" }, { "en": "Machine Language", "ko": "기계어" } ],
      "source": "Ch2-2, 51~53쪽"
    },
    {
      "id": "encode-ex", "group": "g-fmt", "title": "연습: 루프의 기계어",
      "definition": "Loop 코드를 기계어 필드로 바꾼 필기 풀이예요. ($s3=19, $s4=20, $s5=21, $s6=22, $t0=8, $t1=9)",
      "table": { "head": ["명령어", "필드 (필기)"], "rows": [
        ["add $t1,$s3,$s3", "0 19 19 9 0 32"],
        ["add $t1,$t1,$t1", "0 9 9 9 0 32"],
        ["add $t1,$t1,$s6", "0 9 22 9 0 32"],
        ["lw $t0,0($t1)", "35 9 8 0"],
        ["bne $t0,$s5,Exit", "5 8 21 2"],
        ["add $s3,$s3,$s4", "0 19 20 19 0 32"],
        ["j Loop", "2 (Loop 주소)"]
      ] },
      "cautions": [ "bne 오프셋은 다음 명령어부터 센 워드 수예요 (필기: 8 → 2)." ],
      "keyterms": [ { "en": "offset", "ko": "오프셋" } ],
      "source": "Ch2-2, 57쪽 필기"
    },
    {
      "id": "stored-program", "group": "g-spc", "title": "저장 프로그램 개념",
      "definition": "명령어도 숫자로 표현되고(데이터와 구별되지 않음), 프로그램은 데이터처럼 메모리에 저장돼 읽고 쓸 수 있어요.",
      "points": [
        "Fetch & Execute: 명령어를 가져와(fetch) 특수 레지스터(IR)에 넣고, 그 비트가 다음 동작을 제어하고, 다음 명령어를 가져와요.",
        "제어 전송 명령어는 다음에 실행할 명령어를 바꿔 흐름을 바꿔요.",
        "PC는 다음 명령어가 있는 메모리 위치를 가리켜요."
      ],
      "example": { "title": "내 말로 설명 (Week 5 Exercise 3 필기)", "points": [ "Programs are stored in memory as data, and the CPU fetches and executes them one by one.", "Fetch → decode → execute", "명령어도 데이터와 마찬가지로 메모리에 저장되어 program counter에 의해 순차적으로 추적되며 fetch-decode-execute 순서대로 실행돼요." ] },
      "keyterms": [ { "en": "Stored Program Concept", "ko": "저장 프로그램 개념" }, { "en": "Fetch & Execute Cycle", "ko": "인출·실행 사이클" }, { "en": "decode", "ko": "해독" } ],
      "source": "Ch2-2, 57~58쪽 / Week 5 Exercise 3"
    },
    {
      "id": "lui", "group": "g-spc", "title": "32비트 상수 로드: LUI",
      "definition": "명령어를 32비트로 유지하면서 32비트 상수가 필요할 때, 상수를 조각내서 레지스터에 다시 합쳐요. LUI는 상위 16비트를 레지스터에 넣어요.",
      "example": { "title": "0x003D 0900을 $s0에", "points": [ "LUI $t0, 0x003D → $t0 = 003D 0000", "ORI $s0, $t0, 0x0900 → $s0 = 003D 0900" ] },
      "points": [ "LUI $t0, 255 → $t0 = 0000 0000 1111 1111 0000 0000 0000 0000" ],
      "keyterms": [ { "en": "LUI (Load Upper Immediate)", "ko": "상위 즉시값 로드" }, { "en": "Sign Extension", "ko": "부호 확장" }, { "en": "Zero Extension", "ko": "0 확장" } ],
      "source": "Ch2-2, 59~61쪽"
    },
    {
      "id": "pseudo", "group": "g-spc", "title": "의사 명령어",
      "definition": "의사 명령어는 원래 어셈블리 명령어의 흔한 변형으로, 자기만의 명령어처럼 다뤄져요. 어셈블러가 실제 명령어로 바꿔요.",
      "table": { "head": ["의사 명령어", "실제 명령어"], "rows": [
        ["move $t0, $t1", "add $t0, $t1, $zero"],
        ["blt $t0, $t1, L", "slt $at, $t0, $t1 / bne $at, $zero, L ($at 사용)"],
        ["bgt, bge, ble", "slt + beq/bne 조합"]
      ] },
      "example": { "title": "if (A > B) A = B; else A = A + 1;", "points": [ "ble $s0, $s1, else / move $s0, $s1 / j exit / else: addi $s0, $s0, 1 / exit:" ] },
      "keyterms": [ { "en": "Pseudo instruction", "ko": "의사 명령어" }, { "en": "$at", "ko": "어셈블러 임시 레지스터" } ],
      "source": "Ch2-2, 62쪽, 65쪽"
    },
    {
      "id": "mips-modes", "group": "g-spc", "title": "MIPS 주소 지정 방식 5가지",
      "definition": "MIPS는 즉시, 레지스터, 베이스, PC 상대, 의사 직접 주소 지정을 써요.",
      "table": { "head": ["방식", "방법", "예"], "rows": [
        ["즉시", "imm16이 피연산자", "addi"],
        ["레지스터", "레지스터가 피연산자", "add"],
        ["베이스", "레지스터 + address → 데이터 메모리", "lw, sw"],
        ["PC 상대", "PC + (offset << 2) → 명령어 메모리", "beq, bne"],
        ["의사 직접", "PC 상위 4비트 : (offset << 2)", "j, jal"]
      ] },
      "keyterms": [ { "en": "Base addressing", "ko": "베이스 주소 지정" }, { "en": "PC-Relative addressing", "ko": "PC 상대 주소 지정" }, { "en": "Pseudo-direct addressing", "ko": "의사 직접 주소 지정" } ],
      "source": "Ch2-2, 63~64쪽"
    },
    {
      "id": "proc-steps", "group": "g-proc", "title": "프로시저 호출 6단계",
      "definition": "프로시저 호출은 인자 두기 → 제어 넘기기 → 저장 공간 확보 → 작업 → 결과 두기 → 복귀의 6단계예요.",
      "table": { "head": ["단계", "MIPS"], "rows": [
        ["1. 인자를 프로시저가 접근할 곳에 둠", "$a0~$a3"],
        ["2. 프로시저로 제어를 넘김", "JAL"],
        ["3. 필요한 저장 공간 확보", "스택 ($sp)"],
        ["4. 작업 수행", ""],
        ["5. 결과를 호출자가 접근할 곳에 둠", "$v0~$v1"],
        ["6. 원래 위치로 복귀", "JR $ra"]
      ] },
      "keyterms": [ { "en": "Procedure Call", "ko": "프로시저 호출" }, { "en": "arguments", "ko": "인자" }, { "en": "return values", "ko": "반환값" } ],
      "source": "Ch2-2, 67~68쪽"
    },
    {
      "id": "jal-jr", "group": "g-proc", "title": "JAL과 JR $ra 짝",
      "definition": "JAL은 PC를 프로시저 주소로 바꾸고 다음 명령어 주소를 $ra에 저장해요. JR $ra는 $ra로 돌아가요.",
      "example": { "title": "h = f(3); g = h + 1; ($s0 h, $s1 g)", "points": [
        "addi $a0, $zero, 3 / JAL Func / move $s0, $v0 / add $s1, $s0, 1",
        "Func: addi $v0, $a0, 1 / JR $ra"
      ] },
      "points": [ "JAL은 J형식, JR은 R형식이에요. (필기)", "$ra에는 돌아올 다음 명령어 주소(PC 또는 PC+4)가 저장돼요." ],
      "keyterms": [ { "en": "JAL ProcedureAddr", "ko": "프로시저 호출" }, { "en": "JR $ra", "ko": "프로시저 복귀" } ],
      "source": "Ch2-2, 69쪽"
    },
    {
      "id": "conv", "group": "g-proc", "title": "레지스터 보존 규칙: $t와 $s",
      "definition": "레지스터 스필을 줄이기 위해 $t0~$t9는 피호출자가 보존하지 않고, $s0~$s7은 반드시 보존해야 해요.",
      "table": { "head": ["누가 저장", "무엇을"], "rows": [
        ["호출자(caller)", "호출 뒤에도 필요한 $a0~$a3, $t0~$t9"],
        ["피호출자(callee)", "$ra, 자기가 쓰는 $s0~$s7"]
      ] },
      "points": [ "호출자는 $t0~$t9가 호출 뒤에 보존될 거라고 기대하지 않아요." ],
      "keyterms": [ { "en": "caller", "ko": "호출자" }, { "en": "callee", "ko": "피호출자" }, { "en": "Register Spilling", "ko": "레지스터 스필" } ],
      "source": "Ch2-2, 73쪽, 75쪽"
    },
    {
      "id": "stack", "group": "g-stack", "title": "스택으로 레지스터 더 쓰기",
      "definition": "인자 4개, 반환값 2개보다 레지스터가 더 필요하면, 쓸 레지스터를 스택(LIFO)에 저장했다가 복원해요.",
      "points": [
        "$sp는 스택에서 가장 최근에 할당된 곳을 가리켜요.",
        "순서: 스택에 저장 → 계산 → 반환값을 $v0에 → 복원 → JR $ra",
        "스택은 높은 주소에서 낮은 주소로 자라요: addi $sp, $sp, −12로 3칸 확보"
      ],
      "example": { "title": "leaf_example: f = (g+h) − (i+j)", "points": [
        "addi $sp,$sp,−12 / sw $t0,8($sp) / sw $t1,4($sp) / sw $s0,0($sp)",
        "add $t0,$a0,$a1 / add $t1,$a2,$a3 / sub $s0,$t0,$t1 / add $v0,$s0,$zero",
        "lw $s0,0($sp) / lw $t1,4($sp) / lw $t0,8($sp) / addi $sp,$sp,12 / jr $ra",
        "개선(필기): $t는 보존 안 해도 되니 $s0만 저장 → addi $sp,$sp,−4 / sw $s0,0($sp) … lw $s0,0($sp) / addi $sp,$sp,4"
      ] },
      "keyterms": [ { "en": "Stack", "ko": "스택" }, { "en": "Stack Pointer", "ko": "스택 포인터" }, { "en": "Last-In-First-Out", "ko": "후입선출" } ],
      "source": "Ch2-2, 70~74쪽"
    },
    {
      "id": "nested", "group": "g-stack", "title": "중첩·재귀 프로시저: fact",
      "definition": "프로시저 안에서 다시 JAL을 쓰면 $ra가 덮어써지므로, 피호출자는 $ra와 필요한 인자를 스택에 저장해요.",
      "example": { "title": "int fact(int n)", "points": [
        "fact: addi $sp,$sp,−8 / sw $ra,4($sp) / sw $a0,0($sp)",
        "slti $t0,$a0,1 / beq $t0,$zero,L1 / addi $v0,$zero,1 / addi $sp,$sp,8 / jr $ra",
        "L1: addi $a0,$a0,−1 / jal fact / lw $a0,0($sp) / lw $ra,4($sp) / addi $sp,$sp,8 / mul $v0,$a0,$v0 / jr $ra"
      ] },
      "points": [ "Week 7 Exercise 2: main이 $ra를 저장하지 않으면 jal add_1 때 $ra가 덮여 돌아가지 못해요. 그래서 $sp를 초기화하고 $ra를 스택에 저장해요." ],
      "keyterms": [ { "en": "Nested Procedure Call", "ko": "중첩 프로시저 호출" }, { "en": "recursive call", "ko": "재귀 호출" } ],
      "source": "Ch2-2, 75~76쪽 / Week 7"
    },
    {
      "id": "frame", "group": "g-stack", "title": "프로시저 프레임과 메모리 배치",
      "definition": "프로시저 프레임(활성 레코드)은 프로시저의 저장된 레지스터와 지역 변수를 담는 스택 구간이에요. $fp는 프레임의 첫 워드를 가리켜요.",
      "table": { "head": ["메모리 영역", "내용"], "rows": [
        ["Stack", "자동 저장 공간 ($sp = 7fff fffc에서 아래로)"],
        ["Dynamic data (heap)", "C의 malloc, Java의 new"],
        ["Static data", "전역 변수, 상수 배열·문자열 ($gp = 1000 8000)"],
        ["Text", "프로그램 코드 (pc = 0040 0000)"],
        ["Reserved", "예약"]
      ] },
      "points": [ "$fp는 지역 변수를 안정적으로 참조하는 기준이 돼요." ],
      "keyterms": [ { "en": "Procedure frame (Activation record)", "ko": "프로시저 프레임" }, { "en": "Frame pointer", "ko": "프레임 포인터" }, { "en": "heap", "ko": "힙" } ],
      "source": "Ch2-2, 77~79쪽"
    }
  ],
  "terms": [
    { "en": "J-type", "ko": "J형식", "def": "op 6비트 + 점프 주소 26비트(워드 주소). J, JAL용이에요.", "def_en": "J-type Instruction : Jump instruction & JAL", "source": "Ch2-2, 54쪽" },
    { "en": "Stored Program Concept", "ko": "저장 프로그램 개념", "def": "명령어를 숫자로 표현하고, 프로그램을 데이터처럼 메모리에 저장해요.", "def_en": "Instructions are represented as numbers. Programs are stored in memory : to be read or written just like data", "source": "Ch2-2, 57쪽" },
    { "en": "LUI", "ko": "상위 즉시값 로드", "def": "상수의 상위 16비트를 레지스터에 넣어요.", "def_en": "MIPS provides LUI for loading upper 16-bits of a constant in a register.", "source": "Ch2-2, 59쪽" },
    { "en": "Pseudo instruction", "ko": "의사 명령어", "def": "원래 명령어의 흔한 변형. move, blt 같은 것이에요.", "def_en": "A common variation of original assembly language instructions often treated as if it were an instruction in its own right", "source": "Ch2-2, 62쪽" },
    { "en": "Pseudo-direct addressing", "ko": "의사 직접 주소 지정", "def": "PC 상위 4비트와 (offset << 2)를 이어 붙여 주소를 만들어요.", "def_en": "", "source": "Ch2-2, 64쪽" },
    { "en": "$a0 - $a3", "ko": "인자 레지스터", "def": "인자를 넘기는 레지스터 4개예요.", "def_en": "four registers for arguments to pass parameters", "source": "Ch2-2, 68쪽" },
    { "en": "$v0 - $v1", "ko": "반환값 레지스터", "def": "반환값을 담는 레지스터 2개예요.", "def_en": "two registers for return values", "source": "Ch2-2, 68쪽" },
    { "en": "Stack Pointer", "ko": "스택 포인터", "def": "$sp. 스택에서 가장 최근에 할당된 곳을 가리켜요.", "def_en": "Stack Pointer ($SP register in MIPS) points to most recently allocated places in the stack", "source": "Ch2-2, 70쪽" },
    { "en": "callee", "ko": "피호출자", "def": "호출당하는 프로시저. $ra와 쓰는 $s 레지스터를 저장해요.", "def_en": "", "source": "Ch2-2, 75쪽" },
    { "en": "Procedure frame (Activation record)", "ko": "프로시저 프레임", "def": "프로시저의 저장된 레지스터와 지역 변수를 담는 스택 구간이에요.", "def_en": "A segment for stack containing a procedure's saved registers and local variables.", "source": "Ch2-2, 77쪽" },
    { "en": "Frame pointer", "ko": "프레임 포인터", "def": "$fp. 프로시저 프레임의 첫 워드를 가리켜요.", "def_en": "Frame pointer ($fp register) points to the first word of the procedure frame.", "source": "Ch2-2, 77쪽" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "57쪽 루프 기계어 표와 80쪽 leaf_example 개선 코드는 내 필기예요.",
      "Week 7 Exercise 2 설명은 슬라이드 문장(Still has a stack problem, Initializing stack pointer)을 풀어 쓴 거예요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "56쪽 Fig. 2.17 opcode 표 전체, 58쪽 기계어 변환 문제(답 없음), 65쪽 두 번째 if 문제(답 없음), 80쪽 f1/f2 변환 문제(답 없음)",
      "Week 7 Exercise 3(max 함수 CPUlator 테스트)"
    ] },
    { "title": "사용 안내", "items": [ "중간고사(10/22) 범위는 3장까지예요. 이 차시도 시험 범위예요." ] }
  ],
  "quiz": [
    { "id": "a2-3-q01", "q": "How many instruction formats does MIPS have?", "answers": ["3", "three"], "explain": "R, I, J예요.", "source": "Ch2-2, 53쪽" },
    { "id": "a2-3-q02", "q": "ADD $t0, $s1, $s2 in hexadecimal?", "choices": ["0x02324020", "0x02328020", "0x01124020", "0x02324022"], "answer": 0, "explain": "000000 10001 10010 01000 00000 100000.", "source": "Ch2-2, 51쪽" },
    { "id": "a2-3-q03", "q": "What is the opcode of LW?", "choices": ["35", "43", "8", "4"], "answer": 0, "explain": "SW 43, ADDI 8, BEQ 4.", "source": "Ch2-2, 53쪽" },
    { "id": "a2-3-q04", "q": "How many bits is the jump address field in J-type?", "answers": ["26", "26 bits"], "explain": "op 6비트 + 26비트.", "source": "Ch2-2, 54쪽" },
    { "id": "a2-3-q05", "q": "Two principles of the stored program concept?", "choices": ["Instructions are represented as numbers; programs are stored in memory", "Programs run only from ROM; data is in registers", "Instructions are variable length; data is fixed", "Compilers are in hardware; data is in cache"], "answer": 0, "explain": "명령어도 데이터처럼 메모리에서 읽고 쓸 수 있어요.", "source": "Ch2-2, 57쪽" },
    { "id": "a2-3-q06", "q": "Which register points to the memory location where the 'next' instruction resides?", "answers": ["PC", "Program Counter", "program counter"], "explain": "Fetch & Execute 사이클에서 PC가 다음 명령어를 가리켜요.", "source": "Ch2-2, 58쪽" },
    { "id": "a2-3-q07", "q": "Which instruction loads the upper 16 bits of a constant into a register?", "answers": ["LUI", "lui"], "explain": "LUI 다음 ORI로 하위 16비트를 채워요.", "source": "Ch2-2, 59~60쪽" },
    { "id": "a2-3-q08", "q": "To load 0x003D0900 into $s0: LUI $t0, 0x003D then ____ $s0, $t0, 0x0900.", "answers": ["ORI", "ori"], "explain": "$s0 = 003D 0900.", "source": "Ch2-2, 60쪽" },
    { "id": "a2-3-q09", "q": "'move $t0, $t1' is converted to which real instruction?", "choices": ["add $t0, $t1, $zero", "lw $t0, 0($t1)", "addi $t1, $t0, 0", "sw $t1, 0($t0)"], "answer": 0, "explain": "move는 의사 명령어예요.", "source": "Ch2-2, 62쪽" },
    { "id": "a2-3-q10", "q": "Which register does the assembler use as temporary for BLT?", "answers": ["$at", "at"], "explain": "SLT $at, $t0, $t1 / BNE $at, $zero, L.", "source": "Ch2-2, 62쪽" },
    { "id": "a2-3-q11", "q": "Which MIPS addressing mode do J and JAL use?", "choices": ["Pseudo-direct addressing", "PC-relative addressing", "Base addressing", "Immediate addressing"], "answer": 0, "explain": "BEQ/BNE는 PC 상대, LW/SW는 베이스예요.", "source": "Ch2-2, 64쪽" },
    { "id": "a2-3-q12", "q": "MIPS registers for arguments?", "choices": ["$a0 ~ $a3", "$v0 ~ $v1", "$t0 ~ $t9", "$s0 ~ $s7"], "answer": 0, "explain": "반환값은 $v0~$v1, 복귀 주소는 $ra.", "source": "Ch2-2, 68쪽" },
    { "id": "a2-3-q13", "q": "Return from procedure call instruction?", "answers": ["JR $ra", "jr $ra"], "explain": "PC ← $ra.", "source": "Ch2-2, 79쪽" },
    { "id": "a2-3-q14", "q": "Which registers must be preserved on a procedure call?", "choices": ["$s0 - $s7", "$t0 - $t9", "$a0 - $a3", "$v0 - $v1"], "answer": 0, "explain": "$t0~$t9는 피호출자가 보존하지 않아요.", "source": "Ch2-2, 73쪽" },
    { "id": "a2-3-q15", "q": "Who saves the return address ($ra) in a nested procedure call?", "choices": ["Callee", "Caller", "Assembler", "OS kernel"], "answer": 0, "explain": "피호출자는 $ra와 자기가 쓰는 $s를 저장해요.", "source": "Ch2-2, 75쪽" },
    { "id": "a2-3-q16", "q": "To make room for 3 items on the stack: addi $sp, $sp, ____", "answers": ["-12", "−12"], "explain": "스택은 아래로 자라고 1워드 = 4바이트예요.", "source": "Ch2-2, 72쪽" },
    { "id": "a2-3-q17", "q": "Stack is a ____ structure.", "choices": ["Last-In-First-Out", "First-In-First-Out", "Random access", "Circular"], "answer": 0, "explain": "레지스터 스필에 알맞은 곳이에요.", "source": "Ch2-2, 70쪽" },
    { "id": "a2-3-q18", "q": "Which register points to the first word of the procedure frame?", "answers": ["$fp", "fp", "frame pointer"], "explain": "$sp는 스택 맨 위(최근)를 가리켜요.", "source": "Ch2-2, 77쪽" },
    { "id": "a2-3-q19", "q": "Where are global variables (static variables in C) placed in memory?", "choices": ["Static data", "Stack", "Heap", "Text"], "answer": 0, "explain": "$gp로 접근해요. malloc은 heap, 코드는 text.", "source": "Ch2-2, 78쪽" },
    { "id": "a2-3-q20", "q": "In the fact procedure, why save $ra on the stack?", "choices": ["Because 'jal fact' overwrites $ra", "Because $ra is a temporary register", "Because the stack is faster than registers", "Because $ra holds the argument n"], "answer": 0, "explain": "재귀 호출에서 jal이 $ra를 덮어써요.", "source": "Ch2-2, 76쪽" }
  ]
});
