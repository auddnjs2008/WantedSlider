import React from "react";
import NavBar from "../../components/NavBar";
import TopBanner from "../../components/TopBanner";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <div className="fixHeight"></div>
      <section>
        <TopBanner></TopBanner>
      </section>
    </Container>
  );
};

export default Home;
