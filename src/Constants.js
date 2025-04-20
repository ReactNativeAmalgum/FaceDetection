import { Dimensions, Platform } from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const CONTENT_SPACING = 15;

// Safely extract insets with fallbacks
const insets = {
  top: StaticSafeAreaInsets.safeAreaInsetsTop ?? 0,
  bottom: StaticSafeAreaInsets.safeAreaInsetsBottom ?? 0,
  left: StaticSafeAreaInsets.safeAreaInsetsLeft ?? 0,
  right: StaticSafeAreaInsets.safeAreaInsetsRight ?? 0,
};

// Safe bottom padding depending on platform
const SAFE_BOTTOM = Platform.select({
  ios: insets.bottom,
  android: 0,
}) ?? 0;

// Safe area padding for UI components
export const SAFE_AREA_PADDING = {
  paddingLeft: insets.left + CONTENT_SPACING,
  paddingTop: insets.top + CONTENT_SPACING,
  paddingRight: insets.right + CONTENT_SPACING,
  paddingBottom: SAFE_BOTTOM + CONTENT_SPACING,
};

// The maximum zoom _factor_ you should be able to zoom in
export const MAX_ZOOM_FACTOR = 10;

// Screen dimensions
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Platform.select({
  android: Dimensions.get('screen').height - insets.bottom,
  ios: Dimensions.get('window').height,
});

// Capture Button
export const CAPTURE_BUTTON_SIZE = 78;

// Control Button like Flash
export const CONTROL_BUTTON_SIZE = 40;
