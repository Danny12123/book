import React, { useRef } from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import tw from "twrnc";
import ImageSliderCard from "../Card/Slider";
import Icon from "react-native-vector-icons/Ionicons";

const ExploreItems = () => {
  return (
    <View style={tw`w-full h-auto my-2`}>
      <View style={tw`flex flex-row justify-between items-center w-full mb-2`}>
        <View style={tw`flex flex-row items-center gap-3`}>
          <View style={tw`w-[40px] h-[40px] rounded-full shadow `}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/pic2.jpeg")}
                style={tw`w-full h-full rounded-full`}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={tw`text-xl font-bold`}>Amanda</Text>
            <Text style={tw`text-xs`}>2h ago</Text>
          </View>
        </View>
        <Text style={tw`text-base font-bold text-[#777]`}>$2,300/m</Text>
      </View>
      <View style={tw`border-b border-black border-opacity-20 pb-3`}>
        <ImageSliderCard />
        <View
          style={tw`w-full h-auto  flex flex-row items-center justify-between`}
        >
          <View style={tw`flex flex-row items-center gap-2`}>
            <Icon name={"bed"} size={24} color="#70AE76" />
            <Text style={tw`text-sm`}>2 bedrooms</Text>
          </View>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Icon name={"archive"} size={24} color="#70AE76" />
            <Text style={tw`text-sm`}>1 baths</Text>
          </View>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Icon name={"resize"} size={24} color="#70AE76" />
            <Text style={tw`text-sm`}>320 sqft</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreItems;
