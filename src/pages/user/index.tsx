import React, { Component } from "react";
import { View, ScrollView, Image, StyleSheet, RefreshControl } from 'react-native';
import { Text } from '@/components/reactNative';
import { Flex, List } from '@ant-design/react-native';
import { inject, observer } from 'mobx-react';
import AddressIcon from '../../assets/icon/address.png';
import OrderIcon from '../../assets/icon/order.png';
import SettingIcon from '../../assets/icon/setting.png';
import api from "@/services/api";

export interface IStates {
  isRefreshing: boolean,
  userInfo: any,
  list: Array<any>,
}

@inject("appStore")
@observer

class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);

    const { appStore } = this.props;

    this.state = {
      isRefreshing: false,
      userInfo: appStore.currentUserInfo,
      list: [
        {
          title: '地址管理',
          url: 'AddressManager',
          icon: AddressIcon,
        },
        {
          title: '我的订单',
          url: 'Order',
          icon: OrderIcon,
        },
        {
          title: '设置',
          url: 'Setting',
          icon: SettingIcon,
        },
      ],
    };
  }

  // 下拉刷新
  handleRefresh = () => {
    this.setState({
      isRefreshing: true
    });
    setTimeout(() => {
      this.handleGetCurrentUserInfo();
      this.setState({ isRefreshing: false });
    }, 1000);
  }

  // 获取当前人员信息
  handleGetCurrentUserInfo = async () => {
    let userInfo = await G_LOCALSTORAGE_GET('_USER_INFO');

    if (!userInfo) {
      let res: any = await api.getUser();
      if (res.errcode === 0) {
        userInfo = res.data;

        await G_LOCALSTORAGE_SET('_USER_INFO', res.data);
      }
    }
    this.setState({ userInfo: userInfo });
  }

  // 跳转
  handleJump = (url: string) => {
    const { navigation } = this.props;
    navigation.navigate(url);
  }

  render() {

    const { userInfo, list, isRefreshing } = this.state;

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
          />
        }
      >
        <View style={styles.avatarPanel}>
          <Flex>
            <Flex.Item>
              {
                userInfo ? (
                  userInfo.avatar ?
                    <Image style={styles.avatar} source={{ uri: userInfo?.avatar }} /> :
                    <View style={styles.noAvatar}>
                      <Text style={styles.noAvatarText}>
                        {userInfo.name ? userInfo.name.substr(userInfo.name.length - 2) : '佚名'}
                      </Text>
                    </View>
                ) :
                  <View>
                    <Text style={styles.avatar}>点击登录</Text>
                  </View>
              }
            </Flex.Item>
            <Flex.Item><Text>{userInfo?.name || '未登录'}</Text></Flex.Item>
          </Flex>
        </View>

        <List>
          {
            list.map((item: any, index: number) => {
              return <List.Item
                key={index}
                thumb={<Image style={styles.listIcon} source={item.icon} />}
                arrow="horizontal"
                onPress={this.handleJump.bind(this, item.url)}
              >
                <Text>{item.title}</Text>
              </List.Item>;
            })
          }
        </List>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  avatarPanel: {
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  noAvatar: {
    width: 100,
    height: 100,
    backgroundColor: '#fde3cf',
    borderRadius: 50,
  },
  noAvatarText: {
    width: '100%',
    height: '100%',
    lineHeight: 100,
    textAlign: 'center',
    fontSize: 25,
    color: '#f56a00',
  },
  listIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    backgroundColor: 'white'
  }
});

export default Home;
