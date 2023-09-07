import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PasswordIcon from 'react-native-vector-icons/Ionicons';
import PhoneIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
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
            Register
          </Text>
          <Text style={{fontSize: 18, marginTop: 8, fontWeight: '600'}}>
            Create a new Account
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PhoneIcon name="phone" size={24} color={'#000000'} />
            <TextInput
              placeholder="Phone No"
              value={phone}
              onChangeText={text => setPhone(text)}
              placeholderTextColor="black"
              style={{
                fontSize: phone ? 18 : 18,
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
              Register
            </Text>
          </Pressable>

          <Pressable
            style={{marginTop: 20}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                color: 'gray',
                fontWeight: '500',
              }}>
              Already have a account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
