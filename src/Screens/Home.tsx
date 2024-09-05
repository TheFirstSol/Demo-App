import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Input from '../Components/Input';
import Post from '../Components/Post';

const Home: React.FC = () => {
  const pagerViewRef = useRef<PagerView>(null);

  return (
    <SafeAreaView style={styles.container}>
      <PagerView ref={pagerViewRef} style={styles.pagerView} initialPage={0}>
        <View key="1" style={styles.page}>
          <Input />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Post />
            <Post />
          </ScrollView>
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
  } ,
});

export default Home;
