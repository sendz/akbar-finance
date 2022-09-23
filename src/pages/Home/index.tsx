import React from "react";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";

const CardContainerEl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > div {
    margin: 8px 0;
    @media only screen and (min-width: 1365px) {
      margin: 0 24px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  
  @media only screen and (min-width: 1365px) {
    flex-direction: row;
  }
`

const ContentEl = styled.div`
  padding: 24px 0;
  width: 100%;

  @media only screen and (min-width: 1365px) {
    margin: 0 48px;
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
        <CardContainerEl>
          <ContentEl>
            Daftar Pengutang
            <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Muhammad Ibnu Rizky</td>
                  <td>Rp.10.000.000.000,-</td>
                </tr>
                <tr>
                  <td>Daru Aji Ekananda</td>
                  <td>Rp.10.000.000,-</td>
                </tr>
                <tr>
                  <td>Afief Suryana</td>
                  <td>Rp.157.000.000,-</td>
                </tr>
                <tr>
                  <td>Awi Maulana</td>
                  <td>Rp.321.000.000,-</td>
                </tr>
                <tr>
                  <td>Engelbert Akbar</td>
                  <td>Rp.900.000.000,-</td>
                </tr>
              </tbody>
            </table>
          </ContentEl>
          <ContentEl>
            Aktivitas Pinjaman Bulan Ini
          </ContentEl>
        </CardContainerEl>
      </Container>
    </>
  )
}