import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

interface ContactHeaderProps {
  data: any;
  backButton: () => void;
}

export const ContactHeader = ({ data, backButton }: ContactHeaderProps) => {
  return (
    <View
      style={{ backgroundColor: '#F6F6F6', zIndex: 1, width: '100%' }}
      className="flex-row h-11 justify-between px-3 items-center"
    >
      <TouchableOpacity activeOpacity={0.8} onPress={backButton}>
        <MaterialIcons name={'keyboard-arrow-left'} color={'#007AFF'} size={32} />
      </TouchableOpacity>
      <View className="flex-1 flex-row p-1 items-center ml-5">
        <View>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} className="h-full w-9 rounded-full mr-2"
                 resizeMode="contain" />
        </View>
        <View>
          <Text style={{ fontSize: 16 }} className="font-semibold">{data.title}</Text>
          <Text className="text-gray-400 text-xs">tap here for contact info</Text>
        </View>
      </View>
      <View className="flex-row gap-x-5 px-3">
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons name={'videocam-outline'} color={'#007AFF'} size={28} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons name={'call-outline'} color={'#007AFF'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
