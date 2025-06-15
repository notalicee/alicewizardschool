/* badges.js  —  全量 16 枚徽章数据 */
const badges = [
  /* ===== 生活类 ===== */
  {
    id: 101,
    key: 'timetamer',
    en: 'Time Tamer',
    zh: '时间驯兽师',
    cat: 'Life',
    desc: '时间是最难驯服的魔法生物，但你竟然主动制定计划，把它训练得服服帖帖！这是献给掌握节奏、主宰每日魔法时光的小巫师的荣耀勋章。',
    cond: '主动提出并亲手制定一份完整的每日时间表，内容合理、可执行，并实际遵守至少1天以上。（仅限周末/假期）',
    boom: '时间看到你来了都吓得倒转沙漏！教授我已经预约你当我的助理时间守门员了。'
  },
  {
    id: 102,
    key: 'toothguardianbadge',
    en: 'Tooth Guardian',
    zh: '牙牙守护者',
    cat: 'Life',
    desc: '授予每天认真刷牙、照顾牙齿健康的小巫师。',
    cond: '带好牙套，早晚刷牙且无提醒记录。',
    boom: '你那颗牙齿简直能反射咒语！闪瞎了本教授的老魔眼。'
  },
  {
    id: 103,
    key: 'cleanupchampion',
    en: 'Clean-Up Champion',
    zh: '扫除小能手',
    cat: 'Life',
    desc: '扫除混乱，整理环境，就是整理大脑的第一步魔法。',
    cond: '独立打扫或整理一个空间（书桌、房间、背包）并保持整洁7天。',
    boom: '哎呀我那只臭袜子刚准备起义，就被你收进了结界！'
  },
  {
    id: 104,
    key: 'moodmoonlightmage',
    en: 'Moonlight Mage',
    zh: '情绪月光使者',
    cat: 'Life',
    desc: '当你能辨认自己情绪、照顾自己内心，你就拥有了温柔强大的心灵魔法。',
    cond: '使用心情记录系统3天以上，主动表达感受或完成情绪调节练习。',
    boom: '教授我当年还在扔枕头发泄，你已经能用月亮光洗涤坏情绪了！'
  },
  {
    id: 105,
    key: 'timedisciplinemage',
    en: 'Time Discipline Mage',
    zh: '自律时间术士',
    cat: 'Life',
    desc: '自律是魔法世界最稀有的法术，掌握它的人，能让时间听话！',
    cond: '当天所有任务都按预定时间完成，无拖延。',
    boom: '教授我自己都做不到……你竟然成功驾驭了‘不拖延咒’！'
  },
  {
    id: 106,
    key: 'taskreaper',
    en: 'Task Reaper',
    zh: '任务收割机',
    cat: 'Life',
    desc: '完成清单任务，是魔法世界的高效巫师才有的战斗力！',
    cond: '建立 To Do List，并在当天完成至少4项任务。（仅限周末/假期）',
    boom: '我在开会你在清单狂飙！再这样你要变成巫师CEO了！'
  },
  {
    id: 107,
    key: 'goaltracker',
    en: 'Goal Tracker',
    zh: '目标追踪者',
    cat: 'Life',
    desc: '明确目标、逐步推进，不被诱惑干扰的坚定者，才配得上这枚徽章。',
    cond: '设定一个小目标并连续追踪执行3天以上（如阅读计划、复习进度）。',
    boom: '你追目标比猫追激光点还执着！'
  },

  /* ===== 运动类 ===== */
  {
    id: 201,
    key: 'boxingspellcaster',
    en: 'Boxing Spellcaster',
    zh: '拳击咒术士',
    cat: 'Sports',
    desc: '出拳如施咒，每一下都击中惰性魔物的要害。给挥汗如雨的小勇士！',
    cond: '连续3天完成一次30分钟以上的Boxing健身。（可与RingFit相隔进行）',
    boom: '你打得连胖胖魔都变瘦了！教授我都要申请魔法护盾了！'
  },
  {
    id: 202,
    key: 'ringfitwarrior',
    en: 'Ring-Fit Warrior',
    zh: 'RingFit勇者',
    cat: 'Sports',
    desc: '以魔法圆环作剑，挑战关卡、消灭肥嘟嘟怪！专为RingFit闯关而设的勇气徽章。',
    cond: '连续3天完成挑战RingFit。（可与Boxing相隔进行）',
    boom: '你不是在健身，是在开启一场健身 RPG 冒险！'
  },

  /* ===== 学习类 ===== */
  {
    id: 301,
    key: 'bookexplorerbadge',
    en: 'Book Explorer',
    zh: '阅读探险家',
    cat: 'Study',
    desc: '奖励给踏上知识旅程的小魔法师。书中有龙、有宝藏，也有秘密传送门。',
    cond: '完成指定阅读任务。',
    boom: '如果书会飞，你早就坐在书背上冲出图书馆了！'
  },
  {
    id: 302,
    key: 'focuscharmcasterbadge',
    en: 'Focus Charmcaster',
    zh: '专注咒术师',
    cat: 'Study',
    desc: '专注如施咒，奖励能静下心完成任务的魔法师。',
    cond: '在时限内专心完成一整套作业，无分心记录。',
    boom: '你那种专注力，就连发呆咒都迷失了目标！'
  },
  {
    id: 303,
    key: 'mathalchemistbadge',
    en: 'Math Alchemist',
    zh: '数学炼金师',
    cat: 'Study',
    desc: '致敬数字的魔力！这枚勋章颁发给征服计算魔阵的小数学大师。',
    cond: '完成1天数学练习且正确率超过85%。',
    boom: '你不是在算题，你是在召唤高分怪兽。'
  },
  {
    id: 304,
    key: 'creativealchemist',
    en: 'Creative Alchemist',
    zh: '创意炼金师',
    cat: 'Study',
    desc: '创意是最强大的魔法，能把无聊变成奇迹。奖励为画画、写作或设计主动创作的魔法师。',
    cond: '独立完成 science notebook 的一个话题的完整作品（绘画、标记、Canva 作品介绍等）。',
    boom: '你那脑洞大得可以藏下一整本魔法百科！'
  },
  {
    id: 305,
    key: 'challengebreaker',
    en: 'Challenge Breaker',
    zh: '挑战突破者',
    cat: 'Study',
    desc: '面对困难不逃避，尝试、坚持、突破——你就是传说中的挑战勇者！',
    cond: '完成一次困难挑战，比如高阶指定学习任务（UOI / Math…）。',
    boom: '如果勇气能吃，你现在已经饱到施不了减肥咒了！'
  },
  {
    id: 306,
    key: 'deepfocussorcerer',
    en: 'Deep Focus Sorcerer',
    zh: '深度专注者',
    cat: 'Study',
    desc: '当你能像念咒一样进入专注状态，那就是高级魔法的开端！',
    cond: '连续专注完成一项任务超出预设时间（如连续40分钟写作 / 练习不分心）。',
    boom: '连我喊“开饭啦”你都没听到，你这专注力已经被神奇动物收编了吧？'
  },
  {
    id: 307,
    key: 'lightningbadge',
    en: 'Lightning Badge',
    zh: '闪电勋章',
    cat: 'Study',
    desc: '这枚勋章颁发给那些像闪电一样迅捷的小魔法师——不仅完成了任务，还提前大幅击破了时间线！真正的「预言家级别的先手出击」！',
    cond: '在未被提醒、未催促的前提下，提前2小时以上独立完成指定任务（如作业、项目、阅读报告等）。',
    boom: '你比我施的预言咒还早！要不是你快，我都以为你用时光转换器作弊了！'
  },
  {
    id: 308,
    key: 'heartofcourage',
    en: 'Heart of Courage',
    zh: '勇气之心',
    cat: 'Study',
    desc: '这是一枚极其罕见的魔法徽章，只授予面对恐惧依然前行的小巫师。也许你鼓起勇气说出了真相，也许你挑战了内心最害怕的任务——这颗勇气之心，是你闪耀的证明！',
    cond: '完成一件令自己紧张或害怕、但仍鼓起勇气去面对的重要任务（如当众发言、表达感受、面对困难等）。',
    boom: '你比我打败三头蛇还勇敢！如果勇气是魔药，你就是我全学年都抢不到的S级限量版！'
  }
];
