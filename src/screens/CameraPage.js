
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Linking, Button, Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { NoCameraDeviceError } from './NoCameraDeviceError';
import FaceDetection from '@react-native-ml-kit/face-detection';
import RNFS from 'react-native-fs';

export default function CameraPage() {
  const device = useCameraDevice('front');
  const cameraRef = useRef(null);
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    const getPermission = async () => {
      if (!hasPermission) {
        const permission = await requestPermission();
        console.log('Camera permission status:', permission);
        if (permission === 'denied') {
          Linking.openSettings();
        }
      }
    };
    getPermission();
  }, [hasPermission, requestPermission]);

  const captureAndDetectFace = async () => {
    try {
      const photo = await cameraRef.current.takePhoto({
        flash: 'off',
      });
  
      const originalPath = photo.path;
      const fileName = `photo_${Date.now()}.jpg`;
      const destPath = `${RNFS.PicturesDirectoryPath}/${fileName}`;
  
      // Save to gallery
      await RNFS.copyFile(originalPath, destPath);
      console.log('Saved to:', destPath);
  
      // Face detection
      const contentUri = `file://${destPath}`;
      const faces = await FaceDetection.detect(contentUri, { landmarkMode: 'all' });
      console.log('Faces detected:', faces);
  
      if (faces.length > 0) {
        Alert.alert('Face Detected', `Found ${faces.length} face(s)\nSaved to Gallery.`);
      } else {
        Alert.alert('No Face Detected', 'Saved to Gallery.');
      }
    } catch (error) {
      console.error('Face detection error:', error);
      Alert.alert('Error', 'Failed to detect face or save image');
    }
  };
  
  if (device == null) return <NoCameraDeviceError />;

  if (!hasPermission) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>Camera permission is required.</Text>
        <Button title="Open Settings" onPress={() => Linking.openSettings()} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="Capture & Detect Face" onPress={captureAndDetectFace} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
});
