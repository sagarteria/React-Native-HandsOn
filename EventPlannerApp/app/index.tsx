import { View, Button, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Event Planner App</Text>
      <Button title="Login" onPress={() => router.push('/screens/LoginScreen')} />
      <View style={{ height: 10 }} />
      <Button title="Register" onPress={() => router.push('/screens/RegisterScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  heading: { fontSize: 24, marginBottom: 32, textAlign: 'center' },
});
