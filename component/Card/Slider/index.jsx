import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import tw from "twrnc";

const { width } = Dimensions.get("window");
const STORY_WIDTH = width * 0.22;
const MARGIN_HORIZONTAL = 6;

const SliderImage = [
  {
    title: "San Francisco",
    number: 230,
    uri: require("../../../assets/house_image/pic3.jpeg"),
  },
  {
    title: "Accra",
    number: 310,
    uri: require("../../../assets/house_image/pic4.jpeg"),
  },
  {
    title: "San Francisco",
    number: 200,
    uri: require("../../../assets/house_image/pic5.jpeg"),
  },
  {
    title: "San Francisco",
    number: 70,
    uri: require("../../../assets/house_image/pic6.jpeg"),
  },
  {
    title: "San Francisco",
    number: 100,
    uri: require("../../../assets/house_image/pic7.jpeg"),
  },
  {
    title: "San Francisco",
    number: 150,
    uri: require("../../../assets/house_image/pic5.jpeg"),
  },
  {
    title: "San Francisco",
    number: 8,
    uri: require("../../../assets/house_image/pic3.jpeg"),
  },
  {
    title: "San Francisco",
    number: 940,
    uri: require("../../../assets/house_image/pic5.jpeg"),
  },
];

const ImageSliderCard = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={tw`h-auto flex flex-row justify-center shadow-xl items-center mt-2`}
    >
      <ScrollView
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {SliderImage.map((item, index) => (
          <View
            key={index}
            style={tw` w-[${STORY_WIDTH}] mx-[${MARGIN_HORIZONTAL}] pb-4 h-auto overflow-hidden rounded-lg`}
          >
            <View style={tw`w-full h-[255px] rounded-xl `}>
              <Image source={item.uri} style={tw`w-full h-full rounded-xl`} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageSliderCard;

const styles = StyleSheet.create({
  CTypesContainer: {
    width: STORY_WIDTH,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: MARGIN_HORIZONTAL,
    boxShadow: "0px 10px 10px 20px rgba(0,0,0,0.35)",
  },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
