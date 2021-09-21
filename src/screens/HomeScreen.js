import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import MyCarousel from '../components/Carousel';
import SectionListMovie from '../components/SectionList';
import {allPopularMovie} from '../api/api';
import {LOGO} from '../constants';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  const loadMoviesList = async () => {
    const loadedMovies = await allPopularMovie();
    setMovies(loadedMovies.results);
    return loadedMovies;
  };

  const DataSection = [
    {
      title: 'Popular Movies',
      data: movies.sort(() => Math.random() - Math.random()).slice(0, 5),
    },
  ];

  useEffect(() => {
    loadMoviesList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={LOGO.logoApp} />
      </View>
      <View style={styles.containerCarousel}>
        <MyCarousel
          data={movies.sort(() => Math.random() - Math.random()).slice(0, 5)}
          sliderHeight={300}
          sliderWidth={350}
          itemHeight={300}
          itemWidth={350}
          vertical={false}
        />
      </View>
      <SectionListMovie
        sections={DataSection}
        stickySectionHeadersEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerLogo: {
    alignItems: 'center',
    top: 15,
  },
  containerCarousel: {
    alignItems: 'center',
  },
};

export default HomeScreen;
