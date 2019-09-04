export const checkLimit = (ratio, maxWidth, containerWidth, flip = true) => {
  if (maxWidth) {
    const panelWidth = (containerWidth * ratio) / 100;
    if (flip) return panelWidth < maxWidth;
    return panelWidth > maxWidth;
  }
  return true;
};

export const onChangeOutput = (ratio, containerWidth) => ({
  ratio,
  containerWidth,
  leftWidth: (ratio * containerWidth) / 100,
  rightWidth: containerWidth - (ratio * containerWidth) / 100
});

export const MOUSE_UP_EVENT = "mouseup";
export const MOUSE_MOVE_EVENT = "mousemove";
