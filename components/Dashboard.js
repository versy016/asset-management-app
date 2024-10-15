import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
  const [shortcuts, setShortcuts] = useState([]);

  const addShortcut = () => {
    if (shortcuts.length < 4) {
      setShortcuts([...shortcuts, `Shortcut ${shortcuts.length + 1}`]);
    }
  };

  return (
    <View style={styles.dashboard}>
            <ScrollView >

      <View style={styles.header}>
        <Text style={styles.greetingText}>Hello, Shivam!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SV</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>Welcome to Eng Surveys</Text>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="login" size={35} color="#1E90FF" />
          <Text style={styles.actionText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="sync-alt" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>Multi-Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="qr-code-scanner" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="construction" size={24} color="#1E90FF" />
          <Text style={styles.actionText}>My Assets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shortcutsSection}>
        <Text style={styles.sectionTitle}>SHORTCUTS</Text>
        <View style={styles.shortcutsGrid}>
          {shortcuts.map((shortcut, index) => (
            <View key={index} style={styles.shortcutCard}>
              <Text>{shortcut}</Text>
            </View>
          ))}
          {shortcuts.length < 4 && (
            <TouchableOpacity style={styles.shortcutCard} onPress={addShortcut}>
              <MaterialIcons name="add" size={36} color="#1E90FF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.toDoList}>
        <Text style={styles.sectionTitle}>TO DO LIST</Text>
        <View style={styles.toDoCard}>
          <Text style={styles.toDoTitle}>Assigned To Me (1)</Text>
          <Text style={styles.toDoText}>Ee</Text>
          <TouchableOpacity style={styles.toDoButton}>
            <Text style={styles.toDoButtonText}>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 16,
    color: '#555',
  },
  avatar: {
    backgroundColor: '#1E90FF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%', // Adjust for 2x2 grid
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  actionText: {
    color: '#1E90FF',
    marginTop: 5,
  },
  shortcutsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 10,
  },
  shortcutsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  shortcutCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  toDoList: {
    marginTop: 8,
  },
  toDoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  toDoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  toDoText: {
    color: '#333',
    marginBottom: 10,
  },
  toDoButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  toDoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 20,
  },
});

export default Dashboard;
