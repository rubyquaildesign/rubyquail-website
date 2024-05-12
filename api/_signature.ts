import { Sha256Signer } from 'activitypub-http-signatures';
const domain =
  process.env.VERCEL_ENV === 'development'
    ? 'ruby-dev.tunnelto.dev'
    : process.env.VERCEL_URL ?? '';
export async function signAndSend(
  url: string,
  headers: Record<string, unknown>,
  method: 'GET' | 'POST',
  body?: string,
  key: string = `https://${domain}/api/pub/blog/actor#main-key`,
): Promise<Response> {
  const keyID = `https://${domain}/api/pub/blog/actor#main-key`;

  console.log(process.env.APUB_PRIVATE);
  const targetUrl = new URL(url);
  const signHeaders = {
    host: targetUrl.host,
    date: new Date().toUTCString(),
  };
  const signer = new Sha256Signer({
    privateKey: process.env.APUB_PRIVATE ?? '',
    publicKeyId: keyID,
    headerNames: [...Object.keys(signHeaders), '(request-target)'],
  });
  console.log(signer);
  const signature = signer.sign({
    url: targetUrl.toString(),
    headers: signHeaders,
    method: 'GET',
  });
  console.log(signature);
  const data = await fetch(url, {
    body,
    method,
    headers: {
      ...headers,
      ...signHeaders,
      signature,
    },
  });
  return data;
}
