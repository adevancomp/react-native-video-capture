import React from "react";
import {Text, Touchable, TouchableOpacity, View} from "react-native";
import {CameraViewProps} from "./props";
import { styles } from "./styles";
import { Camera } from "expo-camera";

export default function CameraView({
    cameraRef,
    isRecording,
    onRecording,
    onStopRecording
}: CameraViewProps){
    return (
        <Camera style={styles.container} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={isRecording ? onStopRecording : onRecording}
                    style={styles.buttonRecord}>
                    <Text style={styles.buttonText}>{isRecording ? "Stop Record" : "Start Record"}</Text>
                </TouchableOpacity>
            </View>
        </Camera>
    )
}