import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

// const changeColor = keyframes`
//     0% {
//       transform:rotate(0deg) translateX(5px) translateY(120px) rotate(0deg) scale(1);
//    }

//    25% {
//       transform:rotate(90deg) translateX(5px) translateY(120px) rotate(-90deg) scale(.75);
//    }

//    50% {
//       transform:rotate(180deg) translateX(5px) translateY(120px) rotate(-180deg) scale(.60);
//    }

//    75% {
//       transform:rotate(270deg) translateX(5px) translateY(120px) rotate(-270deg) scale(.75);
//    }

//    100% {
//       transform:rotate(360deg) translateX(5px) translateY(120px) rotate(-360deg) scale(1);
//    }
// `;

const changeColor = keyframes`
    0% {
      transform:rotate(0deg) translateX(150px) translateY(5px) rotate(0deg) scale(1);
   }

   25% {
      transform:rotate(90deg) translateX(150px) translateY(5px) rotate(-90deg) scale(.75);
   }

   50% {
      transform:rotate(180deg) translateX(150px) translateY(5px) rotate(-180deg) scale(.60);
   }

   75% {
      transform:rotate(270deg) translateX(150px) translateY(5px) rotate(-270deg) scale(.75);
   }

   100% {
      transform:rotate(360deg) translateX(150px) translateY(5px) rotate(-360deg) scale(1);
   }
`;

const WhiteCircle = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 200px auto 0;

  animation: ${changeColor} 7s linear infinite;
`;

const Animations = () => <WhiteCircle></WhiteCircle>;

export default Animations;
