addSession({
  "week": 4,
  "session": "04-1",
  "title": "경사하강법과 메타휴리스틱을 이용해 최적해 구하기",
  "intro": "최적화 문제를 어떻게 세우는지 교실 냉방 예시로 배워요. 그다음 새 후보를 고르는 세 가지 방법을 살펴봐요. 경사하강법(GD), 유전 알고리즘(GA), 입자 군집 최적화(PSO)예요.",
  "sources": [
    {
      "index": "01",
      "title": "What Is Optimization",
      "file": "01_what_is_optimization.ipynb"
    },
    {
      "index": "02",
      "title": "Gradient Descent Concept",
      "file": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "index": "03",
      "title": "Gradient Descent Demo",
      "file": "02-2_gradient_descent_demo.ipynb"
    },
    {
      "index": "04",
      "title": "Genetic Algorithm Concept",
      "file": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "index": "05",
      "title": "Genetic Algorithm Demo",
      "file": "03-2_genetic_algorithm_demo.ipynb"
    },
    {
      "index": "06",
      "title": "Particle Swarm Optimization Concept",
      "file": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "index": "07",
      "title": "Particle Swarm Optimization Demo",
      "file": "04-2_particle_swarm_optimization_demo.ipynb"
    }
  ],
  "groups": [
    {
      "id": "g-problem",
      "title": "최적화 문제 세우기"
    },
    {
      "id": "g-gd",
      "title": "경사하강법(GD)"
    },
    {
      "id": "g-ga",
      "title": "유전 알고리즘(GA)"
    },
    {
      "id": "g-pso",
      "title": "입자 군집 최적화(PSO)"
    }
  ],
  "sections": [
    {
      "id": "optimization",
      "group": "g-problem",
      "title": "최적화",
      "source": "01_what_is_optimization.ipynb",
      "definition": "제약조건을 지키면서 가장 좋은 선택을 찾는 거예요.",
      "points": [
        "선택마다 점수를 매겨서 비교해요.",
        "서로 부딪히는 목표 사이에서 균형을 찾아요."
      ],
      "example": {
        "title": "교실 냉방",
        "points": [
          "냉방을 세게 하면 시원하지만 에너지를 더 써요.",
          "너무 세게 하면 방이 너무 추워져요."
        ]
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/01_classroom_problem.png",
        "alt": "Classroom cooling: balancing comfort and energy use"
      },
      "keyterms": [
        {
          "en": "optimization",
          "ko": "최적화"
        },
        {
          "en": "constraints",
          "ko": "제약조건"
        }
      ]
    },
    {
      "id": "objective-function",
      "group": "g-problem",
      "title": "목적함수",
      "source": "01_what_is_optimization.ipynb",
      "definition": "선택마다 숫자 점수를 매기는 함수예요.",
      "points": [
        "이 점수로 후보끼리 비교해요.",
        "교실 예시에서는 비용이 점수예요. 낮을수록 좋아요."
      ],
      "cautions": [
        "가중치를 바꾸면 후보 순위가 바뀔 수 있어요.",
        "이때 온도 변화 자체는 그대로예요."
      ],
      "example": {
        "title": "교실 냉방",
        "formula": {
          "ko": "비용 = 불쾌도 + 에너지 가중치 × 에너지 사용량",
          "en": "Cost = discomfort + energy weight × energy use"
        },
        "points": [
          "에너지 가중치가 크면 에너지를 많이 쓰는 후보가 더 불리해져요."
        ]
      },
      "keyterms": [
        {
          "en": "objective function",
          "ko": "목적함수"
        },
        {
          "en": "cost",
          "ko": "비용"
        },
        {
          "en": "energy weight",
          "ko": "에너지 가중치"
        }
      ]
    },
    {
      "id": "system-boundary",
      "group": "g-problem",
      "title": "시스템 경계",
      "source": "01_what_is_optimization.ipynb",
      "definition": "모델에 무엇을 넣고 뺄지 정하는 선이에요.",
      "example": {
        "title": "교실 모델",
        "points": [
          "바깥 온도, 재실 인원, 냉방 수준으로 교실 온도를 예측해요.",
          "문과 창문을 여닫는 건 모델 밖이에요."
        ]
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/01_classroom_elements.png",
        "alt": "Classroom system boundary, inputs, decisions, and outputs"
      },
      "keyterms": [
        {
          "en": "system boundary",
          "ko": "시스템 경계"
        },
        {
          "en": "occupancy",
          "ko": "재실 인원"
        }
      ]
    },
    {
      "id": "decision-variable",
      "group": "g-problem",
      "title": "결정변수",
      "source": "01_what_is_optimization.ipynb",
      "definition": "우리가 직접 정하는 값이에요.",
      "points": [
        "결정변수 값의 조합 하나가 후보 하나예요."
      ],
      "cautions": [
        "앞의 결정이 뒤의 상황을 바꿀 수 있어요.",
        "그럴 땐 결정들을 함께 고려해야 해요."
      ],
      "example": {
        "title": "교실 냉방",
        "points": [
          "결정변수는 초반 냉방 수준과 후반 냉방 수준이에요.",
          "초반 냉방이 후반의 시작 온도를 바꿔요."
        ]
      },
      "keyterms": [
        {
          "en": "decision variables",
          "ko": "결정변수"
        },
        {
          "en": "candidates",
          "ko": "후보"
        }
      ]
    },
    {
      "id": "state-variable",
      "group": "g-problem",
      "title": "상태변수",
      "source": "01_what_is_optimization.ipynb",
      "definition": "시스템이 지금 어떤 상태인지 나타내는 값이에요.",
      "points": [
        "지금 값에 변화량을 더하고 빼서 다음 값을 구해요.",
        "앞의 결정이 바뀌면 상태가 변하는 과정도 바뀌어요."
      ],
      "example": {
        "title": "교실 냉방",
        "formula": {
          "ko": "다음 온도 = 현재 온도 + 열 유입 − 냉방 효과",
          "en": "Next temperature = current temperature + heat gain − cooling effect"
        },
        "points": [
          "상태변수는 실내 온도예요.",
          "바깥 공기와 사람은 열을 더하고, 냉방은 열을 빼요.",
          "바깥 온도와 재실 인원은 모든 후보에서 같아요."
        ]
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/01_classroom_model.png",
        "alt": "Classroom temperature dynamics and cooling model"
      },
      "keyterms": [
        {
          "en": "state variable",
          "ko": "상태변수"
        },
        {
          "en": "heat gain",
          "ko": "열 유입"
        },
        {
          "en": "cooling effect",
          "ko": "냉방 효과"
        }
      ]
    },
    {
      "id": "performance-measures",
      "group": "g-problem",
      "title": "성능 지표",
      "source": "01_what_is_optimization.ipynb",
      "definition": "선택의 결과가 얼마나 좋은지 재는 값이에요.",
      "cautions": [
        "부족해도, 지나쳐도 성능이 나빠질 수 있어요.",
        "마지막 값만 보지 말고 전체 변화 과정을 봐야 해요."
      ],
      "example": {
        "title": "교실 냉방",
        "table": {
          "head": [
            "지표",
            "언제 커지나요?"
          ],
          "rows": [
            [
              "불쾌도",
              "온도가 22–24 °C에서 멀리, 오래 벗어날수록"
            ],
            [
              "에너지 사용량",
              "냉방이 세고 길수록"
            ]
          ]
        }
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/01_classroom_performance.png",
        "alt": "Discomfort and energy performance measures"
      },
      "keyterms": [
        {
          "en": "performance measures",
          "ko": "성능 지표"
        },
        {
          "en": "discomfort",
          "ko": "불쾌도"
        },
        {
          "en": "energy use",
          "ko": "에너지 사용량"
        },
        {
          "en": "comfort range",
          "ko": "쾌적 범위"
        }
      ]
    },
    {
      "id": "constraints",
      "group": "g-problem",
      "title": "제약조건",
      "source": "01_what_is_optimization.ipynb",
      "definition": "꼭 지켜야 하는 한계예요.",
      "points": [
        "제약조건을 어긴 후보는 실행 불가능해요.",
        "실행 가능한 후보끼리만 비용을 비교해요."
      ],
      "example": {
        "title": "교실 냉방",
        "points": [
          "냉방 수준, 실내 온도, 에너지 사용량에 한계가 있어요."
        ],
        "table": {
          "head": [
            "실내 온도",
            "판정"
          ],
          "rows": [
            [
              "22–24 °C",
              "쾌적"
            ],
            [
              "25 °C",
              "불쾌하지만 허용"
            ],
            [
              "30 °C 초과",
              "실행 불가능"
            ]
          ]
        }
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/01_classroom_optimization.png",
        "alt": "Cooling constraints and optimization objective"
      },
      "keyterms": [
        {
          "en": "constraints",
          "ko": "제약조건"
        },
        {
          "en": "feasible",
          "ko": "실행 가능"
        },
        {
          "en": "infeasible",
          "ko": "실행 불가능"
        }
      ]
    },
    {
      "id": "decision-space",
      "group": "g-problem",
      "title": "결정 공간",
      "source": "01_what_is_optimization.ipynb",
      "definition": "결정변수 조합을 모아 놓은 공간이에요.",
      "points": [
        "여기서 고른 점이 시뮬레이션을 거쳐 성능 공간의 점이 돼요."
      ],
      "example": {
        "title": "교실 냉방",
        "formula": {
          "ko": "냉방 결정 → 온도 시뮬레이션 → 불쾌도·에너지 평가",
          "en": "Cooling decision → temperature simulation → discomfort and energy evaluation"
        },
        "points": [
          "그래프의 가로축은 후반 냉방, 세로축은 초반 냉방이에요."
        ]
      },
      "keyterms": [
        {
          "en": "decision space",
          "ko": "결정 공간"
        }
      ]
    },
    {
      "id": "performance-space",
      "group": "g-problem",
      "title": "성능 공간",
      "source": "01_what_is_optimization.ipynb",
      "definition": "결과로 나온 성능 지표를 모아 놓은 공간이에요.",
      "points": [
        "결정 공간의 점 하나가 시뮬레이션을 거쳐 성능 공간의 점 하나가 돼요."
      ],
      "example": {
        "title": "교실 냉방",
        "points": [
          "축은 에너지 사용량과 불쾌도예요."
        ]
      },
      "keyterms": [
        {
          "en": "performance space",
          "ko": "성능 공간"
        }
      ]
    },
    {
      "id": "grid-search",
      "group": "g-problem",
      "title": "격자 탐색",
      "source": "01_what_is_optimization.ipynb",
      "definition": "미리 정해 둔 후보를 하나씩 다 평가하는 방법이에요.",
      "points": [
        "실행 가능하면서 비용이 가장 낮은 후보를 골라요.",
        "경사하강법(GD), 유전 알고리즘(GA), 입자 군집 최적화(PSO)는 새 후보를 고르는 규칙이 각자 달라요."
      ],
      "cautions": [
        "격자점 사이에 더 좋은 해가 있을 수 있어요.",
        "탐색 범위가 커지면 평가 비용이 많이 들어요."
      ],
      "example": {
        "title": "교실 냉방",
        "points": [
          "121개 조합을 모두 평가해서 가장 좋은 후보를 골라요."
        ]
      },
      "keyterms": [
        {
          "en": "grid search",
          "ko": "격자 탐색"
        },
        {
          "en": "predefined candidates",
          "ko": "미리 정한 후보"
        },
        {
          "en": "grid points",
          "ko": "격자점"
        }
      ]
    },
    {
      "id": "gradient",
      "group": "g-gd",
      "title": "경사",
      "source": "02-1_gradient_descent_concept.ipynb",
      "definition": "변수를 조금 바꿨을 때 목적함수가 얼마나 변하는지예요.",
      "points": [
        "도함수로 계산해요.",
        "변수가 여러 개면 변수마다 편미분을 구해서 모아요."
      ],
      "table": {
        "head": [
          "경사",
          "다음 업데이트에서 변수는"
        ],
        "rows": [
          [
            "양수",
            "줄어요"
          ],
          [
            "음수",
            "늘어요"
          ]
        ]
      },
      "keyterms": [
        {
          "en": "gradient",
          "ko": "경사"
        },
        {
          "en": "derivatives",
          "ko": "도함수"
        },
        {
          "en": "partial derivatives",
          "ko": "편미분"
        },
        {
          "en": "local rate of change",
          "ko": "국소 변화율"
        }
      ]
    },
    {
      "id": "gd",
      "group": "g-gd",
      "title": "경사하강법",
      "source": "02-1_gradient_descent_concept.ipynb",
      "definition": "경사의 반대 방향으로 조금씩 움직여서 비용을 줄이는 방법이에요.",
      "formula": {
        "ko": "다음 값 = 현재 값 − 스텝 크기 × 경사",
        "en": "Next value = current value − step size × gradient"
      },
      "points": [
        "경사하강법(GD)은 바뀐 값을 평가하고 다시 업데이트해요."
      ],
      "cautions": [
        "결과는 시작점과 목적함수에 따라 달라요.",
        "멈췄다고 전역 최솟값이라는 보장은 없어요."
      ],
      "example": {
        "title": "공 착지 위치 맞추기",
        "source": "02-2_gradient_descent_demo.ipynb",
        "formula": {
          "ko": "착지 거리 = 발사 속도 × 비행 시간",
          "en": "Landing distance = launch speed × flight time"
        },
        "points": [
          "수평 발사 속도를 바꿔서 10 m 앞 목표에 공을 맞혀요.",
          "공이 짧게 떨어지면 속도를 올리고, 넘어가면 속도를 내려요.",
          "비용 곡선은 U자 모양이고, 바닥이 정확히 맞힌 지점이에요."
        ]
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/02_gd_update.png",
        "alt": "Gradient descent updates launch speed opposite to the gradient to reduce landing cost"
      },
      "keyterms": [
        {
          "en": "gradient descent (GD)",
          "ko": "경사하강법"
        },
        {
          "en": "starting point",
          "ko": "시작점"
        },
        {
          "en": "global minimum",
          "ko": "전역 최솟값"
        }
      ]
    },
    {
      "id": "step-size",
      "group": "g-gd",
      "title": "스텝 크기",
      "source": "02-1_gradient_descent_concept.ipynb",
      "definition": "한 번 업데이트할 때 경사에 곱하는 값이에요.",
      "points": [
        "실제로 움직이는 양은 스텝 크기와 경사 둘 다에 달려 있어요."
      ],
      "table": {
        "head": [
          "스텝 크기",
          "결과"
        ],
        "rows": [
          [
            "너무 작음",
            "진행이 느려요"
          ],
          [
            "너무 큼",
            "최솟값을 지나쳐서 비용이 오히려 커질 수 있어요"
          ]
        ]
      },
      "keyterms": [
        {
          "en": "step size",
          "ko": "스텝 크기"
        },
        {
          "en": "overshoot the minimum",
          "ko": "최솟값을 지나침"
        }
      ]
    },
    {
      "id": "ga",
      "group": "g-ga",
      "title": "유전 알고리즘 개요",
      "source": "03-1_genetic_algorithm_concept.ipynb",
      "definition": "후보 여러 개를 세대마다 진화시켜서 더 좋은 해를 찾는 방법이에요.",
      "points": [
        "유전 알고리즘(GA)은 도함수 없이 적합도만으로 평가해요."
      ],
      "cautions": [
        "자식이 부모보다 나쁠 수도 있어요.",
        "다양성이 줄면 탐색이 좁아지고, 전역 최적해도 보장되지 않아요."
      ],
      "example": {
        "title": "그네 높이 올리기",
        "source": "03-2_genetic_algorithm_demo.ipynb",
        "formula": {
          "ko": "적합도 = 시뮬레이션 동안의 최대 높이",
          "en": "Fitness = maximum height during the simulation"
        },
        "points": [
          "왼쪽·오른쪽으로 미는 순서를 정해서 그네를 최대한 높이 올려요.",
          "움직이는 방향으로 밀면 에너지가 늘고, 반대로 밀면 줄어요."
        ]
      },
      "keyterms": [
        {
          "en": "genetic algorithm (GA)",
          "ko": "유전 알고리즘"
        },
        {
          "en": "population",
          "ko": "집단"
        },
        {
          "en": "offspring",
          "ko": "자식"
        },
        {
          "en": "global optimum",
          "ko": "전역 최적해"
        }
      ]
    },
    {
      "id": "ga-operators",
      "group": "g-ga",
      "title": "선택·교차·변이",
      "source": "03-1_genetic_algorithm_concept.ipynb",
      "definition": "부모를 고르고 섞고 바꿔서 다음 세대를 만드는 과정이에요.",
      "formula": {
        "ko": "집단 평가 → 부모 선택 → 교차·변이 → 다음 세대 평가",
        "en": "Evaluate population → select parents → crossover and mutation → evaluate next generation"
      },
      "table": {
        "head": [
          "단계",
          "하는 일"
        ],
        "rows": [
          [
            "선택",
            "작은 무작위 그룹에서 더 좋은 부모를 골라요"
          ],
          [
            "교차",
            "한 부모의 앞부분과 다른 부모의 뒷부분을 합쳐 자식을 만들어요"
          ],
          [
            "변이",
            "유전자 일부를 무작위로 바꿔요"
          ],
          [
            "엘리트 보존",
            "가장 좋은 후보를 그대로 다음 세대에 넘겨요"
          ]
        ]
      },
      "example": {
        "title": "그네 높이 올리기",
        "source": "03-2_genetic_algorithm_demo.ipynb",
        "points": [
          "변이는 미는 방향을 반대로 뒤집어요."
        ]
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/03_ga_process.png",
        "alt": "Selection, crossover, mutation, and evaluation of swing control chromosomes"
      },
      "keyterms": [
        {
          "en": "selection",
          "ko": "선택"
        },
        {
          "en": "crossover",
          "ko": "교차"
        },
        {
          "en": "mutation",
          "ko": "변이"
        },
        {
          "en": "elitism",
          "ko": "엘리트 보존"
        }
      ]
    },
    {
      "id": "chromosome",
      "group": "g-ga",
      "title": "염색체",
      "source": "03-1_genetic_algorithm_concept.ipynb",
      "definition": "후보 해 하나를 유전자들로 표현한 거예요.",
      "points": [
        "염색체 하나는 유전자 여러 개로 이루어져요.",
        "교차와 변이는 유전자를 바꿔서 새 후보를 만들어요."
      ],
      "example": {
        "title": "그네 높이 올리기",
        "source": "03-2_genetic_algorithm_demo.ipynb",
        "points": [
          "유전자 하나는 0.5초 동안 미는 방향이에요.",
          "8초 동안이라 유전자는 16개예요."
        ]
      },
      "keyterms": [
        {
          "en": "chromosome",
          "ko": "염색체"
        },
        {
          "en": "gene",
          "ko": "유전자"
        }
      ]
    },
    {
      "id": "fitness",
      "group": "g-ga",
      "title": "적합도",
      "source": "03-1_genetic_algorithm_concept.ipynb",
      "definition": "후보가 얼마나 잘하는지 나타내는 점수예요.",
      "points": [
        "엘리트 보존을 쓰고 기준이 고정되면 최고 적합도는 떨어지지 않아요."
      ],
      "cautions": [
        "집단의 평균 적합도는 떨어질 수 있어요."
      ],
      "example": {
        "title": "그네 높이 올리기",
        "source": "03-2_genetic_algorithm_demo.ipynb",
        "points": [
          "그네가 높이 올라갈수록 적합도가 높아요."
        ]
      },
      "keyterms": [
        {
          "en": "fitness",
          "ko": "적합도"
        },
        {
          "en": "best fitness",
          "ko": "최고 적합도"
        },
        {
          "en": "average population fitness",
          "ko": "집단 평균 적합도"
        }
      ]
    },
    {
      "id": "pso",
      "group": "g-pso",
      "title": "입자 군집 최적화",
      "source": "04-1_particle_swarm_optimization_concept.ipynb",
      "definition": "여러 후보가 자기 경험과 무리 전체의 최고 기록을 같이 참고해서 탐색하는 방법이에요.",
      "points": [
        "입자 군집 최적화(PSO)에서 입자 하나는 후보 해 하나예요.",
        "도함수 없이 연속된 탐색 공간에서 평가해요.",
        "입자의 위치와 속도는 탐색 공간 안에서의 움직임이에요."
      ],
      "cautions": [
        "현재 입자들의 평균 비용은 커질 수도 있어요.",
        "무리가 한곳에 모여도 전역 최적해라는 보장은 없어요."
      ],
      "example": {
        "title": "드론 고도 제어",
        "source": "04-2_particle_swarm_optimization_demo.ipynb",
        "formula": {
          "ko": "비용 = 고도 오차 페널티 + 제어 노력 페널티 + 지면 접촉 페널티",
          "en": "Cost = altitude error penalty + control effort penalty + ground contact penalty"
        },
        "points": [
          "목표 고도 2.5 m를 유지하는 제어기 게인을 찾아요.",
          "입자 하나는 게인 한 쌍(Kp, Kd)이에요.",
          "입자 위치는 드론의 실제 위치가 아니라 게인 값이에요."
        ]
      },
      "keyterms": [
        {
          "en": "particle swarm optimization (PSO)",
          "ko": "입자 군집 최적화"
        },
        {
          "en": "particle",
          "ko": "입자"
        },
        {
          "en": "swarm",
          "ko": "무리(군집)"
        },
        {
          "en": "continuous search space",
          "ko": "연속 탐색 공간"
        }
      ]
    },
    {
      "id": "best-positions",
      "group": "g-pso",
      "title": "최고 위치 기록",
      "source": "04-1_particle_swarm_optimization_concept.ipynb",
      "definition": "입자들이 지금까지 찾은 가장 좋은 위치를 기억해 둬요.",
      "points": [
        "새 위치가 더 좋으면 바로 바꿔 적어요.",
        "그래서 기록된 최고 비용은 커지지 않아요."
      ],
      "table": {
        "head": [
          "이름",
          "뜻"
        ],
        "rows": [
          [
            "개인 최고(pbest)",
            "입자 하나가 가 본 곳 중 가장 좋은 위치"
          ],
          [
            "전역 최고(gbest)",
            "무리 전체가 찾은 곳 중 가장 좋은 위치"
          ]
        ]
      },
      "keyterms": [
        {
          "en": "personal best (pbest)",
          "ko": "개인 최고"
        },
        {
          "en": "global best (gbest)",
          "ko": "전역 최고"
        }
      ]
    },
    {
      "id": "velocity-update",
      "group": "g-pso",
      "title": "속도 업데이트",
      "source": "04-1_particle_swarm_optimization_concept.ipynb",
      "definition": "입자가 다음에 어디로 움직일지 정하는 규칙이에요.",
      "formula": {
        "ko": "다음 속도 = 관성항 + 인지항 + 사회항",
        "en": "Next velocity = inertia term + cognitive term + social term"
      },
      "points": [
        "가중치로 세 항의 비중을 조절해요.",
        "무작위 요소가 탐색을 넓혀 줘요.",
        "속도와 위치에는 범위 제한이 있어요."
      ],
      "table": {
        "head": [
          "항",
          "하는 일"
        ],
        "rows": [
          [
            "관성항",
            "이전 속도를 이어가요"
          ],
          [
            "인지항",
            "개인 최고(pbest) 쪽으로 끌어당겨요"
          ],
          [
            "사회항",
            "전역 최고(gbest) 쪽으로 끌어당겨요"
          ]
        ]
      },
      "figure": {
        "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/04-1_Optimization/assets/04_pso_update.png",
        "alt": "A particle update using inertia, personal best, and global best"
      },
      "keyterms": [
        {
          "en": "velocity",
          "ko": "속도"
        },
        {
          "en": "inertia term",
          "ko": "관성항"
        },
        {
          "en": "cognitive term",
          "ko": "인지항"
        },
        {
          "en": "social term",
          "ko": "사회항"
        }
      ]
    }
  ],
  "terms": [
    {
      "en": "optimization",
      "ko": "최적화",
      "def": "제약조건을 지키면서 가장 좋은 선택을 찾는 거예요.",
      "def_en": "Optimization searches for the best choice while satisfying the constraints.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "objective function",
      "ko": "목적함수",
      "def": "선택마다 숫자 점수를 매기는 함수예요.",
      "def_en": "An objective function assigns a numerical score to each choice.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "system boundary",
      "ko": "시스템 경계",
      "def": "모델에 무엇을 넣고 뺄지 정하는 선이에요.",
      "def_en": "A system boundary defines what a model includes.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "decision variables",
      "ko": "결정변수",
      "def": "우리가 직접 정하는 값이에요. 교실 예시에서는 초반·후반 냉방 수준이에요.",
      "def_en": "The decision variables are the early and late cooling levels.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "state variable",
      "ko": "상태변수",
      "def": "시스템의 지금 상태를 나타내는 값이에요. 교실 예시에서는 실내 온도예요.",
      "def_en": "The state variable is indoor temperature.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "discomfort",
      "ko": "불쾌도",
      "def": "온도가 쾌적 범위에서 멀리, 오래 벗어날수록 커지는 값이에요.",
      "def_en": "Discomfort increases when temperature deviates farther from the 22–24 °C comfort range or remains uncomfortable longer.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "constraints",
      "ko": "제약조건",
      "def": "꼭 지켜야 하는 한계예요.",
      "def_en": "Constraints specify required limits on cooling levels, indoor temperature, and energy use.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "infeasible",
      "ko": "실행 불가능",
      "def": "제약조건을 어긴 후보예요. 교실 예시에서는 30 °C를 넘는 후보예요.",
      "def_en": "Candidates that exceed 30 °C are infeasible.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "decision space",
      "ko": "결정 공간",
      "def": "결정변수 조합을 모아 놓은 공간이에요.",
      "def_en": "Decision space contains the combinations of decision variables.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "performance space",
      "ko": "성능 공간",
      "def": "결과로 나온 성능 지표를 모아 놓은 공간이에요.",
      "def_en": "Performance space contains the resulting performance measures: energy use and discomfort.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "grid search",
      "ko": "격자 탐색",
      "def": "미리 정해 둔 후보를 하나씩 다 평가하는 방법이에요.",
      "def_en": "Grid search evaluates predefined candidates.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "en": "gradient",
      "ko": "경사",
      "def": "변수를 조금 바꿨을 때 목적함수가 얼마나 변하는지예요.",
      "def_en": "For one variable, the gradient is the local rate of change of the objective with respect to that variable.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "en": "gradient descent (GD)",
      "ko": "경사하강법",
      "def": "경사의 반대 방향으로 조금씩 움직여서 비용을 줄이는 방법이에요.",
      "def_en": "Gradient descent updates decision variables in the direction opposite to the gradient to reduce the objective value.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "en": "step size",
      "ko": "스텝 크기",
      "def": "한 번 업데이트할 때 경사에 곱하는 값이에요. 너무 작으면 느리고, 너무 크면 최솟값을 지나쳐요.",
      "def_en": "The step size scales the gradient in each update.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "en": "genetic algorithm (GA)",
      "ko": "유전 알고리즘",
      "def": "후보 여러 개를 세대마다 진화시켜서 더 좋은 해를 찾는 방법이에요.",
      "def_en": "A genetic algorithm evolves a population of candidate solutions through selection, crossover, and mutation.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "chromosome",
      "ko": "염색체",
      "def": "후보 해 하나를 유전자들로 표현한 거예요.",
      "def_en": "A chromosome encodes one candidate solution.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "gene",
      "ko": "유전자",
      "def": "염색체를 이루는 단위예요. 그네 예시에서는 미는 방향이에요.",
      "def_en": "In the swing example, its genes specify push directions over time.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "fitness",
      "ko": "적합도",
      "def": "후보가 얼마나 잘하는지 나타내는 점수예요.",
      "def_en": "Fitness measures candidate performance.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "selection",
      "ko": "선택",
      "def": "작은 무작위 그룹에서 더 좋은 부모를 고르는 단계예요.",
      "def_en": "Selection: choose fitter parents from small random groups of candidates.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "crossover",
      "ko": "교차",
      "def": "한 부모의 앞부분과 다른 부모의 뒷부분을 합쳐 자식을 만드는 단계예요.",
      "def_en": "Crossover: combine the first part of one parent with the remaining part of another to form an offspring.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "mutation",
      "ko": "변이",
      "def": "유전자 일부를 무작위로 바꾸는 단계예요.",
      "def_en": "Mutation: randomly change individual genes.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "elitism",
      "ko": "엘리트 보존",
      "def": "가장 좋은 후보를 그대로 다음 세대에 넘기는 거예요.",
      "def_en": "Elitism: copy the best candidate unchanged into the next generation.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "particle swarm optimization (PSO)",
      "ko": "입자 군집 최적화",
      "def": "여러 후보가 자기 경험과 무리의 최고 기록을 참고해서 탐색하는 방법이에요.",
      "def_en": "Particle swarm optimization searches with multiple candidates that use their own experience and the best result found by the swarm.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "particle",
      "ko": "입자",
      "def": "후보 해 하나예요. 드론 예시에서는 게인 한 쌍이에요.",
      "def_en": "A particle represents one candidate solution.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "personal best (pbest)",
      "ko": "개인 최고",
      "def": "입자 하나가 가 본 곳 중 가장 좋은 위치예요.",
      "def_en": "The personal best, pbest, is the best position that a particle has visited.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "global best (gbest)",
      "ko": "전역 최고",
      "def": "무리 전체가 찾은 곳 중 가장 좋은 위치예요.",
      "def_en": "The global best, gbest, is the best position found by any particle in the swarm.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "inertia",
      "ko": "관성",
      "def": "이전 속도를 이어가는 부분이에요.",
      "def_en": "Inertia carries the previous velocity forward.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "cognitive term",
      "ko": "인지항",
      "def": "입자를 개인 최고 쪽으로 끌어당기는 항이에요.",
      "def_en": "The cognitive term attracts the particle toward pbest.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "social term",
      "ko": "사회항",
      "def": "입자를 전역 최고 쪽으로 끌어당기는 항이에요.",
      "def_en": "The social term attracts it toward gbest.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "population",
      "ko": "집단",
      "def": "후보 해 여러 개를 모은 거예요.",
      "def_en": "A genetic algorithm evolves a population of candidate solutions through selection, crossover, and mutation.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "offspring",
      "ko": "자식",
      "def": "교차와 변이로 새로 만든 후보예요.",
      "def_en": "Crossover: combine the first part of one parent with the remaining part of another to form an offspring.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "en": "proportional gain Kp",
      "ko": "비례 게인",
      "def": "드론 예시의 결정변수 중 하나예요.",
      "def_en": "The decision variables are the proportional gain Kp and derivative gain Kd.",
      "source": "04-2_particle_swarm_optimization_demo.ipynb"
    },
    {
      "en": "derivative gain Kd",
      "ko": "미분 게인",
      "def": "드론 예시의 결정변수 중 하나예요.",
      "def_en": "The decision variables are the proportional gain Kp and derivative gain Kd.",
      "source": "04-2_particle_swarm_optimization_demo.ipynb"
    },
    {
      "en": "weights",
      "ko": "가중치",
      "def": "관성항·인지항·사회항의 비중을 조절해요.",
      "def_en": "Weights control the three contributions.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "en": "random factors",
      "ko": "무작위 요소",
      "def": "인지항과 사회항을 흔들어서 탐색을 넓혀요.",
      "def_en": "Random factors vary the cognitive and social terms to encourage exploration.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    }
  ],
  "check": [
    {
      "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)",
      "items": [
        "한국어 용어(불쾌도, 인지항, 엘리트 보존 등)는 내가 붙인 번역이에요.",
        "결정변수·상태변수·성능 지표·유전자의 정의는 예시를 보고 풀어 쓴 거예요."
      ]
    },
    {
      "title": "넣지 않은 것",
      "items": [
        "스텝 크기 값, GA 집단 크기, PSO 가중치 같은 숫자는 코드에만 있어요."
      ]
    },
    {
      "title": "사용 안내",
      "items": [
        "그림은 인터넷이 연결돼야 보여요.",
        "데모는 materials/week04 노트북을 실행하세요."
      ]
    }
  ],
  "quiz": [
    {
      "id": "w04-q01",
      "q": "In gradient descent, if the gradient of a variable is positive, what happens to that variable in the next update?",
      "choices": [
        "It decreases",
        "It increases",
        "It does not change",
        "It changes randomly"
      ],
      "answer": 0,
      "explain": "경사의 반대 방향으로 업데이트해요. 그래서 경사가 양수면 변수가 줄고, 음수면 늘어요.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "id": "w04-q02",
      "q": "Which is the gradient descent update rule?",
      "choices": [
        "Next value = current value − step size × gradient",
        "Next value = current value + step size × gradient",
        "Next value = step size × gradient",
        "Next value = current value × gradient − step size"
      ],
      "answer": 0,
      "explain": "경사의 반대 방향으로 스텝 크기만큼 움직여요. 그래서 '현재 값 − 스텝 크기 × 경사'가 돼요.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "id": "w04-q03",
      "q": "What can happen if the step size is very large?",
      "choices": [
        "It can overshoot the minimum and increase the cost",
        "Progress becomes slow",
        "It always reaches the global minimum",
        "The gradient can no longer be computed"
      ],
      "answer": 0,
      "explain": "스텝 크기가 너무 크면 최솟값을 지나쳐서 비용이 커질 수 있어요. 진행이 느려지는 건 스텝 크기가 너무 작을 때예요.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "id": "w04-q04",
      "q": "Which method computes the gradient using derivatives?",
      "choices": [
        "Gradient descent (GD)",
        "Genetic algorithm (GA)",
        "Particle swarm optimization (PSO)",
        "None of them requires derivatives"
      ],
      "answer": 0,
      "explain": "경사하강법(GD)은 도함수로 경사를 계산해요. 유전 알고리즘(GA)과 입자 군집 최적화(PSO)는 도함수 없이 후보를 평가해요.",
      "source": "02-1_gradient_descent_concept.ipynb"
    },
    {
      "id": "w04-q05",
      "q": "In the projectile landing demo, the ball lands short of the target. What does GD do?",
      "choices": [
        "Increases the launch speed",
        "Decreases the launch speed",
        "Changes the launch angle",
        "Moves the target"
      ],
      "answer": 0,
      "explain": "짧게 떨어지면 발사 속도를 올리고, 넘어가면 내려요. 결정변수는 수평 발사 속도 하나뿐이에요.",
      "source": "02-2_gradient_descent_demo.ipynb"
    },
    {
      "id": "w04-q06",
      "q": "With elitism and a fixed evaluation criterion, which statement is true?",
      "choices": [
        "The best fitness cannot decrease",
        "Average population fitness always increases",
        "An offspring is always better than its parents",
        "The global optimum is guaranteed"
      ],
      "answer": 0,
      "explain": "가장 좋은 후보를 그대로 넘기니까 최고 적합도는 떨어지지 않아요. 하지만 자식은 부모보다 나쁠 수 있고, 평균 적합도도 떨어질 수 있어요. 전역 최적해도 보장되지 않아요.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "id": "w04-q07",
      "q": "Which describes crossover in a genetic algorithm?",
      "choices": [
        "Combine the first part of one parent with the remaining part of another to form an offspring",
        "Randomly change individual genes",
        "Copy the best candidate unchanged into the next generation",
        "Choose fitter parents from small random groups of candidates"
      ],
      "answer": 0,
      "explain": "나머지 보기는 각각 변이(유전자를 무작위로 바꾸기), 엘리트 보존(최고 후보를 그대로 넘기기), 선택(작은 그룹에서 부모 고르기)이에요.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "id": "w04-q08",
      "q": "In the swing control demo, how many genes does each chromosome contain?",
      "choices": [
        "16",
        "8",
        "121",
        "2"
      ],
      "answer": 0,
      "explain": "8초 동안 0.5초마다 방향을 하나씩 정하니까 16개예요.",
      "source": "03-2_genetic_algorithm_demo.ipynb"
    },
    {
      "id": "w04-q09",
      "q": "In the swing example, what does a mutation do?",
      "choices": [
        "It reverses a push direction",
        "It increases the force magnitude",
        "It extends the simulation duration",
        "It changes the initial state of the swing"
      ],
      "answer": 0,
      "explain": "그네 예시에서 변이는 미는 방향을 반대로 뒤집어요. 힘의 크기, 초기 상태, 시뮬레이션 시간은 모든 후보가 같아요.",
      "source": "03-1_genetic_algorithm_concept.ipynb"
    },
    {
      "id": "w04-q10",
      "q": "In PSO, what is pbest?",
      "choices": [
        "The best position that a particle has visited",
        "The best position found by any particle in the swarm",
        "The current velocity of a particle",
        "The center of the search space"
      ],
      "answer": 0,
      "explain": "개인 최고(pbest)는 입자 자신의 최고 위치예요. 무리 전체의 최고 위치는 전역 최고(gbest)예요.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "id": "w04-q11",
      "q": "In the PSO velocity update, which term attracts the particle toward gbest?",
      "choices": [
        "Social term",
        "Cognitive term",
        "Inertia term",
        "Step size"
      ],
      "answer": 0,
      "explain": "다음 속도 = 관성항 + 인지항 + 사회항이에요. 인지항은 pbest 쪽으로, 사회항은 gbest 쪽으로 끌어당겨요.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "id": "w04-q12",
      "q": "Which statement about PSO progress is true?",
      "choices": [
        "The best recorded cost cannot increase, but the average cost of current particles can increase",
        "The average cost of current particles always decreases",
        "A compact swarm guarantees the global optimum",
        "Particle position describes the physical motion of the drone"
      ],
      "answer": 0,
      "explain": "최고 기록은 나빠지지 않지만 평균은 나빠질 수 있어요. 무리가 모여도 전역 최적해는 보장되지 않아요. 입자 위치는 탐색 공간(게인 값)의 위치예요.",
      "source": "04-1_particle_swarm_optimization_concept.ipynb"
    },
    {
      "id": "w04-q13",
      "q": "In the drone altitude control demo, what are the decision variables?",
      "choices": [
        "The proportional gain Kp and the derivative gain Kd",
        "The target altitude and the initial velocity",
        "The disturbance and the initial altitude",
        "The horizontal position of the drone"
      ],
      "answer": 0,
      "explain": "입자 하나는 게인 한 쌍(Kp, Kd)이에요. 목표 고도(2.5 m), 초기 상태, 외란은 모든 후보가 같고, 모델은 수직 운동만 다뤄요.",
      "source": "04-2_particle_swarm_optimization_demo.ipynb"
    },
    {
      "id": "w04-q14",
      "q": "In the classroom cooling example, which candidates are infeasible?",
      "choices": [
        "Candidates that exceed 30 °C",
        "Candidates at 25 °C",
        "Candidates with a large energy weight",
        "Candidates between grid points"
      ],
      "answer": 0,
      "explain": "25 °C는 불쾌하지만 허용돼요. 30 °C를 넘는 후보만 실행 불가능해요.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "id": "w04-q15",
      "q": "In the classroom cooling example, what happens when the energy weight is changed?",
      "choices": [
        "Candidate rankings can change without changing their temperature trajectories",
        "The temperature trajectories of all candidates change",
        "Infeasible candidates become feasible",
        "The number of grid candidates increases"
      ],
      "answer": 0,
      "explain": "가중치는 비용 계산에만 들어가요. 그래서 온도 변화는 그대로고 순위만 바뀔 수 있어요. 가중치가 크면 에너지를 많이 쓰는 후보가 더 불리해져요.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "id": "w04-q16",
      "q": "In the classroom cooling example, what is the state variable?",
      "choices": [
        "Indoor temperature",
        "The early cooling level",
        "The late cooling level",
        "The energy weight"
      ],
      "answer": 0,
      "explain": "초반·후반 냉방 수준은 결정변수예요. 실내 온도가 상태변수예요.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "id": "w04-q17",
      "q": "Which statement about grid search is true?",
      "choices": [
        "It evaluates predefined candidates, and better solutions may lie between grid points",
        "It always finds the true optimum",
        "It uses the gradient to choose new candidates",
        "Its cost does not grow as the search grows"
      ],
      "answer": 0,
      "explain": "격자 탐색은 미리 정한 후보(예시는 121개)만 평가해요. 탐색이 커지면 비용도 커지고, 격자점 사이에 더 좋은 해가 있을 수 있어요.",
      "source": "01_what_is_optimization.ipynb"
    },
    {
      "id": "w04-q18",
      "q": "In the classroom model, what lies outside the system boundary?",
      "choices": [
        "Door and window opening",
        "Outdoor temperature",
        "Occupancy",
        "Cooling levels"
      ],
      "answer": 0,
      "explain": "모델은 바깥 온도, 재실 인원, 냉방 수준으로 온도를 예측해요. 문·창문 여닫기는 모델 밖이에요.",
      "source": "01_what_is_optimization.ipynb"
    }
  ]
});
