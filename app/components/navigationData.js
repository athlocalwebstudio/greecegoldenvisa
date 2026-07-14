import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Home,
  Building2,
  Landmark,
  Scale,
  Sun,
  Globe2,
  TrendingUp,
  HeartHandshake,
  BookOpen,
  Calculator,
  ClipboardCheck,
  CircleHelp,
  Users,
  Briefcase,
  Award,
  Phone,
} from "lucide-react";

export const navigation = [
  {
    title: "The Program",
    id: "the-program",
    hasDropdown: true,

    dropdown: {
      title: "Greek Golden Visa Program",

      description:
        "Everything you need to understand before starting your residency journey in Greece.",

      button: "Explore the Program",

      cards: [
        {
          title: "Residency Benefits",
          description:
            "Discover the rights and advantages of becoming a Greek Golden Visa holder.",
          icon: FileText,
          href: "/program/benefits",
        },

        {
          title: "Investment Requirements",
          description:
            "Learn the investment criteria and qualifying options available.",
          icon: ShieldCheck,
          href: "/program/requirements",
        },

        {
          title: "Your Eligibility",
          description:
            "Check whether you meet the requirements before applying.",
          icon: CheckCircle2,
          href: "/program/eligibility",
        },

        {
          title: "Application Journey",
          description:
            "Follow every step from choosing your investment to receiving residency.",
          icon: Workflow,
          href: "/program/process",
        },
      ],
    },
  },

  {
    title: "Investment Routes",
    id: "investment-routes",
    hasDropdown: true,

    dropdown: {
      title: "Investment Routes",

      description:
        "Choose the investment strategy that best matches your personal goals.",

      button: "Find Your Route",

      cards: [
        {
          title: "Ready-to-Move Properties",
          description:
            "Browse completed homes that already qualify for the program.",
          icon: Home,
          href: "/investments/ready-properties",
        },

        {
          title: "Strategic Property Opportunities",
          description:
            "Explore renovation and redevelopment investment opportunities.",
          icon: Building2,
          href: "/investments/strategic-properties",
        },

        {
          title: "Alternative Investments",
          description:
            "Discover investment options beyond traditional real estate.",
          icon: Landmark,
          href: "/investments/alternative",
        },

        {
          title: "Compare Your Options",
          description:
            "Compare every investment route side-by-side before deciding.",
          icon: Scale,
          href: "/investments/compare",
        },
      ],
    },
  },

  {
    title: "Why Greece",
    id: "why-greece",
    hasDropdown: true,

    dropdown: {
      title: "Why Greece",

      description:
        "Discover why Greece continues to attract international investors from around the world.",

      button: "Discover Greece",

      cards: [
        {
          title: "Mediterranean Lifestyle",
          description:
            "Enjoy exceptional quality of life, climate and culture.",
          icon: Sun,
          href: "/greece/lifestyle",
        },

        {
          title: "Gateway to Europe",
          description:
            "Visa-free access across the Schengen Area and Europe.",
          icon: Globe2,
          href: "/greece/europe",
        },

        {
          title: "Real Estate Potential",
          description:
            "Explore one of Europe's fastest-growing property markets.",
          icon: TrendingUp,
          href: "/greece/market",
        },

        {
          title: "Family & Future",
          description:
            "Build long-term security for you and your family.",
          icon: HeartHandshake,
          href: "/greece/family",
        },
      ],
    },
  },

  {
    title: "Investor Guide",
    id: "investor-guide",
    hasDropdown: true,

    dropdown: {
      title: "Investor Guide",

      description:
        "Useful tools and practical resources for every stage of your investment journey.",

      button: "Open Investor Guide",

      cards: [
        {
          title: "Investor Handbook",
          description:
            "Read our complete guide before making your investment.",
          icon: BookOpen,
          href: "/guide/handbook",
        },

        {
          title: "Investment Calculator",
          description:
            "Estimate costs and understand your investment budget.",
          icon: Calculator,
          href: "/calculator",
        },

        {
          title: "Application Checklist",
          description:
            "Track every document and requirement before applying.",
          icon: ClipboardCheck,
          href: "/guide/checklist",
        },

        {
          title: "Investor Questions",
          description:
            "Find answers to the most frequently asked questions.",
          icon: CircleHelp,
          href: "/faq",
        },
      ],
    },
  },

  {
    title: "Our Team",
    id: "our-team",
    hasDropdown: true,

    dropdown: {
      title: "Meet Our Team",

      description:
        "Get to know the professionals guiding investors throughout the entire Golden Visa process.",

      button: "Meet the Team",

      cards: [
        {
          title: "Who We Are",
          description:
            "Learn about our company and our mission.",
          icon: Users,
          href: "/team",
        },

        {
          title: "Our Experience",
          description:
            "Discover our expertise in Greek real estate and residency.",
          icon: Briefcase,
          href: "/experience",
        },

        {
          title: "Why Clients Trust Us",
          description:
            "See what makes investors choose our team.",
          icon: Award,
          href: "/reviews",
        },

        {
          title: "Contact Our Advisors",
          description:
            "Speak directly with a Golden Visa specialist.",
          icon: Phone,
          href: "/contact",
        },
      ],
    },
  },
];