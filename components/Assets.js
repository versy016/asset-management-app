import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Assets = ({ isAdmin = true }) => {
  const navigation = useNavigation();

  const assets = [
    {
      id: '39ZW-W8BU',
      name: 'SAURON ',
      location: 'Office',
      assignedTo: 'Shivam Verma',
      imageUrl: 'data:image/jpeg;base64,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', // Replace with the actual image URL
      otherAssetId: 'GPS-12',
      type: 'laptop',
      otherType: 'GPS',
      checkInOut: 'Checked-Out',
      serialNumber: '5808470036',
      model: 'GPS R10',
      description: 'GPS Receiver - Hire Kangaroo Island',
      purchaseDate: '24 Apr 2018',
      warrantyTerms: 'Exp 30/04/2019',
    },
{
      id: '2EEU-2ERE',
      name: 'Big Foot',
      location: 'Office',
      assignedTo: 'David Topfer',
      imageUrl: 'data:image/jpeg;base64,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', // Replace with the actual image URL
      otherAssetId: 'GPS-12',
      type: 'laptop',
      otherType: 'GPS',
      checkInOut: 'Checked-Out',
      serialNumber: '5808470036',
      model: 'GPS R10',
      description: 'GPS Receiver - Hire Kangaroo Island',
      purchaseDate: '24 Apr 2018',
      warrantyTerms: 'Exp 30/04/2019',
    },{
      id: 'DIKD-2VVG',
      name: 'TALL BOY',
      location: 'Office',
      assignedTo: 'Nicola',
      imageUrl: 'data:image/jpeg;base64,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', // Replace with the actual image URL
      otherAssetId: 'GPS-12',
      type: 'laptop',
      otherType: 'GPS',
      checkInOut: 'Checked-Out',
      serialNumber: '5808470036',
      model: 'GPS R10',
      description: 'GPS Receiver - Hire Kangaroo Island',
      purchaseDate: '24 Apr 2018',
      warrantyTerms: 'Exp 30/04/2019',
    },  ];

  return (
    <View style={styles.container}>
     
       <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#1E90FF" />
      </TouchableOpacity>
      <Text style={styles.title}>Laptops</Text>
    </View>


      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {assets.length === 0 ? (
          <View style={styles.content}>
            <MaterialIcons name="storage" size={60} color="#1E90FF" />
            <Text style={styles.infoText}>
              How can we break it if we don't know what it is?
            </Text>
            <Text style={styles.infoSubText}>
              Start adding the Assets you're in charge of maintaining
            </Text>
          </View>
        ) : (
          <View style={styles.assetsList}>
            {assets.map((asset, index) => (
              <TouchableOpacity
                key={index}
                style={styles.assetItem}
                onPress={() => navigation.navigate('AssetDetail', { asset })}
              >
                <View style={styles.assetInfo}>
                  <Image
                    source={{ uri: asset.imageUrl }}
                    style={styles.assetImage}
                  />
                  <View style={styles.assetDetails}>
                    <Text style={styles.assetName}>{asset.id} : {asset.name}</Text>
                    <View style={styles.locationContainer}>
                      <MaterialIcons name="location-on" size={16} color="#555" />
                      <Text style={styles.assetLocation}>{asset.location}</Text>
                    </View>
                    <Text style={styles.assetAssignedTo}>Assigned To: {asset.assignedTo}</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#1E90FF" />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {isAdmin && (
        // Inside the Assets component
<TouchableOpacity
  style={styles.addButton}
  onPress={() => navigation.navigate('SelectAssetType')}
>
  <MaterialIcons name="add-circle" size={60} color="#1E90FF" />
  <Text style={styles.addButtonText}>New Asset</Text>
</TouchableOpacity>

      )}
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
    flex: 1,
    textAlign: 'center',},
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#1E90FF',
  },
  tabText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  assetsList: {
    marginTop: 10,
        padding: 20,

  },
  assetItem: {
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
  assetInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  assetDetails: {
    flexDirection: 'column',
  },
  assetName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  assetLocation: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  assetAssignedTo: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  infoSubText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#1E90FF',
    marginLeft: 10,
  },
});

export default Assets;
