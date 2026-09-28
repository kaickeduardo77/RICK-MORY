import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { detailStyles } from './styles/detailStyles';

export default function DetailScreen({ route }) {
  const { character } = route.params;

  return (
    <ScrollView style={detailStyles.container}>
      <Image source={{ uri: character.image }} style={detailStyles.image} />
      
      <View style={detailStyles.header}>
        <Text style={detailStyles.title}>{character.name}</Text>
        <View style={[detailStyles.badge, { backgroundColor: character.status === 'Alive' ? '#97CE4C' : '#E74C3C' }]}>
          <Text style={detailStyles.badgeText}>{character.status}</Text>
        </View>
      </View>

      <View style={detailStyles.card}>
        <Text style={detailStyles.label}>Espécie:</Text>
        <Text style={detailStyles.value}>{character.species}</Text>

        <Text style={detailStyles.label}>Gênero:</Text>
        <Text style={detailStyles.value}>{character.gender}</Text>

        <Text style={detailStyles.label}>Origem:</Text>
        <Text style={detailStyles.value}>{character.origin?.name}</Text>

        <Text style={detailStyles.label}>Localização Atual:</Text>
        <Text style={detailStyles.value}>{character.location?.name}</Text>

        <Text style={detailStyles.label}>Aparições em Episódios:</Text>
        <Text style={detailStyles.value}>{character.episode?.length} episódio(s)</Text>
      </View>
    </ScrollView>
  );
}