import React, { useMemo, useState } from "react";

const CONTACT_EMAIL = "hello@bosonsmart.hk";
const WHATSAPP_NUMBER = "85200000000";

function Icon({ name, className = "" }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    shield: <><path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    light: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.5-1.2 2.5H9.2c0-1-.4-1.8-1.2-2.5Z" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" /></>,
    sliders: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="11" cy="18" r="2" /></>,
    phone: <path d="M21 15.5v3a2 2 0 0 1-2.2 2 18 18 0 0 1-8-2.8 17.5 17.5 0 0 1-5.5-5.5 18 18 0 0 1-2.8-8A2 2 0 0 1 4.5 2h3A2 2 0 0 1 9.5 3.7l.5 2.7a2 2 0 0 1-.6 1.8L8.2 9.4a14 14 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 2Z" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.check}</svg>;
}

const formatHKD = (value) => `HK$${value.toLocaleString("en-HK")}`;

const content = {
  en: {
    brandSub: "Smart-home installation for Hong Kong flats",
    nav: ["Packages", "Estimate", "Example", "Process", "Contact"],
    heroEyebrow: "Smart-home installation for Hong Kong flats",
    heroTitle: "Smart lighting, comfort, and safety packages installed for Hong Kong homes.",
    heroText: "Boson Smart helps flat owners start with practical smart-home upgrades: easier lighting control, air-con routines, curtain options, door/window awareness, and clear handover training.",
    heroPrimary: "Build a quick estimate",
    heroSecondary: "View starting packages",
    trust: ["Installation and setup included", "Final quote after home check", "Family-friendly controls", "Handover training included"],
    scenarioLabel: "Scenario preview",
    suggestedPackage: "Suggested package",
    scenarios: [
      { id: "home", label: "Coming home", title: "Home is ready", status: "Active", package: "Comfort & Energy Package", rows: [["Before arrival", "Living room pre-cools", "18:45"], ["Door opens", "Entry lights rise softly", "18:50"], ["Dinner mode", "Warm lighting scene", "19:10"], ["Night safety", "Path lighting ready", "23:30"]] },
      { id: "energy", label: "Energy saving", title: "Comfort without waste", status: "Scheduled", package: "Comfort & Energy Package", rows: [["Cooling", "Avoids unnecessary runtime", "Auto"], ["Lighting", "Uses motion or schedule control", "On"], ["Curtains", "Helps reduce afternoon heat", "Optional"], ["Away mode", "Turns off selected devices", "Ready"]] },
      { id: "safety", label: "Family safety", title: "Home stays aware", status: "Monitoring", package: "Family Safety Package", rows: [["Entrance", "Door status awareness", "On"], ["Windows", "Selected sensors ready", "Ready"], ["Night path", "Soft lighting for movement", "Auto"], ["Alerts", "Phone notifications enabled", "On"]] },
    ],
    finderEyebrow: "20-second package finder",
    finderTitle: "Not sure where to start? Answer three quick questions.",
    finderText: "Choose your main goal, home stage, and control scope. We will suggest a starting package and send you to the estimate builder.",
    finderLabels: ["Main goal", "Home stage", "Control scope"],
    finderOptions: { goals: [["comfort", "Comfort"], ["energy", "Energy"], ["safety", "Safety"], ["starter", "Easy start"]], stages: [["livedIn", "Lived-in"], ["renovating", "Renovating"]], scopes: [["core", "Core areas"], ["multi", "Multi-room"]] },
    finderResult: "Recommended starting package",
    finderCta: "Apply to estimate builder",
    packagesEyebrow: "Three starting packages",
    packagesTitle: "Choose the package that matches what you want your home to do.",
    packagesText: "Start with a clear package, then adjust the estimate by flat size and useful add-ons. Final pricing is confirmed after checking your home.",
    priceNote: "Online prices are starting estimates only. Final quotation depends on wiring, device choice, Wi-Fi coverage, installation difficulty, and site condition.",
    selectPlan: "Select package",
    selectedPackage: "Your selected package",
    selectedCopy: "This package gives you a practical starting point. We will confirm the exact scope after checking your flat, wiring, device choices, and installation condition.",
    includedSelected: "Included in this starting package",
    idealFor: "Ideal for",
    builderEyebrow: "Estimate builder",
    builderTitle: "Build a starting estimate before you WhatsApp us.",
    builderText: "Choose a package, flat type, and useful add-ons. The estimate updates instantly, then you can send it for checking before any final quote.",
    builderSteps: ["1. Choose package", "2. Select flat type", "3. Add useful upgrades"],
    builderSummary: "Live estimate",
    builderBase: "Base package",
    builderApartment: "Flat adjustment",
    builderAddons: "Selected add-ons",
    builderNoAddons: "No add-ons selected",
    builderTotal: "Estimated total",
    builderDisclaimer: "This is an initial estimate, not a final quotation. Final pricing depends on wiring, switch compatibility, Wi-Fi coverage, device choice, installation difficulty, and site condition. No payment is taken online.",
    builderCta: "WhatsApp this estimate for checking",
    builderSecondaryCta: "Email this estimate",
    scopeEyebrow: "Scope clarity",
    scopeTitle: "Know what is included before you commit.",
    scopeText: "Smart-home pricing can vary because every flat is different. We separate the usual included items from work that normally needs a separate quote.",
    includedTitle: "Usually included",
    excludedTitle: "Usually quoted separately",
    includedItems: ["Initial package recommendation", "Basic device setup", "App and scene configuration", "Post-installation testing", "Basic user training", "Simple handover checklist"],
    excludedItems: ["Major rewiring or new cable routing", "False ceiling, carpentry, or renovation work", "Premium specified-brand upgrades", "Complex Wi-Fi or network improvement", "Non-standard wall or door modification", "Long-term support after the agreed handover period"],
    exampleEyebrow: "Example setup",
    exampleTitle: "A 2-bedroom flat can start with entry, living room, and night safety.",
    exampleText: "You do not need to automate the whole home on day one. Start with the areas you use every day, then add bedrooms, curtains, air-con, or more sensors later.",
    exampleZones: [["Entry", ["Welcome lighting", "Door status awareness"]], ["Living room", ["Evening lighting preset", "Air-con schedule option", "Curtain option"]], ["Night", ["Low-level path lighting", "Selected safety alerts"]]],
    privacyEyebrow: "Privacy and safety",
    privacyTitle: "Your smart-home accounts should stay under your control.",
    privacyText: "Smart homes involve locks, cameras, sensors, apps, and family access. We make the handover clear so you know who controls what.",
    privacyPoints: [["Customer-owned accounts", "Main app, lock, camera, and voice assistant accounts should be created for or handed over to the customer."], ["Camera placement confirmed first", "For cameras or video doorbells, purpose, angle, and privacy considerations are confirmed before installation."], ["Manual control preserved", "The home should not depend only on an app. Simple switch or button controls should remain available where practical."], ["Permissions explained during handover", "We explain alerts, app access, family member permissions, and future adjustment options."]],
    quoteEyebrow: "How quotation is confirmed",
    quoteTitle: "The estimate starts the conversation. The final quote follows the home check.",
    quoteText: "This keeps pricing transparent without guessing over wiring, device choice, Wi-Fi coverage, or installation difficulty.",
    quoteSteps: [["Build estimate", "Choose package, flat type, and optional upgrades."], ["Check home condition", "Review wiring, switches, Wi-Fi, doors/windows, and installation feasibility."], ["Confirm scope", "Clarify included items, separately quoted items, device choices, and installation conditions."], ["Install and hand over", "Complete setup, testing, handover checklist, and basic user training."]],
    processEyebrow: "Installation process",
    processTitle: "Simple enough to start. Careful enough to trust.",
    processText: "Start with an estimate, check the home, confirm the scope, install cleanly, then hand over the system clearly.",
    process: ["Choose a starting package", "Build and send your estimate", "Check home condition and confirm scope", "Install, test, and hand over"],
    aftercareEyebrow: "Handover and aftercare",
    aftercareTitle: "Installation is not the finish line. Your household still needs to use it easily.",
    aftercareText: "A smart-home setup only works if the family understands the controls, accounts, alerts, and daily routines. That is why handover matters.",
    aftercareItems: [["Handover checklist", "Installed devices, controls, apps, accounts, and key settings are summarised."], ["Basic user training", "Daily actions such as home, away, night mode, manual control, and alerts are explained."], ["Adjustment period", "Basic scene or setting adjustments can be made based on real use."], ["Upgrade path", "Start with one area, then add rooms, sensors, curtains, or energy management later."]],
    faqEyebrow: "Common questions",
    faqTitle: "Questions people ask before starting.",
    faqs: [["Do I need to renovate first?", "Not always. Some setups can be installed in a lived-in flat. Larger switch, curtain, or wiring work is easier before or during renovation."], ["Is the online estimate the final quotation?", "No. The estimate is for early planning only. Final pricing depends on wiring, device choice, Wi-Fi coverage, installation difficulty, and site condition."], ["Can I start small and upgrade later?", "Yes. Start with one area, then add more rooms, sensors, curtains, air-con routines, or safety features later."], ["What if my family does not want to use an app?", "The system should remain easy to use. Where practical, we keep simple controls such as wall switches, buttons, or basic scene controls."], ["What if my Wi-Fi is weak?", "We check Wi-Fi coverage during assessment. If network improvement is needed, we will explain the options before final quotation."]],
    briefEyebrow: "Estimate brief",
    briefTitle: "Your smart-home estimate is ready to send.",
    briefText: "Send your selected package, flat type, add-ons, and live estimate so we can check what is practical for your home.",
    briefLabels: ["Package", "Flat type", "Selected add-ons", "Live estimate"],
    contactEyebrow: "Ready to check your flat?",
    contactTitle: "Send your estimate and check what is practical for your home.",
    contactText: "Share your estimate by WhatsApp or email. We will review your flat size, wiring condition, device needs, and installation readiness before confirming the next step.",
    whatsappCta: "WhatsApp my estimate",
    emailCta: "Email my estimate",
    reassurance: "No online payment. Final quote only after checking your home.",
    stickyReview: "Review",
    footer: "© 2026 Boson Smart. Smart-home installation packages for Hong Kong flats.",
    apartments: [{ id: "studio", label: "Studio / 1-bedroom", description: "Compact setup with fewer control points", adjustment: 0 }, { id: "twoBed", label: "2-bedroom flat", description: "Typical Hong Kong family flat", adjustment: 1800 }, { id: "threeBed", label: "3-bedroom flat", description: "More rooms and scene control points", adjustment: 3600 }, { id: "large", label: "Larger / duplex / custom", description: "Requires site assessment", adjustment: 6800 }],
    addons: [{ id: "extraSwitch", label: "Extra smart switch point", description: "For one additional lighting/control point", price: 850 }, { id: "motion", label: "Extra motion sensor", description: "For hallway, bathroom, entry, or utility areas", price: 650 }, { id: "curtain", label: "Smart curtain motor", description: "Motorized curtain or blind control", price: 2200 }, { id: "doorlock", label: "Smart door lock upgrade", description: "Entry convenience and access management", price: 2800 }, { id: "doorbell", label: "Video doorbell / entry camera", description: "Visitor awareness and remote viewing", price: 1600 }, { id: "support", label: "Annual support plan", description: "Remote support and minor scene adjustment", price: 1200 }],
    packages: [
      { id: "starter", name: "Smart Home Starter", subtitle: "A simple first step into smart-home living.", icon: "home", tag: "Best first step", basePrice: 3800, description: "For flats that want easier lighting control and simple home/away settings without starting a large project.", includes: ["Smart lighting control for selected areas", "Home / away preset settings", "App setup and basic configuration", "Simple switch or remote-control options", "Basic handover training"], assumption: "Starting price assumes one core area, basic compatible smart-control setup, app configuration, testing, and handover. Major rewiring and premium brand upgrades are quoted separately.", idealFor: "Studio, 1-bedroom flats, rental flats, or first smart-home trial" },
      { id: "comfort", name: "Comfort & Energy Package", subtitle: "For a home that feels ready when you need it.", icon: "sun", tag: "Most balanced", basePrice: 8800, description: "For daily comfort: lighting presets, air-con routines, curtain options, motion-based lighting, and energy-saving settings.", includes: ["Lighting presets for living, dining, work, and sleep", "Air-con or climate schedule setup", "Curtain or blind automation option", "Motion lighting for selected zones", "Energy-saving settings for daily routines"], assumption: "Starting price assumes key daily areas such as living room and entry, with practical comfort settings. Extra rooms, curtain motors, and complex wiring are quoted separately.", idealFor: "Couples, small families, homeowners, and renovation-stage flats" },
      { id: "safety", name: "Family Safety Package", subtitle: "Know what is happening at home when it matters.", icon: "shield", tag: "Best for families", basePrice: 7800, description: "For families who want better entry awareness, door/window status, night movement support, and selected phone alerts.", includes: ["Smart door lock or entry setup option", "Door / window sensors for key areas", "Video doorbell or entry camera option", "Night safety lighting", "Phone alerts for selected events"], assumption: "Starting price assumes selected entry and safety points. Camera placement, smart lock model, extra sensors, and door modifications are confirmed before quotation.", idealFor: "Families, elderly care, children at home, and security-conscious owners" },
    ],
  },
  zh: {
    brandSub: "香港住宅智能家居安裝",
    nav: ["方案", "估算", "示例", "流程", "聯絡"],
    heroEyebrow: "香港住宅智能家居安裝",
    heroTitle: "為香港住宅安裝智能燈光、舒適及安全方案。",
    heroText: "Boson Smart 幫住戶由實用升級開始：燈光控制、冷氣時間設定、窗簾選配、門窗狀態提醒，以及安裝後基本教學。",
    heroPrimary: "建立快速估算",
    heroSecondary: "查看起步方案",
    trust: ["包括安裝及設定", "上門了解後確認報價", "保留家人易用控制", "交付時提供基本教學"],
    scenarioLabel: "情境預覽",
    suggestedPackage: "建議方案",
    scenarios: [
      { id: "home", label: "回家", title: "屋企已準備好", status: "啟用中", package: "Comfort & Energy Package", rows: [["到家前", "客廳預先調節舒適溫度", "18:45"], ["開門時", "玄關燈光柔和亮起", "18:50"], ["晚飯時", "客廳轉為暖光情境", "19:10"], ["夜晚時", "低亮度路徑燈準備好", "23:30"]] },
      { id: "energy", label: "節能", title: "舒適但不浪費", status: "已排程", package: "Comfort & Energy Package", rows: [["冷氣", "避免不必要長開", "自動"], ["燈光", "按活動或時間自動控制", "開啟"], ["窗簾", "減少下午熱力進入", "可選"], ["離家模式", "關閉指定設備", "準備好"]] },
      { id: "safety", label: "安全", title: "家中狀態更清楚", status: "監察中", package: "Family Safety Package", rows: [["玄關", "掌握大門狀態", "開啟"], ["門窗", "指定感應器已準備", "準備好"], ["夜間路徑", "走動時柔和亮燈", "自動"], ["通知", "手機提示已啟用", "開啟"]] },
    ],
    finderEyebrow: "20 秒方案建議",
    finderTitle: "唔肯定由邊個方案開始？先答三條問題。",
    finderText: "選擇你的主要目標、單位狀態及控制範圍，我們會建議一個起步方案，再帶你去建立估算。",
    finderLabels: ["主要目標", "單位狀態", "控制範圍"],
    finderOptions: { goals: [["comfort", "舒適"], ["energy", "節能"], ["safety", "安全"], ["starter", "方便入門"]], stages: [["livedIn", "已入住"], ["renovating", "裝修中"]], scopes: [["core", "核心區域"], ["multi", "多房間"]] },
    finderResult: "建議起步方案",
    finderCta: "套用到估算組合器",
    packagesEyebrow: "三個起步方案",
    packagesTitle: "按你想屋企做到甚麼，選擇合適起步方案。",
    packagesText: "先選一個清晰起步方案，再按單位大小及實用升級項目調整估算。最終報價會在了解單位後確認。",
    priceNote: "網上價錢只作初步估算。最終報價會按線路、設備選擇、Wi‑Fi 覆蓋、安裝難度及現場情況確認。",
    selectPlan: "選擇方案",
    selectedPackage: "你已選擇的方案",
    selectedCopy: "此方案可作為實用起步點。我們會在了解單位、線路、設備選擇及安裝條件後，再確認實際範圍。",
    includedSelected: "此起步方案一般包括",
    idealFor: "適合",
    builderEyebrow: "估算組合器",
    builderTitle: "先建立起步估算，再用 WhatsApp 查詢。",
    builderText: "選擇方案、單位類型及實用升級項目，估算金額會即時更新。之後可傳送查詢，再確認最終報價。",
    builderSteps: ["1. 選擇方案", "2. 選擇單位類型", "3. 加選實用升級項目"],
    builderSummary: "即時估算",
    builderBase: "基本方案",
    builderApartment: "單位調整",
    builderAddons: "已選升級項目",
    builderNoAddons: "未選擇升級項目",
    builderTotal: "估算總額",
    builderDisclaimer: "此為初步估算，並非最終報價。最終價格需視乎線路、開關兼容性、Wi‑Fi 覆蓋、設備選擇、安裝難度及現場情況而定。網站不會直接收取付款。",
    builderCta: "用 WhatsApp 傳送估算作初步確認",
    builderSecondaryCta: "電郵傳送估算",
    scopeEyebrow: "範圍清晰",
    scopeTitle: "決定前，先清楚知道包括甚麼。",
    scopeText: "智能家居報價會因每個單位情況不同而有差異。我們會將一般包括項目與需要另行報價的項目分開列明。",
    includedTitle: "一般包括",
    excludedTitle: "通常需另行報價",
    includedItems: ["初步方案建議", "基本設備安裝及設定", "App 及情境配置", "安裝後測試", "基本使用教學", "簡單交付清單"],
    excludedItems: ["大型改線或重新拉線", "假天花、木工或裝修工程", "高端指定品牌升級", "複雜 Wi‑Fi 或網絡改善", "非常規牆身或門身改裝", "交付期後的長期支援"],
    exampleEyebrow: "示例設定",
    exampleTitle: "兩房單位可以先由玄關、客廳及夜間安全開始。",
    exampleText: "不需要第一日就全屋自動化。可以先由每日最常用的範圍開始，之後再加入睡房、窗簾、冷氣或更多感應器。",
    exampleZones: [["玄關", ["回家燈光", "大門狀態提醒"]], ["客廳", ["晚間燈光模式", "冷氣時間設定選項", "窗簾選項"]], ["夜間", ["低亮度路徑燈", "指定安全提醒"]]],
    privacyEyebrow: "私隱與安全",
    privacyTitle: "智能家居帳戶，應該由你自己掌握。",
    privacyText: "智能家居涉及門鎖、鏡頭、感應器、App 及家人權限。我們會在交付時清楚說明，讓你知道每項設定由誰管理。",
    privacyPoints: [["帳戶由客戶持有", "主要 App、門鎖、鏡頭及語音助理帳戶，應以客戶資料建立或清楚交由客戶管理。"], ["鏡頭位置先確認", "如涉及鏡頭或視像門鈴，會先確認用途、角度及私隱考慮。"], ["保留手動控制", "智能家居不應只靠 App 操作。可行情況下，應保留牆掣或簡單按鈕控制。"], ["交付時說明權限", "完成後會說明提醒、App 存取、家庭成員權限及日後調整方法。"]],
    quoteEyebrow: "報價如何確認",
    quoteTitle: "估算先幫你開始，最終報價要按單位情況確認。",
    quoteText: "這樣可以保持價格透明，同時避免因線路、設備選擇、Wi‑Fi 覆蓋或安裝難度不同而報錯價。",
    quoteSteps: [["建立估算", "選擇方案、單位類型及升級項目。"], ["了解單位情況", "確認線路、開關、Wi‑Fi、門窗及安裝可行性。"], ["確認範圍", "列明包括項目、另行報價項目、設備選擇及安裝條件。"], ["安裝及交付", "完成設定、測試、交付清單及基本使用教學。"]],
    processEyebrow: "安裝流程",
    processTitle: "簡單到可以開始，謹慎到值得信任。",
    processText: "先建立估算，再了解單位、確認範圍、乾淨安裝，最後清楚交付。",
    process: ["選擇起步方案", "建立並傳送估算", "了解單位情況及確認範圍", "安裝、測試及交付"],
    aftercareEyebrow: "交付與後續",
    aftercareTitle: "裝完不是終點，真正重要是家人會用。",
    aftercareText: "智能家居真正有用，是家人清楚控制方式、帳戶、提醒及日常操作。所以交付不是形式，而是重點。",
    aftercareItems: [["交付清單", "整理已安裝設備、控制方式、App、帳戶及主要設定。"], ["基本使用教學", "說明回家、離家、夜間模式、手動控制及提醒等日常操作。"], ["微調期", "可按實際使用感受，作基本情境或設定調整。"], ["升級路線", "先由一個區域開始，之後再加入房間、感應器、窗簾或能源管理。"]],
    faqEyebrow: "常見問題",
    faqTitle: "開始前，很多人都會問這些問題。",
    faqs: [["一定要裝修時先可以做嗎？", "不一定。部分設定可以在已入住單位安裝；但如果涉及更多開關、窗簾或改線，裝修前或裝修中會更理想。"], ["網上估算是否等於最終報價？", "不是。網站估算只作初步參考。最終報價需視乎線路、設備選擇、Wi‑Fi 覆蓋、安裝難度及單位情況。"], ["可以先做一部分，之後再加嗎？", "可以。先由一個區域開始，之後再加入更多房間、感應器、窗簾、冷氣設定或安全功能。"], ["如果家人不想用 App 怎麼辦？", "系統應該保持易用。可行情況下，我們會保留牆掣、按鈕或基本情境控制方式。"], ["如果屋企 Wi‑Fi 唔夠穩定點算？", "我們會在評估時了解 Wi‑Fi 覆蓋。如果需要改善網絡，會在最終報價前清楚說明選項。"]],
    briefEyebrow: "估算摘要",
    briefTitle: "你的智能家居估算已準備好，可以傳送查詢。",
    briefText: "傳送你已選的方案、單位類型、升級項目及估算金額，我們可以初步了解你的單位適合怎樣開始。",
    briefLabels: ["方案", "單位類型", "已選升級項目", "即時估算"],
    contactEyebrow: "準備了解你的單位適合怎樣開始？",
    contactTitle: "傳送估算，了解你的單位適合怎樣開始。",
    contactText: "可用 WhatsApp 或電郵傳送估算。我們會按單位大小、現有線路、設備需要及安裝條件，再建議下一步。",
    whatsappCta: "WhatsApp 傳送我的估算",
    emailCta: "電郵傳送我的估算",
    reassurance: "網站不會直接收款。最終報價會在了解單位後確認。",
    stickyReview: "調整估算",
    footer: "© 2026 Boson Smart。為香港住宅而設的智能家居安裝方案。",
    apartments: [{ id: "studio", label: "開放式 / 一房單位", description: "較少控制點，適合輕量入門", adjustment: 0 }, { id: "twoBed", label: "兩房單位", description: "常見香港家庭單位", adjustment: 1800 }, { id: "threeBed", label: "三房單位", description: "更多房間及情境控制點", adjustment: 3600 }, { id: "large", label: "大型 / 複式 / 自訂", description: "需要先作現場評估", adjustment: 6800 }],
    addons: [{ id: "extraSwitch", label: "額外智能開關點", description: "增加一個燈光或控制點", price: 850 }, { id: "motion", label: "額外人體感應器", description: "適合走廊、浴室、玄關或雜物房", price: 650 }, { id: "curtain", label: "智能窗簾摩打", description: "窗簾或百葉簾自動控制", price: 2200 }, { id: "doorlock", label: "智能門鎖升級", description: "提升出入方便及權限管理", price: 2800 }, { id: "doorbell", label: "視像門鈴 / 入口鏡頭", description: "訪客提示及遙距查看", price: 1600 }, { id: "support", label: "年度支援計劃", description: "遙距支援及小型情境調整", price: 1200 }],
    packages: [
      { id: "starter", name: "Smart Home Starter", subtitle: "智能家居的簡單入門第一步。", icon: "home", tag: "最適合首次使用", basePrice: 3800, description: "適合想先改善燈光控制、回家及離家設定，但暫時不想做大型工程的單位。", includes: ["指定區域智能燈光控制", "回家 / 離家預設模式", "App 設定及基本配置", "簡單牆掣或遙控控制選項", "基本交付教學"], assumption: "起價假設為一個核心區域、基本兼容智能控制、App 設定、測試及交付。大型改線及高端品牌升級需另行報價。", idealFor: "開放式單位、一房單位、租住單位，或第一次試用智能家居的用戶" },
      { id: "comfort", name: "Comfort & Energy Package", subtitle: "令屋企在你需要時已經準備好。", icon: "sun", tag: "最平衡選擇", basePrice: 8800, description: "為日常舒適而設：燈光模式、冷氣時間設定、窗簾選配、感應燈光及節能設定。", includes: ["客廳、飯廳、工作及睡眠燈光模式", "冷氣或溫度時間設定", "窗簾或百葉簾自動化選配", "指定區域人體感應燈光", "日常節能設定"], assumption: "起價假設為客廳及玄關等主要生活區域，並包含實用舒適設定。額外房間、窗簾摩打及複雜線路需另行報價。", idealFor: "情侶、小家庭、自住業主，或準備裝修的單位" },
      { id: "safety", name: "Family Safety Package", subtitle: "在重要時刻，清楚知道家中狀態。", icon: "shield", tag: "最適合家庭", basePrice: 7800, description: "適合想掌握出入口、門窗狀態、夜間走動及手機提醒的家庭。", includes: ["智能門鎖或出入口設定選配", "主要門窗感應器", "視像門鈴或入口鏡頭選配", "夜間安全燈光", "指定事件手機提醒"], assumption: "起價假設為指定出入口及安全監察點。鏡頭位置、智能門鎖型號、額外感應器及門身改動會在報價前確認。", idealFor: "有小朋友、長者同住、重視家居安全，或希望掌握家中狀態的家庭" },
    ],
  },
};

function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[1.6rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/10 ${className}`}>{children}</div>;
}

function Bullet({ children, warn = false }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300">
      <Icon name={warn ? "shield" : "check"} className={`mt-1 h-4 w-4 shrink-0 ${warn ? "text-amber-300" : "text-cyan-300"}`} />
      <span>{children}</span>
    </div>
  );
}

export default function BosonSmartHomepage() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scenario, setScenario] = useState("home");
  const [selected, setSelected] = useState("comfort");
  const [apartment, setApartment] = useState("twoBed");
  const [addons, setAddons] = useState(["curtain"]);
  const [goal, setGoal] = useState("comfort");
  const [stage, setStage] = useState("livedIn");
  const [scope, setScope] = useState("core");

  const t = content[language];
  const activeScenario = t.scenarios.find((item) => item.id === scenario) || t.scenarios[0];
  const selectedPackage = t.packages.find((item) => item.id === selected) || t.packages[1];
  const selectedApartment = t.apartments.find((item) => item.id === apartment) || t.apartments[1];
  const activeAddons = t.addons.filter((item) => addons.includes(item.id));
  const total = selectedPackage.basePrice + selectedApartment.adjustment + activeAddons.reduce((sum, item) => sum + item.price, 0);

  const recommendedId = useMemo(() => {
    if (goal === "safety") return "safety";
    if (goal === "comfort" || goal === "energy" || stage === "renovating" || scope === "multi") return "comfort";
    return "starter";
  }, [goal, stage, scope]);
  const recommended = t.packages.find((item) => item.id === recommendedId) || t.packages[0];

  const enquiry = [
    language === "zh" ? "你好，我想查詢以下智能家居估算：" : "Hello, I would like to check this smart-home estimate:",
    "",
    `${t.briefLabels[0]}: ${selectedPackage.name}`,
    `${t.briefLabels[1]}: ${selectedApartment.label}`,
    `${t.briefLabels[2]}: ${activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builderNoAddons}`,
    `${t.briefLabels[3]}: ${formatHKD(total)}`,
  ].join("\n");
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Boson Smart Estimate")}&body=${encodeURIComponent(enquiry)}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

  const toggleAddon = (id) => setAddons((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const applyRecommendation = () => {
    setSelected(recommendedId);
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-amber-300/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="Boson Smart home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20"><Icon name="bolt" className="h-5 w-5" /></span>
            <span>
              <span className="block text-base font-semibold tracking-tight">Boson Smart</span>
              <span className="hidden text-xs text-slate-400 sm:block">{t.brandSub}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Main navigation">
            {t.nav.map((item, index) => <a key={item} className="transition hover:text-white" href={["#packages", "#builder", "#example", "#process", "#contact"][index]}>{item}</a>)}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-bold text-slate-300" aria-label="Language selector">
              <button className={`rounded-full px-3 py-1.5 transition ${language === "en" ? "bg-cyan-300 text-slate-950" : "hover:bg-white/10"}`} onClick={() => setLanguage("en")}>EN</button>
              <button className={`rounded-full px-3 py-1.5 transition ${language === "zh" ? "bg-cyan-300 text-slate-950" : "hover:bg-white/10"}`} onClick={() => setLanguage("zh")}>繁中</button>
            </div>
            <a href="#builder" className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex">{language === "zh" ? "建立估算" : "Build estimate"}</a>
            <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle menu"><Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" /></button>
          </div>
        </div>
        {menuOpen && <nav id="mobile-menu" className="grid gap-3 border-t border-white/10 px-4 py-4 text-sm text-slate-300 md:hidden" aria-label="Mobile navigation">{t.nav.map((item, index) => <a key={item} href={["#packages", "#builder", "#example", "#process", "#contact"][index]} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:px-6">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"><Icon name="bolt" className="h-4 w-4" />{t.heroEyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#builder" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950">{t.heroPrimary}<Icon name="arrow" className="h-4 w-4" /></a>
              <a href="#packages" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950">{t.heroSecondary}</a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.trust.map((item) => <div key={item} className="flex gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}
            </div>
          </div>
          <Card className="p-4">
            <div className="rounded-[1.25rem] bg-slate-900 p-4">
              <div className="mb-4 flex items-start justify-between gap-4"><div><p className="text-sm text-slate-400">{t.scenarioLabel}</p><h2 className="mt-1 text-2xl font-semibold">{activeScenario.title}</h2></div><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">{activeScenario.status}</span></div>
              <div className="mb-4 grid grid-cols-3 gap-2" role="tablist" aria-label={t.scenarioLabel}>{t.scenarios.map((item) => <button key={item.id} onClick={() => setScenario(item.id)} className={`rounded-2xl border px-3 py-2 text-xs font-semibold transition ${item.id === scenario ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"}`}>{item.label}</button>)}</div>
              <div className="grid gap-3">{activeScenario.rows.map(([zone, mode, value]) => <div key={`${activeScenario.id}-${zone}`} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div><p className="font-medium text-white">{zone}</p><p className="text-sm text-slate-400">{mode}</p></div><span className="rounded-xl bg-white/10 px-3 py-2 text-sm text-cyan-100">{value}</span></div>)}</div>
              <p className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">{t.suggestedPackage}: <strong className="text-white">{activeScenario.package}</strong></p>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <Card className="grid gap-5 p-5 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:p-6">
            <div><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">{t.finderEyebrow}</p><h2 className="text-2xl font-semibold md:text-3xl">{t.finderTitle}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{t.finderText}</p></div>
            <div className="grid gap-3">
              {[ [t.finderLabels[0], t.finderOptions.goals, goal, setGoal], [t.finderLabels[1], t.finderOptions.stages, stage, setStage], [t.finderLabels[2], t.finderOptions.scopes, scope, setScope] ].map(([label, options, value, setter]) => <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p><div className="flex flex-wrap gap-2">{options.map(([id, text]) => <button key={id} onClick={() => setter(id)} className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${value === id ? "border-amber-300 bg-amber-300 text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"}`}>{text}</button>)}</div></div>)}
            </div>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">{t.finderResult}</p><h3 className="mt-3 text-2xl font-semibold">{recommended.name}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{recommended.description}</p><button onClick={applyRecommendation} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">{t.finderCta}<Icon name="arrow" className="h-4 w-4" /></button></div>
          </Card>
        </section>

        <section id="packages" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end"><SectionHeader eyebrow={t.packagesEyebrow} title={t.packagesTitle} text={t.packagesText} /><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">{t.priceNote}</div></div>
          <div className="grid gap-5 lg:grid-cols-3">{t.packages.map((pkg) => <button key={pkg.id} onClick={() => setSelected(pkg.id)} className={`group rounded-[1.6rem] border p-5 text-left transition ${selected === pkg.id ? "border-cyan-300/70 bg-cyan-300/10" : "border-white/10 bg-white/[0.045] hover:border-white/25"}`}><div className="mb-5 flex items-start justify-between gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200"><Icon name={pkg.icon} className="h-6 w-6" /></span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{pkg.tag}</span></div><h3 className="text-2xl font-semibold">{pkg.name}</h3><p className="mt-2 text-sm text-cyan-100">{pkg.subtitle}</p><p className="mt-4 text-sm leading-6 text-slate-300">{pkg.description}</p><p className="mt-5 text-2xl font-semibold">{language === "zh" ? `${formatHKD(pkg.basePrice)} 起` : `From ${formatHKD(pkg.basePrice)}`}</p><div className="mt-5 grid gap-3">{pkg.includes.slice(0, 4).map((item) => <div key={item} className="flex gap-2 text-sm leading-6 text-slate-300"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}</div><p className="mt-5 rounded-2xl bg-slate-950/35 p-3 text-xs leading-5 text-slate-400">{pkg.assumption}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">{t.selectPlan}<Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span></button>)}</div>
        </section>

        <section id="builder" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
          <SectionHeader eyebrow={t.builderEyebrow} title={t.builderTitle} text={t.builderText} />
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="grid gap-5">
              <BuilderPanel title={t.builderSteps[0]}>{t.packages.map((pkg) => <Choice key={pkg.id} active={selected === pkg.id} onClick={() => setSelected(pkg.id)} title={pkg.name} desc={pkg.subtitle} price={formatHKD(pkg.basePrice)} icon={pkg.icon} />)}</BuilderPanel>
              <BuilderPanel title={t.builderSteps[1]}>{t.apartments.map((item) => <Choice key={item.id} active={apartment === item.id} onClick={() => setApartment(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.adjustment)}`} />)}</BuilderPanel>
              <BuilderPanel title={t.builderSteps[2]}>{t.addons.map((item) => <Choice key={item.id} active={addons.includes(item.id)} onClick={() => toggleAddon(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.price)}`} />)}</BuilderPanel>
            </div>
            <aside className="sticky top-24 rounded-[1.6rem] border border-cyan-300/30 bg-slate-900/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{t.builderSummary}</p><p className="mt-2 text-3xl font-semibold">{formatHKD(total)}</p>
              <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm"><Summary label={t.builderBase} value={selectedPackage.name} price={formatHKD(selectedPackage.basePrice)} /><Summary label={t.builderApartment} value={selectedApartment.label} price={`+${formatHKD(selectedApartment.adjustment)}`} /><div><p className="mb-2 text-slate-400">{t.builderAddons}</p>{activeAddons.length ? activeAddons.map((item) => <div key={item.id} className="mb-2 flex justify-between gap-3 rounded-2xl bg-white/[0.04] px-3 py-2"><span>{item.label}</span><span className="text-cyan-100">+{formatHKD(item.price)}</span></div>) : <p className="rounded-2xl bg-white/[0.04] px-3 py-2 text-slate-400">{t.builderNoAddons}</p>}</div></div>
              <div className="mt-5 rounded-2xl bg-cyan-300/10 p-4"><p className="text-sm text-cyan-100">{t.builderTotal}</p><p className="mt-1 text-4xl font-semibold">{formatHKD(total)}</p></div>
              <p className="mt-4 text-xs leading-5 text-slate-400">{t.builderDisclaimer}</p>
              <div className="mt-5 grid gap-3"><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"><Icon name="phone" className="h-4 w-4" />{t.builderCta}</a><a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 font-semibold transition hover:bg-white/10">{t.builderSecondaryCta}<Icon name="arrow" className="h-4 w-4" /></a></div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6"><Card className="grid gap-8 p-6 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{t.selectedPackage}</p><h2 className="mt-3 text-3xl font-semibold">{selectedPackage.name}</h2><p className="mt-4 text-slate-300">{t.selectedCopy}</p><p className="mt-5 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-300"><strong className="text-white">{t.idealFor}: </strong>{selectedPackage.idealFor}</p></div><div><h3 className="mb-4 text-xl font-semibold">{t.includedSelected}</h3><div className="grid gap-3 sm:grid-cols-2">{selectedPackage.includes.map((item) => <Bullet key={item}>{item}</Bullet>)}</div></div></Card></section>

        <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><SectionHeader eyebrow={t.scopeEyebrow} title={t.scopeTitle} text={t.scopeText} /><div className="grid gap-5 lg:grid-cols-2"><Card className="p-6"><h3 className="mb-5 text-2xl font-semibold">{t.includedTitle}</h3><div className="grid gap-3">{t.includedItems.map((item) => <Bullet key={item}>{item}</Bullet>)}</div></Card><Card className="p-6"><h3 className="mb-5 text-2xl font-semibold">{t.excludedTitle}</h3><div className="grid gap-3">{t.excludedItems.map((item) => <Bullet key={item} warn>{item}</Bullet>)}</div></Card></div></section>

        <section id="example" className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><Card className="grid gap-8 bg-gradient-to-br from-white/[0.055] to-amber-300/[0.06] p-6 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">{t.exampleEyebrow}</p><h2 className="text-3xl font-semibold md:text-5xl">{t.exampleTitle}</h2><p className="mt-4 leading-7 text-slate-300">{t.exampleText}</p></div><div className="grid gap-4 md:grid-cols-3">{t.exampleZones.map(([zone, items]) => <div key={zone} className="rounded-2xl border border-white/10 bg-slate-950/35 p-5"><h3 className="mb-4 text-xl font-semibold">{zone}</h3><div className="grid gap-3">{items.map((item) => <div key={item} className="flex gap-2 text-sm text-slate-300"><Icon name="check" className="h-4 w-4 shrink-0 text-amber-300" />{item}</div>)}</div></div>)}</div></Card></section>

        <InfoGrid eyebrow={t.privacyEyebrow} title={t.privacyTitle} text={t.privacyText} items={t.privacyPoints} icon="shield" />
        <InfoGrid eyebrow={t.quoteEyebrow} title={t.quoteTitle} text={t.quoteText} items={t.quoteSteps} numbered />

        <section id="process" className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"><SectionHeader eyebrow={t.processEyebrow} title={t.processTitle} text={t.processText} /><div className="grid gap-4">{t.process.map((step, index) => <Card key={step} className="flex items-center gap-4 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 font-bold text-slate-950">{index + 1}</span><strong>{step}</strong></Card>)}</div></div></section>
        <InfoGrid eyebrow={t.aftercareEyebrow} title={t.aftercareTitle} text={t.aftercareText} items={t.aftercareItems} icon="check" amber />

        <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><SectionHeader eyebrow={t.faqEyebrow} title={t.faqTitle} /><div className="grid gap-4 md:grid-cols-2">{t.faqs.map(([q, a]) => <Card key={q} className="p-5"><h3 className="text-lg font-semibold">{q}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{a}</p></Card>)}</div></section>

        <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><Card className="grid gap-5 p-6 lg:grid-cols-[0.85fr_1fr_0.75fr]"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{t.briefEyebrow}</p><h2 className="text-3xl font-semibold">{t.briefTitle}</h2><p className="mt-4 text-sm leading-6 text-slate-300">{t.briefText}</p></div><div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm"><Summary label={t.briefLabels[0]} value={selectedPackage.name} /><Summary label={t.briefLabels[1]} value={selectedApartment.label} /><Summary label={t.briefLabels[2]} value={activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builderNoAddons} /><Summary label={t.briefLabels[3]} value={formatHKD(total)} big /></div><div className="grid content-center gap-3"><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"><Icon name="phone" className="h-4 w-4" />{t.builderCta}</a><a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 font-semibold transition hover:bg-white/10">{t.builderSecondaryCta}<Icon name="arrow" className="h-4 w-4" /></a></div></Card></section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-14 pb-32 lg:px-6 lg:pb-16"><div className="rounded-[1.8rem] bg-gradient-to-br from-cyan-300 to-amber-300 p-6 text-slate-950 md:p-8"><div className="grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-center"><div><p className="mb-3 inline-flex rounded-full bg-slate-950/10 px-3 py-1 text-sm font-bold">{t.contactEyebrow}</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.contactTitle}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-900">{t.contactText}</p><p className="mt-4 text-sm font-semibold">{t.reassurance}</p></div><div className="grid gap-3"><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"><Icon name="phone" className="h-4 w-4" />{t.whatsappCta}</a><a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/20 px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-950/10">{t.emailCta}<Icon name="arrow" className="h-4 w-4" /></a></div></div></div></section>
      </main>

      <div className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl border border-white/15 bg-slate-950/88 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"><a href="#builder" className="mb-2 grid grid-cols-[auto_1fr] items-center gap-3 rounded-xl bg-cyan-300 px-4 py-3 text-slate-950"><span className="text-xs font-black uppercase tracking-wider opacity-75">{t.builderSummary}</span><strong className="justify-self-end text-lg">{formatHKD(total)}</strong></a><div className="grid grid-cols-2 gap-2"><a href="#builder" className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-semibold">{t.stickyReview}</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold"><Icon name="phone" className="h-4 w-4" />WhatsApp</a></div></div>
      <div className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-2xl border border-white/15 bg-slate-950/84 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:flex"><a href="#builder" className="grid rounded-xl bg-cyan-300/10 px-4 py-2"><span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.builderSummary}</span><strong className="text-cyan-100">{formatHKD(total)}</strong></a><a href="#builder" className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">{t.stickyReview}</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950"><Icon name="phone" className="h-4 w-4" />WhatsApp</a></div>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-sm text-slate-400"><div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between"><p>{t.footer}</p><div className="flex gap-4"><a href="#packages" className="hover:text-white">{t.nav[0]}</a><a href="#builder" className="hover:text-white">{t.nav[1]}</a><a href="#contact" className="hover:text-white">{t.nav[4]}</a></div></div></footer>
    </div>
  );
}

function Choice({ active, onClick, title, desc, price, icon }) {
  return <button onClick={onClick} className={`rounded-3xl border p-5 text-left transition ${active ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-slate-950/35 hover:border-white/30"}`}>{icon && <Icon name={icon} className="mb-4 h-6 w-6 text-cyan-200" />}<div className="font-semibold text-white">{title}</div><div className="mt-2 text-sm leading-6 text-slate-400">{desc}</div>{price && <div className="mt-4 text-sm font-semibold text-cyan-100">{price}</div>}</button>;
}

function BuilderPanel({ title, children }) {
  return <Card className="p-5"><h3 className="mb-5 text-xl font-semibold">{title}</h3><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div></Card>;
}

function Summary({ label, value, price, big }) {
  return <div className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"><span className="text-slate-400">{label}</span><span className={`text-right text-white ${big ? "text-xl font-semibold text-cyan-100" : ""}`}>{value}{price && <><br /><small className="text-slate-400">{price}</small></>}</span></div>;
}

function InfoGrid({ eyebrow, title, text, items, icon = "check", numbered = false, amber = false }) {
  return <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"><SectionHeader eyebrow={eyebrow} title={title} text={text} /><div className="grid gap-4 sm:grid-cols-2">{items.map(([h, p], index) => <Card key={h} className="p-5"><div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${amber ? "bg-amber-300 text-slate-950" : "bg-cyan-300/10 text-cyan-200"}`}>{numbered ? <span className="font-bold">{index + 1}</span> : <Icon name={icon} className="h-5 w-5" />}</div><h3 className="text-lg font-semibold">{h}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{p}</p></Card>)}</div></div></section>;
}

