import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { Website } from "../types/types";
import WebsiteItem from "../WebsiteItem";

const HomeScreen = ({ navigation }: any) => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const response = await fetch("http://10.0.2.2:5053/api/websites");

        const mockData: Website[] = [
          { id: 1, title: "OpenTec", url: "https://www.opentec.com" },
          { id: 2, title: "Google", url: "https://www.google.com.mx" },
          { id: 3, title: "Wikipedia", url: "https://www.wikipedia.org" },
        ];
        if (!response.ok) {
          throw new Error("Error al cargar los sitios web");
        }
        const data = await response.json();

        setWebsites(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);
  const handleWebsitePress = (website: Website) => {
    console.log("Navegando a:", website.url); 
    navigation.navigate("WebView", {
      url: website.url.includes("://") ? website.url : `https://${website.url}`,
      title: website.title,
    });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {websites.map((website) => (
        <WebsiteItem
          key={website.id}
          website={website}
          onPress={() => handleWebsitePress(website)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 18,
  },
});

export default HomeScreen;
