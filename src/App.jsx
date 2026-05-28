import React, { useEffect, useMemo, useRef, useState } from "react";

const CONTACT_EMAIL = "hello@bosonsmart.hk";
const WHATSAPP_NUMBER = "85200000000";

function Icon({ name, className = "" }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    shield: <><path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4" /></>,
    moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    phone: <path d="M21 15.5v3a2 2 0 0 1-2.2 2 18 18 0 0 1-8-2.8 17.5 17.5 0 0 1-5.5-5.5 18 18 0 0 1-2.8-8A2 2 0 0 1 4.5 2h3A2 2 0 0 1 9.5 3.7l.5 2.7a2 2 0 0 1-.6 1.8L8.2 9.4a14 14 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 1.8-.6l2.7.5a2 2 0 0 1 1.7 2Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    sparkle: <><path d="M12 3 14 9l6 3-6 3-2 6-2-6-6-3 6-3 2-6Z" /><path d="M19 3v4M17 5h4" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.check}</svg>;
}

const formatHKD = (value) => `HK$${value.toLocaleString("en-HK")}`;

const content = {
  en: {
    nav: { home: "Home", scenarios: "Scenarios", solutions: "Solutions", estimate: "Estimate", contact: "Contact" },
    brandSub: "Smart living system design for Hong Kong homes",
    buildEstimate: "Build Estimate",
    trust: ["Installed and configured", "Final quote after home check", "Family-friendly controls", "Account handover explained"],
    common: {
      whatsapp: "WhatsApp estimate",
      email: "Email estimate",
      live: "Live estimate",
      review: "Review estimate",
      noPayment: "No online payment. Final quote only after checking your home.",
      quoteNote: "Online prices are starting estimates only. Final quotation depends on wiring, device choice, Wi‑Fi coverage, installation difficulty, and site condition.",
      continuePackages: "Continue to packages",
    },
    home: {
      eyebrow: "Comfortable smart living for Hong Kong homes",
      title: "Show your home what to do — then we install the system behind it.",
      body: "Boson Smart designs and installs calm, practical smart-living systems for Hong Kong flats ? lighting, curtains, comfort, entry, safety and family controls that work together naturally.",
      primary: "Explore scenario timelines",
      secondary: "See packages",
      introTitle: "Start with the feeling you want at home.",
      introBody: "Tell us how mornings, evenings, guests, pets, sleep and safety should work. We turn that into a practical smart-home plan you can actually live with.",
    },
    scenariosPage: {
      eyebrow: "Scroll scenarios",
      title: "Scroll through a real home routine.",
      body: "Choose a mode and move through the timeline. Each step shows what the home does, why it helps, and what setup may be involved.",
      choose: "Choose a mode",
      whatHappens: "What the home does",
      whyHelps: "Why it helps",
      possibleSetup: "Possible setup",
      activeSetup: "Active setup",
      suggested: "Usually suitable",
      cta: "Continue to packages",
      progress: "Routine progress",
    },
    solutionsPage: {
      eyebrow: "Solutions",
      title: "What we design for daily smart living.",
      body: "This page connects daily living needs to practical smart system design across lighting, comfort, curtains, entry, safety, sensors, and family controls. You do not need to know the device name first. Start with the outcome.",
      task: "Customer task",
      setup: "Possible setup",
      check: "Things to check",
      package: "Usually fits",
    },
    estimatePage: {
      eyebrow: "Packages and estimate",
      title: "Choose a starting package, then add useful items.",
      body: "The estimate builder turns scenarios and tasks into a rough starting budget. Send it by WhatsApp so we can check what is practical for your flat.",
      package: "Package",
      flat: "Flat type",
      addons: "Add-ons",
      noAddons: "No add-ons selected",
    },
    contactPage: {
      eyebrow: "Contact Boson Smart",
      title: "Tell us how you want your home to support daily living.",
      body: "Share your flat type, renovation stage, main routine, existing devices, and what you want to improve. We will review your home condition before confirming the next step.",
      detailsTitle: "A few details help us give better advice.",
      details: [
        "Flat type, approximate area, and rooms you want to include",
        "Renovation stage: lived-in, fitting out, new handover, or pre-renovation planning",
        "Main routines: morning, night, gathering, pet-at-home, sleep, safety, or comfort",
        "Existing devices and platforms: smart lock, Wi-Fi mesh, smart lights, voice assistant, cameras, curtain motor, Apple Home / Google / Alexa",
        "Photos or plan: switch positions, router location, entry door, curtain rail, key rooms, DB box if available",
        "Preferred control method: wall switch, scene button, app, voice, schedule, or family-friendly manual fallback",
        "Budget range, must-haves, and nice-to-haves so we can design the first practical phase"
      ], nextTitle: "What happens after you contact us?",
      next: [["We review your routine", "We check your selected mode, home type, and likely setup."], ["We ask for missing details", "If needed, we ask about wiring, Wi‑Fi, doors, curtains, or device preferences."], ["We confirm whether it is practical", "We explain what looks suitable, what may need checking, and what may require separate quotation."], ["We arrange the next step", "If the scope makes sense, we move toward assessment, quotation, and installation planning."]],
    },
    modes: [
      {
        id: "morning",
        label: "Morning Mode",
        icon: "sun",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_38%)]",
        title: "Morning Mode",
        headline: "From waking up to leaving home.",
        subtitle: "Start the day with less rushing, fewer forgotten switches, and a smoother leaving-home routine.",
        package: "Starter / Comfort",
        chips: ["Wake", "Bathroom", "Breakfast", "Away"],
        steps: [
          { time: "07:00", title: "Soft Wake", room: "Bedroom", happens: "The room gently brightens. Curtains can open if suitable. Air-con or fan adjusts.", helps: "Waking up feels less abrupt and more natural.", setup: ["Bedroom scene", "Curtain option", "AC / fan routine"] },
          { time: "07:10", title: "Bedroom Fresh Start", room: "Bedroom", happens: "Lighting changes from sleep mode to daytime mode.", helps: "The room feels ready for the day instead of staying in sleep mode.", setup: ["Lighting preset", "Scene button", "Schedule"] },
          { time: "07:25", title: "Bathroom Ready", room: "Bathroom", happens: "Bathroom light and ventilation prepare for use.", helps: "Less fumbling for switches while still half-awake.", setup: ["Motion lighting", "Ventilation timer"] },
          { time: "07:45", title: "Breakfast Assist", room: "Kitchen / Dining", happens: "Kitchen or dining lighting turns on. Selected safe appliances can be prepared if suitable.", helps: "The morning routine feels more organized.", setup: ["Dining scene", "Selected smart plug"] },
          { time: "08:05", title: "Outfit & Weather Cue", room: "Entry / Bedroom", happens: "A simple reminder can show rain, humidity, or weather before leaving.", helps: "You are less likely to forget an umbrella or jacket.", setup: ["Voice assistant", "Display", "Weather routine"] },
          { time: "08:15", title: "Bag / Keys Reminder", room: "Entry", happens: "A reminder near the entrance can cue keys, wallet, umbrella, or work bag.", helps: "Fewer last-minute checks and forgotten items.", setup: ["Entry scene", "Smart speaker", "Reminder display"] },
          { time: "08:20", title: "Leaving Home Check", room: "Whole home", happens: "Selected lights, air-con, curtains, and door/window status are checked.", helps: "You leave with more confidence.", setup: ["Away mode", "Door/window sensors", "Smart switches"] },
          { time: "08:25", title: "Energy-Saving Day Mode", room: "Whole home", happens: "Unneeded devices turn off and the home stays in low-use mode.", helps: "The flat avoids unnecessary electricity use while empty.", setup: ["Away mode", "Schedules", "Selected smart plugs"] },
        ],
      },
      {
        id: "night",
        label: "Night Mode",
        icon: "moon",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_40%)]",
        title: "Night Mode",
        headline: "From arriving home to deep rest.",
        subtitle: "The evening routine adapts from decompression, dinner, entertainment, cleanup, personal time, cooldown, sleep, and late-night safety.",
        package: "Comfort / Safety",
        chips: ["Entry", "Dinner", "Relax", "Sleep"],
        steps: [
          { time: "18:45", title: "Homecoming Mode", room: "Living room", happens: "Living room can pre-cool. Entry and living room scenes prepare before or as you arrive.", helps: "You do not enter a hot, dark, stressful flat.", setup: ["AC control", "Door sensor", "Welcome scene"] },
          { time: "18:50", title: "Entry Decompression", room: "Entry", happens: "Entry light rises softly and the home shifts into a calmer scene.", helps: "The transition from outside stress to home feels intentional.", setup: ["Entry lighting", "Door sensor", "Warm scene"] },
          { time: "19:10", title: "Dinner Assist", room: "Dining", happens: "Dining lighting becomes warmer and brighter. Curtains can close if suitable.", helps: "Dinner feels more relaxed without adjusting everything manually.", setup: ["Dining scene", "Curtain option", "Scene button"] },
          { time: "20:00", title: "TV Relax", room: "Living room", happens: "Living room lights dim, glare reduces, and the room moves into TV mode.", helps: "The room feels comfortable for watching without harsh lighting.", setup: ["TV scene", "Dimming option", "Curtain control"] },
          { time: "20:45", title: "Shower / Cleanup", room: "Bathroom / Kitchen", happens: "Bathroom light and ventilation can run with a timer. Dining or kitchen cleanup lighting becomes brighter.", helps: "Cleanup feels easier and ventilation is less likely to be forgotten.", setup: ["Bathroom motion light", "Ventilation timer", "Cleanup scene"] },
          { time: "21:15", title: "Choose your evening path", room: "Personal zone", happens: "Gaming, workout, or light-work scenes can prepare different parts of the home.", helps: "The home supports your real evening habit instead of one fixed routine.", setup: ["Gaming scene", "Workout scene", "Focus scene"], branches: [["Gaming", "Ambient lighting and desk setup."], ["Workout", "Brighter lights, fan, and music option."], ["Light Work", "Desk light and focus scene without waking the whole home."]] },
          { time: "22:30", title: "Evening Cooldown", room: "Whole home", happens: "Lighting gradually warms and dims. The home begins moving away from active mode.", helps: "The evening slows down naturally.", setup: ["Dim-down scene", "Timed routine"] },
          { time: "23:00", title: "Pre-Sleep Mode", room: "Bedroom", happens: "Bedroom temperature, lights, and curtains prepare for sleep.", helps: "Less manual setup before bed.", setup: ["Bedroom scene", "AC routine", "Curtain option"] },
          { time: "23:30", title: "Sleep Mode", room: "Bedroom", happens: "Selected lights turn off. Only essential low-level or safety settings remain.", helps: "The home becomes quiet and simple.", setup: ["Sleep scene", "Selected standby settings"] },
          { time: "02:30", title: "Night Safety / Late-Night Toilet Assist", room: "Hallway / Bathroom", happens: "Low-level path lighting turns on only when movement is detected.", helps: "Safer bathroom trips without bright lights waking everyone.", setup: ["Motion sensor", "Low-level path light", "Bathroom assist"] },
        ],
      },
      {
        id: "gathering",
        label: "Gathering Mode",
        icon: "users",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.20),transparent_42%)]",
        title: "Gathering Mode",
        headline: "Make a small flat feel ready for guests.",
        subtitle: "Prepare the home for arrival, dining, conversation, entertainment, bathroom use, comfort adjustment, cleanup, and reset.",
        package: "Starter / Comfort",
        chips: ["Welcome", "Dining", "Movie", "Reset"],
        steps: [
          { time: "Before guests", title: "Pre-Guest Prep", room: "Living room", happens: "Living room lighting brightens. Air-con starts preparing the room. Curtains adjust if needed.", helps: "The flat feels ready before people arrive.", setup: ["Living room scene", "AC schedule", "Curtain option"] },
          { time: "Arrival", title: "Welcome Entry", room: "Entry", happens: "Entry light turns on warmly when guests arrive.", helps: "Guests enter a prepared and welcoming space.", setup: ["Entry light", "Door sensor", "Welcome scene"] },
          { time: "Dinner", title: "Dining Scene", room: "Dining / Kitchen", happens: "Dining lights become warmer and more focused. Kitchen or serving lights support food preparation.", helps: "Hosting feels smoother in a compact flat.", setup: ["Dining scene", "Kitchen lighting", "Scene button"] },
          { time: "After dinner", title: "Conversation Mode", room: "Living room", happens: "Living room lighting softens and background ambience can be prepared.", helps: "The space feels calmer and more social.", setup: ["Lighting preset", "Speaker routine option"] },
          { time: "Entertainment", title: "Movie / Music Mode", room: "Living room", happens: "Lights dim, curtains close, and the entertainment scene becomes easier to start.", helps: "Guests feel a more premium home atmosphere.", setup: ["TV scene", "Curtain control", "Ambient lighting"] },
          { time: "Guest use", title: "Guest Bathroom Assist", room: "Bathroom", happens: "Bathroom light and ventilation respond automatically.", helps: "Guests do not need to find every switch.", setup: ["Motion light", "Ventilation timer"] },
          { time: "Late evening", title: "Late Gathering Dim", room: "Living room", happens: "Lighting becomes softer later in the night.", helps: "The home naturally moves into a quieter mood.", setup: ["Timed dimming scene"] },
          { time: "Leaving", title: "Guest Leaving", room: "Entry", happens: "Entry area becomes brighter for shoes, bags, and goodbye.", helps: "The exit moment is easier and less awkward.", setup: ["Entry scene", "Door area lighting"] },
          { time: "After guests", title: "Cleanup Assist", room: "Kitchen / Dining", happens: "Kitchen and dining lights brighten. Ventilation can continue for a short period.", helps: "Cleanup becomes easier after the gathering.", setup: ["Cleanup scene", "Ventilation timer"] },
          { time: "Reset", title: "Reset Home", room: "Whole home", happens: "The home returns to normal evening or sleep preparation mode.", helps: "You do not need to undo every setting manually.", setup: ["Reset scene", "Sleep preparation"] },
        ],
      },
      {
        id: "pet",
        label: "Pet Mode",
        icon: "eye",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_42%)]",
        title: "Pet Mode",
        headline: "From your pet’s point of view.",
        subtitle: "For the quiet hours when your pet is home before you return. Designed for comfort, awareness, and responsible use.",
        package: "Safety / Comfort",
        chips: ["Calm", "Comfort", "Check-in", "Return"],
        disclaimer: "Pet Mode is not a replacement for responsible pet care. Any setup involving temperature, feeding, water, or monitoring should be selected carefully and confirmed before installation.",
        steps: [
          { time: "Human leaves", title: "My Human Leaves", room: "Entry", happens: "The door closes and the home becomes calm instead of suddenly dark and empty.", helps: "The environment feels more stable for the pet.", setup: ["Away routine", "Selected soft lighting"] },
          { time: "Daytime", title: "Calm Home Setting", room: "Living room", happens: "Selected lights can stay softly on during chosen hours.", helps: "The flat does not feel completely empty.", setup: ["Soft lighting scene", "Schedule"] },
          { time: "Warm hours", title: "Comfort Temperature Routine", room: "Pet zone", happens: "The room can follow a safer cooling or fan routine depending on what the owner chooses.", helps: "Comfort can be managed more thoughtfully while the owner is away.", setup: ["AC routine", "Fan option", "Temperature awareness"] },
          { time: "Food / water", title: "Food / Water Area Support", room: "Feeding area", happens: "A small light near food or water can stay on during selected hours.", helps: "The pet’s familiar area remains visible.", setup: ["Low-level light", "Schedule"] },
          { time: "Resting", title: "Rest Zone Comfort", room: "Rest zone", happens: "The pet’s usual resting zone keeps a comfortable light or temperature setting.", helps: "Daily rest feels more consistent.", setup: ["Scene setting", "Curtain option", "AC / fan routine"] },
          { time: "Noise / visitor", title: "Doorbell / Noise Softening", room: "Entry", happens: "Doorbell or entry alerts can go to the owner’s phone.", helps: "The owner can know what happened without overcomplicating the home.", setup: ["Video doorbell", "Entry camera option", "Phone notification"] },
          { time: "Movement", title: "Pet Movement Awareness", room: "Pet zone", happens: "Selected motion or camera options can help the owner know the pet is active.", helps: "Useful for check-ins without disturbing the pet.", setup: ["Camera option", "Motion awareness"] },
          { time: "Check-in", title: "Human Check-In", room: "Owner phone", happens: "The owner can check selected camera or sensor status if needed.", helps: "Adds reassurance while away.", setup: ["Customer-owned camera/app account"] },
          { time: "Return", title: "Evening Welcome Back", room: "Entry / Living", happens: "Before the owner returns, the home changes back to welcome mode.", helps: "The pet and owner return to normal home rhythm.", setup: ["Welcome scene", "Lighting routine"] },
        ],
      },
    ],
    solutionTasks: [
 
        ["Whole-home daily routines need a clear system plan.", "Scene design across lighting, comfort, curtain, entry, safety sensors, and manual controls.", "Flat layout, family habits, renovation status, wiring, Wi-Fi coverage, and preferred control method.", "Design scope"],
        ["I want the home to feel ready at different times of day.", "Morning, night, gathering, away, sleep, and pet-at-home scene planning.", "Who uses the home, daily schedule, room priority, privacy, and manual override needs.", "All packages"],
        ["I need the system to work for family members, not only app users.", "Wall switches, scene buttons, remotes, schedules, app access, and simple fallback controls.", "Existing switches, elderly/children usage, shared access, and failure-safe behaviour.", "All packages"],
        ["I want a practical installation plan before buying devices.", "Pre-check of devices, wiring, mounting points, door/curtain conditions, and network reliability.", "Site condition, renovation stage, device compatibility, installation difficulty, and budget range.", "Pre-visit design"],
      ["Lights turn on automatically when I enter.", "Motion sensor + smart switch or selected lighting scene.", "Neutral wire, switch type, sensor placement, family preference.", "Starter / Comfort"],
      ["Air-con prepares the living room before I arrive.", "Smart AC control + schedule or routine trigger.", "AC model, remote compatibility, Wi‑Fi coverage, usage habit.", "Comfort"],
      ["Curtains close in the evening.", "Curtain motor + timed scene or button control.", "Curtain rail type, power point, curtain weight, installation access.", "Comfort"],
      ["I know if someone opens a door or window.", "Door/window sensor + phone notification.", "Mounting position, notification preference, privacy expectation.", "Safety"],
      ["Night walking is safer.", "Motion sensor + low-level path lighting.", "Light location, brightness, false trigger risk, family routine.", "Safety / Comfort"],
      ["Family can use it without only relying on an app.", "Wall switch, scene button, remote, or simple manual control.", "Existing switches, family habits, placement of controls.", "All packages"],
      ["I stop leaving selected lights or devices on.", "Away mode + smart switch or plug control.", "Which loads are safe to control, schedule, manual override.", "Starter / Comfort"],
      ["I want a simple smart door entry setup.", "Smart lock option, video doorbell, or entry camera.", "Door type, lock model, power, privacy, access permissions.", "Safety"],
    ],
    packages: [
      { id: "starter", name: "Essential Smart Living Plan", subtitle: "A calm first phase for everyday control.", icon: "home", tag: "Best first step", basePrice: 3800, description: "For flats that want a practical first phase: selected lighting scenes, home / away routine, app setup, family-friendly control, and clear handover without overbuilding.", includes: [
        "Routine design for selected daily areas",
        "Smart lighting scene setup for key zones",
        "Home / away preset configuration",
        "App setup and basic family access guidance",
        "Simple wall switch, scene button, or remote-control option",
        "Testing, adjustment, and handover explanation"
      ], assumption: "Starting price assumes one core area and compatible basic smart-control setup. Major rewiring, premium devices, extra rooms, and special installation conditions are quoted separately." },
      { id: "comfort", name: "Comfort & Atmosphere Plan", subtitle: "Make the home feel ready at the right moment.", icon: "sun", tag: "Most balanced", basePrice: 8800, description: "For homes that want comfort to feel natural: lighting presets, AC routines, curtain options, motion lighting, and energy-saving behaviour coordinated around real daily use.", includes: [
        "Morning, evening, dining, TV, and sleep scene planning",
        "Lighting presets for living, dining, work, and sleep",
        "AC or comfort schedule setup where compatible",
        "Curtain or blind automation option",
        "Motion lighting for selected zones",
        "Energy-saving daily routine settings"
      ], assumption: "Starting price assumes key daily areas such as living room and entry, with practical comfort settings. Extra rooms, curtain motors, complex wiring, and brand upgrades are quoted separately." },
      { id: "safety", name: "Family Safety & Awareness Plan", subtitle: "For entry awareness, night safety, and selected alerts.", icon: "shield", tag: "Best for families", basePrice: 7800, description: "For families who want a more aware home: entry setup, selected door/window status, night movement support, and phone alerts designed around privacy and real habits.", includes: [
        "Entry awareness design for the main door area",
        "Smart lock, video doorbell, or entry camera option",
        "Door / window sensors for selected key points",
        "Night safety lighting for hallway or bathroom routes",
        "Selected phone alerts with privacy expectations considered",
        "Family access and handover explanation"
      ], assumption: "Starting price assumes selected entry and safety points. Door condition, lock model, camera placement, privacy preference, and additional sensing points affect final quotation." },
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
    trust: ["包括安裝及設定", "上門了解後確認報價", "保留家人易用控制", "交付時說明帳戶權限"],
    common: {
      whatsapp: "WhatsApp 傳送估算",
      email: "電郵傳送估算",
      live: "即時估算",
      review: "調整估算",
      noPayment: "網站不會直接收款。最終報價會在了解單位後確認。",
      quoteNote: "網上價錢只作初步估算。最終報價會按線路、設備選擇、Wi‑Fi 覆蓋、安裝難度及現場情況確認。",
      continuePackages: "繼續查看起步方案",
    },
    home: {
      eyebrow: "為香港住宅而設的智能家居情境",
      title: "先想像你想屋企做到甚麼，再由我們安裝背後系統。",
      body: "Boson Smart 幫住戶將日常生活變成實用智能家居設定：Morning、Night、Gathering 及 Pet Mode。",
      primary: "查看情境時間線",
      secondary: "查看起步方案",
      introTitle: "先由生活情境開始，不是先由設備清單開始。",
      introBody: "用時間線代入真實生活，看看燈光、舒適、安全、窗簾、感應器及簡單控制如何配合。",
    },
    scenariosPage: {
      eyebrow: "滾動情境",
      title: "用滾動時間線，走過一個真實家居日常。",
      body: "選擇一個 Mode，沿着時間線查看每一步屋企會做甚麼、為甚麼有用，以及可能涉及甚麼設定。",
      choose: "選擇 Mode",
      whatHappens: "屋企會做甚麼",
      whyHelps: "有甚麼幫助",
      possibleSetup: "可能設定",
      activeSetup: "啟用設定",
      suggested: "通常適合",
      cta: "繼續查看起步方案",
      progress: "情境進度",
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
      package: "方案",
      flat: "單位類型",
      addons: "升級項目",
      noAddons: "未選擇升級項目",
    },
    contactPage: {
      eyebrow: "聯絡 Boson Smart",
      title: "告訴我們你想屋企做到甚麼。",
      body: "分享你的單位類型、主要生活情境及想改善的地方。我們會先了解你的單位情況，再建議下一步。",
      detailsTitle: "幾項資料可以幫我們更準確建議。",
      details: [
        "\u55ae\u4f4d\u985e\u578b\u3001\u7d04\u7565\u9762\u7a4d\uff0c\u4ee5\u53ca\u60f3\u7d0d\u5165\u7684\u623f\u9593",
        "\u73fe\u6642\u72c0\u614b\uff1a\u5df2\u5165\u4f4f\u3001\u88dd\u4fee\u4e2d\u3001\u65b0\u6a13\u4ea4\u6536\uff0c\u6216\u88dd\u4fee\u524d\u898f\u5283",
        "\u4e3b\u8981\u751f\u6d3b\u60c5\u5883\uff1a\u65e9\u4e0a\u3001\u591c\u665a\u3001\u805a\u6703\u3001\u5bf5\u7269\u3001\u7761\u7720\u3001\u5b89\u5168\u6216\u8212\u9069",
        "\u73fe\u6709\u8a2d\u5099\u53ca\u5e73\u53f0\uff1a\u667a\u80fd\u9580\u9396\u3001Wi-Fi mesh\u3001\u667a\u80fd\u71c8\u3001\u8a9e\u97f3\u52a9\u624b\u3001\u93e1\u982d\u3001\u7a97\u7c3e\u6469\u6253\u3001Apple Home / Google / Alexa",
        "\u76f8\u7247\u6216\u5e73\u9762\u5716\uff1a\u958b\u95dc\u4f4d\u3001Router \u4f4d\u7f6e\u3001\u5165\u6236\u9580\u3001\u7a97\u7c3e\u8def\u8ecc\u3001\u4e3b\u8981\u623f\u9593\uff0c\u5982\u6709\u53ef\u52a0\u96fb\u7bb1\u4f4d\u7f6e",
        "\u504f\u597d\u63a7\u5236\u65b9\u5f0f\uff1a\u7246\u63a3\u3001\u60c5\u5883\u63a3\u3001App\u3001\u8a9e\u97f3\u3001\u6642\u9593\u8868\uff0c\u6216\u5bb6\u4eba\u6613\u7528\u7684\u624b\u52d5\u5f8c\u5099\u63a7\u5236",
        "\u9810\u7b97\u7bc4\u570d\u3001\u5fc5\u9808\u9805\u76ee\u53ca\u53ef\u9078\u9805\u76ee\uff0c\u65b9\u4fbf\u5148\u8a2d\u8a08\u6700\u5be6\u969b\u7684\u7b2c\u4e00\u968e\u6bb5"
      ], nextTitle: "聯絡後會發生甚麼？",
      next: [["我們查看你的生活情境", "先了解你想改善的 Mode、單位類型及可能設定。"], ["補充缺少資料", "如有需要，會再了解線路、Wi‑Fi、門身、窗簾或設備偏好。"], ["確認是否可行", "說明哪些項目合適，哪些需要現場確認，哪些可能另行報價。"], ["安排下一步", "如果範圍合理，再進入評估、報價及安裝安排。"]],
    },
    modes: [
      {
        id: "morning",
        label: "Morning Mode",
        icon: "sun",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_38%)]",
        title: "Morning Mode",
        headline: "由起床到離家。",
        subtitle: "令早上少一點趕急、少一點忘記關掣，離家時更安心。",
        package: "Starter / Comfort",
        chips: ["起床", "浴室", "早餐", "離家"],
        steps: [
          { time: "07:00", title: "Soft Wake", room: "睡房", happens: "房間燈光柔和亮起。合適情況下窗簾可以打開，冷氣或風扇調整。", helps: "起床不會太突然，感覺更自然。", setup: ["睡房燈光情境", "窗簾選配", "冷氣 / 風扇設定"] },
          { time: "07:10", title: "Bedroom Fresh Start", room: "睡房", happens: "睡房由睡眠模式轉成日間模式。", helps: "房間不會一直停留在昏暗睡眠狀態。", setup: ["燈光預設", "情境按鈕", "時間設定"] },
          { time: "07:25", title: "Bathroom Ready", room: "浴室", happens: "浴室燈及抽氣準備好。", helps: "半醒狀態下不用摸黑找掣。", setup: ["人體感應燈", "抽氣時間設定"] },
          { time: "07:45", title: "Breakfast Assist", room: "廚房 / 飯廳", happens: "廚房或飯廳燈光亮起。合適安全設備可作預備。", helps: "早上流程更順。", setup: ["飯廳情境", "指定安全智能插座"] },
          { time: "08:05", title: "Outfit & Weather Cue", room: "玄關 / 睡房", happens: "可提示下雨、濕度或天氣。", helps: "減少忘記雨傘或外套。", setup: ["語音助理", "顯示屏", "天氣提示"] },
          { time: "08:15", title: "Bag / Keys Reminder", room: "玄關", happens: "玄關附近可提示鎖匙、銀包、雨傘或工作袋。", helps: "減少臨出門才發現漏東西。", setup: ["玄關情境", "智能喇叭", "提醒顯示"] },
          { time: "08:20", title: "Leaving Home Check", room: "全屋", happens: "檢查指定燈光、冷氣、窗簾及門窗狀態。", helps: "離家時更有信心。", setup: ["離家模式", "門窗感應", "智能開關"] },
          { time: "08:25", title: "Energy-Saving Day Mode", room: "全屋", happens: "不需要的設備關閉，屋企進入低耗電狀態。", helps: "無人在家時減少不必要用電。", setup: ["離家模式", "時間設定", "指定智能插座"] },
        ],
      },
      {
        id: "night",
        label: "Night Mode",
        icon: "moon",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_40%)]",
        title: "Night Mode",
        headline: "由回家到深度休息。",
        subtitle: "由減壓、晚飯、娛樂、清潔、個人時間、冷靜、睡眠，到夜間安全協助。",
        package: "Comfort / Safety",
        chips: ["玄關", "晚飯", "放鬆", "睡眠"],
        steps: [
          { time: "18:45", title: "Homecoming Mode", room: "客廳", happens: "客廳可以預冷，玄關及客廳情境準備好。", helps: "不會一入屋就面對又熱又暗的環境。", setup: ["智能冷氣控制", "門磁感應", "回家燈光情境"] },
          { time: "18:50", title: "Entry Decompression", room: "玄關", happens: "玄關燈柔和亮起，家中轉入較放鬆情境。", helps: "由外面壓力轉入回家狀態。", setup: ["玄關燈光", "門磁感應", "暖光情境"] },
          { time: "19:10", title: "Dinner Assist", room: "飯廳", happens: "飯廳燈光變暖變集中，窗簾可按需要關上。", helps: "晚飯時不用逐項手動調整。", setup: ["飯廳情境", "窗簾選配", "情境按鈕"] },
          { time: "20:00", title: "TV Relax", room: "客廳", happens: "客廳燈光調暗，減少反光，進入睇電視模式。", helps: "睇電視時光線更舒服。", setup: ["TV 情境", "調光選配", "窗簾控制"] },
          { time: "20:45", title: "Shower / Cleanup", room: "浴室 / 廚房", happens: "浴室燈及抽氣可按時間運作，廚房或飯廳清潔燈光變亮。", helps: "清潔更方便，也較少忘記關抽氣。", setup: ["浴室感應燈", "抽氣時間", "清潔情境"] },
          { time: "21:15", title: "Choose your evening path", room: "個人空間", happens: "遊戲、運動或輕工作情境可以準備不同空間。", helps: "屋企配合你真正的夜晚習慣，而不是只有一個固定模式。", setup: ["Gaming 情境", "Workout 情境", "Focus 情境"], branches: [["Gaming", "氣氛燈及桌面設定。"], ["Workout", "較明亮燈光、風扇及音樂選配。"], ["Light Work", "枱燈及專注情境，不令全屋太精神。"]] },
          { time: "22:30", title: "Evening Cooldown", room: "全屋", happens: "燈光逐漸變暖變暗，屋企開始離開活動模式。", helps: "晚上自然慢下來。", setup: ["漸暗情境", "時間設定"] },
          { time: "23:00", title: "Pre-Sleep Mode", room: "睡房", happens: "睡房溫度、燈光及窗簾準備睡眠。", helps: "睡前少一點手動調整。", setup: ["睡房情境", "冷氣設定", "窗簾選配"] },
          { time: "23:30", title: "Sleep Mode", room: "睡房", happens: "指定燈光關閉，只保留必要低亮度或安全設定。", helps: "屋企回到安靜簡單狀態。", setup: ["睡眠情境", "指定待機設定"] },
          { time: "02:30", title: "Night Safety / Late-Night Toilet Assist", room: "走廊 / 浴室", happens: "偵測到走動時，低亮度路徑燈才柔和亮起。", helps: "半夜去洗手間更安全，又不會強光刺醒家人。", setup: ["人體感應", "低亮度路徑燈", "浴室輔助"] },
        ],
      },
      {
        id: "gathering",
        label: "Gathering Mode",
        icon: "users",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.20),transparent_42%)]",
        title: "Gathering Mode",
        headline: "令細單位更適合招待客人。",
        subtitle: "由客人到達前、用餐、聊天、娛樂、浴室、舒適調整、清潔到重設。",
        package: "Starter / Comfort",
        chips: ["歡迎", "用餐", "娛樂", "重設"],
        steps: [
          { time: "客人到前", title: "Pre-Guest Prep", room: "客廳", happens: "客廳燈光變亮，冷氣開始準備，窗簾可按需要調整。", helps: "客人到之前，屋企已經有準備好招待的感覺。", setup: ["客廳情境", "冷氣時間設定", "窗簾選配"] },
          { time: "到達", title: "Welcome Entry", room: "玄關", happens: "客人到達時，玄關燈溫暖亮起。", helps: "入屋第一刻更舒服。", setup: ["玄關燈", "門磁感應", "歡迎情境"] },
          { time: "晚飯", title: "Dining Scene", room: "飯廳 / 廚房", happens: "飯廳燈光變暖更集中，廚房或上菜位置有足夠光。", helps: "細單位招呼客人更順。", setup: ["飯廳情境", "廚房燈光", "情境按鈕"] },
          { time: "飯後", title: "Conversation Mode", room: "客廳", happens: "客廳燈光變柔和，背景氣氛可準備。", helps: "空間感覺更適合聊天。", setup: ["燈光預設", "音樂設定選配"] },
          { time: "娛樂", title: "Movie / Music Mode", room: "客廳", happens: "燈光調暗、窗簾關上，娛樂情境更易開始。", helps: "家中氣氛更有質感。", setup: ["TV 情境", "窗簾控制", "氣氛燈"] },
          { time: "客人使用", title: "Guest Bathroom Assist", room: "浴室", happens: "浴室燈及抽氣自動反應。", helps: "客人不用摸索每個開關。", setup: ["人體感應燈", "抽氣時間"] },
          { time: "夜深", title: "Late Gathering Dim", room: "客廳", happens: "夜深後燈光變得更柔和。", helps: "家中自然轉入較安靜氣氛。", setup: ["時間漸暗情境"] },
          { time: "離開", title: "Guest Leaving", room: "玄關", happens: "玄關區變亮，方便穿鞋、拿袋及道別。", helps: "離開時更順，不會昏暗混亂。", setup: ["玄關情境", "門口燈光"] },
          { time: "客人走後", title: "Cleanup Assist", room: "廚房 / 飯廳", happens: "廚房及飯廳燈光變亮，抽氣可延續一段時間。", helps: "聚會後清潔更方便。", setup: ["清潔情境", "抽氣時間"] },
          { time: "重設", title: "Reset Home", room: "全屋", happens: "屋企回復正常晚間或睡前模式。", helps: "不用逐項把設定改回來。", setup: ["重設情境", "睡前準備"] },
        ],
      },
      {
        id: "pet",
        label: "Pet Mode",
        icon: "eye",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_42%)]",
        title: "Pet Mode",
        headline: "由寵物角度出發。",
        subtitle: "為主人不在家時的安靜時段而設，重點是舒適、狀態掌握及負責任使用。",
        package: "Safety / Comfort",
        chips: ["平靜", "舒適", "查看", "回家"],
        disclaimer: "寵物模式不能取代日常照顧。任何涉及溫度、餵食、飲水或監察的設備，都應先確認安全性及適合性。",
        steps: [
          { time: "主人離開", title: "My Human Leaves", room: "玄關", happens: "門關上後，家中保持平靜，不會突然全黑全靜。", helps: "環境對寵物更穩定。", setup: ["離家情境", "指定柔和燈光"] },
          { time: "日間", title: "Calm Home Setting", room: "客廳", happens: "指定燈光可在選定時段柔和亮起。", helps: "屋企不會像完全空置。", setup: ["柔和燈光情境", "時間設定"] },
          { time: "較熱時段", title: "Comfort Temperature Routine", room: "寵物區", happens: "可按主人選擇，設定較安全的冷氣或風扇流程。", helps: "主人不在家時仍可更有計劃地照顧舒適度。", setup: ["冷氣設定", "風扇選配", "溫度掌握"] },
          { time: "食水位置", title: "Food / Water Area Support", room: "食水區", happens: "食物或水附近可在指定時段保留低亮度燈。", helps: "熟悉位置保持可見。", setup: ["低亮度燈", "時間設定"] },
          { time: "休息", title: "Rest Zone Comfort", room: "休息區", happens: "常用休息位置保持合適光線或溫度。", helps: "日常休息更穩定。", setup: ["情境設定", "窗簾選配", "冷氣 / 風扇設定"] },
          { time: "聲音 / 訪客", title: "Doorbell / Noise Softening", room: "玄關", happens: "門鈴或入口提醒可傳送給主人。", helps: "主人可知道發生甚麼，不用令家中系統過份複雜。", setup: ["視像門鈴", "入口鏡頭選配", "手機提示"] },
          { time: "活動", title: "Pet Movement Awareness", room: "寵物區", happens: "指定動作或鏡頭選項可讓主人知道寵物有活動。", helps: "可作簡單查看，不一定打擾寵物。", setup: ["鏡頭選項", "活動感應"] },
          { time: "查看", title: "Human Check-In", room: "主人手機", happens: "主人可按需要查看指定鏡頭或感應狀態。", helps: "離家時更安心。", setup: ["客戶持有鏡頭 / App 帳戶"] },
          { time: "主人回家", title: "Evening Welcome Back", room: "玄關 / 客廳", happens: "主人回來前，家中轉回歡迎模式。", helps: "寵物與主人回到正常回家節奏。", setup: ["回家情境", "燈光流程"] },
        ],
      },
    ],
    solutionTasks: [
 
        ["\u5168\u5c4b\u65e5\u5e38\u60c5\u5883\u9700\u8981\u5148\u6709\u6e05\u6670\u7cfb\u7d71\u8a2d\u8a08\u3002", "\u628a\u71c8\u5149\u3001\u8212\u9069\u3001\u7a97\u7c3e\u3001\u9580\u53e3\u3001\u5b89\u5168\u611f\u61c9\u53ca\u624b\u52d5\u63a7\u5236\u6574\u5408\u6210\u751f\u6d3b\u60c5\u5883\u3002", "\u9700\u8981\u4e86\u89e3\u55ae\u4f4d\u9593\u9694\u3001\u5bb6\u4eba\u7fd2\u6163\u3001\u88dd\u4fee\u72c0\u614b\u3001\u96fb\u7dda\u3001Wi-Fi \u8986\u84cb\u53ca\u63a7\u5236\u65b9\u5f0f\u3002", "\u8a2d\u8a08\u7bc4\u570d"],
        ["\u6211\u60f3\u5c4b\u4f01\u5728\u4e0d\u540c\u6642\u9593\u81ea\u52d5\u8b8a\u6210\u5408\u9069\u72c0\u614b\u3002", "\u8a2d\u8a08 Morning\u3001Night\u3001Gathering\u3001Away\u3001Sleep \u53ca Pet-at-home \u7b49\u751f\u6d3b\u60c5\u5883\u3002", "\u9700\u8981\u4e86\u89e3\u4f7f\u7528\u8005\u3001\u65e5\u5e38\u6642\u9593\u8868\u3001\u623f\u9593\u512a\u5148\u6b21\u5e8f\u3001\u79c1\u96b1\u53ca\u624b\u52d5\u8986\u84cb\u9700\u8981\u3002", "\u6240\u6709\u65b9\u6848"],
        ["\u6211\u9700\u8981\u5bb6\u4eba\u90fd\u5bb9\u6613\u4f7f\u7528\uff0c\u4e0d\u53ea\u662f\u9760\u624b\u6a5f App\u3002", "\u914d\u7f6e\u7246\u8eab\u958b\u95dc\u3001\u60c5\u5883\u63a3\u3001\u9059\u63a7\u3001\u6642\u9593\u8868\u3001App \u6b0a\u9650\u53ca\u7c21\u55ae\u5f8c\u5099\u63a7\u5236\u3002", "\u9700\u8981\u4e86\u89e3\u73fe\u6709\u958b\u95dc\u3001\u9577\u8005/\u5c0f\u670b\u53cb\u4f7f\u7528\u65b9\u5f0f\u3001\u5171\u7528\u6b0a\u9650\u53ca\u5931\u6548\u6642\u7684\u64cd\u4f5c\u3002", "\u6240\u6709\u65b9\u6848"],
        ["\u6211\u60f3\u5148\u6709\u53ef\u843d\u5730\u5b89\u88dd\u8a08\u5283\uff0c\u800c\u4e0d\u662f\u5148\u8cb7\u8a2d\u5099\u3002", "\u9810\u5148\u6aa2\u67e5\u8a2d\u5099\u3001\u96fb\u7dda\u3001\u5b89\u88dd\u9ede\u3001\u9580\u53e3/\u7a97\u7c3e\u689d\u4ef6\u53ca\u7db2\u7d61\u7a69\u5b9a\u6027\u3002", "\u9700\u8981\u4e86\u89e3\u73fe\u5834\u72c0\u6cc1\u3001\u88dd\u4fee\u968e\u6bb5\u3001\u8a2d\u5099\u517c\u5bb9\u3001\u5b89\u88dd\u96e3\u5ea6\u53ca\u9810\u7b97\u7bc4\u570d\u3002", "\u4e0a\u9580\u524d\u8a2d\u8a08"],
      ["入屋時自動開燈。", "人體感應器 + 智能開關或指定燈光情境。", "零線、開關類型、感應器位置、家人習慣。", "Starter / Comfort"],
      ["回家前客廳先調節溫度。", "智能冷氣控制 + 時間設定或情境觸發。", "冷氣型號、遙控兼容、Wi‑Fi 覆蓋、使用習慣。", "Comfort"],
      ["黃昏時窗簾自動關上。", "窗簾摩打 + 時間情境或按鈕控制。", "窗簾路軌、電源位、窗簾重量、安裝空間。", "Comfort"],
      ["想知道門窗有沒有被打開。", "門窗感應器 + 手機通知。", "安裝位置、通知偏好、私隱期望。", "Safety"],
      ["夜晚走動更安全。", "人體感應器 + 低亮度路徑燈。", "燈光位置、亮度、誤觸發機會、家庭習慣。", "Safety / Comfort"],
      ["家人不想只靠 App 控制。", "牆掣、情境按鈕、遙控或簡單手動控制。", "現有開關、家人習慣、控制位置。", "All packages"],
      ["減少忘記關燈或設備。", "離家模式 + 智能開關或插座控制。", "哪些設備適合控制、時間設定、手動覆蓋。", "Starter / Comfort"],
      ["想有簡單智能門口設定。", "智能門鎖選配、視像門鈴或入口鏡頭。", "門身類型、鎖型號、電源、私隱、權限。", "Safety"],
    ],
    packages: [
      { id: "starter", name: "????????", subtitle: "??????????????????", icon: "home", tag: "??????", basePrice: 3800, description: "???????????????????????Home / Away ???App ????????????????????????", includes: [
        "?????????????",
        "????????????",
        "?? Home / Away ????",
        "App ???????????",
        "????????????????",
        "????????????"
      ], assumption: "???????????????????????????????????????????????????" },
      { id: "comfort", name: "???????", subtitle: "??????????????", icon: "sun", tag: "???", basePrice: 8800, description: "?????????????????????????????????????????????????", includes: [
        "??????????????????",
        "?????????????????",
        "????????????",
        "??????????",
        "???????",
        "????????"
      ], assumption: "??????????????????????????????????????????????????????" },
      { id: "safety", name: "?????????", subtitle: "?????????????????", icon: "shield", tag: "?????", basePrice: 7800, description: "???????????????????????????????????????????????????", includes: [
        "????????????",
        "????????????????",
        "????????",
        "???????????",
        "?????????????",
        "???????????"
      ], assumption: "?????????????????????????????????????????????????" },
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

const pageIds = ["home", "scenarios", "solutions", "estimate", "contact"];
function getPage() {
  const hash = window.location.hash.replace("#", "").split("?")[0].split("/")[0];
  return pageIds.includes(hash) ? hash : "home";
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState(getPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("night");
  const [activeStep, setActiveStep] = useState(0);
  const [selected, setSelected] = useState("comfort");
  const [apartment, setApartment] = useState("twoBed");
  const [addons, setAddons] = useState(["curtain"]);

  const t = content[language];
  const mode = t.modes.find((item) => item.id === activeMode) || t.modes[1];
  const selectedPackage = t.packages.find((item) => item.id === selected) || t.packages[1];
  const selectedApartment = t.apartments.find((item) => item.id === apartment) || t.apartments[1];
  const activeAddons = t.addons.filter((item) => addons.includes(item.id));
  const total = selectedPackage.basePrice + selectedApartment.adjustment + activeAddons.reduce((sum, item) => sum + item.price, 0);

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

  useEffect(() => {
    const onHash = () => setPage(getPage());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function go(nextPage, anchor) {
    setMenuOpen(false);
    setPage(nextPage);
    if (window.location.hash !== `#${nextPage}`) window.history.pushState(null, "", `#${nextPage}`);
    setTimeout(() => {
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  }

  function toggleAddon(id) {
    setAddons((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  const shared = { t, language, setLanguage, page, go, menuOpen, setMenuOpen, activeMode, setActiveMode, activeStep, setActiveStep, mode, selected, setSelected, apartment, setApartment, addons, toggleAddon, selectedPackage, selectedApartment, activeAddons, total, whatsappHref, mailtoHref };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <BackgroundGlow />
      <Header {...shared} />
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

function Header({ t, language, setLanguage, page, go, menuOpen, setMenuOpen }) {
  const links = [
    ["home", t.nav.home],
    ["scenarios", t.nav.scenarios],
    ["solutions", t.nav.solutions],
    ["estimate", t.nav.estimate],
    ["contact", t.nav.contact],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 lg:px-6">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20"><Icon name="bolt" className="h-5 w-5" /></span>
          <span>
            <span className="block text-base font-semibold tracking-tight">Boson Smart</span>
            <span className="hidden text-xs text-slate-400 sm:block">{t.brandSub}</span>
          </span>
        </button>

        <nav className="ml-auto hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); go(id); }}
              className={`transition hover:text-white ${page === id ? "font-semibold text-white" : ""}`}
            >
              {label}
            </a>
          ))}
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
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function HomePage(props) {
  const { t, language, go, activeMode, setActiveMode } = props;
  const homeSteps = language === "zh"
    ? [
        ["01", "選擇生活情境", "先由 Morning、Night、Gathering 或 Pet Mode 代入你的日常。"],
        ["02", "理解可能設定", "再看背後可能涉及的燈光、冷氣、窗簾、感應器及控制方式。"],
        ["03", "到方案頁估算", "最後才進入起步方案、加選項目及初步預算。"],
      ]
    : [
        ["01", "Tell us the feeling", "Calmer mornings, easier evenings, safer night walks, smoother hosting, or a better pet-at-home setup."],
        ["02", "We design the setup", "Lighting, curtains, comfort, entry, sensors and controls are planned around how your family actually uses the home."],
        ["03", "Install with handover", "After checking site conditions, we configure, test and explain the system so it remains easy to use."],
      ];

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-[0.9fr_1fr] lg:px-6">
        <div className="flex flex-col justify-center">
          <Eyebrow icon="bolt">{t.home.eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{t.home.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{t.home.body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => go("scenarios")} className="btn-primary">{t.home.primary}<Icon name="arrow" className="h-4 w-4" /></button>
            <button onClick={() => go("solutions")} className="btn-secondary">{t.nav.solutions}</button>
          </div>

          <TrustStrip t={t} />
        </div>

        <HomeModeShowcase t={t} activeMode={activeMode} setActiveMode={setActiveMode} go={go} />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="mb-8">
          <SectionHeader eyebrow={t.scenariosPage.eyebrow} title={t.home.introTitle} text={t.home.introBody} noMargin />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {homeSteps.map(([num, title, body]) => (
            <Card key={num} className="p-5">
              <p className="mb-4 text-sm font-bold text-cyan-300">{num}</p>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeader
            eyebrow={t.solutionsPage.eyebrow}
            title={language === "zh" ? "由一句「我想屋企可以……」開始。" : "Start with “I want my home to…”"}
            text={language === "zh" ? "不用先記住產品名稱。先講你想改善甚麼生活片段，再由我們把它轉成可行設定。" : "You do not need to remember product names first. Start with the life moment you want to improve, then we translate it into a practical setup."}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {t.solutionTasks.slice(0, 4).map(([task, setup], index) => (
              <button key={task} onClick={() => go("solutions")} className="group rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Icon name={["sparkle", "sun", "lock", "shield"][index % 4]} className="h-5 w-5" />
                  </span>
                  <Icon name="arrow" className="h-4 w-4 text-cyan-200 transition group-hover:translate-x-1" />
                </div>
                <h3 className="text-lg font-semibold">{task}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{setup}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <FinalCta {...props} noMoney />
    </>
  );
}

function HomeModeShowcase({ t, activeMode, setActiveMode, go }) {
  const mode = t.modes.find((item) => item.id === activeMode) || t.modes[1];
  const firstStep = mode.steps[0];

  return (
    <Card className={`overflow-hidden p-0 ${mode.visual}`}>
      <div className="relative min-h-[34rem] overflow-hidden bg-slate-950/35 p-4 backdrop-blur-sm md:p-5">
        <SceneBackdrop modeId={mode.id} step={firstStep} index={0} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

        <div className="relative z-20 flex flex-wrap gap-1.5">
          {t.modes.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMode(item.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold backdrop-blur-2xl transition ${
                activeMode === item.id
                  ? "border-cyan-100/85 bg-cyan-200/90 text-slate-950"
                  : "border-white/15 bg-slate-950/20 text-white/80 hover:bg-slate-950/40"
              }`}
            >
              <Icon name={item.icon} className="h-4 w-4" />
              {item.label.replace(" Mode", "")}
            </button>
          ))}
        </div>

        <div className="relative z-20 flex min-h-[28rem] flex-col justify-end">
          <p className="mb-3 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">{mode.label}</p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">{mode.headline}</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-200 md:text-base">{mode.subtitle}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {mode.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">{chip}</span>
            ))}
          </div>

          <button onClick={() => go("scenarios")} className="btn-primary mt-6 w-fit">{t.home.primary}<Icon name="arrow" className="h-4 w-4" /></button>
        </div>
      </div>
    </Card>
  );
}

function ScenariosPage(props) {
  const { t, activeMode, setActiveMode, activeStep, setActiveStep, mode, go } = props;
  return (
    <section className="relative bg-slate-950">
      <FullPageScenario
        t={t}
        modes={t.modes}
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        mode={mode}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        onContinue={() => go("estimate")}
        onSolutions={() => go("solutions")}
      />
    </section>
  );
}

function FullPageScenario({ t, modes, activeMode, setActiveMode, mode, activeStep, setActiveStep, onContinue, onSolutions }) {
  const scrollerRef = useRef(null);
  const slideRefs = useRef([]);
  const active = mode.steps[activeStep] || mode.steps[0];
  const progress = mode.steps.length <= 1 ? 100 : Math.round((activeStep / (mode.steps.length - 1)) * 100);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, mode.steps.length);
    const root = scrollerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top - root.getBoundingClientRect().top) - Math.abs(b.boundingClientRect.top - root.getBoundingClientRect().top))[0];

      if (visible?.target?.dataset?.index) {
        setActiveStep(Number(visible.target.dataset.index));
      }
    }, { root, rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.65] });

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mode.id, mode.steps.length, setActiveStep]);

  function jumpTo(index) {
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function switchMode(nextMode) {
    setActiveMode(nextMode);
    setActiveStep(0);
    setTimeout(() => slideRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  return (
    <div className="relative h-[calc(100dvh-4.25rem)] overflow-hidden">
      <FloatingModeSelector modes={modes} activeMode={activeMode} setActiveMode={switchMode} setActiveStep={setActiveStep} />

      <div className="pointer-events-none absolute left-4 right-4 top-[4.25rem] z-30 hidden items-center justify-between gap-4 md:flex">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/80">{mode.label}</p>
          <p className="mt-1 max-w-xl text-sm text-slate-200/80">{mode.headline}</p>
        </div>
        <div className="min-w-44 rounded-full border border-white/10 bg-slate-950/35 p-1 backdrop-blur-xl">
          <div className="h-1.5 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-cyan-300 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <nav className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 md:flex" aria-label={t.scenariosPage.progress}>
        {mode.steps.map((step, index) => (
          <button
            key={`${step.title}-${index}`}
            onClick={() => jumpTo(index)}
            className={`h-2.5 w-2.5 rounded-full border transition-all ${activeStep === index ? "h-7 border-cyan-200 bg-cyan-300" : "border-white/25 bg-white/20 hover:bg-white/45"}`}
            aria-label={`${step.time} ${step.title}`}
          />
        ))}
      </nav>

      <div ref={scrollerRef} className="fullpage-scenario-scroll h-full overflow-y-auto scroll-smooth snap-y snap-mandatory">
        {mode.steps.map((step, index) => (
          <section
            key={`${mode.id}-${step.title}-${index}`}
            data-index={index}
            ref={(el) => { slideRefs.current[index] = el; }}
            className={`scenario-slide relative flex min-h-[calc(100dvh-4.25rem)] snap-start snap-always items-end overflow-hidden bg-cover bg-center px-4 py-7 md:px-8 md:py-10 lg:px-14 ${activeStep === index ? "scenario-slide-active" : ""}`}
            style={{ backgroundImage: sceneBackground(mode.id, index) }}
          >
            <SceneBackdrop modeId={mode.id} step={step} index={index} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.13),transparent_22%),radial-gradient(circle_at_85%_25%,rgba(103,232,249,0.14),transparent_22%)] opacity-80" />

            <div className={`scenario-copy relative z-10 mb-4 max-w-3xl md:mb-10 ${activeStep === index ? "scenario-copy-active" : "scenario-copy-idle"}`}>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950 shadow-lg shadow-cyan-950/20">{step.time}</span>
                <span className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">{step.room}</span>
                <span className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-xl">{index + 1} / {mode.steps.length}</span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">{step.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/90 md:text-xl">{step.happens}</p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {step.setup.map((item) => <SmartThingChip key={item} label={item} />)}
              </div>

              {step.branches && (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {step.branches.map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-amber-200/20 bg-slate-950/35 p-4 backdrop-blur-xl">
                      <h3 className="font-semibold text-amber-100">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-amber-50/85">{text}</p>
                    </div>
                  ))}
                </div>
              )}

              {mode.disclaimer && index === mode.steps.length - 1 && (
                <div className="mt-6 max-w-2xl rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50 backdrop-blur-xl">{mode.disclaimer}</div>
              )}

              {index === mode.steps.length - 1 && (
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button onClick={onContinue} className="btn-primary">{t.scenariosPage.cta}<Icon name="arrow" className="h-4 w-4" /></button>
                  <button onClick={onSolutions} className="btn-secondary">{t.nav.solutions}</button>
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 z-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 md:hidden">
              {active.time}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function SceneBackdrop({ modeId, step, index }) {
  const title = String(step.title || "").toLowerCase();
  const room = String(step.room || "").toLowerCase();
  const isBathroom = title.includes("bath") || room.includes("bath") || room.includes("浴室");
  const isDining = title.includes("dinner") || title.includes("dining") || room.includes("dining") || room.includes("飯");
  const isEntry = title.includes("entry") || title.includes("homecoming") || room.includes("entry") || room.includes("玄關");
  const isSleep = title.includes("sleep") || room.includes("bedroom") || room.includes("睡房");
  const isPet = modeId === "pet";
  const isGathering = modeId === "gathering";
  const isMorning = modeId === "morning";
  const isNight = modeId === "night";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`scenario-orb scenario-orb-a ${isMorning ? "scenario-orb-morning" : ""} ${isNight ? "scenario-orb-night" : ""} ${isGathering ? "scenario-orb-gathering" : ""} ${isPet ? "scenario-orb-pet" : ""}`} />
      <div className="scenario-orb scenario-orb-b" />
      <div className="scenario-grid" />

      <div className={`scenario-room ${isEntry ? "scenario-room-entry" : ""} ${isDining ? "scenario-room-dining" : ""} ${isBathroom ? "scenario-room-bath" : ""} ${isSleep ? "scenario-room-sleep" : ""} ${isPet ? "scenario-room-pet" : ""}`}>
        <div className="scenario-window">
          <span />
          <span />
          <span />
          <span />
        </div>

        {isMorning && <div className="scenario-sun" />}
        {isNight && <div className="scenario-moon" />}
        {isGathering && (
          <>
            <div className="scenario-pendant scenario-pendant-a" />
            <div className="scenario-pendant scenario-pendant-b" />
          </>
        )}
        {isPet && (
          <>
            <div className="scenario-paw scenario-paw-a" />
            <div className="scenario-paw scenario-paw-b" />
          </>
        )}

        <div className="scenario-furniture scenario-furniture-main" />
        <div className="scenario-furniture scenario-furniture-side" />
        <div className="scenario-lamp" />
        <div className="scenario-floor" />
      </div>

      <div className="scenario-device-glow scenario-device-glow-a" />
      <div className="scenario-device-glow scenario-device-glow-b" />
      <div className="scenario-device-glow scenario-device-glow-c" />

      {step.setup.slice(0, 5).map((item, chipIndex) => (
        <div key={`${item}-${chipIndex}`} className={`scenario-floating-chip scenario-floating-chip-${chipIndex % 5}`}>
          <Icon name={smartThingIcon(item)} className="h-3.5 w-3.5" />
          <span>{shortSmartThing(item)}</span>
        </div>
      ))}
    </div>
  );
}

function shortSmartThing(label) {
  const text = String(label);
  const replacements = [
    ["Bedroom lighting scene", "Bedroom scene"],
    ["Living room scene", "Living scene"],
    ["Customer-owned camera/app account", "Owner account"],
    ["智能冷氣控制", "冷氣"],
    ["人體感應", "感應"],
    ["睡房燈光情境", "睡房情境"],
    ["客戶持有鏡頭 / App 帳戶", "客戶帳戶"],
  ];

  const found = replacements.find(([from]) => text.includes(from));
  if (found) return found[1];
  return text.length > 18 ? `${text.slice(0, 18)}…` : text;
}

function FloatingModeSelector({ modes, activeMode, setActiveMode, setActiveStep }) {
  return (
    <div className="absolute left-3 top-3 z-40 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-1.5 md:left-5 md:top-5">
      {modes.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setActiveMode(item.id);
            setActiveStep(0);
          }}
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold shadow-lg backdrop-blur-2xl transition md:px-3 md:py-2 md:text-xs ${
            activeMode === item.id
              ? "border-cyan-100/85 bg-cyan-200/90 text-slate-950 shadow-cyan-950/20"
              : "border-white/15 bg-slate-950/18 text-white/80 shadow-black/15 hover:border-cyan-100/60 hover:bg-slate-950/40 hover:text-white"
          }`}
        >
          <Icon name={item.icon} className="h-3.5 w-3.5 md:h-4 md:w-4" />
          <span>{item.label.replace(" Mode", "")}</span>
        </button>
      ))}
    </div>
  );
}

function sceneBackground(modeId, index) {
  const palettes = {
    morning: [
      "linear-gradient(135deg, rgba(251,191,36,.72), rgba(14,165,233,.22)), radial-gradient(circle at 80% 20%, rgba(255,255,255,.25), transparent 18%), linear-gradient(120deg, #0f172a, #164e63)",
      "linear-gradient(135deg, rgba(250,204,21,.62), rgba(103,232,249,.25)), radial-gradient(circle at 25% 25%, rgba(255,255,255,.22), transparent 20%), linear-gradient(120deg, #1e293b, #0f766e)",
      "linear-gradient(135deg, rgba(125,211,252,.45), rgba(251,191,36,.32)), radial-gradient(circle at 78% 35%, rgba(255,255,255,.2), transparent 18%), linear-gradient(120deg, #0f172a, #0369a1)",
      "linear-gradient(135deg, rgba(251,191,36,.52), rgba(45,212,191,.22)), radial-gradient(circle at 22% 35%, rgba(255,255,255,.18), transparent 20%), linear-gradient(120deg, #1f2937, #0f766e)",
    ],
    night: [
      "linear-gradient(135deg, rgba(14,165,233,.42), rgba(79,70,229,.35)), radial-gradient(circle at 80% 20%, rgba(103,232,249,.28), transparent 20%), linear-gradient(120deg, #020617, #312e81)",
      "linear-gradient(135deg, rgba(103,232,249,.34), rgba(15,23,42,.2)), radial-gradient(circle at 25% 20%, rgba(255,255,255,.18), transparent 18%), linear-gradient(120deg, #020617, #0f172a)",
      "linear-gradient(135deg, rgba(251,191,36,.45), rgba(15,23,42,.45)), radial-gradient(circle at 78% 28%, rgba(255,255,255,.14), transparent 18%), linear-gradient(120deg, #1e1b4b, #451a03)",
      "linear-gradient(135deg, rgba(124,58,237,.32), rgba(14,165,233,.24)), radial-gradient(circle at 70% 30%, rgba(255,255,255,.16), transparent 18%), linear-gradient(120deg, #111827, #312e81)",
    ],
    gathering: [
      "linear-gradient(135deg, rgba(251,146,60,.58), rgba(251,191,36,.28)), radial-gradient(circle at 75% 25%, rgba(255,255,255,.22), transparent 18%), linear-gradient(120deg, #1c1917, #7c2d12)",
      "linear-gradient(135deg, rgba(251,191,36,.52), rgba(244,63,94,.18)), radial-gradient(circle at 28% 28%, rgba(255,255,255,.18), transparent 18%), linear-gradient(120deg, #292524, #78350f)",
      "linear-gradient(135deg, rgba(245,158,11,.45), rgba(14,165,233,.18)), radial-gradient(circle at 78% 22%, rgba(255,255,255,.14), transparent 18%), linear-gradient(120deg, #1f2937, #92400e)",
      "linear-gradient(135deg, rgba(249,115,22,.48), rgba(168,85,247,.18)), radial-gradient(circle at 25% 25%, rgba(255,255,255,.16), transparent 18%), linear-gradient(120deg, #1e1b4b, #7c2d12)",
    ],
    pet: [
      "linear-gradient(135deg, rgba(34,197,94,.42), rgba(14,165,233,.22)), radial-gradient(circle at 80% 25%, rgba(255,255,255,.18), transparent 18%), linear-gradient(120deg, #052e16, #0f172a)",
      "linear-gradient(135deg, rgba(74,222,128,.35), rgba(251,191,36,.18)), radial-gradient(circle at 25% 28%, rgba(255,255,255,.18), transparent 18%), linear-gradient(120deg, #064e3b, #1f2937)",
      "linear-gradient(135deg, rgba(45,212,191,.35), rgba(34,197,94,.22)), radial-gradient(circle at 75% 30%, rgba(255,255,255,.16), transparent 18%), linear-gradient(120deg, #0f172a, #14532d)",
      "linear-gradient(135deg, rgba(103,232,249,.32), rgba(34,197,94,.18)), radial-gradient(circle at 32% 25%, rgba(255,255,255,.14), transparent 18%), linear-gradient(120deg, #020617, #166534)",
    ],
  };
  const selected = palettes[modeId] || palettes.night;
  return selected[index % selected.length];
}

function smartThingIcon(label) {
  const text = String(label).toLowerCase();
  if (text.includes("camera") || text.includes("鏡頭") || text.includes("app") || text.includes("查看")) return "eye";
  if (text.includes("door") || text.includes("lock") || text.includes("門") || text.includes("鎖")) return "lock";
  if (text.includes("sensor") || text.includes("感應")) return "shield";
  if (text.includes("schedule") || text.includes("time") || text.includes("timer") || text.includes("時間")) return "clock";
  if (text.includes("ac") || text.includes("fan") || text.includes("temperature") || text.includes("冷氣") || text.includes("風扇") || text.includes("溫度")) return "sun";
  if (text.includes("sleep") || text.includes("night") || text.includes("睡")) return "moon";
  if (text.includes("scene") || text.includes("light") || text.includes("燈") || text.includes("情境")) return "sparkle";
  return "bolt";
}

function SmartThingChip({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
      <Icon name={smartThingIcon(label)} className="h-3.5 w-3.5 text-cyan-200" />
      {label}
    </span>
  );
}

function SolutionsPage({ t, language, go }) {
  const featureMap = language === "zh"
    ? [
        { id: "entry", title: "智能門鎖及玄關", task: "我想回家、離家、訪客進入都更順。", room: "玄關", icon: "lock", setup: ["智能門鎖", "門磁", "迎賓燈光", "離家模式"], check: "門身、鎖體、電源、出入權限、家人使用習慣。", pos: { top: "18%", left: "18%" } },
        { id: "living", title: "客廳情境燈光", task: "我想一按轉換睇戲、晚飯、聚會或放鬆模式。", room: "客廳", icon: "sparkle", setup: ["燈光情境", "情境按鈕", "氣氛燈"], check: "現有開關、零線、燈具類型、是否需要保留傳統牆掣。", pos: { top: "36%", left: "44%" } },
        { id: "climate", title: "冷氣與舒適控制", task: "我想回家前或睡前，溫度已經準備好。", room: "客廳 / 睡房", icon: "sun", setup: ["冷氣控制", "時間設定", "舒適模式"], check: "冷氣型號、遙控兼容、Wi‑Fi 覆蓋、日常使用時間。", pos: { top: "23%", left: "60%" } },
        { id: "curtain", title: "窗簾自動化", task: "我想窗簾配合早上、黃昏、睇戲或私隱需要。", room: "窗邊", icon: "home", setup: ["窗簾摩打", "日程", "電影模式"], check: "窗簾路軌、窗簾重量、電源位、安裝空間。", pos: { top: "14%", left: "74%" } },
        { id: "bedroom", title: "睡房睡眠模式", task: "我想睡前降燈、冷氣、窗簾及夜燈一併準備。", room: "睡房", icon: "moon", setup: ["睡房情境", "睡眠模式", "夜燈"], check: "睡眠習慣、冷氣設定、床邊控制、夜間走動路線。", pos: { top: "58%", left: "70%" } },
        { id: "bath", title: "浴室感應與抽氣", task: "我想夜晚去洗手間更安全，也少一點忘記關抽氣。", room: "浴室 / 走廊", icon: "clock", setup: ["感應燈", "抽氣時間", "夜間輔助"], check: "浴室開關、抽氣扇線路、感應角度、夜燈亮度。", pos: { top: "60%", left: "25%" } },
        { id: "safety", title: "感應與通知", task: "我想知道指定門窗或活動狀態。", room: "全屋重點位", icon: "shield", setup: ["門窗感應", "手機通知", "安全模式"], check: "通知頻率、私隱期望、感應器位置、家人接受程度。", pos: { top: "76%", left: "46%" } },
      ]
    : [
        { id: "entry", title: "Smart lock and entry", task: "I want arrival, leaving, and visitor entry to feel smoother.", room: "Entry", icon: "lock", setup: ["Smart lock", "Door sensor", "Welcome lighting", "Away mode"], check: "Door type, lock body, power, access permissions, and family habits.", pos: { top: "18%", left: "18%" } },
        { id: "living", title: "Living-room lighting scenes", task: "I want one-tap scenes for TV, dinner, gathering, or relaxing.", room: "Living room", icon: "sparkle", setup: ["Lighting scene", "Scene button", "Ambient light"], check: "Existing switches, neutral wire, light type, and manual wall-control preference.", pos: { top: "36%", left: "44%" } },
        { id: "climate", title: "Climate and comfort control", task: "I want the temperature ready before arriving home or sleeping.", room: "Living / Bedroom", icon: "sun", setup: ["AC control", "Schedule", "Comfort mode"], check: "AC model, remote compatibility, Wi‑Fi coverage, and daily usage rhythm.", pos: { top: "23%", left: "60%" } },
        { id: "curtain", title: "Curtain automation", task: "I want curtains to match morning, evening, movie, or privacy needs.", room: "Window side", icon: "home", setup: ["Curtain motor", "Daily schedule", "Movie mode"], check: "Curtain rail, curtain weight, nearby power, and installation clearance.", pos: { top: "14%", left: "74%" } },
        { id: "bedroom", title: "Bedroom sleep mode", task: "I want lighting, AC, curtains, and night light prepared together.", room: "Bedroom", icon: "moon", setup: ["Bedroom scene", "Sleep mode", "Night light"], check: "Sleep habit, AC setting, bedside control, and late-night route.", pos: { top: "58%", left: "70%" } },
        { id: "bath", title: "Bathroom sensing and ventilation", task: "I want safer late-night toilet trips and fewer forgotten ventilation fans.", room: "Bathroom / Hallway", icon: "clock", setup: ["Motion light", "Vent timer", "Night assist"], check: "Bathroom switches, fan wiring, sensor angle, and night-light brightness.", pos: { top: "60%", left: "25%" } },
        { id: "safety", title: "Sensors and alerts", task: "I want to know selected door, window, or movement status.", room: "Key points", icon: "shield", setup: ["Door/window sensor", "Phone alert", "Safety mode"], check: "Alert frequency, privacy expectations, sensor locations, and family acceptance.", pos: { top: "76%", left: "46%" } },
      ];

  const [active, setActive] = useState(featureMap[1].id);
  const current = featureMap.find((item) => item.id === active) || featureMap[0];

  return (
    <>
      <PageHero
        eyebrow={t.solutionsPage.eyebrow}
        title={language === "zh" ? "在一張圖上看懂：你想屋企做到甚麼。" : "See the smart-home setup on one apartment diagram."}
        body={language === "zh" ? "這頁把原本的 Solutions 和圖解合併：先點選單位位置，再看對應生活需求、可能設定及安裝前要確認的事項。" : "This merges the old Solutions page and the isometric diagram: select a point in the apartment, then see the related life task, possible setup, and what must be checked before installation."}
        primary={t.common.continuePackages}
        secondary={t.nav.scenarios}
        onPrimary={() => go("estimate")}
        onSecondary={() => go("scenarios")}
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <Card className="overflow-hidden p-0 lg:sticky lg:top-24">
            <div className="merged-iso-shell">
              <div className="merged-iso-intro">
                <p>{language === "zh" ? "Interactive feature map" : "Interactive feature map"}</p>
                <h2>{language === "zh" ? "點選位置，理解智能功能。" : "Click a point to understand the feature."}</h2>
              </div>

              <div className="merged-iso-stage">
                <div className="iso-floor iso-living" />
                <div className="iso-floor iso-entry" />
                <div className="iso-floor iso-bedroom" />
                <div className="iso-floor iso-bathroom" />
                <div className="iso-floor iso-study" />

                <div className="iso-wall iso-wall-top" />
                <div className="iso-wall iso-wall-mid" />
                <div className="iso-wall iso-wall-right" />

                <div className="iso-furniture iso-sofa" />
                <div className="iso-furniture iso-tv" />
                <div className="iso-furniture iso-bed" />
                <div className="iso-furniture iso-table" />
                <div className="iso-furniture iso-cabinet" />

                {featureMap.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActive(feature.id)}
                    className={`iso-hotspot ${active === feature.id ? "iso-hotspot-active" : ""}`}
                    style={{ top: feature.pos.top, left: feature.pos.left }}
                    aria-label={feature.title}
                  >
                    <span className="iso-hotspot-dot"><Icon name={feature.icon} className="h-3.5 w-3.5" /></span>
                    <span className="iso-hotspot-label">{feature.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-4">
            <Card className="p-6">
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Icon name={current.icon} className="h-6 w-6" /></span>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{current.room}</p>
                  <h2 className="text-2xl font-semibold md:text-3xl">{current.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-200">{current.task}</p>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{t.solutionsPage.setup}</p>
                  <div className="flex flex-wrap gap-2">
                    {current.setup.map((item) => <SmartThingChip key={item} label={item} />)}
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-200">{t.solutionsPage.check}</p>
                  {current.check}
                </div>
              </div>
            </Card>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {featureMap.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActive(feature.id)}
                  className={`group rounded-[1.3rem] border p-4 text-left transition ${active === feature.id ? "border-cyan-300/70 bg-cyan-300/10" : "border-white/10 bg-white/[0.045] hover:bg-white/[0.08]"}`}
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-200"><Icon name={feature.icon} className="h-5 w-5" /></span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{feature.room}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{feature.task}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{feature.title}</p>
                </button>
              ))}
            </div>

            <Card className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">{language === "zh" ? "圖上了解後，再查看起步方案。" : "After the map, continue to starting packages."}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{language === "zh" ? "這頁不放價錢，避免客戶未理解範圍就只看價格。估算只放在方案頁。" : "This page avoids pricing so customers understand the scope first. Estimates only appear on the package page."}</p>
              </div>
              <button onClick={() => go("estimate")} className="btn-primary justify-center">{t.common.continuePackages}<Icon name="arrow" className="h-4 w-4" /></button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function EstimatePage(props) {
  const { t, go } = props;
  return (
    <>
      <PageHero eyebrow={t.estimatePage.eyebrow} title={t.estimatePage.title} body={t.estimatePage.body} primary={t.common.whatsapp} secondary={t.nav.scenarios} onPrimary={() => document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })} onSecondary={() => go("scenarios")} />
      <PackagesSection {...props} />
      <BuilderSection {...props} />
      <FinalCta {...props} />
    </>
  );
}

function ContactPage(props) {
  const { t, go } = props;

  const isZhContact = /[\u3400-\u9fff]/.test(t?.contactPage?.title || "");
  const contactQuickStart = isZhContact
    ? {
        eyebrow: "\u4e0d\u78ba\u5b9a\u9700\u8981\u751a\u9ebc\uff1f",
        title: "\u5148\u767c\u5e7e\u5f35\u76f8\u7d66\u6211\u5011\uff0c\u6211\u5011\u5e6b\u4f60\u6574\u7406\u7b2c\u4e00\u968e\u6bb5\u65b9\u5411\u3002",
        body: "\u4f60\u4e0d\u9700\u8981\u5148\u61c2\u667a\u80fd\u8a2d\u5099\u3002\u53ea\u8981\u767c\u9001\u95dc\u9375\u4f4d\u7f6e\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u5148\u5224\u65b7\u54ea\u4e9b\u60c5\u5883\u6700\u503c\u5f97\u505a\uff0c\u54ea\u4e9b\u9700\u8981\u73fe\u5834\u518d\u78ba\u8a8d\u3002",
        items: [
          "\u5ba2\u5ef3\u3001\u98ef\u5ef3\u6216\u60f3\u5148\u6539\u5584\u7684\u4e3b\u8981\u5340\u57df",
          "\u73fe\u6709\u7246\u63a3\u3001\u71c8\u5177\u3001\u7a97\u7c3e\u8def\u8ecc\u53ca\u5165\u6236\u9580",
          "Router / Wi-Fi \u4f4d\u7f6e\uff0c\u4ee5\u53ca\u73fe\u6709\u667a\u80fd\u8a2d\u5099\u6216 App",
          "\u4f60\u60f3\u6539\u5584\u7684\u65e5\u5e38\u554f\u984c\uff1a\u591c\u9593\u3001\u51fa\u9580\u3001\u805a\u6703\u3001\u5bf5\u7269\u6216\u5b89\u5168"
        ],
      }
    : {
        eyebrow: "Not sure what you need?",
        title: "Send a few photos first. We will help shape the first practical phase.",
        body: "You do not need to understand smart-home devices before contacting us. Send the key areas and we can advise which routines are worth doing first, and what needs a site check.",
        items: [
          "Living, dining, or the main area you want to improve first",
          "Existing switches, lights, curtain rail, and entry door",
          "Router / Wi-Fi location, plus any existing smart devices or apps",
          "The daily problem you want to fix: night, leaving home, hosting, pets, or safety"
        ],
      };
  return (
    <>
      <PageHero eyebrow={t.contactPage.eyebrow} title={t.contactPage.title} body={t.contactPage.body} primary={t.nav.scenarios} secondary={t.nav.solutions} onPrimary={() => go("scenarios")} onSecondary={() => go("solutions")} />
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow={t.nav.contact} title={t.contactPage.detailsTitle} />
          <Card className="p-6"><div className="grid gap-3 sm:grid-cols-2">
      <section className="contact-photo-brief">
        <div className="contact-photo-brief__copy">
          <p className="contact-photo-brief__eyebrow">{contactQuickStart.eyebrow}</p>
          <h2>{contactQuickStart.title}</h2>
          <p>{contactQuickStart.body}</p>
        </div>

        <div className="contact-photo-brief__items">
          {contactQuickStart.items.map((item, index) => (
            <article key={item} className="contact-photo-brief__item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {t.contactPage.details.map((item) => <Bullet key={item}>{item}</Bullet>)}</div></Card>
        </div>
      </section>
      <InfoGrid eyebrow={t.nav.contact} title={t.contactPage.nextTitle} items={t.contactPage.next} numbered />
      <section className="mx-auto max-w-6xl px-4 pb-32 lg:px-6">
        <Card className="grid gap-5 p-6 lg:grid-cols-[1fr_0.35fr] lg:items-center">
          <div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.contactPage.title}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">{t.contactPage.body}</p></div>
          <button onClick={() => go("scenarios")} className="btn-primary justify-center">{t.nav.scenarios}<Icon name="arrow" className="h-4 w-4" /></button>
        </Card>
      </section>
    </>
  );
}

function PackagesSection({ t, language, selected, setSelected }) {
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
            <h3 className="text-2xl font-semibold">{pkg.name}</h3><p className="mt-2 text-sm text-cyan-100">{pkg.subtitle}</p><p className="mt-4 text-sm leading-6 text-slate-300">{pkg.description}</p>
            <p className="mt-5 text-2xl font-semibold">{language === "zh" ? `${formatHKD(pkg.basePrice)} 起` : `From ${formatHKD(pkg.basePrice)}`}</p>
            <div className="mt-5 grid gap-3">{pkg.includes.map((item) => <div key={item} className="flex gap-2 text-sm leading-6 text-slate-300"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}</div>
            <p className="mt-5 rounded-2xl bg-slate-950/35 p-3 text-xs leading-5 text-slate-400">{pkg.assumption}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function BuilderSection({ t, selected, setSelected, apartment, setApartment, addons, toggleAddon, selectedPackage, selectedApartment, activeAddons, total, whatsappHref, mailtoHref }) {
  return (
    <section id="builder" className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
      <SectionHeader eyebrow={t.buildEstimate} title={t.estimatePage.title} text={t.common.quoteNote} />
      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="grid gap-5">
          <BuilderPanel title={t.estimatePage.package}>{t.packages.map((pkg) => <Choice key={pkg.id} active={selected === pkg.id} onClick={() => setSelected(pkg.id)} title={pkg.name} desc={pkg.subtitle} price={formatHKD(pkg.basePrice)} icon={pkg.icon} />)}</BuilderPanel>
          <BuilderPanel title={t.estimatePage.flat}>{t.apartments.map((item) => <Choice key={item.id} active={apartment === item.id} onClick={() => setApartment(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.adjustment)}`} />)}</BuilderPanel>
          <BuilderPanel title={t.estimatePage.addons}>{t.addons.map((item) => <Choice key={item.id} active={addons.includes(item.id)} onClick={() => toggleAddon(item.id)} title={item.label} desc={item.description} price={`+${formatHKD(item.price)}`} />)}</BuilderPanel>
        </div>
        <aside className="sticky top-24 rounded-[1.6rem] border border-cyan-300/30 bg-slate-900/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{t.common.live}</p><p className="mt-2 text-3xl font-semibold">{formatHKD(total)}</p>
          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm">
            <Summary label={t.estimatePage.package} value={selectedPackage.name} price={formatHKD(selectedPackage.basePrice)} />
            <Summary label={t.estimatePage.flat} value={selectedApartment.label} price={`+${formatHKD(selectedApartment.adjustment)}`} />
            <div><p className="mb-2 text-slate-400">{t.estimatePage.addons}</p>{activeAddons.length ? activeAddons.map((item) => <div key={item.id} className="mb-2 flex justify-between gap-3 rounded-2xl bg-white/[0.04] px-3 py-2"><span>{item.label}</span><span className="text-cyan-100">+{formatHKD(item.price)}</span></div>) : <p className="rounded-2xl bg-white/[0.04] px-3 py-2 text-slate-400">{t.estimatePage.noAddons}</p>}</div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-400">{t.common.quoteNote}</p>
          <div className="mt-5 grid gap-3"><a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary justify-center"><Icon name="phone" className="h-4 w-4" />{t.common.whatsapp}</a><a href={mailtoHref} className="btn-secondary justify-center">{t.common.email}<Icon name="arrow" className="h-4 w-4" /></a></div>
        </aside>
      </div>
    </section>
  );
}

function FinalCta({ t, whatsappHref, mailtoHref, noMoney }) {
  if (noMoney) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-14 pb-32 lg:px-6 lg:pb-16">
        <Card className="grid gap-5 p-6 lg:grid-cols-[1fr_0.35fr] lg:items-center">
          <div><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.scenariosPage.title}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">{t.scenariosPage.body}</p></div>
          <a href="#scenarios" className="btn-primary justify-center">{t.nav.scenarios}<Icon name="arrow" className="h-4 w-4" /></a>
        </Card>
      </section>
    );
  }
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

function StickyEstimate({ t, page, total, whatsappHref, go }) {
  if (page !== "estimate") return null;
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
  const footerLinks = [
    ["home", t.nav.home],
    ["scenarios", t.nav.scenarios],
    ["solutions", t.nav.solutions],
    ["estimate", t.nav.estimate],
    ["contact", t.nav.contact],
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Boson Smart. {t.brandSub}</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className="hover:text-white">{label}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function PageHero({ eyebrow, title, body, primary, secondary, onPrimary, onSecondary }) {
  return <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 lg:px-6"><Eyebrow icon="bolt">{eyebrow}</Eyebrow><h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{body}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><button onClick={onPrimary} className="btn-primary">{primary}<Icon name="arrow" className="h-4 w-4" /></button><button onClick={onSecondary} className="btn-secondary">{secondary}</button></div></section>;
}
function SectionHeader({ eyebrow, title, text, noMargin = false }) { return <div className={`${noMargin ? "" : "mb-10"} max-w-3xl`}><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>{text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}</div>; }
function Eyebrow({ icon, children }) { return <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"><Icon name={icon} className="h-4 w-4" />{children}</p>; }
function Card({ children, className = "" }) { return <div className={`rounded-[1.6rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/10 ${className}`}>{children}</div>; }
function InfoMini({ label, text, amber = false }) { return <div className={`rounded-2xl border p-4 text-sm leading-6 ${amber ? "border-amber-300/20 bg-amber-300/10 text-amber-50" : "border-white/10 bg-white/[0.04] text-slate-300"}`}><p className={`mb-1 text-xs font-bold uppercase tracking-[0.16em] ${amber ? "text-amber-200" : "text-cyan-200"}`}>{label}</p>{text}</div>; }
function Bullet({ children, warn = false }) { return <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300"><Icon name={warn ? "shield" : "check"} className={`mt-1 h-4 w-4 shrink-0 ${warn ? "text-amber-300" : "text-cyan-300"}`} /><span>{children}</span></div>; }
function Choice({ active, onClick, title, desc, price, icon }) { return <button onClick={onClick} className={`rounded-3xl border p-5 text-left transition ${active ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-slate-950/35 hover:border-white/30"}`}>{icon && <Icon name={icon} className="mb-4 h-6 w-6 text-cyan-200" />}<div className="font-semibold text-white">{title}</div><div className="mt-2 text-sm leading-6 text-slate-400">{desc}</div>{price && <div className="mt-4 text-sm font-semibold text-cyan-100">{price}</div>}</button>; }
function BuilderPanel({ title, children }) { return <Card className="p-5"><h3 className="mb-5 text-xl font-semibold">{title}</h3><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div></Card>; }
function Summary({ label, value, price }) { return <div className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"><span className="text-slate-400">{label}</span><span className="text-right text-white">{value}{price && <><br /><small className="text-slate-400">{price}</small></>}</span></div>; }
function TrustStrip({ t }) { return <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{t.trust.map((item) => <div key={item} className="flex gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{item}</div>)}</div>; }
function InfoGrid({ eyebrow, title, items, numbered = false }) { return <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6"><div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"><SectionHeader eyebrow={eyebrow} title={title} /><div className="grid gap-4 sm:grid-cols-2">{items.map(([h, p], index) => <Card key={h} className="p-5"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">{numbered ? <span className="font-bold">{index + 1}</span> : <Icon name="check" className="h-5 w-5" />}</div><h3 className="text-lg font-semibold">{h}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{p}</p></Card>)}</div></div></section>; }
