import type { CollectionConfig } from "payload/types";

import { admins } from "../../access/admins";
import { adminsOrPublished } from "../../access/adminsOrPublished";
// import { MediaBlock } from "../../blocks/MediaBlock";
import { slugField } from "../../fields/slug";
// import { populateArchiveBlock } from "../../hooks/populateArchiveBlock";
import { populatePublishedAt } from "../../hooks/populatePublishedAt";
// import { revalidateProject } from './hooks/revalidateProject'
// import { LinkType } from '../../fields/link'

export const Ingredients: CollectionConfig = {
  slug: "ingredients",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
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
      name: "energy",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "fats",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "carbs",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "proteins",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "fibres",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "salt",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    slugField(),
  ],
};
