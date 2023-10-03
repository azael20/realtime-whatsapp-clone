import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export const CustomActivityIndicator = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size={26} color={'green'} />
    </View>
  );
};
