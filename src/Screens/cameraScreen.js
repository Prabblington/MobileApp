import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { StyleSheet } from 'react-native';

export default function CameraScreen() {
  const camera = useCameraDevices('wide-angle-camera');
  // const currentCam = camera.back;

  // if (camera == null) return <LoadingView />;
  return <Camera style={StyleSheet.absoluteFill} device={camera} isActive />;
}
