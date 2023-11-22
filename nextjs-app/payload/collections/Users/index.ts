import { CollectionConfig } from "payload/types";
import { ensureFirstUserIsAdmin } from "./hooks/ensureFirstUserIsAdmin";
import { admins } from "../../access/admins";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },
  fields: [
    // {
    //   name: "email",
    //   type: "email",
    //   required: true,
    // },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["user"],
      options: [
        {
          label: "admin",
          value: "admin",
        },
        {
          label: "user",
          value: "user",
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
  ],
};
