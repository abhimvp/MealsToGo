import { View, Text, StyleSheet } from 'react-native';

export default function NewHomeTab() {
  return (
    <View style={styles.container}>
      <Text>Test Tab - Search icon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
