import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TILE_SIZE } from "./constants";

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
    backgroundColor: "#673ab7",
    borderWidth: 1,
    fontSize: 25
  }
});
