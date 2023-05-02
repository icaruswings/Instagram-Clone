import React from "react";
import { Text, View } from "react-native";
import { FilmIcon, MagnifyingGlassIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import { HomeIcon } from "react-native-heroicons/solid";
import colors from "tailwindcss/colors";

export default function FooterView() {
  return (
    <View className="w-full py-3 flex-row justify-evenly items-center border-t border-gray-100">
      <View>
        <HomeIcon size={28} fill={colors.black} strokeWidth={2} />
      </View>
      <View>
        <MagnifyingGlassIcon size={28} stroke={colors.black} strokeWidth={2} />
      </View>
      <View>
        <PlusCircleIcon size={28} stroke={colors.black} strokeWidth={2} />
      </View>
      <View>
        <FilmIcon size={28} stroke={colors.black} strokeWidth={2} />
      </View>
      <View>
        <Text>Profile</Text>
      </View>
    </View>
  );
}
