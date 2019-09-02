import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  position: absolute;
  left: 30%;
  top: 0;
  width: 2px;
  background-color: black;
  height: 100%;
  cursor: col-resize;
`;

const Panel = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: top;
`;

class Panels extends React.PureComponent {
  dividerId = "some-id-2";

  renderDivider = () => {
    const { dividerId } = this;
    const { ratio, handleDragStart, dividerStyle } = this.props;
    const left = `${ratio}% `;
    return (
      <Divider
        id={dividerId}
        onMouseDown={handleDragStart}
        style={{ ...dividerStyle, left }}
        onClick={e => e.preventDefault()}
      />
    );
  };

  renderPanel = (child, ratio) => {
    const width = `${ratio}%`;
    return <Panel style={{ width }}>{child}</Panel>;
  };

  render() {
    const { renderPanel, renderDivider } = this;
    const { children, ratio } = this.props;
    const [leftChild, rightChild] = children;

    return (
      <React.Fragment>
        {renderPanel(leftChild, ratio)}
        {renderDivider()}
        {renderPanel(rightChild, 100 - ratio)}
      </React.Fragment>
    );
  }
}

export default Panels;
