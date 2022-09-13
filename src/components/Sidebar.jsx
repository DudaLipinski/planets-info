import React, { useState, useEffect } from "react";
import * as Styled from "./Sidebar.styles";
import logo from "../assets/logo.png";
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

  // google async and await, and study it!!!
  // - you can only use await inside an async function
  // - when "await" is used in front of a promise, it will block the execution of the current function
  //    until the last the promise is fulfilled (the promise and all its "then" blocks are executed),
  //    and the value returned by this last "then" will fall into the "await" place.
  //    For example: in the code below, the value returned by the last "then" inside "getPlanets"
  //    will be stored inside the "planets" variable
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

    // getPlanets().then((planets /* Array<{ name: string }> */) => {
    //   setMenuConfig((prevMenuConfig) => {
    //     const planetItemIndex = prevMenuConfig.findIndex(
    //       (menuItem) => menuItem.title === "Planets"
    //     );

    //     const newMenuConfig = [...prevMenuConfig];
    //     newMenuConfig[planetItemIndex].subItems = planets.map(
    //       (planet) => planet.name
    //     );

    //     return newMenuConfig;
    //   });
    // });
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
