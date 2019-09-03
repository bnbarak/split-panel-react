import styled from "styled-components";
import React from "react";

const DividerContainer = styled.div`
  position: absolute;
  left: 30%;
  top: 0;
  width: 2px;
  background-color: black;
  height: 100%;
  cursor: col-resize;
`;

export default props => {
  const { handleDragStart, dividerStyle, ratio } = props;
  const left = `${ratio}% `;

  return (
    <DividerContainer
      onMouseDown={handleDragStart}
      style={{ ...dividerStyle, left }}
      onClick={e => e.preventDefault()}
    />
  );
};
