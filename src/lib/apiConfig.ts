/**
 * The public address of the API server.  Vite replaces VITE_API_URL during the
 * build; the fallback keeps the deployed frontend working if the Vercel
 * environment variable has not been added yet.
 */
const configuredApiUrl = import.meta.env.VITE_API_URL || 'https://zomato-clone-production-446d.up.railway.app';

export const API_ORIGIN = configuredApiUrl.replace(/\/$/, '').replace(/\/api$/, '');
export const API_URL = `${API_ORIGIN}/api`;

export async function getErrorMessage(response: Response, fallback: string) {
  try {
    const body = await response.json();
    return body.error || body.message || fallback;
  } catch {
    return fallback;
  }
}
