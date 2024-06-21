import React from "react";
import { Text, View } from "../../component/Themed";
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import BackImage from "../../assets/images/iphone15.png";
import { useSelector } from "react-redux";
import SongHolder from "../../component/SongHolder";

const Spotlight = [
  {
    title: "Additional Hymns",
    number: 23,
    uri: require("../../assets/images/pic2.jpeg"),
  },
  {
    title: "Christmas Carols",
    number: 30,
    uri: require("../../assets/images/pic2.jpeg"),
  },
  {
    title: "Contemporary",
    number: 10,
    uri: require("../../assets/images/pic2.jpeg"),
  },
  {
    title: "For Children: Birth of Christ",
    number: 7,
    uri: require("../../assets/images/pic3.jpeg"),
  },
  {
    title: "God: In Creation",
    number: 10,
    uri: require("../../assets/images/pic3.jpeg"),
  },
  {
    title: "God: In Providence",
    number: 15,
    uri: require("../../assets/images/pic5.jpeg"),
  },
  {
    title: "Marriage",
    number: 8,
    uri: require("../../assets/images/pic5.jpeg"),
  },
  {
    title: "New Year",
    number: 2,
    uri: require("../../assets/images/pic7.jpeg"),
  },
];
const SpotlightSong = () => {
  const allHymns = useSelector((state) => state.AllHymnsSlice);
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={tw`mx-3 flex-1`}>
      <View
        style={tw`bg-transparent mb-3 flex-row items-center  justify-between`}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="back" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={tw`text-lg`}>God's: love songs</Text>
        <Text style={tw`text-sm bg-green-500 p-1  text-[#fff]`}>10 hymns</Text>
      </View>
      <View style={tw`w-full h-[200px] rounded shadow-sm`}>
        <Image source={BackImage} style={tw`w-full h-full rounded`} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {allHymns?.map((item, index) => (
          <SongHolder item={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpotlightSong;
