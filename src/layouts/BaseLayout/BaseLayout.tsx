import React from "react";
import { ContentProps } from "@types";

import { Wrapper } from "./BaseLayout.styled";

export const BaseLayout = ({ children }: ContentProps) => {
  return <Wrapper>{children}</Wrapper>;
};
