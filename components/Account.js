import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          rounded
          size="xlarge"
          title="SV"
          source={{ uri: 'https://your-avatar-url.com/avatar.png' }} // Placeholder if no image is provided
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>Shivam Verma</Text>
        <Text style={styles.role}>Administrator</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.email}>sverma@engsurveys.com.au</Text>
        <Text style={styles.phone}>+61426493212</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profile: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    backgroundColor: '#1E90FF',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#888',
  },
  contactInfo: {
    alignItems: 'center',
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: '#555',
  },
});

export default Account;
