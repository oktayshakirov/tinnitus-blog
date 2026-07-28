# TinnitusHelp.me

Comprehensive and user-friendly blog site aimed at providing a helpful resource for individuals dealing with tinnitus. Built with Next.js, TypeScript, and Material UI, this blogs features in-depth articles, tips, and advice to better understand and manage tinnitus. In addition to valuable information, the platform also offers therapeutic audio sounds as a unique form of relief for users. The blog site is responsive, ensuring seamless navigation on all devices. Contribute to making this initiative more beneficial.

## Demo

![Desktop Demo](https://oktayshakirov.com/assets/images/projects/tinnitus-blog.png 'Desktop Demo')

<p align="center">
  <a href="https://www.TinnitusHelp.me/"><strong>➥ Live Demo</strong></a>
</p>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Push notifications for new content

The mobile app sends a "New Post" notification when a document appears in the
matching Firestore collection (`posts`, `sounds`). **This is automatic:** push
content to `main` and `.github/workflows/notify-new-content.yml` waits for the
deployment to go live, then syncs and notifies. Nothing needs to be run by hand.

It needs three repository secrets — `FIREBASE_PROJECT_ID`,
`FIREBASE_CLIENT_EMAIL` and `FIREBASE_PRIVATE_KEY` — under Settings → Secrets and
variables → Actions.

**Do not move the sync back into `npm run build`.** It used to live there, and
because a Vercel build finishes before the production alias is promoted,
notifications went out while the URL still returned 404 — taps in the first ~15
seconds hit a missing page. That is why the trigger is a post-deploy workflow
rather than a build step.

Two independent checks keep that from happening again. `scripts/waitForDeploy.js`
polls `public/content-index.json`, which ships *inside* the deployment, until the
live copy lists everything in the checkout — proof that production is serving
this commit. Then `scripts/syncContent.js` re-checks each individual article URL
before flagging it. Content that fails either check is skipped rather than
synced silently, so it stays eligible and still notifies exactly once on a later
run.

Content dated more than 48 hours ago syncs silently, so backfills and imports
never notify.

`npm run sync-content` runs the same sync from a checkout if you ever need to
send one by hand — a timed-out workflow can also just be re-run from the Actions
tab. If you replace this site with a different stack, keep serving
`/content-index.json` in the same shape and the deploy gate keeps working.

## License

This project is provided for viewing purposes only. All rights are reserved. No part of this project may be copied, modified, or redistributed without explicit written permission from the author.
