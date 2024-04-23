import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable style={styles.button} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: place.ImageUri }} />
      <View>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
