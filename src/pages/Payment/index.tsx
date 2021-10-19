import React from 'react';
import { StyleSheet, Dimensions, TextInput } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { Background, Card } from '../../components';

import { Container } from './styles';

const { width } = Dimensions.get('window');

export const Payment = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });

  return (
    <Background>
      <Container>
        <Card x={scrollX} />

        <Animated.ScrollView
          horizontal
          bounces={false}
          snapToInterval={width}
          decelerationRate="fast"
          scrollEventThrottle={16}
          contentContainerStyle={{ width: width * 2 }}
          onScroll={scrollHandler}
          showsHorizontalScrollIndicator={false}
          style={StyleSheet.absoluteFillObject}
        />
      </Container>

      <TextInput
        placeholder="Número do cartão"
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Nome no cartão"
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
      />
      <TextInput
        placeholder="Validade"
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
      />
    </Background>
  );
};
