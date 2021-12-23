import React, { Component } from "react";
import { View, ScrollView, Image, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native';
import { Text } from '@/components/reactNative';
import { Flex, List } from '@ant-design/react-native';
import { inject, observer } from 'mobx-react';
import AddressIcon from '../../assets/icon/address.png';
import OrderIcon from '../../assets/icon/order.png';
import SettingIcon from '../../assets/icon/setting.png';
import api from "@/services/api";

export interface IStates {
  isRefreshing: boolean,
  list: Array<any>,
}

@inject("appStore")
@observer

class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);


    this.state = {
      isRefreshing: false,
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
    const { appStore } = this.props;

    let res: any = await api.getUser();
    if (res.errcode === 0) {
      await appStore.handleSetCurrentUserInfo(res.data);
    }
  }

  // 跳转
  handleJump = (url: string) => {
    const { navigation } = this.props;
    navigation.navigate(url);
  }

  handleLinkUser = () => {
    const { appStore, navigation } = this.props;
    if (appStore.currentUserInfo) {
      navigation.navigate('UserInfoDetail');
    } else {
      navigation.navigate('Login');
    }
  }

  render() {

    let { currentUserInfo } = this.props.appStore;

    const { list, isRefreshing } = this.state;

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
              <TouchableOpacity onPress={this.handleLinkUser}>
                {
                  currentUserInfo ? (
                    currentUserInfo.avatar ?
                      <Image style={styles.avatar} source={{ uri: currentUserInfo?.avatar }} /> :
                      <View style={styles.noAvatar}>
                        <Text style={styles.noAvatarText}>
                          {currentUserInfo.name ? currentUserInfo.name.substr(currentUserInfo.name.length - 2) : '佚名'}
                        </Text>
                      </View>
                  ) :
                    <View style={styles.noAvatar}>
                      <Text style={styles.unLoginText}>点击登录</Text>
                    </View>
                }
              </TouchableOpacity>
            </Flex.Item>
            <Flex.Item><Text>{currentUserInfo?.name || '未登录'}</Text></Flex.Item>
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
  unLoginText: {
    width: '100%',
    height: '100%',
    lineHeight: 100,
    textAlign: 'center',
    fontSize: 20,
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
