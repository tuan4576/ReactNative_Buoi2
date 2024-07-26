// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Animated } from 'react-native-reanimated';
// import { useDrawerProgress } from 'react-native-drawer-layout';

// export default function Notifications() {
//   const progress = useDrawerProgress();

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: interpolate(progress, [0, 1], [-100, 0]),
//         },
//       ],
//     };
//   });

//   return <Animated.View style={animatedStyle}>{/* ... */}</Animated.View>;
// }

// const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})