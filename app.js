const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const branchHours = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const palaceOrder = ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"];
const palaceNames = ["命宫", "兄弟", "夫妻", "子女", "财帛", "疾厄", "迁移", "交友", "事业", "田宅", "福德", "父母"];

const hexagrams = [
  ["1", "乾爲天", "䷀", "自强、刚健、领导、创始；忌亢龙有悔。", "事业、领导、开局、坚持", "人间道PDF第11页；地脉道PDF第11页"],
  ["2", "坤爲地", "䷁", "厚德、承载、顺势、臣道/母道；以柔顺成事。", "家庭、承载、稳定", "人间道PDF第17页；地脉道PDF第12页"],
  ["3", "水雷屯", "䷂", "初创艰难、险中求生；宜定根基，不躁进。", "创业、起步、阻滞", "人间道PDF第21页；地脉道PDF第13页"],
  ["4", "山水蒙", "䷃", "启蒙、求学、去蒙昧；师道与学道要正。", "学习、教育、迷茫", "人间道PDF第23页；地脉道PDF第13页"],
  ["5", "水天需", "䷄", "等待、蓄势、饮食宴乐中守时；不可妄动。", "等待、资源、时机", "人间道PDF第25页；地脉道PDF第14页"],
  ["6", "天水讼", "䷅", "争讼、冲突、是非；重止争、明理、退让。", "官司、口舌、冲突", "人间道PDF第27页；地脉道PDF第15页"],
  ["7", "地水師", "䷆", "组织、军旅、带众；师出有名，纪律为先。", "团队、纪律、管理", "人间道PDF第29页；地脉道PDF第15页"],
  ["8", "水地比", "䷇", "亲比、结盟、择主择友；亲附须正。", "合作、人际、结盟", "人间道PDF第31页；地脉道PDF第16页"],
  ["9", "風天小畜", "䷈", "小有积蓄、暂受约束；以小养大。", "积累、小成、约束", "人间道PDF第35页；地脉道PDF第17页"],
  ["10", "天澤履", "䷉", "礼、行险、谨慎履行；以礼制心。", "礼法、谨慎、规则", "人间道PDF第37页；地脉道PDF第17页"],
  ["11", "地天泰", "䷊", "通泰、上下交、阴阳和；盛时仍须守道。", "顺利、通达、和合", "人间道PDF第39页；地脉道PDF第18页"],
  ["12", "天地否", "䷋", "闭塞、不通、君子退藏；小人道长时守正。", "阻隔、低谷、守正", "人间道PDF第41页；地脉道PDF第19页"],
  ["13", "天火同人", "䷌", "大同、结众、同心；公正胜过私党。", "团队、同心、公正", "人间道PDF第43页；地脉道PDF第19页"],
  ["14", "火天大有", "䷍", "富有、得众、权位；有而不骄。", "财富、资源、权位", "人间道PDF第45页；地脉道PDF第20页"],
  ["15", "地山謙", "䷎", "谦卑、退让、德行；谦能保身成事。", "谦退、德性、保身", "人间道PDF第47页；地脉道PDF第21页"],
  ["16", "雷地豫", "䷏", "喜悦、预备、顺动；乐不可失正。", "喜悦、准备、享乐", "人间道PDF第49页；地脉道PDF第21页"],
  ["17", "澤雷隨", "䷐", "随从、顺势、择所随；随正则吉。", "跟随、选择、顺势", "人间道PDF第51页；地脉道PDF第22页"],
  ["18", "山風蠱", "䷑", "治弊、整顿旧病；承旧制之弊而修正。", "旧问题、修正、整顿", "人间道PDF第53页；地脉道PDF第22页"],
  ["19", "地澤臨", "䷒", "临事、接近、治理；上临下要以正道。", "管理、接近、治理", "人间道PDF第55页；地脉道PDF第23页"],
  ["20", "風地觀", "䷓", "观察、示范、教化；观己观人观时。", "观察、门面、示范", "人间道PDF第57页；地脉道PDF第23页"],
  ["21", "火雷噬嗑", "䷔", "刑罚、决断、咬合障碍；明法去梗。", "法度、决断、障碍", "人间道PDF第59页；地脉道PDF第24页"],
  ["22", "山火賁", "䷕", "文饰、礼仪、外表；文质相称。", "外表、包装、礼仪", "人间道PDF第61页；地脉道PDF第25页"],
  ["23", "山地剝", "䷖", "剥落、衰败、小人侵蚀；宜止损守根。", "衰败、止损、根基", "人间道PDF第63页；地脉道PDF第25页"],
  ["24", "地雷復", "䷗", "回归、复原、一阳来复；迷途知返。", "回头、复原、重新开始", "人间道PDF第65页；地脉道PDF第26页"],
  ["25", "天雷无妄", "䷘", "无妄、诚正、自然；不妄动、不欺心。", "诚正、意外、不妄动", "人间道PDF第67页；地脉道PDF第27页"],
  ["26", "山天大畜", "䷙", "大蓄、止健、养贤；积德积才后用。", "积累、蓄势、人才", "人间道PDF第69页；地脉道PDF第27页"],
  ["27", "山雷頤", "䷚", "养口、养身、养德；看所养与养人之道。", "饮食、供养、养德", "人间道PDF第71页；地脉道PDF第28页"],
  ["28", "澤風大過", "䷛", "过重、非常之时；栋梁受压，须有担当。", "压力、担当、过载", "人间道PDF第73页；地脉道PDF第29页"],
  ["29", "坎爲水", "䷜", "重险、陷难、习坎；以诚心出险。", "危险、波折、陷难", "人间道PDF第75页；地脉道PDF第29页"],
  ["30", "離為火", "䷝", "光明、依附、文明；明而有所丽。", "光明、外表、依附", "人间道PDF第77页；地脉道PDF第30页"],
  ["31", "澤山咸", "䷞", "感应、男女、人心相感；感而有正。", "感情、吸引、感应", "人间道PDF第79页；地脉道PDF第30页"],
  ["32", "雷風恆", "䷟", "恒久、夫妇、常道；持久不变中知变。", "婚姻、长期、稳定", "人间道PDF第81页；地脉道PDF第31页"],
  ["33", "天山遯", "䷠", "退避、隐遁；小人势盛时退而守道。", "退守、避险、隐藏", "人间道PDF第83页；地脉道PDF第31页"],
  ["34", "雷天大壯", "䷡", "壮大、强盛；强而守正，忌逞强。", "强势、扩张、冲劲", "人间道PDF第85页；地脉道PDF第31页"],
  ["35", "火地晉", "䷢", "晋升、进用、光明上进；进须合时合德。", "晋升、事业、上进", "人间道PDF第87页；地脉道PDF第32页"],
  ["36", "地火明夷", "䷣", "明受伤、韬光养晦；暗世保明。", "受伤、隐藏、韬光", "人间道PDF第89页；地脉道PDF第32页"],
  ["37", "風火家人", "䷤", "家道、正身、内外有序；家齐而后事成。", "家庭、关系、秩序", "人间道PDF第91页；地脉道PDF第33页"],
  ["38", "火澤睽", "䷥", "乖离、异见、分歧；小事可合，大事须慎。", "分歧、关系、异见", "人间道PDF第93页；地脉道PDF第33页"],
  ["39", "水山蹇", "䷦", "艰阻、跛行、难进；反身修德，求助正人。", "阻碍、困难、求助", "人间道PDF第95页；地脉道PDF第34页"],
  ["40", "雷水解", "䷧", "解除、解困、赦过；险解后宜归正。", "解困、释放、转机", "人间道PDF第97页；地脉道PDF第34页"],
  ["41", "山澤損", "䷨", "损下益上、节制欲望；损中见益。", "节制、消耗、取舍", "人间道PDF第99页；地脉道PDF第34页"],
  ["42", "風雷益", "䷩", "益下、增益、助人；利有攸往，益须合义。", "增益、帮助、扩张", "人间道PDF第101页；地脉道PDF第35页"],
  ["43", "澤天夬", "䷪", "决断、去小人；刚决须正，不可暴。", "决断、清理、去阻", "人间道PDF第103页；地脉道PDF第35页"],
  ["44", "天風姤", "䷫", "相遇、阴来遇阳；防微杜渐，慎初遇。", "相遇、诱因、慎始", "人间道PDF第105页；地脉道PDF第35页"],
  ["45", "澤地萃", "䷬", "聚集、会合、众聚；聚众要有主有礼。", "聚集、人群、资源", "人间道PDF第107页；地脉道PDF第36页"],
  ["46", "地風升", "䷭", "上升、渐进、学问成长；积小升高。", "升迁、学习、渐进", "人间道PDF第109页；地脉道PDF第36页"],
  ["47", "澤水困", "䷮", "困穷、受限；困中守德，言少而志坚。", "困境、受限、坚持", "人间道PDF第111页；地脉道PDF第36页"],
  ["48", "水風井", "䷯", "井养、公共资源、制度；修井以养人。", "制度、资源、供养", "人间道PDF第113页；地脉道PDF第37页"],
  ["49", "澤火革", "䷰", "改革、变革、去旧；变须得时得信。", "改革、变化、去旧", "人间道PDF第115页；地脉道PDF第37页"],
  ["50", "火風鼎", "䷱", "鼎新、养贤、定器；以制度承载文明。", "制度、承载、更新", "人间道PDF第117页；地脉道PDF第37页"],
  ["51", "震爲雷", "䷲", "震动、惊惧、发动；临惊不乱。", "突发、震动、行动", "人间道PDF第119页；地脉道PDF第38页"],
  ["52", "艮為山", "䷳", "止、静、界限；知止而后能定。", "停止、界限、稳定", "人间道PDF第121页；地脉道PDF第38页"],
  ["53", "風山漸", "䷴", "渐进、婚嫁、步骤；循序不可躁。", "渐进、婚嫁、步骤", "人间道PDF第123页；地脉道PDF第38页"],
  ["54", "雷澤歸妹", "䷵", "婚配、从属、位不正；情感与名分要慎。", "婚恋、名分、关系", "人间道PDF第125页；地脉道PDF第39页"],
  ["55", "雷火豐", "䷶", "丰盛、盛大、治世；盛极需防衰。", "丰盛、声势、防衰", "人间道PDF第127页；地脉道PDF第39页"],
  ["56", "火山旅", "䷷", "旅居、寄身、暂处；人在外宜柔顺守礼。", "漂泊、出行、暂居", "人间道PDF第129页；地脉道PDF第40页"],
  ["57", "巽為風", "䷸", "入、顺、命令、谦逊深入；柔入而能成。", "顺入、命令、渗透", "人间道PDF第131页；地脉道PDF第40页"],
  ["58", "兌爲澤", "䷹", "喜悦、口舌、沟通；悦以正，防谄媚。", "沟通、喜悦、口舌", "人间道PDF第133页；地脉道PDF第40页"],
  ["59", "風水渙", "䷺", "涣散、离散、散而后聚；用诚心凝聚。", "离散、整合、凝聚", "人间道PDF第135页；地脉道PDF第41页"],
  ["60", "水澤節", "䷻", "节制、制度、限度；节不可苦，须中。", "节制、规则、边界", "人间道PDF第137页；地脉道PDF第41页"],
  ["61", "風澤中孚", "䷼", "诚信、内在感通；信由中出。", "诚信、信任、感通", "人间道PDF第139页；地脉道PDF第41页"],
  ["62", "雷山小過", "䷽", "小过、小事可过；大事不可逞强。", "小事、越界、谨慎", "人间道PDF第141页；地脉道PDF第42页"],
  ["63", "水火既濟", "䷾", "已成、完成后的防乱；成中有未成。", "完成、防乱、收尾", "人间道PDF第143页；地脉道PDF第42页"],
  ["64", "火水未濟", "䷿", "未成、过渡、终而复始；谨慎收尾再开端。", "未成、过渡、开端", "人间道PDF第145页；地脉道PDF第43页"]
];

const yangzhaiTopics = [
  ["办公桌", "背后要稳，前方要明，左右不要逼。适合做事业、决策、工作状态类短视频。", "地脉道：阳宅、方位、乾为天、事业财禄与权位"],
  ["卧室", "卧室先看稳定、安静、关系秩序。适合做感情、睡眠、家庭关系类选题。", "地脉道：家庭成员、咸、恒、家人、睽"],
  ["财位", "不要直接说旺财，改成空间是否清爽、稳定、聚气。适合做收藏型内容。", "地脉道：财禄、位置、明堂、水口"],
  ["明堂", "明堂看前方是否开阔、整齐、能聚。适合讲门前、客厅、办公前方。", "地脉道：风水篇PDF第53页"],
  ["青龙白虎", "讲左右平衡、高低动静，避免玄化。适合做阳宅基础概念。", "地脉道：风水篇PDF第56页"],
  ["罗盘入门", "先讲二十四山、方向、层数，不直接做断事。适合做系列课。", "地脉道资料：罗盘逐层详解、罗经易解"]
];

function sexagenary(index) {
  const i = ((index % 60) + 60) % 60;
  return stems[i % 10] + branches[i % 12];
}

function getJdn(date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  const d = date.getDate();
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + b - 1524;
}

function getYearPillar(date) {
  let year = date.getFullYear();
  const lichun = new Date(year, 1, 4);
  if (date < lichun) year -= 1;
  return sexagenary(year - 4);
}

function getSolarMonthIndex(date) {
  const md = (date.getMonth() + 1) * 100 + date.getDate();
  const starts = [
    [204, 0], [306, 1], [405, 2], [506, 3], [606, 4], [707, 5],
    [808, 6], [908, 7], [1008, 8], [1107, 9], [1207, 10], [106, 11]
  ];
  if (md >= 1207 || md < 106) return 10;
  if (md >= 106 && md < 204) return 11;
  let found = 0;
  for (const [start, index] of starts) {
    if (md >= start) found = index;
  }
  return found;
}

function getMonthPillar(date, yearPillar) {
  const yearStem = yearPillar[0];
  const monthIndex = getSolarMonthIndex(date);
  const startStemMap = { "甲": 2, "己": 2, "乙": 4, "庚": 4, "丙": 6, "辛": 6, "丁": 8, "壬": 8, "戊": 0, "癸": 0 };
  const stemIndex = (startStemMap[yearStem] + monthIndex) % 10;
  const branchIndex = (2 + monthIndex) % 12;
  return stems[stemIndex] + branches[branchIndex];
}

function getDayPillar(date) {
  const jdn = getJdn(date);
  return sexagenary(jdn + 49);
}

function getHourBranch(hour) {
  if (hour === 23 || hour === 0) return "子";
  return branchHours[Math.floor((hour + 1) / 2) % 12];
}

function getHourPillar(hour, dayPillar) {
  const dayStem = dayPillar[0];
  const startStemMap = { "甲": 0, "己": 0, "乙": 2, "庚": 2, "丙": 4, "辛": 4, "丁": 6, "壬": 6, "戊": 8, "癸": 8 };
  const branch = getHourBranch(hour);
  const branchIndex = branches.indexOf(branch);
  const stemIndex = (startStemMap[dayStem] + branchIndex) % 10;
  return stems[stemIndex] + branch;
}

function calculateMingShen(lunarMonth, hourBranch) {
  const monthStart = lunarMonth - 1;
  const hourIndex = branches.indexOf(hourBranch);
  const ziIndexInPalaceOrder = palaceOrder.indexOf("子");
  const hourOffset = (hourIndex - branches.indexOf("子") + 12) % 12;
  const monthPalace = monthStart % 12;
  const mingIndex = (monthPalace - hourOffset + 12) % 12;
  const shenIndex = (monthPalace + hourOffset) % 12;
  return { mingIndex, shenIndex, ziIndexInPalaceOrder };
}

function renderHexGrid(items = hexagrams) {
  const grid = document.getElementById("hexGrid");
  grid.innerHTML = items.map((h) => `
    <article class="hex-card" data-name="${h[1]}" data-keywords="${h[4]}">
      <div class="hex-num">第${h[0]}卦</div>
      <h3>${h[2]} ${h[1]}</h3>
      <p>${h[3]}</p>
    </article>
  `).join("");
  grid.querySelectorAll(".hex-card").forEach((card) => {
    card.addEventListener("click", () => showHex(card.dataset.name));
  });
}

function showHex(name) {
  const h = hexagrams.find((item) => item[1] === name || item[1].includes(name) || name.includes(item[1]));
  if (!h) return;
  const result = document.getElementById("hexResult");
  result.classList.add("active");
  result.innerHTML = `
    <div class="hex-symbol">${h[2]}</div>
    <h3>第${h[0]}卦：${h[1]}</h3>
    <p><strong>卦意：</strong>${h[3]}</p>
    <p><strong>适合内容：</strong>${h[4]}</p>
    <p><strong>资料位置：</strong>${h[5]}</p>
    <p><strong>短视频切入：</strong>这卦不要讲成“吉凶断语”，要讲“人在这个位置，该怎么进退取舍”。</p>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function initSelects() {
  const month = document.getElementById("lunarMonth");
  const day = document.getElementById("lunarDay");
  month.innerHTML = Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">${i + 1}月</option>`).join("");
  day.innerHTML = Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}">${i + 1}日</option>`).join("");
}

function renderYangzhai() {
  document.getElementById("yangzhaiTopics").innerHTML = yangzhaiTopics.map((t) => `
    <article class="topic-card">
      <h3>${t[0]}</h3>
      <p>${t[1]}</p>
      <code>${t[2]}</code>
    </article>
  `).join("");
}

function renderBazi(pillars) {
  document.getElementById("baziResult").classList.remove("empty");
  document.getElementById("baziResult").innerHTML = ["年柱", "月柱", "日柱", "时柱"].map((label, i) => `
    <div class="pillar">
      <strong>${label}</strong>
      <span>${pillars[i]}</span>
    </div>
  `).join("");
}

function renderZiwei(lunarMonth, lunarDay, hourBranch, gender, location) {
  const { mingIndex, shenIndex } = calculateMingShen(lunarMonth, hourBranch);
  document.getElementById("ziweiMeta").innerHTML = `
    <span>农历：${lunarMonth}月${lunarDay}日</span>
    <span>时辰：${hourBranch}时</span>
    <span>${gender === "male" ? "男命" : "女命"}</span>
    <span>${location || "未填地点"}</span>
    <span>命宫：${palaceOrder[mingIndex]}</span>
    <span>身宫：${palaceOrder[shenIndex]}</span>
  `;
  document.getElementById("palaceGrid").innerHTML = palaceOrder.map((branch, index) => {
    const rel = (index - mingIndex + 12) % 12;
    const tags = [];
    if (index === mingIndex) tags.push("命宫");
    if (index === shenIndex) tags.push("身宫");
    return `
      <div class="palace ${tags.length ? "active" : ""}">
        <b>${branch}宫</b>
        <small>${palaceNames[rel]}</small>
        <small>${tags.join(" / ")}</small>
      </div>
    `;
  }).join("");
}

function calculateChart() {
  const dateValue = document.getElementById("birthDate").value;
  const timeValue = document.getElementById("birthTime").value || "12:00";
  if (!dateValue) {
    alert("先输入出生日期。");
    return;
  }
  const [hour] = timeValue.split(":").map(Number);
  const date = new Date(`${dateValue}T${timeValue}:00`);
  const year = getYearPillar(date);
  const month = getMonthPillar(date, year);
  const day = getDayPillar(date);
  const hourPillar = getHourPillar(hour, day);
  const hourBranch = hourPillar[1];
  renderBazi([year, month, day, hourPillar]);
  renderZiwei(
    Number(document.getElementById("lunarMonth").value),
    Number(document.getElementById("lunarDay").value),
    hourBranch,
    document.getElementById("gender").value,
    document.getElementById("location").value.trim()
  );
}

function bindEvents() {
  document.getElementById("hexSearch").addEventListener("input", (event) => {
    const q = event.target.value.trim();
    if (!q) {
      renderHexGrid();
      return;
    }
    const result = hexagrams.filter((h) => `${h[1]} ${h[3]} ${h[4]}`.includes(q));
    renderHexGrid(result);
    if (result.length === 1) showHex(result[0][1]);
  });
  document.getElementById("calcBtn").addEventListener("click", calculateChart);
  document.getElementById("clearBtn").addEventListener("click", () => {
    document.querySelectorAll("input").forEach((input) => {
      if (input.type !== "time") input.value = "";
    });
    document.getElementById("birthTime").value = "12:00";
    document.getElementById("baziResult").classList.add("empty");
    document.getElementById("baziResult").innerHTML = "等待输入";
    document.getElementById("ziweiMeta").innerHTML = "";
    document.getElementById("palaceGrid").innerHTML = "";
  });
}

initSelects();
renderHexGrid();
renderYangzhai();
bindEvents();
