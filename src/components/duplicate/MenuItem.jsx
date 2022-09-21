//Another manner to create Menu component

import React from "react";
import * as Styled from "../Sidebar.styles";

const MenuItem = ({ title, subItems, isExpanded, onTitleClick }) => {
  return (
    <>
      {subItems ? (
        <Styled.MenuItem onClick={onTitleClick}>
          <b>{title}</b>
          {isExpanded ? (
            <Styled.SubItemWrapper>
              {subItems.map((subItem) => (
                <Styled.SubItem key={subItem}>{subItem}</Styled.SubItem>
              ))}
            </Styled.SubItemWrapper>
          ) : null}
        </Styled.MenuItem>
      ) : (
        <Styled.MenuItem>
          <b>{title}</b>
        </Styled.MenuItem>
      )}
    </>
  );
};

export default MenuItem;
