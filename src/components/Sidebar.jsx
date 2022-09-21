import React, { useState, useEffect } from "react";
import * as Styled from "./Sidebar.styles";
import logo from "../assets/logo.jpg";
import getPlanets from "../utils/services";
import Menu from "./Menu";

const Sidebar = () => {
  const [menuConfig, setMenuConfig] = useState([
    {
      title: "Home",
    },
    {
      title: "Planets",
      subItems: [],
    },
    {
      title: "Universe",
      subItems: ["Link 1", "Link 2", "Link 3"],
    },
  ]);

  const loadPlanetNames = async () => {
    const planets = await getPlanets();
    const planetNames = planets.map((planet) => planet.name);

    setMenuConfig((prevMenuConfig) => {
      const planetItemIndex = prevMenuConfig.findIndex(
        (menuItem) => menuItem.title === "Planets"
      );

      const newMenuConfig = [...prevMenuConfig];
      newMenuConfig[planetItemIndex].subItems = planetNames;

      return newMenuConfig;
    });
  };

  useEffect(() => {
    loadPlanetNames();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Logo src={logo} />
      <Styled.MenuWrapper>
        <Styled.MenuItemWrapper>
          <Menu menuConfig={menuConfig}></Menu>
        </Styled.MenuItemWrapper>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};

export default Sidebar;
