import { useEffect, useState } from "react";
import { useTournamentsStore } from "../../hooks";
import Swal from "sweetalert2";

export const TournamentList = () => {
  const { tournaments, isLoading, errorMessage } = useTournamentsStore();
  const [expandedTournament, setExpandedTournament] = useState<string | null>(null);

  useEffect(() => {
    if (errorMessage) {
      Swal.fire("Error al cargar los torneos", errorMessage, "error");
    }
  }, [errorMessage]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-[#16E8E1] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        ></div>
      </div>
    );
  }

  const toggleCategories = (tournamentId: string) => {
    setExpandedTournament(expandedTournament === tournamentId ? null : tournamentId);
  };

  if (!tournaments || tournaments.length === 0) {
    return <p>No hay torneos disponibles</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 w-screen max-h-min">
      {tournaments.map((tournament) => (
        <div
          key={tournament.id}
          className="border p-4 mb-2 rounded-lg shadow-lg flex-1 min-w-full"
        >
          <h2 className="text-xl font-semibold mb-2">{tournament.name}</h2>
          <p className="text-gray-600 mb-4">{tournament.description}</p>
          <button
            onClick={() => toggleCategories(tournament.id)}
            className="bg-teal-500 text-white py-1 px-3 rounded hover:bg-teal-600 transition"
          >
            {expandedTournament === tournament.id ? "Ocultar categorías" : "Ver categorías"}
          </button>

          {expandedTournament === tournament.id && (
            <div className="categories mt-2 divide-y-2">
              {tournament.categories?.map((category) => (
                <div key={category.category_id} className="category mt-2">
                  <h3 className="text-lg font-medium">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Fecha: {new Date(category.date).toLocaleDateString('es-ES')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
