import React, { useEffect, useMemo, useState } from "react";

const CONTACT_EMAIL = "hello@bosonsmart.hk";
const WHATSAPP_NUMBER = "85200000000";

function Icon({ name, className = "" }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    light: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.5-1.2 2.5H9.2c0-1-.4-1.8-1.2-2.5Z" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v2" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
        <circle cx="9" cy="6" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="11" cy="18" r="2" />
      </>
    ),
    phone: (
      <>
        <path d="M21 15.5v3a2 2 0 0 1-2.2 2 18 18 0 0 1-8-2.8 17.5 17.5 0 0 1-5.5-5.5 18 18 0 0 1-2.8-8A2 2 0 0 1 4.5 2h3A2 2 0 0 1 9.5 3.7l.5 2.7a2 2 0 0 1-.6 1.8L8.2 9.4a14 14 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 2Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || paths.check}
    </svg>
  );
}

const formatHKD = (value) => `HK$${value.toLocaleString("en-HK")}`;

const data = {
  en: {
    brandSub: "Smart-home installation for Hong Kong flats",
    nav: { home: "Home", services: "Services", about: "About", contact: "Contact" },
    buildEstimate: "Build Estimate",
    trust: ["Installation and setup included", "Final quote after home check", "Family-friendly controls", "Handover training included"],
    pages: {
      home: {
        eyebrow: "Smart-home installation for Hong Kong flats",
        title: "Smart lighting, comfort, and safety packages installed for Hong Kong homes.",
        body: "Boson Smart helps flat owners start with practical smart-home upgrades: easier lighting control, air-con routines, curtain options, door/window awareness, and clear handover training.",
        primary: "Build a quick estimate",
        secondary: "View starting packages",
      },
      about: {
        eyebrow: "About Boson Smart",
        title: "Practical smart-home upgrades for real Hong Kong homes.",
        body: "Boson Smart helps Hong Kong flat owners start with smart lighting, comfort routines, safety awareness, and simple controls that the whole household can actually use.",
      },
      services: {
        eyebrow: "Services",
        title: "Smart-home installation packages you can understand before you commit.",
        body: "Start with a clear package, adjust the estimate by flat size and useful upgrades, then confirm the final scope after checking your home.",
      },
      contact: {
        eyebrow: "Contact Boson Smart",
        title: "Send your estimate and check what is practical for your flat.",
        body: "Share your selected package, flat type, add-ons, and live estimate. We will review your home condition before confirming the next step.",
      },
    },
    scenarioLabel: "Scenario preview",
    suggestedPackage: "Suggested package",
    scenarios: [
      { id: "home", label: "Coming home", title: "Home is ready", status: "Active", package: "Comfort & Energy Package", rows: [["Before arrival", "Living room pre-cools", "18:45"], ["Door opens", "Entry lights rise softly", "18:50"], ["Dinner mode", "Warm lighting scene", "19:10"], ["Night safety", "Path lighting ready", "23:30"]] },
      { id: "energy", label: "Energy saving", title: "Comfort without waste", status: "Scheduled", package: "Comfort & Energy Package", rows: [["Cooling", "Avoids unnecessary runtime", "Auto"], ["Lighting", "Uses motion or schedule control", "On"], ["Curtains", "Helps reduce afternoon heat", "Optional"], ["Away mode", "Turns off selected devices", "Ready"]] },
      { id: "safety", label: "Family safety", title: "Home stays aware", status: "Monitoring", package: "Family Safety Package", rows: [["Entrance", "Door status awareness", "On"], ["Windows", "Selected sensors ready", "Ready"], ["Night path", "Soft lighting for movement", "Auto"], ["Alerts", "Phone notifications enabled", "On"]] },
    ],
    finder: {
      eyebrow: "20-second package finder",
      title: "Not sure where to start? Answer three quick questions.",
      body: "Choose your main goal, home stage, and control scope. We will suggest a starting package and send you to the estimate builder.",
      labels: ["Main goal", "Home stage", "Control scope"],
      options: {
        goals: [["comfort", "Comfort"], ["energy", "Energy"], ["safety", "Safety"], ["starter", "Easy start"]],
        stages: [["livedIn", "Lived-in"], ["renovating", "Renovating"]],
        scopes: [["core", "Core areas"], ["multi", "Multi-room"]],
      },
      result: "Recommended starting package",
      cta: "Apply to estimate builder",
    },
    packagesSection: {
      eyebrow: "Three starting packages",
      title: "Choose the package that matches what you want your home to do.",
      body: "Start with a clear package, then adjust the estimate by flat size and useful add-ons. Final pricing is confirmed after checking your home.",
      note: "Online prices are starting estimates only. Final quotation depends on wiring, device choice, Wi-Fi coverage, installation difficulty, and site condition.",
      select: "Select package",
    },
    builder: {
      eyebrow: "Estimate builder",
      title: "Build a starting estimate before you WhatsApp us.",
      body: "Choose a package, flat type, and useful add-ons. The estimate updates instantly, then you can send it for checking before any final quote.",
      steps: ["1. Choose package", "2. Select flat type", "3. Add useful upgrades"],
      live: "Live estimate",
      base: "Base package",
      apartment: "Flat adjustment",
      addons: "Selected add-ons",
      noAddons: "No add-ons selected",
      total: "Estimated total",
      disclaimer: "This is an initial estimate, not a final quotation. Final pricing depends on wiring, switch compatibility, Wi-Fi coverage, device choice, installation difficulty, and site condition. No payment is taken online.",
      whatsapp: "WhatsApp this estimate for checking",
      email: "Email this estimate",
      review: "Review",
    },
    labels: {
      idealFor: "Ideal for",
      selectedPackage: "Your selected package",
      includedSelected: "Included in this starting package",
      usuallyIncluded: "Usually included",
      usuallySeparate: "Usually quoted separately",
      package: "Package",
      flatType: "Flat type",
      selectedAddons: "Selected add-ons",
      liveEstimate: "Live estimate",
    },
    scope: {
      eyebrow: "Scope clarity",
      title: "Know what is included before you commit.",
      body: "Smart-home pricing can vary because every flat is different. We separate the usual included items from work that normally needs a separate quote.",
      included: ["Initial package recommendation", "Basic device setup", "App and scene configuration", "Post-installation testing", "Basic user training", "Simple handover checklist"],
      excluded: ["Major rewiring or new cable routing", "False ceiling, carpentry, or renovation work", "Premium specified-brand upgrades", "Complex Wi-Fi or network improvement", "Non-standard wall or door modification", "Long-term support after the agreed handover period"],
    },
    example: {
      eyebrow: "Example setup",
      title: "A 2-bedroom flat can start with entry, living room, and night safety.",
      body: "You do not need to automate the whole home on day one. Start with the areas you use every day, then add bedrooms, curtains, air-con, or more sensors later.",
      zones: [["Entry", ["Welcome lighting", "Door status awareness"]], ["Living room", ["Evening lighting preset", "Air-con schedule option", "Curtain option"]], ["Night", ["Low-level path lighting", "Selected safety alerts"]]],
    },
    privacy: {
      eyebrow: "Privacy and safety",
      title: "Your smart-home accounts should stay under your control.",
      body: "Smart homes involve locks, cameras, sensors, apps, and family access. We make the handover clear so you know who controls what.",
      items: [["Customer-owned accounts", "Main app, lock, camera, and voice assistant accounts should be created for or handed over to the customer."], ["Camera placement confirmed first", "For cameras or video doorbells, purpose, angle, and privacy considerations are confirmed before installation."], ["Manual control preserved", "The home should not depend only on an app. Simple switch or button controls should remain available where practical."], ["Permissions explained during handover", "We explain alerts, app access, family member permissions, and future adjustment options."]],
    },
    quotation: {
      eyebrow: "How quotation is confirmed",
      title: "The estimate starts the conversation. The final quote follows the home check.",
      body: "This keeps pricing transparent without guessing over wiring, device choice, Wi-Fi coverage, or installation difficulty.",
      steps: [["Build estimate", "Choose package, flat type, and optional upgrades."], ["Check home condition", "Review wiring, switches, Wi-Fi, doors/windows, and installation feasibility."], ["Confirm scope", "Clarify included items, separately quoted items, device choices, and installation conditions."], ["Install and hand over", "Complete setup, testing, handover checklist, and basic user training."]],
    },
    process: {
      eyebrow: "Installation process",
      title: "Simple enough to start. Careful enough to trust.",
      body: "Start with an estimate, check the home, confirm the scope, install cleanly, then hand over the system clearly.",
      steps: ["Choose a starting package", "Build and send your estimate", "Check home condition and confirm scope", "Install, test, and hand over"],
    },
    aftercare: {
      eyebrow: "Handover and aftercare",
      title: "Installation is not the finish line. Your household still needs to use it easily.",
      body: "A smart-home setup only works if the family understands the controls, accounts, alerts, and daily routines. That is why handover matters.",
      items: [["Handover checklist", "Installed devices, controls, apps, accounts, and key settings are summarised."], ["Basic user training", "Daily actions such as home, away, night mode, manual control, and alerts are explained."], ["Adjustment period", "Basic scene or setting adjustments can be made based on real use."], ["Upgrade path", "Start with one area, then add rooms, sensors, curtains, or energy management later."]],
    },
    faq: {
      eyebrow: "Common questions",
      title: "Questions people ask before starting.",
      items: [["Do I need to renovate first?", "Not always. Some setups can be installed in a lived-in flat. Larger switch, curtain, or wiring work is easier before or during renovation."], ["Is the online estimate the final quotation?", "No. The estimate is for early planning only. Final pricing depends on wiring, device choice, Wi-Fi coverage, installation difficulty, and site condition."], ["Can I start small and upgrade later?", "Yes. Start with one area, then add more rooms, sensors, curtains, air-con routines, or safety features later."], ["What if my family does not want to use an app?", "The system should remain easy to use. Where practical, we keep simple controls such as wall switches, buttons, or basic scene controls."], ["What if my Wi-Fi is weak?", "We check Wi-Fi coverage during assessment. If network improvement is needed, we will explain the options before final quotation."]],
    },
    about: {
      whyTitle: "Smart homes should make daily life easier, not more complicated.",
      whyBody: "Many smart-home setups fail because they focus on devices first. The result is often too many apps, confusing controls, and family members who do not know how to use the system. Boson Smart starts from daily routines: coming home, switching scenes, saving energy, moving safely at night, and keeping basic controls simple.",
      howTitle: "We start with packages, then confirm what works for your flat.",
      howBody: "Every flat is different. Wiring, Wi-Fi, switch compatibility, door type, and device choice can all affect the final setup. That is why our online estimate is only the starting point.",
      caresTitle: "The system should still feel like home.",
      cares: [["Practical first", "We focus on upgrades people actually use every day: lighting, air-con routines, curtains, entry awareness, and safety alerts."], ["Family-friendly", "A smart home should not depend only on an app. Where practical, simple switches, buttons, and clear handover remain part of the setup."], ["Privacy-conscious", "Door locks, cameras, sensors, and app accounts should be explained clearly and handed over properly."], ["Expandable", "Start with one area, then add more rooms, sensors, curtains, or energy routines later."]],
    },
    services: {
      areasTitle: "What we can help set up",
      areas: [["Smart lighting", "Preset lighting modes, selected smart switches, home / away settings, and simple daily controls."], ["Comfort routines", "Air-con schedules, curtain options, motion lighting, and routines that make the home feel ready when you need it."], ["Family safety", "Door/window awareness, video doorbell or entry camera options, night path lighting, and selected phone alerts."], ["Handover and training", "App setup, basic scene explanation, account handover, and simple daily-use guidance."]],
      unsureTitle: "Not sure which service fits your flat?",
      unsureBody: "Use the estimate builder first. It gives us a clearer starting point before we check what is practical for your home.",
    },
    contact: {
      detailsTitle: "A few details help us give better advice.",
      details: ["Flat type and approximate size", "Current status: lived-in, renovating, or new handover", "Main goal: lighting, comfort, energy saving, safety, or all", "Any existing smart lock, Wi-Fi mesh, smart lights, or voice assistant", "Photos of switch areas, entry door, curtain area, or router location if available"],
      nextTitle: "What happens after you contact us?",
      next: [["We review your estimate", "We check the selected package, flat type, and add-ons."], ["We ask for missing details", "If needed, we ask about wiring, Wi-Fi, doors, curtains, or device preferences."], ["We confirm whether it is practical", "We explain what looks suitable, what may need checking, and what may require separate quotation."], ["We arrange the next step", "If the scope makes sense, we move toward assessment, quotation, and installation planning."]],
      reassuranceTitle: "No pressure. No online payment.",
      reassuranceBody: "The online estimate is only a starting point. Final quotation is confirmed after checking your home condition, wiring, device choices, and installation difficulty.",
      whatsappText: "Best for quick package checking and estimate review.",
      emailText: "Best for sending longer details, photos, or written questions.",
    },
    finalCta: {
      title: "Send your estimate and check what is practical for your home.",
      body: "Share your estimate by WhatsApp or email. We will review your flat size, wiring condition, device needs, and installation readiness before confirming the next step.",
      whatsapp: "WhatsApp my estimate",
      email: "Email my estimate",
      reassurance: "No online payment. Final quote only after checking your home.",
    },
    footer: "© 2026 Boson Smart. Smart-home installation packages for Hong Kong flats.",
    apartments: [
      { id: "studio", label: "Studio / 1-bedroom", description: "Compact setup with fewer control points", adjustment: 0 },
      { id: "twoBed", label: "2-bedroom flat", description: "Typical Hong Kong family flat", adjustment: 1800 },
      { id: "threeBed", label: "3-bedroom flat", description: "More rooms and scene control points", adjustment: 3600 },
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
      { id: "starter", name: "Smart Home Starter", subtitle: "A simple first step into smart-home living.", icon: "home", tag: "Best first step", basePrice: 3800, description: "For flats that want easier lighting control and simple home/away settings without starting a large project.", includes: ["Smart lighting control for selected areas", "Home / away preset settings", "App setup and basic configuration", "Simple switch or remote-control options", "Basic handover training"], assumption: "Starting price assumes one core area, basic compatible smart-control setup, app configuration, testing, and handover. Major rewiring and premium brand upgrades are quoted separately.", idealFor: "Studio, 1-bedroom flats, rental flats, or first smart-home trial" },
      { id: "comfort", name: "Comfort & Energy Package", subtitle: "For a home that feels ready when you need it.", icon: "sun", tag: "Most balanced", basePrice: 8800, description: "For daily comfort: lighting presets, air-con routines, curtain options, motion-based lighting, and energy-saving settings.", includes: ["Lighting presets for living, dining, work, and sleep", "Air-con or climate schedule setup", "Curtain or blind automation option", "Motion lighting for selected zones", "Energy-saving settings for daily routines"], assumption: "Starting price assumes key daily areas such as living room and entry, with practical comfort settings. Extra rooms, curtain motors, and complex wiring are quoted separately.", idealFor: "Couples, small families, homeowners, and renovation-stage flats" },
      { id: "safety", name: "Family Safety Package", subtitle: "Know what is happening at home when it matters.", icon: "shield", tag: "Best for families", basePrice: 7800, description: "For families who want better entry awareness, door/window status, night movement support, and selected phone alerts.", includes: ["Smart door lock or entry setup option", "Door / window sensors for key areas", "Video doorbell or entry camera option", "Night safety lighting", "Phone alerts for selected events"], assumption: "Starting price assumes selected entry and safety points. Camera placement, smart lock model, extra sensors, and door modifications are confirmed before quotation.", idealFor: "Families, elderly care, children at home, and security-conscious owners" },
    ],
  },
  zh: {
    brandSub: "香港住宅智能家居安裝",
    nav: { home: "主頁", services: "服務", about: "關於", contact: "聯絡" },
    buildEstimate: "建立估算",
    trust: ["包括安裝及設定", "上門了解後確認報價", "保留家人易用控制", "交付時提供基本教學"],
    pages: {
      home: { eyebrow: "香港住宅智能家居安裝", title: "為香港住宅安裝智能燈光、舒適及安全方案。", body: "Boson Smart 幫住戶由實用升級開始：燈光控制、冷氣時間設定、窗簾選配、門窗狀態提醒，以及安裝後基本教學。", primary: "建立快速估算", secondary: "查看起步方案" },
      about: { eyebrow: "關於 Boson Smart", title: "為真實香港住宅而設的實用智能家居升級。", body: "Boson Smart 幫香港住戶由智能燈光、舒適設定、安全提醒及家人易用控制開始，建立真正用得著的智能家居。" },
      services: { eyebrow: "服務", title: "你可以先理解清楚，再決定的智能家居安裝方案。", body: "先由清晰起步方案開始，再按單位大小及升級項目調整估算。最終範圍會在了解單位後確認。" },
      contact: { eyebrow: "聯絡 Boson Smart", title: "傳送估算，了解你的單位適合怎樣開始。", body: "分享你已選的方案、單位類型、升級項目及即時估算。我們會先了解你的單位情況，再建議下一步。" },
    },
    scenarioLabel: "情境預覽",
    suggestedPackage: "建議方案",
    scenarios: [
      { id: "home", label: "回家", title: "屋企已準備好", status: "啟用中", package: "Comfort & Energy Package", rows: [["到家前", "客廳預先調節舒適溫度", "18:45"], ["開門時", "玄關燈光柔和亮起", "18:50"], ["晚飯時", "客廳轉為暖光情境", "19:10"], ["夜晚時", "低亮度路徑燈準備好", "23:30"]] },
      { id: "energy", label: "節能", title: "舒適但不浪費", status: "已排程", package: "Comfort & Energy Package", rows: [["冷氣", "避免不必要長開", "自動"], ["燈光", "按活動或時間自動控制", "開啟"], ["窗簾", "減少下午熱力進入", "可選"], ["離家模式", "關閉指定設備", "準備好"]] },
      { id: "safety", label: "安全", title: "家中狀態更清楚", status: "監察中", package: "Family Safety Package", rows: [["玄關", "掌握大門狀態", "開啟"], ["門窗", "指定感應器已準備", "準備好"], ["夜間路徑", "走動時柔和亮燈", "自動"], ["通知", "手機提示已啟用", "開啟"]] },
    ],
    finder: {
      eyebrow: "20 秒方案建議",
      title: "唔肯定由邊個方案開始？先答三條問題。",
      body: "選擇你的主要目標、單位狀態及控制範圍，我們會建議一個起步方案，再帶你去建立估算。",
      labels: ["主要目標", "單位狀態", "控制範圍"],
      options: { goals: [["comfort", "舒適"], ["energy", "節能"], ["safety", "安全"], ["starter", "方便入門"]], stages: [["livedIn", "已入住"], ["renovating", "裝修中"]], scopes: [["core", "核心區域"], ["multi", "多房間"]] },
      result: "建議起步方案",
      cta: "套用到估算組合器",
    },
    packagesSection: {
      eyebrow: "三個起步方案",
      title: "按你想屋企做到甚麼，選擇合適起步方案。",
      body: "先選一個清晰起步方案，再按單位大小及實用升級項目調整估算。最終報價會在了解單位後確認。",
      note: "網上價錢只作初步估算。最終報價會按線路、設備選擇、Wi‑Fi 覆蓋、安裝難度及現場情況確認。",
      select: "選擇方案",
    },
    builder: {
      eyebrow: "估算組合器",
      title: "先建立起步估算，再用 WhatsApp 查詢。",
      body: "選擇方案、單位類型及實用升級項目，估算金額會即時更新。之後可傳送查詢，再確認最終報價。",
      steps: ["1. 選擇方案", "2. 選擇單位類型", "3. 加選實用升級項目"],
      live: "即時估算",
      base: "基本方案",
      apartment: "單位調整",
      addons: "已選升級項目",
      noAddons: "未選擇升級項目",
      total: "估算總額",
      disclaimer: "此為初步估算，並非最終報價。最終價格需視乎線路、開關兼容性、Wi‑Fi 覆蓋、設備選擇、安裝難度及現場情況而定。網站不會直接收取付款。",
      whatsapp: "用 WhatsApp 傳送估算作初步確認",
      email: "電郵傳送估算",
      review: "調整估算",
    },
    labels: {
      idealFor: "適合",
      selectedPackage: "你已選擇的方案",
      includedSelected: "此起步方案一般包括",
      usuallyIncluded: "一般包括",
      usuallySeparate: "通常需另行報價",
      package: "方案",
      flatType: "單位類型",
      selectedAddons: "已選升級項目",
      liveEstimate: "即時估算",
    },
    scope: {
      eyebrow: "範圍清晰",
      title: "決定前，先清楚知道包括甚麼。",
      body: "智能家居報價會因每個單位情況不同而有差異。我們會將一般包括項目與需要另行報價的項目分開列明。",
      included: ["初步方案建議", "基本設備安裝及設定", "App 及情境配置", "安裝後測試", "基本使用教學", "簡單交付清單"],
      excluded: ["大型改線或重新拉線", "假天花、木工或裝修工程", "高端指定品牌升級", "複雜 Wi‑Fi 或網絡改善", "非常規牆身或門身改裝", "交付期後的長期支援"],
    },
    example: {
      eyebrow: "示例設定",
      title: "兩房單位可以先由玄關、客廳及夜間安全開始。",
      body: "不需要第一日就全屋自動化。可以先由每日最常用的範圍開始，之後再加入睡房、窗簾、冷氣或更多感應器。",
      zones: [["玄關", ["回家燈光", "大門狀態提醒"]], ["客廳", ["晚間燈光模式", "冷氣時間設定選項", "窗簾選項"]], ["夜間", ["低亮度路徑燈", "指定安全提醒"]]],
    },
    privacy: {
      eyebrow: "私隱與安全",
      title: "智能家居帳戶，應該由你自己掌握。",
      body: "智能家居涉及門鎖、鏡頭、感應器、App 及家人權限。我們會在交付時清楚說明，讓你知道每項設定由誰管理。",
      items: [["帳戶由客戶持有", "主要 App、門鎖、鏡頭及語音助理帳戶，應以客戶資料建立或清楚交由客戶管理。"], ["鏡頭位置先確認", "如涉及鏡頭或視像門鈴，會先確認用途、角度及私隱考慮。"], ["保留手動控制", "智能家居不應只靠 App 操作。可行情況下，應保留牆掣或簡單按鈕控制。"], ["交付時說明權限", "完成後會說明提醒、App 存取、家庭成員權限及日後調整方法。"]],
    },
    quotation: {
      eyebrow: "報價如何確認",
      title: "估算先幫你開始，最終報價要按單位情況確認。",
      body: "這樣可以保持價格透明，同時避免因線路、設備選擇、Wi‑Fi 覆蓋或安裝難度不同而報錯價。",
      steps: [["建立估算", "選擇方案、單位類型及升級項目。"], ["了解單位情況", "確認線路、開關、Wi‑Fi、門窗及安裝可行性。"], ["確認範圍", "列明包括項目、另行報價項目、設備選擇及安裝條件。"], ["安裝及交付", "完成設定、測試、交付清單及基本使用教學。"]],
    },
    process: {
      eyebrow: "安裝流程",
      title: "簡單到可以開始，謹慎到值得信任。",
      body: "先建立估算，再了解單位、確認範圍、乾淨安裝，最後清楚交付。",
      steps: ["選擇起步方案", "建立並傳送估算", "了解單位情況及確認範圍", "安裝、測試及交付"],
    },
    aftercare: {
      eyebrow: "交付與後續",
      title: "裝完不是終點，真正重要是家人會用。",
      body: "智能家居真正有用，是家人清楚控制方式、帳戶、提醒及日常操作。所以交付不是形式，而是重點。",
      items: [["交付清單", "整理已安裝設備、控制方式、App、帳戶及主要設定。"], ["基本使用教學", "說明回家、離家、夜間模式、手動控制及提醒等日常操作。"], ["微調期", "可按實際使用感受，作基本情境或設定調整。"], ["升級路線", "先由一個區域開始，之後再加入房間、感應器、窗簾或能源管理。"]],
    },
    faq: {
      eyebrow: "常見問題",
      title: "開始前，很多人都會問這些問題。",
      items: [["一定要裝修時先可以做嗎？", "不一定。部分設定可以在已入住單位安裝；但如果涉及更多開關、窗簾或改線，裝修前或裝修中會更理想。"], ["網上估算是否等於最終報價？", "不是。網站估算只作初步參考。最終報價需視乎線路、設備選擇、Wi‑Fi 覆蓋、安裝難度及單位情況。"], ["可以先做一部分，之後再加嗎？", "可以。先由一個區域開始，之後再加入更多房間、感應器、窗簾、冷氣設定或安全功能。"], ["如果家人不想用 App 怎麼辦？", "系統應該保持易用。可行情況下，我們會保留牆掣、按鈕或基本情境控制方式。"], ["如果屋企 Wi‑Fi 唔夠穩定點算？", "我們會在評估時了解 Wi‑Fi 覆蓋。如果需要改善網絡，會在最終報價前清楚說明選項。"]],
    },
    about: {
      whyTitle: "智能家居應該令日常生活更容易，而不是更複雜。",
      whyBody: "很多智能家居失敗，是因為一開始只集中在產品。結果是太多 App、控制混亂，家人不知道怎樣使用。Boson Smart 由日常生活開始：回家、切換情境、節能、夜間安全，以及保留簡單控制。",
      howTitle: "我們先由方案開始，再確認你的單位適合怎樣做。",
      howBody: "每個單位都不同。線路、Wi‑Fi、開關兼容性、門身類型及設備選擇，都會影響最終設定。所以網上估算只是起點。",
      caresTitle: "系統應該仍然有家的感覺。",
      cares: [["實用先行", "集中每日真正會用到的升級：燈光、冷氣設定、窗簾、出入口狀態及安全提醒。"], ["家人易用", "智能家居不應只靠 App。可行情況下，簡單牆掣、按鈕及清楚交付仍然重要。"], ["注重私隱", "門鎖、鏡頭、感應器及 App 帳戶都應清楚說明和妥善交付。"], ["可逐步升級", "先由一個區域開始，之後再加入更多房間、感應器、窗簾或能源設定。"]],
    },
    services: {
      areasTitle: "我們可以協助設定甚麼",
      areas: [["智能燈光", "預設燈光模式、指定智能開關、回家 / 離家設定及簡單日常控制。"], ["舒適設定", "冷氣時間設定、窗簾選項、感應燈光，以及令屋企在需要時準備好的日常設定。"], ["家庭安全", "門窗狀態、視像門鈴或入口鏡頭選項、夜間路徑燈及指定手機提醒。"], ["交付及教學", "App 設定、基本情境說明、帳戶交付及日常使用指引。"]],
      unsureTitle: "唔肯定邊個服務適合你的單位？",
      unsureBody: "先用估算組合器。它可以給我們一個更清晰起點，再了解你的單位實際適合怎樣做。",
    },
    contact: {
      detailsTitle: "幾項資料可以幫我們更準確建議。",
      details: ["單位類型及大約面積", "現時狀態：已入住、裝修中或新樓交收", "主要目標：燈光、舒適、節能、安全，還是全部都想了解", "現有智能門鎖、Wi‑Fi mesh、智能燈或語音助理", "如方便，可提供開關位、入門門身、窗簾位或路由器位置照片"],
      nextTitle: "聯絡後會發生甚麼？",
      next: [["我們查看你的估算", "先了解已選方案、單位類型及升級項目。"], ["補充缺少資料", "如有需要，會再了解線路、Wi‑Fi、門身、窗簾或設備偏好。"], ["確認是否可行", "說明哪些項目合適，哪些需要現場確認，哪些可能另行報價。"], ["安排下一步", "如果範圍合理，再進入評估、報價及安裝安排。"]],
      reassuranceTitle: "無壓力。網站不會直接收款。",
      reassuranceBody: "網上估算只是起點。最終報價會在了解單位情況、線路、設備選擇及安裝難度後確認。",
      whatsappText: "適合快速查看方案及估算。",
      emailText: "適合傳送較詳細資料、照片或書面問題。",
    },
    finalCta: {
      title: "傳送估算，了解你的單位適合怎樣開始。",
      body: "可用 WhatsApp 或電郵傳送估算。我們會按單位大小、現有線路、設備需要及安裝條件，再建議下一步。",
      whatsapp: "WhatsApp 傳送我的估算",
      email: "電郵傳送我的估算",
      reassurance: "網站不會直接收款。最終報價會在了解單位後確認。",
    },
    footer: "© 2026 Boson Smart。為香港住宅而設的智能家居安裝方案。",
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
      { id: "starter", name: "Smart Home Starter", subtitle: "智能家居的簡單入門第一步。", icon: "home", tag: "最適合首次使用", basePrice: 3800, description: "適合想先改善燈光控制、回家及離家設定，但暫時不想做大型工程的單位。", includes: ["指定區域智能燈光控制", "回家 / 離家預設模式", "App 設定及基本配置", "簡單牆掣或遙控控制選項", "基本交付教學"], assumption: "起價假設為一個核心區域、基本兼容智能控制、App 設定、測試及交付。大型改線及高端品牌升級需另行報價。", idealFor: "開放式單位、一房單位、租住單位，或第一次試用智能家居的用戶" },
      { id: "comfort", name: "Comfort & Energy Package", subtitle: "令屋企在你需要時已經準備好。", icon: "sun", tag: "最平衡選擇", basePrice: 8800, description: "為日常舒適而設：燈光模式、冷氣時間設定、窗簾選配、感應燈光及節能設定。", includes: ["客廳、飯廳、工作及睡眠燈光模式", "冷氣或溫度時間設定", "窗簾或百葉簾自動化選配", "指定區域人體感應燈光", "日常節能設定"], assumption: "起價假設為客廳及玄關等主要生活區域，並包含實用舒適設定。額外房間、窗簾摩打及複雜線路需另行報價。", idealFor: "情侶、小家庭、自住業主，或準備裝修的單位" },
      { id: "safety", name: "Family Safety Package", subtitle: "在重要時刻，清楚知道家中狀態。", icon: "shield", tag: "最適合家庭", basePrice: 7800, description: "適合想掌握出入口、門窗狀態、夜間走動及手機提醒的家庭。", includes: ["智能門鎖或出入口設定選配", "主要門窗感應器", "視像門鈴或入口鏡頭選配", "夜間安全燈光", "指定事件手機提醒"], assumption: "起價假設為指定出入口及安全監察點。鏡頭位置、智能門鎖型號、額外感應器及門身改動會在報價前確認。", idealFor: "有小朋友、長者同住、重視家居安全，或希望掌握家中狀態的家庭" },
    ],
  },
};

const pageList = ["home", "services", "about", "contact"];

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return pageList.includes(hash) ? hash : "home";
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState(getInitialPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scenario, setScenario] = useState("home");
  const [selected, setSelected] = useState("comfort");
  const [apartment, setApartment] = useState("twoBed");
  const [addons, setAddons] = useState(["curtain"]);
  const [goal, setGoal] = useState("comfort");
  const [stage, setStage] = useState("livedIn");
  const [scope, setScope] = useState("core");

  const t = data[language];

  useEffect(() => {
    const handleHash = () => setPage(getInitialPage());
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

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
    `${t.labels.package}: ${selectedPackage.name}`,
    `${t.labels.flatType}: ${selectedApartment.label}`,
    `${t.labels.selectedAddons}: ${activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builder.noAddons}`,
    `${t.labels.liveEstimate}: ${formatHKD(total)}`,
  ].join("\n");

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Boson Smart Estimate")}&body=${encodeURIComponent(enquiry)}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

  function go(nextPage, anchor) {
    setMenuOpen(false);
    setPage(nextPage);
    window.location.hash = nextPage;
    if (anchor) {
      setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }

  function toggleAddon(id) {
    setAddons((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function applyRecommendation() {
    setSelected(recommendedId);
    go("home", "builder");
  }

  const shared = {
    language,
    t,
    scenario,
    setScenario,
    selected,
    setSelected,
    apartment,
    setApartment,
    addons,
    setAddons,
    goal,
    setGoal,
    stage,
    setStage,
    scope,
    setScope,
    selectedPackage,
    selectedApartment,
    activeAddons,
    total,
    recommended,
    toggleAddon,
    applyRecommendation,
    mailtoHref,
    whatsappHref,
    go,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <BackgroundGlow />
      <Header t={t} page={page} go={go} language={language} setLanguage={setLanguage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="relative z-10">
        {page === "home" && <HomePage {...shared} />}
        {page === "services" && <ServicesPage {...shared} />}
        {page === "about" && <AboutPage {...shared} />}
        {page === "contact" && <ContactPage {...shared} />}
      </main>

      <StickyEstimate t={t} total={total} whatsappHref={whatsappHref} go={go} />
      <Footer t={t} go={go} />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-amber-300/15 blur-3xl" />
    </div>
  );
}

function Header({ t, page, go, language, setLanguage, menuOpen, setMenuOpen }) {
  const links = [
    ["home", t.nav.home],
    ["services", t.nav.services],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left" aria-label="Boson Smart home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20">
            <Icon name="bolt" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-semibold tracking-tight">Boson Smart</span>
            <span className="hidden text-xs text-slate-400 sm:block">{t.brandSub}</span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`transition hover:text-white ${page === id ? "text-white" : ""}`}
              aria-current={page === id ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-bold text-slate-300" aria-label="Language selector">
            <button className={`rounded-full px-3 py-1.5 transition ${language === "en" ? "bg-cyan-300 text-slate-950" : "hover:bg-white/10"}`} onClick={() => setLanguage("en")}>EN</button>
            <button className={`rounded-full px-3 py-1.5 transition ${language === "zh" ? "bg-cyan-300 text-slate-950" : "hover:bg-white/10"}`} onClick={() => setLanguage("zh")}>繁中</button>
          </div>
          <button onClick={() => go("home", "builder")} className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex">
            {t.buildEstimate}
          </button>
          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle menu">
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="grid gap-3 border-t border-white/10 px-4 py-4 text-sm text-slate-300 md:hidden" aria-label="Mobile navigation">
          {links.map(([id, label]) => <button key={id} className="text-left" onClick={() => go(id)}>{label}</button>)}
          <button className="text-left font-semibold text-cyan-100" onClick={() => go("home", "builder")}>{t.buildEstimate}</button>
        </nav>
      )}
    </header>
  );
}

function HomePage(props) {
  const { t, language, scenario, setScenario, go } = props;
  const page = t.pages.home;
  const activeScenario = t.scenarios.find((item) => item.id === scenario) || t.scenarios[0];

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:px-6">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Icon name="bolt" className="h-4 w-4" />{page.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{page.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => go("home", "builder")} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950">
              {page.primary}<Icon name="arrow" className="h-4 w-4" />
            </button>
            <button onClick={() => go("home", "packages")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950">
              {page.secondary}
            </button>
          </div>
          <TrustStrip t={t} />
        </div>
        <ScenarioPreview t={t} scenario={scenario} setScenario={setScenario} activeScenario={activeScenario} />
      </section>

      <PackageFinder {...props} />
      <PackagesSection {...props} />
      <BuilderSection {...props} />
      <SelectedPackageSection {...props} />
      <ScopeSection t={t} />
      <ExampleSection t={t} />
      <InfoGrid section={t.privacy} icon="shield" />
      <InfoGrid section={t.quotation} numbered />
      <ProcessSection t={t} />
      <InfoGrid section={t.aftercare} icon="check" amber />
      <FaqSection t={t} />
      <EstimateBrief {...props} />
      <FinalCta {...props} />
    </>
  );
}

function AboutPage(props) {
  const { t, go } = props;
  const page = t.pages.about;

  return (
    <>
      <PageHero page={page} primary={t.pages.home.primary} secondary={t.nav.services} onPrimary={() => go("home", "builder")} onSecondary={() => go("services")} />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Why we exist" title={t.about.whyTitle} text={t.about.whyBody} />
          <Card className="p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Start small before expanding", "Keep controls simple for the family", "Confirm final scope after checking the home", "Hand over accounts, settings, and daily controls clearly"].map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <Card className="grid gap-8 p-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="How we work" title={t.about.howTitle} text={t.about.howBody} />
          <ProcessList steps={t.process.steps} />
        </Card>
      </section>
      <InfoGrid section={{ eyebrow: "What we care about", title: t.about.caresTitle, body: "", items: t.about.cares }} icon="check" amber />
      <FinalCta {...props} />
    </>
  );
}

function ServicesPage(props) {
  const { t, go } = props;
  const page = t.pages.services;

  return (
    <>
      <PageHero page={page} primary={t.buildEstimate} secondary={t.packagesSection.eyebrow} onPrimary={() => go("home", "builder")} onSecondary={() => go("services", "service-packages")} />
      <section id="service-packages" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <SectionHeader eyebrow={t.packagesSection.eyebrow} title={t.packagesSection.title} text={t.packagesSection.body} />
        <PackageCards {...props} compact />
      </section>
      <InfoGrid section={{ eyebrow: "Service areas", title: t.services.areasTitle, body: "", items: t.services.areas }} icon="check" />
      <ScopeSection t={t} />
      <InfoGrid section={t.quotation} numbered />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <Card className="grid gap-5 bg-gradient-to-br from-cyan-300/10 to-amber-300/10 p-6 lg:grid-cols-[1fr_0.35fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.services.unsureTitle}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">{t.services.unsureBody}</p>
          </div>
          <button onClick={() => go("home", "builder")} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
            {t.buildEstimate}<Icon name="arrow" className="h-4 w-4" />
          </button>
        </Card>
      </section>
    </>
  );
}

function ContactPage(props) {
  const { t, mailtoHref, whatsappHref, go } = props;
  const page = t.pages.contact;

  return (
    <>
      <PageHero page={page} primary={t.finalCta.whatsapp} secondary={t.finalCta.email} onPrimary={() => window.open(whatsappHref, "_blank", "noreferrer")} onSecondary={() => window.location.href = mailtoHref} />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="What to send us" title={t.contact.detailsTitle} />
          <Card className="p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.contact.details.map((item) => <Bullet key={item}>{item}</Bullet>)}
            </div>
          </Card>
        </div>
      </section>
      <InfoGrid section={{ eyebrow: "Next step", title: t.contact.nextTitle, body: "", items: t.contact.next }} numbered />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <Card className="grid gap-5 bg-gradient-to-br from-cyan-300/10 to-amber-300/10 p-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Reassurance</p>
            <h2 className="text-3xl font-semibold md:text-5xl">{t.contact.reassuranceTitle}</h2>
            <p className="mt-4 leading-7 text-slate-300">{t.contact.reassuranceBody}</p>
            <TrustStrip t={t} compact />
          </div>
          <div className="grid gap-4">
            <ContactMethod icon="phone" title="WhatsApp" text={t.contact.whatsappText} cta={t.finalCta.whatsapp} href={whatsappHref} />
            <ContactMethod icon="mail" title="Email" text={t.contact.emailText} cta={t.finalCta.email} href={mailtoHref} />
          </div>
        </Card>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <Card className="grid gap-5 p-6 lg:grid-cols-[1fr_0.35fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.contact.reassuranceTitle}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">{t.contact.reassuranceBody}</p>
          </div>
          <button onClick={() => go("home", "builder")} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
            {t.buildEstimate}<Icon name="arrow" className="h-4 w-4" />
          </button>
        </Card>
      </section>
    </>
  );
}

function PageHero({ page, primary, secondary, onPrimary, onSecondary }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 lg:px-6">
      <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
        <Icon name="bolt" className="h-4 w-4" />{page.eyebrow}
      </p>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{page.title}</h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{page.body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button onClick={onPrimary} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
          {primary}<Icon name="arrow" className="h-4 w-4" />
        </button>
        <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
          {secondary}
        </button>
      </div>
    </section>
  );
}

function ScenarioPreview({ t, scenario, setScenario, activeScenario }) {
  return (
    <Card className="p-4">
      <div className="rounded-[1.25rem] bg-slate-900 p-4">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">{t.scenarioLabel}</p>
            <h2 className="mt-1 text-2xl font-semibold">{activeScenario.title}</h2>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">{activeScenario.status}</span>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2" role="tablist" aria-label={t.scenarioLabel}>
          {t.scenarios.map((item) => (
            <button key={item.id} onClick={() => setScenario(item.id)} className={`rounded-2xl border px-3 py-2 text-xs font-semibold transition ${item.id === scenario ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"}`}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="grid gap-3">
          {activeScenario.rows.map(([zone, mode, value]) => (
            <div key={`${activeScenario.id}-${zone}`} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div>
                <p className="font-medium text-white">{zone}</p>
                <p className="text-sm text-slate-400">{mode}</p>
              </div>
              <span className="rounded-xl bg-white/10 px-3 py-2 text-sm text-cyan-100">{value}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
          {t.suggestedPackage}: <strong className="text-white">{activeScenario.package}</strong>
        </p>
      </div>
    </Card>
  );
}

function PackageFinder({ t, goal, setGoal, stage, setStage, scope, setScope, recommended, applyRecommendation }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <Card className="grid gap-5 p-5 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:p-6">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">{t.finder.eyebrow}</p>
          <h2 className="text-2xl font-semibold md:text-3xl">{t.finder.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">{t.finder.body}</p>
        </div>
        <div className="grid gap-3">
          {[
            [t.finder.labels[0], t.finder.options.goals, goal, setGoal],
            [t.finder.labels[1], t.finder.options.stages, stage, setStage],
            [t.finder.labels[2], t.finder.options.scopes, scope, setScope],
          ].map(([label, options, value, setter]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
              <div className="flex flex-wrap gap-2">
                {options.map(([id, text]) => (
                  <button key={id} onClick={() => setter(id)} className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${value === id ? "border-amber-300 bg-amber-300 text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"}`}>
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">{t.finder.result}</p>
          <h3 className="mt-3 text-2xl font-semibold">{recommended.name}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{recommended.description}</p>
          <button onClick={applyRecommendation} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
            {t.finder.cta}<Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      </Card>
    </section>
  );
}

function PackagesSection(props) {
  const { t } = props;
  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <SectionHeader eyebrow={t.packagesSection.eyebrow} title={t.packagesSection.title} text={t.packagesSection.body} />
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">{t.packagesSection.note}</div>
      </div>
      <PackageCards {...props} />
    </section>
  );
}

function PackageCards({ t, selected, setSelected, language, compact = false }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {t.packages.map((pkg) => (
        <button key={pkg.id} onClick={() => setSelected(pkg.id)} className={`group rounded-[1.6rem] border p-5 text-left transition ${selected === pkg.id ? "border-cyan-300/70 bg-cyan-300/10" : "border-white/10 bg-white/[0.045] hover:border-white/25"}`}>
          <div className="mb-5 flex items-start justify-between gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200"><Icon name={pkg.icon} className="h-6 w-6" /></span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{pkg.tag}</span>
          </div>
          <h3 className="text-2xl font-semibold">{pkg.name}</h3>
          <p className="mt-2 text-sm text-cyan-100">{pkg.subtitle}</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">{pkg.description}</p>
          <p className="mt-5 text-2xl font-semibold">{language === "zh" ? `${formatHKD(pkg.basePrice)} 起` : `From ${formatHKD(pkg.basePrice)}`}</p>
          {!compact && (
            <>
              <div className="mt-5 grid gap-3">
                {pkg.includes.slice(0, 4).map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />{item}
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl bg-slate-950/35 p-3 text-xs leading-5 text-slate-400">{pkg.assumption}</p>
            </>
          )}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
            {t.packagesSection.select}<Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </button>
      ))}
    </div>
  );
}

function BuilderSection({ t, selected, setSelected, apartment, setApartment, addons, toggleAddon, selectedPackage, selectedApartment, activeAddons, total, mailtoHref, whatsappHref }) {
  return (
    <section id="builder" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <SectionHeader eyebrow={t.builder.eyebrow} title={t.builder.title} text={t.builder.body} />
      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="grid gap-5">
          <BuilderPanel title={t.builder.steps[0]}>
            {t.packages.map((pkg) => <Choice key={pkg.id} active={selected === pkg.id} onClick={() => setSelected(pkg.id)} title={pkg.name} desc={pkg.subtitle} price={formatHKD(pkg.basePrice)} icon={pkg.icon} />)}
          </BuilderPanel>
          <BuilderPanel title={t.builder.steps[1]}>
            {t.apartments.map((item) => <Choice key={item.id} active={apartment === item.id} onClick={() => setApartment(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.adjustment)}`} />)}
          </BuilderPanel>
          <BuilderPanel title={t.builder.steps[2]}>
            {t.addons.map((item) => <Choice key={item.id} active={addons.includes(item.id)} onClick={() => toggleAddon(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.price)}`} />)}
          </BuilderPanel>
        </div>
        <aside className="sticky top-24 rounded-[1.6rem] border border-cyan-300/30 bg-slate-900/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{t.builder.live}</p>
          <p className="mt-2 text-3xl font-semibold">{formatHKD(total)}</p>
          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm">
            <Summary label={t.builder.base} value={selectedPackage.name} price={formatHKD(selectedPackage.basePrice)} />
            <Summary label={t.builder.apartment} value={selectedApartment.label} price={`+${formatHKD(selectedApartment.adjustment)}`} />
            <div>
              <p className="mb-2 text-slate-400">{t.builder.addons}</p>
              {activeAddons.length ? activeAddons.map((item) => (
                <div key={item.id} className="mb-2 flex justify-between gap-3 rounded-2xl bg-white/[0.04] px-3 py-2">
                  <span>{item.label}</span>
                  <span className="text-cyan-100">+{formatHKD(item.price)}</span>
                </div>
              )) : <p className="rounded-2xl bg-white/[0.04] px-3 py-2 text-slate-400">{t.builder.noAddons}</p>}
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-cyan-300/10 p-4">
            <p className="text-sm text-cyan-100">{t.builder.total}</p>
            <p className="mt-1 text-4xl font-semibold">{formatHKD(total)}</p>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-400">{t.builder.disclaimer}</p>
          <div className="mt-5 grid gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
              <Icon name="phone" className="h-4 w-4" />{t.builder.whatsapp}
            </a>
            <a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 font-semibold transition hover:bg-white/10">
              {t.builder.email}<Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SelectedPackageSection({ t, selectedPackage }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <Card className="grid gap-8 p-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{t.labels.selectedPackage}</p>
          <h2 className="mt-3 text-3xl font-semibold">{selectedPackage.name}</h2>
          <p className="mt-4 text-slate-300">{t.pages.home.body}</p>
          <p className="mt-5 rounded-2xl bg-white/[0.05] p-4 text-sm text-slate-300"><strong className="text-white">{t.labels.idealFor}: </strong>{selectedPackage.idealFor}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">{t.labels.includedSelected}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {selectedPackage.includes.map((item) => <Bullet key={item}>{item}</Bullet>)}
          </div>
        </div>
      </Card>
    </section>
  );
}

function ScopeSection({ t }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <SectionHeader eyebrow={t.scope.eyebrow} title={t.scope.title} text={t.scope.body} />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-5 text-2xl font-semibold">{t.labels.usuallyIncluded}</h3>
          <div className="grid gap-3">{t.scope.included.map((item) => <Bullet key={item}>{item}</Bullet>)}</div>
        </Card>
        <Card className="p-6">
          <h3 className="mb-5 text-2xl font-semibold">{t.labels.usuallySeparate}</h3>
          <div className="grid gap-3">{t.scope.excluded.map((item) => <Bullet key={item} warn>{item}</Bullet>)}</div>
        </Card>
      </div>
    </section>
  );
}

function ExampleSection({ t }) {
  return (
    <section id="example" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <Card className="grid gap-8 bg-gradient-to-br from-white/[0.055] to-amber-300/[0.06] p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">{t.example.eyebrow}</p>
          <h2 className="text-3xl font-semibold md:text-5xl">{t.example.title}</h2>
          <p className="mt-4 leading-7 text-slate-300">{t.example.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {t.example.zones.map(([zone, items]) => (
            <div key={zone} className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
              <h3 className="mb-4 text-xl font-semibold">{zone}</h3>
              <div className="grid gap-3">
                {items.map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-slate-300">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-amber-300" />{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function ProcessSection({ t }) {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} text={t.process.body} />
        <ProcessList steps={t.process.steps} />
      </div>
    </section>
  );
}

function ProcessList({ steps }) {
  return (
    <div className="grid gap-4">
      {steps.map((step, index) => (
        <Card key={step} className="flex items-center gap-4 p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 font-bold text-slate-950">{index + 1}</span>
          <strong>{step}</strong>
        </Card>
      ))}
    </div>
  );
}

function FaqSection({ t }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
      <div className="grid gap-4 md:grid-cols-2">
        {t.faq.items.map(([q, a]) => (
          <Card key={q} className="p-5">
            <h3 className="text-lg font-semibold">{q}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function EstimateBrief({ t, selectedPackage, selectedApartment, activeAddons, total, whatsappHref, mailtoHref }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <Card className="grid gap-5 p-6 lg:grid-cols-[0.85fr_1fr_0.75fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Estimate brief</p>
          <h2 className="text-3xl font-semibold">{data.en.finalCta.title}</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">{data.en.finalCta.body}</p>
        </div>
        <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm">
          <Summary label={t.labels.package} value={selectedPackage.name} />
          <Summary label={t.labels.flatType} value={selectedApartment.label} />
          <Summary label={t.labels.selectedAddons} value={activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builder.noAddons} />
          <Summary label={t.labels.liveEstimate} value={formatHKD(total)} big />
        </div>
        <div className="grid content-center gap-3">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
            <Icon name="phone" className="h-4 w-4" />{t.builder.whatsapp}
          </a>
          <a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 font-semibold transition hover:bg-white/10">
            {t.builder.email}<Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </Card>
    </section>
  );
}

function FinalCta({ t, whatsappHref, mailtoHref }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 pb-32 lg:px-6 lg:pb-16">
      <div className="rounded-[1.8rem] bg-gradient-to-br from-cyan-300 to-amber-300 p-6 text-slate-950 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-slate-950/10 px-3 py-1 text-sm font-bold">{t.pages.contact.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.finalCta.title}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-900">{t.finalCta.body}</p>
            <p className="mt-4 text-sm font-semibold">{t.finalCta.reassurance}</p>
          </div>
          <div className="grid gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800">
              <Icon name="phone" className="h-4 w-4" />{t.finalCta.whatsapp}
            </a>
            <a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/20 px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-950/10">
              {t.finalCta.email}<Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, title, text, cta, href }) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
        {cta}<Icon name="arrow" className="h-4 w-4" />
      </a>
    </Card>
  );
}

function StickyEstimate({ t, total, whatsappHref, go }) {
  return (
    <>
      <div className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl border border-white/15 bg-slate-950/88 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
        <button onClick={() => go("home", "builder")} className="mb-2 grid w-full grid-cols-[auto_1fr] items-center gap-3 rounded-xl bg-cyan-300 px-4 py-3 text-left text-slate-950">
          <span className="text-xs font-black uppercase tracking-wider opacity-75">{t.builder.live}</span>
          <strong className="justify-self-end text-lg">{formatHKD(total)}</strong>
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => go("home", "builder")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-semibold">{t.builder.review}</button>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold">
            <Icon name="phone" className="h-4 w-4" />WhatsApp
          </a>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-2xl border border-white/15 bg-slate-950/84 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:flex">
        <button onClick={() => go("home", "builder")} className="grid rounded-xl bg-cyan-300/10 px-4 py-2 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.builder.live}</span>
          <strong className="text-cyan-100">{formatHKD(total)}</strong>
        </button>
        <button onClick={() => go("home", "builder")} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">{t.builder.review}</button>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">
          <Icon name="phone" className="h-4 w-4" />WhatsApp
        </a>
      </div>
    </>
  );
}

function Footer({ t, go }) {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>{t.footer}</p>
        <div className="flex gap-4">
          <button onClick={() => go("home")} className="hover:text-white">{t.nav.home}</button>
          <button onClick={() => go("services")} className="hover:text-white">{t.nav.services}</button>
          <button onClick={() => go("contact")} className="hover:text-white">{t.nav.contact}</button>
        </div>
      </div>
    </footer>
  );
}

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

function Choice({ active, onClick, title, desc, price, icon }) {
  return (
    <button onClick={onClick} className={`rounded-3xl border p-5 text-left transition ${active ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-slate-950/35 hover:border-white/30"}`}>
      {icon && <Icon name={icon} className="mb-4 h-6 w-6 text-cyan-200" />}
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-400">{desc}</div>
      {price && <div className="mt-4 text-sm font-semibold text-cyan-100">{price}</div>}
    </button>
  );
}

function BuilderPanel({ title, children }) {
  return (
    <Card className="p-5">
      <h3 className="mb-5 text-xl font-semibold">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
    </Card>
  );
}

function Summary({ label, value, price, big }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
      <span className="text-slate-400">{label}</span>
      <span className={`text-right text-white ${big ? "text-xl font-semibold text-cyan-100" : ""}`}>
        {value}
        {price && (
          <>
            <br />
            <small className="text-slate-400">{price}</small>
          </>
        )}
      </span>
    </div>
  );
}

function TrustStrip({ t, compact = false }) {
  return (
    <div className={`mt-8 grid gap-3 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
      {t.trust.map((item) => (
        <div key={item} className="flex gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{item}
        </div>
      ))}
    </div>
  );
}

function InfoGrid({ section, icon = "check", numbered = false, amber = false }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} text={section.body} />
        <div className="grid gap-4 sm:grid-cols-2">
          {section.items.map(([h, p], index) => (
            <Card key={h} className="p-5">
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${amber ? "bg-amber-300 text-slate-950" : "bg-cyan-300/10 text-cyan-200"}`}>
                {numbered ? <span className="font-bold">{index + 1}</span> : <Icon name={icon} className="h-5 w-5" />}
              </div>
              <h3 className="text-lg font-semibold">{h}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{p}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
