import React from "react";
import { styled, useTheme } from "styled-components/native";

export const spacerSizes = {
  small: 1,
  medium: 2,
  large: 3,
};

export const spacerPostitions = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getStyle = (position, size, theme) => {
  const value = theme.space[size];

  return `${position}:${value}`;
};

export const SpacerView = styled.View`
  ${({ dynamicStyle }) => dynamicStyle}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const dynamicStyle = getStyle(position, size, theme);
  return <SpacerView dynamicStyle={dynamicStyle}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: spacerPostitions.top,
  size: spacerSizes.small,
};
