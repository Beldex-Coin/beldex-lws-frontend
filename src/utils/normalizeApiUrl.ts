const PROTOCOL_PATTERN = /^https?:\/\//i;

export default function normalizeApiUrl(apiUrl?: string): string {
  const trimmedApiUrl = apiUrl?.trim() ?? "";

  if (!trimmedApiUrl) {
    return "";
  }

  const withoutProtocol = trimmedApiUrl.replace(PROTOCOL_PATTERN, "");
  const withoutTrailingSlash = withoutProtocol.replace(/\/+$/, "");

  return `${withoutTrailingSlash}/`;
}
