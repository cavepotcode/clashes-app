export const Footer = () => {
  return (
    <footer className="w-screen bg-[#1de6df] flex md:flex-row h-40 md:justify-between flex-col-reverse justify-center">
      <div className="md:ml-3 md:mb-3 p-2 flex md:items-end">
        <p className="font-extralight">© Copyright 2024 Montevideo - Uruguay</p>
      </div>
      <div className="md:mr-10 flex flex-col justify-center p-2 md:items-center">
        <p className="font-semibold">Whatsapp: 099368097</p>
        <p>Términos y condiciones</p>
      </div>
    </footer>
  );
};