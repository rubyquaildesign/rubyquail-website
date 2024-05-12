// declare module 'activitypub-http-signatures' {
//   interface SignStringOptions {
//     target: string;
//     method: string;
//     headers: Record<string, unknown>;
//   }
//   function getSignString(options: SignStringOptions): string;
//   function sign(
//     keyOptions: {
//       publicKeyId: string;
//       privateKey: string;
//     },
//     reqOptions: {
//       url: string;
//       method: string;
//       headers: Record<string, unknown>;
//     },
//   ): string;
//   function signSha256(privateKey: string, stringToSign: string): Buffer;
//   function parse(signature: string): Record<string, unknown>;
//   function verify(
//     signature: Buffer,
//     publicKey: string,
//     request: {
//       target: string;
//       method: string;
//       headers: Record<string, unknown>;
//       headerNames: string[];
//     },
//   ): boolean;
//   function verifySha256(
//     signature: Buffer,
//     key: string,
//     signedString: string,
//   ): boolean;
//   const mn: { parse: typeof parse };
//   export default mn;
// }
