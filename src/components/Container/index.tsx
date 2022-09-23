import React, { PropsWithChildren } from "react";
import { ContainerEl } from "./Container.styled";

export const Container: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ContainerEl>
      {children}
    </ContainerEl>
  )
}