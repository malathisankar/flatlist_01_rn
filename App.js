import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [months, setMonths] = useState([
    { name: 'January', id: '1' },
    { name: 'February', id: '2' },
    { name: 'March', id: '3' },
    { name: 'April', id: '4' },
    { name: 'May', id: '5' },
    { name: 'June', id: '6' },
    { name: 'July', id: '7' },
    { name: 'August', id: '8' },
    { name: 'September', id: '9' },
    { name: 'October', id: '10' },
    { name: 'November', id: '11' },
    { name: 'December', id: '12' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={months}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
