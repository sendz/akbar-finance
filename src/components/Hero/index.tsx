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
        <p>Ngutanglah jika Anda butuh uang, bukan saat anda tidak punya uang</p>
      </div>
      </section>
      <section>
        <img src={unsplash} className="unsplash" alt="Hero Image" />
      </section>
    </HeroEl>
  )
}