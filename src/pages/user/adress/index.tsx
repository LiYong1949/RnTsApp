import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { List } from '@ant-design/react-native';
import { Text } from '@/components/reactNative';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export interface IStates {
  addressList: Array<any>
}

class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);

    this.state = {
      addressList: [
        {
          id: 1,
          name: '张三',
          phone: '135486854864',
          addressValue:[],
          addressLabel: '北京市西城区',
          addressDetail: '北京市西城区兴盛街2号',
          tag: '家',
          isDefault: true,
        },
        {
          id: 2,
          name: '张三',
          phone: '135486854864',
          addressValue:[],
          addressLabel: '北京市东城区',
          addressDetail: '北京市东城区朝阳门内大街288号1号楼',
          tag: '公司',
          isDefault: false,
        }
      ]
    };
  }

  handleUpdate = (address: any) => {
    const { navigation } = this.props;
    navigation.navigate('UpdateAddress', { address: address });
  }

  render() {

    const { addressList } = this.state;

    return (
      <View>
        <List>
          {
            addressList.map((item: any, index: number) => {
              return <List.Item key={index} extra={<TouchableOpacity onPress={this.handleUpdate.bind(this, item)}>
                <AntDesignIcons name="edit" size={20} />
              </TouchableOpacity>
              }>
                {
                  item.addressLabel && <List.Item.Brief style={styles.addressItemHeader}>
                    {item.isDefault && <View style={{ flex: 1, paddingRight: 10 }}><Text style={styles.addressDefault}>默认</Text></View>}
                    {item.tag && <View style={{ flex: 1, paddingRight: 10 }}><Text style={styles.addressTag}>{item.tag}</Text></View>}
                    <View style={{ flex: 5 }}><Text style={styles.address}>{item.addressLabel}</Text></View>
                  </List.Item.Brief>
                }
                <Text>{item.addressDetail}</Text>
                <List.Item.Brief style={styles.addressItemBottom}>
                  <View style={{ flex: 1, paddingRight: 10 }}><Text style={{ color: '#999999', fontSize: 12 }}>{item.name}</Text></View>
                  <View style={{ flex: 4 }}><Text style={{ color: '#999999', fontSize: 12 }}>{item.phone}</Text></View>
                </List.Item.Brief>
              </List.Item>;
            })
          }
        </List>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  addressItemHeader: {
    display: 'flex',
  },
  addressDefault: {
    color: 'white',
    backgroundColor: 'red',
    fontSize: 12,
    borderRadius: 3
  },
  addressTag: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 12,
    borderRadius: 3
  },
  address: {
    color: '#999999',
    fontSize: 12
  },
  addressItemBottom: {
    display: 'flex',
    color: '#333333'
  }
});

export default Home;
