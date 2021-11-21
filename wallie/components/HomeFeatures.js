import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { FONTS, SIZES } from "../constants";
import { featuresData } from "../data/dummy";

const HomeFeaturesItem = ({ item }) => (
  <TouchableOpacity
    style={{
      alignItems: "center",
      margin: SIZES.padding,
    }}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: item.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
      }}
    >
      <Image
        source={item.icon}
        resizeMode="contain"
        style={{
          height: 20,
          width: 20,
          tintColor: item.color,
        }}
      />
    </View>
    <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body5 }}>
      {item.description}
    </Text>
  </TouchableOpacity>
);

const HomeFeatures = () => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <FlatList
        data={featuresData}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <HomeFeaturesItem item={item} />}
      />
    </View>
  );
};

export default HomeFeatures;