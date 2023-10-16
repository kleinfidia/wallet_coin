import { View, Text, Image,  TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cardcredit} from '../assets';


const Onboardscreen = () => {
  return (
    <View className=" justify-start w-full h-full flex mt-5">
      <View className="flex-row items-center justify-center p-6 mt-4">
      <MaterialCommunityIcons name="hand-coin" size={30} color="green" />
        <Text className="font-semibold text-base">Coinz</Text>
      </View>
        <View className="   h-[60%]">
        <Image source={cardcredit} className=" w-full h-full ml-5"  />
        </View>  
        <View className=" items-center flex space-y-4">
          <Text className="  font-extrabold text-2xl " >Manage all your POS transactions</Text>
          <View className=" bg-green-700 border rounded-md border-transparent">
            
            <TouchableOpacity >
              <Text className="font-bold text-2xl p-2 text-white">Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}


export default Onboardscreen