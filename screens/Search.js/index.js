import React from "react";
import { Text, View } from "../../component/Themed";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tw from "twrnc";
import SongHolder from "../../component/SongHolder";
import { useSelector } from "react-redux";

const SearchHymn = () => {
  const allHymns = useSelector((state) => state.AllHymnsSlice);

  return (
    <SafeAreaView style={tw`mx-3 flex-1`}>
      <View style={tw`bg-transparent py-2`}>
        <Text style={tw`text-xl font-bold mb-3`}>Songs</Text>
        <View style={tw`flex-row items-center my-1 py-2 px-1 rounded-lg`}>
          <AntDesign name="search1" size={24} color="gray" />
          <TextInput
            placeholder="Search for a song..."
            style={tw`ml-2 text-base w-full`}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {allHymns?.map((item, index) => (
          <SongHolder item={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchHymn;
