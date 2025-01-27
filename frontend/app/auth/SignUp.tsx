import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up:', { name, email, password });
    // Implement your sign-up logic here
  };

  return (
    <SafeAreaView className="h-full bg-emerald-50">
      <View className="flex-1 justify-center px-6">
        <Text className="text-center text-3xl font-bold text-emerald-800 mb-8">
          Sign Up
        </Text>

        <View className="space-y-4">
          <TextInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            className="border border-gray-300 rounded-md p-4"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="border border-gray-300 rounded-md p-4"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            className="border border-gray-300 rounded-md p-4"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleSignUp}
          className="bg-emerald-800 mt-6 rounded-md p-4"
        >
          <Text className="text-center text-white text-lg font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/auth/SignIn')}
          className="mt-4"
        >
          <Text className="text-center text-emerald-800">
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
