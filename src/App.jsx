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
    brandSub: "Natural smart living for Hong Kong homes",
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
      eyebrow: "Natural smart living for Hong Kong homes",
      title: "Show your home what to do — then we install the system behind it.",
      body: "BosonSmart designs practical smart-living setups for Hong Kong flats ? connecting lighting, curtains, comfort, entry and safety routines so daily life feels easier, calmer and less complicated.",
      primary: "Explore scenario timelines",
      secondary: "See packages",
      introTitle: "Start with the daily moments you want to improve.",
      introBody: "Calmer mornings, easier evenings, smoother hosting, safer night walks, or a better pet-at-home setup ? we turn those moments into a practical first phase.",
    },
    scenariosPage: {
      eyebrow: "Scroll scenarios",
      title: "Choose a mode and follow the 10-step daily journey.",
      body: "Choose a mode and move through the timeline. Each step shows what the home does, why it helps, and what setup may be involved.",
      choose: "Choose a mode",
      whatHappens: "What the home does",
      whyHelps: "Why it helps",
      possibleSetup: "Possible setup",
      activeSetup: "Active setup",
      suggested: "Usually suitable",
      cta: "Continue to packages",
      progress: "Journey progress",
    },
    solutionsPage: {
      eyebrow: "Solutions",
      title: "What we help your home do.",
      body: "Start from a daily moment: coming home, sleeping, hosting, caring for pets, or moving safely at night. We then shape the smart setup behind it. You do not need to know the device name first. Start with the outcome.",
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
      eyebrow: "Contact BosonSmart",
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
        headline: "Wake up naturally, get ready smoothly, and leave home with confidence.",
        subtitle: "A 10-step morning journey from gentle wake-up, dressing support and breakfast assist to safety checks and Away Mode.",
        package: "Starter / Comfort",
        chips: [
          "Wake",
          "Dress",
          "Bathroom",
          "Breakfast",
          "Leave"
        ],
        steps: [
          {
            "time": "06:55",
            "title": "Pre-Wake Preparation",
            "room": "Bedroom",
            "happens": "Air-con adjusts, curtains slightly open, and bedroom lighting slowly warms up before the user wakes.",
            "helps": "The room starts preparing quietly before the alarm, so waking up feels less sudden.",
            "setup": [
              "AC routine",
              "Curtain control",
              "Gradual lighting"
            ]
          },
          {
            "time": "07:00",
            "title": "Gentle Wake-Up",
            "room": "Bedroom",
            "happens": "Soft alarm, gradual lighting, curtain opening, and optional “5 more minutes” voice delay.",
            "helps": "The user can wake up gently while still keeping a simple snooze option.",
            "setup": [
              "Smart speaker",
              "Bedroom scene",
              "Voice delay"
            ]
          },
          {
            "time": "07:05",
            "title": "Morning Audio Briefing",
            "room": "Bedroom",
            "happens": "Smart speaker plays podcast, news, weather, or a personal playlist at low volume.",
            "helps": "The user gets useful information or a calm start without needing to pick up the phone immediately.",
            "setup": [
              "Smart speaker",
              "Podcast / news routine",
              "Weather briefing"
            ]
          },
          {
            "time": "07:10",
            "title": "Out-of-Bed Detection",
            "room": "Bedroom",
            "happens": "Smart bed or motion sensor detects wake-up and switches the room from sleep mode to daytime mode.",
            "helps": "The room responds to real behaviour instead of relying only on a fixed schedule.",
            "setup": [
              "Smart bed option",
              "Motion sensor",
              "Daytime scene"
            ]
          },
          {
            "time": "07:15",
            "title": "Smart Dressing Support",
            "room": "Wardrobe / Bedroom",
            "happens": "Wardrobe light turns on; smart mirror can show weather, humidity, calendar, and clothing reminder.",
            "helps": "Getting dressed becomes smoother and better matched to the day’s weather and schedule.",
            "setup": [
              "Wardrobe lighting",
              "Smart mirror option",
              "Calendar / weather cue"
            ]
          },
          {
            "time": "07:25",
            "title": "Bathroom Ready Mode",
            "room": "Bathroom",
            "happens": "Bathroom lighting, ventilation, mirror anti-fog, and hot water preparation activate where suitable.",
            "helps": "The bathroom feels ready without the user needing to handle every switch while half-awake.",
            "setup": [
              "Bathroom scene",
              "Ventilation timer",
              "Mirror anti-fog option",
              "Hot water reminder"
            ]
          },
          {
            "time": "07:45",
            "title": "Breakfast Assist",
            "room": "Kitchen / Dining",
            "happens": "Coffee machine or kettle prepares drink; dining light turns on; audio continues in the kitchen or dining area.",
            "helps": "Breakfast feels more organised and the routine can continue smoothly from bedroom to dining area.",
            "setup": [
              "Smart plug check",
              "Coffee / kettle option",
              "Dining scene",
              "Audio follow-through"
            ]
          },
          {
            "time": "07:55",
            "title": "Kitchen Safety Check",
            "room": "Kitchen / Dining",
            "happens": "System checks appliances, smart plugs, and air quality before the user leaves.",
            "helps": "The user is less likely to leave with uncertainty about kitchen safety or air condition.",
            "setup": [
              "Smart plug status",
              "Appliance checklist",
              "Air quality sensor option"
            ]
          },
          {
            "time": "08:05",
            "title": "Leaving Reminder",
            "room": "Entry",
            "happens": "Entry display or speaker reminds user to bring keys, wallet, phone, umbrella, access card, documents, or gym bag.",
            "helps": "Small daily forgetting moments are reduced before the user leaves home.",
            "setup": [
              "Entry display option",
              "Smart speaker reminder",
              "Weather / calendar cue"
            ]
          },
          {
            "time": "08:15",
            "title": "Away Mode Activation",
            "room": "Whole home",
            "happens": "Door/window status, lights, air-con, curtains, appliances, security, and robot vacuum are checked or activated after leaving.",
            "helps": "The user leaves with confidence while the home shifts into a safe and energy-aware away state.",
            "setup": [
              "Away mode",
              "Door/window sensors",
              "Lighting and AC check",
              "Robot vacuum option",
              "Security routine"
            ]
          }
        ],
      },
      {
        id: "night",
        label: "Night Mode",
        icon: "moon",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_40%)]",
        title: "Night Mode",
        headline: "Arrive home, decompress, relax, and prepare for deep rest.",
        subtitle: "A 10-step evening journey from welcome mode and dinner support to wind-down, sleep checks and late-night path lighting.",
        package: "Comfort / Safety",
        chips: [
          "Arrive",
          "Dine",
          "Relax",
          "Wind Down",
          "Sleep"
        ],
        steps: [
          {
            "time": "18:45",
            "title": "Homecoming Preparation",
            "room": "Living / Entry",
            "happens": "Before or when the user arrives, the living room pre-cools, entry light turns on, and the home shifts from away mode to welcome mode.",
            "helps": "The flat feels ready instead of hot, dark, or still in away mode.",
            "setup": [
              "AC pre-cool",
              "Door / arrival trigger",
              "Welcome scene"
            ]
          },
          {
            "time": "18:50",
            "title": "Entry Decompression",
            "room": "Entry",
            "happens": "Soft lighting turns on at the entrance, curtains adjust for privacy, and relaxing background music can start automatically.",
            "helps": "The transition from outside stress to home feels calmer and more intentional.",
            "setup": [
              "Entry lighting",
              "Curtain privacy scene",
              "Relaxing audio option"
            ]
          },
          {
            "time": "19:10",
            "title": "Dinner Assist",
            "room": "Dining / Kitchen",
            "happens": "Dining lights become warmer and brighter; kitchen task lights support cooking or food preparation.",
            "helps": "Dinner preparation and dining feel easier without manually changing several lights.",
            "setup": [
              "Dining scene",
              "Kitchen task lighting",
              "Scene button"
            ]
          },
          {
            "time": "20:00",
            "title": "TV Relax Mode",
            "room": "Living Room",
            "happens": "Living room lights dim, curtains close, glare is reduced, and the TV or media system is ready for use.",
            "helps": "The living room shifts naturally into a comfortable entertainment mood.",
            "setup": [
              "TV scene",
              "Curtain control",
              "Dimming option",
              "Media routine"
            ]
          },
          {
            "time": "20:45",
            "title": "Shower & Cleanup Support",
            "room": "Bathroom / Kitchen",
            "happens": "Bathroom lighting, ventilation, and mirror anti-fog activate; kitchen or dining lights brighten for cleanup.",
            "helps": "Showering and cleanup are supported without forgetting ventilation or task lighting.",
            "setup": [
              "Bathroom scene",
              "Ventilation timer",
              "Mirror anti-fog option",
              "Cleanup lighting"
            ]
          },
          {
            "time": "21:15",
            "title": "Evening Activity Scene",
            "room": "Personal Zone",
            "happens": "User can choose gaming, workout, reading, or light-work mode, with lighting, fan, speaker, and desk setup adjusted accordingly.",
            "helps": "The home supports different evening habits instead of forcing one fixed night routine.",
            "setup": [
              "Gaming scene",
              "Workout scene",
              "Reading scene",
              "Focus desk setup",
              "Fan / audio option"
            ]
          },
          {
            "time": "22:15",
            "title": "Evening Wind-Down",
            "room": "Whole Home",
            "happens": "Lights gradually become warmer and dimmer; louder audio is reduced; home begins preparing for rest.",
            "helps": "The home gently signals that the evening is slowing down.",
            "setup": [
              "Dim-down routine",
              "Warm lighting",
              "Audio volume automation"
            ]
          },
          {
            "time": "22:45",
            "title": "Pre-Sleep Preparation",
            "room": "Bedroom",
            "happens": "Bedroom air-con adjusts, curtains close, bedside lighting turns on softly, and phone charging or nightstand reminders can be triggered.",
            "helps": "The bedroom feels ready before sleep, reducing last-minute setup.",
            "setup": [
              "Bedroom scene",
              "AC sleep setting",
              "Curtain close",
              "Bedside reminder"
            ]
          },
          {
            "time": "23:15",
            "title": "Sleep Safety Check",
            "room": "Whole Home",
            "happens": "System checks door lock, windows, balcony door, major lights, air-con, and selected appliances before sleep.",
            "helps": "The user can sleep with more confidence that key items were checked.",
            "setup": [
              "Sleep mode",
              "Door/window sensors",
              "Lock status",
              "Appliance checklist"
            ]
          },
          {
            "time": "02:30",
            "title": "Late-Night Path Lighting",
            "room": "Hallway / Bathroom",
            "happens": "If movement is detected at night, low-level hallway and bathroom lights turn on gently without disturbing sleep.",
            "helps": "Night bathroom trips become safer without waking the whole home.",
            "setup": [
              "Motion sensor",
              "Low-level path lighting",
              "Bathroom assist"
            ]
          }
        ],
      },
      {
        id: "gathering",
        label: "Gathering Mode",
        icon: "users",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.20),transparent_42%)]",
        title: "Gathering Mode",
        headline: "Make a small home feel ready, welcoming, comfortable, and easy to reset.",
        subtitle: "A 10-step hosting journey from guest preparation and welcome scenes to dining, entertainment, goodbye and cleanup reset.",
        package: "Starter / Comfort",
        chips: [
          "Prepare",
          "Welcome",
          "Dine",
          "Entertain",
          "Reset"
        ],
        steps: [
          {
            "time": "Before guests arrive",
            "title": "Guest Preparation Mode",
            "room": "Living / Dining",
            "happens": "Living and dining lights brighten, air-con pre-cools the space, and curtains adjust for privacy and comfort.",
            "helps": "The home feels ready before guests arrive, even in a compact flat.",
            "setup": [
              "Living / dining scene",
              "AC pre-cool",
              "Curtain privacy setting"
            ]
          },
          {
            "time": "Arrival",
            "title": "Welcome Entry Scene",
            "room": "Entry",
            "happens": "Entry lighting turns on warmly, smart doorbell notifies the host, and the entrance area becomes brighter for guests.",
            "helps": "Guests arrive into a welcoming, clear entrance instead of a dark doorway.",
            "setup": [
              "Entry lighting",
              "Smart doorbell option",
              "Host notification"
            ]
          },
          {
            "time": "Arrival",
            "title": "Host Welcome Setup",
            "room": "Living Room",
            "happens": "Background music starts softly, living room lighting becomes inviting, and the main seating area is highlighted.",
            "helps": "The main social area immediately feels prepared and comfortable.",
            "setup": [
              "Background music",
              "Living room scene",
              "Seating highlight"
            ]
          },
          {
            "time": "Dinner",
            "title": "Dining Scene",
            "room": "Dining / Kitchen",
            "happens": "Dining lights focus on the table, kitchen task lights support serving, and selected appliances or ventilation remain active.",
            "helps": "Serving and eating feel smoother while the dining area becomes the visual focus.",
            "setup": [
              "Dining table scene",
              "Kitchen task lighting",
              "Ventilation / appliance support"
            ]
          },
          {
            "time": "After dinner",
            "title": "Conversation Mode",
            "room": "Living Room",
            "happens": "Lighting softens, music volume lowers, and the room shifts to a comfortable social setting.",
            "helps": "The gathering naturally moves from dining to relaxed conversation.",
            "setup": [
              "Soft lighting",
              "Audio volume control",
              "Conversation scene"
            ]
          },
          {
            "time": "Entertainment",
            "title": "Movie / Music Mode",
            "room": "Living Room",
            "happens": "Lights dim, curtains close, glare is reduced, TV or speaker system becomes ready, and the room changes into entertainment mode.",
            "helps": "The home feels more premium and coordinated for movies, music, or casual entertainment.",
            "setup": [
              "Entertainment scene",
              "Curtain close",
              "TV / speaker setup",
              "Glare control"
            ]
          },
          {
            "time": "During gathering",
            "title": "Guest Bathroom Assist",
            "room": "Bathroom",
            "happens": "Bathroom lights and ventilation activate automatically, helping guests use the space without searching for switches.",
            "helps": "Guests feel more comfortable and the host has fewer small things to manage.",
            "setup": [
              "Bathroom motion light",
              "Ventilation timer"
            ]
          },
          {
            "time": "Late evening",
            "title": "Late Gathering Comfort",
            "room": "Whole Home",
            "happens": "Lighting becomes softer, air-con or fan adjusts based on room occupancy, and noise level can be gently reduced.",
            "helps": "The home stays comfortable as the gathering becomes quieter later in the evening.",
            "setup": [
              "Late gathering scene",
              "Occupancy-based comfort",
              "Fan / AC adjustment",
              "Audio volume routine"
            ]
          },
          {
            "time": "Guests leaving",
            "title": "Goodbye Scene",
            "room": "Entry",
            "happens": "Entry and shoe cabinet lights brighten, the door area becomes clear, and the host receives reminder cues for bags or belongings.",
            "helps": "The leaving moment is smoother and guests are less likely to forget items.",
            "setup": [
              "Entry scene",
              "Shoe cabinet lighting",
              "Belongings reminder"
            ]
          },
          {
            "time": "After gathering",
            "title": "Cleanup & Reset Mode",
            "room": "Kitchen / Whole Home",
            "happens": "Kitchen and dining lights brighten for cleanup, ventilation continues briefly, and the home returns to normal evening or sleep mode.",
            "helps": "The host can reset the home without manually undoing every scene.",
            "setup": [
              "Cleanup lighting",
              "Ventilation timer",
              "Reset scene",
              "Sleep preparation"
            ]
          }
        ],
      },
      {
        id: "pet",
        label: "Pet Mode",
        icon: "eye",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_42%)]",
        title: "Pet Mode",
        headline: "Keep pets comfortable, safe, and monitored while the owner is away.",
        subtitle: "A 10-step pet-at-home journey for comfort lighting, temperature protection, activity awareness, remote check-in and return reset.",
        package: "Safety / Comfort",
        chips: [
          "Leave",
          "Comfort",
          "Monitor",
          "Check-in",
          "Return"
        ],
        disclaimer: "Pet Mode is not a replacement for responsible pet care. Temperature, feeding, water, monitoring and device behaviour should be selected carefully and confirmed before installation.",
        steps: [
          {
            "time": "Owner leaves",
            "title": "Pet Home-Alone Mode",
            "room": "Entry / Whole Home",
            "happens": "When the owner leaves, the home avoids becoming fully dark; selected lights stay softly on for pet comfort.",
            "helps": "The pet’s environment remains more stable and less suddenly empty.",
            "setup": [
              "Pet-away routine",
              "Selected soft lighting",
              "Away trigger"
            ]
          },
          {
            "time": "Daytime",
            "title": "Comfort Lighting",
            "room": "Living / Pet Zone",
            "happens": "Soft lighting stays active in the pet’s usual area during selected hours, especially in darker corners or windowless flats.",
            "helps": "The pet’s familiar area remains visible and comfortable during the day.",
            "setup": [
              "Pet zone lighting",
              "Timed scene",
              "Low-level light"
            ]
          },
          {
            "time": "Warm hours",
            "title": "Temperature Protection",
            "room": "Living / Pet Zone",
            "happens": "Air-con, fan, or ventilation follows a safe pet comfort routine, with alerts if the room becomes too hot or humid.",
            "helps": "Temperature comfort can be managed more responsibly while the owner is away.",
            "setup": [
              "AC / fan routine",
              "Temperature sensor",
              "Humidity alert"
            ]
          },
          {
            "time": "Feeding time",
            "title": "Food & Water Area Support",
            "room": "Feeding Area",
            "happens": "A small light near the food or water area turns on, and optional feeder or water fountain status can be monitored.",
            "helps": "The feeding area remains easy to see and the owner can be aware of selected device status.",
            "setup": [
              "Feeding area light",
              "Feeder option",
              "Water fountain status option"
            ]
          },
          {
            "time": "Resting time",
            "title": "Rest Zone Comfort",
            "room": "Pet Bed / Sofa Area",
            "happens": "The pet’s favourite resting area keeps a stable light, temperature, or fan setting to avoid sudden environmental changes.",
            "helps": "The pet can rest in a more consistent environment.",
            "setup": [
              "Rest zone scene",
              "Fan / AC setting",
              "Curtain option"
            ]
          },
          {
            "time": "Noise / Doorbell",
            "title": "Noise & Visitor Awareness",
            "room": "Entry",
            "happens": "Doorbell or unusual entry activity sends a notification to the owner instead of disturbing the pet unnecessarily.",
            "helps": "The owner stays aware of entry activity without overreacting inside the home.",
            "setup": [
              "Video doorbell option",
              "Entry notification",
              "Camera option"
            ]
          },
          {
            "time": "Movement detected",
            "title": "Pet Activity Check",
            "room": "Living / Pet Zone",
            "happens": "Motion sensor or camera confirms the pet is moving normally; owner can receive a simple activity update.",
            "helps": "The owner gets reassurance without needing to constantly watch the camera.",
            "setup": [
              "Motion sensor",
              "Camera option",
              "Activity update"
            ]
          },
          {
            "time": "Owner check-in",
            "title": "Remote Pet Check-In",
            "room": "Phone App",
            "happens": "Owner can check camera view, room temperature, lighting status, and selected device condition from the phone.",
            "helps": "The owner can check key conditions remotely during the day.",
            "setup": [
              "Phone app",
              "Camera view",
              "Temperature status",
              "Device status"
            ]
          },
          {
            "time": "Before owner returns",
            "title": "Welcome Back Preparation",
            "room": "Entry / Living",
            "happens": "Before the owner arrives, entry and living room lights prepare, air-con adjusts, and the home shifts out of pet-alone mode.",
            "helps": "The home returns gradually to normal living mode before the owner comes back.",
            "setup": [
              "Welcome scene",
              "Lighting routine",
              "AC adjustment"
            ]
          },
          {
            "time": "Owner returns",
            "title": "Pet Mode Reset",
            "room": "Whole Home",
            "happens": "Pet mode ends, normal home mode resumes, and the owner can receive a short summary of temperature, activity, and alerts during the day.",
            "helps": "The owner quickly understands whether anything important happened while away.",
            "setup": [
              "Mode reset",
              "Daily summary option",
              "Temperature / activity log"
            ]
          }
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
      { id: "starter", name: "Essential Smart Living", subtitle: "A focused first step for everyday control.", icon: "home", tag: "Best first step", basePrice: 3800, description: "For flats that want to start simply: key lighting scenes, home / away routine, app setup and family-friendly controls without overbuilding.", includes: [
        "Daily routine review for one core area",
        "Selected smart lighting scene setup",
        "Home / away preset configuration",
        "App setup and basic family access guidance",
        "Wall switch, scene button or simple control option",
        "Testing, adjustment and handover explanation"
      ], assumption: "Starting estimate assumes one core area and compatible basic smart-control setup. Extra rooms, premium devices, major rewiring and special installation conditions are quoted separately." },
      { id: "comfort", name: "Comfort & Atmosphere", subtitle: "Make lighting, curtains and comfort work around your routine.", icon: "sun", tag: "Most balanced", basePrice: 8800, description: "For homes that want daily comfort to feel natural: lighting presets, curtain options, compatible AC routines, motion lighting and energy-saving habits.", includes: [
        "Morning, evening, dining, TV and sleep scene planning",
        "Lighting presets for daily living areas",
        "Compatible AC or comfort schedule setup",
        "Curtain or blind automation option",
        "Motion lighting for selected zones",
        "Energy-saving daily routine settings"
      ], assumption: "Starting estimate assumes key daily areas such as living room and entry. Curtain motors, extra rooms, complex wiring and brand upgrades are quoted separately." },
      { id: "safety", name: "Family Safety & Awareness", subtitle: "Add entry awareness, safer nights and selected family alerts.", icon: "shield", tag: "Best for families", basePrice: 7800, description: "For families who want a more aware home: entry setup, selected door/window status, night movement support and alerts designed around privacy and real habits.", includes: [
        "Entry awareness review for the main door area",
        "Smart lock, video doorbell or entry camera option",
        "Door / window sensors for selected key points",
        "Low-level night path lighting",
        "Selected phone alerts with privacy expectations considered",
        "Family access and handover explanation"
      ], assumption: "Starting estimate assumes selected entry and safety points. Door condition, lock model, camera placement, privacy preference and additional sensors affect final quotation." },
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
      body: "BosonSmart 幫住戶將日常生活變成實用智能家居設定：Morning、Night、Gathering 及 Pet Mode。",
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
      eyebrow: "聯絡 BosonSmart",
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
        label: "晨早模式",
        icon: "sun",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_38%)]",
        title: "晨早模式",
        headline: "自然醒來、順利準備，安心出門。",
        subtitle: "由預醒、穿衣、浴室和早餐，到廚房安全檢查及 Away Mode 的 10 步晨早流程。",
        package: "Starter / Comfort",
        chips: [
          "醒來",
          "穿衣",
          "浴室",
          "早餐",
          "出門"
        ],
        steps: [
          {
            "time": "06:55",
            "title": "預醒準備",
            "room": "睡房",
            "happens": "冷氣調整，窗簾微開，睡房燈光在起床前慢慢變暖。",
            "helps": "房間先安靜地準備好，起床不會太突然。",
            "setup": [
              "冷氣流程",
              "窗簾控制",
              "漸亮燈光"
            ]
          },
          {
            "time": "07:00",
            "title": "溫和喚醒",
            "room": "睡房",
            "happens": "柔和鬧鐘、漸亮燈光、窗簾打開，並可加入「再睡 5 分鐘」語音延遲。",
            "helps": "用家可以較自然地醒來，同時保留簡單延遲選項。",
            "setup": [
              "智能喇叭",
              "睡房情境",
              "語音延遲"
            ]
          },
          {
            "time": "07:05",
            "title": "晨早音訊簡報",
            "room": "睡房",
            "happens": "智能喇叭以低音量播放 podcast、新聞、天氣或個人播放清單。",
            "helps": "不用立即拿起手機，也可以開始接收天氣和日程資訊。",
            "setup": [
              "智能喇叭",
              "新聞 / podcast 流程",
              "天氣簡報"
            ]
          },
          {
            "time": "07:10",
            "title": "離床偵測",
            "room": "睡房",
            "happens": "智能床或動作感應偵測起床，房間由睡眠模式切換到日間模式。",
            "helps": "房間按真實行為反應，而不只是依靠固定時間表。",
            "setup": [
              "智能床選項",
              "動作感應",
              "日間情境"
            ]
          },
          {
            "time": "07:15",
            "title": "智能穿衣輔助",
            "room": "衣櫃 / 睡房",
            "happens": "衣櫃燈打開；智能鏡可顯示天氣、濕度、行事曆和衣著提醒。",
            "helps": "穿衣和出門準備更順手，亦更配合當日天氣和日程。",
            "setup": [
              "衣櫃燈",
              "智能鏡選項",
              "行事曆 / 天氣提示"
            ]
          },
          {
            "time": "07:25",
            "title": "浴室準備模式",
            "room": "浴室",
            "happens": "浴室燈光、抽風、防霧鏡和熱水準備在合適條件下啟動。",
            "helps": "半醒狀態下也不用逐個開關處理浴室設定。",
            "setup": [
              "浴室情境",
              "抽風時間制",
              "防霧鏡選項",
              "熱水提醒"
            ]
          },
          {
            "time": "07:45",
            "title": "早餐輔助",
            "room": "廚房 / 飯廳",
            "happens": "咖啡機或水壺準備飲品；飯廳燈打開；音訊可延續到廚房或飯廳。",
            "helps": "早餐流程更連貫，從睡房到飯廳不需要重新設定。",
            "setup": [
              "智能插座檢查",
              "咖啡 / 水壺選項",
              "飯廳情境",
              "音訊延續"
            ]
          },
          {
            "time": "07:55",
            "title": "廚房安全檢查",
            "room": "廚房 / 飯廳",
            "happens": "系統檢查電器、智能插座和空氣質素，準備出門。",
            "helps": "出門前減少對廚房安全和空氣狀態的疑慮。",
            "setup": [
              "智能插座狀態",
              "電器檢查清單",
              "空氣質素感應選項"
            ]
          },
          {
            "time": "08:05",
            "title": "出門提醒",
            "room": "玄關",
            "happens": "玄關顯示屏或喇叭提醒鑰匙、銀包、手機、雨傘、門卡、文件或健身袋。",
            "helps": "減少日常出門前忘記小物的情況。",
            "setup": [
              "玄關顯示選項",
              "智能喇叭提醒",
              "天氣 / 行事曆提示"
            ]
          },
          {
            "time": "08:15",
            "title": "Away Mode 啟動",
            "room": "全屋",
            "happens": "離家後檢查或啟動門窗狀態、燈光、冷氣、窗簾、電器、保安和掃地機械人。",
            "helps": "用家可以更安心離家，家中亦轉為節能和安全狀態。",
            "setup": [
              "Away Mode",
              "門窗感應",
              "燈光及冷氣檢查",
              "掃地機械人選項",
              "保安流程"
            ]
          }
        ],
      },
      {
        id: "night",
        label: "夜間模式",
        icon: "moon",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_40%)]",
        title: "夜間模式",
        headline: "回家、放鬆、休息，逐步準備深層睡眠。",
        subtitle: "由回家迎接、晚餐、放鬆，到睡前檢查及深夜路徑燈的 10 步夜間流程。",
        package: "Comfort / Safety",
        chips: [
          "回家",
          "晚餐",
          "放鬆",
          "睡前",
          "睡眠"
        ],
        steps: [
          {
            "time": "18:45",
            "title": "回家準備",
            "room": "客廳 / 玄關",
            "happens": "用家到家前或到家時，客廳預冷，玄關燈亮起，家中由 Away Mode 轉為 Welcome Mode。",
            "helps": "回家時不會面對又熱又暗、仍停留在離家狀態的單位。",
            "setup": [
              "冷氣預冷",
              "門口 / 到家觸發",
              "Welcome 情境"
            ]
          },
          {
            "time": "18:50",
            "title": "玄關減壓",
            "room": "玄關",
            "happens": "玄關柔和燈光亮起，窗簾因應私隱調整，放鬆背景音樂可自動開始。",
            "helps": "由外面回到家中的轉換更柔和、更有儀式感。",
            "setup": [
              "玄關燈光",
              "窗簾私隱情境",
              "放鬆音樂選項"
            ]
          },
          {
            "time": "19:10",
            "title": "晚餐輔助",
            "room": "飯廳 / 廚房",
            "happens": "飯廳燈變得更暖更亮；廚房工作燈支援煮食或備餐。",
            "helps": "晚餐和煮食過程更順，不用逐個調整燈光。",
            "setup": [
              "飯廳情境",
              "廚房工作燈",
              "情境掣"
            ]
          },
          {
            "time": "20:00",
            "title": "電視放鬆模式",
            "room": "客廳",
            "happens": "客廳燈光調暗，窗簾關上，減少反光，電視或影音系統準備使用。",
            "helps": "客廳自然轉為舒適的娛樂氣氛。",
            "setup": [
              "TV 情境",
              "窗簾控制",
              "調光選項",
              "影音流程"
            ]
          },
          {
            "time": "20:45",
            "title": "沖涼與清理支援",
            "room": "浴室 / 廚房",
            "happens": "浴室燈光、抽風和防霧鏡啟動；廚房或飯廳燈光變亮以方便清理。",
            "helps": "沖涼和清理更順手，也較不容易忘記抽風。",
            "setup": [
              "浴室情境",
              "抽風時間制",
              "防霧鏡選項",
              "清理燈光"
            ]
          },
          {
            "time": "21:15",
            "title": "晚間活動情境",
            "room": "個人活動區",
            "happens": "用家可選 gaming、workout、閱讀或輕工作模式，燈光、風扇、喇叭和書枱配置相應調整。",
            "helps": "家中能支援不同晚間習慣，而不是只有一個固定夜間流程。",
            "setup": [
              "Gaming 情境",
              "運動情境",
              "閱讀情境",
              "專注書枱設定",
              "風扇 / 音訊選項"
            ]
          },
          {
            "time": "22:15",
            "title": "晚間放慢",
            "room": "全屋",
            "happens": "燈光逐漸變暖和變暗；較大的音量降低；家中開始準備休息。",
            "helps": "家中慢慢提示晚上進入休息節奏。",
            "setup": [
              "漸暗流程",
              "暖色燈光",
              "音量自動調整"
            ]
          },
          {
            "time": "22:45",
            "title": "睡前準備",
            "room": "睡房",
            "happens": "睡房冷氣調整，窗簾關上，床頭燈柔和亮起，並可觸發手機充電或床頭提醒。",
            "helps": "睡房在睡前已準備好，減少臨睡前手動設定。",
            "setup": [
              "睡房情境",
              "冷氣睡眠設定",
              "窗簾關閉",
              "床頭提醒"
            ]
          },
          {
            "time": "23:15",
            "title": "睡眠安全檢查",
            "room": "全屋",
            "happens": "系統檢查門鎖、窗戶、露台門、主要燈光、冷氣和指定電器。",
            "helps": "用家可更安心入睡，知道重點項目已被檢查。",
            "setup": [
              "Sleep Mode",
              "門窗感應",
              "門鎖狀態",
              "電器檢查清單"
            ]
          },
          {
            "time": "02:30",
            "title": "深夜路徑燈",
            "room": "走廊 / 浴室",
            "happens": "深夜偵測到移動時，走廊和浴室低亮度燈光柔和亮起，不打擾睡眠。",
            "helps": "夜間去浴室更安全，同時不會用強光弄醒家人。",
            "setup": [
              "動作感應",
              "低亮度路徑燈",
              "浴室輔助"
            ]
          }
        ],
      },
      {
        id: "gathering",
        label: "聚會模式",
        icon: "users",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.20),transparent_42%)]",
        title: "聚會模式",
        headline: "讓細小的家變得準備好、舒服、好招呼，亦容易還原。",
        subtitle: "由客人到達前準備、歡迎、用餐和娛樂，到送客與清理還原的 10 步聚會流程。",
        package: "Starter / Comfort",
        chips: [
          "準備",
          "歡迎",
          "用餐",
          "娛樂",
          "還原"
        ],
        steps: [
          {
            "time": "客人到達前",
            "title": "客人準備模式",
            "room": "客廳 / 飯廳",
            "happens": "客廳和飯廳燈光變亮，冷氣預冷空間，窗簾因應私隱和舒適調整。",
            "helps": "即使是小單位，客人到達前也感覺已準備好。",
            "setup": [
              "客飯廳情境",
              "冷氣預冷",
              "窗簾私隱設定"
            ]
          },
          {
            "time": "到達",
            "title": "歡迎玄關情境",
            "room": "玄關",
            "happens": "玄關燈光溫暖亮起，智能門鐘通知主人，入口區域為客人變得更明亮。",
            "helps": "客人進門時感覺清楚、舒服和受歡迎。",
            "setup": [
              "玄關燈光",
              "智能門鐘選項",
              "主人通知"
            ]
          },
          {
            "time": "到達",
            "title": "主人迎客設定",
            "room": "客廳",
            "happens": "背景音樂柔和開始，客廳燈光變得親切，主要座位區被突出。",
            "helps": "主要社交空間立即變得準備好和舒服。",
            "setup": [
              "背景音樂",
              "客廳情境",
              "座位區突出"
            ]
          },
          {
            "time": "晚餐",
            "title": "用餐情境",
            "room": "飯廳 / 廚房",
            "happens": "飯廳燈光集中在餐桌，廚房工作燈支援上菜，指定電器或抽風保持運作。",
            "helps": "上菜和用餐更順，餐桌亦成為視覺焦點。",
            "setup": [
              "餐桌情境",
              "廚房工作燈",
              "抽風 / 電器支援"
            ]
          },
          {
            "time": "飯後",
            "title": "聊天模式",
            "room": "客廳",
            "happens": "燈光變柔和，音樂音量降低，房間轉為舒適社交設定。",
            "helps": "聚會自然由用餐轉到輕鬆聊天。",
            "setup": [
              "柔和燈光",
              "音量控制",
              "聊天情境"
            ]
          },
          {
            "time": "娛樂",
            "title": "電影 / 音樂模式",
            "room": "客廳",
            "happens": "燈光調暗，窗簾關上，減少反光，電視或喇叭系統準備好，房間轉為娛樂模式。",
            "helps": "家中氣氛變得更有質感，適合電影、音樂或輕鬆娛樂。",
            "setup": [
              "娛樂情境",
              "窗簾關閉",
              "電視 / 喇叭設定",
              "反光控制"
            ]
          },
          {
            "time": "聚會期間",
            "title": "客用浴室輔助",
            "room": "浴室",
            "happens": "浴室燈和抽風自動啟動，幫助客人不用找開關。",
            "helps": "客人使用更方便，主人也少一件小事要處理。",
            "setup": [
              "浴室感應燈",
              "抽風時間制"
            ]
          },
          {
            "time": "夜深",
            "title": "晚段聚會舒適",
            "room": "全屋",
            "happens": "燈光變柔和，冷氣或風扇按人數或佔用情況調整，音量可逐步降低。",
            "helps": "聚會到較晚時間時，家中仍保持舒服並慢慢變安靜。",
            "setup": [
              "晚段聚會情境",
              "按佔用調整舒適度",
              "風扇 / 冷氣調整",
              "音量流程"
            ]
          },
          {
            "time": "客人離開",
            "title": "送客情境",
            "room": "玄關",
            "happens": "玄關和鞋櫃燈變亮，門口區域更清晰，主人收到袋或物品提醒。",
            "helps": "送客過程更順，客人也較不容易遺留物品。",
            "setup": [
              "玄關情境",
              "鞋櫃燈",
              "物品提醒"
            ]
          },
          {
            "time": "聚會後",
            "title": "清理與還原模式",
            "room": "廚房 / 全屋",
            "happens": "廚房和飯廳燈變亮方便清理，抽風短暫延續，家中回復正常夜間或睡眠模式。",
            "helps": "主人不用逐個取消聚會設定，也可以更快開始清理和休息。",
            "setup": [
              "清理燈光",
              "抽風時間制",
              "還原情境",
              "睡眠準備"
            ]
          }
        ],
      },
      {
        id: "pet",
        label: "寵物模式",
        icon: "eye",
        visual: "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.16),transparent_42%)]",
        title: "寵物模式",
        headline: "主人外出時，讓寵物保持舒適、安全和可被留意。",
        subtitle: "針對寵物獨自在家時的燈光、溫度、活動感知、遠端查看和回家還原的 10 步流程。",
        package: "Safety / Comfort",
        chips: [
          "離家",
          "舒適",
          "監察",
          "查看",
          "回家"
        ],
        disclaimer: "寵物模式不能取代負責任的寵物照顧。任何涉及溫度、餵食、飲水、監察或設備自動化的設定，都應謹慎選擇並在安裝前確認。",
        steps: [
          {
            "time": "主人離開",
            "title": "寵物獨自在家模式",
            "room": "玄關 / 全屋",
            "happens": "主人離家時，家中避免完全變暗；指定燈光柔和保留，讓寵物更舒服。",
            "helps": "寵物身處的環境更穩定，不會突然變得漆黑和空蕩。",
            "setup": [
              "寵物離家流程",
              "指定柔和燈光",
              "離家觸發"
            ]
          },
          {
            "time": "日間",
            "title": "舒適燈光",
            "room": "客廳 / 寵物區",
            "happens": "寵物常用區域在指定時間保持柔和燈光，特別適合較暗角落或無窗單位。",
            "helps": "寵物熟悉的區域保持可見和舒適。",
            "setup": [
              "寵物區燈光",
              "時間情境",
              "低亮度燈"
            ]
          },
          {
            "time": "炎熱時段",
            "title": "溫度保護",
            "room": "客廳 / 寵物區",
            "happens": "冷氣、風扇或抽風按安全舒適流程運作，當房間過熱或過濕時可發出提醒。",
            "helps": "主人外出時也可以更負責任地管理溫度舒適。",
            "setup": [
              "冷氣 / 風扇流程",
              "溫度感應",
              "濕度提醒"
            ]
          },
          {
            "time": "餵食時間",
            "title": "食物與飲水區支援",
            "room": "餵食區",
            "happens": "食物或飲水位置附近的小燈亮起，並可選擇監察餵食器或飲水機狀態。",
            "helps": "餵食區保持清楚可見，主人亦可留意指定設備狀態。",
            "setup": [
              "餵食區燈光",
              "餵食器選項",
              "飲水機狀態選項"
            ]
          },
          {
            "time": "休息時間",
            "title": "休息區舒適",
            "room": "寵物床 / 梳化區",
            "happens": "寵物喜歡的休息區保持穩定燈光、溫度或風扇設定，避免環境突然變化。",
            "helps": "寵物可以在較穩定的環境休息。",
            "setup": [
              "休息區情境",
              "風扇 / 冷氣設定",
              "窗簾選項"
            ]
          },
          {
            "time": "噪音 / 門鐘",
            "title": "聲音與訪客感知",
            "room": "玄關",
            "happens": "門鐘或異常入門活動改為通知主人，而不是不必要地打擾寵物。",
            "helps": "主人可以知道門口發生甚麼，而家中反應不會過度複雜。",
            "setup": [
              "視像門鐘選項",
              "玄關通知",
              "鏡頭選項"
            ]
          },
          {
            "time": "偵測到活動",
            "title": "寵物活動檢查",
            "room": "客廳 / 寵物區",
            "happens": "動作感應或鏡頭確認寵物正常活動，主人可收到簡單活動更新。",
            "helps": "主人得到安心感，而不需要一直盯著鏡頭。",
            "setup": [
              "動作感應",
              "鏡頭選項",
              "活動更新"
            ]
          },
          {
            "time": "主人查看",
            "title": "遠端寵物查看",
            "room": "手機 App",
            "happens": "主人可在手機查看鏡頭畫面、室溫、燈光狀態和指定設備狀況。",
            "helps": "主人在日間可遠端確認重要狀況。",
            "setup": [
              "手機 App",
              "鏡頭畫面",
              "溫度狀態",
              "設備狀態"
            ]
          },
          {
            "time": "主人回來前",
            "title": "歡迎回家準備",
            "room": "玄關 / 客廳",
            "happens": "主人到家前，玄關和客廳燈光準備，冷氣調整，家中逐步離開寵物獨自在家模式。",
            "helps": "主人回來前，家中慢慢回復正常生活模式。",
            "setup": [
              "Welcome 情境",
              "燈光流程",
              "冷氣調整"
            ]
          },
          {
            "time": "主人回家",
            "title": "寵物模式還原",
            "room": "全屋",
            "happens": "寵物模式結束，正常家居模式恢復，主人可收到日間溫度、活動和提醒摘要。",
            "helps": "主人可以快速知道外出期間是否有重要狀況。",
            "setup": [
              "模式還原",
              "日間摘要選項",
              "溫度 / 活動記錄"
            ]
          }
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
      { id: "starter", name: "基礎智能生活", subtitle: "先做好最常用的日常控制。", icon: "home", tag: "最適合第一步", basePrice: 3800, description: "適合想先簡單開始的單位：重點燈光情境、Home / Away 流程、App 設定和家人易用控制，不一開始過度配置。", includes: [
        "整理一個核心區域的日常流程",
        "設定指定智能燈光情境",
        "配置 Home / Away 預設流程",
        "App 設定及基本家人權限說明",
        "牆掣、情境掣或簡單控制選項",
        "測試、微調及交付操作說明"
      ], assumption: "起步估算假設一個核心區域及兼容的基本智能控制設定。額外房間、高階設備、大型改線及特殊安裝條件會另行報價。" },
      { id: "comfort", name: "舒適與氣氛", subtitle: "讓燈光、窗簾和舒適設定配合你的生活節奏。", icon: "sun", tag: "最平衡", basePrice: 8800, description: "適合希望日常舒適更自然的家庭：燈光預設、窗簾選項、兼容冷氣流程、感應燈及日常節能習慣。", includes: [
        "規劃早上、夜晚、晚飯、睇戲及睡眠情境",
        "設定日常生活區域燈光預設",
        "配置兼容冷氣或舒適時間表",
        "窗簾或百葉自動化選項",
        "指定區域感應燈",
        "日常節能流程設定"
      ], assumption: "起步估算假設客廳及玄關等主要日常區域。窗簾摩打、額外房間、複雜電線及品牌升級會另行報價。" },
      { id: "safety", name: "家庭安全與感知", subtitle: "加入入戶感知、夜間安全和指定家人通知。", icon: "shield", tag: "最適合家庭", basePrice: 7800, description: "適合希望家居更有感知的家庭：玄關配置、指定門窗狀態、夜間走動支援，以及按私隱和真實習慣設計的通知。", includes: [
        "檢視主要入戶位置感知流程",
        "智能門鎖、視像門鐘或玄關鏡頭選項",
        "指定重點門窗感應",
        "低亮度夜間路徑燈",
        "按私隱期望配置指定手機通知",
        "家人權限及交付操作說明"
      ], assumption: "起步估算假設指定玄關及安全感知點。門身狀況、門鎖型號、鏡頭位置、私隱要求及額外感應點會影響最終報價。" },
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
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("BosonSmart Estimate")}&body=${encodeURIComponent(enquiry)}`;

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
            <span className="block text-base font-semibold tracking-tight">BosonSmart</span>
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

function FullPageScenario({ t, modes, activeMode, setActiveMode, mode, activeStep, setActiveStep, go }) {
  const wheelLockRef = useRef(false);
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);
  const modeTransitionTimerRef = useRef(null);

  const [motionDirection, setMotionDirection] = useState("next");
  const [modeTransition, setModeTransition] = useState(null);

  const summaryIndex = mode.steps.length;
  const safePageIndex = Math.max(0, Math.min(summaryIndex, activeStep));
  const isSummaryPage = safePageIndex === summaryIndex;
  const safeActiveStep = Math.max(0, Math.min(mode.steps.length - 1, safePageIndex));
  const active = mode.steps[safeActiveStep] || mode.steps[0];

  function clampPageIndex(index) {
    return Math.max(0, Math.min(summaryIndex, index));
  }

  function moveTo(index) {
    const nextIndex = clampPageIndex(index);
    if (nextIndex === safePageIndex) return;

    setMotionDirection(nextIndex > safePageIndex ? "next" : "prev");
    setActiveStep(nextIndex);
  }

  function lockBriefly(duration = 980) {
    wheelLockRef.current = true;
    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, duration);
  }

  function switchMode(nextMode) {
    if (!nextMode || nextMode === activeMode) return;

    if (modeTransitionTimerRef.current) {
      window.clearTimeout(modeTransitionTimerRef.current);
      modeTransitionTimerRef.current = null;
    }

    setModeTransition(null);
    setMotionDirection("none");
    setActiveMode(nextMode);
    setActiveStep(0);
  }

  function switchModeByDirection(direction) {
    return;
  }

  useEffect(() => {
    document.body.classList.add("boson-onepage-scenario-active");

    function syncHeaderHeight() {
      const header = document.querySelector("#root header") || document.querySelector("header");
      const height = header ? Math.ceil(header.getBoundingClientRect().height) : 68;
      document.documentElement.style.setProperty("--boson-real-header-h", height + "px");
    }

    syncHeaderHeight();

    window.addEventListener("resize", syncHeaderHeight);
    window.addEventListener("orientationchange", syncHeaderHeight);

    return () => {
      document.body.classList.remove("boson-onepage-scenario-active");
      window.removeEventListener("resize", syncHeaderHeight);
      window.removeEventListener("orientationchange", syncHeaderHeight);

      if (modeTransitionTimerRef.current) {
        window.clearTimeout(modeTransitionTimerRef.current);
        modeTransitionTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setActiveStep(0);
  }, [mode.id, setActiveStep]);

  useEffect(() => {
    function moveByDirection(direction) {
      if (wheelLockRef.current) return;

      moveTo(safePageIndex + direction);
      lockBriefly(760);
    }

    function handleWheel(event) {
      if (Math.abs(event.deltaY) < 8) return;

      event.preventDefault();
      moveByDirection(event.deltaY > 0 ? 1 : -1);
    }

    function handleKeyDown(event) {
      if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        moveByDirection(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        moveByDirection(-1);
      }
    }

    function handleTouchStart(event) {
      const touch = event.touches?.[0];
      if (!touch) return;

      touchStartYRef.current = touch.clientY;
      touchStartXRef.current = touch.clientX;
    }

    function handleTouchMove(event) {
      event.preventDefault();
    }

    function handleTouchEnd(event) {
      const touch = event.changedTouches?.[0];
      if (!touch) return;

      const deltaY = touchStartYRef.current - touch.clientY;

      if (Math.abs(deltaY) < 42) return;

      moveByDirection(deltaY > 0 ? 1 : -1);
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [safePageIndex, summaryIndex, activeMode, modes, setActiveMode, setActiveStep]);

  const activeLanguageText = [
    activeMode || "",
    mode?.id || "",
    mode?.label || "",
    mode?.headline || "",
    ...(modes || []).map((item) => item?.label || ""),
    t?.nav?.home || "",
    t?.nav?.scenarios || "",
    t?.scenariosPage?.progress || "",
  ].join(" ");

  const isZh = /[\u3400-\u9fff]/.test(activeLanguageText);

  const summary = isZh
    ? {
        eyebrow: "\u60c5\u5883\u7e3d\u7d50",
        title: "\u7531\u65e5\u5e38\u751f\u6d3b\u6d41\u7a0b\uff0c\u6574\u7406\u6210\u53ef\u843d\u5730\u7684\u667a\u80fd\u5bb6\u5c45\u898f\u5283\u3002",
        body: "\u4ee5\u4e0a\u60c5\u5883\u5c55\u793a\u7684\u4e0d\u53ea\u662f\u55ae\u4e00\u8a2d\u5099\uff0c\u800c\u662f\u628a\u71c8\u5149\u3001\u7a97\u7c3e\u3001\u8212\u9069\u5ea6\u3001\u611f\u61c9\u3001\u5b89\u5168\u548c\u624b\u52d5\u5099\u7528\u63a7\u5236\uff0c\u6309\u7167\u771f\u5be6\u751f\u6d3b\u7bc0\u594f\u9023\u63a5\u6210\u4e00\u5957\u8a2d\u8a08\u3002",
        points: ["\u71c8\u5149\u60c5\u5883", "\u8212\u9069\u63a7\u5236", "\u79c1\u96b1\u8207\u7a97\u7c3e", "\u611f\u61c9\u8207\u5b89\u5168", "\u624b\u52d5\u5099\u7528"],
        packageEyebrow: "\u5efa\u8b70\u8d77\u6b65\u65b9\u6848",
        packageTitle: "\u667a\u80fd\u60c5\u5883\u898f\u5283\u5165\u9580\u65b9\u6848",
        packageBody: "\u9069\u5408\u60f3\u5148\u91d0\u6e05\u8a2d\u8a08\u65b9\u5411\u3001\u623f\u9593\u908f\u8f2f\u3001\u8a2d\u5099\u9078\u578b\u548c\u9810\u7b97\u7bc4\u570d\u7684\u5bb6\u5ead\uff0c\u5728\u8cfc\u8cb7\u8a2d\u5099\u6216\u88dd\u4fee\u524d\u5efa\u7acb\u6e05\u6670\u85cd\u5716\u3002",
        packageItems: ["\u751f\u6d3b\u60c5\u5883\u898f\u5283", "\u623f\u9593\u63a7\u5236\u908f\u8f2f", "\u8a2d\u5099\u65b9\u5411\u5efa\u8b70", "\u521d\u6b65\u9810\u7b97\u53c3\u8003"],
        cta: "\u67e5\u770b\u9810\u7b97\u65b9\u5411",
      }
    : {
        eyebrow: "Scenario summary",
        title: "From daily routines to a practical smart-living plan.",
        body: "These scenes show how lighting, curtains, comfort, sensors, safety and manual fallback controls can be planned around real moments of the day ? not as isolated gadgets.",
        points: ["Lighting scenes", "Comfort control", "Privacy & curtains", "Sensors & safety", "Manual fallback"],
        packageEyebrow: "Suggested starter package",
        packageTitle: "Smart Scene Planning Package",
        packageBody: "For homes that want a clear design direction before buying devices or starting renovation. We define the room logic, scenario flow, device direction and a first budget reference.",
        packageItems: ["Scenario planning", "Room-by-room logic", "Device direction", "Initial budget reference"],
        cta: "View estimate direction",
      };

  const motionClass = "scenario-motion-" + motionDirection;
  const isModeTransitioning = Boolean(modeTransition);

  function renderScenePage(sceneMode, pageIndex, className) {
    const sceneSummaryIndex = sceneMode.steps.length;
    const sceneIsSummary = pageIndex >= sceneSummaryIndex;
    const sceneStepIndex = Math.max(0, Math.min(sceneMode.steps.length - 1, pageIndex));
    const sceneStep = sceneMode.steps[sceneStepIndex] || sceneMode.steps[0];

    if (sceneIsSummary) {
      return (
        <section key={"summary-" + sceneMode.id + "-" + className} className={"scenario-ending-page " + className}>
          <div className="scenario-ending-page__inner">
            <p className="scenario-ending-page__eyebrow">{summary.eyebrow}</p>
            <h1>{summary.title}</h1>
            <p>{summary.body}</p>

            <div className="scenario-ending-page__points">
              {summary.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>

            <article className="scenario-ending-package-card">
              <p className="scenario-ending-package-card__eyebrow">{summary.packageEyebrow}</p>
              <h2>{summary.packageTitle}</h2>
              <p>{summary.packageBody}</p>

              <div className="scenario-ending-package-card__items">
                {summary.packageItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <button type="button" className="scenario-ending-page__button" onClick={() => go && go("estimate")}>
              {summary.cta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        </section>
      );
    }

    return (
      <section
        key={sceneMode.id + "-" + sceneStep.title + "-" + sceneStepIndex + "-" + className}
        className={"scenario-onepage-slide " + className}
        style={{ backgroundImage: sceneBackground(sceneMode.id, sceneStepIndex) }}
      >
        <div className="scenario-onepage-shade" />
        <div className="scenario-onepage-glow" />

        <div className="scenario-onepage-copy">
          <div className="scenario-onepage-meta">
            <span>{sceneStep.time}</span>
            <span>{sceneStep.room}</span>
            <span>{sceneStepIndex + 1} / {sceneMode.steps.length}</span>
          </div>

          <h1>{sceneStep.title}</h1>
          <p>{sceneStep.happens}</p>
        </div>
      </section>
    );
  }

  const incomingClass = isModeTransitioning
    ? "scenario-mode-in-" + modeTransition.direction
    : motionClass;

  const outgoingClass = isModeTransitioning
    ? "scenario-mode-out-" + modeTransition.direction
    : "";

  return (
    <div className={isModeTransitioning ? "scenario-onepage-shell scenario-mode-transitioning" : "scenario-onepage-shell"}>
      <FloatingModeSelector modes={modes} activeMode={activeMode} setActiveMode={switchMode} setActiveStep={setActiveStep} />

      {!isSummaryPage && <ScenarioTimeOverlay value={active.time} modeId={mode.id} stepIndex={safeActiveStep} />}

      <nav className="scenario-onepage-dots" aria-label={t.scenariosPage.progress}>
        {mode.steps.map((step, index) => (
          <button
            key={step.title + "-" + index}
            type="button"
            onClick={() => moveTo(index)}
            className={safePageIndex === index ? "scenario-onepage-dot scenario-onepage-dot-active" : "scenario-onepage-dot"}
            aria-label={step.time + " " + step.title}
          />
        ))}
      </nav>

      {modeTransition && renderScenePage(modeTransition.outgoingMode, modeTransition.outgoingPageIndex, outgoingClass)}
      {renderScenePage(mode, safePageIndex, incomingClass)}
    </div>
  );
}


function parseScenarioClockTime(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;

  return hours * 60 + minutes;
}

function formatScenarioClockTime(totalMinutes) {
  const normalized = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function ScenarioTimeOverlay({ value, modeId, stepIndex }) {
  function toMinutes(timeText) {
    const match = String(timeText || "").match(/(\d{1,2}):(\d{2})/);
    if (!match) return 0;

    const hours = Number(match[1]);
    const minutes = Number(match[2]);

    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return 0;

    return ((hours * 60 + minutes) % 1440 + 1440) % 1440;
  }

  function formatMinutes(totalMinutes) {
    const normalized = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;

    return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0");
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  const initialMinutes = toMinutes(value);

  const [displayMinutes, setDisplayMinutes] = useState(initialMinutes);

  const displayMinutesRef = useRef(initialMinutes);
  const previousTargetRef = useRef(initialMinutes);
  const previousStepRef = useRef(stepIndex);
  const previousModeRef = useRef(modeId);
  const frameRef = useRef(null);

  useEffect(() => {
    const target = toMinutes(value);
    const previousTarget = previousTargetRef.current;
    const previousStep = previousStepRef.current;
    const previousMode = previousModeRef.current;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    /*
      If switching scenario mode, do not animate from the old mode's time.
      Just land cleanly on the new mode's first time.
    */
    if (previousMode !== modeId) {
      previousModeRef.current = modeId;
      previousStepRef.current = stepIndex;
      previousTargetRef.current = target;
      displayMinutesRef.current = target;
      setDisplayMinutes(target);
      return undefined;
    }

    let start = displayMinutesRef.current;

    /*
      Important fix:
      On backward navigation, start from the previous displayed/target time
      and count down to the new target. Do NOT reset to 00:00.
    */
    if (typeof previousStep === "number" && stepIndex < previousStep) {
      start = previousTarget;
    }

    let delta = target - start;

    /*
      Handle midnight naturally:
      - Forward from 23:55 to 00:05 counts upward across midnight.
      - Backward from 00:05 to 23:55 counts downward across midnight.
    */
    if (stepIndex > previousStep && delta < -720) {
      delta += 1440;
    }

    if (stepIndex < previousStep && delta > 720) {
      delta -= 1440;
    }

    if (delta === 0) {
      previousStepRef.current = stepIndex;
      previousTargetRef.current = target;
      displayMinutesRef.current = target;
      setDisplayMinutes(target);
      return undefined;
    }

    const startedAt = performance.now();
    const duration = 520;

    function tick(now) {
      const rawProgress = Math.min(1, (now - startedAt) / duration);
      const eased = easeOutCubic(rawProgress);
      const nextValue = start + delta * eased;

      displayMinutesRef.current = nextValue;
      setDisplayMinutes(nextValue);

      if (rawProgress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        previousStepRef.current = stepIndex;
        previousTargetRef.current = target;
        displayMinutesRef.current = target;
        setDisplayMinutes(target);
        frameRef.current = null;
      }
    }

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [value, modeId, stepIndex]);

  return (
    <div className="scenario-clock-overlay scenario-clock-overlay--numeric" aria-live="polite" aria-label={formatMinutes(displayMinutes)}>
      <span>{formatMinutes(displayMinutes)}</span>
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
        eyebrow: "\u672a\u80af\u5b9a\u9700\u8981\u505a\u751a\u9ebc\uff1f",
        title: "\u53ef\u4ee5\u5148\u767c\u76f8\u7d66\u6211\u5011\u3002",
        body: "\u767c\u9001\u5ba2\u5ef3\u3001\u7246\u63a3\u3001Router\u3001\u7a97\u7c3e\u4f4d\u7f6e\u53ca\u5165\u6236\u9580\u76f8\u7247\uff0c\u6211\u5011\u6703\u5148\u5e6b\u4f60\u6574\u7406\u6700\u5be6\u969b\u7684\u7b2c\u4e00\u968e\u6bb5\u65b9\u5411\uff0c\u518d\u8a0e\u8ad6\u5177\u9ad4\u8a2d\u5099\u3002",
        items: [
          "\u5ba2\u5ef3\u3001\u98ef\u5ef3\u6216\u60f3\u5148\u6539\u5584\u7684\u4e3b\u8981\u5340\u57df",
          "\u73fe\u6709\u7246\u63a3\u3001\u71c8\u5177\u3001\u7a97\u7c3e\u8def\u8ecc\u53ca\u5165\u6236\u9580",
          "Router / Wi-Fi \u4f4d\u7f6e\uff0c\u4ee5\u53ca\u73fe\u6709\u667a\u80fd\u8a2d\u5099\u6216 App",
          "\u6700\u60f3\u6539\u5584\u7684\u65e5\u5e38\u554f\u984c\uff1a\u591c\u9593\u3001\u51fa\u9580\u3001\u805a\u6703\u3001\u5bf5\u7269\u6216\u5b89\u5168"
        ],
      }
    : {
        eyebrow: "Not sure what you need?",
        title: "Send photos first.",
        body: "Send photos of your living room, switches, router, curtain area and entrance. We will help shape the most practical first phase before discussing exact devices.",
        items: [
          "Living, dining or the main area you want to improve first",
          "Existing switches, lights, curtain rail and entry door",
          "Router / Wi-Fi location, plus any existing smart devices or apps",
          "The daily problem you want to fix: night, leaving home, hosting, pets or safety"
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
        <p>© 2026 BosonSmart. {t.brandSub}</p>
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
