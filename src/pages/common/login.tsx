import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { List, InputItem, Button, Toast } from '@ant-design/react-native';
import { inject, observer } from 'mobx-react';
import api from '@/services/api';

export interface IStates {
  account: string,
  password: string,
}

@inject("appStore")
@observer
class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);

    this.state = {
      account: '',
      password: '',
    };
  }

  // 登录
  handleLogin = async () => {

    const { navigation, appStore } = this.props;
    const { account, password } = this.state;
    if (!account && !password) {
      return Toast.fail('账号或密码不能为空！');
    }
    let res: any = await api.login(Object.assign({ login: account.replace(/\s/g, ""), password }));
    if (res.errcode === 0) {
      await G_LOCALSTORAGE_SET('_TOKEN', res.data?.accessToken);
      await appStore.handleSetCurrentUserInfo(res.data);
      Toast.success('登录成功！', 1);

      navigation.goBack();
    }
  }

  render() {

    const { account, password } = this.state;

    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>登录</Text>
        <View style={styles.loginInputPanel}>
          <List>
            <InputItem
              type="phone"
              value={account}
              clear
              error={!account}
              placeholder="请输入登录账号"
              onChange={(value: any) => { this.setState({ account: value }); }}
            >
              账号
            </InputItem>

            <InputItem
              type="password"
              value={password}
              clear
              error={!password}
              maxLength={20}
              placeholder="请输入密码"
              onChange={(value: any) => { this.setState({ password: value }); }}
            >
              密码
            </InputItem>
          </List>
        </View>
        <Button type="warning" style={styles.loginBtn} onPress={this.handleLogin}>登录</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 100
  },
  loginInputPanel: {
    width: '100%'
  },
  loginBtn: {
    width: '100%',
    marginTop: '10%'
  }
});

export default Home;
