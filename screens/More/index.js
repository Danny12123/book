import React from "react";
import { Text, View } from "../../component/Themed";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tw from "twrnc";

import { useNavigation } from "@react-navigation/native";

const More = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={tw`mx-3 flex-1`}>
      <View style={tw`bg-transparent mb-3 flex-row items-center`}>
        <View
          style={tw`w-[55px] h-[55px] rounded-full bg-gray-600 mr-3`}
        ></View>
        <Text style={tw`text-lg text-gray-500`}>
          Welcome to Ordvel song book
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={tw`w-full h-auto p-3 mb-3 rounded-lg`}>
          <Text style={tw`text-lg font-medium mb-2`}>Marks</Text>
          <TouchableOpacity style={tw`mb-2`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-base`}>Favorites</Text>
            </View>
          </TouchableOpacity>
          <View style={tw`flex-row items-center mb-2`}>
            <View>
              <Text style={tw`text-base`}>Morning Song Alarm</Text>
              <Text style={tw`text-green-500`}>05:20 AM</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center mb-2`}>
            <View>
              <Text style={tw`text-base`}>Night Song Alarm</Text>
              <Text style={tw`text-green-500`}>06:00 PM</Text>
            </View>
          </View>
        </View>
        <View style={tw`w-full h-auto p-3 rounded-lg`}>
          <Text style={tw`text-lg font-medium mb-2`}>More Features</Text>
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <View>
              <Text style={tw`text-base`}>Dark Mode</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <View>
              <Text style={tw`text-base`}>Remove Ads</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <View>
              <Text style={tw`text-base`}>Share</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <View>
              <Text style={tw`text-base`}>Privacy Policy</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <View>
              <Text style={tw`text-base`}>About</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;
