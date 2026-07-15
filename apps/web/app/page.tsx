export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">

        <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
          Horizon
        </h1>

        <p className="mt-6 text-2xl text-gray-200">
          Il regista dei tuoi viaggi.
        </p>

        <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
          Non cambiamo la destinazione.
          <br />
          Cambiamo il modo in cui la vivi.
        </p>

        <button
          className="mt-12 rounded-full bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-200 transition"
        >
          Inizia
        </button>

        <p className="mt-12 text-sm text-gray-500">
          Hai già un DNA Horizon? Accedi
        </p>

      </div>
    </main>
  );
}