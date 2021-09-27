import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {getPosterMovies} from '../api/api';
import MyCastButton from '../components/CastButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorites, removeFavorites} from '../redux/actions/favoritesAction';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieScreen = ({route}) => {
  const navigation = useNavigation();
  const idMovie = route.params.details.id;

  const dispatch = useDispatch();

  const {favorites} = useSelector(state => state.favoriteData);

  const addFavoritesId = favorite => {
    dispatch(addFavorites(favorite));
  };
  const deleteFavoritesId = favorite => {
    dispatch(removeFavorites(favorite));
  };

  const HandleAddFavorite = favorite => {
    addFavoritesId(favorite);
  };
  const HandleRemoveFavorite = favorite => {
    deleteFavoritesId(favorite);
  };

  const MyFavAdded = (
    <Icon name="heart" size={20} color="red" style={styles.icon} />
  );

  const notMyFav = (
    <Icon name="heart-o" size={20} color="red" style={styles.icon} />
  );

  const handlePress = item => {
    if (favorites.includes(idMovie)) {
      HandleRemoveFavorite(item);
    } else {
      HandleAddFavorite(item);
    }
  };

  return (
    <SafeAreaView style={styles.containerDetails}>
      <View style={styles.buttonCastFav}>
        <MyCastButton
          text="goBack"
          favorites
          onPress={() => {
            navigation.navigate('FulllFlix', {
              screen: 'HomeScreen',
              params: {
                favList: favorites,
                movieId: idMovie,
              },
            });
          }}
        />
      </View>
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
      <View style={styles.containerButtonFav}>
        <View style={styles.buttonCastFav}>
          <MyCastButton
            icon={favorites.includes(idMovie) ? MyFavAdded : notMyFav}
            idMovie
            onPress={() => {
              handlePress(idMovie);
            }}
          />
        </View>
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
            idMovie
            onPress={() => {
              navigation.navigate('Cast List', {
                screen: 'CastScreen',
                params: {
                  idMovie,
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
  containerButtonFav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonCast: {
    top: 10,
    alignitems: 'center',
  },
  buttonCastFav: {
    alignitems: 'center',
  },
};

export default MovieScreen;
