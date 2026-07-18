const COUNTER_KEY = "nude-click-count";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}

async function readCount(env) {
  if (!env.SITE_DATA) {
    throw new Error("SITE_DATA KV binding is missing");
  }

  return Number(await env.SITE_DATA.get(COUNTER_KEY)) || 0;
}

export async function onRequestPost({ env }) {
  try {
    const next = (await readCount(env)) + 1;
    await env.SITE_DATA.put(COUNTER_KEY, String(next));
    return json({ clicks: next });
  } catch (error) {
    console.error("Nude click counter failed:", error);
    return json({ error: "Counter unavailable" }, 503);
  }
}

export async function onRequestGet({ env }) {
  try {
    return json({ clicks: await readCount(env) });
  } catch (error) {
    console.error("Nude click counter failed:", error);
    return json({ error: "Counter unavailable" }, 503);
  }
}
