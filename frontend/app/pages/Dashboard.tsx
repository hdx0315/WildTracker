import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import img from '../../assets/images/dash1back.jpg';
import img1 from '../../assets/images/edu1.jpg';
import img2 from '../../assets/images/edu2.jpg';
import img3 from '../../assets/images/edu3.jpg';
import img4 from '../../assets/images/edu4.jpg';

const Button = ({ icon, label, onPress }) => (
  <TouchableOpacity className="items-center w-[30%]" onPress={onPress} accessibilityLabel={label}>
    <View className="bg-white p-4 rounded-2xl shadow-lg shadow-emerald-800 mb-2">
      <MaterialCommunityIcons name={icon} size={32} color="#065f46" />
    </View>
    <Text className="text-emerald-800 text-center font-medium">{label}</Text>
  </TouchableOpacity>
);

export default function Dashboard() {
  const router = useRouter();
  const username = "John";

  return (
    <SafeAreaView className="h-full bg-emerald-50">
        <ImageBackground source={img} resizeMode='cover'>
          <View className='py-10 px-6 bg-black/10'>
            <Text className="text-3xl font-bold text-white">
              Welcome {username}!
            </Text>
          </View>
        </ImageBackground>
      <ScrollView>

        <View className="p-6">
          <View className="flex-row justify-between mb-8">
            <Button icon="alert-circle-outline" label="Report Incidents" onPress={() => router.push('/pages/ReportIncident')} />
            <Button icon="book-open-variant" label="Resources" onPress={() => router.push('/pages/Resources')} />
            <Button icon="map-marker-radius" label="View Map" onPress={() => router.push('/pages/IncidentMap')} />
          </View>

          <View className="bg-white rounded-xl p-6 shadow-lg">
            <Text className="text-xl font-bold text-emerald-800 mb-4">Recent Alerts</Text>
            <View className="space-y-4">
              <View className="flex-row items-center">
                <MaterialCommunityIcons name="clock-outline" size={24} color="#065f46" />
                <Text className="ml-2 text-gray-600">No recent incidents</Text>
              </View>
              <TouchableOpacity onPress={() => {/* Function to refresh alerts */}} className="mt-4">
                <Text className="text-emerald-800 text-center">Check for updates</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Google Map Embed */}
          <View className="mt-6">
            <Text className="text-xl font-bold text-emerald-800 mb-4">Location</Text>
            <MapView
              className='rounded-3xl'
              style={{ width: '100%', height: 300 }}
              initialRegion={{
                latitude: 6.718696,
                longitude: 80.771409,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
            <Marker coordinate={{ latitude: 6.718696, longitude: 80.771409 }} title={"Belihuloya"} />
            </MapView>
          </View>

          <View className='mt-6'>
            <Text className="text-xl font-bold text-emerald-800 mb-4">Educational Resources</Text>
            <View className='flex flex-row justify-between'>

              <ImageBackground
                source={img1}
                className='w-32 h-56 rounded-2xl'
                imageStyle={{ borderRadius: 12 }}
              >
                <TouchableOpacity className='flex justify-end h-full p-2 pb-6'>
                  <Text className="text-base text-white font-bold bg-black/50 rounded-xl p-1">Leopard Conservation</Text>
                </TouchableOpacity>
              </ImageBackground>

              <ImageBackground
                source={img2}
                className='w-32 h-56 rounded-2xl'
                imageStyle={{ borderRadius: 12 }}
              >
                <TouchableOpacity className='flex justify-end items-center h-full p-2 pb-6'>
                  <Text className="text-base text-white font-bold bg-black/50 rounded-xl p-1">Leopard Conservation</Text>
                </TouchableOpacity>
              </ImageBackground>

              <ImageBackground
                source={img3}
                className='w-32 h-56 rounded-2xl'
                imageStyle={{ borderRadius: 12 }}
              >
                <TouchableOpacity className='flex justify-end h-full p-2 pb-6'  onPress={() => router.push('/pages/IncidentMap')} >
                  <Text className="text-base text-white font-bold bg-black/50 rounded-xl p-1">View All Resources</Text>
                </TouchableOpacity>
              </ImageBackground>
              
            </View>
          </View>

          <View className='mt-6'>
            <Text className="text-xl font-bold text-emerald-800 mb-4">Latest Updates</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}