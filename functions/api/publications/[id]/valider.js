
const API_BASE =
  "https://atelier-impact-api.cacheuxjm.workers.dev";

export async function onRequestPost({ request, env, params }) {
  if (!env.ADMIN_API_TOKEN) {
    return Response.json(
      { status: "ERROR", message: "Configuration serveur incomplète" },
      { status: 503 }
    );
  }

  const id = String(params.id || "");

  if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(Number(id))) {
    return Response.json(
      { status: "ERROR", message: "Identifiant invalide" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${API_BASE}/api/publications/${id}/valider`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.ADMIN_API_TOKEN}`,
          Accept: "application/json"
        }
      }
    );

    const data = await response.json();

    return Response.json(data, {
      status: response.status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    console.error("Erreur validation publication :", error);

    return Response.json(
      { status: "ERROR", message: "Service temporairement indisponible" },
      { status: 502 }
    );
  }
}
