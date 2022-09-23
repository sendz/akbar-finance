import React from "react";
import { HeroEl } from "./Hero.styled";
import unsplash from "./unsplash.jpg";

export const Hero = () => {
  return (
    <HeroEl>
      <section>
      <div>
        <h2>Anda Mau Ngutang? <br/>Di sini Tempatnya!</h2>
      </div>
      <div>
        <p>Ngutang sekarang, bayar kapan-kapan</p>
      </div>
      </section>
      <section>
        <img src={unsplash} className="unsplash" alt="Hero Image" />
      </section>
    </HeroEl>
  )
}