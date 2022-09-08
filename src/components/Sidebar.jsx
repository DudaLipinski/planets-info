import React, { useState, useEffect } from "react";
import * as Styled from "./Sidebar.Styled";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [expandedItemTitle, setExpandedItemTitle] = useState();
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

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  };

  const loadPlanets = () => {
    fetch(
      "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
      options
    )
      .then((res) => res.json())
      .then((listPlanets) =>
        setMenuConfig((prevMenuConfig) => {
          const planetItemIndex = prevMenuConfig.findIndex(
            (menuItem) => menuItem.title === "Planets"
          );
          const newMenuConfig = [...prevMenuConfig];
          newMenuConfig[planetItemIndex].subItems = listPlanets.map(
            (planet) => {
              return planet.name;
            }
          );
          return newMenuConfig;
        })
      );
  };

  useEffect(() => {
    loadPlanets();
  }, []);

  const menuItems = menuConfig.map((menuItem) => {
    const subItems = menuItem.subItems;
    const itemTitle = menuItem.title;

    return (
      <>
        {subItems ? (
          <>
            <Styled.ItemMenu
              onClick={() =>
                setExpandedItemTitle(
                  itemTitle === expandedItemTitle ? null : itemTitle
                )
              }
            >
              <b>{itemTitle}</b>
            </Styled.ItemMenu>
            {expandedItemTitle && (
              <Styled.SubItemWrapper>
                234
                {subItems.map((subItem) => {
                  return expandedItemTitle === itemTitle ? (
                    <Styled.SubItem>{subItem}</Styled.SubItem>
                  ) : (
                    ""
                  );
                })}
              </Styled.SubItemWrapper>
            )}
          </>
        ) : (
          <Styled.ItemMenu>
            <b>{itemTitle}</b>
          </Styled.ItemMenu>
        )}
      </>
    );
  });

  return (
    <Styled.Wrapper>
      <Styled.Logo src={logo} />
      <Styled.MenuWrapper>
        <Styled.ItemMenuWrapper>{menuItems}</Styled.ItemMenuWrapper>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};

export default Sidebar;
