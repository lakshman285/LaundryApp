import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PasswordIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
      }}>
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Text style={{fontSize: 20, color: '#662d91', fontWeight: 'bold'}}>
            Sign In
          </Text>
          <Text style={{fontSize: 18, marginTop: 8, fontWeight: '600'}}>
            Sign In to your account
          </Text>
        </View>
        <View style={{marginTop: 50}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EmailIcon name="email-outline" size={24} color={'#000000'} />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={email => setEmail(email)}
              placeholderTextColor="black"
              style={{
                fontSize: email ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 20,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PasswordIcon name="key-outline" size={24} color={'#000000'} />
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <Pressable
            style={{
              width: 200,
              backgroundColor: '#318CE7',
              padding: 15,
              borderRadius: 7,
              marginTop: 50,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}>
            <Text style={{fontSize: 18, textAlign: 'center', color: 'white'}}>
              Login
            </Text>
          </Pressable>

          <Pressable
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                color: 'gray',
                fontWeight: '500',
              }}>
              Don't have account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
