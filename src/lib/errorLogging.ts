export function logClientError(error: unknown, info?: unknown) {
	// Hook this up to Sentry/LogRocket later
	console.error('[ClientError]', error, info);
}