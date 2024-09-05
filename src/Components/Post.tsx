// Post.tsx
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Icons } from '../Constants/images';
import { HOME_TEXT } from '../Constants/texts';

const Post: React.FC = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.profileContainer}>
          <Icons.Profile width={35} height={35} />
          <View style={styles.userInfo}>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>Volodymyr Boiarinov</Text>
              <Icons.Location width={20} height={20} />
              <Text style={styles.location}>in Portugal</Text>
            </View>
            <Text style={styles.timestamp}>{HOME_TEXT.timestamp}</Text>
          </View>
        </View>
        <Icons.IconLink width={20} height={20} />
      </View>
      <Text style={styles.title}>{HOME_TEXT.postTitle}</Text>
      <Text style={styles.content}>{HOME_TEXT.postContent}</Text>
      <View style={styles.imagesContainer}>
        <Icons.Photo style={styles.image} />
        <Icons.Photo style={styles.image} />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.threeImgContainer}>
          <View style={styles.round3ImagesContainer}>
            <Icons.Avatar2 style={styles.threeicons} width={30} height={30} />
            <Icons.Avatar3 style={styles.threeicons} width={30} height={30} />
            <Icons.Avatar4 style={styles.threeicons} width={30} height={30} />
          </View>
          <Text style={styles.footerText}>{HOME_TEXT.footerText}</Text>
        </View>
        <Text style={styles.footerText}>{HOME_TEXT.commentText}</Text>
      </View>
      <View style={styles.interactionBar}>
        <TouchableOpacity style={styles.interactionButton}>
          <Icons.Heart width={20} height={20} />
          <Text style={styles.interactionText}>{HOME_TEXT.likeText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Icons.Comment width={20} height={20} />
          <Text style={styles.interactionText}>{HOME_TEXT.commentText2}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Icons.Share width={20} height={20} />
          <Text style={styles.interactionText}>{HOME_TEXT.shareText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 12,
    marginVertical: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userInfo: {
    marginLeft: 10,
    flexShrink: 1, // Allow userInfo to shrink if needed
  },
  usernameContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    flexWrap: 'wrap', // Wrap text if it's too long
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
  },
  location: {
    fontSize: 14,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    lineHeight: 25,
  } ,
  content: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    lineHeight: 22,
  } ,
  imagesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  } ,
  image: {
    width: '48%',
    height: 150,
    borderRadius: 8,
  } ,
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  } ,
  footerText: {
    fontSize: 14,
    color: '#888',
  } ,
  interactionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  } ,
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  } ,
  interactionText: {
    fontSize: 14,
    color: 'black',
  } ,
  threeImgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  } ,

  round3ImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  } ,
  threeicons: {
    marginLeft: -10,
  } ,
});

export default Post;
