import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function AddEventScreen() {
 const [title, setTitle] = useState('');
 const [date, setDate] = useState('');
 const [location, setLocation] = useState('');
 const router = useRouter();

 const handleAddEvent = async () => {
   if (!title || !date || !location) {
     Alert.alert('Error', 'Please fill all fields.');
     return;
   }
   try {
     await axios.post('https://68869553071f195ca97dff62.mockapi.io/events', { title, date, location });
     Alert.alert('Success', 'Event added!');
     router.replace('/screens/EventListScreen');
   } catch (err) {
     Alert.alert('Error', 'Failed to add event!');
   }
 };

 return (
   <View style={styles.container}>
     <Text style={styles.heading}>Add Event</Text>
     <TextInput placeholder="Title" style={styles.input} value={title} onChangeText={setTitle} />
     <TextInput placeholder="Date (YYYY-MM-DD)" style={styles.input} value={date} onChangeText={setDate} />
     <TextInput placeholder="Location" style={styles.input} value={location} onChangeText={setLocation} />
     <Button title="Add Event" onPress={handleAddEvent} />
     <View style={{ height: 10 }} />
     <Button title="Back to Events" onPress={() => router.replace('/screens/EventListScreen')} />
   </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', padding: 16 },
 heading: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
 input: { borderWidth: 1, padding: 10, marginBottom: 12, borderRadius: 8 },
});

