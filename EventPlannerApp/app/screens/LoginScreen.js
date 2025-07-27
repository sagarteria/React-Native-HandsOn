import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill all fields.');
            return;
        }
        try {
            const res = await axios.get(`https://68869553071f195ca97dff62.mockapi.io/users?email=${email}&password=${password}`);
            if (res.data.length > 0) {
                Alert.alert('Success', 'Login successful!');
                router.replace('/screens/EventListScreen');
            } else {
                Alert.alert('Error', 'Invalid credentials');
            }
        } catch (err) {
            Alert.alert('Error', 'Login failed!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
            <View style={{ height: 10 }} />
            <Button title="Register" onPress={() => router.push('/screens/RegisterScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    heading: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
    input: { borderWidth: 1, padding: 10, marginBottom: 12, borderRadius: 8 },
});
