import React from "react";
import { Text, View, useColorScheme } from "react-native";
import colors from "tailwindcss/colors";
import { HeartIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, BookmarkIcon } from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import { UserIcon } from "react-native-heroicons/solid";

function PostActions() {
  const colorScheme = useColorScheme();
  const strokeColor = colorScheme === "dark" ? colors.white : colors.black;

  return (
    <View className="flex-row justify-between">
      <View className="flex-row space-x-3">
        <HeartIcon size={24} stroke={strokeColor} strokeWidth={2} />
        <ChatBubbleOvalLeftIcon size={24} stroke={strokeColor} strokeWidth={2} />
        <PaperAirplaneIcon size={24} stroke={strokeColor} strokeWidth={2} />
      </View>
      <BookmarkIcon size={24} stroke={strokeColor} strokeWidth={2} />
    </View>
  );
}

function PostLikes() {
  return (
    <View>
      <Text className="font-bold dark:text-white">21,776 likes</Text>
    </View>
  );
}

function Avatar() {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[colors.pink[500], colors.red[500], colors.yellow[500]]}
      className="h-7 w-7 rounded-full p-[2px] overflow-hidden"
    >
      <View className="h-full w-full border border-white dark:border-black bg-gray-300 rounded-full items-center justify-center">
        <UserIcon size={20} fill={colors.gray[200]} />
      </View>
    </LinearGradient>
  );
}

export default function PostView(props: { location: string; caption: string; user: { username: string } }) {
  return (
    <View className="mb-2 space-y-2">
      <View className="flex-row justify-between items-center px-5">
        <View className="flex-row items-center space-x-1 mt-3">
          <Avatar />
          <View className="leading-none">
            <Text className="text-xs font-bold dark:text-white">{props.user.username}</Text>
            <Text className="text-xs dark:text-white">{props.location}</Text>
          </View>
        </View>
        <Text className="font-extrabold dark:text-white">...</Text>
      </View>
      <View className="relative w-full min-h-[300px]">
        <View className="absolute bg-gray-300 dark:bg-gray-900 w-full h-full"></View>
      </View>
      <View className="px-5 pt-2 flex-col space-y-2">
        <View>
          <PostActions />
        </View>
        <View>
          <PostLikes />
        </View>
        <Text className="text-xs dark:text-white" numberOfLines={2}>
          <Text className="font-bold">{props.user.username} </Text>
          <Text>{props.caption}</Text>
        </Text>
        <Text className="text-xs dark:text-white opacity-40">3 days ago</Text>
      </View>
    </View>
  );
}
