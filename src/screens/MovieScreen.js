import React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {getPosterMovies} from '../api/api';
import MyCastButton from '../components/CastButton';
import {useNavigation} from '@react-navigation/native';

const MovieScreen = ({route}) => {
  const navigation = useNavigation();
  const idMovies = route.params.details.id;
  return (
    <SafeAreaView style={styles.containerDetails}>
      <View>
        <Text style={styles.detailsTitle}>{route.params.details.title}</Text>
      </View>
      <View>
        <Image
          style={styles.posterMovie}
          resizeMode="contain"
          source={{uri: getPosterMovies(route.params.details.poster_path)}}
        />
      </View>
      <View style={styles.containerCast}>
        <View>
          <Text style={styles.textDetails}>Original Title: </Text>
          <Text style={styles.textSubDetails}>
            {route.params.details.original_title}
          </Text>
        </View>
        <View style={styles.buttonCast}>
          <MyCastButton
            text="Cast List"
            idMovies
            onPress={() => {
              navigation.navigate('Cast List', {
                screen: 'CastScreen',
                params: {
                  idMovies,
                },
              });
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.textDetails}>Release date: </Text>
        <Text style={styles.textSubDetails}>
          {route.params.details.release_date}
        </Text>
      </View>
      <View>
        <Text style={styles.textDetails}>Overview: </Text>
        <Text style={styles.textSubDetails}>
          {route.params.details.overview}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  containerDetails: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  detailsTitle: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDetails: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  textSubDetails: {
    top: 10,
    color: 'white',
  },
  posterMovie: {
    height: 300,
    width: 200,
    alignSelf: 'center',
    borderRadius: 30,
  },
  containerCast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCast: {
    top: 10,
    alignitems: 'center',
  },
};

export default MovieScreen;
