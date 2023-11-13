import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
// import { MediaBlock } from "../../blocks/MediaBlock";
import { slugField } from "../../fields/slug";
// import { populateArchiveBlock } from "../../hooks/populateArchiveBlock";
import { populatePublishedAt } from "../../hooks/populatePublishedAt";
// import { revalidateProject } from './hooks/revalidateProject'
// import { LinkType } from '../../fields/link'

export const Recipes: CollectionConfig = {
  slug: "recipes",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/projects/${doc?.slug}`
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`;
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    // afterChange: [revalidateProject],
    // afterRead: [populateArchiveBlock],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "ingredients",
      type: "array",
      fields: [
        {
          name: "ingredients",
          type: "relationship",
          relationTo: "ingredients",
          hasMany: false,
        },
        {
          name: "amount",
          type: "number",
          required: true,
          defaultValue: 1,
        },
        {
          name: "unit",
          type: "radio",
          options: ["piece", "g"],
          required: true,
          defaultValue: "pc",
        },
      ],
    },
    {
      name: "link",
      type: "group",
      fields: [
        {
          name: "href",
          type: "text",
          required: false,
        },
        {
          name: "text",
          type: "text",
          required: false,
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: false,
    },
    // {
    //   name: "categories",
    //   type: "relationship",
    //   relationTo: "categories",
    //   hasMany: true,
    //   admin: {
    //     position: "sidebar",
    //   },
    // },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "relatedRecipes",
      type: "relationship",
      relationTo: "recipes",
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
    },
    slugField(),
  ],
};
