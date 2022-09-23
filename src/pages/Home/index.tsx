import React from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";

const CardContainerEl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & > div {
    margin: 0 8px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    
    @media only screen and (min-width: 1365px) {
      margin: 0 24px;
    }
  }
`

export const Home = () => {
  return (
    <>
      <Hero/>
      <Container>
        <CardContainerEl>
          <Card>
            <h3>69jt</h3>
            <p>Nasabah</p>
          </Card>
          <Card>
            <h3>420jt</h3>
            <p>Pinjaman Hari ini</p>
          </Card>
          <Card>
            <h3>234</h3>
            <p>Cabang</p>
          </Card>
          <Card>
            <h3>29M</h3>
            <p>Dana tersalurkan</p>
          </Card>
        </CardContainerEl>
      </Container>
    </>
  )
}