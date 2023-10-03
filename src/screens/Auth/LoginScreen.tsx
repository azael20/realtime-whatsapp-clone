import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useAuthServices from '../../redux/services/auth/auth_service';
import { login, logout } from '../../redux/slices/auth/auth';
import { AuthState } from '../../redux/types/Auth';
import { StackProps } from '../../types';
import { RootState } from '../../redux/store/store';
import { setError } from '../../redux/slices/activity/activity';

export const LoginScreen = ({ navigation }: StackProps) => {
  const state = useSelector((state: RootState) => state.user);
  const [name, setName] = useState('');
  const { loginService } = useAuthServices();
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => submit(name)} className='mr-4' activeOpacity={0.8}>
          <Text style={{ color: 'rgb(59,130,246)' }}>Done</Text>
        </TouchableOpacity>
      )
    })
  }, [name]);

  const submit = (username: string) => {
    if (username.length < 1) {
      console.log('entra al dispatch');
      dispatch(setError({
        title: 'Error',
        message: 'Name must be at least 1 character',
      }))
      return;
    }
    const input: AuthState = {
      username,
    };
    loginService(input);
  }

  return (
    <View className='flex-1 bg-white items-center'>
      <Text className='text-center px-4 py-4'>Please write your name</Text>
      <View
        style={{
          borderBottomColor: '#3C3C43',
          opacity: 0.29,
          borderBottomWidth: StyleSheet.hairlineWidth,
          alignSelf: 'stretch',
        }}
      />
      <View className='w-full p-5'>
        <TextInput
          onChangeText={(value) => setName(value)}
          placeholder={'Your name'}
          className='p-3 border-gray-200 rounded-md border'
        />
      </View>
    </View>
  );
};
