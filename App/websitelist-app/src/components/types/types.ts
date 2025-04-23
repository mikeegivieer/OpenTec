export type Website = {
    id: number;
    title: string;
    url: string;
  };
  
  export type RootStackParamList = {
    Home: undefined;
    WebView: { url: string; title: string };
  };