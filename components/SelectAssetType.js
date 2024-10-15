import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SelectAssetType = () => {
  const navigation = useNavigation();

  const selectAssetType = (type) => {
    // Pass the selected asset type to the next screen
    navigation.navigate('NewAsset', { assetType: type });
  };

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#1E90FF" />
      </TouchableOpacity>
      <Text style={styles.title}>Select Asset Type</Text>
    </View>

    <TouchableOpacity
        style={styles.optionButton}
        onPress={() => selectAssetType('Laptop')}
      >
        <MaterialIcons name="laptop" size={24} color="#1E90FF" />
        <Text style={styles.optionText}>Laptop</Text>
        <View style={{ flex: 1 }} />
          <MaterialIcons name="chevron-right" size={24} color="#1E90FF" />
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.optionButton}
        onPress={() => selectAssetType('GPS')}
      >
        <MaterialIcons name="gps-fixed" size={24} color="#1E90FF" />
        <Text style={styles.optionText}>GPS</Text>
        <View style={{ flex: 1 }} />
          <MaterialIcons name="chevron-right" size={24} color="#1E90FF" />
      </TouchableOpacity>

      {/* You can add more options for different asset types here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginLeft: 60,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginVertical: 2,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#1E90FF',
  },
});

export default SelectAssetType;
