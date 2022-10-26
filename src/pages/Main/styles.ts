import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background: #f6f6fa;
`;

interface ContainerItemProps {
  padding: number;
  marginBottom: number;
}

export const ContainerItem = styled(Animated.View)<ContainerItemProps>`
  flex-direction: row;

  padding: ${({ padding }) => padding}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.5);
`;

interface AvatarPros {
  size: number;
  paddingRight: number;
}

export const Avatar = styled.Image<AvatarPros>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  margin-right: ${({ paddingRight }) => paddingRight}px;
  border-radius: ${({ size }) => size}px;
`;

export const Content = styled.View``;

export const TextName = styled.Text`
  font-size: 20px;
  font-weight: bold;

  color: #161616;
`;

export const TextEmail = styled.Text`
  font-size: 16px;
  color: #333;

  text-transform: lowercase;
`;

export const TextBirthday = styled.Text`
  font-size: 14px;
  color: #333;
`;
