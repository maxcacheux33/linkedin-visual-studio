
const API_URL =
  "https://atelier-impact-api.cacheuxjm.workers.dev/api/publications";

export async function onRequestGet({ env }) {
  const token = env.ADMIN_API_TOKEN;

  if (!token) {
    return Response.json(
      { status: "ERROR", message: "Configuration du serveur incomplète" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      return Response.json(
        { status: "ERROR", message: "Impossible de récupérer les publications" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return Response.json(data, {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      }
    });
  } catch (error) {
    console.error("Erreur connexion publications", error);

    return Response.json(
      { status: "ERROR", message: "Service temporairement indisponible" },
      { status: 502 }
    );
  }
}
