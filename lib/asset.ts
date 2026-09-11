export const BASE_PATH = "/LekageDetection";

export function asset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
