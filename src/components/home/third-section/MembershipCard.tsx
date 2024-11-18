import { IoIosArrowForward } from "react-icons/io";

export const MembershipCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const whatsappLink = `https://wa.me/59899368097?text=Hola! Quiero consultar por la membresía *${title}*. ¿Podrían brindarme más información?`;

  return (
    <div className="shadow-lg w-full md:w-1/3 flex flex-col items-center">
      <div className="w-full">
        <div className="bg-[#37d7e3] rounded-t-2xl p-4 flex justify-center w-fit">
          <span className="text-xl font-semibold text-black">{title}</span>
        </div>
      </div>
      <div className="p-6 flex items-center text-center bg-white rounded-tr-2xl rounded-bl-2xl">
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full flex justify-end">
        <a
          href={whatsappLink}
          target="_blank"
          className="bg-yellow-400 shadow-[0_1px_3px_#ffdd33] text-black font-semibold text-xl py-2 w-3/5 text-center rounded-b-2xl hover:bg-yellow-500 hover:cursor-pointer flex justify-center items-center"
        >
          Consultar
          <IoIosArrowForward className="ml-2" />
        </a>
      </div>
    </div>
  );
};
