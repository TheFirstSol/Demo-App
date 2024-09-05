// Header.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icons } from '../Constants/images';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Icons.Bag width={28} height={28} />
      <View style={styles.headerRight}>
        <Icons.Search width={20} height={20} />
        <Icons.Menu width={22} height={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
  },
  headerRight: {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
