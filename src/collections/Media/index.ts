import path from "path";
import { CollectionConfig } from "payload/types";
import { getUrl } from "../../cloud";
import { renameMediaFile } from "./hooks";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "alt"],
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../../media"),
    staticURL: getUrl(),
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
      {
        name: "small",
        height: 300,
        width: 300,
        position: "centre",
      },
      {
        name: "medium",
        height: 600,
        width: 600,
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
  hooks: {
    beforeOperation: [renameMediaFile],
  },
};
