import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const AssetDetail = ({ route }) => {
  const { asset } = route.params;  // Get the asset details passed via route params
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#1E90FF" />
        </TouchableOpacity>
        <Text style={styles.title}>Asset Details</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Asset ID:</Text>
          <Text style={styles.detailValue}>{asset.id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Asset Name:</Text>
          <Text style={styles.detailValue}>{asset.name || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>TYPE:</Text>
          <Text style={styles.detailValue}>{asset.type || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>OTHER TYPE:</Text>
          <Text style={styles.detailValue}>{asset.otherType || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>CHECK IN/OUT:</Text>
          <Text style={styles.detailValue}>{asset.checkInOut || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>ASSIGNED TO:</Text>
          <Text style={styles.detailValue}>{asset.assignedTo}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>S/N:</Text>
          <Text style={styles.detailValue}>{asset.serialNumber || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>MODEL:</Text>
          <Text style={styles.detailValue}>{asset.model || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>DESCRIPTION:</Text>
          <Text style={styles.detailValue}>{asset.description || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>PURCHASE DATE:</Text>
          <Text style={styles.detailValue}>{asset.purchaseDate || "N/A"}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>WARRANTY TERMS:</Text>
          <Text style={styles.detailValue}>{asset.warrantyTerms || "N/A"}</Text>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="content-copy" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>Copy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="edit" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="task" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>Create task</Text>
        </TouchableOpacity>     
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="map" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>Map</Text>
        </TouchableOpacity>
      </View>
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
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
    flex: 2,
    textAlign: 'right',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  actionText: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

export default AssetDetail;
