import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyCastButton = ({text, icon, onPress}) => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.castText}>{text}</Text>
        <Icon style={styles.icon}>{icon}</Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerButton: {
    backgroundColor: 'white',
    width: 80,
    height: 30,
    borderRadius: 20,
  },
  castText: {
    top: 5,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: 5,
    alignSelf: 'center',
  },
};

export default MyCastButton;
