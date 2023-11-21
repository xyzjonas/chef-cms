import { gcsAdapter } from "@payloadcms/plugin-cloud-storage/gcs";

export const adapter = gcsAdapter({
  options: {
    credentials: JSON.parse(process.env.GCS_CREDENTIALS || "{}"), // this env variable will have stringify version of your credentials.json file
  },
  bucket: process.env.GCS_BUCKET,
});
