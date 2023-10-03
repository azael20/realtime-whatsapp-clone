import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StackProps } from '../types';
import { useNavigation } from '@react-navigation/native';
import { clearState } from '../redux/slices/messages/messages';
import { useDispatch } from 'react-redux';

export const ChatListItem = ({ chat }: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(clearState());
        // @ts-ignore
        navigation.navigate('ChatScreen', chat);
      }}
    >
      <View className="flex-row bg-white mb-0.5 p-0.5 items-center">
        {/* Image */}
        <View>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} className="w-14 h-14 justify-center rounded-full mr-2" />
        </View>
        <View className="flex-1 py-2 border-b border-gray-300">
          <View className="flex-row justify-between">
            <Text numberOfLines={1} className="flex-1 font-bold text-lg">{chat.title}</Text>
            <Text>07:30</Text>
          </View>
          <View className="flex-1 flex-row justify-between">
            <Image source={require('../assets/icons/seen.png')} className="w-5 h-5 mr-1" resizeMode={'center'} />
            <Text className={'flex-1 text-gray-600'} numberOfLines={2}>texto</Text>
            {
              chat.newChannel ?
                <View className="bg-blue-400 justify-center items-center rounded-full px-2">
                  <Text className="font-semibold text-white text-xs">New</Text>
                </View> : null
            }
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
