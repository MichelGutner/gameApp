/* eslint-disable prettier/prettier */


import React, { } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { ButtonIcon } from '../../components/buttonicon/index';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

export default function SignIn() {
const navigation = useNavigation();


function handleSignIn(){
  navigation.navigate('Home');
}


  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          Seus Jogos{'\n'}
          Facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie Grupos Para seus Jogos{'\n'}
          favoritos com seus Amigos.
        </Text>

        <ButtonIcon 
        title = {"Entrar com Discord"}
        activeOpacity = {0.8}
        onPress = {handleSignIn}
        />
      </View>
    </View>
  );
}
