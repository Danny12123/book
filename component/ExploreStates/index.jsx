import React from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  useColorScheme,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import tw from "twrnc";

const { width } = Dimensions.get("window");
const STORY_WIDTH = width * 0.16;
const MARGIN_HORIZONTAL = 6;

const ExploreStates = ({ item }) => {
  return (
    <View
      //   style={styles.CTypesContainer}
      style={tw` w-[${STORY_WIDTH}] mx-[${MARGIN_HORIZONTAL}] h-auto  rounded-lg`}
    >
      <TouchableOpacity
        style={tw`w-full flex flex-row items-center gap-4 rounded-lg p-2 border border-[#2E6D37]`}
      >
        <View style={tw`w-[60px] h-[60px] rounded-lg shadow`}>
          <Image
            source={item.uri}
            style={tw`w-full h-full rounded-lg shadow`}
          />
        </View>
        <View>
          <Text style={tw`text-xl font-bold`}>{item.title}</Text>
          <Text style={tw`text-sm font-medium`}>{item.number} properties</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreStates;

const styles = StyleSheet.create({
  CTypesContainer: {
    width: STORY_WIDTH,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: MARGIN_HORIZONTAL,
    boxShadow: "0px 10px 10px 20px rgba(0,0,0,0.35)",
  },
});
