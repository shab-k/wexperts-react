import styled, { css, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
} 
body {
     margin: 0;
     padding: 0;
   }
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 992px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Wrapper = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0B5B')};
  padding: 20px 0;
  @media screen and (max-width: 992px) {
    padding: 0;
  }
`;

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? '#FFC636' : '#0C4ADA')};
  color: ${({ primary }) => (primary ? '#0C4ADA' : '#FFC636')};
  /* font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')}; */
  /* padding: ${({ big }) => (big ? '12px 64px' : '10px 17px')}; */
  padding: 12px 64px;
  font-size: 1.25rem;
  font-size: clamp(1rem, 0.5556rem + 0.9259vw, 1.25rem);
  border-radius: 50px;
  white-space: nowrap;
  margin: 10px 10px 10px 0;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;

  ${(props) =>
    props.danger &&
    css`
      background: crimson;
      color: white;
    `}

  &:hover {
    transition: all 0.3s ease-out;
    background: #000;
    background-color: ${({ primary }) => (primary ? '#0C4ADA' : '#FFC636')};
    color: ${({ primary }) => (primary ? '#FFC636' : '#0C4ADA')};
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 12px 60px;
  }
`;
export const DangerButton = styled(Button)`
  background: crimson;
  color: white;
  &:hover {
    background: #fff;
    color: crimson;
  }
`;
export const H1 = styled.h1`
  font-size: 48px;
  font-size: clamp(1.8rem, -0.3333rem + 4.4444vw, 3rem);
  margin-bottom: 24px;
  line-height: 1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;
export const H2 = styled.h2`
  /* font-size: 24px; */
  font-size: 1.6rem;
  font-size: clamp(1.3rem, 0.7667rem + 1.1111vw, 1.6rem);
  padding: 0;
  color: #0c4ada;
  margin-bottom: 16px;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.small &&
    css`
      font-size: 20px;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
    @media screen and (max-width: 992px) {
    text-align: left;
    padding-bottom: 10px;
  }
`;
export const H3 = styled.h3`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  /* font-size: 18px; */
  font-size: 1.17rem;
  font-size: clamp(1.12rem, 1.0311rem + 0.1852vw, 1.17rem);
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Paragraph = styled.p`
  text-align: left;
  font-size: 16px;
  color: #666a75;
  padding: 2px 0;

  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.big &&
    css`
      font-size: 20px;
    `}
  ${(props) =>
    props.small &&
    css`
      font-size: 14px;
    `}
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const FlexCol = `
  display: flex;
  flex-direction: column;
`;
export const FlexRow = `
  display: flex;
  flex-direction: row;
`;

export default GlobalStyle;
