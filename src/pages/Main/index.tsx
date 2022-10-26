import React from "react";
import { Animated, FlatList, StatusBar, Image, StyleSheet } from "react-native";
import { format } from "date-fns";

import { getDataUsers } from "../../functions/getDataUsers";
import {
  Avatar,
  Container,
  ContainerItem,
  Content,
  TextBirthday,
  TextEmail,
  TextName,
} from "./styles";

//@ts-ignore
import ImageBackground from "../../../assets/background.jpg";

const users = getDataUsers();

export function MainPage() {
  const AVATAR_SIZE = 70;
  const SPACING = 20;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Image
        source={ImageBackground}
        blurRadius={80}
        style={StyleSheet.absoluteFillObject}
      />

      <Animated.FlatList
        data={users}
        keyExtractor={(item) => item.userId}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: (StatusBar.currentHeight || 42) + 0,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <ContainerItem
              style={{ transform: [{ scale }], opacity }}
              padding={SPACING}
              marginBottom={SPACING}
            >
              <Avatar
                source={{ uri: item.avatar }}
                paddingRight={SPACING / 2}
                size={AVATAR_SIZE}
              />

              <Content>
                <TextName>{item.username}</TextName>
                <TextEmail numberOfLines={1}>{item.email}</TextEmail>
                <TextBirthday>
                  {format(item.birthdate, "dd/MM/yyyy")}
                </TextBirthday>
              </Content>
            </ContainerItem>
          );
        }}
      />
    </Container>
  );
}
