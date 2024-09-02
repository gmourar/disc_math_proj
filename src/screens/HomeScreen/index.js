import React from 'react';
import { VStack, Button, Input, Text } from 'native-base';

export default function HomeScreen() {

  const test = () => {
    alert("Hello World") 
  }
  return (
    <VStack space={4} mt={10} justifyContent={'center'} alignItems={'center'} padding={5}>
      <Text fontSize="lg" bold>
        Prova por Indução
      </Text>
      <Input placeholder="Teste Teste Teste" />
      <Button onPress={test} width={'100%'}>
        Iniciar Teste
      </Button>
    </VStack>
  );
}
