"use client"
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  usePathname,
  useRouter,
} from "next/navigation";


const translations = {
  en: {
    contact: {
  hero: {
    eyebrow: "CONTACT OUR ADVISORS",
    titleLine1: "Your questions",
    titleLine2: "deserve a",
    titleEmphasis: "specialist.",
    description:
      "Speak directly with someone who understands Greek property, technical due diligence and the Golden Visa investment process. Tell us where you are in your journey and we will help clarify what comes next.",
    callButton: "Call +306993229390",
    emailButton: "Send an Email",
    meta: {
      direct: "DIRECT CONTACT",
      goldenVisa: "GOLDEN VISA",
      property: "PROPERTY",
      dueDiligence: "DUE DILIGENCE",
    },
  },

  intro: {
    label: "START THE CONVERSATION",
    titleLine1: "Not sure where",
    titleLine2: "to",
    titleEmphasis: "begin?",
    description:
      "You do not need to arrive with a finished investment plan. Whether you are researching Greece for the first time, comparing properties or already preparing to invest, the first step is simply understanding your situation.",
  },

  advisor: {
    imageAlt: "Svetlana Novikova",
    imageLabel: "SVETLANA NOVIKOVA",
    directContact: "YOUR DIRECT CONTACT",
    location: "ATHENS · GREECE",
    credentials: {
      civilEngineer: "Dipl. Civil Engineer",
      goldenVisa: "Golden Visa Advisor",
      dueDiligence: "Technical Due Diligence Specialist",
      realEstate: "Real Estate Consultant",
    },
    description:
      "With a background in civil engineering and Greek property, Svetlana brings a technical perspective to the investment conversation. Her role is to help investors understand the property, the practical considerations and the professionals required around the wider process.",
    phoneLabel: "PHONE / WHATSAPP",
    emailLabel: "EMAIL",
  },

  topics: {
    label: "WHAT CAN WE DISCUSS?",
    titleLine1: "Bring the question.",
    titleLine2: "We find the",
    titleEmphasis: "direction.",
    description:
      "A Golden Visa investment can involve property, technical, financial and administrative considerations. Start with the part of the process that matters most to you.",
    items: {
      goldenVisa: {
        title: "Golden Visa",
        text: "Eligibility, investment routes and the first steps toward residence in Greece.",
      },
      propertySearch: {
        title: "Property Search",
        text: "Discuss the type of property, location and investment profile you are looking for.",
      },
      propertyReview: {
        title: "Property Review",
        text: "Already found a property? Discuss the technical and investment questions that should be examined.",
      },
      investmentStrategy: {
        title: "Investment Strategy",
        text: "Clarify your objectives, budget and the direction that makes sense for your plans.",
      },
    },
  },

  form: {
    label: "PRIVATE ENQUIRY",
    titleLine1: "Tell us",
    titleLine2: "what you are",
    titleEmphasis: "planning.",
    description:
      "A few details help us understand your situation before the conversation begins.",
    noteTitle: "YOU DO NOT NEED ALL THE ANSWERS.",
    noteText:
      "If you are still exploring your options, simply tell us where you are now.",
    investorDetails: "INVESTOR DETAILS",
    fields: {
      fullName: {
        label: "FULL NAME",
        placeholder: "Your full name",
      },
      email: {
        label: "EMAIL ADDRESS",
        placeholder: "you@example.com",
      },
      phone: {
        label: "PHONE / WHATSAPP",
      },
      nationality: {
        label: "NATIONALITY",
        placeholder: "Your nationality",
      },
      budget: {
        label: "INVESTMENT BUDGET",
        placeholder: "Select a range",
        undecided: "Still exploring",
      },
      propertyStatus: {
        label: "PROPERTY STATUS",
        placeholder: "Select an option",
        looking: "I am looking for a property",
        selected: "I have selected a property",
        considering: "I am considering several",
        none: "I have not started yet",
      },
    },
    topicsLabel: "WHAT WOULD YOU LIKE TO DISCUSS?",
    languageLabel: "PREFERRED LANGUAGE",
    message: {
      label: "MESSAGE",
      placeholder:
        "Tell us about your plans, the property you are considering, or the question you want answered...",
    },
    disclaimer:
      "By submitting this form, you are asking Homes in Greece to respond to your enquiry.",
    submit: "Send Enquiry",
    error:
      "We couldn't send your enquiry. Please try again or contact us directly.",
  },

  success: {
    label: "ENQUIRY RECEIVED",
    titleLine1: "Thank you.",
    titleLine2: "Let's talk Greece.",
    description:
      "Your enquiry has been received. You can also contact Svetlana directly by phone or email if you would prefer to continue the conversation that way.",
    call: "Call directly",
    email: "Email directly",
  },

  process: {
    label: "WHAT HAPPENS NEXT",
    titleLine1: "One conversation.",
    titleLine2: "A clearer next step.",
    description:
      "The purpose of contacting us is not to overwhelm you with information. It is to understand what you are trying to achieve and identify what deserves attention next.",
    steps: {
      "01": {
        title: "WE LISTEN",
        text: "Your objectives, budget, nationality and current stage.",
      },
      "02": {
        title: "WE CLARIFY",
        text: "The questions surrounding your investment, property or Golden Visa plans.",
      },
      "03": {
        title: "WE IDENTIFY",
        text: "The next practical steps and the areas that require specialist attention.",
      },
      "04": {
        title: "YOU DECIDE",
        text: "Move forward with a clearer understanding of what comes next.",
      },
    },
  },

  faq: {
    label: "BEFORE YOU REACH OUT",
    titleLine1: "A few things",
    titleLine2: "worth",
    titleEmphasis: "knowing.",
    description:
      "If you are wondering whether you are ready to get in touch, these are some of the most useful things to know first.",
    items: {
      "01": {
        question:
          "Do I need to have a property selected before contacting you?",
        answer:
          "No. You can reach out at any stage. If you are still comparing locations, investment routes or properties, the first conversation can simply help establish the right direction.",
      },
      "02": {
        question:
          "Can I contact you about a property I have already found?",
        answer:
          "Yes. If you are already considering a property in Greece, you can discuss the property, its suitability for your plans and the technical aspects that should be reviewed before proceeding.",
      },
      "03": {
        question: "What languages can I communicate in?",
        answer:
          "Support is available in English, Greek and Russian.",
      },
      "04": {
        question:
          "Will I need other professionals during the process?",
        answer:
          "Depending on your situation, legal, notarial, accounting and technical matters may require different specialists. The role here is to help coordinate the appropriate professionals around the investment process.",
      },
    },
  },

  cta: {
    label: "READY WHEN YOU ARE",
    titleLine1: "Start with a question.",
    titleLine2: "Not a commitment.",
    description:
      "Contact Homes in Greece directly and begin a conversation about your plans for Greece.",
    call: "Call Svetlana",
    email: "Send an Email",
  },

  legal: {
    important: "Important:",
    text:
      "Information provided through this website is intended as general guidance. Golden Visa eligibility, property suitability and legal requirements depend on the individual circumstances of each investor and should be assessed with the appropriate qualified professionals.",
  },

  bottomLink: "Back to the Golden Visa Guide",
},
whyClientsTrustUs: {
  hero: {
    eyebrow: "WHY CLIENTS TRUST US",
    titleLine1: "Trust is not",
    titleEmphasis: "promised.",
    titleLine3: "It is built.",
    description:
      "Buying property in Greece from abroad requires more than finding a beautiful home. Investors need clear information, technical awareness, the right professionals and someone who understands what they are trying to achieve.",
    primaryButton: "Book a Private Consultation",
    secondaryButton: "Explore the Investor Guide",
    framework: "THE TRUST FRAMEWORK",
    compass: {
      your: "YOUR",
      investment: "INVESTMENT",
      expertise: "EXPERTISE",
      strategy: "STRATEGY",
      guidance: "GUIDANCE",
      local: "LOCAL",
    },
    fourPrinciples: "FOUR PRINCIPLES",
  },

  intro: {
    label: "WHAT INVESTORS REALLY NEED",
    titleLine1: "The right answer is",
    titleLine2: "not always the easiest one.",
    description:
      "International property investment involves decisions that go beyond price and photographs. A trusted advisor should help you understand the opportunity, identify what needs further checking and connect you with the professionals who can give you the right answers.",
  },

  statement: {
    quote:
      "Our role is not to make every property look like the right property. It is to help you understand which opportunity actually makes sense for you.",
    authorRole: "Dipl. Civil Engineer · Golden Visa Advisor",
    index: "TRUST / 01",
  },

  pillarsHeader: {
    label: "FOUR REASONS",
    titleLine1: "What makes the",
    titleLine2: "difference.",
    description:
      "Trust is created through the way an investment is handled — not through a list of claims. These four principles shape the experience from the first conversation to the final decision.",
  },

  pillars: {
    whyItMatters: "WHY IT MATTERS",

    "01": {
      eyebrow: "EXPERTISE",
      title: "A property is checked before it is recommended.",
      text:
        "The objective is not simply to find something attractive. It is to understand whether a property makes sense for your investment, your intended use and your wider Golden Visa strategy.",
      points: [
        "Technical perspective",
        "Property suitability",
        "Documentation awareness",
        "Investment-focused assessment",
      ],
    },

    "02": {
      eyebrow: "PERSONAL STRATEGY",
      title: "Your investment starts with your objectives.",
      text:
        "Every investor arrives with different priorities. Budget, location, family plans, lifestyle, rental potential and residency objectives all influence what the right property looks like.",
      points: [
        "Understand your priorities",
        "Define the right route",
        "Shortlist with purpose",
        "Avoid unnecessary options",
      ],
    },

    "03": {
      eyebrow: "COMPLETE GUIDANCE",
      title: "You do not have to navigate Greece alone.",
      text:
        "A property purchase can involve several professionals and several stages. The role here is to keep those moving parts connected while the appropriate specialist handles each area of expertise.",
      points: [
        "Engineer coordination",
        "Legal collaboration",
        "Notary coordination",
        "Residency support",
      ],
    },

    "04": {
      eyebrow: "LOCAL KNOWLEDGE",
      title: "Advice from someone who knows Greece personally.",
      text:
        "Svetlana does not approach Greece as a distant market. She lives the country, owns a home here and understands the practical difference between looking at Greece online and actually choosing where to invest.",
      points: [
        "Local perspective",
        "Area knowledge",
        "Real-life context",
        "Long-term thinking",
      ],
    },
  },

  standardsIntro: {
    label: "OUR STANDARD",
    titleLine1: "A better experience",
    titleLine2: "starts before the purchase.",
    description:
      "The strongest form of trust is knowing what happens before you sign, pay or commit. The process should give investors enough clarity to understand both the opportunity and the questions that still need professional answers.",
    link: "See the application checklist",
  },

  standards: {
    technical: {
      title: "Technical attention",
      text:
        "Property condition and technical matters deserve attention before a purchase decision is made.",
    },
    professionals: {
      title: "The right professionals",
      text:
        "Legal, notarial, engineering and accounting questions are directed to the appropriate professionals.",
    },
    communication: {
      title: "International communication",
      text:
        "Support is available in Greek, English and Russian, helping international investors communicate clearly.",
    },
    human: {
      title: "Human support",
      text:
        "You work with a person who remains involved rather than being passed from department to department.",
    },
  },

  promise: {
    label: "THE INVESTOR PROMISE",
    titleLine1: "You should always",
    titleLine2: "know why.",
    description:
      "Why this property? Why this location? What has been checked? What still needs to be checked? Who is responsible for the next step?",
  },

  promises: [
    "No pressure to choose a property simply because it is available.",
    "Clear communication about what has been checked and what still needs specialist review.",
    "A focus on suitability, not just appearance.",
    "Coordination around the professionals required for the transaction.",
    "A strategy built around the investor's own objectives.",
  ],

  process: {
    label: "HOW TRUST LOOKS IN PRACTICE",
    titleLine1: "From first",
    titleLine2: "conversation to decision.",
    description:
      "Trust should be visible in the process. That means understanding the investor first, assessing opportunities with purpose, coordinating the right people and leaving the final decision where it belongs — with the investor.",
  },

  steps: {
    "01": {
      title: "We understand",
      text:
        "We start with your objectives, budget, family situation and reason for investing in Greece.",
    },
    "02": {
      title: "We assess",
      text:
        "Potential properties are considered through the lens of suitability, technical matters and your investment strategy.",
    },
    "03": {
      title: "We coordinate",
      text:
        "The right professionals are brought into the process when legal, technical, tax or notarial expertise is required.",
    },
    "04": {
      title: "You decide",
      text:
        "You receive the information needed to make an informed decision without unnecessary pressure.",
    },
  },

  svetlana: {
    label: "THE PERSON BEHIND THE GUIDANCE",
    imageAlt:
      "Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor",
    imageLocation: "GREECE",
    titleLine1: "Someone who knows",
    titleLine2: "Greece beyond the transaction.",
    paragraph1:
      "Svetlana Novikova is a Dipl. Civil Engineer, Golden Visa Advisor and Real Estate Consultant. Her perspective combines property, engineering and residency considerations rather than treating them as completely separate decisions.",
    paragraph2:
      "She also has a home in Greece herself. That personal connection matters because choosing Greece is not only about an asset. For many investors, it is also about where they want to spend time, where their family may live and what kind of future they want to build.",
    credentials: {
      "01": "Dipl. Civil Engineer",
      "02": "Golden Visa Advisor",
      "03": "Greek · English · Russian",
    },
    link: "Meet Svetlana",
  },

  faqIntro: {
    label: "TRUST, EXPLAINED",
    titleLine1: "Questions",
    titleLine2: "investors ask.",
    description:
      "Transparency also means being clear about what this service is, what it is not and when another qualified professional should be involved.",
  },

  faq: {
    "01": {
      question: "Is Homes in Greece a real estate agency?",
      answer:
        "Homes in Greece is Svetlana Novikova's business through which she combines Greek real estate services with her civil engineering background and Golden Visa advisory support. The approach is designed around the investor's wider objective rather than simply presenting properties.",
    },
    "02": {
      question: "Does Svetlana personally inspect every property?",
      answer:
        "Property assessment should be approached according to the needs of each transaction. Where a formal specialist inspection, legal check or other professional opinion is required, the appropriate qualified professional should be involved. The goal is to identify what needs checking before the investor commits.",
    },
    "03": {
      question: "Who handles the legal side of the purchase?",
      answer:
        "Legal matters should be handled by the appropriate legal professional. Svetlana's role is to help coordinate the overall process and make sure the property, technical and residency considerations are connected with the relevant specialists.",
    },
    "04": {
      question: "Can international investors communicate in their preferred language?",
      answer:
        "Support is available in Greek, English and Russian, helping international clients communicate throughout the process.",
    },
  },

  cta: {
    label: "START WITH A CONVERSATION",
    titleLine1: "Your investment deserves",
    titleLine2: "a clear direction.",
    description:
      "Tell us what you are looking for, what matters to you and what you hope to achieve in Greece. We will help you understand the next step.",
    button: "Book a Private Consultation",
  },

  legal:
    "Information provided on this page is intended for general informational purposes. Legal, tax, engineering and other specialist matters should be confirmed with the appropriately qualified professional for the individual transaction.",
},
    ourExperience: {
  hero: {
    sectionLabel: "OUR EXPERIENCE",
    kicker: "REAL ESTATE · ENGINEERING · RESIDENCY",
    titleLine1: "Experience you can",
    titleLine2: "see in the numbers.",
    description:
      "More than property listings. More than years on paper. Experience built through real estate, engineering, technical assessment and helping people make property decisions in Greece.",
    primaryButton: "Discuss Your Investment",
    secondaryButton: "Explore the Investor Guide",
    mainNumberLabel: "REAL ESTATE",
    mainNumberText: "Years of experience in the Greek real estate market.",
    propertiesExamined: "PROPERTIES EXAMINED",
    languages: "LANGUAGES",
    bottom: {
      realEstate: "REAL ESTATE",
      engineering: "ENGINEERING",
      dueDiligence: "TECHNICAL DUE DILIGENCE",
      residency: "RESIDENCY",
    },
  },

  business: {
    sectionLabel: "THE BUSINESS BEHIND THE NAME",
    titleLine1: "Homes in Greece is",
    titleLine2: "Svetlana Novikova's company.",
    paragraph1:
      "Homes in Greece is the business owned and led by Svetlana Novikova. It brings together her work in Greek real estate and civil engineering, with a focus on property assessment, technical expertise and support for international buyers.",
    paragraph2:
      "This is where the different parts of her professional experience come together. Real estate, engineering and residency support are connected around the same objective: helping people make better-informed decisions about property in Greece.",
    details: {
      ownerLabel: "OWNER & LEAD",
      businessLabel: "BUSINESS",
      baseLabel: "PROFESSIONAL BASE",
    },
  },

  trackRecord: {
    sectionLabel: "THE TRACK RECORD",
    titleLine1: "Experience becomes valuable",
    titleLine2: "when it can be measured.",
    paragraph1:
      "Homes in Greece has built its work around the Greek property market, combining real-estate activity with technical knowledge.",
    paragraph2:
      "The portfolio itself tells part of the story: residential property, land and commercial opportunities across the Greek market.",
  },

  portfolioStats: {
    listings: {
      label: "PROPERTY LISTINGS",
      text: "Residential, land and commercial property represented across the portfolio.",
    },
    residential: {
      label: "RESIDENTIAL",
      text: "Homes represented across the company's property portfolio.",
    },
    land: {
      label: "LAND & PLOTS",
      text: "Land opportunities forming an important part of the portfolio.",
    },
    commercial: {
      label: "COMMERCIAL",
      text: "Commercial properties represented for sale or rental.",
    },
  },

  portfolio: {
    sectionLabel: "PORTFOLIO SNAPSHOT",
    titleLine1: "A real property",
    titleLine2: "market, not a single niche.",
    summaryLabel: "FOR SALE",
    summaryText:
      "The portfolio snapshot is heavily focused on property sales, reflecting the company's core real-estate activity.",
    cardTitle: "PROPERTY PORTFOLIO",
    cardSubtitle: "LISTINGS IN THE PROVIDED SITE SNAPSHOT",
    sale: "SALE",
    rental: "RENTAL",
    note:
      "Portfolio figures reflect the property categories and listing counts presented on the Homes in Greece website source provided for this page and may change as listings are added, sold or rented.",
  },

  portfolioBreakdown: {
    residential: {
      title: "Residential",
      status: "For sale",
      detail: "Homes",
    },
    land: {
      title: "Land",
      status: "For sale",
      detail: "Plots & land",
    },
    commercial: {
      title: "Commercial",
      status: "For sale",
      detail: "Professional spaces",
    },
    rental: {
      title: "Rental",
      status: "For rent",
      detail: "Residential & commercial",
    },
  },

  experience: {
    sectionLabel: "WHERE THE EXPERIENCE COMES FROM",
    titleLine1: "Three disciplines.",
    titleLine2: "One perspective.",
    description:
      "The strength of the service comes from bringing different areas of knowledge together around one property decision.",
  },

  experienceCards: {
    realEstate: {
      eyebrow: "REAL ESTATE",
      title: "Property is more than a listing.",
      text:
        "Years of working with property means understanding what buyers actually need: location, condition, use, documentation, potential and whether a property makes sense for the purpose behind the purchase.",
      points: {
        residential: "Residential properties",
        land: "Land & plots",
        commercial: "Commercial spaces",
        investment: "Investment opportunities",
      },
    },

    engineering: {
      eyebrow: "ENGINEERING",
      title: "Look beyond what the photograph shows.",
      text:
        "An engineering background brings another layer of attention to property. Technical documentation, building characteristics, legality and planning matters can all influence a property's suitability.",
      points: {
        surveys: "Architectural surveys",
        certificates: "Engineer certificates",
        legality: "Legality & planning",
        assessment: "Technical assessment",
      },
    },

    residency: {
      eyebrow: "RESIDENCY",
      title: "Property and residency can meet in the same decision.",
      text:
        "For international buyers, purchasing property in Greece can also be connected to a residence strategy. The process requires careful coordination between property, documentation and the appropriate professionals.",
      points: {
        guidance: "Golden Visa guidance",
        assessment: "Property assessment",
        documents: "Document coordination",
        collaboration: "Professional collaboration",
      },
    },
  },

  engineering: {
    sectionLabel: "ENGINEERING EXPERIENCE",
    titleLine1: "Before a property",
    titleLine2: "becomes an investment,",
    titleLine3: "understand the property itself.",
    paragraph1:
      "Svetlana's engineering background adds a technical dimension to the way property can be assessed. It means looking beyond presentation and considering the physical, technical and planning characteristics that can influence a property's suitability.",
    paragraph2:
      "Her engineering practice covers a broad range of property and construction-related services, giving the real-estate side of the business a practical technical foundation.",
    practiceLabel: "ENGINEERING PRACTICE",
  },

  engineeringServices: {
    "01": "Architectural surveys",
    "02": "Engineer certificates",
    "03": "Certificates of legality",
    "04": "Energy performance certificates",
    "05": "Building & project supervision",
    "06": "Renovation supervision",
    "07": "Construction projects",
    "08": "Town-planning studies",
    "09": "Land Registry declarations",
    "10": "Urban planning",
    "11": "3D drawings",
    "12": "Interior & property renovation",
  },

  benefits: {
    sectionLabel: "WHAT EXPERIENCE ACTUALLY MEANS",
    titleLine1: "The point isn't to tell you",
    titleLine2: "we have experience.",
    description:
      "The point is what that experience can change for you.",
  },

  investorBenefits: {
    questions: {
      title: "Better questions",
      text:
        "Experience helps identify the questions that should be asked before a decision is made.",
    },
    attention: {
      title: "Earlier attention",
      text:
        "Potential technical or procedural issues can be identified before they become expensive surprises.",
    },
    professional: {
      title: "The right professional",
      text:
        "Not every question belongs to the same person. Experience means knowing when another specialist should step in.",
    },
    process: {
      title: "One connected process",
      text:
        "Property, engineering, legal and residency considerations can be coordinated around the investor's objective.",
    },
  },

  market: {
    sectionLabel: "A VISIBLE MARKET FOOTPRINT",
    titleLine1: "The work doesn't",
    titleLine2: "exist only on this website.",
    paragraph1:
      "Homes in Greece properties are also represented through established property platforms, creating a visible footprint beyond the company's own website.",
    paragraph2:
      "Public professional listings also identify the engineering practice directly under Svetlana Novikova's name.",

    proof: {
      propertyLabel: "PROPERTY PRESENCE",
      propertyTitle: "ACTIVE LISTINGS",
      propertyText:
        "Homes in Greece represented across public property listings.",

      engineeringLabel: "ENGINEERING PRACTICE",
      engineeringTitle: "SVETLANA NOVIKOVA",
      engineeringText:
        "Professional listings connect the engineering practice directly with Svetlana.",

      athensLabel: "ATHENS",
      athensTitle: "6 P. TSALDARI",
      athensText: "Professional presence in central Athens.",
    },
  },

  serviceNetwork: {
    engineering: {
      title: "Engineering",
      text:
        "Technical questions, property condition and engineering matters.",
    },
    legal: {
      title: "Legal",
      text:
        "Legal matters handled with the appropriate legal professionals.",
    },
    notarial: {
      title: "Notarial",
      text:
        "Coordination around the formal property transaction.",
    },
    accounting: {
      title: "Accounting & Tax",
      text:
        "Financial and tax matters referred to the relevant specialists.",
    },
  },

  coordination: {
    sectionLabel: "EXPERIENCE IS ALSO COORDINATION",
    titleLine1: "No serious property decision",
    titleLine2: "happens in isolation.",
    description:
      "Real estate, engineering, legal, notarial and accounting matters can intersect. The role is to understand where each area begins, where it ends and which professional should handle it.",
  },

  proofWall: {
    sectionLabel: "THE NUMBERS BEHIND THE SERVICE",
    titleLine1: "A track record",
    titleLine2: "worth putting on the table.",
  },

  proofPoints: {
    years: {
      title: "Years of experience",
      text: "Experience in the Greek real estate market.",
    },
    properties: {
      title: "Properties examined",
      text: "A substantial body of property assessment experience.",
    },
    languages: {
      title: "Languages",
      text: "Greek, English and Russian.",
    },
    perspective: {
      title: "Integrated perspective",
      text: "Real estate + engineering + residency.",
    },
  },

  svetlana: {
    imageAlt: "Svetlana Novikova, Dipl. Civil Engineer",
    sectionLabel: "THE PERSON BEHIND THE EXPERIENCE",
    titleLine1: "Experience is built",
    titleLine2: "one property at a time.",
    paragraph1:
      "Svetlana Novikova brings together her identity as a Dipl. Civil Engineer with her experience in Greek real estate, technical assessment and residency-related property matters.",
    paragraph2:
      "Her connection to Greece is also personal. She has a home here and understands the country not only through property and professional work, but through everyday life.",
    roles: {
      engineer: "Dipl. Civil Engineer",
      advisor: "Golden Visa Advisor",
      dueDiligence: "Technical Due Diligence",
      consultant: "Real Estate Consultant",
    },
    link: "Meet Svetlana & learn our story",
  },

  cta: {
    label: "START WITH THE RIGHT QUESTIONS",
    titleLine1: "Your investment deserves",
    titleLine2: "experience behind it.",
    description:
      "Tell us what you are looking for in Greece, whether you already have a property in mind and what you want to achieve. We can help you understand the property, the process and the next step.",
    primaryButton: "Book a Private Consultation",
    secondaryButton: "Explore the Investor Guide",
  },

  disclaimer:
    "Portfolio figures are based on the Homes in Greece website content supplied for this page and may change as listings are added, sold or rented. Professional-service information is based on publicly available business listings. Business experience figures are presented as company-provided information. Information on this website is for general informational purposes and does not constitute legal, tax or investment advice.",
},
    whoWeAre: {
  hero: {
    label: "WHO WE ARE",
    titleLine1: "The people behind",
    titleLine2: "your journey to Greece.",
    description:
      "Buying a property in another country is a deeply personal decision. We believe you deserve more than a transaction — you deserve people who understand both Greece and what it means to make it part of your future.",
    primaryButton: "Meet With Us",
    secondaryButton: "Explore the Investor Guide",
    metaBuiltAround: "BUILT AROUND",
    metaValues: "PEOPLE · PROPERTY · TRUST",
    metaGuide: "INVESTOR GUIDE",
  },

  story: {
    imageAlt:
      "Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor",
    photoBadge: "GOLDEN VISA ADVISOR",
    photoCaption1: "BASED IN GREECE",
    photoCaption2: "WORKING WITH INVESTORS WORLDWIDE",

    label: "THE PERSON BEHIND IT",

    titleLine1: "Greece is not just where I work.",
    titleLine2: "It is home.",

    lead:
      "Svetlana Novikova is a Dipl. Civil Engineer, Golden Visa Advisor, Technical Due Diligence Specialist and Real Estate Consultant based in Greece.",

    paragraph1:
      "Her relationship with Greece goes beyond the professional side of real estate. Greece is a place she knows personally — a country where she has built a life and has a home of her own.",

    paragraph2:
      "That personal connection shapes the way she approaches her work with international investors. The objective is not simply to help someone purchase a property. It is to help someone make an important decision in a country they may soon call home.",

    paragraph3:
      "With more than 15 years of experience in the Greek real estate market and more than 1,000 properties examined, her work combines technical knowledge with practical experience of the Greek property market.",

    signature: "Dipl. Civil Engineer · Golden Visa Advisor",
  },

  credibility: {
    label: "WHY INVESTORS TRUST US",
    titleLine1: "Experience you can",
    titleLine2: "build a decision on.",
    description:
      "International property investment requires more than enthusiasm for Greece. It requires experience, technical understanding and the right professionals around you.",
  },

  credentials: {
    years: {
      label: "Years of experience",
      text: "Experience within the Greek real estate market.",
    },

    properties: {
      label: "Properties examined",
      text:
        "A practical understanding built through real property experience.",
    },

    languages: {
      label: "Languages",
      text: "Support in Greek, English and Russian.",
    },
  },

  credentialStrip: {
    title: "Dipl. Civil Engineer",
    description:
      "Engineering knowledge at the heart of the process.",
  },

  expertiseIntro: {
    label: "WHAT WE BRING TO THE TABLE",
    titleLine1: "More than a Golden Visa.",
    titleLine2: "A complete perspective.",
    description:
      "A residence application is only one part of an international property investment. Our approach brings technical understanding, real estate experience and professional coordination together.",
  },

  expertise: {
    "01": {
      title: "Technical Due Diligence",
      text:
        "Looking beyond photographs and listings to understand the technical side of a property before you commit.",
    },

    "02": {
      title: "Golden Visa Guidance",
      text:
        "Helping investors understand the requirements, documents and steps involved in their residence-by-investment journey.",
    },

    "03": {
      title: "Real Estate Consulting",
      text:
        "Bringing an experienced understanding of the Greek property market into the investment decision.",
    },

    "04": {
      title: "Professional Coordination",
      text:
        "Connecting the technical, legal, notarial and financial sides of the process so you are not left managing everything alone.",
    },
  },

  team: {
    label: "ONE COORDINATED PROCESS",

    titleLine1: "You should not have to",
    titleLine2: "coordinate Greece alone.",

    description:
      "A successful property investment and Golden Visa application can involve several areas of expertise. Our role is to help bring the right people together at the right stage.",
  },

  professionals: {
    "01": {
      title: "Civil Engineer",
      text: "Technical assessment and property documentation.",
    },

    "02": {
      title: "Lawyer",
      text: "Legal guidance and review where required.",
    },

    "03": {
      title: "Notary",
      text: "Coordination of the formal property transaction.",
    },

    "04": {
      title: "Accountant",
      text:
        "Financial and tax matters handled by the appropriate professional.",
    },
  },

  philosophy: {
    label: "OUR PHILOSOPHY",

    titleLine1: "Treat every investment",
    titleLine2: "as if it were our own.",

    quote:
      "The right property is not simply the one that looks beautiful. It is the one that makes sense when you look beneath the surface.",

    paragraph1:
      "This is why technical due diligence is such an important part of our approach. Before an investor commits, the property deserves to be understood.",

    paragraph2:
      "Because when you are investing from another country, you are trusting people on the ground to see what you cannot.",
  },

  cta: {
    label: "LET'S TALK ABOUT YOUR PLANS",

    titleLine1: "Greece might be your next chapter.",
    titleLine2: "Let's start with a conversation.",

    description:
      "Tell us where you are in your journey, what you are looking for and what you want to achieve. We will help you understand what comes next.",

    primaryButton: "Book a Private Consultation",
    secondaryButton: "Return to Investor Guide",
  },

  disclaimer:
    "Information on this website is provided for general informational purposes and should not be considered legal, tax or investment advice. Golden Visa requirements and procedures may change. Requirements should always be confirmed with the relevant Greek authorities and qualified professionals.",
},
    faq: {
  intro: {
    eyebrow: "QUESTIONS, CLARIFIED",
    titleLine1: "Before You",
    titleLine2: "Invest in Greece",
    description:
      "The important questions, answered clearly. From investment routes and property checks to the Golden Visa process itself, here are some of the questions international investors most often ask before moving forward.",
    questionsAnswered: "Questions answered",
    metaDescription: "Designed around the investor journey",
  },

  sidePanel: {
    label: "A CLEARER WAY FORWARD",
    titleLine1: "Your questions",
    titleLine2: "matter before",
    titleLine3: "your investment.",
    description:
      "Every investment is different. Understanding your objectives and the property itself comes before deciding how to move forward.",
    profession: "Dipl. Civil Engineer",
    role: "Golden Visa Advisor",
  },

  items: {
    "01": {
      category: "INVESTMENT",
      question:
        "What investment routes are currently available for the Greek Golden Visa?",
      answer:
        "The Greek Golden Visa offers different investment routes depending on the type, location and characteristics of the investment. The applicable minimum investment and conditions should always be confirmed based on the current legislation and your individual circumstances.",
      related: "Investment Routes",
    },

    "02": {
      category: "ELIGIBILITY",
      question: "Who can apply for the Greek Golden Visa?",
      answer:
        "The programme is designed for eligible non-EU citizens who make a qualifying investment in Greece. Eligibility depends on the applicant, the chosen investment route and the applicable requirements at the time of application.",
      related: "Check Your Eligibility",
    },

    "03": {
      category: "PROPERTY",
      question: "Can I choose any property in Greece?",
      answer:
        "Not every property automatically qualifies for every investment route. The property's location, type, use, value and other characteristics can affect its eligibility. This is why the property should be assessed carefully before you commit to the investment.",
      related: "Property Opportunities",
    },

    "04": {
      category: "DUE DILIGENCE",
      question: "What does your technical due diligence actually involve?",
      answer:
        "The property is reviewed from a technical perspective before you move forward. Depending on the property and transaction, this can involve examining relevant documentation, planning and building considerations, the property's physical condition and potential technical issues that could affect the investment.",
      related: "Technical Due Diligence",
    },

    "05": {
      category: "PROCESS",
      question: "How long does the entire process take?",
      answer:
        "There is no single timeline that applies to every investor. The overall process can depend on property selection, documentation, technical and legal checks, transaction completion and the relevant administrative procedures. Your case is coordinated step by step so you understand what is happening at each stage.",
      related: "Your Golden Visa Journey",
    },

    "06": {
      category: "PROFESSIONAL TEAM",
      question: "Who handles the legal, technical and administrative parts?",
      answer:
        "A Golden Visa investment involves several professional disciplines. The process can involve an engineer, lawyer, notary, accountant and other relevant professionals. The goal is to coordinate these parts around your investment so that you have one clear point of communication throughout the journey.",
      related: "Why Work With Us",
    },

    "07": {
      category: "COSTS",
      question: "What additional costs should I budget for?",
      answer:
        "The investment amount is not necessarily the only cost involved. Depending on the transaction, you may also have taxes, professional fees, notarial costs, technical costs, government or application fees and other property-related expenses. The exact costs should be assessed for your individual investment before proceeding.",
      related: "Investment Planning",
    },

    "08": {
      category: "FAMILY",
      question: "Can my family members also receive residence permits?",
      answer:
        "Eligible family members may be included under the applicable Golden Visa framework, subject to the requirements in force at the time of application. Your individual family situation should be reviewed before the application is prepared.",
      related: "Family Eligibility",
    },

    "09": {
      category: "RESIDENCE",
      question: "Do I need to live permanently in Greece?",
      answer:
        "The residence requirements of the Golden Visa programme are different from the rules that determine other matters such as tax residency. Your specific circumstances should therefore be considered separately, particularly if you plan to spend significant time in Greece or elsewhere.",
      related: "Golden Visa Requirements",
    },

    "10": {
      category: "THE NEXT STEP",
      question: "What happens after I choose my property?",
      answer:
        "Once a suitable property has been identified, the process can move into the relevant technical and legal checks, transaction coordination and preparation of the required documentation. The different professionals involved are coordinated around your case while you remain informed throughout the process.",
      related: "Your Golden Visa Journey",
    },

    "11": {
      category: "OUR APPROACH",
      question: "Why should I work with a civil engineer when investing in Greece?",
      answer:
        "A Golden Visa investment is not only an immigration process. The property itself is a significant part of your investment. Having a Dipl. Civil Engineer involved means the property can also be examined from a technical perspective before you commit, helping you make a more informed investment decision.",
      related: "Technical Due Diligence",
    },
  },

  cta: {
    eyebrow: "STILL HAVE QUESTIONS?",
    titleLine1: "Let's discuss",
    titleLine2: "your situation.",
    description:
      "Every investment starts with understanding your objectives, preferred location and the right route forward.",
    button: "Start Your Free Assessment",
  },
},
    applicationChecklist: {
  hero: {
    label: "APPLICATION CHECKLIST",
    heading: "Know what's ready.",
    headingSecond: "Know what's missing.",
    description:
      "Keep track of the documents, requirements and professional checks that come together before a Greek Golden Visa application is submitted.",
    primary: "Start Your Checklist",
    secondary: "Explore the Investor Guide",
    meta: "APPLICATION READINESS",
  },

  intro: {
    label: "BEFORE YOU APPLY",
    heading:
      "A complete file is more than a pile of documents.",
    paragraphOne:
      "A Golden Visa application brings together personal, investment, property and insurance documentation. Some requirements also depend on the specific investment route.",
    paragraphTwo:
      "Use this checklist as a planning tool to see where you stand. Your final file should be reviewed against the requirements that apply to your individual case.",
  },

  progress: {
    label: "YOUR APPLICATION READINESS",
    checked: "checked",
    complete: "Your checklist is complete.",
    instruction:
      "Check each item as you prepare your application.",
    reset: "Reset checklist",
  },

  checklist: {
    label: "DOCUMENT TRACKER",
    heading: "Build your application file.",
    description:
      "Start with the essentials, then complete the route-specific and professional checks that apply to your investment.",
  },

  sections: {
    "identity.title": "Identity & Entry",
    "identity.description":
      "The documents that establish your identity and your lawful basis for submitting the application.",

    "identity.items.passport.title":
      "Valid passport or recognised travel document",
    "identity.items.passport.description":
      "Provide a valid travel document recognised by the Greek authorities.",

    "identity.items.entryStatus.title":
      "Valid entry / residence status",
    "identity.items.entryStatus.description":
      "Depending on your circumstances, this may include the appropriate visa, visa exemption, or residence permit.",

    "identity.items.photo.title":
      "Recent passport-style photograph",
    "identity.items.photo.description":
      "A recent colour photograph meeting the applicable Greek passport specifications, including the required digital format.",

    "identity.items.contact.title":
      "Email address and mobile phone",
    "identity.items.contact.description":
      "Current contact details are required for the electronic application process.",

    "investment.title":
      "Investment Documentation",
    "investment.description":
      "Evidence showing that the qualifying investment has been completed and meets the applicable requirements.",

    "investment.items.purchaseContract.title":
      "Property purchase documentation",
    "investment.items.purchaseContract.description":
      "The relevant transfer deed or other transaction documentation for the qualifying investment.",

    "investment.items.notarialCertificate.title":
      "Notarial certificate",
    "investment.items.notarialCertificate.description":
      "A certificate from the notary confirming the contracting parties, property details, consideration and payment details required under the Golden Visa framework.",

    "investment.items.paymentProof.title":
      "Evidence of qualifying payment",
    "investment.items.paymentProof.description":
      "Documentation supporting the payment of the agreed consideration through an accepted payment method.",

    "investment.items.landRegistry.title":
      "Land Registry / Cadastre registration evidence",
    "investment.items.landRegistry.description":
      "Proof of registration or the applicable registration filing / lawyer's certificate.",

    "investment.items.e9.title":
      "E9 real estate declaration",
    "investment.items.e9.description":
      "A copy of the investor's Greek real estate declaration where applicable.",

    "insurance.title":
      "Insurance & Application",
    "insurance.description":
      "Documents required to support the residence permit application itself.",

    "insurance.items.insurance.title":
      "Private health insurance",
    "insurance.items.insurance.description":
      "An insurance contract from a private insurance provider covering the applicable requirements.",

    "insurance.items.application.title":
      "Residence permit application",
    "insurance.items.application.description":
      "The application submitted through the electronic services of the Ministry of Migration and Asylum.",

    "insurance.items.fees.title":
      "Residence permit fees",
    "insurance.items.fees.description":
      "Confirm the applicable administrative fees and electronic residence permit printing charge before submission.",

    "route.title":
      "Route-Specific Documents",
    "route.description":
      "Additional evidence may be required depending on the investment structure and property route.",

    "route.items.routeVerification.title":
      "Investment route verified",
    "route.items.routeVerification.description":
      "Confirm which Golden Visa route applies to the property before relying on a standard checklist.",

    "route.items.specialProperty.title":
      "Special property documentation",
    "route.items.specialProperty.description":
      "Additional technical, legal or administrative evidence may apply to specific routes such as qualifying change-of-use or listed-building investments.",

    "route.items.companyOwnership.title":
      "Company ownership evidence",
    "route.items.companyOwnership.description":
      "If the property is acquired through an eligible legal entity, evidence of the investor's ownership interests may be required.",

    "professional.title":
      "Professional Review",
    "professional.description":
      "The final stage is not simply collecting files. Each document needs to support the application correctly.",

    "professional.items.legalReview.title":
      "Legal documentation reviewed",
    "professional.items.legalReview.description":
      "Confirm that the transaction and supporting legal documents have been reviewed by the appropriate professional.",

    "professional.items.technicalReview.title":
      "Technical documentation reviewed",
    "professional.items.technicalReview.description":
      "Confirm that the property's technical status and any route-specific requirements have been checked by an engineer.",

    "professional.items.applicationReview.title":
      "Application file reviewed before submission",
    "professional.items.applicationReview.description":
      "Complete a final consistency check before the application is submitted.",
  },

  item: {
    required: "REQUIRED",
    ready: "READY",
    toCheck: "TO CHECK",
    markComplete:
      "Mark {title} as complete",
  },

  note: {
    label: "IMPORTANT",
    heading:
      "Not every application follows the same document path.",
    paragraphOne:
      "Golden Visa requirements can change according to the investment route, property type and the applicant's circumstances. For example, current official procedures list additional evidence for qualifying listed-property and change-of-use investments.",
    paragraphTwo:
      "This checklist is designed to help you prepare and organise your file. It is not a substitute for legal advice or an official determination of eligibility.",
  },

  next: {
    label: "WHEN THE FILE IS READY",
    heading: "Preparation becomes",
    headingSecond: "the application.",
    description:
      "Once your documents have been gathered and reviewed, the application can move into the formal submission process.",

    stepOne: {
      title: "Final review",
      description:
        "Check that the documents are complete, consistent and appropriate for the selected route.",
    },

    stepTwo: {
      title: "Online submission",
      description:
        "The residence permit application is submitted through the relevant electronic services.",
    },

    stepThree: {
      title: "Application review",
      description:
        "The competent authority checks the supporting documentation and processes the application.",
    },
  },

  cta: {
    label: "READY FOR THE NEXT STEP?",
    heading: "Your application should begin",
    headingSecond: "with clarity.",
    description:
      "If you are still choosing your route, property or investment strategy, get the right questions answered before you prepare the final file.",
    primary: "Review Your Investment Budget",
    secondary: "Book a Private Consultation",
  },

  disclaimer: {
    important: "Information note:",
    description:
      "This checklist is provided for general planning purposes and should not be treated as an official application checklist or legal advice. Requirements, fees and procedures may change. The final document list should be confirmed for the applicant's specific investment route and circumstances.",
  },

  sources: {
    label: "Based on current official Greek sources",
    ministry: "Ministry of Migration & Asylum",
    registry:
      "National Registry of Administrative Procedures",
  },
},
    calculator: {
  eyebrow: "INVESTMENT CALCULATOR",

  hero: {
    title: "Know Your Investment Budget",
    emphasis: "before you invest.",
    description:
      "Estimate the capital required for your Greek Golden Visa investment.",
    estimate: "ESTIMATE",
    greece: "GREECE",
  },

  loading: {
    title: "Know your budget",
    description: "Loading calculator...",
  },

  error: {
    description:
      "The calculator could not be loaded. Please try again later.",
  },

  route: {
    label: "01 / CHOOSE YOUR ROUTE",
    heading: "Start with the",
    headingAccent: "investment route.",
    description:
      "Select the investment route you are considering. The applicable minimum depends on the location and structure of the qualifying investment.",
    selected: "SELECTED ROUTE",
  },

  property: {
    label: "02 / YOUR PROPERTY",
    heading: "What are you planning",
    headingAccent: "to invest?",
    description:
      "Enter the expected acquisition price of the property you are considering.",
    inputLabel: "Property investment amount",
    rangeLabel: "Adjust investment amount",

    warning: {
      title: "Below the selected threshold.",
      description:
        "The amount entered is below the indicative minimum for this route. The property and investment structure must be assessed against the applicable requirements.",
    },
  },

  applicants: {
    label: "03 / APPLICANTS",
    heading: "Who will be applying?",
    description:
      "Select any additional family members included in the application.",
    spouse: "Spouse",
    child: "Child 0–13 years",
  },

  disclaimer:
    "The figures shown are estimates based on the supplied cost information and are not a legal or financial quotation.",

  results: {
    label: "04 / ESTIMATED CAPITAL",
    description:
      "Estimated property investment plus the costs currently included in this calculator.",
    propertyInvestment: "Property investment",
    application: "Golden Visa application",
    purchaseCosts: "Property purchase costs",
    inspection: "Technical property inspection",
    additionalCosts: "ADDITIONAL COSTS",
    includedCosts: "INCLUDED IN APPLICATION COSTS",
  },

  inspection: {
    from: "From",
  },

  explanation: {
    label: "05 / KNOW WHAT YOU ARE PAYING FOR",
    heading: "Only the",
    headingAccent: "relevant costs.",
    description:
      "The calculator displays only the costs configured and enabled in the calculator settings.",

    card1: {
      title: "Golden Visa application",
      description:
        "Includes the application-related costs configured for the selected applicants.",
    },

    card2: {
      title: "Technical inspection",
      description:
        "Technical property inspection is shown separately from the Golden Visa application costs.",
    },

    card3: {
      title: "Property purchase",
      description:
        "Purchase-related costs appear here only when they have been configured and enabled in the CMS.",
    },

    card4: {
      title: "Legal scope",
      description:
        "Application-related professional costs are calculated according to the values configured in the CMS.",
    },
  },

  dueDiligence: {
    label: "BEFORE YOU COMMIT",
    heading: "Check the property",
    headingAccent: "before you invest.",
    description:
      "Technical property inspection to assess the property before proceeding with the investment.",
    button: "Request Property Review",
  },

  routes: {
    label: "06 / UNDERSTAND THE ROUTES",
    heading: "The minimum figure",
    headingAccent: "needs context.",
    description:
      "Different investment routes have different conditions. The threshold should always be considered together with the property, location and legal structure.",
    requirements:
      "Location and property requirements apply.",
  },

  cta: {
    label: "NEXT STEP",
    heading: "Know your number.",
    headingAccent:
      "Now build the right strategy.",
    description:
      "Your investment budget is only the starting point. The next step is confirming the right route and property for your circumstances.",
    primary: "Check Your Eligibility",
    secondary: "Book a Private Consultation",
  },

  legal: {
    important: "Important:",
    description:
      "This calculator provides illustrative estimates for general planning purposes only. Costs may change depending on the property, transaction and applicant circumstances.",
  },
},
    investorHandbook: {
  hero: {
    eyebrow: "INVESTOR HANDBOOK",
    titleLineOne: "Everything you should know",
    titleLineTwo: "before investing in Greece.",
    description:
      "A practical guide to the Greek Golden Visa, investment routes, property selection, due diligence and the residence process.",
    primaryButton: "Start Reading",
    secondaryButton: "Check Your Eligibility",
    meta: {
      guide: "INVESTOR GUIDE",
      country: "GREECE",
    },
  },

  essentials: {
    eyebrow: "THE ESSENTIALS",
    title: "The essentials, at a glance.",
    description:
      "Before looking at properties or discussing numbers, understand how the programme works, what it requires and where professional due diligence becomes important.",
    items: {
      who: {
        title: "Who it is for",
        text:
          "Third-country nationals who meet the applicable investment and residence requirements.",
      },
      routes: {
        title: "Investment routes",
        text:
          "Different minimum investment thresholds apply depending on the location and type of qualifying investment.",
      },
      residence: {
        title: "Residence",
        text:
          "The programme provides a Greek residence permit linked to a qualifying investment. It is not EU citizenship.",
      },
      dueDiligence: {
        title: "Due diligence",
        text:
          "A qualifying property is not automatically a good investment. Legal, technical and commercial checks matter.",
      },
    },
  },

  routes: {
    eyebrow: "01 / INVESTMENT ROUTES",
    title: "There is more than one way to qualify.",
    description:
      "The applicable minimum investment depends on the location and the legal structure of the investment. The figure alone is never the whole story.",
    qualifyingRoute: "QUALIFYING ROUTE",
    important: "Important:",
    legalNote:
      "Investment thresholds and qualifying conditions depend on the applicable legal route. The information above is a high-level guide and should not replace an individual assessment.",

    items: {
      higherThreshold: {
        title: "Higher-threshold areas",
        description:
          "For qualifying real estate investments in Attica, the Regional Unit of Thessaloniki, Mykonos, Santorini, and islands with a population above 3,100 under the current framework.",
        note: "Specific property and transaction requirements apply.",
      },

      otherAreas: {
        title: "Other areas of Greece",
        description:
          "For qualifying real estate investments in areas outside the €800,000 threshold locations, subject to the applicable requirements.",
        note: "The qualifying property must meet the current legal conditions.",
      },

      specificRoutes: {
        title: "Specific qualifying routes",
        description:
          "Certain investment structures can qualify at €250,000, including specific change-of-use and listed-building cases.",
        note:
          "These routes have additional conditions and should be assessed individually.",
      },
    },
  },

  eligibility: {
    eyebrow: "02 / ELIGIBILITY",
    title: "Start with the person, not the property.",
    description:
      "The right investment starts with understanding your circumstances. Nationality, documentation, investment structure and the intended property route all matter.",
    link: "Check your eligibility",

    items: {
      national: {
        title: "Third-country national",
        text:
          "The programme is designed for qualifying investors who are nationals of countries outside the EU.",
      },
      investment: {
        title: "Qualifying investment",
        text:
          "The investment must satisfy the conditions of the applicable Golden Visa route.",
      },
      documentation: {
        title: "Supporting documentation",
        text:
          "Passport, property, payment, insurance and other documentation may be required depending on the route.",
      },
      application: {
        title: "Application requirements",
        text:
          "Applications follow the requirements and procedures of the Greek immigration authorities.",
      },
    },
  },

  residence: {
    eyebrow: "03 / RESIDENCE",
    titleLineOne: "Residence in Greece.",
    titleLineTwo: "A wider European context.",
    paragraphOne:
      "The Golden Visa provides a Greek residence permit for qualifying investors. Its value extends beyond the physical card, but its legal meaning should be understood precisely.",
    paragraphTwo:
      "Greek residence is not the same as EU citizenship and does not automatically grant the right to live or work in another EU country. Travel and residence rights remain subject to the applicable rules.",
  },

  property: {
    eyebrow: "04 / THE PROPERTY",
    titleLineOne: "A qualifying property",
    titleLineTwo: "is not automatically a good investment.",
    description:
      "The property has two jobs: it must satisfy the applicable residence requirements, and it should make sense as an investment. Those questions need to be assessed separately.",

    statement: {
      intro: "THE QUESTION IS NOT ONLY",
      questionOne: "“Does this property qualify?”",
      transition: "It is also:",
      questionTwo: "“Should I invest in this property?”",
    },

    checks: {
      ownership: "Ownership and title",
      encumbrances: "Existing encumbrances",
      planning: "Planning and building legality",
      use: "Permitted use",
      condition: "Technical condition",
      location: "Location and market context",
    },

    callout: {
      eyebrow: "WHY DUE DILIGENCE MATTERS",
      title:
        "Immigration eligibility and investment quality are two different questions.",
      text:
        "Technical due diligence helps identify issues before a purchase becomes a problem. It should be considered alongside legal and commercial assessment.",
    },
  },

  process: {
    eyebrow: "05 / THE PROCESS",
    title: "Your Golden Visa journey, step by step.",
    description:
      "The process is easier to understand when each stage has a clear purpose and the right professional is involved at the right moment.",

    items: {
      eligibility: {
        title: "Eligibility",
        text:
          "Establish whether your nationality, circumstances and intended investment fit the current framework.",
      },
      strategy: {
        title: "Investment Strategy",
        text:
          "Choose the investment route and define what you want the investment to achieve.",
      },
      selection: {
        title: "Property Selection",
        text:
          "Identify properties that can satisfy both the investment objective and Golden Visa requirements.",
      },
      dueDiligence: {
        title: "Technical Due Diligence",
        text:
          "Review the property's technical condition, legality, planning status and documentation.",
      },
      legal: {
        title: "Legal & Transaction Process",
        text:
          "Coordinate the legal, notarial, tax and property-transfer requirements.",
      },
      application: {
        title: "Residence Application",
        text:
          "Prepare and submit the residence permit application with the required supporting documentation.",
      },
      permit: {
        title: "Residence Permit",
        text:
          "Once the application is approved, the residence permit is issued according to the applicable procedure.",
      },
    },
  },

  family: {
    eyebrow: "06 / FAMILY",
    titleLineOne: "The investment can be about",
    titleLineTwo: "more than one person.",
    description:
      "Depending on the circumstances and applicable provisions, eligible family members may also benefit from residence arrangements connected to the investor.",
    link: "Explore Family & Future",
  },

  costs: {
    eyebrow: "07 / PRACTICAL CONSIDERATIONS",
    title: "Budget for the whole process.",
    description:
      "The purchase price is only one part of the financial picture. Professional and transaction-related costs should be considered before committing to an investment.",

    items: {
      acquisition: "Property acquisition costs",
      taxes: "Taxes and registration costs",
      notarial: "Notarial and legal services",
      dueDiligence: "Technical due diligence",
      application: "Residence application fees",
      insurance: "Insurance and supporting documentation",
    },

    warning: {
      title: "Do not plan from the minimum investment figure alone.",
      text:
        "Your total budget should account for the property, transaction expenses, professional services and the specific requirements of your chosen route.",
    },
  },

  faq: {
    eyebrow: "08 / COMMON QUESTIONS",
    title: "A few questions, answered.",
    link: "View all FAQs",

    items: {
      citizenship: {
        question: "Does the Golden Visa give me EU citizenship?",
        answer:
          "No. A Greek Golden Visa is a residence permit. It should not be presented as EU citizenship or as an automatic right to live or work in another EU country.",
      },

      property: {
        question: "Can I choose any property in Greece?",
        answer:
          "No. The property must satisfy the legal requirements of the applicable investment route. Technical and legal due diligence is therefore essential.",
      },

      threshold: {
        question: "Is €250,000 the general Golden Visa threshold?",
        answer:
          "No. €250,000 applies only to specific qualifying investment routes. The applicable threshold depends on the structure, property and location.",
      },

      investment: {
        question:
          "Does owning a qualifying property automatically make it a good investment?",
        answer:
          "No. Immigration eligibility and investment quality are two different questions. A property should be assessed independently for legal, technical, location and market considerations.",
      },

      family: {
        question: "Can my family be included?",
        answer:
          "Eligible family members may benefit under the applicable family provisions. The exact circumstances and documentation should be assessed before proceeding.",
      },
    },
  },

  final: {
    eyebrow: "READY TO TAKE THE NEXT STEP?",
    title: "Ready to understand your options?",
    description:
      "Start with your eligibility, define your investment strategy and make your next decision with the right information.",
    primaryButton: "Check Your Eligibility",
    secondaryButton: "Book a Private Consultation",
  },

  disclaimer: {
    label: "Important information:",
    text:
      "This handbook is provided for general informational purposes and does not constitute legal, tax or financial advice. Greek immigration and investment legislation may change. Requirements should be verified against the applicable legislation and official guidance at the time of your application.",
    reviewed: "Information reviewed for 2026",
  },
},
    familyAndFuture: {
  hero: {
    imageAlt: "Family enjoying time together in Greece",
    eyebrow: "FAMILY & FUTURE",
    titleLineOne: "A future worth",
    titleLineTwo: "coming home to.",
    description:
      "Greece can be more than the place where an investment is made. It can become a place where family life unfolds — together, naturally, and over time.",
    primaryButton: "Discuss Your Family's Future",
    secondaryButton: "Check Your Eligibility",
    bottomLabel: "WHY GREECE",
  },

  intro: {
    eyebrow: "WHAT ARE YOU REALLY INVESTING IN?",
    titleLineOne: "Not just property.",
    titleLineTwo: "Not just residence.",
    titleLineThree: "A place for what comes next.",
    description:
      "For families considering Greece, the decision often extends beyond the investment itself. It is about having a European base, spending meaningful time together, and creating the freedom to imagine the future differently.",
  },

  life: {
    eyebrow: "A LIFE SHARED",
    description:
      "Some of the most valuable things in life are not measured in numbers.",

    cards: {
      mornings: {
        imageAlt: "Family enjoying everyday life in Greece",
        title: "Mornings that feel different.",
        text:
          "Long breakfasts. Outdoor living. The sea never feeling quite as far away as it did before.",
      },

      together: {
        imageAlt: "Family spending time together outdoors",
        title: "More time together.",
        text:
          "From a morning by the water to an afternoon exploring somewhere new, Greece creates space for experiences that become family memories.",
      },
    },
  },

  family: {
    eyebrow: "YOUR FAMILY CAN BE PART OF THE JOURNEY",
    titleLineOne: "One decision.",
    titleLineTwo: "A wider circle.",
    description:
      "Depending on the applicable Greek immigration provisions and individual circumstances, qualifying family members may be able to obtain residence permits connected to the investor's residence status.",

    cards: {
      spouse: {
        title: "Spouse / Partner",
        text:
          "Residence provisions may extend to the investor's qualifying spouse or partner.",
      },

      children: {
        title: "Children",
        text:
          "Qualifying unmarried children under the applicable age requirements may be included.",
      },

      spouseChildren: {
        title: "Children of a Spouse / Partner",
        text:
          "Certain children of the spouse or partner may also qualify, subject to the applicable requirements.",
      },

      ascendants: {
        title: "Direct Ascendants",
        text:
          "Applicable provisions may also cover qualifying direct ascendants of the investor or spouse / partner.",
      },
    },

    legalNote:
      "Family residence rights are subject to the applicable Greek immigration framework, supporting documentation, and individual eligibility requirements. This page is for general information and does not constitute legal advice.",
  },

  future: {
    imageAlt: "Family looking toward the Greek landscape",
    imageLabel: "THE YEARS THAT MATTER",
    imageTitleLineOne: "A place can become",
    imageTitleLineTwo: "part of your family's story.",

    timeline: {
      now: {
        label: "NOW",
        title: "The decision.",
        text:
          "Understanding what Greece could mean for you and the people closest to you.",
      },

      next: {
        label: "NEXT",
        title: "The move.",
        text:
          "Turning a carefully considered investment into a practical connection with Greece.",
      },

      yearsAhead: {
        label: "YEARS AHEAD",
        title: "The memories.",
        text:
          "Returning to familiar places, discovering new ones, and watching your relationship with Greece grow.",
      },

      beyond: {
        label: "BEYOND",
        title: "The legacy.",
        text:
          "A place that can become part of the story your family carries forward.",
      },
    },
  },

  statement: {
    eyebrow: "A DIFFERENT KIND OF INVESTMENT",
    mainLineOne: "You can invest",
    mainLineTwo: "in property.",
    emphasis: "Or you can invest in what comes after.",
    description:
      "A place to gather. A place to return to. A place your children remember.",
  },

  final: {
    eyebrow: "YOUR NEXT CHAPTER",
    titleLineOne: "Where do you want",
    titleLineTwo: "the next chapter to begin?",
    description:
      "If Greece is part of your family's future, the first step is understanding what is possible for your circumstances.",
    primaryButton: "Discuss Your Family's Future",
    secondaryButton: "Check Your Eligibility",
  },
},
    realEstatePotential: {
  common: {
    source: "Source",
  },

  hero: {
    eyebrow: "WHY GREECE / REAL ESTATE POTENTIAL",
    dataLabel: "MARKET DATA · 2026",
    kicker: "THE GREEK PROPERTY MARKET",
    titleLineOne: "Greece,",
    titleLineTwo: "by the numbers.",
    description:
      "A data-led view of price growth, investment, international demand and housing supply across the Greek real-estate market.",
    bottomLabel: "REAL ESTATE POTENTIAL",
    updatedLabel: "UPDATED 2026",
  },

  overview: {
    label: "THE MARKET AT A GLANCE",
    titleLineOne: "The market,",
    titleLineTwo: "in six numbers.",
    description:
      "The Greek property market is no longer defined simply by recovery. Price growth, residential investment and international demand continue to shape a market that has become increasingly relevant to investors.",
  },

  marketStats: {
    apartmentGrowth: {
      label: "APARTMENT PRICE GROWTH",
    },
    residentialInvestment: {
      label: "RESIDENTIAL INVESTMENT GROWTH",
    },
    travelReceipts: {
      label: "TRAVEL RECEIPTS",
    },
    realEstateFdi: {
      label: "REAL-ESTATE FDI",
    },
    overnightStays: {
      label: "NON-RESIDENT OVERNIGHT STAYS",
    },
    investmentGdp: {
      label: "RESIDENTIAL INVESTMENT / GDP",
    },
  },

  price: {
    label: "PRICE MOMENTUM",
    titleLineOne: "Prices are still",
    titleLineTwo: "moving upward.",
    description:
      "Greek apartment prices increased by 5.7% year-on-year in Q1 2026. Growth has moderated from the 8.1% average recorded in 2025, but remains positive across every major geographical category tracked by the Bank of Greece.",

    bigMetric: {
      label: "GREECE · Q1 2026",
      description: "Apartment prices · year-on-year",
      source: "Source · Bank of Greece · provisional Q1 2026 data",
    },

    comparison: {
      title: "Greece vs European Union",
      annual: "ANNUAL CHANGE",
      greece: "Greece",
      eu: "European Union",
      sourceGreece: "Greece · Bank of Greece · Q1 2026",
      sourceEu: "EU · Eurostat · Q1 2026",
    },

    regional: {
      label: "REGIONAL PERFORMANCE",
      title: "Growth was broad-based.",
      source: "Bank of Greece · Q1 2026",
      items: {
        otherAreas: "Other areas of Greece",
        thessaloniki: "Thessaloniki",
        otherCities: "Other cities",
        athens: "Athens",
      },
    },
  },

  capital: {
    label: "CAPITAL FORMATION",
    titleLineOne: "Investment is",
    titleLineTwo: "coming back.",
    description:
      "The recovery of residential construction and investment is one of the clearest signals that the Greek housing market is moving beyond simple price appreciation.",

    feature: {
      metricLabel: "RESIDENTIAL INVESTMENT",
      period: "Q4 2025 · year-on-year",
      whyLabel: "WHY IT MATTERS",
      title:
        "More capital is flowing into the residential side of the economy.",
      text:
        "Residential investment increased by 41.2% year-on-year in Q4 2025 and reached 3.9% of GDP. This points to a substantial increase in residential capital formation.",
      source: "Source · Bank of Greece / ELSTAT · Q4 2025",
    },

    cards: {
      gdp: {
        title: "OF GDP",
        text:
          "Residential investment as a percentage of Greek GDP in Q4 2025.",
      },
      fdi: {
        title: "REAL-ESTATE FDI",
        text:
          "Foreign direct investment in Greek real estate, according to Bank of Greece data.",
      },
      totalFdi: {
        title: "OF TOTAL FDI",
        text:
          "More than 45% of Greece's €6bn direct-investment inflow was directed towards real estate.",
      },
    },
  },

  demand: {
    label: "DEMAND VS SUPPLY",
    titleLineOne: "Demand is strong.",
    titleLineTwo: "Supply is catching up.",
    description:
      "Greece combines substantial international demand with a housing supply that remains below the European average. Together, these forces help explain the market's recent price behaviour.",

    demandLabel: "DEMAND",
    supplyLabel: "SUPPLY",

    travelReceipts: "TRAVEL RECEIPTS · 2025",
    overnightStays: "NON-RESIDENT OVERNIGHT STAYS · 2025",
    travellerGrowth: "INBOUND TRAVELLER GROWTH · 2025",

    sourceDemand: "Source · Bank of Greece · 2025 travel services data",

    euAverage: "OF EU AVERAGE",

    supplyTitle: "Housing investment remains structurally constrained.",
    supplyText:
      "The European Commission reports that housing supply is constrained by years of sluggish housing investment, which has only started to grow since 2020 and remains at around 60% of the EU average.",

    sourceSupply: "Source · European Commission · Greece Country Report 2026",
  },

  athens: {
    label: "ATHENS IN CONTEXT",
    titleLineOne: "Athens in the",
    titleLineTwo: "European context.",
    description:
      "Prime residential capital values put Athens below several major European capitals in Savills' 2025 World Cities Prime Residential Index.",

    chartLabel: "PRIME RESIDENTIAL CAPITAL VALUE",
    source: "Savills Research · 2025",

    cities: {
      paris: "Paris",
      milan: "Milan",
      rome: "Rome",
      lisbon: "Lisbon",
      athens: "Athens",
      berlin: "Berlin",
      madrid: "Madrid",
    },

    disclaimer:
      "Prime residential capital value is a market comparison indicator, not an average residential transaction price.",
  },

  risk: {
    label: "A BALANCED VIEW",
    titleLineOne: "Strong signals.",
    titleLineTwo: "Selective decisions.",
    description:
      "The data supports a compelling market story — but it does not remove the need for careful property selection, financial analysis or technical due diligence.",

    notice: {
      label: "IMPORTANT MARKET CONTEXT",
      title: "Growth does not mean every property is a good investment.",
      text:
        "The European Commission reports that housing affordability has deteriorated and that recent price developments show signs of overvaluation. Market-wide indicators therefore need to be combined with property-level analysis before an investment decision is made.",
      source: "Source · European Commission · Greece Country Report 2026",
    },
  },

  signals: {
    priceMomentum: {
      title: "PRICE MOMENTUM",
      text:
        "Greek apartment prices continued to rise in Q1 2026, although at a slower pace than during the strongest years of the recent cycle.",
    },
    capitalFormation: {
      title: "CAPITAL FORMATION",
      text:
        "Residential investment increased sharply in Q4 2025, reaching 3.9% of GDP.",
    },
    internationalDemand: {
      title: "INTERNATIONAL DEMAND",
      text:
        "Travel receipts reached a new high in 2025, reinforcing the importance of international demand to the Greek economy.",
    },
  },

  final: {
    markerOne: "REAL ESTATE POTENTIAL",
    markerTwo: "THE NEXT STEP",
    titleLineOne: "The market tells",
    titleLineTwo: "only half the story.",
    description:
      "Market data can identify where opportunity exists. The right property requires a much closer look — from technical condition and documentation to location, value and investment suitability.",
    primaryButton: "Request Property Review",
    secondaryButton: "Check Your Eligibility",
  },
},
    gatewayToEurope: {
  hero: {
    eyebrow: "WHY GREECE / GATEWAY TO EUROPE",
    titleLineOne: "A European Base.",
    titleLineTwo: "A Mediterranean Life.",
    description:
      "Greece offers a recognised European base with the character, connectivity and lifestyle of the Mediterranean.",
    facts: {
      eu: "EU MEMBER",
      schengen: "SCHENGEN AREA",
      mediterranean: "MEDITERRANEAN",
    },
    bottom: "GATEWAY TO EUROPE",
    imageAlt: "Greece and the Mediterranean",
  },

  position: {
    label: "POSITION",
    titleLineOne: "Europe,",
    titleLineTwo: "within reach.",
    description:
      "Greece sits at a natural meeting point between Europe and the Mediterranean — combining European infrastructure with a distinctly Greek way of life.",
    quoteLabel: "THE POSITION OF GREECE",
    quoteLineOne: "European in framework.",
    quoteLineTwo: "Mediterranean in character.",
    paragraphOne:
      "For an international investor, Greece offers something unusually balanced: access to a European environment without losing the lifestyle and geographic character that make the country distinctive.",
    paragraphTwo:
      "The result is a residence base that connects two worlds naturally — Europe and the Mediterranean.",

    facts: {
      eu: {
        title: "European Union",
        text:
          "Greece is a member of the European Union, placing residence within an established European legal and institutional framework.",
      },
      schengen: {
        title: "Schengen Area",
        text:
          "Greece is part of the Schengen Area, allowing eligible residents to travel through the Schengen zone subject to the applicable rules.",
      },
      mediterranean: {
        title: "Mediterranean Position",
        text:
          "Greece combines European connectivity with a strategic position at the meeting point of Europe and the Mediterranean.",
      },
    },
  },

  document: {
    sectionLabel: "THE RESIDENCE PERMIT",
    intro:
      "Behind the concept of a European base is something tangible: formal residence in Greece, represented by an official residence permit.",
    imageAlt: "Official sample of a Greek electronic residence permit",
    captionLabel: "OFFICIAL SAMPLE",
    captionTitle: "GREEK ELECTRONIC RESIDENCE PERMIT",
    titleLineOne: "The residence",
    titleLineTwo: "permit.",
    lead:
      "Residence is ultimately formalised through an official Greek residence permit.",
    body:
      "The card is only the visible result of a much broader process involving eligibility, investment, documentation, due diligence and professional coordination.",
    note:
      "Official sample imagery published by the Hellenic Ministry of Migration and Asylum. This is an illustrative sample and does not represent an individual applicant.",
  },

  residence: {
    watermark: "RESIDENCE",
    sectionLabel: "WHAT RESIDENCE MAKES POSSIBLE",
    kicker: "THE WIDER HORIZON",
    titleLineOne: "A residence",
    titleLineTwo: "with a wider horizon.",
    description:
      "The value of Greek residence extends beyond the physical card. It creates a practical connection to Greece while placing you within a wider European context.",
    featureLabel: "WHAT RESIDENCE CREATES",
    featureEyebrow: "A PRACTICAL EUROPEAN BASE",
    featureTitleLineOne: "Residence in Greece.",
    featureTitleLineTwo: "Possibility beyond it.",

    points: {
      base: {
        title: "A BASE IN GREECE",
        text:
          "A recognised residence in Greece gives you a clear European base while keeping the Mediterranean lifestyle at its centre.",
      },
      connectivity: {
        title: "EUROPEAN CONNECTIVITY",
        text:
          "Greece's position within the European and Schengen frameworks keeps the wider region within practical reach, subject to the applicable rules.",
      },
      connection: {
        title: "A LONG-TERM CONNECTION",
        text:
          "For many investors, residence is not simply about a document. It is about creating a lasting connection with Greece and its opportunities.",
      },
    },

    importantLabel: "IMPORTANT DISTINCTION",
    importantText:
      "Greek residence is not the same as EU citizenship and does not automatically grant the right to live or work in another EU country. Travel and residence rights remain subject to the applicable rules.",
  },

  process: {
    sectionLabel: "WHAT SITS BEHIND THE RESIDENCE",
    titleLineOne: "The permit is the result.",
    titleLineTwo: "The process comes first.",
    description:
      "A successful application depends on more than submitting paperwork. The investment, property and supporting documentation all need to be understood and coordinated.",

    steps: {
      eligibility: {
        title: "ELIGIBILITY",
        text:
          "Understand whether your circumstances fit the applicable residence framework.",
      },
      investment: {
        title: "INVESTMENT",
        text:
          "Identify and assess the appropriate investment route and property opportunity.",
      },
      dueDiligence: {
        title: "DUE DILIGENCE",
        text:
          "Review the property, documentation and technical aspects before proceeding.",
      },
      coordination: {
        title: "COORDINATION",
        text:
          "Coordinate the legal, technical and administrative professionals involved.",
      },
      residence: {
        title: "RESIDENCE",
        text:
          "Move forward with the application and residence permit process.",
      },
    },
  },

  final: {
    sectionLabel: "YOUR EUROPEAN BASE",
    titleLineOne: "Start with Greece.",
    titleLineTwo: "Think beyond it.",
    description:
      "The right decision starts with understanding the country, the residence framework and the investment behind it.",
    primaryButton: "Discuss Your Investment",
    secondaryButton: "Check Your Eligibility",
  },
},
    mediterraneanLifestyle: {
  images: {
    hero: "Mediterranean coastline in Greece",
    coast: "Greek coastline",
    village: "Greek village",
    mountains: "Greek mountains",
    cityLife: "Greek city life",
    athens: "Athens lifestyle",
    crete: "Crete lifestyle",
    peloponnese: "Peloponnese lifestyle",
    islands: "Greek island lifestyle",
    beach: "Greek beach and Mediterranean sea",
    boat: "Boat in the Greek Mediterranean",
    food: "Greek food",
    table: "Greek dining table",
    market: "Greek food market",
    family: "Family enjoying life in Greece",
    closing: "Mediterranean sunset in Greece",
  },

  hero: {
    eyebrow: "WHY GREECE / MEDITERRANEAN LIFESTYLE",
    titleLineOne: "Life isn't measured",
    titleLineTwo: "in hours here.",
    description:
      "Greece offers a way of living shaped by climate, coastline, food, community, culture and an extraordinary variety of places to call home.",
    button: "Explore the lifestyle",
    location: "AEGEAN / MEDITERRANEAN",
    country: "GREECE",
  },

  intro: {
    label: "MORE THAN A DESTINATION",
    titleLineOne: "What attracts people",
    titleLineTwo: "isn't only the weather.",
    paragraphOne:
      "Greece's appeal goes beyond its climate. It is the combination of landscape, food, social life, culture, outdoor living and proximity to the sea that creates a distinctive everyday rhythm.",
    paragraphTwo:
      "And because Greece is not one single environment, that lifestyle can look very different depending on where you choose to spend your time.",
    mosaic: {
      coast: "THE COAST",
      localLife: "LOCAL LIFE",
      landscape: "THE LANDSCAPE",
      cityLife: "CITY LIFE",
    },
  },

  day: {
    label: "A DAY IN GREECE",
    titleLineOne: "Imagine an ordinary",
    titleLineTwo: "day here.",
    description:
      "The Mediterranean lifestyle is easiest to understand when you stop treating it as a holiday and imagine it as everyday life.",
    moments: {
      morning: {
        label: "MORNING",
        title: "Start slowly.",
        text:
          "A coffee outside. A walk through the neighbourhood. The sea, a square or a bakery within easy reach.",
      },
      everyday: {
        label: "EVERYDAY LIFE",
        title: "Outside becomes normal.",
        text:
          "The Mediterranean climate makes outdoor space part of ordinary life rather than something reserved for holidays.",
      },
      afternoon: {
        label: "AFTERNOON",
        title: "Take your time.",
        text:
          "Lunch can become a social occasion, followed by a swim, a walk or simply time spent with family and friends.",
      },
      sea: {
        label: "THE SEA",
        title: "The coast is close.",
        text:
          "For many parts of Greece, the relationship between towns, cities and the coastline is one of the defining features of everyday life.",
      },
      evening: {
        label: "EVENING",
        title: "Evenings move outside.",
        text:
          "Dinner, conversation and a walk can stretch well into the evening as streets and waterfronts come alive.",
      },
      night: {
        label: "NIGHT",
        title: "Stay out a little longer.",
        text:
          "From a lively capital to a quiet island village, Greek evenings can have completely different personalities.",
      },
    },
  },

  locations: {
    label: "ONE COUNTRY / MANY LIFESTYLES",
    titleLineOne: "Where you live",
    titleLineTwo: "changes the experience.",
    description:
      "Greece offers dramatically different environments within one country. A metropolitan lifestyle in Athens is a very different proposition from a coastal town, island community or mountain village.",
    select: "SELECT A LOCATION",
    items: {
      athens: {
        name: "Athens",
        subtitle: "CITY ENERGY",
        description:
          "A capital where ancient heritage, contemporary culture, business, dining and everyday urban life exist side by side.",
        tags: ["Culture", "Business", "Dining", "City life"],
      },
      crete: {
        name: "Crete",
        subtitle: "ISLAND LIVING",
        description:
          "A large island with its own rhythm — combining beaches, mountains, villages, agriculture, food and established communities.",
        tags: ["Sea", "Nature", "Food", "Community"],
      },
      peloponnese: {
        name: "Peloponnese",
        subtitle: "COAST & COUNTRYSIDE",
        description:
          "Coastal towns, historic landscapes, mountains and a slower rhythm make the Peloponnese one of Greece's most varied regions.",
        tags: ["Coast", "History", "Nature", "Space"],
      },
      islands: {
        name: "The Islands",
        subtitle: "A DIFFERENT PACE",
        description:
          "From well-connected destinations to quieter islands, each offers a distinct relationship with the sea and local life.",
        tags: ["Sea", "Privacy", "Community", "Escape"],
      },
    },
  },

  sea: {
    label: "THE MEDITERRANEAN",
    titleLineOne: "The sea is not",
    titleLineTwo: "just scenery.",
    description:
      "For much of Greece, the coastline is woven into the rhythm of everyday life. Swimming, sailing, waterfront walks, fishing villages and coastal dining are not necessarily special occasions — they can become part of the routine.",
    stats: {
      beaches: "BLUE FLAG BEACHES",
      ranking: "WORLDWIDE IN 2025",
      islands: "ISLANDS & ISLETS",
    },
  },

  food: {
    label: "FOOD / COMMUNITY",
    titleLineOne: "Food is part of",
    titleLineTwo: "the rhythm.",
    description:
      "Greek food is deeply connected to place, seasonality, local produce and social life. Meals often become opportunities to slow down and spend time together.",
    points: {
      regional: {
        title: "Regional identity",
        text:
          "From island kitchens to mainland villages, ingredients and traditions vary from place to place.",
      },
      produce: {
        title: "Local produce",
        text:
          "Olive oil, vegetables, seafood, herbs and other local ingredients are central to the cuisine.",
      },
      table: {
        title: "Time around the table",
        text:
          "Dining is often as much about conversation and company as it is about the meal itself.",
      },
    },
  },

  seasons: {
    label: "BEYOND THE SUMMER",
    titleLineOne: "Greece is not",
    titleLineTwo: "only August.",
    description:
      "A country of cities, islands, mountains and villages naturally changes with the seasons. The experience does too.",
    items: {
      spring: {
        name: "Spring",
        description:
          "Mild weather, green landscapes, outdoor cafés and the beginning of the long outdoor season.",
      },
      summer: {
        name: "Summer",
        description:
          "Long days, swimming, coastal living and evenings that naturally move outdoors.",
      },
      autumn: {
        name: "Autumn",
        description:
          "A quieter rhythm returns while much of the country remains comfortable for outdoor life.",
      },
      winter: {
        name: "Winter",
        description:
          "A different Greece — cities, mountains, villages, food and cultural life beyond the summer season.",
      },
    },
  },

  outdoor: {
    label: "OUTDOOR LIVING",
    titleLineOne: "The landscape",
    titleLineTwo: "becomes part of life.",
    description:
      "Greece's geography creates an unusual variety of experiences within relatively short distances: coastline, islands, mountains, countryside and urban centres.",
    facts: {
      coast: "COASTAL LIVING",
      mountains: "MOUNTAIN LANDSCAPES",
      towns: "HISTORIC TOWNS",
    },
  },

  investor: {
    label: "WHY THIS MATTERS",
    titleLineOne: "A residence decision",
    titleLineTwo: "is also a lifestyle decision.",
    description:
      "For an international investor, choosing Greece is not necessarily only about obtaining residence rights. It can also be about having a place to return to, a country to explore and an environment in which family and personal life can develop.",
    points: {
      return: {
        title: "A place to return to",
        text:
          "Your connection with Greece can extend beyond the transaction itself.",
      },
      lifestyles: {
        title: "Different ways to live",
        text:
          "City, coast, island and countryside offer genuinely different experiences.",
      },
      experience: {
        title: "A country to experience",
        text:
          "Greece rewards exploration far beyond a single destination.",
      },
    },
    button: "Explore Investment Options",
  },

  closing: {
    label: "THE GREEK WAY OF LIFE",
    titleLineOne: "Maybe the real",
    titleLineTwo: "investment is time.",
    description:
      "Discover Greece not simply as a destination, but as a place where you could spend more of it.",
    button: "Speak With an Advisor",
  },

  legal: {
    title: "Information note.",
    text:
      "Lifestyle and destination information is provided for general informational purposes. Individual locations, accessibility, climate, services and property suitability vary. Any investment or residence decision should be considered separately from lifestyle information and assessed according to the applicable legislation and individual circumstances.",
  },
},
    compareOptions: {
  hero: {
    eyebrow: "COMPARE YOUR OPTIONS",
    titleLineOne: "Not every investor",
    titleLineTwo: "should take the",
    titleAccent: "same path.",
    description:
      "The right Golden Visa investment is about more than a headline threshold. Compare the main approaches by ownership, simplicity, flexibility and diversification before deciding where to look next.",
    primaryButton: "Compare the Approaches",
    secondaryButton: "Speak With an Advisor",
    side: {
      investment: "INVESTMENT",
      decision: "DECISION",
      framework: "FRAMEWORK",
    },
  },

  compass: {
    label: "THE INVESTOR COMPASS",
    titleLineOne: "Start with what",
    titleLineTwo: "matters to you.",
    description:
      "Different investors optimise for different things. Select a priority below and see how the three approaches compare from that perspective.",
    priorityLabel: "YOUR PRIORITY",
    optimisingFor: "OPTIMISING FOR",
    fit: {
      strong: "STRONG FIT",
      possible: "POSSIBLE FIT",
      lower: "LOWER FIT",
    },
    priorities: {
      ownership: {
        label: "Property ownership",
        description:
          "You want the investment to result in a tangible property you own.",
      },
      simplicity: {
        label: "Simplicity",
        description:
          "You prefer a structure that is easier to understand and navigate.",
      },
      flexibility: {
        label: "Flexibility",
        description:
          "You want more room to consider different investment structures.",
      },
      diversification: {
        label: "Diversification",
        description:
          "You want to avoid concentrating your investment strategy around one conventional property.",
      },
    },
    note:
      "These indicators are decision-support guidance, not legal, financial or investment ratings. The suitability of any route depends on the investor's individual circumstances and the applicable legislation.",
  },

  options: {
    property: {
      eyebrow: "PROPERTY ACQUISITION",
      title: "Own the asset.",
      description:
        "A conventional real estate approach for investors who want their Golden Visa strategy centred around a tangible property.",
      asset: "Residential real estate",
      involvement: "Low — Medium",
      focus: "Property ownership",
      diligence: "Property, title & documentation",
      bestFor:
        "Investors who want a tangible Greek property as part of their investment.",
      linkLabel: "Explore Properties",
    },

    strategic: {
      eyebrow: "STRATEGIC PROPERTY",
      title: "Choose with strategy.",
      description:
        "A more selective approach where the property is considered as part of a broader investment strategy rather than simply a listing.",
      asset: "Selected real estate opportunity",
      involvement: "Medium",
      focus: "Investment strategy + property",
      diligence: "Property + investment assessment",
      bestFor:
        "Investors willing to take a more considered approach to property selection.",
      linkLabel: "Explore Strategic Options",
    },

    alternative: {
      eyebrow: "ALTERNATIVE INVESTMENT",
      title: "Look beyond property.",
      description:
        "For investors considering qualifying investment structures outside a conventional residential property acquisition.",
      asset: "Qualifying investment structure",
      involvement: "Depends on structure",
      focus: "Alternative investment exposure",
      diligence: "Investment, provider & structure",
      bestFor:
        "Investors who do not necessarily want their strategy centred around traditional real estate.",
      linkLabel: "Explore Alternatives",
    },
  },

  comparison: {
    label: "AT A GLANCE",
    titleLineOne: "Three approaches.",
    titleLineTwo: "Different priorities.",
    description:
      "The comparison below looks at the investment approach itself — not just the legal threshold.",
    table: {
      decisionFactor: "DECISION FACTOR",
      coreAsset: "Core asset",
      ownership: "Ownership",
      primaryFocus: "Primary focus",
      involvement: "Involvement",
      dueDiligence: "Due diligence",
      bestSuited: "Best suited to",
    },
    values: {
      direct: "Direct",
      structureDependent: "Depends on structure",
    },
  },

  tradeOffs: {
    label: "THE TRADE-OFFS",
    titleLineOne: "Every investment",
    titleLineTwo: "has a trade-off.",
    description:
      "A good decision is not about finding an option with no disadvantages. It is about understanding what each approach gives you — and what it asks from you in return.",
    gainTitle: "You gain",
    tradeTitle: "You accept",
    items: {
      property: {
        title: "Property Acquisition",
        gains: [
          "Tangible asset ownership",
          "Familiar investment structure",
          "Potential personal-use value",
        ],
        trades: [
          "Location-specific requirements",
          "Property and title due diligence",
          "Capital concentrated in an individual asset",
        ],
      },
      strategic: {
        title: "Strategic Property",
        gains: [
          "More selective property screening",
          "A strategy-led acquisition process",
          "Opportunity-specific analysis",
        ],
        trades: [
          "More decision-making",
          "Deeper due diligence",
          "Potentially longer selection process",
        ],
      },
      alternative: {
        title: "Alternative Investment",
        gains: [
          "Different investment exposure",
          "Potential diversification",
          "No conventional property purchase",
        ],
        trades: [
          "Different risk characteristics",
          "Provider and structure due diligence",
          "Less tangible ownership",
        ],
      },
    },
  },

  threshold: {
    label: "WHERE THE THRESHOLD FITS IN",
    titleLineOne: "The number is",
    titleLineTwo: "only one variable.",
    description:
      "Investment thresholds matter, but they should be evaluated alongside location, property characteristics, qualifying conditions and your overall investment strategy.",
    linkLabel: "View Investment Requirements",
    steps: {
      "250k":
        "Specific qualifying categories and circumstances.",
      "400k":
        "Applicable investment areas and qualifying conditions.",
      "800k":
        "Designated higher-threshold locations and applicable property conditions.",
    },
    note:
      "Always verify the applicable threshold and qualifying conditions for the specific investment before committing.",
  },

  framework: {
    label: "YOUR DECISION",
    titleLineOne: "The route comes after",
    titleLineTwo: "the strategy.",
    description:
      "Before choosing an investment structure, establish what you are actually trying to achieve.",
    steps: {
      objective: {
        label: "OBJECTIVE",
        question: "What are you trying to achieve?",
      },
      asset: {
        label: "ASSET",
        question: "What do you want your investment to be?",
      },
      location: {
        label: "LOCATION",
        question: "Where does the strategy make sense?",
      },
      structure: {
        label: "STRUCTURE",
        question: "Which qualifying structure fits?",
      },
      review: {
        label: "REVIEW",
        question: "What needs to be verified?",
      },
    },
    statement:
      "Strategy first. Route second. Verification always.",
  },

  personas: {
    label: "WHICH SOUNDS LIKE YOU?",
    titleLineOne: "Start where",
    titleLineTwo: "you are.",
    description:
      "You do not need to know the answer before speaking with an advisor. These are simply starting points to help you understand which direction may deserve a closer look.",
    items: {
      property: {
        quoteLineOne: "“I want a property",
        quoteLineTwo: "I can understand and own.”",
        description:
          "A conventional property acquisition may be the natural place to begin.",
        linkLabel: "Explore Properties",
      },
      strategic: {
        quoteLineOne: "“I want someone to help me",
        quoteLineTwo: "identify the right strategy.”",
        description:
          "A more selective property strategy may deserve closer consideration.",
        linkLabel: "Explore Strategic Options",
      },
      alternative: {
        quoteLineOne: "“I don't necessarily want my",
        quoteLineTwo: "investment centred on property.”",
        description:
          "An alternative qualifying investment structure may be worth investigating.",
        linkLabel: "Explore Alternatives",
      },
    },
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Before you",
    titleLineTwo: "decide.",
    description:
      "A few questions investors commonly have before choosing where to focus their research.",
    items: {
      bestOption: {
        question: "Which investment option is the best?",
        answer:
          "There is no universally best option. The appropriate approach depends on your objectives, available capital, preferred asset, location, level of involvement and the requirements that apply to your intended Golden Visa route.",
      },
      threshold: {
        question:
          "Is the €250K, €400K or €800K threshold the main thing I should compare?",
        answer:
          "Not by itself. For real estate, the applicable investment requirement can depend on factors such as location, property characteristics and the qualifying investment structure. The threshold should be evaluated together with the rest of the strategy.",
      },
      advisor: {
        question:
          "Can I decide on the investment route after speaking with an advisor?",
        answer:
          "Yes. In many cases it is more useful to establish your objectives and circumstances first, then identify which investment approach deserves further investigation.",
      },
      alternativeDueDiligence: {
        question:
          "Does choosing an alternative investment mean I avoid due diligence?",
        answer:
          "No. Due diligence changes rather than disappears. With alternative investments, attention may shift towards the investment structure, provider, documentation, risk characteristics and the specific requirements of the qualifying route.",
      },
    },
  },

  cta: {
    label: "NOT SURE WHICH DIRECTION FITS?",
    titleLineOne: "Start with your",
    titleLineTwo: "investment objective.",
    description:
      "Tell us what you are trying to achieve and we can help you understand which investment approach deserves closer consideration.",
    button: "Book a Private Consultation",
  },

  legal: {
    important: "Important:",
    text:
      "This comparison is provided for general informational purposes only. It is not legal, tax, immigration, financial or investment advice. Investment suitability and Golden Visa eligibility depend on the specific investment, applicant circumstances, applicable legislation and documentation at the relevant time.",
  },
},
    alternativeInvestments: {
  hero: {
    eyebrow: "ALTERNATIVE INVESTMENTS",
    titleLineOne: "Your capital can enter Greece",
    titleLineTwo: "without buying a property.",
    description:
      "Explore financial investment routes available under Greece's investor residence framework — from qualifying funds and Greek government bonds to regulated investment structures.",
    primaryButton: "Explore Investment Routes",
    secondaryButton: "Discuss Your Investment",
    thresholds: {
      entry: "ENTRY",
      core: "CORE",
      premium: "PREMIUM",
      caption: "QUALIFYING INVESTMENT THRESHOLDS",
    },
    meta: {
      capital: "CAPITAL",
      greece: "GREECE",
      residence: "RESIDENCE",
    },
  },

  intro: {
    label: "THE ROUTE IS THE INVESTMENT",
    titleLineOne: "The important question",
    titleLineTwo: "isn't simply how much.",
    description:
      "It is where the capital goes, how the investment is structured, what it invests in, who manages or holds it, and whether the arrangement satisfies the applicable residence framework.",
    principles: {
      capital: {
        label: "01 / CAPITAL",
        title: "How much?",
        text:
          "The statutory threshold is the starting point — not the entire assessment.",
      },
      structure: {
        label: "02 / STRUCTURE",
        title: "What exactly?",
        text:
          "Shares, bonds, funds, deposits and other structures can have very different requirements.",
      },
      regulation: {
        label: "03 / REGULATION",
        title: "Who manages it?",
        text:
          "The investment vehicle, issuer, institution or manager needs to fit the relevant framework.",
      },
      retention: {
        label: "04 / RETENTION",
        title: "What must remain?",
        text:
          "Holding, custody and evidence requirements matter after the initial investment is made.",
      },
    },
  },

  routes: {
    label: "INVESTMENT ROUTES",
    titleLineOne: "Different structures.",
    titleLineTwo: "Different requirements.",
    description:
      "The financial route should be identified before an investor commits capital. These categories provide a framework for understanding the available pathways.",
    tabs: {
      all: "All routes",
    },
    groups: {
      market: {
        label: "MARKET INVESTMENTS",
      },
      managed: {
        label: "FUNDS & MANAGED STRUCTURES",
      },
      structured: {
        label: "DIRECT / STRUCTURED CAPITAL",
      },
    },
    items: {
      listedSecurities: {
        title: "Listed securities",
        description:
          "Qualifying shares, corporate bonds and/or Greek government bonds traded on regulated markets or multilateral trading facilities operating in Greece.",
        tagOne: "Listed securities",
        tagTwo: "Regulated market",
      },
      governmentBonds: {
        title: "Greek government bonds",
        description:
          "A qualifying investment in Greek government bonds with a minimum acquisition value of €500,000 and at least three years of remaining maturity at the time of purchase.",
        tagOne: "Government bonds",
        tagTwo: "3+ years maturity",
      },
      mutualFunds: {
        title: "Qualifying mutual funds",
        description:
          "Qualifying mutual fund structures meeting the statutory requirements, including the applicable asset and investment conditions.",
        tagOne: "Mutual funds",
        tagTwo: "Regulated structure",
      },
      alternativeInvestmentOrganisations: {
        title: "Alternative Investment Organisations",
        description:
          "Qualifying alternative investment structures meeting the applicable statutory requirements and investing exclusively in Greece.",
        tagOne: "AIF structure",
        tagTwo: "Greece focused",
      },
      greekCompanyInvestment: {
        title: "Greek company investment",
        description:
          "A qualifying capital contribution into newly issued shares or bonds of an eligible Greek company, subject to the applicable requirements.",
        tagOne: "Company capital",
        tagTwo: "New issuance",
      },
      greekRealEstateInvestmentCompanies: {
        title: "Greek real-estate investment companies",
        description:
          "A qualifying capital contribution into an eligible Greek real-estate investment company structure operating under the applicable framework.",
        tagOne: "REIC",
        tagTwo: "Greek real estate",
      },
      ventureCapitalStructures: {
        title: "Venture capital structures",
        description:
          "Qualifying E.K.E.S. or A.K.E.S. structures meeting the applicable requirements and investing exclusively in businesses with a presence in Greece.",
        tagOne: "Venture capital",
        tagTwo: "Greek businesses",
      },
      fixedTermDeposit: {
        title: "Fixed-term deposit",
        description:
          "A qualifying fixed-term deposit with a Greek credit institution, subject to the applicable duration, renewal and documentation requirements.",
        tagOne: "Greek credit institution",
        tagTwo: "Fixed term",
      },
    },
    qualifyingRoute: "QUALIFYING ROUTE",
    discuss: "Discuss",
  },

  amount: {
    label: "SAME AMOUNT. DIFFERENT INVESTMENT.",
    titleLineOne: "€350,000 doesn't",
    titleLineTwo: "mean the same thing.",
    description:
      "Two investments can have the same price and completely different legal characteristics. The investment amount is only one part of the assessment.",
    checks: {
      underlyingAssets: "Underlying assets matter.",
      fundManager: "Fund or manager eligibility matters.",
      regulatoryStatus: "Regulatory status matters.",
      holdingDocumentation: "Holding and documentation matter.",
    },
  },

  process: {
    label: "FROM STRATEGY TO RESIDENCE",
    titleLineOne: "How the financial",
    titleLineTwo: "route works.",
    description:
      "A qualifying investment is not simply selected from a menu. The route needs to be understood, verified and properly documented.",
    items: {
      objective: {
        title: "Define the objective",
        text:
          "Understand whether the investor is looking for securities, managed funds, Greek business exposure, government bonds, deposits or another qualifying structure.",
      },
      eligibleRoute: {
        title: "Identify the eligible route",
        text:
          "Match the intended strategy against the applicable statutory category and investment threshold.",
      },
      structure: {
        title: "Verify the structure",
        text:
          "Confirm the relevant fund, organisation, issuer, intermediary, custody arrangements and regulatory requirements.",
      },
      execute: {
        title: "Execute the investment",
        text:
          "Complete the investment through the appropriate financial institution or intermediary and according to the relevant requirements.",
      },
      document: {
        title: "Document & maintain",
        text:
          "The investment and its continued holding need to be capable of being evidenced throughout the relevant residence process.",
      },
    },
  },

  approach: {
    label: "OUR APPROACH",
    titleLineOne: "We don't believe the",
    titleLineTwo: "Golden Visa should",
    titleHighlight: "dictate your investment strategy.",
    description:
      "The objective is not to push an investor toward the first qualifying product available. The right route depends on objectives, risk tolerance, liquidity requirements and wider investment strategy — with the residence requirements assessed alongside those considerations.",
    button: "Discuss Your Investment Strategy",
  },

  review: {
    label: "BEFORE CAPITAL MOVES",
    titleLineOne: "The structure needs",
    titleLineTwo: "to make sense.",
    description:
      "We focus on the points that determine whether an intended financial investment can actually support the residence strategy.",
    points: {
      structure: {
        title: "Structure",
        text:
          "Is the investment vehicle actually within the applicable statutory category?",
      },
      eligibility: {
        title: "Eligibility",
        text:
          "Does the fund, organisation, issuer or instrument satisfy the relevant requirements?",
      },
      custody: {
        title: "Custody",
        text:
          "Where is the investment held and how can the investment be documented?",
      },
      evidence: {
        title: "Evidence",
        text:
          "Can the investment and its continued holding be properly certified?",
      },
    },
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Before you",
    titleLineTwo: "move capital.",
    description:
      "Financial investment routes can look simple on paper. The details are where eligibility is determined.",
    items: {
      withoutProperty: {
        question: "Can I obtain the Golden Visa without buying property?",
        answer:
          "Yes. Greece's investor residence framework includes qualifying financial investment routes in addition to real estate. The relevant investment must satisfy the specific statutory conditions for the route being used.",
      },
      differentThresholds: {
        question:
          "Why are some financial routes €350K and others €500K?",
        answer:
          "The investment thresholds differ according to the specific statutory category and the characteristics of the investment. The amount alone does not determine eligibility.",
      },
      everyFund: {
        question: "Does every investment fund qualify?",
        answer:
          "No. A fund or investment organisation must satisfy the requirements applicable to its specific category. The existence of a €350,000 or €500,000 investment opportunity does not by itself make it a qualifying Golden Visa investment.",
      },
      governmentBonds: {
        question: "Can I invest in Greek government bonds?",
        answer:
          "Certain Greek government bond investments can qualify under the applicable framework, subject to the required investment amount, maturity and other statutory conditions.",
      },
      keepInvestment: {
        question: "Do I have to keep the investment?",
        answer:
          "The qualifying investment and its continued holding must be capable of being demonstrated according to the requirements of the relevant investment route. The precise requirements vary between categories.",
      },
      existingPortfolio: {
        question: "Can my existing investment portfolio qualify?",
        answer:
          "That depends on the structure, timing, value, issuer, investment vehicle and other requirements applicable to the specific route. Existing investments should be reviewed individually rather than assumed to qualify.",
      },
      saferThanProperty: {
        question: "Is financial investment safer than buying property?",
        answer:
          "Golden Visa eligibility and investment risk are separate questions. Financial investments can carry market, liquidity and issuer risks, while property carries its own legal, technical, market and transaction risks.",
      },
    },
  },

  cta: {
    label: "DIFFERENT CAPITAL. SAME OBJECTIVE.",
    titleLineOne: "Find the route that",
    titleLineTwo: "fits your strategy.",
    description:
      "Let's determine which investment structure makes sense for your objectives and how the relevant Golden Visa requirements apply.",
    button: "Discuss Your Investment Strategy",
  },

  legal: {
    title: "Legal information.",
    text:
      "The investment categories and thresholds presented on this page are provided for general informational purposes and do not constitute legal, tax, immigration, financial or investment advice. Eligibility depends on the specific investment structure, applicant circumstances, required documentation and legislation in force at the relevant time. Financial investments may involve market, liquidity, issuer and other investment risks.",
  },
},
    strategicOpportunities: {
  hero: {
    eyebrow: "STRATEGIC PROPERTY OPPORTUNITIES",
    titleLineOne: "The right property",
    titleLineTwo: "is not always",
    titleLineThree: "the obvious one.",
    description:
      "Some opportunities require more than comparing photographs, asking prices and locations. We look at the asset, the intended strategy and the applicable Golden Visa route together before an investment is treated as viable.",
    primaryButton: "Explore Opportunities",
    secondaryButton: "Discuss an Opportunity",
    aside: {
      strategy: "STRATEGY",
      property: "PROPERTY",
      execution: "EXECUTION",
    },
  },

  positioning: {
    label: "NOT JUST A CHEAPER PROPERTY",
    titleLineOne: "Strategic value is",
    titleLineTwo: "usually hidden in the details.",
    paragraphOne:
      "A strategic property may need a different way of looking at it. The opportunity can come from a conversion, restoration, repositioning or a location that makes sense for a particular investment route.",
    paragraphTwo:
      "That also means the risks need to be understood before the opportunity is treated as an investment.",
    cards: {
      opportunity: {
        label: "OPPORTUNITY",
        title: "See beyond the listing.",
        text:
          "We look at what the asset could become, not only how it is presented today.",
      },
      feasibility: {
        label: "FEASIBILITY",
        title: "Can the strategy actually work?",
        text:
          "Proposed conversions, restoration or repositioning need to be technically and legally examined.",
      },
      documentation: {
        label: "DOCUMENTATION",
        title: "The paperwork matters.",
        text:
          "Ownership, planning and property documentation form part of the investment assessment.",
      },
      route: {
        label: "ROUTE",
        title: "Match the asset to the route.",
        text:
          "The intended Golden Visa route must be identified before the property is treated as qualifying.",
      },
    },
  },

  categories: {
    label: "WHAT WE LOOK FOR",
    titleLineOne: "Different assets.",
    titleLineTwo: "Different strategies.",
    description:
      "Strategic opportunities are assessed according to what makes the property interesting and what needs to happen before that potential can become a real investment.",
    cards: {
      conversion: {
        label: "01 / CONVERSION",
        titleLineOne: "Non-residential",
        titleLineTwo: "into residential.",
        text:
          "Assets where a change of use may form part of the investment strategy, subject to the applicable planning and legal requirements.",
        footer: "€250K ROUTE MAY APPLY",
      },
      restoration: {
        label: "02 / RESTORATION",
        titleLineOne: "Character assets",
        titleLineTwo: "worth restoring.",
        text:
          "Listed or protected buildings where restoration or reconstruction forms part of the investment thesis.",
        footer: "€250K ROUTE MAY APPLY",
      },
      location: {
        label: "03 / LOCATION",
        titleLineOne: "Location-led",
        titleLineTwo: "opportunities.",
        text:
          "Properties where the location, market positioning and applicable investment threshold need to be considered together.",
        footer: "ROUTE DEPENDENT",
      },
    },
  },

  assessment: {
    label: "THE INVESTMENT QUESTION",
    titleLineOne: "Interesting is not",
    titleLineTwo: "the same as",
    titleHighlight: "viable.",
    description:
      "A strategic opportunity only becomes useful when the proposed investment can survive technical, legal and route-specific scrutiny.",
    items: {
      asset: {
        title: "Asset & location",
        text:
          "What exactly is being acquired, where is it located and why does the location matter to the intended route?",
      },
      condition: {
        title: "Existing condition",
        text:
          "What is physically there today, and what works would be required to achieve the proposed investment strategy?",
      },
      documentation: {
        title: "Permitted use & documentation",
        text:
          "The intended use, planning position, ownership structure and supporting documentation need to align with the transaction.",
      },
      route: {
        title: "Golden Visa route",
        text:
          "Only after the property and its circumstances are understood should the applicable investment route be assessed.",
      },
    },
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Strategic",
    titleLineTwo: "doesn't mean speculative.",
    description:
      "The important questions to ask before treating a property with potential as an investment opportunity.",
    items: {
      strategicOpportunity: {
        question: "What makes a property a strategic opportunity?",
        answer:
          "A strategic opportunity is not selected simply because it is attractive or available. The property may have a particular location, asset type, conversion possibility, restoration angle or repositioning potential that makes the investment case worth examining in more detail.",
      },
      route250: {
        question: "Does a €250K opportunity automatically qualify for the Golden Visa?",
        answer:
          "No. The €250K threshold applies to specific categories under the current framework, including qualifying change-of-use cases and qualifying listed-building restoration or reconstruction cases. The property, transaction and required conditions must be verified individually before acquisition.",
      },
      technicalChecks: {
        question:
          "Why are technical checks especially important for strategic properties?",
        answer:
          "Because the investment case can depend on matters that are not visible in a listing: permitted use, planning status, building condition, floor area, documentation, existing works and whether the proposed strategy can actually be executed.",
      },
      ownProperty: {
        question: "Can I submit my own property for strategic review?",
        answer:
          "Yes. If you have found an asset independently, you can send it to us for review. The objective is to understand whether the property makes sense within your intended Golden Visa strategy before you commit.",
      },
    },
  },

  cta: {
    label: "HAVE SOMETHING INTERESTING?",
    titleLineOne: "Bring us the",
    titleLineTwo: "property.",
    description:
      "If you have found an unusual property, conversion opportunity or restoration asset yourself, send it to us. We can help establish what needs to be checked before you commit.",
    button: "Request a Strategic Review",
  },

  legal: {
    title: "Legal information.",
    text:
      "The information presented on this page is for general informational purposes and does not constitute legal, tax, immigration or investment advice. Indicative investment routes and amounts are subject to the specific property, transaction structure, applicant circumstances and legislation in force at the relevant time. Independent legal and technical verification is required before acquisition.",
  },
},
    readyProperties: {
  hero: {
    eyebrow: "READY-TO-MOVE PROPERTIES",
    titleLineOne: "Find the property.",
    titleLineTwo: "Then verify the investment.",
    description:
      "Explore completed property opportunities selected for investors considering the Greek Golden Visa through real estate. Every opportunity should be assessed against the applicable route before you commit.",
    primaryButton: "Explore Properties",
    secondaryButton: "Request a Property Review",
    meta: {
      investment: "INVESTMENT",
      property: "PROPERTY",
      greece: "GREECE",
    },
  },

  intro: {
    label: "NOT JUST ANOTHER LISTING",
    titleLineOne: "A property can look right",
    titleLineTwo: "and still need checking.",
    paragraphOne:
      "The asking price is only one part of a Golden Visa property investment. Location, property characteristics, ownership, documentation and the applicable investment route all matter.",
    paragraphTwo:
      "That is why our approach begins with the investment strategy rather than simply showing you properties.",
  },

  strategy: {
    location: {
      label: "LOCATION",
      title: "Where?",
      text:
        "Location can determine which investment threshold and route applies.",
    },
    property: {
      label: "PROPERTY",
      title: "What?",
      text:
        "The property's characteristics need to fit the intended investment route.",
    },
    route: {
      label: "ROUTE",
      title: "Which?",
      text:
        "The intended route determines the conditions that need to be satisfied.",
    },
    review: {
      label: "REVIEW",
      title: "Verify.",
      text:
        "The property should be reviewed before you commit to the transaction.",
    },
  },

  collection: {
    label: "PROPERTY COLLECTION",
    titleLineOne: "Explore available",
    titleLineTwo: "opportunities.",
    description:
      "Filter the collection by location, investment route or property type. Every property should still be reviewed individually before acquisition.",
    opportunity: "opportunity",
    opportunities: "opportunities",
  },

  filters: {
    title: "FIND YOUR PROPERTY",
    mobileButton: "Filters",
    clear: "Clear filters",
    searchPlaceholder: "Search location or property...",
    searchAriaLabel: "Search properties",
    clearSearch: "Clear search",
    locationLabel: "LOCATION",
    routeLabel: "INVESTMENT ROUTE",
    typeLabel: "PROPERTY TYPE",

    locations: {
      all: "All locations",
      attica: "Attica",
      peloponnese: "Peloponnese",
      crete: "Crete",
      centralMacedonia: "Central Macedonia",
    },

    routes: {
      all: "All routes",
      twoFifty: "€250K",
      fourHundred: "€400K",
      eightHundred: "€800K",
      lifestyle: "Lifestyle Investment",
      notVerified: "Not Yet Verified",
    },

    types: {
      all: "All property types",
      apartment: "Apartment",
      residence: "Residence",
      villa: "Villa",
      land: "Land",
      commercial: "Commercial",
    },
  },

  results: {
    showing: "Showing",
    property: "property",
    properties: "properties",
    filtered: "Filtered collection",
  },

  propertyCard: {
    routeNotVerified: "Route to be verified",
    routeSuffix: "route",
    reviewButton: "Request Property Review",
  },

  empty: {
    label: "NO MATCHES",
    title: "No matching properties.",
    description:
      "Try another location, investment route or property type.",
    button: "Clear all filters",
  },

  collectionNote: {
    important: "Important:",
    text:
      "Property availability, pricing and Golden Visa qualification can change. Individual properties must be verified against the applicable legislation, investment route and documentation before acquisition.",
  },

  review: {
    label: "BEFORE YOU COMMIT",
    titleLineOne: "Found a property",
    titleLineTwo: "somewhere else?",
    description:
      "You do not need to choose a property from our collection. If you have already found a property in Greece, you can request a property review before moving forward.",
    button: "Request a Property Review",
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Before you",
    titleLineTwo: "choose a property.",
    description:
      "The important questions to consider before treating a property as a Golden Visa investment.",
    items: {
      automaticEligibility: {
        question:
          "Are these properties automatically eligible for the Golden Visa?",
        answer:
          "No. A property being presented as a Golden Visa opportunity does not replace the necessary legal, technical and transaction checks. Each property should be assessed against the applicable investment route before acquisition.",
      },
      reviewBeforePurchase: {
        question:
          "Can I review a property before deciding to purchase it?",
        answer:
          "Yes. Investors can request a property review before committing to a transaction so the property can be considered in the context of the intended Golden Visa route.",
      },
      readyToMove: {
        question: "What does 'ready-to-move' mean?",
        answer:
          "It refers to completed or substantially completed residential properties rather than development projects that require a renovation or redevelopment strategy.",
      },
      propertyElsewhere: {
        question:
          "Can you help if I already found a property elsewhere?",
        answer:
          "Yes. You do not have to choose a property from this collection. You can request a review of a property you have independently identified.",
      },
    },
  },

  cta: {
    label: "READY TO LOOK SERIOUSLY?",
    titleLineOne: "Have a property",
    titleLineTwo: "in mind?",
    description:
      "Send us the property and we can help you understand what should be checked before you make a commitment.",
    button: "Speak With an Advisor",
  },

  legal: {
    title: "Legal information.",
    text:
      "Property information on this page is provided for general informational purposes and does not constitute legal, tax, immigration or investment advice. Golden Visa eligibility depends on the specific property, investment route, applicant circumstances and legislation in force at the relevant time.",
  },
},
    programJourney: {
  hero: {
    eyebrow: "YOUR GOLDEN VISA JOURNEY",
    titleLineOne: "From the first decision",
    titleLineTwo: "to your residence permit.",
    description:
      "The application is only one part of the journey. Understand what happens before, during and after your investment — and where the right decisions matter most.",
    primaryButton: "Explore the Journey",
    secondaryButton: "Check Your Eligibility",
    meta: {
      program: "PROGRAM",
      application: "APPLICATION",
      journey: "JOURNEY",
    },
  },

  intro: {
    label: "THE BIGGER PICTURE",
    titleLineOne: "The application is only",
    titleLineTwo: "one part of the journey.",
    paragraphOne:
      "A Golden Visa investment begins before an application is ever submitted. The route you choose, the property you select and the checks completed before the transaction can all affect what happens later.",
    paragraphTwo:
      "Our role is to help connect these stages so that the investment is approached as a complete process rather than a series of disconnected tasks.",
  },

  journey: {
    label: "THE JOURNEY",
    titleLineOne: "Six stages.",
    titleLineTwo: "One connected process.",
    description:
      "Every application is different. The sequence below shows the principal stages an investor may move through when pursuing the Greek Golden Visa.",

    steps: {
      strategy: {
        label: "STRATEGY",
        title: "Understand your starting point.",
        text:
          "Before looking at properties, we establish your eligibility, investment objectives, preferred location and the Golden Visa route that may be appropriate for your circumstances.",
        outcome: "A clearer investment strategy",
      },
      investment: {
        label: "INVESTMENT",
        title: "Identify the right opportunity.",
        text:
          "The search should begin with the requirements of your chosen route. Location, property type, investment structure and budget all matter before a property is considered suitable.",
        outcome: "A property aligned with your strategy",
      },
      dueDiligence: {
        label: "DUE DILIGENCE",
        title: "Verify before you commit.",
        text:
          "A property should be examined before the transaction moves forward. Technical characteristics, ownership information and the conditions relevant to the intended Golden Visa route need to be assessed.",
        outcome: "A more informed investment decision",
      },
      transaction: {
        label: "TRANSACTION",
        title: "Build the transaction correctly.",
        text:
          "Once the property is considered suitable, the relevant professionals coordinate the legal, technical, notarial and financial elements required to complete the investment.",
        outcome: "A completed qualifying investment",
      },
      application: {
        label: "APPLICATION",
        title: "Prepare and submit your application.",
        text:
          "The required documentation is assembled according to the investment route and the applicant's circumstances before the residence permit application is submitted to the competent authority.",
        outcome: "A complete application file",
      },
      residence: {
        label: "RESIDENCE",
        title: "Move forward with confidence.",
        text:
          "Following the application process and the relevant administrative procedures, the residence permit can be issued when the applicable requirements have been satisfied.",
        outcome: "Greek residence permit",
      },
    },
  },

  dueDiligence: {
    visual: {
      label: "INVESTMENT",
      title: "CHECKPOINT",
    },
    nodes: {
      program: "PROGRAM",
      property: "PROPERTY",
      documents: "DOCUMENTS",
      review: "REVIEW",
    },
    label: "THE INVESTMENT CHECKPOINT",
    titleLineOne: "Verify before",
    titleLineTwo: "you commit.",
    description:
      "One of the most important moments in the journey comes before the transaction is completed. The property should be examined against the conditions that matter for the intended Golden Visa route.",
    checks: {
      technical: "Technical characteristics",
      ownership: "Ownership and property information",
      route: "Investment route requirements",
      documentation: "Transaction documentation",
    },
    note:
      "The exact checks required depend on the property, investment route and individual circumstances.",
  },

  decisions: {
    label: "THE MOMENTS THAT MATTER",
    titleLineOne: "The journey is not just",
    titleLineTwo: "about completing steps.",
    description:
      "Along the way, investors make decisions that can shape the rest of the process.",
    items: {
      route: {
        title: "Which investment route fits you?",
        text:
          "The €250K, €400K and €800K routes have different qualifying conditions. The right starting point depends on your circumstances and intended investment.",
      },
      property: {
        title: "Is the property actually suitable?",
        text:
          "Price alone does not determine whether a property is appropriate. Location, use, ownership structure and technical characteristics can all matter.",
      },
      transaction: {
        title: "Should you proceed with the transaction?",
        text:
          "The important decision comes before the purchase is completed. Relevant checks should be considered before you commit to the investment.",
      },
      application: {
        title: "Is the application ready?",
        text:
          "The investment is only one part of the application. Supporting documents and evidence must also satisfy the applicable requirements.",
      },
    },
  },

  responsibilities: {
    label: "WHO DOES WHAT",
    titleLineOne: "You make the decisions.",
    titleLineTwo: "We coordinate the process.",
    groups: {
      yourRole: {
        title: "YOUR ROLE",
        items: {
          itemOne: "Define your investment objectives",
          itemTwo: "Provide the required personal information",
          itemThree: "Choose the investment opportunity",
          itemFour: "Approve the transaction",
          itemFive: "Complete required signatures and payments",
        },
      },
      ourRole: {
        title: "OUR ROLE",
        items: {
          itemOne: "Help establish the appropriate investment strategy",
          itemTwo: "Support the property assessment process",
          itemThree: "Coordinate technical due diligence",
          itemFour: "Coordinate with the relevant professionals",
          itemFive: "Help organize the application process",
        },
      },
    },
  },

  team: {
    label: "THE PROFESSIONAL TEAM",
    titleLineOne: "One investment.",
    titleLineTwo: "A coordinated team.",
    description:
      "A Golden Visa transaction can involve several professionals. Coordination helps keep the technical, legal, financial and administrative parts connected.",
    center: {
      label: "YOUR",
      title: "INVESTMENT",
    },
    members: {
      civilEngineer: {
        title: "Civil Engineer",
        text: "Technical assessment and property due diligence.",
      },
      lawyer: {
        title: "Lawyer",
        text: "Legal review and transaction matters.",
      },
      notary: {
        title: "Notary",
        text: "Transaction documents and required certificates.",
      },
      accountant: {
        title: "Accountant",
        text: "Financial and tax-related coordination.",
      },
    },
  },

  delays: {
    label: "WHAT CAN SLOW THINGS DOWN",
    titleLineOne: "Preparation matters",
    titleLineTwo: "before the application.",
    description:
      "Not every delay can be controlled. But understanding where complications can arise helps investors prepare more effectively.",
    items: {
      documentation: {
        title: "Documentation",
        text:
          "Missing, outdated or incorrectly prepared documents can create unnecessary delays.",
      },
      property: {
        title: "Property",
        text:
          "Issues discovered during legal or technical checks may require clarification or additional work.",
      },
      transaction: {
        title: "Transaction",
        text:
          "Contracts, payments, registrations and certificates can involve several parties and stages.",
      },
      administration: {
        title: "Administration",
        text:
          "Processing times can vary depending on the application and the workload of the competent authorities.",
      },
    },
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Before you",
    titleLineTwo: "begin.",
    description:
      "A few practical questions investors commonly have about the Golden Visa journey.",
    items: {
      choosePropertyFirst: {
        question: "Do I need to choose a property before starting?",
        answer:
          "No. It can be useful to understand your eligibility and available investment routes before committing to a property. This can help you search according to the requirements that matter to your situation.",
      },
      beforePurchase: {
        question: "What happens before I purchase a property?",
        answer:
          "The property and transaction should be assessed against the requirements relevant to the intended investment route. Depending on the property and circumstances, this can involve technical, legal and other checks.",
      },
      technicalDueDiligence: {
        question: "Why is technical due diligence important?",
        answer:
          "A property can look suitable from its price and location while still requiring further technical assessment. Reviewing the relevant characteristics before completing the investment can help identify issues earlier in the process.",
      },
      whoIsInvolved: {
        question: "Who is involved in the process?",
        answer:
          "Depending on the transaction and applicant, the process can involve the investor, civil engineer, lawyer, notary, accountant, insurance provider and the relevant authorities.",
      },
      applicationTimeline: {
        question: "How long does the application take?",
        answer:
          "There is no single timeline that applies to every applicant. The overall process can depend on the investment route, property transaction, document preparation and the workload of the relevant authorities.",
      },
      purchaseGuarantee: {
        question: "Does buying the property guarantee the Golden Visa?",
        answer:
          "No. Completing an investment does not by itself guarantee approval. The investment, documentation and other applicable legal and administrative requirements must be satisfied.",
      },
    },
  },

  cta: {
    label: "READY TO BEGIN?",
    titleLineOne: "Your journey starts",
    titleLineTwo: "with the right first step.",
    description:
      "Before choosing a property or committing to an investment, understand your situation and identify the path that makes sense for you.",
    button: "Book a Private Consultation",
  },

  legal: {
    title: "Legal information.",
    text:
      "This page provides general information about the Greek Golden Visa process and is not legal, tax, immigration or investment advice. The exact process, documentation and requirements depend on the investment route, applicant's circumstances and legislation and administrative requirements in force at the time of application.",
  },
},
    programEligibility: {
  hero: {
    eyebrow: "YOUR ELIGIBILITY",
    titleLineOne: "Is the Golden Visa",
    titleLineTwo: "right for you?",
    description:
      "Eligibility depends on more than the amount you invest. Understand the key conditions before choosing a property or starting your application.",
    primaryButton: "Check the Requirements",
    secondaryButton: "View Investment Requirements",
    meta: {
      program: "PROGRAM",
      eligibility: "ELIGIBILITY",
      greece: "GREECE",
    },
  },

  conditions: {
    label: "THE BASIC CONDITIONS",
    titleLineOne: "Four things",
    titleLineTwo: "come first.",
    description:
      "Before considering a property or investment strategy, there are several fundamental conditions that should be established.",
    factorLabel: "KEY ELIGIBILITY FACTOR",

    steps: {
      thirdCountryNational: {
        title: "Third-country national",
        description:
          "The Greek Golden Visa is available to eligible citizens of countries outside the European Union and European Economic Area, subject to the applicable rules.",
      },

      qualifyingInvestment: {
        title: "Qualifying investment",
        description:
          "The applicant must make an investment that satisfies one of the qualifying Golden Visa routes and the applicable financial threshold.",
      },

      eligibleProperty: {
        title: "Eligible property or investment",
        description:
          "Where property is used for the application, the specific property and transaction must meet the conditions of the relevant investment route.",
      },

      requiredDocumentation: {
        title: "Required documentation",
        description:
          "The applicant must be able to provide the documents and evidence required to establish identity, investment, ownership and compliance with the programme.",
      },
    },
  },

  investment: {
    label: "YOUR INVESTMENT",
    titleLineOne: "Know your route",
    titleLineTwo: "before you buy.",
    description:
      "The investment route you choose affects the threshold, qualifying conditions and documentation that apply to your application.",

    routes: {
      special:
        "Specific qualifying property categories subject to their applicable conditions.",

      standard:
        "Standard qualifying property investment outside areas subject to the €800,000 threshold.",

      highDemand:
        "Qualifying property investment in specific high-demand locations.",
    },

    link: "Explore all investment requirements",
  },

  family: {
    label: "FAMILY ELIGIBILITY",
    titleLineOne: "Your application can",
    titleLineTwo: "extend beyond you.",
    description:
      "Eligible family members may also receive residence permits connected to the investor's status, subject to the applicable requirements.",
    button: "Explore Family Benefits",
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Before you",
    titleLineTwo: "take the next step.",
    description:
      "A few of the questions investors commonly have before beginning their Golden Visa journey.",

    items: {
      whoCanApply: {
        question: "Who can apply for the Greek Golden Visa?",
        answer:
          "The programme is generally available to eligible third-country nationals who satisfy the applicable investment and legal requirements.",
      },

      needToLiveInGreece: {
        question: "Do I need to live in Greece to apply?",
        answer:
          "The Golden Visa is a residence permit programme and does not generally require the investor to establish permanent residence in Greece simply to maintain the permit. The specific requirements and conditions should be confirmed for the applicant's circumstances.",
      },

      buyPropertyFirst: {
        question:
          "Do I need to buy property before checking my eligibility?",
        answer:
          "No. It is generally preferable to understand your eligibility and the available investment routes before committing to a property or transaction.",
      },

      family: {
        question: "Can my family apply with me?",
        answer:
          "Eligible family members may receive residence permits connected to the investor's status, subject to the applicable family and legal requirements.",
      },

      investmentGuarantee: {
        question:
          "Does meeting the investment amount guarantee approval?",
        answer:
          "No. Meeting the financial threshold is only one part of the process. The investment, documentation, ownership structure and other applicable requirements must also be satisfied.",
      },
    },
  },

  cta: {
    label: "READY TO EXPLORE?",
    titleLineOne: "Find out where",
    titleLineTwo: "you stand.",
    description:
      "Understanding your eligibility before choosing an investment can help you approach the Golden Visa process with greater clarity.",
    button: "Speak With an Advisor",
  },

  legal: {
    title: "Legal information.",
    text:
      "This page provides general information about eligibility for the Greek Golden Visa and is not legal, tax, immigration or investment advice. Eligibility depends on the applicant's individual circumstances and the legislation and administrative requirements in force at the time of application.",
  },
},
    programRequirements: {
  hero: {
    eyebrow: "INVESTMENT REQUIREMENTS",
    titleLineOne: "Know the threshold",
    titleLineTwo: "before you invest.",
    description:
      "The Greek Golden Visa offers different investment routes. Understanding the threshold, location and property requirements is the first step toward choosing the right one.",
    meta: {
      program: "PROGRAM",
      investment: "INVESTMENT",
      greece: "GREECE",
    },
  },

  routes: {
    label: "THE THREE THRESHOLDS",
    titleLineOne: "Choose the route",
    titleLineTwo: "that fits.",
    description:
      "The amount required depends on the type and location of the investment. The €250,000 route is reserved for specific property categories.",
    featuredLabel: "LOCATION DEPENDENT",
    standardLabel: "QUALIFYING ROUTE",

    cards: {
      special: {
        title: "Special Property Routes",
        description:
          "A lower investment threshold applies to specific qualifying property categories defined by Greek law.",
      },
      standard: {
        title: "Standard Property Investment",
        description:
          "The standard threshold for qualifying property investments outside the areas subject to the €800,000 threshold.",
      },
      highDemand: {
        title: "High-Demand Areas",
        description:
          "The higher threshold applies to qualifying property investments in specific high-demand locations.",
      },
    },
  },

  locations: {
    label: "WHERE €800K APPLIES",
    titleLineOne: "Location can",
    titleLineTwo: "change the threshold.",
    description:
      "Certain high-demand areas are subject to the €800,000 minimum investment threshold for qualifying property investments.",

    areas: {
      attica: "Attica",
      thessaloniki: "Regional Unit of Thessaloniki",
      mykonos: "Mykonos",
      santorini: "Thira / Santorini",
      islands: "Greek islands with a population exceeding 3,100",
    },

    minimumLabel: "MINIMUM INVESTMENT",

    note:
      "The applicable threshold should always be confirmed against the property's exact location and the rules in force at the time of the investment.",
  },

  property: {
    label: "PROPERTY REQUIREMENTS",
    titleLineOne: "It's not simply",
    titleLineTwo: "about the price.",
    description:
      "Meeting the financial threshold is only one part of a qualifying investment. The property and transaction must also satisfy the applicable requirements.",

    items: {
      oneProperty: {
        title: "One qualifying property",
        text:
          "For the standard €400,000 and €800,000 property routes, the investment generally concerns a single property rather than combining several properties to reach the threshold.",
      },

      minimumArea: {
        title: "120 m² minimum",
        text:
          "For qualifying residential properties under the €400,000 and €800,000 routes, the applicable property must generally have at least 120 m² of main-use areas.",
      },

      ownership: {
        title: "Proper ownership",
        text:
          "The investor must satisfy the ownership and possession requirements applicable to the particular Golden Visa investment route.",
      },

      payment: {
        title: "Documented payment",
        text:
          "The purchase consideration must be paid and documented through the payment methods and supporting evidence required under the applicable rules.",
      },
    },
  },

  special: {
    label: "THE €250K ROUTES",
    titleLineOne: "A lower threshold,",
    titleLineTwo: "with specific conditions.",
    description:
      "€250,000 does not apply to every property. It is reserved for specific investment categories established by the Greek framework.",
    routeTag: "€250,000 ROUTE",

    cards: {
      changeOfUse: {
        title: "Change of use",
        text:
          "Certain properties whose main spaces have been converted to residential use can qualify under the €250,000 route, subject to the statutory conditions and documentation.",
      },

      listedBuildings: {
        title: "Listed buildings",
        text:
          "Qualifying listed buildings requiring restoration or reconstruction can also fall under the €250,000 route when the applicable requirements are satisfied.",
      },
    },
  },

  checklist: {
    label: "BEFORE YOU COMMIT",
    titleLineOne: "Four things",
    titleLineTwo: "to verify first.",
    description:
      "A property's asking price is only the beginning. Before making a commitment, the investment should be assessed as a whole.",

    items: {
      location: {
        title: "Location",
        text:
          "Determine whether the property falls under the €250,000, €400,000 or €800,000 threshold.",
      },

      propertyType: {
        title: "Property type",
        text:
          "Confirm that the property qualifies under the specific Golden Visa route being considered.",
      },

      transaction: {
        title: "Transaction",
        text:
          "Verify that the purchase price, payment structure and ownership arrangement satisfy the applicable rules.",
      },

      technicalStatus: {
        title: "Technical status",
        text:
          "Review the property's planning, building and legal characteristics before committing to the investment.",
      },
    },
  },

  faq: {
    label: "COMMON QUESTIONS",
    titleLineOne: "Before you",
    titleLineTwo: "make a decision.",
    description:
      "The questions investors most often ask when comparing the available investment thresholds.",
    button: "Check Your Eligibility",

    items: {
      minimumInvestment: {
        question: "Is the minimum investment always €250,000?",
        answer:
          "No. The €250,000 threshold applies only to specific qualifying property routes. Standard property investments are generally subject to €400,000 or €800,000 thresholds depending on the location and applicable rules.",
      },

      eightHundredAreas: {
        question: "Which areas require the €800,000 threshold?",
        answer:
          "The €800,000 threshold applies to qualifying property investments in Attica, the Regional Unit of Thessaloniki, Mykonos, Thira/Santorini and Greek islands with a population exceeding 3,100, subject to the applicable legal requirements.",
      },

      combineProperties: {
        question:
          "Can I combine multiple properties to reach €400,000 or €800,000?",
        answer:
          "For the standard property routes, the qualifying investment generally concerns a single property. The exact structure of an investment should be checked against the rules applicable to the transaction.",
      },

      twoHundedFiftyQualification: {
        question: "Does a €250,000 property automatically qualify?",
        answer:
          "No. The €250,000 route is limited to specific property categories, such as qualifying change-of-use properties and certain listed buildings requiring restoration or reconstruction. The property must satisfy the relevant legal conditions.",
      },

      additionalCosts: {
        question: "Are there additional costs beyond the investment amount?",
        answer:
          "Yes. The statutory investment threshold should not be treated as the complete transaction budget. Depending on the investment, additional costs can include taxes, notarial and registration costs, professional fees, legal services and other transaction-related expenses.",
      },
    },
  },

  cta: {
    label: "HAVE A PROPERTY IN MIND?",
    titleLineOne: "Check it before",
    titleLineTwo: "you commit.",
    description:
      "We can help assess the property's Golden Visa suitability and identify the relevant investment route before you move forward.",
    button: "Request a Property Review",
  },

  legal: {
    title: "Legal information.",
    text:
      "This page provides general information about the Greek Golden Visa investment framework and is not legal, tax, immigration or investment advice. Investment thresholds, qualifying property categories and administrative requirements may change. Eligibility should be assessed against the legislation and administrative requirements in force at the time of application.",
  },
},
    programBenefits: {
  hero: {
    eyebrow: "THE GREEK GOLDEN VISA",
    titleLineOne: "More than a property.",
    titleLineTwo: "A residence in Greece.",
    description:
      "The Greek Golden Visa is a residence programme for eligible non-EU investors. Here is what the residence permit can actually provide — and what it does not.",
  },

  benefits: {
    label: "WHAT IT GIVES YOU",
    titleLineOne: "The benefits,",
    titleLineTwo: "clearly explained.",
    description:
      "The Golden Visa is first and foremost a Greek residence permit. Its benefits are meaningful, but they should be understood precisely rather than reduced to marketing promises.",

    cards: {
      residence: {
        title: "Residence in Greece",
        text:
          "The Greek Golden Visa provides a residence permit for eligible third-country investors who satisfy the applicable investment and legal requirements.",
      },

      schengen: {
        title: "Schengen Travel",
        text:
          "A valid Greek residence permit can support travel within the Schengen Area, subject to the applicable Schengen rules and short-stay limits.",
      },

      family: {
        title: "Family Residence",
        text:
          "Eligible family members can receive residence permits connected to the investor's status, allowing the family to benefit from the programme together.",
      },

      fiveYear: {
        title: "Five-Year Residence",
        text:
          "The investor residence permit is granted for a five-year period and can be renewed when the applicable programme conditions continue to be satisfied.",
      },
    },
  },

  family: {
    visualLabel: "FAMILY",

    visualTextLineOne: "Beyond",
    visualTextLineTwo: "the investor.",

    visualBottom: {
      greece: "GREECE",
      residence: "RESIDENCE",
      family: "FAMILY",
    },

    label: "FAMILY RESIDENCE",

    titleLineOne: "Bring the people",
    titleLineTwo: "who matter.",

    lead:
      "One of the programme's important advantages is that qualifying family members may also obtain residence permits connected to the investor's status.",

    members: {
      spouse: "Spouse or eligible partner",
      minorChildren: "Minor children",
      dependentFamily:
        "Eligible dependent family members provided for under the applicable rules",
      ascendants:
        "Eligible ascendants of the investor and spouse/partner",
    },

    note:
      "Exact eligibility depends on the applicant's family relationship and the applicable legislation at the time of application.",
  },

  travel: {
    label: "EUROPEAN MOBILITY",

    titleLineOne: "Greece as your",
    titleLineTwo: "European base.",

    description:
      "A valid Greek residence permit can facilitate travel within the Schengen Area under the applicable short-stay rules.",

    warning:
      "Residence in Greece does not mean unrestricted residence or work rights in every European country.",

    kicker: "TRAVEL",

    destination: "Schengen Area",

    note:
      "Subject to the applicable entry and short-stay rules.",
  },

  facts: {
    label: "IMPORTANT DISTINCTIONS",

    titleLineOne: "What the Golden Visa",
    titleLineTwo: "doesn't automatically mean.",

    description:
      "Good investment advice is also about knowing where the boundaries are.",

    items: {
      citizenship: {
        title: "No automatic citizenship",
        text:
          "Holding a Golden Visa does not automatically make the holder a Greek citizen. Citizenship is a separate legal process with its own requirements.",
      },

      taxResidence: {
        title: "Residence is not the same as tax residence",
        text:
          "A Greek residence permit does not, by itself, determine whether someone is a Greek tax resident. Tax residence is assessed under separate tax rules.",
      },

      employment: {
        title: "Employment is separate",
        text:
          "The investor residence permit itself does not provide access to employment. Any employment or professional activity must be considered under the applicable Greek rules.",
      },
    },
  },

  faq: {
    label: "COMMON QUESTIONS",

    titleLineOne: "Before you",
    titleLineTwo: "make a decision.",

    description:
      "A few of the questions investors should have answered before moving forward.",

    button: "Speak with an advisor",

    items: {
      liveInGreece: {
        question: "Does the Golden Visa allow me to live in Greece?",
        answer:
          "Yes. The programme provides an eligible third-country investor with a Greek residence permit, subject to the applicable investment and residence-permit requirements.",
      },

      validity: {
        question: "How long is the Golden Visa residence permit valid?",
        answer:
          "The investor residence permit is generally issued for five years. Renewal is possible when the conditions required for the investor status continue to be met.",
      },

      familyPermits: {
        question: "Can my family receive residence permits?",
        answer:
          "Yes. The Greek framework provides residence permits for qualifying family members of the investor. The exact categories and conditions depend on the applicable rules.",
      },

      travelEurope: {
        question: "Can I travel around Europe with the Golden Visa?",
        answer:
          "A valid Greek residence permit can be used for travel within the Schengen Area, subject to Schengen entry, border and short-stay rules. A residence permit should not be presented as unrestricted residence rights throughout Europe.",
      },

      taxResident: {
        question: "Does the Golden Visa make me a Greek tax resident?",
        answer:
          "No. A residence permit and tax residence are separate matters. Your tax position depends on the applicable Greek tax rules and your personal circumstances.",
      },

      workInGreece: {
        question: "Does the Golden Visa give me the right to work in Greece?",
        answer:
          "The investor residence permit itself does not provide access to employment. If you intend to work or conduct professional activity in Greece, your circumstances should be assessed separately.",
      },
    },
  },

  cta: {
    label: "NEXT STEP",

    titleLineOne: "Understand your route",
    titleLineTwo: "before you invest.",

    description:
      "Tell us what you are looking to achieve and we can help you understand the relevant Golden Visa route and next steps.",

    button: "Check Your Eligibility",
  },

  legal: {
    title: "Legal information.",

    text:
      "This page provides general information about the Greek Golden Visa residence programme and is not legal, tax or immigration advice. Greek immigration legislation and administrative requirements can change. An applicant's eligibility should be assessed against the rules in force at the time of application.",
  },
},
    terms: {
  metadata: {
    title:
      "Terms & Conditions | Greece Golden Visa",
  },

  hero: {
    eyebrow: "LEGAL INFORMATION",

    title: "Terms &",

    highlight: "Conditions.",

    description:
      "These terms explain the conditions that apply when you access and use the Greece Golden Visa website.",

    updated: {
      label: "LAST UPDATED",
      date: "September 2026",
    },

    meta: {
      websiteUse: "WEBSITE USE",
      terms: "TERMS",
      greece: "GREECE",
    },
  },

  contents: {
    label: "CONTENTS",
  },

  lead:
    "By accessing or using this website, you agree to use it responsibly and in accordance with these Terms & Conditions. If you do not agree with these terms, please do not use the website.",

  sections: {
    acceptance: {
      title: "Acceptance of these terms",

      paragraph1:
        "These Terms & Conditions apply to your use of the Greece Golden Visa website and its publicly available content, tools, forms and information.",

      paragraph2:
        "By continuing to use the website, you acknowledge that you have read and understood these terms.",
    },

    website: {
      title: "Purpose of the website",

      paragraph1:
        "The website provides general information about the Greek Golden Visa programme, investment routes, property opportunities, Greece and related services.",

      paragraph2:
        "The website is intended primarily for informational and enquiry purposes. Information presented on the website should not be interpreted as a promise, guarantee or representation that a particular investment or application will produce a particular outcome.",
    },

    information: {
      title: "Accuracy of information",

      paragraph1:
        "We aim to keep the information presented on this website accurate and useful. However, legislation, investment thresholds, administrative procedures, property availability, prices and other circumstances may change.",

      paragraph2:
        "Information may therefore become outdated or may not apply to a particular person's circumstances.",

      paragraph3:
        "You should obtain appropriate professional advice and verify current requirements before making an investment or legal decision.",
    },

    noAdvice: {
      title:
        "No legal, tax or immigration advice",

      paragraph1:
        "Information on this website is provided for general informational purposes and does not constitute legal, tax, immigration, financial or investment advice.",

      paragraph2:
        "The Greece Golden Visa team may coordinate with lawyers, notaries, accountants, engineers and other professionals where appropriate. This does not mean that information published on this website replaces advice from those qualified professionals.",
    },

    goldenVisa: {
      title: "Golden Visa information",

      paragraph1:
        "Golden Visa eligibility depends on the applicant's circumstances, the selected investment, the relevant investment route, the characteristics and legal status of the property or investment and the legislation in force at the relevant time.",

      paragraph2:
        "No statement on this website should be interpreted as a guarantee of eligibility, residence permit issuance, approval or a particular immigration outcome.",

      paragraph3:
        "Users should verify the current legal requirements before making financial commitments.",
    },

    properties: {
      title: "Property information",

      paragraph1:
        "Property information, including descriptions, locations, prices, availability, images and investment route references, may change without notice.",

      paragraph2:
        "Property information displayed on the website does not by itself establish that a property qualifies for a particular Golden Visa route.",

      paragraph3:
        "Individual properties should undergo appropriate legal, technical and financial checks before acquisition.",
    },

    intellectual: {
      title: "Intellectual property",

      paragraph1:
        "Unless otherwise stated, the website and its original content, branding, text, graphics, design, layout, photographs and other materials are protected by applicable intellectual property laws.",

      paragraph2:
        "You may access and use the website for personal and lawful informational purposes. You may not reproduce, distribute, modify, publish or commercially exploit website content without appropriate permission.",
    },

    thirdParty: {
      title:
        "Third-party websites and services",

      paragraph1:
        "The website may contain links to third-party websites, platforms or services.",

      paragraph2:
        "Third-party websites operate under their own terms and privacy policies. We are not responsible for the content, availability, security or practices of third-party websites that we do not control.",
    },

    liability: {
      title: "Limitation of liability",

      paragraph1:
        "To the extent permitted by applicable law, we shall not be responsible for losses arising from reliance on general information published on the website where that information was not intended to constitute individual professional advice.",

      paragraph2:
        "Nothing in these terms is intended to exclude or limit liability where such exclusion or limitation is not permitted by applicable law.",
    },

    changes: {
      title:
        "Changes to the website and these terms",

      paragraph1:
        "We may update, modify, suspend or remove parts of the website from time to time.",

      paragraph2:
        "We may also update these Terms & Conditions when necessary to reflect changes to the website, services, legislation or business practices.",
    },

    law: {
      title: "Applicable law",

      paragraph1:
        "These terms should be reviewed and completed by the responsible legal entity before publication to confirm the applicable governing law and competent courts.",

      paragraph2:
        "Where legally applicable, the relationship between the website operator and the user will be governed by the laws applicable in Greece, subject to mandatory consumer protection provisions that may apply.",
    },

    contact: {
      title: "Contact",

      paragraph1:
        "Questions regarding these Terms & Conditions may be directed to:",
    },
  },

  disclaimer: {
    title: "Important",

    description:
      "These Terms & Conditions are a website draft and should be reviewed by the responsible legal entity or qualified Greek legal professional before publication, particularly regarding the operator's legal identity, governing law, jurisdiction, consumer rights and service-specific obligations.",
  },
},
    nav: {
      program: {
        title: "The Program",
        dropdownTitle: "Greek Golden Visa Program",
        description:
          "Everything you need to understand before starting your residency journey in Greece.",
        button: "Explore the Program",
        cards: {
          benefits: {
            title: "Residency Benefits",
            description:
              "Discover the rights and advantages of becoming a Greek Golden Visa holder.",
          },
          requirements: {
            title: "Investment Requirements",
            description:
              "Learn the investment criteria and qualifying options available.",
          },
          eligibility: {
            title: "Your Eligibility",
            description:
              "Check whether you meet the requirements before applying.",
          },
          journey: {
            title: "Application Journey",
            description:
              "Follow every step from choosing your investment to receiving residency.",
          },
        },
      },

      investments: {
        title: "Investment Routes",
        dropdownTitle: "Investment Routes",
        description:
          "Choose the investment strategy that best matches your personal goals.",
        button: "Find Your Route",
        cards: {
          readyProperties: {
            title: "Ready-to-Move Properties",
            description:
              "Browse completed homes that already qualify for the program.",
          },
          strategic: {
            title: "Strategic Property Opportunities",
            description:
              "Explore renovation and redevelopment investment opportunities.",
          },
          alternative: {
            title: "Alternative Investments",
            description:
              "Discover investment options beyond traditional real estate.",
          },
          compare: {
            title: "Compare Your Options",
            description:
              "Compare every investment route side-by-side before deciding.",
          },
        },
      },

      greece: {
        title: "Why Greece",
        dropdownTitle: "Why Greece",
        description:
          "Discover why Greece continues to attract international investors from around the world.",
        button: "Discover Greece",
        cards: {
          lifestyle: {
            title: "Mediterranean Lifestyle",
            description:
              "Enjoy exceptional quality of life, climate and culture.",
          },
          europe: {
            title: "Gateway to Europe",
            description:
              "Visa-free access across the Schengen Area and Europe.",
          },
          property: {
            title: "Real Estate Potential",
            description:
              "Explore one of Europe's fastest-growing property markets.",
          },
          family: {
            title: "Family & Future",
            description:
              "Build long-term security for you and your family.",
          },
        },
      },

      guide: {
        title: "Investor Guide",
        dropdownTitle: "Investor Guide",
        description:
          "Useful tools and practical resources for every stage of your investment journey.",
        button: "Open Investor Guide",
        cards: {
          handbook: {
            title: "Investor Handbook",
            description:
              "Read our complete guide before making your investment.",
          },
          calculator: {
            title: "Investment Calculator",
            description:
              "Estimate costs and understand your investment budget.",
          },
          checklist: {
            title: "Application Checklist",
            description:
              "Track every document and requirement before applying.",
          },
          faq: {
            title: "Investor Questions",
            description:
              "Find answers to the most frequently asked questions.",
          },
        },
      },

      team: {
        title: "Our Team",
        dropdownTitle: "Meet Our Team",
        description:
          "Get to know the professionals guiding investors throughout the entire Golden Visa process.",
        button: "Meet the Team",
        cards: {
          whoWeAre: {
            title: "Who We Are",
            description:
              "Learn about our company and our mission.",
          },
          experience: {
            title: "Our Experience",
            description:
              "Discover our expertise in Greek real estate and residency.",
          },
          trust: {
            title: "Why Clients Trust Us",
            description:
              "See what makes investors choose our team.",
          },
          contact: {
            title: "Contact Our Advisors",
            description:
              "Speak directly with a Golden Visa specialist.",
          },
        },
      },

      common: {
        explore: "Explore",
        freeConsultation: "Free Consultation",
        openNavigation: "Open navigation menu",
        closeNavigation: "Close navigation menu",
        home: "Greece Golden Visa — Home",
        mobileNavigation: "Mobile navigation",
        languageEnglish: "English",
        languageRussian: "Russian",
        switchToEnglish: "Switch to English",
        switchToRussian: "Switch to Russian",
        specialistNote:
          "Speak directly with a Golden Visa specialist.",
      },
    },

    hero: {
      title: "Invest in Greece.",
      highlight: "Unlock European Residency.",
      description:
        "Explore the right investment path in Greece and receive expert guidance throughout your residency journey.",
      primaryCta: "Check Your Eligibility",
      secondaryCta:
        "Explore Investment Routes →",
      trust: {
        family: {
          title: "Family",
          description: "Residency Benefits",
        },
        eu: {
          title: "EU",
          description: "Schengen Access",
        },
        expert: {
          title: "Expert",
          description: "Guidance",
        },
      },
    },

    trustCompass: {
      intro: {
        eyebrow: "WHY INVESTORS TRUST US",
        title: "Technical expertise.",
        highlight: "Personal guidance.",
        description:
          "When you are investing in a property in another country, you need someone who understands more than the Golden Visa process. You need someone who understands the property itself.",
      },

      profile: {
        imageAlt:
          "Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor",
        badge: "Golden Visa Advisor",
        eyebrow: "YOUR ADVISOR",
        role: {
          engineer: "Dipl. Civil Engineer",
          advisor: "Golden Visa Advisor",
        },
        description:
          "Svetlana brings together technical knowledge, property experience and Golden Visa guidance to help international investors make informed decisions before committing to a property in Greece.",
        credentials: {
          experience: "YEARS EXPERIENCE",
          properties: "PROPERTIES REVIEWED",
        },
        languages:
          "Support available in English, Greek and Russian.",
      },

      approach: {
        eyebrow: "THE DIFFERENCE",
        title: "A property decision",
        highlight: "backed by expertise.",
        items: {
          engineer: {
            title: "Engineer-led perspective",
            description:
              "Your property is considered from a technical perspective before you make a financial commitment.",
          },
          independent: {
            title: "Independent assessment",
            description:
              "The focus is on whether a property makes sense for your objectives, not simply on completing a transaction.",
          },
          coordinated: {
            title: "One coordinated process",
            description:
              "Technical, legal and professional steps are coordinated so you always know what is happening and why.",
          },
          international: {
            title: "International investor support",
            description:
              "Clear communication and guidance for investors navigating the Greek property market from abroad.",
          },
        },
      },

      dueDiligence: {
        eyebrow: "BEFORE YOU BUY",
        title: "Technical due diligence",
        highlight: "before you invest.",
        description:
          "A property can look perfect on paper and still contain issues that affect its value, legality or Golden Visa eligibility. Technical review helps identify them before you commit.",
        items: {
          planning: {
            title: "Planning & permits",
            description:
              "Review of building permits and planning compliance.",
          },
          unauthorised: {
            title: "Unauthorised works",
            description:
              "Identification of unauthorised construction or alterations.",
          },
          documentation: {
            title: "Technical documentation",
            description:
              "Review of plans, records and relevant property documents.",
          },
          buildingIdentity: {
            title: "Electronic Building Identity",
            description:
              "Assessment of the property's technical documentation.",
          },
          goldenVisa: {
            title: "Golden Visa suitability",
            description:
              "Technical assessment of whether the property can support your intended investment route.",
          },
        },
      },

      statement: {
        eyebrow: "OUR APPROACH",
        description:
          "You are making a significant investment in a foreign market. Our job is to help you understand the property, the process and the decisions before you.",
        role: "Dipl. Civil Engineer",
      },
    },

    greeceExperience: {
      intro: {
        label: "Why Choose Greece",
        title:
          "Imagine your mornings looked like this.",
        description:
          "More than residency. A lifestyle built around freedom, security and the Mediterranean way of living.",
      },

      sceneEyebrow: "Greece Experience",

      scenes: {
        morning: {
          title:
            "Imagine your mornings like this.",
          description:
            "Coffee by the sea. Sunshine every day.",
        },

        possibilities: {
          title:
            "One home. Endless possibilities.",
          description:
            "From Greece, Europe becomes part of your everyday life.",
        },

        investment: {
          title:
            "Invest where people dream of living.",
          description:
            "A destination loved by investors worldwide.",
        },

        future: {
          title:
            "A future your family can call home.",
          description:
            "Create memories in Greece for generations.",
        },
      },

      previous: "Previous scene",
      next: "Next scene",
      goToScene: "Go to scene",
      swipe: "Swipe to explore",
    },

    whatWeDo: {
      intro: {
        eyebrow: "WHAT WE DO",
        title: "More than Golden Visa.",
        highlight:
          "One coordinated investment process.",
        description:
          "From selecting the right property to completing your Golden Visa journey, we bring the technical, legal and investment sides together under one coordinated process.",
      },

      approach: {
        eyebrow: "OUR APPROACH",
        title: "One process.",
        highlight:
          "Every important detail.",
      },

      approaches: {
        propertySelection: {
          title: "PROPERTY SELECTION",
          shortTitle: "Property Selection",
          tabDescription:
            "Find the right property.",
          description:
            "We help identify properties that fit your investment goals, location preferences and Golden Visa requirements before you move forward.",
        },

        technicalDueDiligence: {
          title:
            "TECHNICAL DUE DILIGENCE",
          shortTitle:
            "Technical Due Diligence",
          tabDescription:
            "Know what you are buying.",
          description:
            "Before you commit, we examine the property's technical and planning status to help identify potential issues and confirm whether it can support your investment objectives.",
        },

        legalVisaCoordination: {
          title:
            "LEGAL & VISA COORDINATION",
          shortTitle:
            "Legal & Visa Coordination",
          tabDescription:
            "One coordinated process.",
          description:
            "We coordinate the legal and Golden Visa process with the relevant professionals, keeping the different stages connected and clearly structured.",
        },

        ongoingSupport: {
          title: "ONGOING SUPPORT",
          shortTitle: "Ongoing Support",
          tabDescription:
            "Support beyond the purchase.",
          description:
            "Our involvement does not end when the purchase is completed. We remain available to help coordinate the next steps and provide continued support when needed.",
        },
      },

      coordinated: {
        eyebrow:
          "ONE COORDINATED APPROACH",
        title:
          "Your investment is not passed",
        highlight:
          "from one provider to another.",
        description:
          "We coordinate the process around you.",
        button:
          "Discuss your investment",
      },

      stats: {
        experience:
          "Years of experience",
        properties:
          "Properties examined",
        languages:
          "Languages supported",
      },

      finalCta: {
        eyebrow: "YOUR NEXT STEP",
        title:
          "Ready to explore your options?",
        button:
          "Check Your Eligibility",
      },
    },

    investmentRoutes: {
      intro: {
        eyebrow: "INVESTMENT ROUTES",
        title: "Choose the route",
        highlight:
          "that fits your goals.",
        description:
          "Every investor has different priorities. Explore the available investment approaches and discover which strategy may be right for you.",
      },

      card: {
        routeLabel:
          "INVESTMENT ROUTE",
        bestFor: "BEST FOR",
        explore:
          "Explore this route",
      },

      navigation: {
        previous:
          "Previous investment route",
        next:
          "Next investment route",
        explore:
          "Explore this investment route",
        goTo:
          "Go to investment route",
      },

      routes: {
        "ready-properties": {
          title:
            "Ready-to-Move Properties",
          description:
            "Explore completed properties ready for purchase, designed for investors seeking a straightforward path to their Greek Golden Visa.",
          bestFor:
            "Investors looking for a simple, ready-to-use property investment.",
        },

        "strategic-properties": {
          title:
            "Strategic Property Opportunities",
          description:
            "Discover properties with renovation or redevelopment potential, offering a more strategic approach to your investment in Greece.",
          bestFor:
            "Investors looking for flexibility and carefully selected opportunities.",
        },

        "commercial-hospitality": {
          title:
            "Commercial & Hospitality",
          description:
            "Explore commercial and hospitality properties for investors seeking a more specialized investment opportunity in Greece.",
          bestFor:
            "Investors considering larger or more specialized property opportunities.",
        },

        alternative: {
          title:
            "Alternative Routes",
          description:
            "Explore alternative investment approaches beyond traditional property ownership, depending on your individual circumstances.",
          bestFor:
            "Investors looking beyond the conventional property investment route.",
        },
      },

      assessment: {
        label:
          "NOT SURE WHERE TO START?",
        description:
          "Find the investment route that matches your goals.",
        button:
          "Find Your Route",
      },
    },
    finalCta: {
  eyebrow: "START YOUR JOURNEY",

  title: "Your journey to Greece",

  highlight: "starts with clarity.",

  description:
    "Tell us what you are looking for and receive an initial assessment of the investment route, property requirements and next steps relevant to your goals.",

  primaryButton: "Start Your Free Assessment",

  secondaryButton: "Talk to Us",

  sideNote: {
    label: "INITIAL CONSULTATION",

    description:
      "A clear first conversation about your objectives, preferred location and investment route.",
  },
},
    propertyOpportunities: {
  intro: {
    eyebrow: "PROPERTY OPPORTUNITIES",
    title: "Explore properties",
    highlight: "selected for your investment.",
    description:
      "Discover a selection of properties across Greece that may fit different investment strategies.",
    note:
      "Each opportunity is considered around your goals before you move forward.",
  },

  categories: {
    land: "LAND",
    commercial: "COMMERCIAL",
    residential: "RESIDENTIAL",
  },

  route: {
    notVerified: "Route to be verified",
    investmentRoute: "Investment Route",
  },

  fallbacks: {
    title: "Property Opportunity",
    location: "Greece",
    type: "Property",
    description:
      "A selected property opportunity in Greece.",
    status: "Available",
  },

  image: {
    selectedProperty: "SELECTED PROPERTY",
  },

  card: {
    selectedOpportunity: "SELECTED OPPORTUNITY",
    indicativeValue: "INDICATIVE VALUE",
    viewProperty: "View property",
  },

  details: {
    type: "TYPE",
    size: "SIZE",
    bedrooms: "BEDROOMS",
    status: "STATUS",
    investmentRoute: "INVESTMENT ROUTE",
    bathrooms : "BATHROOMS"
  },

  approach: {
    label: "OUR APPROACH",
    description:
      "Properties are considered around your investment objectives — not simply available inventory.",
  },

  navigation: {
    previous: "Previous property",
    next: "Next property",
    explore: "Explore {title}",
    goTo: "Go to {title}",
  },

  cta: {
    eyebrow: "HAVE A SPECIFIC PROPERTY IN MIND?",
    title: "Let us review it with you.",
    description:
      "Share a property or tell us what you are looking for and we can discuss the next step.",
    button: "Request a property review",
  },
},
footer: {
  brand: {
    description:
      "Independent technical coordination and guidance for international investors exploring Greece and the Greek Golden Visa.",

    credentialOne:
      "TECHNICAL COORDINATION",

    credentialTwo:
      "GOLDEN VISA ADVISORY",
  },

  columns: {
    goldenVisa: {
      title: "Golden Visa",

      links: {
        investmentRoutes:
          "Investment Routes",

        howItWorks:
          "How It Works",

        technicalDueDiligence:
          "Technical Due Diligence",

        faq:
          "FAQ",
      },
    },

    explore: {
      title: "Explore",

      links: {
        about:
          "About",

        greeceExperience:
          "Greece Experience",

        clientsTrust:
          "Clients Trust",

        contact:
          "Contact",
      },
    },
  },

  contact: {
    title: "Contact",

    details: {
      email: "EMAIL",
      phone: "PHONE",
      whatsapp: "WHATSAPP",
    },

    basedIn: "BASED IN",

    location: "Greece",
  },

  professionalNote: {
    label: "PLEASE NOTE",

    description:
      "Information presented on this website is provided for general informational purposes and should not be considered legal, tax or investment advice.",
  },

  bottom: {
    allRightsReserved:
      "All rights reserved.",

    websiteCraftedBy:
      "Website crafted by",
  },

  legal: {
    title: "Legal",

    privacy:
      "Privacy Policy",

    terms:
      "Terms & Conditions",

    cookies:
      "Cookie Policy",
  },

  languages: {
    available:
      "Available languages",
  },
},
privacy: {
  metadata: {
    title: "Privacy Policy | Greece Golden Visa",
  },

  hero: {
    eyebrow: "LEGAL INFORMATION",
    title: "Privacy",
    highlight: "Policy.",
    description:
      "This Privacy Policy explains how personal information is collected, used, stored and protected when you use the Greece Golden Visa website and contact our team.",
    updated: {
      label: "LAST UPDATED",
      date: "September 2026",
    },
    meta: {
      greece: "GREECE",
      dataProtection: "DATA PROTECTION",
      gdpr: "GDPR",
    },
  },

  contents: {
    label: "CONTENTS",
    controller: "01 — Who We Are",
    data: "02 — Information We Collect",
    purposes: "03 — How We Use Data",
    legalBasis: "04 — Legal Basis",
    sharing: "05 — Sharing Information",
    retention: "06 — Retention",
    rights: "07 — Your Rights",
    security: "08 — Security",
    transfers: "09 — International Transfers",
    contact: "10 — Contact",
  },

  lead:
    "We respect your privacy and are committed to handling personal data responsibly. This policy is intended to explain in clear language what information may be collected through this website and how that information may be processed.",

  sections: {
    controller: {
      title: "Who we are",
      paragraph1:
        "The website is operated under the Greece Golden Visa brand by the responsible business or professional identified below.",
      info: {
        title: "Data Controller",
      },
      paragraph2:
        "For questions concerning the processing of your personal data or the exercise of your data protection rights, you may contact us using the contact details above.",
    },

    data: {
      title: "Information we collect",
      intro:
        "Depending on how you interact with the website, we may collect information that you voluntarily provide to us, including:",
      items: {
        name: "Name and contact details.",
        email: "Email address and telephone or WhatsApp number.",
        nationality: "Nationality or country of residence.",
        budget: "Investment budget or preferred investment range.",
        property:
          "Information about whether you have already selected a property.",
        language: "Preferred language.",
        message:
          "Information included in your message or property review request.",
      },
      paragraph1:
        "We may also receive technical information generated when you use the website, such as browser type, device information, approximate location and website usage information, where applicable and permitted by law.",
      paragraph2:
        "We only seek to collect information that is relevant and necessary for the purposes described in this policy.",
    },

    purposes: {
      title: "How we use your information",
      intro: "Personal data may be used to:",
      items: {
        enquiries: "Respond to enquiries and consultation requests.",
        options:
          "Discuss Golden Visa investment options and requirements.",
        property:
          "Review information about a property you ask us to assess.",
        services:
          "Communicate with you about services you have requested.",
        professionals:
          "Coordinate communications with relevant professionals where necessary to provide requested assistance.",
        website:
          "Improve the website, its content and user experience.",
        security:
          "Maintain website security and prevent misuse.",
        legal:
          "Comply with legal and regulatory obligations.",
      },
    },

    legalBasis: {
      title: "Legal basis for processing",
      intro:
        "Where applicable, personal data is processed on one or more legal bases provided by applicable data protection law, including:",
      items: {
        consent: {
          title: "Consent",
          description:
            "where you have given consent for a specific processing activity.",
        },
        contract: {
          title: "Contract or pre-contractual steps",
          description:
            "where processing is necessary in connection with a service or request you have made.",
        },
        legal: {
          title: "Legal obligation",
          description:
            "where processing is required by applicable law.",
        },
        interests: {
          title: "Legitimate interests",
          description:
            "where processing is necessary for legitimate business purposes and those interests are not overridden by your rights and freedoms.",
        },
      },
      paragraph:
        "Where processing is based on consent, you may withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.",
    },

    sharing: {
      title: "Sharing your information",
      paragraph1:
        "We do not sell your personal information.",
      paragraph2:
        "Where necessary to provide requested assistance or operate the website, personal data may be shared with trusted service providers and professional collaborators, subject to appropriate safeguards and applicable law.",
      paragraph3:
        "Depending on the service requested, this may include technical professionals, lawyers, notaries, accountants, communication providers, hosting providers or other service providers involved in supporting the requested process.",
      paragraph4:
        "Information may also be disclosed where required by law, court order or a competent public authority.",
    },

    retention: {
      title: "How long we keep your data",
      paragraph1:
        "Personal data is retained only for as long as is reasonably necessary for the purposes for which it was collected, taking into account legal, accounting, contractual and regulatory requirements.",
      paragraph2:
        "Different categories of information may therefore be retained for different periods. When information is no longer required, it will be deleted or otherwise securely disposed of where appropriate.",
    },

    rights: {
      title: "Your data protection rights",
      intro:
        "Subject to the conditions and limitations established by applicable law, you may have the right to:",
      items: {
        access: "Request access to your personal data.",
        correction:
          "Request correction of inaccurate information.",
        deletion:
          "Request deletion of personal data.",
        restriction:
          "Request restriction of processing in certain circumstances.",
        objection:
          "Object to certain processing activities.",
        portability:
          "Request portability of certain personal data.",
        withdraw:
          "Withdraw consent where processing is based on consent.",
      },
      paragraph1:
        "You may also have the right to lodge a complaint with the competent data protection supervisory authority.",
      paragraph2:
        "In Greece, the competent supervisory authority is the Hellenic Data Protection Authority (HDPA).",
    },

    security: {
      title: "Security",
      paragraph1:
        "We take reasonable technical and organisational measures designed to protect personal data against unauthorised access, accidental loss, destruction, alteration or unlawful processing.",
      paragraph2:
        "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
    },

    transfers: {
      title: "International data transfers",
      paragraph1:
        "Some technology or service providers used to operate the website may process information outside the European Economic Area.",
      paragraph2:
        "Where personal data is transferred outside the EEA, appropriate safeguards will be used where required by applicable data protection law.",
    },

    contact: {
      title: "Contact us",
      paragraph:
        "If you have a privacy question, wish to exercise a data protection right, or want further information about how your data is handled, please contact:",
    },
  },

  disclaimer: {
    title: "Important",
    description:
      "This Privacy Policy is provided as website information and should be reviewed and approved by the responsible legal entity or a qualified privacy professional before publication. The final version should accurately reflect the controller, service providers, analytics tools, retention periods and processing activities actually used by the website.",
  },
},
cookies: {
  metadata: {
    title: "Cookie Policy | Greece Golden Visa",
  },

  hero: {
    eyebrow: "LEGAL INFORMATION",
    title: "Cookie",
    highlight: "Policy.",
    description:
      "Learn what cookies and similar technologies may be used on the Greece Golden Visa website and how you can manage your preferences.",
    updated: {
      label: "LAST UPDATED",
      date: "September 2026",
    },
    meta: {
      website: "WEBSITE",
      cookies: "COOKIES",
      privacy: "PRIVACY",
    },
  },

  contents: {
    label: "CONTENTS",
    what: "01 — What Are Cookies?",
    necessary: "02 — Necessary Cookies",
    analytics: "03 — Analytics",
    marketing: "04 — Marketing",
    thirdParty: "05 — Third-Party Cookies",
    consent: "06 — Your Choices",
    browser: "07 — Browser Controls",
    changes: "08 — Changes",
    contact: "09 — Contact",
  },

  lead:
    "This Cookie Policy explains how cookies and similar technologies may be used when you visit the Greece Golden Visa website.",

  sections: {
    what: {
      title: "What are cookies?",
      paragraph1:
        "Cookies are small text files or similar technologies that can be stored on your device when you visit a website. They can allow a website to remember information about your visit, maintain functionality, understand website usage or support other services.",
      paragraph2:
        "Cookies may be set directly by the website (first-party cookies) or by third-party services used by the website.",
    },

    necessary: {
      title: "Necessary cookies",
      paragraph1:
        "Some cookies or similar technologies may be necessary for the website to operate properly or to provide a service that you have specifically requested.",
      paragraph2:
        "These may include technologies used for security, session management, navigation or storing essential privacy preferences.",
      card: {
        title: "Necessary",
        subtitle: "Required for essential functionality",
        description:
          "These technologies may operate without consent where applicable law permits their use because they are strictly necessary for the requested service or website operation.",
      },
    },

    analytics: {
      title: "Analytics cookies",
      paragraph1:
        "If analytics services are enabled, cookies or similar technologies may be used to understand how visitors interact with the website.",
      paragraph2:
        "Analytics information can help us understand which pages are useful, identify technical problems and improve the website.",
      paragraph3:
        "Optional analytics technologies should only be activated in accordance with applicable consent requirements.",
      card: {
        title: "Analytics",
        subtitle: "Optional audience measurement",
        description:
          "Status: Only enabled if the website uses an analytics service requiring consent.",
      },
    },

    marketing: {
      title: "Marketing and advertising cookies",
      paragraph1:
        "The website may in the future use technologies for advertising, remarketing or conversion measurement.",
      paragraph2:
        "If such technologies are introduced, they should be disclosed through the cookie consent mechanism and activated only where the required legal basis or consent has been obtained.",
      card: {
        title: "Marketing",
        subtitle: "Advertising and remarketing technologies",
        description:
          "Status: Not assumed to be active unless explicitly configured on the website.",
      },
    },

    thirdParty: {
      title: "Third-party technologies",
      paragraph1:
        "Some website functionality may rely on third-party providers. Depending on the services actually installed on the website, those providers may place their own cookies or process technical information.",
      paragraph2:
        "Examples can include analytics, embedded content, communication tools, maps, security services or other external functionality.",
      paragraph3:
        "The actual list of third-party technologies should be reviewed against the live website configuration before this policy is published.",
    },

    consent: {
      title: "Your cookie choices",
      paragraph1:
        "Where consent is required for optional cookies or similar technologies, you should be able to accept or reject those technologies through the website's cookie consent mechanism.",
      paragraph2:
        "Optional cookies should not be activated merely because you visit the website. Where applicable, your choices should be recorded and respected.",
      paragraph3:
        "You may also withdraw or change your choices where the website provides a cookie preference management tool.",
    },

    browser: {
      title: "Browser controls",
      paragraph1:
        "Most modern browsers allow you to control or delete cookies through their settings.",
      paragraph2:
        "Disabling certain cookies may affect the functionality or user experience of parts of the website, especially where a cookie is necessary for a requested service.",
    },

    changes: {
      title: "Changes to this policy",
      paragraph1:
        "We may update this Cookie Policy when the website's technologies, services or legal requirements change.",
      paragraph2:
        "The date shown at the beginning of the policy indicates when it was most recently updated.",
    },

    contact: {
      title: "Contact",
      paragraph:
        "If you have questions about cookies or similar technologies used by the website, contact:",
    },
  },

  disclaimer: {
    title: "Important",
    description:
      "This Cookie Policy must be checked against the actual cookies, scripts, analytics platforms, embeds and third-party services installed on the live website. Do not publish cookie categories or providers that are not actually being used.",
  },
},
  },

  ru: {
    contact: {
  hero: {
    eyebrow: "СВЯЖИТЕСЬ С НАШИМИ КОНСУЛЬТАНТАМИ",
    titleLine1: "Ваши вопросы",
    titleLine2: "заслуживают",
    titleEmphasis: "специалиста.",
    description:
      "Поговорите напрямую со специалистом, который разбирается в недвижимости Греции, технической проверке объектов и процессе инвестирования через Golden Visa. Расскажите, на каком этапе вы находитесь, и мы поможем определить дальнейшие шаги.",
    callButton: "Позвонить +306993229390",
    emailButton: "Отправить Email",
    meta: {
      direct: "ПРЯМОЙ КОНТАКТ",
      goldenVisa: "GOLDEN VISA",
      property: "НЕДВИЖИМОСТЬ",
      dueDiligence: "ТЕХНИЧЕСКАЯ ПРОВЕРКА",
    },
  },

  intro: {
    label: "НАЧНИТЕ ДИАЛОГ",
    titleLine1: "Не знаете, с чего",
    titleLine2: "лучше",
    titleEmphasis: "начать?",
    description:
      "Вам не обязательно приходить с уже готовым инвестиционным планом. Если вы впервые изучаете Грецию, сравниваете объекты или уже готовитесь к инвестиции, первый шаг — просто разобраться в вашей ситуации.",
  },

  advisor: {
    imageAlt: "Светлана Новикова",
    imageLabel: "СВЕТЛАНА НОВИКОВА",
    directContact: "ВАШ ПРЯМОЙ КОНТАКТ",
    location: "АФИНЫ · ГРЕЦИЯ",
    credentials: {
      civilEngineer: "Дипломированный инженер-строитель",
      goldenVisa: "Консультант по Golden Visa",
      dueDiligence: "Специалист по технической проверке",
      realEstate: "Консультант по недвижимости",
    },
    description:
      "Имея профессиональный опыт в области строительства и недвижимости Греции, Светлана привносит технический взгляд в инвестиционный процесс. Её задача — помочь инвесторам разобраться в объекте, практических аспектах сделки и специалистах, которые необходимы на разных этапах.",
    phoneLabel: "ТЕЛЕФОН / WHATSAPP",
    emailLabel: "EMAIL",
  },

  topics: {
    label: "ЧТО МЫ МОЖЕМ ОБСУДИТЬ?",
    titleLine1: "Задайте вопрос.",
    titleLine2: "Мы поможем определить",
    titleEmphasis: "направление.",
    description:
      "Инвестиция через Golden Visa может включать вопросы недвижимости, технической проверки, финансов и административных процедур. Начните с той части процесса, которая сейчас наиболее важна для вас.",
    items: {
      goldenVisa: {
        title: "Golden Visa",
        text:
          "Требования, инвестиционные варианты и первые шаги к получению ВНЖ в Греции.",
      },
      propertySearch: {
        title: "Поиск недвижимости",
        text:
          "Обсудите тип недвижимости, район и инвестиционный профиль, который вы ищете.",
      },
      propertyReview: {
        title: "Проверка объекта",
        text:
          "Уже нашли недвижимость? Обсудите технические и инвестиционные вопросы, которые следует проверить.",
      },
      investmentStrategy: {
        title: "Инвестиционная стратегия",
        text:
          "Определите ваши цели, бюджет и направление, которое соответствует вашим планам.",
      },
    },
  },

  form: {
    label: "ЧАСТНЫЙ ЗАПРОС",
    titleLine1: "Расскажите нам",
    titleLine2: "о том, что вы",
    titleEmphasis: "планируете.",
    description:
      "Несколько деталей помогут нам понять вашу ситуацию ещё до начала разговора.",
    noteTitle: "ВАМ НЕ НУЖНО ЗНАТЬ ВСЕ ОТВЕТЫ.",
    noteText:
      "Если вы всё ещё изучаете варианты, просто расскажите, на каком этапе вы сейчас.",
    investorDetails: "ДАННЫЕ ИНВЕСТОРА",
    fields: {
      fullName: {
        label: "ПОЛНОЕ ИМЯ",
        placeholder: "Ваше полное имя",
      },
      email: {
        label: "EMAIL",
        placeholder: "you@example.com",
      },
      phone: {
        label: "ТЕЛЕФОН / WHATSAPP",
      },
      nationality: {
        label: "ГРАЖДАНСТВО",
        placeholder: "Ваше гражданство",
      },
      budget: {
        label: "ИНВЕСТИЦИОННЫЙ БЮДЖЕТ",
        placeholder: "Выберите диапазон",
        undecided: "Пока изучаю варианты",
      },
      propertyStatus: {
        label: "СТАТУС ПОИСКА НЕДВИЖИМОСТИ",
        placeholder: "Выберите вариант",
        looking: "Я ищу недвижимость",
        selected: "Я уже выбрал объект",
        considering: "Я рассматриваю несколько вариантов",
        none: "Я ещё не начинал поиск",
      },
    },
    topicsLabel: "ЧТО ВЫ ХОТИТЕ ОБСУДИТЬ?",
    languageLabel: "ПРЕДПОЧТИТЕЛЬНЫЙ ЯЗЫК",
    message: {
      label: "СООБЩЕНИЕ",
      placeholder:
        "Расскажите о ваших планах, интересующем вас объекте или вопросе, на который вы хотите получить ответ...",
    },
    disclaimer:
      "Отправляя эту форму, вы обращаетесь в Homes in Greece с просьбой ответить на ваш запрос.",
    submit: "Отправить запрос",
    error:
      "Не удалось отправить ваш запрос. Попробуйте ещё раз или свяжитесь с нами напрямую.",
  },

  success: {
    label: "ЗАПРОС ПОЛУЧЕН",
    titleLine1: "Спасибо.",
    titleLine2: "Давайте поговорим о Греции.",
    description:
      "Ваш запрос получен. Вы также можете связаться со Светланой напрямую по телефону или электронной почте, если хотите продолжить разговор таким способом.",
    call: "Позвонить напрямую",
    email: "Написать напрямую",
  },

  process: {
    label: "ЧТО ПРОИСХОДИТ ДАЛЬШЕ",
    titleLine1: "Один разговор.",
    titleLine2: "Более ясный следующий шаг.",
    description:
      "Цель обращения — не перегрузить вас информацией. Важно понять, чего вы хотите достичь, и определить, на что следует обратить внимание дальше.",
    steps: {
      "01": {
        title: "МЫ СЛУШАЕМ",
        text: "Ваши цели, бюджет, гражданство и текущий этап.",
      },
      "02": {
        title: "МЫ ПРОЯСНЯЕМ",
        text:
          "Вопросы, связанные с вашей инвестицией, недвижимостью или планами по Golden Visa.",
      },
      "03": {
        title: "МЫ ОПРЕДЕЛЯЕМ",
        text:
          "Следующие практические шаги и вопросы, требующие внимания специалиста.",
      },
      "04": {
        title: "РЕШЕНИЕ ЗА ВАМИ",
        text:
          "Вы двигаетесь дальше с более ясным пониманием следующих шагов.",
      },
    },
  },

  faq: {
    label: "ПРЕЖДЕ ЧЕМ СВЯЗАТЬСЯ С НАМИ",
    titleLine1: "Несколько важных",
    titleLine2: "моментов, которые",
    titleEmphasis: "стоит знать.",
    description:
      "Если вы сомневаетесь, готовы ли уже обратиться, вот несколько полезных моментов, которые стоит знать заранее.",
    items: {
      "01": {
        question:
          "Нужно ли уже выбрать недвижимость перед обращением?",
        answer:
          "Нет. Вы можете обратиться на любом этапе. Если вы всё ещё сравниваете районы, инвестиционные варианты или объекты, первый разговор поможет определить правильное направление.",
      },
      "02": {
        question:
          "Могу ли я обратиться по поводу уже найденной недвижимости?",
        answer:
          "Да. Если вы уже рассматриваете объект в Греции, вы можете обсудить его, его соответствие вашим планам и технические аспекты, которые следует проверить до дальнейших действий.",
      },
      "03": {
        question: "На каких языках можно общаться?",
        answer:
          "Поддержка доступна на английском, греческом и русском языках.",
      },
      "04": {
        question:
          "Понадобятся ли в процессе другие специалисты?",
        answer:
          "В зависимости от вашей ситуации юридические, нотариальные, бухгалтерские и технические вопросы могут требовать участия разных специалистов. Задача здесь — помочь скоординировать соответствующих профессионалов вокруг инвестиционного процесса.",
      },
    },
  },

  cta: {
    label: "КОГДА БУДЕТЕ ГОТОВЫ",
    titleLine1: "Начните с вопроса.",
    titleLine2: "Не с обязательства.",
    description:
      "Свяжитесь напрямую с Homes in Greece и начните разговор о ваших планах в Греции.",
    call: "Позвонить Светлане",
    email: "Отправить Email",
  },

  legal: {
    important: "Важно:",
    text:
      "Информация на этом сайте предназначена для общего ознакомления. Право на Golden Visa, соответствие недвижимости требованиям и юридические условия зависят от индивидуальных обстоятельств каждого инвестора и должны оцениваться с участием соответствующих квалифицированных специалистов.",
  },

  bottomLink: "Вернуться к руководству по Golden Visa",
},
whyClientsTrustUs: {
  hero: {
    eyebrow: "ПОЧЕМУ КЛИЕНТЫ НАМ ДОВЕРЯЮТ",
    titleLine1: "Доверие не",
    titleEmphasis: "обещают.",
    titleLine3: "Его создают.",
    description:
      "Покупка недвижимости в Греции из-за рубежа требует большего, чем просто поиск красивого дома. Инвестору нужны ясная информация, понимание технических аспектов, правильные специалисты и человек, который понимает, чего именно он хочет достичь.",
    primaryButton: "Записаться на личную консультацию",
    secondaryButton: "Открыть руководство инвестора",
    framework: "СИСТЕМА ДОВЕРИЯ",
    compass: {
      your: "ВАШИ",
      investment: "ИНВЕСТИЦИИ",
      expertise: "ЭКСПЕРТИЗА",
      strategy: "СТРАТЕГИЯ",
      guidance: "СОПРОВОЖДЕНИЕ",
      local: "МЕСТНЫЙ",
    },
    fourPrinciples: "ЧЕТЫРЕ ПРИНЦИПА",
  },

  intro: {
    label: "ЧТО ДЕЙСТВИТЕЛЬНО НУЖНО ИНВЕСТОРУ",
    titleLine1: "Правильный ответ",
    titleLine2: "не всегда самый простой.",
    description:
      "Международные инвестиции в недвижимость требуют решений, которые выходят далеко за рамки цены и фотографий. Надёжный консультант должен помочь вам понять возможности, определить, что требует дополнительной проверки, и связать вас со специалистами, которые смогут дать точные ответы.",
  },

  statement: {
    quote:
      "Наша задача не в том, чтобы представить каждый объект как подходящий. Наша задача — помочь вам понять, какая именно возможность действительно имеет смысл для вас.",
    authorRole: "Дипломированный инженер-строитель · Консультант по Golden Visa",
    index: "ДОВЕРИЕ / 01",
  },

  pillarsHeader: {
    label: "ЧЕТЫРЕ ПРИЧИНЫ",
    titleLine1: "Что действительно",
    titleLine2: "имеет значение.",
    description:
      "Доверие создаётся тем, как ведётся инвестиционный процесс, а не списком обещаний. Эти четыре принципа определяют взаимодействие с первого разговора до принятия окончательного решения.",
  },

  pillars: {
    whyItMatters: "ПОЧЕМУ ЭТО ВАЖНО",

    "01": {
      eyebrow: "ЭКСПЕРТИЗА",
      title: "Объект проверяется до того, как его рекомендуют.",
      text:
        "Цель — не просто найти привлекательную недвижимость. Важно понять, соответствует ли объект вашим инвестиционным целям, предполагаемому использованию и общей стратегии Golden Visa.",
      points: [
        "Технический подход",
        "Соответствие объекта вашим целям",
        "Внимание к документации",
        "Оценка с точки зрения инвестиций",
      ],
    },

    "02": {
      eyebrow: "ПЕРСОНАЛЬНАЯ СТРАТЕГИЯ",
      title: "Ваши инвестиции начинаются с ваших целей.",
      text:
        "У каждого инвестора свои приоритеты. Бюджет, расположение, семейные планы, образ жизни, потенциал аренды и цели получения ВНЖ влияют на то, каким должен быть подходящий объект.",
      points: [
        "Понять ваши приоритеты",
        "Определить подходящий путь",
        "Сформировать целевой список",
        "Исключить ненужные варианты",
      ],
    },

    "03": {
      eyebrow: "КОМПЛЕКСНОЕ СОПРОВОЖДЕНИЕ",
      title: "Вам не нужно проходить весь процесс в Греции в одиночку.",
      text:
        "Покупка недвижимости может включать нескольких специалистов и несколько этапов. Задача — связать все эти элементы процесса, пока соответствующий специалист занимается своей профессиональной областью.",
      points: [
        "Координация с инженером",
        "Взаимодействие с юристом",
        "Координация с нотариусом",
        "Сопровождение по вопросам ВНЖ",
      ],
    },

    "04": {
      eyebrow: "МЕСТНОЕ ЗНАНИЕ",
      title: "Советы от человека, который лично знает Грецию.",
      text:
        "Светлана воспринимает Грецию не как удалённый рынок. Она живёт в стране, владеет здесь собственным домом и понимает практическую разницу между изучением Греции онлайн и реальным выбором места для инвестиций.",
      points: [
        "Местный взгляд",
        "Знание районов",
        "Практический контекст",
        "Долгосрочное мышление",
      ],
    },
  },

  standardsIntro: {
    label: "НАШ СТАНДАРТ",
    titleLine1: "Качественный опыт",
    titleLine2: "начинается до покупки.",
    description:
      "Высшая форма доверия — понимать, что происходит до подписания документов, оплаты или принятия обязательств. Процесс должен дать инвестору достаточно ясности, чтобы понимать как саму возможность, так и вопросы, которые ещё требуют профессиональных ответов.",
    link: "Посмотреть список необходимых документов",
  },

  standards: {
    technical: {
      title: "Техническое внимание",
      text:
        "Состояние объекта и технические вопросы должны быть рассмотрены до принятия решения о покупке.",
    },
    professionals: {
      title: "Правильные специалисты",
      text:
        "Юридические, нотариальные, инженерные и бухгалтерские вопросы направляются соответствующим специалистам.",
    },
    communication: {
      title: "Международная коммуникация",
      text:
        "Поддержка доступна на греческом, английском и русском языках, что помогает международным инвесторам ясно общаться на всех этапах.",
    },
    human: {
      title: "Человеческое сопровождение",
      text:
        "Вы работаете с человеком, который остаётся вовлечённым в процесс, а не передаёт вас от одного отдела к другому.",
    },
  },

  promise: {
    label: "ОБЕЩАНИЕ ДЛЯ ИНВЕСТОРА",
    titleLine1: "Вы всегда должны",
    titleLine2: "понимать почему.",
    description:
      "Почему именно этот объект? Почему именно это место? Что уже проверено? Что ещё необходимо проверить? Кто отвечает за следующий этап?",
  },

  promises: [
    "Никакого давления с целью выбрать объект только потому, что он доступен.",
    "Чёткая информация о том, что уже проверено и что ещё требует оценки специалиста.",
    "Фокус на соответствии вашим целям, а не только на внешнем виде объекта.",
    "Координация необходимых для сделки специалистов.",
    "Стратегия, построенная вокруг индивидуальных целей инвестора.",
  ],

  process: {
    label: "КАК ДОВЕРИЕ ПРОЯВЛЯЕТСЯ НА ПРАКТИКЕ",
    titleLine1: "От первого",
    titleLine2: "разговора до решения.",
    description:
      "Доверие должно быть заметно в самом процессе. Это означает сначала понять инвестора, целенаправленно оценить возможности, привлечь нужных специалистов и оставить окончательное решение там, где ему и место — у самого инвестора.",
  },

  steps: {
    "01": {
      title: "Мы понимаем",
      text:
        "Мы начинаем с ваших целей, бюджета, семейной ситуации и причины, по которой вы рассматриваете инвестиции в Греции.",
    },
    "02": {
      title: "Мы оцениваем",
      text:
        "Потенциальные объекты рассматриваются с точки зрения их соответствия вашим целям, технических аспектов и вашей инвестиционной стратегии.",
    },
    "03": {
      title: "Мы координируем",
      text:
        "К процессу подключаются соответствующие специалисты, когда необходимы юридическая, техническая, налоговая или нотариальная экспертиза.",
    },
    "04": {
      title: "Вы принимаете решение",
      text:
        "Вы получаете необходимую информацию, чтобы принять взвешенное решение без лишнего давления.",
    },
  },

  svetlana: {
    label: "ЧЕЛОВЕК, КОТОРЫЙ СТОИТ ЗА СОПРОВОЖДЕНИЕМ",
    imageAlt:
      "Светлана Новикова, дипломированный инженер-строитель и консультант по Golden Visa",
    imageLocation: "ГРЕЦИЯ",
    titleLine1: "Человек, который знает",
    titleLine2: "Грецию за пределами сделки.",
    paragraph1:
      "Светлана Новикова — дипломированный инженер-строитель, консультант по Golden Visa и специалист по недвижимости. Её подход объединяет вопросы недвижимости, инженерии и получения ВНЖ, рассматривая их как взаимосвязанные части одного решения.",
    paragraph2:
      "У неё также есть собственный дом в Греции. Эта личная связь имеет значение, потому что выбор Греции — это не только вопрос актива. Для многих инвесторов это также вопрос того, где они хотят проводить время, где может жить их семья и какое будущее они хотят построить.",
    credentials: {
      "01": "Дипломированный инженер-строитель",
      "02": "Консультант по Golden Visa",
      "03": "Греческий · Английский · Русский",
    },
    link: "Познакомиться со Светланой",
  },

  faqIntro: {
    label: "ДОВЕРИЕ: ОТВЕТЫ НА ВОПРОСЫ",
    titleLine1: "Вопросы, которые",
    titleLine2: "задают инвесторы.",
    description:
      "Прозрачность также означает чётко объяснять, чем является эта услуга, чем она не является и в каких случаях следует привлечь другого квалифицированного специалиста.",
  },

  faq: {
    "01": {
      question: "Является ли Homes in Greece агентством недвижимости?",
      answer:
        "Homes in Greece — это бизнес Светланы Новиковой, в рамках которого она объединяет услуги в сфере греческой недвижимости со своим инженерным образованием и консультированием по Golden Visa. Подход строится вокруг общей цели инвестора, а не только вокруг представления объектов.",
    },
    "02": {
      question: "Светлана лично проверяет каждый объект?",
      answer:
        "Оценка недвижимости должна проводиться с учётом особенностей каждой сделки. Если требуется официальная техническая проверка, юридическая экспертиза или другое профессиональное заключение, к процессу должен быть привлечён соответствующий квалифицированный специалист. Цель — определить, что необходимо проверить до принятия инвестором обязательств.",
    },
    "03": {
      question: "Кто занимается юридической стороной покупки?",
      answer:
        "Юридические вопросы должны решаться соответствующим квалифицированным юристом. Роль Светланы заключается в координации общего процесса и обеспечении связи между вопросами недвижимости, техническими аспектами и требованиями к ВНЖ с соответствующими специалистами.",
    },
    "04": {
      question: "Могут ли международные инвесторы общаться на предпочитаемом языке?",
      answer:
        "Поддержка доступна на греческом, английском и русском языках, что помогает международным клиентам эффективно общаться на протяжении всего процесса.",
    },
  },

  cta: {
    label: "НАЧНИТЕ С РАЗГОВОРА",
    titleLine1: "Ваши инвестиции заслуживают",
    titleLine2: "чёткого направления.",
    description:
      "Расскажите, что вы ищете, что для вас важно и чего вы хотите достичь в Греции. Мы поможем вам понять следующий шаг.",
    button: "Записаться на личную консультацию",
  },

  legal:
    "Информация на этой странице предоставлена исключительно в общих информационных целях. Юридические, налоговые, инженерные и другие специализированные вопросы должны подтверждаться соответствующим квалифицированным специалистом с учётом особенностей конкретной сделки.",
},
    ourExperience: {
  hero: {
    sectionLabel: "НАШ ОПЫТ",
    kicker: "НЕДВИЖИМОСТЬ · ИНЖЕНЕРИЯ · ВНЖ",
    titleLine1: "Опыт, который можно",
    titleLine2: "увидеть в цифрах.",
    description:
      "Больше, чем просто объявления о недвижимости. Больше, чем годы опыта на бумаге. Это опыт, сформированный работой с недвижимостью, инженерией, технической оценкой объектов и помощью людям в принятии решений о недвижимости в Греции.",
    primaryButton: "Обсудить вашу инвестицию",
    secondaryButton: "Изучить руководство инвестора",
    mainNumberLabel: "НЕДВИЖИМОСТЬ",
    mainNumberText: "Лет опыта на рынке недвижимости Греции.",
    propertiesExamined: "ПРОВЕРЕННЫХ ОБЪЕКТОВ",
    languages: "ЯЗЫКА",
    bottom: {
      realEstate: "НЕДВИЖИМОСТЬ",
      engineering: "ИНЖЕНЕРИЯ",
      dueDiligence: "ТЕХНИЧЕСКИЙ DUE DILIGENCE",
      residency: "ВНЖ",
    },
  },

  business: {
    sectionLabel: "КОМПАНИЯ, СТОЯЩАЯ ЗА ЭТИМ ИМЕНЕМ",
    titleLine1: "Homes in Greece — это",
    titleLine2: "компания Светланы Новиковой.",
    paragraph1:
      "Homes in Greece — компания, которой владеет и которую возглавляет Светлана Новикова. Она объединяет её работу в сфере недвижимости Греции и гражданского строительства, уделяя особое внимание оценке объектов, технической экспертизе и поддержке международных покупателей.",
    paragraph2:
      "Именно здесь объединяются различные направления её профессионального опыта. Недвижимость, инженерия и сопровождение вопросов ВНЖ связаны одной целью: помогать людям принимать более обоснованные решения относительно недвижимости в Греции.",
    details: {
      ownerLabel: "ВЛАДЕЛЕЦ И РУКОВОДИТЕЛЬ",
      businessLabel: "КОМПАНИЯ",
      baseLabel: "ПРОФЕССИОНАЛЬНАЯ БАЗА",
    },
  },

  trackRecord: {
    sectionLabel: "ПРОФЕССИОНАЛЬНЫЙ ОПЫТ",
    titleLine1: "Опыт становится ценным,",
    titleLine2: "когда его можно измерить.",
    paragraph1:
      "Homes in Greece строит свою деятельность вокруг рынка недвижимости Греции, объединяя работу с недвижимостью и технические знания.",
    paragraph2:
      "Сам портфель является частью этой истории: жилые объекты, земельные участки и коммерческая недвижимость на греческом рынке.",
  },

  portfolioStats: {
    listings: {
      label: "ОБЪЕКТОВ В ПОРТФЕЛЕ",
      text:
        "Жилая, земельная и коммерческая недвижимость, представленная в портфеле.",
    },
    residential: {
      label: "ЖИЛАЯ НЕДВИЖИМОСТЬ",
      text:
        "Жилые объекты, представленные в портфеле компании.",
    },
    land: {
      label: "ЗЕМЛЯ И УЧАСТКИ",
      text:
        "Земельные возможности, составляющие важную часть портфеля.",
    },
    commercial: {
      label: "КОММЕРЧЕСКАЯ",
      text:
        "Коммерческие объекты, представленные для продажи или аренды.",
    },
  },

  portfolio: {
    sectionLabel: "СОСТОЯНИЕ ПОРТФЕЛЯ",
    titleLine1: "Реальный рынок",
    titleLine2: "недвижимости, а не одна ниша.",
    summaryLabel: "НА ПРОДАЖУ",
    summaryText:
      "В представленном портфеле значительно преобладают объекты на продажу, что отражает основное направление деятельности компании в сфере недвижимости.",
    cardTitle: "ПОРТФЕЛЬ НЕДВИЖИМОСТИ",
    cardSubtitle: "ОБЪЕКТОВ В ПРЕДОСТАВЛЕННОМ СНИМКОМ САЙТА",
    sale: "ПРОДАЖА",
    rental: "АРЕНДА",
    note:
      "Данные портфеля отражают категории недвижимости и количество объявлений, представленные на предоставленном для этой страницы источнике Homes in Greece, и могут изменяться по мере добавления, продажи или сдачи объектов в аренду.",
  },

  portfolioBreakdown: {
    residential: {
      title: "Жилая",
      status: "На продажу",
      detail: "Жилые объекты",
    },
    land: {
      title: "Земля",
      status: "На продажу",
      detail: "Участки и земля",
    },
    commercial: {
      title: "Коммерческая",
      status: "На продажу",
      detail: "Коммерческие помещения",
    },
    rental: {
      title: "Аренда",
      status: "В аренду",
      detail: "Жилая и коммерческая",
    },
  },

  experience: {
    sectionLabel: "ОТКУДА БЕРЁТСЯ ЭТОТ ОПЫТ",
    titleLine1: "Три направления.",
    titleLine2: "Один взгляд.",
    description:
      "Сила подхода заключается в объединении различных областей знаний вокруг одного решения о недвижимости.",
  },

  experienceCards: {
    realEstate: {
      eyebrow: "НЕДВИЖИМОСТЬ",
      title: "Недвижимость — это больше, чем объявление.",
      text:
        "Годы работы с недвижимостью позволяют понимать, что действительно важно покупателю: расположение, состояние, назначение, документы, потенциал и соответствие объекта цели покупки.",
      points: {
        residential: "Жилая недвижимость",
        land: "Земля и участки",
        commercial: "Коммерческие помещения",
        investment: "Инвестиционные возможности",
      },
    },

    engineering: {
      eyebrow: "ИНЖЕНЕРИЯ",
      title: "Смотреть дальше того, что показывает фотография.",
      text:
        "Инженерное образование добавляет ещё один уровень внимания к объекту. Техническая документация, характеристики здания, законность и вопросы градостроительного планирования могут влиять на пригодность недвижимости.",
      points: {
        surveys: "Архитектурные обследования",
        certificates: "Инженерные сертификаты",
        legality: "Законность и планирование",
        assessment: "Техническая оценка",
      },
    },

    residency: {
      eyebrow: "ВНЖ",
      title: "Недвижимость и ВНЖ могут быть частью одного решения.",
      text:
        "Для международных покупателей приобретение недвижимости в Греции может быть связано со стратегией получения ВНЖ. Такой процесс требует тщательной координации недвижимости, документов и соответствующих специалистов.",
      points: {
        guidance: "Сопровождение Golden Visa",
        assessment: "Оценка недвижимости",
        documents: "Координация документов",
        collaboration: "Взаимодействие со специалистами",
      },
    },
  },

  engineering: {
    sectionLabel: "ИНЖЕНЕРНЫЙ ОПЫТ",
    titleLine1: "Прежде чем объект",
    titleLine2: "станет инвестицией,",
    titleLine3: "нужно понять сам объект.",
    paragraph1:
      "Инженерный опыт Светланы добавляет техническое измерение к оценке недвижимости. Это означает смотреть дальше презентации объекта и учитывать его физические, технические и градостроительные характеристики, которые могут влиять на его пригодность.",
    paragraph2:
      "Инженерная практика охватывает широкий спектр услуг, связанных с недвижимостью и строительством, создавая практическую техническую основу для направления компании в сфере недвижимости.",
    practiceLabel: "ИНЖЕНЕРНАЯ ПРАКТИКА",
  },

  engineeringServices: {
    "01": "Архитектурные обследования",
    "02": "Инженерные сертификаты",
    "03": "Сертификаты законности",
    "04": "Сертификаты энергоэффективности",
    "05": "Надзор за строительством и проектами",
    "06": "Надзор за ремонтными работами",
    "07": "Строительные проекты",
    "08": "Градостроительные исследования",
    "09": "Декларации в Земельный кадастр",
    "10": "Градостроительное планирование",
    "11": "3D-чертежи",
    "12": "Ремонт интерьеров и недвижимости",
  },

  benefits: {
    sectionLabel: "ЧТО НА САМОМ ДЕЛЕ ОЗНАЧАЕТ ОПЫТ",
    titleLine1: "Суть не в том, чтобы сказать,",
    titleLine2: "что у нас есть опыт.",
    description:
      "Суть в том, что этот опыт может изменить для вас.",
  },

  investorBenefits: {
    questions: {
      title: "Более точные вопросы",
      text:
        "Опыт помогает определить вопросы, которые необходимо задать до принятия решения.",
    },
    attention: {
      title: "Раннее внимание",
      text:
        "Потенциальные технические или процедурные проблемы можно выявить до того, как они превратятся в дорогостоящие сюрпризы.",
    },
    professional: {
      title: "Нужный специалист",
      text:
        "Не каждый вопрос относится к одному и тому же специалисту. Опыт означает понимание того, когда к процессу должен подключиться другой профессионал.",
    },
    process: {
      title: "Единый связанный процесс",
      text:
        "Вопросы недвижимости, инженерии, права и ВНЖ могут координироваться вокруг цели инвестора.",
    },
  },

  market: {
    sectionLabel: "ЗАМЕТНОЕ ПРИСУТСТВИЕ НА РЫНКЕ",
    titleLine1: "Работа существует",
    titleLine2: "не только на этом сайте.",
    paragraph1:
      "Объекты Homes in Greece также представлены на известных платформах недвижимости, создавая заметное присутствие за пределами собственного сайта компании.",
    paragraph2:
      "Открытые профессиональные каталоги также напрямую связывают инженерную практику с именем Светланы Новиковой.",

    proof: {
      propertyLabel: "ПРИСУТСТВИЕ В НЕДВИЖИМОСТИ",
      propertyTitle: "АКТИВНЫЕ ОБЪЯВЛЕНИЯ",
      propertyText:
        "Объекты Homes in Greece представлены в открытых объявлениях о недвижимости.",

      engineeringLabel: "ИНЖЕНЕРНАЯ ПРАКТИКА",
      engineeringTitle: "СВЕТЛАНА НОВИКОВА",
      engineeringText:
        "Профессиональные каталоги напрямую связывают инженерную практику со Светланой.",

      athensLabel: "АФИНЫ",
      athensTitle: "6 P. TSALDARI",
      athensText: "Профессиональное присутствие в центральных Афинах.",
    },
  },

  serviceNetwork: {
    engineering: {
      title: "Инженерия",
      text:
        "Технические вопросы, состояние объекта и инженерные аспекты.",
    },
    legal: {
      title: "Юридическое сопровождение",
      text:
        "Юридические вопросы решаются с привлечением соответствующих специалистов.",
    },
    notarial: {
      title: "Нотариальное сопровождение",
      text:
        "Координация формальной части сделки с недвижимостью.",
    },
    accounting: {
      title: "Бухгалтерия и налоги",
      text:
        "Финансовые и налоговые вопросы передаются соответствующим специалистам.",
    },
  },

  coordination: {
    sectionLabel: "ОПЫТ — ЭТО ТАКЖЕ КООРДИНАЦИЯ",
    titleLine1: "Серьёзное решение о недвижимости",
    titleLine2: "не принимается изолированно.",
    description:
      "Вопросы недвижимости, инженерии, права, нотариального сопровождения, бухгалтерии и налогообложения могут пересекаться. Важно понимать, где начинается и заканчивается каждая область и какой специалист должен отвечать за неё.",
  },

  proofWall: {
    sectionLabel: "ЦИФРЫ, СТОЯЩИЕ ЗА УСЛУГОЙ",
    titleLine1: "Опыт и результаты,",
    titleLine2: "которые можно показать.",
  },

  proofPoints: {
    years: {
      title: "Лет опыта",
      text: "Опыт работы на рынке недвижимости Греции.",
    },
    properties: {
      title: "Проверенных объектов",
      text: "Значительный практический опыт оценки недвижимости.",
    },
    languages: {
      title: "Языка",
      text: "Греческий, английский и русский.",
    },
    perspective: {
      title: "Комплексный взгляд",
      text: "Недвижимость + инженерия + ВНЖ.",
    },
  },

  svetlana: {
    imageAlt: "Светлана Новикова, дипломированный инженер-строитель",
    sectionLabel: "ЧЕЛОВЕК, СТОЯЩИЙ ЗА ЭТИМ ОПЫТОМ",
    titleLine1: "Опыт создаётся",
    titleLine2: "с каждым объектом.",
    paragraph1:
      "Светлана Новикова объединяет свою профессию дипломированного инженера-строителя с опытом работы в сфере недвижимости Греции, технической оценки и вопросов недвижимости, связанных с получением ВНЖ.",
    paragraph2:
      "Её связь с Грецией также личная. Она живёт здесь и знает страну не только через недвижимость и профессиональную деятельность, но и через повседневную жизнь.",
    roles: {
      engineer: "Дипломированный инженер-строитель",
      advisor: "Консультант по Golden Visa",
      dueDiligence: "Технический Due Diligence",
      consultant: "Консультант по недвижимости",
    },
    link: "Познакомиться со Светланой и узнать нашу историю",
  },

  cta: {
    label: "НАЧНИТЕ С ПРАВИЛЬНЫХ ВОПРОСОВ",
    titleLine1: "Ваша инвестиция заслуживает",
    titleLine2: "опыта за ней.",
    description:
      "Расскажите нам, что вы ищете в Греции, есть ли у вас уже конкретный объект и чего вы хотите достичь. Мы поможем вам разобраться в объекте, процессе и следующем шаге.",
    primaryButton: "Забронировать частную консультацию",
    secondaryButton: "Изучить руководство инвестора",
  },

  disclaimer:
    "Данные портфеля основаны на содержании сайта Homes in Greece, предоставленном для этой страницы, и могут изменяться по мере добавления, продажи или сдачи объектов в аренду. Информация о профессиональных услугах основана на общедоступных бизнес-каталогах. Данные об опыте компании представлены со слов компании. Информация на этом сайте носит общий информационный характер и не является юридической, налоговой или инвестиционной консультацией.",
},
    whoWeAre: {
  hero: {
    label: "КТО МЫ",
    titleLine1: "Люди, которые сопровождают",
    titleLine2: "ваш путь в Грецию.",
    description:
      "Покупка недвижимости в другой стране — это глубоко личное решение. Мы считаем, что вам нужен не просто посредник для совершения сделки, а люди, которые понимают и Грецию, и то, что значит сделать её частью вашего будущего.",
    primaryButton: "Познакомиться с нами",
    secondaryButton: "Изучить руководство инвестора",
    metaBuiltAround: "В ОСНОВЕ",
    metaValues: "ЛЮДИ · НЕДВИЖИМОСТЬ · ДОВЕРИЕ",
    metaGuide: "РУКОВОДСТВО ИНВЕСТОРА",
  },

  story: {
    imageAlt:
      "Светлана Новикова, дипломированный инженер-строитель и консультант по Golden Visa",
    photoBadge: "КОНСУЛЬТАНТ ПО GOLDEN VISA",
    photoCaption1: "БАЗИРУЕТСЯ В ГРЕЦИИ",
    photoCaption2: "РАБОТАЕТ С ИНВЕСТОРАМИ ПО ВСЕМУ МИРУ",

    label: "ЧЕЛОВЕК, КОТОРЫЙ СТОИТ ЗА ЭТИМ",

    titleLine1: "Греция — не просто место, где я работаю.",
    titleLine2: "Это мой дом.",

    lead:
      "Светлана Новикова — дипломированный инженер-строитель, консультант по Golden Visa, специалист по технической проверке недвижимости и консультант по недвижимости, работающая в Греции.",

    paragraph1:
      "Её связь с Грецией выходит далеко за рамки профессиональной работы с недвижимостью. Греция — это страна, которую она знает лично, где она построила свою жизнь и имеет собственный дом.",

    paragraph2:
      "Эта личная связь определяет её подход к работе с международными инвесторами. Цель заключается не просто в том, чтобы помочь человеку приобрести недвижимость. Важно помочь ему принять значимое решение в стране, которую он, возможно, вскоре будет называть своим домом.",

    paragraph3:
      "Более 15 лет опыта на рынке недвижимости Греции и более 1 000 проверенных объектов позволяют сочетать технические знания с практическим пониманием греческого рынка недвижимости.",

    signature: "Дипл. инженер-строитель · Консультант по Golden Visa",
  },

  credibility: {
    label: "ПОЧЕМУ ИНВЕСТОРЫ НАМ ДОВЕРЯЮТ",
    titleLine1: "Опыт, на котором",
    titleLine2: "можно строить решение.",
    description:
      "Международные инвестиции в недвижимость требуют большего, чем просто интерес к Греции. Они требуют опыта, технического понимания и правильных специалистов рядом с вами.",
  },

  credentials: {
    years: {
      label: "Лет опыта",
      text: "Опыт работы на рынке недвижимости Греции.",
    },

    properties: {
      label: "Проверенных объектов",
      text:
        "Практическое понимание рынка, сформированное реальным опытом работы с недвижимостью.",
    },

    languages: {
      label: "Языка",
      text: "Поддержка на греческом, английском и русском языках.",
    },
  },

  credentialStrip: {
    title: "Дипломированный инженер-строитель",
    description:
      "Инженерные знания находятся в основе процесса.",
  },

  expertiseIntro: {
    label: "ЧТО МЫ ПРИНОСИМ В ПРОЦЕСС",
    titleLine1: "Больше, чем Golden Visa.",
    titleLine2: "Целостный взгляд.",
    description:
      "Оформление ВНЖ — лишь одна часть международной инвестиции в недвижимость. Наш подход объединяет техническое понимание, опыт работы с недвижимостью и профессиональную координацию.",
  },

  expertise: {
    "01": {
      title: "Техническая проверка недвижимости",
      text:
        "Мы смотрим глубже фотографий и объявлений, чтобы понять техническое состояние объекта до того, как вы примете окончательное решение.",
    },

    "02": {
      title: "Сопровождение Golden Visa",
      text:
        "Помогаем инвесторам понять требования, документы и этапы процесса получения ВНЖ через инвестиции.",
    },

    "03": {
      title: "Консультации по недвижимости",
      text:
        "Применяем практическое понимание греческого рынка недвижимости при принятии инвестиционного решения.",
    },

    "04": {
      title: "Профессиональная координация",
      text:
        "Объединяем техническую, юридическую, нотариальную и финансовую стороны процесса, чтобы вам не приходилось координировать всё самостоятельно.",
    },
  },

  team: {
    label: "ЕДИНЫЙ СКООРДИНИРОВАННЫЙ ПРОЦЕСС",

    titleLine1: "Вам не нужно",
    titleLine2: "проходить путь по Греции в одиночку.",

    description:
      "Успешная инвестиция в недвижимость и оформление Golden Visa могут требовать участия специалистов в нескольких областях. Наша задача — привлечь нужных людей на нужном этапе.",
  },

  professionals: {
    "01": {
      title: "Инженер-строитель",
      text: "Техническая оценка и документация объекта недвижимости.",
    },

    "02": {
      title: "Юрист",
      text: "Юридическое сопровождение и проверка при необходимости.",
    },

    "03": {
      title: "Нотариус",
      text: "Координация официальной сделки с недвижимостью.",
    },

    "04": {
      title: "Бухгалтер",
      text:
        "Финансовые и налоговые вопросы ведутся соответствующим специалистом.",
    },
  },

  philosophy: {
    label: "НАША ФИЛОСОФИЯ",

    titleLine1: "Относиться к каждой инвестиции",
    titleLine2: "так, как если бы она была нашей.",

    quote:
      "Правильная недвижимость — это не просто та, которая красиво выглядит. Это та, которая имеет смысл, если посмотреть глубже.",

    paragraph1:
      "Именно поэтому техническая проверка является такой важной частью нашего подхода. До того как инвестор примет решение, недвижимость должна быть тщательно изучена.",

    paragraph2:
      "Потому что, инвестируя из другой страны, вы доверяете людям на месте увидеть то, чего не можете увидеть сами.",
  },

  cta: {
    label: "ПОГОВОРИМ О ВАШИХ ПЛАНАХ",

    titleLine1: "Возможно, Греция станет вашей следующей главой.",
    titleLine2: "Начнём с разговора.",

    description:
      "Расскажите, на каком этапе вы сейчас находитесь, что ищете и чего хотите достичь. Мы поможем вам понять, какие шаги следует сделать дальше.",

    primaryButton: "Забронировать консультацию",
    secondaryButton: "Вернуться к руководству инвестора",
  },

  disclaimer:
    "Информация на этом сайте предоставляется исключительно в общих информационных целях и не должна рассматриваться как юридическая, налоговая или инвестиционная консультация. Требования и процедуры Golden Visa могут изменяться. Актуальные требования всегда следует подтверждать у соответствующих органов Греции и квалифицированных специалистов.",
},
    faq: {
  intro: {
    eyebrow: "ВОПРОСЫ, КОТОРЫЕ ВАЖНО ПРОЯСНИТЬ",
    titleLine1: "Прежде чем",
    titleLine2: "инвестировать в Грецию",
    description:
      "Ответы на важные вопросы простым и понятным языком. От инвестиционных маршрутов и проверки недвижимости до самого процесса получения Golden Visa — здесь собраны вопросы, которые международные инвесторы чаще всего задают перед принятием решения.",
    questionsAnswered: "Вопросов и ответов",
    metaDescription: "Выстроено вокруг пути инвестора",
  },

  sidePanel: {
    label: "ПОНЯТНЫЙ ПУТЬ ВПЕРЁД",
    titleLine1: "Ваши вопросы",
    titleLine2: "важны до",
    titleLine3: "начала инвестирования.",
    description:
      "Каждая инвестиция индивидуальна. Прежде чем определять дальнейшие шаги, важно понять ваши цели и особенности самой недвижимости.",
    profession: "Дипломированный инженер-строитель",
    role: "Консультант по Golden Visa",
  },

  items: {
    "01": {
      category: "ИНВЕСТИЦИИ",
      question:
        "Какие инвестиционные маршруты сейчас доступны для Golden Visa в Греции?",
      answer:
        "Программа Golden Visa в Греции предусматривает различные инвестиционные маршруты в зависимости от типа, местоположения и характеристик инвестиции. Применимый минимальный размер инвестиции и соответствующие условия всегда следует подтверждать с учётом действующего законодательства и конкретных обстоятельств инвестора.",
      related: "Инвестиционные маршруты",
    },

    "02": {
      category: "ПРАВО НА УЧАСТИЕ",
      question: "Кто может получить Golden Visa в Греции?",
      answer:
        "Программа предназначена для соответствующих требованиям граждан стран, не входящих в ЕС, которые осуществляют квалифицируемую инвестицию в Греции. Право на участие зависит от заявителя, выбранного инвестиционного маршрута и требований, действующих на момент подачи заявления.",
      related: "Проверить соответствие требованиям",
    },

    "03": {
      category: "НЕДВИЖИМОСТЬ",
      question: "Могу ли я выбрать любую недвижимость в Греции?",
      answer:
        "Не каждая недвижимость автоматически соответствует требованиям каждого инвестиционного маршрута. На возможность участия могут влиять местоположение, тип, назначение, стоимость и другие характеристики объекта. Поэтому недвижимость следует тщательно проверить до принятия инвестиционного решения.",
      related: "Возможности недвижимости",
    },

    "04": {
      category: "DUE DILIGENCE",
      question: "Что именно включает техническая проверка недвижимости?",
      answer:
        "Недвижимость проверяется с технической точки зрения до принятия окончательного решения. В зависимости от объекта и сделки проверка может включать анализ соответствующей документации, градостроительных и строительных аспектов, физического состояния объекта и потенциальных технических вопросов, которые могут повлиять на инвестицию.",
      related: "Техническая проверка",
    },

    "05": {
      category: "ПРОЦЕСС",
      question: "Сколько времени занимает весь процесс?",
      answer:
        "Единого срока, который подходит каждому инвестору, не существует. Общая продолжительность может зависеть от выбора недвижимости, подготовки документов, технических и юридических проверок, завершения сделки и соответствующих административных процедур. Ваше дело координируется поэтапно, чтобы вы понимали, что происходит на каждом этапе.",
      related: "Ваш путь к Golden Visa",
    },

    "06": {
      category: "ПРОФЕССИОНАЛЬНАЯ КОМАНДА",
      question: "Кто занимается юридическими, техническими и административными вопросами?",
      answer:
        "Инвестиция по программе Golden Visa включает работу нескольких специалистов. В процессе могут участвовать инженер, юрист, нотариус, бухгалтер и другие необходимые профессионалы. Цель состоит в том, чтобы координировать эти направления вокруг вашей инвестиции и обеспечить одну понятную точку коммуникации на протяжении всего процесса.",
      related: "Почему стоит работать с нами",
    },

    "07": {
      category: "РАСХОДЫ",
      question: "Какие дополнительные расходы следует предусмотреть?",
      answer:
        "Инвестиционная сумма не обязательно является единственным расходом. В зависимости от сделки могут возникать налоги, профессиональные и нотариальные расходы, технические расходы, государственные или административные сборы и другие затраты, связанные с недвижимостью. Точные расходы следует оценивать применительно к конкретной инвестиции до её осуществления.",
      related: "Планирование инвестиции",
    },

    "08": {
      category: "СЕМЬЯ",
      question: "Могут ли члены моей семьи также получить вид на жительство?",
      answer:
        "Соответствующие требованиям члены семьи могут быть включены в действующую систему Golden Visa при соблюдении требований, применяемых на момент подачи заявления. Конкретную семейную ситуацию следует рассмотреть до подготовки заявления.",
      related: "Право членов семьи",
    },

    "09": {
      category: "ПРОЖИВАНИЕ",
      question: "Нужно ли мне постоянно жить в Греции?",
      answer:
        "Требования к проживанию в рамках программы Golden Visa отличаются от правил, определяющих другие вопросы, например налоговое резидентство. Поэтому конкретные обстоятельства следует рассматривать отдельно, особенно если вы планируете проводить значительное время в Греции или другой стране.",
      related: "Требования Golden Visa",
    },

    "10": {
      category: "СЛЕДУЮЩИЙ ШАГ",
      question: "Что происходит после того, как я выберу недвижимость?",
      answer:
        "После выбора подходящего объекта процесс может перейти к соответствующим техническим и юридическим проверкам, координации сделки и подготовке необходимых документов. Работа разных специалистов координируется вокруг вашего дела, а вы остаётесь информированы на протяжении всего процесса.",
      related: "Ваш путь к Golden Visa",
    },

    "11": {
      category: "НАШ ПОДХОД",
      question: "Почему при инвестировании в Грецию стоит работать с инженером-строителем?",
      answer:
        "Инвестиция по программе Golden Visa — это не только иммиграционный процесс. Сама недвижимость является значительной частью вашей инвестиции. Участие дипломированного инженера-строителя позволяет также оценить объект с технической точки зрения до принятия окончательного решения и помогает инвестору сделать более информированный выбор.",
      related: "Техническая проверка",
    },
  },

  cta: {
    eyebrow: "ОСТАЛИСЬ ВОПРОСЫ?",
    titleLine1: "Обсудим",
    titleLine2: "вашу ситуацию.",
    description:
      "Каждая инвестиция начинается с понимания ваших целей, предпочтительного местоположения и подходящего пути.",
    button: "Начать бесплатную консультацию",
  },
},
    applicationChecklist: {
  hero: {
    label: "ЧЕК-ЛИСТ ДОКУМЕНТОВ",
    heading: "Знайте, что готово.",
    headingSecond: "Знайте, чего не хватает.",
    description:
      "Отслеживайте документы, требования и профессиональные проверки, которые необходимо пройти до подачи заявления на Golden Visa в Греции.",
    primary: "Начать чек-лист",
    secondary: "Изучить руководство инвестора",
    meta: "ГОТОВНОСТЬ ЗАЯВЛЕНИЯ",
  },

  intro: {
    label: "ДО ПОДАЧИ ЗАЯВЛЕНИЯ",
    heading:
      "Полный пакет — это больше, чем просто набор документов.",
    paragraphOne:
      "Заявление на Golden Visa объединяет документы, подтверждающие личность, инвестицию, недвижимость и страхование. Некоторые требования также зависят от конкретного инвестиционного маршрута.",
    paragraphTwo:
      "Используйте этот чек-лист как инструмент планирования, чтобы оценить текущую готовность. Финальный пакет документов должен быть проверен с учётом требований, применимых именно к вашему случаю.",
  },

  progress: {
    label: "ГОТОВНОСТЬ ЗАЯВЛЕНИЯ",
    checked: "проверено",
    complete: "Ваш чек-лист полностью выполнен.",
    instruction:
      "Отмечайте каждый пункт по мере подготовки заявления.",
    reset: "Сбросить чек-лист",
  },

  checklist: {
    label: "ОТСЛЕЖИВАНИЕ ДОКУМЕНТОВ",
    heading: "Сформируйте пакет документов.",
    description:
      "Начните с основных документов, затем пройдите проверки, связанные с конкретным инвестиционным маршрутом и профессиональной подготовкой.",
  },

  sections: {
    "identity.title":
      "Личность и въезд",
    "identity.description":
      "Документы, подтверждающие вашу личность и законные основания для подачи заявления.",

    "identity.items.passport.title":
      "Действующий паспорт или признанный проездной документ",
    "identity.items.passport.description":
      "Предоставьте действующий проездной документ, признанный греческими органами власти.",

    "identity.items.entryStatus.title":
      "Действующий статус въезда / проживания",
    "identity.items.entryStatus.description":
      "В зависимости от ваших обстоятельств это может быть соответствующая виза, освобождение от визы или вид на жительство.",

    "identity.items.photo.title":
      "Недавняя фотография паспортного формата",
    "identity.items.photo.description":
      "Недавняя цветная фотография, соответствующая применимым требованиям Греции к паспортным фотографиям, включая необходимый цифровой формат.",

    "identity.items.contact.title":
      "Адрес электронной почты и мобильный телефон",
    "identity.items.contact.description":
      "Актуальные контактные данные необходимы для электронной процедуры подачи заявления.",

    "investment.title":
      "Документы об инвестиции",
    "investment.description":
      "Документы, подтверждающие завершение соответствующей инвестиции и соблюдение применимых требований.",

    "investment.items.purchaseContract.title":
      "Документы о приобретении недвижимости",
    "investment.items.purchaseContract.description":
      "Соответствующий договор / акт передачи или иные документы по сделке, подтверждающие квалифицирующую инвестицию.",

    "investment.items.notarialCertificate.title":
      "Нотариальное свидетельство",
    "investment.items.notarialCertificate.description":
      "Свидетельство нотариуса с подтверждением сторон договора, характеристик недвижимости, стоимости сделки и сведений об оплате, предусмотренных правилами Golden Visa.",

    "investment.items.paymentProof.title":
      "Подтверждение соответствующей оплаты",
    "investment.items.paymentProof.description":
      "Документы, подтверждающие оплату согласованной суммы с использованием допустимого способа платежа.",

    "investment.items.landRegistry.title":
      "Подтверждение регистрации в Земельном реестре / Кадастре",
    "investment.items.landRegistry.description":
      "Подтверждение регистрации либо соответствующая регистрационная документация / свидетельство адвоката.",

    "investment.items.e9.title":
      "Декларация недвижимости E9",
    "investment.items.e9.description":
      "Копия греческой декларации инвестора о недвижимости, если применимо.",

    "insurance.title":
      "Страхование и заявление",
    "insurance.description":
      "Документы, необходимые для оформления вида на жительство.",

    "insurance.items.insurance.title":
      "Частное медицинское страхование",
    "insurance.items.insurance.description":
      "Страховой договор с частной страховой компанией, покрывающий применимые требования.",

    "insurance.items.application.title":
      "Заявление на вид на жительство",
    "insurance.items.application.description":
      "Заявление, подаваемое через электронные сервисы Министерства миграции и убежища.",

    "insurance.items.fees.title":
      "Сборы за оформление вида на жительство",
    "insurance.items.fees.description":
      "Перед подачей заявления необходимо подтвердить применимые административные сборы и сбор за изготовление электронной карты вида на жительство.",

    "route.title":
      "Документы конкретного маршрута",
    "route.description":
      "Дополнительные документы могут потребоваться в зависимости от структуры инвестиции и типа недвижимости.",

    "route.items.routeVerification.title":
      "Инвестиционный маршрут подтверждён",
    "route.items.routeVerification.description":
      "Подтвердите, какой маршрут Golden Visa применяется к объекту, прежде чем использовать стандартный чек-лист.",

    "route.items.specialProperty.title":
      "Специальные документы на недвижимость",
    "route.items.specialProperty.description":
      "Для отдельных маршрутов, например инвестиций в объекты с допустимым изменением назначения или объекты, имеющие статус охраняемого здания, могут потребоваться дополнительные технические, юридические или административные документы.",

    "route.items.companyOwnership.title":
      "Подтверждение владения через компанию",
    "route.items.companyOwnership.description":
      "Если недвижимость приобретается через допустимое юридическое лицо, может потребоваться подтверждение доли инвестора в таком юридическом лице.",

    "professional.title":
      "Профессиональная проверка",
    "professional.description":
      "Финальный этап — это не просто сбор файлов. Каждый документ должен корректно подтверждать соответствующую часть заявления.",

    "professional.items.legalReview.title":
      "Юридические документы проверены",
    "professional.items.legalReview.description":
      "Убедитесь, что сделка и сопровождающие её юридические документы проверены соответствующим специалистом.",

    "professional.items.technicalReview.title":
      "Технические документы проверены",
    "professional.items.technicalReview.description":
      "Убедитесь, что техническое состояние недвижимости и требования конкретного маршрута проверены инженером.",

    "professional.items.applicationReview.title":
      "Пакет заявления проверен перед подачей",
    "professional.items.applicationReview.description":
      "Проведите финальную проверку согласованности и полноты документов перед подачей заявления.",
  },

  item: {
    required: "ОБЯЗАТЕЛЬНО",
    ready: "ГОТОВО",
    toCheck: "ТРЕБУЕТ ПРОВЕРКИ",
    markComplete:
      "Отметить «{title}» как выполненное",
  },

  note: {
    label: "ВАЖНО",
    heading:
      "Не каждое заявление требует одинакового набора документов.",
    paragraphOne:
      "Требования Golden Visa могут различаться в зависимости от инвестиционного маршрута, типа недвижимости и обстоятельств заявителя. Например, действующие официальные процедуры предусматривают дополнительные документы для некоторых инвестиций в охраняемые объекты и объектов с изменённым назначением.",
    paragraphTwo:
      "Этот чек-лист предназначен для подготовки и организации вашего пакета документов. Он не заменяет юридическую консультацию или официальное решение о соответствии требованиям.",
  },

  next: {
    label: "КОГДА ПАКЕТ ГОТОВ",
    heading: "Подготовка становится",
    headingSecond: "заявлением.",
    description:
      "После сбора и проверки документов заявление может перейти к официальной процедуре подачи.",

    stepOne: {
      title: "Финальная проверка",
      description:
        "Убедитесь, что документы полные, согласованные между собой и соответствуют выбранному маршруту.",
    },

    stepTwo: {
      title: "Онлайн-подача",
      description:
        "Заявление на вид на жительство подаётся через соответствующие электронные сервисы.",
    },

    stepThree: {
      title: "Рассмотрение заявления",
      description:
        "Компетентный орган проверяет сопровождающие документы и рассматривает заявление.",
    },
  },

  cta: {
    label: "ГОТОВЫ К СЛЕДУЮЩЕМУ ШАГУ?",
    heading: "Ваше заявление должно начинаться",
    headingSecond: "с ясности.",
    description:
      "Если вы ещё выбираете инвестиционный маршрут, объект недвижимости или инвестиционную стратегию, получите ответы на ключевые вопросы до подготовки финального пакета документов.",
    primary:
      "Проверить инвестиционный бюджет",
    secondary:
      "Забронировать персональную консультацию",
  },

  disclaimer: {
    important: "Информационное примечание:",
    description:
      "Этот чек-лист предоставляется исключительно для общего планирования и не должен рассматриваться как официальный перечень документов или юридическая консультация. Требования, сборы и процедуры могут изменяться. Финальный список документов необходимо подтвердить с учётом конкретного инвестиционного маршрута и обстоятельств заявителя.",
  },

  sources: {
    label:
      "На основе актуальных официальных источников Греции",
    ministry:
      "Министерство миграции и убежища",
    registry:
      "Национальный реестр административных процедур",
  },
},
    calculator: {
  eyebrow: "КАЛЬКУЛЯТОР ИНВЕСТИЦИЙ",

  hero: {
    title: "Рассчитайте инвестиционный бюджет",
    emphasis: "до начала инвестирования.",
    description:
      "Рассчитайте ориентировочный капитал, необходимый для инвестиции по программе Golden Visa в Греции.",
    estimate: "РАСЧЁТ",
    greece: "ГРЕЦИЯ",
  },

  loading: {
    title: "Рассчитайте свой бюджет",
    description: "Загрузка калькулятора...",
  },

  error: {
    description:
      "Не удалось загрузить калькулятор. Пожалуйста, попробуйте позже.",
  },

  route: {
    label: "01 / ВЫБЕРИТЕ МАРШРУТ",
    heading: "Начните с",
    headingAccent: "инвестиционного маршрута.",
    description:
      "Выберите инвестиционный маршрут, который вы рассматриваете. Применимый минимальный порог зависит от местоположения и структуры соответствующей инвестиции.",
    selected: "ВЫБРАННЫЙ МАРШРУТ",
  },

  property: {
    label: "02 / ВАША НЕДВИЖИМОСТЬ",
    heading: "Какую сумму вы планируете",
    headingAccent: "инвестировать?",
    description:
      "Укажите предполагаемую стоимость приобретения рассматриваемой недвижимости.",
    inputLabel:
      "Сумма инвестиции в недвижимость",
    rangeLabel:
      "Настройте сумму инвестиции",

    warning: {
      title: "Ниже установленного порога.",
      description:
        "Указанная сумма ниже ориентировочного минимального порога для этого маршрута. Недвижимость и структура инвестиции должны оцениваться с учётом применимых требований.",
    },
  },

  applicants: {
    label: "03 / ЗАЯВИТЕЛИ",
    heading: "Кто будет подавать заявление?",
    description:
      "Выберите дополнительных членов семьи, включённых в заявление.",
    spouse: "Супруг / супруга",
    child: "Ребёнок 0–13 лет",
  },

  disclaimer:
    "Указанные суммы являются ориентировочными расчётами на основе предоставленной информации о расходах и не являются юридической или финансовой офертой.",

  results: {
    label: "04 / ОРИЕНТИРОВОЧНЫЙ КАПИТАЛ",
    description:
      "Ориентировочная стоимость недвижимости плюс расходы, включённые в данный калькулятор.",
    propertyInvestment:
      "Инвестиция в недвижимость",
    application:
      "Оформление Golden Visa",
    purchaseCosts:
      "Расходы на приобретение недвижимости",
    inspection:
      "Техническая проверка недвижимости",
    additionalCosts:
      "ДОПОЛНИТЕЛЬНЫЕ РАСХОДЫ",
    includedCosts:
      "ВКЛЮЧЕНО В РАСХОДЫ НА ОФОРМЛЕНИЕ",
  },

  inspection: {
    from: "От",
  },

  explanation: {
    label: "05 / ПОНИМАЙТЕ, ЗА ЧТО ВЫ ПЛАТИТЕ",
    heading: "Только",
    headingAccent: "релевантные расходы.",
    description:
      "Калькулятор отображает только те расходы, которые настроены и активированы в параметрах калькулятора.",

    card1: {
      title: "Оформление Golden Visa",
      description:
        "Включает расходы, связанные с оформлением, настроенные для выбранных заявителей.",
    },

    card2: {
      title: "Техническая проверка",
      description:
        "Техническая проверка недвижимости отображается отдельно от расходов на оформление Golden Visa.",
    },

    card3: {
      title: "Приобретение недвижимости",
      description:
        "Расходы, связанные с приобретением, отображаются только в том случае, если они настроены и активированы в CMS.",
    },

    card4: {
      title: "Юридический охват",
      description:
        "Профессиональные расходы, связанные с оформлением, рассчитываются в соответствии со значениями, настроенными в CMS.",
    },
  },

  dueDiligence: {
    label: "ДО ПРИНЯТИЯ РЕШЕНИЯ",
    heading: "Проверьте недвижимость",
    headingAccent: "до начала инвестирования.",
    description:
      "Техническая проверка недвижимости позволяет оценить объект до принятия решения об инвестиции.",
    button: "Запросить проверку объекта",
  },

  routes: {
    label: "06 / ПОНИМАЙТЕ ИНВЕСТИЦИОННЫЕ МАРШРУТЫ",
    heading: "Минимальная сумма",
    headingAccent: "требует контекста.",
    description:
      "Разные инвестиционные маршруты имеют разные условия. Порог всегда следует рассматривать вместе с объектом недвижимости, его местоположением и юридической структурой инвестиции.",
    requirements:
      "Действуют требования к местоположению и недвижимости.",
  },

  cta: {
    label: "СЛЕДУЮЩИЙ ШАГ",
    heading: "Знайте свою сумму.",
    headingAccent:
      "Теперь разработайте правильную стратегию.",
    description:
      "Ваш инвестиционный бюджет — это только отправная точка. Следующий шаг — подтвердить подходящий маршрут и объект недвижимости с учётом ваших обстоятельств.",
    primary: "Проверить соответствие требованиям",
    secondary:
      "Забронировать частную консультацию",
  },

  legal: {
    important: "Важно:",
    description:
      "Этот калькулятор предоставляет ориентировочные расчёты исключительно для общего планирования. Расходы могут изменяться в зависимости от объекта недвижимости, сделки и обстоятельств заявителя.",
  },
},
    investorHandbook: {
  hero: {
    eyebrow: "СПРАВОЧНИК ИНВЕСТОРА",
    titleLineOne: "Всё, что важно знать",
    titleLineTwo: "до инвестирования в Грецию.",
    description:
      "Практическое руководство по программе Golden Visa в Греции, инвестиционным маршрутам, выбору недвижимости, проверке объекта и процессу получения вида на жительство.",
    primaryButton: "Начать чтение",
    secondaryButton: "Проверить соответствие требованиям",
    meta: {
      guide: "СПРАВОЧНИК ИНВЕСТОРА",
      country: "ГРЕЦИЯ",
    },
  },

  essentials: {
    eyebrow: "ОСНОВНЫЕ ПОЛОЖЕНИЯ",
    title: "Главное — с первого взгляда.",
    description:
      "Прежде чем выбирать недвижимость или обсуждать суммы, важно понять, как работает программа, какие требования применяются и на каком этапе особенно важна профессиональная проверка.",
    items: {
      who: {
        title: "Для кого предназначена программа",
        text:
          "Граждане третьих стран, которые соответствуют применимым инвестиционным требованиям и требованиям к проживанию.",
      },
      routes: {
        title: "Инвестиционные маршруты",
        text:
          "Минимальный объём инвестиций зависит от местоположения и типа соответствующей требованиям инвестиции.",
      },
      residence: {
        title: "Вид на жительство",
        text:
          "Программа предоставляет греческий вид на жительство, связанный с соответствующей требованиям инвестицией. Это не гражданство ЕС.",
      },
      dueDiligence: {
        title: "Комплексная проверка",
        text:
          "Соответствие объекта требованиям программы не означает автоматически, что это хорошая инвестиция. Важны юридическая, техническая и коммерческая проверки.",
      },
    },
  },

  routes: {
    eyebrow: "01 / ИНВЕСТИЦИОННЫЕ МАРШРУТЫ",
    title: "Существует несколько способов соответствовать требованиям.",
    description:
      "Применимый минимальный объём инвестиций зависит от местоположения и юридической структуры инвестиции. Одна только сумма никогда не даёт полной картины.",
    qualifyingRoute: "СООТВЕТСТВУЮЩИЙ МАРШРУТ",
    important: "Важно:",
    legalNote:
      "Инвестиционные пороги и условия соответствия требованиям зависят от применимого юридического маршрута. Приведённая выше информация носит общий характер и не заменяет индивидуальную оценку.",

    items: {
      higherThreshold: {
        title: "Регионы с повышенным порогом",
        description:
          "Для соответствующих требованиям инвестиций в недвижимость в Аттике, региональной единице Салоников, на Миконосе, Санторини и островах с населением более 3 100 человек в соответствии с действующей системой.",
        note:
          "Применяются конкретные требования к объекту и сделке.",
      },

      otherAreas: {
        title: "Другие регионы Греции",
        description:
          "Для соответствующих требованиям инвестиций в недвижимость в регионах, не относящихся к территориям с порогом €800 000, при соблюдении применимых требований.",
        note:
          "Соответствующий требованиям объект должен отвечать действующим законодательным условиям.",
      },

      specificRoutes: {
        title: "Специальные инвестиционные маршруты",
        description:
          "Некоторые инвестиционные структуры могут соответствовать требованиям при сумме €250 000, включая отдельные случаи изменения назначения объекта и исторических зданий.",
        note:
          "Для этих маршрутов применяются дополнительные условия, поэтому каждый случай следует оценивать индивидуально.",
      },
    },
  },

  eligibility: {
    eyebrow: "02 / СООТВЕТСТВИЕ ТРЕБОВАНИЯМ",
    title: "Начинать нужно с инвестора, а не с объекта.",
    description:
      "Правильная инвестиция начинается с понимания ваших обстоятельств. Гражданство, документы, структура инвестиции и выбранный маршрут недвижимости — всё это имеет значение.",
    link: "Проверить соответствие требованиям",

    items: {
      national: {
        title: "Гражданин третьей страны",
        text:
          "Программа предназначена для соответствующих требованиям инвесторов, являющихся гражданами стран за пределами ЕС.",
      },
      investment: {
        title: "Соответствующая требованиям инвестиция",
        text:
          "Инвестиция должна отвечать условиям применимого маршрута Golden Visa.",
      },
      documentation: {
        title: "Подтверждающие документы",
        text:
          "В зависимости от маршрута могут потребоваться паспорт, документы на недвижимость, подтверждение оплаты, страхование и другие документы.",
      },
      application: {
        title: "Требования к заявлению",
        text:
          "Заявления подаются в соответствии с требованиями и процедурами греческих иммиграционных органов.",
      },
    },
  },

  residence: {
    eyebrow: "03 / ВИД НА ЖИТЕЛЬСТВО",
    titleLineOne: "Проживание в Греции.",
    titleLineTwo: "Более широкий европейский контекст.",
    paragraphOne:
      "Golden Visa предоставляет соответствующим требованиям инвесторам греческий вид на жительство. Его значение выходит за рамки самой карты, однако его юридический статус необходимо понимать точно.",
    paragraphTwo:
      "Греческий вид на жительство не является гражданством ЕС и автоматически не предоставляет право жить или работать в другой стране ЕС. Права на поездки и проживание зависят от применимых правил.",
  },

  property: {
    eyebrow: "04 / НЕДВИЖИМОСТЬ",
    titleLineOne: "Соответствующий требованиям объект",
    titleLineTwo: "не обязательно является хорошей инвестицией.",
    description:
      "У объекта две задачи: он должен соответствовать применимым требованиям для получения вида на жительство и одновременно иметь инвестиционный смысл. Эти вопросы необходимо оценивать отдельно.",

    statement: {
      intro: "ВОПРОС СОСТОИТ НЕ ТОЛЬКО В ТОМ,",
      questionOne: "«Соответствует ли этот объект требованиям?»",
      transition: "Но также:",
      questionTwo: "«Стоит ли мне инвестировать в этот объект?»",
    },

    checks: {
      ownership: "Право собственности и титул",
      encumbrances: "Существующие обременения",
      planning: "Законность строительства и планировочного статуса",
      use: "Разрешённое использование",
      condition: "Техническое состояние",
      location: "Местоположение и рыночный контекст",
    },

    callout: {
      eyebrow: "ПОЧЕМУ ВАЖНА ПРОВЕРКА",
      title:
        "Соответствие иммиграционным требованиям и качество инвестиции — это два разных вопроса.",
      text:
        "Техническая проверка помогает выявить проблемы до того, как покупка превратится в проблему. Её следует проводить вместе с юридической и коммерческой оценкой.",
    },
  },

  process: {
    eyebrow: "05 / ПРОЦЕСС",
    title: "Ваш путь к Golden Visa — шаг за шагом.",
    description:
      "Процесс становится понятнее, когда каждый этап имеет чёткую цель и нужный специалист подключается в правильный момент.",

    items: {
      eligibility: {
        title: "Соответствие требованиям",
        text:
          "Определить, соответствуют ли ваше гражданство, обстоятельства и предполагаемая инвестиция действующим требованиям.",
      },
      strategy: {
        title: "Инвестиционная стратегия",
        text:
          "Выбрать инвестиционный маршрут и определить, каких целей должна достичь инвестиция.",
      },
      selection: {
        title: "Выбор недвижимости",
        text:
          "Найти объекты, которые одновременно соответствуют инвестиционной цели и требованиям Golden Visa.",
      },
      dueDiligence: {
        title: "Техническая проверка",
        text:
          "Проверить техническое состояние объекта, его законность, градостроительный статус и документацию.",
      },
      legal: {
        title: "Юридический и сделочный процесс",
        text:
          "Координировать юридические, нотариальные, налоговые требования и требования к передаче недвижимости.",
      },
      application: {
        title: "Заявление на ВНЖ",
        text:
          "Подготовить и подать заявление на получение вида на жительство с необходимыми подтверждающими документами.",
      },
      permit: {
        title: "Вид на жительство",
        text:
          "После одобрения заявления вид на жительство выдаётся в соответствии с установленной процедурой.",
      },
    },
  },

  family: {
    eyebrow: "06 / СЕМЬЯ",
    titleLineOne: "Инвестиция может быть связана",
    titleLineTwo: "не только с одним человеком.",
    description:
      "В зависимости от обстоятельств и применимых положений соответствующие требованиям члены семьи также могут воспользоваться возможностями проживания, связанными со статусом инвестора.",
    link: "Семья и будущее",
  },

  costs: {
    eyebrow: "07 / ПРАКТИЧЕСКИЕ АСПЕКТЫ",
    title: "Планируйте бюджет на весь процесс.",
    description:
      "Стоимость покупки — лишь одна часть финансовой картины. До принятия инвестиционного решения необходимо учитывать профессиональные и связанные со сделкой расходы.",

    items: {
      acquisition: "Расходы на приобретение недвижимости",
      taxes: "Налоги и регистрационные расходы",
      notarial: "Нотариальные и юридические услуги",
      dueDiligence: "Техническая проверка",
      application: "Сборы за оформление ВНЖ",
      insurance: "Страхование и подтверждающая документация",
    },

    warning: {
      title: "Не планируйте бюджет, исходя только из минимальной суммы инвестиции.",
      text:
        "Общий бюджет должен учитывать стоимость недвижимости, расходы по сделке, профессиональные услуги и конкретные требования выбранного маршрута.",
    },
  },

  faq: {
    eyebrow: "08 / ЧАСТЫЕ ВОПРОСЫ",
    title: "Несколько важных вопросов и ответов.",
    link: "Все часто задаваемые вопросы",

    items: {
      citizenship: {
        question: "Даёт ли Golden Visa гражданство ЕС?",
        answer:
          "Нет. Греческая Golden Visa является видом на жительство. Её нельзя представлять как гражданство ЕС или как автоматическое право жить и работать в другой стране ЕС.",
      },

      property: {
        question: "Могу ли я выбрать любую недвижимость в Греции?",
        answer:
          "Нет. Объект должен соответствовать законодательным требованиям применимого инвестиционного маршрута. Поэтому техническая и юридическая проверка имеет принципиальное значение.",
      },

      threshold: {
        question: "Является ли €250 000 общим порогом Golden Visa?",
        answer:
          "Нет. Сумма €250 000 применяется только к определённым инвестиционным маршрутам. Применимый порог зависит от структуры инвестиции, объекта и его местоположения.",
      },

      investment: {
        question:
          "Означает ли соответствие объекта требованиям автоматически, что это хорошая инвестиция?",
        answer:
          "Нет. Соответствие иммиграционным требованиям и качество инвестиции — два разных вопроса. Объект необходимо отдельно оценивать с юридической, технической, локационной и рыночной точек зрения.",
      },

      family: {
        question: "Может ли моя семья быть включена?",
        answer:
          "Соответствующие требованиям члены семьи могут воспользоваться применимыми семейными положениями. Конкретные обстоятельства и необходимые документы следует оценить до начала процесса.",
      },
    },
  },

  final: {
    eyebrow: "ГОТОВЫ СДЕЛАТЬ СЛЕДУЮЩИЙ ШАГ?",
    title: "Готовы понять свои возможности?",
    description:
      "Начните с проверки соответствия требованиям, определите инвестиционную стратегию и принимайте следующие решения, располагая необходимой информацией.",
    primaryButton: "Проверить соответствие требованиям",
    secondaryButton: "Записаться на частную консультацию",
  },

  disclaimer: {
    label: "Важная информация:",
    text:
      "Этот справочник предоставляется исключительно в информационных целях и не является юридической, налоговой или финансовой консультацией. Иммиграционное и инвестиционное законодательство Греции может меняться. Требования следует проверять по действующему законодательству и официальным разъяснениям на момент подачи заявления.",
    reviewed: "Информация актуализирована для 2026 года",
  },
},
    familyAndFuture: {
  hero: {
    imageAlt: "Семья проводит время вместе в Греции",
    eyebrow: "СЕМЬЯ И БУДУЩЕЕ",
    titleLineOne: "Будущее, в которое",
    titleLineTwo: "хочется возвращаться.",
    description:
      "Греция может стать не просто местом, где совершается инвестиция. Она может стать местом, где семейная жизнь развивается — вместе, естественно и с годами.",
    primaryButton: "Обсудить будущее вашей семьи",
    secondaryButton: "Проверить соответствие требованиям",
    bottomLabel: "ПОЧЕМУ ГРЕЦИЯ",
  },

  intro: {
    eyebrow: "ВО ЧТО ВЫ ДЕЙСТВИТЕЛЬНО ИНВЕСТИРУЕТЕ?",
    titleLineOne: "Не только недвижимость.",
    titleLineTwo: "Не только ВНЖ.",
    titleLineThree: "Место для следующего этапа.",
    description:
      "Для семей, рассматривающих Грецию, решение часто выходит далеко за рамки самой инвестиции. Речь идёт о европейской базе, возможности проводить больше значимого времени вместе и свободе по-новому представить своё будущее.",
  },

  life: {
    eyebrow: "ЖИЗНЬ ВМЕСТЕ",
    description:
      "Некоторые из самых ценных вещей в жизни невозможно измерить цифрами.",

    cards: {
      mornings: {
        imageAlt: "Семья наслаждается повседневной жизнью в Греции",
        title: "Утро, которое ощущается иначе.",
        text:
          "Долгие завтраки. Жизнь на свежем воздухе. И море, которое больше не кажется таким далёким.",
      },

      together: {
        imageAlt: "Семья проводит время вместе на открытом воздухе",
        title: "Больше времени вместе.",
        text:
          "От утра у воды до дня, проведённого в новом месте, Греция создаёт пространство для впечатлений, которые становятся семейными воспоминаниями.",
      },
    },
  },

  family: {
    eyebrow: "ВАША СЕМЬЯ МОЖЕТ СТАТЬ ЧАСТЬЮ ЭТОГО ПУТИ",
    titleLineOne: "Одно решение.",
    titleLineTwo: "Более широкий круг.",
    description:
      "В зависимости от применимых положений греческого иммиграционного законодательства и индивидуальных обстоятельств соответствующие требованиям члены семьи могут иметь возможность получить разрешения на проживание, связанные со статусом проживания инвестора.",

    cards: {
      spouse: {
        title: "Супруг / Партнёр",
        text:
          "Право на проживание может распространяться на соответствующего требованиям супруга или партнёра инвестора.",
      },

      children: {
        title: "Дети",
        text:
          "Соответствующие требованиям не состоящие в браке дети, отвечающие установленным возрастным условиям, могут быть включены.",
      },

      spouseChildren: {
        title: "Дети супруга / партнёра",
        text:
          "Некоторые дети супруга или партнёра также могут соответствовать требованиям при соблюдении применимых условий.",
      },

      ascendants: {
        title: "Прямые восходящие родственники",
        text:
          "Применимые положения также могут распространяться на соответствующих требованиям прямых восходящих родственников инвестора или супруга / партнёра.",
      },
    },

    legalNote:
      "Права членов семьи на проживание зависят от применимого греческого иммиграционного законодательства, подтверждающих документов и индивидуальных требований. Эта страница носит информационный характер и не является юридической консультацией.",
  },

  future: {
    imageAlt: "Семья смотрит на греческий пейзаж",
    imageLabel: "ГОДЫ, КОТОРЫЕ ИМЕЮТ ЗНАЧЕНИЕ",
    imageTitleLineOne: "Место может стать",
    imageTitleLineTwo: "частью истории вашей семьи.",

    timeline: {
      now: {
        label: "СЕЙЧАС",
        title: "Решение.",
        text:
          "Понять, что Греция может значить для вас и самых близких вам людей.",
      },

      next: {
        label: "ДАЛЬШЕ",
        title: "Переезд.",
        text:
          "Превратить тщательно продуманную инвестицию в практическую связь с Грецией.",
      },

      yearsAhead: {
        label: "В БУДУЩЕМ",
        title: "Воспоминания.",
        text:
          "Возвращаться в знакомые места, открывать новые и наблюдать, как ваши отношения с Грецией становятся глубже.",
      },

      beyond: {
        label: "ЗА ПРЕДЕЛАМИ",
        title: "Наследие.",
        text:
          "Место, которое может стать частью истории, которую ваша семья пронесёт дальше.",
      },
    },
  },

  statement: {
    eyebrow: "ДРУГОЙ ВИД ИНВЕСТИЦИИ",
    mainLineOne: "Можно инвестировать",
    mainLineTwo: "в недвижимость.",
    emphasis: "А можно инвестировать в то, что будет после.",
    description:
      "Место для встреч. Место, куда хочется возвращаться. Место, которое запомнят ваши дети.",
  },

  final: {
    eyebrow: "ВАША СЛЕДУЮЩАЯ ГЛАВА",
    titleLineOne: "Где вы хотите",
    titleLineTwo: "начать следующую главу?",
    description:
      "Если Греция является частью будущего вашей семьи, первый шаг — понять, какие возможности существуют именно в ваших обстоятельствах.",
    primaryButton: "Обсудить будущее вашей семьи",
    secondaryButton: "Проверить соответствие требованиям",
  },
},
    realEstatePotential: {
  common: {
    source: "Источник",
  },

  hero: {
    eyebrow: "ПОЧЕМУ ГРЕЦИЯ / ИНВЕСТИЦИОННЫЙ ПОТЕНЦИАЛ НЕДВИЖИМОСТИ",
    dataLabel: "РЫНОЧНЫЕ ДАННЫЕ · 2026",
    kicker: "РЫНОК НЕДВИЖИМОСТИ ГРЕЦИИ",
    titleLineOne: "Греция —",
    titleLineTwo: "в цифрах.",
    description:
      "Анализ рынка недвижимости Греции на основе данных о динамике цен, инвестициях, международном спросе и предложении жилья.",
    bottomLabel: "ИНВЕСТИЦИОННЫЙ ПОТЕНЦИАЛ НЕДВИЖИМОСТИ",
    updatedLabel: "ОБНОВЛЕНО В 2026 ГОДУ",
  },

  overview: {
    label: "РЫНОК В ШЕСТИ ПОКАЗАТЕЛЯХ",
    titleLineOne: "Рынок —",
    titleLineTwo: "в шести цифрах.",
    description:
      "Рынок недвижимости Греции больше нельзя характеризовать только восстановлением после спада. Рост цен, инвестиции в жильё и международный спрос продолжают формировать рынок, который становится всё более значимым для инвесторов.",
  },

  marketStats: {
    apartmentGrowth: {
      label: "РОСТ ЦЕН НА КВАРТИРЫ",
    },
    residentialInvestment: {
      label: "РОСТ ИНВЕСТИЦИЙ В ЖИЛУЮ НЕДВИЖИМОСТЬ",
    },
    travelReceipts: {
      label: "ТУРИСТИЧЕСКИЕ ПОСТУПЛЕНИЯ",
    },
    realEstateFdi: {
      label: "ПИИ В НЕДВИЖИМОСТЬ",
    },
    overnightStays: {
      label: "НОЧЁВКИ НЕРЕЗИДЕНТОВ",
    },
    investmentGdp: {
      label: "ИНВЕСТИЦИИ В ЖИЛЬЁ / ВВП",
    },
  },

  price: {
    label: "ДИНАМИКА ЦЕН",
    titleLineOne: "Цены продолжают",
    titleLineTwo: "расти.",
    description:
      "Цены на квартиры в Греции выросли на 5,7% в годовом выражении в первом квартале 2026 года. Темпы роста замедлились по сравнению со средним показателем 8,1% за 2025 год, однако рост сохраняется во всех основных географических категориях, отслеживаемых Банком Греции.",

    bigMetric: {
      label: "ГРЕЦИЯ · I КВАРТАЛ 2026",
      description: "Цены на квартиры · годовой рост",
      source: "Источник · Банк Греции · предварительные данные за I квартал 2026 года",
    },

    comparison: {
      title: "Греция и Европейский союз",
      annual: "ГОДОВОЕ ИЗМЕНЕНИЕ",
      greece: "Греция",
      eu: "Европейский союз",
      sourceGreece: "Греция · Банк Греции · I квартал 2026",
      sourceEu: "ЕС · Евростат · I квартал 2026",
    },

    regional: {
      label: "РЕГИОНАЛЬНАЯ ДИНАМИКА",
      title: "Рост был широким.",
      source: "Банк Греции · I квартал 2026",
      items: {
        otherAreas: "Другие регионы Греции",
        thessaloniki: "Салоники",
        otherCities: "Другие города",
        athens: "Афины",
      },
    },
  },

  capital: {
    label: "ФОРМИРОВАНИЕ КАПИТАЛА",
    titleLineOne: "Инвестиции",
    titleLineTwo: "возвращаются.",
    description:
      "Восстановление жилищного строительства и инвестиций является одним из наиболее очевидных сигналов того, что рынок жилья Греции выходит за рамки простого роста цен.",

    feature: {
      metricLabel: "ИНВЕСТИЦИИ В ЖИЛЬЁ",
      period: "IV КВАРТАЛ 2025 · ГОДОВОЙ РОСТ",
      whyLabel: "ПОЧЕМУ ЭТО ВАЖНО",
      title:
        "В жилой сектор экономики направляется всё больше капитала.",
      text:
        "Инвестиции в жилую недвижимость выросли на 41,2% в годовом выражении в IV квартале 2025 года и достигли 3,9% ВВП. Это указывает на существенное увеличение формирования капитала в жилищном секторе.",
      source: "Источник · Банк Греции / ELSTAT · IV квартал 2025",
    },

    cards: {
      gdp: {
        title: "ВВП",
        text:
          "Доля инвестиций в жилую недвижимость в ВВП Греции в IV квартале 2025 года.",
      },
      fdi: {
        title: "ПИИ В НЕДВИЖИМОСТЬ",
        text:
          "Прямые иностранные инвестиции в недвижимость Греции согласно данным Банка Греции.",
      },
      totalFdi: {
        title: "ОБЩЕГО ОБЪЁМА ПИИ",
        text:
          "Более 45% из €6 млрд притока прямых инвестиций в Грецию было направлено в сектор недвижимости.",
      },
    },
  },

  demand: {
    label: "СПРОС И ПРЕДЛОЖЕНИЕ",
    titleLineOne: "Спрос остаётся высоким.",
    titleLineTwo: "Предложение догоняет.",
    description:
      "Греция сочетает значительный международный спрос с предложением жилья, которое остаётся ниже среднего уровня по Европе. Вместе эти факторы помогают объяснить недавнюю динамику цен на рынке.",

    demandLabel: "СПРОС",
    supplyLabel: "ПРЕДЛОЖЕНИЕ",

    travelReceipts: "ТУРИСТИЧЕСКИЕ ПОСТУПЛЕНИЯ · 2025",
    overnightStays: "НОЧЁВКИ НЕРЕЗИДЕНТОВ · 2025",
    travellerGrowth: "РОСТ ВЪЕЗДНОГО ТУРИЗМА · 2025",

    sourceDemand:
      "Источник · Банк Греции · данные о туристических услугах за 2025 год",

    euAverage: "ОТ СРЕДНЕГО ПО ЕС",

    supplyTitle:
      "Инвестиции в жильё остаются структурно ограниченными.",
    supplyText:
      "Европейская комиссия отмечает, что предложение жилья ограничено годами низких темпов инвестиций в жилищный сектор. Рост начался только с 2020 года, а текущий уровень остаётся примерно на отметке 60% от среднего показателя по ЕС.",

    sourceSupply:
      "Источник · Европейская комиссия · Доклад по Греции за 2026 год",
  },

  athens: {
    label: "АФИНЫ В ЕВРОПЕЙСКОМ КОНТЕКСТЕ",
    titleLineOne: "Афины в",
    titleLineTwo: "европейском контексте.",
    description:
      "Стоимость объектов премиальной жилой недвижимости в Афинах остаётся ниже показателей ряда крупных европейских столиц согласно World Cities Prime Residential Index компании Savills за 2025 год.",

    chartLabel: "СТОИМОСТЬ ПРЕМИАЛЬНОЙ ЖИЛОЙ НЕДВИЖИМОСТИ",
    source: "Savills Research · 2025",

    cities: {
      paris: "Париж",
      milan: "Милан",
      rome: "Рим",
      lisbon: "Лиссабон",
      athens: "Афины",
      berlin: "Берлин",
      madrid: "Мадрид",
    },

    disclaimer:
      "Стоимость премиальной жилой недвижимости является сравнительным рыночным показателем, а не средней ценой сделки с жилой недвижимостью.",
  },

  risk: {
    label: "СБАЛАНСИРОВАННЫЙ ВЗГЛЯД",
    titleLineOne: "Сильные сигналы.",
    titleLineTwo: "Избирательные решения.",
    description:
      "Данные формируют убедительную картину рынка, но не отменяют необходимости тщательного выбора объекта, финансового анализа и технической проверки.",

    notice: {
      label: "ВАЖНЫЙ РЫНОЧНЫЙ КОНТЕКСТ",
      title:
        "Рост рынка не означает, что каждый объект является хорошей инвестицией.",
      text:
        "Европейская комиссия отмечает ухудшение доступности жилья и признаки переоценённости в недавней динамике цен. Поэтому общерыночные показатели необходимо сочетать с анализом конкретного объекта до принятия инвестиционного решения.",
      source:
        "Источник · Европейская комиссия · Доклад по Греции за 2026 год",
    },
  },

  signals: {
    priceMomentum: {
      title: "ДИНАМИКА ЦЕН",
      text:
        "Цены на квартиры в Греции продолжили расти в первом квартале 2026 года, хотя темпы были ниже, чем в наиболее сильные годы недавнего рыночного цикла.",
    },
    capitalFormation: {
      title: "ФОРМИРОВАНИЕ КАПИТАЛА",
      text:
        "Инвестиции в жилую недвижимость резко выросли в IV квартале 2025 года, достигнув 3,9% ВВП.",
    },
    internationalDemand: {
      title: "МЕЖДУНАРОДНЫЙ СПРОС",
      text:
        "Поступления от путешествий достигли нового максимума в 2025 году, что подчёркивает значение международного спроса для экономики Греции.",
    },
  },

  final: {
    markerOne: "ИНВЕСТИЦИОННЫЙ ПОТЕНЦИАЛ НЕДВИЖИМОСТИ",
    markerTwo: "СЛЕДУЮЩИЙ ШАГ",
    titleLineOne: "Рынок рассказывает",
    titleLineTwo: "только половину истории.",
    description:
      "Рыночные данные помогают определить, где существует потенциал. Но подходящий объект требует гораздо более глубокого анализа — от технического состояния и документации до местоположения, стоимости и инвестиционной целесообразности.",
    primaryButton: "Запросить проверку объекта",
    secondaryButton: "Проверить соответствие требованиям",
  },
},
    gatewayToEurope: {
  hero: {
    eyebrow: "ПОЧЕМУ ГРЕЦИЯ / ВОРОТА В ЕВРОПУ",
    titleLineOne: "Европейская база.",
    titleLineTwo: "Средиземноморская жизнь.",
    description:
      "Греция предлагает признанную европейскую базу, сочетающую характер, связь с другими регионами и образ жизни Средиземноморья.",
    facts: {
      eu: "ЧЛЕН ЕС",
      schengen: "ШЕНГЕНСКАЯ ЗОНА",
      mediterranean: "СРЕДИЗЕМНОМОРЬЕ",
    },
    bottom: "ВОРОТА В ЕВРОПУ",
    imageAlt: "Греция и Средиземноморье",
  },

  position: {
    label: "ПОЛОЖЕНИЕ",
    titleLineOne: "Европа,",
    titleLineTwo: "совсем рядом.",
    description:
      "Греция находится в естественной точке пересечения Европы и Средиземноморья, сочетая европейскую инфраструктуру с самобытным греческим образом жизни.",
    quoteLabel: "ПОЛОЖЕНИЕ ГРЕЦИИ",
    quoteLineOne: "Европейская по своей системе.",
    quoteLineTwo: "Средиземноморская по своему характеру.",
    paragraphOne:
      "Для международного инвестора Греция предлагает необычно сбалансированное сочетание: доступ к европейской среде без потери того образа жизни и географического характера, которые делают страну особенной.",
    paragraphTwo:
      "В результате место проживания в Греции естественным образом соединяет два мира — Европу и Средиземноморье.",

    facts: {
      eu: {
        title: "Европейский союз",
        text:
          "Греция является членом Европейского союза, поэтому проживание в стране находится в рамках установленной европейской правовой и институциональной системы.",
      },
      schengen: {
        title: "Шенгенская зона",
        text:
          "Греция входит в Шенгенскую зону, что позволяет лицам, имеющим соответствующие права, путешествовать по Шенгенской зоне в соответствии с действующими правилами.",
      },
      mediterranean: {
        title: "Положение в Средиземноморье",
        text:
          "Греция сочетает европейскую транспортную и деловую связанность со стратегическим положением на пересечении Европы и Средиземноморья.",
      },
    },
  },

  document: {
    sectionLabel: "ВИД НА ЖИТЕЛЬСТВО",
    intro:
      "За концепцией европейской базы стоит нечто вполне материальное: официальное проживание в Греции, подтверждённое видом на жительство.",
    imageAlt: "Официальный образец греческого электронного вида на жительство",
    captionLabel: "ОФИЦИАЛЬНЫЙ ОБРАЗЕЦ",
    captionTitle: "ГРЕЧЕСКИЙ ЭЛЕКТРОННЫЙ ВИД НА ЖИТЕЛЬСТВО",
    titleLineOne: "Вид на",
    titleLineTwo: "жительство.",
    lead:
      "Право проживания в конечном итоге оформляется посредством официального греческого вида на жительство.",
    body:
      "Карта является лишь видимым результатом гораздо более широкого процесса, включающего проверку соответствия требованиям, инвестиции, документацию, техническую проверку и профессиональную координацию.",
    note:
      "Изображение официального образца опубликовано Министерством миграции и убежища Греции. Это иллюстративный образец, который не представляет конкретного заявителя.",
  },

  residence: {
    watermark: "ПРОЖИВАНИЕ",
    sectionLabel: "ЧТО ДАЁТ ПРОЖИВАНИЕ",
    kicker: "БОЛЕЕ ШИРОКИЙ ГОРИЗОНТ",
    titleLineOne: "Вид на жительство",
    titleLineTwo: "с более широкими возможностями.",
    description:
      "Значение греческого ВНЖ выходит за рамки самой карты. Он создаёт практическую связь с Грецией, одновременно помещая вас в более широкий европейский контекст.",
    featureLabel: "ЧТО СОЗДАЁТ ВИД НА ЖИТЕЛЬСТВО",
    featureEyebrow: "ПРАКТИЧЕСКАЯ ЕВРОПЕЙСКАЯ БАЗА",
    featureTitleLineOne: "Проживание в Греции.",
    featureTitleLineTwo: "Возможности за её пределами.",

    points: {
      base: {
        title: "БАЗА В ГРЕЦИИ",
        text:
          "Признанное право проживания в Греции создаёт для вас понятную европейскую базу, сохраняя в центре средиземноморский образ жизни.",
      },
      connectivity: {
        title: "ЕВРОПЕЙСКАЯ СВЯЗАННОСТЬ",
        text:
          "Положение Греции в европейской и шенгенской системах делает более широкий регион практически доступным в соответствии с действующими правилами.",
      },
      connection: {
        title: "ДОЛГОСРОЧНАЯ СВЯЗЬ",
        text:
          "Для многих инвесторов проживание — это не просто документ. Это возможность создать долгосрочную связь с Грецией и её возможностями.",
      },
    },

    importantLabel: "ВАЖНОЕ РАЗЛИЧИЕ",
    importantText:
      "Вид на жительство в Греции не является гражданством ЕС и автоматически не предоставляет права жить или работать в другой стране ЕС. Права на поездки и проживание регулируются действующими правилами.",
  },

  process: {
    sectionLabel: "ЧТО СТОИТ ЗА ВИДОМ НА ЖИТЕЛЬСТВО",
    titleLineOne: "Разрешение — это результат.",
    titleLineTwo: "Сначала идёт процесс.",
    description:
      "Успешная заявка зависит не только от подачи документов. Инвестиция, объект недвижимости и подтверждающая документация должны быть тщательно изучены и согласованы.",

    steps: {
      eligibility: {
        title: "СООТВЕТСТВИЕ ТРЕБОВАНИЯМ",
        text:
          "Определите, соответствуют ли ваши обстоятельства применимой системе требований для проживания.",
      },
      investment: {
        title: "ИНВЕСТИЦИЯ",
        text:
          "Определите и оцените подходящий инвестиционный маршрут и возможность приобретения недвижимости.",
      },
      dueDiligence: {
        title: "ТЕХНИЧЕСКАЯ ПРОВЕРКА",
        text:
          "Проверьте объект недвижимости, документацию и технические аспекты до принятия решения.",
      },
      coordination: {
        title: "КООРДИНАЦИЯ",
        text:
          "Координируйте работу задействованных юридических, технических и административных специалистов.",
      },
      residence: {
        title: "ПРОЖИВАНИЕ",
        text:
          "Перейдите к оформлению заявления и процедуре получения вида на жительство.",
      },
    },
  },

  final: {
    sectionLabel: "ВАША ЕВРОПЕЙСКАЯ БАЗА",
    titleLineOne: "Начните с Греции.",
    titleLineTwo: "Смотрите шире.",
    description:
      "Правильное решение начинается с понимания страны, системы проживания и инвестиции, которая лежит в её основе.",
    primaryButton: "Обсудить инвестицию",
    secondaryButton: "Проверить соответствие требованиям",
  },
},
    mediterraneanLifestyle: {
  images: {
    hero: "Средиземноморское побережье Греции",
    coast: "Греческое побережье",
    village: "Греческая деревня",
    mountains: "Греческие горы",
    cityLife: "Городская жизнь в Греции",
    athens: "Образ жизни в Афинах",
    crete: "Образ жизни на Крите",
    peloponnese: "Образ жизни на Пелопоннесе",
    islands: "Образ жизни на греческих островах",
    beach: "Греческий пляж и Средиземное море",
    boat: "Лодка в греческом Средиземном море",
    food: "Греческая кухня",
    table: "Греческий обеденный стол",
    market: "Греческий продуктовый рынок",
    family: "Семья, наслаждающаяся жизнью в Греции",
    closing: "Средиземноморский закат в Греции",
  },

  hero: {
    eyebrow: "ПОЧЕМУ ГРЕЦИЯ / СРЕДИЗЕМНОМОРСКИЙ ОБРАЗ ЖИЗНИ",
    titleLineOne: "Здесь жизнь измеряют",
    titleLineTwo: "не часами.",
    description:
      "Греция предлагает образ жизни, сформированный климатом, побережьем, кухней, сообществом, культурой и удивительным разнообразием мест, которые можно назвать своим домом.",
    button: "Открыть для себя этот образ жизни",
    location: "ЭГЕЙСКОЕ МОРЕ / СРЕДИЗЕМНОМОРЬЕ",
    country: "ГРЕЦИЯ",
  },

  intro: {
    label: "БОЛЬШЕ, ЧЕМ ПРОСТО МЕСТО НАЗНАЧЕНИЯ",
    titleLineOne: "Людей привлекает",
    titleLineTwo: "не только погода.",
    paragraphOne:
      "Привлекательность Греции выходит далеко за рамки климата. Именно сочетание ландшафтов, кухни, общественной жизни, культуры, отдыха на открытом воздухе и близости к морю формирует особый повседневный ритм.",
    paragraphTwo:
      "И поскольку Греция — это не одна единая среда, этот образ жизни может сильно различаться в зависимости от того, где именно вы проводите время.",
    mosaic: {
      coast: "ПОБЕРЕЖЬЕ",
      localLife: "МЕСТНАЯ ЖИЗНЬ",
      landscape: "ЛАНДШАФТ",
      cityLife: "ГОРОДСКАЯ ЖИЗНЬ",
    },
  },

  day: {
    label: "ОДИН ДЕНЬ В ГРЕЦИИ",
    titleLineOne: "Представьте обычный",
    titleLineTwo: "день здесь.",
    description:
      "Проще всего понять средиземноморский образ жизни, если перестать воспринимать его как отпуск и представить его частью повседневной жизни.",
    moments: {
      morning: {
        label: "УТРО",
        title: "Начните не спеша.",
        text:
          "Кофе на свежем воздухе. Прогулка по району. Море, площадь или пекарня совсем рядом.",
      },
      everyday: {
        label: "ПОВСЕДНЕВНАЯ ЖИЗНЬ",
        title: "Жизнь на открытом воздухе становится нормой.",
        text:
          "Средиземноморский климат делает открытые пространства частью обычной жизни, а не чем-то, что бывает только во время отпуска.",
      },
      afternoon: {
        label: "ДЕНЬ",
        title: "Не спешите.",
        text:
          "Обед может превратиться в повод провести время вместе, после чего можно искупаться, прогуляться или просто побыть с семьёй и друзьями.",
      },
      sea: {
        label: "МОРЕ",
        title: "Побережье рядом.",
        text:
          "Во многих частях Греции связь между городами, населёнными пунктами и побережьем является одной из определяющих черт повседневной жизни.",
      },
      evening: {
        label: "ВЕЧЕР",
        title: "Вечер проходит на улице.",
        text:
          "Ужин, разговоры и прогулка могут продолжаться далеко за вечер, когда улицы и набережные оживают.",
      },
      night: {
        label: "НОЧЬ",
        title: "Останьтесь ещё немного.",
        text:
          "От оживлённой столицы до тихой островной деревни — греческие вечера могут иметь совершенно разный характер.",
      },
    },
  },

  locations: {
    label: "ОДНА СТРАНА / МНОЖЕСТВО ОБРАЗОВ ЖИЗНИ",
    titleLineOne: "Место проживания",
    titleLineTwo: "меняет впечатления.",
    description:
      "В одной стране Греция предлагает совершенно разные условия для жизни. Столичный ритм Афин сильно отличается от жизни в прибрежном городе, островном сообществе или горной деревне.",
    select: "ВЫБЕРИТЕ МЕСТО",
    items: {
      athens: {
        name: "Афины",
        subtitle: "ЭНЕРГИЯ ГОРОДА",
        description:
          "Столица, где древнее наследие, современная культура, бизнес, рестораны и повседневная городская жизнь существуют бок о бок.",
        tags: ["Культура", "Бизнес", "Гастрономия", "Городская жизнь"],
      },
      crete: {
        name: "Крит",
        subtitle: "ОСТРОВНАЯ ЖИЗНЬ",
        description:
          "Большой остров со своим ритмом, объединяющий пляжи, горы, деревни, сельское хозяйство, кухню и устойчивые местные сообщества.",
        tags: ["Море", "Природа", "Кухня", "Сообщество"],
      },
      peloponnese: {
        name: "Пелопоннес",
        subtitle: "ПОБЕРЕЖЬЕ И ПРОВИНЦИЯ",
        description:
          "Прибрежные города, исторические ландшафты, горы и более спокойный ритм делают Пелопоннес одним из самых разнообразных регионов Греции.",
        tags: ["Побережье", "История", "Природа", "Простор"],
      },
      islands: {
        name: "Острова",
        subtitle: "ДРУГОЙ РИТМ",
        description:
          "От хорошо связанных с материком направлений до тихих островов — каждый из них предлагает особую связь с морем и местной жизнью.",
        tags: ["Море", "Уединение", "Сообщество", "Отдых"],
      },
    },
  },

  sea: {
    label: "СРЕДИЗЕМНОМОРЬЕ",
    titleLineOne: "Море — это не",
    titleLineTwo: "просто пейзаж.",
    description:
      "Для большей части Греции побережье вплетено в ритм повседневной жизни. Купание, парусный спорт, прогулки у воды, рыбацкие деревни и рестораны у моря — не обязательно особые события, а часть привычного уклада.",
    stats: {
      beaches: "ПЛЯЖИ BLUE FLAG",
      ranking: "В МИРЕ В 2025 ГОДУ",
      islands: "ОСТРОВА И ОСТРОВКИ",
    },
  },

  food: {
    label: "ЕДА / СООБЩЕСТВО",
    titleLineOne: "Еда — часть",
    titleLineTwo: "этого ритма.",
    description:
      "Греческая кухня тесно связана с местом, сезонностью, местными продуктами и общественной жизнью. Приём пищи часто становится возможностью замедлиться и провести время вместе.",
    points: {
      regional: {
        title: "Региональная идентичность",
        text:
          "От островных кухонь до материковых деревень ингредиенты и традиции различаются от региона к региону.",
      },
      produce: {
        title: "Местные продукты",
        text:
          "Оливковое масло, овощи, морепродукты, травы и другие местные продукты занимают центральное место в греческой кухне.",
      },
      table: {
        title: "Время за столом",
        text:
          "Совместная трапеза часто связана с разговорами и общением не меньше, чем с самой едой.",
      },
    },
  },

  seasons: {
    label: "ЗА ПРЕДЕЛАМИ ЛЕТА",
    titleLineOne: "Греция — это не",
    titleLineTwo: "только август.",
    description:
      "Страна городов, островов, гор и деревень естественным образом меняется вместе с временами года. Меняются и впечатления.",
    items: {
      spring: {
        name: "Весна",
        description:
          "Мягкая погода, зелёные пейзажи, кафе на открытом воздухе и начало долгого сезона жизни вне помещений.",
      },
      summer: {
        name: "Лето",
        description:
          "Долгие дни, купание, жизнь у моря и вечера, которые естественным образом проходят на открытом воздухе.",
      },
      autumn: {
        name: "Осень",
        description:
          "Ритм становится спокойнее, при этом во многих частях страны по-прежнему комфортно проводить время на открытом воздухе.",
      },
      winter: {
        name: "Зима",
        description:
          "Другая Греция — города, горы, деревни, кухня и культурная жизнь за пределами летнего сезона.",
      },
    },
  },

  outdoor: {
    label: "ЖИЗНЬ НА ОТКРЫТОМ ВОЗДУХЕ",
    titleLineOne: "Ландшафт",
    titleLineTwo: "становится частью жизни.",
    description:
      "География Греции создаёт необычное разнообразие впечатлений на относительно небольших расстояниях: побережье, острова, горы, сельская местность и городские центры.",
    facts: {
      coast: "ЖИЗНЬ У МОРЯ",
      mountains: "ГОРНЫЕ ЛАНДШАФТЫ",
      towns: "ИСТОРИЧЕСКИЕ ГОРОДА",
    },
  },

  investor: {
    label: "ПОЧЕМУ ЭТО ВАЖНО",
    titleLineOne: "Решение о проживании",
    titleLineTwo: "также является решением об образе жизни.",
    description:
      "Для международного инвестора выбор Греции — это не обязательно только получение права на проживание. Это также может быть место, куда хочется возвращаться, страна для путешествий и среда, в которой могут развиваться семейная и личная жизнь.",
    points: {
      return: {
        title: "Место, куда можно возвращаться",
        text:
          "Ваша связь с Грецией может выходить далеко за рамки самой сделки.",
      },
      lifestyles: {
        title: "Разные способы жить",
        text:
          "Город, побережье, острова и сельская местность предлагают действительно разные впечатления.",
      },
      experience: {
        title: "Страна, которую можно исследовать",
        text:
          "Греция открывается гораздо шире одного отдельного направления.",
      },
    },
    button: "Изучить инвестиционные варианты",
  },

  closing: {
    label: "ГРЕЧЕСКИЙ ОБРАЗ ЖИЗНИ",
    titleLineOne: "Возможно, настоящая",
    titleLineTwo: "инвестиция — это время.",
    description:
      "Откройте для себя Грецию не просто как место назначения, а как страну, где можно проводить больше времени.",
    button: "Поговорить с консультантом",
  },

  legal: {
    title: "Информационная заметка.",
    text:
      "Информация об образе жизни и направлениях предоставляется исключительно в общих информационных целях. Условия в конкретных местах, доступность, климат, услуги и пригодность недвижимости различаются. Любое инвестиционное решение или решение о проживании следует рассматривать отдельно от информации об образе жизни и оценивать с учётом действующего законодательства и индивидуальных обстоятельств.",
  },
},
    compareOptions: {
  hero: {
    eyebrow: "СРАВНИТЕ ВАРИАНТЫ",
    titleLineOne: "Не каждому инвестору",
    titleLineTwo: "подходит",
    titleAccent: "один и тот же путь.",
    description:
      "Подходящая инвестиция для Золотой визы — это не только заявленный порог. Сравните основные подходы по владению, простоте, гибкости и диверсификации, прежде чем определить дальнейшее направление.",
    primaryButton: "Сравнить подходы",
    secondaryButton: "Обсудить с консультантом",
    side: {
      investment: "ИНВЕСТИЦИЯ",
      decision: "РЕШЕНИЕ",
      framework: "ПОДХОД",
    },
  },

  compass: {
    label: "ОРИЕНТИР ДЛЯ ИНВЕСТОРА",
    titleLineOne: "Начните с того,",
    titleLineTwo: "что важно для вас.",
    description:
      "У разных инвесторов разные приоритеты. Выберите один из них ниже и посмотрите, как три подхода выглядят с этой точки зрения.",
    priorityLabel: "ВАШ ПРИОРИТЕТ",
    optimisingFor: "ПРИОРИТЕТ",
    fit: {
      strong: "ВЫСОКАЯ СОВМЕСТИМОСТЬ",
      possible: "ВОЗМОЖНАЯ СОВМЕСТИМОСТЬ",
      lower: "МЕНЬШАЯ СОВМЕСТИМОСТЬ",
    },
    priorities: {
      ownership: {
        label: "Владение недвижимостью",
        description:
          "Вы хотите, чтобы результатом инвестиции стала материальная недвижимость, которой вы владеете.",
      },
      simplicity: {
        label: "Простота",
        description:
          "Вы предпочитаете структуру, которую легче понять и которой проще управлять.",
      },
      flexibility: {
        label: "Гибкость",
        description:
          "Вы хотите иметь больше возможностей рассматривать различные инвестиционные структуры.",
      },
      diversification: {
        label: "Диверсификация",
        description:
          "Вы хотите избежать концентрации инвестиционной стратегии на одном традиционном объекте недвижимости.",
      },
    },
    note:
      "Эти показатели предназначены только для поддержки принятия решения и не являются юридическими, финансовыми или инвестиционными рейтингами. Подходящий маршрут зависит от индивидуальных обстоятельств инвестора и применимого законодательства.",
  },

  options: {
    property: {
      eyebrow: "ПОКУПКА НЕДВИЖИМОСТИ",
      title: "Владейте активом.",
      description:
        "Традиционный подход к недвижимости для инвесторов, которые хотят построить стратегию Золотой визы вокруг материального объекта.",
      asset: "Жилая недвижимость",
      involvement: "Низкая — средняя",
      focus: "Владение недвижимостью",
      diligence: "Недвижимость, право собственности и документация",
      bestFor:
        "Инвесторы, которые хотят иметь греческую недвижимость как часть своей инвестиции.",
      linkLabel: "Посмотреть объекты",
    },

    strategic: {
      eyebrow: "СТРАТЕГИЧЕСКАЯ НЕДВИЖИМОСТЬ",
      title: "Выбирайте стратегически.",
      description:
        "Более избирательный подход, при котором объект рассматривается как часть более широкой инвестиционной стратегии, а не просто как отдельное предложение.",
      asset: "Подобранный объект недвижимости",
      involvement: "Средняя",
      focus: "Инвестиционная стратегия + недвижимость",
      diligence: "Недвижимость + инвестиционная оценка",
      bestFor:
        "Инвесторы, готовые более тщательно подходить к выбору объекта недвижимости.",
      linkLabel: "Стратегические варианты",
    },

    alternative: {
      eyebrow: "АЛЬТЕРНАТИВНАЯ ИНВЕСТИЦИЯ",
      title: "Смотрите за пределы недвижимости.",
      description:
        "Для инвесторов, рассматривающих соответствующие требованиям инвестиционные структуры за пределами традиционной покупки жилой недвижимости.",
      asset: "Соответствующая требованиям инвестиционная структура",
      involvement: "Зависит от структуры",
      focus: "Альтернативное инвестиционное направление",
      diligence: "Инвестиция, провайдер и структура",
      bestFor:
        "Инвесторы, которые не обязательно хотят строить свою стратегию вокруг традиционной недвижимости.",
      linkLabel: "Изучить альтернативы",
    },
  },

  comparison: {
    label: "В ОБЩИХ ЧЕРТАХ",
    titleLineOne: "Три подхода.",
    titleLineTwo: "Разные приоритеты.",
    description:
      "Сравнение ниже рассматривает сам инвестиционный подход, а не только установленный законом порог.",
    table: {
      decisionFactor: "ФАКТОР РЕШЕНИЯ",
      coreAsset: "Основной актив",
      ownership: "Владение",
      primaryFocus: "Основной фокус",
      involvement: "Степень участия",
      dueDiligence: "Due diligence",
      bestSuited: "Для кого подходит",
    },
    values: {
      direct: "Прямое",
      structureDependent: "Зависит от структуры",
    },
  },

  tradeOffs: {
    label: "КОМПРОМИССЫ",
    titleLineOne: "У каждой инвестиции",
    titleLineTwo: "есть свои компромиссы.",
    description:
      "Хорошее решение заключается не в поиске варианта без недостатков. Важно понимать, что каждый подход даёт вам — и что он требует от вас взамен.",
    gainTitle: "Вы получаете",
    tradeTitle: "Вы принимаете",
    items: {
      property: {
        title: "Покупка недвижимости",
        gains: [
          "Владение материальным активом",
          "Понятная инвестиционная структура",
          "Возможность личного использования",
        ],
        trades: [
          "Требования, связанные с конкретным местоположением",
          "Юридическая и техническая проверка недвижимости",
          "Концентрация капитала в отдельном активе",
        ],
      },
      strategic: {
        title: "Стратегическая недвижимость",
        gains: [
          "Более избирательный отбор объектов",
          "Процесс покупки, основанный на стратегии",
          "Анализ конкретной инвестиционной возможности",
        ],
        trades: [
          "Больше решений со стороны инвестора",
          "Более глубокая проверка",
          "Потенциально более длительный процесс выбора",
        ],
      },
      alternative: {
        title: "Альтернативная инвестиция",
        gains: [
          "Другая структура инвестиционного участия",
          "Возможность диверсификации",
          "Отсутствие необходимости в традиционной покупке недвижимости",
        ],
        trades: [
          "Другие характеристики инвестиционного риска",
          "Проверка провайдера и структуры",
          "Менее материальный характер владения",
        ],
      },
    },
  },

  threshold: {
    label: "МЕСТО ПОРОГА В ОБЩЕЙ КАРТИНЕ",
    titleLineOne: "Сумма —",
    titleLineTwo: "лишь одна переменная.",
    description:
      "Инвестиционные пороги имеют значение, однако их следует оценивать вместе с местоположением, характеристиками недвижимости, условиями квалификации и вашей общей инвестиционной стратегией.",
    linkLabel: "Посмотреть инвестиционные требования",
    steps: {
      "250k":
        "Определённые категории квалифицирующих инвестиций и соответствующие обстоятельства.",
      "400k":
        "Применимые инвестиционные зоны и условия квалификации.",
      "800k":
        "Определённые территории с повышенным порогом и применимые требования к недвижимости.",
    },
    note:
      "Всегда проверяйте применимый порог и условия квалификации для конкретной инвестиции до принятия обязательства.",
  },

  framework: {
    label: "ВАШЕ РЕШЕНИЕ",
    titleLineOne: "Маршрут определяется",
    titleLineTwo: "стратегией.",
    description:
      "Прежде чем выбирать инвестиционную структуру, сначала определите, чего именно вы хотите достичь.",
    steps: {
      objective: {
        label: "ЦЕЛЬ",
        question: "Чего вы хотите достичь?",
      },
      asset: {
        label: "АКТИВ",
        question: "Каким вы хотите видеть свой актив?",
      },
      location: {
        label: "МЕСТОПОЛОЖЕНИЕ",
        question: "Где эта стратегия имеет смысл?",
      },
      structure: {
        label: "СТРУКТУРА",
        question: "Какая квалифицирующая структура подходит?",
      },
      review: {
        label: "ПРОВЕРКА",
        question: "Что необходимо проверить?",
      },
    },
    statement:
      "Сначала стратегия. Затем маршрут. Проверка — всегда.",
  },

  personas: {
    label: "ЧТО БЛИЖЕ ВАМ?",
    titleLineOne: "Начните с того,",
    titleLineTwo: "где вы сейчас.",
    description:
      "Вам не обязательно знать ответ до разговора с консультантом. Это лишь отправные точки, которые помогут понять, какое направление стоит рассмотреть внимательнее.",
    items: {
      property: {
        quoteLineOne: "«Я хочу недвижимость,",
        quoteLineTwo: "которой могу владеть и понимать её.»",
        description:
          "Традиционная покупка недвижимости может быть естественной отправной точкой.",
        linkLabel: "Посмотреть объекты",
      },
      strategic: {
        quoteLineOne: "«Я хочу, чтобы мне помогли",
        quoteLineTwo: "определить правильную стратегию.»",
        description:
          "Более избирательная стратегия покупки недвижимости может заслуживать дальнейшего рассмотрения.",
        linkLabel: "Стратегические варианты",
      },
      alternative: {
        quoteLineOne: "«Я не обязательно хочу, чтобы моя",
        quoteLineTwo: "инвестиция была связана с недвижимостью.»",
        description:
          "Альтернативную инвестиционную структуру, соответствующую требованиям, может иметь смысл изучить.",
        linkLabel: "Изучить альтернативы",
      },
    },
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Перед тем как",
    titleLineTwo: "принять решение.",
    description:
      "Несколько вопросов, которые инвесторы часто задают перед тем, как определить направление дальнейшего исследования.",
    items: {
      bestOption: {
        question: "Какой инвестиционный вариант является лучшим?",
        answer:
          "Универсально лучшего варианта не существует. Подход зависит от ваших целей, доступного капитала, предпочтительного актива, местоположения, желаемого уровня участия и требований, применимых к выбранному маршруту Золотой визы.",
      },
      threshold: {
        question:
          "Должен ли я в первую очередь сравнивать пороги €250K, €400K и €800K?",
        answer:
          "Не сами по себе. Для недвижимости применимое инвестиционное требование может зависеть, в частности, от местоположения, характеристик объекта и структуры квалифицирующей инвестиции. Порог следует оценивать вместе с остальными аспектами стратегии.",
      },
      advisor: {
        question:
          "Могу ли я определить инвестиционный маршрут после разговора с консультантом?",
        answer:
          "Да. Во многих случаях полезнее сначала определить ваши цели и обстоятельства, а затем установить, какой инвестиционный подход стоит изучить подробнее.",
      },
      alternativeDueDiligence: {
        question:
          "Означает ли выбор альтернативной инвестиции, что due diligence не требуется?",
        answer:
          "Нет. Проверка не исчезает — меняется её содержание. В случае альтернативных инвестиций внимание может сместиться на инвестиционную структуру, провайдера, документацию, характеристики риска и конкретные требования выбранного квалифицирующего маршрута.",
      },
    },
  },

  cta: {
    label: "НЕ УВЕРЕНЫ, КАКОЕ НАПРАВЛЕНИЕ ПОДХОДИТ?",
    titleLineOne: "Начните с вашей",
    titleLineTwo: "инвестиционной цели.",
    description:
      "Расскажите, чего вы хотите достичь, и мы поможем понять, какой инвестиционный подход стоит рассмотреть подробнее.",
    button: "Забронировать частную консультацию",
  },

  legal: {
    important: "Важно:",
    text:
      "Данное сравнение предоставляется исключительно в общих информационных целях. Оно не является юридической, налоговой, иммиграционной, финансовой или инвестиционной консультацией. Соответствие инвестиции целям инвестора и право на Золотую визу зависят от конкретной инвестиции, обстоятельств заявителя, применимого законодательства и документации, действующих на соответствующий момент.",
  },
},
    alternativeInvestments: {
  hero: {
    eyebrow: "АЛЬТЕРНАТИВНЫЕ ИНВЕСТИЦИИ",
    titleLineOne: "Ваш капитал может войти в Грецию",
    titleLineTwo: "без покупки недвижимости.",
    description:
      "Изучите финансовые инвестиционные маршруты, доступные в рамках системы ВНЖ для инвесторов в Греции — от соответствующих требованиям фондов и государственных облигаций Греции до регулируемых инвестиционных структур.",
    primaryButton: "Изучить инвестиционные маршруты",
    secondaryButton: "Обсудить инвестицию",
    thresholds: {
      entry: "НАЧАЛЬНЫЙ",
      core: "ОСНОВНОЙ",
      premium: "ПРЕМИАЛЬНЫЙ",
      caption: "ИНВЕСТИЦИОННЫЕ ПОРОГИ",
    },
    meta: {
      capital: "КАПИТАЛ",
      greece: "ГРЕЦИЯ",
      residence: "ВНЖ",
    },
  },

  intro: {
    label: "МАРШРУТ — ЭТО ИНВЕСТИЦИЯ",
    titleLineOne: "Главный вопрос",
    titleLineTwo: "не только в сумме.",
    description:
      "Важно, куда направляется капитал, как структурирована инвестиция, во что она инвестирует, кто ею управляет или где она хранится и соответствует ли выбранная структура применимым требованиям системы ВНЖ.",
    principles: {
      capital: {
        label: "01 / КАПИТАЛ",
        title: "Сколько?",
        text:
          "Установленный законом инвестиционный порог — это отправная точка, а не вся оценка.",
      },
      structure: {
        label: "02 / СТРУКТУРА",
        title: "Во что именно?",
        text:
          "Акции, облигации, фонды, депозиты и другие структуры могут иметь совершенно разные требования.",
      },
      regulation: {
        label: "03 / РЕГУЛИРОВАНИЕ",
        title: "Кто управляет?",
        text:
          "Инвестиционный инструмент, эмитент, учреждение или управляющая структура должны соответствовать применимой системе.",
      },
      retention: {
        label: "04 / СОХРАНЕНИЕ",
        title: "Что должно сохраняться?",
        text:
          "Требования к владению, хранению и подтверждающим документам имеют значение и после первоначального инвестирования.",
      },
    },
  },

  routes: {
    label: "ИНВЕСТИЦИОННЫЕ МАРШРУТЫ",
    titleLineOne: "Разные структуры.",
    titleLineTwo: "Разные требования.",
    description:
      "Финансовый маршрут следует определить до принятия инвестором обязательств по вложению капитала. Эти категории помогают понять доступные варианты.",
    tabs: {
      all: "Все маршруты",
    },
    groups: {
      market: {
        label: "РЫНОЧНЫЕ ИНВЕСТИЦИИ",
      },
      managed: {
        label: "ФОНДЫ И УПРАВЛЯЕМЫЕ СТРУКТУРЫ",
      },
      structured: {
        label: "ПРЯМОЙ / СТРУКТУРИРОВАННЫЙ КАПИТАЛ",
      },
    },
    items: {
      listedSecurities: {
        title: "Котируемые ценные бумаги",
        description:
          "Соответствующие требованиям акции, корпоративные и/или государственные облигации Греции, обращающиеся на регулируемых рынках или многосторонних торговых площадках, действующих в Греции.",
        tagOne: "Котируемые ценные бумаги",
        tagTwo: "Регулируемый рынок",
      },
      governmentBonds: {
        title: "Государственные облигации Греции",
        description:
          "Соответствующая требованиям инвестиция в государственные облигации Греции с минимальной стоимостью приобретения €500 000 и оставшимся сроком погашения не менее трёх лет на момент покупки.",
        tagOne: "Государственные облигации",
        tagTwo: "Срок 3+ года",
      },
      mutualFunds: {
        title: "Соответствующие требованиям взаимные фонды",
        description:
          "Структуры взаимных фондов, соответствующие установленным законом требованиям, включая применимые требования к активам и инвестициям.",
        tagOne: "Взаимные фонды",
        tagTwo: "Регулируемая структура",
      },
      alternativeInvestmentOrganisations: {
        title: "Организации альтернативных инвестиций",
        description:
          "Соответствующие требованиям структуры альтернативных инвестиций, отвечающие установленным законом условиям и инвестирующие исключительно в Грецию.",
        tagOne: "Структура AIF",
        tagTwo: "Фокус на Греции",
      },
      greekCompanyInvestment: {
        title: "Инвестиции в греческую компанию",
        description:
          "Соответствующее требованиям внесение капитала в недавно выпущенные акции или облигации подходящей греческой компании с соблюдением применимых условий.",
        tagOne: "Корпоративный капитал",
        tagTwo: "Новый выпуск",
      },
      greekRealEstateInvestmentCompanies: {
        title: "Греческие компании инвестиций в недвижимость",
        description:
          "Соответствующее требованиям внесение капитала в подходящую греческую структуру инвестиционной компании в сфере недвижимости, действующую в рамках применимой системы.",
        tagOne: "REIC",
        tagTwo: "Недвижимость Греции",
      },
      ventureCapitalStructures: {
        title: "Венчурные инвестиционные структуры",
        description:
          "Соответствующие требованиям структуры E.K.E.S. или A.K.E.S., отвечающие применимым условиям и инвестирующие исключительно в компании, присутствующие в Греции.",
        tagOne: "Венчурный капитал",
        tagTwo: "Греческий бизнес",
      },
      fixedTermDeposit: {
        title: "Срочный депозит",
        description:
          "Соответствующий требованиям срочный депозит в греческом кредитном учреждении с соблюдением применимых требований к сроку, продлению и документации.",
        tagOne: "Греческое кредитное учреждение",
        tagTwo: "Фиксированный срок",
      },
    },
    qualifyingRoute: "СООТВЕТСТВУЮЩИЙ МАРШРУТ",
    discuss: "Обсудить",
  },

  amount: {
    label: "ОДНА СУММА. РАЗНЫЕ ИНВЕСТИЦИИ.",
    titleLineOne: "€350 000",
    titleLineTwo: "не всегда означают одно и то же.",
    description:
      "Две инвестиции могут иметь одинаковую стоимость, но совершенно разные юридические характеристики. Размер инвестиции — лишь одна часть оценки.",
    checks: {
      underlyingAssets: "Базовые активы имеют значение.",
      fundManager: "Соответствие фонда или управляющего имеет значение.",
      regulatoryStatus: "Регуляторный статус имеет значение.",
      holdingDocumentation:
        "Владение и подтверждающие документы имеют значение.",
    },
  },

  process: {
    label: "ОТ СТРАТЕГИИ К ВНЖ",
    titleLineOne: "Как работает",
    titleLineTwo: "финансовый маршрут.",
    description:
      "Соответствующая требованиям инвестиция не выбирается просто из списка. Маршрут необходимо понять, проверить и правильно документировать.",
    items: {
      objective: {
        title: "Определить цель",
        text:
          "Понять, что именно рассматривает инвестор: ценные бумаги, управляемые фонды, инвестиции в греческий бизнес, государственные облигации, депозиты или другую соответствующую требованиям структуру.",
      },
      eligibleRoute: {
        title: "Определить подходящий маршрут",
        text:
          "Сопоставить предполагаемую стратегию с соответствующей установленной законом категорией и инвестиционным порогом.",
      },
      structure: {
        title: "Проверить структуру",
        text:
          "Подтвердить соответствие фонда, организации, эмитента, посредника, условий хранения и применимых регуляторных требований.",
      },
      execute: {
        title: "Осуществить инвестицию",
        text:
          "Осуществить инвестицию через соответствующее финансовое учреждение или посредника в соответствии с применимыми требованиями.",
      },
      document: {
        title: "Документировать и сохранять",
        text:
          "Инвестиция и её последующее сохранение должны иметь возможность подтверждаться документально в течение соответствующего процесса получения ВНЖ.",
      },
    },
  },

  approach: {
    label: "НАШ ПОДХОД",
    titleLineOne: "Мы не считаем, что",
    titleLineTwo: "Золотая виза должна",
    titleHighlight: "определять вашу инвестиционную стратегию.",
    description:
      "Цель не в том, чтобы направить инвестора к первому доступному продукту, соответствующему требованиям. Подходящий маршрут зависит от целей, допустимого риска, требований к ликвидности и общей инвестиционной стратегии — при этом требования к ВНЖ рассматриваются одновременно с этими факторами.",
    button: "Обсудить инвестиционную стратегию",
  },

  review: {
    label: "ДО НАЧАЛА ИНВЕСТИРОВАНИЯ",
    titleLineOne: "Структура должна",
    titleLineTwo: "иметь смысл.",
    description:
      "Мы сосредотачиваемся на факторах, которые определяют, может ли предполагаемая финансовая инвестиция действительно поддерживать стратегию получения ВНЖ.",
    points: {
      structure: {
        title: "Структура",
        text:
          "Действительно ли инвестиционный инструмент относится к соответствующей установленной законом категории?",
      },
      eligibility: {
        title: "Соответствие требованиям",
        text:
          "Соответствуют ли фонд, организация, эмитент или инструмент необходимым требованиям?",
      },
      custody: {
        title: "Хранение",
        text:
          "Где хранится инвестиция и каким образом её можно документально подтвердить?",
      },
      evidence: {
        title: "Подтверждение",
        text:
          "Можно ли надлежащим образом подтвердить инвестицию и продолжение владения ею?",
      },
    },
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Перед тем как",
    titleLineTwo: "инвестировать капитал.",
    description:
      "Финансовые инвестиционные маршруты могут выглядеть простыми на бумаге. Именно детали определяют соответствие требованиям.",
    items: {
      withoutProperty: {
        question: "Можно ли получить Золотую визу без покупки недвижимости?",
        answer:
          "Да. Система ВНЖ для инвесторов в Греции включает соответствующие требованиям финансовые инвестиционные маршруты помимо недвижимости. Конкретная инвестиция должна соответствовать установленным законом условиям выбранного маршрута.",
      },
      differentThresholds: {
        question:
          "Почему для одних финансовых маршрутов требуется €350K, а для других €500K?",
        answer:
          "Инвестиционные пороги различаются в зависимости от конкретной установленной законом категории и характеристик инвестиции. Сама сумма не определяет соответствие требованиям.",
      },
      everyFund: {
        question: "Соответствует ли требованиям любой инвестиционный фонд?",
        answer:
          "Нет. Фонд или инвестиционная организация должны соответствовать требованиям, установленным для конкретной категории. Само наличие инвестиционной возможности на €350 000 или €500 000 не означает автоматически, что она подходит для Золотой визы.",
      },
      governmentBonds: {
        question: "Можно ли инвестировать в государственные облигации Греции?",
        answer:
          "Определённые инвестиции в государственные облигации Греции могут соответствовать действующей системе при соблюдении требуемой суммы инвестиций, срока погашения и других установленных законом условий.",
      },
      keepInvestment: {
        question: "Нужно ли сохранять инвестицию?",
        answer:
          "Соответствующая требованиям инвестиция и её последующее сохранение должны подтверждаться в соответствии с требованиями применимого инвестиционного маршрута. Конкретные условия различаются в зависимости от категории.",
      },
      existingPortfolio: {
        question: "Может ли мой существующий инвестиционный портфель подойти?",
        answer:
          "Это зависит от структуры, времени осуществления, стоимости, эмитента, инвестиционного инструмента и других требований конкретного маршрута. Существующие инвестиции следует оценивать индивидуально, а не считать автоматически соответствующими требованиям.",
      },
      saferThanProperty: {
        question:
          "Являются ли финансовые инвестиции более безопасными, чем покупка недвижимости?",
        answer:
          "Соответствие требованиям Золотой визы и инвестиционный риск — это разные вопросы. Финансовые инвестиции могут нести рыночные, риски ликвидности и риски эмитента, тогда как недвижимость имеет собственные юридические, технические, рыночные и транзакционные риски.",
      },
    },
  },

  cta: {
    label: "ДРУГОЙ КАПИТАЛ. ТА ЖЕ ЦЕЛЬ.",
    titleLineOne: "Найдите маршрут,",
    titleLineTwo: "соответствующий вашей стратегии.",
    description:
      "Давайте определим, какая инвестиционная структура соответствует вашим целям и как к ней применяются соответствующие требования Золотой визы.",
    button: "Обсудить инвестиционную стратегию",
  },

  legal: {
    title: "Юридическая информация.",
    text:
      "Инвестиционные категории и пороги, представленные на этой странице, предоставляются исключительно в общих информационных целях и не являются юридической, налоговой, иммиграционной, финансовой или инвестиционной консультацией. Соответствие требованиям зависит от конкретной инвестиционной структуры, обстоятельств заявителя, необходимой документации и законодательства, действующего на соответствующий момент. Финансовые инвестиции могут быть связаны с рыночными рисками, рисками ликвидности, рисками эмитента и другими инвестиционными рисками.",
  },
},
    strategicOpportunities: {
  hero: {
    eyebrow: "СТРАТЕГИЧЕСКИЕ ВОЗМОЖНОСТИ В НЕДВИЖИМОСТИ",
    titleLineOne: "Подходящий объект",
    titleLineTwo: "не всегда",
    titleLineThree: "самый очевидный.",
    description:
      "Некоторые возможности требуют большего, чем сравнение фотографий, цен и местоположения. Мы рассматриваем сам объект, предполагаемую стратегию и применимый маршрут Золотой визы в совокупности, прежде чем рассматривать инвестицию как потенциально реализуемую.",
    primaryButton: "Изучить возможности",
    secondaryButton: "Обсудить возможность",
    aside: {
      strategy: "СТРАТЕГИЯ",
      property: "НЕДВИЖИМОСТЬ",
      execution: "РЕАЛИЗАЦИЯ",
    },
  },

  positioning: {
    label: "НЕ ПРОСТО БОЛЕЕ ДЕШЁВАЯ НЕДВИЖИМОСТЬ",
    titleLineOne: "Стратегическая ценность",
    titleLineTwo: "обычно скрыта в деталях.",
    paragraphOne:
      "Стратегический объект требует особого подхода к оценке. Возможность может быть связана с изменением назначения, восстановлением, перепозиционированием или местоположением, которое имеет смысл для определённого инвестиционного маршрута.",
    paragraphTwo:
      "Это также означает, что риски необходимо понять до того, как рассматривать такую возможность как инвестицию.",
    cards: {
      opportunity: {
        label: "ВОЗМОЖНОСТЬ",
        title: "Смотрите дальше объявления.",
        text:
          "Мы оцениваем не только то, как объект представлен сегодня, но и то, каким он может стать.",
      },
      feasibility: {
        label: "РЕАЛИЗУЕМОСТЬ",
        title: "Действительно ли стратегия осуществима?",
        text:
          "Предлагаемые изменения назначения, восстановление или перепозиционирование требуют технической и юридической проверки.",
      },
      documentation: {
        label: "ДОКУМЕНТАЦИЯ",
        title: "Документы имеют значение.",
        text:
          "Право собственности, градостроительный статус и документация объекта являются частью инвестиционной оценки.",
      },
      route: {
        label: "МАРШРУТ",
        title: "Соотнесите объект с маршрутом.",
        text:
          "Применимый маршрут Золотой визы необходимо определить до того, как объект можно будет рассматривать как соответствующий требованиям.",
      },
    },
  },

  categories: {
    label: "ЧТО МЫ ИЩЕМ",
    titleLineOne: "Разные объекты.",
    titleLineTwo: "Разные стратегии.",
    description:
      "Стратегические возможности оцениваются с учётом того, что делает объект интересным и какие действия необходимы для превращения его потенциала в реальную инвестицию.",
    cards: {
      conversion: {
        label: "01 / ИЗМЕНЕНИЕ НАЗНАЧЕНИЯ",
        titleLineOne: "Из нежилого",
        titleLineTwo: "в жилой объект.",
        text:
          "Объекты, где изменение назначения может быть частью инвестиционной стратегии при соблюдении применимых градостроительных и юридических требований.",
        footer: "МОЖЕТ ПРИМЕНЯТЬСЯ МАРШРУТ €250K",
      },
      restoration: {
        label: "02 / ВОССТАНОВЛЕНИЕ",
        titleLineOne: "Характерные объекты,",
        titleLineTwo: "которые стоит восстановить.",
        text:
          "Исторические или охраняемые здания, где восстановление или реконструкция являются частью инвестиционной концепции.",
        footer: "МОЖЕТ ПРИМЕНЯТЬСЯ МАРШРУТ €250K",
      },
      location: {
        label: "03 / МЕСТОПОЛОЖЕНИЕ",
        titleLineOne: "Возможности,",
        titleLineTwo: "основанные на локации.",
        text:
          "Объекты, для которых местоположение, рыночное позиционирование и применимый инвестиционный порог необходимо рассматривать вместе.",
        footer: "ЗАВИСИТ ОТ МАРШРУТА",
      },
    },
  },

  assessment: {
    label: "ИНВЕСТИЦИОННЫЙ ВОПРОС",
    titleLineOne: "Интересный объект",
    titleLineTwo: "не означает",
    titleHighlight: "реализуемый.",
    description:
      "Стратегическая возможность становится полезной только тогда, когда предполагаемая инвестиция выдерживает техническую, юридическую и связанную с конкретным маршрутом проверку.",
    items: {
      asset: {
        title: "Объект и местоположение",
        text:
          "Что именно приобретается, где расположен объект и почему местоположение имеет значение для предполагаемого маршрута?",
      },
      condition: {
        title: "Текущее состояние",
        text:
          "Что физически существует сегодня и какие работы потребуются для реализации предполагаемой инвестиционной стратегии?",
      },
      documentation: {
        title: "Разрешённое использование и документация",
        text:
          "Назначение объекта, градостроительный статус, структура права собственности и подтверждающая документация должны соответствовать предполагаемой сделке.",
      },
      route: {
        title: "Маршрут Золотой визы",
        text:
          "Только после понимания объекта и его конкретных обстоятельств следует оценивать применимый инвестиционный маршрут.",
      },
    },
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Стратегический",
    titleLineTwo: "не значит спекулятивный.",
    description:
      "Важные вопросы, которые стоит задать до того, как рассматривать потенциально интересный объект как инвестиционную возможность.",
    items: {
      strategicOpportunity: {
        question: "Что делает объект стратегической возможностью?",
        answer:
          "Стратегическая возможность выбирается не только потому, что объект привлекателен или доступен. Интерес может представлять конкретное местоположение, тип актива, возможность изменения назначения, восстановления или перепозиционирования, которые требуют более детального изучения инвестиционного сценария.",
      },
      route250: {
        question:
          "Подходит ли объект стоимостью €250K автоматически для Золотой визы?",
        answer:
          "Нет. Порог €250K применяется к определённым категориям в рамках действующей системы, включая соответствующие случаи изменения назначения и восстановления или реконструкции определённых исторических зданий. Конкретный объект, сделка и необходимые условия должны быть индивидуально проверены до приобретения.",
      },
      technicalChecks: {
        question:
          "Почему техническая проверка особенно важна для стратегических объектов?",
        answer:
          "Потому что инвестиционный сценарий может зависеть от обстоятельств, которые не видны в объявлении: разрешённого использования, градостроительного статуса, состояния здания, площади, документации, уже выполненных работ и возможности фактической реализации предлагаемой стратегии.",
      },
      ownProperty: {
        question:
          "Могу ли я передать на стратегическую проверку найденный мной объект?",
        answer:
          "Да. Если вы самостоятельно нашли объект, вы можете отправить его нам на рассмотрение. Цель — понять, насколько объект соответствует предполагаемой стратегии Золотой визы, до принятия обязательств.",
      },
    },
  },

  cta: {
    label: "НАШЛИ ЧТО-ТО ИНТЕРЕСНОЕ?",
    titleLineOne: "Принесите нам",
    titleLineTwo: "этот объект.",
    description:
      "Если вы самостоятельно нашли необычный объект, возможность изменения назначения или объект, требующий восстановления, отправьте информацию нам. Мы поможем определить, что необходимо проверить до принятия обязательств.",
    button: "Запросить стратегическую проверку",
  },

  legal: {
    title: "Юридическая информация.",
    text:
      "Информация на этой странице предоставляется исключительно в общих информационных целях и не является юридической, налоговой, иммиграционной или инвестиционной консультацией. Указанные инвестиционные маршруты и суммы εξαρτώνται από конкретный объект, структуру сделки, обстоятельства заявителя и законодательство, действующее на соответствующий момент. До приобретения необходима независимая юридическая и техническая проверка.",
  },
},
    readyProperties: {
  hero: {
    eyebrow: "ГОТОВАЯ К ЗАСЕЛЕНИЮ НЕДВИЖИМОСТЬ",
    titleLineOne: "Найдите объект.",
    titleLineTwo: "Затем проверьте инвестицию.",
    description:
      "Изучите готовые объекты недвижимости, подходящие инвесторам, рассматривающим Золотую визу Греции через инвестиции в недвижимость. Каждый объект необходимо проверить с учётом применимого инвестиционного маршрута до принятия обязательств.",
    primaryButton: "Изучить недвижимость",
    secondaryButton: "Запросить проверку объекта",
    meta: {
      investment: "ИНВЕСТИЦИЯ",
      property: "НЕДВИЖИМОСТЬ",
      greece: "ГРЕЦИЯ",
    },
  },

  intro: {
    label: "НЕ ПРОСТО ЕЩЁ ОДНО ОБЪЯВЛЕНИЕ",
    titleLineOne: "Объект может выглядеть подходящим",
    titleLineTwo: "и всё же требовать проверки.",
    paragraphOne:
      "Цена предложения — лишь одна часть инвестиции в недвижимость для Золотой визы. Значение имеют местоположение, характеристики объекта, право собственности, документация и применимый инвестиционный маршрут.",
    paragraphTwo:
      "Поэтому наш подход начинается с инвестиционной стратегии, а не просто с демонстрации объектов недвижимости.",
  },

  strategy: {
    location: {
      label: "МЕСТОПОЛОЖЕНИЕ",
      title: "Где?",
      text:
        "Местоположение может определить применимый инвестиционный порог и маршрут.",
    },
    property: {
      label: "НЕДВИЖИМОСТЬ",
      title: "Что?",
      text:
        "Характеристики объекта должны соответствовать предполагаемому инвестиционному маршруту.",
    },
    route: {
      label: "МАРШРУТ",
      title: "Какой?",
      text:
        "Выбранный маршрут определяет условия, которым необходимо соответствовать.",
    },
    review: {
      label: "ПРОВЕРКА",
      title: "Проверьте.",
      text:
        "Объект следует проверить до принятия обязательств по сделке.",
    },
  },

  collection: {
    label: "КОЛЛЕКЦИЯ НЕДВИЖИМОСТИ",
    titleLineOne: "Изучите доступные",
    titleLineTwo: "возможности.",
    description:
      "Фильтруйте коллекцию по местоположению, инвестиционному маршруту или типу недвижимости. Каждый объект всё равно необходимо индивидуально проверить до приобретения.",
    opportunity: "вариант",
    opportunities: "вариантов",
  },

  filters: {
    title: "НАЙДИТЕ СВОЙ ОБЪЕКТ",
    mobileButton: "Фильтры",
    clear: "Очистить фильтры",
    searchPlaceholder: "Поиск по региону или объекту...",
    searchAriaLabel: "Поиск недвижимости",
    clearSearch: "Очистить поиск",
    locationLabel: "МЕСТОПОЛОЖЕНИЕ",
    routeLabel: "ИНВЕСТИЦИОННЫЙ МАРШРУТ",
    typeLabel: "ТИП НЕДВИЖИМОСТИ",

    locations: {
      all: "Все регионы",
      attica: "Аттика",
      peloponnese: "Пелопоннес",
      crete: "Крит",
      centralMacedonia: "Центральная Македония",
    },

    routes: {
      all: "Все маршруты",
      twoFifty: "€250 000",
      fourHundred: "€400 000",
      eightHundred: "€800 000",
      lifestyle: "Инвестиция для образа жизни",
      notVerified: "Пока не проверено",
    },

    types: {
      all: "Все типы недвижимости",
      apartment: "Апартаменты",
      residence: "Резиденция",
      villa: "Вилла",
      land: "Земельный участок",
      commercial: "Коммерческая недвижимость",
    },
  },

  results: {
    showing: "Показано",
    property: "объект",
    properties: "объектов",
    filtered: "Отфильтрованная коллекция",
  },

  propertyCard: {
    routeNotVerified: "Маршрут требует проверки",
    routeSuffix: "маршрут",
    reviewButton: "Запросить проверку объекта",
  },

  empty: {
    label: "НЕТ СОВПАДЕНИЙ",
    title: "Подходящие объекты не найдены.",
    description:
      "Попробуйте изменить регион, инвестиционный маршрут или тип недвижимости.",
    button: "Очистить все фильтры",
  },

  collectionNote: {
    important: "Важно:",
    text:
      "Доступность недвижимости, цены и соответствие требованиям Золотой визы могут измениться. Каждый объект необходимо проверить с учётом действующего законодательства, инвестиционного маршрута и необходимой документации до его приобретения.",
  },

  review: {
    label: "ДО ПРИНЯТИЯ ОБЯЗАТЕЛЬСТВ",
    titleLineOne: "Нашли объект",
    titleLineTwo: "в другом месте?",
    description:
      "Вам не обязательно выбирать недвижимость из нашей коллекции. Если вы уже нашли объект в Греции, вы можете запросить его проверку до дальнейших действий.",
    button: "Запросить проверку объекта",
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Перед тем как",
    titleLineTwo: "выбрать объект.",
    description:
      "Важные вопросы, которые следует рассмотреть, прежде чем считать объект подходящей инвестицией для Золотой визы.",
    items: {
      automaticEligibility: {
        question:
          "Гарантирует ли размещение объекта на этой странице его соответствие требованиям Золотой визы?",
        answer:
          "Нет. Представление объекта как возможности для получения Золотой визы не заменяет необходимые юридические, технические и сделочные проверки. Каждый объект необходимо оценить с учётом применимого инвестиционного маршрута до приобретения.",
      },
      reviewBeforePurchase: {
        question:
          "Можно ли проверить объект до принятия решения о покупке?",
        answer:
          "Да. Инвестор может запросить проверку объекта до принятия обязательств по сделке, чтобы оценить его с учётом предполагаемого маршрута Золотой визы.",
      },
      readyToMove: {
        question: "Что означает «готовый к заселению»?",
        answer:
          "Это означает завершённый или в значительной степени завершённый жилой объект, а не проект, требующий ремонта или стратегии реконструкции.",
      },
      propertyElsewhere: {
        question:
          "Можете ли вы помочь, если я уже нашёл недвижимость в другом месте?",
        answer:
          "Да. Вам не обязательно выбирать объект из этой коллекции. Вы можете запросить проверку недвижимости, которую нашли самостоятельно.",
      },
    },
  },

  cta: {
    label: "ГОТОВЫ РАССМАТРИВАТЬ СЕРЬЁЗНО?",
    titleLineOne: "Уже выбрали",
    titleLineTwo: "объект?",
    description:
      "Отправьте нам информацию об объекте, и мы поможем определить, что необходимо проверить до принятия инвестиционных обязательств.",
    button: "Связаться с консультантом",
  },

  legal: {
    title: "Юридическая информация.",
    text:
      "Информация о недвижимости на этой странице предоставляется исключительно в общих информационных целях и не является юридической, налоговой, иммиграционной или инвестиционной консультацией. Соответствие требованиям Золотой визы зависит от конкретного объекта, инвестиционного маршрута, обстоятельств заявителя и законодательства, действующего в соответствующий период.",
  },
},
    programJourney: {
  hero: {
    eyebrow: "ВАШ ПУТЬ К ЗОЛОТОЙ ВИЗЕ",
    titleLineOne: "От первого решения",
    titleLineTwo: "до вида на жительство.",
    description:
      "Подача заявления — лишь одна часть пути. Узнайте, что происходит до, во время и после инвестиции и на каких этапах особенно важны правильные решения.",
    primaryButton: "Изучить процесс",
    secondaryButton: "Проверить соответствие",
    meta: {
      program: "ПРОГРАММА",
      application: "ПОДАЧА ЗАЯВЛЕНИЯ",
      journey: "ПРОЦЕСС",
    },
  },

  intro: {
    label: "ОБЩАЯ КАРТИНА",
    titleLineOne: "Подача заявления — лишь",
    titleLineTwo: "одна часть пути.",
    paragraphOne:
      "Инвестиция для получения Золотой визы начинается задолго до подачи заявления. Выбранный маршрут, объект недвижимости и проверки, проведённые до сделки, могут повлиять на дальнейший процесс.",
    paragraphTwo:
      "Наша задача — связать эти этапы в единый процесс, чтобы инвестиция рассматривалась комплексно, а не как последовательность отдельных несвязанных задач.",
  },

  journey: {
    label: "ПУТЬ ИНВЕСТОРА",
    titleLineOne: "Шесть этапов.",
    titleLineTwo: "Единый процесс.",
    description:
      "Каждое заявление индивидуально. Ниже представлены основные этапы, через которые инвестор может пройти при оформлении Золотой визы Греции.",

    steps: {
      strategy: {
        label: "СТРАТЕГИЯ",
        title: "Определите исходную точку.",
        text:
          "До начала поиска недвижимости мы определяем ваше соответствие требованиям, инвестиционные цели, предпочтительный регион и маршрут Золотой визы, который может соответствовать вашей ситуации.",
        outcome: "Более ясная инвестиционная стратегия",
      },
      investment: {
        label: "ИНВЕСТИЦИЯ",
        title: "Найдите подходящий объект.",
        text:
          "Поиск следует начинать с требований выбранного маршрута. Регион, тип недвижимости, структура инвестиции и бюджет имеют значение ещё до того, как объект будет признан подходящим.",
        outcome: "Объект, соответствующий вашей стратегии",
      },
      dueDiligence: {
        label: "DUE DILIGENCE",
        title: "Проверьте всё до обязательств.",
        text:
          "До продолжения сделки объект должен быть проверен. Необходимо оценить технические характеристики, информацию о собственности и условия, относящиеся к выбранному маршруту Золотой визы.",
        outcome: "Более обоснованное инвестиционное решение",
      },
      transaction: {
        label: "СДЕЛКА",
        title: "Правильно организуйте сделку.",
        text:
          "После подтверждения соответствия объекта необходимые специалисты координируют юридические, технические, нотариальные и финансовые аспекты, необходимые для завершения инвестиции.",
        outcome: "Завершённая квалифицирующая инвестиция",
      },
      application: {
        label: "ЗАЯВЛЕНИЕ",
        title: "Подготовьте и подайте заявление.",
        text:
          "Необходимая документация формируется с учётом инвестиционного маршрута и обстоятельств заявителя, после чего заявление на вид на жительство подаётся в компетентный орган.",
        outcome: "Полный пакет документов",
      },
      residence: {
        label: "ВИД НА ЖИТЕЛЬСТВО",
        title: "Двигайтесь дальше уверенно.",
        text:
          "После прохождения процедуры подачи заявления и соответствующих административных этапов вид на жительство может быть выдан при соблюдении применимых требований.",
        outcome: "Вид на жительство в Греции",
      },
    },
  },

  dueDiligence: {
    visual: {
      label: "ИНВЕСТИЦИОННАЯ",
      title: "ПРОВЕРКА",
    },
    nodes: {
      program: "ПРОГРАММА",
      property: "НЕДВИЖИМОСТЬ",
      documents: "ДОКУМЕНТЫ",
      review: "ПРОВЕРКА",
    },
    label: "ИНВЕСТИЦИОННАЯ ПРОВЕРКА",
    titleLineOne: "Проверьте всё",
    titleLineTwo: "до обязательств.",
    description:
      "Один из наиболее важных моментов процесса наступает до завершения сделки. Объект должен быть проверен с учётом условий, имеющих значение для выбранного маршрута Золотой визы.",
    checks: {
      technical: "Технические характеристики",
      ownership: "Информация о собственности и объекте",
      route: "Требования инвестиционного маршрута",
      documentation: "Документация по сделке",
    },
    note:
      "Конкретный перечень проверок зависит от объекта, инвестиционного маршрута и индивидуальных обстоятельств.",
  },

  decisions: {
    label: "ВАЖНЫЕ МОМЕНТЫ",
    titleLineOne: "Путь — это не только",
    titleLineTwo: "последовательность этапов.",
    description:
      "На разных этапах инвестор принимает решения, которые могут повлиять на дальнейший процесс.",
    items: {
      route: {
        title: "Какой инвестиционный маршрут вам подходит?",
        text:
          "Маршруты €250 000, €400 000 и €800 000 имеют разные квалифицирующие условия. Правильная отправная точка зависит от вашей ситуации и предполагаемой инвестиции.",
      },
      property: {
        title: "Действительно ли объект подходит?",
        text:
          "Цена сама по себе не определяет соответствие объекта. Значение могут иметь местоположение, назначение, структура собственности и технические характеристики.",
      },
      transaction: {
        title: "Следует ли продолжать сделку?",
        text:
          "Важное решение принимается до завершения покупки. Необходимые проверки следует провести до принятия обязательств по инвестиции.",
      },
      application: {
        title: "Готово ли заявление?",
        text:
          "Инвестиция — лишь одна часть заявления. Сопроводительные документы и подтверждения также должны соответствовать применимым требованиям.",
      },
    },
  },

  responsibilities: {
    label: "КТО ЗА ЧТО ОТВЕЧАЕТ",
    titleLineOne: "Вы принимаете решения.",
    titleLineTwo: "Мы координируем процесс.",
    groups: {
      yourRole: {
        title: "ВАША РОЛЬ",
        items: {
          itemOne: "Определить инвестиционные цели",
          itemTwo: "Предоставить необходимые личные данные",
          itemThree: "Выбрать инвестиционный объект",
          itemFour: "Утвердить сделку",
          itemFive: "Выполнить необходимые подписи и платежи",
        },
      },
      ourRole: {
        title: "НАША РОЛЬ",
        items: {
          itemOne: "Помочь определить подходящую инвестиционную стратегию",
          itemTwo: "Сопровождать процесс оценки недвижимости",
          itemThree: "Координировать техническую проверку",
          itemFour: "Координировать работу с соответствующими специалистами",
          itemFive: "Помочь организовать процесс подачи заявления",
        },
      },
    },
  },

  team: {
    label: "ПРОФЕССИОНАЛЬНАЯ КОМАНДА",
    titleLineOne: "Одна инвестиция.",
    titleLineTwo: "Согласованная команда.",
    description:
      "Сделка по Золотой визе может включать нескольких специалистов. Координация помогает связать технические, юридические, финансовые и административные аспекты процесса.",
    center: {
      label: "ВАША",
      title: "ИНВЕСТИЦИЯ",
    },
    members: {
      civilEngineer: {
        title: "Инженер-строитель",
        text: "Техническая оценка и техническая проверка недвижимости.",
      },
      lawyer: {
        title: "Юрист",
        text: "Юридическая проверка и вопросы, связанные со сделкой.",
      },
      notary: {
        title: "Нотариус",
        text: "Документы по сделке и необходимые сертификаты.",
      },
      accountant: {
        title: "Бухгалтер",
        text: "Финансовая и налоговая координация.",
      },
    },
  },

  delays: {
    label: "ЧТО МОЖЕТ ЗАМЕДЛИТЬ ПРОЦЕСС",
    titleLineOne: "Подготовка имеет значение",
    titleLineTwo: "до подачи заявления.",
    description:
      "Не каждую задержку можно контролировать. Однако понимание возможных сложностей помогает инвестору подготовиться более эффективно.",
    items: {
      documentation: {
        title: "Документация",
        text:
          "Отсутствующие, устаревшие или неправильно подготовленные документы могут привести к ненужным задержкам.",
      },
      property: {
        title: "Недвижимость",
        text:
          "Проблемы, обнаруженные в ходе юридической или технической проверки, могут потребовать уточнений или дополнительной работы.",
      },
      transaction: {
        title: "Сделка",
        text:
          "Договоры, платежи, регистрации и сертификаты могут включать нескольких участников и несколько этапов.",
      },
      administration: {
        title: "Административные процедуры",
        text:
          "Сроки обработки могут различаться в зависимости от заявления и нагрузки компетентных органов.",
      },
    },
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Перед тем как",
    titleLineTwo: "начать.",
    description:
      "Несколько практических вопросов, которые инвесторы часто задают о процессе получения Золотой визы.",
    items: {
      choosePropertyFirst: {
        question: "Нужно ли выбрать недвижимость до начала процесса?",
        answer:
          "Нет. Полезно сначала определить ваше соответствие требованиям и доступные инвестиционные маршруты, прежде чем принимать обязательства по покупке недвижимости. Это позволяет вести поиск с учётом требований, которые имеют значение именно для вашей ситуации.",
      },
      beforePurchase: {
        question: "Что происходит до покупки недвижимости?",
        answer:
          "Объект и сделка должны быть проверены с учётом требований выбранного инвестиционного маршрута. В зависимости от объекта и обстоятельств это может включать технические, юридические и другие проверки.",
      },
      technicalDueDiligence: {
        question: "Почему важна техническая проверка недвижимости?",
        answer:
          "Объект может выглядеть подходящим по цене и местоположению, но при этом требовать дополнительной технической оценки. Проверка соответствующих характеристик до завершения инвестиции помогает выявить возможные проблемы на более раннем этапе.",
      },
      whoIsInvolved: {
        question: "Кто участвует в процессе?",
        answer:
          "В зависимости от сделки и обстоятельств заявителя в процессе могут участвовать инвестор, инженер-строитель, юрист, нотариус, бухгалтер, страховая компания и соответствующие государственные органы.",
      },
      applicationTimeline: {
        question: "Сколько времени занимает подача заявления?",
        answer:
          "Единого срока, применимого ко всем заявителям, не существует. Общая продолжительность процесса может зависеть от инвестиционного маршрута, сделки с недвижимостью, подготовки документов и нагрузки соответствующих органов.",
      },
      purchaseGuarantee: {
        question: "Гарантирует ли покупка недвижимости получение Золотой визы?",
        answer:
          "Нет. Завершение инвестиции само по себе не гарантирует одобрение. Инвестиция, документация и другие применимые юридические и административные требования должны быть соблюдены.",
      },
    },
  },

  cta: {
    label: "ГОТОВЫ НАЧАТЬ?",
    titleLineOne: "Ваш путь начинается",
    titleLineTwo: "с правильного первого шага.",
    description:
      "Прежде чем выбирать недвижимость или принимать инвестиционные обязательства, определите свою ситуацию и путь, который подходит именно вам.",
    button: "Забронировать консультацию",
  },

  legal: {
    title: "Юридическая информация.",
    text:
      "Эта страница содержит общую информацию о процессе получения Золотой визы Греции и не является юридической, налоговой, иммиграционной или инвестиционной консультацией. Конкретный процесс, документация и требования зависят от инвестиционного маршрута, обстоятельств заявителя, а также законодательства и административных требований, действующих на момент подачи заявления.",
  },
},
    programEligibility: {
  hero: {
    eyebrow: "СООТВЕТСТВИЕ ТРЕБОВАНИЯМ",
    titleLineOne: "Подходит ли вам",
    titleLineTwo: "Золотая виза?",
    description:
      "Соответствие требованиям зависит не только от суммы инвестиций. Узнайте ключевые условия до выбора недвижимости или начала подачи заявления.",
    primaryButton: "Проверить требования",
    secondaryButton: "Требования к инвестициям",
    meta: {
      program: "ПРОГРАММА",
      eligibility: "СООТВЕТСТВИЕ",
      greece: "ГРЕЦИЯ",
    },
  },

  conditions: {
    label: "ОСНОВНЫЕ УСЛОВИЯ",
    titleLineOne: "Сначала нужно",
    titleLineTwo: "учесть четыре фактора.",
    description:
      "Прежде чем рассматривать объект недвижимости или инвестиционную стратегию, необходимо установить соответствие нескольким основным условиям.",
    factorLabel: "КЛЮЧЕВОЙ ФАКТОР СООТВЕТСТВИЯ",

    steps: {
      thirdCountryNational: {
        title: "Гражданин третьей страны",
        description:
          "Золотая виза Греции доступна гражданам стран за пределами Европейского союза и Европейской экономической зоны, которые соответствуют применимым требованиям.",
      },

      qualifyingInvestment: {
        title: "Соответствующая инвестиция",
        description:
          "Заявитель должен осуществить инвестицию, соответствующую одному из предусмотренных маршрутов Золотой визы и применимому финансовому порогу.",
      },

      eligibleProperty: {
        title: "Подходящая недвижимость или инвестиция",
        description:
          "Если для подачи заявления используется недвижимость, конкретный объект и сделка должны соответствовать условиям соответствующего инвестиционного маршрута.",
      },

      requiredDocumentation: {
        title: "Необходимые документы",
        description:
          "Заявитель должен предоставить документы и подтверждения, необходимые для установления личности, инвестиции, права собственности и соблюдения требований программы.",
      },
    },
  },

  investment: {
    label: "ВАША ИНВЕСТИЦИЯ",
    titleLineOne: "Определите маршрут",
    titleLineTwo: "до покупки.",
    description:
      "Выбранный инвестиционный маршрут определяет применимый порог, квалифицирующие условия и необходимую документацию для вашего заявления.",

    routes: {
      special:
        "Определённые категории недвижимости, соответствующие специальным условиям.",

      standard:
        "Стандартная инвестиция в подходящую недвижимость за пределами территорий, где применяется порог €800 000.",

      highDemand:
        "Инвестиция в подходящую недвижимость в определённых регионах с высоким спросом.",
    },

    link: "Изучить все требования к инвестициям",
  },

  family: {
    label: "ТРЕБОВАНИЯ ДЛЯ СЕМЬИ",
    titleLineOne: "Ваше заявление может",
    titleLineTwo: "распространяться и на семью.",
    description:
      "Соответствующие требованиям члены семьи также могут получить разрешения на проживание, связанные со статусом инвестора, при соблюдении применимых условий.",
    button: "Изучить преимущества для семьи",
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Перед тем как",
    titleLineTwo: "сделать следующий шаг.",
    description:
      "Несколько вопросов, которые инвесторы часто задают перед началом процесса получения Золотой визы.",

    items: {
      whoCanApply: {
        question: "Кто может подать заявление на Золотую визу Греции?",
        answer:
          "Программа, как правило, доступна соответствующим требованиям гражданам третьих стран, которые выполняют применимые инвестиционные и законодательные требования.",
      },

      needToLiveInGreece: {
        question: "Нужно ли жить в Греции для подачи заявления?",
        answer:
          "Золотая виза является программой предоставления вида на жительство и, как правило, не требует от инвестора постоянного проживания в Греции только для сохранения разрешения. Конкретные требования и условия следует подтверждать с учётом обстоятельств заявителя.",
      },

      buyPropertyFirst: {
        question:
          "Нужно ли сначала купить недвижимость, чтобы проверить соответствие требованиям?",
        answer:
          "Нет. Как правило, целесообразно сначала определить соответствие требованиям и доступные инвестиционные маршруты, прежде чем принимать обязательства по покупке недвижимости или совершению сделки.",
      },

      family: {
        question: "Может ли моя семья подать заявление вместе со мной?",
        answer:
          "Соответствующие требованиям члены семьи могут получить разрешения на проживание, связанные со статусом инвестора, при соблюдении применимых семейных и законодательных требований.",
      },

      investmentGuarantee: {
        question:
          "Гарантирует ли выполнение инвестиционного порога одобрение заявления?",
        answer:
          "Нет. Выполнение финансового порога является лишь одной частью процесса. Инвестиция, документация, структура владения и другие применимые требования также должны быть соблюдены.",
      },
    },
  },

  cta: {
    label: "ГОТОВЫ УЗНАТЬ БОЛЬШЕ?",
    titleLineOne: "Узнайте, насколько",
    titleLineTwo: "вы соответствуете требованиям.",
    description:
      "Понимание соответствия требованиям до выбора инвестиции поможет вам подойти к процессу получения Золотой визы более осознанно.",
    button: "Связаться с консультантом",
  },

  legal: {
    title: "Юридическая информация.",
    text:
      "Эта страница содержит общую информацию о соответствии требованиям для получения Золотой визы Греции и не является юридической, налоговой, иммиграционной или инвестиционной консультацией. Соответствие требованиям зависит от индивидуальных обстоятельств заявителя, а также от законодательства и административных требований, действующих на момент подачи заявления.",
  },
},
    programRequirements: {
  hero: {
    eyebrow: "ТРЕБОВАНИЯ К ИНВЕСТИЦИЯМ",
    titleLineOne: "Знайте порог",
    titleLineTwo: "до начала инвестирования.",
    description:
      "Золотая виза Греции предусматривает несколько инвестиционных маршрутов. Понимание инвестиционного порога, требований к местоположению и недвижимости — первый шаг к выбору подходящего варианта.",
    meta: {
      program: "ПРОГРАММА",
      investment: "ИНВЕСТИЦИИ",
      greece: "ГРЕЦИЯ",
    },
  },

  routes: {
    label: "ТРИ ИНВЕСТИЦИОННЫХ ПОРОГА",
    titleLineOne: "Выберите маршрут,",
    titleLineTwo: "который вам подходит.",
    description:
      "Необходимая сумма зависит от типа и местоположения инвестиции. Маршрут €250 000 применяется только к определённым категориям недвижимости.",
    featuredLabel: "ЗАВИСИТ ОТ МЕСТОПОЛОЖЕНИЯ",
    standardLabel: "ПОДХОДЯЩИЙ МАРШРУТ",

    cards: {
      special: {
        title: "Специальные маршруты",
        description:
          "Более низкий инвестиционный порог применяется к определённым категориям недвижимости, предусмотренным греческим законодательством.",
      },

      standard: {
        title: "Стандартная инвестиция в недвижимость",
        description:
          "Стандартный порог для подходящих объектов недвижимости за пределами территорий, где применяется порог €800 000.",
      },

      highDemand: {
        title: "Регионы с высоким спросом",
        description:
          "Более высокий порог применяется к подходящим инвестициям в недвижимость в определённых регионах с высоким спросом.",
      },
    },
  },

  locations: {
    label: "ГДЕ ПРИМЕНЯЕТСЯ €800 000",
    titleLineOne: "Местоположение может",
    titleLineTwo: "изменить порог.",
    description:
      "В определённых регионах с высоким спросом для подходящих инвестиций в недвижимость применяется минимальный инвестиционный порог €800 000.",

    areas: {
      attica: "Аттика",
      thessaloniki: "Региональная единица Салоников",
      mykonos: "Миконос",
      santorini: "Тира / Санторини",
      islands: "Греческие острова с населением более 3 100 человек",
    },

    minimumLabel: "МИНИМАЛЬНАЯ ИНВЕСТИЦИЯ",

    note:
      "Применимый порог всегда следует подтверждать с учётом точного местоположения объекта и правил, действующих на момент инвестирования.",
  },

  property: {
    label: "ТРЕБОВАНИЯ К НЕДВИЖИМОСТИ",
    titleLineOne: "Дело не только",
    titleLineTwo: "в цене.",
    description:
      "Соответствие финансовому порогу — лишь одна часть квалифицирующей инвестиции. Недвижимость и сама сделка также должны соответствовать применимым требованиям.",

    items: {
      oneProperty: {
        title: "Один подходящий объект",
        text:
          "Для стандартных маршрутов €400 000 и €800 000 инвестиция, как правило, должна относиться к одному объекту недвижимости, а не формироваться за счёт объединения нескольких объектов для достижения необходимого порога.",
      },

      minimumArea: {
        title: "Минимум 120 м²",
        text:
          "Для подходящей жилой недвижимости по маршрутам €400 000 и €800 000 соответствующий объект, как правило, должен иметь не менее 120 м² основных помещений.",
      },

      ownership: {
        title: "Надлежащее право собственности",
        text:
          "Инвестор должен соответствовать требованиям к праву собственности и владению, применимым к конкретному инвестиционному маршруту Золотой визы.",
      },

      payment: {
        title: "Документально подтверждённая оплата",
        text:
          "Стоимость приобретения должна быть оплачена и документально подтверждена с использованием способов оплаты и подтверждающих документов, предусмотренных применимыми правилами.",
      },
    },
  },

  special: {
    label: "МАРШРУТЫ €250 000",
    titleLineOne: "Более низкий порог,",
    titleLineTwo: "но с особыми условиями.",
    description:
      "Порог €250 000 применяется не ко всей недвижимости. Он предусмотрен для определённых категорий инвестиций, установленных греческим законодательством.",
    routeTag: "МАРШРУТ €250 000",

    cards: {
      changeOfUse: {
        title: "Изменение назначения",
        text:
          "Некоторые объекты, основные помещения которых были переоборудованы для жилого использования, могут соответствовать маршруту €250 000 при соблюдении установленных законом условий и требований к документации.",
      },

      listedBuildings: {
        title: "Охраняемые здания",
        text:
          "Соответствующие охраняемые здания, требующие реставрации или реконструкции, также могут подпадать под маршрут €250 000 при соблюдении применимых требований.",
      },
    },
  },

  checklist: {
    label: "ПЕРЕД ПРИНЯТИЕМ ОБЯЗАТЕЛЬСТВ",
    titleLineOne: "Четыре вещи,",
    titleLineTwo: "которые нужно проверить.",
    description:
      "Цена объекта — только начало. Прежде чем принимать обязательства, инвестицию следует оценивать комплексно.",

    items: {
      location: {
        title: "Местоположение",
        text:
          "Определите, подпадает ли объект под порог €250 000, €400 000 или €800 000.",
      },

      propertyType: {
        title: "Тип недвижимости",
        text:
          "Убедитесь, что объект соответствует требованиям конкретного рассматриваемого маршрута Золотой визы.",
      },

      transaction: {
        title: "Сделка",
        text:
          "Проверьте, соответствуют ли цена покупки, структура платежей и схема владения применимым правилам.",
      },

      technicalStatus: {
        title: "Технический статус",
        text:
          "До принятия инвестиционных обязательств проверьте градостроительные, строительные и юридические характеристики объекта.",
      },
    },
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",
    titleLineOne: "Перед тем как",
    titleLineTwo: "принять решение.",
    description:
      "Ответы на вопросы, которые инвесторы чаще всего задают при сравнении доступных инвестиционных порогов.",
    button: "Проверить соответствие требованиям",

    items: {
      minimumInvestment: {
        question: "Всегда ли минимальная инвестиция составляет €250 000?",
        answer:
          "Нет. Порог €250 000 применяется только к определённым квалифицирующим маршрутам. Для стандартных инвестиций в недвижимость, как правило, применяются пороги €400 000 или €800 000 в зависимости от местоположения и действующих правил.",
      },

      eightHundredAreas: {
        question: "В каких регионах требуется порог €800 000?",
        answer:
          "Порог €800 000 применяется к подходящим инвестициям в недвижимость в Аттике, региональной единице Салоников, на Миконосе, в Тире/Санторини и на греческих островах с населением более 3 100 человек при соблюдении применимых законодательных требований.",
      },

      combineProperties: {
        question:
          "Можно ли объединить несколько объектов, чтобы достичь €400 000 или €800 000?",
        answer:
          "Для стандартных маршрутов квалифицирующая инвестиция, как правило, относится к одному объекту. Конкретную структуру инвестиции необходимо проверять в соответствии с правилами, применимыми к соответствующей сделке.",
      },

      twoHundedFiftyQualification: {
        question: "Подходит ли автоматически объект стоимостью €250 000?",
        answer:
          "Нет. Маршрут €250 000 ограничен определёнными категориями недвижимости, включая подходящие объекты с изменённым назначением и некоторые охраняемые здания, требующие реставрации или реконструкции. Объект должен соответствовать соответствующим законодательным условиям.",
      },

      additionalCosts: {
        question: "Есть ли дополнительные расходы помимо суммы инвестиции?",
        answer:
          "Да. Установленный инвестиционный порог не следует считать полным бюджетом сделки. В зависимости от инвестиции дополнительные расходы могут включать налоги, нотариальные и регистрационные расходы, профессиональные услуги, юридическое сопровождение и другие расходы, связанные со сделкой.",
      },
    },
  },

  cta: {
    label: "УЖЕ ЕСТЬ ОБЪЕКТ?",
    titleLineOne: "Проверьте его",
    titleLineTwo: "до принятия обязательств.",
    description:
      "Мы можем помочь оценить соответствие объекта требованиям Золотой визы и определить подходящий инвестиционный маршрут до того, как вы продолжите сделку.",
    button: "Запросить проверку объекта",
  },

  legal: {
    title: "Юридическая информация.",
    text:
      "Эта страница содержит общую информацию об инвестиционной системе Золотой визы Греции и не является юридической, налоговой, иммиграционной или инвестиционной консультацией. Инвестиционные пороги, категории подходящей недвижимости и административные требования могут изменяться. Соответствие требованиям следует оценивать на основании законодательства и административных требований, действующих на момент подачи заявления.",
  },
},
    programBenefits: {
  hero: {
    eyebrow: "ЗОЛОТАЯ ВИЗА ГРЕЦИИ",
    titleLineOne: "Больше, чем недвижимость.",
    titleLineTwo: "Вид на жительство в Греции.",
    description:
      "Золотая виза Греции — это программа получения вида на жительство для соответствующих требованиям инвесторов из стран, не входящих в ЕС. Ниже — основные возможности, которые действительно предоставляет ВНЖ, а также то, чего он не означает.",
  },

  benefits: {
    label: "ЧТО ОНА ДАЁТ",
    titleLineOne: "Преимущества,",
    titleLineTwo: "объяснённые ясно.",
    description:
      "В первую очередь Золотая виза представляет собой греческий вид на жительство. Её преимущества значимы, однако их важно понимать точно, не сводя программу к маркетинговым обещаниям.",

    cards: {
      residence: {
        title: "Проживание в Греции",
        text:
          "Золотая виза Греции предоставляет вид на жительство соответствующим требованиям инвесторам из третьих стран при соблюдении применимых инвестиционных и юридических требований.",
      },

      schengen: {
        title: "Поездки по Шенгенской зоне",
        text:
          "Действующий греческий вид на жительство позволяет совершать поездки в пределах Шенгенской зоны с соблюдением применимых правил Шенгена и ограничений краткосрочного пребывания.",
      },

      family: {
        title: "ВНЖ для семьи",
        text:
          "Соответствующие требованиям члены семьи могут получить виды на жительство, связанные со статусом инвестора, что позволяет семье пользоваться программой совместно.",
      },

      fiveYear: {
        title: "ВНЖ на пять лет",
        text:
          "Вид на жительство инвестора предоставляется на пятилетний срок и может продлеваться при продолжении выполнения применимых условий программы.",
      },
    },
  },

  family: {
    visualLabel: "СЕМЬЯ",

    visualTextLineOne: "Не только",
    visualTextLineTwo: "инвестор.",

    visualBottom: {
      greece: "ГРЕЦИЯ",
      residence: "ВНЖ",
      family: "СЕМЬЯ",
    },

    label: "ВНЖ ДЛЯ СЕМЬИ",

    titleLineOne: "Будьте рядом с теми,",
    titleLineTwo: "кто вам дорог.",

    lead:
      "Одно из важных преимуществ программы заключается в том, что соответствующие требованиям члены семьи также могут получить виды на жительство, связанные со статусом инвестора.",

    members: {
      spouse: "Супруг или соответствующий требованиям партнёр",
      minorChildren: "Несовершеннолетние дети",
      dependentFamily:
        "Другие находящиеся на иждивении члены семьи, предусмотренные применимыми правилами",
      ascendants:
        "Соответствующие требованиям родители инвестора и супруга/партнёра",
    },

    note:
      "Точные требования зависят от степени родства заявителя и законодательства, действующего на момент подачи заявления.",
  },

  travel: {
    label: "МОБИЛЬНОСТЬ В ЕВРОПЕ",

    titleLineOne: "Греция как ваша",
    titleLineTwo: "европейская база.",

    description:
      "Действующий греческий вид на жительство позволяет совершать поездки в пределах Шенгенской зоны в соответствии с применимыми правилами краткосрочного пребывания.",

    warning:
      "Вид на жительство в Греции не означает неограниченного права на проживание или работу в любой европейской стране.",

    kicker: "ПОЕЗДКИ",

    destination: "Шенгенская зона",

    note:
      "С соблюдением применимых правил въезда и краткосрочного пребывания.",
  },

  facts: {
    label: "ВАЖНЫЕ РАЗЛИЧИЯ",

    titleLineOne: "Что Золотая виза",
    titleLineTwo: "не означает автоматически.",

    description:
      "Грамотное инвестиционное сопровождение также предполагает понимание границ и ограничений программы.",

    items: {
      citizenship: {
        title: "Гражданство не предоставляется автоматически",
        text:
          "Наличие Золотой визы не делает её владельца автоматически гражданином Греции. Получение гражданства — отдельный юридический процесс со своими требованиями.",
      },

      taxResidence: {
        title: "ВНЖ — не то же самое, что налоговое резидентство",
        text:
          "Греческий вид на жительство сам по себе не определяет, является ли человек налоговым резидентом Греции. Налоговое резидентство определяется в соответствии с отдельными налоговыми правилами.",
      },

      employment: {
        title: "Право на работу — отдельный вопрос",
        text:
          "Сам по себе вид на жительство инвестора не предоставляет права на трудоустройство. Любая работа или профессиональная деятельность должна рассматриваться отдельно в соответствии с применимыми правилами Греции.",
      },
    },
  },

  faq: {
    label: "ЧАСТЫЕ ВОПРОСЫ",

    titleLineOne: "Прежде чем",
    titleLineTwo: "принять решение.",

    description:
      "Несколько вопросов, на которые инвестору стоит получить ответы до начала процесса.",

    button: "Связаться с консультантом",

    items: {
      liveInGreece: {
        question: "Позволяет ли Золотая виза жить в Греции?",
        answer:
          "Да. Программа предоставляет соответствующему требованиям инвестору из третьей страны греческий вид на жительство при соблюдении применимых инвестиционных требований и условий получения ВНЖ.",
      },

      validity: {
        question: "На какой срок выдаётся вид на жительство по Золотой визе?",
        answer:
          "Вид на жительство инвестора, как правило, выдаётся на пять лет. Его продление возможно при продолжении выполнения условий, необходимых для сохранения статуса инвестора.",
      },

      familyPermits: {
        question: "Может ли моя семья получить виды на жительство?",
        answer:
          "Да. Греческое законодательство предусматривает выдачу видов на жительство соответствующим требованиям членам семьи инвестора. Конкретные категории и условия зависят от применимых правил.",
      },

      travelEurope: {
        question: "Могу ли я путешествовать по Европе с Золотой визой?",
        answer:
          "Действующий греческий вид на жительство может использоваться для поездок в пределах Шенгенской зоны при соблюдении правил въезда, пересечения границ и краткосрочного пребывания. ВНЖ не следует рассматривать как неограниченное право на проживание во всей Европе.",
      },

      taxResident: {
        question: "Делает ли Золотая виза меня налоговым резидентом Греции?",
        answer:
          "Нет. Вид на жительство и налоговое резидентство — разные вопросы. Ваш налоговый статус зависит от применимых налоговых правил Греции и ваших личных обстоятельств.",
      },

      workInGreece: {
        question: "Даёт ли Золотая виза право работать в Греции?",
        answer:
          "Сам по себе вид на жительство инвестора не предоставляет права на трудоустройство. Если вы планируете работать или осуществлять профессиональную деятельность в Греции, ваши обстоятельства необходимо рассматривать отдельно.",
      },
    },
  },

  cta: {
    label: "СЛЕДУЮЩИЙ ШАГ",

    titleLineOne: "Определите свой путь",
    titleLineTwo: "до инвестирования.",

    description:
      "Расскажите нам о своих целях, и мы поможем определить подходящий путь по программе Золотой визы и следующие шаги.",

    button: "Проверить соответствие требованиям",
  },

  legal: {
    title: "Юридическая информация.",

    text:
      "Эта страница содержит общую информацию о программе получения вида на жительство по Золотой визе Греции и не является юридической, налоговой или иммиграционной консультацией. Иммиграционное законодательство Греции и административные требования могут изменяться. Соответствие заявителя требованиям должно оцениваться в соответствии с правилами, действующими на момент подачи заявления.",
  },
},
    cookies: {
  metadata: {
    title: "Политика использования файлов cookie | Greece Golden Visa",
  },

  hero: {
    eyebrow: "ПРАВОВАЯ ИНФОРМАЦИЯ",
    title: "Политика",
    highlight: "файлов cookie.",
    description:
      "Узнайте, какие файлы cookie и аналогичные технологии могут использоваться на сайте Greece Golden Visa и как вы можете управлять своими настройками.",
    updated: {
      label: "ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ",
      date: "Сентябрь 2026",
    },
    meta: {
      website: "САЙТ",
      cookies: "COOKIES",
      privacy: "КОНФИДЕНЦИАЛЬНОСТЬ",
    },
  },

  contents: {
    label: "СОДЕРЖАНИЕ",
    what: "01 — Что такое файлы cookie?",
    necessary: "02 — Необходимые cookie",
    analytics: "03 — Аналитика",
    marketing: "04 — Маркетинг",
    thirdParty: "05 — Сторонние cookie",
    consent: "06 — Ваш выбор",
    browser: "07 — Настройки браузера",
    changes: "08 — Изменения",
    contact: "09 — Контакты",
  },

  lead:
    "Настоящая Политика использования файлов cookie объясняет, как файлы cookie и аналогичные технологии могут использоваться при посещении сайта Greece Golden Visa.",

  sections: {
    what: {
      title: "Что такое файлы cookie?",
      paragraph1:
        "Файлы cookie представляют собой небольшие текстовые файлы или аналогичные технологии, которые могут сохраняться на вашем устройстве при посещении сайта. Они позволяют сайту запоминать информацию о вашем посещении, обеспечивать работу функций, понимать особенности использования сайта или поддерживать другие сервисы.",
      paragraph2:
        "Файлы cookie могут устанавливаться непосредственно сайтом (собственные cookie) или сторонними сервисами, используемыми сайтом.",
    },

    necessary: {
      title: "Необходимые файлы cookie",
      paragraph1:
        "Некоторые файлы cookie или аналогичные технологии могут быть необходимы для правильной работы сайта или предоставления услуги, которую вы специально запросили.",
      paragraph2:
        "К ним могут относиться технологии, используемые для обеспечения безопасности, управления сессиями, навигации или хранения обязательных настроек конфиденциальности.",
      card: {
        title: "Необходимые",
        subtitle: "Требуются для основных функций",
        description:
          "Эти технологии могут использоваться без согласия, если применимое законодательство допускает их использование, поскольку они строго необходимы для запрошенной услуги или работы сайта.",
      },
    },

    analytics: {
      title: "Аналитические файлы cookie",
      paragraph1:
        "Если аналитические сервисы включены, файлы cookie или аналогичные технологии могут использоваться для понимания того, как посетители взаимодействуют с сайтом.",
      paragraph2:
        "Аналитическая информация помогает понять, какие страницы полезны, выявлять технические проблемы и улучшать сайт.",
      paragraph3:
        "Дополнительные аналитические технологии должны активироваться только в соответствии с применимыми требованиями к получению согласия.",
      card: {
        title: "Аналитика",
        subtitle: "Дополнительный анализ аудитории",
        description:
          "Статус: активируется только в том случае, если сайт использует аналитический сервис, требующий согласия.",
      },
    },

    marketing: {
      title: "Маркетинговые и рекламные файлы cookie",
      paragraph1:
        "В будущем сайт может использовать технологии для рекламы, ремаркетинга или измерения конверсий.",
      paragraph2:
        "Если такие технологии будут внедрены, они должны быть раскрыты через механизм согласия на использование cookie и активироваться только при наличии соответствующего правового основания или согласия.",
      card: {
        title: "Маркетинг",
        subtitle: "Рекламные и ремаркетинговые технологии",
        description:
          "Статус: не предполагается активным, если только соответствующие технологии явно не настроены на сайте.",
      },
    },

    thirdParty: {
      title: "Сторонние технологии",
      paragraph1:
        "Некоторые функции сайта могут зависеть от сторонних поставщиков. В зависимости от фактически установленных сервисов такие поставщики могут устанавливать собственные файлы cookie или обрабатывать техническую информацию.",
      paragraph2:
        "Примеры могут включать аналитические сервисы, встроенный контент, инструменты коммуникации, карты, сервисы безопасности или другие внешние функции.",
      paragraph3:
        "Фактический список сторонних технологий необходимо проверить в соответствии с текущей конфигурацией работающего сайта до публикации настоящей политики.",
    },

    consent: {
      title: "Ваш выбор в отношении cookie",
      paragraph1:
        "Если для дополнительных файлов cookie или аналогичных технологий требуется согласие, вы должны иметь возможность принять или отклонить их через механизм управления файлами cookie на сайте.",
      paragraph2:
        "Дополнительные файлы cookie не должны активироваться только потому, что вы посетили сайт. В применимых случаях ваш выбор должен фиксироваться и соблюдаться.",
      paragraph3:
        "Вы также можете отозвать или изменить свой выбор, если на сайте предусмотрен инструмент управления настройками cookie.",
    },

    browser: {
      title: "Настройки браузера",
      paragraph1:
        "Большинство современных браузеров позволяют управлять файлами cookie или удалять их через настройки.",
      paragraph2:
        "Отключение определённых файлов cookie может повлиять на функциональность или пользовательский опыт отдельных частей сайта, особенно если cookie необходимы для запрошенной услуги.",
    },

    changes: {
      title: "Изменения настоящей политики",
      paragraph1:
        "Мы можем обновлять настоящую Политику использования файлов cookie при изменении технологий, сервисов сайта или юридических требований.",
      paragraph2:
        "Дата, указанная в начале политики, показывает, когда она была обновлена в последний раз.",
    },

    contact: {
      title: "Контакты",
      paragraph:
        "Если у вас есть вопросы о файлах cookie или аналогичных технологиях, используемых сайтом, свяжитесь с нами:",
    },
  },

  disclaimer: {
    title: "Важно",
    description:
      "Настоящая Политика использования файлов cookie должна быть проверена на соответствие фактически используемым на работающем сайте файлам cookie, скриптам, аналитическим платформам, встроенным элементам и сторонним сервисам. Не следует публиковать категории cookie или сведения о поставщиках, которые фактически не используются.",
  },
},
    privacy: {
  metadata: {
    title: "Политика конфиденциальности | Greece Golden Visa",
  },

  hero: {
    eyebrow: "ПРАВОВАЯ ИНФОРМАЦИЯ",
    title: "Политика",
    highlight: "конфиденциальности.",
    description:
      "Настоящая Политика конфиденциальности объясняет, как собирается, используется, хранится и защищается персональная информация при использовании сайта Greece Golden Visa и обращении в нашу команду.",
    updated: {
      label: "ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ",
      date: "Сентябрь 2026",
    },
    meta: {
      greece: "ГРЕЦИЯ",
      dataProtection: "ЗАЩИТА ДАННЫХ",
      gdpr: "GDPR",
    },
  },

  contents: {
    label: "СОДЕРЖАНИЕ",
    controller: "01 — О нас",
    data: "02 — Какие данные мы собираем",
    purposes: "03 — Как мы используем данные",
    legalBasis: "04 — Правовые основания",
    sharing: "05 — Передача информации",
    retention: "06 — Хранение данных",
    rights: "07 — Ваши права",
    security: "08 — Безопасность",
    transfers: "09 — Международная передача",
    contact: "10 — Контакты",
  },

  lead:
    "Мы уважаем вашу конфиденциальность и стремимся ответственно обращаться с персональными данными. Настоящая политика призвана простым и понятным языком объяснить, какая информация может собираться через этот сайт и как она может обрабатываться.",

  sections: {
    controller: {
      title: "О нас",
      paragraph1:
        "Сайт работает под брендом Greece Golden Visa от имени ответственного бизнеса или специалиста, указанного ниже.",
      info: {
        title: "Оператор персональных данных",
      },
      paragraph2:
        "По вопросам обработки ваших персональных данных или осуществления ваших прав в сфере защиты данных вы можете связаться с нами, используя указанные выше контактные данные.",
    },

    data: {
      title: "Какие данные мы собираем",
      intro:
        "В зависимости от того, как вы взаимодействуете с сайтом, мы можем собирать информацию, которую вы добровольно предоставляете нам, включая:",
      items: {
        name: "Имя и контактные данные.",
        email: "Адрес электронной почты и номер телефона или WhatsApp.",
        nationality: "Гражданство или страна проживания.",
        budget:
          "Инвестиционный бюджет или предпочтительный диапазон инвестиций.",
        property:
          "Информация о том, выбрали ли вы уже объект недвижимости.",
        language: "Предпочтительный язык.",
        message:
          "Информация, содержащаяся в вашем сообщении или запросе на проверку объекта.",
      },
      paragraph1:
        "Мы также можем получать техническую информацию, которая формируется при использовании сайта, например тип браузера, информацию об устройстве, приблизительное местоположение и данные об использовании сайта, если это применимо и разрешено законом.",
      paragraph2:
        "Мы стремимся собирать только ту информацию, которая является релевантной и необходимой для целей, описанных в настоящей политике.",
    },

    purposes: {
      title: "Как мы используем вашу информацию",
      intro: "Персональные данные могут использоваться для:",
      items: {
        enquiries:
          "Ответов на запросы и обращения о консультациях.",
        options:
          "Обсуждения вариантов инвестирования и требований Golden Visa.",
        property:
          "Рассмотрения информации об объекте недвижимости, который вы просите нас оценить.",
        services:
          "Связи с вами по поводу запрошенных вами услуг.",
        professionals:
          "Координации коммуникации с соответствующими специалистами, когда это необходимо для оказания запрошенной помощи.",
        website:
          "Улучшения сайта, его содержания и пользовательского опыта.",
        security:
          "Обеспечения безопасности сайта и предотвращения неправомерного использования.",
        legal:
          "Соблюдения юридических и нормативных требований.",
      },
    },

    legalBasis: {
      title: "Правовые основания обработки",
      intro:
        "В применимых случаях персональные данные обрабатываются на одном или нескольких правовых основаниях, предусмотренных действующим законодательством о защите данных, включая:",
      items: {
        consent: {
          title: "Согласие",
          description:
            "если вы дали согласие на конкретный вид обработки.",
        },
        contract: {
          title: "Договор или преддоговорные действия",
          description:
            "если обработка необходима в связи с услугой или запросом, который вы сделали.",
        },
        legal: {
          title: "Юридическая обязанность",
          description:
            "если обработка требуется применимым законодательством.",
        },
        interests: {
          title: "Законные интересы",
          description:
            "если обработка необходима для законных деловых целей и эти интересы не имеют приоритета над вашими правами и свободами.",
        },
      },
      paragraph:
        "Если обработка основана на согласии, вы можете отозвать это согласие в любое время. Отзыв согласия не влияет на законность обработки, осуществлённой до его отзыва.",
    },

    sharing: {
      title: "Передача вашей информации",
      paragraph1:
        "Мы не продаём вашу персональную информацию.",
      paragraph2:
        "Когда это необходимо для оказания запрошенной помощи или работы сайта, персональные данные могут передаваться доверенным поставщикам услуг и профессиональным партнёрам при соблюдении соответствующих гарантий и требований применимого законодательства.",
      paragraph3:
        "В зависимости от запрошенной услуги это могут быть технические специалисты, юристы, нотариусы, бухгалтеры, поставщики коммуникационных услуг, хостинг-провайдеры или другие поставщики услуг, участвующие в поддержке соответствующего процесса.",
      paragraph4:
        "Информация также может быть раскрыта, если этого требует закон, судебное решение или компетентный государственный орган.",
    },

    retention: {
      title: "Как долго мы храним ваши данные",
      paragraph1:
        "Персональные данные хранятся только столько времени, сколько это разумно необходимо для целей, для которых они были собраны, с учётом юридических, бухгалтерских, договорных и нормативных требований.",
      paragraph2:
        "Поэтому различные категории информации могут храниться в течение разных периодов. Когда информация больше не требуется, она удаляется или иным образом безопасно уничтожается, когда это необходимо.",
    },

    rights: {
      title: "Ваши права в сфере защиты данных",
      intro:
        "С учётом условий и ограничений, установленных применимым законодательством, вы можете иметь право:",
      items: {
        access:
          "Запросить доступ к своим персональным данным.",
        correction:
          "Запросить исправление неточной информации.",
        deletion:
          "Запросить удаление персональных данных.",
        restriction:
          "Запросить ограничение обработки в определённых обстоятельствах.",
        objection:
          "Возразить против определённых видов обработки.",
        portability:
          "Запросить переносимость определённых персональных данных.",
        withdraw:
          "Отозвать согласие, если обработка основана на согласии.",
      },
      paragraph1:
        "Вы также можете иметь право подать жалобу в компетентный надзорный орган по защите данных.",
      paragraph2:
        "В Греции компетентным надзорным органом является Управление по защите персональных данных Греции (Hellenic Data Protection Authority, HDPA).",
    },

    security: {
      title: "Безопасность",
      paragraph1:
        "Мы принимаем разумные технические и организационные меры, направленные на защиту персональных данных от несанкционированного доступа, случайной потери, уничтожения, изменения или незаконной обработки.",
      paragraph2:
        "Однако невозможно гарантировать абсолютную безопасность любой передачи данных через интернет или системы электронного хранения.",
    },

    transfers: {
      title: "Международная передача данных",
      paragraph1:
        "Некоторые технологические компании или поставщики услуг, используемые для работы сайта, могут обрабатывать информацию за пределами Европейской экономической зоны.",
      paragraph2:
        "Если персональные данные передаются за пределы ЕЭЗ, при необходимости будут применяться соответствующие гарантии, предусмотренные законодательством о защите данных.",
    },

    contact: {
      title: "Контакты",
      paragraph:
        "Если у вас есть вопрос о конфиденциальности, вы хотите воспользоваться своим правом в сфере защиты данных или получить дополнительную информацию о том, как обрабатываются ваши данные, свяжитесь с нами:",
    },
  },

  disclaimer: {
    title: "Важно",
    description:
      "Настоящая Политика конфиденциальности предоставляется как информация для сайта и должна быть рассмотрена и утверждена ответственным юридическим лицом или квалифицированным специалистом по защите данных до публикации. Финальная версия должна точно отражать оператора данных, поставщиков услуг, инструменты аналитики, сроки хранения и фактически используемые сайтом процессы обработки данных.",
  },
},
    terms: {
  metadata: {
    title:
      "Условия использования | Greece Golden Visa",
  },

  hero: {
    eyebrow: "ПРАВОВАЯ ИНФОРМАЦИЯ",

    title: "Условия",

    highlight: "использования.",

    description:
      "Настоящие условия определяют правила, применимые при доступе к сайту Greece Golden Visa и его использовании.",

    updated: {
      label: "ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ",
      date: "Сентябрь 2026",
    },

    meta: {
      websiteUse: "ИСПОЛЬЗОВАНИЕ САЙТА",
      terms: "УСЛОВИЯ",
      greece: "ГРЕЦИЯ",
    },
  },

  contents: {
    label: "СОДЕРЖАНИЕ",
  },

  lead:
    "Получая доступ к этому сайту или используя его, вы соглашаетесь использовать его ответственно и в соответствии с настоящими Условиями использования. Если вы не согласны с этими условиями, пожалуйста, не используйте сайт.",

  sections: {
    acceptance: {
      title: "Принятие условий",

      paragraph1:
        "Настоящие Условия использования распространяются на использование вами сайта Greece Golden Visa, его общедоступного содержания, инструментов, форм и информации.",

      paragraph2:
        "Продолжая пользоваться сайтом, вы подтверждаете, что ознакомились с настоящими условиями и понимаете их.",
    },

    website: {
      title: "Назначение сайта",

      paragraph1:
        "Сайт предоставляет общую информацию о программе Greek Golden Visa, инвестиционных направлениях, объектах недвижимости, Греции и связанных с ними услугах.",

      paragraph2:
        "Сайт предназначен прежде всего для информационных целей и направления запросов. Информация, представленная на сайте, не должна рассматриваться как обещание, гарантия или заверение в том, что конкретная инвестиция или заявление приведёт к определённому результату.",
    },

    information: {
      title: "Точность информации",

      paragraph1:
        "Мы стремимся поддерживать информацию на этом сайте точной и полезной. Однако законодательство, инвестиционные пороги, административные процедуры, наличие объектов, цены и другие обстоятельства могут меняться.",

      paragraph2:
        "Поэтому информация может устареть или не соответствовать конкретным обстоятельствам отдельного человека.",

      paragraph3:
        "Перед принятием инвестиционного или юридического решения рекомендуется получить соответствующую профессиональную консультацию и проверить актуальные требования.",
    },

    noAdvice: {
      title:
        "Отсутствие юридической, налоговой или иммиграционной консультации",

      paragraph1:
        "Информация на этом сайте предоставляется исключительно в общих информационных целях и не является юридической, налоговой, иммиграционной, финансовой или инвестиционной консультацией.",

      paragraph2:
        "Команда Greece Golden Visa при необходимости может координировать работу с юристами, нотариусами, бухгалтерами, инженерами и другими специалистами. Это не означает, что опубликованная на сайте информация заменяет консультацию соответствующих квалифицированных специалистов.",
    },

    goldenVisa: {
      title: "Информация о Golden Visa",

      paragraph1:
        "Право на получение Golden Visa зависит от обстоятельств заявителя, выбранной инвестиции, соответствующего инвестиционного направления, характеристик и юридического статуса объекта или инвестиции, а также законодательства, действующего на соответствующий момент.",

      paragraph2:
        "Ни одно положение на этом сайте не должно рассматриваться как гарантия права на участие в программе, выдачи вида на жительство, одобрения заявления или конкретного иммиграционного результата.",

      paragraph3:
        "Перед принятием финансовых обязательств пользователям следует проверить актуальные юридические требования.",
    },

    properties: {
      title: "Информация об объектах недвижимости",

      paragraph1:
        "Информация об объектах недвижимости, включая описания, местоположение, цены, доступность, изображения и ссылки на инвестиционные направления, может изменяться без предварительного уведомления.",

      paragraph2:
        "Информация об объекте, представленная на сайте, сама по себе не подтверждает его соответствие требованиям конкретного инвестиционного направления Golden Visa.",

      paragraph3:
        "Перед приобретением отдельные объекты должны пройти соответствующую юридическую, техническую и финансовую проверку.",
    },

    intellectual: {
      title: "Интеллектуальная собственность",

      paragraph1:
        "Если не указано иное, сайт и его оригинальное содержание, фирменный стиль, тексты, графика, дизайн, структура, фотографии и другие материалы защищены применимым законодательством об интеллектуальной собственности.",

      paragraph2:
        "Вы можете получать доступ к сайту и использовать его в личных и законных информационных целях. Запрещается воспроизводить, распространять, изменять, публиковать или использовать содержание сайта в коммерческих целях без соответствующего разрешения.",
    },

    thirdParty: {
      title:
        "Сторонние сайты и сервисы",

      paragraph1:
        "Сайт может содержать ссылки на сторонние веб-сайты, платформы или сервисы.",

      paragraph2:
        "Сторонние сайты работают в соответствии со своими собственными условиями и политиками конфиденциальности. Мы не несём ответственности за содержание, доступность, безопасность или практики сторонних сайтов, которые не находятся под нашим контролем.",
    },

    liability: {
      title: "Ограничение ответственности",

      paragraph1:
        "В пределах, разрешённых применимым законодательством, мы не несём ответственности за убытки, возникшие вследствие использования общей информации, опубликованной на сайте, если эта информация не предназначалась для предоставления индивидуальной профессиональной консультации.",

      paragraph2:
        "Ничто в настоящих условиях не направлено на исключение или ограничение ответственности в случаях, когда такое исключение или ограничение запрещено применимым законодательством.",
    },

    changes: {
      title:
        "Изменения сайта и настоящих условий",

      paragraph1:
        "Мы можем время от времени обновлять, изменять, приостанавливать или удалять отдельные части сайта.",

      paragraph2:
        "Мы также можем обновлять настоящие Условия использования, когда это необходимо для отражения изменений сайта, услуг, законодательства или деловой практики.",
    },

    law: {
      title: "Применимое законодательство",

      paragraph1:
        "Перед публикацией настоящие условия должны быть рассмотрены и дополнены ответственным юридическим лицом для подтверждения применимого законодательства и компетентных судов.",

      paragraph2:
        "В случаях, предусмотренных законом, отношения между оператором сайта и пользователем регулируются законодательством, применимым в Греции, с учётом обязательных положений о защите прав потребителей, которые могут применяться.",
    },

    contact: {
      title: "Контакты",

      paragraph1:
        "Вопросы относительно настоящих Условий использования можно направлять по адресу:",
    },
  },

  disclaimer: {
    title: "Важно",

    description:
      "Настоящие Условия использования являются проектом для сайта и должны быть проверены ответственным юридическим лицом или квалифицированным юристом в Греции перед публикацией, особенно в части юридической идентификации оператора, применимого законодательства, юрисдикции, прав потребителей и обязательств, связанных с конкретными услугами.",
  },
},
    nav: {
      program: {
        title: "Программа",
        dropdownTitle:
          "Программа Golden Visa в Греции",
        description:
          "Всё, что необходимо знать перед началом процесса получения ВНЖ в Греции.",
        button:
          "Изучить программу",
        cards: {
          benefits: {
            title:
              "Преимущества ВНЖ",
            description:
              "Узнайте о правах и преимуществах владельца греческой Golden Visa.",
          },
          requirements: {
            title:
              "Инвестиционные требования",
            description:
              "Узнайте об инвестиционных критериях и доступных вариантах.",
          },
          eligibility: {
            title:
              "Ваша возможность участия",
            description:
              "Проверьте, соответствуете ли вы требованиям перед подачей заявления.",
          },
          journey: {
            title:
              "Процесс оформления",
            description:
              "Пройдите все этапы — от выбора инвестиции до получения ВНЖ.",
          },
        },
      },

      investments: {
        title:
          "Инвестиционные направления",
        dropdownTitle:
          "Инвестиционные направления",
        description:
          "Выберите инвестиционную стратегию, которая лучше всего соответствует вашим целям.",
        button:
          "Выбрать направление",
        cards: {
          readyProperties: {
            title:
              "Готовая недвижимость",
            description:
              "Изучите готовые объекты, которые уже соответствуют требованиям программы.",
          },
          strategic: {
            title:
              "Стратегические объекты",
            description:
              "Изучите возможности инвестирования в реконструкцию и развитие недвижимости.",
          },
          alternative: {
            title:
              "Альтернативные инвестиции",
            description:
              "Откройте для себя инвестиционные возможности за пределами традиционной недвижимости.",
          },
          compare: {
            title:
              "Сравнить варианты",
            description:
              "Сравните все инвестиционные направления перед принятием решения.",
          },
        },
      },

      greece: {
        title:
          "Почему Греция",
        dropdownTitle:
          "Почему Греция",
        description:
          "Узнайте, почему Греция продолжает привлекать международных инвесторов со всего мира.",
        button:
          "Открыть Грецию",
        cards: {
          lifestyle: {
            title:
              "Средиземноморский образ жизни",
            description:
              "Наслаждайтесь высоким качеством жизни, климатом и культурой.",
          },
          europe: {
            title:
              "Ворота в Европу",
            description:
              "Безвизовый доступ к Шенгенской зоне и Европе.",
          },
          property: {
            title:
              "Потенциал недвижимости",
            description:
              "Откройте для себя один из наиболее динамично развивающихся рынков недвижимости Европы.",
          },
          family: {
            title:
              "Семья и будущее",
            description:
              "Создайте долгосрочную стабильность для себя и своей семьи.",
          },
        },
      },

      guide: {
        title:
          "Гид инвестора",
        dropdownTitle:
          "Гид инвестора",
        description:
          "Полезные инструменты и практические материалы на каждом этапе вашего инвестиционного пути.",
        button:
          "Открыть гид инвестора",
        cards: {
          handbook: {
            title:
              "Справочник инвестора",
            description:
              "Изучите наше полное руководство перед осуществлением инвестиции.",
          },
          calculator: {
            title:
              "Инвестиционный калькулятор",
            description:
              "Рассчитайте расходы и определите необходимый инвестиционный бюджет.",
          },
          checklist: {
            title:
              "Чек-лист заявления",
            description:
              "Отслеживайте все документы и требования перед подачей заявления.",
          },
          faq: {
            title:
              "Вопросы инвесторов",
            description:
              "Найдите ответы на наиболее часто задаваемые вопросы.",
          },
        },
      },

      team: {
        title:
          "Наша команда",
        dropdownTitle:
          "Наша команда",
        description:
          "Познакомьтесь со специалистами, которые сопровождают инвесторов на протяжении всего процесса Golden Visa.",
        button:
          "Познакомиться с командой",
        cards: {
          whoWeAre: {
            title:
              "Кто мы",
            description:
              "Узнайте о нашей компании и нашей миссии.",
          },
          experience: {
            title:
              "Наш опыт",
            description:
              "Узнайте о нашем опыте в сфере недвижимости и получения ВНЖ в Греции.",
          },
          trust: {
            title:
              "Почему нам доверяют клиенты",
            description:
              "Узнайте, почему инвесторы выбирают нашу команду.",
          },
          contact: {
            title:
              "Связаться с консультантами",
            description:
              "Поговорите напрямую со специалистом по Golden Visa.",
          },
        },
      },

      common: {
        explore: "Подробнее",
        freeConsultation:
          "Бесплатная консультация",
        openNavigation:
          "Открыть меню навигации",
        closeNavigation:
          "Закрыть меню навигации",
        home:
          "Greece Golden Visa — Главная",
        mobileNavigation:
          "Мобильная навигация",
        languageEnglish:
          "Английский",
        languageRussian:
          "Русский",
        switchToEnglish:
          "Переключить на английский",
        switchToRussian:
          "Переключить на русский",
        specialistNote:
          "Поговорите напрямую со специалистом по Golden Visa.",
      },
    },

    hero: {
      title:
        "Инвестируйте в Грецию.",
      highlight:
        "Получите ВНЖ в Европе.",
      description:
        "Выберите подходящий инвестиционный путь в Греции и получите экспертное сопровождение на протяжении всего процесса получения ВНЖ.",
      primaryCta:
        "Проверить соответствие требованиям",
      secondaryCta:
        "Изучить инвестиционные направления →",
      trust: {
        family: {
          title: "Семья",
          description:
            "Преимущества ВНЖ",
        },
        eu: {
          title: "ЕС",
          description:
            "Доступ к Шенгенской зоне",
        },
        expert: {
          title: "Эксперт",
          description:
            "Профессиональное сопровождение",
        },
      },
    },

    trustCompass: {
      intro: {
        eyebrow:
          "ПОЧЕМУ НАМ ДОВЕРЯЮТ ИНВЕСТОРЫ",
        title:
          "Техническая экспертиза.",
        highlight:
          "Персональное сопровождение.",
        description:
          "Инвестируя в недвижимость в другой стране, важно работать со специалистом, который понимает не только процесс Golden Visa. Важно понимать и сам объект недвижимости.",
      },

      profile: {
        imageAlt:
          "Светлана Новикова, дипломированный инженер-строитель и консультант по Golden Visa",
        badge:
          "Консультант Golden Visa",
        eyebrow:
          "ВАШ КОНСУЛЬТАНТ",
        role: {
          engineer:
            "Дипломированный инженер-строитель",
          advisor:
            "Консультант Golden Visa",
        },
        description:
          "Светлана объединяет технические знания, опыт работы с недвижимостью и экспертизу в сфере Golden Visa, помогая международным инвесторам принимать взвешенные решения до приобретения недвижимости в Греции.",
        credentials: {
          experience:
            "ЛЕТ ОПЫТА",
          properties:
            "ОБЪЕКТОВ ПРОВЕРЕНО",
        },
        languages:
          "Поддержка на английском, греческом и русском языках.",
      },

      approach: {
        eyebrow:
          "НАШЕ ОТЛИЧИЕ",
        title:
          "Решение о покупке",
        highlight:
          "основано на экспертизе.",
        items: {
          engineer: {
            title:
              "Инженерный подход",
            description:
              "Недвижимость рассматривается с технической точки зрения до того, как вы принимаете финансовое решение.",
          },
          independent: {
            title:
              "Независимая оценка",
            description:
              "Главный вопрос — соответствует ли объект вашим целям, а не просто возможность завершить сделку.",
          },
          coordinated: {
            title:
              "Единый координированный процесс",
            description:
              "Технические, юридические и профессиональные этапы координируются, чтобы вы всегда понимали, что происходит и почему.",
          },
          international: {
            title:
              "Поддержка международных инвесторов",
            description:
              "Понятная коммуникация и сопровождение для инвесторов, которые изучают греческий рынок недвижимости из-за рубежа.",
          },
        },
      },

      dueDiligence: {
        eyebrow:
          "ДО ПОКУПКИ",
        title:
          "Техническая проверка",
        highlight:
          "до начала инвестирования.",
        description:
          "Объект может выглядеть идеально на бумаге и при этом иметь проблемы, влияющие на его стоимость, законность или соответствие требованиям Golden Visa. Техническая проверка помогает выявить их до принятия обязательств.",
        items: {
          planning: {
            title:
              "Планирование и разрешения",
            description:
              "Проверка строительных разрешений и соответствия требованиям планирования.",
          },
          unauthorised: {
            title:
              "Несогласованные работы",
            description:
              "Выявление незаконного строительства или несанкционированных изменений.",
          },
          documentation: {
            title:
              "Техническая документация",
            description:
              "Проверка планов, записей и соответствующих документов на недвижимость.",
          },
          buildingIdentity: {
            title:
              "Электронная идентификация здания",
            description:
              "Оценка технической документации объекта недвижимости.",
          },
          goldenVisa: {
            title:
              "Соответствие требованиям Golden Visa",
            description:
              "Техническая оценка того, соответствует ли объект выбранному вами инвестиционному направлению.",
          },
        },
      },

      statement: {
        eyebrow:
          "НАШ ПОДХОД",
        description:
          "Вы совершаете значительную инвестицию на зарубежном рынке. Наша задача — помочь вам понять объект, процесс и решения, которые необходимо принять до инвестирования.",
        role:
          "Дипломированный инженер-строитель",
      },
    },

    greeceExperience: {
      intro: {
        label:
          "Почему Греция",
        title:
          "Представьте свои утра такими.",
        description:
          "Больше, чем ВНЖ. Образ жизни, основанный на свободе, безопасности и средиземноморском стиле.",
      },

      sceneEyebrow:
        "Жизнь в Греции",

      scenes: {
        morning: {
          title:
            "Представьте свои утра такими.",
          description:
            "Кофе у моря. Солнце каждый день.",
        },

        possibilities: {
          title:
            "Один дом. Безграничные возможности.",
          description:
            "Из Греции Европа становится частью вашей повседневной жизни.",
        },

        investment: {
          title:
            "Инвестируйте там, где мечтают жить.",
          description:
            "Направление, которое выбирают инвесторы со всего мира.",
        },

        future: {
          title:
            "Будущее, которое ваша семья сможет назвать домом.",
          description:
            "Создавайте воспоминания в Греции для будущих поколений.",
        },
      },

      previous:
        "Предыдущая сцена",
      next:
        "Следующая сцена",
      goToScene:
        "Перейти к сцене",
      swipe:
        "Проведите, чтобы продолжить",
    },

    whatWeDo: {
      intro: {
        eyebrow:
          "ЧТО МЫ ДЕЛАЕМ",
        title:
          "Больше, чем Golden Visa.",
        highlight:
          "Единый инвестиционный процесс.",
        description:
          "От выбора подходящей недвижимости до завершения процесса Golden Visa мы объединяем технические, юридические и инвестиционные аспекты в едином координированном процессе.",
      },

      approach: {
        eyebrow:
          "НАШ ПОДХОД",
        title:
          "Один процесс.",
        highlight:
          "Каждая важная деталь.",
      },

      approaches: {
        propertySelection: {
          title:
            "ВЫБОР НЕДВИЖИМОСТИ",
          shortTitle:
            "Выбор недвижимости",
          tabDescription:
            "Найдите подходящий объект.",
          description:
            "Мы помогаем подобрать недвижимость, соответствующую вашим инвестиционным целям, предпочтениям по расположению и требованиям Golden Visa.",
        },

        technicalDueDiligence: {
          title:
            "ТЕХНИЧЕСКАЯ ПРОВЕРКА",
          shortTitle:
            "Техническая проверка",
          tabDescription:
            "Знайте, что вы покупаете.",
          description:
            "До принятия обязательств мы проверяем техническое состояние объекта и его соответствие требованиям планирования, чтобы выявить возможные проблемы и подтвердить его соответствие вашим инвестиционным целям.",
        },

        legalVisaCoordination: {
          title:
            "ЮРИДИЧЕСКОЕ И ВИЗОВОЕ СОПРОВОЖДЕНИЕ",
          shortTitle:
            "Юридическое и визовое сопровождение",
          tabDescription:
            "Единый координированный процесс.",
          description:
            "Мы координируем юридические вопросы и процесс Golden Visa с соответствующими специалистами, связывая все этапы в единую понятную структуру.",
        },

        ongoingSupport: {
          title:
            "ПОСТОЯННОЕ СОПРОВОЖДЕНИЕ",
          shortTitle:
            "Постоянное сопровождение",
          tabDescription:
            "Поддержка и после покупки.",
          description:
            "Наша работа не заканчивается после завершения покупки. Мы остаёмся на связи, чтобы координировать следующие этапы и оказывать необходимую поддержку.",
        },
      },

      coordinated: {
        eyebrow:
          "ЕДИНЫЙ КООРДИНИРОВАННЫЙ ПОДХОД",
        title:
          "Ваша инвестиция не передаётся",
        highlight:
          "от одного специалиста к другому.",
        description:
          "Мы координируем процесс вокруг ваших интересов.",
        button:
          "Обсудить вашу инвестицию",
      },

      stats: {
        experience:
          "Лет опыта",
        properties:
          "Объектов проверено",
        languages:
          "Языка поддержки",
      },

      finalCta: {
        eyebrow:
          "ВАШ СЛЕДУЮЩИЙ ШАГ",
        title:
          "Готовы изучить ваши варианты?",
        button:
          "Проверить соответствие требованиям",
      },
    },

    investmentRoutes: {
      intro: {
        eyebrow:
          "ИНВЕСТИЦИОННЫЕ НАПРАВЛЕНИЯ",
        title:
          "Выберите направление",
        highlight:
          "которое соответствует вашим целям.",
        description:
          "У каждого инвестора свои приоритеты. Изучите доступные инвестиционные возможности и определите стратегию, которая подходит именно вам.",
      },

      card: {
        routeLabel:
          "ИНВЕСТИЦИОННОЕ НАПРАВЛЕНИЕ",
        bestFor:
          "ПОДХОДИТ ДЛЯ",
        explore:
          "Изучить направление",
      },

      navigation: {
        previous:
          "Предыдущее инвестиционное направление",
        next:
          "Следующее инвестиционное направление",
        explore:
          "Изучить это инвестиционное направление",
        goTo:
          "Перейти к инвестиционному направлению",
      },

      routes: {
        "ready-properties": {
          title:
            "Готовая недвижимость",
          description:
            "Изучите готовые объекты, доступные для покупки, — подходящий вариант для инвесторов, которые ищут понятный путь к получению греческой Golden Visa.",
          bestFor:
            "Инвесторов, которые ищут простой и готовый к использованию объект недвижимости.",
        },

        "strategic-properties": {
          title:
            "Стратегические возможности",
          description:
            "Изучите объекты с потенциалом реконструкции или развития — более стратегический подход к инвестициям в Греции.",
          bestFor:
            "Инвесторов, которые ценят гибкость и тщательно отобранные возможности.",
        },

        "commercial-hospitality": {
          title:
            "Коммерческая и гостиничная недвижимость",
          description:
            "Изучите коммерческие и гостиничные объекты для инвесторов, рассматривающих более специализированные инвестиционные возможности в Греции.",
          bestFor:
            "Инвесторов, рассматривающих более крупные или специализированные объекты.",
        },

        alternative: {
          title:
            "Альтернативные направления",
          description:
            "Изучите альтернативные инвестиционные возможности за пределами традиционного владения недвижимостью в зависимости от ваших индивидуальных обстоятельств.",
          bestFor:
            "Инвесторов, которые рассматривают альтернативы традиционному инвестиционному пути.",
        },
      },

      assessment: {
        label:
          "НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?",
        description:
          "Найдите инвестиционное направление, соответствующее вашим целям.",
        button:
          "Выбрать направление",
      },
    },
    propertyOpportunities: {
  intro: {
    eyebrow: "ОБЪЕКТЫ НЕДВИЖИМОСТИ",
    title: "Изучите объекты",
    highlight: "отобранные для ваших инвестиционных целей.",
    description:
      "Изучите подборку объектов недвижимости в разных регионах Греции, которые могут соответствовать различным инвестиционным стратегиям.",
    note:
      "Каждый объект рассматривается с учётом ваших целей ещё до того, как вы принимаете решение о дальнейшем шаге.",
  },

  categories: {
    land: "ЗЕМЛЯ",
    commercial: "КОММЕРЧЕСКАЯ",
    residential: "ЖИЛАЯ",
  },

  route: {
    notVerified: "Направление требует проверки",
    investmentRoute: "Инвестиционное направление",
  },

  fallbacks: {
    title: "Инвестиционный объект",
    location: "Греция",
    type: "Недвижимость",
    description:
      "Отобранный объект недвижимости в Греции.",
    status: "Доступен",
  },

  image: {
    selectedProperty: "ОТОБРАННЫЙ ОБЪЕКТ",
  },

  card: {
    selectedOpportunity: "ОТОБРАННАЯ ВОЗМОЖНОСТЬ",
    indicativeValue: "ОРИЕНТИРОВОЧНАЯ СТОИМОСТЬ",
    viewProperty: "Посмотреть объект",
  },

  details: {
    type: "ТИП",
    size: "ПЛОЩАДЬ",
    bedrooms: "СПАЛЬНИ",
    status: "СТАТУС",
    investmentRoute: "ИНВЕСТИЦИОННОЕ НАПРАВЛЕНИЕ",
    bathrooms : "Ванные комнаты"
  },

  approach: {
    label: "НАШ ПОДХОД",
    description:
      "Мы рассматриваем объекты с учётом ваших инвестиционных целей, а не просто как доступные предложения.",
  },

  navigation: {
    previous: "Предыдущий объект",
    next: "Следующий объект",
    explore: "Изучить объект: {title}",
    goTo: "Перейти к объекту: {title}",
  },

  cta: {
    eyebrow: "У ВАС УЖЕ ЕСТЬ КОНКРЕТНЫЙ ОБЪЕКТ?",
    title: "Давайте рассмотрим его вместе.",
    description:
      "Отправьте нам информацию об объекте или расскажите, что именно вы ищете, и мы обсудим следующий шаг.",
    button: "Запросить проверку объекта",
  },
},
finalCta: {
  eyebrow: "НАЧНИТЕ СВОЙ ПУТЬ",

  title: "Ваш путь в Грецию",

  highlight: "начинается с ясности.",

  description:
    "Расскажите нам, что именно вы ищете, и получите предварительную оценку инвестиционного направления, требований к недвижимости и дальнейших шагов с учётом ваших целей.",

  primaryButton: "Начать бесплатную оценку",

  secondaryButton: "Связаться с нами",

  sideNote: {
    label: "ПЕРВИЧНАЯ КОНСУЛЬТАЦИЯ",

    description:
      "Первая содержательная беседа о ваших целях, предпочтительном регионе и инвестиционном направлении.",
  },
},
footer: {
  brand: {
    description:
      "Независимое техническое сопровождение и консультирование международных инвесторов, рассматривающих Грецию и греческую Golden Visa.",

    credentialOne:
      "ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ",

    credentialTwo:
      "КОНСУЛЬТИРОВАНИЕ ПО GOLDEN VISA",
  },

  columns: {
    goldenVisa: {
      title: "Golden Visa",

      links: {
        investmentRoutes:
          "Инвестиционные направления",

        howItWorks:
          "Как это работает",

        technicalDueDiligence:
          "Техническая проверка",

        faq:
          "Частые вопросы",
      },
    },

    explore: {
      title: "Изучить",

      links: {
        about:
          "О нас",

        greeceExperience:
          "Жизнь в Греции",

        clientsTrust:
          "Почему нам доверяют",

        contact:
          "Контакты",
      },
    },
  },

  contact: {
    title: "Контакты",

    details: {
      email: "EMAIL",
      phone: "ТЕЛЕФОН",
      whatsapp: "WHATSAPP",
    },

    basedIn: "МЫ НАХОДИМСЯ В",

    location: "Греции",
  },

  professionalNote: {
    label: "ОБРАТИТЕ ВНИМАНИЕ",

    description:
      "Информация, представленная на этом сайте, носит исключительно общий информационный характер и не является юридической, налоговой или инвестиционной консультацией.",
  },

  bottom: {
    allRightsReserved:
      "Все права защищены.",

    websiteCraftedBy:
      "Сайт разработан",
  },

  legal: {
    title: "Правовая информация",

    privacy:
      "Политика конфиденциальности",

    terms:
      "Условия использования",

    cookies:
      "Политика использования файлов cookie",
  },

  languages: {
    available:
      "Доступные языки",
  },
},

  },
};



const LanguageContext = createContext(null);

const SUPPORTED_LANGUAGES = ["en", "ru"];

function getLanguageFromPath(pathname) {
  const firstSegment = pathname
    ?.split("/")
    .filter(Boolean)[0];

  if (SUPPORTED_LANGUAGES.includes(firstSegment)) {
    return firstSegment;
  }

  return "en";
}

function getNestedValue(object, path) {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, object);
}

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const urlLanguage =
    getLanguageFromPath(pathname);

  const [language, setLanguageState] =
    useState(urlLanguage);

  useEffect(() => {
    setLanguageState(urlLanguage);

    document.documentElement.lang =
      urlLanguage;
  }, [urlLanguage]);

  function setLanguage(nextLanguage) {
    if (
      !SUPPORTED_LANGUAGES.includes(
        nextLanguage
      )
    ) {
      return;
    }

    const currentPath =
      pathname || "/";

    const segments = currentPath
      .split("/")
      .filter(Boolean);

    if (
      segments.length > 0 &&
      SUPPORTED_LANGUAGES.includes(
        segments[0]
      )
    ) {
      segments[0] = nextLanguage;
    } else {
      segments.unshift(nextLanguage);
    }

    const nextPath =
      "/" + segments.join("/");

    setLanguageState(nextLanguage);

    document.documentElement.lang =
      nextLanguage;

    router.replace(nextPath);
  }

  function toggleLanguage() {
    const nextLanguage =
      language === "en"
        ? "ru"
        : "en";

    setLanguage(nextLanguage);
  }

  function t(path, variables = {}) {
    const value = getNestedValue(
      translations[language],
      path
    );

    const englishValue = getNestedValue(
      translations.en,
      path
    );

    const result =
      value !== undefined
        ? value
        : englishValue !== undefined
          ? englishValue
          : path;

    if (typeof result !== "string") {
      return result;
    }

    return result.replace(
      /\{(\w+)\}/g,
      (_, key) =>
        variables[key] !== undefined
          ? variables[key]
          : `{${key}}`
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}