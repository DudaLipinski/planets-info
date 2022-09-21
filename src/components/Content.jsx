import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import getPlanets from "../utils/services";

const Container = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  height: inherit;
`;

const Box = styled.div`
  width: 30%;
  margin: 0 auto;
  text-align: center;
  margin-top: 0px;
`;

const Title = styled.h1`
  color: white;
  margin: 0 auto;
`;

const Text = styled.p`
  color: white;
  margin: 20px auto;
`;

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const Content = () => {
  const { planetName } = useParams();

  const [planet, setPlanet] = useState();

  const loadPlanet = async () => {
    const planets = await getPlanets();
    const planet = planets.find((item) => item.name === planetName);

    setPlanet(planet);
  };

  useEffect(() => {
    setPlanet(null);
    loadPlanet();
  }, [planetName]);

  if (!planet) {
    return (
      <Container>
        <Box>
          <Title>Loading...</Title>
        </Box>
      </Container>
    );
  }

  const { basicDetails, description, imgSrc, name, planetOrder } = planet;
  const imgURL = imgSrc[0].img;
  const mass = basicDetails[0].mass;
  const volume = basicDetails[0].voume;

  return (
    <Container>
      <Box>
        <Image src={imgURL} />
        <Title>{name}</Title>
        <Text>{description}</Text>

        <Text>
          <b>Planet Order:</b> {planetOrder}
        </Text>
        <Text>
          <b>Basic Details</b>
        </Text>
        <Text>
          <b>Mass: </b> {mass}
        </Text>
        <Text>
          <b>Volume </b> {volume}
        </Text>
      </Box>
    </Container>
  );
};

export default Content;
