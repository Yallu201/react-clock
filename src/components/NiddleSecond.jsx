import React from "react";
import styled from "@emotion/styled";
const NiddleSecond = ({ angle }) => {
  return (
    <Area angle={angle}>
      <Top>
        <Line />
      </Top>
      <Bottom />
    </Area>
  );
};
const Area = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border-radius: 100%;
  @media (prefers-reduced-motion: no-preference) {
    animation: niddle-spin-second infinite 60s linear;
  }
  @keyframes niddle-spin-second {
    from {
      transform: ${({ angle }) => `rotate(${angle}deg)`};
    }
    to {
      transform: ${({ angle }) => `rotate(${angle + 360}deg)`};
    }
  }
`;
const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: transparent;
`;
const Bottom = styled.div`
  flex: 1;
  background-color: transparent;
`;
const Line = styled.div`
  width: 2px;
  height: 80%;
  background-color: red;
`;
export default NiddleSecond;