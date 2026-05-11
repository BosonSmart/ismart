import React, { useMemo, useState } from "react";

const icons = {
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
      {icons[name] || "•"}
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
    nav: ["Plans", "Builder", "Scenario", "Process", "Contact"],
    quote: "Get a quotation",
    heroEyebrow: "Phase 1 smart home packages for domestic apartments",
    heroTitle: "Make your home smarter without making life complicated.",
    heroText:
      "Boson Smart helps Hong Kong apartment owners start with practical smart home systems: lighting scenes, comfort automation, energy habits, and family safety.",
    heroPrimary: "Build your plan",
    heroSecondary: "View 3 plans",
    trust: [
      "Registered electrical service partner",
      "Package-first, no confusing custom quote at the start",
      "Designed for real HK apartment routines",
    ],
    dashboardModeLabel: "Today’s home mode",
    dashboardMode: "Evening Comfort",
    active: "Active",
    dashboardRows: [
      ["Living room", "Warm scene", "72%"],
      ["Air-con", "Pre-cool routine", "24.5°C"],
      ["Entrance", "Safety monitoring", "On"],
      ["Bedroom", "Sleep prep", "22:45"],
    ],
    plansEyebrow: "Three Phase 1 Options",
    plansTitle: "Start with a clear package.",
    plansText:
      "Each plan is designed to be easy to understand, easy to install, and easy to explain to a household before moving into larger smart-office or building consultancy services later.",
    priceNote:
      "Prices are indicative placeholders and can be adjusted after supplier, labour, and apartment-size costing.",
    selectPlan: "Select plan",
    selectedPlan: "Selected plan",
    idealFor: "Ideal for:",
    builderEyebrow: "Smart Home Package Builder",
    builderTitle: "Configure a starting estimate, Apple-style.",
    builderText:
      "Choose a base package, apartment type, and optional upgrades. The estimate updates instantly, then turns into an enquiry instead of a risky online checkout.",
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
      "Final quotation depends on wiring condition, switch compatibility, Wi-Fi coverage, device brand, installation difficulty, and site inspection.",
    builderCta: "Send this estimate by email",
    builderSecondaryCta: "Ask for WhatsApp consultation",
    included: "Included in selected package",
    whyEyebrow: "Why Boson Smart",
    whyTitle: "Not just smart devices. A usable home system.",
    whyText:
      "Hong Kong homes vary by size, wiring, renovation stage, and family habits. Phase 1 keeps the offer simple while still leaving room for site assessment and future upgrades.",
    whyPoints: [
      "Designed around Hong Kong apartment scenarios, not generic overseas smart-home demos",
      "Works with a registered electrical service partner for installation confidence",
      "Starts with three clear packages so customers can compare and decide quickly",
      "Includes testing and basic handover training so the system is actually used",
    ],
    usuallyIncluded: "Usually included",
    includedItems: [
      "Initial package recommendation",
      "Basic device installation and setup",
      "App / scene configuration",
      "Post-installation testing",
      "Basic user training",
      "Simple handover explanation",
    ],
    usuallyExcluded: "Usually excluded, quoted separately",
    excludedItems: [
      "Major rewiring or new cable routing",
      "False ceiling, carpentry, or renovation works",
      "Premium specified-brand device upgrades",
      "Complex network improvement works",
      "Non-standard wall or door modification",
      "Long-term support after warranty period",
    ],
    scenarioEyebrow: "Scenario-first design",
    scenarioTitle: "Sell the feeling, not only the devices.",
    scenarioText:
      "Instead of listing gadgets first, the website explains how a normal weekday evening becomes easier, calmer, and safer.",
    comparisonTitle: "Simple comparison",
    comparisonHeaders: ["Feature", "Starter", "Comfort & Energy", "Family Safety"],
    comparisonRows: [
      ["Main focus", "Convenience", "Comfort + savings", "Safety + monitoring"],
      ["Lighting scenes", "Core areas", "Multiple rooms", "Safety-focused areas"],
      ["Air-con automation", "Optional", "Included option", "Optional"],
      ["Sensors", "Basic option", "Comfort / motion", "Door / window / safety"],
      ["Best stage", "Anytime", "Before / during renovation", "Anytime"],
    ],
    processEyebrow: "Installation path",
    processTitle: "Professional enough to trust. Simple enough to start.",
    processText:
      "Phase 1 should avoid sounding like a complex engineering consultancy. The promise is straightforward: choose a package, assess the home, install cleanly, then hand over properly.",
    process: [
      "Choose a starter package",
      "Short home assessment",
      "Registered electrical installation partner",
      "Handover, testing, and user training",
    ],
    preVisitEyebrow: "Before we visit",
    preVisitTitle: "Four questions to qualify the right starting package.",
    preVisitText:
      "This section helps collect the right information before WhatsApp or email, making the quotation and site assessment more efficient.",
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
      ["Can I start small and upgrade later?", "Yes. Phase 1 should be expandable: start with core areas, then add more rooms, sensors, scenes, and automations later."],
      ["What if my family does not want to use an app?", "The system should keep simple controls such as wall switches, scene buttons, and basic handover training so daily use stays easy."],
    ],
    contactEyebrow: "Phase 1 launch offer",
    contactTitle: "Start with one apartment. Build the smart-living brand from there.",
    contactText:
      "Request a short consultation and get a recommended package based on apartment size, existing wiring, lifestyle habits, and installation readiness.",
    emailCta: "Email for quotation",
    phoneCta: "Call / WhatsApp",
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
        description:
          "Essential smart lighting and scene control for apartments that want convenience without overcomplication.",
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
        description:
          "Designed for daily comfort: lighting, air-conditioning habits, curtains, schedules, and energy-saving routines.",
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
        description:
          "Focuses on safer entry, family awareness, door/window monitoring, and useful alerts for daily household routines.",
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
      ["18:45", "Approaching home", "Your home prepares the right entry scene before you arrive, based on the package selected.", "bolt"],
      ["18:50", "Door opens", "Lighting rises gently. Hallway and living areas activate without a harsh brightness jump.", "light"],
      ["19:10", "Dinner / relax mode", "The living room switches to a calm scene. Air-con and lighting match your evening routine.", "sliders"],
      ["23:30", "Night safety", "Low-level pathway lighting, entry monitoring, and sleep-ready settings help the home wind down.", "lock"],
    ],
  },
  zh: {
    brand: "Boson Smart",
    brandSub: "為香港住宅而設的智能家居方案",
    nav: ["方案", "組合器", "情境", "流程", "聯絡"],
    quote: "索取報價",
    heroEyebrow: "第一階段｜住宅智能家居入門方案",
    heroTitle: "令屋企更智能，但唔需要變得複雜。",
    heroText:
      "Boson Smart 幫香港住宅用戶由實用智能家居開始：燈光情境、舒適自動化、節能習慣，以及家庭安全監察。",
    heroPrimary: "建立你的方案",
    heroSecondary: "查看 3 個方案",
    trust: [
      "配合註冊電業工程服務伙伴",
      "先以清晰套餐開始，避免一開始就複雜報價",
      "按香港住宅生活習慣設計",
    ],
    dashboardModeLabel: "今日家居模式",
    dashboardMode: "晚間舒適模式",
    active: "啟用中",
    dashboardRows: [
      ["客廳", "暖色燈光情境", "72%"],
      ["冷氣", "預先舒適設定", "24.5°C"],
      ["玄關", "安全監察", "開啟"],
      ["睡房", "睡眠準備", "22:45"],
    ],
    plansEyebrow: "第一階段三個方案",
    plansTitle: "由清晰套餐開始。",
    plansText:
      "每個方案都以容易理解、容易安裝、容易向家人解釋為原則。之後才逐步延伸至智能辦公室、節能顧問及整棟建築智能系統。",
    priceNote:
      "價錢現階段屬參考佔位，之後可按供應商成本、人工、單位大小及實際線路情況調整。",
    selectPlan: "選擇方案",
    selectedPlan: "已選方案",
    idealFor: "適合：",
    builderEyebrow: "智能家居方案組合器",
    builderTitle: "像 Apple 選購流程一樣，即時建立初步估算。",
    builderText:
      "選擇基本方案、單位類型及升級項目，估算金額會即時更新。最後不是直接付款，而是把估算轉成查詢，避免因現場線路差異而報錯價。",
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
      "最終報價需視乎現場線路、開關兼容性、Wi-Fi 覆蓋、產品品牌、安裝難度及現場評估而定。",
    builderCta: "以電郵傳送此估算",
    builderSecondaryCta: "查詢 WhatsApp 諮詢",
    included: "已選方案包括",
    whyEyebrow: "為什麼選 Boson Smart",
    whyTitle: "不是只賣智能產品，而是交付一個可使用的家居系統。",
    whyText:
      "香港住宅面積、線路、裝修狀態及家庭習慣都不同。第一階段的重點，是用清晰方案降低決策難度，同時保留現場評估及後續升級空間。",
    whyPoints: [
      "以香港住宅場景設計，不是照搬外國智能家居示範",
      "配合註冊電業工程服務伙伴，提升安裝可信度",
      "先從三個清晰套餐開始，方便客戶比較及決定",
      "安裝後包括測試及基本教學，避免買完不懂用",
    ],
    usuallyIncluded: "一般包括",
    includedItems: [
      "初步方案建議",
      "基本設備安裝及設定",
      "App / 情境模式配置",
      "安裝後測試",
      "基本使用教學",
      "簡單交付說明",
    ],
    usuallyExcluded: "通常不包括，需另行報價",
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
      "網站不應一開始只列智能產品，而是先展示一個普通下班晚上，如何變得更方便、更舒適、更安全。",
    comparisonTitle: "簡單比較",
    comparisonHeaders: ["項目", "Starter", "Comfort & Energy", "Family Safety"],
    comparisonRows: [
      ["主要重點", "方便入門", "舒適 + 節能", "安全 + 監察"],
      ["燈光情境", "核心區域", "多個房間", "安全相關區域"],
      ["冷氣自動化", "可選配", "可包含", "可選配"],
      ["感應器", "基本選配", "舒適 / 人體感應", "門窗 / 安全感應"],
      ["最適合階段", "任何時間", "裝修前 / 裝修中", "任何時間"],
    ],
    processEyebrow: "安裝流程",
    processTitle: "足夠專業令人信任，亦足夠簡單可以立即開始。",
    processText:
      "第一階段不應令客戶覺得像大型工程顧問。承諾要直接：選方案、了解單位、乾淨安裝、測試及教識用戶。",
    process: [
      "選擇一個入門方案",
      "簡短家居評估",
      "配合註冊電業工程服務伙伴安裝",
      "交付測試及使用教學",
    ],
    preVisitEyebrow: "查詢前準備",
    preVisitTitle: "用四條問題，快速判斷最合適方案。",
    preVisitText:
      "這一段可以幫你在 WhatsApp 或電郵查詢前，先取得最重要的資料，令報價及現場評估更有效率。",
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
      ["可以先做一部分，之後再加嗎？", "可以。第一階段方案應以可擴展為原則，先由核心區域開始，之後再加入更多房間、感應器及自動化情境。"],
      ["如果家人不懂用 App 怎麼辦？", "方案會保留簡單控制方式，例如牆掣、情境按鈕或基本教學，不應令日常使用變得更麻煩。"],
    ],
    contactEyebrow: "第一階段啟動優惠",
    contactTitle: "由一個單位開始，逐步建立智能生活品牌。",
    contactText:
      "預約簡短諮詢，根據單位大小、現有線路、生活習慣及安裝條件，建議最合適的入門方案。",
    emailCta: "電郵索取報價",
    phoneCta: "致電 / WhatsApp",
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
        description:
          "以基本智能燈光及情境控制為核心，適合想提升方便度，但不想一開始太複雜的住宅。",
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
        description:
          "為日常舒適而設：燈光、冷氣習慣、窗簾、時間排程，以及節能自動化邏輯。",
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
        description:
          "集中處理出入安全、家人狀態、門窗監察及重要通知，為日常家庭生活提供實用安心感。",
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
      ["18:45", "準備回家", "按照你選擇的方案，屋企可以在你回到前準備合適的入門情境。", "bolt"],
      ["18:50", "打開大門", "玄關及客廳燈光柔和亮起，不會突然刺眼，回家感覺更自然。", "light"],
      ["19:10", "晚餐 / 放鬆模式", "客廳轉為舒適情境，冷氣及燈光配合你晚上的生活節奏。", "sliders"],
      ["23:30", "夜間安全", "低亮度路徑燈、出入口監察及睡前設定，幫屋企慢慢進入休息狀態。", "lock"],
    ],
  },
};

function FeatureList({ items, warn = false }) {
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

  const total = useMemo(
    () =>
      selectedPackage.basePrice +
      selectedApartment.adjustment +
      activeAddons.reduce((sum, item) => sum + item.price, 0),
    [selectedPackage, selectedApartment, activeAddons]
  );

  const enquirySubject =
    language === "zh"
      ? "Boson Smart 智能家居方案估算查詢"
      : "Boson Smart Smart Home Package Estimate";

  const enquiryBody = [
    language === "zh"
      ? "你好，我想查詢以下智能家居方案估算："
      : "Hello, I would like to ask about this smart home package estimate:",
    "",
    `${language === "zh" ? "基本方案" : "Base package"}: ${selectedPackage.name}`,
    `${language === "zh" ? "單位類型" : "Apartment type"}: ${selectedApartment.label}`,
    `${language === "zh" ? "升級項目" : "Add-ons"}: ${
      activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builderNoAddons
    }`,
    `${language === "zh" ? "估算總額" : "Estimated total"}: ${formatHKD(total)}`,
    "",
    language === "zh" ? "請聯絡我安排下一步評估。" : "Please contact me for the next-step assessment.",
  ].join("\n");

  const mailtoHref = `mailto:hello@bosonsmart.hk?subject=${encodeURIComponent(
    enquirySubject
  )}&body=${encodeURIComponent(enquiryBody)}`;

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
          <a href="#scenario">{t.nav[2]}</a>
          <a href="#process">{t.nav[3]}</a>
          <a href="#contact">{t.nav[4]}</a>
        </nav>

        <div className="nav-actions">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <a className="pill white" href="#builder">{t.quote}</a>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            {t.nav.map((item, index) => {
              const hrefs = ["#plans", "#builder", "#scenario", "#process", "#contact"];
              return (
                <a key={item} href={hrefs[index]} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <div className="eyebrow"><Icon name="sparkle" />{t.heroEyebrow}</div>
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
          <SectionHeader eyebrow={t.plansEyebrow} title={t.plansTitle} text={t.plansText} note={t.priceNote} />
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
                <strong className="price">
                  {language === "zh" ? `${formatHKD(item.basePrice)} 起` : `From ${formatHKD(item.basePrice)}`}
                </strong>
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
                      className={`choice ${item.id === selected ? "active" : ""}`}
                      onClick={() => setSelected(item.id)}
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
                      className={`choice row-choice ${item.id === apartment ? "active" : ""}`}
                      onClick={() => setApartment(item.id)}
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
                        className={`choice row-choice ${active ? "active" : ""}`}
                        onClick={() => toggleAddon(item.id)}
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
              <a className="pill cyan full" href={mailtoHref}>{t.builderCta} <Icon name="arrow" /></a>
              <a className="pill ghost full" href="#contact">{t.builderSecondaryCta}</a>
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
              <FeatureList items={selectedPackage.includes} />
            </div>
          </div>
        </section>

        <section className="section split-section">
          <div className="why-card">
            <div className="eyebrow">{t.whyEyebrow}</div>
            <h2>{t.whyTitle}</h2>
            <p>{t.whyText}</p>
            <FeatureList items={t.whyPoints} />
          </div>
          <div className="stack">
            <div className="panel highlighted">
              <h3>{t.usuallyIncluded}</h3>
              <FeatureList items={t.includedItems} />
            </div>
            <div className="panel">
              <h3>{t.usuallyExcluded}</h3>
              <FeatureList items={t.excludedItems} warn />
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
              <a className="pill dark full" href={mailtoHref}>{t.emailCta} <Icon name="arrow" /></a>
              <a className="pill outline-dark full" href="tel:+85200000000"><Icon name="phone" /> {t.phoneCta}</a>
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
