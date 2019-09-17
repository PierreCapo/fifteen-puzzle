import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tile } from "./components/Tile";
import { MovementButtons } from "./components/MovementButtons";
import { TILE_SIZE } from "./components/constants";

const taquinData = [1, 4, 6, 8, 2, 5, 9, 3, 15, 13, 7, 10, 12, 11, 14, -1];

export default () => {
  const [state, setState] = React.useState(taquinData);
  const changeData = data => {
    setState(data);
    //transitioningRef.current.animateNextTransition();
  };
  return (
    <View style={styles.container}>
      <View style={styles.transitioning}>
        {state.map(tile => (
          <Tile key={tile} label={tile} />
        ))}
      </View>
      <MovementButtons setState={changeData} state={state} />
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
    marginTop: 64,
    borderRadius: 5,
    overflow: "hidden"
  }
});

