import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/Dashboard';
import MyAssets from './components/Myassets';
import Assets from './components/Assets';
import Account from './components/Account';
import { MaterialIcons } from '@expo/vector-icons';
import NewAsset from './components/NewAsset';
import AssetDetail from './components/AssetDetail'; 
import SelectAssetType from './components/SelectAssetType';  
import Tabs from './components/Tabs';
import Inventory from './components/Inventory';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Account" component={Account} options={{ title: 'My Account' }} />

    </Stack.Navigator>
  );
}

function AssetsStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="AssetList" component={Assets} options={{ headerShown: false }} />
      <Stack.Screen name="NewAsset" component={NewAsset} options={{ headerShown: false }} />
      <Stack.Screen name="AssetDetail" component={AssetDetail} options={{ headerShown: false }} />
      <Stack.Screen name="SelectAssetType" component={SelectAssetType} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="Inventory" component={Inventory} options={{ headerShown: false }} />
      <Stack.Screen name="myAssets" component={MyAssets} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Assets" component={Assets} options={{ headerShown: false }} /> */}

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Overview') {
              iconName = 'home';
            } else if (route.name === 'Assets') {
              iconName = 'inventory';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Overview" component={DashboardStack} />
        <Tab.Screen name="Assets" component={AssetsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
