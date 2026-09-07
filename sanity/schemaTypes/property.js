import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "price",
      title: "Price (€)",
      type: "number",
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
            title: "Not Yet Verified",
            value: "Not Yet Verified",
          },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

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
            title: "Land",
            value: "Land",
          },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Status",
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

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    defineField({
      name: "propertyUrl",
      title: "Property Listing URL",
      type: "url",
      description:
        "External property page, such as Homes in Greece or another partner listing.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
});