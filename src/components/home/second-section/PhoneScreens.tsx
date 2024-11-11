import right_phone from "../../../assets/phones/right-phone.png";
import left_phone from "../../../assets/phones/left-phone.png";
import reflection from "../../../assets/phones/reflection-phones.png";

export const PhoneScreens = () => {
  return (
    <div className="flex mt-8 md:mt-0 w-full flex-col">
      <div className="flex md:justify-end relative w-full justify-center">
        <img src={left_phone} alt="left-phone" className="z-10 w-28 md:h-auto md:w-auto" />
        <img src={right_phone} alt="right-phone" className="w-28 md:h-auto md:w-auto" />
      </div>
      <div className="hidden md:flex justify-end relative w-full">
        <img src={reflection} alt="reflector" className="md:mr-12" />
      </div>
    </div>
  );
  {
    /* <div className="flex justify-center w-full h-full items-center flex-col space-y-8 md:space-y-0 overflow-hidden min-h-[80vh]">
      <div className="relative overflow-hidden z-10 translate-y-[120px] translate-x-[30px] md:translate-x-[120px] md:translate-y-[190px]">
        <img
          src={right_phone}
          alt="left screen"
          className="w-[80vw] md:w-4/5 object-cover"
        />
      </div>

      <div className="relative overflow-hidden translate-x-[-20px] md:translate-x-0 md:translate-y-[-200px] sm:-translate-y-[60px]">
        <img
          src={left_phone}
          alt="right screen"
          className="w-[80vw] md:w-4/5 object-cover"
        />
      </div>
    </div> */
  }
};
