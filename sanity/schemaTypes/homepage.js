
import { defineField, defineType } from "sanity";

const DEFAULT_SECTIONS = [
  {
    _key: "hero",
    _type: "object",
    section: "hero",
    enabled: true,
  },
  {
    _key: "trustCompass",
    _type: "object",
    section: "trustCompass",
    enabled: true,
  },
  {
    _key: "whatWeDo",
    _type: "object",
    section: "whatWeDo",
    enabled: true,
  },
  {
    _key: "greeceExperience",
    _type: "object",
    section: "greeceExperience",
    enabled: true,
  },
  {
    _key: "investmentRoutes",
    _type: "object",
    section: "investmentRoutes",
    enabled: true,
  },
  {
    _key: "propertyOpportunities",
    _type: "object",
    section: "propertyOpportunities",
    enabled: true,
  },
  {
    _key: "finalCta",
    _type: "object",
    section: "finalCta",
    enabled: true,
  },
];

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",

  fields: [
    // =========================================================
    // HERO
    // =========================================================

    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: "Main heading of the homepage hero.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroHighlight",
      title: "Hero Highlight",
      type: "string",
      description: "The highlighted part of the hero heading.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
      description: "Short description displayed below the hero heading.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "primaryCtaText",
      title: "Primary Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "primaryCtaLink",
      title: "Primary Button Link",
      type: "string",
      description: "Example: /program/eligibility",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "secondaryCtaText",
      title: "Secondary Button Text",
      type: "string",
    }),

    defineField({
      name: "secondaryCtaLink",
      title: "Secondary Button Link",
      type: "string",
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Main image displayed on the right side of the hero.",
    }),

    // =========================================================
    // TRUST ITEMS
    // =========================================================

    defineField({
      name: "trustItems",
      title: "Trust Items",
      type: "array",
      description:
        "The short trust/value statements shown below the hero CTAs.",
      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),

    // =========================================================
    // HOMEPAGE SECTIONS
    // =========================================================

    defineField({
      name: "sections",
      title: "Homepage Sections",
      type: "array",

      description:
        "Drag sections to change their order. Disable a section to temporarily hide it from the homepage.",

      initialValue: DEFAULT_SECTIONS,

      options: {
        sortable: true,
      },

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "section",
              title: "Section",
              type: "string",

              options: {
                list: [
                  {
                    title: "Hero",
                    value: "hero",
                  },
                  {
                    title: "Trust Compass",
                    value: "trustCompass",
                  },
                  {
                    title: "What We Do",
                    value: "whatWeDo",
                  },
                  {
                    title: "Greece Experience",
                    value: "greeceExperience",
                  },
                  {
                    title: "Investment Routes",
                    value: "investmentRoutes",
                  },
                  {
                    title: "Property Opportunities",
                    value: "propertyOpportunities",
                  },
                  {
                    title: "Final CTA",
                    value: "finalCta",
                  },
                ],

                layout: "dropdown",
              },

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "enabled",
              title: "Visible",
              type: "boolean",
              initialValue: true,
            }),
          ],

          preview: {
            select: {
              section: "section",
              enabled: "enabled",
            },

            prepare({ section, enabled }) {
              const labels = {
                hero: "Hero",
                trustCompass: "Trust Compass",
                whatWeDo: "What We Do",
                greeceExperience: "Greece Experience",
                investmentRoutes: "Investment Routes",
                propertyOpportunities: "Property Opportunities",
                finalCta: "Final CTA",
              };

              return {
                title: labels[section] || section,
                subtitle: enabled ? "Visible" : "Hidden",
              };
            },
          },
        },
      ],
    }),
  ],
});
