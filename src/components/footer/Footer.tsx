import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-screen bg-[#1de6df] flex md:flex-row h-40 md:justify-between flex-col-reverse justify-center">
      <div className="md:ml-3 md:mb-3 p-2 flex md:items-end">
        <p className="font-extralight">© Copyright 2024 Montevideo - Uruguay</p>
      </div>
      <div className="md:mr-10 flex flex-col justify-center p-2 md:items-center">
        <div className="flex items-center">
          <FaWhatsapp />
          <a href="https://wa.me/59899368097?text=Hola! Estoy interesado/a en obtener más información sobre los servicios y membresías de Clashes. Gracias!" target="_blank" className="font-semibold p-1">
            Whatsapp
          </a>
        </div>
        <p>Términos y condiciones</p>
      </div>
    </footer>
  );
};
