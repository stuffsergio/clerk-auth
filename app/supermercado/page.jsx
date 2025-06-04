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
    <div className="p-10">
      <h1 className="md:text-2xl text-xl text-center font-bold pb-4">
        Supermercados Cercanos
      </h1>

      {loading && <p className="md:text-lg text-sm">Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="flex flex-col justify-center items-center gap-5">
          <aside className="w-[90dvw] flex flex-row items-center gap-6 px-8 py-5 rounded-xl bg-white shadow-lg">
            <p className="md:text-lg sm:text-md text-sm">
              ¿Dónde estás buscando?
            </p>
            <input
              type="text"
              value={nombreSupermercado}
              onChange={(e) => setNombreSupermercado(e.target.value)}
              placeholder="Buscar supermercados"
              className="px-2 py-1 md:text-md sm:text-md text-sm rounded-lg border border-sky-500 focus:outline-none hover:bg-sky-500/10 transform transition-all duration-300"
            />
          </aside>
          <ul className="w-[90dvw] grid md:grid-cols-3 grid-cols-2 gap-4">
            {supermercadosFiltrados.map((place) => (
              <li
                key={place.place_id}
                className="flex md:flex-row flex-col justify-between gap-3 p-4 bg-white rounded-xl shadow-md"
              >
                <aside className="flex flex-col gap-1 md:w-[80%]">
                  <h3 className="md:text-xl text-sm font-bold">{place.name}</h3>
                  <p className="text-gray-700 md:text-sm sm:text-sm text-xs">
                    {place.vicinity}
                  </p>
                  <p className="text-black/85 text-sm">{place.open_now}</p>
                </aside>
                {place.rating && (
                  <p className="text-sm md:text-right text-left text-yellow-500">
                    ⭐ {place.rating}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
