import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const BlockhouseButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(177, 232, 249)',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'CraftworkGrotesk-Regular',
  },
});

export default BlockhouseButton;
