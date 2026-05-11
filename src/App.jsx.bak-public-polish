import React, { useMemo, useState } from "react";

const icons = {
  arrow: "â†’",
  check: "âœ“",
  bolt: "âš¡",
  home: "âŒ‚",
  shield: "â—ˆ",
  comfort: "â˜¼",
  light: "âœ¦",
  lock: "â–£",
  sliders: "â‰‹",
  sparkle: "âœ§",
  clock: "â—·",
  building: "â–¥",
  phone: "â˜Ž",
  menu: "â˜°",
  close: "Ã—",
  plus: "+",
};

function Icon({ name, className = "" }) {
  return (
    <span className={`icon ${className}`} aria-hidden="true">
      {icons[name] || "â€¢"}
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
    dashboardModeLabel: "Todayâ€™s home mode",
    dashboardMode: "Evening Comfort",
    active: "Active",
    dashboardRows: [
      ["Living room", "Warm scene", "72%"],
      ["Air-con", "Pre-cool routine", "24.5Â°C"],
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
    footer: "Â© 2026 Boson Smart. Smart home packages for Hong Kong apartments.",
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
    brandSub: "ç‚ºé¦™æ¸¯ä½å®…è€Œè¨­çš„æ™ºèƒ½å®¶å±…æ–¹æ¡ˆ",
    nav: ["æ–¹æ¡ˆ", "çµ„åˆå™¨", "æƒ…å¢ƒ", "æµç¨‹", "è¯çµ¡"],
    quote: "ç´¢å–å ±åƒ¹",
    heroEyebrow: "ç¬¬ä¸€éšŽæ®µï½œä½å®…æ™ºèƒ½å®¶å±…å…¥é–€æ–¹æ¡ˆ",
    heroTitle: "ä»¤å±‹ä¼æ›´æ™ºèƒ½ï¼Œä½†å””éœ€è¦è®Šå¾—è¤‡é›œã€‚",
    heroText:
      "Boson Smart å¹«é¦™æ¸¯ä½å®…ç”¨æˆ¶ç”±å¯¦ç”¨æ™ºèƒ½å®¶å±…é–‹å§‹ï¼šç‡ˆå…‰æƒ…å¢ƒã€èˆ’é©è‡ªå‹•åŒ–ã€ç¯€èƒ½ç¿’æ…£ï¼Œä»¥åŠå®¶åº­å®‰å…¨ç›£å¯Ÿã€‚",
    heroPrimary: "å»ºç«‹ä½ çš„æ–¹æ¡ˆ",
    heroSecondary: "æŸ¥çœ‹ 3 å€‹æ–¹æ¡ˆ",
    trust: [
      "é…åˆè¨»å†Šé›»æ¥­å·¥ç¨‹æœå‹™ä¼™ä¼´",
      "å…ˆä»¥æ¸…æ™°å¥—é¤é–‹å§‹ï¼Œé¿å…ä¸€é–‹å§‹å°±è¤‡é›œå ±åƒ¹",
      "æŒ‰é¦™æ¸¯ä½å®…ç”Ÿæ´»ç¿’æ…£è¨­è¨ˆ",
    ],
    dashboardModeLabel: "ä»Šæ—¥å®¶å±…æ¨¡å¼",
    dashboardMode: "æ™šé–“èˆ’é©æ¨¡å¼",
    active: "å•Ÿç”¨ä¸­",
    dashboardRows: [
      ["å®¢å»³", "æš–è‰²ç‡ˆå…‰æƒ…å¢ƒ", "72%"],
      ["å†·æ°£", "é å…ˆèˆ’é©è¨­å®š", "24.5Â°C"],
      ["çŽ„é—œ", "å®‰å…¨ç›£å¯Ÿ", "é–‹å•Ÿ"],
      ["ç¡æˆ¿", "ç¡çœ æº–å‚™", "22:45"],
    ],
    plansEyebrow: "ç¬¬ä¸€éšŽæ®µä¸‰å€‹æ–¹æ¡ˆ",
    plansTitle: "ç”±æ¸…æ™°å¥—é¤é–‹å§‹ã€‚",
    plansText:
      "æ¯å€‹æ–¹æ¡ˆéƒ½ä»¥å®¹æ˜“ç†è§£ã€å®¹æ˜“å®‰è£ã€å®¹æ˜“å‘å®¶äººè§£é‡‹ç‚ºåŽŸå‰‡ã€‚ä¹‹å¾Œæ‰é€æ­¥å»¶ä¼¸è‡³æ™ºèƒ½è¾¦å…¬å®¤ã€ç¯€èƒ½é¡§å•åŠæ•´æ£Ÿå»ºç¯‰æ™ºèƒ½ç³»çµ±ã€‚",
    priceNote:
      "åƒ¹éŒ¢ç¾éšŽæ®µå±¬åƒè€ƒä½”ä½ï¼Œä¹‹å¾Œå¯æŒ‰ä¾›æ‡‰å•†æˆæœ¬ã€äººå·¥ã€å–®ä½å¤§å°åŠå¯¦éš›ç·šè·¯æƒ…æ³èª¿æ•´ã€‚",
    selectPlan: "é¸æ“‡æ–¹æ¡ˆ",
    selectedPlan: "å·²é¸æ–¹æ¡ˆ",
    idealFor: "é©åˆï¼š",
    builderEyebrow: "æ™ºèƒ½å®¶å±…æ–¹æ¡ˆçµ„åˆå™¨",
    builderTitle: "åƒ Apple é¸è³¼æµç¨‹ä¸€æ¨£ï¼Œå³æ™‚å»ºç«‹åˆæ­¥ä¼°ç®—ã€‚",
    builderText:
      "é¸æ“‡åŸºæœ¬æ–¹æ¡ˆã€å–®ä½é¡žåž‹åŠå‡ç´šé …ç›®ï¼Œä¼°ç®—é‡‘é¡æœƒå³æ™‚æ›´æ–°ã€‚æœ€å¾Œä¸æ˜¯ç›´æŽ¥ä»˜æ¬¾ï¼Œè€Œæ˜¯æŠŠä¼°ç®—è½‰æˆæŸ¥è©¢ï¼Œé¿å…å› ç¾å ´ç·šè·¯å·®ç•°è€Œå ±éŒ¯åƒ¹ã€‚",
    builderStep1: "1. é¸æ“‡åŸºæœ¬æ–¹æ¡ˆ",
    builderStep2: "2. é¸æ“‡å–®ä½é¡žåž‹",
    builderStep3: "3. åŠ é¸å‡ç´šé …ç›®",
    builderSummary: "å³æ™‚ä¼°ç®—",
    builderBase: "åŸºæœ¬æ–¹æ¡ˆ",
    builderApartment: "å–®ä½èª¿æ•´",
    builderAddons: "å·²é¸å‡ç´šé …ç›®",
    builderNoAddons: "æœªé¸æ“‡å‡ç´šé …ç›®",
    builderEstimatedTotal: "ä¼°ç®—ç¸½é¡",
    builderDisclaimer:
      "æœ€çµ‚å ±åƒ¹éœ€è¦–ä¹Žç¾å ´ç·šè·¯ã€é–‹é—œå…¼å®¹æ€§ã€Wi-Fi è¦†è“‹ã€ç”¢å“å“ç‰Œã€å®‰è£é›£åº¦åŠç¾å ´è©•ä¼°è€Œå®šã€‚",
    builderCta: "ä»¥é›»éƒµå‚³é€æ­¤ä¼°ç®—",
    builderSecondaryCta: "æŸ¥è©¢ WhatsApp è«®è©¢",
    included: "å·²é¸æ–¹æ¡ˆåŒ…æ‹¬",
    whyEyebrow: "ç‚ºä»€éº¼é¸ Boson Smart",
    whyTitle: "ä¸æ˜¯åªè³£æ™ºèƒ½ç”¢å“ï¼Œè€Œæ˜¯äº¤ä»˜ä¸€å€‹å¯ä½¿ç”¨çš„å®¶å±…ç³»çµ±ã€‚",
    whyText:
      "é¦™æ¸¯ä½å®…é¢ç©ã€ç·šè·¯ã€è£ä¿®ç‹€æ…‹åŠå®¶åº­ç¿’æ…£éƒ½ä¸åŒã€‚ç¬¬ä¸€éšŽæ®µçš„é‡é»žï¼Œæ˜¯ç”¨æ¸…æ™°æ–¹æ¡ˆé™ä½Žæ±ºç­–é›£åº¦ï¼ŒåŒæ™‚ä¿ç•™ç¾å ´è©•ä¼°åŠå¾ŒçºŒå‡ç´šç©ºé–“ã€‚",
    whyPoints: [
      "ä»¥é¦™æ¸¯ä½å®…å ´æ™¯è¨­è¨ˆï¼Œä¸æ˜¯ç…§æ¬å¤–åœ‹æ™ºèƒ½å®¶å±…ç¤ºç¯„",
      "é…åˆè¨»å†Šé›»æ¥­å·¥ç¨‹æœå‹™ä¼™ä¼´ï¼Œæå‡å®‰è£å¯ä¿¡åº¦",
      "å…ˆå¾žä¸‰å€‹æ¸…æ™°å¥—é¤é–‹å§‹ï¼Œæ–¹ä¾¿å®¢æˆ¶æ¯”è¼ƒåŠæ±ºå®š",
      "å®‰è£å¾ŒåŒ…æ‹¬æ¸¬è©¦åŠåŸºæœ¬æ•™å­¸ï¼Œé¿å…è²·å®Œä¸æ‡‚ç”¨",
    ],
    usuallyIncluded: "ä¸€èˆ¬åŒ…æ‹¬",
    includedItems: [
      "åˆæ­¥æ–¹æ¡ˆå»ºè­°",
      "åŸºæœ¬è¨­å‚™å®‰è£åŠè¨­å®š",
      "App / æƒ…å¢ƒæ¨¡å¼é…ç½®",
      "å®‰è£å¾Œæ¸¬è©¦",
      "åŸºæœ¬ä½¿ç”¨æ•™å­¸",
      "ç°¡å–®äº¤ä»˜èªªæ˜Ž",
    ],
    usuallyExcluded: "é€šå¸¸ä¸åŒ…æ‹¬ï¼Œéœ€å¦è¡Œå ±åƒ¹",
    excludedItems: [
      "å¤§åž‹æ”¹ç·šæˆ–é‡æ–°æ‹‰ç·š",
      "å‡å¤©èŠ±ã€æœ¨å·¥æˆ–è£ä¿®å·¥ç¨‹",
      "é«˜ç«¯æŒ‡å®šå“ç‰Œè¨­å‚™å·®åƒ¹",
      "è¤‡é›œç¶²çµ¡æ”¹å–„å·¥ç¨‹",
      "éžå¸¸è¦ç‰†èº«æˆ–é–€èº«æ”¹è£",
      "ä¿é¤ŠæœŸå¾Œçš„é•·æœŸæ”¯æ´",
    ],
    scenarioEyebrow: "å…ˆè¬›ç”Ÿæ´»æƒ…å¢ƒ",
    scenarioTitle: "è³£çš„ä¸æ˜¯å™¨æï¼Œè€Œæ˜¯ç”Ÿæ´»æ„Ÿå—ã€‚",
    scenarioText:
      "ç¶²ç«™ä¸æ‡‰ä¸€é–‹å§‹åªåˆ—æ™ºèƒ½ç”¢å“ï¼Œè€Œæ˜¯å…ˆå±•ç¤ºä¸€å€‹æ™®é€šä¸‹ç­æ™šä¸Šï¼Œå¦‚ä½•è®Šå¾—æ›´æ–¹ä¾¿ã€æ›´èˆ’é©ã€æ›´å®‰å…¨ã€‚",
    comparisonTitle: "ç°¡å–®æ¯”è¼ƒ",
    comparisonHeaders: ["é …ç›®", "Starter", "Comfort & Energy", "Family Safety"],
    comparisonRows: [
      ["ä¸»è¦é‡é»ž", "æ–¹ä¾¿å…¥é–€", "èˆ’é© + ç¯€èƒ½", "å®‰å…¨ + ç›£å¯Ÿ"],
      ["ç‡ˆå…‰æƒ…å¢ƒ", "æ ¸å¿ƒå€åŸŸ", "å¤šå€‹æˆ¿é–“", "å®‰å…¨ç›¸é—œå€åŸŸ"],
      ["å†·æ°£è‡ªå‹•åŒ–", "å¯é¸é…", "å¯åŒ…å«", "å¯é¸é…"],
      ["æ„Ÿæ‡‰å™¨", "åŸºæœ¬é¸é…", "èˆ’é© / äººé«”æ„Ÿæ‡‰", "é–€çª— / å®‰å…¨æ„Ÿæ‡‰"],
      ["æœ€é©åˆéšŽæ®µ", "ä»»ä½•æ™‚é–“", "è£ä¿®å‰ / è£ä¿®ä¸­", "ä»»ä½•æ™‚é–“"],
    ],
    processEyebrow: "å®‰è£æµç¨‹",
    processTitle: "è¶³å¤ å°ˆæ¥­ä»¤äººä¿¡ä»»ï¼Œäº¦è¶³å¤ ç°¡å–®å¯ä»¥ç«‹å³é–‹å§‹ã€‚",
    processText:
      "ç¬¬ä¸€éšŽæ®µä¸æ‡‰ä»¤å®¢æˆ¶è¦ºå¾—åƒå¤§åž‹å·¥ç¨‹é¡§å•ã€‚æ‰¿è«¾è¦ç›´æŽ¥ï¼šé¸æ–¹æ¡ˆã€äº†è§£å–®ä½ã€ä¹¾æ·¨å®‰è£ã€æ¸¬è©¦åŠæ•™è­˜ç”¨æˆ¶ã€‚",
    process: [
      "é¸æ“‡ä¸€å€‹å…¥é–€æ–¹æ¡ˆ",
      "ç°¡çŸ­å®¶å±…è©•ä¼°",
      "é…åˆè¨»å†Šé›»æ¥­å·¥ç¨‹æœå‹™ä¼™ä¼´å®‰è£",
      "äº¤ä»˜æ¸¬è©¦åŠä½¿ç”¨æ•™å­¸",
    ],
    preVisitEyebrow: "æŸ¥è©¢å‰æº–å‚™",
    preVisitTitle: "ç”¨å››æ¢å•é¡Œï¼Œå¿«é€Ÿåˆ¤æ–·æœ€åˆé©æ–¹æ¡ˆã€‚",
    preVisitText:
      "é€™ä¸€æ®µå¯ä»¥å¹«ä½ åœ¨ WhatsApp æˆ–é›»éƒµæŸ¥è©¢å‰ï¼Œå…ˆå–å¾—æœ€é‡è¦çš„è³‡æ–™ï¼Œä»¤å ±åƒ¹åŠç¾å ´è©•ä¼°æ›´æœ‰æ•ˆçŽ‡ã€‚",
    preVisitCards: [
      ["å–®ä½ç‹€æ…‹", "å·²å…¥ä½ã€æº–å‚™è£ä¿®ã€æ­£åœ¨è£ä¿®ï¼Œé‚„æ˜¯æ–°æ¨“äº¤æ”¶ï¼Ÿ"],
      ["ä¸»è¦ç›®æ¨™", "æ–¹ä¾¿ã€èˆ’é©ç¯€èƒ½ã€å®¶åº­å®‰å…¨ï¼Œé‚„æ˜¯ä¸‰è€…éƒ½éœ€è¦ï¼Ÿ"],
      ["æŽ§åˆ¶ç¯„åœ", "åªåšå®¢å»³çŽ„é—œï¼Œé‚„æ˜¯åŒ…æ‹¬ç¡æˆ¿ã€çª—ç°¾ã€å†·æ°£åŠé–€éŽ–ï¼Ÿ"],
      ["ç¾æœ‰è¨­å‚™", "æœ‰æ²’æœ‰æ™ºèƒ½é–€éŽ–ã€èªžéŸ³åŠ©ç†ã€Wi-Fi mesh æˆ–å·²è£æ™ºèƒ½ç‡ˆï¼Ÿ"],
    ],
    faqEyebrow: "å¸¸è¦‹å•é¡Œ",
    faqTitle: "å…ˆè§£ç­”å®¢æˆ¶æœ€æ“”å¿ƒçš„äº‹ã€‚",
    faqs: [
      ["ä¸€å®šè¦è£ä¿®æ™‚å…ˆå¯ä»¥åšå—Žï¼Ÿ", "ä¸ä¸€å®šã€‚éƒ¨åˆ†æ–¹æ¡ˆå¯ä»¥åœ¨å·²å…¥ä½å–®ä½å®‰è£ï¼›ä½†å¦‚æžœæ¶‰åŠæ›´å¤šé–‹é—œã€çª—ç°¾æˆ–æ”¹ç·šï¼Œè£ä¿®å‰æˆ–è£ä¿®ä¸­æœƒæ›´ç†æƒ³ã€‚"],
      ["ä¼°ç®—åƒ¹æ˜¯å¦ç­‰æ–¼æœ€çµ‚å ±åƒ¹ï¼Ÿ", "ä¸æ˜¯ã€‚ç¶²ç«™ä¼°ç®—åªä½œåˆæ­¥åƒè€ƒï¼Œæœ€çµ‚å ±åƒ¹éœ€è¦–ä¹Žç¾å ´ç·šè·¯ã€ç”¢å“å“ç‰Œã€å®‰è£é›£åº¦åŠå–®ä½æƒ…æ³ã€‚"],
      ["å¯ä»¥å…ˆåšä¸€éƒ¨åˆ†ï¼Œä¹‹å¾Œå†åŠ å—Žï¼Ÿ", "å¯ä»¥ã€‚ç¬¬ä¸€éšŽæ®µæ–¹æ¡ˆæ‡‰ä»¥å¯æ“´å±•ç‚ºåŽŸå‰‡ï¼Œå…ˆç”±æ ¸å¿ƒå€åŸŸé–‹å§‹ï¼Œä¹‹å¾Œå†åŠ å…¥æ›´å¤šæˆ¿é–“ã€æ„Ÿæ‡‰å™¨åŠè‡ªå‹•åŒ–æƒ…å¢ƒã€‚"],
      ["å¦‚æžœå®¶äººä¸æ‡‚ç”¨ App æ€Žéº¼è¾¦ï¼Ÿ", "æ–¹æ¡ˆæœƒä¿ç•™ç°¡å–®æŽ§åˆ¶æ–¹å¼ï¼Œä¾‹å¦‚ç‰†æŽ£ã€æƒ…å¢ƒæŒ‰éˆ•æˆ–åŸºæœ¬æ•™å­¸ï¼Œä¸æ‡‰ä»¤æ—¥å¸¸ä½¿ç”¨è®Šå¾—æ›´éº»ç…©ã€‚"],
    ],
    contactEyebrow: "ç¬¬ä¸€éšŽæ®µå•Ÿå‹•å„ªæƒ ",
    contactTitle: "ç”±ä¸€å€‹å–®ä½é–‹å§‹ï¼Œé€æ­¥å»ºç«‹æ™ºèƒ½ç”Ÿæ´»å“ç‰Œã€‚",
    contactText:
      "é ç´„ç°¡çŸ­è«®è©¢ï¼Œæ ¹æ“šå–®ä½å¤§å°ã€ç¾æœ‰ç·šè·¯ã€ç”Ÿæ´»ç¿’æ…£åŠå®‰è£æ¢ä»¶ï¼Œå»ºè­°æœ€åˆé©çš„å…¥é–€æ–¹æ¡ˆã€‚",
    emailCta: "é›»éƒµç´¢å–å ±åƒ¹",
    phoneCta: "è‡´é›» / WhatsApp",
    footer: "Â© 2026 Boson Smartã€‚ç‚ºé¦™æ¸¯ä½å®…è€Œè¨­çš„æ™ºèƒ½å®¶å±…æ–¹æ¡ˆã€‚",
    apartments: [
      { id: "studio", label: "é–‹æ”¾å¼ / ä¸€æˆ¿å–®ä½", description: "è¼ƒå°‘æŽ§åˆ¶é»žï¼Œé©åˆè¼•é‡å…¥é–€", adjustment: 0 },
      { id: "twoBed", label: "å…©æˆ¿å–®ä½", description: "å¸¸è¦‹é¦™æ¸¯å®¶åº­å–®ä½", adjustment: 1800 },
      { id: "threeBed", label: "ä¸‰æˆ¿å–®ä½", description: "æ›´å¤šæˆ¿é–“åŠæƒ…å¢ƒæŽ§åˆ¶é»ž", adjustment: 3600 },
      { id: "large", label: "å¤§åž‹ / è¤‡å¼ / è‡ªè¨‚", description: "éœ€è¦å…ˆä½œç¾å ´è©•ä¼°", adjustment: 6800 },
    ],
    addons: [
      { id: "extraSwitch", label: "é¡å¤–æ™ºèƒ½é–‹é—œé»ž", description: "å¢žåŠ ä¸€å€‹ç‡ˆå…‰æˆ–æŽ§åˆ¶é»ž", price: 850 },
      { id: "motion", label: "é¡å¤–äººé«”æ„Ÿæ‡‰å™¨", description: "é©åˆèµ°å»Šã€æµ´å®¤ã€çŽ„é—œæˆ–é›œç‰©æˆ¿", price: 650 },
      { id: "curtain", label: "æ™ºèƒ½çª—ç°¾æ‘©æ‰“", description: "çª—ç°¾æˆ–ç™¾è‘‰ç°¾è‡ªå‹•æŽ§åˆ¶", price: 2200 },
      { id: "doorlock", label: "æ™ºèƒ½é–€éŽ–å‡ç´š", description: "æå‡å‡ºå…¥æ–¹ä¾¿åŠæ¬Šé™ç®¡ç†", price: 2800 },
      { id: "doorbell", label: "è¦–åƒé–€éˆ´ / å…¥å£é¡é ­", description: "è¨ªå®¢æç¤ºåŠé™è·æŸ¥çœ‹", price: 1600 },
      { id: "support", label: "å¹´åº¦æ”¯æ´è¨ˆåŠƒ", description: "é™è·æ”¯æ´åŠå°åž‹æƒ…å¢ƒèª¿æ•´", price: 1200 },
    ],
    packages: [
      {
        id: "starter",
        name: "Smart Home Starter",
        subtitle: "æ™ºèƒ½å®¶å±…çš„ä¹¾æ·¨å…¥é–€ç¬¬ä¸€æ­¥ã€‚",
        icon: "home",
        tag: "æœ€é©åˆé¦–æ¬¡ä½¿ç”¨",
        basePrice: 3800,
        description:
          "ä»¥åŸºæœ¬æ™ºèƒ½ç‡ˆå…‰åŠæƒ…å¢ƒæŽ§åˆ¶ç‚ºæ ¸å¿ƒï¼Œé©åˆæƒ³æå‡æ–¹ä¾¿åº¦ï¼Œä½†ä¸æƒ³ä¸€é–‹å§‹å¤ªè¤‡é›œçš„ä½å®…ã€‚",
        includes: [
          "æŒ‡å®šå€åŸŸæ™ºèƒ½ç‡ˆå…‰æŽ§åˆ¶",
          "å›žå®¶ / é›¢å®¶æƒ…å¢ƒæ¨¡å¼",
          "æ‰‹æ©Ÿ App åŠèªžéŸ³åŠ©ç†è¨­å®š",
          "ç°¡å–®ç‰†æŽ£æˆ–é™æŽ§æŽ§åˆ¶é¸é …",
          "å®‰è£å¾ŒåŸºæœ¬ä½¿ç”¨æ•™å­¸",
        ],
        idealFor: "é–‹æ”¾å¼å–®ä½ã€ä¸€æˆ¿å–®ä½ã€ç§Ÿä½å–®ä½ï¼Œæˆ–ç¬¬ä¸€æ¬¡è©¦ç”¨æ™ºèƒ½å®¶å±…çš„ç”¨æˆ¶",
      },
      {
        id: "comfort",
        name: "Comfort & Energy Package",
        subtitle: "èˆ’é©è‡ªå‹•åŒ–ï¼ŒåŒæ™‚å»ºç«‹ç¯€èƒ½ç¿’æ…£ã€‚",
        icon: "comfort",
        tag: "æœ€å¹³è¡¡é¸æ“‡",
        basePrice: 8800,
        description:
          "ç‚ºæ—¥å¸¸èˆ’é©è€Œè¨­ï¼šç‡ˆå…‰ã€å†·æ°£ç¿’æ…£ã€çª—ç°¾ã€æ™‚é–“æŽ’ç¨‹ï¼Œä»¥åŠç¯€èƒ½è‡ªå‹•åŒ–é‚è¼¯ã€‚",
        includes: [
          "å®¢å»³ã€é£¯å»³ã€å·¥ä½œåŠç¡çœ ç‡ˆå…‰æƒ…å¢ƒ",
          "å†·æ°£æˆ–æº«åº¦æŽ§åˆ¶æŽ’ç¨‹",
          "å¯é¸é…çª—ç°¾ / ç™¾è‘‰ç°¾è‡ªå‹•åŒ–",
          "æŒ‡å®šå€åŸŸäººé«”æ„Ÿæ‡‰ç‡ˆå…‰",
          "ç¯€èƒ½è‡ªå‹•åŒ–é‚è¼¯",
        ],
        idealFor: "æƒ…ä¾¶ã€å°å®¶åº­ã€è‡ªä½æ¥­ä¸»ï¼Œæˆ–æº–å‚™è£ä¿®çš„å–®ä½",
      },
      {
        id: "safety",
        name: "Family Safety Package",
        subtitle: "æå‡å®¶åº­å®‰å…¨æ„Ÿã€æŽŒæ¡å®¶ä¸­ç‹€æ…‹ã€‚",
        icon: "shield",
        tag: "æœ€é©åˆå®¶åº­",
        basePrice: 7800,
        description:
          "é›†ä¸­è™•ç†å‡ºå…¥å®‰å…¨ã€å®¶äººç‹€æ…‹ã€é–€çª—ç›£å¯ŸåŠé‡è¦é€šçŸ¥ï¼Œç‚ºæ—¥å¸¸å®¶åº­ç”Ÿæ´»æä¾›å¯¦ç”¨å®‰å¿ƒæ„Ÿã€‚",
        includes: [
          "æ™ºèƒ½é–€éŽ–æˆ–å‡ºå…¥æŽ§åˆ¶æ•´åˆ",
          "ä¸»è¦é–€çª—æ„Ÿæ‡‰å™¨",
          "å¯é¸é…è¦–åƒé–€éˆ´æˆ–å…¥å£é¡é ­",
          "å¤œé–“å®‰å…¨ç‡ˆå…‰è‡ªå‹•åŒ–",
          "æŒ‡å®šå®‰å…¨äº‹ä»¶æ‰‹æ©Ÿé€šçŸ¥",
        ],
        idealFor: "æœ‰å°æœ‹å‹ã€é•·è€…åŒä½ã€é‡è¦–å®¶å±…å®‰å…¨ï¼Œæˆ–å¸Œæœ›æŽŒæ¡å®¶ä¸­ç‹€æ…‹çš„å®¶åº­",
      },
    ],
    scenarios: [
      ["18:45", "æº–å‚™å›žå®¶", "æŒ‰ç…§ä½ é¸æ“‡çš„æ–¹æ¡ˆï¼Œå±‹ä¼å¯ä»¥åœ¨ä½ å›žåˆ°å‰æº–å‚™åˆé©çš„å…¥é–€æƒ…å¢ƒã€‚", "bolt"],
      ["18:50", "æ‰“é–‹å¤§é–€", "çŽ„é—œåŠå®¢å»³ç‡ˆå…‰æŸ”å’Œäº®èµ·ï¼Œä¸æœƒçªç„¶åˆºçœ¼ï¼Œå›žå®¶æ„Ÿè¦ºæ›´è‡ªç„¶ã€‚", "light"],
      ["19:10", "æ™šé¤ / æ”¾é¬†æ¨¡å¼", "å®¢å»³è½‰ç‚ºèˆ’é©æƒ…å¢ƒï¼Œå†·æ°£åŠç‡ˆå…‰é…åˆä½ æ™šä¸Šçš„ç”Ÿæ´»ç¯€å¥ã€‚", "sliders"],
      ["23:30", "å¤œé–“å®‰å…¨", "ä½Žäº®åº¦è·¯å¾‘ç‡ˆã€å‡ºå…¥å£ç›£å¯ŸåŠç¡å‰è¨­å®šï¼Œå¹«å±‹ä¼æ…¢æ…¢é€²å…¥ä¼‘æ¯ç‹€æ…‹ã€‚", "lock"],
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
      ? "Boson Smart æ™ºèƒ½å®¶å±…æ–¹æ¡ˆä¼°ç®—æŸ¥è©¢"
      : "Boson Smart Smart Home Package Estimate";

  const enquiryBody = [
    language === "zh"
      ? "ä½ å¥½ï¼Œæˆ‘æƒ³æŸ¥è©¢ä»¥ä¸‹æ™ºèƒ½å®¶å±…æ–¹æ¡ˆä¼°ç®—ï¼š"
      : "Hello, I would like to ask about this smart home package estimate:",
    "",
    `${language === "zh" ? "åŸºæœ¬æ–¹æ¡ˆ" : "Base package"}: ${selectedPackage.name}`,
    `${language === "zh" ? "å–®ä½é¡žåž‹" : "Apartment type"}: ${selectedApartment.label}`,
    `${language === "zh" ? "å‡ç´šé …ç›®" : "Add-ons"}: ${
      activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builderNoAddons
    }`,
    `${language === "zh" ? "ä¼°ç®—ç¸½é¡" : "Estimated total"}: ${formatHKD(total)}`,
    "",
    language === "zh" ? "è«‹è¯çµ¡æˆ‘å®‰æŽ’ä¸‹ä¸€æ­¥è©•ä¼°ã€‚" : "Please contact me for the next-step assessment.",
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
                  {language === "zh" ? `${formatHKD(item.basePrice)} èµ·` : `From ${formatHKD(item.basePrice)}`}
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
                          <strong><span className="round-select">{active ? "âœ“" : "+"}</span>{item.label}</strong>
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

        <section className="section">
          <div className="launch-card">
            <div className="launch-layout">
              <div>
                <div className="eyebrow">
                  {language === "zh" ? "第一階段啟動名額" : "Phase 1 launch offer"}
                </div>
                <h2>
                  {language === "zh"
                    ? "我們正在招募第一批香港住宅智能家居項目。"
                    : "We are accepting our first smart-home projects in Hong Kong apartments."}
                </h2>
                <p>
                  {language === "zh"
                    ? "現階段會以少量項目開始，集中打磨方案、安裝流程、交付體驗及真實家庭使用情境。早期客戶可獲得更深入的方案檢視及安裝後調整支援。"
                    : "At this stage, we are starting with a limited number of projects to refine the package, installation process, handover experience, and real household usage scenarios. Early customers receive a more detailed package review and post-installation adjustment support."}
                </p>
              </div>

              <div className="launch-side">
                <div className="launch-badge">
                  {language === "zh" ? "適合首批客戶" : "Ideal early customer"}
                </div>
                <p>
                  {language === "zh"
                    ? "你想先由實用範圍開始，例如玄關、客廳、冷氣、窗簾或家庭安全，而不是一次過做全屋大型工程。"
                    : "You want to start with practical areas such as entry, living room, air-con, curtains, or family safety, rather than a full-home project immediately."}
                </p>
              </div>
            </div>

            <div className="launch-points">
              {(language === "zh"
                ? [
                    ["01", "免費初步方案檢視", "根據單位狀態、生活習慣及主要目標，建議由哪個方案開始。"],
                    ["02", "安裝後情境微調", "完成安裝後，可按實際使用感受作基本場景及設定調整。"],
                    ["03", "交付清單", "整理已安裝設備、控制方式、基本操作及後續升級方向。"],
                    ["04", "早期用戶回饋支援", "收集真實使用意見，用於改善下一版本方案及服務流程。"],
                  ]
                : [
                    ["01", "Free initial package review", "Recommend the best starting package based on apartment status, habits, and main goals."],
                    ["02", "Post-installation scene tuning", "Basic scene and setting adjustments after installation based on real usage."],
                    ["03", "Handover checklist", "Summarise installed devices, controls, basic operation, and upgrade direction."],
                    ["04", "Early-user feedback support", "Collect real user feedback to improve the next version of the package and service flow."],
                  ]).map(([number, title, text]) => (
                <div className="launch-point" key={title}>
                  <span className="launch-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
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
      <button onClick={() => setLanguage("zh")} className={language === "zh" ? "active" : ""}>ç¹ä¸­</button>
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

