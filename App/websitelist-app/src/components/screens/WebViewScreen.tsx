import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native';

const WebViewScreen = ({ route, navigation }: any) => {
  const { url, title } = route.params;

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: url }} 
        style={styles.webview}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Volver al listado"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
  },
});

export default WebViewScreen;