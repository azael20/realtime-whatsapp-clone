import React, { useRef, useState } from 'react';
import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useMessagesService from '../redux/services/messages/messages_services';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { CreateMessageResponse } from '../redux/types/Messages';

export const MessageBar = ({ item }: any) => {
  const state = useSelector((state: RootState) => state.user);
  const ref = useRef();
  const [message, setMessage] = useState('');
  const { createMessageService } = useMessagesService();

  const submit = () => {
    const input: CreateMessageResponse = {
      roomId: item._id,
      text: message,
      userId: state.id,
      topic: item._id,
    }
    createMessageService(input)
    Keyboard.dismiss();
    setMessage('');
  }

  return (
      <View
        style={{ backgroundColor: '#fff' }}
        className="flex-row h-11 justify-between px-3 py-1.5 items-center"
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons name={'add'} color={'#007AFF'} size={30} />
        </TouchableOpacity>
        <TextInput
          value={message}
          style={{ borderWidth: 1 }}
          className="h-full flex-1 rounded-full px-5 border-gray-300 mx-3 bg-white"
          onChangeText={(value) => setMessage(value)}
        />
        {!message.length ?
          <View className="flex-row gap-x-2">
            <TouchableOpacity activeOpacity={0.8}>
              <Ionicons name={'camera-outline'} color={'#007AFF'} size={28} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Ionicons name={'mic-outline'} color={'#007AFF'} size={28} />
            </TouchableOpacity>
          </View> : (
            <TouchableOpacity activeOpacity={0.8} onPress={() => submit()}>
              <View className="bg-blue-500 rounded-full p-1.5">
                <Ionicons name={'send'} color={'#fff'} size={16} />
              </View>
            </TouchableOpacity>
          )
        }
      </View>
  );
};
