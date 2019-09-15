import React from "react";
import { View, Button } from "react-native";

const Spacer = () => <View style={{ height: 24, width: "100%" }} />;

const editArray = (array, movement) => {
  const minusOneIndex = array.indexOf(-1);
  if (minusOneIndex + movement < 0 || minusOneIndex + movement > 15) {
    return array;
  }
  const targetIndex = minusOneIndex + movement;
  const arr = [...array];
  [arr[targetIndex], arr[minusOneIndex]] = [
    arr[minusOneIndex],
    arr[targetIndex]
  ];
  return arr;
};

export const MovementButtons = ({ changeArray, array }) => {
  return (
    <View style={{ width: 150, marginTop: 100 }}>
      <Button title="Haut" onPress={() => changeArray(editArray(array, -4))} />
      <Spacer />
      <Button
        title="Gauche"
        onPress={() => changeArray(editArray(array, -1))}
      />
      <Spacer />
      <Button title="Droite" onPress={() => changeArray(editArray(array, 1))} />
      <Spacer />
      <Button title="Bas" onPress={() => changeArray(editArray(array, 4))} />
    </View>
  );
};
