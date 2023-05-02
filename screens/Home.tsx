import React from "react";
import { SafeAreaView, View } from "react-native";
import HeaderView from "../components/HeaderView";
import PostsView from "../components/PostsView";
import FooterView from "../components/FooterView";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white dark:bg-black items-center justify-start">
        <HeaderView />
        <PostsView />
        <FooterView />
      </View>
    </SafeAreaView>
  );
}
