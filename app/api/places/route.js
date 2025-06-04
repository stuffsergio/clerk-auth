// /app/api/places/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2000&type=supermarket&key=${apiKey}`
    );

    const data = await response.json();

    if (!response.ok || data.status !== "OK") {
      return new Response(JSON.stringify({ error: "Error en Google Places API", details: data }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error interno", message: err.message }), {
      status: 500,
    });
  }
}
