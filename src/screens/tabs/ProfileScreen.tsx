import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const userProfile = {
    name: 'yaolongfei',
    age: 22,
    email: '2991205548@qq.com',
    bio: 'Hello, I am  LongFei Yao. Nice to meet you!',
    profileImage: require('../../assets/avatar.jpg'), 
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={userProfile.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{userProfile.name}</Text>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Age:</Text>
          <Text style={styles.detailValue}>{userProfile.age}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>{userProfile.email}</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{userProfile.bio}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDetails: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    width: 80,
  },
  detailValue: {
    flex: 1,
  },
  bioContainer: {
    marginBottom: 20,
  },
  bioText: {
    fontSize: 16,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;
