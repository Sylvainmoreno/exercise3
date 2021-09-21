import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {getPosterMovies} from '../api/api';
import {useNavigation} from '@react-navigation/native';

const SectionListMovie = ({sections}) => {
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <SafeAreaView
        style={[
          styles.container,
          index % 1 == 0 ? {marginRight: 10} : {marginLeft: 10},
        ]}>
        <View style={styles.containerImage}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Movie Details', {
                screen: 'MovieScreen',
                params: {
                  details: item,
                },
              });
            }}>
            <Image
              style={styles.posterMovie}
              source={{uri: getPosterMovies(item.poster_path)}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.TextDataMovieTitle}>{item.original_title}</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = {
  container: {},
  containerImage: {
    top: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignSelf: 'center',
  },
  containerText: {
    top: 60,
    height: 100,
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  header: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
  },
  TextDataMovieTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
  },
  TextDataMovie: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  posterMovie: {
    height: 200,
    width: 150,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
};

export default SectionListMovie;
