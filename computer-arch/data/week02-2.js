addSession({
  "week": 2,
  "session": "2-2",
  "kind": "강의",
  "lecturer": "",
  "title": "Instructions (Part 2-1): MIPS 설계 원칙과 명령어 집합",
  "intro": "MIPS의 레지스터·메모리 구조, 4가지 설계 원칙, 그리고 산술·논리·데이터 전송·제어 명령어를 배워요. 4~6주차 연습문제와 HW3 풀이도 함께 정리했어요.",
  "sources": [
    { "index": "01", "title": "Chapter 2 Part 2 (1~45쪽, 손필기 포함)", "file": "22ch2_part2_up_261015_003947.pdf", "path": "computer-arch/materials/필기/22ch2_part2_up_261015_003947.pdf" },
    { "index": "02", "title": "Week 4·5·6 수업 연습문제 (손필기 포함)", "file": "week_4·5·6", "path": "computer-arch/materials/필기/" },
    { "index": "03", "title": "HW#3 문제와 내 풀이", "file": "hw3_26_1788037_261009_160353.pdf", "path": "computer-arch/materials/과제/hw3_26_1788037_261009_160353.pdf" }
  ],
  "groups": [
    { "id": "g-model", "title": "MIPS 레지스터와 메모리" },
    { "id": "g-dp", "title": "MIPS 설계 원칙 4가지" },
    { "id": "g-arith", "title": "산술·논리 명령어" },
    { "id": "g-data", "title": "데이터 전송 명령어" },
    { "id": "g-ctrl", "title": "제어 명령어" },
    { "id": "g-ex", "title": "연습문제" }
  ],
  "sections": [
    {
      "id": "goal", "group": "g-model", "title": "MIPS ISA의 목표",
      "definition": "MIPS 명령어 집합 설계 목표는 성능 최대화, 비용 최소화, (컴파일러·하드웨어) 설계 시간 단축이에요. 방법은 하드웨어를 간단하게 하는 거예요.",
      "points": [ "MIPS는 RISC 설계에 중요한 4가지 설계 원칙을 바탕으로 해요.", "하드웨어 단순화는 수단이지 목표가 아니에요. (Week 4 Exercise 1 필기)" ],
      "keyterms": [ { "en": "simplicity of Hardware", "ko": "하드웨어 단순화" }, { "en": "RISC", "ko": "축소 명령어 집합 컴퓨터" } ],
      "source": "Ch2-2, 3~4쪽"
    },
    {
      "id": "reg-model", "group": "g-model", "title": "MIPS 레지스터 모델",
      "definition": "MIPS에는 32비트 범용 레지스터 32개, 32비트 부동소수점 레지스터 32개, 곱셈·나눗셈용 HI·LO, 그리고 PC가 있어요.",
      "points": [
        "R0는 항상 0이에요.",
        "FP 레지스터는 짝수 레지스터를 지정해 64비트 16개로 묶어 배정밀도에 써요.",
        "HI(상위)·LO(하위): 곱셈/나눗셈 결과 저장 (필기)",
        "PC는 분기와 프로시저 호출 말고는 프로그래머에게 보이지 않아요."
      ],
      "table": { "head": ["번호", "이름", "용도"], "rows": [
        ["0", "$zero", "상수 0"], ["1", "$at", "어셈블러 예약"], ["2~3", "$v0~$v1", "반환값"],
        ["4~7", "$a0~$a3", "인자"], ["8~15, 24~25", "$t0~$t9", "임시값"], ["16~23", "$s0~$s7", "보존(저장)"],
        ["26~27", "$k0~$k1", "OS 커널 예약"], ["28", "$gp", "전역 포인터"], ["29", "$sp", "스택 포인터"],
        ["30", "$fp", "프레임 포인터"], ["31", "$ra", "복귀 주소"]
      ] },
      "keyterms": [ { "en": "General Purpose Registers", "ko": "범용 레지스터" }, { "en": "HI and LO", "ko": "HI·LO 레지스터" }, { "en": "Register Naming Convention", "ko": "레지스터 이름 규칙" } ],
      "source": "Ch2-2, 5~6쪽"
    },
    {
      "id": "dp-list", "group": "g-dp", "title": "4가지 설계 원칙 한눈에",
      "definition": "MIPS 설계 원칙은 단순함은 규칙성을, 작을수록 빠르다, 자주 쓰는 경우를 빠르게, 좋은 설계는 타협이 필요하다예요.",
      "table": { "head": ["원칙", "뜻 (필기)", "예"], "rows": [
        ["1. Simplicity favors regularity", "단순함은 규칙적인 것에서 나온다", "산술 명령어는 피연산자 3개, 순서 고정"],
        ["2. Smaller is faster", "작아야 빠르다", "레지스터 32개로 제한"],
        ["3. Make common case fast", "자주 발생하는 일을 빠르게", "즉시값(ADDI), $zero"],
        ["4. Good design demands a compromise", "좋은 설계에는 좋은 절충이 필요", "32비트 길이 유지 + R/I/J 세 형식"]
      ] },
      "keyterms": [ { "en": "Simplicity favors regularity", "ko": "단순함은 규칙성을 선호" }, { "en": "Smaller is faster", "ko": "작을수록 빠르다" }, { "en": "Make common case fast", "ko": "자주 쓰는 경우를 빠르게" }, { "en": "Good design demands a compromise", "ko": "좋은 설계는 타협을 요구" } ],
      "source": "Ch2-2, 9쪽, 20쪽"
    },
    {
      "id": "dp1", "group": "g-dp", "title": "원칙 1: 단순함은 규칙성을 선호",
      "definition": "대부분의 산술/논리 명령어는 피연산자가 정확히 3개이고, 순서가 고정돼 있어요(목적지가 먼저).",
      "example": { "title": "예", "points": [ "C = A + B → ADD C, A, B", "C = A − B → SUB C, A, B" ] },
      "points": [ "명령어 하나가 32비트예요. (필기)" ],
      "keyterms": [ { "en": "3 operands", "ko": "피연산자 3개" }, { "en": "destination first", "ko": "목적지 먼저" } ],
      "source": "Ch2-2, 10쪽"
    },
    {
      "id": "dp2", "group": "g-dp", "title": "원칙 2: 작을수록 빠르다",
      "definition": "산술/논리 명령어의 피연산자는 레지스터에만 둘 수 있고(레지스터 주소 지정), 프로그래머가 쓸 수 있는 레지스터는 32개뿐이에요.",
      "points": [
        "컴파일러가 변수를 레지스터에 연결해요. 예: A = B + C → add $s0, $s1, $s2",
        "왜 32개뿐? 레지스터가 아주 많으면 전기 신호가 더 멀리 가야 해서 클럭 사이클 시간이 늘어요."
      ],
      "keyterms": [ { "en": "Registers", "ko": "레지스터" }, { "en": "clock cycle time", "ko": "클럭 사이클 시간" } ],
      "source": "Ch2-2, 11~12쪽"
    },
    {
      "id": "dp3", "group": "g-dp", "title": "원칙 3: 자주 쓰는 경우를 빠르게",
      "definition": "상수는 MIPS 산술 명령어의 50% 넘게 피연산자로 쓰여요. 그래서 상수를 명령어 안에 넣어 메모리에서 읽는 것보다 훨씬 빠르게 해요.",
      "table": { "head": ["방법", "내용"], "rows": [
        ["해결 1", "상수를 메모리에 두고 LW로 읽기 → 명령어 2개 필요, 느림 (필기). 또는 R0($zero)처럼 특정 상수를 하드웨어 레지스터로 고정"],
        ["해결 2", "상수를 명령어의 일부로: A = A + 1 → ADDI $s3, $s3, 1"]
      ] },
      "keyterms": [ { "en": "Constants", "ko": "상수" }, { "en": "Immediate", "ko": "즉시값" }, { "en": "hard-wired register", "ko": "고정 레지스터" } ],
      "source": "Ch2-2, 13~14쪽"
    },
    {
      "id": "dp4", "group": "g-dp", "title": "원칙 4: 좋은 설계는 좋은 타협을 요구",
      "definition": "모든 명령어를 32비트로 같게 유지하면서, 형식은 R, I, J 세 가지로 나눴어요.",
      "points": [
        "R형식의 5비트 필드는 상수나 배열 인덱스에 너무 작아요(0~31). 예: ADDI $s3, $s3, 1000 → 안 들어감 (필기)",
        "그래서 '형식을 하나로' 와 '길이를 같게(32비트)' 사이에 충돌이 생겨요.",
        "해결: I형식은 rd+shamt+funct 자리를 16비트 상수로 써요. 범위 −2^15 ~ 2^15−1 (필기)"
      ],
      "table": { "head": ["형식", "필드 (비트)"], "rows": [
        ["R", "op 6 | rs 5 | rt 5 | rd 5 | shamt 5 | funct 6"],
        ["I", "op 6 | rs 5 | rt 5 | constant or address 16"]
      ] },
      "example": { "title": "ADDI $s0, $s1, 4", "points": [ "op=8, rs=17($s1), rt=16($s0, 목적지), constant=4" ] },
      "keyterms": [ { "en": "R-type format", "ko": "R형식" }, { "en": "I-type format", "ko": "I형식" }, { "en": "compromise", "ko": "타협" } ],
      "source": "Ch2-2, 15~18쪽"
    },
    {
      "id": "byte-word", "group": "g-model", "title": "바이트 주소 vs 워드 주소 메모리",
      "definition": "바이트 주소 메모리는 바이트(8비트)마다 주소를 매기고, 워드 주소 메모리는 워드(32비트 = 4바이트)마다 주소를 매겨요.",
      "points": [ "MIPS는 바이트 주소 방식이라 워드 하나를 가져오려면 4바이트를 읽어야 하고, 워드 단위로 옮기려면 ×4를 해야 해요. (필기)" ],
      "keyterms": [ { "en": "byte-addressable", "ko": "바이트 주소 지정" }, { "en": "word-addressable", "ko": "워드 주소 지정" } ],
      "source": "Ch2-2, 7~8쪽, 19쪽"
    },
    {
      "id": "arith", "group": "g-arith", "title": "산술 명령어",
      "definition": "MIPS는 명령어 집합의 완전성을 만족해요: 산술/논리, 데이터 전송, 제어.",
      "table": { "head": ["명령어", "의미"], "rows": [
        ["ADD $s0, $s1, $s2", "$s0 ← $s1 + $s2"], ["ADDI $s0, $s1, 100", "$s0 ← $s1 + 100"],
        ["SUB $s0, $s1, $s2", "$s0 ← $s1 − $s2"], ["MULT $s1, $s2", "Hi, Lo ← $s1 × $s2"],
        ["DIV $s1, $s2", "Hi, Lo ← $s1 / $s2 (Lo 몫, Hi 나머지)"], ["MFHI $s1 / MFLO $s1", "$s1 ← Hi / $s1 ← Lo"]
      ] },
      "keyterms": [ { "en": "MULT", "ko": "곱셈" }, { "en": "MFHI", "ko": "Hi에서 옮기기" }, { "en": "MFLO", "ko": "Lo에서 옮기기" } ],
      "source": "Ch2-2, 22~23쪽 / Week 6 Exercise 4"
    },
    {
      "id": "logic", "group": "g-arith", "title": "논리 명령어와 시프트",
      "definition": "AND, OR, ANDI, ORI, NOR는 비트 단위 연산이고, SLL/SRL은 왼쪽/오른쪽 논리 시프트예요.",
      "table": { "head": ["명령어", "의미"], "rows": [
        ["AND / OR / NOR $s0, $s1, $s2", "비트 AND / OR / NOR"], ["ANDI $s0, $s1, 31", "$s1 AND 31"], ["ORI $s0, $s1, 32", "$s1 OR 32"],
        ["SLL $s0, $s1, 10", "$s0 ← $s1 << 10"], ["SRL $s0, $s1, 10", "$s0 ← $s1 >> 10"]
      ] },
      "points": [
        "SLL로 n번 밀면 ×2^n이에요. 배열 인덱스 i를 바이트 오프셋으로 바꿀 때 sll $t, $i, 2 (×4)를 써요. (필기)",
        "ANDI는 상수를 0으로 확장(zero-extend)해요. 부호 확장은 맨 앞 비트(1/0)로 빈칸을 채워요. (필기)",
        "AND 마스크: 1인 자리는 원래 비트를 남기고 0인 자리는 0으로 지워서 특정 비트를 뽑아요. (필기)"
      ],
      "example": { "title": "Week 6 Exercise 2", "points": [ "$s0 = 0x12345678, andi $t0, $s0, 0x00FF → $t0 = 0x00000078" ] },
      "keyterms": [ { "en": "shift left logical", "ko": "왼쪽 논리 시프트" }, { "en": "bit mask", "ko": "비트 마스크" }, { "en": "Zero-extend", "ko": "0 확장" }, { "en": "Sign-extend", "ko": "부호 확장" } ],
      "source": "Ch2-2, 24쪽 / Week 6"
    },
    {
      "id": "data-transfer", "group": "g-data", "title": "LW와 SW",
      "definition": "데이터 구조는 메모리에 있지만 연산은 레지스터에서만 일어나서, 메모리와 레지스터 사이에 데이터를 옮기는 명령어가 필요해요. MIPS의 메모리 접근 명령어는 두 개뿐이에요(RISC).",
      "table": { "head": ["명령어", "의미"], "rows": [
        ["LW $s1, 8($s0)", "$s1 ← Memory[$s0 + 8] (바이트 [$s0+8]~[$s0+11])"],
        ["SW $s1, 12($s0)", "Memory[$s0 + 12] ← $s1"]
      ] },
      "points": [ "store 명령어는 소스가 먼저 와요.", "베이스 레지스터 주소 지정: [R] + 오프셋", "lw, sw는 I형식이에요. (Week 4 Exercise 3)" ],
      "example": { "title": "A[8] = h + A[8] ($s3 = A 주소, $s2 = h)", "points": [ "lw $t0, 32($s3) / add $t0, $s2, $t0 / sw $t0, 32($s3)", "32 = 8 × 4(워드 크기)" ] },
      "keyterms": [ { "en": "Load", "ko": "로드" }, { "en": "Store", "ko": "스토어" }, { "en": "Base Register Addressing", "ko": "베이스 레지스터 주소 지정" } ],
      "source": "Ch2-2, 26~28쪽"
    },
    {
      "id": "cond-branch", "group": "g-ctrl", "title": "조건 분기: BEQ, BNE, SLT, SLTI",
      "definition": "BEQ는 같으면, BNE는 다르면 분기해요. SLT는 작으면 1, 아니면 0을 넣어요.",
      "table": { "head": ["명령어", "의미", "형식"], "rows": [
        ["BEQ $s1, $s2, label", "$s1 == $s2면 PC ← 목표 주소", "I (op=4)"],
        ["BNE $s1, $s2, label", "$s1 ≠ $s2면 PC ← 목표 주소", "I (op=5)"],
        ["SLT $s1, $s2, $s3", "$s2 < $s3면 $s1 ← 1, 아니면 0", "R (op=0, funct=42)"],
        ["SLTI $s1, $s2, 100", "$s2 < 100이면 $s1 ← 1, 아니면 0", "I (op=10)"]
      ] },
      "points": [ "SLT + BEQ/BNE로 blt, ble, bgt, bge 같은 일반 제어 구조를 만들어요.", "BEQ/BNE 오프셋은 워드 개수예요: PC ← PC + 오프셋 × 4" ],
      "example": { "title": "if (i >= j) F = G+H; else F = G−H;", "points": [ "SLT $t0, $s0, $s1 / BNE $t0, $zero, ELSE / ADD $s2, $s3, $s4 / J Exit", "ELSE: SUB $s2, $s3, $s4 / Exit:" ] },
      "keyterms": [ { "en": "Branch if Equal", "ko": "같으면 분기" }, { "en": "Branch if Not Equal", "ko": "다르면 분기" }, { "en": "Set Less Than", "ko": "작으면 1로 설정" } ],
      "source": "Ch2-2, 30~35쪽"
    },
    {
      "id": "uncond", "group": "g-ctrl", "title": "무조건 분기: J, JR, JAL",
      "definition": "J는 목표 주소로 점프, JR은 레지스터 값으로 점프, JAL은 복귀 주소를 $ra에 저장하고 점프해요.",
      "table": { "head": ["명령어", "의미", "형식"], "rows": [
        ["J 1000", "PC ← 1000 (target = 250, 워드 주소)", "J (op=2)"],
        ["JR $ra", "PC ← $ra", "R (op=0, rs=31, funct=8)"],
        ["JAL 1000", "$ra ← PC(+4); PC ← 1000", "J (op=3)"]
      ] },
      "points": [
        "BEQ/BNE: PC ← PC + 오프셋×4 (16비트 오프셋)",
        "J/JAL: PC ← PC[31:28] 4비트 + (주소 << 2) 28비트",
        "JR: PC ← 레지스터 값",
        "JAL과 JR은 함수 호출과 복귀에 써요. (필기)"
      ],
      "keyterms": [ { "en": "Jump", "ko": "점프" }, { "en": "Jump Register", "ko": "레지스터 점프" }, { "en": "Jump and Link", "ko": "점프 앤 링크" } ],
      "source": "Ch2-2, 37~40쪽"
    },
    {
      "id": "range", "group": "g-ctrl", "title": "분기 범위와 &&·&",
      "definition": "BEQ의 L은 16비트라 −2^15 ≤ L ≤ 2^15−1이고, J의 목표는 PC 상위 4비트가 정하는 256M(2^28) 블록 안이에요.",
      "points": [
        "L이 범위를 벗어나면: 반대 조건 분기(BNE)와 J를 함께 써요. (필기)",
        "J 목표가 256M 블록 밖이면: JR 명령어를 써요(32비트 주소). (필기)",
        "C의 &(비트 AND)는 MIPS AND 명령어에, &&(논리 AND)는 조건 분기 명령어의 나열에 대응해요."
      ],
      "keyterms": [ { "en": "Logical AND", "ko": "논리 AND" }, { "en": "Bit-wise AND", "ko": "비트 AND" } ],
      "source": "Ch2-2, 41~42쪽"
    },
    {
      "id": "summary-table", "group": "g-ctrl", "title": "명령어 요약표",
      "definition": "자주 나오는 MIPS 명령어를 형식과 의미로 정리했어요. se = 부호 확장, ze = 0 확장이에요.",
      "table": { "head": ["형식", "명령어", "의미"], "rows": [
        ["R", "ADD/SUB rd,rs,rt", "rd ← rs ± rt"], ["I", "ADDI rt,rs,imm16", "rt ← rs + se(imm16)"],
        ["R", "SLT rd,rs,rt", "rd ← (rs<rt)?1:0"], ["I", "SLTI rt,rs,imm16", "rt ← (rs<se(imm16))?1:0"],
        ["I", "ANDI rt,rs,imm16", "rt ← rs & ze(imm16)"], ["R", "SLL/SRL rd,rt,shamt", "시프트"],
        ["I", "LW rt,imm16(rs)", "rt ← M[rs+se(imm16)]"], ["I", "SW rt,imm16(rs)", "M[rs+se(imm16)] ← rt"],
        ["I", "BEQ/BNE rs,rt,imm16", "조건 맞으면 PC ← PC+se(imm16)×4"], ["R", "JR rs", "PC ← rs"],
        ["J", "JAL imm26", "$ra ← PC+4; PC ← imm26×4"], ["J", "J imm26", "PC ← imm26×4"]
      ] },
      "keyterms": [ { "en": "se (sign extension)", "ko": "부호 확장" } ],
      "source": "Ch2-2, 45쪽"
    },
    {
      "id": "ex-c2mips", "group": "g-ex", "title": "C → MIPS 변환 연습",
      "definition": "수업과 과제에서 나온 C 코드 → MIPS 변환 풀이예요. (필기)",
      "table": { "head": ["C 코드", "MIPS (필기 풀이)"], "rows": [
        ["f = (g+h) − (i+j) (g~j: $s0~$s3, f: $s4)", "add $t0,$s0,$s1 / add $t1,$s2,$s3 / sub $s4,$t0,$t1"],
        ["A[1] = A[3] + 3 ($s0 = A)", "lw $t0,12($s0) / addi $t2,$t0,3 / sw $t2,4($s0)"],
        ["while (save[i] == k) i++; ($s3 i, $s5 k, $s6 save)", "addi $s3,$zero,0 / Loop: sll $t1,$s3,2 / add $t1,$t1,$s6 / lw $t0,0($t1) / bne $t0,$s5,Exit / addi $s3,$s3,1 / j Loop / Exit:"],
        ["c = a && b ($s0 a, $s1 b, $s2 c)", "beq $s0,$zero,False / beq $s1,$zero,False / addi $s2,$zero,1 / j END / False: add $s2,$zero,$zero / END:"],
        ["f = g + A[B[4]+1] ($s0 f, $s1 g, $s6 A, $s7 B)", "lw $t0,16($s7) / addi $t0,$t0,1 / sll $t0,$t0,2 / add $t0,$t0,$s6 / lw $t1,0($t0) / add $s0,$s1,$t1"],
        ["HW3: B[i] = 4*A[i] ($s0 i, $s3 A, $s4 B)", "sll $t0,$s0,2 / add $t1,$s3,$t0 / lw $t2,0($t1) / sll $t2,$t2,2 / add $t3,$s4,$t0 / sw $t2,0($t3)"]
      ] },
      "keyterms": [ { "en": "base address", "ko": "기준 주소" } ],
      "source": "Ch2-2, 25·29·44쪽 / Week 5·6 / HW3"
    },
    {
      "id": "ex-mips2c", "group": "g-ex", "title": "MIPS → C 해석 연습",
      "definition": "MIPS 코드를 읽고 C 코드로 바꾸는 연습이에요. (필기)",
      "table": { "head": ["MIPS", "C"], "rows": [
        ["div $s0,$s1 / mfhi $t3 / bne … n_div (두 번) / addi $t4,$zero,1 …", "if (num%n1==0 && num%n2==0) res=1; else res=0;"],
        ["sll $t1,$a1,2 / add $t1,$a0,$t1 / lw $t0,0($t1) / lw $t2,4($t1) / sw $t2,0($t1) / sw $t0,4($t1) / jr $ra", "v[k]와 v[k+1]을 바꿈 (swap)"],
        ["HW3: addi $t1,$s6,4 / lw $t2,0($s6) / lw $t3,0($t1) / sw $t2,0($t1) / sw $t3,0($s6)", "A[0]과 A[1]을 바꿈 (swap)"]
      ] },
      "keyterms": [ { "en": "swap", "ko": "맞바꾸기" } ],
      "source": "Week 6 Exercise 4~5 / HW3"
    },
    {
      "id": "ex-trace", "group": "g-ex", "title": "실행 추적: 레지스터·PC·메모리 접근",
      "definition": "명령어를 하나씩 실행하며 레지스터와 PC 값이 어떻게 바뀌는지 따라가요.",
      "example": { "title": "Week 4 Exercise 4 (R1=12, R2=16, R3=20, M[12]=16, M[16]=20, M[20]=24, M[24]=28)", "points": [
        "a) add R3, R2, R1 → R3 = 16+12 = 28 (R1=12, R2=16)",
        "b) lw R3, 12(R1) → 주소 12+12 = 24 → R3 = M[24] = 28, R1 = 12",
        "c) addi R2, R3, 16 → R2 = 20+16 = 36"
      ] },
      "points": [
        "Week 4 Exercise 5: 명령어 4개 → 명령어 fetch 4번, 데이터 읽기/쓰기는 lw 1번 + sw 1번 = 2번 (필기)",
        "Week 4 Exercise 6: lw($t0←0), lw($s1←1), addi($s0←1), beq 분기 → add 건너뜀, sub $s0 = 1−1 = 0. PC: 104 → 108 → 112 → 120 → 124 (필기)",
        "HW3 5번: 루프 한 번에 5개 × N번 + 마지막 slt·beq 2개 = 5N + 2 (내 풀이)"
      ],
      "keyterms": [ { "en": "fetch", "ko": "명령어 가져오기" } ],
      "source": "Week 4 Exercise 4~6 / HW3"
    },
    {
      "id": "cisc-risc", "group": "g-ex", "title": "CISC vs RISC",
      "definition": "CISC는 복잡한 명령어로 명령어 수를 줄이지만, 하드웨어가 많아지고 지연이 늘어 클럭이 느려지거나 CPI가 커져요.",
      "formula": { "ko": "CPU 클럭 사이클 = 명령어 수 × CPI", "en": "CPU clock cycles = instruction count x CPI" },
      "points": [
        "예전에는 메모리가 작고 비싸서 적은 명령어로 복잡한 연산을 하는 CISC가 유리했어요.",
        "메모리가 싸지고 캐시 계층(온칩 명령어 캐시, 프리페칭)이 발전해서 RISC가 긴 명령어 나열을 감당할 수 있게 됐어요.",
        "MIPS는 RISC(Reduced Instruction Set Computer) 기계예요."
      ],
      "keyterms": [ { "en": "CISC", "ko": "복합 명령어 집합 컴퓨터" }, { "en": "CPI (clock cycles per instruction)", "ko": "명령어당 클럭 사이클" }, { "en": "propagation delay", "ko": "전파 지연" } ],
      "source": "Week 4 Exercise 7, 13~16쪽"
    }
  ],
  "terms": [
    { "en": "R0", "ko": "제로 레지스터", "def": "항상 0이 들어 있는 레지스터예요($zero).", "def_en": "R0 always contains 0", "source": "Ch2-2, 5쪽" },
    { "en": "HI and LO", "ko": "HI·LO 레지스터", "def": "곱셈과 나눗셈 결과를 담는 32비트 레지스터 두 개예요.", "def_en": "for multiply and divide", "source": "Ch2-2, 5쪽" },
    { "en": "$ra", "ko": "복귀 주소 레지스터", "def": "31번 레지스터. 함수가 돌아갈 주소예요.", "def_en": "return address", "source": "Ch2-2, 6쪽" },
    { "en": "$sp", "ko": "스택 포인터", "def": "29번 레지스터. 스택의 가장 최근 위치를 가리켜요.", "def_en": "stack pointer", "source": "Ch2-2, 6쪽" },
    { "en": "Simplicity favors regularity", "ko": "단순함은 규칙성을 선호", "def": "설계 원칙 1. 산술 명령어는 피연산자 3개로 통일해요.", "def_en": "Design Principle 1 : Simplicity favors Regularity", "source": "Ch2-2, 10쪽" },
    { "en": "Smaller is faster", "ko": "작을수록 빠르다", "def": "설계 원칙 2. 레지스터를 32개로 제한해요.", "def_en": "Design Principle 2 : Smaller is Faster", "source": "Ch2-2, 12쪽" },
    { "en": "Make common case fast", "ko": "자주 쓰는 경우를 빠르게", "def": "설계 원칙 3. 상수를 명령어 안에 넣어요(즉시값).", "def_en": "Design Principle 3 : Make the Common case Fast", "source": "Ch2-2, 14쪽" },
    { "en": "Good design demands a compromise", "ko": "좋은 설계는 타협을 요구", "def": "설계 원칙 4. 길이는 32비트로 같게, 형식은 R/I/J로 나눠요.", "def_en": "Design Principle 4 : Good Design demands good Compromises.", "source": "Ch2-2, 18쪽" },
    { "en": "R-type format", "ko": "R형식", "def": "op, rs, rt, rd, shamt, funct (6·5·5·5·5·6비트). 산술·논리 명령어용이에요.", "def_en": "R-type for arithmetic and logic instructions", "source": "Ch2-2, 16쪽" },
    { "en": "I-type format", "ko": "I형식", "def": "op, rs, rt, 16비트 상수/주소. 즉시값·LW·SW·분기용이에요.", "def_en": "I-type format : for Immediate value", "source": "Ch2-2, 18쪽" },
    { "en": "Set Less Than", "ko": "작으면 1로 설정", "def": "SLT: 앞 소스가 뒤 소스보다 작으면 1, 아니면 0이에요.", "def_en": "", "source": "Ch2-2, 33쪽" },
    { "en": "Jump and Link", "ko": "점프 앤 링크", "def": "JAL: $ra에 복귀 주소를 저장하고 점프해요.", "def_en": "", "source": "Ch2-2, 39쪽" },
    { "en": "CPI (clock cycles per instruction)", "ko": "명령어당 클럭 사이클", "def": "명령어 하나를 실행하는 데 드는 평균 클럭 사이클 수예요.", "def_en": "clock cycles per instruction", "source": "Week 4, 14쪽" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "연습문제 풀이 대부분은 내 필기예요. 정답이 공개되면 비교해 보세요.",
      "Week 6 Exercise 1 (sub $t0,$s1,$s2): R형식, rs=$s1, rt=$s2, rd=$t0, 0000 0010 0011 0010 0100 0000 0010 0010 (필기)",
      "HW3 3번: add $s0, $s0, $s0 / 4번: R형식, sub $v1, $v1, $v0, 000000 00011 00010 00011 00000 100010 (내 풀이)"
    ] },
    { "title": "넣지 않은 것", "items": [
      "36쪽 for 루프 변환(필기에 ??만 있음), 43쪽 PC=0x80FEDCBA 범위 문제(답 없음)",
      "Week 4 Quiz1 안내, Week 5 HW 안내",
      "HW4(중앙값 MIPS 프로그램)는 코드 파일이라 넣지 않았어요."
    ] },
    { "title": "사용 안내", "items": [ "2장 part 2 PDF 1~45쪽은 2-2, 46~80쪽은 2-3에 정리했어요." ] }
  ],
  "quiz": [
    { "id": "a2-2-q01", "q": "Which of the following is NOT a design goal of MIPS?", "choices": ["Simplify hardware", "Maximize the performance", "Minimize the cost", "Reduce design time"], "answer": 0, "explain": "하드웨어 단순화는 목표를 이루는 수단이에요. (Week 4 Exercise 1)", "source": "Week 4 Exercise 1" },
    { "id": "a2-2-q02", "q": "Which register always contains 0 in MIPS?", "answers": ["R0", "$zero", "zero", "$0"], "explain": "R0 = $zero.", "source": "Ch2-2, 5쪽" },
    { "id": "a2-2-q03", "q": "Which registers hold the results of multiply and divide?", "choices": ["HI and LO", "$v0 and $v1", "$a0 and $a1", "PC and IR"], "answer": 0, "explain": "MFHI, MFLO로 꺼내요.", "source": "Ch2-2, 5쪽" },
    { "id": "a2-2-q04", "q": "'All arithmetic instructions have three operands' matches which design principle?", "choices": ["Simplicity favors regularity", "Smaller is faster", "Make common case fast", "Good design demands good compromises"], "answer": 0, "explain": "원칙 1이에요.", "source": "Ch2-2, 20쪽" },
    { "id": "a2-2-q05", "q": "'Limited number of registers' matches which design principle?", "choices": ["Smaller is faster", "Simplicity favors regularity", "Make common case fast", "Good design demands good compromises"], "answer": 0, "explain": "레지스터가 많으면 신호가 멀리 가야 해서 클럭 사이클 시간이 늘어요.", "source": "Ch2-2, 12·20쪽" },
    { "id": "a2-2-q06", "q": "'Support immediate value operands' matches which design principle?", "choices": ["Make common case fast", "Smaller is faster", "Simplicity favors regularity", "Good design demands good compromises"], "answer": 0, "explain": "상수는 산술 명령어의 50% 넘게 쓰여요.", "source": "Ch2-2, 13~14·20쪽" },
    { "id": "a2-2-q07", "q": "'Different types of instructions with same length rather than different lengths of instructions of single type' matches which design principle?", "choices": ["Good design demands good compromises", "Simplicity favors regularity", "Smaller is faster", "Make common case fast"], "answer": 0, "explain": "32비트 길이 유지 + R/I/J 형식.", "source": "Ch2-2, 18·20쪽" },
    { "id": "a2-2-q08", "q": "Why does MIPS provide only 32 registers?", "choices": ["A very large number of registers may increase clock cycle time", "Registers are cheaper than memory", "The ISA cannot address more than 16", "Compilers cannot use more"], "answer": 0, "explain": "전기 신호가 더 멀리 가야 하기 때문이에요.", "source": "Ch2-2, 12쪽" },
    { "id": "a2-2-q09", "q": "Bit widths of R-type fields op, rs, rt, rd, shamt, funct?", "choices": ["6, 5, 5, 5, 5, 6", "6, 5, 5, 16", "5, 6, 5, 5, 5, 6", "6, 26"], "answer": 0, "explain": "합계 32비트예요.", "source": "Ch2-2, 15쪽" },
    { "id": "a2-2-q10", "q": "ADD $t0, $s1, $s2 in decimal fields (op rs rt rd shamt funct)?", "choices": ["0 17 18 8 0 32", "0 8 17 18 0 32", "32 17 18 8 0 0", "0 18 17 8 0 32"], "answer": 0, "explain": "$t0=8, $s1=17, $s2=18, add funct=32.", "source": "Ch2-2, 16쪽" },
    { "id": "a2-2-q11", "q": "Is 'lw' an R-type or I-type instruction?", "answers": ["I-type", "I", "I type", "Itype"], "explain": "LW $s0, 32($s1): op=35, rs=17, rt=16, constant=32.", "source": "Week 4 Exercise 3" },
    { "id": "a2-2-q12", "q": "In MIPS there are no mode bits. How do you distinguish R-type and I-type instructions?", "choices": ["By the opcode (R-type op = 0)", "By the funct field only", "By the shamt field", "By the instruction length"], "answer": 0, "explain": "R형식은 op가 0이고 funct로 연산을 구분해요.", "source": "Week 4 Exercise 2, Ch2-2 38쪽 필기" },
    { "id": "a2-2-q13", "q": "MIPS has only two instructions for memory access. What are they?", "choices": ["LW and SW", "ADD and SUB", "J and JAL", "BEQ and BNE"], "answer": 0, "explain": "연산은 레지스터에서만 해요(RISC).", "source": "Ch2-2, 26쪽" },
    { "id": "a2-2-q14", "q": "A[8] = h + A[8]; ($s3 = address of A). What offset is used in lw?", "answers": ["32"], "explain": "8 × 4(워드 크기) = 32.", "source": "Ch2-2, 28쪽" },
    { "id": "a2-2-q15", "q": "slt $t0, $s1, $s2 : if $s1 < $s2 then $t0 = ?", "answers": ["1"], "explain": "아니면 0이에요.", "source": "Ch2-2, 32쪽" },
    { "id": "a2-2-q16", "q": "JAL 1000 does what?", "choices": ["$ra ← PC; PC ← 1000", "PC ← $ra", "PC ← PC + 1000", "$ra ← 1000"], "answer": 0, "explain": "복귀 주소를 $ra에 저장하고 점프해요.", "source": "Ch2-2, 39쪽" },
    { "id": "a2-2-q17", "q": "How is the J/JAL target address formed?", "choices": ["PC(31:28) && (address << 2)", "PC + Offset*4", "$ra", "address only"], "answer": 0, "explain": "상위 4비트는 PC에서, 28비트는 주소를 2비트 민 값.", "source": "Ch2-2, 40쪽" },
    { "id": "a2-2-q18", "q": "BEQ $s0,$s1,L: what is the range of L?", "choices": ["–2^15 ≤ L ≤ +2^15–1", "0 ≤ L ≤ 2^16–1", "–2^25 ≤ L ≤ 2^25–1", "–2^31 ≤ L ≤ 2^31–1"], "answer": 0, "explain": "L이 16비트이기 때문이에요.", "source": "Ch2-2, 41쪽" },
    { "id": "a2-2-q19", "q": "What if the J target is out of the 256M block of current PC?", "choices": ["Use JR instruction", "Use BEQ", "Use LUI only", "It is impossible"], "answer": 0, "explain": "JR은 32비트 레지스터 값으로 점프해요. (필기)", "source": "Ch2-2, 41쪽 필기" },
    { "id": "a2-2-q20", "q": "& (bit-wise AND) in C corresponds to which in MIPS?", "choices": ["AND instruction", "Sequence of conditional branch instructions", "SLT", "JR"], "answer": 0, "explain": "&&는 조건 분기 명령어의 나열에 대응해요.", "source": "Ch2-2, 42쪽" },
    { "id": "a2-2-q21", "q": "$s0 = 0x12345678. andi $t0, $s0, 0x00FF → $t0 = ?", "answers": ["0x00000078", "0x78", "00000078"], "explain": "마스크의 1인 자리(하위 8비트)만 남아요.", "source": "Week 6 Exercise 2" },
    { "id": "a2-2-q22", "q": "lw $s1,0($t0) / addi $s0,$s0,1 / sw $s1,0($t1) / addi $s0,$s0,1 : How many memory accesses to read/write data?", "answers": ["2"], "explain": "lw 1번 + sw 1번. 명령어 fetch는 4번이에요.", "source": "Week 4 Exercise 5" },
    { "id": "a2-2-q23", "q": "R1=12, M[24]=28. After 'lw R3, 12(R1)', R3 = ?", "answers": ["28"], "explain": "주소 12 + 12 = 24 → M[24] = 28.", "source": "Week 4 Exercise 4" },
    { "id": "a2-2-q24", "q": "LOOP: slt / beq / addi / addi / j LOOP. $t1 starts at positive N. How many instructions are executed?", "answers": ["5N+2", "5N + 2"], "explain": "한 바퀴 5개 × N + 마지막 slt, beq 2개.", "source": "HW3 5번" },
    { "id": "a2-2-q25", "q": "Why has there been a move to RISC machines away from complex instruction machines?", "choices": ["Memories became cheaper and caches advanced, so RISC can work around longer instruction sequences", "RISC uses fewer instructions per program", "CISC needs less hardware", "RISC has more opcode bits"], "answer": 0, "explain": "CISC는 하드웨어가 많고 지연·CPI가 커질 수 있어요.", "source": "Week 4 Exercise 7" }
  ]
});
