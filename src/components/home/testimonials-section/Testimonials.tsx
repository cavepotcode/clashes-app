import { FC } from "react";
import { TestimonyCard } from "./TestimonyCard";
import img from "../../../assets/futbol.png";
import img2 from "../../../assets/tennis.jpg";

export const Testimonials: FC = () => {
  const testimonials = [
    {
      logo: img,
      text: "Con clashes dimos nuestro salto de calidad y profesionalismo al integrar toda la información y estadísticas de nuestros torneos en un mismo lugar. La plataforma es de muy fácil manejo y los participantes tienen la información al instante. Quiero destacar el contacto directo y cercano que tuvimos con los que están atrás de clashes, siempre con la mejor predisposición. Lo recomiendo con mucha confianza.",
      tenant_name: "Orion Sports",
      name: "Juan Martin Cousillas",
      rating: 5,
    },
    {
      logo: img2,
      text: "Organicé un torneo de tenis con un amigo, clashes app nos dió la facilidad y seguridad de tener la información al instante, super fácil de usar, interactiva y parametrizable a tus necesidades, dado que en el transcurso del torneo le pedimos al desarrollador algunos anexos y sin problemas cumplió con la demanda, lo recomiendo 100%.",
      tenant_name: "Marak",
      name: "Marco Marella",
      rating: 4,
    }
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

      <div className="md:w-2/3 flex md:flex-row flex-col md:gap-6 gap-28 mt-8 md:mt-0 justify-center">
        {testimonials.map((text, index) => (
          <TestimonyCard key={index} {...text} />
        ))}
      </div>
    </section>
  );
};
