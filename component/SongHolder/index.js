import React from "react";
import { Text, View } from "../../component/Themed";
import { TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import RightIcon from "../../assets/icons/right-arrow.png";

const SongHolder = ({ item }) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Lyrics")}>
      <View
        style={tw`my-2  bg-[#fff] w-full h-auto flex-row items-center rounded-lg shadow p-2`}
      >
        <View style={tw`bg-transparent w-20 h-[50px] rounded`}>
          <Image source={item.uri} style={tw`w-full h-full rounded`} />
        </View>
        <View style={tw`bg-transparent w-full ml-3`}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-lg text-gray-400 mr-2`}>{item.number}.</Text>
              <Text style={tw`text-base text-gray-700 font-medium`}>
                {item.title}
              </Text>
              <Text style={tw`text-lg text-gray-400  ml-3`}>{item.key}</Text>
            </View>
            <Image source={RightIcon} style={tw`w-3 h-3`} />
          </View>
          <Text style={tw`my-1 text-gray-500 text-sm`}>
            {item.leys[0].words[0]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongHolder;
