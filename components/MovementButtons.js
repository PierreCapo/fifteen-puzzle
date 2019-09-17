import React from "react";
import { View, Button } from "react-native";
import R from "ramda";

const Spacer = () => <View style={{ height: 24, width: "100%" }} />;

const moveEmptyTile = R.curry((array, movement) => {
  const minusOneIndex = array.indexOf(-1);
  const targetIndex = minusOneIndex + movement;
  if (targetIndex < 0 || targetIndex > 15) {
    return array;
  }
  const arr = [...array];
  [arr[targetIndex], arr[minusOneIndex]] = [
    arr[minusOneIndex],
    arr[targetIndex]
  ];

  return arr;
});

export const MovementButtons = ({ setState, state }) => {
  return (
    <View style={{ width: 150, marginTop: 80 }}>
      <Button
        title="Haut"
        color="#00675b"
        onPress={() => setState(moveEmptyTile(state, 4))}
      />
      <Spacer />
      <Button
        title="Gauche"
        color="#00675b"
        onPress={() => setState(moveEmptyTile(state, 1))}
      />
      <Spacer />
      <Button
        title="Droite"
        color="#00675b"
        onPress={() => setState(moveEmptyTile(state, -1))}
      />
      <Spacer />
      <Button
        color="#00675b"
        title="Bas"
        onPress={() => setState(moveEmptyTile(state, -4))}
      />
    </View>
  );
};
