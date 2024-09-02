import React from 'react';
import { VStack, Button, Input, Text, NativeBaseProvider, View, Box, Pressable} from 'native-base';
import { TouchableOpacity } from 'react-native';


export default function HomeScreen() {

  const test = () => {
    alert("Hello World") 
    console.log('Y')
  }
  return (
    <NativeBaseProvider>
      <View h={'100%'} w={'100%'} bg={'#352F44'} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'} >
        <Pressable w={'40%'} h={'15%'} bg={'#5C5470'} borderRadius={10} shadow={10} justifyContent={'center'} alignItems={'center'}>
          <Text color={'#FAF0E6'} fontSize={16}>
            Hello World
          </Text>
        </Pressable>

        <Pressable w={'40%'} h={'15%'} bg={'#5C5470'} borderRadius={10} shadow={10} justifyContent={'center'} alignItems={'center'} onPress={test}>
          <Text color={'#FAF0E6'} fontSize={16}>
            Hello World
          </Text>
        </Pressable>
      </View>
    </NativeBaseProvider>
  );
}
