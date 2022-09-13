import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.pink};
  color: ${(props) => props.theme.colors.rose};
`;

export const Logo = styled.img`
  width: 85%;
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
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const SubItemWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SubItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
