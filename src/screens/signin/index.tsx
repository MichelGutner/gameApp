/* eslint-disable prettier/prettier */


import React, { } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { ButtonIcon } from '../../components/buttonicon/index';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export default function SignIn({ navigation }) {

  return (

    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

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

        <ButtonIcon title = {"Entrar com Discord"} navigation = {navigation}/>
      </View>
    </View>
  );
}
