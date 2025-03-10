import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (
  position: "top" | "left" | "right" | "bottom",
  size: "small" | "medium" | "large",
  theme: any
) => {
  //   console.log(`${positionVariant[position]}:${sizeVariant[size]}`);
  const sizeIndex = sizeVariant[size as "small" | "medium" | "large"];
  const property =
    positionVariant[position as "top" | "left" | "right" | "bottom"];
  const value = theme.space[sizeIndex];
  // console.log(`${property}:${value}`);
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

// we are running a dynamic function inside the styled component.
export const Spacer = ({
  position = "top",
  size = "small",
  children,
}: {
  position?: "top" | "left" | "right" | "bottom";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
}) => {
  const theme = useTheme();
  const variant = getVariant(
    position as "top" | "left" | "right" | "bottom",
    size as "small" | "medium" | "large",
    theme
  );
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
