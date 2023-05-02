import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import StoriesView from "./StoriesView";
import PostView from "./PostView";

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
      data={[...new Array(50)]}
      renderItem={({ item, index }) =>
        PostView({
          caption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula dictum nibh. Quisque a eros at lectus posuere pharetra. Cras blandit egestas diam in aliquet. Curabitur sodales euismod sapien eu lobortis. Sed vitae sem at nunc interdum faucibus. Vivamus semper neque nec congue luctus. Ut porttitor eu nisi condimentum commodo. Nullam fermentum lectus ipsum, eget pharetra turpis accumsan sed. Integer aliquam sit amet erat ut commodo. Aliquam sed sem quam. Pellentesque vestibulum felis at scelerisque condimentum. Proin tempor ultricies lorem quis mollis.`,
          location: "Melbourne, Australia",
          user: { username: "icaruswings138" },
        })
      }
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
    />
  );
}
