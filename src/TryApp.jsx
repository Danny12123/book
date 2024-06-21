import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { useSelector } from "react-redux";

const TryApp = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <View style={tw`flex-1 bg-gray-400 justify-center items-center`}>
      <Text>Open up App.js to start working on your app! {count}</Text>
      <Text>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default TryApp;
