import React from "react";
import { Header } from "../common/Header";
import styled from "styled-components";

import illustrationWorking from "../../images/illustrationWorking.svg";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  margin-bottom: 10rem;

  @media (max-width: 2000px) {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const TextBlock = styled.div`
  @media (max-width: 2000px) {
    margin: auto;
    /*  margin-left: 15rem; */
    width: 40%;
  }

  @media (max-width: 1500px) {
    margin-left: 3rem;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 60%;
    margin-left: 1rem;
  }

  @media (max-width: 400px) {
    width: 60%;
    margin-left: 1rem;
  }

  @media (max-width: 300px) {
    width: 70%;
    margin-left: 0.5rem;
  }

  @media (max-width: 200px) {
    width: 73%;
  }
`;

const Title = styled.h1`
  margin-top: 5rem;

  @media (max-width: 2000px) {
    font-size: 3rem;
    width: 70%;
  }

  @media (max-width: 1500px) {
    font-size: 3rem;
    width: 70%;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    width: 80%;
  }

  @media (max-width: 1000px) {
    font-size: 3rem;
    width: 100%;
  }

  @media (max-width: 800px) {
    font-size: 3rem;
    width: 150%;
  }

  @media (max-width: 700px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 3.2rem;
  }

  @media (max-width: 500px) {
    font-size: 2.7rem;
  }

  @media (max-width: 400px) {
    font-size: 2.2rem;
  }

  @media (max-width: 200px) {
    font-size: 1.4rem;
    padding-top: 0.5rem;
  }
`;

const P = styled.p`
  @media (max-width: 2000px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }

  @media (max-width: 800px) {
    font-size: 1.4rem;
  }

  @media (max-width: 700px) {
    font-size: 1.7rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }

  @media (max-width: 300px) {
    font-size: 1.2rem;
  }

  @media (max-width: 200px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3rem;
  background-color: hsl(180, 66%, 49%);
  color: white;

  font-size: 1rem;
  height: 2.5rem;
  width: 7rem;
  margin-top: 0.5rem;
  /* margin-left: 18%; */
  margin-bottom: 3rem;
  font-weight: 600;

  @media (max-width: 2000px) {
    font-size: 1.5rem;
    height: 3rem;
    width: 10rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.5rem;
    height: 3rem;
    width: 10rem;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
    height: 3rem;
    width: 10rem;
  }

  @media (max-width: 700px) {
    margin-left: 40%;
    margin-top: 3rem;
    font-size: 1.5rem;
    height: 3rem;
    width: 10rem;
  }

  @media (max-width: 600px) {
    margin-left: 50%;
    font-size: 1.4rem;
    width: 9rem;
    height: 2.7rem;
  }

  @media (max-width: 500px) {
    margin-left: 37%;
    font-size: 1.2rem;
    width: 9rem;
  }

  @media (max-width: 400px) {
    margin-left: 45%;
    font-size: 1.5rem;
    width: 10rem;
  }

  @media (max-width: 320px) {
    height: 10%;
  }

  @media (max-width: 280px) {
    padding: 1rem;
    width: 100%;
  }

  @media (max-width: 200px) {
    height: 3rem;
    width: 100%;
    margin-top: 0.5rem;
    margin-left: 18%;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 2000px) {
    width: 46rem;
    height: 30rem;
    margin-right: -4rem;
    margin-top: 9rem;
  }

  @media (max-width: 1500px) {
    width: 46rem;
    height: 30rem;
    margin-right: -4rem;
    margin-top: 9rem;
  }

  @media (max-width: 1024px) {
    width: 30rem;
    height: 20rem;
    margin-right: -3rem;
    margin-top: 9rem;
  }

  @media (max-width: 1000px) {
    width: 30rem;
    height: 20rem;
    margin-right: -4rem;
    margin-top: 9rem;
  }

  @media (max-width: 800px) {
    width: 30rem;
    height: 20rem;
    margin-right: -4rem;
    margin-top: 9rem;
  }

  @media (max-width: 700px) {
    width: 30rem;
    height: 20rem;
    margin: auto;
  }

  @media (max-width: 400px) {
    width: 25rem;
    height: 20rem;
    margin: auto;
  }

  @media (max-width: 300px) {
    width: 18rem;
    height: 13rem;
    margin: auto;
  }

  @media (max-width: 200px) {
    width: 13rem;
    height: 10rem;
    margin: auto auto -5rem auto;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <TextBlock>
        <Title>More than just shorter links</Title>
        <P>
          Build your brand's recognitnion and get detailed insights on how your
          links are performing.
        </P>
        <Button>Get Started</Button>
      </TextBlock>
      <Img src={illustrationWorking} />
    </Container>
  );
};

export default Home;
