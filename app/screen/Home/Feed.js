import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        </View>
        <Text style={styles.headerText}>hello bạn nhỏ</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
        <Text style={styles.contentText}>Nội dung cuộn...</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    zIndex: 1,
    height: 60, // Chiều cao của header
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    paddingTop: 60, // Đảm bảo nội dung cuộn không bị che bởi header
  },
  contentText: {
    fontSize: 18,
    padding: 20,
  },
});

export default Feed;
