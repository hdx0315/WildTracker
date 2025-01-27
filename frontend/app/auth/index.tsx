
// app/auth/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import img from '../../assets/images/authBack.jpg'

const AuthIndex = () => {
  const router = useRouter();

  const navigateToSignIn = () => {
    router.push('/auth/SignIn'); // Navigate to SignIn page
  };

  const navigateToSignUp = () => {
    router.push('/auth/SignUp'); // Navigate to SignUp page
  };

  return (
      <SafeAreaView className="h-full bg-emerald-50">
        <ImageBackground source={img} resizeMode='cover' className='h-full'>

      <View className="flex flex-col items-center pt-20 px-4">
        <Text className="text-center text-3xl font-bold text-white ">
          Welcome !
        </Text>
        <View className="mt-10">
          <TouchableOpacity
            onPress={navigateToSignIn}
            className="bg-emerald-800 rounded-xl p-4 mb-4"
          >
            <Text className="text-center text-white text-xl font-semibold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToSignUp}
            className="bg-gray-200 rounded-xl p-4"
          >
            <Text className="text-center text-emerald-800 text-xl font-semibold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AuthIndex;
