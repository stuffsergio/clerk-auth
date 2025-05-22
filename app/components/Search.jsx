export default function Search() {
  return (
    <div className="w-[95dvw] flex flex-row items-center px-4 py-4 rounded-xl bg-white">
      <h3 className="md:px-8 sm:px-5 px-3 md:py-2 py-1 md:text-xl sm:text-lg text-sm font-bold text-black/90">
        Añade tus productos al carrito
      </h3>
      <input
        type="text"
        placeholder="Buscar productos"
        className="px-2 py-1 text-sm rounded-lg border border-sky-500 focus:outline-none hover:bg-sky-500/10 transform transition-all duration-300"
      />
    </div>
  );
}
