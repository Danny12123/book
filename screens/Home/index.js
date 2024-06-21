import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  useColorScheme,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import ExploreStates from "../../component/ExploreStates";
import ImageSliderCard from "../../component/Card/Slider";
import Icon from "react-native-vector-icons/Ionicons";
import ExploreItems from "../../component/ExploreItems";

const Spotlight = [
  {
    title: "San Francisco",
    number: 230,
    uri: require("../../assets/images/pic9.jpeg"),
  },
  {
    title: "Accra",
    number: 310,
    uri: require("../../assets/images/pic9.jpeg"),
  },
  {
    title: "San Francisco",
    number: 200,
    uri: require("../../assets/images/pic10.jpeg"),
  },
  {
    title: "San Francisco",
    number: 70,
    uri: require("../../assets/images/pic3.jpeg"),
  },
  {
    title: "San Francisco",
    number: 100,
    uri: require("../../assets/images/pic3.jpeg"),
  },
  {
    title: "San Francisco",
    number: 150,
    uri: require("../../assets/images/pic5.jpeg"),
  },
  {
    title: "San Francisco",
    number: 8,
    uri: require("../../assets/images/pic5.jpeg"),
  },
  {
    title: "San Francisco",
    number: 940,
    uri: require("../../assets/images/pic7.jpeg"),
  },
];
const Home = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const spotlightLight = Spotlight.slice(0, 5);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView style={tw` bg-[#fff] flex-1`}>
      <View style={tw`px-3 `}>
        <View style={tw`flex-row justify-between items-center w-full mb-2`}>
          <Text style={tw`text-2xl font-bold`}>Explore</Text>
          <View style={tw`w-[50px] h-[50px] rounded-full shadow `}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/pic2.jpeg")}
                style={tw`w-full h-full rounded-full`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={tw`h-auto flex flex-row justify-center shadow-xl items-center my-2`}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
            >
              {Spotlight.map((item, index) => (
                <ExploreStates key={index} item={item} />
              ))}
            </ScrollView>
          </View>
          <View style={tw`w-full h-auto mt-5`}>
            <ExploreItems />
            <ExploreItems />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
