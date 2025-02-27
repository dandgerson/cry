import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styled from "styled-components";

const AvatarRoot = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 100%;
`;

const AvatarImage = styled(AvatarPrimitive.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff3f4;
  color: #536471;
  font-size: 15px;
  font-weight: 500;
`;

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <AvatarRoot style={{ width: size, height: size }}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback delayMs={600}>{getInitials(alt)}</AvatarFallback>
    </AvatarRoot>
  );
};

export default Avatar;
