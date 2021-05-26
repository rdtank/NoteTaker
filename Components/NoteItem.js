import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const handleLongPress = (props) => {
  // props.onDelete.bind(this, props.id)
  Alert.alert(
    'Edit or Delete',
    'Select any one option from below',
    [
      {
        text: 'Edit',
        onPress: () => console.log('Edit Clicked!'),
        style: 'default',
      },
      {
        text: 'Delete',
        onPress: () => props.onDelete.bind(this, props.id),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Clicked!!'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

const NoteItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onLongPress={() => handleLongPress(props)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default NoteItem;
