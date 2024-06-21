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
import { useNavigation } from "@react-navigation/native";

const Lyrics = () => {
  const allHymns = useSelector((state) => state.AllHymnsSlice[0]);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={tw`mx-3 flex-1`}>
      <View
        style={tw`bg-transparent py-2 flex-row items-center justify-between`}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="back" size={24} color="gray" />
        </TouchableOpacity>
        <View style={tw`flex-row items-center bg-transparent`}>
          <Text style={tw`text-xl text-gray-400 font-bold mr-2`}>
            {allHymns.number}.
          </Text>
          <Text style={tw`text-xl  font-bold`}>{allHymns.title}</Text>
        </View>
        <Text style={tw`text-xl font-bold text-gray-400`}>F</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={tw`h-full px-3  rounded-lg`}>
          {allHymns.leys.map((item, index) => (
            <View key={index}>
              <View style={tw`flex-row h-auto my-5`}>
                <Text style={tw`mr-2 text-base text-gray-500`}>
                  {item.versNum}
                </Text>
                <View>
                  {item.words.map((item, index) => (
                    <Text key={index} style={tw`my-1 text-base `}>
                      {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lyrics;
