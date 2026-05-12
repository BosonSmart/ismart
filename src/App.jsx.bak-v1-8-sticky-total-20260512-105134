import React, { useMemo, useState } from "react";

const PLACEHOLDER_EMAIL = "hello@bosonsmart.hk";
const PLACEHOLDER_WHATSAPP = "85200000000";

function Icon({ name, className = "" }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    badge: <path d="m5 12 4 4L19 6" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
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
    comfort: (
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
    sparkle: (
      <>
        <path d="M12 3 14 9l6 3-6 3-2 6-2-6-6-3 6-3 2-6Z" />
        <path d="M19 3v4M17 5h4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M9 21v-5h4v5" />
        <path d="M8 7h1M12 7h1M8 11h1M12 11h1M19 21V10h-2" />
      </>
    ),
    phone: (
      <>
        <path d="M21 15.5v3a2 2 0 0 1-2.2 2 18 18 0 0 1-8-2.8 17.5 17.5 0 0 1-5.5-5.5 18 18 0 0 1-2.8-8A2 2 0 0 1 4.5 2h3A2 2 0 0 1 9.5 3.7l.5 2.7a2 2 0 0 1-.6 1.8L8.2 9.4a14 14 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 2Z" />
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
      className={`icon-svg ${className}`}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || <circle cx="12" cy="12" r="4" />}
    </svg>
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
    heroTitle: "Smart home packages for Hong Kong apartments â€” installed, configured, and ready to use.",
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
    dashboardModeLabel: "Scenario preview",
    dashboardScenarios: [
      {
        id: "home",
        label: "Coming home",
        title: "Home is ready",
        status: "Active",
        package: "Comfort & Energy Package",
        rows: [
          ["Before arrival", "Living room pre-cools", "18:45"],
          ["Door opens", "Entry lights rise softly", "18:50"],
          ["Dinner mode", "Warm lighting scene", "19:10"],
          ["Night safety", "Path lighting ready", "23:30"],
        ],
      },
      {
        id: "energy",
        label: "Energy saving",
        title: "Comfort without waste",
        status: "Scheduled",
        package: "Comfort & Energy Package",
        rows: [
          ["Cooling", "Avoids unnecessary runtime", "Auto"],
          ["Lighting", "Motion-based low usage", "On"],
          ["Curtains", "Reduces afternoon heat", "Optional"],
          ["Away mode", "Turns off selected loads", "Ready"],
        ],
      },
      {
        id: "safety",
        label: "Family safety",
        title: "Home stays aware",
        status: "Monitoring",
        package: "Family Safety Package",
        rows: [
          ["Entrance", "Door status awareness", "On"],
          ["Windows", "Selected sensors armed", "Ready"],
          ["Night path", "Soft lighting for movement", "Auto"],
          ["Alerts", "Phone notification enabled", "On"],
        ],
      },
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
      "You want to start with practical areas such as entry, living room, air-con, curtains, or family safety â€” not a full-home project immediately.",
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
    brandSub: "ç‚ºé¦™æ¸¯ä½å®…è€Œè¨­çš„æ™ºèƒ½å®¶å±…æ–¹æ¡ˆ",
    nav: ["æ–¹æ¡ˆ", "çµ„åˆå™¨", "ç¯„åœ", "æµç¨‹", "è¯çµ¡"],
    quote: "å»ºç«‹ä¼°ç®—",
    heroEyebrow: "é¦™æ¸¯ä½å®…æ™ºèƒ½å®¶å±…å®‰è£æ–¹æ¡ˆ",
    heroTitle: "ç‚ºé¦™æ¸¯ä½å®…è€Œè¨­çš„æ™ºèƒ½å®¶å±…æ–¹æ¡ˆ â€” å®‰è£ã€è¨­å®šã€äº¤ä»˜ä¸€æ¬¡å®Œæˆã€‚",
    heroText:
      "ç”±ç‡ˆå…‰æƒ…å¢ƒã€èˆ’é©è‡ªå‹•åŒ–ã€ç¯€èƒ½ç¿’æ…£æˆ–å®¶åº­å®‰å…¨é–‹å§‹ã€‚é¸æ“‡æ–¹æ¡ˆã€å»ºç«‹ä¼°ç®—ï¼Œå†å®‰æŽ’å¯¦ç”¨è«®è©¢ã€‚",
    heroPrimary: "å»ºç«‹æˆ‘çš„ä¼°ç®—",
    heroSecondary: "æŸ¥çœ‹æ–¹æ¡ˆ",
    trust: [
      "å°ˆç‚ºé¦™æ¸¯ä½å®…å ´æ™¯è¨­è¨ˆ",
      "é…åˆé›»æ¥­å·¥ç¨‹æœå‹™æ”¯æ´å®‰è£",
      "ç¾å ´è©•ä¼°å¾Œæ‰ç¢ºèªæœ€çµ‚å ±åƒ¹",
      "åŒ…æ‹¬äº¤ä»˜æ¸¬è©¦åŠåŸºæœ¬ä½¿ç”¨æ•™å­¸",
    ],
    dashboardModeLabel: "æƒ…å¢ƒé è¦½",
    dashboardScenarios: [
      {
        id: "home",
        label: "å›žå®¶",
        title: "å±‹ä¼å·²æº–å‚™å¥½",
        status: "å•Ÿç”¨ä¸­",
        package: "Comfort & Energy Package",
        rows: [
          ["åˆ°å®¶å‰", "å®¢å»³é å…ˆèª¿ç¯€èˆ’é©æº«åº¦", "18:45"],
          ["é–‹é–€æ™‚", "çŽ„é—œç‡ˆå…‰æŸ”å’Œäº®èµ·", "18:50"],
          ["æ™šé£¯æ™‚", "å®¢å»³è½‰ç‚ºæš–å…‰æƒ…å¢ƒ", "19:10"],
          ["å¤œæ™šæ™‚", "ä½Žäº®åº¦è·¯å¾‘ç‡ˆæº–å‚™å¥½", "23:30"],
        ],
      },
      {
        id: "energy",
        label: "ç¯€èƒ½",
        title: "èˆ’é©ä½†ä¸æµªè²»",
        status: "å·²æŽ’ç¨‹",
        package: "Comfort & Energy Package",
        rows: [
          ["å†·æ°£", "é¿å…ä¸å¿…è¦é•·é–‹", "è‡ªå‹•"],
          ["ç‡ˆå…‰", "æŒ‰æ´»å‹•æƒ…æ³ä½Žè€—é›»ä½¿ç”¨", "é–‹å•Ÿ"],
          ["çª—ç°¾", "æ¸›å°‘ä¸‹åˆç†±åŠ›é€²å…¥", "å¯é¸"],
          ["é›¢å®¶æ¨¡å¼", "é—œé–‰æŒ‡å®šç”¨é›»è¨­å‚™", "æº–å‚™å¥½"],
        ],
      },
      {
        id: "safety",
        label: "å®‰å…¨",
        title: "å®¶ä¸­ç‹€æ…‹æ›´æ¸…æ¥š",
        status: "ç›£å¯Ÿä¸­",
        package: "Family Safety Package",
        rows: [
          ["çŽ„é—œ", "æŽŒæ¡å¤§é–€ç‹€æ…‹", "é–‹å•Ÿ"],
          ["é–€çª—", "æŒ‡å®šæ„Ÿæ‡‰å™¨å·²æº–å‚™", "æº–å‚™å¥½"],
          ["å¤œé–“è·¯å¾‘", "èµ°å‹•æ™‚æŸ”å’Œäº®ç‡ˆ", "è‡ªå‹•"],
          ["é€šçŸ¥", "æ‰‹æ©Ÿæç¤ºå·²å•Ÿç”¨", "é–‹å•Ÿ"],
        ],
      },
    ],
    packagesEyebrow: "ä¸‰å€‹èµ·æ­¥æ–¹æ¡ˆ",
    packagesTitle: "æŒ‰ä½ æƒ³å±‹ä¼åšåˆ°ç”šéº¼ä¾†é¸æ“‡ã€‚",
    packagesText:
      "æ¯å€‹æ–¹æ¡ˆéƒ½ä»¥å®¹æ˜“ç†è§£ã€å¯¦éš›å¯å®‰è£ã€æ—¥å¾Œå¯å‡ç´šç‚ºåŽŸå‰‡ï¼Œå…ˆç”±æœ€æœ‰ç”¨çš„å®¶å±…ç¯„åœé–‹å§‹ã€‚",
    priceNote:
      "ç¶²ä¸Šé‡‘é¡åªä½œåˆæ­¥ä¼°ç®—ã€‚æœ€çµ‚å ±åƒ¹æœƒæŒ‰ç¾å ´ç·šè·¯ã€è¨­å‚™å…¼å®¹æ€§ã€æŒ‡å®šå“ç‰ŒåŠå®‰è£æ¢ä»¶ç¢ºèªã€‚",
    selectPlan: "é¸æ“‡æ–¹æ¡ˆ",
    selectedPlan: "å·²é¸æ–¹æ¡ˆ",
    idealFor: "é©åˆï¼š",
    builderEyebrow: "æ™ºèƒ½å®¶å±…ä¼°ç®—çµ„åˆå™¨",
    builderTitle: "å»ºç«‹ä½ çš„æ™ºèƒ½å®¶å±…ä¼°ç®—ã€‚",
    builderText:
      "é¸æ“‡åŸºæœ¬æ–¹æ¡ˆã€å–®ä½é¡žåž‹åŠå‡ç´šé …ç›®ï¼Œä¼°ç®—é‡‘é¡æœƒå³æ™‚æ›´æ–°ã€‚ä¹‹å¾Œå…ˆå®‰æŽ’è«®è©¢åŠç¾å ´è©•ä¼°ï¼Œå†ç¢ºèªæœ€çµ‚å ±åƒ¹ã€‚",
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
      "æ­¤ç‚ºåˆæ­¥ä¼°ç®—ï¼Œä¸¦éžæœ€çµ‚å ±åƒ¹ã€‚æœ€çµ‚åƒ¹æ ¼éœ€è¦–ä¹Žç¾å ´ç·šè·¯ã€é–‹é—œå…¼å®¹æ€§ã€Wi-Fi è¦†è“‹ã€ç”¢å“å“ç‰Œã€å®‰è£é›£åº¦åŠç¾å ´è©•ä¼°è€Œå®šã€‚",
    builderCta: "ç”¨ WhatsApp å‚³é€ä¼°ç®—",
    builderSecondaryCta: "é›»éƒµå‚³é€ä¼°ç®—",
    included: "å·²é¸æ–¹æ¡ˆåŒ…æ‹¬",
    whyEyebrow: "ç‚ºä»€éº¼é¸ Boson Smart",
    whyTitle: "ä¸æ˜¯åªè³£æ™ºèƒ½ç”¢å“ï¼Œè€Œæ˜¯äº¤ä»˜ä¸€å€‹å¯ä½¿ç”¨çš„å®¶å±…ç³»çµ±ã€‚",
    whyText:
      "æ™ºèƒ½å®¶å±…ä¸æ‡‰ä»¤æ—¥å¸¸ç”Ÿæ´»è®Šå¾—æ›´éº»ç…©ã€‚æˆ‘å€‘é‡è¦–å¯¦ç”¨å ´æ™¯ã€æ¸…æ™°äº¤ä»˜ï¼Œä»¥åŠé©åˆé¦™æ¸¯ä½å®…çš„é€æ­¥å‡ç´šæ–¹å¼ã€‚",
    whyPoints: [
      "æŒ‰é¦™æ¸¯ä½å®…ç”Ÿæ´»ç¿’æ…£è¨­è¨ˆ",
      "å…ˆç”¨æ¸…æ™°å¥—é¤ï¼Œå†è™•ç†ç´°ç¯€å®¢è£½",
      "ç¾å ´è©•ä¼°å¾Œæ‰ç¢ºèªæœ€çµ‚åƒ¹æ ¼",
      "ä¿ç•™ç°¡å–®æŽ§åˆ¶æ–¹å¼ï¼Œå®¶äººä¸ä¸€å®šè¦ç”¨ App",
      "é¡é ­ã€æ„Ÿæ‡‰å™¨åŠå¸³æˆ¶è¨­å®šæ³¨é‡ç§éš±",
      "å¯ç”±ä¸€å€‹å€åŸŸé–‹å§‹ï¼Œä¹‹å¾Œå†æ“´å±•æ›´å¤šæˆ¿é–“",
    ],
    includedTitle: "ä¸€èˆ¬åŒ…æ‹¬",
    excludedTitle: "é€šå¸¸éœ€å¦è¡Œå ±åƒ¹",
    includedItems: [
      "åˆæ­¥æ–¹æ¡ˆå»ºè­°",
      "åŸºæœ¬è¨­å‚™å®‰è£åŠè¨­å®š",
      "App / æƒ…å¢ƒæ¨¡å¼é…ç½®",
      "å®‰è£å¾Œæ¸¬è©¦",
      "åŸºæœ¬ä½¿ç”¨æ•™å­¸",
      "ç°¡å–®äº¤ä»˜æ¸…å–®",
    ],
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
      "æ™ºèƒ½å®¶å±…æœ€å®¹æ˜“ç†è§£çš„åƒ¹å€¼ï¼Œæ˜¯ä½ å›žå®¶ã€æ™šé£¯å¾Œæ”¾é¬†ï¼Œä»¥åŠå¤œæ™šèµ°å‹•æ™‚çš„æ—¥å¸¸æ„Ÿå—ã€‚",
    comparisonTitle: "ç°¡å–®æ¯”è¼ƒ",
    comparisonHeaders: ["é …ç›®", "Starter", "Comfort & Energy", "Family Safety"],
    comparisonRows: [
      ["ä¸»è¦é‡é»ž", "æ–¹ä¾¿å…¥é–€", "èˆ’é© + ç¯€èƒ½", "å®‰å…¨ + ç›£å¯Ÿ"],
      ["ç‡ˆå…‰æƒ…å¢ƒ", "æ ¸å¿ƒå€åŸŸ", "å¤šå€‹æˆ¿é–“", "å®‰å…¨ç›¸é—œå€åŸŸ"],
      ["å†·æ°£è‡ªå‹•åŒ–", "å¯é¸é…", "å¯åŒ…å«", "å¯é¸é…"],
      ["æ„Ÿæ‡‰å™¨", "åŸºæœ¬é¸é…", "èˆ’é© / äººé«”æ„Ÿæ‡‰", "é–€çª— / å®‰å…¨æ„Ÿæ‡‰"],
      ["æœ€é©åˆéšŽæ®µ", "ä»»ä½•æ™‚é–“", "è£ä¿®å‰ / è£ä¿®ä¸­", "ä»»ä½•æ™‚é–“"],
    ],
    launchEyebrow: "ç¬¬ä¸€éšŽæ®µå•Ÿå‹•åé¡",
    launchTitle: "ç¾æ­£æŽ¥å—å°‘é‡æ—©æœŸé¦™æ¸¯ä½å®…æ™ºèƒ½å®¶å±…é …ç›®ã€‚",
    launchText:
      "æˆ‘å€‘æœƒä»¥å°‘é‡é …ç›®é–‹å§‹ï¼Œé›†ä¸­æ‰“ç£¨å®‰è£æµç¨‹ã€äº¤ä»˜é«”é©—åŠçœŸå¯¦å®¶åº­ä½¿ç”¨æƒ…å¢ƒã€‚",
    launchBadge: "é©åˆé¦–æ‰¹å®¢æˆ¶",
    launchSide:
      "ä½ æƒ³å…ˆç”±çŽ„é—œã€å®¢å»³ã€å†·æ°£ã€çª—ç°¾æˆ–å®¶åº­å®‰å…¨ç­‰å¯¦ç”¨ç¯„åœé–‹å§‹ï¼Œè€Œä¸æ˜¯ä¸€æ¬¡éŽåšå…¨å±‹å¤§åž‹å·¥ç¨‹ã€‚",
    launchPoints: [
      ["01", "åˆæ­¥æ–¹æ¡ˆæª¢è¦–", "æ ¹æ“šå–®ä½ç‹€æ…‹ã€ç”Ÿæ´»ç¿’æ…£åŠä¸»è¦ç›®æ¨™ï¼Œå»ºè­°ç”±å“ªå€‹æ–¹æ¡ˆé–‹å§‹ã€‚"],
      ["02", "å®‰è£å¾Œæƒ…å¢ƒå¾®èª¿", "å®Œæˆå®‰è£å¾Œï¼Œå¯æŒ‰å¯¦éš›ä½¿ç”¨æ„Ÿå—ä½œåŸºæœ¬å ´æ™¯åŠè¨­å®šèª¿æ•´ã€‚"],
      ["03", "äº¤ä»˜æ¸…å–®", "æ•´ç†å·²å®‰è£è¨­å‚™ã€æŽ§åˆ¶æ–¹å¼ã€åŸºæœ¬æ“ä½œåŠå¾ŒçºŒå‡ç´šæ–¹å‘ã€‚"],
      ["04", "æ—©æœŸç”¨æˆ¶å›žé¥‹", "æ”¶é›†çœŸå¯¦ä½¿ç”¨æ„è¦‹ï¼Œç”¨æ–¼æ”¹å–„ä¸‹ä¸€ç‰ˆæœ¬æœå‹™æµç¨‹ã€‚"],
    ],
    processEyebrow: "å®‰è£æµç¨‹",
    processTitle: "è¶³å¤ å°ˆæ¥­ä»¤äººä¿¡ä»»ï¼Œäº¦è¶³å¤ ç°¡å–®å¯ä»¥ç«‹å³é–‹å§‹ã€‚",
    processText:
      "ç¬¬ä¸€æ­¥ä¸æ‡‰åƒå¤§åž‹å·¥ç¨‹é¡§å•ã€‚é¸æ–¹æ¡ˆã€äº†è§£å–®ä½ã€ä¹¾æ·¨å®‰è£ï¼Œç„¶å¾Œæ¸¬è©¦åŠæ•™è­˜ä½¿ç”¨ã€‚",
    process: [
      "é¸æ“‡ä¸€å€‹èµ·æ­¥æ–¹æ¡ˆ",
      "ç°¡çŸ­å®¶å±…è©•ä¼°",
      "é…åˆé›»æ¥­å·¥ç¨‹æœå‹™æ”¯æ´å®‰è£",
      "äº¤ä»˜æ¸¬è©¦åŠä½¿ç”¨æ•™å­¸",
    ],
    preVisitEyebrow: "æŸ¥è©¢å‰æº–å‚™",
    preVisitTitle: "ç”¨å››æ¢å•é¡Œï¼Œå¿«é€Ÿåˆ¤æ–·æœ€åˆé©æ–¹æ¡ˆã€‚",
    preVisitText:
      "é€™äº›è³‡æ–™å¯ä»¥ä»¤å ±åƒ¹åŠç¾å ´è©•ä¼°æ›´æœ‰æ•ˆçŽ‡ã€‚",
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
      ["å¯ä»¥å…ˆåšä¸€éƒ¨åˆ†ï¼Œä¹‹å¾Œå†åŠ å—Žï¼Ÿ", "å¯ä»¥ã€‚å…ˆç”±æ ¸å¿ƒå€åŸŸé–‹å§‹ï¼Œä¹‹å¾Œå†åŠ å…¥æ›´å¤šæˆ¿é–“ã€æ„Ÿæ‡‰å™¨åŠè‡ªå‹•åŒ–æƒ…å¢ƒã€‚"],
      ["å¦‚æžœå®¶äººä¸æ‡‚ç”¨ App æ€Žéº¼è¾¦ï¼Ÿ", "æ–¹æ¡ˆæœƒä¿ç•™ç°¡å–®æŽ§åˆ¶æ–¹å¼ï¼Œä¾‹å¦‚ç‰†æŽ£ã€æƒ…å¢ƒæŒ‰éˆ•æˆ–åŸºæœ¬æ•™å­¸ï¼Œä¸æ‡‰ä»¤æ—¥å¸¸ä½¿ç”¨è®Šå¾—æ›´éº»ç…©ã€‚"],
    ],
    contactEyebrow: "æº–å‚™è¦åŠƒç¬¬ä¸€å€‹è¨­å®šï¼Ÿ",
    contactTitle: "å…ˆç”±ä¸€å€‹å¯¦ç”¨æ™ºèƒ½å®¶å±…è¨­å®šé–‹å§‹ï¼Œä¹‹å¾Œå†é€æ­¥å‡ç´šã€‚",
    contactText:
      "å¯ç”¨ WhatsApp æˆ–é›»éƒµå‚³é€ä¼°ç®—ã€‚æˆ‘å€‘æœƒæŒ‰å–®ä½å¤§å°ã€ç¾æœ‰ç·šè·¯ã€ç”Ÿæ´»ç¿’æ…£åŠå®‰è£æ¢ä»¶å»ºè­°æœ€åˆé©çš„èµ·æ­¥æ–¹æ¡ˆã€‚",
    whatsappCta: "WhatsApp è«®è©¢",
    emailCta: "é›»éƒµå‚³é€ä¼°ç®—",
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
        description: "ä»¥åŸºæœ¬æ™ºèƒ½ç‡ˆå…‰åŠæƒ…å¢ƒæŽ§åˆ¶ç‚ºæ ¸å¿ƒï¼Œé©åˆæƒ³æå‡æ–¹ä¾¿åº¦ï¼Œä½†ä¸æƒ³ä¸€é–‹å§‹å¤ªè¤‡é›œçš„ä½å®…ã€‚",
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
        description: "ç‚ºæ—¥å¸¸èˆ’é©è€Œè¨­ï¼šç‡ˆå…‰ã€å†·æ°£ç¿’æ…£ã€çª—ç°¾ã€æ™‚é–“æŽ’ç¨‹ï¼Œä»¥åŠç¯€èƒ½è‡ªå‹•åŒ–é‚è¼¯ã€‚",
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
        description: "é›†ä¸­è™•ç†å‡ºå…¥å®‰å…¨ã€å®¶äººç‹€æ…‹ã€é–€çª—ç›£å¯ŸåŠé‡è¦é€šçŸ¥ï¼Œç‚ºæ—¥å¸¸å®¶åº­ç”Ÿæ´»æä¾›å¯¦ç”¨å®‰å¿ƒæ„Ÿã€‚",
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
      ["18:45", "æº–å‚™å›žå®¶", "æŒ‰ç…§ä½ é¸æ“‡çš„æ–¹æ¡ˆï¼Œå±‹ä¼å¯åœ¨ä½ å›žåˆ°å‰æº–å‚™åˆé©æƒ…å¢ƒã€‚", "bolt"],
      ["18:50", "æ‰“é–‹å¤§é–€", "çŽ„é—œåŠå®¢å»³ç‡ˆå…‰æŸ”å’Œäº®èµ·ï¼Œä¸æœƒçªç„¶åˆºçœ¼ã€‚", "light"],
      ["19:10", "æ™šé¤ / æ”¾é¬†æ¨¡å¼", "å®¢å»³è½‰ç‚ºæš–è‰²æƒ…å¢ƒï¼Œå†·æ°£åŠç‡ˆå…‰é…åˆæ™šä¸Šçš„ç”Ÿæ´»ç¯€å¥ã€‚", "sliders"],
      ["23:30", "å¤œé–“å®‰å…¨", "ä½Žäº®åº¦è·¯å¾‘ç‡ˆåŠå‡ºå…¥å£ç›£å¯Ÿï¼Œå¹«å±‹ä¼æ…¢æ…¢é€²å…¥ä¼‘æ¯ç‹€æ…‹ã€‚", "lock"],
    ],
  },
};

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
  const [activeScenario, setActiveScenario] = useState("home");
  const [finderGoal, setFinderGoal] = useState("comfort");
  const [finderStage, setFinderStage] = useState("livedIn");
  const [finderScope, setFinderScope] = useState("core");

  const t = content[language];

  const activePreview = useMemo(
    () => t.dashboardScenarios.find((item) => item.id === activeScenario) || t.dashboardScenarios[0],
    [activeScenario, t]
  );

  const finderRecommendationId = useMemo(() => {
    if (finderGoal === "safety") return "safety";
    if (finderGoal === "comfort" || finderGoal === "energy") return "comfort";
    if (finderStage === "renovating" || finderScope === "multi") return "comfort";
    return "starter";
  }, [finderGoal, finderStage, finderScope]);

  const selectedPackage = useMemo(
    () => t.packages.find((item) => item.id === selected) || t.packages[1],
    [selected, t]
  );

  const finderRecommendation = useMemo(
    () => t.packages.find((item) => item.id === finderRecommendationId) || t.packages[0],
    [finderRecommendationId, t]
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
    language === "zh" ? "Boson Smart æ™ºèƒ½å®¶å±…æ–¹æ¡ˆä¼°ç®—æŸ¥è©¢" : "Boson Smart Smart Home Package Estimate";

  const enquiryBody = [
    language === "zh" ? "ä½ å¥½ï¼Œæˆ‘æƒ³æŸ¥è©¢ä»¥ä¸‹æ™ºèƒ½å®¶å±…æ–¹æ¡ˆä¼°ç®—ï¼š" : "Hello, I would like to ask about this smart home package estimate:",
    "",
    `${language === "zh" ? "åŸºæœ¬æ–¹æ¡ˆ" : "Base package"}: ${selectedPackage.name}`,
    `${language === "zh" ? "å–®ä½é¡žåž‹" : "Apartment type"}: ${selectedApartment.label}`,
    `${language === "zh" ? "å‡ç´šé …ç›®" : "Add-ons"}: ${activeAddons.length ? activeAddons.map((item) => item.label).join(", ") : t.builderNoAddons}`,
    `${language === "zh" ? "ä¼°ç®—ç¸½é¡" : "Estimated total"}: ${formatHKD(total)}`,
    "",
    language === "zh" ? "è«‹è¯çµ¡æˆ‘å®‰æŽ’ä¸‹ä¸€æ­¥è©•ä¼°ã€‚" : "Please contact me for the next-step assessment.",
  ].join("\n");

  const mailtoHref = `mailto:${PLACEHOLDER_EMAIL}?subject=${encodeURIComponent(enquirySubject)}&body=${encodeURIComponent(enquiryBody)}`;
  const whatsappHref = `https://wa.me/${PLACEHOLDER_WHATSAPP}?text=${encodeURIComponent(enquiryBody)}`;

  function toggleAddon(id) {
    setSelectedAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function applyFinderRecommendation() {
    setSelected(finderRecommendationId);

    if (finderRecommendationId === "comfort") {
      setSelectedAddons((current) => Array.from(new Set([...current, "motion"])));
    }

    if (finderRecommendationId === "safety") {
      setSelectedAddons((current) => Array.from(new Set([...current, "doorbell"])));
    }

    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth", block: "start" });
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

          <div className="dashboard-card scenario-preview">
            <div className="dashboard-inner">
              <div className="dashboard-head">
                <div>
                  <small>{t.dashboardModeLabel}</small>
                  <strong>{activePreview.title}</strong>
                </div>
                <span>{activePreview.status}</span>
              </div>

              <div className="preview-tabs" role="tablist" aria-label={t.dashboardModeLabel}>
                {t.dashboardScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveScenario(scenario.id)}
                    className={scenario.id === activeScenario ? "active" : ""}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>

              <div className="dashboard-list">
                {activePreview.rows.map(([zone, mode, value]) => (
                  <div className="dashboard-row" key={`${activePreview.id}-${zone}`}>
                    <span><strong>{zone}</strong><small>{mode}</small></span>
                    <em>{value}</em>
                  </div>
                ))}
              </div>

              <div className="preview-package">
                <span>{language === "zh" ? "å»ºè­°æ–¹æ¡ˆ" : "Suggested package"}</span>
                <strong>{activePreview.package}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section finder-section">
          <div className="finder-card">
            <div className="finder-copy">
              <div className="eyebrow">{language === "zh" ? "20 ç§’æ–¹æ¡ˆå»ºè­°" : "20-second package finder"}</div>
              <h2>
                {language === "zh"
                  ? "å””è‚¯å®šç”±é‚Šå€‹æ–¹æ¡ˆé–‹å§‹ï¼Ÿå…ˆç­”ä¸‰æ¢å•é¡Œã€‚"
                  : "Not sure which package to start with? Answer three quick questions."}
              </h2>
              <p>
                {language === "zh"
                  ? "é€™ä¸æ˜¯ç¡¬æ€§å ±åƒ¹ï¼Œè€Œæ˜¯å¹«å®¢æˆ¶å…ˆæ‰¾åˆ°æœ€æŽ¥è¿‘çš„èµ·æ­¥æ–¹å‘ï¼Œå†å¸¶åˆ°çµ„åˆå™¨èª¿æ•´ã€‚"
                  : "This is not a hard quotation. It helps customers find the closest starting direction, then continue into the builder."}
              </p>
            </div>

            <div className="finder-controls">
              <div className="finder-group">
                <span>{language === "zh" ? "ä¸»è¦ç›®æ¨™" : "Main goal"}</span>
                <div>
                  {[
                    ["comfort", language === "zh" ? "èˆ’é©" : "Comfort"],
                    ["energy", language === "zh" ? "ç¯€èƒ½" : "Energy"],
                    ["safety", language === "zh" ? "å®‰å…¨" : "Safety"],
                    ["starter", language === "zh" ? "æ–¹ä¾¿å…¥é–€" : "Easy start"],
                  ].map(([id, label]) => (
                    <button key={id} onClick={() => setFinderGoal(id)} className={finderGoal === id ? "active" : ""}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="finder-group">
                <span>{language === "zh" ? "å–®ä½ç‹€æ…‹" : "Home stage"}</span>
                <div>
                  {[
                    ["livedIn", language === "zh" ? "å·²å…¥ä½" : "Lived-in"],
                    ["renovating", language === "zh" ? "è£ä¿®ä¸­/æº–å‚™è£ä¿®" : "Renovating"],
                  ].map(([id, label]) => (
                    <button key={id} onClick={() => setFinderStage(id)} className={finderStage === id ? "active" : ""}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="finder-group">
                <span>{language === "zh" ? "æƒ³æŽ§åˆ¶ç¯„åœ" : "Control scope"}</span>
                <div>
                  {[
                    ["core", language === "zh" ? "ä¸€è‡³å…©å€‹æ ¸å¿ƒå€" : "Core areas"],
                    ["multi", language === "zh" ? "å¤šæˆ¿é–“/å¤šæƒ…å¢ƒ" : "Multi-room"],
                  ].map(([id, label]) => (
                    <button key={id} onClick={() => setFinderScope(id)} className={finderScope === id ? "active" : ""}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="finder-result">
              <span>{language === "zh" ? "å»ºè­°èµ·æ­¥æ–¹æ¡ˆ" : "Recommended starting package"}</span>
              <h3>{finderRecommendation.name}</h3>
              <p>{finderRecommendation.description}</p>
              <button onClick={applyFinderRecommendation}>
                {language === "zh" ? "å¥—ç”¨åˆ°çµ„åˆå™¨" : "Apply to builder"} <Icon name="arrow" />
              </button>
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
                <strong className="price">{language === "zh" ? `${formatHKD(item.basePrice)} èµ·` : `From ${formatHKD(item.basePrice)}`}</strong>
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
            eyebrow={language === "zh" ? "åƒ¹æ ¼å‡è¨­" : "Package assumptions"}
            title={language === "zh" ? "ã€Œèµ·ã€åƒ¹æ‡‰è©²æ¸…æ¥šï¼Œè€Œä¸æ˜¯ä»¤äººä¼°ä¼°ä¸‹ã€‚" : "Make the â€œfromâ€ price clear, not vague."}
            text={
              language === "zh"
                ? "ä»¥ä¸‹å‡è¨­ä»¤å®¢æˆ¶æ›´å®¹æ˜“ç†è§£ä¼°ç®—åƒ¹éŒ¢çš„åŸºç¤Žã€‚æœ€çµ‚ç¯„åœä»æœƒæŒ‰ç¾å ´ç·šè·¯ã€è¨­å‚™å“ç‰ŒåŠå®‰è£æ¢ä»¶ç¢ºèªã€‚"
                : "These assumptions help customers understand what the starting prices are based on. Final scope is still confirmed after checking wiring, device brand, and installation condition."
            }
          />

          <div className="assumption-grid">
            {(language === "zh"
              ? [
                  ["Starter èµ·åƒ¹å‡è¨­", "é©åˆä¸€å€‹æ ¸å¿ƒå€åŸŸï¼Œä¾‹å¦‚çŽ„é—œæˆ–å®¢å»³ï¼ŒåŒ…å«åŸºæœ¬æ™ºèƒ½æŽ§åˆ¶ã€App è¨­å®šã€ç°¡å–®æƒ…å¢ƒåŠä½¿ç”¨æ•™å­¸ã€‚"],
                  ["Comfort & Energy èµ·åƒ¹å‡è¨­", "é©åˆå®¢å»³åŠä¸»è¦ç”Ÿæ´»å€åŸŸï¼Œé‡é»žæ˜¯ç‡ˆå…‰ã€å†·æ°£ç¿’æ…£ã€æ™‚é–“æŽ’ç¨‹åŠèˆ’é©ç¯€èƒ½å ´æ™¯ã€‚"],
                  ["Family Safety èµ·åƒ¹å‡è¨­", "é©åˆå‡ºå…¥å£åŠä¸»è¦é–€çª—ç›£å¯Ÿï¼Œé‡é»žæ˜¯å‡ºå…¥å®‰å…¨ã€æé†’é€šçŸ¥ã€å¤œé–“å®‰å…¨ç‡ˆå…‰åŠåŸºæœ¬äº¤ä»˜ã€‚"],
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
              <div className="eyebrow">{language === "zh" ? "ç¤ºä¾‹è¨­å®š" : "Example setup"}</div>
              <h2>
                {language === "zh"
                  ? "å…©æˆ¿å–®ä½å¯å…ˆç”±å®¢å»³ã€çŽ„é—œåŠå¤œé–“å®‰å…¨é–‹å§‹ã€‚"
                  : "A 2-bedroom flat can start with living room, entry, and night safety."}
              </h2>
              <p>
                {language === "zh"
                  ? "é€™ä¸æ˜¯å›ºå®šæ–¹æ¡ˆï¼Œè€Œæ˜¯è®“å®¢æˆ¶ç†è§£å¦‚ä½•ç”±å¯¦ç”¨ç¯„åœé–‹å§‹ï¼Œå†é€æ­¥åŠ å…¥ç¡æˆ¿ã€çª—ç°¾ã€å†·æ°£æˆ–æ›´å¤šæ„Ÿæ‡‰å™¨ã€‚"
                  : "This is not a fixed package. It shows how a customer can start from practical areas, then add bedrooms, curtains, air-con, or more sensors later."}
              </p>
            </div>

            <div className="sample-list">
              {(language === "zh"
                ? ["çŽ„é—œå›žå®¶ç‡ˆå…‰", "å®¢å»³æ™šé–“æƒ…å¢ƒ", "å†·æ°£æ™‚é–“è¨­å®š", "å¤œé–“ä½Žäº®åº¦è·¯å¾‘ç‡ˆ", "åŸºæœ¬ App åŠä½¿ç”¨æ•™å­¸"]
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
              <div className="eyebrow">{language === "zh" ? "ç§éš±èˆ‡å®‰å…¨" : "Privacy and safety"}</div>
              <h2>
                {language === "zh"
                  ? "é–€éŽ–ã€é¡é ­ã€æ„Ÿæ‡‰å™¨å’Œå¸³æˆ¶è¨­å®šï¼Œå¿…é ˆäº¤ä»£æ¸…æ¥šã€‚"
                  : "Door locks, cameras, sensors, and accounts must be handled clearly."}
              </h2>
              <p>
                {language === "zh"
                  ? "æ™ºèƒ½å®¶å±…ä¸åªæ˜¯æ–¹ä¾¿ï¼Œä¹Ÿæ¶‰åŠå®¶åº­ç§éš±åŠå®‰å…¨ã€‚ç¶²ç«™æ‡‰æ¸…æ¥šèªªæ˜Žè¨­å®šåŽŸå‰‡ï¼Œè®“å®¢æˆ¶çŸ¥é“ç³»çµ±å±¬æ–¼è‡ªå·±ï¼Œè€Œä¸æ˜¯ä¾è³´ä¸æ¸…æ¥šçš„ç¬¬ä¸‰æ–¹æŽ§åˆ¶ã€‚"
                  : "Smart homes are not only about convenience. They also involve household privacy and security. The site should explain how setup is handled so customers know the system belongs to them, not an unclear third-party controller."}
              </p>
            </div>

            <div className="privacy-points">
              {(language === "zh"
                ? [
                    ["å¸³æˆ¶ç”±å®¢æˆ¶æ“æœ‰", "ä¸»è¦ Appã€é–€éŽ–ã€é¡é ­åŠèªžéŸ³åŠ©ç†å¸³æˆ¶æ‡‰ä»¥å®¢æˆ¶è³‡æ–™å»ºç«‹æˆ–äº¤é‚„å®¢æˆ¶ç®¡ç†ã€‚"],
                    ["é¡é ­ä½ç½®å…ˆç¢ºèª", "å¦‚æ¶‰åŠé¡é ­æˆ–è¦–åƒé–€éˆ´ï¼Œæ‡‰å…ˆç¢ºèªä½¿ç”¨ç›®çš„ã€è§’åº¦åŠç§éš±è€ƒæ…®ã€‚"],
                    ["ä¿ç•™æ—¥å¸¸æ‰‹å‹•æŽ§åˆ¶", "æ™ºèƒ½è¨­å®šä¸æ‡‰ä»¤å®¶äººå¤±åŽ»åŸºæœ¬ç‰†æŽ£æˆ–ç°¡å–®æŽ§åˆ¶æ–¹å¼ã€‚"],
                    ["äº¤ä»˜æ™‚èªªæ˜Žæ¬Šé™", "å®Œæˆå¾Œæ‡‰èªªæ˜Žä¸»è¦æ¬Šé™ã€é€šçŸ¥ã€å®¶åº­æˆå“¡åŠ å…¥æ–¹å¼åŠæ—¥å¾Œæ›´æ”¹æ–¹æ³•ã€‚"],
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
              <div className="eyebrow">{language === "zh" ? "å ±åƒ¹å¦‚ä½•ç¢ºèª" : "How quotation is confirmed"}</div>
              <h2>
                {language === "zh"
                  ? "ç¶²ä¸Šä¼°ç®—å…ˆå¹«ä½ é–‹å§‹ï¼Œæœ€çµ‚å ±åƒ¹è¦çœ‹ç¾å ´æ¢ä»¶ã€‚"
                  : "The online estimate helps you start. The final quotation depends on the actual home."}
              </h2>
              <p>
                {language === "zh"
                  ? "é€™æ¨£å¯ä»¥ä¿æŒåƒ¹æ ¼é€æ˜Žï¼ŒåŒæ™‚é¿å…å› ç·šè·¯ã€å“ç‰Œã€å®‰è£é›£åº¦æˆ–è£ä¿®ç‹€æ…‹ä¸åŒè€Œä½Žä¼°æˆæœ¬ã€‚"
                  : "This keeps the pricing transparent while avoiding underquoting caused by wiring, device brand, installation complexity, or renovation stage."}
              </p>
            </div>

            <div className="quote-steps">
              {(language === "zh"
                ? [
                    ["01", "å»ºç«‹ä¼°ç®—", "å…ˆç”¨çµ„åˆå™¨é¸æ–¹æ¡ˆã€å–®ä½é¡žåž‹åŠå‡ç´šé …ç›®ã€‚"],
                    ["02", "äº†è§£ç¾å ´", "ç¢ºèªç·šè·¯ã€é–‹é—œã€Wiâ€‘Fiã€é–€çª—åŠå®‰è£å¯è¡Œæ€§ã€‚"],
                    ["03", "ç¢ºèªç¯„åœ", "åˆ—æ˜ŽåŒ…æ‹¬é …ç›®ã€å¦å ±é …ç›®ã€ç”¢å“é¸æ“‡åŠå®‰è£æ¢ä»¶ã€‚"],
                    ["04", "å®‰æŽ’å®‰è£", "å®Œæˆè¨­å®šã€æ¸¬è©¦ã€äº¤ä»˜æ¸…å–®åŠåŸºæœ¬ä½¿ç”¨æ•™å­¸ã€‚"],
                  ]
                : [
                    ["01", "Build estimate", "Choose package, apartment type, and optional upgrades."],
                    ["02", "Check site condition", "Review wiring, switches, Wiâ€‘Fi, doors/windows, and installation feasibility."],
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
              <div className="eyebrow">{language === "zh" ? "äº¤ä»˜èˆ‡å¾ŒçºŒ" : "Handover and aftercare"}</div>
              <h2>
                {language === "zh"
                  ? "è£å®Œä¸æ˜¯çµ‚é»žï¼ŒçœŸæ­£é‡è¦æ˜¯å®¶äººæœƒç”¨ã€‚"
                  : "Installation is not the end. The real goal is that the household can use it."}
              </h2>
              <p>
                {language === "zh"
                  ? "æ™ºèƒ½å®¶å±…æœ€å¸¸è¦‹å¤±æ•—ä½ï¼Œæ˜¯è£ç½®å¾ˆå¤šä½†å®¶äººä¸æ‡‚ç”¨ï¼Œæˆ–è€…æ—¥å¾Œæ²’æœ‰äººçŸ¥é“æ€Žæ¨£èª¿æ•´ã€‚äº¤ä»˜æ™‚è¦æ¸…æ¥šèªªæ˜Žæ“ä½œã€æ¬Šé™åŠå¾ŒçºŒå‡ç´šæ–¹å‘ã€‚"
                  : "A common smart-home failure is installing many devices without making them easy for the household to use or adjust later. Handover should explain controls, permissions, and future upgrade direction."}
              </p>
            </div>

            <div className="aftercare-grid">
              {(language === "zh"
                ? [
                    ["äº¤ä»˜æ¸…å–®", "æ•´ç†å·²å®‰è£è¨­å‚™ã€æŽ§åˆ¶æ–¹å¼ã€Appã€å¸³æˆ¶åŠä¸»è¦æƒ…å¢ƒã€‚"],
                    ["åŸºæœ¬æ•™å­¸", "ç¤ºç¯„æ—¥å¸¸æ“ä½œï¼Œä¾‹å¦‚å›žå®¶ã€é›¢å®¶ã€å¤œé–“ã€æ‰‹å‹•æŽ§åˆ¶åŠé€šçŸ¥ã€‚"],
                    ["å¾®èª¿æœŸ", "æŒ‰å¯¦éš›ä½¿ç”¨æ„Ÿå—ï¼Œä½œåŸºæœ¬æƒ…å¢ƒæˆ–è¨­å®šèª¿æ•´ã€‚"],
                    ["å‡ç´šè·¯ç·š", "ç”±ä¸€å€‹å€åŸŸé–‹å§‹ï¼Œæ—¥å¾Œå†åŠ æˆ¿é–“ã€æ„Ÿæ‡‰å™¨ã€çª—ç°¾æˆ–èƒ½æºç®¡ç†ã€‚"],
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
      <div className="mobile-sticky-cta" aria-label={language === "zh" ? "快速操作" : "Quick actions"}>
        <a href="#builder">
          {language === "zh" ? "建立估算" : "Build estimate"}
        </a>
        <a href={typeof whatsappHref !== "undefined" ? whatsappHref : "#contact"} target="_blank" rel="noreferrer">
          <Icon name="phone" />
          {language === "zh" ? "WhatsApp" : "WhatsApp"}
        </a>
      </div>


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


