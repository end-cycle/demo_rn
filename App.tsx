import React, { useEffect, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/tabs/HomeScreen';
import VideoScreen from './src/screens/tabs/VideoScreen';
import ProfileScreen from './src/screens/tabs/ProfileScreen';
import BottomTab from './src/components/BottomTab';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';



function App(): JSX.Element {

  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);


  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    console.log('nowTab', tab)
    setActiveTab(tab);
  };

  let content;

  if (activeTab === 'Home') {
    content = <HomeScreen />;
  } else if (activeTab === 'Video') {
    content = <VideoScreen />;
  } else if (activeTab === 'Profile') {
    content = <ProfileScreen />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showSplash ? <SplashScreen /> : <View>
        <View style={styles.content}>
          {content}
        </View>
        <BottomTab activeTab={activeTab} onTabPress={handleTabPress} />
      </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    height: '92%'
  }
});

export default App;