import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  useColorScheme,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import BgImage from "../../../assets/house_image/pic6.jpeg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const HomeAuth = () => {
  const navigation = useNavigation();
  const handleLogin = (path) => {
    navigation.navigate(path);
  };
  return (
    <View style={tw`flex-1 relative`}>
      <ImageBackground source={BgImage} style={tw`flex-1`}>
        <LinearGradient
          colors={[
            "rgba(2,0,36,0.15)",
            "rgba(77,181,198,0.15)",
            "rgba(0,212,255,0.15)",
          ]}
          style={styles.overlay}
        >
          <Text style={tw`text-4xl font-bold font-serif text-[#fff]`}>
            DiscoverYour Dream Home
          </Text>
          <View
            style={tw`absolute bottom-10 flex-1 w-full px-5 flex flex-row justify-between items-center gap-2`}
          >
            <TouchableOpacity
              onPress={() => handleLogin("Login")}
              style={tw`justify-center items-center  w-1/2 h-[50px] border border-[#fff] rounded-lg text-[#000] font-bold font-serif text-[#fff]`}
            >
              <Text
                style={tw`text-base text-[#000] font-bold font-serif text-[#fff]`}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLogin("Register")}
              style={tw` bg-[#fff] w-1/2 h-[50px] justify-center items-center border border-[#fff] rounded-lg text-[#000] font-bold font-serif text-[#fff]`}
            >
              <Text style={tw`text-base text-[#000] font-bold font-serif`}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeAuth;

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
