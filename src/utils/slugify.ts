/**
 * Convert a search term to a URL-friendly slug
 * e.g., "chicken breast" -> "chicken-breast"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars (except spaces and hyphens)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Convert a slug back to a readable term
 * e.g., "chicken-breast" -> "chicken breast"
 */
export function unslugify(slug: string): string {
  return slug.replace(/-/g, ' ');
}
