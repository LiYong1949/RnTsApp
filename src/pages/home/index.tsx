import React, { Component } from "react";
import { View } from 'react-native';
import { Text } from '@/components/reactNative';

export interface IStates {

}

class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);


    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text>首页</Text>
      </View>
    );
  }

}

export default Home;
