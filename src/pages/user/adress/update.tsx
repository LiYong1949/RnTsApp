import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { List, InputItem, Button, Switch, Picker } from '@ant-design/react-native';
import NavBar from '@/components/navbar';
import { Text } from '@/components/reactNative';

const initAddress = {
  name: '',
  phone: '',
  addressValue: [],
  addressLabel: '',
  addressDetail: '',
  tag: '',
  isDefault: false,
};


const regionDatas = require('@/config/region');

export interface IStates {
  address: any,
  tags: Array<any>
}

class Home extends Component<any, IStates> {
  constructor(props: any) {
    super(props);

    const { route } = props;

    this.state = {
      address: { ...initAddress, ...route.params.address },
      tags: [
        { name: '家', selected: false },
        { name: '公司', selected: false },
        { name: '学校', selected: false }
      ]
    };
  }

  // 保存
  handleSubmit = () => {

    const { navigation } = this.props;
    navigation.goBack();
  }

  onRegionChange = (value: any) => {

    const { address } = this.state;
    let province = regionDatas.find((s: any) => s.value === value[0]);
    let city = province.children.find((s: any) => s.value === value[1]);
    let area = city.children.find((s: any) => s.value === value[2]);
    let addressLabel = province.label + city.label + area.label;
    console.log(value);

    this.setState({ address: { ...address, addressValue: value, addressLabel } });
  }

  handleDeleteAddress = () => {
    console.log('删除');

  }

  handelGoBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  handleDelete = () => {
    console.log('删除');

  }


  render() {

    const { address } = this.state;

    return (
      <View style={{ height: '100%' }}>
        <NavBar title="编辑收货地址" onLeft={this.handelGoBack.bind(this)} right={<Text>删除</Text>} onRight={this.handleDelete.bind(this)} />
        <View>
          <List>
            <InputItem
              value={address.name}
              maxLength={10}
              clear
              error={!address.name}
              placeholder="请输入收货人姓名"
              onChange={(value: any) => this.setState({ address: { ...address, name: value } })}
            >
              收货人
            </InputItem>

            <InputItem
              type="phone"
              value={address.phone}
              clear
              error={!address.phone}
              placeholder="请输入手机号"
              onChange={(value: any) => this.setState({ address: { ...address, phone: value } })}
            >
              手机号
            </InputItem>

            <Picker
              data={regionDatas}
              value={address.addressValue}
              cols={3}
              extra={address.addressLabel}
              onChange={this.onRegionChange}>
              <List.Item arrow="horizontal">
                请选择所在地区
              </List.Item>
            </Picker>

            <InputItem
              value={address.addressDetail}
              maxLength={100}
              numberOfLines={3}
              clear
              error={!address.addressDetail}
              placeholder="请输入详细地址"
              onChange={(value: any) => this.setState({ address: { ...address, addressDetail: value } })}
            >
              详细地址
            </InputItem>

            {/* <List.Item extra={
              <View style={{ display: 'flex' }}>
                {
                  tags.map((item: any, index: number) => {
                    return <View key={index} style={{ padding: 2, backgroundColor: 'red', flex: 1 }}>
                      <Text>{item.name}</Text>
                    </View>;
                  })
                }
              </View>
            }>
              标签
            </List.Item> */}

            <List.Item extra={
              <Switch
                checked={address.isDefault}
                onChange={(value: boolean) => this.setState({ address: { ...address, isDefault: value } })}
              />
            }>
              设置默认地址
            </List.Item>
          </List>
        </View>
        <Button style={styles.submit} type="warning" onPress={this.handleSubmit}>保存</Button>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  submit: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});

export default Home;
