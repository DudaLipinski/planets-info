import React, { useState } from "react";
import * as Styled from "./Sidebar.styles";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [expandedItemTitle, setExpandedItemTitle] = useState();
  const menuConfig = props.menuConfig;

  const menuItems = menuConfig.map(({ subItems, title }) => {
    const isExpanded = title === expandedItemTitle;

    if (!subItems) {
      return (
        <Styled.MenuItem key={title}>
          <b>{title}</b>
        </Styled.MenuItem>
      );
    }

    return (
      <>
        <Styled.MenuItem
          key={title}
          onClick={() => setExpandedItemTitle(isExpanded ? null : title)}
        >
          <b>{title}</b>
        </Styled.MenuItem>
        {isExpanded ? (
          <Styled.SubItemWrapper>
            {subItems.map((subItem, index) => (
              <Styled.SubItem key={`${subItem}-${index}`}>
                <Link to={`planet/${subItem}`}>{subItem}</Link>
              </Styled.SubItem>
            ))}
          </Styled.SubItemWrapper>
        ) : null}
      </>
    );
  });

  return menuItems;
};

export default Menu;
