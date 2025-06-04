// 1. Pide geolocalización al usuario
// 2. Llama a la api interna /api/places.js pasando lat / lng
// 3. Muestra supermercados como una lista

"use client";
import { useEffect, useState } from "react";

export default function Supermercados() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Tu navegador no soporta geolocalización");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const res = await fetch(`/api/places?lat=${latitude}&lng=${longitude}`);
        const data = await res.json();

        if (data.error) {
          setError(data.error);
        } else {
          setPlaces(data.results);
        }
      } catch (err) {
        setError("Error al obtener supermercados");
      } finally {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supermercados Cercanos</h1>

      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-4">
          {places.map((place) => (
            <li key={place.place_id} className="p-4 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p className="text-gray-600">{place.vicinity}</p>
              {place.rating && (
                <p className="text-sm text-yellow-600">⭐ {place.rating}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
