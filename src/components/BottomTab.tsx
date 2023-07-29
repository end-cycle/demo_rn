// BottomTab.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomTab = ({ activeTab, onTabPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={activeTab === 'Home' ? styles.activeTab : styles.tab}
        onPress={() => onTabPress('Home')}
      >
        <Text style={styles.tabText}>首页</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={activeTab === 'Video' ? styles.activeTab : styles.tab}
        onPress={() => onTabPress('Video')}
      >
        <Text style={styles.tabText}>视频页</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={activeTab === 'Profile' ? styles.activeTab : styles.tab}
        onPress={() => onTabPress('Profile')}
      >
        <Text style={styles.tabText}>我的页面</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black'
  },
});

export default BottomTab;
