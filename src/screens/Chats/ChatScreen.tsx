import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Button,
  Dimensions,
  Image, ImageBackground, Keyboard,
  KeyboardAvoidingView, Platform, ScrollView, ScrollViewProps, Text, TouchableWithoutFeedback,
  View
} from 'react-native';
import { Images } from '../../constants/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MessageBar } from '../../components/MessageBar';
import { ContactHeader } from '../../components/ContactHeader';
import { MessageListItem } from '../../components/MessageListItem';
import useRoomsService from '../../redux/services/rooms/room_services';
import { CustomActivityIndicator } from '../../subcomponents/CustomActivityIndicator';
import useMessagesService from '../../redux/services/messages/messages_services';
import { addMessage, clearState, messagesSlice } from '../../redux/slices/messages/messages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const ChatScreen = (props: any) => {
  const scrollviewRef = useRef<any>(null);
  const navigation = useNavigation();
  const state = useSelector((state: RootState) => state.messages);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { getMessagesByRoomService } = useRoomsService();
  const { messagesSubscription } = useMessagesService();

  const [isLoading, setIsLoading] = useState(true);
  const data = props.route.params;

  useEffect(() => {
    getMessagesByRoomService(data._id).then(res => {
      if (res) {
        const reversedMessages = [...res.getMessagesByRoom].reverse();
        dispatch(addMessage(reversedMessages));
        setIsLoading(false);
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      const sub = messagesSubscription(data._id);

      return () => {
        sub.unsubscribe();
      };
    }, [])
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'height' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 13 : undefined}
    >
      <ImageBackground
        style={{ marginBottom: insets.bottom }}
        source={Images.background} className="flex-1 absolute top-0 bottom-0 left-0 right-0"
        resizeMode={'cover'}>
        <ContactHeader data={data} backButton={() => navigation.goBack()} />
        <ScrollView
          style={{ flex: 1 }}
          ref={scrollviewRef}
          onContentSizeChange={() => scrollviewRef.current?.scrollToEnd({ animated: false })}
          contentContainerStyle={{
            paddingHorizontal: '3%',
            paddingTop: '3%'
          }}
        >
          {
            (!isLoading)
              ? state.messages.map((item: any, index: number) => {
                return (
                  <MessageListItem
                    key={item._id
                      ? `itemId-${item._id}`
                      : `itemId-${data._id}-${index}`}
                    data={item}
                  />
                );
              }) : null
          }

        </ScrollView>
        <MessageBar item={data} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
