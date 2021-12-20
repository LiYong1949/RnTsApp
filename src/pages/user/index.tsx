import React, { Component } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Flex, List, ImagePicker } from '@ant-design/react-native';
import AddressIcon from '../../assets/icon/address.png';
import OrderIcon from '../../assets/icon/order.png';
import SettingIcon from '../../assets/icon/setting.png';

export interface IStates {
  userInfo: any,
  list: Array<any>,
}

class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      userInfo: null,
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

  handleJump = (url: string) => {
    const { navigate } = this.props.navigation;
    navigate(url);
  }

  render() {

    const { userInfo, list } = this.state;

    return (
      <ScrollView>
        <View>
          <Flex>
            <Flex.Item><ImagePicker files={userInfo?.avatar} /></Flex.Item>
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
  listIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  }
});

export default Home;
