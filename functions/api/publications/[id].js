
const API_BASE =
  "https://atelier-impact-api.cacheuxjm.workers.dev";

export async function onRequestPatch({ request, env, params }) {
  // Le jeton reste côté serveur, jamais dans le navigateur.
  const token = env.ADMIN_API_TOKEN;
  const id = Number(params.id);

  if (!token) {
    return Response.json(
      { status: "ERROR", message: "Configuration serveur incomplète" },
      { status: 503 }
    );
  }

  if (!Number.isSafeInteger(id) || id <= 0) {
    return Response.json(
      { status: "ERROR", message: "Identifiant invalide" },
      { status: 400 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { status: "ERROR", message: "JSON invalide" },
      { status: 400 }
    );
  }

  if (
    !body ||
    typeof body !== "object" ||
    typeof body.titre_visuel !== "string" ||
    typeof body.texte_linkedin !== "string" ||
    !body.titre_visuel.trim() ||
    !body.texte_linkedin.trim() ||
    body.titre_visuel.length > 300 ||
    body.texte_linkedin.length > 10000 ||
    !(
      body.date_publication == null ||
      body.date_publication === "" ||
      (
        typeof body.date_publication === "string" &&
        /^\d{4}-\d{2}-\d{2}$/.test(body.date_publication)
      )
    )
  ) {
    return Response.json(
      { status: "ERROR", message: "Données invalides" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${API_BASE}/api/publications/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          titre_visuel: body.titre_visuel.trim(),
          texte_linkedin: body.texte_linkedin.trim(),
          date_publication: body.date_publication || null
        })
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
    console.error("Erreur modification publication", error);

    return Response.json(
      {
        status: "ERROR",
        message: "Service temporairement indisponible"
      },
      { status: 502 }
    );
  }
}
