import { useRef } from "react";
import { MembershipCard } from "./MembershipCard";
import first_phone from "../../../assets/phones/third-section/first-phone.png";
import second_phone from "../../../assets/phones/third-section/second-phone.png";
import third_phone from "../../../assets/phones/third-section/third-phone.png";

export const MembershipSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <div className="relative w-screen">
      <div className="absolute inset-x-0 -top-48 md:flex space-x-4 justify-around w-full hidden">
        <img
          src={first_phone}
          alt="Phone 1"
          className="w-1/4 transform -translate-y-16"
        />
        <img
          src={second_phone}
          alt="Phone 2"
          className="w-1/4 transform -translate-y-1/3"
        />
        <img
          src={third_phone}
          alt="Phone 3"
          className="w-1/4 transform -translate-y-32"
        />
      </div>
      <section id="membership-section" ref={sectionRef} className="relative bg-black py-12 px-8 md:px-24 z-10 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8 text-white">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              Obtén la <span className="text-[#37d7e3]">membresía</span>{" "}
              perfecta para tus torneos.
            </h2>
          </div>
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-6">
            <MembershipCard
              price="25"
              title="BUSINESS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan."
            />
            <MembershipCard
              price="35"
              title="PREMIUM"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan."
            />
            <MembershipCard
              price="45"
              title="PROFESSIONAL"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
