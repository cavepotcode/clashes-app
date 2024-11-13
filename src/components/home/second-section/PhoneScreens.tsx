import right_phone from "../../../assets/phones/second-section/right-phone.png";
import left_phone from "../../../assets/phones/second-section/left-phone.png";
import reflection from "../../../assets/phones/second-section/reflection-phones.png";

export const PhoneScreens = () => {
  return (
    <div className="flex mt-8 md:mt-0 w-full flex-col relative">
      <div className="flex md:justify-end w-full justify-center">
        <img src={left_phone} alt="left-phone" className="z-10 w-28 md:h-auto md:w-auto" />
        <img src={right_phone} alt="right-phone" className="w-28 md:h-auto md:w-auto" />
      </div>
      <div className="hidden md:flex justify-end w-full">
        <img src={reflection} alt="reflector" className="md:mr-12" />
      </div>
    </div>
  );
};
