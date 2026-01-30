import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// URL del backend
const API_URL = 'http://localhost:3000';

export default function App() {
  // ----- ESTADO -----
  const [factions, setFactions] = useState([]);
  const [selectedFaction, setSelectedFaction] = useState(null);
  const [mobileSuits, setMobileSuits] = useState([]);
  const [loading, setLoading] = useState(false);

  // ----- EFECTO 1: cargar facciones al iniciar la app -----
  useEffect(() => {
    fetch(`${API_URL}/factions`)
      .then((response) => response.json())
      .then((data) => {
        setFactions(data);
      })
      .catch((error) => {
        console.error('Error cargando facciones:', error);
      });
  }, []);

  // ----- EFECTO 2: cargar mobile suits cuando cambia la facción -----
  useEffect(() => {
    if (!selectedFaction) return;

    setLoading(true);

    fetch(`${API_URL}/mobile_suits?faction_id=${selectedFaction}`)
      .then((response) => response.json())
      .then((data) => {
        setMobileSuits(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error cargando mobile suits:', error);
        setLoading(false);
      });
  }, [selectedFaction]);

  // ----- UI -----
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gundam Mobile Suits</Text>

      {/* Selector de facción */}
      <Picker
        selectedValue={selectedFaction}
        onValueChange={(value) => setSelectedFaction(value)}
        style={styles.picker}
      >
        <Picker.Item label="Selecciona una facción" value={null} />
        {factions.map((faction) => (
          <Picker.Item
            key={faction.id}
            label={faction.name}
            value={faction.id}
          />
        ))}
      </Picker>

      {/* Indicador de carga */}
      {loading && <ActivityIndicator size="large" />}

      {/* Lista de Mobile Suits */}
      <FlatList
        data={mobileSuits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} ({item.serial_number})
          </Text>
        )}
      />
    </View>
  );
}

// ----- ESTILOS (opcional pero recomendado) -----
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  picker: {
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});
