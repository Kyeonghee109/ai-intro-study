addSession({
  "week": 3,
  "session": "3",
  "kind": "강의",
  "lecturer": "",
  "title": "Arithmetic for Computers",
  "intro": "컴퓨터의 산술을 배워요. 정수 덧셈·뺄셈과 오버플로우, 덧셈과 시프트로 하는 곱셈, 뺄셈과 시프트로 하는 나눗셈, IEEE 754 부동소수점 표현을 정리했어요. 7주차 연습문제(Exercise 4~7)도 함께 넣었어요. 중간고사(10/22) 범위 마지막 장이에요.",
  "sources": [
    {
      "index": "01",
      "title": "Chapter 3 Arithmetic for Computers (47쪽, 손필기 포함)",
      "file": "3ch3_up_261015_010328.pdf",
      "path": "computer-arch/materials/필기/3ch3_up_261015_010328.pdf"
    },
    {
      "index": "02",
      "title": "Week 7 수업 연습문제 (16쪽, 손필기 포함)",
      "file": "week_7_up_261015_161311.pdf",
      "path": "computer-arch/materials/필기/week_7_up_261015_161311.pdf"
    }
  ],
  "groups": [
    {
      "id": "g-add",
      "title": "덧셈·뺄셈과 오버플로우"
    },
    {
      "id": "g-mul",
      "title": "곱셈"
    },
    {
      "id": "g-div",
      "title": "나눗셈"
    },
    {
      "id": "g-fp",
      "title": "부동소수점 (IEEE 754)"
    },
    {
      "id": "g-ex",
      "title": "7주차 연습문제"
    }
  ],
  "sections": [
    {
      "id": "int-add",
      "group": "g-add",
      "title": "정수 덧셈과 뺄셈",
      "definition": "뺄셈은 두 번째 피연산자의 부호를 바꿔서 더하는 거예요. 결과가 범위를 넘으면 오버플로우예요.",
      "formula": {
        "ko": "7 − 6 = 7 + (−6)",
        "en": "Add negation of second operand"
      },
      "table": {
        "head": [
          "경우",
          "오버플로우 조건"
        ],
        "rows": [
          [
            "양수 + 음수",
            "오버플로우 없음"
          ],
          [
            "양수 + 양수",
            "결과 부호가 1이면 오버플로우"
          ],
          [
            "음수 + 음수",
            "결과 부호가 0이면 오버플로우"
          ],
          [
            "같은 부호끼리 빼기",
            "오버플로우 없음"
          ],
          [
            "음수 − 양수",
            "결과 부호가 0이면 오버플로우"
          ],
          [
            "양수 − 음수",
            "결과 부호가 1이면 오버플로우"
          ]
        ]
      },
      "points": [
        "오버플로우는 값이 부호에 영향을 줄 때 생겨요."
      ],
      "keyterms": [
        {
          "en": "Overflow",
          "ko": "오버플로우"
        },
        {
          "en": "negation",
          "ko": "부호 반전"
        }
      ],
      "source": "Ch3, 4~6쪽",
      "example": {
        "title": "4비트로 직접 해 보기",
        "table": {
          "head": [
            "계산",
            "2진수 덧셈",
            "결과",
            "오버플로우?"
          ],
          "rows": [
            [
              "7 − 6 = 7 + (−6)",
              "0111 + 1010 (−6 = 0110 반전 1001 +1)",
              "1 0001 → 맨 앞 올림 버림 → 0001 = 1",
              "없음 (양수 + 음수)"
            ],
            [
              "7 + 1",
              "0111 + 0001",
              "1000 = −8 ❌",
              "있음: 양수 + 양수인데 부호 비트가 1"
            ],
            [
              "−8 + (−1)",
              "1000 + 1111",
              "1 0111 → 0111 = 7 ❌",
              "있음: 음수 + 음수인데 부호 비트가 0"
            ]
          ]
        },
        "points": [
          "4비트 부호 있는 수는 −8 ~ 7까지만 표현돼요. 이 범위를 넘으면 부호 비트가 뒤집혀서 오버플로우예요.",
          "맨 앞에서 넘친 올림(carry)을 버리는 것은 오버플로우가 아니에요. 부호가 이상해지는 게 오버플로우예요."
        ]
      }
    },
    {
      "id": "deal-ovf",
      "group": "g-add",
      "title": "오버플로우 다루기",
      "definition": "C 같은 언어는 오버플로우를 무시하고, Ada·Fortran 같은 언어는 예외를 일으켜요.",
      "table": {
        "head": [
          "언어",
          "처리",
          "MIPS"
        ],
        "rows": [
          [
            "C",
            "오버플로우 무시",
            "addu, addiu, subu (부호 없음, 무시)"
          ],
          [
            "Ada, Fortran",
            "예외 발생 → 예외 처리기 호출",
            "add, sub 등"
          ]
        ]
      },
      "keyterms": [
        {
          "en": "exception handler",
          "ko": "예외 처리기"
        },
        {
          "en": "addu (add unsigned)",
          "ko": "부호 없는 덧셈"
        }
      ],
      "source": "Ch3, 7쪽"
    },
    {
      "id": "ovf-circuit",
      "group": "g-add",
      "title": "오버플로우 검사 회로",
      "definition": "맨 앞 비트(부호 비트)에 들어오는 캐리(Cin)와 나가는 캐리(Cout)가 다르면 오버플로우예요. (필기)",
      "formula": {
        "ko": "V = Cin ⊕ Cout (필기)",
        "en": "Build the logic circuit that checks overflow."
      },
      "table": {
        "head": [
          "Cin",
          "Cout",
          "V (오버플로우)"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "0",
            "1",
            "1"
          ],
          [
            "1",
            "0",
            "1"
          ],
          [
            "1",
            "1",
            "0"
          ]
        ]
      },
      "points": [
        "필기: A=0, B=0, S=1 (양수+양수 → 음수)과 A=1, B=1, S=0 (음수+음수 → 양수)이 오버플로우 줄이에요."
      ],
      "keyterms": [
        {
          "en": "carry in",
          "ko": "들어오는 캐리"
        },
        {
          "en": "carry out",
          "ko": "나가는 캐리"
        }
      ],
      "source": "Ch3, 8쪽 필기"
    },
    {
      "id": "mul-basic",
      "group": "g-mul",
      "title": "곱셈 = 덧셈 + 시프트",
      "definition": "ALU에 곱셈 기능이 없어도, 2진수 곱셈은 덧셈과 시프트만으로 할 수 있어요.",
      "points": [
        "승수 비트가 0이면 더하지 않고 시프트만 해요.",
        "승수 비트가 1이면 피승수를 더하고 시프트해요.",
        "진리표로 곱셈기를 만들 수도 있어요(논리설계 방식)."
      ],
      "example": {
        "title": "0010 × 1001 (= 2 × 9)",
        "table": {
          "head": [
            "승수 1001의 자리",
            "비트",
            "할 일",
            "결과"
          ],
          "rows": [
            [
              "0번째 (맨 오른쪽)",
              "1",
              "0010을 그대로 (0칸 시프트)",
              "00010 (2)"
            ],
            [
              "1번째",
              "0",
              "건너뜀",
              "—"
            ],
            [
              "2번째",
              "0",
              "건너뜀",
              "—"
            ],
            [
              "3번째 (맨 왼쪽)",
              "1",
              "0010을 왼쪽 3칸 시프트",
              "10000 (16)"
            ],
            [
              "합계",
              "",
              "00010 + 10000",
              "10010 (18) ✅"
            ]
          ]
        },
        "points": [
          "핵심: 왼쪽 1칸 시프트 = ×2, n칸 = ×2ⁿ",
          "1001 = 8 + 1 이니까 2 × 9 = (2 × 8) + (2 × 1) → 3칸 시프트한 값 + 원래 값",
          "승수에서 1인 자리만 시프트해서 더하면 끝이에요."
        ]
      },
      "keyterms": [
        {
          "en": "multiplicand",
          "ko": "피승수"
        },
        {
          "en": "multiplier",
          "ko": "승수"
        },
        {
          "en": "product",
          "ko": "곱"
        }
      ],
      "source": "Ch3, 10~14쪽"
    },
    {
      "id": "mul-hw",
      "group": "g-mul",
      "title": "곱셈 하드웨어 3가지 버전",
      "figure": {
        "src": "img/mul-hw-versions.svg",
        "alt": "곱셈 하드웨어 버전 1, 2, 최종의 레지스터 크기와 시프트 방향 비교 (4비트로 줄여 그림)"
      },
      "definition": "곱셈 결과는 셋 다 같아요. 기계를 만드는 방법만 다르고, 뒤 버전일수록 부품을 줄여 더 작게 만들어요.",
      "points": [
        "손으로 곱셈하면 줄이 내려갈 때마다 한 칸씩 왼쪽으로 밀려서 적혀요. 버전 1이 이걸 그대로 따라 해요.",
        "버전 1: 피승수를 매번 왼쪽으로 1칸 밀고, 승수 비트가 1이면 곱에 더해요. 피승수가 계속 밀려나서 64칸 레지스터와 64비트 덧셈기가 필요해요.",
        "버전 2: '피승수를 왼쪽으로 밀기'와 '곱을 오른쪽으로 밀기'는 서로 위치 차이가 똑같아요. 그래서 피승수는 가만히 두고 곱을 오른쪽으로 밀어요. 덧셈은 곱의 왼쪽 절반에서만 일어나서 32비트 덧셈기면 충분해요.",
        "최종 버전: 곱이 오른쪽으로 밀릴 때마다 승수 비트는 하나씩 다 써서 없어져요. 그래서 곱 레지스터의 비어 있는 오른쪽 절반에 승수를 넣어 레지스터 하나를 아껴요.",
        "시험용 한 줄: 버전 1 피승수 왼쪽 시프트(64비트 덧셈기) → 버전 2 피승수 고정·곱 오른쪽 시프트(32비트 덧셈기) → 최종 승수를 곱 레지스터 오른쪽 절반에 저장."
      ],
      "table": {
        "head": [
          "버전",
          "피승수",
          "곱",
          "덧셈기",
          "한 줄 요약"
        ],
        "rows": [
          [
            "1",
            "왼쪽으로 이동 (64비트)",
            "가만히 (64비트)",
            "64비트",
            "손계산 그대로"
          ],
          [
            "2",
            "가만히 (32비트)",
            "오른쪽으로 이동",
            "32비트",
            "대신 곱을 밀어서 덧셈기를 줄임"
          ],
          [
            "최종",
            "가만히 (32비트)",
            "오른쪽으로 이동 (64비트)",
            "32비트",
            "승수를 곱의 오른쪽 절반에 넣음"
          ]
        ]
      },
      "example": {
        "title": "최종 버전으로 0010 × 1001 (= 2 × 9)",
        "points": [
          "곱 레지스터 = 왼쪽 절반(곱이 쌓이는 곳) + 오른쪽 절반(승수 1001).",
          "규칙: 맨 오른쪽 비트가 1이면 왼쪽 절반에 0010을 더하고 오른쪽 1칸 시프트, 0이면 시프트만 해요. 승수 비트 수(4번)만큼 반복해요."
        ],
        "table": {
          "head": [
            "곱 레지스터",
            "맨 오른쪽 비트",
            "동작"
          ],
          "rows": [
            [
              "0000 1001",
              "",
              "시작: 왼쪽은 0, 오른쪽은 승수"
            ],
            [
              "0010 1001",
              "1",
              "1이니까 왼쪽에 0010 더하기"
            ],
            [
              "0001 0100",
              "",
              "오른쪽 1칸 시프트 (1번째 끝)"
            ],
            [
              "0000 1010",
              "0",
              "0이니까 시프트만 (2번째 끝)"
            ],
            [
              "0000 0101",
              "0",
              "0이니까 시프트만 (3번째 끝)"
            ],
            [
              "0010 0101",
              "1",
              "1이니까 왼쪽에 0010 더하기"
            ],
            [
              "0001 0010",
              "",
              "오른쪽 1칸 시프트 (4번째 끝) → 0001 0010 = 18 ✅"
            ]
          ]
        }
      },
      "keyterms": [
        {
          "en": "Shift left",
          "ko": "왼쪽 시프트"
        },
        {
          "en": "Shift right",
          "ko": "오른쪽 시프트"
        },
        {
          "en": "Control test",
          "ko": "제어 검사"
        }
      ],
      "source": "Ch3, 15~19쪽"
    },
    {
      "id": "mul-neg",
      "group": "g-mul",
      "title": "음수 곱셈",
      "definition": "음수는 먼저 양수로 바꿔서 부호 없는 곱셈을 하고, 두 수의 부호가 다르면 결과의 부호를 바꿔요.",
      "points": [
        "순서: ① 부호 확인 → ② 음수는 2의 보수로 양수로 바꾸기 → ③ 부호 없는 곱셈(시프트 + 덧셈) → ④ 두 부호가 다르면 결과를 다시 2의 보수로 반전",
        "2의 보수 = 비트를 모두 뒤집고 1 더하기",
        "또는 부스 알고리즘을 써요."
      ],
      "example": {
        "title": "(−7) × 3 단계별 풀이 (4비트 → 결과 8비트)",
        "table": {
          "head": [
            "단계",
            "한 일",
            "2진수",
            "10진수"
          ],
          "rows": [
            [
              "1. 부호 확인",
              "−7은 음수, 3은 양수 → 부호가 달라요 → 결과는 음수",
              "",
              ""
            ],
            [
              "2. 음수를 양수로",
              "−7 = 1001 → 비트 반전 0110 → +1",
              "0111",
              "7"
            ],
            [
              "3. 승수 0번째 비트 = 1",
              "0111을 그대로 더하기",
              "0000 0111",
              "7"
            ],
            [
              "4. 승수 1번째 비트 = 1",
              "0111을 왼쪽 1칸 시프트해서 더하기 (0111 + 01110)",
              "0001 0101",
              "21"
            ],
            [
              "5. 승수 2·3번째 비트 = 0",
              "더할 것 없음",
              "0001 0101",
              "21"
            ],
            [
              "6. 부호가 달랐으니 결과 반전",
              "비트 반전 1110 1010 → +1",
              "1110 1011",
              "−21 ✅"
            ]
          ]
        },
        "points": [
          "승수 3 = 0011이라서 1인 자리(0번째, 1번째)만 시프트해서 더해요.",
          "검산: 1110 1011을 다시 반전하면 0001 0101 = 21 → 그러니까 −21이 맞아요.",
          "연습문제 10101 × 01110 (21 × 14): 승수 01110의 1인 자리는 1·2·3번째 → 10101을 1칸(42), 2칸(84), 3칸(168) 시프트해서 더하면 42 + 84 + 168 = 294 = 01 0010 0110."
        ]
      },
      "keyterms": [
        {
          "en": "Booth algorithm",
          "ko": "부스 알고리즘"
        },
        {
          "en": "unsigned multiplication",
          "ko": "부호 없는 곱셈"
        }
      ],
      "source": "Ch3, 20~23쪽"
    },
    {
      "id": "div-basic",
      "group": "g-div",
      "title": "나눗셈 알고리즘",
      "definition": "나눗셈은 초등학교 나눗셈처럼 뺄셈(덧셈기)과 시프트 레지스터로 해요.",
      "formula": {
        "ko": "부분 나머지 ≥ 제수 → 몫 비트 1, 나머지 = 나머지 − 제수 / 아니면 몫 비트 0 → 다음 피제수 비트 내리기",
        "en": "If partial remainder ≥ divisor then quotient bit = 1; remainder = remainder – divisor; else quotient bit = 0; shift down next dividend bit"
      },
      "points": [
        "개선된 하드웨어: 32비트 제수 레지스터, 32비트 ALU, 64비트 나머지 레지스터(몫은 오른쪽 절반)",
        "나머지 레지스터를 왼쪽 시프트해요."
      ],
      "example": {
        "title": "1001010 ÷ 1000 (= 74 ÷ 8) 손 나눗셈처럼",
        "table": {
          "head": [
            "내린 수",
            "제수 1000(8)보다 큰가?",
            "몫 비트",
            "남은 수"
          ],
          "rows": [
            [
              "1001 (9)",
              "크다 → 빼기",
              "1",
              "1001 − 1000 = 1"
            ],
            [
              "1 + 다음 비트 0 → 10 (2)",
              "작다",
              "0",
              "10"
            ],
            [
              "10 + 다음 비트 1 → 101 (5)",
              "작다",
              "0",
              "101"
            ],
            [
              "101 + 다음 비트 0 → 1010 (10)",
              "크다 → 빼기",
              "1",
              "1010 − 1000 = 10"
            ]
          ]
        },
        "points": [
          "앞의 1, 10, 100은 1000보다 작아서 몫이 생기지 않아요. 처음으로 1001에서 몫 1이 나와요.",
          "몫 비트를 위에서부터 이어 붙이면 1001 (9), 마지막 남은 수 10 (2)가 나머지예요.",
          "검산: 8 × 9 + 2 = 74 ✅"
        ]
      },
      "keyterms": [
        {
          "en": "Dividend",
          "ko": "피제수"
        },
        {
          "en": "Divisor",
          "ko": "제수"
        },
        {
          "en": "Quotient",
          "ko": "몫"
        },
        {
          "en": "Remainder",
          "ko": "나머지"
        }
      ],
      "source": "Ch3, 25~28쪽"
    },
    {
      "id": "div-7-3",
      "group": "g-div",
      "title": "예: 7 ÷ 3 단계별 (4비트)",
      "definition": "나머지 레지스터 왼쪽 절반에서 제수를 빼 봐요. 음수가 되면 '못 뺀다'는 뜻이라 다시 더해서 되돌리고(Restore) 몫 0, 양수면 몫 1을 오른쪽 끝에 넣어요. 그다음 왼쪽으로 1칸 시프트(SLL)해요.",
      "example": {
        "title": "7 ÷ 3 (0111 ÷ 0011) 단계별",
        "points": [
          "나머지 레지스터 8비트 = 왼쪽 절반(빼기 하는 곳) + 오른쪽 절반(피제수 → 나중엔 몫).",
          "시작할 때 한 번 SLL하고, 그다음 '빼기 → 판단 → 몫 넣기 → SLL'을 4번 해요. 마지막 4번째는 SLL하지 않아요."
        ],
        "table": {
          "head": [
            "단계",
            "왼쪽 절반 − 0011",
            "음수/양수",
            "몫 비트",
            "레지스터 (다음 상태)"
          ],
          "rows": [
            [
              "시작",
              "",
              "",
              "",
              "0000 0111"
            ],
            [
              "처음 SLL",
              "",
              "",
              "",
              "0000 1110"
            ],
            [
              "1번째",
              "0000 − 0011 = 1101",
              "음수 → 복원",
              "0",
              "0000 1110 → SLL → 0001 1100"
            ],
            [
              "2번째",
              "0001 − 0011 = 1110",
              "음수 → 복원",
              "0",
              "0001 1100 → SLL → 0011 1000"
            ],
            [
              "3번째",
              "0011 − 0011 = 0000",
              "양수(0) → 그대로",
              "1",
              "0000 1001 → SLL → 0001 0010"
            ],
            [
              "4번째",
              "0001 − 0011 = 1110",
              "음수 → 복원",
              "0",
              "0001 0010 (끝, SLL 안 함)"
            ],
            [
              "결과",
              "",
              "",
              "",
              "왼쪽 0001 = 나머지 1, 오른쪽 0010 = 몫 2 ✅ (3 × 2 + 1 = 7)"
            ]
          ]
        }
      },
      "keyterms": [
        {
          "en": "SLL",
          "ko": "왼쪽 논리 시프트"
        },
        {
          "en": "Restore",
          "ko": "복원"
        }
      ],
      "source": "Week 7, 15쪽"
    },
    {
      "id": "div-sign",
      "group": "g-div",
      "title": "부호 있는 나눗셈",
      "definition": "몫과 나머지의 크기는 피제수·제수의 크기로, 부호는 피제수·제수의 부호로 정해져요.",
      "table": {
        "head": [
          "계산",
          "몫 Q",
          "나머지 R"
        ],
        "rows": [
          [
            "+7 / 2",
            "3",
            "1"
          ],
          [
            "−7 / 2",
            "−3",
            "−1"
          ],
          [
            "+7 / −2",
            "−3",
            "1"
          ],
          [
            "−7 / −2",
            "3",
            "−1"
          ]
        ]
      },
      "points": [
        "표를 보면 나머지 부호는 피제수 부호를 따라요."
      ],
      "keyterms": [
        {
          "en": "Division of signed number",
          "ko": "부호 있는 나눗셈"
        }
      ],
      "source": "Ch3, 29~30쪽",
      "example": {
        "title": "−7 ÷ 2 푸는 순서",
        "table": {
          "head": [
            "단계",
            "한 일",
            "결과"
          ],
          "rows": [
            [
              "1",
              "부호 떼고 크기만 나누기: 7 ÷ 2",
              "몫 3, 나머지 1"
            ],
            [
              "2",
              "몫 부호: 피제수(−)와 제수(+)가 다름 → 음수",
              "몫 −3"
            ],
            [
              "3",
              "나머지 부호: 피제수(−7) 부호를 따라감",
              "나머지 −1"
            ],
            [
              "검산",
              "피제수 = 몫 × 제수 + 나머지",
              "−3 × 2 + (−1) = −7 ✅"
            ]
          ]
        },
        "points": [
          "몫 부호 = 곱셈처럼 두 부호가 다르면 음수, 같으면 양수.",
          "나머지 부호 = 항상 피제수 부호. (+7 ÷ −2 는 나머지 +1, −7 ÷ −2 는 나머지 −1)"
        ]
      }
    },
    {
      "id": "fp-sci",
      "group": "g-fp",
      "title": "부동소수점과 정규화 과학 표기법",
      "definition": "분수, 아주 작은 수, 아주 큰 수를 나타내려고 부동소수점 표현을 써요.",
      "formula": {
        "ko": "(−1)^부호 × 유효숫자 × 2^지수, 2진수는 1.yyyy × 2^z",
        "en": "(–1)^sign x significand x 2^exponent"
      },
      "points": [
        "정규화 과학 표기법: 1 ≤ 계수 < 10 (예: 3.14 × 10^0)",
        "유효숫자 비트가 많으면 정확도가, 지수 비트가 많으면 범위가 올라가요. (필기: 더 정확, 더 넓은 범위)",
        "필기: 부호 0 = 양수, 1 = 음수"
      ],
      "keyterms": [
        {
          "en": "Normalized scientific notation",
          "ko": "정규화 과학 표기법"
        },
        {
          "en": "significand",
          "ko": "유효숫자"
        },
        {
          "en": "accuracy",
          "ko": "정확도"
        },
        {
          "en": "range",
          "ko": "범위"
        }
      ],
      "source": "Ch3, 33~35쪽"
    },
    {
      "id": "ieee754",
      "group": "g-fp",
      "title": "IEEE 754 표준",
      "definition": "부호(S) 1비트, 지수, 소수부(fraction)로 나눠요. 소수부 앞의 1은 숨겨져 있고, 지수는 바이어스를 더해 저장해요.",
      "formula": {
        "ko": "값 = (−1)^S × (1 + 소수부) × 2^(지수 − 바이어스)",
        "en": "(–1)^sign X (1+fraction) X 2^(exponent – bias)"
      },
      "table": {
        "head": [
          "",
          "전체",
          "지수",
          "소수부",
          "바이어스"
        ],
        "rows": [
          [
            "단정밀도 (float, 필기)",
            "32비트",
            "8비트",
            "23비트",
            "127"
          ],
          [
            "배정밀도 (double, 필기)",
            "64비트",
            "11비트",
            "52비트",
            "1023"
          ]
        ]
      },
      "points": [
        "지수를 바이어스로 저장하는 이유: 정렬을 쉽게 하려고요.",
        "필기: 배정밀도는 더 크고 정확한 숫자를 표현할 수 있어요."
      ],
      "example": {
        "title": "−0.75",
        "points": [
          "−0.75 = −3/4 = −0.11(2) = −1.1 × 2^−1",
          "지수 = −1 + 127 = 126 = 01111110",
          "1 01111110 10000000000000000000000"
        ]
      },
      "keyterms": [
        {
          "en": "IEEE 754 floating point standard",
          "ko": "IEEE 754 부동소수점 표준"
        },
        {
          "en": "single precision",
          "ko": "단정밀도"
        },
        {
          "en": "double precision",
          "ko": "배정밀도"
        },
        {
          "en": "bias",
          "ko": "바이어스"
        }
      ],
      "source": "Ch3, 35~37쪽"
    },
    {
      "id": "fp-range",
      "group": "g-fp",
      "title": "표현 범위와 정밀도",
      "definition": "지수가 모두 0이거나 모두 1인 값은 예약돼 있어서, 일반 수의 지수는 1 ~ 254(단정밀도)예요.",
      "table": {
        "head": [
          "",
          "가장 작은 값",
          "가장 큰 값",
          "정밀도"
        ],
        "rows": [
          [
            "단정밀도",
            "지수 00000001 → 1 − 127 = −126, ±1.0 × 2^−126 ≈ ±1.2 × 10^−38",
            "지수 11111110 → 254 − 127 = +127, ±2.0 × 2^127 ≈ ±3.4 × 10^38",
            "약 2^−23 ≈ 십진 6자리"
          ],
          [
            "배정밀도",
            "1 − 1023 = −1022, ±1.0 × 2^−1022 ≈ ±2.2 × 10^−308",
            "2046 − 1023 = +1023, ±2.0 × 2^1023 ≈ ±1.8 × 10^308",
            "약 2^−52 ≈ 십진 16자리"
          ]
        ]
      },
      "points": [
        "23 × log10 2 ≈ 23 × 0.3 ≈ 6, 52 × 0.3 ≈ 16"
      ],
      "keyterms": [
        {
          "en": "Relative precision",
          "ko": "상대 정밀도"
        },
        {
          "en": "reserved",
          "ko": "예약됨"
        }
      ],
      "source": "Ch3, 38~39쪽, 41쪽"
    },
    {
      "id": "fp-special",
      "group": "g-fp",
      "title": "0, 언더플로우, 비정규화 수, 무한대, NaN",
      "definition": "지수 필드가 모두 0이거나 모두 1이면 특별한 값을 나타내요.",
      "table": {
        "head": [
          "지수 (단/배)",
          "소수부",
          "나타내는 것"
        ],
        "rows": [
          [
            "0 / 0",
            "0",
            "0"
          ],
          [
            "0 / 0",
            "0 아님",
            "± 비정규화 수"
          ],
          [
            "1~254 / 1~2046",
            "아무거나",
            "± 부동소수점 수"
          ],
          [
            "255 / 2047",
            "0",
            "± 무한대"
          ],
          [
            "255 / 2047",
            "0 아님",
            "NaN (숫자가 아님, 필기)"
          ]
        ]
      },
      "points": [
        "비트가 모두 0이면 1.0 × 2^−127이 아니라 0이에요. (필기: 숫자는 0인걸로)",
        "오버플로우 말고 언더플로우도 있어요. 예: 0.5 × 2^−129",
        "비정규화 수: 숨은 비트가 0이라 (−1)^S × (0 + 소수부) × 2^−바이어스, 정규화 수보다 더 작은 수도 표현해요. (필기)"
      ],
      "example": {
        "title": "기억할 점",
        "points": [
          "소수부도 0인 비정규화 수는 ±0.0 → 0의 표현이 두 개예요.",
          "NaN은 잘못되거나 정의되지 않은 결과예요. 예: 0.0 / 0.0"
        ]
      },
      "keyterms": [
        {
          "en": "underflow",
          "ko": "언더플로우"
        },
        {
          "en": "Denormalized Numbers",
          "ko": "비정규화 수"
        },
        {
          "en": "Infinity",
          "ko": "무한대"
        },
        {
          "en": "Not-a-Number (NaN)",
          "ko": "숫자 아님"
        }
      ],
      "source": "Ch3, 40쪽, 44~46쪽"
    },
    {
      "id": "fp-ex",
      "group": "g-fp",
      "title": "부동소수점 예제 2개",
      "definition": "10진수 → IEEE 754는 2진 정규화 후 부호·지수(+바이어스)·소수부를 채우고, 반대는 거꾸로 풀어요.",
      "example": {
        "title": "Ch3 예제 (필기)",
        "table": {
          "head": [
            "문제",
            "풀이"
          ],
          "rows": [
            [
              "−3.3125 표현",
              "−11.0101(2) = −1.10101 × 2^1 → S = 1, 소수부 10101 00…0, 지수 단정밀도 1 + 127 = 128 = 10000000, 배정밀도 1 + 1023 = 1024 = 10000000000"
            ],
            [
              "1 10000001 01000…00 해석",
              "S = 1, 지수 10000001 = 129, 소수부 01 → (−1) × 1.01(2) × 2^(129−127) = −1.25 × 4 = −5.0"
            ]
          ]
        },
        "points": [
          "필기: 0.3125 = 0.0101(2) (0.25 + 0.0625)",
          "단정밀도 결과: 1 10000000 10101000…0 (내 정리)"
        ]
      },
      "keyterms": [
        {
          "en": "Fraction",
          "ko": "소수부"
        },
        {
          "en": "Exponent",
          "ko": "지수"
        }
      ],
      "source": "Ch3, 42~43쪽 필기"
    },
    {
      "id": "w7-ex4",
      "group": "g-ex",
      "title": "Exercise 4: 같은 32비트를 4가지로 해석",
      "definition": "0000 0000 0001 0000 0101 0001 0000 0000 (= 0x00105100)을 정수, ASCII, MIPS 명령어, IEEE 754로 읽어요.",
      "table": {
        "head": [
          "해석",
          "답"
        ],
        "rows": [
          [
            "(a) 2의 보수 정수",
            "2^20 + 2^14 + 2^12 + 2^8 = 1,069,312 (필기 식, 값은 내 계산)"
          ],
          [
            "(b) ASCII 4글자",
            "0x00, 0x10, 0x51, 0x00 → NUL, DLE, 'Q', NUL (필기: 0x00 = null)"
          ],
          [
            "(c) MIPS 명령어",
            "opcode 0 → R형: 0 | 0 | 16 | 10 | 4 | 0 → sll $t2, $s0, 4 (필기)"
          ],
          [
            "(d) IEEE 754 단정밀도",
            "0 00000000 00100000101000100000000 → 지수가 0이라 비정규화 수: +0.00100000101000100 × 2^−126 (필기: 2^−127 아님)"
          ]
        ]
      },
      "points": [
        "R형 필드: op | rs | rt | rd | shamt | funct (필기)"
      ],
      "keyterms": [
        {
          "en": "two's complemented number",
          "ko": "2의 보수 수"
        },
        {
          "en": "ASCII",
          "ko": "아스키 코드"
        }
      ],
      "source": "Week 7, 9~12쪽 필기"
    },
    {
      "id": "w7-ex567",
      "group": "g-ex",
      "title": "Exercise 5~7: 곱셈, 나눗셈, 2진 소수",
      "definition": "5비트 곱셈, 4비트 2의 보수 나눗셈, 10진 소수를 2진수로 바꾸는 문제예요.",
      "table": {
        "head": [
          "문제",
          "답"
        ],
        "rows": [
          [
            "Ex5: M = 10011(19), Q = 11110(30) 5비트 곱셈",
            "19 × 30 = 570 = 10 0011 1010 (내 계산, 단계는 최종 버전 곱셈기로 풀기)"
          ],
          [
            "Ex6: 7 ÷ (−3), 4비트 2의 보수",
            "7 ÷ 3 → Q = 0010, R = 0001 → 부호 적용: R = 0001 (1), Q = 1110 (−2)"
          ],
          [
            "Ex7: 0.625 → 2진수",
            "0.625 × 2 = 1.25 → 1, 0.25 × 2 = 0.5 → 0, 0.5 × 2 = 1 → 1 → 0.101 (필기)"
          ]
        ]
      },
      "points": [
        "10진 소수 → 2진: 2를 곱해 나온 정수 부분을 위에서부터 차례로 적어요. (필기)"
      ],
      "keyterms": [
        {
          "en": "M (Multiplicand)",
          "ko": "피승수"
        },
        {
          "en": "Q (Multiplier)",
          "ko": "승수"
        }
      ],
      "source": "Week 7, 13~16쪽"
    }
  ],
  "terms": [
    {
      "en": "Overflow",
      "ko": "오버플로우",
      "def": "결과가 표현 범위를 넘는 것이에요.",
      "def_en": "Overflow if result out of range",
      "source": "Ch3, 4쪽"
    },
    {
      "en": "exception handler",
      "ko": "예외 처리기",
      "def": "오버플로우가 나면 호출되는 처리 루틴이에요.",
      "def_en": "On overflow, invoke exception handler",
      "source": "Ch3, 7쪽"
    },
    {
      "en": "multiplicand",
      "ko": "피승수",
      "def": "곱해지는 수예요.",
      "def_en": "",
      "source": "Ch3, 13쪽"
    },
    {
      "en": "multiplier",
      "ko": "승수",
      "def": "곱하는 수. 비트가 1이면 피승수를 더하고 시프트해요.",
      "def_en": "Check multiplier bit: if 0, don't add, shift; if 1, add multiplicand and shift",
      "source": "Ch3, 13쪽"
    },
    {
      "en": "Booth algorithm",
      "ko": "부스 알고리즘",
      "def": "음수 곱셈에 쓰는 다른 방법이에요.",
      "def_en": "",
      "source": "Ch3, 21쪽"
    },
    {
      "en": "Divisor",
      "ko": "제수",
      "def": "나누는 수예요.",
      "def_en": "",
      "source": "Ch3, 26쪽"
    },
    {
      "en": "Dividend",
      "ko": "피제수",
      "def": "나눠지는 수예요.",
      "def_en": "",
      "source": "Ch3, 26쪽"
    },
    {
      "en": "Quotient",
      "ko": "몫",
      "def": "부분 나머지 ≥ 제수면 몫 비트가 1이에요.",
      "def_en": "",
      "source": "Ch3, 27쪽"
    },
    {
      "en": "Remainder",
      "ko": "나머지",
      "def": "나누고 남은 값. 부호는 피제수를 따라요.",
      "def_en": "",
      "source": "Ch3, 27~29쪽"
    },
    {
      "en": "Floating Point Number",
      "ko": "부동소수점 수",
      "def": "분수, 아주 작은 수, 아주 큰 수를 나타내는 방법이에요.",
      "def_en": "We need a way to represent numbers with fractions, very small numbers, very large numbers",
      "source": "Ch3, 33쪽"
    },
    {
      "en": "Normalized scientific notation",
      "ko": "정규화 과학 표기법",
      "def": "계수가 1 이상 10 미만인 과학 표기법. 2진수는 1.yyyy × 2^z예요.",
      "def_en": "1 ≤ coefficient < 10",
      "source": "Ch3, 34쪽"
    },
    {
      "en": "single precision",
      "ko": "단정밀도",
      "def": "32비트: 부호 1, 지수 8, 소수부 23비트예요.",
      "def_en": "single precision (32bits): 8 bit exponent, 23 bit fraction",
      "source": "Ch3, 35쪽"
    },
    {
      "en": "double precision",
      "ko": "배정밀도",
      "def": "64비트: 부호 1, 지수 11, 소수부 52비트예요.",
      "def_en": "double precision (64bits): 11 bit exponent, 52 bit fraction",
      "source": "Ch3, 35쪽"
    },
    {
      "en": "bias",
      "ko": "바이어스",
      "def": "정렬을 쉽게 하려고 지수에 더하는 값. 단정밀도 127, 배정밀도 1023이에요.",
      "def_en": "Exponent is \"biased\" to make sorting easier",
      "source": "Ch3, 36쪽"
    },
    {
      "en": "underflow",
      "ko": "언더플로우",
      "def": "너무 작아서 표현할 수 없는 경우예요. 예: 0.5 × 2^−129",
      "def_en": "In addition to overflow there is \"underflow\"",
      "source": "Ch3, 40쪽"
    },
    {
      "en": "Denormalized Numbers",
      "ko": "비정규화 수",
      "def": "지수가 모두 0이면 숨은 비트가 0이라 정규화 수보다 작은 수를 나타내요.",
      "def_en": "Exponent = 000...0 ⇒ hidden bit is 0",
      "source": "Ch3, 44쪽"
    },
    {
      "en": "Infinity",
      "ko": "무한대",
      "def": "지수 모두 1, 소수부 모두 0이에요.",
      "def_en": "Exponent = 111...1, Fraction = 000...0",
      "source": "Ch3, 45쪽"
    },
    {
      "en": "Not-a-Number (NaN)",
      "ko": "숫자 아님",
      "def": "지수 모두 1, 소수부 0 아님. 잘못되거나 정의되지 않은 결과예요.",
      "def_en": "Indicates illegal or undefined result",
      "source": "Ch3, 45쪽"
    }
  ],
  "check": [
    {
      "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)",
      "items": [
        "(−7) × 3 결과 1110 1011, Ex4 (a) 1,069,312, Ex4 (b) NUL·DLE·Q·NUL, Ex5 570 = 1000111010은 내가 계산한 답이에요. 확인 필요해요.",
        "Ex5는 단계별 표를 자료에서 찾지 못했어요. 최종 버전 곱셈기 순서(Add/Shift)로 직접 풀어 보세요.",
        "−3.3125 필기에서 단정밀도 비트열이 '11000000 0101010…'처럼 보이는데, 계산하면 1 10000000 10101000…이에요. 필기 옆에도 '내 사라지지?' 같은 물음표가 있어요. 확인 필요해요.",
        "Ex6 결과(R = 0001, Q = 1110)는 수업 자료 15쪽 그대로예요."
      ]
    },
    {
      "title": "넣지 않은 것",
      "items": [
        "목차 쪽(3, 9, 24, 31쪽)과 3비트 곱셈 진리표 전체(11쪽)",
        "Week 7 Exercise 1~3(MIPS lw/add 시간, CPUlator 스택, max 함수)과 중간고사 공지: 2장 내용이라 이 차시에는 넣지 않았어요. 중간고사: 10/22(목) 수업 시간, ~Ch.3, 닫힌 책, 전자기기 금지."
      ]
    },
    {
      "title": "사용 안내",
      "items": [
        "퀴즈 문제는 영어, 해설은 한국어예요."
      ]
    }
  ],
  "quiz": [
    {
      "id": "a3-q01",
      "q": "When adding two positive operands, overflow occurs if the result sign is ___.",
      "choices": [
        "0",
        "1",
        "same as the operands",
        "always no overflow"
      ],
      "answer": 1,
      "explain": "양수 + 양수인데 부호가 1(음수)이 되면 오버플로우예요.",
      "source": "Ch3, 4쪽"
    },
    {
      "id": "a3-q02",
      "q": "Adding +ve and –ve operands causes overflow.",
      "choices": [
        "True",
        "False"
      ],
      "answer": 1,
      "explain": "부호가 다른 두 수를 더하면 오버플로우가 안 생겨요.",
      "source": "Ch3, 4쪽"
    },
    {
      "id": "a3-q03",
      "q": "Which MIPS instructions ignore overflow?",
      "choices": [
        "addu, addiu, subu",
        "add, addi, sub",
        "lw, sw",
        "beq, bne"
      ],
      "answer": 0,
      "explain": "u(unsigned)가 붙은 명령어는 오버플로우를 무시해요. C 언어 방식이에요.",
      "source": "Ch3, 7쪽"
    },
    {
      "id": "a3-q04",
      "q": "Overflow detection logic: V = Cin ___ Cout (of the sign bit).",
      "answers": [
        "XOR",
        "⊕",
        "xor",
        "배타적 OR"
      ],
      "explain": "필기: 부호 비트의 Cin과 Cout이 다르면 오버플로우라서 V = Cin ⊕ Cout이에요.",
      "source": "Ch3, 8쪽 필기"
    },
    {
      "id": "a3-q05",
      "q": "In add-and-shift multiplication, if the multiplier bit is 0, what do you do?",
      "choices": [
        "Don't add, shift",
        "Add multiplicand and shift",
        "Subtract multiplicand",
        "Stop"
      ],
      "answer": 0,
      "explain": "승수 비트 0 → 더하지 않고 시프트, 1 → 피승수를 더하고 시프트해요.",
      "source": "Ch3, 13쪽"
    },
    {
      "id": "a3-q06",
      "q": "In the final version of the multiplier, where is the multiplier saved?",
      "choices": [
        "Product register",
        "Multiplicand register",
        "ALU",
        "PC"
      ],
      "answer": 0,
      "explain": "최종 버전은 승수를 곱 레지스터(오른쪽 절반)에 저장해요.",
      "source": "Ch3, 18쪽"
    },
    {
      "id": "a3-q07",
      "q": "Version 2 multiplier: Multiplicand doesn't move and Product shifts ___.",
      "answers": [
        "right",
        "Right",
        "오른쪽"
      ],
      "explain": "버전 2는 피승수가 고정이고 곱 레지스터가 오른쪽으로 시프트해서 공간을 아껴요.",
      "source": "Ch3, 16쪽"
    },
    {
      "id": "a3-q08",
      "q": "10101 X 01110 = ? (decimal)",
      "answers": [
        "294"
      ],
      "explain": "21 × 14 = 294 = 0100100110이에요.",
      "source": "Ch3, 20쪽"
    },
    {
      "id": "a3-q09",
      "q": "To multiply negative numbers: negate, perform unsigned multiplication, then if signs are different ___.",
      "choices": [
        "negate the result",
        "add 1",
        "shift left",
        "do nothing"
      ],
      "answer": 0,
      "explain": "승수와 피승수 부호가 다르면 결과를 부호 반전해요. 또는 부스 알고리즘을 써요.",
      "source": "Ch3, 21쪽"
    },
    {
      "id": "a3-q10",
      "q": "Division algorithm: if partial remainder ≥ divisor, quotient bit = ?",
      "answers": [
        "1"
      ],
      "explain": "나머지 ≥ 제수면 몫 비트 1, 나머지 = 나머지 − 제수예요.",
      "source": "Ch3, 27쪽"
    },
    {
      "id": "a3-q11",
      "q": "-7 / 2 = ? (Q, R)",
      "choices": [
        "Q = -3, R = -1",
        "Q = -3, R = 1",
        "Q = -4, R = 1",
        "Q = 3, R = -1"
      ],
      "answer": 0,
      "explain": "크기는 7/2 = 3 … 1, 부호는 피제수·제수 부호로 정해져서 Q = −3, R = −1이에요.",
      "source": "Ch3, 29쪽"
    },
    {
      "id": "a3-q12",
      "q": "Divide 7 by (-3) in 4-bit 2's complement. What is the quotient?",
      "answers": [
        "1110",
        "-2"
      ],
      "explain": "7 ÷ 3 = 몫 0010, 나머지 0001 → 몫에 부호를 적용해 Q = 1110(−2), R = 0001(1)이에요.",
      "source": "Week 7, 14~15쪽"
    },
    {
      "id": "a3-q13",
      "q": "IEEE 754 single precision uses ___ bit exponent and ___ bit fraction.",
      "choices": [
        "8, 23",
        "11, 52",
        "8, 24",
        "7, 24"
      ],
      "answer": 0,
      "explain": "단정밀도 32비트 = 부호 1 + 지수 8 + 소수부 23이에요. 배정밀도는 11, 52예요.",
      "source": "Ch3, 35쪽"
    },
    {
      "id": "a3-q14",
      "q": "Bias for double precision?",
      "answers": [
        "1023"
      ],
      "explain": "단정밀도 127, 배정밀도 1023이에요.",
      "source": "Ch3, 36쪽"
    },
    {
      "id": "a3-q15",
      "q": "Why is the exponent biased?",
      "choices": [
        "To make sorting easier",
        "To save one bit",
        "To represent NaN",
        "To increase precision"
      ],
      "answer": 0,
      "explain": "Exponent is biased to make sorting easier.",
      "source": "Ch3, 36쪽"
    },
    {
      "id": "a3-q16",
      "q": "More bits for exponent increases ___.",
      "choices": [
        "range",
        "accuracy",
        "speed",
        "sign"
      ],
      "answer": 0,
      "explain": "지수 비트 ↑ → 범위 ↑, 유효숫자 비트 ↑ → 정확도 ↑예요.",
      "source": "Ch3, 35쪽"
    },
    {
      "id": "a3-q17",
      "q": "What decimal number is represented by the single-precision float 1 10000001 01000…00?",
      "answers": [
        "-5.0",
        "-5"
      ],
      "explain": "S = 1, 지수 129 − 127 = 2, (1.01)₂ = 1.25 → −1.25 × 4 = −5.0이에요.",
      "source": "Ch3, 43쪽 필기"
    },
    {
      "id": "a3-q18",
      "q": "IEEE single precision of -0.75?",
      "choices": [
        "1 01111110 1000…0",
        "1 01111111 1100…0",
        "0 01111110 1000…0",
        "1 10000000 1000…0"
      ],
      "answer": 0,
      "explain": "−0.75 = −1.1 × 2^−1 → 지수 −1 + 127 = 126 = 01111110, 소수부 1000…0이에요.",
      "source": "Ch3, 37쪽"
    },
    {
      "id": "a3-q19",
      "q": "Smallest exponent value (normalized) in single precision?",
      "answers": [
        "-126"
      ],
      "explain": "지수 00000001 → 1 − 127 = −126이에요. 00000000과 11111111은 예약돼 있어요.",
      "source": "Ch3, 38쪽"
    },
    {
      "id": "a3-q20",
      "q": "Single precision relative precision is about how many decimal digits?",
      "choices": [
        "6",
        "16",
        "23",
        "3"
      ],
      "answer": 0,
      "explain": "23 × log10 2 ≈ 23 × 0.3 ≈ 6자리예요. 배정밀도는 약 16자리예요.",
      "source": "Ch3, 41쪽"
    },
    {
      "id": "a3-q21",
      "q": "Exponent = 000...0 ⇒ hidden bit is ___.",
      "answers": [
        "0"
      ],
      "explain": "비정규화 수는 숨은 비트가 0이라 (0 + Fraction)이에요. 정규화 수보다 작은 수를 나타내요.",
      "source": "Ch3, 44쪽"
    },
    {
      "id": "a3-q22",
      "q": "Exponent = 111...1, Fraction ≠ 000...0 represents?",
      "choices": [
        "NaN",
        "±Infinity",
        "0",
        "Denormalized number"
      ],
      "answer": 0,
      "explain": "소수부가 0이면 무한대, 0이 아니면 NaN이에요. 예: 0.0 / 0.0",
      "source": "Ch3, 45쪽"
    },
    {
      "id": "a3-q23",
      "q": "If 0000 0000 0001 0000 0101 0001 0000 0000 represents a MIPS instruction, what is it?",
      "choices": [
        "sll $t2, $s0, 4",
        "add $t2, $s0, $a0",
        "srl $s0, $t2, 4",
        "lw $t2, 4($s0)"
      ],
      "answer": 0,
      "explain": "opcode 0, funct 0 → sll. rt = 16($s0), rd = 10($t2), shamt = 4예요. (필기)",
      "source": "Week 7, 9쪽 필기"
    },
    {
      "id": "a3-q24",
      "q": "Convert decimal number 0.625 into binary number.",
      "answers": [
        "0.101",
        ".101"
      ],
      "explain": "0.625×2 = 1.25(1), 0.25×2 = 0.5(0), 0.5×2 = 1(1) → 0.101이에요.",
      "source": "Week 7, 16쪽 필기"
    }
  ]
});
