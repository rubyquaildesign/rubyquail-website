import type { APActor } from 'activitypub-types';
import type { APIRoute } from 'astro';

export const get = async function({ params, request }) {
  const actor = {
    '@context': ["https://www.w3.org/ns/activitystreams",
      "https://w3id.org/security/v1",
    ],
    id: `https://${import.meta.env.VERCEL_URL}/pub/actor.json`,
    type: 'Person',
    preferredUsername: 'Ruby',
    inbox: 'test',
    outbox:'',
  } satisfies APActor
  return {body:JSON.stringify(actor)}
} satisfies APIRoute