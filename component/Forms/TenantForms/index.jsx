import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  useColorScheme,
  View,
  Text,
  Platform,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const TenantForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <View
        style={tw`w-full  my-3 flex flex-col justify-start items-start gap-2`}
      >
        <View style={tw` flex flex-row justify-between items-center gap-2`}>
          <View style={tw`w-[47%]`}>
            <Text style={tw`text-lg font-semibold`}>First name</Text>
            <TextInput
              type="text"
              style={tw`w-full font-medium rounded-lg border border-[#70AE76] px-3 py-3`}
              placeholder="Enter your first name"
              onChangeText={(newText) => setEmail(newText)}
            />
          </View>
          <View style={tw`w-[50%]`}>
            <Text style={tw`text-lg font-semibold`}>Last name</Text>
            <TextInput
              type="text"
              style={tw`w-full font-medium rounded-lg border border-[#70AE76] px-3 py-3`}
              placeholder="Enter your last name"
              onChangeText={(newText) => setEmail(newText)}
            />
          </View>
        </View>
      </View>
      <View
        style={tw`w-full  my-2 flex flex-col justify-start items-start gap-2`}
      >
        <Text style={tw`text-lg font-semibold`}>Email</Text>
        <TextInput
          type="email"
          style={tw`w-full font-medium rounded-lg border border-[#70AE76] px-3 py-3`}
          placeholder="Enter your email"
          onChangeText={(newText) => setEmail(newText)}
        />
      </View>
      <View
        style={tw`w-full  my-2 flex flex-col justify-start items-start gap-2`}
      >
        <Text style={tw`text-lg font-semibold`}>Phone number</Text>
        <TextInput
          type="tel"
          style={tw`w-full font-medium rounded-lg border border-[#70AE76] px-3 py-3`}
          placeholder="Enter your email"
          onChangeText={(newText) => setEmail(newText)}
        />
      </View>
      <View
        style={tw`w-full  my-2 flex flex-col justify-start items-start gap-2`}
      >
        <Text style={tw`text-lg font-semibold`}>National ID</Text>
        <TextInput
          type="text"
          style={tw`w-full font-medium rounded-lg border border-[#70AE76] px-3 py-3`}
          placeholder="Enter your national ID"
          onChangeText={(newText) => setEmail(newText)}
        />
      </View>
      <View
        style={tw`w-full  my-3 flex flex-col justify-start items-start gap-2`}
      >
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
    </View>
  );
};

export default TenantForms;
