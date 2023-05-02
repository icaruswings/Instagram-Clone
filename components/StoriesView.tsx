import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import colors from "tailwindcss/colors";
import { UserIcon } from "react-native-heroicons/solid";

function Story(props: { username: string }) {
  return (
    <View>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[colors.pink[500], colors.red[500], colors.yellow[500]]}
        className="h-16 w-16 rounded-full p-[2px] overflow-hidden"
      >
        <View className="h-full w-full border-2 border-white dark:border-black bg-gray-300 rounded-full items-center justify-center">
          <UserIcon size={54} fill={colors.gray[200]} />
        </View>
      </LinearGradient>
      <View className="w-full items-center">
        <Text className="text-xs w-14 truncate text-center">{props.username}</Text>
      </View>
    </View>
  );
}

export default function StoriesView() {
  return (
    <View className="bg-gray-100 dark:bg-black h-[100px] w-full">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        className="h-[100px] min-w-full flex flex-row space-x-5 pt-3"
      >
        {[...Array(20)].map((v, i) => (
          <View key={i}>{Story({ username: `User ${i + 1}` })}</View>
        ))}
      </ScrollView>
    </View>
  );
}
