const PROTOCOL_PATTERN = /^https?:\/\//i;
const LOCAL_HOST_PATTERN = /^(localhost|127\.0\.0\.1)$/i;

export default function normalizeApiUrl(apiUrl?: string): string {
  const trimmedApiUrl = apiUrl?.trim() ?? "";

  if (!trimmedApiUrl) {
    return "";
  }

  const withoutProtocol = trimmedApiUrl.replace(PROTOCOL_PATTERN, "");
  const withoutTrailingSlash = withoutProtocol.replace(/\/+$/, "");

  if (
    typeof window !== "undefined" &&
    LOCAL_HOST_PATTERN.test(window.location.hostname)
  ) {
    return `${window.location.origin}/api/`;
  }

  return `${withoutTrailingSlash}/`;
}
