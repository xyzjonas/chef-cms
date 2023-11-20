import path from "path";
import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "alt"],
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../../media"),
    crop: true,
    focalPoint: true,
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        height: 64,
        width: 64,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "type",
      type: "radio",
      options: ["recipe", "category", "content"],
      defaultValue: "recipe",
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "alt",
      type: "text",
      required: false,
    },
  ],
};
