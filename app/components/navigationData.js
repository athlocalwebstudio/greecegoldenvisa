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

export function getNavigation(language = "en") {
  const prefix = `/${language}`;

  return [
    {
      titleKey: "nav.program.title",
      id: "the-program",
      hasDropdown: true,

      dropdown: {
        titleKey: "nav.program.dropdownTitle",

        descriptionKey: "nav.program.description",

        buttonKey: "nav.program.button",

        cards: [
          {
            titleKey: "nav.program.cards.benefits.title",
            descriptionKey:
              "nav.program.cards.benefits.description",
            icon: FileText,
            href: `${prefix}/program/benefits`,
          },

          {
            titleKey: "nav.program.cards.requirements.title",
            descriptionKey:
              "nav.program.cards.requirements.description",
            icon: ShieldCheck,
            href: `${prefix}/program/requirements`,
          },

          {
            titleKey: "nav.program.cards.eligibility.title",
            descriptionKey:
              "nav.program.cards.eligibility.description",
            icon: CheckCircle2,
            href: `${prefix}/program/eligibility`,
          },

          {
            titleKey: "nav.program.cards.journey.title",
            descriptionKey:
              "nav.program.cards.journey.description",
            icon: Workflow,
            href: `${prefix}/program/journey`,
          },
        ],
      },
    },

    {
      titleKey: "nav.investments.title",
      id: "investment-routes",
      hasDropdown: true,

      dropdown: {
        titleKey: "nav.investments.dropdownTitle",

        descriptionKey: "nav.investments.description",

        buttonKey: "nav.investments.button",

        cards: [
          {
            titleKey:
              "nav.investments.cards.readyProperties.title",
            descriptionKey:
              "nav.investments.cards.readyProperties.description",
            icon: Home,
            href: `${prefix}/investments/ready-properties`,
          },

          {
            titleKey:
              "nav.investments.cards.strategic.title",
            descriptionKey:
              "nav.investments.cards.strategic.description",
            icon: Building2,
            href: `${prefix}/investments/strategic-opportunities`,
          },

          {
            titleKey:
              "nav.investments.cards.alternative.title",
            descriptionKey:
              "nav.investments.cards.alternative.description",
            icon: Landmark,
            href: `${prefix}/investments/alternative-investments`,
          },

          {
            titleKey:
              "nav.investments.cards.compare.title",
            descriptionKey:
              "nav.investments.cards.compare.description",
            icon: Scale,
            href: `${prefix}/investments/compare-options`,
          },
        ],
      },
    },

    {
      titleKey: "nav.greece.title",
      id: "why-greece",
      hasDropdown: true,

      dropdown: {
        titleKey: "nav.greece.dropdownTitle",

        descriptionKey: "nav.greece.description",

        buttonKey: "nav.greece.button",

        cards: [
          {
            titleKey:
              "nav.greece.cards.lifestyle.title",
            descriptionKey:
              "nav.greece.cards.lifestyle.description",
            icon: Sun,
            href: `${prefix}/why-greece/mediterranean-lifestyle`,
          },

          {
            titleKey:
              "nav.greece.cards.europe.title",
            descriptionKey:
              "nav.greece.cards.europe.description",
            icon: Globe2,
            href: `${prefix}/why-greece/gateway-to-europe`,
          },

          {
            titleKey:
              "nav.greece.cards.property.title",
            descriptionKey:
              "nav.greece.cards.property.description",
            icon: TrendingUp,
            href: `${prefix}/why-greece/real-estate-potential`,
          },

          {
            titleKey:
              "nav.greece.cards.family.title",
            descriptionKey:
              "nav.greece.cards.family.description",
            icon: HeartHandshake,
            href: `${prefix}/why-greece/family-and-future`,
          },
        ],
      },
    },

    {
      titleKey: "nav.guide.title",
      id: "investor-guide",
      hasDropdown: true,

      dropdown: {
        titleKey: "nav.guide.dropdownTitle",

        descriptionKey: "nav.guide.description",

        buttonKey: "nav.guide.button",

        cards: [
          {
            titleKey:
              "nav.guide.cards.handbook.title",
            descriptionKey:
              "nav.guide.cards.handbook.description",
            icon: BookOpen,
            href: `${prefix}/investor-guide/investor-handbook`,
          },

          {
            titleKey:
              "nav.guide.cards.calculator.title",
            descriptionKey:
              "nav.guide.cards.calculator.description",
            icon: Calculator,
            href: `${prefix}/investor-guide/calculator`,
          },

          {
            titleKey:
              "nav.guide.cards.checklist.title",
            descriptionKey:
              "nav.guide.cards.checklist.description",
            icon: ClipboardCheck,
            href: `${prefix}/investor-guide/application-checklist`,
          },

          {
            titleKey:
              "nav.guide.cards.faq.title",
            descriptionKey:
              "nav.guide.cards.faq.description",
            icon: CircleHelp,
            href: `${prefix}/investor-guide/faq`,
          },
        ],
      },
    },

    {
      titleKey: "nav.team.title",
      id: "our-team",
      hasDropdown: true,

      dropdown: {
        titleKey: "nav.team.dropdownTitle",

        descriptionKey: "nav.team.description",

        buttonKey: "nav.team.button",

        cards: [
          {
            titleKey:
              "nav.team.cards.whoWeAre.title",
            descriptionKey:
              "nav.team.cards.whoWeAre.description",
            icon: Users,
            href: `${prefix}/team/who-we-are`,
          },

          {
            titleKey:
              "nav.team.cards.experience.title",
            descriptionKey:
              "nav.team.cards.experience.description",
            icon: Briefcase,
            href: `${prefix}/team/our-experience`,
          },

          {
            titleKey:
              "nav.team.cards.trust.title",
            descriptionKey:
              "nav.team.cards.trust.description",
            icon: Award,
            href: `${prefix}/team/why-clients-trust-us`,
          },

          {
            titleKey:
              "nav.team.cards.contact.title",
            descriptionKey:
              "nav.team.cards.contact.description",
            icon: Phone,
            href: `${prefix}/team/contact`,
          },
        ],
      },
    },
  ];
}