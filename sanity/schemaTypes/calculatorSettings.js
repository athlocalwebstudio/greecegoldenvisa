// sanity/schemaTypes/calculatorSettings.js

import { defineField, defineType } from "sanity";

const costFields = [
  defineField({
    name: "name",
    title: "Cost Name",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),

  defineField({
    name: "description",
    title: "Description",
    type: "string",
  }),

  defineField({
    name: "category",
    title: "Cost Category",
    type: "string",
    options: {
      list: [
        {
          title: "General",
          value: "general",
        },
        {
          title: "Main Investor",
          value: "mainInvestor",
        },
        {
          title: "Spouse",
          value: "spouse",
        },
        {
          title: "Child 0–13",
          value: "child",
        },
      ],
      layout: "dropdown",
    },
    initialValue: "general",
    validation: (Rule) => Rule.required(),
  }),

  defineField({
    name: "enabled",
    title: "Enabled",
    type: "boolean",
    initialValue: true,
  }),

  defineField({
    name: "calculationType",
    title: "Calculation Type",
    type: "string",
    options: {
      list: [
        {
          title: "Fixed Amount (€)",
          value: "fixed",
        },
        {
          title: "Percentage (%)",
          value: "percentage",
        },
      ],
      layout: "radio",
    },
    initialValue: "fixed",
    validation: (Rule) => Rule.required(),
  }),

  defineField({
    name: "amount",
    title: "Amount",
    type: "number",
    description:
      "Enter the amount in euros for fixed costs or the percentage value for percentage-based costs.",
    validation: (Rule) => Rule.required().min(0),
  }),

  defineField({
    name: "calculationBase",
    title: "Calculation Base",
    type: "string",
    description:
      "Choose which amount the percentage-based cost should be calculated from.",
    options: {
      list: [
        {
          title: "Property Price",
          value: "propertyPrice",
        },
        {
          title: "Investment Amount",
          value: "investmentAmount",
        },
      ],
      layout: "radio",
    },
    initialValue: "propertyPrice",
    hidden: ({ parent }) =>
      parent?.calculationType !== "percentage",
  }),

  defineField({
    name: "displayLabel",
    title: "Display Label",
    type: "string",
    description:
      'Optional label shown to investors. Example: "From €450" or "3%".',
  }),
];

const costObject = {
  type: "object",

  fields: costFields,

  preview: {
    select: {
      title: "name",
      category: "category",
      amount: "amount",
      calculationType: "calculationType",
      enabled: "enabled",
      calculationBase: "calculationBase",
    },

    prepare({
      title,
      category,
      amount,
      calculationType,
      enabled,
      calculationBase,
    }) {
      const categoryLabels = {
        general: "General",
        mainInvestor: "Main Investor",
        spouse: "Spouse",
        child: "Child 0–13",
      };

      const formattedAmount =
        typeof amount === "number"
          ? calculationType === "percentage"
            ? `${amount}%`
            : `€${amount.toLocaleString("en-US")}`
          : "No amount";

      const calculationBaseLabels = {
        propertyPrice: "Property Price",
        investmentAmount: "Investment Amount",
      };

      const baseLabel =
        calculationType === "percentage"
          ? calculationBaseLabels[
              calculationBase
            ] || "Property Price"
          : null;

      return {
        title: title || "Unnamed Cost",

        subtitle: `${categoryLabels[category] || "General"} · ${formattedAmount}${
          baseLabel ? ` · ${baseLabel}` : ""
        } · ${enabled ? "Enabled" : "Disabled"}`,
      };
    },
  },
};

export default defineType({
  name: "calculatorSettings",

  title: "Calculator Settings",

  type: "document",

  groups: [
    {
      name: "general",
      title: "General",
    },

    {
      name: "routes",
      title: "Investment Routes",
    },

    {
      name: "purchaseCosts",
      title: "Purchase Costs",
    },

    {
      name: "visaCosts",
      title: "Golden Visa Costs",
    },

    {
      name: "inspection",
      title: "Property Inspection",
    },
  ],

  fields: [
    // =========================================================
    // GENERAL
    // =========================================================

    defineField({
      name: "title",

      title: "Calculator Title",

      type: "string",

      group: "general",

      initialValue: "Know Your Investment Budget",

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",

      title: "Calculator Description",

      type: "text",

      rows: 4,

      group: "general",

      initialValue:
        "Estimate the capital required for your Greek Golden Visa investment.",
    }),

    defineField({
      name: "disclaimer",

      title: "Calculator Disclaimer",

      type: "text",

      rows: 5,

      group: "general",

      initialValue:
        "This calculator provides an estimate based on the costs entered below. Actual costs may vary depending on the property, transaction and applicant circumstances.",
    }),

    // =========================================================
    // INVESTMENT ROUTES
    // =========================================================

    defineField({
      name: "routes",

      title: "Investment Routes",

      type: "array",

      group: "routes",

      description:
        "Manage the investment routes available inside the calculator. Disabled routes will not appear on the public calculator.",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "label",

              title: "Route Label",

              type: "string",

              description: 'Example: "€250K"',

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "minimumInvestment",

              title: "Minimum Investment (€)",

              type: "number",

              validation: (Rule) =>
                Rule.required().positive(),
            }),

            defineField({
              name: "title",

              title: "Route Title",

              type: "string",

              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",

              title: "Route Description",

              type: "text",

              rows: 4,
            }),

            defineField({
              name: "enabled",

              title: "Enabled",

              type: "boolean",

              initialValue: true,
            }),
          ],

          preview: {
            select: {
              label: "label",
              title: "title",
              minimumInvestment:
                "minimumInvestment",
              enabled: "enabled",
            },

            prepare({
              label,
              title,
              minimumInvestment,
              enabled,
            }) {
              const amount =
                typeof minimumInvestment ===
                "number"
                  ? `€${minimumInvestment.toLocaleString(
                      "en-US"
                    )}`
                  : "No amount";

              return {
                title: `${label || "Route"} — ${
                  title || "Untitled"
                }`,

                subtitle: `${amount} · ${
                  enabled
                    ? "Enabled"
                    : "Disabled"
                }`,
              };
            },
          },
        },
      ],
    }),

    // =========================================================
    // PURCHASE COSTS
    // =========================================================

    defineField({
      name: "purchaseCosts",

      title: "Purchase Costs",

      type: "array",

      group: "purchaseCosts",

      description:
        "Add any costs related to purchasing the property. You can use fixed amounts or percentage-based costs such as transfer tax.",

      of: [costObject],
    }),

    // =========================================================
    // GOLDEN VISA COSTS
    // =========================================================

    defineField({
      name: "visaFamilyProfile",

      title: "Golden Visa Family Profile",

      type: "string",

      group: "visaCosts",

      description:
        "Describe the applicant profile used for the Golden Visa cost calculation.",

      initialValue:
        "Main investor + spouse + one child aged 0–13",
    }),

    defineField({
      name: "visaCosts",

      title: "Golden Visa Application Costs",

      type: "array",

      group: "visaCosts",

      description:
        "Manage every Golden Visa application cost. Assign each cost to the appropriate category so the calculator can automatically include it when the applicant selects that family member.",

      of: [costObject],
    }),

    // =========================================================
    // PROPERTY INSPECTION
    // =========================================================

    defineField({
      name: "inspectionEnabled",

      title: "Enable Technical Property Inspection",

      type: "boolean",

      group: "inspection",

      initialValue: true,
    }),

    defineField({
      name: "inspectionAmount",

      title: "Inspection Amount (€)",

      type: "number",

      group: "inspection",

      initialValue: 450,

      validation: (Rule) =>
        Rule.required().min(0),
    }),

    defineField({
      name: "inspectionLabel",

      title: "Inspection Display Label",

      type: "string",

      group: "inspection",

      initialValue: "From €450",
    }),

    defineField({
      name: "inspectionDescription",

      title: "Inspection Description",

      type: "text",

      rows: 4,

      group: "inspection",

      initialValue:
        "Technical property inspection to assess the property before proceeding with the investment.",
    }),
  ],

  // =========================================================
  // STUDIO PREVIEW
  // =========================================================

  preview: {
    prepare() {
      return {
        title: "Calculator Settings",

        subtitle:
          "Investment calculator configuration",
      };
    },
  },
});