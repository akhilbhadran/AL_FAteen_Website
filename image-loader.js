export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];
  // This uses Cloudflare's built-in transformation service
  return `/cdn-cgi/image/${params.join(',')}/${src.startsWith('/') ? src.slice(1) : src}`;
}