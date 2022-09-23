import React, { PropsWithChildren } from "react";
import {CardEl} from "./Card.styled";

export const Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <CardEl>
      {children}
    </CardEl>
  )
}