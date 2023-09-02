import {
  View,
  Text,
  Platform,
  PermissionsAndroid,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome6';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import Carousal from '../components/Carousal';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../ProductReducer';

const HomeScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  console.log('Cart', cart);
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Geolocation Permission',
              message: 'Can we access your location?',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (error) {
          console.warn(error);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //will give you current position
      position => {
        setLocationStatus('You are Here..');
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      services.map(service => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  console.log(product);
  // products data
  const services = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4643/4643574.png',
      name: 'shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '11',
      image: 'https://cdn-icons-png.flaticon.com/128/892/892458.png',
      name: 'T-shirt',
      quantity: 0,
      price: 10,
    },
    {
      id: '12',
      image: 'https://cdn-icons-png.flaticon.com/128/9609/9609161.png',
      name: 'dresses',
      quantity: 0,
      price: 10,
    },
    {
      id: '13',
      image: 'https://cdn-icons-png.flaticon.com/128/599/599388.png',
      name: 'jeans',
      quantity: 0,
      price: 10,
    },
    {
      id: '14',
      image: 'https://cdn-icons-png.flaticon.com/128/9431/9431166.png',
      name: 'Sweater',
      quantity: 0,
      price: 10,
    },
    {
      id: '15',
      image: 'https://cdn-icons-png.flaticon.com/128/3345/3345397.png',
      name: 'shorts',
      quantity: 0,
      price: 10,
    },
    {
      id: '16',
      image: 'https://cdn-icons-png.flaticon.com/128/293/293241.png',
      name: 'Sleeveless',
      quantity: 0,
      price: 10,
    },
  ];

  return (
    <ScrollView style={{backgroundColor: '#F0F0F0'}}>
      {/** Location and Profile*/}
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Icon
          name="location-dot"
          size={24}
          color="#fd5c63"
          style={{marginRight: 4}}
        />
        <View>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Home</Text>
          <Text>
            Latitude: {currentLatitude} Longitude: {currentLongitude}
          </Text>
        </View>
        <Pressable style={{marginLeft: 'auto', marginRight: 7}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 20}}
            source={{
              uri: 'https://lh3.googleusercontent.com/ogw/AGvuzYabuHqGwicESKZ9mDd_8RtaoMQn_IAOtY3qSzWfXg=s32-c-mo',
            }}
          />
        </Pressable>
      </View>

      {/** Search Bar */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 4,
          paddingBottom: 4,
          margin: 10,
          alignItems: 'center',
          borderWidth: 0.8,
          borderRadius: 7,
          borderColor: '#C0C0C0',
        }}>
        <TextInput placeholder="Search For Items or more" />
        <SearchIcon name="search" size={24} color={'#fd5c63'} />
      </View>

      {/** Image Carousal */}
      <Carousal />

      {/** Services */}
      <Services />

      {/** Render All the products */}
      {product.map((service, index) => {
        return <DressItem item={service} key={index} />;
      })}
    </ScrollView>
  );
};

export default HomeScreen;
