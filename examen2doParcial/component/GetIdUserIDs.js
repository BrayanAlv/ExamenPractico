import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const NFLDataViewer = () => {
  const [dataNFL, setDataNFL] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  async function obtenerDatos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      //const tareasPendientes = data.filter(item => item.completed === false); incompled
      setDataNFL(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const renderItems = () => {
    return dataNFL.map((item, index) => (
      <View key={index} style={styles.cards}>
        <Text>Id: {item.id}</Text> 
        <Text>ID User: {item.userId}</Text>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {renderItems()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%', 
  },
  cards: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0', 
    borderRadius: 5, 
  },
});

export default NFLDataViewer;
