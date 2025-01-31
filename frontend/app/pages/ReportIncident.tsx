
import { useState, useEffect } from 'react';
import { View, TextInput, Button, Image,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
//import { storage, firestore } from '../../../backend/firebase/config';
import { createIncident, uploadFile } from '../../../backend/firebase/utils';
import type { Incident } from '../../../backend/firebase/types';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ReportIncident = () => {
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [incidentType, setIncidentType] = useState('sighting');
  
  const handleSubmitReport = async () => {
    try {
      const imageUrls = await Promise.all(
        images.map(async (image) => {
          const response = await fetch(image.uri);
          const blob = await response.blob();
          const ref = storage.ref().child(`incidents/${Date.now()}`);
          await ref.put(blob);
          return await ref.getDownloadURL();
        })
      );
      
      await firestore.collection('incidents').add({
        reporterId: auth.currentUser.uid,
        incidentType,
        description,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          geohash: geohashForLocation([location.coords.latitude, location.coords.longitude])
        },
        mediaUrls: imageUrls,
        status: 'pending',
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp()
      });
      
      // Reset form
      setImages([]);
      setDescription('');
      
    } catch (error) {
      console.error('Error submitting report:', error);
    }
  };
  
  return (
    <SafeAreaView>
      {/* Form implementation */}
      <Text className='text-white'>report</Text>
    </SafeAreaView>
  );
};

  export default ReportIncident