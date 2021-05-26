import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';

import NoteItem from './Components/NoteItem';
import NoteInput from './Components/NoteInput';

export default function App() {
  const [arrNote, setArrNote] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addNoteHandler = (noteTitle) => {
    setArrNote((currentNotes) => [
      ...currentNotes,
      {id: Math.random().toString(), value: noteTitle},
    ]);
    setModalOpen(false);
  };

  const cancelHandler = () => {
    setModalOpen(false);
  }

  const deleteNoteHandler = (noteId) => {
    setArrNote((currentNotes) => {
      return currentNotes.filter((note) => note.id !== noteId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Note" onPress={() => setModalOpen(true)} />
      <NoteInput visible={modalOpen} noteHandler={addNoteHandler} onCancel={cancelHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={arrNote}
        renderItem={(itemData) => (
          <NoteItem
            id={itemData.item.id}
            onDelete={deleteNoteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
