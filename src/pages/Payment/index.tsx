import React, { useRef, useState, useContext } from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput,
  Keyboard,
  ScrollView,
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
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
import { ThemeContext } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { goBack, navigate } from '../../routes/app.routes';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { postPurchase } from '../../services/api';
import { Background, Card } from '../../components';
import { maskCardValidate } from '../../utils/masks';

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

export const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useAuth();
  const { totalCart, products, cleanCart } = useCart();
  const theme = useContext(ThemeContext);
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
    setLoading(true);
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
      setLoading(false);
      navigate('Congrats', undefined);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setModalVisible(true);
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

  const handleCloseModal = () => {
    setModalVisible((state) => !state);
    navigate('Home', undefined);
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
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <Header>
              <IconButton onPress={() => goBack()}>
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
                  onChangeText={(value) => {
                    if (value.length <= 16) {
                      onChange(value);
                    }
                  }}
                  value={value}
                  maxLength={19}
                  placeholder="Número do cartão"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                  returnKeyType="next"
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
                  returnKeyType="next"
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
                      maxLength={5}
                      placeholder="Validade"
                      placeholderTextColor="#999"
                      keyboardType="numeric"
                      returnKeyType="next"
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
                      maxLength={3}
                      placeholder="CCV"
                      placeholderTextColor="#999"
                      returnKeyType="send"
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

      {loading && (
        <ActivityIndicator
          color={theme.colors.secondary}
          size="small"
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Ocorreu um erro.{'\n'}Tente novamente mais tade
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={handleCloseModal}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
