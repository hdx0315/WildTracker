// app/firebase/utils.ts
import { firestore, storage } from './config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Incident related functions
export const createIncident = async (incidentData) => {
  try {
    const docRef = await addDoc(collection(firestore, 'incidents'), {
      ...incidentData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating incident:', error);
    throw error;
  }
};

// File upload function
export const uploadFile = async (uri: string, path: string): Promise<string> => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, blob);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Query incidents
export const queryIncidents = async (filters = {}) => {
  try {
    const incidentsRef = collection(firestore, 'incidents');
    const q = query(incidentsRef, ...Object.entries(filters).map(([field, value]) => 
      where(field, '==', value)
    ));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error querying incidents:', error);
    throw error;
  }
};