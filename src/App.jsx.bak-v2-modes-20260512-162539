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
    moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    sliders: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="11" cy="18" r="2" /></>,
    phone: <path d="M21 15.5v3a2 2 0 0 1-2.2 2 18 18 0 0 1-8-2.8 17.5 17.5 0 0 1-5.5-5.5 18 18 0 0 1-2.8-8A2 2 0 0 1 4.5 2h3A2 2 0 0 1 9.5 3.7l.5 2.7a2 2 0 0 1-.6 1.8L8.2 9.4a14 14 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 2Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name] || paths.check}
    </svg>
  );
}

const formatHKD = (value) => `HK$${value.toLocaleString("en-HK")}`;

const content = {
  en: {
    nav: { home: "Home", scenarios: "Scenarios", solutions: "Solutions", estimate: "Estimate", contact: "Contact" },
    brandSub: "Scenario-first smart-home installation",
    buildEstimate: "Build Estimate",
    common: {
      whatsapp: "WhatsApp estimate",
      email: "Email estimate",
      live: "Live estimate",
      review: "Review estimate",
      noPayment: "No online payment. Final quote only after checking your home.",
      quoteNote: "Online prices are starting estimates only. Final quotation depends on wiring, device choice, Wi‑Fi coverage, installation difficulty, and site condition.",
    },
    trust: ["Installed and configured", "Final quote after home check", "Family-friendly controls", "Account handover explained"],
    home: {
      eyebrow: "Smart-home routines for Hong Kong flats",
      title: "Show your home what to do — then we install the system behind it.",
      body: "Boson Smart helps flat owners turn daily routines into practical smart-home setups: coming home, leaving home, sleeping, saving energy, and family safety.",
      primary: "Explore scenarios",
      secondary: "Build estimate",
      scenarioTitle: "Start from the life scenario, not the device.",
      scenarioBody: "Most people do not need to learn product names first. Choose what you want your home to do, then we explain the possible setup and package.",
      solutionsTitle: "From task to setup",
      solutionsBody: "Tell us the result you want: softer entry lighting, cooler living room, safer night movement, or fewer things left on. We translate that into a practical installation plan.",
    },
    scenariosPage: {
      eyebrow: "Scenario timelines",
      title: "Imagine the day. Then choose what your home should handle.",
      body: "Each routine shows what happens, why it helps, what may be installed, and which package usually fits. This is where customers can 代入 before thinking about devices.",
      choose: "Choose a routine",
      whatHappens: "What happens",
      whyHelps: "Why it helps",
      possibleSetup: "Possible setup",
      suggested: "Suggested package",
      cta: "Use this scenario in my estimate",
    },
    solutionsPage: {
      eyebrow: "Solutions",
      title: "I want my home to...",
      body: "This page connects everyday tasks to possible smart-home setups. You do not need to know the device name first. Start with the outcome.",
      task: "Customer task",
      setup: "Possible setup",
      check: "Things to check",
      package: "Usually fits",
    },
    estimatePage: {
      eyebrow: "Packages and estimate",
      title: "Choose a starting package, then add useful items.",
      body: "The estimate builder turns scenarios and tasks into a rough starting budget. Send it by WhatsApp so we can check what is practical for your flat.",
    },
    contactPage: {
      eyebrow: "Contact Boson Smart",
      title: "Send your estimate and check what is practical for your flat.",
      body: "Share your selected package, flat type, add-ons, and live estimate. We will review your home condition before confirming the next step.",
      detailsTitle: "A few details help us give better advice.",
      details: ["Flat type and approximate size", "Current status: lived-in, renovating, or new handover", "Main goal: lighting, comfort, energy saving, safety, or all", "Existing smart lock, Wi‑Fi mesh, smart lights, or voice assistant", "Photos of switch areas, entry door, curtain area, or router location if available"],
      nextTitle: "What happens after you contact us?",
      next: [["We review your estimate", "We check the selected package, flat type, and add-ons."], ["We ask for missing details", "If needed, we ask about wiring, Wi‑Fi, doors, curtains, or device preferences."], ["We confirm whether it is practical", "We explain what looks suitable, what may need checking, and what may require separate quotation."], ["We arrange the next step", "If the scope makes sense, we move toward assessment, quotation, and installation planning."]],
    },
    scenarioRoutines: [
      {
        id: "coming-home", label: "Coming Home", icon: "home", title: "After-work coming home", subtitle: "Make the flat feel ready before you fully step in.", package: "Comfort & Energy Package",
        steps: [
          ["18:30", "On the way home", "Living room can start pre-cooling if needed.", "The home feels ready instead of hot and dark.", "Smart AC control, schedule, presence trigger"],
          ["18:50", "Door opens", "Entry light turns on softly and living room scene starts.", "No walking into a dark flat.", "Smart switch, door sensor, welcome scene"],
          ["19:15", "Dinner mode", "Lighting becomes warmer and curtains can close if needed.", "The room feels calmer for dinner.", "Lighting preset, curtain motor option"],
          ["23:30", "Night path", "Low-level path lighting is ready for movement.", "Safer movement without bright lights.", "Motion sensor, low-level light scene"],
        ],
      },
      {
        id: "leaving-home", label: "Leaving Home", icon: "lock", title: "Leaving home routine", subtitle: "Reduce forgotten lights, air-con, and door/window uncertainty.", package: "Smart Home Starter",
        steps: [
          ["08:15", "Before leaving", "Selected lights and devices prepare to turn off.", "Less checking room by room.", "Away mode, smart switches"],
          ["08:20", "Door closes", "Away mode can run after you leave.", "The flat moves into energy-saving mode.", "Door sensor, automation rule"],
          ["08:25", "Reminder", "Door/window status can be checked for selected points.", "More confidence after leaving.", "Door/window sensors, phone notification"],
          ["Daytime", "Standby", "Selected loads stay off unless needed.", "Reduce unnecessary electricity use.", "Schedules, smart plugs, scene logic"],
        ],
      },
      {
        id: "sleep", label: "Sleep / Night", icon: "moon", title: "Sleep and night routine", subtitle: "Wind down smoothly and keep night movement safe.", package: "Comfort & Energy Package",
        steps: [
          ["22:30", "Wind down", "Lights dim and the room becomes warmer.", "Helps the home feel calmer.", "Lighting scene, dimming option"],
          ["23:00", "Bedroom ready", "Air-con routine and bedroom lights prepare for sleep.", "Less manual adjustment before bed.", "AC control, bedroom scene"],
          ["02:00", "Night movement", "Path light turns on softly when movement is detected.", "Useful for bathroom trips or elderly family.", "Motion sensor, low-level light"],
          ["Morning", "Wake up", "Selected lights can rise gently.", "A softer start to the day.", "Timed scene, curtain option"],
        ],
      },
      {
        id: "family-safety", label: "Family Safety", icon: "shield", title: "Family safety awareness", subtitle: "Know more about entry, movement, and selected safety events.", package: "Family Safety Package",
        steps: [
          ["Anytime", "Door activity", "Selected entry status can trigger phone alerts.", "More awareness when family members arrive or leave.", "Door sensor, smart lock option"],
          ["Evening", "Visitor arrives", "Video doorbell or entry camera can show who is there.", "Safer and more convenient visitor handling.", "Video doorbell, entry camera option"],
          ["Night", "Movement detected", "Soft path lighting supports movement.", "Safer for children, parents, or elderly family.", "Motion sensor, night light scene"],
          ["Away", "Selected alerts", "Important events can be sent to your phone.", "More confidence when not at home.", "Sensors, alert rules"],
        ],
      },
      {
        id: "energy", label: "Energy Saving", icon: "sun", title: "Comfort without waste", subtitle: "Use schedules, sensors, and scenes to reduce unnecessary runtime.", package: "Comfort & Energy Package",
        steps: [
          ["Morning", "Day starts", "Lights and air-con follow routine settings.", "Less manual control and fewer forgotten devices.", "Schedules, smart switches"],
          ["Afternoon", "Heat control", "Curtains can close to reduce heat if suitable.", "Helps reduce cooling pressure.", "Curtain motor, schedule"],
          ["Empty room", "Low activity", "Lights can respond to motion in selected zones.", "Avoid lights staying on unnecessarily.", "Motion sensor, smart lighting"],
          ["Away", "Energy mode", "Selected devices turn off or stay on low-use settings.", "A practical daily saving habit.", "Away mode, smart plug or relay option"],
        ],
      },
      {
        id: "guest", label: "Guest / Weekend", icon: "users", title: "Weekend and guest mode", subtitle: "Make the home easier for guests without handing them your whole app.", package: "Smart Home Starter",
        steps: [
          ["Before guests arrive", "Welcome scene", "Living room lighting becomes brighter and warmer.", "The flat feels ready for people.", "Lighting preset"],
          ["Dinner", "Dining scene", "Lighting and curtains can move into dinner mode.", "A nicer atmosphere without manual setup.", "Scene button, curtain option"],
          ["Movie", "Movie mode", "Lights dim and selected devices prepare.", "Simple entertainment routine.", "Lighting scene, remote button"],
          ["Guest use", "Simple controls", "Buttons or switches remain available.", "Guests do not need your app.", "Wall switch, scene button"],
        ],
      },
    ],
    solutionTasks: [
      ["Lights turn on automatically when I enter.", "Motion sensor + smart switch or selected lighting scene.", "Neutral wire, switch type, sensor placement, family preference.", "Starter / Comfort"],
      ["Air-con prepares the living room before I arrive.", "Smart AC control + schedule or routine trigger.", "AC model, remote compatibility, Wi‑Fi coverage, usage habit.", "Comfort & Energy"],
      ["Curtains close in the evening.", "Curtain motor + timed scene or button control.", "Curtain rail type, power point, curtain weight, installation access.", "Comfort & Energy"],
      ["I know if someone opens a door or window.", "Door/window sensor + phone notification.", "Mounting position, notification preference, privacy expectation.", "Family Safety"],
      ["Night walking is safer.", "Motion sensor + low-level path lighting.", "Light location, brightness, false trigger risk, family routine.", "Safety / Comfort"],
      ["Family can use it without only relying on an app.", "Wall switch, scene button, remote, or simple manual control.", "Existing switches, family habits, placement of controls.", "All packages"],
      ["I stop leaving selected lights or devices on.", "Away mode + smart switch or plug control.", "Which loads are safe to control, schedule, manual override.", "Starter / Comfort"],
      ["I want a simple smart door entry setup.", "Smart lock option, video doorbell, or entry camera.", "Door type, lock model, power, privacy, access permissions.", "Family Safety"],
    ],
    packages: [
      { id: "starter", name: "Smart Home Starter", subtitle: "A simple first step into smart-home living.", icon: "home", tag: "Best first step", basePrice: 3800, description: "For flats that want easier lighting control and simple home/away settings without starting a large project.", includes: ["Smart lighting control for selected areas", "Home / away preset settings", "App setup and basic configuration", "Simple switch or remote-control options", "Basic handover training"], assumption: "Starting price assumes one core area, basic compatible smart-control setup, app configuration, testing, and handover. Major rewiring and premium brand upgrades are quoted separately." },
      { id: "comfort", name: "Comfort & Energy Package", subtitle: "For a home that feels ready when you need it.", icon: "sun", tag: "Most balanced", basePrice: 8800, description: "For daily comfort: lighting presets, air-con routines, curtain options, motion-based lighting, and energy-saving settings.", includes: ["Lighting presets for living, dining, work, and sleep", "Air-con or climate schedule setup", "Curtain or blind automation option", "Motion lighting for selected zones", "Energy-saving settings for daily routines"], assumption: "Starting price assumes key daily areas such as living room and entry, with practical comfort settings. Extra rooms, curtain motors, and complex wiring are quoted separately." },
      { id: "safety", name: "Family Safety Package", subtitle: "Know what is happening at home when it matters.", icon: "shield", tag: "Best for families", basePrice: 7800, description: "For families who want better entry awareness, door/window status, night movement support, and selected phone alerts.", includes: ["Smart door lock or entry setup option", "Door / window sensors for key areas", "Video doorbell or entry camera option", "Night safety lighting", "Phone alerts for selected events"], assumption: "Starting price assumes selected entry and safety points. Camera placement, smart lock model, extra sensors, and door modifications are confirmed before quotation." },
    ],
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
  },
  zh: {
    nav: { home: "主頁", scenarios: "情境", solutions: "方案說明", estimate: "估算", contact: "聯絡" },
    brandSub: "由生活情境開始的智能家居安裝",
    buildEstimate: "建立估算",
    common: {
      whatsapp: "WhatsApp 傳送估算",
      email: "電郵傳送估算",
      live: "即時估算",
      review: "調整估算",
      noPayment: "網站不會直接收款。最終報價會在了解單位後確認。",
      quoteNote: "網上價錢只作初步估算。最終報價會按線路、設備選擇、Wi‑Fi 覆蓋、安裝難度及現場情況確認。",
    },
    trust: ["包括安裝及設定", "上門了解後確認報價", "保留家人易用控制", "交付時說明帳戶權限"],
    home: {
      eyebrow: "為香港住宅而設的智能家居情境",
      title: "先想像你想屋企做到甚麼，再由我們安裝背後系統。",
      body: "Boson Smart 幫住戶將日常生活變成實用智能家居設定：回家、離家、睡眠、節能及家庭安全。",
      primary: "查看生活情境",
      secondary: "建立估算",
      scenarioTitle: "先由生活情境開始，不是先由設備開始。",
      scenarioBody: "大部分人不需要先學產品名稱。你只需要選擇想屋企做到甚麼，我們再解釋可能需要的設定及合適起步方案。",
      solutionsTitle: "由需求去到設定",
      solutionsBody: "告訴我們你想要的結果：玄關柔和亮燈、客廳預冷、夜間安全路徑、或減少忘記關燈關冷氣。我們會轉化成實際安裝方案。",
    },
    scenariosPage: {
      eyebrow: "生活情境時間線",
      title: "先代入一天生活，再選擇你想屋企幫你處理甚麼。",
      body: "每個情境會展示會發生甚麼、為甚麼有用、可能需要甚麼設定，以及通常適合哪個方案。",
      choose: "選擇情境",
      whatHappens: "會發生甚麼",
      whyHelps: "有甚麼幫助",
      possibleSetup: "可能設定",
      suggested: "建議方案",
      cta: "用這個情境建立估算",
    },
    solutionsPage: {
      eyebrow: "方案說明",
      title: "我想屋企可以……",
      body: "這頁把日常需求連接到可能的智能家居設定。你不需要先知道設備名稱，只需要由想達到的效果開始。",
      task: "客戶需求",
      setup: "可能設定",
      check: "需要確認",
      package: "通常適合",
    },
    estimatePage: {
      eyebrow: "方案與估算",
      title: "選擇起步方案，再加選實用項目。",
      body: "估算組合器將情境及需求轉化成初步預算。你可以用 WhatsApp 傳送估算，讓我們確認你的單位適合怎樣做。",
    },
    contactPage: {
      eyebrow: "聯絡 Boson Smart",
      title: "傳送估算，了解你的單位適合怎樣開始。",
      body: "分享你已選的方案、單位類型、升級項目及即時估算。我們會先了解你的單位情況，再建議下一步。",
      detailsTitle: "幾項資料可以幫我們更準確建議。",
      details: ["單位類型及大約面積", "現時狀態：已入住、裝修中或新樓交收", "主要目標：燈光、舒適、節能、安全，還是全部都想了解", "現有智能門鎖、Wi‑Fi mesh、智能燈或語音助理", "如方便，可提供開關位、入門門身、窗簾位或路由器位置照片"],
      nextTitle: "聯絡後會發生甚麼？",
      next: [["我們查看你的估算", "先了解已選方案、單位類型及升級項目。"], ["補充缺少資料", "如有需要，會再了解線路、Wi‑Fi、門身、窗簾或設備偏好。"], ["確認是否可行", "說明哪些項目合適，哪些需要現場確認，哪些可能另行報價。"], ["安排下一步", "如果範圍合理，再進入評估、報價及安裝安排。"]],
    },
    scenarioRoutines: [
      {
        id: "coming-home", label: "回家", icon: "home", title: "下班回家情境", subtitle: "未完全入屋，屋企已經準備好。", package: "Comfort & Energy Package",
        steps: [
          ["18:30", "回家途中", "如有需要，客廳可以先開始預冷。", "不是一入屋才面對又熱又暗的空間。", "智能冷氣控制、時間設定、到家觸發"],
          ["18:50", "開門入屋", "玄關燈柔和亮起，客廳情境開始。", "不需要摸黑入屋。", "智能開關、門磁感應、回家情境"],
          ["19:15", "晚飯時間", "燈光變暖，窗簾可按需要關上。", "飯廳及客廳感覺更放鬆。", "燈光模式、窗簾摩打選配"],
          ["23:30", "夜間路徑", "有人走動時，低亮度路徑燈準備好。", "夜晚起身更安全，不會被強光刺眼。", "人體感應器、低亮度燈光情境"],
        ],
      },
      {
        id: "leaving-home", label: "離家", icon: "lock", title: "離家情境", subtitle: "減少忘記關燈、冷氣及門窗狀態的不安。", package: "Smart Home Starter",
        steps: [
          ["08:15", "準備出門", "指定燈光及設備準備關閉。", "不用逐間房檢查。", "離家模式、智能開關"],
          ["08:20", "關門後", "離家模式可自動執行。", "單位轉入較省電狀態。", "門磁感應、自動化規則"],
          ["08:25", "提醒", "可查看指定門窗狀態。", "離家後更安心。", "門窗感應器、手機通知"],
          ["日間", "待機狀態", "指定設備保持關閉或低耗電設定。", "減少不必要用電。", "時間設定、智能插座或開關"],
        ],
      },
      {
        id: "sleep", label: "睡眠 / 夜間", icon: "moon", title: "睡眠及夜間情境", subtitle: "協助放鬆入睡，同時令夜間走動更安全。", package: "Comfort & Energy Package",
        steps: [
          ["22:30", "放鬆時間", "燈光變暗變暖。", "屋企氣氛更平靜。", "燈光情境、調光選配"],
          ["23:00", "睡房準備", "冷氣及睡房燈光準備睡眠設定。", "睡前少一點手動調整。", "冷氣控制、睡房情境"],
          ["02:00", "夜間走動", "偵測到走動時，低亮度路徑燈柔和亮起。", "適合半夜去洗手間或照顧長者小朋友。", "人體感應器、夜間低亮度燈"],
          ["早上", "起床", "指定燈光可以柔和亮起。", "早上開始得更自然。", "時間情境、窗簾選配"],
        ],
      },
      {
        id: "family-safety", label: "家庭安全", icon: "shield", title: "家庭安全提醒", subtitle: "掌握出入口、走動及指定安全事件。", package: "Family Safety Package",
        steps: [
          ["任何時間", "大門活動", "指定出入口狀態可觸發手機提示。", "更清楚家人出入狀態。", "門磁感應、智能門鎖選配"],
          ["傍晚", "訪客到達", "視像門鈴或入口鏡頭可以查看來訪者。", "處理訪客更方便及安心。", "視像門鈴、入口鏡頭選配"],
          ["夜間", "偵測走動", "柔和路徑燈支援夜間活動。", "對小朋友、父母或長者更安全。", "人體感應器、夜間燈光情境"],
          ["離家", "指定提醒", "重要事件可推送至手機。", "不在家時更有掌握。", "感應器、通知規則"],
        ],
      },
      {
        id: "energy", label: "節能", icon: "sun", title: "舒適但不浪費", subtitle: "用時間、感應及情境減少不必要長開。", package: "Comfort & Energy Package",
        steps: [
          ["早上", "一天開始", "燈光及冷氣按日常設定運作。", "少一點手動操作，少一點忘記關。", "時間設定、智能開關"],
          ["下午", "減少熱力", "合適情況下，窗簾可定時關上減少熱力。", "有助減輕冷氣負擔。", "窗簾摩打、時間設定"],
          ["無人區域", "低活動", "指定區域燈光可按人體感應控制。", "避免燈長開。", "人體感應、智能燈光"],
          ["離家", "節能模式", "指定設備關閉或轉低耗電設定。", "養成實用節能習慣。", "離家模式、智能插座或繼電器選配"],
        ],
      },
      {
        id: "guest", label: "週末 / 客人", icon: "users", title: "週末及客人情境", subtitle: "讓家更易招待客人，又不需要把 App 交給別人。", package: "Smart Home Starter",
        steps: [
          ["客人到前", "歡迎情境", "客廳燈光變得較明亮及溫暖。", "屋企更有招待感。", "燈光預設"],
          ["晚飯", "用餐情境", "燈光及窗簾可切換至用餐模式。", "氣氛更好，不需要手動逐項設定。", "情境按鈕、窗簾選配"],
          ["睇戲", "電影模式", "燈光調暗，指定設備準備。", "娛樂情境更簡單。", "燈光情境、遙控按鈕"],
          ["客人使用", "簡單控制", "仍保留按鈕或牆掣等簡單控制。", "客人不需要使用你的 App。", "牆掣、情境按鈕"],
        ],
      },
    ],
    solutionTasks: [
      ["入屋時自動開燈。", "人體感應器 + 智能開關或指定燈光情境。", "零線、開關類型、感應器位置、家人習慣。", "Starter / Comfort"],
      ["回家前客廳先調節溫度。", "智能冷氣控制 + 時間設定或情境觸發。", "冷氣型號、遙控兼容、Wi‑Fi 覆蓋、使用習慣。", "Comfort & Energy"],
      ["黃昏時窗簾自動關上。", "窗簾摩打 + 時間情境或按鈕控制。", "窗簾路軌、電源位、窗簾重量、安裝空間。", "Comfort & Energy"],
      ["想知道門窗有沒有被打開。", "門窗感應器 + 手機通知。", "安裝位置、通知偏好、私隱期望。", "Family Safety"],
      ["夜晚走動更安全。", "人體感應器 + 低亮度路徑燈。", "燈光位置、亮度、誤觸發機會、家庭習慣。", "Safety / Comfort"],
      ["家人不想只靠 App 控制。", "牆掣、情境按鈕、遙控或簡單手動控制。", "現有開關、家人習慣、控制位置。", "All packages"],
      ["減少忘記關燈或設備。", "離家模式 + 智能開關或插座控制。", "哪些設備適合控制、時間設定、手動覆蓋。", "Starter / Comfort"],
      ["想有簡單智能門口設定。", "智能門鎖選配、視像門鈴或入口鏡頭。", "門身類型、鎖型號、電源、私隱、權限。", "Family Safety"],
    ],
    packages: [
      { id: "starter", name: "Smart Home Starter", subtitle: "智能家居的簡單入門第一步。", icon: "home", tag: "最適合首次使用", basePrice: 3800, description: "適合想先改善燈光控制、回家及離家設定，但暫時不想做大型工程的單位。", includes: ["指定區域智能燈光控制", "回家 / 離家預設模式", "App 設定及基本配置", "簡單牆掣或遙控控制選項", "基本交付教學"], assumption: "起價假設為一個核心區域、基本兼容智能控制、App 設定、測試及交付。大型改線及高端品牌升級需另行報價。" },
      { id: "comfort", name: "Comfort & Energy Package", subtitle: "令屋企在你需要時已經準備好。", icon: "sun", tag: "最平衡選擇", basePrice: 8800, description: "為日常舒適而設：燈光模式、冷氣時間設定、窗簾選配、感應燈光及節能設定。", includes: ["客廳、飯廳、工作及睡眠燈光模式", "冷氣或溫度時間設定", "窗簾或百葉簾自動化選配", "指定區域人體感應燈光", "日常節能設定"], assumption: "起價假設為客廳及玄關等主要生活區域，並包含實用舒適設定。額外房間、窗簾摩打及複雜線路需另行報價。" },
      { id: "safety", name: "Family Safety Package", subtitle: "在重要時刻，清楚知道家中狀態。", icon: "shield", tag: "最適合家庭", basePrice: 7800, description: "適合想掌握出入口、門窗狀態、夜間走動及手機提醒的家庭。", includes: ["智能門鎖或出入口設定選配", "主要門窗感應器", "視像門鈴或入口鏡頭選配", "夜間安全燈光", "指定事件手機提醒"], assumption: "起價假設為指定出入口及安全監察點。鏡頭位置、智能門鎖型號、額外感應器及門身改動會在報價前確認。" },
    ],
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
  },
};

const pages = ["home", "scenarios", "solutions", "estimate", "contact"];
function getPage() {
  const hash = window.location.hash.replace("#", "").split("?")[0].split("/")[0];
  return pages.includes(hash) ? hash : "home";
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState(getPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRoutine, setActiveRoutine] = useState("coming-home");
  const [selected, setSelected] = useState("comfort");
  const [apartment, setApartment] = useState("twoBed");
  const [addons, setAddons] = useState(["curtain"]);
  const [goal, setGoal] = useState("comfort");
  const [stage, setStage] = useState("livedIn");
  const [scope, setScope] = useState("core");

  const t = content[language];

  React.useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const selectedPackage = t.packages.find((item) => item.id === selected) || t.packages[1];
  const selectedApartment = t.apartments.find((item) => item.id === apartment) || t.apartments[1];
  const activeAddons = t.addons.filter((item) => addons.includes(item.id));
  const total = selectedPackage.basePrice + selectedApartment.adjustment + activeAddons.reduce((sum, item) => sum + item.price, 0);

  const recommendedId = useMemo(() => {
    if (goal === "safety") return "safety";
    if (goal === "comfort" || goal === "energy" || stage === "renovating" || scope === "multi") return "comfort";
    return "starter";
  }, [goal, stage, scope]);

  const enquiry = [
    language === "zh" ? "你好，我想查詢以下智能家居估算：" : "Hello, I would like to check this smart-home estimate:",
    "",
    `${language === "zh" ? "方案" : "Package"}: ${selectedPackage.name}`,
    `${language === "zh" ? "單位類型" : "Flat type"}: ${selectedApartment.label}`,
    `${language === "zh" ? "已選升級項目" : "Selected add-ons"}: ${activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : "-"}`,
    `${language === "zh" ? "即時估算" : "Live estimate"}: ${formatHKD(total)}`,
  ].join("\n");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Boson Smart Estimate")}&body=${encodeURIComponent(enquiry)}`;

  function go(nextPage, anchor) {
    setMenuOpen(false);
    setPage(nextPage);
    const nextHash = `#${nextPage}`;
    if (window.location.hash !== nextHash) window.history.pushState(null, "", nextHash);
    setTimeout(() => {
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  }

  function toggleAddon(id) {
    setAddons((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  const shared = {
    t, language, page, go, activeRoutine, setActiveRoutine, selected, setSelected, apartment, setApartment,
    addons, toggleAddon, selectedPackage, selectedApartment, activeAddons, total, recommendedId, goal, setGoal,
    stage, setStage, scope, setScope, whatsappHref, mailtoHref,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <BackgroundGlow />
      <Header {...shared} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setLanguage={setLanguage} />
      <main className="relative z-10">
        {page === "home" && <HomePage {...shared} />}
        {page === "scenarios" && <ScenariosPage {...shared} />}
        {page === "solutions" && <SolutionsPage {...shared} />}
        {page === "estimate" && <EstimatePage {...shared} />}
        {page === "contact" && <ContactPage {...shared} />}
      </main>
      <StickyEstimate {...shared} />
      <Footer {...shared} />
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
  const links = [["home", t.nav.home], ["scenarios", t.nav.scenarios], ["solutions", t.nav.solutions], ["estimate", t.nav.estimate], ["contact", t.nav.contact]];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 lg:px-6">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20"><Icon name="bolt" className="h-5 w-5" /></span>
          <span><span className="block text-base font-semibold tracking-tight">Boson Smart</span><span className="hidden text-xs text-slate-400 sm:block">{t.brandSub}</span></span>
        </button>
        <nav className="ml-auto hidden items-center gap-6 text-sm text-slate-300 md:flex" aria-label="Main navigation">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }} className={`transition hover:text-white ${page === id ? "text-white font-semibold" : ""}`}>{label}</a>)}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-bold text-slate-300">
            <button className={`rounded-full px-3 py-1.5 transition ${language === "en" ? "bg-cyan-300 text-slate-950" : "hover:bg-white/10"}`} onClick={() => setLanguage("en")}>EN</button>
            <button className={`rounded-full px-3 py-1.5 transition ${language === "zh" ? "bg-cyan-300 text-slate-950" : "hover:bg-white/10"}`} onClick={() => setLanguage("zh")}>繁中</button>
          </div>
          <button onClick={() => go("estimate")} className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 md:inline-flex">{t.buildEstimate}</button>
          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle menu">
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" className="grid gap-3 border-t border-white/10 px-4 py-4 text-sm text-slate-300 md:hidden">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a>)}
        </nav>
      )}
    </header>
  );
}

function HomePage(props) {
  const { t, go } = props;
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:px-6">
        <div className="flex flex-col justify-center">
          <Eyebrow icon="bolt">{t.home.eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{t.home.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{t.home.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => go("scenarios")} className="btn-primary">{t.home.primary}<Icon name="arrow" className="h-4 w-4" /></button>
            <button onClick={() => go("estimate")} className="btn-secondary">{t.home.secondary}</button>
          </div>
          <TrustStrip t={t} />
        </div>
        <FeaturedTimeline {...props} />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <SectionHeader eyebrow={t.scenariosPage.eyebrow} title={t.home.scenarioTitle} text={t.home.scenarioBody} />
        <div className="grid gap-4 md:grid-cols-3">
          {t.scenarioRoutines.slice(0, 6).map((routine) => <RoutineCard key={routine.id} routine={routine} onClick={() => { props.setActiveRoutine(routine.id); go("scenarios"); }} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <Card className="grid gap-6 p-6 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div><SectionHeader eyebrow={t.solutionsPage.eyebrow} title={t.home.solutionsTitle} text={t.home.solutionsBody} noMargin /></div>
          <button onClick={() => go("solutions")} className="btn-primary w-full justify-center">{t.nav.solutions}<Icon name="arrow" className="h-4 w-4" /></button>
        </Card>
      </section>

      <PackagesPreview {...props} />
      <FinalCta {...props} />
    </>
  );
}

function FeaturedTimeline({ t, activeRoutine, setActiveRoutine }) {
  const routine = t.scenarioRoutines.find((r) => r.id === activeRoutine) || t.scenarioRoutines[0];
  return (
    <Card className="p-4">
      <div className="rounded-[1.25rem] bg-slate-900 p-4">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">{t.scenariosPage.choose}</p>
            <h2 className="mt-1 text-2xl font-semibold">{routine.title}</h2>
          </div>
          <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">{routine.package}</span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {t.scenarioRoutines.slice(0, 6).map((item) => (
            <button key={item.id} onClick={() => setActiveRoutine(item.id)} className={`rounded-2xl border px-3 py-2 text-xs font-semibold transition ${item.id === routine.id ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"}`}>{item.label}</button>
          ))}
        </div>
        <Timeline routine={routine} compact />
      </div>
    </Card>
  );
}

function ScenariosPage(props) {
  const { t, activeRoutine, setActiveRoutine, go } = props;
  const routine = t.scenarioRoutines.find((r) => r.id === activeRoutine) || t.scenarioRoutines[0];

  return (
    <>
      <PageHero eyebrow={t.scenariosPage.eyebrow} title={t.scenariosPage.title} body={t.scenariosPage.body} primary={t.scenariosPage.cta} secondary={t.nav.solutions} onPrimary={() => go("estimate")} onSecondary={() => go("solutions")} />
      <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.35fr_1fr]">
          <Card className="h-fit p-4 lg:sticky lg:top-24">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">{t.scenariosPage.choose}</p>
            <div className="grid gap-2">
              {t.scenarioRoutines.map((item) => (
                <button key={item.id} onClick={() => setActiveRoutine(item.id)} className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${item.id === routine.id ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-slate-950/35 hover:bg-white/10"}`}>
                  <Icon name={item.icon} className="h-5 w-5 text-cyan-200" />
                  <span className="font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </Card>
          <div>
            <Card className="mb-6 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Eyebrow icon={routine.icon}>{routine.label}</Eyebrow>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{routine.title}</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-slate-300">{routine.subtitle}</p>
                </div>
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">
                  {t.scenariosPage.suggested}<br /><strong className="text-white">{routine.package}</strong>
                </div>
              </div>
            </Card>
            <Timeline routine={routine} labels={t.scenariosPage} />
            <button onClick={() => go("estimate")} className="btn-primary mt-6">{t.scenariosPage.cta}<Icon name="arrow" className="h-4 w-4" /></button>
          </div>
        </div>
      </section>
    </>
  );
}

function Timeline({ routine, labels, compact = false }) {
  return (
    <div className="relative grid gap-4">
      {routine.steps.map(([time, title, happens, helps, setup], index) => (
        <div key={`${time}-${title}`} className="relative grid gap-4 rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-4 md:grid-cols-[7rem_1fr]">
          <div className="flex items-center gap-3 md:block">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 font-bold text-slate-950">{index + 1}</span>
            <p className="font-semibold text-cyan-100 md:mt-3">{time}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className={`mt-4 grid gap-3 ${compact ? "" : "md:grid-cols-3"}`}>
              <InfoMini label={labels?.whatHappens || "What happens"} text={happens} />
              <InfoMini label={labels?.whyHelps || "Why it helps"} text={helps} amber />
              <InfoMini label={labels?.possibleSetup || "Possible setup"} text={setup} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SolutionsPage({ t, go }) {
  return (
    <>
      <PageHero eyebrow={t.solutionsPage.eyebrow} title={t.solutionsPage.title} body={t.solutionsPage.body} primary={t.buildEstimate} secondary={t.nav.scenarios} onPrimary={() => go("estimate")} onSecondary={() => go("scenarios")} />
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-4">
          {t.solutionTasks.map(([task, setup, check, pkg], index) => (
            <Card key={task} className="grid gap-4 p-5 lg:grid-cols-[0.8fr_1fr_1fr_0.5fr] lg:items-start">
              <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{String(index + 1).padStart(2, "0")} · {t.solutionsPage.task}</p><h3 className="text-xl font-semibold">{task}</h3></div>
              <InfoMini label={t.solutionsPage.setup} text={setup} />
              <InfoMini label={t.solutionsPage.check} text={check} amber />
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100"><span className="text-slate-300">{t.solutionsPage.package}</span><br /><strong className="text-white">{pkg}</strong></div>
            </Card>
          ))}
        </div>
      </section>
      <FinalCta t={t} whatsappHref={`https://wa.me/${WHATSAPP_NUMBER}`} mailtoHref={`mailto:${CONTACT_EMAIL}`} />
    </>
  );
}

function EstimatePage(props) {
  const { t } = props;
  return (
    <>
      <PageHero eyebrow={t.estimatePage.eyebrow} title={t.estimatePage.title} body={t.estimatePage.body} primary={t.common.whatsapp} secondary={t.nav.scenarios} onPrimary={() => document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })} onSecondary={() => props.go("scenarios")} />
      <PackagesPreview {...props} full />
      <BuilderSection {...props} />
      <FinalCta {...props} />
    </>
  );
}

function ContactPage(props) {
  const { t, whatsappHref, mailtoHref, go } = props;
  return (
    <>
      <PageHero eyebrow={t.contactPage.eyebrow} title={t.contactPage.title} body={t.contactPage.body} primary={t.common.whatsapp} secondary={t.common.email} onPrimary={() => window.open(whatsappHref, "_blank", "noreferrer")} onSecondary={() => window.location.href = mailtoHref} />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow={t.nav.contact} title={t.contactPage.detailsTitle} />
          <Card className="p-6"><div className="grid gap-3 sm:grid-cols-2">{t.contactPage.details.map((item) => <Bullet key={item}>{item}</Bullet>)}</div></Card>
        </div>
      </section>
      <InfoGrid eyebrow={t.nav.contact} title={t.contactPage.nextTitle} items={t.contactPage.next} numbered />
      <FinalCta {...props} />
      <section className="mx-auto max-w-6xl px-4 pb-32 lg:px-6">
        <button onClick={() => go("estimate")} className="btn-primary w-full justify-center">{t.buildEstimate}<Icon name="arrow" className="h-4 w-4" /></button>
      </section>
    </>
  );
}

function PackagesPreview(props) {
  const { t, selected, setSelected, language, full = false } = props;
  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <SectionHeader eyebrow={t.estimatePage.eyebrow} title={t.estimatePage.title} text={t.estimatePage.body} noMargin />
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">{t.common.quoteNote}</div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {t.packages.map((pkg) => (
          <button key={pkg.id} onClick={() => setSelected(pkg.id)} className={`group rounded-[1.6rem] border p-5 text-left transition ${selected === pkg.id ? "border-cyan-300/70 bg-cyan-300/10" : "border-white/10 bg-white/[0.045] hover:border-white/25"}`}>
            <div className="mb-5 flex items-start justify-between gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200"><Icon name={pkg.icon} className="h-6 w-6" /></span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{pkg.tag}</span></div>
            <h3 className="text-2xl font-semibold">{pkg.name}</h3>
            <p className="mt-2 text-sm text-cyan-100">{pkg.subtitle}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{pkg.description}</p>
            <p className="mt-5 text-2xl font-semibold">{language === "zh" ? `${formatHKD(pkg.basePrice)} 起` : `From ${formatHKD(pkg.basePrice)}`}</p>
            {(full || selected === pkg.id) && <><div className="mt-5 grid gap-3">{pkg.includes.map((item) => <div key={item} className="flex gap-2 text-sm leading-6 text-slate-300"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}</div><p className="mt-5 rounded-2xl bg-slate-950/35 p-3 text-xs leading-5 text-slate-400">{pkg.assumption}</p></>}
          </button>
        ))}
      </div>
    </section>
  );
}

function BuilderSection({ t, selected, setSelected, apartment, setApartment, addons, toggleAddon, selectedPackage, selectedApartment, activeAddons, total, whatsappHref, mailtoHref }) {
  return (
    <section id="builder" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <SectionHeader eyebrow={t.buildEstimate} title={t.estimatePage.title} text={t.estimatePage.body} />
      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="grid gap-5">
          <BuilderPanel title={t.nav.estimate}>{t.packages.map((pkg) => <Choice key={pkg.id} active={selected === pkg.id} onClick={() => setSelected(pkg.id)} title={pkg.name} desc={pkg.subtitle} price={formatHKD(pkg.basePrice)} icon={pkg.icon} />)}</BuilderPanel>
          <BuilderPanel title={t.common.review}>{t.apartments.map((item) => <Choice key={item.id} active={apartment === item.id} onClick={() => setApartment(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.adjustment)}`} />)}</BuilderPanel>
          <BuilderPanel title={t.solutionsPage.setup}>{t.addons.map((item) => <Choice key={item.id} active={addons.includes(item.id)} onClick={() => toggleAddon(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.price)}`} />)}</BuilderPanel>
        </div>
        <aside className="sticky top-24 rounded-[1.6rem] border border-cyan-300/30 bg-slate-900/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{t.common.live}</p><p className="mt-2 text-3xl font-semibold">{formatHKD(total)}</p>
          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm">
            <Summary label={t.solutionsPage.package} value={selectedPackage.name} price={formatHKD(selectedPackage.basePrice)} />
            <Summary label={t.contactPage.details[0]} value={selectedApartment.label} price={`+${formatHKD(selectedApartment.adjustment)}`} />
            <div><p className="mb-2 text-slate-400">{t.solutionsPage.setup}</p>{activeAddons.length ? activeAddons.map((item) => <div key={item.id} className="mb-2 flex justify-between gap-3 rounded-2xl bg-white/[0.04] px-3 py-2"><span>{item.label}</span><span className="text-cyan-100">+{formatHKD(item.price)}</span></div>) : <p className="rounded-2xl bg-white/[0.04] px-3 py-2 text-slate-400">-</p>}</div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-400">{t.common.quoteNote}</p>
          <div className="mt-5 grid gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary justify-center"><Icon name="phone" className="h-4 w-4" />{t.common.whatsapp}</a>
            <a href={mailtoHref} className="btn-secondary justify-center">{t.common.email}<Icon name="arrow" className="h-4 w-4" /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FinalCta({ t, whatsappHref, mailtoHref }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 pb-32 lg:px-6 lg:pb-16">
      <div className="rounded-[1.8rem] bg-gradient-to-br from-cyan-300 to-amber-300 p-6 text-slate-950 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div><p className="mb-3 inline-flex rounded-full bg-slate-950/10 px-3 py-1 text-sm font-bold">{t.contactPage.eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.contactPage.title}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-900">{t.contactPage.body}</p><p className="mt-4 text-sm font-semibold">{t.common.noPayment}</p></div>
          <div className="grid gap-3"><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"><Icon name="phone" className="h-4 w-4" />{t.common.whatsapp}</a><a href={mailtoHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/20 px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-950/10">{t.common.email}<Icon name="arrow" className="h-4 w-4" /></a></div>
        </div>
      </div>
    </section>
  );
}

function StickyEstimate({ t, total, whatsappHref, go }) {
  return (
    <>
      <div className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl border border-white/15 bg-slate-950/88 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden">
        <button onClick={() => go("estimate", "builder")} className="mb-2 grid w-full grid-cols-[auto_1fr] items-center gap-3 rounded-xl bg-cyan-300 px-4 py-3 text-left text-slate-950"><span className="text-xs font-black uppercase tracking-wider opacity-75">{t.common.live}</span><strong className="justify-self-end text-lg">{formatHKD(total)}</strong></button>
        <div className="grid grid-cols-2 gap-2"><button onClick={() => go("estimate", "builder")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-semibold">{t.common.review}</button><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold"><Icon name="phone" className="h-4 w-4" />WhatsApp</a></div>
      </div>
      <div className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-2xl border border-white/15 bg-slate-950/84 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:flex"><button onClick={() => go("estimate", "builder")} className="grid rounded-xl bg-cyan-300/10 px-4 py-2 text-left"><span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.common.live}</span><strong className="text-cyan-100">{formatHKD(total)}</strong></button><button onClick={() => go("estimate", "builder")} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">{t.common.review}</button><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950"><Icon name="phone" className="h-4 w-4" />WhatsApp</a></div>
    </>
  );
}

function Footer({ t, go }) {
  return <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-sm text-slate-400"><div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between"><p>© 2026 Boson Smart. {t.brandSub}</p><div className="flex gap-4">{Object.entries(t.nav).slice(0, 4).map(([id, label]) => <button key={id} onClick={() => go(id)} className="hover:text-white">{label}</button>)}</div></div></footer>;
}

function SectionHeader({ eyebrow, title, text, noMargin = false }) {
  return <div className={`${noMargin ? "" : "mb-10"} max-w-3xl`}><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>{text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}</div>;
}
function PageHero({ eyebrow, title, body, primary, secondary, onPrimary, onSecondary }) {
  return <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 lg:px-6"><Eyebrow icon="bolt">{eyebrow}</Eyebrow><h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{body}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={onPrimary} className="btn-primary">{primary}<Icon name="arrow" className="h-4 w-4" /></button><button onClick={onSecondary} className="btn-secondary">{secondary}</button></div></section>;
}
function Eyebrow({ icon, children }) { return <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"><Icon name={icon} className="h-4 w-4" />{children}</p>; }
function Card({ children, className = "" }) { return <div className={`rounded-[1.6rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/10 ${className}`}>{children}</div>; }
function InfoMini({ label, text, amber = false }) { return <div className={`rounded-2xl border p-4 text-sm leading-6 ${amber ? "border-amber-300/20 bg-amber-300/10 text-amber-50" : "border-white/10 bg-white/[0.04] text-slate-300"}`}><p className={`mb-1 text-xs font-bold uppercase tracking-[0.16em] ${amber ? "text-amber-200" : "text-cyan-200"}`}>{label}</p>{text}</div>; }
function RoutineCard({ routine, onClick }) { return <button onClick={onClick} className="group rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"><Icon name={routine.icon} className="mb-5 h-7 w-7 text-cyan-200" /><h3 className="text-xl font-semibold">{routine.label}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{routine.subtitle}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">{routine.package}<Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span></button>; }
function Bullet({ children, warn = false }) { return <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300"><Icon name={warn ? "shield" : "check"} className={`mt-1 h-4 w-4 shrink-0 ${warn ? "text-amber-300" : "text-cyan-300"}`} /><span>{children}</span></div>; }
function Choice({ active, onClick, title, desc, price, icon }) { return <button onClick={onClick} className={`rounded-3xl border p-5 text-left transition ${active ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-slate-950/35 hover:border-white/30"}`}>{icon && <Icon name={icon} className="mb-4 h-6 w-6 text-cyan-200" />}<div className="font-semibold text-white">{title}</div><div className="mt-2 text-sm leading-6 text-slate-400">{desc}</div>{price && <div className="mt-4 text-sm font-semibold text-cyan-100">{price}</div>}</button>; }
function BuilderPanel({ title, children }) { return <Card className="p-5"><h3 className="mb-5 text-xl font-semibold">{title}</h3><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div></Card>; }
function Summary({ label, value, price }) { return <div className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"><span className="text-slate-400">{label}</span><span className="text-right text-white">{value}{price && <><br /><small className="text-slate-400">{price}</small></>}</span></div>; }
function TrustStrip({ t }) { return <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{t.trust.map((item) => <div key={item} className="flex gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}</div>; }
function InfoGrid({ eyebrow, title, items, numbered = false }) { return <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"><SectionHeader eyebrow={eyebrow} title={title} /><div className="grid gap-4 sm:grid-cols-2">{items.map(([h, p], index) => <Card key={h} className="p-5"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">{numbered ? <span className="font-bold">{index + 1}</span> : <Icon name="check" className="h-5 w-5" />}</div><h3 className="text-lg font-semibold">{h}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{p}</p></Card>)}</div></div></section>; }
