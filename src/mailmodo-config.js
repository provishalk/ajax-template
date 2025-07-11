/**
 * Mailmodo configuration with environment variable support
 * Reads configuration from environment variables with fallbacks to default values
 */

// Make environment variables available to the client-side script
window.MAILMODO_SITE_ID = import.meta.env.VITE_MAILMODO_SITE_ID || "3sBXu5uV2H";
window.MAILMODO_BASE_URL =
  import.meta.env.VITE_MAILMODO_BASE_URL ||
  "https://app-external-form-api-debug.azurewebsites.net";
window.MAILMODO_SCRIPT_SRC =
  import.meta.env.VITE_MAILMODO_SCRIPT_SRC ||
  "https://api-debug.mailmodo.com/form/script.js";

// Debug logging to help troubleshoot
console.log("Mailmodo Config:", {
  siteId: window.MAILMODO_SITE_ID,
  baseUrl: window.MAILMODO_BASE_URL,
  scriptSrc: window.MAILMODO_SCRIPT_SRC,
});
