import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {movieCast, getPosterMovies} from '../api/api';

class CastScreen extends Component {
  constructor({route, props}) {
    super(props);
    this.state = {
      data: [],
      movieId: 0,
      index: 0,
    };
    this.state.movieId = route.params.idMovies;
  }

  componentDidMount() {
    const movieId = this.state.movieId;
    movieCast(movieId).then(data =>
      this.setState({
        data: data.cast,
        name: data.cast[0].name,
      }),
    );
  }

  onIndexChanged(name) {
    this.setState({
      name,
    });
  }

  renderItemComponent = ({item, index}) => (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          this.onIndexChanged(item.name);
        }}>
        <View
          style={[
            styles.renderContainer,
            index % 1 == 0 ? {marginTop: 20} : {marginBottom: 20},
          ]}>
          <Image
            style={styles.castProfileImg}
            source={{uri: getPosterMovies(item.profile_path)}}
          />
          <Text style={styles.castText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View>
        <View style={styles.viewCastHeader}>
          <Text style={styles.castHeaderText}>{this.state.name}</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItemComponent}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  renderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  castProfileImg: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  viewCastHeader: {
    heigth: 20,
    backgroundColor: 'black',
  },
  castHeaderText: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
  },
  castText: {
    alignSelf: 'center',
    color: 'black',
    right: 20,
  },
};

export default CastScreen;
