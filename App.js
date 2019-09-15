import React from "react";
import { StyleSheet, View } from "react-native";
import { Transitioning, Transition } from "react-native-reanimated";
import { Tile } from "./components/Tile";
import { MovementButtons } from "./components/MovementButtons";

const array = [1, 4, 6, 8, 2, 5, 9, 3, 15, 13, 7, 10, 12, 11, 14, -1];
const TILE_SIZE = 50;

export default () => {
  const [state, setState] = React.useState(array);
  const transitioningRef = React.createRef();
  const transition = <Transition.Change durationMs={400} />;
  const modif = arr => {
    setState(arr);
    transitioningRef.current.animateNextTransition();
  };
  return (
    <View style={styles.container}>
      <Transitioning.View
        ref={transitioningRef}
        style={styles.transitioning}
        transition={transition}
      >
        {state.map(tile => (
          <Tile key={tile} label={tile} />
        ))}
      </Transitioning.View>
      <MovementButtons changeArray={modif} array={state} />
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
