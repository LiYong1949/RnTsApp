/**
 * 通用组件navbar
 */
import React from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { Text } from '@/components/reactNative';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export interface IProps {
  /** 状态栏 */
  statusBar?: React.ReactNode,
  /** 标题 */
  title: string,
  /** 左侧内容 */
  left?: React.ReactNode,
  /** 点击左侧 */
  onLeft?: () => void,
  /** 右侧内容 */
  right?: React.ReactNode,
  /** 点击右侧 */
  onRight?: () => void,
}


const Home: React.FC<IProps> = (props: any) => {
  const { statusBar, title, left, onLeft, right, onRight } = props;

  // 点击左侧
  const handleClickLeft = () => {
    if (onLeft) {
      onLeft();
    }
  };

  // 点击右侧
  const handleClickRight = () => {
    if (onRight) {
      onRight();
    }
  };

  return (
    <View style={styles.navbarContainer}>
      <View>
        {statusBar !== false && (statusBar ? statusBar : <StatusBar />)}
      </View>
      <View style={styles.navbarPanel}>
        <TouchableOpacity style={styles.navbarLeft} onPress={handleClickLeft}>
          {left !== false && (left ? left : <AntDesignIcons name='left' size={25} />)}
        </TouchableOpacity>
        <Text style={styles.navbarCenter}>{title}</Text>
        <TouchableOpacity style={styles.navbarRight} onPress={handleClickRight}>
          {right}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
  },
  navbarPanel: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
  },
  navbarLeft: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  navbarCenter: {
    flex: 5,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 50
  },
  navbarRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
