//Another manner to create Menu component
import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const [expandedItemTitle, setExpandedItemTitle] = useState();
  const menuConfig = props.menuConfig;

  const menuItems = menuConfig.map((menuItem) => {
    const isExpanded = expandedItemTitle === menuItem.title;
    return (
      <MenuItem
        onTitleClick={() =>
          setExpandedItemTitle(isExpanded ? null : menuItem.title)
        }
        isExpanded={isExpanded}
        {...menuItem}
      />
    );
  });

  console.log("--- menuItems ---"); // [XXX] REMOVE BEFORE COMMITING
  console.log(menuItems); // [XXX] REMOVE BEFORE COMMITING

  return menuItems;
};

export default Menu;
