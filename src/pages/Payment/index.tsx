import React, { useRef } from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Keyboard,
  ScrollView,
} from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { postPurchase } from '../../services/api';
import { Background, Card } from '../../components';

import {
  Header,
  IconButton,
  HeaderText,
  Container,
  Input,
  Row,
  ErrorText,
  Button,
  ButtonText,
} from './styles';
import { maskCardValidate } from '../../utils/masks';

const { width } = Dimensions.get('window');

const schema = yup.object().shape({
  cardNumber: yup.string().length(16).required(),
  name: yup.string().required(),
  valid: yup.string().length(5).required(),
  ccv: yup.string().length(3).required(),
});

export interface FormInputs {
  cardNumber: string;
  name: string;
  valid: string;
  ccv: string;
}

interface ISubmit {
  cardNumber: string;
  name: string;
  valid: string;
  ccv: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>;

export const Payment = ({ navigation }: Props) => {
  const { user } = useAuth();
  const { totalCart, products, cleanCart } = useCart();
  const scrollX = useSharedValue(0);

  const cardNameInputRef = useRef<TextInput>(null);
  const validInputRef = useRef<TextInput>(null);
  const ccvInputRef = useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ISubmit) => {
    try {
      const idSize = user.id.length;
      const id_user = Number(user.id.slice(idSize - 4, idSize));

      await postPurchase({
        id_user,
        value: totalCart(),
        card_number: Number(data.cardNumber),
        card_holder_name: data.name,
        exp_date: data.valid,
        cvv: Number(data.ccv),
        itens: products.map((product) => product.title),
      });

      cleanCart();
    } catch (error) {
      console.log(error);
    }
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });

  const handleInputFocus = () => {
    if (scrollX.value !== 0) {
      scrollX.value = withTiming(0);
    }
  };

  const handleCCVInputFocus = () => {
    scrollX.value = withTiming(width);
  };

  const handleInputBlur = () => {
    scrollX.value = withTiming(0);
  };

  return (
    <>
      <Background>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={-300}
          style={{ flex: 1 }}
        >
          <ScrollView style={{ flex: 1 }}>
            <Header>
              <IconButton onPress={() => navigation.goBack()}>
                <Feather name="chevron-left" size={RFValue(24)} color="#999" />
              </IconButton>
              <HeaderText>Pagamento</HeaderText>
            </Header>

            <Container>
              <Card x={scrollX} control={control} />

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

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onFocus={handleInputFocus}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Número do cartão"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  onSubmitEditing={() => {
                    cardNameInputRef.current?.focus();
                  }}
                />
              )}
              name="cardNumber"
              defaultValue=""
            />
            {errors.cardNumber && (
              <ErrorText>Número incorreto/inválido</ErrorText>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onFocus={handleInputFocus}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Nome do titular"
                  placeholderTextColor="#999"
                  onSubmitEditing={() => {
                    validInputRef.current?.focus();
                  }}
                />
              )}
              name="name"
              defaultValue=""
            />
            {errors.name && <ErrorText>Campo obrigatório</ErrorText>}

            <Row>
              <View style={{ width: '48%' }}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      small
                      onBlur={onBlur}
                      onFocus={handleInputFocus}
                      onChangeText={(value) => {
                        clearErrors(['valid']);
                        onChange(maskCardValidate(value));
                      }}
                      value={value}
                      placeholder="Validade"
                      placeholderTextColor="#999"
                      keyboardType="numeric"
                      onSubmitEditing={() => {
                        const month = Number(value.slice(0, 2));
                        if (month < 1 || month > 12) {
                          setError('valid', {
                            type: 'validate',
                            message: 'Mês inválido',
                          });
                          return;
                        }

                        const year = Number(value.slice(3, 5));
                        if (
                          Number(
                            new Date().getFullYear().toString().slice(2, 4)
                          ) > year
                        ) {
                          setError('valid', {
                            type: 'validate',
                            message: 'Ano inválido',
                          });
                          return;
                        }

                        ccvInputRef.current?.focus();
                      }}
                    />
                  )}
                  name="valid"
                  defaultValue=""
                />
                {errors.valid && (
                  <ErrorText>Validade incorreta/inválida</ErrorText>
                )}
              </View>

              <View style={{ width: '48%' }}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      small
                      onBlur={handleInputBlur}
                      onFocus={handleCCVInputFocus}
                      onChangeText={(value) => {
                        onChange(value);
                        if (value.length === 3) {
                          Keyboard.dismiss();
                        }
                      }}
                      value={value}
                      placeholder="CCV"
                      placeholderTextColor="#999"
                      keyboardType="number-pad"
                    />
                  )}
                  name="ccv"
                  defaultValue=""
                />
                {errors.ccv && <ErrorText>CCV incorreto/inválido</ErrorText>}
              </View>
            </Row>
          </ScrollView>
        </KeyboardAvoidingView>
        <Button onPress={handleSubmit(onSubmit)}>
          <ButtonText>Confirmar pagamento</ButtonText>
        </Button>
      </Background>
    </>
  );
};
