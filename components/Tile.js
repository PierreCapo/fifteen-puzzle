import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const TILE_SIZE = 50;

export const Tile = ({ label }) => {
  return (
    <>
      {label !== -1 ? (
        <Text style={styles.label}>{label}</Text>
      ) : (
        <View style={styles.emptyTile}></View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  emptyTile: {
    height: TILE_SIZE,
    width: TILE_SIZE,
    backgroundColor: "transparent"
  },
  label: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    height: TILE_SIZE,
    width: TILE_SIZE,
    backgroundColor: "purple",
    borderWidth: 1
  }
});
