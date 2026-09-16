import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",

  fields: [
    // =========================================================
    // BASIC INFORMATION
    // =========================================================

    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      description: "The main name displayed for the property.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main image displayed on the property card.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      description: "Additional images for this property.",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // =========================================================
    // LOCATION
    // =========================================================

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "The specific area or location of the property.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "city",
      title: "City",
      type: "string",
      description: "The city where the property is located.",
      validation: (Rule) => Rule.required(),
    }),

    // =========================================================
    // INVESTMENT
    // =========================================================

    defineField({
      name: "price",
      title: "Price (€)",
      type: "number",
      description: "The property price in euros.",
      validation: (Rule) => Rule.required().positive(),
    }),

    defineField({
      name: "route",
      title: "Investment Route",
      type: "string",
      options: {
        list: [
          {
            title: "€250K",
            value: "€250K",
          },
          {
            title: "€400K",
            value: "€400K",
          },
          {
            title: "€800K",
            value: "€800K",
          },
          {
            title: "Lifestyle Investment",
            value: "Lifestyle Investment",
          },
          {
            title: "Not Yet Verified",
            value: "Not Yet Verified",
          },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    // =========================================================
    // PROPERTY DETAILS
    // =========================================================

    defineField({
      name: "type",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          {
            title: "Apartment",
            value: "Apartment",
          },
          {
            title: "Residence",
            value: "Residence",
          },
          {
            title: "Villa",
            value: "Villa",
          },
          {
            title: "Land",
            value: "Land",
          },
          {
            title: "Commercial",
            value: "Commercial",
          },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "size",
      title: "Size (m²)",
      type: "number",
      description: "The property's size in square metres.",
      validation: (Rule) => Rule.positive(),
    }),

    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      description: "Number of bedrooms.",
      validation: (Rule) => Rule.integer().min(0),
    }),

    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      description: "Number of bathrooms.",
      validation: (Rule) => Rule.integer().min(0),
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      description:
        "Short features such as sea view, parking, pool, renovated, etc.",
      of: [
        {
          type: "string",
        },
      ],
    }),

    // =========================================================
    // PROPERTY STATUS
    // =========================================================

    defineField({
      name: "status",
      title: "Property Status",
      type: "string",
      options: {
        list: [
          {
            title: "Ready to Move",
            value: "Ready to Move",
          },
          {
            title: "Available",
            value: "Available",
          },
          {
            title: "Reserved",
            value: "Reserved",
          },
          {
            title: "Sold",
            value: "Sold",
          },
        ],
        layout: "dropdown",
      },
      initialValue: "Available",
      validation: (Rule) => Rule.required(),
    }),

    // =========================================================
    // VISIBILITY
    // =========================================================

    defineField({
      name: "visibility",
      title: "Visibility",
      type: "string",
      description:
        "Controls whether this property appears on the public website.",
      options: {
        list: [
          {
            title: "Published",
            value: "Published",
          },
          {
            title: "Draft",
            value: "Draft",
          },
        ],
        layout: "radio",
      },
      initialValue: "Published",
      validation: (Rule) => Rule.required(),
    }),

    // =========================================================
    // FEATURED
    // =========================================================

    defineField({
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      description:
        "Marks this property as featured for future featured-property sections.",
      initialValue: false,
    }),

    // =========================================================
    // DESCRIPTION
    // =========================================================

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      description: "The main description of the property.",
      validation: (Rule) => Rule.required(),
    }),

    // =========================================================
    // EXTERNAL LISTING
    // =========================================================

    defineField({
      name: "propertyUrl",
      title: "Property Listing URL",
      type: "url",
      description:
        "External property page, such as Homes in Greece or another partner listing.",
      validation: (Rule) => Rule.required(),
    }),
  ],

  // =========================================================
  // SANITY STUDIO PREVIEW
  // =========================================================

  preview: {
    select: {
      title: "title",
      location: "location",
      price: "price",
      status: "status",
      visibility: "visibility",
      media: "mainImage",
    },

    prepare({
      title,
      location,
      price,
      status,
      visibility,
      media,
    }) {
      const formattedPrice =
        typeof price === "number"
          ? `€${price.toLocaleString("en-US")}`
          : "No price";

      return {
        title: title || "Untitled Property",
        subtitle: `${location || "No location"} · ${formattedPrice} · ${
          status || "No status"
        } · ${visibility || "No visibility"}`,
        media,
      };
    },
  },
});