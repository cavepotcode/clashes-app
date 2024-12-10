import { FC } from "react";

export const HomeText: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 w-full mb-10">
      <h1 className="md:text-5xl text-2xl font-bold">
        ¿Quieres llevar tu juego al siguiente nivel?
      </h1>
      <p className="md:text-xl text-lg font-semibold w-3/4">
        "Haz que TU torneo brille sin complicaciones. Desde la inscripción hasta
        los resultados finales, nuestra plataforma te permite manejar cada
        aspecto de tu competencia con facilidad."
      </p>
      <p className="text-lg text-gray-600 w-3/4">
        Olvídate del Excel y WhatsApp - centraliza todo en un solo lugar y
        dedica más tiempo a lo que realmente importa: hacer crecer tu comunidad
        deportiva.
      </p>
      <div className="sticky mt-6 flex flex-col justify-center gap-4">
        <button className="bg-[#1de6df] text-black font-bold py-3 px-4 rounded-md hover:bg-teal-500">
          ¡Quiero comenzar!
        </button>
        <button className="bg-black text-white font-semibold py-3 px-4 rounded-md hover:bg-gray-800 mt-4 md:mt-0">
          Testimonios
        </button>
      </div>
    </div>
  );
};
