// 1. Pide geolocalización al usuario
// 2. Llama a la api interna /api/places.js pasando lat / lng
// 3. Muestra supermercados como una lista

"use client";
import Image from "next/image";
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
        console.log(data);

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

  // filtrado de supermercados
  const [nombreSupermercado, setNombreSupermercado] = useState("");
  const supermercadosFiltrados = places.filter((market) =>
    market.name.toLowerCase().includes(nombreSupermercado.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supermercados Cercanos</h1>

      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div>
          <aside className="flex flex-row gap-6 items-center pb-6">
            <p>¿Dónde estás buscando?</p>
            <input
              type="text"
              value={nombreSupermercado}
              onChange={(e) => setNombreSupermercado(e.target.value)}
              placeholder="Buscar aquí"
              className="px-2 py-1 text-sm rounded-lg border border-sky-500 focus:outline-none hover:bg-sky-500/10 transform transition-all duration-300"
            />
          </aside>
          <ul className="grid md:grid-cols-4 grid-cols-3 gap-4">
            {supermercadosFiltrados.map((place) => (
              <li
                key={place.place_id}
                className="p-4 bg-white rounded-xl shadow-md"
              >
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="text-gray-600">{place.vicinity}</p>
                <p>{place.open_now}</p>
                {place.rating && (
                  <p className="text-sm text-yellow-600">⭐ {place.rating}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
