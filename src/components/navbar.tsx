/**
 * 通用组件navbar
 */
import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export interface IProps {
  /** 状态栏 */
  statusBar?: ReactNode,
  /** 标题 */
  title: string,
  /** 左侧内容 */
  left?: ReactNode,
  /** 点击左侧 */
  onLeft?: () => void,
  /** 右侧内容 */
  right?: ReactNode,
  /** 点击右侧 */
  onRight?: () => void,
}


const Home: React.FC<IProps> = (props: any) => {
  const { statusBar, title, left, onLeft, right, onRight } = props;


  return (
    <View style={styles.navbarContainer}>
      <View>
        {statusBar !== false && (statusBar ? statusBar : <StatusBar />)}
      </View>
      <View style={styles.navbarPanel}>
        <TouchableOpacity style={styles.navbarLeft} onPress={left !== false && onLeft && onLeft()}>
          {left !== false && (left ? left : <AntDesignIcons name='left' />)}
        </TouchableOpacity>
        <Text style={styles.navbarCenter}>{title}</Text>
        <TouchableOpacity style={styles.navbarRight} onPress={right && onRight && onRight()}>
          {right}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  navbarPanel: {
    display: 'flex'
  },
  navbarLeft: {
    flex: 1,
  },
  navbarCenter: {
    flex: 3,
    textAlign: 'center'
  },
  navbarRight: {
    flex: 1
  }
});

export default Home;
