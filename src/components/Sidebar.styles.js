import styled from "styled-components";

export const Wrapper = styled.div`
  position: initial;
  height: inherit;
  width: fit-content;
  background-color: #ffffff;
  color: ${(props) => props.theme.colors.rose};
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  margin: 0 auto;
  display: block;
`;

export const MenuWrapper = styled.nav`
  padding: 0 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
`;

export const MenuItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  padding: 20px 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
`;

export const SubItemWrapper = styled.ul`
  padding: 0;
  list-style: none;
`;

export const SubItem = styled.li`
  padding: 10px 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
`;
