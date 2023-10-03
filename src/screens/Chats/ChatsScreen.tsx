import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { whatsappContacts } from '../../constants';
import { ChatListItem } from '../../components/ChatListItem';
import { StackProps } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import useRoomsService from '../../redux/services/rooms/room_services';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/auth/auth';
import { RootState } from '../../redux/store/store';
import useMessagesService from '../../redux/services/messages/messages_services';
import { clearState } from '../../redux/slices/messages/messages';

export const ChatsScreen = ({ route, navigation }: StackProps) => {
  const state = useSelector((state: RootState) => state.user);
  const { getAllRoomsService } = useRoomsService();
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View className="bg-white pt-2 px-5">
          <View className="flex-row justify-between">
            <Text className="text-blue-500" style={{ fontSize: 18 }} onPress={() => dispatch(logout())}>Logout</Text>
            <View className="flex-row gap-x-4">
              <View>
                <TouchableOpacity onPress={() => dispatch(clearState())}>
                  <Ionicons name={'camera-outline'} size={28} color={'rgb(59,130,246)'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text className="mb-6 text-4xl font-bold mt-7">Chats</Text>
        </View>
      )
    });
  }, []);

  useEffect(() => {
    getAllRoomsService().then(res => {
      setRooms(res.getAllRooms);
      setIsLoading(false);
    });
  }, []);

  return (
    <View className="flex-1 px-5 bg-white">
      {!isLoading
        ? <FlatList
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          data={rooms}
          renderItem={({ item, index }) => <ChatListItem chat={item} />}
        />
        : null
      }
    </View>
  );
};
