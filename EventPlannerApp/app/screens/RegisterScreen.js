import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill all fields.');
            return;
        }
        try {
            await axios.post('https://68869553071f195ca97dff62.mockapi.io/users', { email, password });
            Alert.alert('Success', 'Registration successful!');
            router.replace('/screens/LoginScreen');
        } catch (err) {
            Alert.alert('Error', 'Registration failed!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
            <Button title="Register" onPress={handleRegister} />
            <View style={{ height: 10 }} />
            <Button title="Back to Login" onPress={() => router.replace('/screens/LoginScreen')} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    heading: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
    input: { borderWidth: 1, padding: 10, marginBottom: 12, borderRadius: 8 },
});
