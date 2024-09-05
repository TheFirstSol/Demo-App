import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import Header from './src/Components/Header';
import { APP_TEXT } from './src/Constants/texts';
import Home from './src/Screens/Home';

export default function App() {
  const initialLayout = {width: 0, height: 0};
  const [index, setIndex] = useState<number>(0);
  const [isDisplay, setIsDisplay] = useState<boolean>(true);

  const [routes] = useState<Route[]>([
    {key: 'home', title: APP_TEXT.tabTitles.home},
    {key: 'allposts', title: APP_TEXT.tabTitles.allposts},
    {key: 'groups', title: APP_TEXT.tabTitles.groups},
  ]);

  const renderScene = ({route}: SceneRendererProps & {route: Route}) => {
    switch (route.key) {
      case 'home':
        return <Home />;
      case 'allposts':
        return <Home />;
      case 'groups':
        return <Home />;
      default:
        return null;
    }
  };

  const searchBarHandler = () => {
    setIsDisplay(prev => !prev);
  };

  const handleShowSearch = () => {
    if (index > 1) {
      return;
    } else {
      searchBarHandler();
    }
  };

  useEffect(() => {
    handleShowSearch();
  }, [index]);

  const renderTabBar = (
    props: SceneRendererProps & {navigationState: NavigationState<Route>},
  ) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'black'}}
      style={styles.tabBar}
      labelStyle={styles.tabLabel}
      tabStyle={styles.tab}
      renderLabel={({route, focused}) => (
        <Text style={[styles.tabLabel, {color: focused ? 'black' : 'grey'}]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header />
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={styles.tabView}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 0,
  },
});
