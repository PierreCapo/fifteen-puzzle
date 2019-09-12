import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const TILE_SIZE = 50;

export const Tile = ({ label }) => {
  return (
    <View style={styles.tile}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: TILE_SIZE,
    width: TILE_SIZE,
    backgroundColor: "purple",
    borderWidth: 1,
    justifyContent: "center"
  },
  label: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  }
});
