import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EventDetailScreen() {
 const { eventId } = useLocalSearchParams();
 const [event, setEvent] = useState(null);
 const router = useRouter();

 useEffect(() => {
   axios.get(`https://68869553071f195ca97dff62.mockapi.io/events/${eventId}`)
     .then(res => setEvent(res.data))
     .catch(() => setEvent(null));
 }, [eventId]);

 if (!event) {
   return <ActivityIndicator style={{ flex: 1 }} />;
 }

 return (
   <View style={styles.container}>
     <Text style={styles.heading}>{event.title}</Text>
     <Text>Date: {event.date}</Text>
     <Text>Location: {event.location}</Text>
     {/* Add photo, description, etc. here */}
     <Button title="Back to Events" onPress={() => router.replace('/screens/EventListScreen')} />
   </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, padding: 24, justifyContent: 'center' },
 heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 18, textAlign: 'center' },
});
