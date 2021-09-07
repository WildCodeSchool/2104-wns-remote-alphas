import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Camera } from "expo-camera";

function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No Access to camera</Text>;
  }

  return (
    <>
      <Camera style={styles.camera} ref={cameraRef} />
      <View style={styles.containButton}>
        <TouchableOpacity
          style={styles.buttonPhoto}
          onPress={async () => {
            if (cameraRef.current !== null) {
              const pictureMetadata =
                await cameraRef.current.takePictureAsync();
              console.log("pictureMetadata", pictureMetadata);
            }
          }}
        >
          <Ionicons name="ios-camera" color="#EFEFEF" size={30} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  containButton: {
    flex: 0.09,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#252525",
    backgroundColor: "white",
  },
  buttonPhoto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
    width: 50,
    height: 50,
    borderRadius: 40,
  },
});
