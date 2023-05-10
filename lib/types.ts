export interface Post {
  id: string;
  username: string;
  profilePictureUrl: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  postedAt: string;
  location: Location;
}

export interface Comment {
  id: string;
  username: string;
  text: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

export type InstagramData = Post[];
