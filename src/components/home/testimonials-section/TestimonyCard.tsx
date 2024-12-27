import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface TestimonyCardProps {
  logo: string;
  text: string;
  tenant_name: string;
  name: string;
  rating: number;
}

export const TestimonyCard: FC<TestimonyCardProps> = ({
  logo,
  text,
  tenant_name,
  name,
  rating,
}) => {
  return (
    <div className="relative flex flex-col border-2 border-[#3abdc3] rounded-3xl p-6 shadow-lg bg-white">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <div className="border-2 rounded-full border-[#3abdc3] p-5 flex items-center justify-center w-28 h-28 bg-white">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mt-12">
        <blockquote className="italic text-gray-900 text-center">
          <p>“{text}”</p>
        </blockquote>

        <div className="mt-4 flex flex-col items-end">
          <p className="font-bold text-gray-800">{tenant_name}</p>
          <p className="text-sm text-gray-500">-{name}</p>
        </div>

        <div className="flex mt-6 space-x-1 text-[#3abdc3] justify-center">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={index < rating ? "text-[#3abdc3]" : "text-gray-900"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
