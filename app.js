const basePracticeSets = [
  {
    id: "crowded-place",
    part: "Part1",
    category: "City Life",
    source: "Cambridge-style",
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
    category: "Books & Stories",
    source: "Cambridge-style",
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
    category: "Places & Architecture",
    source: "Cambridge-style",
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
  },
  {
    id: "headphones",
    part: "Part1",
    category: "Technology",
    source: "Cambridge-style",
    titleZh: "耳机",
    titleEn: "Headphones",
    status: "pending",
    questions: [
      "Do you use headphones?",
      "What type of headphones do you use?",
      "When do you usually use them?",
      "When would you avoid using headphones?",
      "Is wearing headphones comfortable for you?"
    ],
    sampleAnswer:
      "Yes, I do. I mainly use wireless earphones because they're convenient and easy to carry around, especially when I commute or work out.",
    polishedAnswer:
      "Yes, definitely. I mainly use wireless earphones because they're light, convenient, and easy to carry around. I usually wear them when I'm commuting, exercising, or trying to focus in a noisy place.",
    suggestions: [],
    metrics: { fluency: 5, pronunciation: 5, vocabulary: 5, grammar: 5 },
    analyses: []
  },
  {
    id: "morning-routine",
    part: "Part1",
    category: "Daily Life",
    source: "Cambridge-style",
    titleZh: "晨间习惯",
    titleEn: "Morning routine",
    status: "pending",
    questions: [
      "Do you usually get up early?",
      "What do you normally do in the morning?",
      "Is breakfast important to you?",
      "Do you prefer a busy morning or a slow morning?"
    ],
    sampleAnswer:
      "I usually get up quite early because I like having a little quiet time before the day starts.",
    polishedAnswer:
      "I usually get up fairly early because I like having some quiet time before the day starts. It helps me feel more organized and less rushed.",
    suggestions: [],
    metrics: { fluency: 5, pronunciation: 5, vocabulary: 5, grammar: 5 },
    analyses: []
  },
  {
    id: "public-transport",
    part: "Part1",
    category: "Transport",
    source: "Cambridge-style",
    titleZh: "公共交通",
    titleEn: "Public transport",
    status: "pending",
    questions: [
      "Do you often use public transport?",
      "What kinds of public transport are common in your city?",
      "Do you prefer buses or the subway?",
      "How could public transport be improved?"
    ],
    sampleAnswer:
      "Yes, I use it quite often, especially the subway, because it's cheap and much faster than driving during rush hour.",
    polishedAnswer:
      "Yes, I use public transport quite often, especially the subway, because it's affordable and much faster than driving during rush hour. In my city, it's one of the most practical ways to get around.",
    suggestions: [],
    metrics: { fluency: 5, pronunciation: 5, vocabulary: 5.5, grammar: 5 },
    analyses: []
  },
  {
    id: "teacher-influence",
    part: "Part2",
    category: "People",
    source: "Cambridge-style",
    titleZh: "影响你的老师",
    titleEn: "Describe a teacher who influenced you",
    status: "pending",
    cueCard: [
      "Who the teacher was",
      "When you were taught by this teacher",
      "What made this teacher special",
      "And explain how this teacher influenced you"
    ],
    questions: ["Describe a teacher who influenced you"],
    sampleAnswer:
      "I'd like to talk about my high school English teacher, who made me much more confident about speaking in public.",
    polishedAnswer:
      "I'd like to talk about my high school English teacher, who had a huge influence on me. She encouraged me to speak up in class and gave me a lot of confidence, especially when I was nervous about making mistakes.",
    suggestions: [],
    metrics: { fluency: 5.5, pronunciation: 5.5, vocabulary: 5.5, grammar: 5 },
    analyses: []
  },
  {
    id: "useful-skill",
    part: "Part2",
    category: "Learning",
    source: "Cambridge-style",
    titleZh: "有用的技能",
    titleEn: "Describe a useful skill you want to learn",
    status: "pending",
    cueCard: [
      "What the skill is",
      "Why you want to learn it",
      "How you would learn it",
      "And explain why it would be useful"
    ],
    questions: ["Describe a useful skill you want to learn"],
    sampleAnswer:
      "A useful skill I'd like to learn is public speaking, because it would help me a lot in both work and study.",
    polishedAnswer:
      "A useful skill I'd really like to learn is public speaking, because it would help me in both work and study. I think it would make me sound more confident, organized, and persuasive when I share my ideas.",
    suggestions: [],
    metrics: { fluency: 5.5, pronunciation: 5, vocabulary: 5.5, grammar: 5 },
    analyses: []
  },
  {
    id: "city-development",
    part: "Part3",
    category: "Society",
    source: "Cambridge-style",
    titleZh: "城市发展",
    titleEn: "City development",
    status: "pending",
    questions: [
      "Why do cities become more crowded over time?",
      "What problems can rapid urban development cause?",
      "Should governments invest more in smaller cities?",
      "How can cities balance convenience and quality of life?"
    ],
    sampleAnswer:
      "Cities often become more crowded because they attract jobs, universities, and better public services.",
    polishedAnswer:
      "Cities often become more crowded because they attract jobs, universities, and better public services. As a result, more people move there for opportunities, even though that can create pressure on housing and transport.",
    suggestions: [],
    metrics: { fluency: 5, pronunciation: 5, vocabulary: 5.5, grammar: 5.5 },
    analyses: []
  },
  {
    id: "technology-communication",
    part: "Part3",
    category: "Technology",
    source: "Cambridge-style",
    titleZh: "科技与交流",
    titleEn: "Technology and communication",
    status: "pending",
    questions: [
      "How has technology changed the way people communicate?",
      "Do you think online communication is as effective as face-to-face communication?",
      "What are the disadvantages of relying too much on technology?"
    ],
    sampleAnswer:
      "Technology has made communication much faster and more convenient, but sometimes it also makes conversations feel less personal.",
    polishedAnswer:
      "Technology has made communication much faster and more convenient, especially through messaging apps and video calls. However, I don't think it always feels as personal or meaningful as face-to-face communication.",
    suggestions: [],
    metrics: { fluency: 5.5, pronunciation: 5, vocabulary: 5.5, grammar: 5.5 },
    analyses: []
  }
];

const generatedPart1Topics = [
  { slug: "home", category: "Home", titleZh: "家", titleEn: "Home", prompts: ["Do you live in a house or an apartment?", "What do you like most about your home?", "Is there anything you would like to change about your home?", "Do you think your home will be different in the future?"] },
  { slug: "hometown", category: "City Life", titleZh: "家乡", titleEn: "Hometown", prompts: ["What is your hometown like?", "What do people usually do there?", "Has your hometown changed much?", "Would you like to keep living there in the future?"] },
  { slug: "study", category: "Work & Study", titleZh: "学习", titleEn: "Study", prompts: ["What subject are you studying now?", "What do you enjoy most about it?", "Do you prefer studying alone or with other people?", "What would you like to improve in your studies?"] },
  { slug: "work", category: "Work & Study", titleZh: "工作", titleEn: "Work", prompts: ["What kind of work do you do?", "What part of your job do you enjoy most?", "Is there anything difficult about your work?", "Do you think you will do the same job in the future?"] },
  { slug: "friends", category: "People", titleZh: "朋友", titleEn: "Friends", prompts: ["Do you often spend time with your friends?", "What do you usually do together?", "Do you prefer having a small group of close friends or many friends?", "Has the way you make friends changed over time?"] },
  { slug: "neighbors", category: "People", titleZh: "邻居", titleEn: "Neighbors", prompts: ["Do you know your neighbors well?", "What kind of neighbor do you think is good to have?", "Have your neighbors ever helped you?", "Is it important to have a good relationship with neighbors?"] },
  { slug: "cooking", category: "Daily Life", titleZh: "做饭", titleEn: "Cooking", prompts: ["Do you often cook?", "What kinds of food do you usually cook?", "Did you learn to cook when you were young?", "Do you think cooking is an important skill?"] },
  { slug: "breakfast", category: "Daily Life", titleZh: "早餐", titleEn: "Breakfast", prompts: ["Do you usually eat breakfast?", "What do you normally have for breakfast?", "Did you eat the same breakfast when you were a child?", "Do you think breakfast is important?"] },
  { slug: "weekends", category: "Daily Life", titleZh: "周末", titleEn: "Weekends", prompts: ["What do you usually do at weekends?", "Do you prefer busy weekends or relaxing ones?", "Did you spend your weekends differently in the past?", "What would make a perfect weekend for you?"] },
  { slug: "shopping", category: "Daily Life", titleZh: "购物", titleEn: "Shopping", prompts: ["Do you enjoy shopping?", "What do you usually buy?", "Do you prefer shopping online or in stores?", "Have your shopping habits changed in recent years?"] },
  { slug: "music", category: "Media", titleZh: "音乐", titleEn: "Music", prompts: ["Do you often listen to music?", "What kind of music do you like?", "When do you usually listen to music?", "Has your taste in music changed over time?"] },
  { slug: "movies", category: "Media", titleZh: "电影", titleEn: "Movies", prompts: ["Do you enjoy watching movies?", "What type of movies do you like best?", "Do you prefer watching movies at home or in the cinema?", "Did you watch many movies when you were younger?"] },
  { slug: "reading", category: "Books & Media", titleZh: "阅读", titleEn: "Reading", prompts: ["Do you enjoy reading?", "What kinds of books or articles do you usually read?", "Did you read much as a child?", "Do you think people read more or less nowadays?"] },
  { slug: "writing-by-hand", category: "Learning", titleZh: "手写", titleEn: "Writing by hand", prompts: ["Do you often write things by hand?", "What do you usually write by hand?", "Do you prefer typing or handwriting?", "Do you think children should still learn handwriting well?"] },
  { slug: "maps", category: "Technology", titleZh: "地图", titleEn: "Maps", prompts: ["Do you often use maps?", "When do you usually need a map?", "Do you prefer paper maps or digital maps?", "Are you good at reading maps?"] },
  { slug: "apps", category: "Technology", titleZh: "手机应用", titleEn: "Apps", prompts: ["What apps do you use most often?", "Is there any app that saves you a lot of time?", "Do you download new apps often?", "What kind of app would you like to have in the future?"] },
  { slug: "photos", category: "Technology", titleZh: "照片", titleEn: "Photos", prompts: ["Do you often take photos?", "What do you like taking photos of?", "Do you prefer taking photos or videos?", "Do you often look back at old photos?"] },
  { slug: "gifts", category: "People", titleZh: "礼物", titleEn: "Gifts", prompts: ["Do you enjoy giving gifts?", "What kind of gifts do you usually give?", "Do you prefer useful gifts or meaningful gifts?", "Have you ever received a gift you still remember clearly?"] },
  { slug: "weather", category: "Environment", titleZh: "天气", titleEn: "Weather", prompts: ["What kind of weather do you like most?", "Does the weather affect your mood?", "What is the weather usually like in your city?", "Do you often check the weather forecast?"] },
  { slug: "parks", category: "Places", titleZh: "公园", titleEn: "Parks", prompts: ["Do you often go to parks?", "What do people usually do in parks in your city?", "Did you go to parks often as a child?", "Do you think cities need more parks?"] },
  { slug: "walking", category: "Health", titleZh: "散步", titleEn: "Walking", prompts: ["Do you walk a lot in your daily life?", "Where do you usually walk?", "Do you prefer walking alone or with others?", "Do you think people walk less than before?"] },
  { slug: "exercise", category: "Health", titleZh: "锻炼", titleEn: "Exercise", prompts: ["Do you exercise often?", "What kind of exercise do you enjoy?", "Did you enjoy exercise when you were younger?", "What helps people keep exercising regularly?"] },
  { slug: "noise", category: "City Life", titleZh: "噪音", titleEn: "Noise", prompts: ["Do you mind noisy places?", "What kinds of noise do you hear in your area?", "Are there any quiet places you like?", "Do you think cities are becoming noisier?"] },
  { slug: "traffic", category: "Transport", titleZh: "交通", titleEn: "Traffic", prompts: ["Is traffic a problem in your city?", "What time is traffic usually worst?", "How do you avoid traffic jams?", "What could be done to improve traffic in cities?"] },
  { slug: "bicycles", category: "Transport", titleZh: "自行车", titleEn: "Bicycles", prompts: ["Do you ride a bicycle?", "Did you ride a bike when you were a child?", "Is cycling popular where you live?", "Do you think cities should build more cycle lanes?"] },
  { slug: "travel", category: "Travel", titleZh: "旅行", titleEn: "Travel", prompts: ["Do you like traveling?", "What kind of places do you like to visit?", "Do you prefer traveling alone or with others?", "What is the most important thing when planning a trip?"] },
  { slug: "public-holidays", category: "Daily Life", titleZh: "节假日", titleEn: "Public holidays", prompts: ["Do you like public holidays?", "How do you usually spend them?", "Do people use holidays differently now compared with the past?", "What makes a holiday enjoyable for you?"] },
  { slug: "bags", category: "Daily Life", titleZh: "包", titleEn: "Bags", prompts: ["Do you usually carry a bag with you?", "What do you often put in your bag?", "Have the kinds of bags you use changed over time?", "Do you prefer large bags or small bags?"] },
  { slug: "snacks", category: "Food", titleZh: "零食", titleEn: "Snacks", prompts: ["Do you often eat snacks?", "What kinds of snacks do you like?", "Did you eat different snacks as a child?", "Do you think snacks are becoming healthier nowadays?"] },
  { slug: "teachers", category: "People", titleZh: "老师", titleEn: "Teachers", prompts: ["Do you still keep in touch with any teachers?", "What qualities make a teacher memorable?", "Do you think teachers have become more important nowadays?", "Would you ever like to be a teacher?"] }
];

const generatedPart2Topics = [
  { slug: "useful-advice", category: "People", titleZh: "一条有用的建议", titleEn: "Describe a piece of useful advice you received", cueCard: ["What the advice was", "Who gave it to you", "When you received it", "And explain why it was useful"], sample: "A useful piece of advice I received was to focus on one clear point before trying to sound impressive. My teacher told me this when I was preparing for an English speaking task, and it really helped me sound more organized." },
  { slug: "memorable-trip", category: "Travel", titleZh: "一次难忘的旅行", titleEn: "Describe a memorable trip you had", cueCard: ["Where you went", "Who you went with", "What you did there", "And explain why it was memorable"], sample: "A memorable trip I had was a short visit to Chengdu with two close friends. We tried local food, visited museums, and spent a lot of time just walking around the city. I still remember it because it felt both relaxing and exciting." },
  { slug: "useful-website", category: "Technology", titleZh: "一个有用的网站", titleEn: "Describe a useful website you often use", cueCard: ["What the website is", "How you found it", "What you use it for", "And explain why it is useful"], sample: "A useful website I often use is YouTube, especially for learning English and finding practical tutorials. I started using it in high school, and it still saves me a lot of time because I can learn almost anything there." },
  { slug: "special-meal", category: "Food", titleZh: "一顿特别的饭", titleEn: "Describe a special meal you enjoyed", cueCard: ["What the meal was", "Who you had it with", "Where you ate it", "And explain why it was special"], sample: "A special meal I enjoyed was a hotpot dinner with my family during a holiday. The food was great, but what made it special was the relaxed atmosphere and the fact that we had enough time to talk properly." },
  { slug: "interesting-person", category: "People", titleZh: "一个有趣的人", titleEn: "Describe an interesting person you know", cueCard: ["Who the person is", "How you know this person", "What this person is like", "And explain why you find this person interesting"], sample: "An interesting person I know is one of my former classmates, who always has creative ideas and a very positive attitude. I find him interesting because he can make ordinary conversations feel inspiring." },
  { slug: "favorite-place", category: "Places", titleZh: "一个你喜欢的地方", titleEn: "Describe a place you enjoy visiting", cueCard: ["Where the place is", "How often you go there", "What you do there", "And explain why you like it"], sample: "A place I really enjoy visiting is a riverside park near my home. I usually go there in the evening to walk, clear my mind, and take a short break from my routine." },
  { slug: "good-decision", category: "Life Choices", titleZh: "一个好的决定", titleEn: "Describe a good decision you made", cueCard: ["What the decision was", "When you made it", "Why you made it", "And explain why it was a good decision"], sample: "One good decision I made was to practice speaking English a little every day instead of only studying before exams. It was a good decision because it made my learning much more stable." },
  { slug: "favorite-photo", category: "Photos", titleZh: "一张喜欢的照片", titleEn: "Describe a photo you like", cueCard: ["What the photo shows", "When it was taken", "Who took it", "And explain why you like it"], sample: "A photo I really like was taken during a family trip a few years ago. It captures a very natural moment, and every time I see it, it reminds me of how relaxed and happy we were." },
  { slug: "important-rule", category: "Society", titleZh: "一条重要的规则", titleEn: "Describe a rule that you think is important", cueCard: ["What the rule is", "Where it applies", "Why it exists", "And explain why you think it is important"], sample: "An important rule I can think of is the rule about not using phones while driving. It may seem simple, but it protects both drivers and pedestrians." },
  { slug: "useful-object", category: "Daily Life", titleZh: "一个有用的物品", titleEn: "Describe an object you find useful", cueCard: ["What the object is", "How often you use it", "Why you use it", "And explain why it is useful"], sample: "A useful object I use every day is my phone, not just for communication but also for maps, study, and time management. It saves me a lot of time in daily life." },
  { slug: "old-person", category: "People", titleZh: "一位年长的人", titleEn: "Describe an older person you admire", cueCard: ["Who the person is", "How you know this person", "What this person is like", "And explain why you admire this person"], sample: "An older person I admire is my grandfather, because he is calm, disciplined, and always gives thoughtful advice. I admire him because he handles problems in a very steady way." },
  { slug: "skill-improve", category: "Learning", titleZh: "想提高的一项技能", titleEn: "Describe a skill you would like to improve", cueCard: ["What the skill is", "Why you want to improve it", "How you plan to improve it", "And explain how it would help you"], sample: "A skill I would like to improve is public speaking. It would help me sound more confident, and I think it would also make me better at organizing my ideas." },
  { slug: "quiet-place", category: "Places", titleZh: "一个安静的地方", titleEn: "Describe a quiet place you like", cueCard: ["Where it is", "When you go there", "What you do there", "And explain why you like it"], sample: "A quiet place I like is a small café near my home. I usually go there when I need to focus or just want a calmer environment than my apartment." },
  { slug: "exciting-activity", category: "Leisure", titleZh: "一项令人兴奋的活动", titleEn: "Describe an exciting activity you did", cueCard: ["What the activity was", "When you did it", "Who you did it with", "And explain why it was exciting"], sample: "An exciting activity I once did was trying rafting during a short trip. It was exciting because everything happened so fast, and I had to stay focused the whole time." },
  { slug: "helpful-person", category: "People", titleZh: "帮助过你的人", titleEn: "Describe a person who helped you", cueCard: ["Who the person was", "How this person helped you", "When it happened", "And explain how you felt about it"], sample: "A person who really helped me was one of my teachers, who encouraged me when I lacked confidence in speaking English. That support made a big difference to me." },
  { slug: "interesting-conversation", category: "Communication", titleZh: "一次有趣的对话", titleEn: "Describe an interesting conversation you had", cueCard: ["Who you talked to", "What you talked about", "Where it happened", "And explain why it was interesting"], sample: "An interesting conversation I had was with an older taxi driver who had surprisingly thoughtful ideas about city life. I found it interesting because it changed the way I looked at everyday conversations." },
  { slug: "popular-product", category: "Technology", titleZh: "一个很受欢迎的产品", titleEn: "Describe a popular product in your country", cueCard: ["What the product is", "Why it is popular", "Who uses it", "And explain what you think about it"], sample: "A popular product in my country is the smartphone, especially because people use it for almost everything. I think its popularity makes sense because it is convenient and versatile." },
  { slug: "beautiful-city", category: "Places", titleZh: "一个漂亮的城市", titleEn: "Describe a beautiful city you visited", cueCard: ["What city it was", "When you visited it", "What you saw there", "And explain why you think it was beautiful"], sample: "A beautiful city I visited was Hangzhou. I remember the lake, the trees, and the calm atmosphere, and that combination made the whole city feel elegant." },
  { slug: "important-event", category: "Life Events", titleZh: "一件重要的事", titleEn: "Describe an important event in your life", cueCard: ["What the event was", "When it happened", "What you learned from it", "And explain why it was important"], sample: "An important event in my life was finishing a difficult exam period and realizing that consistency mattered more than last-minute effort. It changed the way I study." },
  { slug: "useful-book", category: "Books & Media", titleZh: "一本有用的书", titleEn: "Describe a useful book you read", cueCard: ["What the book was", "When you read it", "What it was about", "And explain why it was useful"], sample: "A useful book I read was a practical book about habits and self-discipline. It was useful because it gave me simple methods that I could actually apply in daily life." }
];

const generatedPart3Topics = [
  { slug: "education-success", category: "Education", titleZh: "教育与成功", titleEn: "Education and success", prompts: ["Why do some students perform better than others?", "Do you think schools focus enough on practical skills?", "How can teachers keep students motivated?", "What changes in education are most needed today?"] },
  { slug: "city-transport", category: "Transport", titleZh: "城市交通", titleEn: "Urban transport", prompts: ["Why do many cities struggle with traffic congestion?", "How can public transport be made more attractive?", "Should governments limit the use of private cars?", "How does transport affect people’s quality of life?"] },
  { slug: "healthy-living", category: "Health", titleZh: "健康生活", titleEn: "Healthy living", prompts: ["Why do some people find it hard to live healthily?", "Do you think young people are healthier than older generations?", "What can schools do to encourage healthy habits?", "Should governments do more to improve public health?"] },
  { slug: "technology-learning", category: "Technology", titleZh: "科技与学习", titleEn: "Technology in learning", prompts: ["How has technology changed the way people learn?", "What are the disadvantages of relying too much on technology in education?", "Do online resources make teachers less important?", "What kind of technology will be most useful in future classrooms?"] },
  { slug: "tourism-impact", category: "Travel", titleZh: "旅游影响", titleEn: "Tourism and its impact", prompts: ["Why do some cities depend heavily on tourism?", "What problems can tourism create for local people?", "How can governments balance tourism and daily life?", "Do tourists and local residents usually want the same things?"] },
  { slug: "environment-habits", category: "Environment", titleZh: "环保习惯", titleEn: "Environmental habits", prompts: ["Why do some people care more about the environment than others?", "What small habits can make a real difference?", "Should environmental education start early?", "What role should businesses play in environmental protection?"] },
  { slug: "food-culture", category: "Food", titleZh: "饮食文化", titleEn: "Food culture", prompts: ["Why is food such an important part of culture?", "How have eating habits changed in recent years?", "Do you think fast food is affecting traditional food culture?", "Should families eat together more often?"] },
  { slug: "work-life-balance", category: "Work", titleZh: "工作与生活平衡", titleEn: "Work-life balance", prompts: ["Why do many people find it hard to balance work and life?", "Do you think young people value free time more than older generations?", "How can employers help staff achieve better balance?", "Is work-life balance equally important in every job?"] },
  { slug: "media-influence", category: "Media", titleZh: "媒体影响", titleEn: "Media influence", prompts: ["How does social media affect the way people think?", "Why do some people trust online information too easily?", "Should there be stricter rules for online platforms?", "How can people become more critical consumers of media?"] },
  { slug: "public-spaces", category: "Places", titleZh: "公共空间", titleEn: "Public spaces", prompts: ["Why are public spaces important in cities?", "What makes a public space attractive to people?", "Do modern cities provide enough public spaces?", "How do public spaces influence social life?"] },
  { slug: "childhood-development", category: "Education", titleZh: "儿童发展", titleEn: "Child development", prompts: ["What is most important for children’s development?", "Do children learn more from parents or teachers?", "How has childhood changed compared with the past?", "Should children have more freedom or more rules?"] },
  { slug: "consumer-choice", category: "Society", titleZh: "消费选择", titleEn: "Consumer choices", prompts: ["Why do people sometimes buy things they do not need?", "How does advertising influence buying decisions?", "Are people becoming more careful with money nowadays?", "Should schools teach financial habits?"] },
  { slug: "communication-skills", category: "Communication", titleZh: "沟通能力", titleEn: "Communication skills", prompts: ["Why are communication skills important in modern life?", "Do you think people communicate better face to face or online?", "Can communication skills be taught effectively?", "What communication problems are most common today?"] },
  { slug: "art-value", category: "Culture", titleZh: "艺术价值", titleEn: "The value of art", prompts: ["Why is art important in society?", "Do young people value art as much as older people?", "Should governments invest more in art and culture?", "How can art be made more accessible to the public?"] },
  { slug: "future-cities", category: "City Life", titleZh: "未来城市", titleEn: "Future cities", prompts: ["What will cities be like in the future?", "How might technology improve city life?", "What problems will cities face in the future?", "Should future cities be designed differently from current ones?"] },
  { slug: "friendship-change", category: "People", titleZh: "友谊变化", titleEn: "Friendship over time", prompts: ["Why do friendships change as people get older?", "Is it easier to make friends when you are young?", "Do online friendships have the same value as offline ones?", "What makes a friendship last a long time?"] },
  { slug: "decision-making", category: "Life Choices", titleZh: "做决定", titleEn: "Decision-making", prompts: ["Why are some people better at making decisions than others?", "Should important decisions be made quickly or slowly?", "How do other people influence our decisions?", "Do young and old people make decisions differently?"] },
  { slug: "books-vs-video", category: "Books & Media", titleZh: "书和视频", titleEn: "Books and video content", prompts: ["Why do some people prefer videos to books?", "Do you think reading develops different skills from watching videos?", "Will books become less important in the future?", "How can parents encourage children to read more?"] },
  { slug: "competition", category: "Society", titleZh: "竞争", titleEn: "Competition", prompts: ["Why is competition common in modern life?", "Is competition always a good thing?", "Do children need competition at school?", "How can competition become unhealthy?"] },
  { slug: "shopping-habits", category: "Daily Life", titleZh: "购物习惯", titleEn: "Shopping habits", prompts: ["How have shopping habits changed in recent years?", "Why do people enjoy shopping as a leisure activity?", "What are the downsides of online shopping?", "Do you think people will shop differently in the future?"] }
];

function buildGeneratedPracticeSets() {
  const part1Sets = generatedPart1Topics.map((topic) => ({
    id: `gen-p1-${topic.slug}`,
    part: "Part1",
    category: topic.category,
    source: "Cambridge-style",
    titleZh: topic.titleZh,
    titleEn: topic.titleEn,
    status: "pending",
    questions: topic.prompts,
    sampleAnswer: `Yes, definitely. ${topic.titleEn} is part of my daily life, and I can usually say something personal about it quite easily.`,
    polishedAnswer: `Yes, definitely. ${topic.titleEn} is something that comes up quite naturally in my daily life, so I usually have clear opinions and a few personal examples to share.`,
    suggestions: [],
    metrics: { fluency: 5.0, pronunciation: 5.0, vocabulary: 5.0, grammar: 5.0 },
    analyses: []
  }));

  const part2Sets = generatedPart2Topics.map((topic) => ({
    id: `gen-p2-${topic.slug}`,
    part: "Part2",
    category: topic.category,
    source: "Cambridge-style",
    titleZh: topic.titleZh,
    titleEn: topic.titleEn,
    status: "pending",
    cueCard: topic.cueCard,
    questions: [topic.titleEn],
    sampleAnswer: topic.sample,
    polishedAnswer: `${topic.sample} What made it especially meaningful was that it gave me something practical to remember and talk about later.`,
    suggestions: [],
    metrics: { fluency: 5.5, pronunciation: 5.0, vocabulary: 5.5, grammar: 5.0 },
    analyses: []
  }));

  const part3Sets = generatedPart3Topics.map((topic) => ({
    id: `gen-p3-${topic.slug}`,
    part: "Part3",
    category: topic.category,
    source: "Cambridge-style",
    titleZh: topic.titleZh,
    titleEn: topic.titleEn,
    status: "pending",
    questions: topic.prompts,
    sampleAnswer: `I think there are several reasons for that. In general, it depends on people’s lifestyle, the opportunities available to them, and the kind of environment they live in.`,
    polishedAnswer: `I think there are several reasons for that. In general, it depends on people’s lifestyle, the opportunities available to them, and the kind of environment they live in. That is why the answer is rarely simple or the same for everyone.`,
    suggestions: [],
    metrics: { fluency: 5.5, pronunciation: 5.0, vocabulary: 5.5, grammar: 5.5 },
    analyses: []
  }));

  return [...part1Sets, ...part2Sets, ...part3Sets];
}

const practiceSets = [...basePracticeSets, ...buildGeneratedPracticeSets()];

const state = {
  screen: "home",
  homeTab: "home",
  questionLibraryTab: "archive",
  questionPartFilter: "all",
  questionCategoryFilter: "all",
  questionSearch: "",
  reportRange: "all",
  reportMode: "speaking",
  reportEditMode: false,
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
  ttsAudio: null,
  lastResult: null,
  retryFromFeedback: false,
  trainingData: loadTrainingData()
};

const motivationQuotes = [
  {
    title: "Small steps build big scores.",
    subtitle: "每天一点点，7.5 会慢慢靠近你。"
  },
  {
    title: "Speak better today than yesterday.",
    subtitle: "今天比昨天更顺一点，就已经在进步。"
  },
  {
    title: "Consistency beats intensity.",
    subtitle: "稳定练习，比偶尔拼命更有效。"
  },
  {
    title: "One clearer answer at a time.",
    subtitle: "一题一题讲清楚，分数自然会上来。"
  }
];

const app = document.querySelector("#app");

function getCurrentSet() {
  return practiceSets.find((item) => item.id === state.currentSetId) || practiceSets[0];
}

function getCurrentQuestion() {
  const set = getCurrentSet();
  return set.questions[state.currentQuestionIndex] || set.questions[0];
}

function getMotivationQuote() {
  const day = new Date().getDate();
  return motivationQuotes[day % motivationQuotes.length];
}

function render() {
  app.innerHTML = `
    ${renderHomeScreen()}
    ${renderDetailScreen()}
    ${renderPracticeScreen()}
    ${renderFeedbackScreen()}
    ${renderReportDetailScreen()}
  `;
  bindEvents();
}

function renderHomeScreen() {
  if (state.homeTab === "report") {
    return renderReportOverviewScreen();
  }

  const dashboard = getDashboardSummary();
  const topErrors = getTopErrors();
  const quote = getMotivationQuote();

  return `
    <section class="screen ${state.screen === "home" ? "active" : ""}" data-screen="home">
      <div class="page-top">
        <div>
          <div class="calendar-title">2026 年 5 月</div>
          <div class="page-kicker">Daily speaking training</div>
        </div>
        <button class="pill-dark" type="button">7.5 养成</button>
      </div>
      <div class="calendar-strip compact">
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
          <h1 class="hero-title">${quote.title}</h1>
          <div class="hero-subtitle">${quote.subtitle}</div>
          <div class="muted">今日 ${dashboard.todayCount}/${dashboard.dailyTarget} 次日常训练</div>
        </div>
        <div class="hero-actions">
          <button class="circle-btn" type="button" data-reset-day="true">↺</button>
        </div>
      </div>
      ${renderHomeTabContent(dashboard, topErrors)}
      <div class="nav-bar">
        <button class="nav-item ${state.homeTab === "home" ? "active" : ""}" type="button" data-home-tab="home">首页</button>
        <button class="nav-item ${state.homeTab === "questions" ? "active" : ""}" type="button" data-home-tab="questions">真题</button>
        <button class="nav-item ${state.homeTab === "custom" ? "active" : ""}" type="button" data-home-tab="custom">定制</button>
        <button class="nav-item ${state.homeTab === "report" ? "active" : ""}" type="button" data-home-tab="report">报告</button>
        <button class="nav-item ${state.homeTab === "me" ? "active" : ""}" type="button" data-home-tab="me">我的</button>
      </div>
    </section>
  `;
}

function renderHomeTabContent(dashboard, topErrors) {
  if (state.homeTab === "questions") {
    const categories = getQuestionCategories();
    const questionSets = getFilteredQuestionSets();
    return `
      <div class="question-browser">
        <div class="search-panel panel">
          <span class="search-icon">⌕</span>
          <input class="search-input" type="text" placeholder="搜索题目..." value="${escapeHtml(state.questionSearch)}" data-question-search="true" />
        </div>

        <div class="question-top-tabs">
          <button class="question-top-tab ${state.questionLibraryTab === "latest" ? "active" : ""}" type="button" data-question-library="latest">更新中</button>
          <button class="question-top-tab ${state.questionLibraryTab === "reserved" ? "active" : ""}" type="button" data-question-library="reserved">保留题</button>
          <button class="question-top-tab ${state.questionLibraryTab === "classic" ? "active" : ""}" type="button" data-question-library="classic">高频题</button>
          <button class="question-top-tab ${state.questionLibraryTab === "overseas" ? "active" : ""}" type="button" data-question-library="overseas">海外题感</button>
          <button class="question-top-tab ${state.questionLibraryTab === "archive" ? "active" : ""}" type="button" data-question-library="archive">往期真题</button>
        </div>

        <div class="question-part-tabs">
          <button class="question-part-tab ${state.questionPartFilter === "all" ? "active" : ""}" type="button" data-part-filter="all">All</button>
          <button class="question-part-tab ${state.questionPartFilter === "Part1" ? "active" : ""}" type="button" data-part-filter="Part1">Part 1</button>
          <button class="question-part-tab ${state.questionPartFilter === "Part2" ? "active" : ""}" type="button" data-part-filter="Part2">Part 2</button>
          <button class="question-part-tab ${state.questionPartFilter === "Part3" ? "active" : ""}" type="button" data-part-filter="Part3">Part 3</button>
        </div>

        <div class="question-category-tabs">
          <button class="question-category-tab ${state.questionCategoryFilter === "all" ? "active" : ""}" type="button" data-question-category="all">全标签</button>
          ${categories
            .map(
              (category) => `
                <button class="question-category-tab ${state.questionCategoryFilter === category ? "active" : ""}" type="button" data-question-category="${escapeHtml(category)}">${category}</button>
              `
            )
            .join("")}
        </div>

        <div class="question-grid">
          ${questionSets.length ? questionSets.map((set) => renderQuestionCard(set)).join("") : `<div class="question-empty panel"><strong>没有找到匹配题目</strong><p>试试切换 Part、分类，或者换个关键词搜索。</p></div>`}
        </div>
      </div>
    `;
  }

  if (state.homeTab === "custom") {
    return `
      <div class="panel list-surface">
        <div class="section-head">
          <div>
            <h3>定制训练</h3>
            <p>按你的 7.5 目标给练习重点排优先级</p>
          </div>
        </div>
        <div class="coach-grid">
          <div class="coach-card soft-card">
            <div class="coach-label">今日优先</div>
            <div class="coach-value">${dashboard.weakestDimension}</div>
            <p>先把最弱的 1 个维度拉起来，比分散练更有效。</p>
          </div>
          <div class="coach-card soft-card">
            <div class="coach-label">听力/跟读</div>
            <div class="coach-value">可接 TTS</div>
            <p>你后面可以接入更自然的 TTS，把浏览器默认朗读替换掉。</p>
          </div>
        </div>
      </div>
    `;
  }

  if (state.homeTab === "me") {
    return `
      <div class="panel list-surface">
        <div class="section-head">
          <div>
            <h3>我的训练</h3>
            <p>保持节奏，比偶尔高强度更重要</p>
          </div>
        </div>
        <div class="habit-card panel inner-panel">
          <div class="habit-top">
            <div>
              <strong>连续练习</strong>
              <div class="muted">把练习做成习惯</div>
            </div>
            <span class="habit-streak">${dashboard.streak} 天</span>
          </div>
          <div class="habit-metrics">
            <div><span>${dashboard.totalSessions}</span><label>累计练习</label></div>
            <div><span>${dashboard.todayCount}</span><label>今日已练</label></div>
            <div><span>${dashboard.dailyTarget}</span><label>日目标</label></div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="coach-grid">
      <div class="coach-card soft-card">
        <div class="coach-label">今日节奏</div>
        <div class="coach-value">${dashboard.todayPlanTitle}</div>
        <p>${dashboard.todayPlanBody}</p>
      </div>
      <div class="coach-card soft-card">
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
    <div class="panel list-surface">
      <div class="section-head">
        <div>
          <h3>今日推荐真题</h3>
          <p>直接从这里点进任意题目开始练</p>
        </div>
      </div>
      <div class="task-panel no-top">
        ${renderTaskRows("all", 4)}
      </div>
    </div>
  `;
}

function renderReportOverviewScreen() {
  const overview = getReportOverview();
  const dashboard = getDashboardSummary();
  const entries = getFilteredHistoryEntries();
  const modeLabel = state.reportMode === "speaking" ? "口语真题" : "模考评分";

  return `
    <section class="screen ${state.screen === "home" ? "active" : ""}" data-screen="home">
      <div class="report-shell">
        <div class="report-topbar">
          <span></span>
          <h1>学习总结</h1>
          <button class="report-edit-btn" type="button" data-toggle-report-edit="true">${state.reportEditMode ? "完成" : "编辑"}</button>
        </div>

        <div class="report-section-label">核心数据</div>

        <div class="report-stat-grid">
          ${renderReportStatCard("★", overview.bestScore, "最高得分", "gold")}
          ${renderReportStatCard("◔", `${overview.todayMinutes} 分钟`, "今日练习", "slate")}
          ${renderReportStatCard("◉", `${overview.streak} 天`, "坚持天数", "orange")}
          ${renderReportStatCard("▮▮▮", `${overview.totalHours} 小时`, "累计练习", "green")}
        </div>

        <div class="report-focus-grid">
          <div class="report-focus-card panel">
            <span class="report-focus-label">当前最弱维度</span>
            <strong>${dashboard.weakestDimension}</strong>
            <p>今天优先修这个，比平均发力更有效。</p>
          </div>
          <div class="report-focus-card panel">
            <span class="report-focus-label">近 7 次均分</span>
            <strong>${dashboard.averageBand}</strong>
            <p>先把近 7 次均分稳定拉高，比追单次高分更有意义。</p>
          </div>
        </div>

        <div class="report-section-label">怎么筛选</div>

        <div class="report-range-tabs">
          <button class="filter-chip ${state.reportRange === "all" ? "active" : ""}" type="button" data-report-range="all">全部</button>
          <button class="filter-chip ${state.reportRange === "today" ? "active" : ""}" type="button" data-report-range="today">今天</button>
          <button class="filter-chip ${state.reportRange === "7d" ? "active" : ""}" type="button" data-report-range="7d">近7天</button>
          <button class="filter-chip ${state.reportRange === "30d" ? "active" : ""}" type="button" data-report-range="30d">近30天</button>
        </div>

        <div class="report-mode-switch">
          <button class="report-mode-btn ${state.reportMode === "speaking" ? "active" : ""}" type="button" data-report-mode="speaking">口语真题</button>
          <button class="report-mode-btn ${state.reportMode === "mock" ? "active" : ""}" type="button" data-report-mode="mock">模考评分</button>
        </div>

        <div class="report-section-label">练习记录</div>

        <div class="report-history-list">
          ${
            entries.length
              ? entries.map((entry) => renderReportHistoryCard(entry)).join("")
              : `<div class="report-empty panel">
                   <strong>${modeLabel}还没有记录</strong>
                   <p>先完成 1 次训练，报告页就会开始累计你的得分、时长和趋势。</p>
                 </div>`
          }
        </div>
      </div>

      <div class="nav-bar">
        <button class="nav-item ${state.homeTab === "home" ? "active" : ""}" type="button" data-home-tab="home">首页</button>
        <button class="nav-item ${state.homeTab === "questions" ? "active" : ""}" type="button" data-home-tab="questions">真题</button>
        <button class="nav-item ${state.homeTab === "custom" ? "active" : ""}" type="button" data-home-tab="custom">定制</button>
        <button class="nav-item active" type="button" data-home-tab="report">报告</button>
        <button class="nav-item ${state.homeTab === "me" ? "active" : ""}" type="button" data-home-tab="me">我的</button>
      </div>
    </section>
  `;
}

function renderReportStatCard(icon, value, label, tone) {
  return `
    <div class="report-stat-card panel">
      <div class="report-stat-icon ${tone}">${icon}</div>
      <div class="report-stat-copy">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    </div>
  `;
}

function renderReportHistoryCard(entry) {
  const score = Number(entry.overall || 0).toFixed(1);
  const titleEn = entry.titleEn || getPracticeSetById(entry.setId)?.titleEn || "Speaking task";
  const titleZh = entry.titleZh || getPracticeSetById(entry.setId)?.titleZh || "口语训练";
  const part = entry.part || getPracticeSetById(entry.setId)?.part || "Part1";
  const dateText = formatHistoryDateTime(entry.timestamp || entry.date);
  const scoreAngle = Math.max(12, Math.min((Number(entry.overall || 0) / 9) * 360, 360));
  const scoreStyle = `background: conic-gradient(#da6557 0deg ${scoreAngle}deg, #f3e9e4 ${scoreAngle}deg 360deg);`;

  return `
    <div class="report-history-card panel">
      <button class="report-history-open" type="button" data-open-history="${entry.id || ""}">
        <div class="report-history-part">${part.replace("Part", "PART ")}</div>
        <div class="report-history-main">
          <strong>${titleEn}</strong>
          <span>${titleZh}</span>
          <label>${dateText}</label>
        </div>
        <div class="report-score-wrap">
          <div class="report-score-ring" style="${scoreStyle}">
            <div class="report-score-core">${score}</div>
          </div>
          <div class="report-card-arrow">›</div>
        </div>
      </button>
      ${
        state.reportEditMode
          ? `<button class="report-delete-btn" type="button" data-delete-history="${entry.id || ""}">删除</button>`
          : ""
      }
    </div>
  `;
}

function renderQuestionCard(set) {
  const practiceCount = getPracticeCount(set.id);
  const topicGroup = getQuestionTopicGroup(set);
  return `
    <button class="question-card panel" type="button" data-open-set="${set.id}">
      <div class="question-card-top">
        <span class="badge ${set.part.toLowerCase()}">${set.part.toUpperCase()}</span>
        ${practiceCount > 0 ? `<span class="task-count-badge compact">练过 ${practiceCount}</span>` : ""}
      </div>
      <div class="question-card-zh">${set.titleZh}</div>
      <div class="question-card-en">${set.titleEn}</div>
      <div class="question-card-meta">${topicGroup} · ${set.category}</div>
    </button>
  `;
}

function renderTaskRows(partFilter = "all", limit = null) {
  const filteredSets = practiceSets.filter((set) => partFilter === "all" || set.part === partFilter);
  const finalSets = typeof limit === "number" ? filteredSets.slice(0, limit) : filteredSets;
  return finalSets
    .map(
      (set) => {
        const practiceCount = getPracticeCount(set.id);
        return `
        <button class="task-row clean-task-row" type="button" data-open-set="${set.id}">
          <span class="radio ${practiceCount > 0 ? "done" : ""}"></span>
          <span class="task-copy">
            <span class="badge ${set.part.toLowerCase()}">${set.part}</span>
            <span class="task-category">${set.category}</span>
            ${practiceCount > 0 ? `<span class="task-count-badge">练过 ${practiceCount} 次</span>` : ""}
            <div class="task-title">${set.titleEn}</div>
            <div class="task-subtitle">${set.titleZh}</div>
          </span>
          <span class="chev">›</span>
        </button>
      `;
      }
    )
    .join("");
}

function getFilteredQuestionSets() {
  return practiceSets.filter((set) => {
    if (!matchesQuestionLibraryTab(set)) {
      return false;
    }
    if (state.questionPartFilter !== "all" && set.part !== state.questionPartFilter) {
      return false;
    }
    if (state.questionCategoryFilter !== "all" && getQuestionTopicGroup(set) !== state.questionCategoryFilter) {
      return false;
    }
    if (state.questionSearch.trim()) {
      const key = state.questionSearch.trim().toLowerCase();
      const haystack = `${set.titleEn} ${set.titleZh} ${set.category} ${getQuestionTopicGroup(set)}`.toLowerCase();
      if (!haystack.includes(key)) {
        return false;
      }
    }
    return true;
  });
}

function getQuestionCategories() {
  const partFiltered = practiceSets.filter(
    (set) =>
      matchesQuestionLibraryTab(set) &&
      (state.questionPartFilter === "all" || set.part === state.questionPartFilter)
  );
  return [...new Set(partFiltered.map((set) => getQuestionTopicGroup(set)))];
}

function getQuestionTopicGroup(set) {
  const category = set.category;
  const people = ["People"];
  const places = ["Places", "Places & Architecture", "Home", "City Life", "Transport", "Travel", "Environment"];
  const things = ["Technology", "Media", "Books & Media", "Food", "Health", "Communication"];
  const events = ["Daily Life", "Learning", "Work & Study", "Work", "Life Choices"];

  if (people.includes(category)) return "人物类";
  if (places.includes(category)) return "地点类";
  if (things.includes(category)) return "事物类";
  if (events.includes(category)) return "事件/经历类";
  return "观点/社会类";
}

function matchesQuestionLibraryTab(set) {
  if (state.questionLibraryTab === "archive") {
    return true;
  }

  const category = set.category;
  const modernCategories = ["Technology", "Media", "Communication", "City Life", "Environment"];
  const reservedCategories = ["People", "Learning", "Work & Study", "Travel", "Places", "Places & Architecture"];
  const classicCategories = ["Daily Life", "Home", "Transport", "Food", "Health", "Books & Media"];
  const overseasCategories = ["Society", "Culture", "Education", "Work", "Life Choices"];

  if (state.questionLibraryTab === "latest") {
    return modernCategories.includes(category);
  }
  if (state.questionLibraryTab === "reserved") {
    return reservedCategories.includes(category) || set.part === "Part2";
  }
  if (state.questionLibraryTab === "classic") {
    return classicCategories.includes(category) || set.part === "Part1";
  }
  if (state.questionLibraryTab === "overseas") {
    return overseasCategories.includes(category) || set.part === "Part3";
  }

  return true;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderWeaknessRows(topErrors) {
  if (!topErrors.length) {
    return `<p class="muted">还没有累计错误记录。先完成 2 到 3 次训练，系统会开始形成你的个人错误本。</p>`;
  }
  return topErrors
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

function renderDetailScreen() {
  const set = getCurrentSet();
  const badgeClass = set.part.toLowerCase();
  const isCueCard = set.part === "Part2";

  return `
    <section class="screen ${state.screen === "detail" ? "active" : ""}" data-screen="detail">
      <div class="page-header">
        <button class="back-btn" type="button" data-back="home">‹ 返回</button>
        <span class="header-label">真题详情</span>
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
      <div class="page-header">
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
            <div class="chat-bubble" data-live-wrap="true">
              <div class="answer-card">
                <h3 data-live-transcript>${state.transcript}</h3>
                <div data-live-seconds>${state.recordedSeconds}"</div>
              </div>
            </div>
          `
          : ""
      }
      <div class="record-panel">
        <div class="record-track">
          <div class="record-fill" data-record-fill style="width:${recordProgress}%"></div>
        </div>
        <div class="timer-panel">
          <div class="timer-label">剩余时间</div>
          <div class="timer-value" data-timer-value>${minutes}:${seconds}</div>
          <div class="timer-sub" data-timer-sub>已录制 ${recorded}</div>
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
  const issueBadges = [result.weakestMetric, ...(result.errorTags || [])].slice(0, 4);
  const whyRows = (result.improvementEdits || [])
    .slice(0, 2)
    .map(
      (item) => `
        <div class="why-row">
          <div class="why-before">${item.original}</div>
          <div class="why-arrow">→</div>
          <div class="why-after">${item.improved}</div>
          <p>${item.reason}</p>
        </div>
      `
    )
    .join("");

  return `
    <section class="screen ${state.screen === "feedback" ? "active" : ""}" data-screen="feedback">
      <div class="page-header">
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
      <div class="source-pill ${result.scoreSource === "real" ? "source-real" : "source-demo"}">
        ${result.scoreSource === "real" ? "真实评分" : "演示评分"}
      </div>
      <div class="score-line">🎯 当前估计分: ${Number(result.overall).toFixed(1)}</div>
      <div class="result-summary">${result.summary}</div>

      <div class="feedback-section panel">
        <div class="feedback-section-kicker">这次问题判断</div>
        <h4>先看清这次主要卡在哪里</h4>
        <div class="issue-badges">
          ${issueBadges.map((item) => `<span class="issue-badge">${item}</span>`).join("")}
        </div>
        <p>${result.mainFocus.body}</p>
      </div>

      <div class="feedback-section panel">
        <div class="feedback-section-kicker">为什么这么改</div>
        <h4>不是只告诉你答案，而是告诉你为什么这样更好</h4>
        ${
          whyRows ||
          `<div class="why-row">
             <div class="why-before">原回答偏短或偏平</div>
             <div class="why-arrow">→</div>
             <div class="why-after">补上原因、细节、连接词</div>
             <p>这样修改的目的，是让回答更完整、更自然，也更接近 7 分到 7.5 的表达方式。</p>
           </div>`
        }
      </div>

      <div class="feedback-section panel">
        <div class="feedback-section-kicker">下一次直接怎么说</div>
        <h4>${result.mainFocus.title}</h4>
        <div class="focus-template">
          <strong>直接套这个结构：</strong>
          <span>${result.nextAnswerTemplate}</span>
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
      </div>

      <div class="analysis-card panel">
        <h4>分维度看问题</h4>
        ${result.analyses
          .map(
            (item) => `
              <div class="analysis-item">
                <strong>${item.name}</strong>
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

function renderReportDetailScreen() {
  const set = getCurrentSet();
  const result = state.lastResult || buildResult(set.sampleAnswer, set, state.currentQuestionIndex, { persist: false });

  return `
    <section class="screen ${state.screen === "report-detail" ? "active" : ""}" data-screen="report-detail">
      <div class="page-header">
        <button class="back-btn" type="button" data-back-report-overview="true">‹ 返回</button>
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

  document.querySelectorAll("[data-home-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.homeTab === "report") {
        state.homeTab = "report";
        state.screen = "home";
        render();
        return;
      }
      state.homeTab = button.dataset.homeTab;
      state.screen = "home";
      render();
    });
  });

  document.querySelectorAll("[data-part-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.questionPartFilter = button.dataset.partFilter;
      state.questionCategoryFilter = "all";
      render();
    });
  });

  document.querySelectorAll("[data-question-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.questionCategoryFilter = button.dataset.questionCategory;
      render();
    });
  });

  document.querySelectorAll("[data-question-library]").forEach((button) => {
    button.addEventListener("click", () => {
      state.questionLibraryTab = button.dataset.questionLibrary;
      render();
    });
  });

  document.querySelectorAll("[data-question-search]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.questionSearch = event.target.value;
      render();
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
    button.addEventListener("click", () => switchScreen("report-detail"));
  });

  document.querySelectorAll("[data-close-report]").forEach((button) => {
    button.addEventListener("click", () => {
      state.homeTab = "report";
      switchScreen("home");
    });
  });

  document.querySelectorAll("[data-back-report-overview]").forEach((button) => {
    button.addEventListener("click", () => {
      state.homeTab = "report";
      switchScreen("home");
    });
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

  document.querySelectorAll("[data-report-range]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportRange = button.dataset.reportRange;
      render();
    });
  });

  document.querySelectorAll("[data-report-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportMode = button.dataset.reportMode;
      render();
    });
  });

  document.querySelectorAll("[data-toggle-report-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportEditMode = !state.reportEditMode;
      render();
    });
  });

  document.querySelectorAll("[data-delete-history]").forEach((button) => {
    button.addEventListener("click", () => {
      deleteHistoryEntry(button.dataset.deleteHistory);
      render();
    });
  });

  document.querySelectorAll("[data-open-history]").forEach((button) => {
    button.addEventListener("click", () => {
      openHistoryReport(button.dataset.openHistory);
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
      updatePracticeLiveUI();
    };
    recognition.onerror = () => {
      if (!state.transcript) {
        state.transcript = "语音识别暂时没有拿到文字，你也可以直接发送录音试试。";
      }
      updatePracticeLiveUI();
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
      updatePracticeLiveUI();
    }
  } else if (!state.transcript) {
    state.transcript = "当前浏览器不支持录音，但页面结构和练习流程可以正常体验。";
    updatePracticeLiveUI();
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
      updatePracticeLiveUI();
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
  const lengthScore = words.length >= 24 ? 6.0 : words.length >= 16 ? 5.0 : words.length >= 10 ? 4.0 : words.length >= 6 ? 3.5 : 2.5;
  const varietyScore = uniqueWords.size >= 18 ? 5.5 : uniqueWords.size >= 12 ? 4.5 : uniqueWords.size >= 8 ? 3.5 : 2.5;
  const fluency = clampScore(lengthScore + (sentenceCount > 1 ? 0.2 : 0));
  const vocabulary = clampScore(varietyScore);
  const grammar = clampScore(
    words.some((word) => ["because", "which", "when", "although"].includes(word.toLowerCase()))
      ? 5.0
      : words.length >= 10
        ? 4.0
        : 2.5
  );
  const pronunciation = clampScore(words.length >= 12 ? 4.5 : words.length >= 7 ? 3.5 : 2.5);
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
    scoreSource: "demo",
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
  return roundBand(Math.max(2.5, Math.min(6.5, value)));
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

async function speakText(text, lang = "en-US", instructions = "") {
  try {
    await speakWithServerTTS(text, instructions || buildTtsInstructions(lang));
    return;
  } catch (_error) {
    speakWithBrowserTTS(text, lang);
  }
}

function speakWithBrowserTTS(text, lang = "en-US") {
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

async function speakWithServerTTS(text, instructions) {
  if (!window.location.protocol.startsWith("http")) {
    throw new Error("Server TTS unavailable");
  }

  if (state.ttsAudio) {
    state.ttsAudio.pause();
    state.ttsAudio = null;
  }

  const response = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text,
      instructions,
      voice: "coral"
    })
  });

  if (!response.ok) {
    throw new Error("TTS failed");
  }

  const blob = await response.blob();
  const audioUrl = URL.createObjectURL(blob);
  const audio = new Audio(audioUrl);
  state.ttsAudio = audio;
  audio.onended = () => {
    URL.revokeObjectURL(audioUrl);
    if (state.ttsAudio === audio) {
      state.ttsAudio = null;
    }
  };
  await audio.play();
}

function buildTtsInstructions(lang) {
  if (lang.startsWith("en")) {
    return "Speak naturally like a calm IELTS speaking coach. Use clear pacing, light emphasis, and warm but realistic intonation.";
  }
  return "Speak clearly, naturally, and at a moderate pace.";
}

function updatePracticeLiveUI() {
  if (state.screen !== "practice") {
    return;
  }

  const timerValue = document.querySelector("[data-timer-value]");
  const timerSub = document.querySelector("[data-timer-sub]");
  const recordFill = document.querySelector("[data-record-fill]");
  const bubbleTitle = document.querySelector("[data-live-transcript]");
  const bubbleSeconds = document.querySelector("[data-live-seconds]");
  const bubbleWrap = document.querySelector("[data-live-wrap]");

  const minutes = String(Math.floor(state.timerLeft / 60)).padStart(2, "0");
  const seconds = String(state.timerLeft % 60).padStart(2, "0");
  const recorded = `00:${String(state.recordedSeconds).padStart(2, "0")}`;
  const recordProgress = ((state.timerTotal - state.timerLeft) / state.timerTotal) * 100;

  if (timerValue) timerValue.textContent = `${minutes}:${seconds}`;
  if (timerSub) timerSub.textContent = `已录制 ${recorded}`;
  if (recordFill) recordFill.style.width = `${recordProgress}%`;

  if (state.transcript) {
    if (!bubbleWrap) {
      const promptCard = document.querySelector('[data-screen="practice"] .prompt-card');
      if (promptCard) {
        const wrap = document.createElement("div");
        wrap.className = "chat-bubble";
        wrap.setAttribute("data-live-wrap", "true");
        wrap.innerHTML = `
          <div class="answer-card">
            <h3 data-live-transcript></h3>
            <div data-live-seconds></div>
          </div>
        `;
        promptCard.insertAdjacentElement("afterend", wrap);
      }
    }
    const latestTitle = document.querySelector("[data-live-transcript]");
    const latestSeconds = document.querySelector("[data-live-seconds]");
    if (latestTitle) latestTitle.textContent = state.transcript;
    if (latestSeconds) latestSeconds.textContent = `${state.recordedSeconds}"`;
  }
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
    return normalizeTrainingData({
      ...getDefaultTrainingData(),
      ...JSON.parse(raw)
    });
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

function normalizeTrainingData(data) {
  return {
    ...data,
    history: (data.history || []).map((item, index) => ({
      mode: "speaking",
      recordedSeconds: 0,
      ...item,
      id: item.id || item.timestamp || `${item.date || "history"}-${index}`,
      timestamp: item.timestamp || (item.date ? `${item.date}T09:00:00.000Z` : new Date().toISOString())
    }))
  };
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

function getPracticeCount(setId) {
  return (state.trainingData.history || []).filter((item) => item.setId === setId).length;
}

function updateTrainingData(result) {
  const set = getPracticeSetById(result.setId);
  const timestamp = new Date().toISOString();
  const snapshot = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date: getTodayKey(),
    timestamp,
    setId: result.setId,
    titleEn: set?.titleEn || "",
    titleZh: set?.titleZh || "",
    part: result.part || set?.part || "",
    category: set?.category || "",
    questionIndex: Number(result.questionIndex || 0),
    overall: Number(result.overall),
    scores: result.scores,
    isRetry: state.retryFromFeedback,
    errorTags: result.errorTags,
    recordedSeconds: Number(result.recordedSeconds || 0),
    mode: "speaking",
    scoreSource: result.scoreSource || "demo",
    result
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

function deleteHistoryEntry(entryId) {
  state.trainingData.history = (state.trainingData.history || []).filter((item) => item.id !== entryId);
  saveTrainingData();
}

function getPracticeSetById(setId) {
  return practiceSets.find((item) => item.id === setId);
}

function getFilteredHistoryEntries() {
  const history = (state.trainingData.history || []).slice().reverse();
  const now = new Date();

  return history.filter((item) => {
    if ((item.mode || "speaking") !== state.reportMode) {
      return false;
    }

    const baseTime = new Date(item.timestamp || item.date || now.toISOString());
    if (state.reportRange === "today") {
      return (item.date || baseTime.toISOString().slice(0, 10)) === getTodayKey();
    }
    if (state.reportRange === "7d") {
      return now - baseTime <= 7 * 24 * 60 * 60 * 1000;
    }
    if (state.reportRange === "30d") {
      return now - baseTime <= 30 * 24 * 60 * 60 * 1000;
    }
    return true;
  });
}

function getReportOverview() {
  const entries = getFilteredHistoryEntries();
  const todayEntries = (state.trainingData.history || []).filter((item) => item.date === getTodayKey() && (item.mode || "speaking") === "speaking");
  const bestScore = entries.length ? Math.max(...entries.map((item) => Number(item.overall || 0))).toFixed(1) : "0.0";
  const todayMinutes = Math.round(todayEntries.reduce((sum, item) => sum + Number(item.recordedSeconds || 0), 0) / 60);
  const totalHours = (entries.reduce((sum, item) => sum + Number(item.recordedSeconds || 0), 0) / 3600).toFixed(1);

  return {
    bestScore,
    todayMinutes,
    streak: getTrainingStreak(state.trainingData.history || []),
    totalHours
  };
}

function formatHistoryDateTime(rawValue) {
  const base = rawValue ? new Date(rawValue) : new Date();
  if (Number.isNaN(base.getTime())) {
    return rawValue || "";
  }
  const y = base.getFullYear();
  const m = String(base.getMonth() + 1).padStart(2, "0");
  const d = String(base.getDate()).padStart(2, "0");
  const hh = String(base.getHours()).padStart(2, "0");
  const mm = String(base.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d} ${hh}:${mm}`;
}

function openHistoryReport(entryId) {
  const entry = (state.trainingData.history || []).find((item) => item.id === entryId);
  if (!entry) {
    return;
  }

  if (entry.setId) {
    state.currentSetId = entry.setId;
  }
  state.currentQuestionIndex = Number(entry.questionIndex || 0);

  if (entry.result) {
    state.lastResult = entry.result;
  } else {
    const set = getPracticeSetById(entry.setId) || getCurrentSet();
    const fallbackTranscript = set?.sampleAnswer || "I am still building my practice history.";
    const rebuilt = buildResult(fallbackTranscript, set, Number(entry.questionIndex || 0), { persist: false });
    rebuilt.overall = Number(entry.overall || rebuilt.overall);
    rebuilt.overallBand = Number(entry.overall || rebuilt.overall).toFixed(1);
    rebuilt.scores = entry.scores || rebuilt.scores;
    rebuilt.metrics = entry.scores || rebuilt.metrics;
    state.lastResult = rebuilt;
  }

  switchScreen("report-detail");
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
    scoreSource: "real",
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
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .catch(() => null);
    navigator.serviceWorker.register("./sw.js?v=20260523c").catch(() => {
      return null;
    });
  });
}

render();
