import { FC } from "react";
import { TestimonyCard } from "./TestimonyCard";
import img from "../../../assets/icon.png";
import img2 from "../../../assets/img-tennis.jpg";
import img3 from "../../../assets/tennis.jpg";

export const Testimonials: FC = () => {
  const testimonials = [
    {
      logo: img,
      text: "Crea un espacio único donde puedas gestionar y mantenerte informado sobre todos los aspectos de tu torneo. Con nuestra aplicación, tendrás acceso a todas las herramientas necesarias para organizar y seguir tu evento de principio a fin.",
      name: "Tennis Maldonado",
      role: "Roberto Giant",
      rating: 5,
    },
    {
      logo: img2,
      text: "Crea un espacio único donde puedas gestionar y mantenerte informado sobre todos los aspectos de tu torneo. Con nuestra aplicación, tendrás acceso a todas las herramientas necesarias para organizar y seguir tu evento de principio a fin.",
      name: "Tennis Maldonado",
      role: "Roberto Giant",
      rating: 4,
    },
    {
      logo: img3,
      text: "Crea un espacio único donde puedas gestionar y mantenerte informado sobre todos los aspectos de tu torneo. Con nuestra aplicación, tendrás acceso a todas las herramientas necesarias para organizar y seguir tu evento de principio a fin.",
      name: "Tennis Maldonado",
      role: "Roberto Giant",
      rating: 3,
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 md:pr-5 md:mb-[25%] gap-14">
      <div className="md:w-1/3 bg-black text-white md:px-10 md:py-14 md:mr-5 md:rounded-r-lg text-center">
        <p className="text-lg font-semibold">
          Descubre cómo{" "}
          <span className="text-[#1de6df] font-semibold">Clashes</span> ha
          cambiado la forma de <strong>gestionar torneos</strong>, facilitando
          la organización, mejorando la experiencia de los participantes y{" "}
          <strong>llevando la competencia al siguiente nivel</strong>.
        </p>
      </div>

      <div className="md:w-2/3 flex md:flex-row flex-col md:gap-6 gap-28 mt-8 md:mt-0">
        {testimonials.map((text, index) => (
          <TestimonyCard key={index} {...text} />
        ))}
      </div>
    </section>
  );
};
