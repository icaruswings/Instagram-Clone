import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import StoriesView from "./StoriesView";
import PostView from "./PostView";

import POSTS from "../lib/data.json";

export default function PostsView() {
  const [refreshing, setRefreshing] = useState(false);

  function refresh() {
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);

    setRefreshing(true);
  }

  return (
    <FlatList
      ListHeaderComponent={<StoriesView />}
      data={[...POSTS]}
      renderItem={({ item, index }) => PostView({ ...item })}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
    />
  );
}
