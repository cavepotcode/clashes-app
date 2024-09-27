import { HomeDescription } from "../components/home/HomeDescription";
import { Card } from "../components/home/Card";
import { PhoneScreens } from "../components/home/second-section/PhoneScreens";
import { StartText } from "../components/home/second-section/StartText";
import lock from "../assets/cards_icons/lock.png";
import network from "../assets/cards_icons/network.png";
import paint_brush from "../assets/cards_icons/paint-brush.png";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="cornered-section relative py-20 px-12 overflow-hidden">
        <HomeDescription />
        <div className="container mx-auto flex justify-end">
          <div className="home-content flex flex-wrap justify-around items-start gap-8">
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
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <PhoneScreens />
          <StartText />
        </div>
      </div>
    </>
  );
};
