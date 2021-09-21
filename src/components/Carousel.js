import React from 'react';
import {Text, SafeAreaView, Image, View, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {getPosterMovies} from '../api/api';
import {useNavigation} from '@react-navigation/native';

const MyCarousel = props => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        <View style={styles.containerCarousel}>
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
              resizeMode="contain"
              source={{uri: getPosterMovies(item.backdrop_path)}}
            />
          </TouchableOpacity>
          <Text style={styles.titleMovie}>{item.title}</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <Carousel
      testID="CarouselTest"
      data={props.data}
      renderItem={renderItem}
      sliderHeight={props.sliderHeight}
      sliderWidth={props.sliderWidth}
      itemHeight={props.itemHeight}
      itemWidth={props.itemWidth}
      vertical={false}
    />
  );
};

const styles = {
  containerCarousel: {
    width: '100%',
    alignSelf: 'center',
  },
  titleMovie: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 40,
  },
  posterMovie: {
    height: 300,
    width: '100%',
    borderRadius: 30,
  },
};

export default MyCarousel;
