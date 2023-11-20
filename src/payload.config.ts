import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import { Users } from "./collections/Users";
import { Recipes } from "./collections/Recipes";
import { Ingredients } from "./collections/Ingredients";
import { Categories } from "./collections/Categories";
import { Tags } from "./collections/Tags";
import { Media } from "./collections/Media";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { gcsAdapter } from "@payloadcms/plugin-cloud-storage/gcs";

// const adapter = gcsAdapter({
//   options: {
//     credentials: JSON.parse(process.env.GCS_CREDENTIALS || "{}"), // this env variable will have stringify version of your credentials.json file
//   },
//   bucket: process.env.GCS_BUCKET,
// });

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Recipes, Ingredients, Media, Categories, Tags, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    payloadCloud(),
    // cloudStorage({ images })
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
