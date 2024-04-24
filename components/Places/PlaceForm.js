import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function enteredTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChange={enteredTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 24,
  },
  form: {
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
