import React, { useMemo, useState } from "react";

const PLACEHOLDER_EMAIL = "hello@bosonsmart.hk";
const PLACEHOLDER_WHATSAPP = "85200000000";

const iconMap = {
  arrow: "→",
  check: "✓",
  bolt: "⚡",
  home: "⌂",
  shield: "◈",
  comfort: "☼",
  light: "✦",
  lock: "▣",
  sliders: "≋",
  sparkle: "✧",
  clock: "◷",
  building: "▥",
  phone: "☎",
  menu: "☰",
  close: "×",
  plus: "+",
};

function Icon({ name, className = "" }) {
  return (
    <span className={`icon ${className}`} aria-hidden="true">
      {iconMap[name] || "•"}
    </span>
  );
}

function formatHKD(value) {
  return `HK$${value.toLocaleString("en-HK")}`;
}

const content = {
  en: {
    brand: "Boson Smart",
    brandSub: "Smart homes for Hong Kong apartments",
    nav: ["Packages", "Builder", "Scope", "Process", "Contact"],
    quote: "Build estimate",
    heroEyebrow: "Hong Kong smart-home installation packages",
    heroTitle: "Smart home packages for Hong Kong apartments — installed, configured, and ready to use.",
    heroText:
      "Start with lighting scenes, comfort automation, energy-saving routines, or family safety. Choose a package, build an estimate, and request a practical consultation.",
    heroPrimary: "Build my estimate",
    heroSecondary: "View packages",
    trust: [
      "Hong Kong apartment focused",
      "Electrical service partner support",
      "Site assessment before final quotation",
      "Handover and user training included",
    ],
    dashboardModeLabel: "Today’s home mode",
    dashboardMode: "Evening Comfort",
    active: "Active",
    dashboardRows: [
      ["Living room", "Warm scene", "72%"],
      ["Air-con", "Comfort routine", "24.5°C"],
      ["Entrance", "Safety monitoring", "On"],
      ["Bedroom", "Sleep prep", "22:45"],
    ],
    packagesEyebrow: "Three starting packages",
    packagesTitle: "Choose by what you want your home to do.",
    packagesText:
      "Each package is designed to be simple to understand, practical to install, and expandable later as your home setup grows.",
    priceNote:
      "Online prices are planning estimates. Final quotation is confirmed after checking wiring, device compatibility, selected brands, and site condition.",
    selectPlan: "Select package",
    selectedPlan: "Selected package",
    idealFor: "Ideal for:",
    builderEyebrow: "Smart home estimate builder",
    builderTitle: "Build your smart home estimate.",
    builderText:
      "Choose a base package, apartment type, and optional upgrades. The estimate updates instantly, then turns into a consultation request before final quotation.",
    builderStep1: "1. Choose base package",
    builderStep2: "2. Select apartment type",
    builderStep3: "3. Add optional upgrades",
    builderSummary: "Live estimate",
    builderBase: "Base package",
    builderApartment: "Apartment adjustment",
    builderAddons: "Selected add-ons",
    builderNoAddons: "No add-ons selected",
    builderEstimatedTotal: "Estimated total",
    builderDisclaimer:
      "This is an initial estimate, not a final quotation. Final pricing depends on wiring condition, switch compatibility, Wi-Fi coverage, device brand, installation difficulty, and site inspection.",
    builderCta: "Send estimate by WhatsApp",
    builderSecondaryCta: "Email this estimate",
    included: "Included in selected package",
    whyEyebrow: "Why Boson Smart",
    whyTitle: "Not just smart devices. A usable home system.",
    whyText:
      "A smart home should still feel simple for everyday living. We focus on practical scenes, clean handover, and upgrades that make sense for Hong Kong apartments.",
    whyPoints: [
      "Designed around Hong Kong apartment routines",
      "Clear packages before detailed custom work",
      "Site assessment before confirming final price",
      "Simple controls for family members who do not want to use an app",
      "Privacy-conscious setup for cameras, sensors, and accounts",
      "Expandable from one room to more zones later",
    ],
    includedTitle: "Usually included",
    excludedTitle: "Usually quoted separately",
    includedItems: [
      "Initial package recommendation",
      "Basic device setup",
      "App and scene configuration",
      "Post-installation testing",
      "Basic user training",
      "Simple handover checklist",
    ],
    excludedItems: [
      "Major rewiring or new cable routing",
      "False ceiling, carpentry, or renovation works",
      "Premium specified-brand upgrades",
      "Complex network improvement works",
      "Non-standard wall or door modification",
      "Long-term support after warranty period",
    ],
    scenarioEyebrow: "Scenario-first design",
    scenarioTitle: "Sell the feeling, not only the devices.",
    scenarioText:
      "Smart-home value is easiest to understand through daily life: arriving home, relaxing after dinner, and moving safely at night.",
    comparisonTitle: "Simple comparison",
    comparisonHeaders: ["Feature", "Starter", "Comfort & Energy", "Family Safety"],
    comparisonRows: [
      ["Main focus", "Convenience", "Comfort + savings", "Safety + monitoring"],
      ["Lighting scenes", "Core areas", "Multiple rooms", "Safety-focused areas"],
      ["Air-con automation", "Optional", "Included option", "Optional"],
      ["Sensors", "Basic option", "Comfort / motion", "Door / window / safety"],
      ["Best stage", "Anytime", "Before / during renovation", "Anytime"],
    ],
    launchEyebrow: "Phase 1 launch offer",
    launchTitle: "Accepting a limited number of early smart-home projects.",
    launchText:
      "We are starting with a small number of Hong Kong apartment projects to refine installation workflow, handover quality, and real household scene design.",
    launchBadge: "Ideal early customer",
    launchSide:
      "You want to start with practical areas such as entry, living room, air-con, curtains, or family safety — not a full-home project immediately.",
    launchPoints: [
      ["01", "Initial package review", "Recommend a starting package based on apartment status, habits, and goals."],
      ["02", "Scene tuning", "Basic scene and setting adjustments after installation based on real usage."],
      ["03", "Handover checklist", "Summarise installed devices, controls, operation, and upgrade direction."],
      ["04", "Early-user feedback", "Use real feedback to improve the next version of the service."],
    ],
    processEyebrow: "Installation path",
    processTitle: "Professional enough to trust. Simple enough to start.",
    processText:
      "The first step should not feel like a major engineering project. Choose a package, assess the home, install cleanly, then hand over properly.",
    process: [
      "Choose a starting package",
      "Short home assessment",
      "Installation with electrical service support",
      "Testing, handover, and user training",
    ],
    preVisitEyebrow: "Before we visit",
    preVisitTitle: "Four questions to qualify the right starting package.",
    preVisitText:
      "These questions help make the quotation and site assessment more efficient.",
    preVisitCards: [
      ["Apartment status", "Already moved in, planning renovation, under renovation, or new handover?"],
      ["Main goal", "Convenience, comfort and energy, family safety, or all three?"],
      ["Control scope", "Entry and living room only, or bedrooms, curtains, air-con, and door lock too?"],
      ["Existing setup", "Any smart lock, voice assistant, Wi-Fi mesh, or smart lights already installed?"],
    ],
    faqEyebrow: "Common questions",
    faqTitle: "Answer the worries before the enquiry.",
    faqs: [
      ["Do I need to be renovating first?", "Not always. Some packages can be installed in a lived-in apartment, but larger switch, curtain, or wiring work is easier before or during renovation."],
      ["Is the online estimate the final quotation?", "No. The estimate is for early planning only. Final pricing depends on wiring, device brand, installation difficulty, and site condition."],
      ["Can I start small and upgrade later?", "Yes. Start with core areas, then add more rooms, sensors, scenes, and automations later."],
      ["What if my family does not want to use an app?", "The system should keep simple controls such as wall switches, scene buttons, and basic handover training so daily use stays easy."],
    ],
    contactEyebrow: "Ready to plan your first setup?",
    contactTitle: "Start with one practical smart-home setup, then upgrade when you are ready.",
    contactText:
      "Send your estimate by WhatsApp or email. We will recommend a starting package based on your apartment size, wiring condition, lifestyle habits, and installation readiness.",
    whatsappCta: "WhatsApp consultation",
    emailCta: "Email this estimate",
    footer: "© 2026 Boson Smart. Smart home packages for Hong Kong apartments.",
    apartments: [
      { id: "studio", label: "Studio / 1-bedroom", description: "Compact setup with fewer control points", adjustment: 0 },
      { id: "twoBed", label: "2-bedroom apartment", description: "Typical Hong Kong family flat", adjustment: 1800 },
      { id: "threeBed", label: "3-bedroom apartment", description: "More rooms and scene control points", adjustment: 3600 },
      { id: "large", label: "Larger / duplex / custom", description: "Requires site assessment", adjustment: 6800 },
    ],
    addons: [
      { id: "extraSwitch", label: "Extra smart switch point", description: "For one additional lighting/control point", price: 850 },
      { id: "motion", label: "Extra motion sensor", description: "For hallway, bathroom, entry, or utility areas", price: 650 },
      { id: "curtain", label: "Smart curtain motor", description: "Motorized curtain or blind control", price: 2200 },
      { id: "doorlock", label: "Smart door lock upgrade", description: "Entry convenience and access management", price: 2800 },
      { id: "doorbell", label: "Video doorbell / entry camera", description: "Visitor awareness and remote viewing", price: 1600 },
      { id: "support", label: "Annual support plan", description: "Remote support and minor scene adjustment", price: 1200 },
    ],
    packages: [
      {
        id: "starter",
        name: "Smart Home Starter",
        subtitle: "A clean first step into smart living.",
        icon: "home",
        tag: "Best for first-time users",
        basePrice: 3800,
        description: "Essential smart lighting and scene control for apartments that want convenience without overcomplication.",
        includes: [
          "Smart lighting control for selected areas",
          "Welcome home / leaving home scenes",
          "App and voice assistant setup",
          "Simple wall-switch or remote control options",
          "Basic user training after installation",
        ],
        idealFor: "Studio, 1-bedroom, rental flats, or first smart home trial",
      },
      {
        id: "comfort",
        name: "Comfort & Energy Package",
        subtitle: "Comfort automation with practical energy awareness.",
        icon: "comfort",
        tag: "Most balanced",
        basePrice: 8800,
        description: "Designed for daily comfort: lighting, air-conditioning habits, curtains, schedules, and energy-saving routines.",
        includes: [
          "Lighting scenes for living, dining, work, and sleep",
          "Air-con or climate control scheduling",
          "Optional curtain / blind automation",
          "Motion-based lighting for selected zones",
          "Energy-saving automation logic",
        ],
        idealFor: "Couples, small families, homeowners, and renovation-stage flats",
      },
      {
        id: "safety",
        name: "Family Safety Package",
        subtitle: "Security, awareness, and peace of mind at home.",
        icon: "shield",
        tag: "Best for families",
        basePrice: 7800,
        description: "Focuses on safer entry, family awareness, door/window monitoring, and useful alerts for daily household routines.",
        includes: [
          "Smart door lock or entry control integration",
          "Door / window sensors for key areas",
          "Video doorbell or entry camera option",
          "Night safety lighting automation",
          "Phone alerts for selected safety events",
        ],
        idealFor: "Families, elderly care, children at home, and security-conscious owners",
      },
    ],
    scenarios: [
      ["18:45", "Approaching home", "Your home prepares the right entry scene before you arrive.", "bolt"],
      ["18:50", "Door opens", "Hallway and living lights rise softly without a harsh brightness jump.", "light"],
      ["19:10", "Dinner / relax mode", "The living room turns warm while comfort settings match your evening routine.", "sliders"],
      ["23:30", "Night safety", "Low-level pathway lighting and entry monitoring help the home wind down.", "lock"],
    ],
  },
  zh: {
    brand: "Boson Smart",
    brandSub: "為香港住宅而設的智能家居方案",
    nav: ["方案", "組合器", "範圍", "流程", "聯絡"],
    quote: "建立估算",
    heroEyebrow: "香港住宅智能家居安裝方案",
    heroTitle: "為香港住宅而設的智能家居方案 — 安裝、設定、交付一次完成。",
    heroText:
      "由燈光情境、舒適自動化、節能習慣或家庭安全開始。選擇方案、建立估算，再安排實用諮詢。",
    heroPrimary: "建立我的估算",
    heroSecondary: "查看方案",
    trust: [
      "專為香港住宅場景設計",
      "配合電業工程服務支援安裝",
      "現場評估後才確認最終報價",
      "包括交付測試及基本使用教學",
    ],
    dashboardModeLabel: "今日家居模式",
    dashboardMode: "晚間舒適模式",
    active: "啟用中",
    dashboardRows: [
      ["客廳", "暖色燈光情境", "72%"],
      ["冷氣", "舒適設定", "24.5°C"],
      ["玄關", "安全監察", "開啟"],
      ["睡房", "睡眠準備", "22:45"],
    ],
    packagesEyebrow: "三個起步方案",
    packagesTitle: "按你想屋企做到甚麼來選擇。",
    packagesText:
      "每個方案都以容易理解、實際可安裝、日後可升級為原則，先由最有用的家居範圍開始。",
    priceNote:
      "網上金額只作初步估算。最終報價會按現場線路、設備兼容性、指定品牌及安裝條件確認。",
    selectPlan: "選擇方案",
    selectedPlan: "已選方案",
    idealFor: "適合：",
    builderEyebrow: "智能家居估算組合器",
    builderTitle: "建立你的智能家居估算。",
    builderText:
      "選擇基本方案、單位類型及升級項目，估算金額會即時更新。之後先安排諮詢及現場評估，再確認最終報價。",
    builderStep1: "1. 選擇基本方案",
    builderStep2: "2. 選擇單位類型",
    builderStep3: "3. 加選升級項目",
    builderSummary: "即時估算",
    builderBase: "基本方案",
    builderApartment: "單位調整",
    builderAddons: "已選升級項目",
    builderNoAddons: "未選擇升級項目",
    builderEstimatedTotal: "估算總額",
    builderDisclaimer:
      "此為初步估算，並非最終報價。最終價格需視乎現場線路、開關兼容性、Wi-Fi 覆蓋、產品品牌、安裝難度及現場評估而定。",
    builderCta: "用 WhatsApp 傳送估算",
    builderSecondaryCta: "電郵傳送估算",
    included: "已選方案包括",
    whyEyebrow: "為什麼選 Boson Smart",
    whyTitle: "不是只賣智能產品，而是交付一個可使用的家居系統。",
    whyText:
      "智能家居不應令日常生活變得更麻煩。我們重視實用場景、清晰交付，以及適合香港住宅的逐步升級方式。",
    whyPoints: [
      "按香港住宅生活習慣設計",
      "先用清晰套餐，再處理細節客製",
      "現場評估後才確認最終價格",
      "保留簡單控制方式，家人不一定要用 App",
      "鏡頭、感應器及帳戶設定注重私隱",
      "可由一個區域開始，之後再擴展更多房間",
    ],
    includedTitle: "一般包括",
    excludedTitle: "通常需另行報價",
    includedItems: [
      "初步方案建議",
      "基本設備安裝及設定",
      "App / 情境模式配置",
      "安裝後測試",
      "基本使用教學",
      "簡單交付清單",
    ],
    excludedItems: [
      "大型改線或重新拉線",
      "假天花、木工或裝修工程",
      "高端指定品牌設備差價",
      "複雜網絡改善工程",
      "非常規牆身或門身改裝",
      "保養期後的長期支援",
    ],
    scenarioEyebrow: "先講生活情境",
    scenarioTitle: "賣的不是器材，而是生活感受。",
    scenarioText:
      "智能家居最容易理解的價值，是你回家、晚飯後放鬆，以及夜晚走動時的日常感受。",
    comparisonTitle: "簡單比較",
    comparisonHeaders: ["項目", "Starter", "Comfort & Energy", "Family Safety"],
    comparisonRows: [
      ["主要重點", "方便入門", "舒適 + 節能", "安全 + 監察"],
      ["燈光情境", "核心區域", "多個房間", "安全相關區域"],
      ["冷氣自動化", "可選配", "可包含", "可選配"],
      ["感應器", "基本選配", "舒適 / 人體感應", "門窗 / 安全感應"],
      ["最適合階段", "任何時間", "裝修前 / 裝修中", "任何時間"],
    ],
    launchEyebrow: "第一階段啟動名額",
    launchTitle: "現正接受少量早期香港住宅智能家居項目。",
    launchText:
      "我們會以少量項目開始，集中打磨安裝流程、交付體驗及真實家庭使用情境。",
    launchBadge: "適合首批客戶",
    launchSide:
      "你想先由玄關、客廳、冷氣、窗簾或家庭安全等實用範圍開始，而不是一次過做全屋大型工程。",
    launchPoints: [
      ["01", "初步方案檢視", "根據單位狀態、生活習慣及主要目標，建議由哪個方案開始。"],
      ["02", "安裝後情境微調", "完成安裝後，可按實際使用感受作基本場景及設定調整。"],
      ["03", "交付清單", "整理已安裝設備、控制方式、基本操作及後續升級方向。"],
      ["04", "早期用戶回饋", "收集真實使用意見，用於改善下一版本服務流程。"],
    ],
    processEyebrow: "安裝流程",
    processTitle: "足夠專業令人信任，亦足夠簡單可以立即開始。",
    processText:
      "第一步不應像大型工程顧問。選方案、了解單位、乾淨安裝，然後測試及教識使用。",
    process: [
      "選擇一個起步方案",
      "簡短家居評估",
      "配合電業工程服務支援安裝",
      "交付測試及使用教學",
    ],
    preVisitEyebrow: "查詢前準備",
    preVisitTitle: "用四條問題，快速判斷最合適方案。",
    preVisitText:
      "這些資料可以令報價及現場評估更有效率。",
    preVisitCards: [
      ["單位狀態", "已入住、準備裝修、正在裝修，還是新樓交收？"],
      ["主要目標", "方便、舒適節能、家庭安全，還是三者都需要？"],
      ["控制範圍", "只做客廳玄關，還是包括睡房、窗簾、冷氣及門鎖？"],
      ["現有設備", "有沒有智能門鎖、語音助理、Wi-Fi mesh 或已裝智能燈？"],
    ],
    faqEyebrow: "常見問題",
    faqTitle: "先解答客戶最擔心的事。",
    faqs: [
      ["一定要裝修時先可以做嗎？", "不一定。部分方案可以在已入住單位安裝；但如果涉及更多開關、窗簾或改線，裝修前或裝修中會更理想。"],
      ["估算價是否等於最終報價？", "不是。網站估算只作初步參考，最終報價需視乎現場線路、產品品牌、安裝難度及單位情況。"],
      ["可以先做一部分，之後再加嗎？", "可以。先由核心區域開始，之後再加入更多房間、感應器及自動化情境。"],
      ["如果家人不懂用 App 怎麼辦？", "方案會保留簡單控制方式，例如牆掣、情境按鈕或基本教學，不應令日常使用變得更麻煩。"],
    ],
    contactEyebrow: "準備規劃第一個設定？",
    contactTitle: "先由一個實用智能家居設定開始，之後再逐步升級。",
    contactText:
      "可用 WhatsApp 或電郵傳送估算。我們會按單位大小、現有線路、生活習慣及安裝條件建議最合適的起步方案。",
    whatsappCta: "WhatsApp 諮詢",
    emailCta: "電郵傳送估算",
    footer: "© 2026 Boson Smart。為香港住宅而設的智能家居方案。",
    apartments: [
      { id: "studio", label: "開放式 / 一房單位", description: "較少控制點，適合輕量入門", adjustment: 0 },
      { id: "twoBed", label: "兩房單位", description: "常見香港家庭單位", adjustment: 1800 },
      { id: "threeBed", label: "三房單位", description: "更多房間及情境控制點", adjustment: 3600 },
      { id: "large", label: "大型 / 複式 / 自訂", description: "需要先作現場評估", adjustment: 6800 },
    ],
    addons: [
      { id: "extraSwitch", label: "額外智能開關點", description: "增加一個燈光或控制點", price: 850 },
      { id: "motion", label: "額外人體感應器", description: "適合走廊、浴室、玄關或雜物房", price: 650 },
      { id: "curtain", label: "智能窗簾摩打", description: "窗簾或百葉簾自動控制", price: 2200 },
      { id: "doorlock", label: "智能門鎖升級", description: "提升出入方便及權限管理", price: 2800 },
      { id: "doorbell", label: "視像門鈴 / 入口鏡頭", description: "訪客提示及遙距查看", price: 1600 },
      { id: "support", label: "年度支援計劃", description: "遙距支援及小型情境調整", price: 1200 },
    ],
    packages: [
      {
        id: "starter",
        name: "Smart Home Starter",
        subtitle: "智能家居的乾淨入門第一步。",
        icon: "home",
        tag: "最適合首次使用",
        basePrice: 3800,
        description: "以基本智能燈光及情境控制為核心，適合想提升方便度，但不想一開始太複雜的住宅。",
        includes: [
          "指定區域智能燈光控制",
          "回家 / 離家情境模式",
          "手機 App 及語音助理設定",
          "簡單牆掣或遙控控制選項",
          "安裝後基本使用教學",
        ],
        idealFor: "開放式單位、一房單位、租住單位，或第一次試用智能家居的用戶",
      },
      {
        id: "comfort",
        name: "Comfort & Energy Package",
        subtitle: "舒適自動化，同時建立節能習慣。",
        icon: "comfort",
        tag: "最平衡選擇",
        basePrice: 8800,
        description: "為日常舒適而設：燈光、冷氣習慣、窗簾、時間排程，以及節能自動化邏輯。",
        includes: [
          "客廳、飯廳、工作及睡眠燈光情境",
          "冷氣或溫度控制排程",
          "可選配窗簾 / 百葉簾自動化",
          "指定區域人體感應燈光",
          "節能自動化邏輯",
        ],
        idealFor: "情侶、小家庭、自住業主，或準備裝修的單位",
      },
      {
        id: "safety",
        name: "Family Safety Package",
        subtitle: "提升家庭安全感、掌握家中狀態。",
        icon: "shield",
        tag: "最適合家庭",
        basePrice: 7800,
        description: "集中處理出入安全、家人狀態、門窗監察及重要通知，為日常家庭生活提供實用安心感。",
        includes: [
          "智能門鎖或出入控制整合",
          "主要門窗感應器",
          "可選配視像門鈴或入口鏡頭",
          "夜間安全燈光自動化",
          "指定安全事件手機通知",
        ],
        idealFor: "有小朋友、長者同住、重視家居安全，或希望掌握家中狀態的家庭",
      },
    ],
    scenarios: [
      ["18:45", "準備回家", "按照你選擇的方案，屋企可在你回到前準備合適情境。", "bolt"],
      ["18:50", "打開大門", "玄關及客廳燈光柔和亮起，不會突然刺眼。", "light"],
      ["19:10", "晚餐 / 放鬆模式", "客廳轉為暖色情境，冷氣及燈光配合晚上的生活節奏。", "sliders"],
      ["23:30", "夜間安全", "低亮度路徑燈及出入口監察，幫屋企慢慢進入休息狀態。", "lock"],
    ],
  },
};

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle">
      <button onClick={() => setLanguage("en")} className={language === "en" ? "active" : ""}>EN</button>
      <button onClick={() => setLanguage("zh")} className={language === "zh" ? "active" : ""}>繁中</button>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, note }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
      </div>
      {note && <div className="note-box">{note}</div>}
    </div>
  );
}

function FeatureGrid({ items, warn = false }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <div className="mini-card" key={item}>
          {warn ? <span className="warning-dot">!</span> : <Icon name="check" className="check-icon" />}
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [selected, setSelected] = useState("comfort");
  const [apartment, setApartment] = useState("twoBed");
  const [selectedAddons, setSelectedAddons] = useState(["curtain"]);

  const t = content[language];

  const selectedPackage = useMemo(
    () => t.packages.find((item) => item.id === selected) || t.packages[1],
    [selected, t]
  );

  const selectedApartment = useMemo(
    () => t.apartments.find((item) => item.id === apartment) || t.apartments[1],
    [apartment, t]
  );

  const activeAddons = useMemo(
    () => t.addons.filter((item) => selectedAddons.includes(item.id)),
    [selectedAddons, t]
  );

  const total = selectedPackage.basePrice + selectedApartment.adjustment + activeAddons.reduce((sum, item) => sum + item.price, 0);

  const enquirySubject =
    language === "zh" ? "Boson Smart 智能家居方案估算查詢" : "Boson Smart Smart Home Package Estimate";

  const enquiryBody = [
    language === "zh" ? "你好，我想查詢以下智能家居方案估算：" : "Hello, I would like to ask about this smart home package estimate:",
    "",
    `${language === "zh" ? "基本方案" : "Base package"}: ${selectedPackage.name}`,
    `${language === "zh" ? "單位類型" : "Apartment type"}: ${selectedApartment.label}`,
    `${language === "zh" ? "升級項目" : "Add-ons"}: ${activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builderNoAddons}`,
    `${language === "zh" ? "估算總額" : "Estimated total"}: ${formatHKD(total)}`,
    "",
    language === "zh" ? "請聯絡我安排下一步評估。" : "Please contact me for the next-step assessment.",
  ].join("\n");

  const mailtoHref = `mailto:${PLACEHOLDER_EMAIL}?subject=${encodeURIComponent(enquirySubject)}&body=${encodeURIComponent(enquiryBody)}`;
  const whatsappHref = `https://wa.me/${PLACEHOLDER_WHATSAPP}?text=${encodeURIComponent(enquiryBody)}`;

  function toggleAddon(id) {
    setSelectedAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  return (
    <div className="site">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark"><Icon name="bolt" /></span>
          <span>
            <strong>{t.brand}</strong>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#plans">{t.nav[0]}</a>
          <a href="#builder">{t.nav[1]}</a>
          <a href="#scope">{t.nav[2]}</a>
          <a href="#process">{t.nav[3]}</a>
          <a href="#contact">{t.nav[4]}</a>
        </nav>

        <div className="nav-actions">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <a className="pill white" href="#builder">{t.quote}</a>
        </div>

        <div className="mobile-language-toggle">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#plans" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
            <a href="#builder" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
            <a href="#scope" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav[4]}</a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <div className="eyebrow hero-eyebrow"><Icon name="sparkle" />{t.heroEyebrow}</div>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroText}</p>
            <div className="hero-actions">
              <a href="#builder" className="pill cyan">{t.heroPrimary} <Icon name="arrow" /></a>
              <a href="#plans" className="pill ghost">{t.heroSecondary}</a>
            </div>
            <div className="trust-grid">
              {t.trust.map((item) => (
                <div className="trust-card" key={item}>
                  <Icon name="check" className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-inner">
              <div className="dashboard-head">
                <div>
                  <small>{t.dashboardModeLabel}</small>
                  <strong>{t.dashboardMode}</strong>
                </div>
                <span>{t.active}</span>
              </div>
              <div className="dashboard-list">
                {t.dashboardRows.map(([zone, mode, value]) => (
                  <div className="dashboard-row" key={zone}>
                    <span><strong>{zone}</strong><small>{mode}</small></span>
                    <em>{value}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="section">
          <SectionHeader eyebrow={t.packagesEyebrow} title={t.packagesTitle} text={t.packagesText} note={t.priceNote} />

          <div className="package-grid">
            {t.packages.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`package-card ${item.id === selected ? "active" : ""}`}
              >
                <div className="card-top">
                  <span className="large-icon"><Icon name={item.icon} /></span>
                  <span className="tag">{item.tag}</span>
                </div>
                <h3>{item.name}</h3>
                <p className="cyan-text">{item.subtitle}</p>
                <p>{item.description}</p>
                <strong className="price">{language === "zh" ? `${formatHKD(item.basePrice)} 起` : `From ${formatHKD(item.basePrice)}`}</strong>
                <ul>
                  {item.includes.slice(0, 4).map((feature) => (
                    <li key={feature}><Icon name="check" />{feature}</li>
                  ))}
                </ul>
                <span className="select-label">{t.selectPlan} <Icon name="arrow" /></span>
              </button>
            ))}
          </div>
        </section>

        <section id="builder" className="section">
          <SectionHeader eyebrow={t.builderEyebrow} title={t.builderTitle} text={t.builderText} />

          <div className="builder-layout">
            <div className="builder-main">
              <BuilderPanel title={t.builderStep1}>
                <div className="choice-grid three">
                  {t.packages.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelected(item.id)}
                      className={`choice ${item.id === selected ? "active" : ""}`}
                    >
                      <span className="large-icon"><Icon name={item.icon} /></span>
                      <strong>{item.name}</strong>
                      <small>{item.subtitle}</small>
                      <em>{formatHKD(item.basePrice)}</em>
                    </button>
                  ))}
                </div>
              </BuilderPanel>

              <BuilderPanel title={t.builderStep2}>
                <div className="choice-grid two">
                  {t.apartments.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setApartment(item.id)}
                      className={`choice row-choice ${item.id === apartment ? "active" : ""}`}
                    >
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.description}</small>
                      </span>
                      <em>{item.adjustment === 0 ? "+HK$0" : `+${formatHKD(item.adjustment)}`}</em>
                    </button>
                  ))}
                </div>
              </BuilderPanel>

              <BuilderPanel title={t.builderStep3}>
                <div className="choice-grid two">
                  {t.addons.map((item) => {
                    const active = selectedAddons.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleAddon(item.id)}
                        className={`choice row-choice ${active ? "active" : ""}`}
                      >
                        <span>
                          <strong><span className="round-select">{active ? "✓" : "+"}</span>{item.label}</strong>
                          <small>{item.description}</small>
                        </span>
                        <em>+{formatHKD(item.price)}</em>
                      </button>
                    );
                  })}
                </div>
              </BuilderPanel>
            </div>

            <aside className="estimate-card">
              <div className="estimate-head">
                <div>
                  <small>{t.builderSummary}</small>
                  <strong>{formatHKD(total)}</strong>
                </div>
                <span className="brand-mark"><Icon name="bolt" /></span>
              </div>

              <div className="estimate-lines">
                <SummaryLine label={t.builderBase} value={selectedPackage.name} price={formatHKD(selectedPackage.basePrice)} />
                <SummaryLine label={t.builderApartment} value={selectedApartment.label} price={`+${formatHKD(selectedApartment.adjustment)}`} />

                <div className="summary-block">
                  <span>{t.builderAddons}</span>
                  {activeAddons.length ? (
                    activeAddons.map((item) => (
                      <div className="addon-line" key={item.id}>
                        <span>{item.label}</span>
                        <em>+{formatHKD(item.price)}</em>
                      </div>
                    ))
                  ) : (
                    <div className="addon-line muted">{t.builderNoAddons}</div>
                  )}
                </div>
              </div>

              <div className="total-box">
                <small>{t.builderEstimatedTotal}</small>
                <strong>{formatHKD(total)}</strong>
              </div>

              <p className="fine-print">{t.builderDisclaimer}</p>

              <a className="pill cyan full" href={whatsappHref} target="_blank" rel="noreferrer">
                {t.builderCta} <Icon name="arrow" />
              </a>
              <a className="pill ghost full" href={mailtoHref}>{t.builderSecondaryCta}</a>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="selected-layout">
            <div>
              <div className="eyebrow">{t.selectedPlan}</div>
              <h2>{selectedPackage.name}</h2>
              <p>{selectedPackage.description}</p>
              <div className="soft-box"><strong>{t.idealFor}</strong> {selectedPackage.idealFor}</div>
            </div>
            <div>
              <h3>{t.included}</h3>
              <FeatureGrid items={selectedPackage.includes} />
            </div>
          </div>
        </section>

        <section className="section assumptions-section">
          <SectionHeader
            eyebrow={language === "zh" ? "價格假設" : "Package assumptions"}
            title={language === "zh" ? "「起」價應該清楚，而不是令人估估下。" : "Make the “from” price clear, not vague."}
            text={
              language === "zh"
                ? "以下假設令客戶更容易理解估算價錢的基礎。最終範圍仍會按現場線路、設備品牌及安裝條件確認。"
                : "These assumptions help customers understand what the starting prices are based on. Final scope is still confirmed after checking wiring, device brand, and installation condition."
            }
          />

          <div className="assumption-grid">
            {(language === "zh"
              ? [
                  ["Starter 起價假設", "適合一個核心區域，例如玄關或客廳，包含基本智能控制、App 設定、簡單情境及使用教學。"],
                  ["Comfort & Energy 起價假設", "適合客廳及主要生活區域，重點是燈光、冷氣習慣、時間排程及舒適節能場景。"],
                  ["Family Safety 起價假設", "適合出入口及主要門窗監察，重點是出入安全、提醒通知、夜間安全燈光及基本交付。"],
                ]
              : [
                  ["Starter starting assumption", "Suitable for one core area such as entry or living room, including basic smart control, app setup, simple scenes, and user training."],
                  ["Comfort & Energy starting assumption", "Suitable for living and key daily areas, focusing on lighting, air-con habits, schedules, and comfort/energy scenes."],
                  ["Family Safety starting assumption", "Suitable for entry and key door/window awareness, focusing on access safety, alerts, night lighting, and basic handover."],
                ]).map(([title, text]) => (
              <div className="assumption-card" key={title}>
                <div className="assumption-icon"><Icon name="check" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="sample-setup-card">
            <div>
              <div className="eyebrow">{language === "zh" ? "示例設定" : "Example setup"}</div>
              <h2>
                {language === "zh"
                  ? "兩房單位可先由客廳、玄關及夜間安全開始。"
                  : "A 2-bedroom flat can start with living room, entry, and night safety."}
              </h2>
              <p>
                {language === "zh"
                  ? "這不是固定方案，而是讓客戶理解如何由實用範圍開始，再逐步加入睡房、窗簾、冷氣或更多感應器。"
                  : "This is not a fixed package. It shows how a customer can start from practical areas, then add bedrooms, curtains, air-con, or more sensors later."}
              </p>
            </div>

            <div className="sample-list">
              {(language === "zh"
                ? ["玄關回家燈光", "客廳晚間情境", "冷氣時間設定", "夜間低亮度路徑燈", "基本 App 及使用教學"]
                : ["Entry welcome lighting", "Living room evening scene", "Air-con schedule setup", "Low-level night path lighting", "Basic app and user training"]
              ).map((item) => (
                <div className="sample-line" key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="section split-section">
          <div className="why-card">
            <div className="eyebrow">{t.whyEyebrow}</div>
            <h2>{t.whyTitle}</h2>
            <p>{t.whyText}</p>
            <FeatureGrid items={t.whyPoints} />
          </div>
          <div className="stack">
            <div className="panel highlighted">
              <h3>{t.includedTitle}</h3>
              <FeatureGrid items={t.includedItems} />
            </div>
            <div className="panel">
              <h3>{t.excludedTitle}</h3>
              <FeatureGrid items={t.excludedItems} warn />
            </div>
          </div>
        </section>

        <section className="section privacy-section">
          <div className="privacy-card">
            <div>
              <div className="eyebrow">{language === "zh" ? "私隱與安全" : "Privacy and safety"}</div>
              <h2>
                {language === "zh"
                  ? "門鎖、鏡頭、感應器和帳戶設定，必須交代清楚。"
                  : "Door locks, cameras, sensors, and accounts must be handled clearly."}
              </h2>
              <p>
                {language === "zh"
                  ? "智能家居不只是方便，也涉及家庭私隱及安全。網站應清楚說明設定原則，讓客戶知道系統屬於自己，而不是依賴不清楚的第三方控制。"
                  : "Smart homes are not only about convenience. They also involve household privacy and security. The site should explain how setup is handled so customers know the system belongs to them, not an unclear third-party controller."}
              </p>
            </div>

            <div className="privacy-points">
              {(language === "zh"
                ? [
                    ["帳戶由客戶擁有", "主要 App、門鎖、鏡頭及語音助理帳戶應以客戶資料建立或交還客戶管理。"],
                    ["鏡頭位置先確認", "如涉及鏡頭或視像門鈴，應先確認使用目的、角度及私隱考慮。"],
                    ["保留日常手動控制", "智能設定不應令家人失去基本牆掣或簡單控制方式。"],
                    ["交付時說明權限", "完成後應說明主要權限、通知、家庭成員加入方式及日後更改方法。"],
                  ]
                : [
                    ["Customer-owned accounts", "Main app, lock, camera, and voice assistant accounts should be created for or handed over to the customer."],
                    ["Camera placement confirmed", "For cameras or video doorbells, purpose, viewing angle, and privacy considerations should be confirmed first."],
                    ["Manual control preserved", "Smart setup should not remove basic wall-switch or simple-control options for family members."],
                    ["Permissions explained", "Handover should explain key permissions, alerts, family member access, and future adjustment methods."],
                  ]).map(([title, text]) => (
                <div className="privacy-point" key={title}>
                  <Icon name="shield" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-clarity-section">
          <div className="quote-clarity-card">
            <div>
              <div className="eyebrow">{language === "zh" ? "報價如何確認" : "How quotation is confirmed"}</div>
              <h2>
                {language === "zh"
                  ? "網上估算先幫你開始，最終報價要看現場條件。"
                  : "The online estimate helps you start. The final quotation depends on the actual home."}
              </h2>
              <p>
                {language === "zh"
                  ? "這樣可以保持價格透明，同時避免因線路、品牌、安裝難度或裝修狀態不同而低估成本。"
                  : "This keeps the pricing transparent while avoiding underquoting caused by wiring, device brand, installation complexity, or renovation stage."}
              </p>
            </div>

            <div className="quote-steps">
              {(language === "zh"
                ? [
                    ["01", "建立估算", "先用組合器選方案、單位類型及升級項目。"],
                    ["02", "了解現場", "確認線路、開關、Wi‑Fi、門窗及安裝可行性。"],
                    ["03", "確認範圍", "列明包括項目、另報項目、產品選擇及安裝條件。"],
                    ["04", "安排安裝", "完成設定、測試、交付清單及基本使用教學。"],
                  ]
                : [
                    ["01", "Build estimate", "Choose package, apartment type, and optional upgrades."],
                    ["02", "Check site condition", "Review wiring, switches, Wi‑Fi, doors/windows, and installation feasibility."],
                    ["03", "Confirm scope", "Clarify included items, separately quoted items, device choices, and installation conditions."],
                    ["04", "Install and hand over", "Complete setup, testing, handover checklist, and basic user training."],
                  ]).map(([number, title, text]) => (
                <div className="quote-step" key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section launch-section">
          <div className="launch-card">
            <div className="launch-layout">
              <div>
                <div className="eyebrow">{t.launchEyebrow}</div>
                <h2>{t.launchTitle}</h2>
                <p>{t.launchText}</p>
              </div>
              <div className="launch-side">
                <div className="launch-badge">{t.launchBadge}</div>
                <p>{t.launchSide}</p>
              </div>
            </div>
            <div className="launch-points">
              {t.launchPoints.map(([number, title, text]) => (
                <div className="launch-point" key={title}>
                  <span className="launch-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="scenario" className="section">
          <SectionHeader eyebrow={t.scenarioEyebrow} title={t.scenarioTitle} text={t.scenarioText} />
          <div className="scenario-row">
            {t.scenarios.map(([time, title, text, icon]) => (
              <div className="scenario-card" key={title}>
                <div><span>{time}</span><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="comparison-card">
            <h2><Icon name="building" /> {t.comparisonTitle}</h2>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>{t.comparisonHeaders.map((h) => <th key={h}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {t.comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => <td key={`${row[0]}-${cell}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div>
            <div className="eyebrow">{t.processEyebrow}</div>
            <h2>{t.processTitle}</h2>
            <p>{t.processText}</p>
          </div>
          <div className="process-list">
            {t.process.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section previsit-section">
          <div>
            <div className="eyebrow">{t.preVisitEyebrow}</div>
            <h2>{t.preVisitTitle}</h2>
            <p>{t.preVisitText}</p>
          </div>
          <div className="card-grid two">
            {t.preVisitCards.map(([title, text]) => (
              <div className="info-card" key={title}>
                <Icon name="check" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section aftercare-section">
          <div className="aftercare-card">
            <div>
              <div className="eyebrow">{language === "zh" ? "交付與後續" : "Handover and aftercare"}</div>
              <h2>
                {language === "zh"
                  ? "裝完不是終點，真正重要是家人會用。"
                  : "Installation is not the end. The real goal is that the household can use it."}
              </h2>
              <p>
                {language === "zh"
                  ? "智能家居最常見失敗位，是裝置很多但家人不懂用，或者日後沒有人知道怎樣調整。交付時要清楚說明操作、權限及後續升級方向。"
                  : "A common smart-home failure is installing many devices without making them easy for the household to use or adjust later. Handover should explain controls, permissions, and future upgrade direction."}
              </p>
            </div>

            <div className="aftercare-grid">
              {(language === "zh"
                ? [
                    ["交付清單", "整理已安裝設備、控制方式、App、帳戶及主要情境。"],
                    ["基本教學", "示範日常操作，例如回家、離家、夜間、手動控制及通知。"],
                    ["微調期", "按實際使用感受，作基本情境或設定調整。"],
                    ["升級路線", "由一個區域開始，日後再加房間、感應器、窗簾或能源管理。"],
                  ]
                : [
                    ["Handover checklist", "Summarise installed devices, controls, apps, accounts, and key scenes."],
                    ["Basic user training", "Demonstrate daily use: home, away, night, manual control, and alerts."],
                    ["Adjustment period", "Fine-tune basic scenes or settings based on real usage."],
                    ["Upgrade path", "Start from one area, then add rooms, sensors, curtains, or energy management later."],
                  ]).map(([title, text]) => (
                <div className="aftercare-item" key={title}>
                  <Icon name="check" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeader eyebrow={t.faqEyebrow} title={t.faqTitle} />
          <div className="card-grid two">
            {t.faqs.map(([question, answer]) => (
              <div className="info-card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-card">
            <div>
              <div className="contact-eyebrow"><Icon name="clock" />{t.contactEyebrow}</div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
            </div>
            <div className="contact-actions">
              <a className="pill dark full" href={whatsappHref} target="_blank" rel="noreferrer">
                <Icon name="phone" /> {t.whatsappCta}
              </a>
              <a className="pill outline-dark full" href={mailtoHref}>
                {t.emailCta} <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>{t.footer}</span>
        <nav>
          <a href="#plans">{t.nav[0]}</a>
          <a href="#builder">{t.nav[1]}</a>
          <a href="#contact">{t.nav[4]}</a>
        </nav>
      </footer>
    </div>
  );
}

function BuilderPanel({ title, children }) {
  return (
    <div className="builder-panel">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function SummaryLine({ label, value, price }) {
  return (
    <div className="summary-line">
      <span>{label}</span>
      <strong>{value}<small>{price}</small></strong>
    </div>
  );
}
