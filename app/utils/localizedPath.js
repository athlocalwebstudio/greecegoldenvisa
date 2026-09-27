export function localizedPath(language, path) {
  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  if (cleanPath === "/") {
    return `/${language}`;
  }

  return `/${language}${cleanPath}`;
}