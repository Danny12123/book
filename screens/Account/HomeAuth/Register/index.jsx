import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import tw from "twrnc";
import TenantForms from "../../../../component/Forms/TenantForms";
import LandLordForms from "../../../../component/Forms/LandLordForms";
import AgentForms from "../../../../component/Forms/AgentForms";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const Register = () => {
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("Tenant");
  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate("Root");
  };
  return (
    <KeyboardAvoidingView
      style={tw`flex-1  px-5 ${Platform.OS === "ios" ? "pt-[60px]" : "pt-10"}`}
      //   keyboardVerticalOffset={height + 40}
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        //   contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={tw`w-full`}
      >
        <Text style={tw`text-4xl mb-1 font-bold font-serif text-[#1F4626]`}>
          Create Account
        </Text>
        <Text style={tw`text-base mb-2  font-serif text-[#1F4626]`}>
          Chose account type to continue.
        </Text>
        <View
          style={tw`w-full flex flex-row  items-center gap-2 bg-[#eee] rounded-lg px-3 py-2`}
        >
          <TouchableOpacity
            onPress={() => setAccountType("Tenant")}
            style={tw`h-[40px] w-auto flex items-center justify-center ${
              accountType === "Tenant"
                ? "bg-[#70AE76] text-[#fff]"
                : "bg-[#fff] text-[#1F4626]"
            } rounded-lg px-3`}
          >
            <Text
              style={tw`text-base ${
                accountType === "Tenant" ? "text-[#fff]" : "text-[#1F4626]"
              } `}
            >
              Tenant
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAccountType("LandLord")}
            style={tw`h-[40px] w-auto flex items-center justify-center ${
              accountType === "LandLord"
                ? "bg-[#70AE76] text-[#fff]"
                : "bg-[#fff] text-[#1F4626]"
            } rounded-lg px-3`}
          >
            <Text
              style={tw`text-base ${
                accountType === "LandLord" ? "text-[#fff]" : "text-[#1F4626]"
              } `}
            >
              LandLord
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAccountType("Agent/Agency")}
            style={tw`h-[40px] w-auto flex items-center justify-center ${
              accountType === "Agent/Agency"
                ? "bg-[#70AE76] text-[#fff]"
                : "bg-[#fff] text-[#1F4626]"
            } rounded-lg px-3`}
          >
            <Text
              style={tw`text-base ${
                accountType === "Agent/Agency"
                  ? "text-[#fff]"
                  : "text-[#1F4626]"
              } `}
            >
              Agent/Agency
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`w-full`}>
          {accountType === "Tenant" ? (
            <TenantForms />
          ) : accountType === "LandLord" ? (
            <LandLordForms />
          ) : (
            <AgentForms />
          )}
        </View>
        <TouchableOpacity
          onPress={handleRegister}
          style={tw`w-full h-[50px] mt-6 bg-[#2E6D37] hover:bg-[#25572E] rounded-lg flex justify-center items-center `}
        >
          <Text style={tw`text-base text-[#fff]`}>Register</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row gap-1 mt-7`}>
          <Text style={tw`text-base`}>Already have account!</Text>
          <Text style={tw`text-base text-[#1F4626] underline`}>Login</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
    height,
  },
});
