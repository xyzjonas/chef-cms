/** @type {import('next').NextConfig} */
// const nextConfig = {};

const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

// module.exports = nextConfig;
module.exports = withPayload(
  {
    // your Next config here
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./payload/payload.config.ts"),

    // Point to custom Payload CSS (optional)
    // cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),

    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: "/admin",
  }
);