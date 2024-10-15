import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Inventory = () => {
  const navigation = useNavigation();

  const assetTypes = [
    {
      id: '1',
      name: 'Laptop',
      imageUrl: 'https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg', // Replace with actual image URL
      available: 10,
      inUse: 5,
      rented: 2,
    },
    {
      id: '2',
      name: 'GPS',
      imageUrl: 'https://geomaticslandsurveying.com/wp-content/uploads/2018/11/trimble-r10-price.jpg.webp', // Replace with actual image URL
      available: 8,
      inUse: 3,
      rented: 1,
    },
    // Add more asset types here
  ];

  return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Inventory"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="filter-list" size={24} color="#1E90FF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="qr-code-scanner" size={24} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {assetTypes.map((type, index) => (
          <TouchableOpacity
            key={index}
            style={styles.typeItem}
            onPress={() => navigation.navigate('AssetList', { type })}
          >
            <View style={styles.typeInfo}>
              <Image
                source={{ uri: type.imageUrl }}
                style={styles.typeImage}
              />
              <View style={styles.typeDetails}>
                <Text style={styles.typeName}>{type.name}</Text>
              </View>
            </View>
            <View style={styles.typeStats}>
              <Text style={styles.statText}>Available: {type.available}</Text>
              <Text style={styles.statText}>In Use: {type.inUse}</Text>
              <Text style={styles.statText}>Rented: {type.rented}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#1E90FF" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    },
   iconButton: {
    padding: 10,
  },
  typeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  typeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  typeDetails: {
    flexDirection: 'column',
  },
  typeName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  typeStats: {
    alignItems: 'flex-end',
  },
  statText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Inventory;
