# Chef CMS

This is a sample Payload-CMS based recipe blog administration, complete with required data models and Google cloud storage adapter for media uploads.

### Requirements
To host this app publically, you need:

1. PostgreSQL database
2. GCP bucket with public access enabled
3. NextJS capable host

### Development

To spin up the project locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `yarn && yarn dev`
1. Now `open http://localhost:3000/admin` to access the admin panel
1. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.
