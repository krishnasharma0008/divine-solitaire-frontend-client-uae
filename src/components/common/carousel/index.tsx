import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
// import required modules

import {
  ImageWithTextCard,
  ImageCard,
  ImageCardProps,
} from "./carousel-card-types";
import { ImageWithTextCardProps } from "./carousel-card-types";

type CarouselTypes = "slide" | "swipe";
type CorouselCardNames = "ImageWithTextCard" | "ImageCard";
type CarouselCardType = ImageWithTextCardProps | ImageCardProps;

const CarouselComponents: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in CorouselCardNames]: React.FC<any>;
} = {
  ImageWithTextCard: ImageWithTextCard,
  ImageCard: ImageCard,
};
export interface CarouselProps extends SwiperProps {
  description?: string;
  items: Array<CarouselCardType>;
  type: CarouselTypes;
  cardType: CorouselCardNames;
}

const Carousel: React.FC<CarouselProps> = ({ items, cardType, ...props }) => {
  const C = CarouselComponents[cardType];

  return (
    <Swiper modules={[Pagination, Navigation]} {...props}>
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>{<C {...item} />}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
