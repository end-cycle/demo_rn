import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://media.w3.org/2010/05/sintel/trailer.mp4' }}
        style={styles.videoPlayer}
        controls={true}
        paused={false}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: 300,
  },
});

export default VideoScreen;
