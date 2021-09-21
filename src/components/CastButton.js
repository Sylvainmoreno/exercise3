import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const MyCastButton = ({text, onPress}) => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.castText}>{text}</Text>
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
};

export default MyCastButton;
