import React, { useState } from "react";
import * as Styled from "./Sidebar.styles";

const Menu = (props) => {
  const [expandedItemTitle, setExpandedItemTitle] = useState();
  const menuConfig = props.menuConfig;

  const menuItems = menuConfig.map(({ subItems, title }) => {
    const isExpanded = title === expandedItemTitle;

    if (!subItems) {
      return (
        <Styled.MenuItem>
          <b>{title}</b>
        </Styled.MenuItem>
      );
    }

    return (
      <>
        <Styled.MenuItem
          onClick={() => setExpandedItemTitle(isExpanded ? null : title)}
        >
          <b>{title}</b>
        </Styled.MenuItem>
        {isExpanded ? (
          <Styled.SubItemWrapper>
            {subItems.map((subItem) => (
              <Styled.SubItem>{subItem}</Styled.SubItem>
            ))}
          </Styled.SubItemWrapper>
        ) : null}
      </>
    );
  });

  return menuItems;
};

export default Menu;
