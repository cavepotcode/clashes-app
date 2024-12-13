import { Card } from "../../components/home/Card";
import lock from "../../assets/cards_icons/lock.png";
import network from "../../assets/cards_icons/network.png";
import paint_brush from "../../assets/cards_icons/paint-brush.png";
import { MembershipSection } from "../../components/home/third-section/MembershipSection";
import { FaWhatsapp } from "react-icons/fa";
import { HomeText, SportsImages } from "../../components";
import { Testimonials } from "../../components/home/testimonials-section/Testimonials";

export const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="py-24 md:px-0 px-5 overflow-hidden bg-[#f3f6fa] flex justify-center flex-wrap w-screen">
        <div className="flex w-full justify-between flex-col md:flex-row">
          <HomeText />
          <SportsImages />
        </div>
        <div className="flex justify-around md:w-full bg-white p-10 md:p-20">
          <div className="home-content flex flex-wrap w-full justify-between gap-7 md:gap-14">
            <Card
              icon={<img className="paint-brush" src={paint_brush}></img>}
              title="Customizable"
              description="Puedes personalizar nuestra aplicación para que se adapte perfectamente a tu torneo u organización. Elige los colores, logotipos y más para reflejar tu identidad única. ¡Haz que tu experiencia de torneo sea más fácil y efectiva que nunca!"
            />
            <Card
              icon={<img className="network" src={network}></img>}
              title="Todo en uno"
              description="Crea un espacio único donde puedas gestionar y mantenerte informado sobre todos los aspectos de tu torneo. Con nuestra aplicación, tendrás acceso a todas las herramientas necesarias para organizar y seguir tu evento de principio a fin."
            />
            <Card
              icon={<img className="lock" src={lock}></img>}
              title="Fácil y seguro"
              description="Nuestra aplicación ofrece una experiencia fácil y segura para todos los usuarios. Con una interfaz intuitiva y medidas de seguridad robustas, puedes confiar en que tu experiencia de gestión de torneos será sin complicaciones y protegida."
            />
          </div>
        </div>
        <section className="relative flex flex-col md:flex-row items-center justify-between mt-16 w-full">
          <Testimonials />
        </section>
      </div>
      <MembershipSection />
      <a
        href="https://wa.me/59899368097?text=Hola! Estoy interesado/a en obtener más información sobre los servicios y membresías de Clashes. Gracias!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-10"
        aria-label="Contáctanos por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};
