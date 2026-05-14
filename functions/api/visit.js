export async function onRequestPost({ env }) {
  const key = "visitor-count";

  const current = Number(await env.SITE_DATA.get(key)) || 0;
  const next = current + 1;

  await env.SITE_DATA.put(key, String(next));

  return new Response(JSON.stringify({ visits: next }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequestGet({ env }) {
  const key = "visitor-count";

  const visits = Number(await env.SITE_DATA.get(key)) || 0;

  return new Response(JSON.stringify({ visits }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}