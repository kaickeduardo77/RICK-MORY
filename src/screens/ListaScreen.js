import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { listStyles } from './styles/listStyles';

export default function ListaScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // IDs dos personagens principais
  const mainCharacterIds = '1,2,3,4,5,47,244,242,118,265,331,343,180';

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/${mainCharacterIds}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View
        style={[
          listStyles.container,
          listStyles.centered,
        ]}
      >
        <ActivityIndicator
          size="large"
          color="#00B5CC"
        />
      </View>
    );
  }

  return (
    <View style={listStyles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={listStyles.card}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('Detalhes', {
                character: item,
              })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={listStyles.avatar}
            />

            <View style={listStyles.infoContainer}>

              <Text style={listStyles.name}>
                {item.name}
              </Text>

              <Text style={listStyles.detailText}>
                <Text style={listStyles.label}>
                  Status:{' '}
                </Text>
                {item.status}
              </Text>

              <Text style={listStyles.detailText}>
                <Text style={listStyles.label}>
                  Espécie:{' '}
                </Text>
                {item.species}
              </Text>

              <Text style={listStyles.detailText}>
                <Text style={listStyles.label}>
                  Gênero:{' '}
                </Text>
                {item.gender}
              </Text>

            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}