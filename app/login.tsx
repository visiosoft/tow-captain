import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Dimensions, PixelRatio } from 'react-native';
import PhoneInput from "react-native-international-phone-number";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const login = () => {
  const [country, setCountry] = useState(null)
  const [number, setNumber] = useState("")
  
  return (
    <View className='h-full p-5 justify-evenly'>
      <Text style={{fontSize:hp("3%")}} className='font-extrabold'><Text className='text-gray-500 text-3xl'>|</Text>  User Login</Text>
      <Text style={{ fontSize: hp("2%"),marginTop:hp("2%") }} className='font-semibold'>Login with your registered mobile number</Text>
      <PhoneInput
        value={number}
        onChangePhoneNumber={(number)=>{setNumber(number)}}
        selectedCountry={country}
        onChangeSelectedCountry={(country)=>{setCountry(country)}}
      />
      <Text style={{ fontSize: hp("2%") }} className='font-semibold'>Verify using</Text>
      <View className='h-[9%] bg-gray-300 p-2 flex-row'>
        <TouchableOpacity className='flex-row items-center justify-center w-1/2 h-full bg-white'>
          <FontAwesome name="whatsapp" size={30} color="green" />
          <Text style={{ fontSize: hp("2.2%") }} className='font-extrabold ml-2 text-[#25D366]'>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-center items-center w-1/2 h-full'>
          <Text style={{ fontSize: hp("2.2%") }}>SMS</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: hp("2%") }} className='font-semibold'>Verification Link will be sent on WhatsApp number.</Text>
      <Text style={{ fontSize: hp("2%") }} className='font-semibold'>Kindly check and confirm mobile number before proceeding for verification.</Text>
      <LinearGradient
        colors={['#8000FF', '#007BFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={{paddingVertical:hp("2%")}}>
          <Text style={{fontSize:hp("2.5%")}} className='font-extrabold text-center text-white'>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View className='flex-row justify-between items-center'>
        <View className='w-2/5 h-[1px] bg-gray-400' />
        <Text style={{fontSize:hp("2%")}} className='font-semibold'>Or</Text>
        <View className='w-2/5 h-[1px] bg-gray-400' />
      </View>
      <View className='flex-row justify-center'>
        <View className='w-1/2 flex-row justify-around'>
          <View style={{padding:hp("2%")}} className='bg-white shadow-md rounded-full'>
            <FontAwesome name="google" size={30} color="black" />
          </View>
          <View style={{padding:hp("2%")}} className='bg-white shadow-md rounded-full'>
            <FontAwesome name="apple" size={30} color="black" />
          </View>
        </View>
      </View>
      <Text style={{fontSize:hp("2%")}} className='font-semibold text-center'>Don't have an account ?</Text>
      <TouchableOpacity style={{paddingVertical:hp("2%")}} className='border-2 border-sky-500 font-bold'>
        <Text style={{fontSize:hp("2.5%")}} className='font-extrabold text-sky-500 text-center'>Sign Up</Text>
      </TouchableOpacity>
      <View className='flex-row justify-center items-center'>
        <Text style={{paddingBottom:hp("1%"),fontSize:hp("2%"),marginRight:wp("1%"),borderBottomWidth:2}} className='text-center font-semibold'>Continue as Guest</Text>
        <FontAwesome name="chevron-right" size={15} color="black" />
      </View>
    </View>
  )
}

export default login