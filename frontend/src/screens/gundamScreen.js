import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useGundamFilter } from "../hooks/useGundamFilter";
import MobileSuitItem from "../components/MobileSuitItem";

export default function GundamScreen() {
  const {
    factions,
    mobileSuits,
    factionId,
    setFactionId
  } = useGundamFilter();

  return (
    <View>
      <Text>Bando</Text>

      <Picker
        selectedValue={factionId}
        onValueChange={setFactionId}
      >
        <Picker.Item label="Seleccione bando" value={null} />
        {factions.map(f => (
          <Picker.Item key={f.id} label={f.name} value={f.id} />
        ))}
      </Picker>

      {mobileSuits.map(ms => (
        <MobileSuitItem key={ms.id} suit={ms} />
      ))}
    </View>
  );
}
