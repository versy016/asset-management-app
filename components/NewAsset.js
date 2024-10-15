import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const NewAsset = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { assetType } = route.params;  // Get the asset type passed from SelectAssetType

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#1E90FF" />
        </TouchableOpacity>
        <Text style={styles.title}>New {assetType}</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>CREATE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Asset Name"
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.addImage}>
          <MaterialIcons name="camera-alt" size={24} color="#1E90FF" />
          <Text style={styles.addImageText}>Add or take pictures</Text>
        </TouchableOpacity>

        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Add a description"
          placeholderTextColor="#888"
          multiline
        />

        <View style={styles.row}>
          <Text style={styles.label}>QR Code/Barcode</Text>
          <TouchableOpacity>
            <Text style={styles.assignText}>Assign</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Location</Text>
          <TouchableOpacity>
            <Text style={styles.assignText}>Assign Location</Text>
          </TouchableOpacity>
        </View>
        
        <TextInput
          style={styles.input}
          placeholder="Serial Number"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Model"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Manufacturer"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Year"
          placeholderTextColor="#888"
        />

        <View style={styles.row}>
          <Text style={styles.label}>Files</Text>
          <TouchableOpacity>
            <Text style={styles.assignText}>Attach</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Asset Type</Text>
          <TouchableOpacity>
            <Text style={styles.assignText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Team Member in charge</Text>
          <TouchableOpacity>
            <Text style={styles.assignText}>Choose</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Vendors</Text>
          <TouchableOpacity>
            <Text style={styles.assignText}>Assign</Text>
          </TouchableOpacity>
        </View>
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  createButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  createText: {
    fontSize: 16,
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
  addImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#1E90FF',
    borderWidth: 1,
  },
  addImageText: {
    color: '#1E90FF',
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  assignText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});

export default NewAsset;
