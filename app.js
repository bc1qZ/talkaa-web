const practiceSets = [
  {
    id: "crowded-place",
    part: "Part1",
    titleZh: "拥挤的地方",
    titleEn: "Crowded place",
    status: "done",
    date: "2026年5月21日",
    questions: [
      "Is the city where you live crowded?",
      "What places in your city are usually packed with people?",
      "Do you enjoy busy places or quiet places more?",
      "Why do some people like crowded places?",
      "How can a city reduce traffic and crowding?"
    ],
    sampleAnswer:
      "Yeah, definitely. I live in Chongqing, which is one of the biggest cities in China, so it's pretty crowded, especially during rush hour. You know, the streets are always packed with people and traffic.",
    polishedAnswer:
      "Yeah, definitely. I live in Chongqing, which is one of the biggest cities in China, so it's pretty crowded, especially during rush hour. You know, the streets are always packed with people and traffic.",
    suggestions: [
      {
        tag: "语法",
        original: "The Chongqing is Travel City",
        improved: "Chongqing is a major tourist city",
        explanation:
          "城市名前通常不加定冠词，'Travel City' 也不太自然，换成 'a major tourist city' 会更地道。"
      },
      {
        tag: "语法",
        original: "this a almost the bigger city",
        improved: "it's one of the biggest cities",
        explanation:
          "这里需要完整主语和固定搭配，'one of the biggest cities' 比较级更准确。"
      }
    ],
    metrics: {
      fluency: 5.0,
      pronunciation: 5.5,
      vocabulary: 5.0,
      grammar: 5.0
    },
    analyses: [
      {
        name: "流利度与连贯性",
        text:
          "回答结构清晰，先给出直接答案，再用城市举例支撑观点。可以再加一点连接词，比如 'well', 'actually', 'so'，让表达更自然。"
      },
      {
        name: "词汇多样性",
        text:
          "基础词用得准确，但可以加入 'packed', 'bustling', 'tourist destination' 这样的表达，让内容更生动。"
      },
      {
        name: "语法准确性",
        text:
          "整体句式比较稳，但如果能再加一个原因状语从句，或者描述高峰时段的细节，语言层次会更好。"
      },
      {
        name: "发音",
        text:
          "如果你在练这题，建议重点把 'crowded', 'Chongqing', 'traffic' 读清楚，停顿自然一点，分数会更容易往上走。"
      }
    ]
  },
  {
    id: "story-book-animals",
    part: "Part2",
    titleZh: "包含动物的故事或书",
    titleEn: "Describe a story/book with animals in it",
    status: "pending",
    cueCard: [
      "What animals are in it",
      "What the story/book is about",
      "Why you read the story/book",
      "And explain what you think of this story/book"
    ],
    questions: [
      "Describe a story/book with animals in it"
    ],
    sampleAnswer:
      "I'd like to talk about a book called Charlotte's Web. It features a pig named Wilbur and a clever spider called Charlotte. I read it when I was in middle school because my English teacher recommended it, and I loved how warm and touching the story was.",
    polishedAnswer:
      "I'd like to talk about a book called Charlotte's Web. It features a pig named Wilbur and a clever spider called Charlotte. I first read it in middle school after my English teacher recommended it, and I still remember how touching and comforting it felt. What I like most is that it uses simple language to talk about friendship, loyalty, and growing up.",
    suggestions: [
      {
        tag: "内容",
        original: "It is a story with animals.",
        improved: "It is a touching story about friendship, loyalty, and growing up.",
        explanation:
          "Part 2 更需要展开内容，除了点出动物，也要补充故事主线和你的感受。"
      }
    ],
    metrics: {
      fluency: 5.5,
      pronunciation: 5.5,
      vocabulary: 5.5,
      grammar: 5.0
    },
    analyses: [
      {
        name: "流利度",
        text: "这类题更适合先按提纲组织，再自然地延伸一个细节或感受。"
      },
      {
        name: "词汇",
        text: "可以多用 touching, memorable, heartwarming 这样的形容词拉高表现。"
      },
      {
        name: "语法",
        text: "优先保证时态稳定，再尝试加入定语从句和原因句。"
      },
      {
        name: "发音",
        text: "书名和角色名建议多跟读几次，专有名词发音会很加分。"
      }
    ]
  },
  {
    id: "interesting-building",
    part: "Part3",
    titleZh: "有趣的建筑",
    titleEn: "Describe an interesting building",
    status: "pending",
    questions: [
      "Describe an interesting building in your city",
      "Why do you think it is interesting?",
      "Would you recommend other people to visit it?"
    ],
    sampleAnswer:
      "One interesting building in my city is the Raffles City complex. I like it because the design is futuristic and it has become a landmark that many tourists want to visit.",
    polishedAnswer:
      "One interesting building in my city is the Raffles City complex. I find it fascinating because its design looks futuristic, and it has already become a landmark in Chongqing. Whenever friends visit my city, it's one of the first places I recommend.",
    suggestions: [],
    metrics: {
      fluency: 5.0,
      pronunciation: 5.0,
      vocabulary: 5.5,
      grammar: 5.0
    },
    analyses: [
      {
        name: "流利度",
        text: "描述建筑时可以先说外观，再说地点，最后说个人感受，思路会更顺。"
      },
      {
        name: "词汇",
        text: "可以准备 landmark, futuristic, impressive, iconic 这些高频词。"
      },
      {
        name: "语法",
        text: "尽量多用完整句，避免只堆形容词。"
      },
      {
        name: "发音",
        text: "长词建议慢一点说，尤其是 futuristic 和 architecture。"
      }
    ]
  }
];

const state = {
  screen: "home",
  currentSetId: practiceSets[0].id,
  currentQuestionIndex: 0,
  selectedVoice: "Eric",
  trainingMode: "daily",
  timerTotal: 30,
  timerLeft: 30,
  recordedSeconds: 0,
  isRecording: false,
  timerId: null,
  transcript: "",
  mediaRecorder: null,
  speechRecognition: null,
  audioChunks: [],
  audioBlob: null,
  audioUrl: "",
  lastResult: null,
  retryFromFeedback: false,
  trainingData: loadTrainingData()
};

const app = document.querySelector("#app");

function getCurrentSet() {
  return practiceSets.find((item) => item.id === state.currentSetId) || practiceSets[0];
}

function getCurrentQuestion() {
  const set = getCurrentSet();
  return set.questions[state.currentQuestionIndex] || set.questions[0];
}

function render() {
  app.innerHTML = `
    ${renderHomeScreen()}
    ${renderDetailScreen()}
    ${renderPracticeScreen()}
    ${renderFeedbackScreen()}
    ${renderReportScreen()}
  `;
  bindEvents();
}

function renderHomeScreen() {
  const dashboard = getDashboardSummary();
  const topErrors = getTopErrors();
  const feed = [
    {
      title: "Talkaa：5-8月雅思口语新题",
      desc: "Part 1 一次补 13 道小问，帮助你按月份刷新题。"
    },
    {
      title: "Talkaa：5月新题再加更",
      desc: "集中入库的一批新话题，可以用来做晨练和晚练。"
    }
  ];

  return `
    <section class="screen ${state.screen === "home" ? "active" : ""}" data-screen="home">
      <div class="status-bar">
        <span>09:33 ◐</span>
        <span>5G 60</span>
      </div>
      <div class="calendar-strip">
        <div class="calendar-title">2026 年 5 月</div>
        <div class="week-grid">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
        <div class="date-grid">
          <span class="date-cell">18</span>
          <span class="date-cell">19</span>
          <span class="date-cell">20</span>
          <span class="date-cell active">21</span>
          <span class="date-cell">22</span>
          <span class="date-cell">23</span>
          <span class="date-cell">24</span>
        </div>
      </div>
      <div class="hero-row">
        <div>
          <h1 class="hero-title">早上好! <span class="gift">🎁</span></h1>
          <div class="muted">今日 ${dashboard.todayCount}/${dashboard.dailyTarget} 次日常训练</div>
        </div>
        <div class="hero-actions">
          <button class="circle-btn" type="button" data-reset-day="true">↺</button>
          <button class="premium-btn" type="button">7.5 养成</button>
        </div>
      </div>
      <div class="coach-grid">
        <div class="coach-card panel">
          <div class="coach-label">今日节奏</div>
          <div class="coach-value">${dashboard.todayPlanTitle}</div>
          <p>${dashboard.todayPlanBody}</p>
        </div>
        <div class="coach-card panel">
          <div class="coach-label">最近 7 次均分</div>
          <div class="coach-value">${dashboard.averageBand}</div>
          <p>当前最弱维度是 ${dashboard.weakestDimension}，今天优先改它。</p>
        </div>
      </div>
      <div class="habit-card panel">
        <div class="habit-top">
          <div>
            <strong>日常养成面板</strong>
            <div class="muted">目标是稳定冲到 7.5，而不是只看一次分数</div>
          </div>
          <span class="habit-streak">${dashboard.streak} 天</span>
        </div>
        <div class="habit-metrics">
          <div><span>${dashboard.totalSessions}</span><label>累计练习</label></div>
          <div><span>${dashboard.retries}</span><label>二次重答</label></div>
          <div><span>${dashboard.targetGap}</span><label>距 7.5</label></div>
        </div>
      </div>
      <div class="task-panel panel">
        ${practiceSets
          .map(
            (set) => `
            <button class="task-row" type="button" data-open-set="${set.id}">
              <span class="radio ${set.status === "done" ? "done" : ""}"></span>
              <span class="task-copy">
                <span class="badge ${set.part.toLowerCase()}">${set.part}</span>
                <div class="task-title ${set.status === "done" ? "done" : ""}">${set.titleEn}</div>
                <div class="task-subtitle">${set.titleZh}</div>
              </span>
              <span class="chev">›</span>
            </button>
          `
          )
          .join("")}
      </div>
      <div class="feature-grid">
        <button class="feature-card" type="button" data-jump="detail">
          <div>🎙️</div>
          <strong>日常训练</strong>
          <span>Daily Drill</span>
        </button>
        <button class="feature-card" type="button" data-jump="practice">
          <div>⏰</div>
          <strong>立即重答</strong>
          <span>Retry Now</span>
        </button>
        <button class="feature-card" type="button" data-jump="report">
          <div>📖</div>
          <strong>弱点报告</strong>
          <span>My Gaps</span>
        </button>
      </div>
      <div class="section-title">
        <span class="accent-bar"></span>
        <span>最近反复出现的问题</span>
      </div>
      <div class="panel weakness-panel">
        ${
          topErrors.length
            ? topErrors
                .map(
                  (item) => `
                    <div class="weakness-row">
                      <strong>${item.name}</strong>
                      <span>${item.count} 次</span>
                    </div>
                  `
                )
                .join("")
            : `<p class="muted">还没有累计错误记录。先完成 2 到 3 次训练，系统会开始形成你的个人错误本。</p>`
        }
      </div>
      <div class="section-title">
        <span class="accent-bar"></span>
        <span>Talkaa 的朋友圈</span>
      </div>
      ${feed
        .map(
          (item) => `
          <div class="feed-card panel">
            <div class="feed-image">NEW<br />QUESTIONS</div>
            <div>
              <h4>${item.title}</h4>
              <p>${item.desc}</p>
            </div>
            <div class="chev">›</div>
          </div>
        `
        )
        .join("")}
      <div class="nav-bar">
        <button class="nav-item active" type="button">首页</button>
        <button class="nav-item" type="button">真题</button>
        <button class="nav-item" type="button">定制</button>
        <button class="nav-item" type="button">报告</button>
        <button class="nav-item" type="button">我的</button>
      </div>
    </section>
  `;
}

function renderDetailScreen() {
  const set = getCurrentSet();
  const badgeClass = set.part.toLowerCase();
  const isCueCard = set.part === "Part2";

  return `
    <section class="screen ${state.screen === "detail" ? "active" : ""}" data-screen="detail">
      <div class="status-bar">
        <button class="back-btn" type="button" data-back="home">‹ 返回</button>
        <span></span>
      </div>
      <div class="detail-header">
        <div>
          <h2 class="detail-title">${set.titleZh}</h2>
          <p class="detail-subtitle">${set.titleEn}</p>
        </div>
        <span class="badge ${badgeClass}">${set.part}</span>
      </div>
      ${
        isCueCard
          ? `
            <ul class="cue-list">
              ${set.cueCard.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          `
          : `
            <div class="question-list">
              ${set.questions
                .map(
                  (question, index) => `
                    <div class="question-item">
                      <div class="q-head">
                        <span class="q-num">${index + 1}</span>
                        <div class="q-text">${question}</div>
                      </div>
                      <div class="pill-row">
                        <button class="tiny-btn" type="button" data-teach="${index}">💡 教我回答</button>
                        <button class="tiny-btn" type="button" data-polish="${index}">✨ 定制答案</button>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
      }
      <div class="helper-note">
        这个版本现在更偏向你的日常养成路线：每次练完会先抓一个最该改的点，再引导你立刻重答，而不是只给一个分数。
      </div>
      <div class="start-fixed">
        <button class="primary-btn" type="button" data-start-practice="true">开始今天这道题</button>
      </div>
    </section>
  `;
}

function renderPracticeScreen() {
  const question = getCurrentQuestion();
  const progress = ((state.currentQuestionIndex + 1) / getCurrentSet().questions.length) * 100;
  const recordProgress = ((state.timerTotal - state.timerLeft) / state.timerTotal) * 100;
  const minutes = String(Math.floor(state.timerLeft / 60)).padStart(2, "0");
  const seconds = String(state.timerLeft % 60).padStart(2, "0");
  const recorded = `00:${String(state.recordedSeconds).padStart(2, "0")}`;

  return `
    <section class="screen ${state.screen === "practice" ? "active" : ""}" data-screen="practice">
      <div class="status-bar">
        <button class="back-btn" type="button" data-back="detail">‹ 返回</button>
        <strong>${getCurrentSet().part}</strong>
        <button class="ghost-btn" type="button" data-voice="true">🔊 ${state.selectedVoice}</button>
      </div>
      <div class="practice-progress">
        <div class="progress-track">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <div class="muted">${state.currentQuestionIndex + 1}/${getCurrentSet().questions.length}</div>
      </div>
      <div class="prompt-card panel">
        <h3>${question}</h3>
        <button class="ghost-btn" type="button" data-play-question="true">▶ 播放题目</button>
      </div>
      <div class="coach-strip panel">
        <div class="coach-strip-title">${state.retryFromFeedback ? "二次作答目标" : "本题训练目标"}</div>
        <p>${state.retryFromFeedback ? getRetryPrompt() : getPracticePrompt()}</p>
      </div>
      ${
        state.transcript
          ? `
            <div class="chat-bubble">
              <div class="answer-card">
                <h3>${state.transcript}</h3>
                <div>${state.recordedSeconds}"</div>
              </div>
            </div>
          `
          : ""
      }
      <div class="record-panel">
        <div class="record-track">
          <div class="record-fill" style="width:${recordProgress}%"></div>
        </div>
        <div class="timer-panel">
          <div class="timer-label">剩余时间</div>
          <div class="timer-value">${minutes}:${seconds}</div>
          <div class="timer-sub">已录制 ${recorded}</div>
        </div>
        <div class="record-actions">
          <button class="outline-btn" type="button" data-cancel-record="true">取消</button>
          ${
            state.isRecording
              ? `<button class="outline-btn dark" type="button" data-stop-record="true">↑ 发送</button>`
              : `<button class="outline-btn dark" type="button" data-start-record="true">🎙️ 开始录音</button>`
          }
        </div>
      </div>
    </section>
  `;
}

function renderFeedbackScreen() {
  const set = getCurrentSet();
  const result = state.lastResult || buildResult(set.sampleAnswer, set, state.currentQuestionIndex, { persist: false });

  return `
    <section class="screen ${state.screen === "feedback" ? "active" : ""}" data-screen="feedback">
      <div class="status-bar">
        <button class="back-btn" type="button" data-back="practice">‹ 返回</button>
        <strong>${set.part}</strong>
        <button class="ghost-btn" type="button" data-voice="true">🔊 ${state.selectedVoice}</button>
      </div>
      <div class="practice-progress">
        <div class="progress-track">
          <div class="progress-fill" style="width:${((state.currentQuestionIndex + 1) / set.questions.length) * 100}%"></div>
        </div>
        <div class="muted">${state.currentQuestionIndex + 1}/${set.questions.length}</div>
      </div>
      <div class="prompt-card panel">
        <h3>${getCurrentQuestion()}</h3>
        <button class="ghost-btn" type="button" data-play-question="true">▶ 播放题目</button>
      </div>
      <div class="chat-bubble">
        <div class="answer-card">
          <h3>${result.transcript}</h3>
          <div>${result.recordedSeconds}"</div>
        </div>
      </div>
      <div class="score-line">🎯 当前估计分: ${Number(result.overall).toFixed(1)}</div>
      <div class="result-summary">${result.summary}</div>
      <div class="focus-card panel">
        <div class="focus-kicker">这次先只改 1 件事</div>
        <h4>${result.mainFocus.title}</h4>
        <p>${result.mainFocus.body}</p>
        <div class="focus-template">
          <strong>下一次可以直接套这个结构：</strong>
          <span>${result.nextAnswerTemplate}</span>
        </div>
      </div>
      <div class="micro-grid">
        <div class="micro-card panel">
          <div class="micro-title">替换词</div>
          <p>${result.replacementWords.join(" / ")}</p>
        </div>
        <div class="micro-card panel">
          <div class="micro-title">30 秒小任务</div>
          <p>${result.microDrill}</p>
        </div>
      </div>
      <div class="analysis-card">
        <h4>💡 点评与建议</h4>
        ${result.analyses
          .map(
            (item) => `
              <div class="analysis-item">
                <strong>• ${item.name}</strong>
                <p>${item.text}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="suggestion-card panel">
        <h4>✨ 润色后的回答</h4>
        <p>${result.polishedAnswer}</p>
        <div class="answer-tools">
          <button class="icon-btn" type="button" data-copy-answer="true">📄 复制</button>
          <button class="icon-btn" type="button" data-play-answer="true">▶ 播放</button>
          <button class="icon-btn" type="button" data-shadow-answer="true">🗣️ 跟读</button>
        </div>
      </div>
      <div class="bottom-row">
        <button class="outline-btn" type="button" data-retry="true">立刻重答</button>
        <button class="primary-btn" type="button" data-open-report="true">看成长报告</button>
      </div>
    </section>
  `;
}

function renderReportScreen() {
  const set = getCurrentSet();
  const result = state.lastResult || buildResult(set.sampleAnswer, set, state.currentQuestionIndex, { persist: false });

  return `
    <section class="screen ${state.screen === "report" ? "active" : ""}" data-screen="report">
      <div class="status-bar">
        <button class="back-btn" type="button" data-back="feedback">‹ 返回</button>
        <span></span>
        <button class="ghost-btn" type="button" data-close-report="true">✕</button>
      </div>
      <div class="result-hero">
        <div class="muted">${set.date || "2026年5月21日"} <span class="badge ${set.part.toLowerCase()}">${set.part}</span></div>
        <div class="result-band">OVERALL BAND</div>
        <div class="band-value">${result.overall.toFixed(1)}</div>
      </div>
      <div class="metric-grid">
        ${renderMetric("流利度", result.metrics.fluency, "var(--green)")}
        ${renderMetric("发音", result.metrics.pronunciation, "var(--orange)")}
        ${renderMetric("词汇量", result.metrics.vocabulary, "var(--purple)")}
        ${renderMetric("语法", result.metrics.grammar, "var(--teal)")}
      </div>
      <div class="result-card panel">
        <div class="qa-card">
          <div>
            <div class="qa-chip">Q${state.currentQuestionIndex + 1}</div>
            <h3>${getCurrentQuestion()}</h3>
          </div>
          <div><span class="result-band">Band</span> <strong style="font-size:24px;color:var(--gold)">${result.overall.toFixed(1)}</strong></div>
        </div>
        <div class="mini-score-grid">
          <div class="mini-score">${result.metrics.fluency.toFixed(1)}<br />流利</div>
          <div class="mini-score pron">${result.metrics.pronunciation.toFixed(1)}<br />发音</div>
          <div class="mini-score vocab">${result.metrics.vocabulary.toFixed(1)}<br />词汇</div>
          <div class="mini-score grammar">${result.metrics.grammar.toFixed(1)}<br />语法</div>
        </div>
      </div>
      <div class="section-card panel">
        <h4>离 7.5 还有什么差距</h4>
        ${result.band75Targets
          .map(
            (item) => `
              <div class="analysis-item">
                <div class="analysis-tag">${item.title}</div>
                <p>${item.body}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="section-card panel">
        <h4>个人错误本</h4>
        ${renderErrorBook()}
      </div>
      <div class="section-card panel">
        <h4>训练趋势</h4>
        <div class="trend-grid">
          <div><strong>${getDashboardSummary().averageBand}</strong><span>近 7 次均分</span></div>
          <div><strong>${getDashboardSummary().todayCount}</strong><span>今日已练</span></div>
          <div><strong>${getDashboardSummary().retries}</strong><span>二次重答</span></div>
        </div>
      </div>
      ${
        result.suggestions
          .map(
            (item) => `
              <div class="suggestion-card panel">
                <div class="suggestion-header">
                  <span>💡 改进建议</span>
                  <span>${item.tag}</span>
                </div>
                <div class="rewrite">
                  <div class="rewrite-old">${item.original}</div>
                  <div>→</div>
                  <div class="rewrite-new">${item.improved}</div>
                </div>
                <p>${item.explanation}</p>
              </div>
            `
          )
          .join("")
      }
      <div class="suggestion-card panel">
        <h4>三维度点评</h4>
        ${result.analyses
          .map(
            (item, index) => `
              <div class="analysis-item">
                <div class="analysis-tag">${["流利度", "词汇", "语法", "发音"][index] || item.name}</div>
                <p>${item.text}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="suggestion-card panel">
        <h4>✨ 润色后的回答</h4>
        <div class="response-box">${result.polishedAnswer}</div>
        <div class="answer-tools">
          <button class="icon-btn" type="button" data-copy-answer="true">📄 复制</button>
          <button class="icon-btn" type="button" data-play-answer="true">▶ 播放</button>
          <button class="icon-btn" type="button" data-shadow-answer="true">🗣️ 跟读</button>
        </div>
      </div>
      <div class="bottom-row">
        <button class="outline-btn" type="button" data-retry="true">再练这一题</button>
        <button class="primary-btn" type="button" data-next-question="true">下一题</button>
      </div>
    </section>
  `;
}

function renderMetric(label, value, color) {
  const width = `${Math.min((value / 9) * 100, 100)}%`;
  return `
    <div class="metric-row">
      <label><span>${label}</span><span>${value.toFixed(1)}</span></label>
      <div class="metric-bar">
        <div class="metric-fill" style="width:${width};background:${color}"></div>
      </div>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-open-set]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentSetId = button.dataset.openSet;
      state.currentQuestionIndex = 0;
      state.transcript = "";
      state.lastResult = null;
      state.retryFromFeedback = false;
      switchScreen("detail");
    });
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.jump;
      if (target === "practice") {
        beginPractice();
        return;
      }
      switchScreen(target);
    });
  });

  document.querySelectorAll("[data-back]").forEach((button) => {
    button.addEventListener("click", () => {
      stopRecording();
      switchScreen(button.dataset.back);
    });
  });

  document.querySelectorAll("[data-start-practice]").forEach((button) => {
    button.addEventListener("click", beginPractice);
  });

  document.querySelectorAll("[data-play-question]").forEach((button) => {
    button.addEventListener("click", () => speakText(getCurrentQuestion(), "en-US"));
  });

  document.querySelectorAll("[data-start-record]").forEach((button) => {
    button.addEventListener("click", startRecording);
  });

  document.querySelectorAll("[data-stop-record]").forEach((button) => {
    button.addEventListener("click", finishAnswer);
  });

  document.querySelectorAll("[data-cancel-record]").forEach((button) => {
    button.addEventListener("click", () => {
      resetPracticeState();
      render();
    });
  });

  document.querySelectorAll("[data-open-report]").forEach((button) => {
    button.addEventListener("click", () => switchScreen("report"));
  });

  document.querySelectorAll("[data-close-report]").forEach((button) => {
    button.addEventListener("click", () => switchScreen("home"));
  });

  document.querySelectorAll("[data-copy-answer]").forEach((button) => {
    button.addEventListener("click", copyPolishedAnswer);
  });

  document.querySelectorAll("[data-play-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const text = state.lastResult ? state.lastResult.polishedAnswer : getCurrentSet().polishedAnswer;
      speakText(text, "en-US");
    });
  });

  document.querySelectorAll("[data-translate-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      alert("这里先放了英文润色答案。下一步如果你愿意，我可以再给你加中英对照翻译面板。");
    });
  });

  document.querySelectorAll("[data-shadow-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const text = state.lastResult ? state.lastResult.polishedAnswer : getCurrentSet().polishedAnswer;
      speakText(text, "en-US");
      alert("先听一遍，再尝试不看文本复述一次。这个动作对冲 7.5 很有帮助。");
    });
  });

  document.querySelectorAll("[data-retry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.retryFromFeedback = true;
      beginPractice();
    });
  });

  document.querySelectorAll("[data-next-question]").forEach((button) => {
    button.addEventListener("click", nextQuestion);
  });

  document.querySelectorAll("[data-teach]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.teach);
      alert(`参考回答：\n\n${getCurrentSet().questions[index]}\n\n${getCurrentSet().sampleAnswer}`);
    });
  });

  document.querySelectorAll("[data-polish]").forEach((button) => {
    button.addEventListener("click", () => {
      alert(`定制答案示例：\n\n${getCurrentSet().polishedAnswer}`);
    });
  });

  document.querySelectorAll("[data-reset-day]").forEach((button) => {
    button.addEventListener("click", () => {
      resetTodayProgress();
      render();
    });
  });
}

function switchScreen(screen) {
  state.screen = screen;
  render();
}

function beginPractice() {
  stopRecording();
  resetPracticeState();
  switchScreen("practice");
}

function resetPracticeState() {
  state.timerLeft = state.timerTotal;
  state.recordedSeconds = 0;
  state.transcript = "";
  state.audioChunks = [];
  state.audioBlob = null;
  state.audioUrl = "";
  state.lastResult = null;
  state.isRecording = false;
}

async function startRecording() {
  if (state.isRecording) {
    return;
  }

  resetPracticeState();
  state.isRecording = true;
  render();
  startTimer();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i += 1) {
        transcript += `${event.results[i][0].transcript} `;
      }
      state.transcript = transcript.trim();
      render();
    };
    recognition.onerror = () => {
      if (!state.transcript) {
        state.transcript = "语音识别暂时没有拿到文字，你也可以直接发送录音试试。";
      }
      render();
    };
    recognition.start();
    state.speechRecognition = recognition;
  }

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          state.audioChunks.push(event.data);
        }
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        if (state.audioChunks.length > 0) {
          const blob = new Blob(state.audioChunks, { type: "audio/webm" });
          state.audioBlob = blob;
          state.audioUrl = URL.createObjectURL(blob);
        }
      };
      recorder.start();
      state.mediaRecorder = recorder;
    } catch (error) {
      if (!state.transcript) {
        state.transcript = "浏览器拒绝了麦克风权限，可以允许麦克风后再试。";
      }
      render();
    }
  } else if (!state.transcript) {
    state.transcript = "当前浏览器不支持录音，但页面结构和练习流程可以正常体验。";
    render();
  }
}

function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    if (!state.isRecording) {
      clearInterval(state.timerId);
      return;
    }
    if (state.timerLeft > 0) {
      state.timerLeft -= 1;
      state.recordedSeconds += 1;
      render();
      return;
    }
    finishAnswer();
  }, 1000);
}

function stopRecording() {
  clearInterval(state.timerId);
  state.timerId = null;

  if (state.speechRecognition) {
    state.speechRecognition.stop();
    state.speechRecognition = null;
  }

  if (state.mediaRecorder && state.mediaRecorder.state !== "inactive") {
    state.mediaRecorder.stop();
  }
  state.mediaRecorder = null;
  state.isRecording = false;
}

async function finishAnswer() {
  const set = getCurrentSet();
  stopRecording();

  const transcript = state.transcript || set.sampleAnswer;
  state.lastResult = await buildEvaluationResult({
    transcript,
    set,
    questionIndex: state.currentQuestionIndex
  });
  state.transcript = transcript;
  switchScreen("feedback");
}

async function buildEvaluationResult({ transcript, set, questionIndex }) {
  if (canUseRemoteEvaluation() && state.audioBlob) {
    try {
      const remote = await evaluateOnServer({
        audioBlob: state.audioBlob,
        setId: set.id,
        questionIndex,
        transcriptHint: transcript
      });
      return normalizeEvaluationResult(remote, set, questionIndex, transcript);
    } catch (_error) {
      return buildResult(transcript, set, questionIndex);
    }
  }

  return buildResult(transcript, set, questionIndex);
}

function buildResult(transcript, set, questionIndex = state.currentQuestionIndex, options = { persist: true }) {
  const words = transcript
    .replace(/[^\w\s']/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const uniqueWords = new Set(words.map((word) => word.toLowerCase()));
  const wordFrequency = countWords(words);
  const sentenceCount = transcript.split(/[.!?]+/).filter((item) => item.trim()).length || 1;
  const lengthScore = words.length >= 18 ? 5.5 : words.length >= 10 ? 5.0 : 4.5;
  const varietyScore = uniqueWords.size >= 18 ? 5.5 : uniqueWords.size >= 10 ? 5.0 : 4.5;
  const fluency = clampScore(lengthScore + (sentenceCount > 1 ? 0.2 : 0));
  const vocabulary = clampScore(varietyScore);
  const grammar = clampScore(words.some((word) => ["because", "which", "when", "although"].includes(word.toLowerCase())) ? 5.5 : 5.0);
  const pronunciation = clampScore(5.0 + (words.length > 12 ? 0.5 : 0));
  const overall = roundBand((fluency + vocabulary + grammar + pronunciation) / 4);
  const errorTags = detectErrorTags({ words, wordFrequency, sentenceCount, transcript, scores: { fluency, vocabulary, grammar, pronunciation } });
  const weakestMetric = getWeakestMetric({ fluency, vocabulary, grammar, pronunciation });
  const mainFocus = buildMainFocus(weakestMetric, errorTags);
  const nextAnswerTemplate = buildNextAnswerTemplate(set, weakestMetric);
  const replacementWords = buildReplacementWords(set, weakestMetric);
  const microDrill = buildMicroDrill(weakestMetric);

  const analyses = [
    {
      name: "流利度与连贯性",
      text:
        fluency >= 5.5
          ? "回答已经有完整结构，听起来比较自然。下一步可以再加入一点口语连接词，让节奏更像真实交流。"
          : "回答已经能表达核心意思，但句子之间的衔接还可以更顺一点。建议先练一个固定开头，再补一个原因和一个例子。"
    },
    {
      name: "词汇多样性",
      text:
        vocabulary >= 5.5
          ? "词汇已经有一定变化，继续保持这种表达密度会很有帮助。"
          : "词汇目前偏基础，可以准备 3 到 5 个高频替换词，比如 packed, bustling, convenient, memorable。"
    },
    {
      name: "语法准确性",
      text:
        grammar >= 5.5
          ? "你已经开始用从句来扩展句子了，这会让回答更像高分表达。"
          : "建议优先保证简单句稳定，再逐步加入 because 或 which 这样的从句。"
    },
    {
      name: "发音",
      text:
        "浏览器版目前主要根据文本长度做估算，真正的发音分还需要结合音频特征。你可以用页面里的播放功能反复跟读润色答案。"
    }
  ];

  const summary =
    overall >= 5.5
      ? "这次已经有回答框架了。接下来别贪多，先把最弱的 1 个点改掉，再立刻重答一遍。"
      : "起步不错，意思表达出来了。现在最重要的是把答案说长一点、连起来一点，而不是急着堆难词。";

  const result = {
    setId: set.id,
    part: set.part,
    question: set.questions[questionIndex],
    questionIndex,
    nextQuestionIndex: questionIndex + 1 < set.questions.length ? questionIndex + 1 : 0,
    transcript,
    recordedSeconds: Math.max(state.recordedSeconds, 8),
    overall,
    overallBand: overall.toFixed(1),
    metrics: {
      fluency,
      pronunciation,
      vocabulary,
      grammar
    },
    scores: {
      fluency,
      pronunciation,
      vocabulary,
      grammar
    },
    summary,
    errorTags,
    weakestMetric,
    mainFocus,
    nextAnswerTemplate,
    replacementWords,
    microDrill,
    analyses,
    briefFeedback: analyses.map((item) => ({
      title: item.name,
      body: item.text
    })),
    band8Targets: [
      {
        title: "先把回答拉到更完整的自然段",
        body: "如果目标是 8 分以上，答案通常不只是短句回答，而是会自然补充原因、细节和个人感受。"
      },
      {
        title: "换掉重复基础词",
        body: "尽量把 very crowded 这类基础表达升级成 packed, hectic, bustling, heavily congested。"
      },
      {
        title: "句式要更灵活",
        body: "建议稳定使用 because, which, especially when 这样的从句组合。"
      }
    ],
    band75Targets: buildBand75Targets({ overall, weakestMetric, errorTags }),
    suggestions: set.suggestions,
    polishedAnswer: set.polishedAnswer,
    improvementEdits: (set.suggestions || []).map((item) => ({
      title: item.tag,
      original: item.original,
      improved: item.improved,
      reason: item.explanation
    })),
    reportDate: new Date().toISOString().slice(0, 10)
  };

  if (options.persist) {
    updateTrainingData(result);
  }
  return result;
}

function clampScore(value) {
  return roundBand(Math.max(4.5, Math.min(6.0, value)));
}

function roundBand(value) {
  return Math.round(value * 2) / 2;
}

function nextQuestion() {
  const set = getCurrentSet();
  if (state.currentQuestionIndex < set.questions.length - 1) {
    state.currentQuestionIndex += 1;
  } else {
    state.currentQuestionIndex = 0;
  }
  state.retryFromFeedback = false;
  beginPractice();
}

function copyPolishedAnswer() {
  const text = state.lastResult ? state.lastResult.polishedAnswer : getCurrentSet().polishedAnswer;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("润色后的回答已复制。");
    });
    return;
  }
  alert(text);
}

function speakText(text, lang = "en-US") {
  if (!window.speechSynthesis) {
    alert(text);
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function canUseRemoteEvaluation() {
  return window.location.protocol.startsWith("http");
}

async function evaluateOnServer({ audioBlob, setId, questionIndex, transcriptHint }) {
  const formData = new FormData();
  formData.append("audio", audioBlob, "answer.webm");
  formData.append("setId", setId);
  formData.append("questionIndex", String(questionIndex));
  formData.append("transcriptHint", transcriptHint || "");

  const response = await fetch("/api/evaluate-speaking", {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    throw new Error("Server evaluation failed");
  }
  return response.json();
}

function loadTrainingData() {
  try {
    const raw = localStorage.getItem("talkaa-lite-training-v3");
    if (!raw) {
      return getDefaultTrainingData();
    }
    return {
      ...getDefaultTrainingData(),
      ...JSON.parse(raw)
    };
  } catch (_error) {
    return getDefaultTrainingData();
  }
}

function getDefaultTrainingData() {
  return {
    history: [],
    errorBook: {},
    dailyTarget: 3
  };
}

function saveTrainingData() {
  localStorage.setItem("talkaa-lite-training-v3", JSON.stringify(state.trainingData));
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getDashboardSummary() {
  const history = state.trainingData.history || [];
  const todayCount = history.filter((item) => item.date === getTodayKey()).length;
  const recent = history.slice(-7);
  const averageBand = recent.length
    ? (recent.reduce((sum, item) => sum + Number(item.overall), 0) / recent.length).toFixed(1)
    : "0.0";
  const weakestDimension = getWeakestDimensionFromHistory(history);
  const bestGap = Math.max(0, 7.5 - Number(averageBand || 0)).toFixed(1);

  return {
    todayCount,
    dailyTarget: state.trainingData.dailyTarget || 3,
    averageBand,
    weakestDimension,
    totalSessions: history.length,
    retries: history.filter((item) => item.isRetry).length,
    targetGap: bestGap,
    streak: getTrainingStreak(history),
    todayPlanTitle: todayCount === 0 ? "先热身 1 题" : todayCount < 3 ? "继续做二次重答" : "做 1 题复盘就够",
    todayPlanBody:
      todayCount === 0
        ? "先用 Part 1 练一题，目标不是高分，而是说满 2 句并带一个原因。"
        : todayCount < 3
          ? "今天更应该把反馈用起来：至少对 1 题做一次立刻重答。"
          : "今天训练量已经够了，接下来更值得做的是听自己的弱点和跟读润色答案。"
  };
}

function getTrainingStreak(history) {
  if (!history.length) {
    return 0;
  }
  const uniqueDays = [...new Set(history.map((item) => item.date))].sort().reverse();
  let streak = 0;
  let cursor = new Date(getTodayKey());
  for (const day of uniqueDays) {
    if (day === cursor.toISOString().slice(0, 10)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function getWeakestDimensionFromHistory(history) {
  if (!history.length) {
    return "流利度";
  }
  const totals = {
    流利度: 0,
    发音: 0,
    词汇: 0,
    语法: 0
  };
  history.slice(-10).forEach((item) => {
    totals["流利度"] += Number(item.scores?.fluency || 0);
    totals["发音"] += Number(item.scores?.pronunciation || 0);
    totals["词汇"] += Number(item.scores?.vocabulary || 0);
    totals["语法"] += Number(item.scores?.grammar || 0);
  });
  return Object.entries(totals).sort((a, b) => a[1] - b[1])[0][0];
}

function getTopErrors() {
  return Object.entries(state.trainingData.errorBook || {})
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);
}

function updateTrainingData(result) {
  const snapshot = {
    date: getTodayKey(),
    setId: result.setId,
    overall: Number(result.overall),
    scores: result.scores,
    isRetry: state.retryFromFeedback,
    errorTags: result.errorTags
  };
  state.trainingData.history = [...state.trainingData.history, snapshot].slice(-60);
  result.errorTags.forEach((tag) => {
    state.trainingData.errorBook[tag] = (state.trainingData.errorBook[tag] || 0) + 1;
  });
  saveTrainingData();
}

function resetTodayProgress() {
  const today = getTodayKey();
  state.trainingData.history = (state.trainingData.history || []).filter((item) => item.date !== today);
  saveTrainingData();
}

function countWords(words) {
  return words.reduce((acc, word) => {
    const key = word.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function detectErrorTags({ words, wordFrequency, sentenceCount, transcript, scores }) {
  const tags = [];
  if (words.length < 12) tags.push("内容偏短");
  if (sentenceCount < 2) tags.push("展开不足");
  if (!/\b(because|which|when|so|but)\b/i.test(transcript)) tags.push("连接词偏少");
  if (Object.values(wordFrequency).some((count) => count >= 3)) tags.push("词汇重复");
  if (!/\b(because|which|although|especially)\b/i.test(transcript) || scores.grammar <= 5.0) tags.push("句式单一");
  if (/\bvery\b/i.test(transcript)) tags.push("基础词过多");
  return [...new Set(tags)];
}

function getWeakestMetric(scores) {
  const map = [
    ["流利度", scores.fluency],
    ["发音", scores.pronunciation],
    ["词汇", scores.vocabulary],
    ["语法", scores.grammar]
  ];
  return map.sort((a, b) => a[1] - b[1])[0][0];
}

function buildMainFocus(weakestMetric, errorTags) {
  const focusMap = {
    流利度: {
      title: "先把答案说成 2 到 3 句自然小段",
      body: "你现在更需要的是稳定展开，而不是急着追求难词。先练“直接回答 + 原因 + 例子”这个小结构。"
    },
    发音: {
      title: "先把关键词说清楚，别求快",
      body: "把题目里的 2 到 3 个核心词单独练熟，再把整句放慢一点说，会比盲目加长答案更有效。"
    },
    词汇: {
      title: "先替换掉重复基础词",
      body: "这题里只要替换 2 到 3 个高频基础词，你的表达就会明显更像 6.5 到 7 分的答案。"
    },
    语法: {
      title: "先稳定用一个从句",
      body: "这一轮别追求复杂结构堆叠，只要稳定用一个 because 或 which 从句，就已经是在往 7.5 的方向走。"
    }
  };
  if (errorTags.includes("展开不足")) {
    return {
      title: "先把内容说满，再谈高级表达",
      body: "这题最大的限制不是语法，而是内容太短。下一次先多补一个原因和一个细节。"
    };
  }
  return focusMap[weakestMetric];
}

function buildNextAnswerTemplate(set, weakestMetric) {
  if (set.part === "Part2") {
    return "I’d like to talk about ... I read it / saw it when ... What I like most is ...";
  }
  if (weakestMetric === "语法") {
    return "Yes, definitely, because ... and that’s why ...";
  }
  return "Yes, definitely. For me, ... because ... For example, ...";
}

function buildReplacementWords(set, weakestMetric) {
  if (set.id === "crowded-place") {
    return ["packed", "bustling", "heavily congested"];
  }
  if (set.id === "story-book-animals") {
    return ["heartwarming", "memorable", "touching"];
  }
  if (weakestMetric === "词汇") {
    return ["impressive", "convenient", "iconic"];
  }
  return ["actually", "especially", "pretty much"];
}

function buildMicroDrill(weakestMetric) {
  const drills = {
    流利度: "不看提示，再用“答案 + 原因 + 例子”重说一次，控制在 20 到 25 秒。",
    发音: "把润色答案里最关键的一句跟读 3 次，重点听重音和停顿。",
    词汇: "从替换词里选 2 个，重答时必须自然用进去。",
    语法: "重答时必须说出 1 个 because 句或 which 句。"
  };
  return drills[weakestMetric];
}

function buildBand75Targets({ overall, weakestMetric, errorTags }) {
  const targets = [];
  targets.push({
    title: "把回答自然拉长到 20 到 30 秒",
    body: "7.5 不一定句句都难，但通常不会太短。先保证每次都有完整展开。"
  });
  targets.push({
    title: `优先补强${weakestMetric}`,
    body: `你当前最拖后腿的是${weakestMetric}。这不是坏事，反而说明今天该练什么已经非常明确。`
  });
  if (errorTags.includes("词汇重复")) {
    targets.push({
      title: "减少同词反复出现",
      body: "重答时尽量把重复基础词换掉，哪怕只换 2 个，也会明显更接近 7 分以上。"
    });
  } else {
    targets.push({
      title: "让表达更像自然口语",
      body: "可以适当加入 well, actually, you know 这类自然衔接，让答案听起来不像背模板。"
    });
  }
  return targets;
}

function normalizeEvaluationResult(remote, set, questionIndex, transcript) {
  const scores = remote.scores || remote.metrics || {
    fluency: 5.5,
    vocabulary: 5.5,
    grammar: 5.5,
    pronunciation: 5.5
  };
  const weakestMetric = getWeakestMetric(scores);
  const normalized = {
    ...remote,
    setId: remote.setId || set.id,
    part: remote.part || set.part,
    question: remote.question || set.questions[questionIndex],
    questionIndex,
    nextQuestionIndex: remote.nextQuestionIndex ?? (questionIndex + 1 < set.questions.length ? questionIndex + 1 : 0),
    transcript: remote.transcript || transcript,
    overall: Number(remote.overall || remote.overallBand || 5.5),
    overallBand: String(remote.overallBand || remote.overall || 5.5),
    metrics: remote.metrics || scores,
    scores,
    analyses: remote.analyses || [],
    briefFeedback: remote.briefFeedback || [],
    mainFocus: remote.mainFocus || buildMainFocus(weakestMetric, remote.errorTags || []),
    nextAnswerTemplate: remote.nextAnswerTemplate || buildNextAnswerTemplate(set, weakestMetric),
    replacementWords: remote.replacementWords || buildReplacementWords(set, weakestMetric),
    microDrill: remote.microDrill || buildMicroDrill(weakestMetric),
    errorTags: remote.errorTags || detectErrorTags({
      words: (remote.transcript || transcript).split(/\s+/).filter(Boolean),
      wordFrequency: countWords((remote.transcript || transcript).split(/\s+/).filter(Boolean)),
      sentenceCount: (remote.transcript || transcript).split(/[.!?]+/).filter((item) => item.trim()).length || 1,
      transcript: remote.transcript || transcript,
      scores
    }),
    weakestMetric,
    band75Targets: remote.band75Targets || buildBand75Targets({
      overall: Number(remote.overall || remote.overallBand || 5.5),
      weakestMetric,
      errorTags: remote.errorTags || []
    }),
    recordedSeconds: remote.recordedSeconds || Math.max(state.recordedSeconds, 8)
  };
  updateTrainingData(normalized);
  return normalized;
}

function renderErrorBook() {
  const errors = getTopErrors();
  if (!errors.length) {
    return `<p class="muted">先完成几次训练，这里会自动累计你最常犯的问题。</p>`;
  }
  return errors
    .map(
      (item) => `
        <div class="weakness-row">
          <strong>${item.name}</strong>
          <span>${item.count} 次</span>
        </div>
      `
    )
    .join("");
}

function getPracticePrompt() {
  const set = getCurrentSet();
  if (set.part === "Part2") {
    return "先不要想着长篇大论，按“是什么 + 什么时候接触 + 为什么喜欢”说清楚就很好。";
  }
  return "先说一个直接答案，再补一个 because 句，最后给一个小例子。";
}

function getRetryPrompt() {
  const result = state.lastResult;
  if (!result) {
    return "把刚才最弱的 1 个点改掉就够了，不要试图一次全改完。";
  }
  return `${result.mainFocus.title}。重答时优先用上这个结构：${result.nextAnswerTemplate}`;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      return null;
    });
  });
}

render();
