declare module 'activitypub-http-signatures' {
	/**
	 * Activitypub HTTP Signatures
	 * Based on [HTTP Signatures draft 08](https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures-08)
	 * @module activitypub-http-signatures
	 */
	export class Sha256Signer {
		#private;
		/**
		 * Class for signing a request and returning the signature header
		 * @param {object}	options	Config options
		 * @param {string}	options.publicKeyId	URI for public key that must be used for verification
		 * @param {string}	options.privateKey	Private key to use for signing
		 * @param {string[]}	options.headerNames	Names of headers to use in generating signature
		 */
		constructor({
			publicKeyId,
			privateKey,
			headerNames,
		}: {
			publicKeyId: any;
			privateKey: any;
			headerNames: any;
		});
		/**
		 * Generate the signature header for an outgoing message
		 * @param	{object}	reqOptions	Request options
		 * @param	{string}	reqOptions.url	The full URL of the request to sign
		 * @param	{string}	reqOptions.method	Method of the request
		 * @param	{object}	reqOptions.headers	Dict of headers used in the request
		 * @returns	{string}	Value for the signature header
		 */
		sign({
			url,
			method,
			headers,
		}: {
			url: any;
			method: any;
			headers: any;
		}): string;
	}
	/**
	 * Incoming request parser and Signature factory.
	 * If you wish to support more signature types you can extend this class
	 * and overide getSignatureClass.
	 */
	export class Parser {
		/**
		 * Parse an incomming request's http signature header
		 * @param	{object}	reqOptions	Request options
		 * @param	{string}	reqOptions.url	The pathname (and query string) of the request URL
		 * @param	{string}	reqOptions.method	Method of the request
		 * @param	{object}	reqOptions.headers	Dict of headers used in the request
		 * @returns {Signature} Object representing the signature
		 * @throws	{UnkownAlgorithmError}	If the algorithm used isn't one we know how to verify
		 */
		parse({
			headers,
			method,
			url,
		}: {
			headers: any;
			method: any;
			url: any;
		}): Sha256Signature;
		/**
		 * Construct the signature class for a given algorithm.
		 * Override this method if you want to support additional
		 * algorithms.
		 * @param	{string}	algorithm The algorithm used by the signed request
		 * @param	{object}	options
		 * @param	{Buffer}	options.signature	The signature as a buffer
		 * @param	{string}	options.string	The string that was signed
		 * @param	{string}	options.keyId	The ID of the public key to be used for verification
		 * @returns	{Signature}
		 * @throws	{UnkownAlgorithmError}	If an unknown algorithm was used
		 */
		getSignatureClass(
			algorithm: any,
			{
				signature,
				string,
				keyId,
			}: {
				signature: any;
				string: any;
				keyId: any;
			},
		): Sha256Signature;
	}
	export class UnkownAlgorithmError extends Error {}
	export class Signature {
		#private;
		constructor(keyId: any);
		get keyId(): any;
	}
	export class Sha256Signature extends Signature {
		#private;
		/**
		 * Class representing the HTTP signature
		 * @param	{object}	options
		 * @param	{Buffer}	options.signature	The signature as a buffer
		 * @param	{string}	options.string	The string that was signed
		 * @param	{string}	options.keyId	The ID of the public key to be used for verification
		 */
		constructor({
			signature,
			string,
			keyId,
		}: {
			signature: any;
			string: any;
			keyId: any;
		});
		/**
		 * @property {string} keyId The ID of the public key that can verify the signature
		 */
		/**
		 * Verify the signature using a public key
		 * @param	{string} key The public key matching the signature's keyId
		 * @returns	{boolean}
		 */
		verify(key: any): any;
	}
	const _default: Parser;
	/**
	 * Default export: new instance of Parser class
	 */
	export default _default;
}
