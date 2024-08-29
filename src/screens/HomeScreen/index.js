import React from 'react';
import { VStack, Button, Input, Text } from 'native-base';

export default function HomeScreen() {
  return (
    <VStack space={4} mt={10} justifyContent={'center'} alignItems={'center'} padding={5}>
      <Text fontSize="lg" bold>
        Prova por Indução
      </Text>
      <Input placeholder="Teste Teste Teste" />
      <Button onPress={() => alert('Teste iniciado')} width={'100%'}>
        Iniciar Teste
      </Button>
    </VStack>
  );
}
