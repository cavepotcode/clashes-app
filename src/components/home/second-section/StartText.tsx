export const StartText = () => {
  return (
    <div className="md:absolute flex flex-col md:flex-row md:bg-gray-50 md:p-10 md:pr-32 md:rounded-lg md:shadow-md space-y-6 md:space-y-0 md:space-x-8 md:w-3/5 md:-translate-y-full z-10">
      <div className="text-center mr-2">
        <p className="text-lg font-medium mb-4">
          ¡Esta aplicación ha cambiado completamente la forma en que gestiono
          mis campeonatos! Tengo toda la información en un solo lugar, está
          organizada de manera clara y fácil de seguir.
        </p>
        <p className="text-lg font-semibold">
          ¡Definitivamente recomendaría esta app a cualquiera que quiera
          organizar un torneo, de cualquier disciplina!
        </p>

        <div className="sticky mt-6 flex flex-col md:flex-row justify-center md:space-x-8">
          <button className="bg-[#1de6df] text-black font-semibold py-2 px-4 rounded-md hover:bg-teal-500">
            Casos de éxito
          </button>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 mt-4 md:mt-0">
            ¡Quiero comenzar!
          </button>
        </div>
      </div>
    </div>
  );
};
