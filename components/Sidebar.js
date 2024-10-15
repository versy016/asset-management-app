import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.title}>Assets</Text>
      <Text style={styles.item}>Cars</Text>
      <Text style={styles.item}>Laptops</Text>
      <Text style={styles.item}>Surveying Equipment</Text>
      <Text style={styles.item}>Drones</Text>
      <Text style={styles.item}>GPS Devices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#2c3e50',
    padding: 20,
    height: '100%',
    width: 200,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  item: {
    marginBottom: 10,
    color: '#fff',
  },
});

export default Sidebar;