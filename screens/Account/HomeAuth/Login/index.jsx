import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  useColorScheme,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";

const { width, height } = Dimensions.get("window");
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const height = useHeaderHeight();
  const handleRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <KeyboardAvoidingView
      style={tw`flex-1  justify-center items-center px-5`}
      keyboardVerticalOffset={height + 40}
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={tw`w-full mt-10`}>
        <Text style={tw`text-4xl mb-1 font-bold font-serif text-[#1F4626]`}>
          Login
        </Text>
        <Text style={tw`text-base mb-4  font-serif text-[#1F4626]`}>
          Login into your account.
        </Text>
        <View style={tw`w-full  my-3  gap-2`}>
          <Text style={tw`text-lg font-semibold`}>Email/Phone number</Text>
          <TextInput
            type="email"
            required
            style={tw`w-full font-medium rounded-lg border border-[#70AE76] px-3 py-3`}
            placeholder="Enter your email or phone number"
            onChangeText={(newText) => setEmail(newText)}
          />
        </View>
        <View style={tw`w-full  my-3  gap-2`}>
          <Text style={tw`text-lg font-semibold`}>Password</Text>
          <View
            style={tw`w-full flex flex-row items-center border border-[#70AE76] rounded-lg`}
          >
            <TextInput
              type="password"
              required
              style={tw`flex-1 font-medium rounded-lg border-0 px-3 py-3`}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={(newText) => setPassword(newText)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={tw`px-3`}
            >
              <Icon
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#70AE76"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`w-full text-[#1F4626] underline text-sm`}>
          Forgot password
        </Text>
        <TouchableOpacity
          style={tw`w-full h-[50px] mt-6 bg-[#2E6D37] hover:bg-[#25572E] rounded-lg flex justify-center items-center `}
        >
          <Text style={tw`text-base text-[#fff]`}>Login</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row gap-1 mt-7`}>
          <Text style={tw`text-base`}>Don't have account!</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={tw`text-base text-[#1F4626] underline`}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
