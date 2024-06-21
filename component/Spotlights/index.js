import React from "react";
import { Text, View } from "../../component/Themed";
import { TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const SpotlightHolder = ({ item }) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate("SpotlightSong")}>
      <View
        style={tw`my-2 bg-[#eee] w-full h-20 rounded-lg shadow p-2 flex-row items-center `}
      >
        <View style={tw`w-20 h-full rounded`}>
          <Image source={item.uri} style={tw`w-full h-full rounded`} />
        </View>
        <View style={tw`mx-3 bg-transparent w-full flex-row `}>
          <View style={tw`bg-transparent`}>
            <Text style={tw`text-base font-bold `}>{item.title}</Text>
            <Text style={tw`text-gray-500 text-sm`}>{item.number} Hymns</Text>
          </View>
          {/* <View style={tw`bg-transparent `}>
            <Text>l</Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SpotlightHolder;
