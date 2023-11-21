import { gcsAdapter } from "@payloadcms/plugin-cloud-storage/gcs";

const credentials: string = process.env.GCS_CREDENTIALS ?? "{}";
const bucket: string = process.env.GCS_BUCKET ?? "missing-GCS_BUCKET-variable";

export const adapter = gcsAdapter({
  options: {
    credentials: JSON.parse(credentials), // this env variable will have stringify version of your credentials.json file
  },
  bucket: bucket,
});
