import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>payments insfructure for internet </h1>
          <p>
            millions of companies of all sizes-from startups to fortunene
            500s-use Stripe software and APIs to accept payments, send payouts,
            and manage their business online
          </p>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
