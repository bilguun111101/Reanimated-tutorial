import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ripple } from "../components";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RippleEffect = () => {
  return (
    <View style={styles.container}>
      <Ripple
        style={styles.ripple}
        onTap={() => {
          console.log(`tap`);
        }}
      >
        <Text style={{ fontSize: 25 }}>Tap</Text>
      </Ripple>
    </View>
  );
};

export default () => {
  return (
    <GestureHandlerRootView>
      <RippleEffect />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  ripple: {
    width: 200,
    height: 200,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    // iOS
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    // Android
    elevation: 2,
  },
});
