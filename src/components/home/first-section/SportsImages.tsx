import { FC } from "react";
import { ImageOverlay } from "./ImageOverlay";
import {
  soccer,
  surf,
  athletics,
  gymnastics,
  padel,
  swimming,
  archery,
  bike,
} from "../../../assets/sports";

export const SportsImages: FC = () => {
  const images = [
    {
      src: soccer,
      alt: "Soccer",
      className: "absolute top-60 md:top-80 left-24 md:left-10 w-40 md:w-56",
      delay: 200,
    },
    {
      src: surf,
      alt: "Surf",
      className: "absolute top-0 md:top-10 right-5 md:left-20 w-40 md:w-56",
      delay: 400,
    },
    {
      src: athletics,
      alt: "Athletics",
      className:
        "absolute top-[23rem] md:top-64 right-24 md:right-16 w-40 md:w-56",
      delay: 600,
    },
    {
      src: gymnastics,
      alt: "Gymnastics",
      className: "absolute top-[31rem] left-6 w-56 hidden md:block",
      delay: 800,
    },
    {
      src: padel,
      alt: "Padel",
      className: "absolute top-32 md:top-14 right-28 md:right-36 w-40 md:w-56",
      delay: 1000,
    },
    {
      src: swimming,
      alt: "Swimming",
      className: "absolute top-[26.5rem] left-56 w-56 hidden md:block",
      delay: 1200,
    },
    {
      src: archery,
      alt: "Srchery",
      className: "absolute top-[33rem] right-20 w-56 hidden md:block",
      delay: 1400,
    },
    {
      src: bike,
      alt: "Bike",
      className: "absolute top-48 left-48 w-56 hidden md:block",
      delay: 1600,
    },
  ];

  return (
    <div className="relative w-full md:h-screen h-[600px] flex justify-center items-center">
      {images.map((image, index) => (
        <ImageOverlay
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
          delay={image.delay}
        />
      ))}
    </div>
  );
};
