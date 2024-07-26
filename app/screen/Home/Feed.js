// import { Ionicons } from '@expo/vector-icons';
// import { useDrawerProgress } from 'react-native-drawer-layout';
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// const Feed = () => {
//   const progress = useDrawerProgress();
//   return (
    
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View>
        // <Ionicons name={'menu'} size={24} color="black" />
        //         </View>
        //       </View>
              // <ScrollView contentContainerStyle={styles.scrollViewContent}>
              //   <Text style={styles.contentText}>Nội dung cuộn...</Text>
              // </ScrollView>
        //     </View>
        //   );
        // };
        
        // const styles = StyleSheet.create({
          //   container: {
            //     flex: 1,
            //   },
            //   header: {
                  // position: 'absolute',
                  // top: 0,
                  // left: 0,
                  // right: 0,
                  // backgroundColor: 'red',
                  // zIndex: 1,
                  // height: 60, // Chiều cao của header
                  // justifyContent: 'center',
                  // alignItems: 'center',
              //   },
              //   headerText: {
                //     color: 'white',
                //     fontSize: 18,
                //   },
                //   scrollViewContent: {
                  //     paddingTop: 60, // Đảm bảo nội dung cuộn không bị che bởi header
                  //   },
                  //   contentText: {
                    //     fontSize: 18,
                    //     padding: 20,
                    //   },
                    // });
                    
                    // export default Feed;

import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, Pressable, ScrollView, TextInput } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { View } from 'react-native';

export default function DrawerExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <View style={{ marginLeft: 30, marginTop: 30 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Ionicons name={'home'} size={24} color="black" />
              <Text style={{ color: 'red', marginLeft: 10, fontSize: 20 }}>Home</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Ionicons name={'cart'} size={24} color="black" />
              <Text style={{ color: 'red', marginLeft: 10, fontSize: 20 }}>Cart</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Ionicons name={'person'} size={24} color="black" />
              <Text style={{ color: 'red', marginLeft: 10, fontSize: 20 }}>Person</Text>
            </View>
          </View>
        );
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'while',
          zIndex: 1,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => setOpen((prevOpen) => !prevOpen)}
          style={{ width: 25, marginRight: 25 }}>
          <Ionicons name={'menu'} size={24} color="black" style={{ marginRight: 30 }} />
        </Pressable>
        <TextInput
          style={{ marginRight: 20, borderWidth: 1, borderRadius: 30, height: 30, width: 200 }}
          placeholder="Search..."
        />
        <Ionicons name={'cart'} size={24} color="black" style={{ marginRight: 20 }} />
        <Ionicons name={'person'} size={24} color="black" style={{ marginRight: 10 }} />
      </View>
      <ScrollView style={{ marginTop: 60 }}>
        <Text>Nội dung cuộn...</Text>
      </ScrollView>
    </Drawer>
  );
}
