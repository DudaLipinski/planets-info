import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.rose};
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <h1>hello guys</h1>
    </Wrapper>
  );
};

export default Sidebar;
