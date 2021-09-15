import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Requirements from "../components/Requirements";
import RequirementsBar from "../components/RequirementsBar";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const PlantDetail = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            source={images.bannerBg}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 250,
            }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 20,
            left: SIZES.padding,
            right: SIZES.padding,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => console.log("Focus on pressed")}
            >
              <Image
                source={icons.focus}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: "5%",
              height: 130,
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: COLORS.white, ...FONTS.longTitle }}
              numberOfLines={2}
            >
              Glory Mantas
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: -40,
            backgroundColor: COLORS.lightGray,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingVertical: SIZES.padding,
          }}
        >
          <Text
            style={{
              paddingHorizontal: SIZES.padding,
              color: COLORS.secondary,
              ...FONTS.h2,
            }}
          >
            Requirements
          </Text>

          <RequirementsBar />
          <Requirements />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: SIZES.padding * 2,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log("Take Action")}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                Take Action
              </Text>
              <Image
                source={icons.chevron}
                resizeMode="contain"
                style={{
                  marginLeft: SIZES.padding,
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: SIZES.padding,
              }}
            >
              <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h4 }}>
                Almost 2 weeks of growing time
              </Text>
              <Image
                source={icons.downArrow}
                resizeMode="contain"
                style={{
                  tintColor: COLORS.secondary,
                  marginLeft: SIZES.base,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});