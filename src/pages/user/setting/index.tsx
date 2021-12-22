import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button, List, Modal } from '@ant-design/react-native';

const Home = (props: any) => {
  const list = [
    {
      title: '关于',
    }, {
      title: '清除缓存'
    }
  ];

  const handleLogout = () => {

    Modal.alert('退出登录', '确认退出登录？', [{
      text: '取消',
      style: 'cancel',
      onPress: () => console.log('cancel')
    }, {
      text: '确定',
      style: 'ok',
      onPress: async () => {
        await G_LOCALSTORAGE_CLEAR();
        const { navigate } = props.navigation;
        navigate('Login');
      }
    }
    ]);
  };

  return (
    <View style={styles.settingContainer}>
      <List>
        {
          list.map((item: any, index: number) => {
            return <List.Item key={index}>{item.title}</List.Item>;
          })
        }
      </List>
      <Button type="warning" style={styles.logout} onPress={handleLogout}>退出登录</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    minHeight: '100%',
  },
  logout: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
});

export default Home;
