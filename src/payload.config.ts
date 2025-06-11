// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
// import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import nodemailer from "nodemailer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // db: sqliteAdapter({
  //   client: {
  //     url: process.env.DATABASE_URI || "",
  //   },
  // }),

  db: vercelPostgresAdapter({
    //! CHANGED TO POSTRESS
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),
  sharp,
  plugins: [
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
    formBuilderPlugin({
      // see below for a list of available options
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: "emails.bwd@zohomail.com",
    defaultFromName: "BWD",
    // Nodemailer transportOptions
    // Any Nodemailer transport
    transport: await nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465, //587
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }),
  }),
});
