/**
 * The public address of the API server.  Vite replaces VITE_API_URL during the
 * build.  Set it in Vercel to the public backend address (without /api).
 */
const configuredApiUrl = import.meta.env.VITE_API_URL;

if (!configuredApiUrl) {
  console.error('Missing VITE_API_URL. Add your deployed backend URL in Vercel environment variables.');
}

export const API_ORIGIN = (configuredApiUrl || '').replace(/\/$/, '').replace(/\/api$/, '');
export const API_URL = `${API_ORIGIN}/api`;

export async function getErrorMessage(response: Response, fallback: string) {
  try {
    const body = await response.json();
    return body.error || body.message || fallback;
  } catch {
    return fallback;
  }
}
