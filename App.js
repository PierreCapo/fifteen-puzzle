import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Transitioning } from "react-native-reanimated";
import { Tile } from "./components/Tile";

const array = [1, 4, 6, 8, 2, 5, 9, 3, 15, 13, 7, 10, 12, 11, 14];
const TILE_SIZE = 50;

export default () => {
  const transitioningRef = React.createRef();
  return (
    <View style={styles.container}>
      <Transitioning.View ref={transitioningRef} style={styles.transitioning}>
        {array.map(tile => (
          <Tile key={tile} label={tile} />
        ))}
      </Transitioning.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  transitioning: {
    width: TILE_SIZE * 4,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 64
  }
});
