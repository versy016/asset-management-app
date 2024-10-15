import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Assets from './Myassets';
import Inventory from './Inventory';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Assets');

  const renderTab = () => {
    switch (activeTab) {
      case 'Assets':
        return <Assets />;
      case 'Inventory':
        return <Inventory />;
      default:
        return <Assets />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Assets' && styles.activeTab]}
          onPress={() => setActiveTab('Assets')}
        >
          <Text style={styles.tabText}>MY ASSETS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Inventory' && styles.activeTab]}
          onPress={() => setActiveTab('Inventory')}
        >
          <Text style={styles.tabText}>FAVOURITES</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={[styles.tab, activeTab === 'Inventory' && styles.activeTab]}
          onPress={() => setActiveTab('Inventory')}
        >
          <Text style={styles.tabText}>INVENTORY</Text>
        </TouchableOpacity>
      </View>
      {renderTab()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Tabs;
