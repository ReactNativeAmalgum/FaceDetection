import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export function NoCameraDeviceError() {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        No camera device found. Please ensure your device has a functional camera.
      </Text>
      <Button title="Try Again" onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
})