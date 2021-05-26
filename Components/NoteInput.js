import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button, Modal} from 'react-native';

const NoteInput = (props) => {
  const [enteredNote, setEnteredNote] = useState('');

  const noteInputHandler = (enteredText) => {
    setEnteredNote(enteredText);
  };

  const addNoteHandler = () => {
    props.noteHandler(enteredNote);
    setEnteredNote('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Here..."
          style={styles.input}
          onChangeText={noteInputHandler}
          value={enteredNote}
        />
        <View style={styles.btnStyle}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addNoteHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  button:{
    width:'50%',
  }
});

export default NoteInput;
