import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap : Intan Fairuz Nur Asiyah </Text>
      <Text>Tempat, Tanggal Lahir : Cirebon, 24 April 2006</Text>
      <Text>Cita-cita : Menjadi seorang Cybersecurity Expert</Text>
      <Text>Rencana hidup : Tinggal di luar negeri dan bekerja di bidang cybersecurity</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
