import React from "react";
import cn from "classnames";

import { ContentProps } from "@types";

import { ImageCarouselItem } from "@components";

export const ImageCarousel = ({ children }: ContentProps) => {
  return (
    <>
      <ImageCarouselItem />
      <ImageCarouselItem />
    </>
  );
};
