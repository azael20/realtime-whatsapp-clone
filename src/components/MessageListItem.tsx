import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { generateColor } from '../subcomponents/generateColor';

export const MessageListItem = ({ data }: any) => {
  const userColor = generateColor(data.user._id);
  const state = useSelector((state: RootState) => state.user);
  return (
    <View style={[styles.container, { alignItems: data.user._id === state.id ? 'flex-end' : 'flex-start' }]}>
      <View>
        <View style={[styles.messageContainer, state.id === data.user._id ?
          {
            backgroundColor: '#DCF8C6',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20
          } :
          {
            backgroundColor: '#FFF',
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20
          }]}
        >
          <Text
            style={{ color: userColor }}
            className={`text-xs`}
          >{data.user.username}</Text>
          <Text>{data.text}</Text>
        </View>
        <Text
          style={[
            styles.timeText,
            {
              alignSelf: state.id === data.user._id ?
                'flex-end' : 'flex-start'
            }
          ]}>10:30 AM
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: 'flex-end'
  },
  messageContainer: {
    padding: 17,
    maxWidth: '70%'
  },
  timeText: {
    marginTop: 2,
    marginLeft: 8,
    fontSize: 10,
    color: 'gray'
  }
});
