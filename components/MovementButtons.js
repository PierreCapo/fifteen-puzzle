import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Spacer = () => <View style={{ height: 24, width: "100%" }} />;

export const MovementButtons = () => {
  return (
    <View style={{ width: 150 }}>
      <Spacer />
      <Spacer />
      <Spacer />
      <Button title="Haut" />
      <Spacer />
      <Button title="Gauche" />
      <Spacer />
      <Button title="Droite" />
      <Spacer />
      <Button title="Bas" />
    </View>
  );
};
