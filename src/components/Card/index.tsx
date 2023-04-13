import React from "react";
import * as S from './styles'

type CardProps = {
  children?: React.ReactNode
}

export const Card = ({ children }: CardProps) => {

  return (
    <S.Wrapper>{children}</S.Wrapper>
  )

}