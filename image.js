const ALLOWED = new Set(['www.cedefop.europa.eu', 'cedefop.europa.eu']);
export async function onRequestGet({ request }) {
  const endpoint = new URL(request.url);
  const raw = endpoint.searchParams.get('url');
  if (!raw || raw.length > 3000) return new Response('URL manquante ou trop longue', {status:400});
  let source;
  try { source = new URL(raw); } catch { return new Response('URL invalide', {status:400}); }
  if (source.protocol !== 'https:' || !ALLOWED.has(source.hostname) || source.port || source.username || source.password)
    return new Response('Source non autorisée', {status:403});
  try {
    const response = await fetch(source.toString(), {redirect:'manual', headers:{Accept:'image/avif,image/webp,image/png,image/jpeg'}});
    if (!response.ok || response.status >= 300) return new Response('Image indisponible', {status:502});
    const mime = (response.headers.get('content-type') || '').split(';')[0].toLowerCase();
    if (!['image/jpeg','image/png','image/webp','image/avif'].includes(mime)) return new Response('Format non autorisé', {status:415});
    const max = 8 * 1024 * 1024;
    if (Number(response.headers.get('content-length')) > max) return new Response('Image trop volumineuse', {status:413});
    const body = await response.arrayBuffer();
    if (body.byteLength > max) return new Response('Image trop volumineuse', {status:413});
    return new Response(body, {status:200,headers:{'Content-Type':mime,'Cache-Control':'public, max-age=3600','X-Content-Type-Options':'nosniff'}});
  } catch { return new Response('Impossible de récupérer cette image', {status:502}); }
}
