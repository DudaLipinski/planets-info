import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.pink};
  color: ${(props) => props.theme.colors.rose};
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

const MenuWrapper = styled.nav`
  padding: 0 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

const ItemMenu = styled.li`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const SubItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const SubItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Sidebar = () => {
  const [menuConfig, setMenuConfig] = useState([
    {
      title: "Home",
    },
    {
      title: "Planets",
      subItem: [],
    },
    {
      title: "Universe",
      subItems: ["Link 1", "Link 2", "Link 3"],
    },
  ]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "85492c1f20msh5a078fc62710ae6p1c9e0cjsn9e62ad238205",
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
      options
    )
      .then((res) => res.json())
      .then((listPlanets) =>
        setMenuConfig((prevMenuConfig) => {
          return prevMenuConfig.map((menuItem) => {
            return menuItem.title === "Planets"
              ? {
                  ...menuItem,
                  subItem: listPlanets.map((planet) => {
                    return planet.name;
                  }),
                }
              : menuItem;
          });
        })
      );
  }, [0]);

  return (
    <Wrapper>
      <Logo src={logo} />
      <MenuWrapper>
        <Menu>
          <ItemMenu></ItemMenu>
          {/* <SubItemWrapper>{planetItem}</SubItemWrapper> */}
        </Menu>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Sidebar;
