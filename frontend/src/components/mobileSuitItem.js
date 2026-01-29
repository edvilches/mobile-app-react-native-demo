import { View, Text } from "react-native";

export default function MobileSuitItem({ suit }) {
  return (
    <View>
      <Text>{suit.name}</Text>
      <Text>{suit.serial_number}</Text>
    </View>
  );
}
