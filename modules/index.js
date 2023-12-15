import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const eventsData = [{
  id: '1',
  title: 'Event 1',
  date: '2022-01-01',
  location: 'Location 1'
}, {
  id: '2',
  title: 'Event 2',
  date: '2022-02-02',
  location: 'Location 2'
} // Add more events here
];

const EventScreen = () => {
  const [events, setEvents] = useState(eventsData);

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Event Listings</Text>
      <FlatList data={events} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  details: {
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 14,
    color: '#888'
  },
  location: {
    fontSize: 14,
    color: '#888'
  }
});
export default EventScreen;