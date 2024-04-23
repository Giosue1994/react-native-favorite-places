import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllPlaces from "./screens/AllPlaces";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AllPlaces />
    </>
  );
}

const styles = StyleSheet.create({});
