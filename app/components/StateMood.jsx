export default function StateMood() {
  return (
    <div className="w-50 h-50 rounded-3xl bg-gradient-to-tr from-[#fda5d5] via-stone-400/50 to-purple-400/70">
      <div className="flex flex-col justify-between h-full p-6 rounded-3xl bg-white/20 backdrop-blur-xl text-white">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-semibold text-xs opacity-70">
            State of mood
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-stone-700/50 rounded-full h-4 w-4 opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 20.804A8.966 6.966 0 0115 15c1.657 0 3.194.508 7.45 6.371M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-wide">
          How are you feeling now?
        </span>
        <button className="text-sm bg-stone-500/50 backdrop-blur-md py-2 rounded-xl">
          Log mood
        </button>
      </div>
    </div>
  );
}
