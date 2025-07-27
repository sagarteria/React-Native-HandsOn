// screens/PhotoCaptureScreen.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export default function PhotoCaptureScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const cameraRef = useRef<CameraView>(null);

    const takePhoto = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                if (photo) {
                    setPhotoUri(photo.uri);
                }
            } catch (error) {
                Alert.alert('Error taking photo', (error as Error).message);
            }
        }
    };

    if (!permission) {
        return <View><Text>Loading...</Text></View>;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {!photoUri ? (
                <>
                    <CameraView style={styles.camera} ref={cameraRef} facing="back" />
                    <TouchableOpacity style={styles.button} onPress={takePhoto}>
                        <Text style={styles.buttonText}>Take Photo</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Image source={{ uri: photoUri }} style={styles.preview} />
                    <TouchableOpacity style={styles.button} onPress={() => setPhotoUri(null)}>
                        <Text style={styles.buttonText}>Retake</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    camera: { width: '100%', height: 400 },
    preview: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: { color: 'white', fontSize: 16 },
});
