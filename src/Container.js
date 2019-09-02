import React from "react";
import styled from "styled-components";
import _ from "lodash";
import ReactResizeDetector from "react-resize-detector";
import { checkLimit, onChangeOutput } from "./utils";
import Panels from "./Panels";

const ContainerDiv = styled.div`
  position: relative;
`;

class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isDrag: false,
      ratio: null,
      containerWidth: 0
    };

    this.handleMouseMove = _.debounce(this.handleMouseMove, 5);
    this.mouseUpEvent = document.addEventListener(
      "mouseup",
      this.handleDragFinish
    );
    this.mouseMoveEvent = document.addEventListener(
      "mousemove",
      this.handleMouseMove
    );
    this.containerId = "some-id";
  }

  componentDidMount() {
    const { containerId } = this;
    const { defaultLeftWidth, defaultRightWidth, defaultRatio } = this.props;

    this.containerEle = document.getElementById(containerId);
    const containerWidth = this.containerEle.offsetWidth;

    let ratio = defaultRatio;
    if (defaultLeftWidth) {
      ratio = (defaultLeftWidth / containerWidth) * 100;
    }
    if (defaultRightWidth) {
      ratio = 100 - (defaultRightWidth / containerWidth) * 100;
    }

    this.setState({ ratio });
  }

  mousePositionOffsetContainerLeft = mousePosition => {
    const { left: containerOffset } = this.containerEle.getBoundingClientRect();
    return mousePosition - containerOffset;
  };

  meetContainerConstrains = mousePosition => {
    const { left, right } = this.containerEle.getBoundingClientRect();
    return mousePosition >= left && mousePosition <= right;
  };

  meetAllConstraints = (mousePosition, mousePositionNoOffset) => {
    const { ratio } = this.state;
    const {
      leftMaxWidth,
      rightMaxWidth,
      leftMinWidth,
      rightMinWidth
    } = this.props;

    const containerWidth = this.containerEle.offsetWidth;
    const dividerPosition = (containerWidth * ratio) / 100;

    const isMeetLeftMax = checkLimit(ratio, leftMaxWidth, containerWidth);
    const isMeetLeftMin = checkLimit(
      ratio,
      leftMinWidth,
      containerWidth,
      false
    );
    const isMeetRightMax = checkLimit(
      100 - ratio,
      rightMaxWidth,
      containerWidth
    );
    const isMeetRightMin = checkLimit(
      100 - ratio,
      rightMinWidth,
      containerWidth,
      false
    );

    const canMoveLeft = mousePosition < dividerPosition;
    const canMoveRight = mousePosition > dividerPosition;

    const leftMaxConstraints = isMeetLeftMax || (canMoveLeft && !isMeetLeftMax);
    const leftMinConstraints =
      isMeetLeftMin || (canMoveRight && !isMeetLeftMin);
    const rightMaxConstraints =
      isMeetRightMax || (canMoveRight && !isMeetRightMax);
    const rightMinConstraints =
      isMeetRightMin || (canMoveLeft && !isMeetRightMin);

    return (
      leftMaxConstraints &&
      leftMinConstraints &&
      rightMaxConstraints &&
      rightMinConstraints &&
      this.meetContainerConstrains(mousePositionNoOffset)
    );
  };

  handleMouseMove = event => {
    const { clientX } = event;
    const { isDrag } = this.state;
    const { onChange } = this.props;

    const mousePosition = this.mousePositionOffsetContainerLeft(clientX);
    const mousePositionNoOffset = clientX;

    if (
      isDrag &&
      this.meetAllConstraints(mousePosition, mousePositionNoOffset)
    ) {
      const containerWidth = this.containerEle.offsetWidth;

      const ratio = (mousePosition / containerWidth) * 100;
      onChange(onChangeOutput(ratio, containerWidth));
      this.setState({ ratio });
    }
  };

  handleDragFinish = () => {
    const { isDrag } = this.state;
    const { onFinish } = this.props;
    if (isDrag) {
      this.setState({ isDrag: false });
      onFinish();
    }
  };

  handleDragStart = () => {
    const { onStart } = this.props;
    this.setState({ isDrag: true });
    onStart();
  };

  handleResize = containerWidth => this.setState({ containerWidth });

  renderResizeDetector = () => {
    const { handleResize } = this;
    return (
      <ReactResizeDetector handleWidth handleHeight onResize={handleResize} />
    );
  };

  renderPanels = () => {
    const { handleDragStart } = this;
    const { children, dividerStyle } = this.props;
    const { ratio } = this.state;

    return (
      <Panels
        children={children}
        ratio={ratio}
        handleDragStart={handleDragStart}
        dividerStyle={dividerStyle}
      />
    );
  };

  render() {
    const { containerId, renderPanels, renderResizeDetector } = this;
    const { height, containerStyle } = this.props;
    return (
      <ContainerDiv id={containerId} style={{ height, ...containerStyle }}>
        {renderResizeDetector()}
        {renderPanels()}
      </ContainerDiv>
    );
  }
}

Container.defaultProps = {
  leftMaxWidth: null,
  leftMinWidth: null,
  rightMaxWidth: null,
  rightMinWidth: null,
  defaultLeftWidth: null,
  defaultRightWidth: null,
  defaultRatio: 50,
  height: null,
  containerStyle: {},
  dividerStyle: {},
  onStart: () => {},
  onFinish: () => {},
	onChange: () => {}
};

export default Container;
