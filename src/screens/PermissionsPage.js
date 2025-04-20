// import React, { useCallback, useEffect, useState } from 'react'
// import { Linking } from 'react-native'
// import { StyleSheet, View, Text, Image } from 'react-native'
// import { Camera } from 'react-native-vision-camera'
// const BANNER_IMAGE = require('../assets/camera.png')

// export function PermissionsPage({ navigation }) {
//   const [cameraPermissionStatus, setCameraPermissionStatus] = useState('not-determined')


//   const requestCameraPermission = useCallback(async () => {
//     console.log('Requesting camera permission...')
//     const permission = await Camera.requestCameraPermission()
//     console.log(`Camera permission status: ${permission}`)

//     if (permission === 'denied') await Linking.openSettings()
//     setCameraPermissionStatus(permission)
//   }, [])

//   useEffect(() => {
//     if (cameraPermissionStatus === 'granted') navigation.replace('CameraPage')
//   }, [cameraPermissionStatus, navigation])

//   return (
//     <View style={styles.container}>
//       <Image source={BANNER_IMAGE} style={styles.banner} />
//       <Text style={styles.welcome}>Welcome to{'\n'}Vision Camera.</Text>
//       <View style={styles.permissionsContainer}>
//         {cameraPermissionStatus !== 'granted' && (
//           <Text style={styles.permissionText}>
//             Vision Camera needs <Text style={styles.bold}>Camera permission</Text>.{' '}
//             <Text style={styles.hyperlink} onPress={requestCameraPermission}>
//               Grant
//             </Text>
//           </Text>
//         )}
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   welcome: {
//     fontSize: 38,
//     fontWeight: 'bold',
//     maxWidth: '80%',
//   },
//   banner: {
//     position: 'absolute',
//     opacity: 0.4,
//     bottom: 0,
//     left: 0,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   permissionsContainer: {
//     marginTop:2,
//   },
//   permissionText: {
//     fontSize: 17,
//   },
//   hyperlink: {
//     color: '#007aff',
//     fontWeight: 'bold',
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// })


import React, { useCallback, useEffect, useState } from 'react'
import { Linking } from 'react-native'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Camera } from 'react-native-vision-camera'

const BANNER_IMAGE = require('../assets/camera.png')

export function PermissionsPage({ navigation }) {
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState('not-determined')

  // Request Camera Permission
  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...')
    const permission = await Camera.requestCameraPermission()
    console.log(`Camera permission status: ${permission}`)

    if (permission === 'denied') await Linking.openSettings()
    setCameraPermissionStatus(permission)
  }, [])

  useEffect(() => {
    if (cameraPermissionStatus === 'granted') {
      navigation.replace('CameraPage')
    }
  }, [cameraPermissionStatus, navigation])

  return (
    <View style={styles.container}>
      <Image source={BANNER_IMAGE} style={styles.banner} />
      <Text style={styles.welcome}>Welcome to{'\n'}Vision Camera.</Text>
      <View style={styles.permissionsContainer}>
        {cameraPermissionStatus !== 'granted' && (
          <Text style={styles.permissionText}>
            Vision Camera needs <Text style={styles.bold}>Camera permission</Text>.{' '}
            <Text style={styles.hyperlink} onPress={requestCameraPermission}>
              Grant
            </Text>
          </Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 38,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  banner: {
    position: 'absolute',
    opacity: 0.4,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  permissionsContainer: {
    marginTop: 2,
  },
  permissionText: {
    fontSize: 17,
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
})
