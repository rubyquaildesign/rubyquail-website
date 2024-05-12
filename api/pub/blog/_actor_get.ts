import * as process from 'node:process';
import { type VercelResponse } from '@vercel/node';
import { type APActor } from 'activitypub-types';

const domain =
  process.env.VERCEL_ENV === 'development'
    ? 'ruby-dev.tunnelto.dev'
    : process.env.VERCEL_URL ?? '';
export default function get(resp: VercelResponse): void {
  resp.statusCode = 200;
  const actor = {
    '@context': ['https://www.w3.org/ns/activitystreams'],
    type: 'Person',
    id: `https://${domain}/api/pub/blog/actor`,
    outbox: `https://${domain}/api/pub/blog/outbox`,
    inbox: `https://${domain}/api/pub/blog/inbox`,
    preferredUsername: 'blog',
    name: "Ruby Quail's Blog",
    summary: '',
    publicKey: {
      '@context': 'https://w3id.org/security/v1',
      '@type': 'Key',
      id: `https://${domain}/api/pub/blog/actor#main-key`,
      owner: `https://${domain}/api/pub/blog/actor`,
      publicKeyPem: process.env.APUB_PUBLIC,
    },
  } satisfies APActor & { publicKey: any };
  resp
    .setHeader('Content-Type', 'application/activity+json')
    .status(200)
    .json(actor)
    .end();
  return;
}
