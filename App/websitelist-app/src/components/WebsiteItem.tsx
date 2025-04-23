import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Website } from './types/types';

interface WebsiteItemProps {
  website: Website;
  onPress: () => void;
}

const WebsiteItem: React.FC<WebsiteItemProps> = ({ website, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{website.title}</Text>
      <Text style={styles.url}>{website.url}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  url: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default WebsiteItem;