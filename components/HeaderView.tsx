import React from "react";
import { View, useColorScheme } from "react-native";
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon } from "react-native-heroicons/outline";
import Instagram from "../assets/Instagram_Logo_2016.svg";
import colors from "tailwindcss/colors";

export default function HeaderView() {
  const colorScheme = useColorScheme();
  const strokeColor = colorScheme === "dark" ? colors.white : colors.black;

  return (
    <View className="w-full h-[56px] bg-white dark:bg-black px-5 flex-row items-center justify-between">
      <Instagram width={118} height={100} fill={strokeColor} />
      <View className="flex-row gap-3">
        <View>
          <HeartIcon size={28} stroke={strokeColor} strokeWidth={2} />
        </View>
        <View>
          <ChatBubbleOvalLeftEllipsisIcon size={28} stroke={strokeColor} strokeWidth={2} />
        </View>
      </View>
    </View>
  );
}
