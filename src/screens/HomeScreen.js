import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { homeStyles } from './styles/homeStyles';

// Importa a imagem pelo caminho completo da imagem:
import backgroundImage from '../../assets/images/rick & mory.jpg';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={backgroundImage} 
      style={homeStyles.backgroundImage}
      resizeMode="cover"
    >
      <View style={homeStyles.overlay}>
        <View style={homeStyles.card}>
          <Text style={homeStyles.badge}>PORTAL INTERDIMENSIONAL</Text>
          <Text style={homeStyles.title}>MULTIVERSO RICK & MORTY</Text>
          <Text style={homeStyles.description}>
            Explore a lista de personagens da série Rick and Morty e descubra detalhes sobre cada um deles.
          </Text>

          <TouchableOpacity 
            style={homeStyles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('List')}
          >
            <Text style={homeStyles.buttonText}>VER SOBRE OS PERSONAGENS DA SERIE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}