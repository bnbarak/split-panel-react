import React from "react";
import styled from "styled-components";
import Divider from "./Divider";

const Panel = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: top;
`;

class Panels extends React.PureComponent {
  renderDivider = () => {
    const { ratio, handleDragStart, dividerStyle } = this.props;
    return (
      <Divider
        ratio={ratio}
        handleDragStart={handleDragStart}
        dividerStyle={dividerStyle}
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
