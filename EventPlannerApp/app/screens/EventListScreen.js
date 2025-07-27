import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function EventListScreen() {
 const [events, setEvents] = useState([]);
 const router = useRouter();

 useEffect(() => {
   axios.get('https://68869553071f195ca97dff62.mockapi.io/events')
     .then(res => setEvents(res.data))
     .catch(() => setEvents([]));
 }, []);

 return (
   <View style={styles.container}>
     <Text style={styles.heading}>All Events</Text>
     <FlatList
       data={events}
       keyExtractor={item => item.id}
       renderItem={({ item }) => (
         <TouchableOpacity
           onPress={() => router.push({ pathname: '/screens/EventDetailScreen', params: { eventId: item.id } })}
           style={styles.eventItem}
         >
           <Text style={styles.eventTitle}>{item.title}</Text>
           <Text>{item.date} - {item.location}</Text>
         </TouchableOpacity>
       )}
     />
     <Button title="Add Event" onPress={() => router.push('/screens/AddEventScreen')} />
   </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, padding: 16 },
 heading: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
 eventItem: { padding: 14, borderBottomWidth: 1, borderColor: '#eee' },
 eventTitle: { fontSize: 18, fontWeight: 'bold' },
});
