addSession({
  "week": 6,
  "session": "06-1",
  "title": "회귀모델을 구축하고 데이터 예측하기",
  "intro": "숫자를 예측하는 회귀를 배워요. 직선 하나로 시작해서, 입력을 늘리고, 곡선으로 휘게 하고, 마지막엔 미래를 예측하는 곡선까지 살펴봐요.",
  "keypoints": ["회귀는 입력과 숫자 결과의 관계를 배워서 숫자를 예측해요.", "잔차 = 기록 값 − 예측 값이고, 잔차 제곱합이 가장 작은 직선을 골라요(최소제곱법).", "새 입력이 기록 범위 안이면 보간, 밖이면 외삽이에요.", "곡선 특성을 너무 많이 넣으면 과대적합, 너무 적으면 과소적합이에요. 규제로 계수가 커지지 않게 막아요.", "차수·벌점 같은 설정은 따로 떼어 둔 검증 데이터로 골라요."],
  "sources": [
    { "index": "01", "title": "What Is Regression", "file": "01_what_is_regression.ipynb" },
    { "index": "02", "title": "Simple Linear Regression", "file": "02_simple_linear_regression.ipynb" },
    { "index": "03", "title": "Multiple Linear Regression", "file": "03_multiple_linear_regression.ipynb" },
    { "index": "04", "title": "Polynomial Regression And Regularization", "file": "04_polynomial_regression_and_regularization.ipynb" },
    { "index": "05", "title": "Nonlinear Regression And Forecasting", "file": "05_nonlinear_regression_and_forecasting.ipynb" }
  ],
  "groups": [
    { "id": "g-reg", "title": "회귀란?" },
    { "id": "g-linear", "title": "선형 회귀" },
    { "id": "g-poly", "title": "다항 회귀와 규제" },
    { "id": "g-nonlin", "title": "비선형 회귀와 예측" }
  ],
  "sections": [
    {
      "id": "regression", "group": "g-reg", "title": "회귀",
      "source": "01_what_is_regression.ipynb",
      "definition": "과거 예시에서 입력과 숫자 결과의 관계를 배워서 숫자를 예측해요.",
      "points": [
        "모델은 여러 기록의 예측 오차가 작아지도록 선이나 곡선을 골라요.",
        "회귀선은 보통 모든 점을 지나지 않아요.",
        "점들을 정확히 잇는 건 회귀가 아니라 수치 보간이에요."
      ],
      "table": {
        "head": ["", "예측하는 것"],
        "rows": [
          ["회귀", "숫자 (예: 배달 시간)"],
          ["분류", "범주 (예: 늦음 / 제시간)"]
        ]
      },
      "cautions": [
        "같은 거리라도 교통, 조리 시간처럼 기록되지 않은 요인 때문에 결과가 달라요."
      ],
      "example": {
        "title": "배달 시간 예측",
        "points": [
          "배달 앱이 32분을 예측했는데 38분 만에 도착했어요.",
          "선은 기록들의 패턴을 요약하고, 주황 점은 새 경로에 대한 예측이에요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/06-1_Regression/assets/01_points_and_prediction.png", "alt": "Delivery records, a fitted trend, and a prediction for a new route." },
      "keyterms": [
        { "en": "regression", "ko": "회귀" },
        { "en": "classification", "ko": "분류" },
        { "en": "fitting", "ko": "적합" },
        { "en": "numerical interpolation", "ko": "수치 보간" }
      ]
    },
    {
      "id": "conditional-mean", "group": "g-reg", "title": "조건부 평균",
      "source": "01_what_is_regression.ipynb",
      "definition": "비슷한 입력에서 나온 결과들의 평균이에요.",
      "points": [
        "제곱 오차로 적합하면 모델은 조건부 평균을 목표로 해요.",
        "다른 적합 기준을 쓰면 중앙값을 목표로 할 수도 있어요."
      ],
      "cautions": [
        "배달 한 건의 정확한 결과를 약속하지는 않아요.",
        "적합한 패턴만으로는 불확실성 구간이 나오지 않아요."
      ],
      "keyterms": [
        { "en": "conditional mean", "ko": "조건부 평균" },
        { "en": "squared-error fitting", "ko": "제곱 오차 적합" },
        { "en": "median", "ko": "중앙값" },
        { "en": "uncertainty interval", "ko": "불확실성 구간" }
      ]
    },
    {
      "id": "interp-extrap", "group": "g-reg", "title": "보간·외삽",
      "source": "01_what_is_regression.ipynb",
      "definition": "새 입력이 기록한 범위 안에 있는지, 밖에 있는지에 따라 이름이 달라요.",
      "table": {
        "head": ["", "뜻"],
        "rows": [
          ["보간", "관찰한 입력 범위 안에서 예측해요"],
          ["외삽", "범위 밖에서 예측해요. 같은 추세가 안 맞을 수 있어요"]
        ]
      },
      "cautions": [
        "범위 밖 예측은 근거가 약해요."
      ],
      "example": {
        "title": "배달 거리",
        "points": [
          "1–8 km 경로로 적합했다면 4 km 예측은 보간이에요.",
          "12 km 예측은 외삽이에요."
        ]
      },
      "keyterms": [
        { "en": "interpolation", "ko": "보간" },
        { "en": "extrapolation", "ko": "외삽" },
        { "en": "observed input range", "ko": "관찰한 입력 범위" }
      ]
    },

    {
      "id": "simple-linear", "group": "g-linear", "title": "단순 선형 회귀",
      "source": "02_simple_linear_regression.ipynb",
      "definition": "입력 하나와 결과의 관계를 직선 하나로 나타내요.",
      "formula": { "ko": "예측 배달 시간 = 시작 대기 시간 + 경로 이동 시간", "en": "Predicted delivery time = starting wait + travel time for the route" },
      "points": [
        "절편과 기울기를 모델 계수라고 해요.",
        "계수는 이전 배달 기록으로 추정해요.",
        "둘 중 하나만 바꿔도 모든 예측이 바뀌어요."
      ],
      "table": {
        "head": ["계수", "정하는 것"],
        "rows": [
          ["절편", "시작 대기 시간"],
          ["기울기", "1 km마다 더 걸리는 시간"]
        ]
      },
      "cautions": [
        "직선은 평균 변화가 거의 일정할 때 쓸모 있어요.",
        "기록한 경로보다 먼 거리는 근거가 약해요."
      ],
      "example": {
        "title": "배달 시간 예측",
        "points": [
          "배달 기록 16개에 직선을 맞춰요."
        ]
      },
      "keyterms": [
        { "en": "simple linear regression", "ko": "단순 선형 회귀" },
        { "en": "intercept", "ko": "절편" },
        { "en": "slope", "ko": "기울기" },
        { "en": "model coefficients", "ko": "모델 계수" }
      ]
    },
    {
      "id": "residual", "group": "g-linear", "title": "잔차",
      "source": "02_simple_linear_regression.ipynb",
      "definition": "실제 기록 값에서 예측 값을 뺀 거예요.",
      "formula": { "ko": "잔차 = 기록 값 − 예측 값", "en": "Residual = recorded time − predicted time" },
      "points": [
        "점이 선보다 위에 있으면 예측보다 늦게 도착한 거예요."
      ],
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/06-1_Regression/assets/02_residuals_and_squared_error.png", "alt": "Recorded and predicted delivery times with vertical gaps showing early and late arrivals." },
      "keyterms": [
        { "en": "residual", "ko": "잔차" }
      ]
    },
    {
      "id": "ols", "group": "g-linear", "title": "최소제곱법",
      "source": "02_simple_linear_regression.ipynb",
      "definition": "잔차를 제곱해서 더한 값이 가장 작은 직선을 골라요.",
      "points": [
        "최소제곱법(OLS)은 잔차를 제곱해서 이른 오차와 늦은 오차가 서로 지워지지 않게 해요.",
        "제곱하면 크게 틀린 기록의 영향이 커져요."
      ],
      "cautions": [
        "유난히 늦은 주문 하나가 직선을 자기 쪽으로 끌어당길 수 있어요."
      ],
      "keyterms": [
        { "en": "ordinary least squares (OLS)", "ko": "최소제곱법" },
        { "en": "squared residuals", "ko": "잔차 제곱" }
      ]
    },
    {
      "id": "error-scores", "group": "g-linear", "title": "오차 지표",
      "source": "02_simple_linear_regression.ipynb",
      "definition": "예측이 얼마나 빗나갔는지 분 단위로 나타내는 점수예요.",
      "table": {
        "head": ["지표", "특징"],
        "rows": [
          ["MAE(평균 절대 오차)", "빗나간 크기의 평균이에요"],
          ["RMSE(평균 제곱근 오차)", "크게 빗나간 것에 더 큰 영향을 줘요"]
        ]
      },
      "cautions": [
        "둘 다 정확도 퍼센트가 아니에요.",
        "새 예측을 평가하려면 따로 떼어 둔 테스트 기록이 필요해요."
      ],
      "keyterms": [
        { "en": "MAE", "ko": "평균 절대 오차" },
        { "en": "RMSE", "ko": "평균 제곱근 오차" },
        { "en": "test deliveries", "ko": "테스트용 배달 기록" }
      ]
    },
    {
      "id": "multiple-linear", "group": "g-linear", "title": "다중 선형 회귀",
      "source": "03_multiple_linear_regression.ipynb",
      "definition": "입력 여러 개를 합쳐서 하나의 예측을 만들어요.",
      "formula": { "ko": "예측 관객 수 = 기본 관객 + 화제성 기여 + 가격 기여", "en": "Predicted audience = starting audience + buzz contribution + price contribution" },
      "points": [
        "계수 하나는 다른 입력을 고정했을 때 예측이 얼마나 바뀌는지 나타내요.",
        "계수는 훈련용 기록으로 최소제곱법(OLS)을 써서 맞춰요."
      ],
      "cautions": [
        "관련이 있다고 해서 원인이라는 뜻은 아니에요.",
        "입력을 늘려도 도움이 되는지는 테스트용 기록으로 확인해야 해요."
      ],
      "example": {
        "title": "영화 관객 수 예측",
        "points": [
          "입력은 온라인 화제성과 티켓 가격이에요.",
          "이 데이터에서는 가격이 높을수록 관객이 적어요.",
          "화제성만 쓰는 모델은 가격이 달라져도 예측이 안 바뀌어요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/06-1_Regression/assets/03_adding_two_inputs.png", "alt": "Online buzz and ticket price contribute to a prediction of a movie audience." },
      "keyterms": [
        { "en": "multiple linear regression", "ko": "다중 선형 회귀" },
        { "en": "coefficient", "ko": "계수" },
        { "en": "association", "ko": "연관" }
      ]
    },
    {
      "id": "unsupported-combination", "group": "g-linear", "title": "드문 입력 조합",
      "source": "03_multiple_linear_regression.ipynb",
      "definition": "입력 하나하나는 범위 안이어도, 그 조합은 기록이 거의 없을 수 있어요.",
      "cautions": [
        "비슷한 기록이 없는 조합에서는 예측이 틀릴 수 있어요.",
        "음수 관객 같은 결과는 모델 실패예요."
      ],
      "example": {
        "title": "영화 관객 수 예측",
        "points": [
          "화제성이 높은 영화일수록 비싼 경향이 있어요.",
          "아주 싸면서 화제성이 높은 영화는 비슷한 기록이 적어요."
        ]
      },
      "keyterms": [
        { "en": "unsupported combinations", "ko": "근거 없는 조합" },
        { "en": "model failure", "ko": "모델 실패" }
      ]
    },

    {
      "id": "polynomial", "group": "g-poly", "title": "다항 회귀",
      "source": "04_polynomial_regression_and_regularization.ipynb",
      "definition": "입력의 곡선 특성을 더해서 예측이 휠 수 있게 해요.",
      "points": [
        "차수가 높을수록 곡선이 더 많이 휠 수 있어요.",
        "계수는 여전히 선형으로 들어가서 선형 모델 계열이에요."
      ],
      "cautions": [
        "차수가 높으면 무작위 변동까지 따라갈 수 있어요.",
        "기록 범위 밖에서는 값이 급격히 커지거나 음수가 될 수 있어요."
      ],
      "example": {
        "title": "롤러코스터 대기 시간",
        "points": [
          "대기줄은 오후 최고점까지 늘었다가 줄어요.",
          "직선으로는 늘고 주는 변화를 둘 다 나타낼 수 없어요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/06-1_Regression/assets/04_fitting_a_curve.png", "alt": "Simulated roller-coaster waits compared with a straight line, a smooth curve, and a highly flexible curve." },
      "keyterms": [
        { "en": "polynomial regression", "ko": "다항 회귀" },
        { "en": "polynomial degree", "ko": "다항식 차수" },
        { "en": "linear-model family", "ko": "선형 모델 계열" }
      ]
    },
    {
      "id": "fit-quality", "group": "g-poly", "title": "과소적합·과대적합",
      "source": "04_polynomial_regression_and_regularization.ipynb",
      "definition": "모델이 패턴을 너무 못 따라가거나, 지나치게 따라가는 문제예요.",
      "table": {
        "head": ["", "롤러코스터 예시에서"],
        "rows": [
          ["과소적합", "직선이 오후 최고점을 놓쳐요"],
          ["과대적합", "곡선이 잡음 섞인 기록 하나하나를 쫓아요. 옛 기록은 잘 맞지만 새 방문은 잘 못 맞혀요"]
        ]
      },
      "keyterms": [
        { "en": "underfit", "ko": "과소적합" },
        { "en": "overfit", "ko": "과대적합" },
        { "en": "noisy records", "ko": "잡음 섞인 기록" }
      ]
    },
    {
      "id": "ridge", "group": "g-poly", "title": "릿지 규제",
      "source": "04_polynomial_regression_and_regularization.ipynb",
      "definition": "계수가 너무 커지지 않게 막는 방법이에요.",
      "points": [
        "불안정하게 휘는 곡선을 줄여 줄 수 있어요.",
        "특성의 크기를 맞춰서 벌점을 서로 비교할 수 있게 해요."
      ],
      "cautions": [
        "규제가 지나치면 쓸모 있는 패턴까지 평평해져요."
      ],
      "keyterms": [
        { "en": "ridge regularization", "ko": "릿지 규제" },
        { "en": "penalty", "ko": "벌점" },
        { "en": "large coefficients", "ko": "큰 계수" }
      ]
    },
    {
      "id": "validation", "group": "g-poly", "title": "검증 데이터",
      "source": "04_polynomial_regression_and_regularization.ipynb",
      "definition": "차수와 벌점 같은 설정을 고를 때 쓰는, 따로 떼어 둔 데이터예요.",
      "table": {
        "head": ["데이터", "역할"],
        "rows": [
          ["훈련 기록", "모델을 맞춰요"],
          ["검증 기록", "차수와 벌점 선택을 확인해요"],
          ["테스트 세트", "최종 평가에 써요. 손대지 않고 남겨 둬요"]
        ]
      },
      "points": [
        "미리 정한 후보 4개 중 검증 결과가 가장 좋은 것을 골라요."
      ],
      "cautions": [
        "검증 오차가 낮아도 상황이 바뀌면 정확하다는 보장은 없어요."
      ],
      "keyterms": [
        { "en": "validation", "ko": "검증" },
        { "en": "validation error", "ko": "검증 오차" },
        { "en": "test set", "ko": "테스트 세트" }
      ]
    },

    {
      "id": "nonlinear", "group": "g-nonlin", "title": "비선형 회귀",
      "source": "05_nonlinear_regression_and_forecasting.ipynb",
      "definition": "파라미터가 식 안에 비선형으로 들어가는 회귀예요.",
      "formula": { "ko": "예측 누적 조회수 = A × (1 − e^(−kt))", "en": "V̂(t) = A(1 − e^(−kt))" },
      "points": [
        "k가 지수에 들어 있어서 k에 대해 비선형이에요.",
        "곡선은 0에서 시작해서 A에 가까워져요."
      ],
      "table": {
        "head": ["파라미터", "뜻"],
        "rows": [
          ["A", "관객 상한이에요. 크면 상한이 올라가요"],
          ["k", "퍼지는 속도예요. 크면 상한에 더 빨리 다가가요"]
        ]
      },
      "cautions": [
        "다항 회귀처럼 곡선이어도 계수가 선형이면 비선형 모델이 아니에요."
      ],
      "example": {
        "title": "영상 조회수",
        "points": [
          "조회수는 처음엔 빨리 늘다가, 관심 있는 시청자가 줄면서 느려져요.",
          "t는 게시 후 시간이고, 조회수와 A는 천 회 단위예요."
        ]
      },
      "figure": { "src": "https://raw.githubusercontent.com/sonamu-jun/introduction-to-ai-convergence/main/06-1_Regression/assets/05_video_reach.png", "alt": "A simulated video gains views quickly, then approaches an audience ceiling as fewer interested viewers remain." },
      "keyterms": [
        { "en": "nonlinear", "ko": "비선형" },
        { "en": "saturation curve", "ko": "포화 곡선" },
        { "en": "audience ceiling", "ko": "관객 상한" },
        { "en": "spread rate", "ko": "확산 속도" }
      ]
    },
    {
      "id": "nonlinear-fit", "group": "g-nonlin", "title": "곡선 맞추기",
      "source": "05_nonlinear_regression_and_forecasting.ipynb",
      "definition": "경사하강법으로 A와 k를 조금씩 고쳐서 곡선을 맞춰요.",
      "points": [
        "제곱 오차의 경사를 써서 두 파라미터를 반복해서 고쳐요.",
        "시작점 세 개를 비교해서 훈련 비용이 가장 낮은 결과를 남겨요."
      ],
      "cautions": [
        "스텝 크기가 너무 크면 지나칠 수 있어요.",
        "시작점을 여러 개 써도 가장 좋은 적합을 찾았다는 증명은 아니에요."
      ],
      "keyterms": [
        { "en": "gradient descent", "ko": "경사하강법" },
        { "en": "step size", "ko": "스텝 크기" },
        { "en": "starting points", "ko": "시작점" },
        { "en": "training cost", "ko": "훈련 비용" }
      ]
    },
    {
      "id": "forecasting", "group": "g-nonlin", "title": "예측(포캐스팅)",
      "source": "05_nonlinear_regression_and_forecasting.ipynb",
      "definition": "앞의 기록으로 모델을 맞추고, 뒤의 기록으로 미래 예측을 확인해요.",
      "points": [
        "처음 12시간 기록만 적합에 써요.",
        "그 뒤의 곡선은 같은 포화 가정을 둔 예측이에요.",
        "직선은 같은 속도로 계속 늘지만, 이 곡선은 점점 느려져요."
      ],
      "cautions": [
        "예측을 시험하려면 뒤의 기록은 적합에서 빼야 해요.",
        "재게시처럼 기록에 없던 사건은 예측할 수 없어요."
      ],
      "keyterms": [
        { "en": "forecasting", "ko": "예측(포캐스팅)" },
        { "en": "forecast", "ko": "예측값" },
        { "en": "saturation assumption", "ko": "포화 가정" },
        { "en": "repost", "ko": "재게시" }
      ]
    }
  ],
  "terms": [
    { "en": "regression", "ko": "회귀", "def": "과거 예시로 입력과 숫자 결과의 관계를 배워서 숫자를 예측해요.", "def_en": "Regression learns a relationship between inputs and a numerical outcome from past examples.", "source": "01_what_is_regression.ipynb" },
    { "en": "classification", "ko": "분류", "def": "숫자 대신 범주를 골라요. (예: 늦음 / 제시간)", "def_en": "Classification chooses a category, such as late or on time; regression predicts a quantity, such as delivery time.", "source": "01_what_is_regression.ipynb" },
    { "en": "fitting", "ko": "적합", "def": "여러 기록의 예측 오차가 작아지도록 선이나 곡선을 고르는 거예요.", "def_en": "Fitting chooses the line or curve that keeps prediction errors small across many records.", "source": "01_what_is_regression.ipynb" },
    { "en": "conditional mean", "ko": "조건부 평균", "def": "비슷한 입력에서 나온 결과들의 평균이에요.", "def_en": "With squared-error fitting, the model targets the average outcome for similar inputs, called the conditional mean.", "source": "01_what_is_regression.ipynb" },
    { "en": "interpolation", "ko": "보간", "def": "관찰한 입력 범위 안에서 예측하는 거예요.", "def_en": "This is interpolation: prediction inside the observed input range.", "source": "01_what_is_regression.ipynb" },
    { "en": "extrapolation", "ko": "외삽", "def": "관찰한 입력 범위 밖에서 예측하는 거예요. 같은 추세가 안 맞을 수 있어요.", "def_en": "A 12 km trip is extrapolation, beyond that range, where the same trend may no longer hold.", "source": "01_what_is_regression.ipynb" },
    { "en": "numerical interpolation", "ko": "수치 보간", "def": "기록된 점들을 불규칙한 부분까지 정확히 이어요.", "def_en": "Numerical interpolation instead joins the recorded dots exactly, including their irregularities.", "source": "01_what_is_regression.ipynb" },
    { "en": "forecasting", "ko": "예측(포캐스팅)", "def": "앞의 기록으로 모델을 맞추고, 뒤의 기록으로 예측을 확인해요.", "def_en": "Forecasting applies this idea to the future: earlier records fit the model, and later records check its predictions.", "source": "01_what_is_regression.ipynb" },
    { "en": "intercept", "ko": "절편", "def": "직선의 시작 값이에요. 배달 예시에서는 시작 대기 시간이에요.", "def_en": "The intercept sets the starting wait.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "slope", "ko": "기울기", "def": "입력이 1 늘 때 더해지는 양이에요. 배달 예시에서는 1 km당 추가 시간이에요.", "def_en": "The slope sets the additional minutes per kilometre.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "model coefficients", "ko": "모델 계수", "def": "절편과 기울기처럼 기록으로 추정하는 값이에요.", "def_en": "These are model coefficients, estimated from previous deliveries.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "residual", "ko": "잔차", "def": "기록 값에서 예측 값을 뺀 거예요.", "def_en": "A residual is the recorded time minus the predicted time.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "ordinary least squares (OLS)", "ko": "최소제곱법", "def": "잔차 제곱의 합이 가장 작은 직선을 골라요.", "def_en": "Ordinary least squares, or OLS, fits a line by minimizing squared residuals.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "MAE", "ko": "평균 절대 오차", "def": "빗나간 크기의 평균이에요. 단위는 분이에요.", "def_en": "The typical miss is MAE, the average size of the gaps in minutes.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "RMSE", "ko": "평균 제곱근 오차", "def": "크게 빗나간 것에 더 큰 영향을 주는 오차 점수예요.", "def_en": "RMSE is another error score in minutes that gives large misses more influence.", "source": "02_simple_linear_regression.ipynb" },
    { "en": "multiple linear regression", "ko": "다중 선형 회귀", "def": "입력 여러 개를 합쳐서 하나의 예측을 만들어요.", "def_en": "Multiple linear regression combines several inputs in one prediction.", "source": "03_multiple_linear_regression.ipynb" },
    { "en": "coefficient", "ko": "계수", "def": "다른 입력을 고정했을 때 예측이 얼마나 바뀌는지 나타내요.", "def_en": "Each coefficient describes a change in the model's prediction while the other input stays fixed.", "source": "03_multiple_linear_regression.ipynb" },
    { "en": "polynomial regression", "ko": "다항 회귀", "def": "곡선 특성을 더해서 예측이 휠 수 있게 해요.", "def_en": "Polynomial regression adds curved features of time so that the prediction can bend.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "polynomial degree", "ko": "다항식 차수", "def": "곡선이 얼마나 유연하게 휠 수 있는지 정해요.", "def_en": "Polynomial degree controls how flexible the curve can be.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "underfit", "ko": "과소적합", "def": "모델이 패턴을 놓치는 거예요. (예: 직선이 최고점을 놓침)", "def_en": "A line that misses the afternoon peak underfits.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "overfit", "ko": "과대적합", "def": "옛 기록은 잘 맞지만 새 데이터는 잘 못 맞히는 거예요.", "def_en": "A curve that chases individual noisy records may overfit: it fits old records closely but predicts new visits poorly.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "ridge regularization", "ko": "릿지 규제", "def": "계수가 너무 커지지 않게 막아요.", "def_en": "Ridge regularization discourages large coefficients.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "validation", "ko": "검증", "def": "차수와 벌점 선택을 확인하는 따로 떼어 둔 기록이에요.", "def_en": "Orange validation visits check the choice of degree and penalty.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "test set", "ko": "테스트 세트", "def": "최종 평가를 위해 손대지 않고 남겨 둔 데이터예요.", "def_en": "Validation error helps tune the model; an untouched test set is needed for a final evaluation.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "en": "saturation curve", "ko": "포화 곡선", "def": "빨리 늘다가 상한에 가까워지며 느려지는 곡선이에요.", "def_en": "A saturation curve represents this pattern with an eventual audience size and a spread rate.", "source": "05_nonlinear_regression_and_forecasting.ipynb" },
    { "en": "audience ceiling", "ko": "관객 상한", "def": "포화 곡선이 다가가는 최댓값 A예요.", "def_en": "A > 0 is the audience ceiling in thousands of views.", "source": "05_nonlinear_regression_and_forecasting.ipynb" },
    { "en": "spread rate", "ko": "확산 속도", "def": "상한에 얼마나 빨리 다가가는지 정하는 k예요.", "def_en": "k > 0 is the spread rate per hour.", "source": "05_nonlinear_regression_and_forecasting.ipynb" },
    { "en": "nonlinear", "ko": "비선형", "def": "k가 지수에 들어 있어서 k에 대해 비선형이에요.", "def_en": "The model is nonlinear in k because k appears in the exponent.", "source": "05_nonlinear_regression_and_forecasting.ipynb" }
  ],
  "check": [
    { "title": "내가 풀어 쓴 것 (교수님 표현과 비교해 보기)", "items": [
      "한국어 용어(조건부 평균, 포화 곡선, 확산 속도, 릿지 규제 등)는 내가 붙인 번역이에요.",
      "MAE와 RMSE의 한국어 풀네임(평균 절대 오차, 평균 제곱근 오차)은 자료에 없어서 붙인 이름이에요.",
      "비선형 회귀, 검증 데이터, 드문 입력 조합의 한 줄 정의는 예시를 보고 풀어 쓴 거예요."
    ] },
    { "title": "넣지 않은 것", "items": [
      "MAE·RMSE 계산식과 릿지 규제 식은 자료에 없어요.",
      "검증에 쓴 후보 4개의 차수와 벌점 값 같은 숫자는 코드에만 있어요."
    ] },
    { "title": "사용 안내", "items": [
      "수업 예시의 데이터는 모두 시뮬레이션이에요. 자료에 그렇게 적혀 있어요.",
      "그림은 인터넷이 연결돼야 보여요.",
      "데모는 materials/week06 노트북을 실행하세요."
    ] }
  ],
  "quiz": [
    { "id": "w06-q01", "card": "regression", "q": "What does regression predict?", "q_ko": "회귀는 무엇을 예측하나요?", "choices_ko": ["숫자 값", "늦음/정시 같은 범주", "미리 정한 클래스 중 레이블 하나", "확률 기준값"], "choices": ["A numerical quantity", "A category such as late or on time", "A label from a predefined set of classes", "A probability threshold"], "answer": 0, "explain": "회귀는 배달 시간 같은 숫자를 예측해요. 범주를 고르는 건 분류예요.", "source": "01_what_is_regression.ipynb" },
    { "id": "w06-q02", "card": "conditional-mean", "q": "With squared-error fitting, what does the model target?", "q_ko": "제곱 오차로 맞추면 모델은 무엇을 목표로 하나요?", "choices_ko": ["비슷한 입력에서 나온 결과의 평균", "배달 한 건의 정확한 결과", "기록된 가장 큰 결과", "처음 기록된 결과"], "choices": ["The average outcome for similar inputs", "The exact result of one delivery", "The largest recorded outcome", "The first recorded outcome"], "answer": 0, "explain": "제곱 오차로 적합하면 비슷한 입력의 평균 결과, 즉 조건부 평균을 목표로 해요. 한 건의 정확한 결과를 약속하진 않아요.", "source": "01_what_is_regression.ipynb" },
    { "id": "w06-q03", "card": "interp-extrap", "q": "A model is fitted to routes from 1 to 8 km. Predicting a 12 km trip is called:", "q_ko": "1~8 km 경로로 맞춘 모델로 12 km 배달을 예측하는 것을 무엇이라고 하나요?", "choices_ko": ["외삽", "보간", "수치 보간", "규제"], "choices": ["Extrapolation", "Interpolation", "Numerical interpolation", "Regularization"], "answer": 0, "explain": "관찰한 범위 밖 예측이라 외삽이에요. 범위 안의 4 km 예측이 보간이에요.", "source": "01_what_is_regression.ipynb" },
    { "id": "w06-q04", "card": "residual", "q": "What is a residual?", "q_ko": "잔차란?", "choices_ko": ["기록된 시간 − 예측한 시간", "예측한 시간 − 시작 대기 시간", "기울기 × 거리", "차이들의 평균 크기"], "choices": ["The recorded time minus the predicted time", "The predicted time minus the starting wait", "The slope multiplied by the distance", "The average size of the gaps"], "answer": 0, "explain": "잔차 = 기록 값 − 예측 값이에요. 빗나간 크기의 평균은 MAE예요.", "source": "02_simple_linear_regression.ipynb" },
    { "id": "w06-q05", "card": "ols", "q": "Why does OLS square the residuals?", "q_ko": "최소제곱법(OLS)이 잔차를 제곱하는 이유는?", "choices_ko": ["빨리 온 오차와 늦게 온 오차가 서로 지워지지 않게 하고, 크게 빗나간 것에 더 무게를 주려고", "오차를 정확도 퍼센트로 바꾸려고", "모든 잔차를 0으로 만들려고", "유난히 늦은 주문을 무시하려고"], "choices": ["To prevent early and late errors from cancelling and give large misses more influence", "To turn the error into an accuracy percentage", "To make every residual zero", "To ignore unusually late orders"], "answer": 0, "explain": "제곱하면 이른 오차와 늦은 오차가 서로 지워지지 않고, 크게 틀린 기록의 영향이 커져요. 그래서 유난히 늦은 주문이 직선을 끌어당길 수 있어요.", "source": "02_simple_linear_regression.ipynb" },
    { "id": "w06-q06", "card": "simple-linear", "q": "In the delivery example, what does the intercept set?", "q_ko": "배달 예시에서 절편은 무엇을 정하나요?", "choices_ko": ["시작 대기 시간", "1 km당 추가되는 분", "배달 기록의 개수", "가장 큰 잔차"], "choices": ["The starting wait", "The additional minutes per kilometre", "The number of delivery records", "The largest residual"], "answer": 0, "explain": "절편은 시작 대기 시간, 기울기는 1 km당 더 걸리는 시간을 정해요.", "source": "02_simple_linear_regression.ipynb" },
    { "id": "w06-q07", "card": "error-scores", "q": "Which statement about MAE and RMSE is true?", "q_ko": "MAE와 RMSE에 대해 맞는 말은?", "choices_ko": ["둘 다 정확도 퍼센트가 아니에요", "MAE는 정확도 퍼센트예요", "RMSE는 크게 빗나간 것에 영향을 덜 줘요", "둘 다 새 예측을 자동으로 평가해요"], "choices": ["Neither score is an accuracy percentage", "MAE is an accuracy percentage", "RMSE gives large misses less influence", "Both automatically evaluate new predictions"], "answer": 0, "explain": "둘 다 분 단위 오차 점수이고, 정확도 퍼센트가 아니에요. RMSE는 크게 빗나간 것에 더 큰 영향을 줘요.", "source": "02_simple_linear_regression.ipynb" },
    { "id": "w06-q08", "card": "multiple-linear", "q": "In multiple linear regression, what does each coefficient describe?", "q_ko": "다중 선형 회귀에서 각 계수는 무엇을 나타내나요?", "choices_ko": ["다른 입력을 그대로 둘 때 예측이 변하는 정도", "실제로 가격을 바꾸면 생길 결과", "영화의 전체 관객 수", "모델의 입력 개수"], "choices": ["A change in the prediction while the other input stays fixed", "What a real price change would cause", "The total audience of a movie", "The number of inputs in the model"], "answer": 0, "explain": "계수는 다른 입력을 고정했을 때 예측이 얼마나 바뀌는지 나타내요. 실제 원인 효과를 뜻하진 않아요.", "source": "03_multiple_linear_regression.ipynb" },
    { "id": "w06-q09", "card": "multiple-linear", "q": "A higher price is associated with a smaller audience in the dataset. What follows?", "q_ko": "데이터에서 가격이 높을수록 관객이 적은 경향이 있어요. 여기서 말할 수 있는 것은?", "choices_ko": ["이 연관만으로 실제 가격을 바꾸면 어떻게 될지는 알 수 없어요", "가격을 올리면 관객이 줄어요", "가격은 예측에 영향이 없어요", "화제성이 가격의 원인이에요"], "choices": ["This association does not establish what a real price change would cause", "Raising the price will reduce the audience", "Price has no effect on the prediction", "Buzz causes the price"], "answer": 0, "explain": "데이터에서 관련이 있다고 해서 원인이라는 뜻은 아니에요.", "source": "03_multiple_linear_regression.ipynb" },
    { "id": "w06-q10", "card": "unsupported-combination", "q": "At an unsupported combination of inputs, the line predicts a negative audience. This is:", "q_ko": "기록이 거의 없는 입력 조합에서 직선이 관객 수를 음수로 예측해요. 이것은?", "choices_ko": ["의미 있는 관객 수가 아니라 모델의 실패예요", "의미 있는 관객 수예요", "모델이 잘 맞았다는 증거예요", "보간의 예예요"], "choices": ["A model failure, not a meaningful ticket count", "A meaningful ticket count", "Proof that the model is well fitted", "An example of interpolation"], "answer": 0, "explain": "입력 하나하나는 범위 안이어도 조합이 드물면 이상한 값이 나올 수 있어요. 음수 관객은 모델 실패예요.", "source": "03_multiple_linear_regression.ipynb" },
    { "id": "w06-q11", "card": "polynomial", "q": "Why does polynomial regression belong to the linear-model family?", "q_ko": "다항 회귀가 선형 모델에 속하는 이유는?", "choices_ko": ["계수가 여전히 선형으로 들어가요", "예측이 항상 직선이에요", "입력을 하나만 써요", "계수가 없어요"], "choices": ["The coefficients still enter linearly", "Its prediction is always a straight line", "It uses only one input", "It has no coefficients"], "answer": 0, "explain": "예측은 곡선이지만 계수가 선형으로 들어가서 선형 모델 계열이에요.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "id": "w06-q12", "card": "fit-quality", "q": "A curve fits old records closely but predicts new visits poorly. This is:", "q_ko": "곡선이 옛 기록에는 딱 맞는데 새 방문은 잘 못 맞혀요. 이것은?", "choices_ko": ["과대적합", "과소적합", "보간", "보정"], "choices": ["Overfitting", "Underfitting", "Interpolation", "Calibration"], "answer": 0, "explain": "잡음 섞인 기록까지 쫓으면 과대적합이에요. 최고점을 놓치는 직선은 과소적합이에요.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "id": "w06-q13", "card": "ridge", "q": "What does ridge regularization do?", "q_ko": "릿지 규제는 무엇을 하나요?", "choices_ko": ["계수가 커지지 않게 막아요", "곡선 특성을 더 넣어요", "테스트 세트를 대신해요", "정확한 예측을 보장해요"], "choices": ["It discourages large coefficients", "It adds more curved features", "It replaces the test set", "It guarantees an accurate prediction"], "answer": 0, "explain": "릿지 규제는 계수가 커지지 않게 막아서 불안정한 휨을 줄여요. 지나치면 쓸모 있는 패턴까지 평평해져요.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "id": "w06-q14", "card": "validation", "q": "In the roller-coaster example, what are the validation visits used for?", "q_ko": "롤러코스터 예시에서 검증 방문 기록은 무엇에 쓰나요?", "choices_ko": ["차수와 벌점 선택을 확인하는 데", "최종 평가에", "계수를 맞추는 데", "새 방문 기록을 만드는 데"], "choices": ["To check the choice of degree and penalty", "To give the final evaluation", "To fit the coefficients", "To create new visit records"], "answer": 0, "explain": "검증 기록은 설정을 고를 때 써요. 최종 평가는 손대지 않은 테스트 세트로 해요.", "source": "04_polynomial_regression_and_regularization.ipynb" },
    { "id": "w06-q15", "card": "nonlinear", "q": "Why is the saturation model V̂(t) = A(1 − e^(−kt)) nonlinear?", "q_ko": "포화 모델 V̂(t) = A(1 − e^(−kt))가 비선형인 이유는?", "choices_ko": ["k가 지수 안에 들어 있어서", "예측이 곡선이라서", "파라미터가 두 개라서", "0에서 시작해서"], "choices": ["Because k appears in the exponent", "Because its prediction is curved", "Because it has two parameters", "Because it starts at zero"], "answer": 0, "explain": "k가 지수에 들어 있어서 비선형이에요. 곡선 모양만으로는 비선형이라고 할 수 없어요.", "source": "05_nonlinear_regression_and_forecasting.ipynb" },
    { "id": "w06-q16", "card": "nonlinear", "q": "What happens when the spread rate k is larger?", "q_ko": "확산 속도 k가 커지면 어떻게 되나요?", "choices_ko": ["곡선이 상한에 더 빨리 다가가요", "관객 상한이 올라가요", "곡선이 0보다 위에서 시작해요", "조회수가 시간이 갈수록 줄어요"], "choices": ["The curve approaches the ceiling sooner", "The audience ceiling rises", "The curve starts above zero", "The views decrease over time"], "answer": 0, "explain": "k가 크면 상한에 더 빨리 다가가요. 상한을 올리는 건 A예요.", "source": "05_nonlinear_regression_and_forecasting.ipynb" },
    { "id": "w06-q17", "card": "forecasting", "q": "If later observations are to test a forecast, they must:", "q_ko": "나중 관측값으로 예측을 시험하려면, 그 값은 어떻게 해야 하나요?", "choices_ko": ["모델 맞추기에 쓰지 않고 빼 둬요", "모델 맞추기에 써요", "앞의 기록을 대신해요", "아예 무시해요"], "choices": ["Stay out of fitting", "Be used for fitting", "Replace the earlier records", "Be ignored entirely"], "answer": 0, "explain": "뒤의 기록을 적합에 쓰면 예측을 시험할 수 없어요. 그래서 적합에서 빼 둬요.", "source": "05_nonlinear_regression_and_forecasting.ipynb" },
    { "id": "w06-q18", "card": "interp-extrap", "q": "Why can't the fitted curve anticipate a future repost?", "q_ko": "맞춘 곡선이 앞으로 있을 재게시를 예측하지 못하는 이유는?", "choices_ko": ["그 사건을 나타내는 입력이 곡선에 없어서", "스텝 크기가 너무 작아서", "시작점을 너무 많이 써서", "다항식 차수가 너무 낮아서"], "choices": ["The curve has no input describing that event", "The step size is too small", "Too many starting points were used", "The polynomial degree is too low"], "answer": 0, "explain": "재게시를 나타내는 입력이 없어서, 과거에 더 잘 맞춰도 그 시점과 크기를 알 수 없어요.", "source": "05_nonlinear_regression_and_forecasting.ipynb" }
  ]
});
