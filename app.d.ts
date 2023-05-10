/// <reference types="nativewind/types" />

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "@env" {
  export const REACT_APP_SUPABASE_PROJECT_URL: string;
  export const REACT_APP_SUPABASE_PROJECT_PUBLIC_KEY: string;
}
